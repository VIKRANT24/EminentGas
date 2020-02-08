(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-admin-add-admin-module"],{

/***/ "./node_modules/primeng/keyfilter.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/keyfilter/keyfilter */ "./node_modules/primeng/components/keyfilter/keyfilter.js"));

/***/ }),

/***/ "./src/app/add-admin/add-admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-admin/add-admin.module.ts ***!
  \***********************************************/
/*! exports provided: AddAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPageModule", function() { return AddAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-admin.page */ "./src/app/add-admin/add-admin.page.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);














var routes = [
    {
        path: '',
        component: _add_admin_page__WEBPACK_IMPORTED_MODULE_5__["AddAdminPage"]
    }
];
var AddAdminPageModule = /** @class */ (function () {
    function AddAdminPageModule() {
    }
    AddAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12__["KeyFilterModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_9__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["MultiSelectModule"]
            ],
            declarations: []
        })
    ], AddAdminPageModule);
    return AddAdminPageModule;
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
    FirebaseService.prototype.updateUser = function (client, address, arm, person, wings, flats, project, email, mobile, id) {
        // value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('Admin/').doc(id).set({
            //  account_details:account,
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
    FirebaseService.prototype.createUser = function (client, address, arm, person, wings, flats, project, email, mobile) {
        return this.db.collection('Admin/').add({
            // account_details:account,
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



/***/ })

}]);
//# sourceMappingURL=add-admin-add-admin-module-es5.js.map