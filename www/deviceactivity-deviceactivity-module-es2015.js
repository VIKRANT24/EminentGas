(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deviceactivity-deviceactivity-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/deviceactivity/deviceactivity.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deviceactivity/deviceactivity.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Device Activity\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are {{datapackets.length}} payloads for device: <b>{{device}}.</b></p>\n          <ion-grid>\n                \n              <ion-row>\n                <ion-col>\n                    <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" ><ion-icon name=\"add\"></ion-icon> Send Data</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"selectDevice()\"><ion-icon name=\"add\"></ion-icon> Select Device</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"refresh()\"><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n                </ion-col>\n              \n              \n              </ion-row>\n            </ion-grid>\n\n            <ion-card-content>\n              <ag-grid-angular\n              style=\"width: 100%; height: 600px;\"\n              class=\"ag-theme-balham\"\n              [columnDefs]=\"columnDefs\"\n              [rowData]=\"rowData\"\n              [enableSorting]=\"true\"\n              [animateRows]=\"true\"\n              [pagination]=\"true\"\n              [paginationPageSize]=\"50\"\n              [enableFilter]=\"true\"\n              [floatingFilter]=\"true\"\n              [suppressRowClickSelection]=\"true\"\n              [rowSelection]=\"rowSelection\">\n              </ag-grid-angular>\n          </ion-card-content>\n</ion-content>\n"

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
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");





let DeviceactivityPage = class DeviceactivityPage {
    constructor(modalController, firebaseService) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.datapackets = [];
        this.payloads = "";
        this.device = localStorage.getItem("viewdevice");
        this.getdatapackets(this.device);
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
            // {
            //   headerName: "Time",
            //   field: "time",
            //   width: 250,
            //   filter:"agDateColumnFilter"
            // },
            {
                headerName: "Time",
                field: "time",
                width: 250,
                filter: false,
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
                field: "data_rate",
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
                headerName: "Cubic meter",
                field: "cubic",
                width: 250,
                filter: false,
            },
            {
                headerName: "Data",
                field: "data",
                width: 250,
                filter: false,
            }
            // {
            //   headerName: "Decrypted",
            //   field: "decrypted",
            //   width: 250,
            //   filter: false,
            // },
            // {headerName: 'Actions',
            //  field: 'action', 
            //  width: 330,
            //  filter: false},
        ];
    }
    refresh() {
        this.rowData1 = [];
        this.rowData = [];
        this.datapackets = [];
        this.getdatapackets(this.device);
    }
    getdatapackets(device) {
        this.firebaseService.getMethod("amr_readings.json", "").then(data => {
            this.amr_readings = JSON.parse(data);
            // this.amr_readings = JSON.parse('{"-M0N4f0TmNKwscuC-Elp":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp1":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp2":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQGy","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"}}')
            var cubic = "";
            for (var key in this.amr_readings) {
                if (device == this.amr_readings[key].deveui) {
                    var dataframe = this.amr_readings[key].dataFrame;
                    // var dataframe = "EQAAAA4Bsg=="
                    var raw = atob(dataframe);
                    var HEX = '';
                    for (var i = 0; i < raw.length; i++) {
                        var _hex = raw.charCodeAt(i).toString(16);
                        HEX += (_hex.length == 2 ? _hex : '0' + _hex);
                    }
                    var hex_value = HEX.toUpperCase();
                    if (hex_value.length > 10) {
                        var hex = hex_value.substring(2, 10);
                        var decimal = parseInt(hex, 16);
                        cubic = (decimal * 0.01).toString();
                    }
                    else {
                        cubic = "0.00";
                    }
                    var direction = "Up";
                    var fcnt = this.amr_readings[key].fcnt;
                    var port = this.amr_readings[key].port;
                    var rssi = this.amr_readings[key].rssi;
                    var data_rate = this.amr_readings[key].dr_used;
                    var time = this.amr_readings[key].timestamp;
                    this.datapackets.push({ 'data': hex_value, 'time': time, 'data_rate': data_rate, 'device': device, 'direction': direction, 'fcnt': fcnt, 'port': port, 'rssi': rssi, 'cubic': cubic });
                    this.rowData = this.datapackets;
                }
                else {
                    console.log("no" + this.amr_readings[key].deveui);
                }
            }
        });
    }
    ngOnInit() {
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_3__["SelectdevicemodalPage"]
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.device = dataReturned.data[0].deveui;
                this.datapackets = [];
                this.getdatapackets(dataReturned.data[0].deveui);
                console.log(dataReturned.data[0].deveui);
            });
            return yield modal.present();
        });
    }
};
DeviceactivityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
DeviceactivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deviceactivity',
        template: __webpack_require__(/*! raw-loader!./deviceactivity.page.html */ "./node_modules/raw-loader/index.js!./src/app/deviceactivity/deviceactivity.page.html"),
        styles: [__webpack_require__(/*! ./deviceactivity.page.scss */ "./src/app/deviceactivity/deviceactivity.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], DeviceactivityPage);



/***/ })

}]);
//# sourceMappingURL=deviceactivity-deviceactivity-module-es2015.js.map