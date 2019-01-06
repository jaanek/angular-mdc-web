import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormBuilder, NgForm, Validators } from '@angular/forms';

import { ErrorStateMatcher } from '@angular-mdc/web';
import { ComponentViewer, ComponentView } from '../../shared/component-viewer';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}

@Component({ template: '<component-viewer></component-viewer>' })
export class SelectDemo implements OnInit {
  @ViewChild(ComponentViewer) _componentViewer: ComponentViewer;

  ngOnInit(): void {
    this._componentViewer.componentView = new ComponentView(
      'Select Menus',
      `MDC Select provides Material Design single-option select menus. It supports using the browser's native <select> element, or a MDC Menu. It is fully accessible, and fully RTL-aware.`,
      "import { MdcSelectModule } from '@angular-mdc/web';");

    this._componentViewer.componentView.references = [{
      name: 'Material Design guidelines: Menus',
      url: 'https://material.io/guidelines/components/menus.html'
    }, {
      name: 'Material Components Web',
      url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-select/README.md'
    }];
  }
}

@Component({ templateUrl: './api.html' })
export class Api { }

@Component({ templateUrl: './sass.html' })
export class Sass { }

@Component({ templateUrl: './examples.html' })
export class Examples {
  matcher = new MyErrorStateMatcher();

  // foodControl = new FormControl('fruit-3');
  foodControl = new FormControl();

  foodForm = new FormGroup({
    favoriteFood: new FormControl(null, [Validators.required])
  });

  public formOne: FormGroup;
  public fruits: object[] = [
    {
      id: 1,
      name: 'Pineapple',
      tasty: true
    },
    {
      id: 2,
      name: 'Watermelon',
      tasty: false
    }
  ];

  foods = [
    { value: '', disabled: false },
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
    { value: 'fruit-3', viewValue: 'Fruit' },
  ];

  compareFn(f1: any, f2: any): boolean {
    return f1 && f2 ? f1.id === f2.id : f1 === f2;
  }

  constructor(private fb: FormBuilder) {
    this.formOne = this.fb.group({
      fruit: [undefined]
    });

    this.foodControl.setValue('fruit-3');
  }

  submitForm() {
    console.log(this.foodForm);
    if (this.foodForm.invalid) {
      return;
    }
  }

  resetForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.foodForm.reset();
  }

  onChange(event: { index: number, value: any }) {
    console.log(`onChange: ${event.index}`);
  }

  onSelectionChange(event: { index: any, value: any }) {
    // console.log(`onSelectionChange: ${event.index} ${event.value}`);
  }

  onSelectionChangeFruit(event: { index: any, value: any }) {
    // console.log(`onSelectionChangeFruit: ${event.index} ${event.value}`);
  }

  //
  // Examples
  //

  exampleEnhanced = {
    html: `<mdc-select #enhanced placeholder="Fruit" [helperText]="enhancedHelper" required>
  <mdc-menu>
    <mdc-list>
      <mdc-list-item selected></mdc-list-item>
      <mdc-list-item value="apple">Apple</mdc-list-item>
      <mdc-list-item value="orange">Orange</mdc-list-item>
      <mdc-list-item value="banana">Banana</mdc-list-item>
    </mdc-list>
  </mdc-menu>
</mdc-select>
<mdc-helper-text #enhancedHelper validation>Field is required</mdc-helper-text>

<p> Value: {{ enhanced.value }}</p>
<p> Index: {{ enhanced.getSelectedIndex() }}</p>`
  };

  exampleSimpleNative = {
    html: `<mdc-select>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
</mdc-select>

<mdc-select placeholder="Unit">
  <option value="kg">kg</option>
  <option value="ml">ml</option>
</mdc-select>`
  };

  exampleNativeSelect = {
    html: `<mdc-select #meal [helperText]="mealHelper" required placeholder="Pick a Meal" autosize>
  <mdc-icon mdcSelectIcon>fastfood</mdc-icon>
  <option *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
    {{food.viewValue}}
  </option>
</mdc-select>
<mdc-helper-text #mealHelper validation>
  <span *ngIf="!meal.value">Meal selection is required</span>
</mdc-helper-text>`,
    ts: `foods = [
  { value: '', disabled: false },
  { value: 'steak-0', viewValue: 'Steak' },
  { value: 'pizza-1', viewValue: 'Pizza' },
  { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
  { value: 'fruit-3', viewValue: 'Fruit' },
];`
  };

  exampleCustomEnhanced = {
    html: `<mdc-select placeholder="Standard" class="custom-select-shape-radius">
  <mdc-menu>
    <mdc-list>
      <mdc-list-item *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
        {{food.viewValue}}
      </mdc-list-item>
    </mdc-list>
  </mdc-menu>
</mdc-select>

<mdc-select placeholder="Standard" outlined class="custom-select-outline-shape-radius">
  <mdc-menu>
    <mdc-list>
      <mdc-list-item *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
        {{food.viewValue}}
      </mdc-list-item>
    </mdc-list>
  </mdc-menu>
</mdc-select>

<mdc-select placeholder="Standard" outlined class="custom-select-outline-color">
  <mdc-menu>
    <mdc-list>
      <mdc-list-item *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
        {{food.viewValue}}
      </mdc-list-item>
    </mdc-list>
  </mdc-menu>
</mdc-select>`,
    sass: `.custom-select-shape-radius {
  @include mdc-select-shape-radius(50%);
}

.custom-select-outline-shape-radius {
  @include mdc-select-outline-shape-radius(50%);
}

.custom-select-outline-color {
  @include mdc-select-outline-color(green);
}`
  };

  exampleNgModel = {
    html: `<form #demoForm="ngForm">
  <mdc-select #select placeholder="Favorite food" ngModel #demoNgModel="ngModel" name="food" outlined
    (change)="onChange($event)" (selectionChange)="onSelectionChange($event)">
    <option *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
      {{food.viewValue}}
    </option>
  </mdc-select>
</form>

<p>Value: {{ demoNgModel.value }}</p>
<p>Index: {{ select.getSelectedIndex() }}</p>
<p>Touched: {{ demoForm.touched }}</p>
<p>Dirty: {{ demoForm.dirty }}</p>`,
    ts: `foods = [
  { value: '', disabled: false },
  { value: 'steak-0', viewValue: 'Steak' },
  { value: 'pizza-1', viewValue: 'Pizza' },
  { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
  { value: 'fruit-3', viewValue: 'Fruit' },
];

onChange(event: { index: number, value: any }) {
  console.log(event.index);
}

onSelectionChange(event: { index: any, value: any }) {
  console.log(event.index);
}`
  };

  exampleReactive = {
    html: `<form [formGroup]="foodForm" id="foodForm" (ngSubmit)="submitForm()" #formDirective="ngForm">
  <mdc-select #favoriteFood placeholder="Favorite food" formControlName="favoriteFood" [helperText]="reactiveHelper">
    <option *ngFor="let food of foods" [value]="food.value" [disabled]="food.disabled">
      {{food.viewValue}}
    </option>
  </mdc-select>
  <mdc-helper-text #reactiveHelper validation>
    <span *ngIf="foodForm.controls['favoriteFood'].hasError('required')">Selection is required</span>
  </mdc-helper-text>

  <button mdc-button>Submit</button>
  <button mdc-button type="button" (click)="resetForm(formDirective)">Reset</button>
</form>

<p>Control Valid: {{foodForm.controls['favoriteFood'].valid}}</p>
<p>Dirty: {{ foodForm.dirty }}</p>
<p>Valid: {{ foodForm.valid }}</p>
<p>Pristine: {{ foodForm.pristine }}</p>
<p>Touched: {{ foodForm.touched }}</p>
<p>Value: {{ foodForm.value | json }}</p>`,
    ts: `foods = [
  { value: '', disabled: false },
  { value: 'steak-0', viewValue: 'Steak' },
  { value: 'pizza-1', viewValue: 'Pizza' },
  { value: 'tacos-2', viewValue: 'Tacos is disabled', disabled: true },
  { value: 'fruit-3', viewValue: 'Fruit' },
];

foodForm = new FormGroup({
  favoriteFood: new FormControl(null, [Validators.required])
});

submitForm() {
  if (this.foodForm.invalid) {
    return;
  }
}

resetForm(formDirective: FormGroupDirective) {
  formDirective.resetForm();
  this.foodForm.reset();
}`
  };
}
