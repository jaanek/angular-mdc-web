function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{hBXH:function(e,t,r){"use strict";r.r(t),r.d(t,"LinearProgressModule",(function(){return D}));var n,s,o,i,a,c,u,l=r("d2mR"),b=r("tyNb"),f=r("leug"),d=r("fXoL"),p=r("LuDt"),h=r("5l+6"),_=r("9UYg"),m=r("f6B5"),R=r("sEbM"),g=r("mrSG"),y=r("tJqG"),v=r("m9I9"),w={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},C={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},S=function(e){function t(r){return e.call(this,Object(g.a)(Object(g.a)({},t.defaultAdapter),r))||this}return Object(g.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(w.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(w.REVERSED_CLASS),this.progress_=0,this.buffer_=1},t.prototype.setDeterminate=function(e){if(this.isDeterminate_=e,this.isDeterminate_)return this.adapter_.removeClass(w.INDETERMINATE_CLASS),this.adapter_.setAttribute(C.ARIA_VALUENOW,this.progress_.toString()),this.setPrimaryBarProgress_(this.progress_),void this.setBufferBarProgress_(this.buffer_);this.isReversed_&&(this.adapter_.removeClass(w.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(w.REVERSED_CLASS)),this.adapter_.addClass(w.INDETERMINATE_CLASS),this.adapter_.removeAttribute(C.ARIA_VALUENOW),this.setPrimaryBarProgress_(1),this.setBufferBarProgress_(1)},t.prototype.isDeterminate=function(){return this.isDeterminate_},t.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&(this.setPrimaryBarProgress_(e),this.adapter_.setAttribute(C.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress_},t.prototype.setBuffer=function(e){this.buffer_=e,this.isDeterminate_&&this.setBufferBarProgress_(e)},t.prototype.setReverse=function(e){this.isReversed_=e,this.isDeterminate_||(this.adapter_.removeClass(w.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(w.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(w.REVERSED_CLASS):this.adapter_.removeClass(w.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(w.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(w.CLOSED_CLASS)},t.prototype.setPrimaryBarProgress_=function(e){var t="scaleX("+e+")";this.adapter_.setPrimaryBarStyle(Object(y.b)(window,"transform"),t)},t.prototype.setBufferBarProgress_=function(e){this.adapter_.setBufferBarStyle(C.FLEX_BASIS,100*e+"%")},t}(v.a),Q=r("Hj8T"),E=((n=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,s){var o;return _classCallCheck(this,r),(o=t.call(this,s))._platform=e,o._changeDetectorRef=n,o.elementRef=s,o._initialized=!1,o.label=void 0,o._progress=0,o._determinate=!1,o._buffer=0,o._reversed=!1,o._root=o.elementRef.nativeElement,o}return _createClass(r,[{key:"getDefaultFoundation",value:function(){var e=this;return new S({addClass:function(t){return e._root.classList.add(t)},forceLayout:function(){return e._root.offsetWidth},setBufferBarStyle:function(t,r){e._root.querySelector(S.strings.BUFFER_BAR_SELECTOR).style.setProperty(t,r)},setPrimaryBarStyle:function(t,r){e._root.querySelector(S.strings.PRIMARY_BAR_SELECTOR).style.setProperty(t,r)},hasClass:function(t){return e._root.classList.contains(t)},removeClass:function(t){return e._root.classList.remove(t)},removeAttribute:function(t){return e._root.removeAttribute(t)},setAttribute:function(t,r){return e._root.setAttribute(t,r)}})}},{key:"ngOnInit",value:function(){this._platform.isBrowser&&(this._initialized=!0,this._foundation.init(),this._syncProgressWithFoundation(),this._syncBufferWithFoundation(),this._syncDeterminateWithFoundation(),this._syncReversedWithFoundation(),this._changeDetectorRef.markForCheck())}},{key:"ngOnChanges",value:function(e){this._initialized&&(e.progress&&this._syncProgressWithFoundation(),e.buffer&&this._syncBufferWithFoundation(),e.determinate&&this._syncDeterminateWithFoundation(),e.reversed&&this._syncReversedWithFoundation())}},{key:"open",value:function(){this._foundation.open()}},{key:"close",value:function(){this._foundation.close()}},{key:"_syncProgressWithFoundation",value:function(){this._foundation.setProgress(this.progress)}},{key:"_syncBufferWithFoundation",value:function(){this._foundation.setBuffer(this.buffer)}},{key:"_syncDeterminateWithFoundation",value:function(){this._foundation.setDeterminate(this.determinate)}},{key:"_syncReversedWithFoundation",value:function(){this._foundation.setReverse(this.reversed)}},{key:"progress",get:function(){return this._progress},set:function(e){this._progress=Object(m.e)(e)}},{key:"determinate",get:function(){return this._determinate},set:function(e){this._determinate=Object(m.b)(e)}},{key:"buffer",get:function(){return this._buffer},set:function(e){this._buffer=Object(m.e)(e)}},{key:"reversed",get:function(){return this._reversed},set:function(e){this._reversed=Object(m.b)(e),this._syncReversedWithFoundation()}}]),r}(R.a)).\u0275fac=function(e){return new(e||n)(d.Lb(Q.a),d.Lb(d.h),d.Lb(d.l))},n.\u0275cmp=d.Fb({type:n,selectors:[["mdc-linear-progress"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mdc-linear-progress"],hostVars:3,hostBindings:function(e,t){2&e&&(d.Cb("aria-label",t.label),d.Db("mdc-linear-progress--indeterminate",!t.determinate))},inputs:{label:"label",progress:"progress",determinate:"determinate",buffer:"buffer",reversed:"reversed"},exportAs:["mdcLinearProgress"],features:[d.yb,d.zb],decls:7,vars:0,consts:[[1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],[1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],[1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Mb(1,"div",1),d.Mb(2,"div",2),d.Qb(),d.Rb(3,"div",3),d.Mb(4,"span",4),d.Qb(),d.Rb(5,"div",5),d.Mb(6,"span",4),d.Qb())},encapsulation:2,changeDetection:0}),n),A=r("dkiD"),P=[{path:"",component:(a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Linear Progress",description:"Progress indicators express an unspecified wait time or display the length of a process.",references:[{name:"Material Design guidelines: Progress Activity",url:"https://material.io/components/progress-indicators/"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md"}],code:"import {MdcLinearProgressModule} from '@angular-mdc/web';",sass:"@use '@material/linear-progress/mdc-linear-progress';\n@use '@material/linear-progress';"}}}]),e}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d.Fb({type:a,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&d.tc(f.a,!0),2&e&&d.nc(r=d.ac())&&(t._componentViewer=r.first)},decls:1,vars:0,template:function(e,t){1&e&&d.Mb(0,"component-viewer")},directives:[p.a],encapsulation:2}),a),children:[{path:"",redirectTo:"api"},{path:"api",component:(i=function e(){_classCallCheck(this,e)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Fb({type:i,selectors:[["ng-component"]],decls:59,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h3",1),d.wc(2,"MdcLinearProgress"),d.Qb(),d.Rb(3,"p"),d.wc(4," Selector: "),d.Rb(5,"span",2),d.wc(6,"mdc-linear-progress"),d.Qb(),d.Qb(),d.wc(7," Exported as: "),d.Rb(8,"span",2),d.wc(9,"mdcLinearProgress"),d.Qb(),d.Rb(10,"h4",3),d.wc(11,"Properties"),d.Qb(),d.Rb(12,"table"),d.Rb(13,"thead"),d.Rb(14,"tr"),d.Rb(15,"th"),d.wc(16,"Name"),d.Qb(),d.Rb(17,"th"),d.wc(18,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(19,"tbody"),d.Rb(20,"tr"),d.Rb(21,"td"),d.wc(22,"determinate: boolean"),d.Qb(),d.Rb(23,"td"),d.wc(24,"Puts the linear progress indicator in an determinate or indeterminate state."),d.Qb(),d.Qb(),d.Rb(25,"tr"),d.Rb(26,"td"),d.wc(27,"reversed: boolean"),d.Qb(),d.Rb(28,"td"),d.wc(29,"Reverses the direction of the linear progress indicator."),d.Qb(),d.Qb(),d.Rb(30,"tr"),d.Rb(31,"td"),d.wc(32,"progress: number"),d.Qb(),d.Rb(33,"td"),d.wc(34,"Sets the progress bar to this value. Value should be between [0, 1]."),d.Qb(),d.Qb(),d.Rb(35,"tr"),d.Rb(36,"td"),d.wc(37,"buffer: number"),d.Qb(),d.Rb(38,"td"),d.wc(39,"Sets the buffer bar to this value. Value should be between [0, 1]."),d.Qb(),d.Qb(),d.Rb(40,"tr"),d.Rb(41,"td"),d.wc(42,"label: string"),d.Qb(),d.Rb(43,"td"),d.wc(44,"Label indicating how the progress bar should be announced to the user."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(45,"h4",3),d.wc(46,"Methods"),d.Qb(),d.Rb(47,"table"),d.Rb(48,"tbody"),d.Rb(49,"tr"),d.Rb(50,"td"),d.wc(51,"open()"),d.Qb(),d.Rb(52,"td"),d.wc(53,"Puts the component in the open state."),d.Qb(),d.Qb(),d.Rb(54,"tr"),d.Rb(55,"td"),d.wc(56,"close()"),d.Qb(),d.Rb(57,"td"),d.wc(58,"Puts the component in the closed state."),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb())},directives:[h.i,h.l],encapsulation:2}),i)},{path:"sass",component:(o=function e(){_classCallCheck(this,e)},o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=d.Fb({type:o,selectors:[["ng-component"]],decls:23,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h4",1),d.wc(2,"Sass Mixins"),d.Qb(),d.Rb(3,"table"),d.Rb(4,"thead"),d.Rb(5,"tr"),d.Rb(6,"th"),d.wc(7,"Mixin"),d.Qb(),d.Rb(8,"th"),d.wc(9,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Rb(10,"tbody"),d.Rb(11,"tr"),d.Rb(12,"td"),d.Rb(13,"code"),d.wc(14,"bar-color($color)"),d.Qb(),d.Qb(),d.Rb(15,"td"),d.wc(16,"Sets the color of the progress bar"),d.Qb(),d.Qb(),d.Rb(17,"tr"),d.Rb(18,"td"),d.Rb(19,"code"),d.wc(20,"buffer-color($color)"),d.Qb(),d.Qb(),d.Rb(21,"td"),d.wc(22,"Sets the color of the buffer bar and dots"),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb())},directives:[h.l],encapsulation:2}),o)},{path:"examples",component:(s=function(){function e(){_classCallCheck(this,e),this.exampleIndeterminate={html:"<mdc-linear-progress></mdc-linear-progress>",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"},this.exampleDeterminate={html:'<mdc-linear-progress determinate [progress]="0.5" [buffer]="0.75"></mdc-linear-progress>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"}}return _createClass(e,[{key:"alternateColors",value:function(e){var t="demo-linear-progress--custom";e.elementRef.nativeElement.classList.contains(t)?e.elementRef.nativeElement.classList.remove(t):e.elementRef.nativeElement.classList.add(t)}}]),e}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=d.Fb({type:s,selectors:[["ng-component"]],decls:30,vars:4,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["lp",""],[3,"example"],["determinate","",3,"progress","buffer"],["deter",""]],template:function(e,t){if(1&e){var r=d.Sb();d.Rb(0,"div",0),d.Rb(1,"h3",1),d.wc(2,"Indeterminate Progress"),d.Qb(),d.Rb(3,"div",2),d.Rb(4,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(13);return e.reversed=!e.reversed})),d.wc(5,"Reverse"),d.Qb(),d.Rb(6,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(13).open()})),d.wc(7,"Open"),d.Qb(),d.Rb(8,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(13).close()})),d.wc(9,"Close"),d.Qb(),d.Rb(10,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(13);return t.alternateColors(e)})),d.wc(11,"Alternate Colors"),d.Qb(),d.Qb(),d.Mb(12,"mdc-linear-progress",null,4),d.Mb(14,"example-viewer",5),d.Qb(),d.Rb(15,"div",0),d.Rb(16,"h3",1),d.wc(17,"Determinate Progress"),d.Qb(),d.Rb(18,"div",2),d.Rb(19,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(28);return e.reversed=!e.reversed})),d.wc(20,"Reverse"),d.Qb(),d.Rb(21,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(28).open()})),d.wc(22,"Open"),d.Qb(),d.Rb(23,"button",3),d.Zb("click",(function(){return d.pc(r),d.oc(28).close()})),d.wc(24,"Close"),d.Qb(),d.Rb(25,"button",3),d.Zb("click",(function(){d.pc(r);var e=d.oc(28);return t.alternateColors(e)})),d.wc(26,"Alternate Colors"),d.Qb(),d.Qb(),d.Mb(27,"mdc-linear-progress",6,7),d.Mb(29,"example-viewer",5),d.Qb()}2&e&&(d.Bb(14),d.ic("example",t.exampleIndeterminate),d.Bb(13),d.ic("progress",.5)("buffer",.75),d.Bb(2),d.ic("example",t.exampleDeterminate))},directives:[_.a,E,A.a],encapsulation:2}),s)}]}],L=((u=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:u}),u.\u0275inj=d.Ib({factory:function(e){return new(e||u)},imports:[[b.e.forChild(P)],b.e]}),u),D=((c=function e(){_classCallCheck(this,e)}).\u0275mod=d.Jb({type:c}),c.\u0275inj=d.Ib({factory:function(e){return new(e||c)},imports:[[l.a,L]]}),c)},leug:function(e,t,r){"use strict";var n=r("LuDt");r.d(t,"a",(function(){return n.a}))}}]);