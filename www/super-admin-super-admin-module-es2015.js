(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["super-admin-super-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-admin/super-admin.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-header >\n      <ion-toolbar class=\"custom-toolbar\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n          Super Admin\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n  <ion-grid>\n    <ion-row color=\"primary\" justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n         \n        </div>\n        <div padding>\n        \n     \n          <div style=\"height: 8vh;width: 100%;\"></div>\n          <ion-img src=\"http://eminentgas.com/images/logo.png\" style=\"height: 12vh;width:70%;margin-left: 12.5%;\"></ion-img>\n          <div style=\"height: 6vh;width: 100%;\"></div>\n          <ion-item>\n            <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n            <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n            <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\"  class=\"custom-label\" >Password</ion-label>\n            <ion-input name=\"pwd\" type=\"pwd\" autocorrect=\"on\"  clearInput=\"true\" [(ngModel)]=\"pwd\" type=\"password\" clearOnEdit=\"true\"></ion-input>\n            <ion-icon name=\"lock\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n          </ion-item>\n          \n \n          \n        </div>\n        <div padding>\n            <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"login()\">Login</ion-button>\n\n          <!-- <ion-button size=\"large\" color=\"shade\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\" (click)=\"login()\">Login</ion-button> -->\n        </div>\n      </ion-col>\n    </ion-row>\n \n    \n  </ion-grid>\n\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/super-admin/super-admin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/super-admin/super-admin.module.ts ***!
  \***************************************************/
/*! exports provided: SuperAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminPageModule", function() { return SuperAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _super_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-admin.page */ "./src/app/super-admin/super-admin.page.ts");







const routes = [
    {
        path: '',
        component: _super_admin_page__WEBPACK_IMPORTED_MODULE_6__["SuperAdminPage"]
    }
];
let SuperAdminPageModule = class SuperAdminPageModule {
};
SuperAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_super_admin_page__WEBPACK_IMPORTED_MODULE_6__["SuperAdminPage"]]
    })
], SuperAdminPageModule);



/***/ }),

/***/ "./src/app/super-admin/super-admin.page.scss":
/*!***************************************************!*\
  !*** ./src/app/super-admin/super-admin.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-label {\n  color: #a2a4ab !important;\n  font-size: 2.3vh !important;\n}\n\n.button-native {\n  background-color: #45b0d5 !important;\n}\n\n.custom-icon {\n  color: #45b0d5;\n}\n\nion-button {\n  border-radius: 50px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlci1hZG1pbi9zdXBlci1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFFRSx5QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQ0c7RUFFQyxvQ0FBQTtBQ0NKOztBREVFO0VBRUUsY0FBQTtBQ0FKOztBREdFO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDQUY7O0FETUU7RUFDRSxxQkFBQTtFQUFzQixXQUFBO0FDRjFCIiwiZmlsZSI6InNyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuY3VzdG9tLWxhYmVsXG4gIHtcbiAgICBjb2xvcjogI2EyYTRhYiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMi4zdmggIWltcG9ydGFudDtcbiAgfVxuICAgLmJ1dHRvbi1uYXRpdmVcbiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWIwZDUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmN1c3RvbS1pY29uXG4gIHtcbiAgICBjb2xvcjogIzQ1YjBkNSA7XG4gIH1cbiAgXG4gIGlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOjUwcHggO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNzE1ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBcbiAgfVxuICBcbiBcbiAgXG4gIC5jdXN0b20tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMxODI1MzU7Y29sb3I6I2ZmZlxuICB9XG4gIFxuICBcbiAgXG4gICIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1sYWJlbCB7XG4gIGNvbG9yOiAjYTJhNGFiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi4zdmggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViMGQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGNvbG9yOiAjNDViMGQ1O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmN1c3RvbS10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTgyNTM1O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/super-admin/super-admin.page.ts":
/*!*************************************************!*\
  !*** ./src/app/super-admin/super-admin.page.ts ***!
  \*************************************************/
/*! exports provided: SuperAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminPage", function() { return SuperAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let SuperAdminPage = class SuperAdminPage {
    constructor(toastController, navController) {
        this.toastController = toastController;
        this.navController = navController;
        this.userid = "";
        this.pwd = "";
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userid == "") {
                const toast = yield this.toastController.create({
                    message: 'Please enter User ID',
                    duration: 2000,
                    color: 'medium'
                });
                toast.present();
            }
            else if (this.pwd == "") {
                const toast = yield this.toastController.create({
                    message: 'Please enter Password',
                    duration: 2000,
                    color: 'medium'
                });
                toast.present();
            }
            else {
                this.navController.navigateForward('/menu-page');
            }
        });
    }
};
SuperAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SuperAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-super-admin',
        template: __webpack_require__(/*! raw-loader!./super-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.page.html"),
        styles: [__webpack_require__(/*! ./super-admin.page.scss */ "./src/app/super-admin/super-admin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SuperAdminPage);



/***/ })

}]);
//# sourceMappingURL=super-admin-super-admin-module-es2015.js.map