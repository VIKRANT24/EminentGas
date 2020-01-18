(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-device-without-profile-add-device-without-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-device-without-profile/add-device-without-profile.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-device-without-profile/add-device-without-profile.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-row></ion-row>\n<ion-row></ion-row> -->\n\n<ion-header>\n    <ion-toolbar class=\"custom-toolbar\">\n      <ion-title>Add Device W/O Profile</ion-title>\n      <!-- <button ion-button icon-only (click)=\"closeModal()\">\n          \n  \n      </button> -->\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeModal()\">\n          <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n        </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n          <ion-grid>\n              <ion-row>\n                <ion-col  style=\"margin-top:3vh\"><ion-label >DEVEID</ion-label></ion-col>\n                <ion-col size=\"10\">\n                  <ion-card>\n              \n                    <ion-input  clearInput=\"true\" ></ion-input>\n                    <!-- [(ngModel)]=\"addDeviceID\" -->\n               \n                </ion-card>\n  \n                  <ion-label style=\"color: black;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"margin-top:3vh\"><ion-label >Comment</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                        <ion-card>\n                   \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                  \n                      </ion-card>\n  \n                      <ion-label style=\"color: black;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div class=\"ui-fluid\"  style=\"padding-top: 2vh;\">\n                <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\" (onOptionClick)=\"onOptionClick($event)\" ></p-selectButton>\n            </div>\n  <div *ngIf=\"!keys\">\n                <ion-row>\n                    <ion-col style=\"margin-top:1vh\"><ion-label >Activated</ion-label></ion-col>\n                    <ion-col size=\"10\" >\n                        <p-selectButton [options]=\"activatedType\" [(ngModel)]=\"ActivatedSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                  </ion-col>\n                </ion-row>\n                <p style=\"font-size: 12px;margin-left:15vh\">Select Yes to allow the device to actively operate on the network. If a device not activated, no data will be received from it and data cannot be sent to it.</p>\n                <ion-row>\n                    <ion-col style=\"margin-top:1vh\"><ion-label >Downlink Enabled</ion-label></ion-col>\n                    <ion-col size=\"10\" >\n                        <p-selectButton [options]=\"DownlinkType\" [(ngModel)]=\"DownlinkSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                    </ion-row>\n                        <p style=\"font-size: 12px;margin-left:15vh\">Select Yes to allow the network to send downlink on the network. If a not allowed, the network will not send any user payloads to thw device.</p>\n\n                    <ion-row>\n                         <ion-col style=\"margin-top:2vh\"><ion-label >Registration Type</ion-label></ion-col>\n                        <ion-col style=\"margin-top:1vh\">\n                            <p-selectButton [options]=\"registrationType\" [(ngModel)]=\"registrationSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                          </ion-col>\n                  <ion-col style=\"margin-top:2vh\"><ion-label >LoRA WAN Mac Version</ion-label></ion-col>\n                  <ion-col>\n                    <ion-card>\n                      <ion-input  clearInput=\"true\" type=\"number\" ></ion-input>\n                      <!-- [(ngModel)]=\"addDeviceID\" -->\n                  </ion-card></ion-col>\n                </ion-row>\n                <p style=\"font-size: 12px;margin-left:15vh\">personalised devices have pre-generated session keys and will not perform the JOIN procedure.</p>\n                <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >App Key</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                      <ion-card>\n                      <ion-item>\n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                      </ion-item>\n                    </ion-card>\n      </ion-col>\n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">The App Key is a 16-byte encryption key used the data payloads. If provided all encryption is managed by the network. If not provided, the payload encryption must be managedby the application.Optional.</p>\n          </div>\n          <div *ngIf=\"!QoS\">\n              <ion-grid>\n\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\" size=\"2\"><ion-label >Device Properties</ion-label></ion-col>\n                      <ion-col  size=\"5\">\n                          <p-selectButton [options]=\"devicePropertiesStaMob\" [(ngModel)]=\"devicePropertiesStaMobType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <ion-col size=\"5\" >\n                        <p-selectButton [options]=\"devicePropertiesInOUt\" [(ngModel)]=\"devicePropertiesInOUtType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                  </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select Device Properties or not specified.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select Device Properties or not specified.</p>\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\"><ion-label >QoS Class</ion-label></ion-col>\n                      <ion-col size=\"10\">\n                          <p-selectButton [options]=\"qosClass\" [(ngModel)]=\"qosClassType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select the QoS level for the device.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select the QoS level for the device.</p>\n\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\"><ion-label >Uplink redundancy</ion-label></ion-col>\n                      <ion-col size=\"10\">\n                          <p-selectButton [options]=\"uplinkType\" [(ngModel)]=\"uplinkSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select number of transmissions device will do for each uplink. Setting the count to 1 means no reduncancy.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select number of transmissions device will do for each uplink. Setting the count to 1 means no reduncancy.</p>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Allowed duty cycle</ion-label></ion-col>\n                    <ion-col size=\"9.5\">\n                      <ion-card>\n                  \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                   \n                    </ion-card>\n                  </ion-col>\n                    </ion-row>\n                    <p style=\"font-size:12px;margin-left: 19vh;\">Specify the maximum dutycycle in % the device is allowed. If it is exceeded the network try to enforce it. Optional.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:3vh\"><ion-label >Expected duty cycle</ion-label></ion-col>\n                        <ion-col size=\"9.5\">\n                            <ion-card>\n                       \n                            <ion-input  clearInput=\"true\" ></ion-input>\n                            <!-- [(ngModel)]=\"addDeviceID\" -->\n                      \n                          </ion-card>\n                        </ion-col>\n                        </ion-row>\n                        <p style=\"font-size:12px;margin-left: 19vh;\">Specify the expected average duty cycle. Optional.</p>\n                    </ion-grid>\n\n          </div>\n          <div *ngIf=\"!packetStorage\">\n              <ion-grid>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Downlink Packet Expiry Time</ion-label></ion-col>\n                    <ion-col size=\"9\">\n                      <ion-card>\n                  \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                   \n                      </ion-card>\n                    </ion-col>\n                    </ion-row>\n                    <p style=\"font-size:12px;margin-left: 20vh;\">Time in hours that a downlink packet is stored in the persistent storage. After expiry the packet will be discarded regardless if the packet was sent or not, or if the applicaiton have seen the status of the packet.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:3vh\"><ion-label >Uplink Packet Expiry Time</ion-label></ion-col>\n                        <ion-col size=\"9\">\n                            <ion-card>\n                       \n                            <ion-input  clearInput=\"true\" ></ion-input>\n                            <!-- [(ngModel)]=\"addDeviceID\" -->\n                      \n                          </ion-card>\n                        </ion-col>\n                        </ion-row>\n                        <p style=\"font-size:12px;margin-left: 20vh;\">Time in hours that a received packet will be stored in the persistent storage. After expiry the packet will be discarded regardless if the packet have been read or not.</p>\n                    </ion-grid>\n          </div>\n          <div *ngIf=\"!LoRaParameters\" style=\"padding-top:2vh\">\n              <ion-row>\n                  <ion-col size=\"3\">\n                      <label>LoRaWAN Mac Version</label>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                      <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                  </ion-col>\n                  <p-selectButton [options]=\"MacVersion\" [(ngModel)]=\"MacVersionType\" ></p-selectButton>\n                </ion-row>\n                <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >MaxEIRP</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                      <ion-card>\n                      <ion-item>\n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                      </ion-item>\n                    </ion-card>\n      </ion-col>\n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Maximum output power in dBm of the device. This is only applicable to 1.0.2 Rev B or later devices.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >Device Class</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"deviceClass\" [(ngModel)]=\"deviceClassType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                    \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Supported device class.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >FCNT Size</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"fcntSize\" [(ngModel)]=\"fcntSizeType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                     \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Select size of FCNT.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >Downlink slot delay</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"downSlotDelay\" [(ngModel)]=\"downSlotDelayType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                    \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Select default delay from end of tranmission till the device listen for downlink. This parameter is only important for personalized devices.</p>\n                    <ion-row>\n                        <ion-col >\n                            <label>RX Slot 2</label>\n                        </ion-col>\n                        <ion-col size=\"10\">\n        \n                            <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"rsSlot\" [(ngModel)]=\"rsSlotType\" placeholder=\"Select a Slot\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                        </ion-col>\n                        <p style=\"font-size: 12px;margin-left:15vh\">Data rate (spreading factor and Bandwidth) used by default in downlink for slot-2 and for class C.</p>\n                          <!-- <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n                      </ion-row>\n       \n                  </div>\n          <div *ngIf=\"!LoRaLocation\">\n                <ion-grid>\n                <ion-row>\n                  <ion-col style=\"margin-top:1vh\">\n                    <ion-label >LoRa Location</ion-label>\n                  </ion-col>\n                  <ion-col size=\"10\" >\n                      <p-selectButton [options]=\"loRaLocationType\" [(ngModel)]=\"LoRaLocationSelectedType\" (onOptionClick)=\"LoRaLocation($event)\" ></p-selectButton>\n                  </ion-col>\n                </ion-row>\n                <p style=\"font-size: 12px;margin-left: 19vh;\"></p>\n              </ion-grid>\n          \n          </div>\n\n\n\n          <div  *ngIf=\"!Additional\">\n           \n              <ion-grid>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Options</ion-label></ion-col>\n                    <ion-col size=\"11\">\n                      <ion-card>\n                      \n                        <ion-input   style=\"background-color: white;\" clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                    \n                    </ion-card>\n                  </ion-col>\n                    </ion-row>\n                    <p style=\" font-size:12px;margin-left: 15vh;\">The Options is a 4 byte hex value. Normally Left blank.</p>\n                    </ion-grid>\n                 \n                  </div>\n        <div style=\"padding-top:3vh;\">\n              <ion-button style=\"color:black\" size=\"small\"  float-right fill=\"outline\" >Cancel</ion-button>\n            <ion-button size=\"small\"  float-right >OK</ion-button>\n           </div>\n           \n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/add-device-without-profile/add-device-without-profile.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/add-device-without-profile/add-device-without-profile.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddDeviceWithoutProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceWithoutProfilePageModule", function() { return AddDeviceWithoutProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_device_without_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-device-without-profile.page */ "./src/app/add-device-without-profile/add-device-without-profile.page.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);










var routes = [
    {
        path: '',
        component: _add_device_without_profile_page__WEBPACK_IMPORTED_MODULE_6__["AddDeviceWithoutProfilePage"]
    }
];
var AddDeviceWithoutProfilePageModule = /** @class */ (function () {
    function AddDeviceWithoutProfilePageModule() {
    }
    AddDeviceWithoutProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: []
        })
    ], AddDeviceWithoutProfilePageModule);
    return AddDeviceWithoutProfilePageModule;
}());



/***/ }),

/***/ "./src/app/add-device-without-profile/add-device-without-profile.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/add-device-without-profile/add-device-without-profile.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYWRkLWRldmljZS13aXRob3V0LXByb2ZpbGUvYWRkLWRldmljZS13aXRob3V0LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtZGV2aWNlLXdpdGhvdXQtcHJvZmlsZS9hZGQtZGV2aWNlLXdpdGhvdXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtZGV2aWNlLXdpdGhvdXQtcHJvZmlsZS9hZGQtZGV2aWNlLXdpdGhvdXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIudGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-device-without-profile/add-device-without-profile.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/add-device-without-profile/add-device-without-profile.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AddDeviceWithoutProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceWithoutProfilePage", function() { return AddDeviceWithoutProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AddDeviceWithoutProfilePage = /** @class */ (function () {
    function AddDeviceWithoutProfilePage(modal) {
        this.modal = modal;
        this.selectedType = 'Keys';
        this.keys = false;
        this.QoS = true;
        this.packetStorage = true;
        this.LoRaParameters = true;
        this.LoRaLocation = true;
        this.Additional = true;
        this.selectedType = 'Keys';
        this.loRaLocationSelectedType = "Disable";
        this.types = [
            { label: 'Keys', value: 'Keys' },
            { label: 'QoS', value: 'QoS' },
            { label: 'Packet Storage', value: 'packetStorage' },
            { label: 'LoRa Parameters', value: 'LoRaParameters' },
            { label: 'LoRa Location', value: 'LoRa Location' },
            { label: 'Addtional', value: 'Additional' }
        ];
        this.loRaLocationType = [
            { label: 'Disable', value: 'Disable' },
            { label: 'Enable', value: 'Enable' }
        ];
        this.activatedType = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' }
        ];
        this.devicePropertiesStaMob = [
            { label: 'Not Specified', value: 'NotSpecified' },
            { label: 'Static', value: 'Static' },
            { label: 'Mobile', value: 'Mobile' }
        ];
        this.devicePropertiesInOUt = [
            { label: 'Not Specified', value: 'NotSpecified' },
            { label: 'Outdoor', value: 'Outdoor' },
            { label: 'Indoor', value: 'Indoor' }
        ];
        this.qosClass = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' }
        ];
        this.DownlinkType = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' }
        ];
        this.registrationType = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' }
        ];
        this.uplinkType = [
            { label: 'Auto', value: 'Auto' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' }
        ];
        this.MacVersion = [
            { label: 'Rev A', value: 'revA' },
            { label: 'Rev B', value: 'revB' }
        ];
        this.deviceClass = [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' }
        ];
        this.fcntSize = [
            { label: '16-Bit', value: '16bit' },
            { label: '32-Bit', value: '32bit' }
        ];
        this.downSlotDelay = [
            { label: '1s', value: '1s' },
            { label: '2s', value: '2s' },
            { label: '3s', value: '3s' },
            { label: '4s', value: '4s' },
            { label: '5s', value: '5s' }
        ];
    }
    AddDeviceWithoutProfilePage.prototype.ngOnInit = function () {
    };
    AddDeviceWithoutProfilePage.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AddDeviceWithoutProfilePage.prototype.onOptionClick = function (event) {
        var count = event.index;
        if (count == 0) {
            this.keys = false;
            this.QoS = true;
            this.packetStorage = true;
            this.LoRaParameters = true;
            this.LoRaLocation = true;
            this.Additional = true;
        }
        else if (count == 1) {
            this.keys = true;
            this.QoS = false;
            this.packetStorage = true;
            this.LoRaParameters = true;
            this.LoRaLocation = true;
            this.Additional = true;
        }
        else if (count == 2) {
            this.keys = true;
            this.QoS = true;
            this.packetStorage = false;
            this.LoRaParameters = true;
            this.LoRaLocation = true;
            this.Additional = true;
        }
        else if (count == 3) {
            this.keys = true;
            this.QoS = true;
            this.packetStorage = true;
            this.LoRaParameters = false;
            this.LoRaLocation = true;
            this.Additional = true;
        }
        else if (count == 4) {
            this.keys = true;
            this.QoS = true;
            this.packetStorage = true;
            this.LoRaParameters = true;
            this.LoRaLocation = false;
            this.Additional = true;
        }
        else if (count == 5) {
            this.keys = true;
            this.QoS = true;
            this.packetStorage = true;
            this.LoRaParameters = true;
            this.LoRaLocation = true;
            this.Additional = false;
        }
    };
    AddDeviceWithoutProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddDeviceWithoutProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device-without-profile',
            template: __webpack_require__(/*! raw-loader!./add-device-without-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-device-without-profile/add-device-without-profile.page.html"),
            styles: [__webpack_require__(/*! ./add-device-without-profile.page.scss */ "./src/app/add-device-without-profile/add-device-without-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddDeviceWithoutProfilePage);
    return AddDeviceWithoutProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=add-device-without-profile-add-device-without-profile-module-es5.js.map