(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"66nc":function(e,t,n){var i=n("mrSG").__decorate,l=n("mrSG").__metadata;Object.defineProperty(t,"__esModule",{value:!0});var o=n("8Y7J"),s=n("GS7A"),d=n("SVse"),r=n("sdDj"),a=n("7LN8"),u=0,h=function(){function e(e,t,n){this.el=e,this.renderer=t,this.zone=n,this.draggable=!0,this.resizable=!0,this.closeOnEscape=!0,this.closable=!0,this.responsive=!0,this.showHeader=!0,this.breakpoint=640,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.minX=0,this.minY=0,this.focusOnShow=!0,this.focusTrap=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.closeIcon="pi pi-times",this.minimizeIcon="pi pi-window-minimize",this.maximizeIcon="pi pi-window-maximize",this.onShow=new o.EventEmitter,this.onHide=new o.EventEmitter,this.visibleChange=new o.EventEmitter,this.id="ui-dialog-"+u++}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e,console.warn("width property is deprecated, use style to define the width of the Dialog.")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e,console.warn("height property is deprecated, use style to define the height of the Dialog.")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minWidth",{get:function(){return this._minWidth},set:function(e){this._minWidth=e,console.warn("minWidth property is deprecated, use style to define the minWidth of the Dialog.")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minHeight",{get:function(){return this._minHeight},set:function(e){this._minHeight=e,console.warn("minHeight property is deprecated, use style to define the minHeight of the Dialog.")},enumerable:!0,configurable:!0}),e.prototype.focus=function(){var e=r.DomHandler.findSingle(this.container,"button");e&&this.zone.runOutsideAngular((function(){setTimeout((function(){return e.focus()}),5)}))},e.prototype.positionOverlay=function(){var e=r.DomHandler.getViewport();r.DomHandler.getOuterHeight(this.container)+this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight>e.height?(this.contentViewChild.nativeElement.style.height=.75*e.height+"px",this.container.style.height="auto"):(this.contentViewChild.nativeElement.style.height=null,this.height&&(this.container.style.height=this.height+"px")),this.positionLeft>=0&&this.positionTop>=0?(this.container.style.left=this.positionLeft+"px",this.container.style.top=this.positionTop+"px"):this.positionTop>=0?(this.center(),this.container.style.top=this.positionTop+"px"):this.center()},e.prototype.close=function(e){this.visibleChange.emit(!1),e.preventDefault()},e.prototype.center=function(){var e=r.DomHandler.getOuterWidth(this.container),t=r.DomHandler.getOuterHeight(this.container);0==e&&0==t&&(this.container.style.visibility="hidden",this.container.style.display="block",e=r.DomHandler.getOuterWidth(this.container),t=r.DomHandler.getOuterHeight(this.container),this.container.style.display="none",this.container.style.visibility="visible");var n=r.DomHandler.getViewport(),i=Math.max(Math.floor((n.width-e)/2),0),l=Math.max(Math.floor((n.height-t)/2),0);this.container.style.left=i+"px",this.container.style.top=l+"px"},e.prototype.enableModality=function(){var e=this;if(!this.mask){this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1);var t="ui-widget-overlay ui-dialog-mask";this.blockScroll&&(t+=" ui-dialog-mask-scrollblocker"),r.DomHandler.addMultipleClasses(this.mask,t),this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.mask,"click",(function(t){e.close(t)}))),document.body.appendChild(this.mask),this.blockScroll&&r.DomHandler.addClass(document.body,"ui-overflow-hidden")}},e.prototype.disableModality=function(){if(this.mask){if(this.unbindMaskClickListener(),document.body.removeChild(this.mask),this.blockScroll){for(var e=document.body.children,t=void 0,n=0;n<e.length;n++)if(r.DomHandler.hasClass(e[n],"ui-dialog-mask-scrollblocker")){t=!0;break}t||r.DomHandler.removeClass(document.body,"ui-overflow-hidden")}this.mask=null}},e.prototype.toggleMaximize=function(e){this.maximized?this.revertMaximize():this.maximize(),e.preventDefault()},e.prototype.maximize=function(){this.preMaximizePageX=parseFloat(this.container.style.top),this.preMaximizePageY=parseFloat(this.container.style.left),this.preMaximizeContainerWidth=r.DomHandler.getOuterWidth(this.container),this.preMaximizeContainerHeight=r.DomHandler.getOuterHeight(this.container),this.preMaximizeContentHeight=r.DomHandler.getOuterHeight(this.contentViewChild.nativeElement),this.container.style.top="0px",this.container.style.left="0px",this.container.style.width="100vw",this.container.style.height="100vh";var e=parseFloat(this.container.style.top);this.headerViewChild&&this.headerViewChild.nativeElement&&(e+=r.DomHandler.getOuterHeight(this.headerViewChild.nativeElement)),this.footerViewChild&&this.footerViewChild.nativeElement&&(e+=r.DomHandler.getOuterHeight(this.footerViewChild.nativeElement)),this.contentViewChild.nativeElement.style.height="calc(100vh - "+e+"px)",r.DomHandler.addClass(this.container,"ui-dialog-maximized"),r.DomHandler.addClass(document.body,"ui-overflow-hidden"),this.moveOnTop(),this.maximized=!0},e.prototype.revertMaximize=function(){var e=this;this.container.style.top=this.preMaximizePageX+"px",this.container.style.left=this.preMaximizePageY+"px",this.container.style.width=this.preMaximizeContainerWidth+"px",this.container.style.height=this.preMaximizeContainerHeight+"px",this.contentViewChild.nativeElement.style.height=this.preMaximizeContentHeight+"px",r.DomHandler.removeClass(document.body,"ui-overflow-hidden"),this.maximized=!1,this.zone.runOutsideAngular((function(){setTimeout((function(){return r.DomHandler.removeClass(e.container,"ui-dialog-maximized")}),300)}))},e.prototype.unbindMaskClickListener=function(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)},e.prototype.moveOnTop=function(){this.autoZIndex&&(this.container.style.zIndex=String(this.baseZIndex+ ++r.DomHandler.zindex))},e.prototype.onCloseMouseDown=function(e){this.closeIconMouseDown=!0},e.prototype.initDrag=function(e){this.closeIconMouseDown?this.closeIconMouseDown=!1:this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,r.DomHandler.addClass(document.body,"ui-unselectable-text"))},e.prototype.getFocusableElements=function(){for(var e=[],t=0,n=r.DomHandler.find(this.container,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), \n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), \n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), \n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), \n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])');t<n.length;t++){var i=n[t];"none"!=getComputedStyle(i).display&&"hidden"!=getComputedStyle(i).visibility&&e.push(i)}return e},e.prototype.onKeydown=function(e){if(this.focusTrap&&9===e.which){e.preventDefault();var t=this.getFocusableElements();if(t&&t.length>0)if(document.activeElement){var n=t.indexOf(document.activeElement);e.shiftKey?-1==n||0===n?t[t.length-1].focus():t[n-1].focus():-1==n||n===t.length-1?t[0].focus():t[n+1].focus()}else t[0].focus()}},e.prototype.onDrag=function(e){if(this.dragging){var t=r.DomHandler.getOuterWidth(this.container),n=r.DomHandler.getOuterHeight(this.container),i=e.pageX-this.lastPageX,l=e.pageY-this.lastPageY,o=r.DomHandler.getOffset(this.container),s=o.left+i,d=o.top+l,a=r.DomHandler.getViewport();s>=this.minX&&s+t<a.width&&(this.container.style.left=s+"px"),d>=this.minY&&d+n<a.height&&(this.container.style.top=d+"px"),this.lastPageX=e.pageX,this.lastPageY=e.pageY}},e.prototype.endDrag=function(e){this.draggable&&(this.dragging=!1,r.DomHandler.removeClass(document.body,"ui-unselectable-text"))},e.prototype.initResize=function(e){this.resizable&&(this.preWidth=null,this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,r.DomHandler.addClass(document.body,"ui-unselectable-text"))},e.prototype.onResize=function(e){if(this.resizing){var t=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,i=r.DomHandler.getOuterWidth(this.container),l=r.DomHandler.getOuterHeight(this.container),o=r.DomHandler.getOuterHeight(this.contentViewChild.nativeElement),s=i+t,d=l+n,a=this.container.style.minWidth,u=this.container.style.minHeight,h=r.DomHandler.getOffset(this.container),p=r.DomHandler.getViewport();(!a||s>parseInt(a))&&h.left+s<p.width&&(this.container.style.width=s+"px"),(!u||d>parseInt(u))&&h.top+d<p.height&&(this.container.style.height=d+"px",this.contentViewChild.nativeElement.style.height=o+n+"px"),this.lastPageX=e.pageX,this.lastPageY=e.pageY}},e.prototype.onResizeEnd=function(){this.resizing&&(this.resizing=!1,r.DomHandler.removeClass(document.body,"ui-unselectable-text"))},e.prototype.bindGlobalListeners=function(){this.modal&&this.bindDocumentKeydownListener(),this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.responsive&&this.bindDocumentResponsiveListener(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()},e.prototype.unbindGlobalListeners=function(){this.unbindDocumentDragListener(),this.unbindDocumentKeydownListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentResponsiveListener(),this.unbindDocumentEscapeListener()},e.prototype.bindDocumentKeydownListener=function(){var e=this;this.zone.runOutsideAngular((function(){e.documentKeydownListener=e.onKeydown.bind(e),window.document.addEventListener("keydown",e.documentKeydownListener)}))},e.prototype.unbindDocumentKeydownListener=function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},e.prototype.bindDocumentDragListener=function(){var e=this;this.zone.runOutsideAngular((function(){e.documentDragListener=e.onDrag.bind(e),window.document.addEventListener("mousemove",e.documentDragListener)}))},e.prototype.unbindDocumentDragListener=function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},e.prototype.bindDocumentDragEndListener=function(){var e=this;this.zone.runOutsideAngular((function(){e.documentDragEndListener=e.endDrag.bind(e),window.document.addEventListener("mouseup",e.documentDragEndListener)}))},e.prototype.unbindDocumentDragEndListener=function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)},e.prototype.bindDocumentResizeListeners=function(){var e=this;this.zone.runOutsideAngular((function(){e.documentResizeListener=e.onResize.bind(e),e.documentResizeEndListener=e.onResizeEnd.bind(e),window.document.addEventListener("mousemove",e.documentResizeListener),window.document.addEventListener("mouseup",e.documentResizeEndListener)}))},e.prototype.unbindDocumentResizeListeners=function(){this.documentResizeListener&&this.documentResizeEndListener&&(window.document.removeEventListener("mouseup",this.documentResizeListener),window.document.removeEventListener("mouseup",this.documentResizeEndListener),this.documentResizeListener=null,this.documentResizeEndListener=null)},e.prototype.bindDocumentResponsiveListener=function(){var e=this;this.zone.runOutsideAngular((function(){e.documentResponsiveListener=e.onWindowResize.bind(e),window.addEventListener("resize",e.documentResponsiveListener)}))},e.prototype.unbindDocumentResponsiveListener=function(){this.documentResponsiveListener&&(window.removeEventListener("resize",this.documentResponsiveListener),this.documentResponsiveListener=null)},e.prototype.onWindowResize=function(){if(!this.maximized){var e=r.DomHandler.getViewport(),t=r.DomHandler.getOuterWidth(this.container);e.width<=this.breakpoint?(this.preWidth||(this.preWidth=t),this.container.style.left="0px",this.container.style.width="100%"):(this.container.style.width=this.preWidth+"px",this.positionOverlay())}},e.prototype.bindDocumentEscapeListener=function(){var e=this;this.documentEscapeListener=this.renderer.listen("document","keydown",(function(t){27==t.which&&parseInt(e.container.style.zIndex)===r.DomHandler.zindex+e.baseZIndex&&e.close(t)}))},e.prototype.unbindDocumentEscapeListener=function(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)},e.prototype.setDimensions=function(){this.width&&(this.container.style.width=this.width+"px"),this.height&&(this.container.style.height=this.height+"px"),this.minWidth&&(this.container.style.minWidth=this.minWidth+"px"),this.minHeight&&(this.container.style.minHeight=this.minHeight+"px")},e.prototype.appendContainer=function(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):r.DomHandler.appendChild(this.container,this.appendTo))},e.prototype.restoreAppend=function(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.container)},e.prototype.onAnimationStart=function(e){switch(e.toState){case"visible":this.container=e.element,this.setDimensions(),this.onShow.emit({}),this.appendContainer(),this.moveOnTop(),this.positionOverlay(),this.bindGlobalListeners(),this.maximized&&r.DomHandler.addClass(document.body,"ui-overflow-hidden"),this.modal&&this.enableModality(),this.focusOnShow&&this.focus(),this.responsive&&this.onWindowResize();break;case"void":this.onContainerDestroy(),this.onHide.emit({})}},e.prototype.onContainerDestroy=function(){this.unbindGlobalListeners(),this.dragging=!1,this.maximized&&(r.DomHandler.removeClass(document.body,"ui-overflow-hidden"),this.maximized=!1),this.modal&&this.disableModality(),this.container=null},e.prototype.ngOnDestroy=function(){this.container&&(this.restoreAppend(),this.onContainerDestroy())},i([o.Input(),l("design:type",Boolean)],e.prototype,"visible",void 0),i([o.Input(),l("design:type",String)],e.prototype,"header",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"draggable",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"resizable",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"positionLeft",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"positionTop",void 0),i([o.Input(),l("design:type",Object)],e.prototype,"contentStyle",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"modal",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"closeOnEscape",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"dismissableMask",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"rtl",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"closable",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"responsive",void 0),i([o.Input(),l("design:type",Object)],e.prototype,"appendTo",void 0),i([o.Input(),l("design:type",Object)],e.prototype,"style",void 0),i([o.Input(),l("design:type",String)],e.prototype,"styleClass",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"showHeader",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"breakpoint",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"blockScroll",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"autoZIndex",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"baseZIndex",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"minX",void 0),i([o.Input(),l("design:type",Number)],e.prototype,"minY",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"focusOnShow",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"maximizable",void 0),i([o.Input(),l("design:type",Boolean)],e.prototype,"focusTrap",void 0),i([o.Input(),l("design:type",String)],e.prototype,"transitionOptions",void 0),i([o.Input(),l("design:type",String)],e.prototype,"closeIcon",void 0),i([o.Input(),l("design:type",String)],e.prototype,"minimizeIcon",void 0),i([o.Input(),l("design:type",String)],e.prototype,"maximizeIcon",void 0),i([o.ContentChildren(a.Header,{descendants:!1}),l("design:type",o.QueryList)],e.prototype,"headerFacet",void 0),i([o.ContentChildren(a.Footer,{descendants:!1}),l("design:type",o.QueryList)],e.prototype,"footerFacet",void 0),i([o.ViewChild("titlebar"),l("design:type",o.ElementRef)],e.prototype,"headerViewChild",void 0),i([o.ViewChild("content"),l("design:type",o.ElementRef)],e.prototype,"contentViewChild",void 0),i([o.ViewChild("footer"),l("design:type",o.ElementRef)],e.prototype,"footerViewChild",void 0),i([o.Output(),l("design:type",o.EventEmitter)],e.prototype,"onShow",void 0),i([o.Output(),l("design:type",o.EventEmitter)],e.prototype,"onHide",void 0),i([o.Output(),l("design:type",o.EventEmitter)],e.prototype,"visibleChange",void 0),i([o.Input(),l("design:type",Object),l("design:paramtypes",[Object])],e.prototype,"width",null),i([o.Input(),l("design:type",Object),l("design:paramtypes",[Object])],e.prototype,"height",null),i([o.Input(),l("design:type",Object),l("design:paramtypes",[Object])],e.prototype,"minWidth",null),i([o.Input(),l("design:type",Object),l("design:paramtypes",[Object])],e.prototype,"minHeight",null),i([o.Component({selector:"p-dialog",template:'\n        <div #container [ngClass]="{\'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow\':true, \'ui-dialog-rtl\':rtl,\'ui-dialog-draggable\':draggable,\'ui-dialog-resizable\':resizable}"\n            [ngStyle]="style" [class]="styleClass"\n            [@animation]="{value: \'visible\', params: {transitionParams: transitionOptions}}" (@animation.start)="onAnimationStart($event)" role="dialog" [attr.aria-labelledby]="id + \'-label\'" *ngIf="visible">\n            <div #titlebar class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top" (mousedown)="initDrag($event)" *ngIf="showHeader">\n                <span [attr.id]="id + \'-label\'" class="ui-dialog-title" *ngIf="header">{{header}}</span>\n                <span [attr.id]="id + \'-label\'" class="ui-dialog-title" *ngIf="headerFacet && headerFacet.first">\n                    <ng-content select="p-header"></ng-content>\n                </span>\n                <a *ngIf="closable" [ngClass]="{\'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all\':true}" tabindex="0" role="button" (click)="close($event)" (keydown.enter)="close($event)" (mousedown)="onCloseMouseDown($event)">\n                    <span [class]="closeIcon"></span>\n                </a>\n                <a *ngIf="maximizable" [ngClass]="{\'ui-dialog-titlebar-icon ui-dialog-titlebar-maximize ui-corner-all\':true}" tabindex="0" role="button" (click)="toggleMaximize($event)" (keydown.enter)="toggleMaximize($event)">\n                    <span [ngClass]="maximized ? minimizeIcon : maximizeIcon"></span>\n                </a>\n            </div>\n            <div #content class="ui-dialog-content ui-widget-content" [ngStyle]="contentStyle">\n                <ng-content></ng-content>\n            </div>\n            <div #footer class="ui-dialog-footer ui-widget-content" *ngIf="footerFacet && footerFacet.first">\n                <ng-content select="p-footer"></ng-content>\n            </div>\n            <div *ngIf="resizable" class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;" (mousedown)="initResize($event)"></div>\n        </div>\n    ',animations:[s.trigger("animation",[s.state("void",s.style({transform:"scale(0.7)",opacity:0})),s.state("visible",s.style({transform:"none",opacity:1})),s.transition("* => *",s.animate("{{transitionParams}}"))])]})],e)}();t.Dialog=h,t.DialogModule=function(){return i([o.NgModule({imports:[d.CommonModule],exports:[h,a.SharedModule],declarations:[h]})],(function(){}))}()},"6y0i":function(e,t,n){"use strict";n.r(t);var i=n("8Y7J"),l=n("mrSG"),o=n("ZZ/e");class s{constructor(e,t,n){this.navCtrl=e,this.alertController=t,this.toastController=n}ngOnInit(){this.cols=[{field:"SR No",header:"SR No"},{field:"Client Name",header:"Client Name"},{field:"Address",header:"Address"},{field:"No Of ARMS",header:"No Of ARMS"},{field:"Authorized Person",header:"Authorized Person"},{field:"No Of Wings",header:"No Of Wings"},{field:"No Of Flats",header:"No Of Flats"},{field:"Project Name",header:"Project Name"},{field:"Account Detail",header:"Account Detail"},{field:"Email Id",header:"Email Id"},{field:"Mobile No",header:"Mobile No"}]}editAdmin(){this.navCtrl.navigateForward("/edit-admin")}deleteAdmin(){return l.__awaiter(this,void 0,void 0,(function*(){const e=yield this.alertController.create({header:"Are you sure!",message:"You want to delete admin",buttons:[{text:"No",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Yes",handler:()=>{this.alertDisplay("1")}}]});yield e.present()}))}alertDisplay(e){return l.__awaiter(this,void 0,void 0,(function*(){"1"==e&&(yield this.toastController.create({message:"Admin Delete Successfully",duration:2e3,color:"medium"})).present()}))}}class d{}var r=n("pMnS"),a=n("oBZk"),u=n("Fa87"),h=n("s7LF"),p=n("RXyF"),c=n("Czxz"),m=n("7LN8"),g=i["\u0275crt"]({encapsulation:0,styles:[[".header_style[_ngcontent-%COMP%]{font-size:5vh}.sub_header_style[_ngcontent-%COMP%]{font-size:2vh;padding-left:5vh}body[_ngcontent-%COMP%]{cursor:url(http://ionicframework.com/img/finger.png),auto}.header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{background-color:#d3d3d3}.col[_ngcontent-%COMP%]{border:1px solid grey;border-bottom-style:none;border-right-style:none}.col[_ngcontent-%COMP%]:last-child{border-right:1px solid grey}.row[_ngcontent-%COMP%]:last-child   .col[_ngcontent-%COMP%]{border-bottom:1px solid grey}.subtitle[_ngcontent-%COMP%]{position:absolute;top:2vw;left:7.8vh;font-size:66%}"]],data:{}});function y(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,22,"tr",[],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["SR No"])),(e()(),i["\u0275eld"](3,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Client Name"])),(e()(),i["\u0275eld"](5,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Address"])),(e()(),i["\u0275eld"](7,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["No Of ARMS"])),(e()(),i["\u0275eld"](9,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Authorized Person"])),(e()(),i["\u0275eld"](11,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["No Of Wings"])),(e()(),i["\u0275eld"](13,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["No Of Flats"])),(e()(),i["\u0275eld"](15,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Project Name"])),(e()(),i["\u0275eld"](17,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Account Detail"])),(e()(),i["\u0275eld"](19,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Email Id"])),(e()(),i["\u0275eld"](21,0,null,null,1,"th",[],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Mobile No"]))],null,null)}function f(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,8,"tr",[],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(e()(),i["\u0275ted"](2,null,["",""])),(e()(),i["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(e()(),i["\u0275ted"](4,null,["",""])),(e()(),i["\u0275eld"](5,0,null,null,1,"td",[],null,null,null,null,null)),(e()(),i["\u0275ted"](6,null,["",""])),(e()(),i["\u0275eld"](7,0,null,null,1,"td",[],null,null,null,null,null)),(e()(),i["\u0275ted"](8,null,["",""]))],null,(function(e,t){e(t,2,0,t.context.$implicit.vin),e(t,4,0,t.context.$implicit.year),e(t,6,0,t.context.$implicit.brand),e(t,8,0,t.context.$implicit.color)}))}function b(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,41,"ion-content",[],null,null,null,a.z,a.f)),i["\u0275did"](1,49152,null,0,o.t,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275eld"](2,0,null,0,10,"ion-header",[],null,null,null,a.B,a.h)),i["\u0275did"](3,49152,null,0,o.A,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275eld"](4,0,null,0,8,"ion-toolbar",[["class","custom-toolbar"]],null,null,null,a.N,a.t)),i["\u0275did"](5,49152,null,0,o.Bb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275eld"](6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.w,a.c)),i["\u0275did"](7,49152,null,0,o.k,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275eld"](8,0,null,0,1,"ion-menu-button",[],null,null,null,a.I,a.p)),i["\u0275did"](9,49152,null,0,o.Q,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275eld"](10,0,null,0,2,"ion-title",[["style","text-align: center;"]],null,null,null,a.M,a.s)),i["\u0275did"](11,49152,null,0,o.zb,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],null,null),(e()(),i["\u0275ted"](-1,0,[" Admin List "])),(e()(),i["\u0275eld"](13,0,null,0,7,"div",[["class","p-grid p-justify-start"],["style","margin-top: .5vw;"]],null,null,null,null,null)),(e()(),i["\u0275eld"](14,0,null,null,6,"div",[["class","p-col-2"]],null,null,null,null,null)),(e()(),i["\u0275eld"](15,0,null,null,5,"div",[["class","p-col-4"],["p-justify-end",""]],null,null,null,null,null)),(e()(),i["\u0275eld"](16,0,null,null,4,"span",[["class","ui-float-label"]],null,null,null,null,null)),(e()(),i["\u0275eld"](17,0,null,null,1,"input",[["id","float-input"],["pInputText",""],["size","30"],["type","text"]],[[2,"ui-inputtext",null],[2,"ui-corner-all",null],[2,"ui-state-default",null],[2,"ui-widget",null],[2,"ui-state-filled",null]],[[null,"input"]],(function(e,t,n){var l=!0;return"input"===t&&(l=!1!==i["\u0275nov"](e,18).onInput(n)&&l),l}),null,null)),i["\u0275did"](18,278528,null,0,u.InputText,[i.ElementRef,[2,h.NgModel]],null,null),(e()(),i["\u0275eld"](19,0,null,null,1,"label",[["for","float-input"]],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,["Username"])),(e()(),i["\u0275eld"](21,0,null,0,7,"p-table",[],null,null,null,p.h,p.b)),i["\u0275prd"](512,null,c.TableService,c.TableService,[]),i["\u0275did"](23,5488640,null,1,c.Table,[i.ElementRef,i.NgZone,c.TableService,i.ChangeDetectorRef],null,null),i["\u0275qud"](603979776,1,{templates:1}),(e()(),i["\u0275and"](0,null,null,1,null,y)),i["\u0275did"](26,16384,[[1,4]],0,m.PrimeTemplate,[i.TemplateRef],{name:[0,"name"]},null),(e()(),i["\u0275and"](0,null,null,1,null,f)),i["\u0275did"](28,16384,[[1,4]],0,m.PrimeTemplate,[i.TemplateRef],{name:[0,"name"]},null),(e()(),i["\u0275eld"](29,0,null,0,12,"div",[["class","p-grid p-justify-center"],["style","margin-top: 3vh;"]],null,null,null,null,null)),(e()(),i["\u0275eld"](30,0,null,null,3,"div",[["class","p-col-2"]],null,null,null,null,null)),(e()(),i["\u0275eld"](31,0,null,null,2,"ion-button",[["color","light"],["size","small"]],null,null,null,a.v,a.b)),i["\u0275did"](32,49152,null,0,o.j,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"],size:[1,"size"]},null),(e()(),i["\u0275ted"](-1,0,["View"])),(e()(),i["\u0275eld"](34,0,null,null,3,"div",[["class","p-col-2"]],null,null,null,null,null)),(e()(),i["\u0275eld"](35,0,null,null,2,"ion-button",[["color","light"],["size","small"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.editAdmin()&&i),i}),a.v,a.b)),i["\u0275did"](36,49152,null,0,o.j,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"],size:[1,"size"]},null),(e()(),i["\u0275ted"](-1,0,["Edit Admin"])),(e()(),i["\u0275eld"](38,0,null,null,3,"div",[["class","p-col-2"],["p-justify-left",""]],null,null,null,null,null)),(e()(),i["\u0275eld"](39,0,null,null,2,"ion-button",[["color","light"],["size","small"]],null,[[null,"click"]],(function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.deleteAdmin()&&i),i}),a.v,a.b)),i["\u0275did"](40,49152,null,0,o.j,[i.ChangeDetectorRef,i.ElementRef,i.NgZone],{color:[0,"color"],size:[1,"size"]},null),(e()(),i["\u0275ted"](-1,0,["Delete Admin"]))],(function(e,t){e(t,18,0),e(t,23,0),e(t,26,0,"header"),e(t,28,0,"body"),e(t,32,0,"light","small"),e(t,36,0,"light","small"),e(t,40,0,"light","small")}),(function(e,t){e(t,17,0,!0,!0,!0,!0,i["\u0275nov"](t,18).filled)}))}function v(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"app-admin-list",[],null,null,null,b,g)),i["\u0275did"](1,114688,null,0,s,[o.Gb,o.a,o.Jb],null,null)],(function(e,t){e(t,1,0)}),null)}var w=i["\u0275ccf"]("app-admin-list",s,v,{},{},[]),D=n("SVse"),C=n("IP0z"),z=n("/HVE"),x=n("hOhj"),L=n("nciF"),E=n("mU/a"),I=n("66nc"),O=n("iInd");n.d(t,"AdminListPageModuleNgFactory",(function(){return H}));var H=i["\u0275cmf"](d,[],(function(e){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,w]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,D.NgLocalization,D.NgLocaleLocalization,[i.LOCALE_ID,[2,D["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,h["\u0275angular_packages_forms_forms_o"],h["\u0275angular_packages_forms_forms_o"],[]),i["\u0275mpd"](4608,o.b,o.b,[i.NgZone,i.ApplicationRef]),i["\u0275mpd"](4608,o.Fb,o.Fb,[o.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](4608,o.Hb,o.Hb,[o.b,i.ComponentFactoryResolver,i.Injector]),i["\u0275mpd"](1073742336,D.CommonModule,D.CommonModule,[]),i["\u0275mpd"](1073742336,h["\u0275angular_packages_forms_forms_d"],h["\u0275angular_packages_forms_forms_d"],[]),i["\u0275mpd"](1073742336,h.FormsModule,h.FormsModule,[]),i["\u0275mpd"](1073742336,o.Db,o.Db,[]),i["\u0275mpd"](1073742336,m.SharedModule,m.SharedModule,[]),i["\u0275mpd"](1073742336,C.a,C.a,[]),i["\u0275mpd"](1073742336,z.b,z.b,[]),i["\u0275mpd"](1073742336,x.ScrollingModule,x.ScrollingModule,[]),i["\u0275mpd"](1073742336,L.DropdownModule,L.DropdownModule,[]),i["\u0275mpd"](1073742336,E.PaginatorModule,E.PaginatorModule,[]),i["\u0275mpd"](1073742336,c.TableModule,c.TableModule,[]),i["\u0275mpd"](1073742336,u.InputTextModule,u.InputTextModule,[]),i["\u0275mpd"](1073742336,I.DialogModule,I.DialogModule,[]),i["\u0275mpd"](1073742336,O.n,O.n,[[2,O.s],[2,O.m]]),i["\u0275mpd"](1073742336,d,d,[]),i["\u0275mpd"](1024,O.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);