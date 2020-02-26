(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-list-admin-list-module~list-superadmin-list-superadmin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list-superadmin/list-superadmin.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-superadmin/list-superadmin.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Devices\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n    \n    <ion-content>\n      \n      <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are {{devices}} devices registered.</p>\n        <ion-grid>\n              \n            <ion-row>\n              <ion-col>\n                  <!-- <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" (click)=\"addDevice()\"  ><ion-icon name=\"add\"></ion-icon> Add Device</ion-button> -->\n              </ion-col>\n              <ion-col>\n                  <!-- <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"addDeviceWithoutProfile()\" ><ion-icon name=\"add\"></ion-icon>  Add Device w/o profile</ion-button> -->\n              </ion-col>\n              <ion-col>\n                  <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"refresh()\"><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n              </ion-col>\n            \n            \n            </ion-row>\n          </ion-grid>\n      <ion-card>\n    <ion-card-content>\n        <ag-grid-angular\n        style=\"width: 100%; height: 600px;\"\n        class=\"ag-theme-balham\"\n        [columnDefs]=\"columnDefs\"\n        [rowData]=\"rowData\"\n        [enableSorting]=\"true\"\n        [animateRows]=\"true\"\n        [pagination]=\"true\"\n        [paginationPageSize]=\"50\"\n        [enableFilter]=\"true\"\n        [floatingFilter]=\"true\"\n        [suppressRowClickSelection]=\"true\"\n        [rowSelection]=\"rowSelection\"\n        (gridReady)=\"onGridReady($event)\">>\n        </ag-grid-angular>\n    </ion-card-content>\n    \n        </ion-card>\n        \n     \n    </ion-content>\n    \n    <!-- [multiSortKey]=\"multiSortKey\"         (gridReady)=\"onGridReady($event)\"-->\n\n    "

/***/ }),

/***/ "./src/app/list-superadmin/list-superadmin.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-superadmin/list-superadmin.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n\n.radio-icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbGlzdC1zdXBlcmFkbWluL2xpc3Qtc3VwZXJhZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3Qtc3VwZXJhZG1pbi9saXN0LXN1cGVyYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdJO0VBQ0oscUJBQUE7RUFDQSxXQUFBO0FDQUE7O0FER0k7RUFDSSxhQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9saXN0LXN1cGVyYWRtaW4vbGlzdC1zdXBlcmFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfVxuXG4gICAgLnJhZGlvLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIiwiaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWM1YjYgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmFkaW8taWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/list-superadmin/list-superadmin.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-superadmin/list-superadmin.page.ts ***!
  \*********************************************************/
/*! exports provided: ListSuperadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSuperadminPage", function() { return ListSuperadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell-custom/cell-custom.component */ "./src/app/cell-custom/cell-custom.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-device/add-device.page */ "./src/app/add-device/add-device.page.ts");
/* harmony import */ var _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-device-woprofile/add-device-woprofile.page */ "./src/app/add-device-woprofile/add-device-woprofile.page.ts");


//import data from '../../assets/company.json'





//loimport { AddDeviceWithoutProfilePage } from '../add-device-without-profile/add-device-without-profile.page';


let ListSuperadminPage = class ListSuperadminPage {
    constructor(toastController, events, firebaseService, modalController) {
        this.toastController = toastController;
        this.events = events;
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.splitarm = [];
        this.events.subscribe('amr_list', (data) => {
            this.refresh();
            this.updatemessage();
        });
        this.getAMRReadings();
        localStorage.setItem('list', 'superAdminList');
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
                width: 300,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
            // {
            //   headerName: "Comment",
            //   field: "comment",
            //   width: 250,
            // },
            // {
            //   headerName: "Groups",
            //   field: "groups",
            //   width: 250,
            // },
            // {
            //   headerName: "Apps",
            //   field: "applications",
            //   width: 250,
            // },
            // {
            //   headerName: "Last Seen",
            //   field: "last_reception",
            //   width: 250,
            // },
            {
                headerName: "Flat no",
                field: "flat",
                width: 300,
                filter: false,
                value: '2408'
            },
            {
                headerName: "Meter no",
                field: "meter",
                width: 300,
                filter: false,
                value: '2408'
            },
            {
                headerName: "Cubic meter",
                field: "cubic",
                width: 300,
                filter: false,
                value: '1.34'
            },
            // {
            //   headerName: "Amount",
            //   field: "amount",
            //   width: 300,
            //   filter: false,
            //   value: '500'
            // },
            { headerName: 'Actions',
                field: 'action',
                width: 300,
                filter: false,
                cellRendererFramework: _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_4__["CellCustomComponent"]
                //template: '<p-overlayPanel #op>Content</p-overlayPanel><button type="text" pButton label="Basic" (click)="op.toggle($event)">zxzzx</button>'
            },
        ];
        // this.rowData=data;
    }
    refresh() {
        this.rowData1 = [];
        this.rowData = [];
        this.splitarm = [];
        this.getAMRReadings();
    }
    updatemessage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Record deleted  successfully',
                duration: 2000,
                color: 'medium',
                position: 'top'
            });
            toast.present();
        });
    }
    getAdminArm(user, pwd) {
        this.firebaseService.searchUsers(user, pwd).subscribe((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var dataresult = result[0].payload.doc.data()['no_of_arms'];
            var primary_id = result[0].payload.doc.id;
            this.devices = dataresult.length;
            for (var i = 0; i < dataresult.length; i++) {
                var splitdata = dataresult[i].split('-');
                var other_values = splitdata[1].split(',');
                var device = splitdata[0];
                var flat = other_values[0];
                var meterno = other_values[1];
                var meterdefault = other_values[2];
                var amrdefault = other_values[3];
                var originalValue = dataresult[i];
                this.splitarm.push({ device, flat, meterno, meterdefault, amrdefault, originalValue, primary_id });
            }
            this.getDevices(this.splitarm);
        }));
    }
    getAMRReadings() {
        this.firebaseService.getMethod("amr_readings.json", "").then(data => {
            this.amr_readings = JSON.parse(data);
            var user = localStorage.getItem("username");
            var pwd = localStorage.getItem("pwd");
            this.getAdminArm(user, pwd);
            console.log(this.amr_readings);
        });
    }
    getDevices(no_of_arms) {
        this.firebaseService.getDevices()
            .subscribe(result => {
            //var arms_array = no_of_arms.toString().split(",")
            for (var i = 0; i < result.length; i++) {
                // if(no_of_arms.includes(result[i].payload.doc.data()['deveui']))
                if ((no_of_arms.filter(e => e.device === result[i].payload.doc.data()['deveui']).length > 0)) {
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
                    var cubic = no_of_arms[i].amrdefault;
                    var flat = no_of_arms[i].flat;
                    var meter = no_of_arms[i].meterno;
                    var original = no_of_arms[i].originalValue;
                    var primary = no_of_arms[i].primary_id;
                    this.rowData1.push({ 'deveui': deveui, 'devaddr': devaddr, 'appeui': appeui, 'comment': comment, 'latitude': latitude, 'longitude': longitude, 'altitude': altitude, 'device_status': device_status, 'dl_fcnt': dl_fcnt, 'lora_device_class': lora_device_class, 'registration_status': registration_status, 'expiry_time_uplink': expiry_time_uplink, 'expiry_time_downlink': expiry_time_downlink, 'last_reception': last_reception, 'groups': groups, 'applications': applications, 'tags': tags, 'cubic': cubic, 'flat': flat, 'meter': meter, 'original': original, 'primary': primary });
                }
            }
            this.rowData = this.rowData1;
            for (var j = 0; j < this.rowData.length; j++) {
                this.cubic(this.rowData[j].deveui, j);
            }
        });
    }
    onGridReady(params) {
        this.gridApi = params.api; // To access the grids API
    }
    cubic(device, j) {
        //this.base64ToBase16("EQAAAA4Bsg==")
        var data = this.amr_readings;
        var cubic = "";
        // Object.keys(data).forEach(function(key) {
        //   if(device == data[key].deveui)
        //   {
        //     console.log("yes"+data[key].deveui);
        //     var dataframe = data[key].dataFrame
        //     console.log(this.rowData)
        //   }
        //   else{
        //     console.log("no"+data[key].deveui);
        //   }
        // });
        for (var key in data) {
            if (device == data[key].deveui) {
                var dataframe = data[key].dataFrame;
                //var dataframe = "EQAAAA4Bsg=="
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
                    var current_cubic = this.rowData[j].cubic;
                    var cubic_readings = (decimal * 0.01).toString();
                    cubic = (+current_cubic + +cubic_readings).toString();
                }
                else {
                    cubic = "";
                    var current_cubic = this.rowData[j].cubic;
                    cubic = current_cubic + cubic;
                }
                this.rowData[j]["cubic"] = cubic;
                this.gridApi.setRowData(this.rowData);
            }
            else {
                console.log("no" + data[key].deveui);
            }
        }
        // this.firebaseService.getDataPackets(this.rowData[j].deveui).subscribe(async result1 => {
        //   var cubic =""
        //   if(result1[0]!=undefined)
        //   {
        //     var datapackets = result1[0].payload.doc.data()
        //     var  data= datapackets['data']
        //     var hex=data.substring(2, 10)
        //     var decimal=parseInt(hex,16); 
        //     cubic =  (decimal * 0.01).toString()
        //     var a = j
        //     this.rowData[j]["cubic"] = cubic
        //     this.gridApi.setRowData(this.rowData);
        //   }
        //   else
        //   {
        //     cubic = "0.00"
        //     this.rowData[j]["cubic"] = cubic
        //     this.gridApi.setRowData(this.rowData);
        //   }
        // })
    }
    addDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_6__["AddDevicePage"],
                cssClass: 'my-custom-modal-css'
            });
            return yield modal.present();
            //this.router.navigateByUrl('/add-device');
        });
    }
    addDeviceWithoutProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_device_woprofile_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_7__["AddDeviceWOProfilePage"],
                showBackdrop: true,
                cssClass: 'my-custom-modal-css'
            });
            return yield modal.present();
            //this.router.navigateByUrl('/add-device');
        });
    }
    // base64ToBase16(base64) {
    //   return window.atob(base64)
    //       .split('')
    //       .map(function (aChar) {
    //         return ('0' + aChar.charCodeAt(0).toString(16)).slice(-2);
    //       })
    //      .join('')
    //      .toUpperCase(); // Per your example output
    // }
    base64ToBase16(base64) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var raw = atob(base64);
            var HEX = '';
            for (var i = 0; i < raw.length; i++) {
                var _hex = raw.charCodeAt(i).toString(16);
                HEX += (_hex.length == 2 ? _hex : '0' + _hex);
            }
            return HEX.toUpperCase();
        });
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
ListSuperadminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ListSuperadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-superadmin',
        template: __webpack_require__(/*! raw-loader!./list-superadmin.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-superadmin/list-superadmin.page.html"),
        styles: [__webpack_require__(/*! ./list-superadmin.page.scss */ "./src/app/list-superadmin/list-superadmin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], ListSuperadminPage);



/***/ })

}]);
//# sourceMappingURL=default~admin-list-admin-list-module~list-superadmin-list-superadmin-module-es2015.js.map