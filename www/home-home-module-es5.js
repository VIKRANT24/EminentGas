(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-header >\n        <ion-toolbar class=\"custom-toolbar\">\n          <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-title>\n            Sign In\n          </ion-title>\n        </ion-toolbar>\n      </ion-header>\n  \n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n           \n          </div>\n          <div padding>\n          \n       \n            <div style=\"height: 8vh;width: 100%;\"></div>\n            <ion-img src=\"http://eminentgas.com/images/logo.png\" style=\"height: 12vh;width:70%;margin-left: 12.5%;\"></ion-img>\n            <div style=\"height: 6vh;width: 100%;\"></div>\n            <ion-item>\n              <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n              <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n              <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\"  class=\"custom-label\" >Password</ion-label>\n              <ion-input name=\"pwd\" type=\"pwd\" autocorrect=\"on\"  clearInput=\"true\" [(ngModel)]=\"pwd\" type=\"password\" clearOnEdit=\"true\"></ion-input>\n              <ion-icon name=\"lock\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n            </ion-item>\n            \n   \n            \n          </div>\n          <div padding>\n              <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"login()\">Login</ion-button>\n\n          \n          </div>\n       \n        </ion-col>\n      </ion-row>\n   \n      \n    </ion-grid>\n\n\n\n\n\n\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-label {\n  color: #a2a4ab !important;\n  font-size: 2.3vh !important;\n}\n\n.button-native {\n  background-color: #45b0d5 !important;\n}\n\n.custom-icon {\n  color: #45b0d5;\n}\n\nion-button {\n  border-radius: 50px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURDQztFQUVDLG9DQUFBO0FDQ0Y7O0FERUE7RUFFRSxjQUFBO0FDQUY7O0FER0E7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUNBQTs7QURVQTtFQUNFLHFCQUFBO0VBQXNCLFdBQUE7QUNOeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmN1c3RvbS1sYWJlbFxue1xuICBjb2xvcjogI2EyYTRhYiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIuM3ZoICFpbXBvcnRhbnQ7XG59XG4gLmJ1dHRvbi1uYXRpdmVcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YjBkNSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb25cbntcbiAgY29sb3I6ICM0NWIwZDUgO1xufVxuXG5pb24tYnV0dG9uIHtcbmJvcmRlci1yYWRpdXM6NTBweCA7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNzE1ICFpbXBvcnRhbnQ7XG4tLWJveC1zaGFkb3c6bm9uZTtcblxufVxuXG5cbmlvbi1jb250ZW50IHtcbiAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTVlYWVlXG4gXG59XG5cbi5jdXN0b20tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiAjMTgyNTM1O2NvbG9yOiNmZmZcbn1cblxuXG5cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1sYWJlbCB7XG4gIGNvbG9yOiAjYTJhNGFiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi4zdmggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViMGQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGNvbG9yOiAjNDViMGQ1O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLmN1c3RvbS10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTgyNTM1O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_add_device_modal_add_device_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/add-device-modal/add-device-modal.page */ "./src/app/add-device-modal/add-device-modal.page.ts");




var HomePage = /** @class */ (function () {
    function HomePage(toastController, navController, modalCtrl) {
        this.toastController = toastController;
        this.navController = navController;
        this.modalCtrl = modalCtrl;
        this.userid = "";
        this.pwd = "";
    }
    HomePage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userid == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter User ID',
                                duration: 2000,
                                color: 'medium'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.pwd == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Password',
                                duration: 2000,
                                color: 'medium'
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_add_device_modal_add_device_modal_page__WEBPACK_IMPORTED_MODULE_3__["AddDeviceModalPage"],
                            componentProps: {
                                'firstName': 'Douglas',
                                'lastName': 'Adams',
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map