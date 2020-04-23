(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+cTP":function(e,o,t){"use strict";t.r(o),t.d(o,"DialogModule",(function(){return q}));var n=t("d2mR"),i=t("tyNb"),a=t("3Pt+"),l=t("d9jQ"),c=t("53lh"),d=t("leug"),r=t("fXoL"),s=t("5l+6"),m=t("OtPg"),u=t("9UYg"),b=t("w0pw"),g=t("LuDt"),p=t("mpsM"),f=t("dkiD"),h=t("MxWb"),D=t("M9Bb"),R=t("roy6"),w=t("o085"),Q=t("ofXK"),v=t("CBIf"),x=t("4G1d"),A=t("6D23");function C(e,o){if(1&e&&(r.Rb(0,"p"),r.wc(1),r.Qb()),2&e){const e=o.$implicit;r.Bb(1),r.xc(e)}}let y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:72,vars:0,consts:[[1,"demo-content"],[1,"demo-content__headline"],["mdcBody2",""],[1,"docs-markdown-code"],["highlight","@NgModule({\n  imports: [\n    // ...\n    MdcDialogModule\n  ],\n  declarations: [\n    AppComponent,\n    ExampleDialogComponent\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}"],["highlight","let dialogRef = dialog.open(UserProfileComponent, {\n  clickOutsideToClose: true,\n  escapeToClose: true,\n});"],["highlight","dialogRef.afterClosed().subscribe(result => {\n  console.log(`Dialog result: ${result}`);\n});\n\ndialogRef.close('Pizza!');"],["highlight","@Component({/* ... */})\nexport class YourDialog {\n  constructor(\n    dialogRef: MdcDialogRef<YourDialog>) { }\n\n  closeDialog() {\n    this.dialogRef.close('Pizza!');\n  }\n}"],["highlight",'<mdc-dialog-actions>\n  <button mdcDialogButton mdcDialogAction="close">Decline</button>\n  <button mdcDialogButton mdcDialogAction="accept" cdkFocusInitial>Accept</button>\n</mdc-dialog-actions>'],["mdc-button","","href","https://material.angular.io/cdk/a11y/overview#example","target","_blank","rel","noopener"],["highlight","let dialogRef = dialog.open(YourDialog, {\n  data: {name: this.name, animal: this.animal}\n});"],["highlight","import { Component, Inject } from '@angular/core';\nimport {\n  MdcDialogRef,\n  MDC_DIALOG_DATA\n} from '@angular-mdc/web/dialog';\n\n@Component({\n  // ...\n})\nexport class YourDialog {\n  constructor(\n    public dialogRef: MdcDialogRef<YourDialog>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) {\n    userName: string = data.name;\n  }\n}"]],template:function(e,o){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.wc(2,"Configuring Dialog via entryComponents"),r.Qb(),r.Rb(3,"p",2),r.wc(4,"Because "),r.Rb(5,"code",3),r.wc(6,"MdcDialog"),r.Qb(),r.wc(7," instantiates components at run-time, the Angular compiler needs extra information to create the necessary ComponentFactory for your dialog content component."),r.Qb(),r.Rb(8,"p",2),r.wc(9,"For any component loaded into a dialog, you must include your component class in the list of "),r.Rb(10,"code",3),r.wc(11,"entryComponents"),r.Qb(),r.wc(12," in your NgModule definition so that the Angular compiler knows to create the ComponentFactory."),r.Qb(),r.Rb(13,"pre"),r.Mb(14,"code",4),r.Qb(),r.Rb(15,"h3",1),r.wc(16,"Usage"),r.Qb(),r.wc(17," A dialog is opened by calling the "),r.Rb(18,"code",3),r.wc(19,"open"),r.Qb(),r.wc(20," method with a component to be loaded and an optional config object. The "),r.Rb(21,"code",3),r.wc(22,"open"),r.Qb(),r.wc(23," method will return an instance of "),r.Rb(24,"code",3),r.wc(25,"MdcDialogRef"),r.Qb(),r.wc(26,": "),r.Rb(27,"pre"),r.Mb(28,"code",5),r.Qb(),r.wc(29," The "),r.Rb(30,"code",3),r.wc(31,"MdcDialogRef"),r.Qb(),r.wc(32," provides a handle on the opened dialog. It can be used to close the dialog and to receive notification when the dialog has been closed. "),r.Rb(33,"pre"),r.Mb(34,"code",6),r.Qb(),r.Rb(35,"p"),r.wc(36,"Components created via "),r.Rb(37,"code",3),r.wc(38,"MdcDialog"),r.Qb(),r.wc(39," can inject "),r.Rb(40,"code",3),r.wc(41,"MdcDialogRef"),r.Qb(),r.wc(42," and use it to close the dialog in which they are contained. When closing, an optional result value can be provided. This result value is forwarded as the result of the "),r.Rb(43,"code",3),r.wc(44,"afterClosed"),r.Qb(),r.wc(45," promise."),r.Qb(),r.Rb(46,"pre"),r.Mb(47,"code",7),r.Qb(),r.Rb(48,"h3",1),r.wc(49,"Focus Management"),r.Qb(),r.Rb(50,"p"),r.wc(51,"By default, the first tabbable element within the dialog will receive focus upon open. This can be configured by setting the "),r.Rb(52,"code",3),r.wc(53,"cdkFocusInitial"),r.Qb(),r.wc(54," attribute on another focusable element."),r.Qb(),r.Rb(55,"p"),r.wc(56,"Tabbing through the elements of the dialog will keep focus inside of the dialog element, wrapping back to the first tabbable element when reaching the end of the tab sequence."),r.Qb(),r.Rb(57,"pre"),r.Mb(58,"code",8),r.Qb(),r.Rb(59,"a",9),r.wc(60,"Focus Trap - Read more"),r.Qb(),r.Rb(61,"h3",1),r.wc(62,"Sharing data with the Dialog component"),r.Qb(),r.wc(63," If you want to share data with your dialog, you can use the "),r.Rb(64,"code",3),r.wc(65,"data"),r.Qb(),r.wc(66," option to pass information to the dialog component. "),r.Rb(67,"pre"),r.Mb(68,"code",10),r.Qb(),r.wc(69," To access the data in your dialog component. "),r.Rb(70,"pre"),r.Mb(71,"code",11),r.Qb(),r.Qb())},directives:[s.b,m.b,u.a],encapsulation:2}),e})(),M=(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcDialog (Service)",summary:"Service to open MDC dialogs.",categories:[{name:"Observables",items:[{name:"afterOpened: Observable<void>",summary:"Gets an observable that is notified when the dialog is finished opening."},{name:"afterClosed: Observable<R | undefined>",summary:"Gets an observable that is notified when the dialog is finished closing."}]},{name:"Methods",items:[{name:"close(dialogResult?: any)",summary:"Closes the dialog with optional returned result."},{name:"open(component, config?: MdcDialogConfig)",summary:"Opens the dialog with optional configuration."}]},{name:"MdcDialogConfig",items:[{name:"id: string",summary:"ID for the dialog. If omitted, a unique one will be generated."},{name:"ariaLabel: string",summary:"Aria label to assign to the dialog element."},{name:"ariaDescribedBy: string",summary:"ID of the element that describes the dialog."},{name:"clickOutsideToClose: boolean",summary:"Close the dialog if user clicks on the backdrop. (Default: true)"},{name:"escapeToClose: boolean",summary:"Enable or disable close on escape key (Default: true)."},{name:"scrollable: boolean",summary:"Applied automatically when the dialog has overflowing content to warrant scrolling."},{name:"buttonsStacked: boolean",summary:"Enable or disable the stacking of action buttons, if they can't fit on a single line."},{name:"autoFocus: boolean",summary:"Whether the dialog should focus the first focusable element on open. (Default: true)"},{name:"restoreFocus: boolean",summary:"Whether the dialog should restore focus to the previously-focused element, after it's closed. (Default: true)"},{name:"componentFactoryResolver?: ComponentFactoryResolver",summary:"Allows for a different 'ComponentFactoryResolver' to be passed in when creating a dialog."},{name:"data: any",summary:"Data that can be assigned inside child component."}]}]},{header:"MdcDialog (Directive)",summary:"Mandatory. The root DOM element containing the surface and the container.",selectors:["mdc-dialog"],exportedAs:"mdcDialog",categories:[{name:"Methods",items:[{name:"layout()",summary:"Recalculates layout and automatically adds/removes modifier classes like --scrollable."}]}]},{header:"MdcDialogContainer",summary:"Mandatory. Wrapper element needed to ensure flexbox behavior in IE 11.",selectors:["mdc-dialog-container"],exportedAs:"mdcDialogContainer"},{header:"MdcDialogSurface",summary:"Mandatory. The bounding box for the dialog's content.",selectors:["mdc-dialog-surface"],exportedAs:"mdcDialogSurface"},{header:"MdcDialogTitle",summary:"Mandatory. The bounding box for the dialog's content.",selectors:["mdc-dialog-title","mdcDialogTitle"],exportedAs:"mdcDialogTitle"},{header:"MdcDialogContent",summary:"Optional. Primary content area. May contain a list, a form, or prose.",selectors:["mdc-dialog-content","mdcDialogContent"],exportedAs:"mdcDialogContent"},{header:"MdcDialogActions",summary:"Optional. Footer area containing the dialog's action buttons.",selectors:["mdc-dialog-actions","mdcDialogActions"],exportedAs:"mdcDialogActions"},{header:"MdcDialogButton",selectors:["button[mdcDialogButton]","[mdcDialogButton]"],exportedAs:"mdcDialogButton",categories:[{name:"Properties",items:[{name:"default: boolean",summary:"Indicates that this action button represents the default action."}]}]},{header:"MdcDialogAction",summary:"Optional. Any element within a dialog may include themdcDialogAction directive.",selectors:['mdcDialogAction="close"','mdcDialogAction="accept"'],exportedAs:"mdcDialogAction"}]}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,o){var t;1&e&&r.tc(d.a,!0),2&e&&r.nc(t=r.ac())&&(o._componentApi=t.first)},decls:1,vars:0,template:function(e,o){1&e&&r.Mb(0,"component-api")},directives:[b.a],encapsulation:2}),e})(),F=(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",references:[{name:"Material Design guidelines: Dialog",url:"https://material.io/guidelines/components/dialogs.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-dialog/README.md#sass-mixins"}],code:"import {MdcDialogModule} from '@angular-mdc/web/dialog';",sass:"@use '@material/dialog/mdc-dialog';\n@use '@material/dialog';",tabs:[{label:"Usage",route:"./usage"},...this._componentViewer.defaultTabs]}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,o){var t;1&e&&r.tc(d.b,!0),2&e&&r.nc(t=r.ac())&&(o._componentViewer=t.first)},decls:1,vars:0,template:function(e,o){1&e&&r.Mb(0,"component-viewer")},directives:[g.a],encapsulation:2}),e})(),k=(()=>{class e{constructor(e){this.dialog=e,this.exampleTS="import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(public dialog: MdcDialog) { }",this.exampleAlert={html:'<button mdc-button (click)="openAlert()">Alert</button>',ts:`${this.exampleTS}\n\n  openAlert() {\n    const dialogRef = this.dialog.open(DialogAlert, {\n      escapeToClose: false,\n      clickOutsideToClose: false,\n      buttonsStacked: false,\n      id: 'my-dialog'\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}`,"Dialog-Alert.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Discard draft?</mdc-dialog-title>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton mdcDialogAction="accept">Discard</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-alert.ts":"@Component({\n  templateUrl: 'dialog-alert.html',\n})\nexport class DialogAlert {\n  constructor(public dialogRef: MdcDialogRef<DialogAlert>) { }\n}"},this.exampleSimple={html:'<button mdc-button (click)="openSimple()">Simple</button>',ts:`${this.exampleTS}\n\n  openSimple() {\n    const dialogRef = this.dialog.open(DialogSimple);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}`,"dialog-simple.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Select an account</mdc-dialog-title>\n      <mdc-dialog-content>\n        <mdc-list avatar>\n          <mdc-list-item (click)="closeDialog()" cdkInitialFocus>\n            <mdc-icon mdcListItemGraphic>person</mdc-icon>username@gmail.com\n          </mdc-list-item>\n          <mdc-list-item (click)="closeDialog()">\n            <mdc-icon mdcListItemGraphic>person</mdc-icon>user02@gmail.com\n          </mdc-list-item>\n          <mdc-list-item (click)="closeDialog()">\n            <mdc-icon mdcListItemGraphic>add</mdc-icon>add account\n          </mdc-list-item>\n        </mdc-list>\n      </mdc-dialog-content>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-simple.ts":"@Component({\n  templateUrl: 'dialog-simple.html',\n})\nexport class DialogSimple {\n  constructor(public dialogRef: MdcDialogRef<DialogSimple>) { }\n\n  closeDialog(): void {\n    this.dialogRef.close('Pizza');\n  }\n}"},this.exampleAutoFocus={html:'<button mdc-button (click)="openAutoFocus(true)">Open focused initial element</button>\n<button mdc-button (click)="openAutoFocus(false)">Open no focused element</button>',ts:`${this.exampleTS}\n\n  openAutoFocus(autoFocus: boolean) {\n    const dialogRef = this.dialog.open(DialogAlert, {\n      autoFocus: autoFocus\n    });\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}`,"dialog-alert.html":this.exampleAlert["Dialog-Alert.html"],"dialog-alert.ts":this.exampleAlert["dialog-alert.ts"]},this.exampleConfirmation={html:'<button mdc-button (click)="openConfirmation()">Open Confirmation</button>',ts:`${this.exampleTS}\n\n  openConfirmation() {\n    const dialogRef = this.dialog.open(DialogConfirmation);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}`,"dialog-confirmation.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Phone ringtone</mdc-dialog-title>\n      <mdc-dialog-content>\n        <mdc-list>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set" checked></mdc-radio>\n            Never Gonna Give You Up\n          </mdc-list-item>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>\n            Hot Cross Buns\n          </mdc-list-item>\n          <mdc-list-item>\n            <mdc-radio mdcListItemGraphic name="demo-radio-set"></mdc-radio>\n            None\n          </mdc-list-item>\n        </mdc-list>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton default mdcDialogAction="accept">Ok</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-confirmation.ts":"@Component({\n  templateUrl: 'dialog-confirmation.html',\n})\nexport class DialogConfirmation {\n  constructor(public dialogRef: MdcDialogRef<DialogConfirmation>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) { }\n}"},this.exampleScrollable={html:'<button mdc-button (click)="openScrollable()">Open Scrollable</button>',ts:`${this.exampleTS}\n\n  openScrollable() {\n    const dialogRef = this.dialog.open(DialogScrollable, {\n      scrollable: scrollable\n    });\n  }\n}`,"dialog-scrollable.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Read my novel?</mdc-dialog-title>\n      <mdc-dialog-content>\n        <p *ngFor="let lorem of lorems">{{lorem}}</p>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Decline</button>\n        <button mdcDialogButton mdcDialogAction="accept">Accept</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-scrollable.ts":"@Component({\n  templateUrl: 'dialog-scrollable.html',\n})\nexport class DialogScrollable {\n  text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,\n  repudiandae dignissimos et quam velit autem mollitia tenetur,\n  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.\n  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,\n  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,\n  excepturi!`;\n  lorems = Array(5).fill(this.text);\n\n  constructor(public dialogRef: MdcDialogRef<DialogScrollable>) { }\n}"},this.exampleDialogForm={html:'<button mdc-button (click)="openForm()">Open Form</button>',ts:`${this.exampleTS}\n\n  openForm() {\n    const dialogRef = this.dialog.open(DialogForm);\n\n    dialogRef.afterClosed().subscribe(result => {\n      console.log(result);\n    });\n  }\n}`,"dialog-form.html":'<mdc-dialog>\n  <mdc-dialog-container>\n    <mdc-dialog-surface>\n      <mdc-dialog-title>Create profile</mdc-dialog-title>\n      <mdc-dialog-content>\n        <form [formGroup]="profileForm" id="profileForm" (ngSubmit)="submit()" autocomplete="off">\n          <mdc-form-field fluid>\n            <mdc-text-field formControlName="first" label="First name" outlined></mdc-text-field>\n            <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n          <mdc-form-field fluid>\n            <mdc-text-field formControlName="last" label="Last name" outlined></mdc-text-field>\n            <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n          <mdc-form-field fluid>\n            <mdc-text-field type="email" formControlName="email" label="Email" maxlength="254"\n             outlined></mdc-text-field>\n            <mdc-helper-text validation>*Required</mdc-helper-text>\n          </mdc-form-field>\n        </form>\n      </mdc-dialog-content>\n      <mdc-dialog-actions>\n        <button mdcDialogButton mdcDialogAction="close">Cancel</button>\n        <button mdcDialogButton form="profileForm">Create</button>\n      </mdc-dialog-actions>\n    </mdc-dialog-surface>\n  </mdc-dialog-container>\n</mdc-dialog>',"dialog-form.ts":"@Component({\n  templateUrl: 'dialog-form.html',\n})\nexport class DialogForm {\n  constructor(public dialogRef: MdcDialogRef<DialogForm>,\n    @Inject(MDC_DIALOG_DATA) public data: DialogData) { }\n\n  profileForm = new FormGroup({\n    first: new FormControl('', Validators.required),\n    last: new FormControl('', Validators.required),\n    email: new FormControl('', [Validators.required, Validators.email])\n  });\n\n  submit(): void {\n    if (this.profileForm.invalid) {\n      return;\n    }\n\n    this.dialogRef.close();\n  }\n}"}}openAlert(){this.dialog.open(S,{escapeToClose:!1,clickOutsideToClose:!1,buttonsStacked:!1,id:"my-dialog"}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}openAutoFocus(e){this.dialog.open(S,{autoFocus:e}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}openSimple(){this.dialog.open(B).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}openConfirmation(){const e=this.dialog.open(I);e.afterOpened().subscribe(()=>{console.log("Dialog opened")}),e.afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}openScrollable(e=!0){this.dialog.open(O,{scrollable:e}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}openForm(){this.dialog.open(T).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`)})}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(l.b))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:38,vars:6,consts:[[1,"demo-content"],[1,"demo-content__headline"],["mdc-button","",3,"click"],[3,"example"]],template:function(e,o){1&e&&(r.Rb(0,"div",0),r.Rb(1,"h3",1),r.wc(2,"Alert"),r.Qb(),r.Rb(3,"button",2),r.Zb("click",(function(){return o.openAlert()})),r.wc(4,"Open Alert"),r.Qb(),r.Mb(5,"example-viewer",3),r.Qb(),r.Rb(6,"div",0),r.Rb(7,"h3",1),r.wc(8,"Simple"),r.Qb(),r.Rb(9,"button",2),r.Zb("click",(function(){return o.openSimple()})),r.wc(10,"Open Simple"),r.Qb(),r.Mb(11,"example-viewer",3),r.Qb(),r.Rb(12,"div",0),r.Rb(13,"h3",1),r.wc(14,"Confirmation"),r.Qb(),r.Rb(15,"button",2),r.Zb("click",(function(){return o.openConfirmation()})),r.wc(16,"Open Confirmation"),r.Qb(),r.Mb(17,"example-viewer",3),r.Qb(),r.Rb(18,"div",0),r.Rb(19,"h3",1),r.wc(20,"Auto Focus"),r.Qb(),r.Rb(21,"button",2),r.Zb("click",(function(){return o.openAutoFocus(!0)})),r.wc(22,"Open focused initial element"),r.Qb(),r.Rb(23,"button",2),r.Zb("click",(function(){return o.openAutoFocus(!1)})),r.wc(24,"Open no focused element"),r.Qb(),r.Mb(25,"example-viewer",3),r.Qb(),r.Rb(26,"div",0),r.Rb(27,"h3",1),r.wc(28,"Scrollable"),r.Qb(),r.Rb(29,"button",2),r.Zb("click",(function(){return o.openScrollable()})),r.wc(30,"Open Scrollable"),r.Qb(),r.Mb(31,"example-viewer",3),r.Qb(),r.Rb(32,"div",0),r.Rb(33,"h3",1),r.wc(34,"Form"),r.Qb(),r.Rb(35,"button",2),r.Zb("click",(function(){return o.openForm()})),r.wc(36,"Open Form"),r.Qb(),r.Mb(37,"example-viewer",3),r.Qb()),2&e&&(r.Bb(5),r.ic("example",o.exampleAlert),r.Bb(6),r.ic("example",o.exampleSimple),r.Bb(6),r.ic("example",o.exampleConfirmation),r.Bb(8),r.ic("example",o.exampleAutoFocus),r.Bb(6),r.ic("example",o.exampleScrollable),r.Bb(6),r.ic("example",o.exampleDialogForm))},directives:[u.a,f.a],encapsulation:2}),e})(),S=(()=>{class e{constructor(e){this.dialogRef=e}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(p.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:10,vars:0,consts:[["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","mdcDialogAction","accept"]],template:function(e,o){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.wc(4,"Discard draft?"),r.Qb(),r.Rb(5,"mdc-dialog-actions"),r.Rb(6,"button",0),r.wc(7,"Cancel"),r.Qb(),r.Rb(8,"button",1),r.wc(9,"Discard"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[c.a,h.d,h.g,h.h,h.b,h.c,h.a],encapsulation:2}),e})(),B=(()=>{class e{constructor(e){this.dialogRef=e}closeDialog(){this.dialogRef.close("Pizza")}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(p.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:19,vars:0,consts:[["avatar",""],["cdkFocusInitial","",3,"click"],["mdcListItemGraphic",""],[3,"click"]],template:function(e,o){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.wc(4,"Select an account"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"mdc-list",0),r.Rb(7,"mdc-list-item",1),r.Zb("click",(function(){return o.closeDialog()})),r.Rb(8,"mdc-icon",2),r.wc(9,"person"),r.Qb(),r.wc(10,"username@gmail.com "),r.Qb(),r.Rb(11,"mdc-list-item",3),r.Zb("click",(function(){return o.closeDialog()})),r.Rb(12,"mdc-icon",2),r.wc(13,"person"),r.Qb(),r.wc(14,"user02@gmail.com "),r.Qb(),r.Rb(15,"mdc-list-item",3),r.Zb("click",(function(){return o.closeDialog()})),r.Rb(16,"mdc-icon",2),r.wc(17,"add"),r.Qb(),r.wc(18,"add account "),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[c.a,h.d,h.g,h.h,h.e,D.a,R.b,w.b,R.c],encapsulation:2}),e})(),O=(()=>{class e{constructor(e){this.dialogRef=e,this.text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,\n  repudiandae dignissimos et quam velit autem mollitia tenetur,\n  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.\n  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,\n  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,\n  excepturi!",this.lorems=Array(5).fill(this.text)}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(p.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:12,vars:1,consts:[[4,"ngFor","ngForOf"],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","mdcDialogAction","accept","cdkFocusInitial",""]],template:function(e,o){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.wc(4,"Read my novel?"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.uc(6,C,2,1,"p",0),r.Qb(),r.Rb(7,"mdc-dialog-actions"),r.Rb(8,"button",1),r.wc(9,"Decline"),r.Qb(),r.Rb(10,"button",2),r.wc(11,"Accept"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.Bb(6),r.ic("ngForOf",o.lorems))},directives:[c.a,h.d,h.g,h.h,h.e,Q.j,h.b,h.c,h.a],encapsulation:2}),e})(),I=(()=>{class e{constructor(e,o){this.dialogRef=e,this.data=o}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(p.a),r.Lb(l.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,o){var t;1&e&&r.zc(c.a,!0),2&e&&r.nc(t=r.ac())&&(o.dialogComponent=t.first)},decls:21,vars:0,consts:[["mdcListItemGraphic","","name","demo-radio-set","checked",""],["mdcListItemGraphic","","name","demo-radio-set"],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","default","","mdcDialogAction","accept"]],template:function(e,o){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.wc(4,"Phone ringtone"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"mdc-list"),r.Rb(7,"mdc-list-item"),r.Mb(8,"mdc-radio",0),r.wc(9," Never Gonna Give You Up "),r.Qb(),r.Rb(10,"mdc-list-item"),r.Mb(11,"mdc-radio",1),r.wc(12," Hot Cross Buns "),r.Qb(),r.Rb(13,"mdc-list-item"),r.Mb(14,"mdc-radio",1),r.wc(15," None "),r.Qb(),r.Qb(),r.Qb(),r.Rb(16,"mdc-dialog-actions"),r.Rb(17,"button",2),r.wc(18,"Cancel"),r.Qb(),r.Rb(19,"button",3),r.wc(20,"Ok"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[c.a,h.d,h.g,h.h,h.e,D.a,R.b,v.b,R.c,h.b,h.c,h.a],encapsulation:2}),e})(),T=(()=>{class e{constructor(e,o){this.dialogRef=e,this.data=o,this.profileForm=new a.d({first:new a.b("",a.p.required),last:new a.b("",a.p.required),email:new a.b("",[a.p.required,a.p.email])})}submit(){this.profileForm.invalid||this.dialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(r.Lb(p.a),r.Lb(l.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["ng-component"]],decls:18,vars:1,consts:[["id","profileForm","autocomplete","off",2,"margin-top","5px",3,"formGroup","ngSubmit"],["fluid",""],["formControlName","first","label","First name","validationMessage","Field is required","outlined",""],["formControlName","last","label","Last name","validationMessage","Field is required","outlined",""],["type","email","formControlName","email","label","Email","maxlength","254","validationMessage","Field is required","outlined",""],["mdcDialogButton","","mdcDialogAction","close"],["mdcDialogButton","","form","profileForm"]],template:function(e,o){1&e&&(r.Rb(0,"mdc-dialog"),r.Rb(1,"mdc-dialog-container"),r.Rb(2,"mdc-dialog-surface"),r.Rb(3,"mdc-dialog-title"),r.wc(4,"Create profile"),r.Qb(),r.Rb(5,"mdc-dialog-content"),r.Rb(6,"form",0),r.Zb("ngSubmit",(function(){return o.submit()})),r.Rb(7,"mdc-form-field",1),r.Mb(8,"mdc-text-field",2),r.Qb(),r.Rb(9,"mdc-form-field",1),r.Mb(10,"mdc-text-field",3),r.Qb(),r.Rb(11,"mdc-form-field",1),r.Mb(12,"mdc-text-field",4),r.Qb(),r.Qb(),r.Qb(),r.Rb(13,"mdc-dialog-actions"),r.Rb(14,"button",5),r.wc(15,"Cancel"),r.Qb(),r.Rb(16,"button",6),r.wc(17,"Create"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&e&&(r.Bb(6),r.ic("formGroup",o.profileForm))},directives:[c.a,h.d,h.g,h.h,h.e,a.q,a.k,a.e,x.a,A.a,a.j,a.c,a.g,h.b,h.c,h.a],encapsulation:2}),e})();const L=[{path:"",component:F,children:[{path:"",redirectTo:"usage"},{path:"usage",component:y},{path:"api",component:M},{path:"examples",component:k}]}];let G=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(o){return new(o||e)},imports:[[i.e.forChild(L)],i.e]}),e})(),q=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(o){return new(o||e)},imports:[[G,n.a]]}),e})()}}]);