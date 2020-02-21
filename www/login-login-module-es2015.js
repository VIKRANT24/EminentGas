(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n  <meta charset=\"utf-8\" />\n  <title>Ionic App</title>\n\n  <base href=\"/\" />\n\n  <meta name=\"viewport\" content=\"viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n  <meta name=\"format-detection\" content=\"telephone=no\" />\n  <meta name=\"msapplication-tap-highlight\" content=\"no\" />\n\n  <link rel=\"icon\" type=\"image/png\" href=\"assets/icon/favicon.png\" />\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/bootstrap/css/bootstrap.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/fonts/font-awesome-4.7.0/css/font-awesome.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/animate/animate.css\">\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/css-hamburgers/hamburgers.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/vendor/select2/select2.min.css\">\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/util.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"assets/thirdparty/css/main.css\">\n\n \n  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n  <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n</head> \n<ion-content>\n \n    \n    <div class=\"limiter\">\n      <div class=\"container-login100\">\n        <div class=\"wrap-login100\">\n          <div class=\"login100-pic js-tilt\" data-tilt style=\"margin-top:100px\">\n            <div class=\"logo\" style=\"width:220px\">\n                <!-- <img class=\"logo__image\" src=\"http://eminentgas.com/images/logo.png\" /> -->\n                <img class=\"logo__image\" src=\"assets/imgs/transparent_logo.png\" />\n              \n              </div>\n          </div>\n  \n          <form class=\"login100-form validate-form\">\n            <span class=\"login100-form-title\">\n              Client Login\n            </span>\n  \n            <div class=\"wrap-input100 validate-input\" data-validate = \"Valid email is required: ex@abc.xyz\">\n              <input class=\"input100\" type=\"text\" name=\"email\" placeholder=\"User Id\" [(ngModel)]=\"userid\"> \n              <span class=\"focus-input100\"></span>\n              <span class=\"symbol-input100\">\n                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n  \n            <div class=\"wrap-input100 validate-input\" data-validate = \"Password is required\">\n              <input class=\"input100\" type=\"password\" name=\"pass\" placeholder=\"Password\" type=\"password\" [(ngModel)]=\"pwd\">\n              <span class=\"focus-input100\"></span>\n              <span class=\"symbol-input100\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n            \n            <div class=\"container-login100-form-btn\">\n              <button class=\"login100-form-btn\" (click)=\"login()\">\n                Login\n              </button>\n              \n            </div>\n            <!-- <button class=\"login100-form-btn\" (click)=\"presentModal()\" >\n                presentModal\n\n              </button>\n   -->\n            <div class=\"text-center p-t-12\">\n              <!-- <span class=\"txt1\">\n                Forgot\n              </span>\n              <a class=\"txt2\" href=\"#\">\n                Username / Password?\n              </a> -->\n            </div>\n  \n            <div class=\"text-center p-t-136\">\n              <!-- <a class=\"txt2\" href=\"#\">\n                Create your Account\n                <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n              </a> -->\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n\n\n      <!--===============================================================================================-->\t\n  <script src=\"assets/thirdparty/vendor/jquery/jquery-3.2.1.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/bootstrap/js/popper.js\"></script>\n    <script src=\"assets/thirdparty/vendor/bootstrap/js/bootstrap.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/select2/select2.min.js\"></script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/vendor/tilt/tilt.jquery.min.js\"></script>\n    <script >\n      $('.js-tilt').tilt({\n        scale: 1.1\n      })\n    </script>\n  <!--===============================================================================================-->\n    <script src=\"assets/thirdparty/js/main.js\"></script>\n    <script src=\"https:/www.gstatic.com/firebasejs/6.0.4/firebase.js\"></script>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
        ]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 180px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.logo__image {\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n\n.logo__text {\n  color: darkorange;\n  font-size: 0.9em;\n  font-weight: bold;\n  font-family: sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  opacity: 0;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.logo:hover .logo__image {\n  -webkit-transform: translateY(-20px);\n          transform: translateY(-20px);\n}\n\n.logo:hover .logo__text {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ28ge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xufVxuXG4ubG9nb19fdGV4dCB7XG4gIGNvbG9yOiBkYXJrb3JhbmdlO1xuICBmb250LXNpemU6IC45ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19faW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19fdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuIiwiLmxvZ28ge1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cblxuLmxvZ29fX3RleHQge1xuICBjb2xvcjogZGFya29yYW5nZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19faW1hZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4ubG9nbzpob3ZlciAubG9nb19fdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-device-woprofile/add-device-woprofile.page */ "./src/app/add-device-woprofile/add-device-woprofile.page.ts");






const routes = [];
let LoginPage = class LoginPage {
    constructor(navCtrl, router, firebaseService, toastController, navController, modalController) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.navController = navController;
        this.modalController = modalController;
        this.userid = "";
        this.pwd = "";
    }
    ngOnInit() {
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.userid == "") {
                const toast = yield this.toastController.create({
                    message: 'Please enter User ID',
                    duration: 2000,
                    color: 'medium',
                    position: 'top'
                });
                toast.present();
            }
            else if (this.pwd == "") {
                const toast = yield this.toastController.create({
                    message: 'Please enter Password',
                    duration: 2000,
                    color: 'medium',
                    position: 'top'
                });
                toast.present();
            }
            else {
                this.firebaseService.searchUsers(this.userid, this.pwd).subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (result.length > 0) {
                        const toast = yield this.toastController.create({
                            message: 'Succesfully logged-in.',
                            duration: 2000,
                            color: 'success',
                            position: 'top'
                        });
                        toast.present();
                        this.router.navigateByUrl('/list');
                        localStorage.setItem("username", this.userid);
                        localStorage.setItem("pwd", this.pwd);
                        // this.router.navigate([ 'list', { id: this.userid } ]);
                        // this.navCtrl.navigateForward('list',{'data':'dsd'})
                    }
                    else {
                        const toast = yield this.toastController.create({
                            message: 'Invalid Email or Password.',
                            duration: 2000,
                            color: 'danger',
                            position: 'top'
                        });
                        toast.present();
                    }
                }));
            }
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_5__["AddDeviceWOProfilePage"],
                cssClass: 'my-custom-modal-css'
            });
            return yield modal.present();
            //this.router.navigateByUrl('/add-device');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");





let FirebaseService = class FirebaseService {
    constructor(db, http) {
        this.db = db;
        this.http = http;
        this.baseURL = "https://eminent-gas-tech.firebaseio.com/";
    }
    getAvatars() {
        return this.db.collection('/avatar').valueChanges();
    }
    getUser(userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    }
    updateUser(client, address, arm, person, wings, flats, project, email, mobile, id) {
        // value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('Admin/').doc(id).set({
            //  account_details:account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project,
            pwd: 'Abc@123'
        });
    }
    deleteUser(userKey) {
        return this.db.collection('Admin').doc(userKey).delete();
    }
    getUsers() {
        return this.db.collection('Admin').snapshotChanges();
    }
    getDevices() {
        return this.db.collection('Devices').snapshotChanges();
    }
    searchUsers(email, pwd) {
        return this.db.collection('Admin', ref => ref.where('email_id', '==', email).where('pwd', '==', pwd)).snapshotChanges();
    }
    getDataPackets(device) {
        return this.db.collection('DataPackets', ref => ref.where('device', '==', device)).snapshotChanges();
    }
    searchUsersByAge(value) {
        return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
    }
    createUser(client, address, arm, person, wings, flats, project, email, mobile) {
        return this.db.collection('Admin/').add({
            // account_details:account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project,
            pwd: 'Abc@123'
        });
    }
    getMethod(page, params) {
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise((resolve, reject) => {
            let options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]();
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            options.headers.append('Accept', 'application/json');
            options.headers.append('Contest-type', 'application/json');
            this.http.get(this.baseURL + page, params)
                .subscribe(data => {
                var myobj = data['_body'];
                resolve(myobj);
            }, err => {
                var error = err['_body'];
                resolve(error);
            });
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
], FirebaseService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map