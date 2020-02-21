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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);














const routes = [
    {
        path: '',
        component: _add_admin_page__WEBPACK_IMPORTED_MODULE_5__["AddAdminPage"]
    }
];
let AddAdminPageModule = class AddAdminPageModule {
};
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
//# sourceMappingURL=add-admin-add-admin-module-es2015.js.map