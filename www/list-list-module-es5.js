(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/primeng/overlaypanel.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/overlaypanel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/overlaypanel/overlaypanel */ "./node_modules/primeng/components/overlaypanel/overlaypanel.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Devices\n      </ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n      \n      <ion-content>\n        \n        <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are {{devices}} devices registered.</p>\n          <ion-grid>\n                \n              <ion-row>\n                <ion-col>\n                    <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" (click)=\"addDevice()\"  ><ion-icon name=\"add\"></ion-icon> Add Device</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"addDeviceWithoutProfile()\" ><ion-icon name=\"add\"></ion-icon>  Add Device w/o profile</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" ><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n                </ion-col>\n              \n              \n              </ion-row>\n            </ion-grid>\n        <ion-card>\n      <ion-card-content>\n          <ag-grid-angular\n          style=\"width: 100%; height: 600px;\"\n          class=\"ag-theme-balham\"\n          [columnDefs]=\"columnDefs\"\n          [rowData]=\"rowData\"\n          [enableSorting]=\"true\"\n          [animateRows]=\"true\"\n          [pagination]=\"true\"\n          [paginationPageSize]=\"50\"\n          [enableFilter]=\"true\"\n          [floatingFilter]=\"true\"\n          [suppressRowClickSelection]=\"true\"\n          [rowSelection]=\"rowSelection\">\n          </ag-grid-angular>\n      </ion-card-content>\n      \n          </ion-card>\n          \n       \n      </ion-content>\n      \n      <!-- [multiSortKey]=\"multiSortKey\"         (gridReady)=\"onGridReady($event)\"-->\n\n      "

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__);









var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__["OverlayPanelModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]
                    }
                ]),
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n\n.radio-icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHSTtFQUNKLHFCQUFBO0VBQ0EsV0FBQTtBQ0FBOztBREdJO0VBQ0ksYUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfVxuXG4gICAgLnJhZGlvLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIiwiaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWM1YjYgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmFkaW8taWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell-custom/cell-custom.component */ "./src/app/cell-custom/cell-custom.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-device/add-device.page */ "./src/app/add-device/add-device.page.ts");
/* harmony import */ var _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-device-woprofile/add-device-woprofile.page */ "./src/app/add-device-woprofile/add-device-woprofile.page.ts");








// declare var firebase;
// var config={
//   apiKey: 'AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4',
//   authDomaim : 'eminent-gas-tech.firebase',
//   databaseURL : 'https://eminent-gas-tech.firebaseio.com'
// };
// firebase.initializeApp(config)
var ListPage = /** @class */ (function () {
    function ListPage(firebaseService, modalController) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        var user = localStorage.getItem("username");
        var pwd = localStorage.getItem("pwd");
        this.getAdminArm(user, pwd);
        // this.columnDefs = [
        //   {
        //     headerName: "Athlete",
        //     field: "athlete",
        //     width: 150,
        //     headerCheckboxSelection: true,
        //     headerCheckboxSelectionFilteredOnly: true,
        //     checkboxSelection: true
        //   },
        //   {
        //     headerName: "Age",
        //     field: "age",
        //     width: 150,
        //     filter: "agNumberColumnFilter"
        //   },
        //   {
        //     headerName: "Country",
        //     field: "country",
        //     width: 150
        //   },
        //   {
        //     headerName: "Year",
        //     field: "year",
        //     width: 150
        //   },
        //   {
        //     headerName: "Date",
        //     field: "date",
        //     filter:"agDateColumnFilter"
        //   },
        //   {
        //     headerName: "Sport",
        //     field: "sport",
        //     width: 150,
        //     filter:false
        //   },
        //   {
        //     headerName: "Gold",
        //     field: "gold",
        //     width: 150,
        //     filter: "agNumberColumnFilter"
        //   },
        //   {
        //     headerName: "Silver",
        //     field: "silver",
        //     width: 150,
        //     filter: "agNumberColumnFilter"
        //   },
        //   {
        //     headerName: "Bronze",
        //     field: "bronze",
        //     width: 150,
        //     filter: "agNumberColumnFilter"
        //   },
        //   {
        //     headerName: "Total",
        //     field: "total",
        //     width: 150,
        //     filter: false
        //   }
        // ];
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
                width: 180,
                filter: false,
                value: '1.34'
            },
            { headerName: 'Actions',
                field: 'action',
                width: 330,
                filter: false,
                cellRendererFramework: _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_4__["CellCustomComponent"]
                //template: '<p-overlayPanel #op>Content</p-overlayPanel><button type="text" pButton label="Basic" (click)="op.toggle($event)">zxzzx</button>'
            },
        ];
        // this.rowData=data;
    }
    ListPage.prototype.getAdminArm = function (user, pwd) {
        var _this = this;
        this.firebaseService.searchUsers(user, pwd).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var no_of_arms;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                no_of_arms = result[0].payload.doc.data()['no_of_arms'];
                this.devices = no_of_arms.length;
                this.getDevices(no_of_arms);
                return [2 /*return*/];
            });
        }); });
    };
    ListPage.prototype.getDevices = function (no_of_arms) {
        var _this = this;
        this.firebaseService.getDevices()
            .subscribe(function (result) {
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
                    var cubic = "1.34";
                    _this.rowData1.push({ 'deveui': deveui, 'devaddr': devaddr, 'appeui': appeui, 'comment': comment, 'latitude': latitude, 'longitude': longitude, 'altitude': altitude, 'device_status': device_status, 'dl_fcnt': dl_fcnt, 'lora_device_class': lora_device_class, 'registration_status': registration_status, 'expiry_time_uplink': expiry_time_uplink, 'expiry_time_downlink': expiry_time_downlink, 'last_reception': last_reception, 'groups': groups, 'applications': applications, 'tags': tags, 'cubic': cubic });
                }
            }
            _this.rowData = _this.rowData1;
        });
    };
    ListPage.prototype.addDevice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_6__["AddDevicePage"],
                            cssClass: 'my-custom-modal-css'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.prototype.addDeviceWithoutProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_7__["AddDeviceWOProfilePage"],
                            cssClass: 'my-custom-modal-css'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module-es5.js.map