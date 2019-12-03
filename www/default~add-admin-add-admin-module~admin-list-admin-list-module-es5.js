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

module.exports = "<ion-header>\n            <ion-toolbar>\n              <ion-title >{{page}}</ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <ion-content >\n            <ion-card>\n              \n              \n                <ion-card-content style=\"text-align: center;\">\n                    <ion-item>\n                       <ion-input placeholder=\"Client Name\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"client\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input placeholder=\"Address\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"address\"></ion-input>\n                     </ion-item>\n                     <!-- <ion-item>\n                        <ion-input placeholder=\"No of AMRS\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"arm\"></ion-input>\n                     </ion-item> -->\n                     <ion-item>\n                        <ion-label>No of AMRS</ion-label>\n                        <ion-select placeholder=\"Select ARM\"  multiple=\"true\" [(ngModel)]=\"arm\">\n                          <ion-select-option  *ngFor=\"let device of arms\">{{device.deveui}}</ion-select-option>\n                          \n                        </ion-select>\n                      </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Authorized Person\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"person\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"No of Wings\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"wings\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"No of Flats\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"flats\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Project Name\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"project\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Account Details\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"account\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Email ID\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"email\"></ion-input>\n                     </ion-item>\n                     <ion-item>\n                        <ion-input placeholder=\"Mobile No\" style=\"margin-top:-10px;color:#666666;\" [(ngModel)]=\"mobile\"></ion-input>\n                     </ion-item>\n    \n    \n                            <ion-button expand=\"block\" style=\"width:50%;color:white;float: right;\n                            margin-top: 20px;margin-bottom: 20px;\" color=\"shade\"(click)=\"create()\" *ngIf=\"create_show\">Create</ion-button>\n\n<ion-button expand=\"block\" style=\"width:50%;color:white;float: right;\nmargin-top: 20px;margin-bottom: 20px;\" color=\"shade\" (click)=\"update()\" *ngIf=\"update_show\">Update</ion-button>\n    \n                </ion-card-content>\n              </ion-card>\n          </ion-content>"

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
/* harmony import */ var _assets_device_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/device.json */ "./src/assets/device.json");
var _assets_device_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/device.json */ "./src/assets/device.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







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
        this.arms = [];
        this.arms = _assets_device_json__WEBPACK_IMPORTED_MODULE_4__;
        console.log(this.arm);
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
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
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
            project_name: project,
            pwd: 'Abc@123'
        });
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('Admin').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('Admin').snapshotChanges();
    };
    FirebaseService.prototype.getDevices = function () {
        return this.db.collection('Devices').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (email, pwd) {
        return this.db.collection('Admin', function (ref) { return ref.where('email_id', '==', email).where('pwd', '==', pwd); }).snapshotChanges();
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
            project_name: project,
            pwd: 'Abc@123'
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



/***/ }),

/***/ "./src/assets/device.json":
/*!********************************!*\
  !*** ./src/assets/device.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

module.exports = [{"deveui":"3cc1f60500000334","devaddr":"29981719","appeui":"3cc1f60500000337","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":338,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1516114044582,"groups":"","applications":"","tags":null},{"deveui":"3cc1f60500000335","devaddr":"15016688","appeui":"0000000000000000","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":23,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1506056924320,"groups":"","applications":"","tags":null},{"deveui":"3cc1f60500000336","devaddr":"5810116","appeui":"0000000000000000","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":39,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1504766630656,"groups":"","applications":"","tags":null},{"deveui":"5143086500000001","devaddr":"7987859","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515996611639,"groups":"","applications":"","tags":null},{"deveui":"5143086500000002","devaddr":"19875084","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1518434844337,"groups":"","applications":"","tags":null},{"deveui":"5143086500000004","devaddr":"30023304","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":0,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515642401137,"groups":"","applications":"","tags":null},{"deveui":"5143086500000005","devaddr":"2816306","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":6,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515977933475,"groups":"","applications":"","tags":null},{"deveui":"5143086500000006","devaddr":"27896858","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":12,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515404093836,"groups":"","applications":"","tags":null},{"deveui":"5143086500000007","devaddr":"33037021","appeui":"001000103cc1f601","comment":"Class A","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":0,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515638361946,"groups":"","applications":"","tags":null},{"deveui":"5143086500000018","devaddr":"30644623","appeui":"001000103cc1f601","comment":"CLASS","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515977954308,"groups":"","applications":"","tags":null},{"deveui":"5143086500000021","devaddr":"3742403","appeui":"001000103cc1f601","comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1515988525609,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b29","devaddr":"805313321","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":3,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549285926024,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2a","devaddr":"805313322","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":3,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549357595095,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2b","devaddr":"805313323","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549294832690,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2c","devaddr":"805313324","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":2,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570454296346,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2d","devaddr":"805313325","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549288839358,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2e","devaddr":"805313326","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":2,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549288970843,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b2f","devaddr":"805313327","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":3,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549351888815,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b30","devaddr":"805313328","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549289713497,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b32","devaddr":"805313330","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549289690297,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b33","devaddr":"805313331","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":2,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549290077547,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b34","devaddr":"805313332","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":2,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549290240499,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b35","devaddr":"805313333","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":3,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1549290385065,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b36","devaddr":"805313334","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1565743069046,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b37","devaddr":"805313335","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":8,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571059659088,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b39","devaddr":"805313337","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":11,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570758803673,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b3a","devaddr":"805313338","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":null,"dl_fcnt":-1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":0,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b3c","devaddr":"805313340","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":7,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571083467102,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b3d","devaddr":"805313341","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":11,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570385250069,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b3f","devaddr":"805313343","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570982517671,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b43","devaddr":"805313347","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":7,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570916049121,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b45","devaddr":"805313349","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571055360488,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b46","devaddr":"805313350","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":6,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571062019447,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b47","devaddr":"805313351","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":10,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1565695595295,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b48","devaddr":"805313352","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":2,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1556780367823,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b49","devaddr":"805313353","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":9,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1565683956769,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b4a","devaddr":"805313354","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":7,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570931790462,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b4c","devaddr":"805313356","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":7,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571006801907,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b4d","devaddr":"805313357","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":6,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570723301796,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b4e","devaddr":"805313358","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":9,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571034971329,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b4f","devaddr":"805313359","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":7,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1565756959648,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b50","devaddr":"805313360","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":34,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570984667806,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b51","devaddr":"805313361","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":4,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571057698454,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b52","devaddr":"805313362","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":0,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1562728119773,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b53","devaddr":"805313363","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":6,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570750263275,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b54","devaddr":"805313364","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":5,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1570920796000,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b55","devaddr":"805313365","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":29,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571043887877,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b56","devaddr":"805313366","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":3,"dl_fcnt":10,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":1571026361731,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b59","devaddr":"805313369","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":null,"dl_fcnt":-1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":0,"groups":"","applications":"","tags":null},{"deveui":"70b3d5f830001b5a","devaddr":"805313370","appeui":null,"comment":"","latitude":null,"longitude":null,"altitude":null,"device_status":null,"dl_fcnt":-1,"lora_device_class":0,"registration_status":1,"expiry_time_uplink":168,"expiry_time_downlink":168,"last_reception":0,"groups":"","applications":"","tags":null}];

/***/ })

}]);
//# sourceMappingURL=default~add-admin-add-admin-module~admin-list-admin-list-module-es5.js.map