(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-activity-superadmin-device-activity-superadmin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/device-activity-superadmin/device-activity-superadmin.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/device-activity-superadmin/device-activity-superadmin.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-title>\n      Devices\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n            <ion-card-content>\n              <ion-card>\n                <ion-card-content>\n                    <ag-grid-angular\n                    style=\"width: 100%; height: 600px;\"\n                    class=\"ag-theme-balham\"\n                    [columnDefs]=\"columnDefs\"\n                    [rowData]=\"rowData\"\n                    [enableSorting]=\"true\"\n                    [animateRows]=\"true\"\n                    [pagination]=\"true\"\n                    [paginationPageSize]=\"50\"\n                    [enableFilter]=\"true\"\n                    [floatingFilter]=\"true\"\n                    [suppressRowClickSelection]=\"true\"\n                    [rowSelection]=\"rowSelection\">\n                    </ag-grid-angular>\n                </ion-card-content>\n                \n                    </ion-card>\n          </ion-card-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/device-activity-superadmin/device-activity-superadmin.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/device-activity-superadmin/device-activity-superadmin.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceActivitySuperadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivitySuperadminPageModule", function() { return DeviceActivitySuperadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_activity_superadmin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-activity-superadmin.page */ "./src/app/device-activity-superadmin/device-activity-superadmin.page.ts");








const routes = [
    {
        path: '',
        component: _device_activity_superadmin_page__WEBPACK_IMPORTED_MODULE_7__["DeviceActivitySuperadminPage"]
    }
];
let DeviceActivitySuperadminPageModule = class DeviceActivitySuperadminPageModule {
};
DeviceActivitySuperadminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_device_activity_superadmin_page__WEBPACK_IMPORTED_MODULE_7__["DeviceActivitySuperadminPage"]]
    })
], DeviceActivitySuperadminPageModule);



/***/ }),

/***/ "./src/app/device-activity-superadmin/device-activity-superadmin.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/device-activity-superadmin/device-activity-superadmin.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvZGV2aWNlLWFjdGl2aXR5LXN1cGVyYWRtaW4vZGV2aWNlLWFjdGl2aXR5LXN1cGVyYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9kZXZpY2UtYWN0aXZpdHktc3VwZXJhZG1pbi9kZXZpY2UtYWN0aXZpdHktc3VwZXJhZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0k7RUFDSixxQkFBQTtFQUNBLFdBQUE7QUNBQSIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1hY3Rpdml0eS1zdXBlcmFkbWluL2RldmljZS1hY3Rpdml0eS1zdXBlcmFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfVxuIiwiaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWM1YjYgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/device-activity-superadmin/device-activity-superadmin.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/device-activity-superadmin/device-activity-superadmin.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DeviceActivitySuperadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceActivitySuperadminPage", function() { return DeviceActivitySuperadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




let DeviceActivitySuperadminPage = class DeviceActivitySuperadminPage {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.rowData1 = [];
        this.rowData = [];
        this.device = localStorage.getItem("viewdevice");
        var user = localStorage.getItem("username");
        var pwd = localStorage.getItem("pwd");
        this.getAdminArm(user, pwd);
        this.columnDefs = [
            {
                headerName: "DEVEUI",
                field: "deveui",
                width: 250,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
            {
                headerName: "Comment",
                field: "comment",
                width: 250,
            },
            {
                headerName: "Groups",
                field: "groups",
                width: 250,
            },
            {
                headerName: "Apps",
                field: "applications",
                width: 250,
            },
            {
                headerName: "Last Seen",
                field: "last_reception",
                width: 250,
            },
            {
                headerName: "Cubic meter",
                field: "cubic",
                width: 250,
                filter: false
            }
        ];
    }
    getAdminArm(user, pwd) {
        this.firebaseService.searchUsers(user, pwd).subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var no_of_arms = result[0].payload.doc.data()['no_of_arms'];
            this.devices = no_of_arms.length;
            this.getDevices(no_of_arms);
        }));
    }
    getDevices(no_of_arms) {
        this.firebaseService.getDevices()
            .subscribe(result => {
            var arms_array = no_of_arms.toString().split(",");
            for (var i = 0; i < result.length; i++) {
                if (arms_array.includes(result[i].payload.doc.data()['deveui'])) {
                    var deveui = result[i].payload.doc.data()['deveui'];
                    var devaddr = result[i].payload.doc.data()['devaddr'];
                    var appeui = result[i].payload.doc.data()['appeui'];
                    var comment = result[i].payload.doc.data()['comment'];
                    var latitude = result[i].payload.doc.data()['latitude'];
                    var longitude = result[i].payload.doc.data()['longitude'];
                    var altitude = result[i].payload.doc.data()['altitude'];
                    var device_status = result[i].payload.doc.data()['device_status'];
                    var dl_fcnt = result[i].payload.doc.data()['dl_fcnt'];
                    var lora_device_class = result[i].payload.doc.data()['lora_device_class'];
                    var registration_status = result[i].payload.doc.data()['registration_status'];
                    var expiry_time_uplink = result[i].payload.doc.data()['expiry_time_uplink'];
                    var expiry_time_downlink = result[i].payload.doc.data()['expiry_time_downlink'];
                    // var last_reception = moment(result[i].payload.doc.data()['last_reception'].toInt()).format("DD-MM-YYYY h:mm:ss");
                    var date_data = result[i].payload.doc.data()['last_reception'];
                    var last_reception = moment__WEBPACK_IMPORTED_MODULE_3___default()(date_data).format("DD/MM/YYYY h:mm:ss");
                    var groups = result[i].payload.doc.data()['groups'];
                    var applications = result[i].payload.doc.data()['applications'];
                    var tags = result[i].payload.doc.data()['tags'];
                    var cubic = "1.35";
                    this.rowData1.push({ 'deveui': deveui, 'devaddr': devaddr, 'appeui': appeui, 'comment': comment, 'latitude': latitude, 'longitude': longitude, 'altitude': altitude, 'device_status': device_status, 'dl_fcnt': dl_fcnt, 'lora_device_class': lora_device_class, 'registration_status': registration_status, 'expiry_time_uplink': expiry_time_uplink, 'expiry_time_downlink': expiry_time_downlink, 'last_reception': last_reception, 'groups': groups, 'applications': applications, 'tags': tags, 'cubic': cubic });
                }
            }
            this.rowData = this.rowData1;
        });
    }
};
DeviceActivitySuperadminPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
DeviceActivitySuperadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-activity-superadmin',
        template: __webpack_require__(/*! raw-loader!./device-activity-superadmin.page.html */ "./node_modules/raw-loader/index.js!./src/app/device-activity-superadmin/device-activity-superadmin.page.html"),
        styles: [__webpack_require__(/*! ./device-activity-superadmin.page.scss */ "./src/app/device-activity-superadmin/device-activity-superadmin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
], DeviceActivitySuperadminPage);



/***/ })

}]);
//# sourceMappingURL=device-activity-superadmin-device-activity-superadmin-module-es2015.js.map