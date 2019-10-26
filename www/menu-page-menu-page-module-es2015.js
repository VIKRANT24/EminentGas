(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-page-menu-page-module"],{

/***/ "./node_modules/primeng/button.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/button.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/button/button */ "./node_modules/primeng/components/button/button.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-page/menu-page.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-page/menu-page.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">Welcome To Menu Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n                <div class=\"p-grid p-justify-center\" style=\"margin-top: 3vh;\">\n                    <div class=\"p-col-2\">\n                     \n                        <!-- <ion-button color=\"light\" size=\"small\"  expand=\"full\" (click)=\"addAdmin()\">Add Admin</ion-button> -->\n                        <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\"  (click)=\"addAdmin()\">Add Admin</ion-button>\n                    \n                    </div>\n                    <div class=\"p-col-2\">\n                     \n                        <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"adminList()\">Admin List</ion-button>\n                      \n                    \n                    </div>\n                  \n                </div>\n              </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu-page/menu-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menu-page/menu-page.module.ts ***!
  \***********************************************/
/*! exports provided: MenuPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPagePageModule", function() { return MenuPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-page.page */ "./src/app/menu-page/menu-page.page.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_7__);








const routes = [
    {
        path: '',
        component: _menu_page_page__WEBPACK_IMPORTED_MODULE_6__["MenuPagePage"]
    }
];
let MenuPagePageModule = class MenuPagePageModule {
};
MenuPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page_page__WEBPACK_IMPORTED_MODULE_6__["MenuPagePage"]]
    })
], MenuPagePageModule);



/***/ }),

/***/ "./src/app/menu-page/menu-page.page.scss":
/*!***********************************************!*\
  !*** ./src/app/menu-page/menu-page.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 10px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n  height: 4vh;\n  margin-top: 3vw;\n  margin-bottom: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbWVudS1wYWdlL21lbnUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnUtcGFnZS9tZW51LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWVudS1wYWdlL21lbnUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOjEwcHggO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzI3MTUgIWltcG9ydGFudDtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBtYXJnaW4tdG9wOiAzdnc7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIFxuICAgIH0iLCJpb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA0dmg7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-page/menu-page.page.ts":
/*!*********************************************!*\
  !*** ./src/app/menu-page/menu-page.page.ts ***!
  \*********************************************/
/*! exports provided: MenuPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPagePage", function() { return MenuPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MenuPagePage = class MenuPagePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    addAdmin() {
        this.navCtrl.navigateForward('/add-admin');
    }
    adminList() {
        this.navCtrl.navigateForward('/admin-list');
    }
};
MenuPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MenuPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-page',
        template: __webpack_require__(/*! raw-loader!./menu-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu-page/menu-page.page.html"),
        styles: [__webpack_require__(/*! ./menu-page.page.scss */ "./src/app/menu-page/menu-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MenuPagePage);



/***/ })

}]);
//# sourceMappingURL=menu-page-menu-page-module-es2015.js.map