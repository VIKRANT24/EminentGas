(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-device-without-profile-add-device-without-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-device-without-profile/add-device-without-profile.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-device-without-profile/add-device-without-profile.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n    <ion-toolbar class=\"custom-toolbar\">\n      <ion-title>Add Device W/O Profile</ion-title>\n      <!-- <button ion-button icon-only (click)=\"closeModal()\">\n          \n  \n      </button> -->\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeModal()\">\n          <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n        </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n          <ion-grid>\n              <ion-row>\n                <ion-col  style=\"padding-top: 27px;\"><ion-label >DEVEID</ion-label></ion-col>\n                <ion-col size=\"10\">\n                  <ion-card>\n              \n                    <ion-input  clearInput=\"true\" ></ion-input>\n                    <!-- [(ngModel)]=\"addDeviceID\" -->\n               \n                </ion-card>\n  \n                  <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"padding-top: 27px;\"><ion-label >Comment</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                        <ion-card>\n                   \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                  \n                      </ion-card>\n  \n                      <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div class=\"ui-fluid\"  style=\"padding-top: 2vh;\">\n                <p-selectButton tabindex [options]=\"types\" [(ngModel)]=\"selectedType\" (onOptionClick)=\"onOptionClick($event)\" ></p-selectButton>\n            </div>\n  \n            <ion-card>\n                <ion-row>\n                    <ion-col style=\"padding-top: 27px;\"><ion-label >Activated</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                <ion-segment style=\"margin-top: 23px;\">\n                    <ion-segment-button checked>\n                      <ion-label>Yes</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button>\n                      <ion-label>No</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                  <label>Select Yes to allow the device to actively operate on the network. If a device not activated, no data will be received from it and data cannot be sent to it.</label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"padding-top: 27px;\"><ion-label >Downlink Enabled</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                <ion-segment style=\"margin-top: 23px;\">\n                    <ion-segment-button checked>\n                      <ion-label>Yes</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button>\n                      <ion-label>No</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                  <label>Select Yes to allow the network to send downlink on the network. If a not allowed, the network will not send any user payloads to thw device.</label>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"padding-top: 27px;\"><ion-label >Registration Type</ion-label></ion-col>\n                    <ion-col size=\"5\">\n                <ion-segment style=\"margin-top: 23px;\">\n                    <ion-segment-button checked>\n                      <ion-label>OTAA</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button>\n                      <ion-label>ABP</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                  </ion-col>\n                  <ion-col style=\"padding-top: 27px;\"><ion-label >LoRA WAN Mac Version</ion-label></ion-col>\n                  <ion-col style=\"padding-top: 27px;\">\n                    <ion-card>\n                      <ion-input  clearInput=\"true\" type=\"number\" ></ion-input>\n                      <!-- [(ngModel)]=\"addDeviceID\" -->\n                  </ion-card></ion-col>\n                </ion-row>\n                <label>personalised devices have pre-generated session keys and will not perform the JOIN procedure.</label>\n                <ion-row>\n                    <ion-col  style=\"padding-top: 27px;\"><ion-label >App Key</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                      <ion-card>\n                      <ion-item>\n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                      </ion-item>\n                    </ion-card>\n      \n                      <ion-label>The App Key is a 16-byte encryption key used the data payloads. If provided all encryption is managed by the network. If not provided, the payload encryption must be managedby the application.Optional.</ion-label></ion-col>\n                    </ion-row>\n            </ion-card>\n        <div style=\"padding-top:3vh\">\n              <ion-button style=\"color:red\" size=\"small\"  float-right fill=\"outline\" >Cancel</ion-button>\n            <ion-button size=\"small\"  float-right >OK</ion-button>\n           </div>\n           \n  \n  \n  </ion-content>\n  \n"

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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"]
            ],
            declarations: [_add_device_without_profile_page__WEBPACK_IMPORTED_MODULE_6__["AddDeviceWithoutProfilePage"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXZpY2Utd2l0aG91dC1wcm9maWxlL2FkZC1kZXZpY2Utd2l0aG91dC1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

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


var AddDeviceWithoutProfilePage = /** @class */ (function () {
    function AddDeviceWithoutProfilePage() {
    }
    AddDeviceWithoutProfilePage.prototype.ngOnInit = function () {
    };
    AddDeviceWithoutProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device-without-profile',
            template: __webpack_require__(/*! raw-loader!./add-device-without-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-device-without-profile/add-device-without-profile.page.html"),
            styles: [__webpack_require__(/*! ./add-device-without-profile.page.scss */ "./src/app/add-device-without-profile/add-device-without-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDeviceWithoutProfilePage);
    return AddDeviceWithoutProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=add-device-without-profile-add-device-without-profile-module-es5.js.map