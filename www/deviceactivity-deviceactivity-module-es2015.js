(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deviceactivity-deviceactivity-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/deviceactivity/deviceactivity.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deviceactivity/deviceactivity.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Device Activity\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are no payloads for device: <b>{{device}}.</b></p>\n          <ion-grid>\n                \n              <ion-row>\n                <ion-col>\n                    <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" ><ion-icon name=\"add\"></ion-icon> Send Data</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"selectDevice()\"><ion-icon name=\"add\"></ion-icon> Select Device</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" ><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n                </ion-col>\n              \n              \n              </ion-row>\n            </ion-grid>\n\n            <ion-card-content>\n              <ag-grid-angular\n              style=\"width: 100%; height: 600px;\"\n              class=\"ag-theme-balham\"\n              [columnDefs]=\"columnDefs\"\n              [rowData]=\"rowData\"\n              [enableSorting]=\"true\"\n              [animateRows]=\"true\"\n              [pagination]=\"true\"\n              [paginationPageSize]=\"50\"\n              [enableFilter]=\"true\"\n              [floatingFilter]=\"true\"\n              [suppressRowClickSelection]=\"true\"\n              [rowSelection]=\"rowSelection\">\n              </ag-grid-angular>\n          </ion-card-content>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/selectdevicemodal/selectdevicemodal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selectdevicemodal/selectdevicemodal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-title>\n      Select Devices\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n    \n    <ion-content>\n        <p *ngIf=\"display\" style=\"text-align:center;color: #f44336\">Please select atleast one device!!</p>\n      <ion-card>\n      \n    <ion-card-content>\n        <ag-grid-angular\n        style=\"width: 100%; height: 350px;\"\n        class=\"ag-theme-balham\"\n        [columnDefs]=\"columnDefs\"\n        [rowData]=\"rowData\"\n        [enableSorting]=\"true\"\n        [animateRows]=\"true\"\n        [pagination]=\"true\"\n        [paginationPageSize]=\"10\"\n        [enableFilter]=\"true\"\n        [floatingFilter]=\"true\"\n        [suppressRowClickSelection]=\"true\"\n        [rowSelection]=\"rowSelection\"\n        (gridReady)=\"onGridReady($event)\"\n        >\n        </ag-grid-angular>\n    </ion-card-content>\n\n    \n  \n        </ion-card>\n       \n        <div style=\"margin-right:2vh\">\n        <ion-button fill=\"outline\" style=\"float:right\" >Cancel</ion-button>\n        <ion-button style=\"float:right\" (click)=\"onOkClick()\">Ok</ion-button>\n      </div>\n    </ion-content>\n    \n    <!-- [multiSortKey]=\"multiSortKey\"         (gridReady)=\"onGridReady($event)\"-->"

/***/ }),

/***/ "./src/app/deviceactivity/deviceactivity.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/deviceactivity/deviceactivity.module.ts ***!
  \*********************************************************/
/*! exports provided: DeviceactivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceactivityPageModule", function() { return DeviceactivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _deviceactivity_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviceactivity.page */ "./src/app/deviceactivity/deviceactivity.page.ts");
/* harmony import */ var _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../selectdevicemodal/selectdevicemodal.page */ "./src/app/selectdevicemodal/selectdevicemodal.page.ts");









const routes = [
    {
        path: '',
        component: _deviceactivity_page__WEBPACK_IMPORTED_MODULE_7__["DeviceactivityPage"]
    },
    {
        path: '',
        component: _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_8__["SelectdevicemodalPage"]
    }
];
let DeviceactivityPageModule = class DeviceactivityPageModule {
};
DeviceactivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_deviceactivity_page__WEBPACK_IMPORTED_MODULE_7__["DeviceactivityPage"], _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_8__["SelectdevicemodalPage"]]
    })
], DeviceactivityPageModule);



/***/ }),

/***/ "./src/app/deviceactivity/deviceactivity.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/deviceactivity/deviceactivity.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvZGV2aWNlYWN0aXZpdHkvZGV2aWNlYWN0aXZpdHkucGFnZS5zY3NzIiwic3JjL2FwcC9kZXZpY2VhY3Rpdml0eS9kZXZpY2VhY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FER0k7RUFDSixxQkFBQTtFQUNBLFdBQUE7QUNBQSIsImZpbGUiOiJzcmMvYXBwL2RldmljZWFjdGl2aXR5L2RldmljZWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfVxuIiwiaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWM1YjYgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/deviceactivity/deviceactivity.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/deviceactivity/deviceactivity.page.ts ***!
  \*******************************************************/
/*! exports provided: DeviceactivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceactivityPage", function() { return DeviceactivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectdevicemodal/selectdevicemodal.page */ "./src/app/selectdevicemodal/selectdevicemodal.page.ts");




let DeviceactivityPage = class DeviceactivityPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.device = localStorage.getItem("viewdevice");
        this.columnDefs = [
            {
                headerName: "Direction",
                field: "direction",
                width: 130,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                filter: false,
            },
            {
                headerName: "Time",
                field: "time",
                width: 250,
                filter: "agDateColumnFilter"
            },
            {
                headerName: "FCNT",
                field: "fcnt",
                width: 250,
                filter: false,
            },
            {
                headerName: "Port",
                field: "port",
                width: 250,
            },
            {
                headerName: "Status",
                field: "status",
                width: 250,
                filter: false,
            },
            {
                headerName: "Data Rate",
                field: "rate",
                width: 250,
                filter: false,
            },
            {
                headerName: "RSSI",
                field: "rssi",
                width: 250,
                filter: false,
            },
            {
                headerName: "Decrypted",
                field: "decrypted",
                width: 250,
                filter: false,
            },
            { headerName: 'Actions',
                field: 'action',
                width: 330,
                filter: false },
        ];
    }
    ngOnInit() {
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_3__["SelectdevicemodalPage"]
            });
            return yield modal.present();
        });
    }
};
DeviceactivityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
DeviceactivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deviceactivity',
        template: __webpack_require__(/*! raw-loader!./deviceactivity.page.html */ "./node_modules/raw-loader/index.js!./src/app/deviceactivity/deviceactivity.page.html"),
        styles: [__webpack_require__(/*! ./deviceactivity.page.scss */ "./src/app/deviceactivity/deviceactivity.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], DeviceactivityPage);



/***/ }),

/***/ "./src/app/selectdevicemodal/selectdevicemodal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/selectdevicemodal/selectdevicemodal.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGRldmljZW1vZGFsL3NlbGVjdGRldmljZW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selectdevicemodal/selectdevicemodal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/selectdevicemodal/selectdevicemodal.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectdevicemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdevicemodalPage", function() { return SelectdevicemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SelectdevicemodalPage = class SelectdevicemodalPage {
    constructor(firebaseService, toastController, modalCtrl) {
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.display = false;
        var user = localStorage.getItem("username");
        var pwd = localStorage.getItem("pwd");
        this.getAdminArm(user, pwd);
        this.columnDefs = [
            {
                headerName: "DEVEUI",
                field: "deveui",
                width: 220,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
            {
                headerName: "Comment",
                field: "comment",
                width: 220,
            },
            {
                headerName: "Last Seen",
                field: "last_reception",
                width: 220,
                filter: "agDateColumnFilter"
            },
        ];
        // this.rowData=data;
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
                    var last_reception = moment__WEBPACK_IMPORTED_MODULE_2___default()(date_data).format("DD-MM-YYYY h:mm:ss");
                    var groups = result[i].payload.doc.data()['groups'];
                    var applications = result[i].payload.doc.data()['applications'];
                    var tags = result[i].payload.doc.data()['tags'];
                    this.rowData1.push({ 'deveui': deveui, 'devaddr': devaddr, 'appeui': appeui, 'comment': comment, 'latitude': latitude, 'longitude': longitude, 'altitude': altitude, 'device_status': device_status, 'dl_fcnt': dl_fcnt, 'lora_device_class': lora_device_class, 'registration_status': registration_status, 'expiry_time_uplink': expiry_time_uplink, 'expiry_time_downlink': expiry_time_downlink, 'last_reception': last_reception, 'groups': groups, 'applications': applications, 'tags': tags });
                }
            }
            this.rowData = this.rowData1;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onOkClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var selected_row = this.gridApi.getSelectedRows();
            if (selected_row.length == 0) {
                this.display = true;
            }
            else {
                this.display = false;
            }
        });
    }
};
SelectdevicemodalPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SelectdevicemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectdevicemodal',
        template: __webpack_require__(/*! raw-loader!./selectdevicemodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/selectdevicemodal/selectdevicemodal.page.html"),
        styles: [__webpack_require__(/*! ./selectdevicemodal.page.scss */ "./src/app/selectdevicemodal/selectdevicemodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], SelectdevicemodalPage);



/***/ })

}]);
//# sourceMappingURL=deviceactivity-deviceactivity-module-es2015.js.map