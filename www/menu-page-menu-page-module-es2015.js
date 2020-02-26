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

module.exports = "<head>\n    <meta charset=\"utf-8\" />\n    <title>Ionic App</title>\n  \n    <base href=\"/\" />\n  \n    <meta name=\"viewport\" content=\"viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n    <meta name=\"format-detection\" content=\"telephone=no\" />\n    <meta name=\"msapplication-tap-highlight\" content=\"no\" />\n  \n    <link rel=\"icon\" type=\"image/png\" href=\"assets/icon/favicon.png\" />\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/bootstrap/css/bootstrap.min.css\">\n  \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n  \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/animate/animate.css\">\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/css-hamburgers/hamburgers.min.css\">\n  \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/select2/select2.min.css\">\n  \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/util.css\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/main.css\">\n  \n   \n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n  </head> \n  <ion-content>\n   \n      \n      <div class=\"limiter\">\n        <div class=\"container-login100\">\n          <div class=\"wrap-login100\">\n            <div class=\"login100-pic js-tilt\" data-tilt style=\"margin-top:100px\">\n              <div class=\"logo\" style=\"width:220px\">\n                  <!-- <img class=\"logo__image\" src=\"http://eminentgas.com/images/logo.png\" /> -->\n                  <img class=\"logo__image\" src=\"assets/imgs/transparent_logo.png\" />\n                \n                </div>\n            </div>\n    \n            <form class=\"login100-form validate-form\">\n              <span class=\"login100-form-title\">\n                Welcome To Eminent Gas\n              </span>\n              \n              <div class=\"container-login100-form-btn\">\n                <button class=\"login100-form-btn\" (click)=\"openAdminLogin()\">\n                  Admin\n                </button>\n                \n              </div>\n              <div class=\"container-login100-form-btn\">\n                <button class=\"login100-form-btn\" (click)=\"openClientLogin()\">\n                  Client\n                </button>\n                \n              </div>\n              <!-- <button class=\"login100-form-btn\" (click)=\"presentModal()\" >\n                  presentModal\n  \n                </button>\n     -->\n              <div class=\"text-center p-t-12\">\n                <!-- <span class=\"txt1\">\n                  Forgot\n                </span>\n                <a class=\"txt2\" href=\"#\">\n                  Username / Password?\n                </a> -->\n              </div>\n    \n              <div class=\"text-center p-t-136\">\n                <!-- <a class=\"txt2\" href=\"#\">\n                  Create your Account\n                  <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n                </a> -->\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n  \n  \n        <!--===============================================================================================-->\t\n    <script src=\"assets/thirdparty/vendor/jquery/jquery-3.2.1.min.js\"></script>\n    <!--===============================================================================================-->\n      <script src=\"assets/thirdparty/vendor/bootstrap/js/popper.js\"></script>\n      <script src=\"assets/thirdparty/vendor/bootstrap/js/bootstrap.min.js\"></script>\n    <!--===============================================================================================-->\n      <script src=\"assets/thirdparty/vendor/select2/select2.min.js\"></script>\n    <!--===============================================================================================-->\n      <script src=\"assets/thirdparty/vendor/tilt/tilt.jquery.min.js\"></script>\n      <script >\n        $('.js-tilt').tilt({\n          scale: 1.1\n        })\n      </script>\n    <!--===============================================================================================-->\n      <script src=\"assets/thirdparty/js/main.js\"></script>\n      <script src=\"https:/www.gstatic.com/firebasejs/6.0.4/firebase.js\"></script>\n  \n  </ion-content>\n  "

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
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__);









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
            primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
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

module.exports = "ion-button {\n  border-radius: 10px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n  height: 4vh;\n  margin-top: 3vw;\n  margin-bottom: 3vh;\n}\n\n.logo {\n  width: 180px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.logo__image {\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.logo__text {\n  color: darkorange;\n  font-size: 0.9em;\n  font-weight: bold;\n  font-family: sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.logo:hover .logo__image {\n  -webkit-transform: translateY(-20px);\n          transform: translateY(-20px);\n}\n\n.logo:hover .logo__text {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbWVudS1wYWdlL21lbnUtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lbnUtcGFnZS9tZW51LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDREo7O0FESUU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FDREo7O0FESUU7RUFDRSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tZW51LXBhZ2UvbWVudS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6MTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGhlaWdodDogNHZoO1xuICAgIG1hcmdpbi10b3A6IDN2dztcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gICAgXG4gICAgfVxuXG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubG9nb19faW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XG4gIH1cbiAgXG4gIC5sb2dvX190ZXh0IHtcbiAgICBjb2xvcjogZGFya29yYW5nZTtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5sb2dvOmhvdmVyIC5sb2dvX19pbWFnZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgfVxuICBcbiAgLmxvZ286aG92ZXIgLmxvZ29fX3RleHQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIFxuICAiLCJpb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA0dmg7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ29fX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4ubG9nb19fdGV4dCB7XG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sb2dvOmhvdmVyIC5sb2dvX19pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi5sb2dvOmhvdmVyIC5sb2dvX190ZXh0IHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

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
        this.types = [
            { label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal' },
            { label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa' },
            { label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard' }
        ];
    }
    ngOnInit() {
    }
    openAdminLogin() {
        this.navCtrl.navigateForward('/super-admin');
    }
    openClientLogin() {
        this.navCtrl.navigateForward('/login');
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