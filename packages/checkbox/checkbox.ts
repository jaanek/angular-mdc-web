import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnDestroy,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Platform, supportsPassiveEventListeners} from '@angular/cdk/platform';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil, filter} from 'rxjs/operators';

import {matches} from '@angular-mdc/web/dom';
import {MDCRippleFoundation, MDCRippleAdapter} from '@material/ripple';
import {MDCCheckboxFoundation, MDCCheckboxAdapter} from '@material/checkbox';

import {MDCComponent} from '@angular-mdc/web/base';
import {MdcRipple, MDCRippleCapableSurface} from '@angular-mdc/web/ripple';
import {MdcFormField, MdcFormFieldControl} from '@angular-mdc/web/form-field';

let nextUniqueId = 0;

/** Change event object emitted by MdcCheckbox. */
export class MdcCheckboxChange {
  constructor(
    /** The source MdcCheckbox of the event. */
    public source: MdcCheckbox,
    /** The new `checked` value of the checkbox. */
    public checked: boolean) {}
}

export interface MdcIndeterminateChange {
  source: MdcCheckbox;
  indeterminate: boolean;
}

export const MDC_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MdcCheckbox),
  multi: true
};

@Component({
  selector: 'mdc-checkbox',
  exportAs: 'mdcCheckbox',
  host: {
    '[id]': 'id',
    'class': 'mdc-checkbox',
    '[class.mdc-checkbox--touch]': 'touch',
  },
  templateUrl: 'checkbox.html',
  providers: [
    MDC_CHECKBOX_CONTROL_VALUE_ACCESSOR,
    MdcRipple,
    {provide: MdcFormFieldControl, useExisting: MdcCheckbox}
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdcCheckbox extends MDCComponent<MDCCheckboxFoundation> implements AfterViewInit, ControlValueAccessor,
  OnDestroy, MdcFormFieldControl<any>, MDCRippleCapableSurface {
  /** Emits whenever the component is destroyed. */
  private _destroy = new Subject<void>();

  _root!: Element;

  private _initialized: boolean = false;
  private _uniqueId: string = `mdc-checkbox-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;

  /** Returns the unique id for the visual hidden input. */
  get inputId(): string {
    return `${this.id || this._uniqueId}-input`;
  }

  @Input() name: string | null = null;

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    if (value !== this.checked) {
      this._checked = coerceBooleanProperty(value);
      this._changeDetectorRef.markForCheck();
    }
  }
  private _checked: boolean = false;

  @Input()
  get touch(): boolean {
    return this._touch;
  }
  set touch(value: boolean) {
    this._touch = coerceBooleanProperty(value);
  }
  private _touch: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this.setDisabledState(value);
  }
  private _disabled: boolean = false;

  /** The value attribute of the native input element */
  @Input() value: string | null = null;

  /**
   * Alternative state of the checkbox, not user set-able state. Between
   * [checked] and [indeterminate], only one can be true, though both can be
   * false.
   * `true` is INDETERMINATE and `false` is not.
   */
  @Input()
  get indeterminate(): boolean {
    return this._indeterminate;
  }
  set indeterminate(value: boolean) {
    if (this.disabled) {
      return;
    }

    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._indeterminate) {
      this._indeterminate = newValue;
      if (newValue) {
        this.checked = false;
      }
      this.indeterminateChange.emit({source: this, indeterminate: this._indeterminate});
      this._changeDetectorRef.markForCheck();
      this._foundation?.handleChange();
    }
  }
  private _indeterminate: boolean = false;

  /**
   * Determines the state to go into when [indeterminate] state is toggled.
   * `true` will go to checked and `false` will go to unchecked.
   */
  @Input()
  get indeterminateToChecked(): boolean {
    return this._indeterminateToChecked;
  }
  set indeterminateToChecked(value: boolean) {
    this._indeterminateToChecked = coerceBooleanProperty(value);
    this._changeDetectorRef.markForCheck();
  }
  private _indeterminateToChecked: boolean = true;

  /** Whether the ripple ink is disabled. */
  @Input()
  get disableRipple(): boolean {
    return this._disableRipple;
  }
  set disableRipple(value: boolean) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  private _disableRipple: boolean = false;

  @Input() tabIndex: number = 0;
  @Input('aria-label') ariaLabel: string = '';
  @Input('aria-labelledby') ariaLabelledby: string | null = null;

  /**
   * Fired when checkbox is checked or unchecked, but not when set
   * indeterminate. Sends the state of [checked].
   */
  @Output() readonly change: EventEmitter<MdcCheckboxChange> = new EventEmitter<MdcCheckboxChange>();

  /**
   * Fired when checkbox goes in and out of indeterminate state, but not when
   * set to checked. Sends the state of [indeterminate];
   */
  @Output() readonly indeterminateChange: EventEmitter<MdcIndeterminateChange>
    = new EventEmitter<MdcIndeterminateChange>();

  @ViewChild('input', {static: true}) _inputElement!: ElementRef<HTMLInputElement>;

  /** View to model callback called when value changes */
  _onChange: (value: any) => void = () => {};

  /** View to model callback called when component has been touched */
  _onTouched: () => any = () => {};

  getDefaultFoundation(): any {
    // Do not initialize foundation until ngAfterViewInit runs
    if (!this._initialized) {
      return undefined;
    }

    const adapter: MDCCheckboxAdapter = {
      addClass: (className: string) => this._root.classList.add(className),
      removeClass: (className: string) => this._root.classList.remove(className),
      setNativeControlAttr: (attr: string, value: string) =>
        this._inputElement.nativeElement.setAttribute(attr, value),
      removeNativeControlAttr: (attr: string) => this._inputElement.nativeElement.removeAttribute(attr),
      isIndeterminate: () => this.indeterminate,
      isChecked: () => this.checked,
      hasNativeControl: () => true,
      setNativeControlDisabled: (disabled: boolean) => this._inputElement.nativeElement.disabled = disabled,
      forceLayout: () => (<HTMLElement>this._root).offsetWidth,
      isAttachedToDOM: () => true
    };
    return new MDCCheckboxFoundation(adapter);
  }

  constructor(
    private _platform: Platform,
    private _ngZone: NgZone,
    private _changeDetectorRef: ChangeDetectorRef,
    public elementRef: ElementRef<HTMLElement>,
    public ripple: MdcRipple,
    @Optional() private _parentFormField: MdcFormField) {
    super(elementRef);

    this._root = this.elementRef.nativeElement;

    if (this._parentFormField) {
      _parentFormField.elementRef.nativeElement.classList.add('mdc-form-field');
    }
  }

  async _asyncBuildFoundation(): Promise<void> {
    this._foundation = this.getDefaultFoundation();
  }

  ngAfterViewInit(): void {
    this._initialized = true;

    this._asyncBuildFoundation()
      .then(() => {
        this._foundation.init();
        this.setDisabledState(this._inputElement.nativeElement.disabled);

        this.ripple = this._createRipple();
        this.ripple.init();
      });
    this._loadListeners();
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();

    this.ripple.destroy();
    this._foundation.destroy();
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  /** Focuses the checkbox. */
  focus(): void {
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }

  toggle(checked?: boolean): void {
    this._setState(checked);
  }

  _onInteraction(evt: Event): void {
    // We have to stop propagation for click events on the visual hidden input element.
    // Preventing bubbling for the second event will solve that issue.
    evt.stopPropagation();

    this._setState();

    this._onChange(this.checked);
    this._changeDetectorRef.markForCheck();
    this.change.emit(new MdcCheckboxChange(this, this.checked));
  }

  _onInputClick(evt: Event) {
    evt.stopPropagation();
  }

  setDisabledState(disabled: boolean): void {
    const newValue = coerceBooleanProperty(disabled);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._foundation?.setDisabled(newValue);
      this._changeDetectorRef.markForCheck();
    }
  }

  private _setState(checked?: boolean): void {
    if (this.disabled) {
      return;
    }

    if (this.indeterminate) {
      this._checked = this.indeterminateToChecked;
      this.indeterminate = false;
    } else {
      this.checked = checked || !this.checked;
    }

    // Reset native input when clicked with noop. The native checkbox becomes checked after
    // click, reset it to be align with `checked` value of `mdc-checkbox`.
    this._inputElement.nativeElement.checked = this.checked;

    this._ngZone.runOutsideAngular(() =>
      requestAnimationFrame(() => this._foundation.handleChange()));
  }

  private _createRipple(): MdcRipple {
    const adapter: MDCRippleAdapter = {
      ...MdcRipple.createAdapter(this),
      isSurfaceActive: () => matches(this._inputElement.nativeElement, ':active'),
      isUnbounded: () => true,
      isSurfaceDisabled: () => this.disableRipple,
      deregisterInteractionHandler: (evtType: any, handler: any) =>
        this._inputElement.nativeElement.removeEventListener(evtType, handler, supportsPassiveEventListeners()),
      registerInteractionHandler: (evtType: any, handler: any) =>
        this._inputElement.nativeElement.addEventListener(evtType, handler, supportsPassiveEventListeners()),
    };
    return new MdcRipple(this.elementRef, new MDCRippleFoundation(adapter));
  }

  private _loadListeners(): void {
    if (!this._platform.isBrowser) {
      return;
    }

    this._ngZone.runOutsideAngular(() =>
      fromEvent<AnimationEvent>(this._root, 'animationend')
        .pipe(takeUntil(this._destroy), filter((e: AnimationEvent) =>
          e.target === this._root))
        .subscribe(() =>
          this._ngZone.run(() => this._foundation.handleAnimationEnd())));
  }
}
