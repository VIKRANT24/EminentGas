(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-device-modal-add-device-modal-module~home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-device-modal/add-device-modal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-device-modal/add-device-modal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"custom-toolbar\">\n    <ion-title>Add Device</ion-title>\n    <!-- <button ion-button icon-only (click)=\"closeModal()\">\n        \n\n    </button> -->\n    <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeModal()\">\n        <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-grid>\n            <ion-row>\n              <ion-col  style=\"padding-top: 27px;\"><ion-label >DEVEID</ion-label></ion-col>\n              <ion-col size=\"10\">\n                <ion-card>\n            \n                  <ion-input  clearInput=\"true\" ></ion-input>\n                  <!-- [(ngModel)]=\"addDeviceID\" -->\n             \n              </ion-card>\n\n                <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col style=\"padding-top: 27px;\"><ion-label >Comment</ion-label></ion-col>\n                  <ion-col size=\"10\">\n                      <ion-card>\n                 \n                      <ion-input  clearInput=\"true\" ></ion-input>\n                      <!-- [(ngModel)]=\"addDeviceID\" -->\n                \n                    </ion-card>\n\n                    <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                  </ion-row>\n              </ion-grid>\n              <div class=\"ui-fluid\"  style=\"padding-top: 2vh;\">\n              <p-selectButton tabindex [options]=\"types\" [(ngModel)]=\"selectedType\" (onOptionClick)=\"onOptionClick($event)\" ></p-selectButton>\n          </div>\n\n          <div style=\"margin-top: 5vh; background-color: darkgrey;\" *ngIf=\"!profile\">\n            <ion-row>\n              <ion-col >\n                  <label>Device Profile</label>\n              </ion-col>\n              <ion-col size=\"9\">\n                  <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n              </ion-col>\n              <!-- <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n            </ion-row>\n            <ion-row>\n                <ion-col >\n                    <label>Service Profile</label>\n                </ion-col>\n                <ion-col size=\"9\">\n\n                    <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                </ion-col>\n                <!-- <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n              </ion-row>\n            </div>\n            <div style=\"margin-top: 5vh; background-color: darkgrey;\" *ngIf=\"!key\">\n                <ion-row>\n                    <ion-col >\n                        <label>Device Class</label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <p-selectButton [options]=\"keysDevice\" [(ngModel)]=\"selectedkeyDevice\"></p-selectButton>\n                   \n                    <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">Supported Device Class</ion-label></ion-col>\n                  </ion-row>\n                  <!-- <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\"></ion-label> -->\n                 \n                  <ion-row>\n                      <ion-col >\n                          <label>Activated</label>\n                      </ion-col>\n                      <ion-col size=\"9\">\n                          <p-selectButton [options]=\"keyActivated\" [(ngModel)]=\"selectedkeyActivated\"></p-selectButton>\n                    \n                      <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">Select Yes to allow the device to actively operate on the network. If a device not Activated, no data will be received from it and data cannot be sent to it.</ion-label></ion-col>\n                    </ion-row>\n                    <!-- <ion-label style=\"color: red;font-size:8px;position: absolute;\">Select Yes to allow the device to actively operate on the network. If a device not Activated, no data will be received from it and data cannot be sent to it.</ion-label> -->\n                  </div>\n            \n               <div style=\"margin-top: 5vh; background-color: darkgrey;\" *ngIf=\"!additional\">\n                  <ion-grid>\n                      <ion-row>\n                        <ion-col  style=\"padding-top: 27px;\"><ion-label >Options</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                          <ion-card>\n                          \n                            <ion-input   style=\"background-color: white;\" clearInput=\"true\" ></ion-input>\n                            <!-- [(ngModel)]=\"addDeviceID\" -->\n                        \n                        </ion-card>\n          \n                          <ion-label style=\"color: red;font-size:8px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-col>\n                        </ion-row>\n                        </ion-grid>\n                      </div>\n      <div style=\"padding-top:3vh\">\n            <ion-button style=\"color:red\" size=\"small\"  float-right fill=\"outline\" >Cancel</ion-button>\n          <ion-button size=\"small\"  float-right >OK</ion-button>\n         </div>\n         \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-device-modal/add-device-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/add-device-modal/add-device-modal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-ion-segment-md-h {\n  --background: none;\n  --background-checked: none;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.04);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --color-checked: white;\n  --color-checked-disabled: var(--color-checked);\n  --indicator-color: transparent;\n  --background-checked: red;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n\n.button-native {\n  --background-color:red ;\n}\n\n.ion-segment-button {\n  border-style: solid;\n}\n\n.segment-button {\n  border-style: none;\n  border-color: #e62100;\n  color: #e62100;\n  border-width: thin;\n}\n\n.ui-dropdown {\n  background: #ffffff;\n  border: 1px solid #a6a6a6;\n  -webkit-transition: border-color 0.2s;\n  transition: border-color 0.2s;\n  width: 100%;\n}\n\nbody .ui-selectbutton .ui-button {\n  background-color: #dadada;\n  /* border: 1px solid #dadada; */\n  color: #333333;\n  -webkit-transition: background-color 0.2s, box-shadow 0.2s;\n  transition: background-color 0.2s, box-shadow 0.2s;\n  width: 233.33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYWRkLWRldmljZS1tb2RhbC9hZGQtZGV2aWNlLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLWRldmljZS1tb2RhbC9hZGQtZGV2aWNlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzRUFBQTtFQUNBLDBFQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQXNCLFdBQUE7QUNDMUI7O0FEQ0U7RUFDSSx1QkFBQTtBQ0VOOztBRENFO0VBRUUsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSwwREFBQTtFQUNBLGtEQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkLWRldmljZS1tb2RhbC9hZGQtZGV2aWNlLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMDQpO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJlZDtcbn1cblxuLmN1c3RvbS10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzE4MjUzNTtjb2xvcjojZmZmXG4gIH1cbiAgLmJ1dHRvbi1uYXRpdmV7XG4gICAgICAtLWJhY2tncm91bmQtY29sb3I6cmVkXG4gIH1cblxuICAuaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC8vbWF4LXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIH1cbiAgXG4gIC5zZWdtZW50LWJ1dHRvbiB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI2U2MjEwMDtcbiAgICBjb2xvcjogI2U2MjEwMDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gIH1cblxuLnVpLWRyb3Bkb3duIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSAudWktc2VsZWN0YnV0dG9uIC51aS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTsgKi9cbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICAgIHdpZHRoOjIzMy4zM3B4XG59IiwiLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMDQpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjE2KTtcbiAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmVkO1xufVxuXG4uY3VzdG9tLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMxODI1MzU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjpyZWQgO1xufVxuXG4uaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBib3JkZXItY29sb3I6ICNlNjIxMDA7XG4gIGNvbG9yOiAjZTYyMTAwO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG5cbi51aS1kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSAudWktc2VsZWN0YnV0dG9uIC51aS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhOyAqL1xuICBjb2xvcjogIzMzMzMzMztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzLCBib3gtc2hhZG93IDAuMnM7XG4gIHdpZHRoOiAyMzMuMzNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-device-modal/add-device-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-device-modal/add-device-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: AddDeviceModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceModalPage", function() { return AddDeviceModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AddDeviceModalPage = class AddDeviceModalPage {
    constructor(modal) {
        this.modal = modal;
        this.profile = false;
        this.key = true;
        this.additional = true;
        this.selectedkeyDevice = "";
        this.selectedkeyActivated = "";
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.types = [
            { label: 'Profiles', value: 'Profiles' },
            { label: 'Keys', value: 'Keys' },
            { label: 'Additional', value: 'Additional' }
        ];
        this.keysDevice = [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' }
        ];
        this.keyActivated = [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }
    ngOnInit() {
    }
    closeModal() {
        this.modal.dismiss();
    }
    onOptionClick(event) {
        var count = event.index;
        if (count == 0) {
            this.profile = false;
            this.key = true;
            this.additional = true;
        }
        else if (count == 1) {
            this.key = false;
            this.profile = true;
            this.additional = true;
        }
        else {
            this.key = true;
            this.profile = true;
            this.additional = false;
        }
    }
};
AddDeviceModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
AddDeviceModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-device-modal',
        template: __webpack_require__(/*! raw-loader!./add-device-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-device-modal/add-device-modal.page.html"),
        styles: [__webpack_require__(/*! ./add-device-modal.page.scss */ "./src/app/add-device-modal/add-device-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], AddDeviceModalPage);



/***/ })

}]);
//# sourceMappingURL=default~add-device-modal-add-device-modal-module~home-home-module-es2015.js.map