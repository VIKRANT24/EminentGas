(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-admin-add-admin-module~admin-list-admin-list-module"],{

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-admin/add-admin.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-admin/add-admin.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n            <ion-toolbar>\n              <ion-title >{{page}}</ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <ion-content >\n            <ion-card>\n              \n              \n                <ion-card-content style=\"text-align: center;\">\n                    <ion-item>\n                       <ion-input placeholder=\"Client Name\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"client\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input placeholder=\"Address\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"address\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"No of AMRS\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"arm\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Authorized Person\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"person\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"No of Wings\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"wings\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"No of Flats\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"flats\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Project Name\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"project\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Account Details\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"account\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Email ID\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"email\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Mobile No\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"mobile\"></ion-input>\n                     </ion-item>\n    \n    \n                            <ion-button expand=\"block\" style=\"width:50%;color:white;float: right;\n                            margin-top: 20px;margin-bottom: 20px;\" color=\"shade\"(click)=\"create()\" *ngIf=\"create_show\">Create</ion-button>\n\n<ion-button expand=\"block\" style=\"width:50%;color:white;float: right;\nmargin-top: 20px;margin-bottom: 20px;\" color=\"shade\" (click)=\"update()\" *ngIf=\"update_show\">Update</ion-button>\n    \n                </ion-card-content>\n              </ion-card>\n          </ion-content>"

/***/ }),

/***/ "./src/app/add-admin/add-admin.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n\nion-item {\n  border-style: solid;\n  border-width: thin;\n  border-color: #e6e6e6;\n  margin-top: 10px;\n  height: 40px;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYWRkLWFkbWluL2FkZC1hZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1hZG1pbi9hZGQtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdFO0VBQ0YscUJBQUE7RUFDQSxXQUFBO0FDQUE7O0FER0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDRCxnQkFBQTtFQUFnQixZQUFBO0VBQVksbUJBQUE7QUNFL0IiLCJmaWxlIjoic3JjL2FwcC9hZGQtYWRtaW4vYWRkLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOjUwcHggO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBjb2xvcjp3aGl0ZVxuICBcbiAgfVxuXG4gIGlvbi10b29sYmFye1xuLS1iYWNrZ3JvdW5kOiAjMmEzZjU0O1xuY29sb3I6I2ZmZlxuICB9XG5cbiAgaW9uLWl0ZW17XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xuICAgbWFyZ2luLXRvcDoxMHB4O2hlaWdodDo0MHB4O2JvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH0iLCJpb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzJhM2Y1NDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6ICNlNmU2ZTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-admin/add-admin.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.ts ***!
  \*********************************************/
/*! exports provided: AddAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPage", function() { return AddAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AddAdminPage = /** @class */ (function () {
    function AddAdminPage(firebaseService, modalCtrl, events, http, alertController) {
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.http = http;
        this.alertController = alertController;
        this.client = "";
        this.address = "";
        this.arm = "";
        this.person = "";
        this.wings = "";
        this.flats = "";
        this.project = "";
        this.account = "";
        this.email = "";
        this.mobile = "";
        this.id = "";
        this.page = "";
        this.create_show = false;
        this.update_show = false;
    }
    AddAdminPage.prototype.ngOnInit = function () {
        if (this.data == undefined) {
            this.page = "Add Admin";
            this.create_show = true;
            this.update_show = false;
        }
        else {
            this.create_show = false;
            this.update_show = true;
            this.page = "Update Admin";
            console.log(this.data);
            this.client = this.data[0].client_name;
            this.address = this.data[0].address;
            this.arm = this.data[0].no_of_arms;
            this.person = this.data[0].authorized_person;
            this.wings = this.data[0].no_of_wings;
            this.flats = this.data[0].no_of_flats;
            this.project = this.data[0].project_name;
            this.account = this.data[0].account_details;
            this.email = this.data[0].email_id;
            this.mobile = this.data[0].mobile;
            this.id = this.data[0].id;
        }
    };
    AddAdminPage.prototype.create = function () {
        var _this = this;
        this.firebaseService.createUser(this.client, this.address, this.arm, this.person, this.wings, this.flats, this.project, this.account, this.email, this.mobile)
            .then(function (res) {
            var data = res;
            console.log(data);
            _this.events.publish('update_list');
            _this.modalCtrl.dismiss();
        });
        this.send_email(this.email);
        this.success_msg();
    };
    AddAdminPage.prototype.update = function () {
        var _this = this;
        this.firebaseService.updateUser(this.client, this.address, this.arm, this.person, this.wings, this.flats, this.project, this.account, this.email, this.mobile, this.id)
            .then(function (res) {
            _this.events.publish('update_list');
            // this.router.navigate(['/home']);
            _this.modalCtrl.dismiss();
            _this.update_msg();
        });
    };
    AddAdminPage.prototype.send_email = function (email) {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        //const requestOptions = new RequestOptions({ headers: headers });
        var postData = { "lib_version": "2.3.2",
            "user_id": "user_XzQoUSMjq7kwY5ATSk6Ns",
            "service_id": "vinitarane0731_gmail_com",
            "template_id": "template_Gl1QX8GU",
            "template_params": { "reply_to": this.email, "from_name": "Eminent Gas Tech", "to_name": this.client, "message_html": '<p>Your account information is as follows:</p> <p>----------------------------------------------------</p> <p>Username : ' + this.email + '</p> <p>Password : Abc@123</p> <p>----------------------------------------------------</p>', } };
        this.http.post("https://api.emailjs.com/api/v1.0/email/send", postData)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    AddAdminPage.prototype.success_msg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eminent Gas Tech',
                            message: 'Admin has been created successfully and credentials has been sent through email.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAdminPage.prototype.update_msg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Eminent Gas Tech',
                            message: 'Admin has been updated successfully.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddAdminPage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddAdminPage.prototype, "data", void 0);
    AddAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__(/*! raw-loader!./add-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-admin/add-admin.page.html"),
            styles: [__webpack_require__(/*! ./add-admin.page.scss */ "./src/app/add-admin/add-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AddAdminPage);
    return AddAdminPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getAvatars = function () {
        return this.db.collection('/avatar').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (client, address, arm, person, wings, flats, project, account, email, mobile, id) {
        // value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('Admin').doc(id).set({
            account_details: account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile: mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project
        });
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('Admin').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('Admin').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (client, address, arm, person, wings, flats, project, account, email, mobile) {
        return this.db.collection('Admin').add({
            account_details: account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile: mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project
        });
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ })

}]);
//# sourceMappingURL=default~add-admin-add-admin-module~admin-list-admin-list-module-es5.js.map