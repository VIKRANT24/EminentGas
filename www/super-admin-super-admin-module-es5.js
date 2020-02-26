(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["super-admin-super-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/super-admin/super-admin.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Ionic App</title>\n\n  <base href=\"/\" />\n\n  <meta name=\"viewport\" content=\"viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n  <meta name=\"format-detection\" content=\"telephone=no\" />\n  <meta name=\"msapplication-tap-highlight\" content=\"no\" />\n\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/icon/favicon.png\" />\n\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/thirdparty/images/icons/favicon.ico\"/>\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/bootstrap/css/bootstrap.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/animate/animate.css\">\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/css-hamburgers/hamburgers.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/select2/select2.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/main.css\">\n\n  <!-- add to homescreen for ios -->\n  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n</head>\n<ion-content>\n \n    \n    <div class=\"limiter\">\n      <div class=\"container-login100\">\n        <div class=\"wrap-login100\">\n          <div class=\"login100-pic js-tilt\" data-tilt style=\"margin-top:100px\">\n            <div class=\"logo\" style=\"width:220px\">\n                <img class=\"logo__image\" src=\"assets/imgs/transparent_logo.png\" />\n              \n              </div>\n          </div>\n  \n          <form class=\"login100-form validate-form\">\n            <span class=\"login100-form-title\">\n              Admin Login\n            </span>\n  \n            <div class=\"wrap-input100 validate-input\" data-validate = \"Valid email is required: ex@abc.xyz\">\n              <input class=\"input100\" type=\"text\" name=\"email\" placeholder=\"User Id\" [(ngModel)]=\"userid\"> \n              <span class=\"focus-input100\"></span>\n              <span class=\"symbol-input100\">\n                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n  \n            <div class=\"wrap-input100 validate-input\" data-validate = \"Password is required\">\n              <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\" type=\"password\" [(ngModel)]=\"pwd\">\n              <span class=\"focus-input100\"></span>\n              <span class=\"symbol-input100\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            <!-- <div>\n              <ion-checkbox  [(ngModel)]=\"check\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"checkRememberMe($event.checked)\"> </ion-checkbox>\n              <ion-label style=\"margin: 1vh;\">Remember me</ion-label>\n            </div> -->\n            <div class=\"container-login100-form-btn\">\n              <button class=\"login100-form-btn\" (click)=\"login()\">\n                Login\n              </button>\n             \n            </div>\n  \n            <div class=\"text-center p-t-12\">\n              <!-- <span class=\"txt1\">\n                Forgot\n              </span>\n              <a class=\"txt2\" href=\"#\">\n                Username / Password?\n              </a> -->\n            </div>\n  \n            <div class=\"text-center p-t-136\">\n              <!-- <a class=\"txt2\" href=\"#\">\n                Create your Account\n                <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n              </a> -->\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n\n      <!--===============================================================================================-->\t\n  <script src=\"assets/thirdparty/vendor/jquery/jquery-3.2.1.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/bootstrap/js/popper.js\"></script>\n    <script src=\"assets/thirdparty/vendor/bootstrap/js/bootstrap.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/select2/select2.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/tilt/tilt.jquery.min.js\"></script>\n    <script >\n      $('.js-tilt').tilt({\n        scale: 1.1\n      })\n    </script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/js/main.js\"></script>\n    <script src=\"https:/www.gstatic.com/firebasejs/6.0.4/firebase.js\"></script>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _super_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./super-admin.page */ "./src/app/super-admin/super-admin.page.ts");







var routes = [
    {
        path: '',
        component: _super_admin_page__WEBPACK_IMPORTED_MODULE_6__["SuperAdminPage"]
    }
];
var SuperAdminPageModule = /** @class */ (function () {
    function SuperAdminPageModule() {
    }
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
    return SuperAdminPageModule;
}());



/***/ }),

/***/ "./src/app/super-admin/super-admin.page.scss":
/*!***************************************************!*\
  !*** ./src/app/super-admin/super-admin.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 180px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.logo__image {\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.logo__text {\n  color: darkorange;\n  font-size: 0.9em;\n  font-weight: bold;\n  font-family: sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.logo:hover .logo__image {\n  -webkit-transform: translateY(-20px);\n          transform: translateY(-20px);\n}\n\n.logo:hover .logo__text {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zdXBlci1hZG1pbi9zdXBlci1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3N1cGVyLWFkbWluL3N1cGVyLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ28ge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xufVxuXG4ubG9nb19fdGV4dCB7XG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xuICBmb250LXNpemU6IC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19faW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19fdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59IiwiLmxvZ28ge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cblxuLmxvZ29fX3RleHQge1xuICBjb2xvcjogZGFya29yYW5nZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19faW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19fdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//import { EmailComposer } from '@ionic-native/email-composer/ngx';


var SuperAdminPage = /** @class */ (function () {
    function SuperAdminPage(navCtrl, router, toastController, navController, firebaseService) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.firebaseService = firebaseService;
        this.userid = "";
        this.pwd = "";
        //rememberMe:any = false
        this.check = false;
        this.check = localStorage.getItem('rememberMe');
        this.checkRememberMe();
    }
    SuperAdminPage.prototype.ngOnInit = function () {
    };
    SuperAdminPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userid == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter User ID',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.pwd == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Password',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        this.firebaseService.searchUsers(this.userid, this.pwd).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast, navigationExtras, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(result.length > 0)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Succesfully logged-in.',
                                                duration: 2000,
                                                color: 'success',
                                                position: 'top'
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        navigationExtras = {
                                            state: {
                                                firstLogin: 'firstLogin'
                                            }
                                        };
                                        localStorage.setItem('superAdminLogin', 'firstLogin');
                                        localStorage.setItem("admin", this.userid);
                                        localStorage.setItem("pwd", this.pwd);
                                        this.router.navigateByUrl('/admin-list', navigationExtras);
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toastController.create({
                                            message: 'Invalid Email or Password.',
                                            duration: 2000,
                                            color: 'danger',
                                            position: 'top'
                                        })];
                                    case 3:
                                        toast = _a.sent();
                                        toast.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SuperAdminPage.prototype.checkRememberMe = function () {
        if (this.check == 'true') {
            this.userid = localStorage.getItem('admin');
            this.pwd = localStorage.getItem('pwd');
        }
        // this.rememberMe = true
    };
    SuperAdminPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
    ]; };
    SuperAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-super-admin',
            template: __webpack_require__(/*! raw-loader!./super-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/super-admin/super-admin.page.html"),
            styles: [__webpack_require__(/*! ./super-admin.page.scss */ "./src/app/super-admin/super-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], SuperAdminPage);
    return SuperAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=super-admin-super-admin-module-es5.js.map