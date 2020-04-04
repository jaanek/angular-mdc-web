function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ZHHU:function(e,t,c){"use strict";c.r(t),c.d(t,"MenuSurfaceModule",(function(){return E}));var n=c("d2mR"),o=c("tyNb"),a=c("leug"),i=c("fXoL"),r=c("LuDt"),b=c("5l+6"),s=c("kDKR"),m=c("ofXK"),d=c("6D23"),u=c("4G1d"),l=c("uwiL"),p=c("uAA3"),f=c("9UYg"),h=c("BuWE"),R=c("dEKC"),w=c("dkiD"),Q=c("CBIf");function g(e,t){if(1&e&&(i.Rb(0,"mdc-form-field"),i.Mb(1,"mdc-radio",25),i.Rb(2,"label"),i.wc(3),i.Qb(),i.Qb()),2&e){var c=t.$implicit;i.Bb(1),i.ic("value",c),i.Bb(2),i.xc(c)}}function v(e,t){if(1&e&&(i.Rb(0,"mdc-image-list-item"),i.Rb(1,"mdc-image-list-image-aspect"),i.Mb(2,"img",26),i.Qb(),i.Rb(3,"mdc-image-list-supporting"),i.Rb(4,"span",27),i.wc(5,"Text label"),i.Qb(),i.Qb(),i.Qb()),2&e){var c=t.$implicit;i.Bb(2),i.kc("src","https://material-components-web.appspot.com/images/photos/3x2/",c+1,".jpg",i.qc)}}var S,M,y,x,k,C,_=function(e,t,c,n){return{top:e,bottom:t,left:c,right:n}},B=[{path:"",component:(x=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Menu Surface",description:"The MDC Menu Surface component is a reusable surface that appears above the content of the page and can be positioned adjacent to an element.",references:[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md"}],code:"import {MdcMenuSurfaceModule} from '@angular-mdc/web';",sass:"@use '@material/menu-surface/mdc-menu-surface';\n@use '@material/menu-surface';"}}}]),e}(),x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=i.Fb({type:x,selectors:[["ng-component"]],viewQuery:function(e,t){var c;1&e&&i.tc(a.a,!0),2&e&&i.nc(c=i.ac())&&(t._componentViewer=c.first)},decls:1,vars:0,template:function(e,t){1&e&&i.Mb(0,"component-viewer")},directives:[r.a],encapsulation:2}),x),children:[{path:"",redirectTo:"api"},{path:"api",component:(y=function e(){_classCallCheck(this,e)},y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=i.Fb({type:y,selectors:[["ng-component"]],decls:75,vars:4,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h3",1),i.wc(2,"MdcMenuSurface"),i.Qb(),i.Rb(3,"p"),i.wc(4," Selector: "),i.Rb(5,"span",2),i.wc(6,"mdc-menu-surface"),i.Qb(),i.Qb(),i.wc(7," Exported as: "),i.Rb(8,"span",2),i.wc(9,"mdcMenuSurface"),i.Qb(),i.Rb(10,"h4",3),i.wc(11,"Properties"),i.Qb(),i.Rb(12,"table"),i.Rb(13,"thead"),i.Rb(14,"tr"),i.Rb(15,"th"),i.wc(16,"Name"),i.Qb(),i.Rb(17,"th"),i.wc(18,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(19,"tbody"),i.Rb(20,"tr"),i.Rb(21,"td"),i.wc(22,"open: boolean"),i.Qb(),i.Rb(23,"td"),i.wc(24,"Opens or closes the menu."),i.Qb(),i.Qb(),i.Rb(25,"tr"),i.Rb(26,"td"),i.wc(27,"anchorCorner: string"),i.Qb(),i.Rb(28,"td"),i.wc(29,"Override the opening point of the menu. (Default: topStart) "),i.Rb(30,"p"),i.wc(31,"Values: 'bottomEnd' | 'bottomStart' | 'topEnd' | 'topStart'"),i.Qb(),i.Qb(),i.Qb(),i.Rb(32,"tr"),i.Rb(33,"td"),i.wc(34),i.Qb(),i.Rb(35,"td"),i.wc(36,"Sets the distance from the anchor point that the menu surface should be shown."),i.Qb(),i.Qb(),i.Rb(37,"tr"),i.Rb(38,"td"),i.wc(39),i.Qb(),i.Rb(40,"td"),i.wc(41,"Sets the absolute x/y position of the menu. Should only be used when the menu is hoisted or using fixed positioning."),i.Qb(),i.Qb(),i.Rb(42,"tr"),i.Rb(43,"td"),i.wc(44,"quickOpen: boolean"),i.Qb(),i.Rb(45,"td"),i.wc(46,"Sets whether the menu should open and close without animation when the open/close methods are called."),i.Qb(),i.Qb(),i.Rb(47,"tr"),i.Rb(48,"td"),i.wc(49,"anchorElement: Element | mdcMenuSurfaceAnchor"),i.Qb(),i.Rb(50,"td"),i.wc(51,"Set to indicate an element the menu should be anchored to."),i.Qb(),i.Qb(),i.Rb(52,"tr"),i.Rb(53,"td"),i.wc(54,"fixed: boolean"),i.Qb(),i.Rb(55,"td"),i.wc(56,"Used to indicate that the menu is using fixed positioning."),i.Qb(),i.Qb(),i.Rb(57,"tr"),i.Rb(58,"td"),i.wc(59,"hoistToBody: boolean"),i.Qb(),i.Rb(60,"td"),i.wc(61,"Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(62,"div",0),i.Rb(63,"h3",1),i.wc(64,"MdcMenuSurfaceAnchor"),i.Qb(),i.wc(65," Sets the anchor element used as an anchor for menu-surface positioning logic. "),i.Rb(66,"p"),i.wc(67," Selector: "),i.Rb(68,"span",2),i.wc(69,"mdcMenuSurfaceAnchor"),i.Qb(),i.Rb(70,"span",2),i.wc(71,"mdc-menu-surface-anchor"),i.Qb(),i.Qb(),i.wc(72," Exported as: "),i.Rb(73,"span",2),i.wc(74,"mdcMenuSurfaceAnchor"),i.Qb(),i.Qb()),2&e&&(i.Bb(34),i.zc("anchorMargin: ","{","top: number, bottom: number, left: number, right : number","}",""),i.Bb(5),i.zc("coordinates: ","{","x: number, y: number","}",""))},directives:[b.i,b.l],encapsulation:2}),y)},{path:"sass",component:(M=function e(){_classCallCheck(this,e)},M.\u0275fac=function(e){return new(e||M)},M.\u0275cmp=i.Fb({type:M,selectors:[["ng-component"]],decls:44,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"h4",1),i.wc(2,"Sass Mixins"),i.Qb(),i.Rb(3,"table"),i.Rb(4,"thead"),i.Rb(5,"tr"),i.Rb(6,"th"),i.wc(7,"Mixin"),i.Qb(),i.Rb(8,"th"),i.wc(9,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(10,"tbody"),i.Rb(11,"tr"),i.Rb(12,"td"),i.Rb(13,"code"),i.wc(14,"ink-color($color)"),i.Qb(),i.Qb(),i.Rb(15,"td"),i.wc(16,"Sets the "),i.Rb(17,"code"),i.wc(18,"color"),i.Qb(),i.wc(19," property of the "),i.Rb(20,"code"),i.wc(21,"mdc-menu-surface"),i.Qb(),i.wc(22,"."),i.Qb(),i.Qb(),i.Rb(23,"tr"),i.Rb(24,"td"),i.Rb(25,"code"),i.wc(26,"fill-color($color)"),i.Qb(),i.Qb(),i.Rb(27,"td"),i.wc(28,"Sets the "),i.Rb(29,"code"),i.wc(30,"background-color"),i.Qb(),i.wc(31," property of the "),i.Rb(32,"code"),i.wc(33,"mdc-menu-surface"),i.Qb(),i.wc(34,"."),i.Qb(),i.Qb(),i.Rb(35,"tr"),i.Rb(36,"td"),i.Rb(37,"code"),i.wc(38,"shape-radius($radius, $rtl-reflexive)"),i.Qb(),i.Qb(),i.Rb(39,"td"),i.wc(40,"Sets the rounded shape to menu surface with given radius size. Set "),i.Rb(41,"code"),i.wc(42,"$rtl-reflexive"),i.Qb(),i.wc(43," to true to flip radius values in RTL context, defaults to false."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb())},directives:[b.l],encapsulation:2}),M)},{path:"examples",component:(S=function e(){_classCallCheck(this,e),this.images=Array.from(Array(2),(function(e,t){return t})),this.corners=["topStart","topEnd","bottomStart","bottomEnd"],this.example1={html:'<div mdcMenuSurfaceAnchor #demoAnchor>\n  <button mdc-button raised (click)="demoSurface.open = !demoSurface.open">\n    Show Menu Surface\n  </button>\n  <mdc-menu-surface #demoSurface class="demo-menu-surface--shaped" [anchorElement]="demoAnchor">\n    <mdc-image-list class="menu-surface-image-list">\n      <mdc-image-list-item *ngFor="let i of images">\n        <mdc-image-list-image-aspect>\n          <img mdcImageListImage src="<image source>" />\n        </mdc-image-list-image-aspect>\n        <mdc-image-list-supporting>\n          <span mdcImageListLabel>Text label</span>\n        </mdc-image-list-supporting>\n      </mdc-image-list-item>\n    </mdc-image-list>\n  </mdc-menu-surface>\n</div>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_menu-surface.scss"}},S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=i.Fb({type:S,selectors:[["ng-component"]],decls:48,vars:15,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-content__headline"],[1,"demo-layout__column"],["menuSurfaceAnchorCorner",""],[4,"ngFor","ngForOf"],["label","Top margin","type","number"],["marginTop",""],["label","Bottom margin","type","number"],["marginBottom",""],["label","Left margin","type","number"],["marginLeft",""],["label","Right margin","type","number"],["marginRight",""],["quickOpen",""],["fixed",""],["hoistToBody",""],[1,"demo-layout--center"],["mdcMenuSurfaceAnchor",""],["demoAnchor",""],["mdc-button","","raised","",3,"click"],[1,"demo-menu-surface--one",3,"hoistToBody","anchorElement","anchorCorner","quickOpen","fixed","anchorMargin"],["demoSurface",""],[1,"menu-surface-image-list"],[3,"example"],[3,"value"],["mdcImageListImage","",3,"src"],["mdcImageListLabel",""]],template:function(e,t){if(1&e){var c=i.Sb();i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",0),i.Rb(3,"h3",2),i.wc(4,"Anchor Corner"),i.Qb(),i.Rb(5,"div",3),i.Rb(6,"mdc-radio-group",3,4),i.uc(8,g,4,2,"mdc-form-field",5),i.Qb(),i.Qb(),i.Qb(),i.Rb(9,"div",0),i.Rb(10,"h3",2),i.wc(11,"Anchor Margin"),i.Qb(),i.Rb(12,"div",3),i.Mb(13,"mdc-text-field",6,7),i.Mb(15,"mdc-text-field",8,9),i.Mb(17,"mdc-text-field",10,11),i.Mb(19,"mdc-text-field",12,13),i.Qb(),i.Qb(),i.Rb(21,"div",0),i.Rb(22,"div",3),i.Rb(23,"mdc-form-field"),i.Mb(24,"mdc-checkbox",null,14),i.Rb(26,"label"),i.wc(27),i.Qb(),i.Qb(),i.Rb(28,"mdc-form-field"),i.Mb(29,"mdc-checkbox",null,15),i.Rb(31,"label"),i.wc(32,"Fixed position (scrolls with page)"),i.Qb(),i.Qb(),i.Rb(33,"mdc-form-field"),i.Mb(34,"mdc-checkbox",null,16),i.Rb(36,"label"),i.wc(37,"Hoist to Body"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(38,"div",17),i.Rb(39,"div",18,19),i.Rb(41,"button",20),i.Zb("click",(function(){i.pc(c);var e=i.oc(44);return e.open=!e.open})),i.wc(42," Show Menu Surface "),i.Qb(),i.Rb(43,"mdc-menu-surface",21,22),i.Rb(45,"mdc-image-list",23),i.uc(46,v,6,1,"mdc-image-list-item",5),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Mb(47,"example-viewer",24),i.Qb()}if(2&e){var n=i.oc(7),o=i.oc(14),a=i.oc(16),r=i.oc(18),b=i.oc(20),s=i.oc(25),m=i.oc(30),d=i.oc(35),u=i.oc(40);i.Bb(8),i.ic("ngForOf",t.corners),i.Bb(19),i.yc("Disable open animation: ",s.checked,""),i.Bb(16),i.ic("hoistToBody",d.checked)("anchorElement",u)("anchorCorner",n.value)("quickOpen",s.checked)("fixed",m.checked)("anchorMargin",i.mc(10,_,o.value,a.value,r.value,b.value)),i.Bb(3),i.ic("ngForOf",t.images),i.Bb(1),i.ic("example",t.example1)}},directives:[s.a,m.j,d.a,u.a,l.a,p.a,f.a,h.a,R.a,w.a,Q.b,R.d,R.c,R.b,R.f,R.e],encapsulation:2}),S)}]}],A=((C=function e(){_classCallCheck(this,e)}).\u0275mod=i.Jb({type:C}),C.\u0275inj=i.Ib({factory:function(e){return new(e||C)},imports:[[o.e.forChild(B)],o.e]}),C),E=((k=function e(){_classCallCheck(this,e)}).\u0275mod=i.Jb({type:k}),k.\u0275inj=i.Ib({factory:function(e){return new(e||k)},imports:[[n.a,A]]}),k)}}]);