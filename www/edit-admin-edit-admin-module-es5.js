(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-admin-edit-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-admin/edit-admin.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-admin/edit-admin.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">Edit Admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\" >\n        <ion-card style=\" background-color: #d8dae2;\">\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                    Client Name *:\n                </div>\n                <div class=\"ui-grid-col-4\">\n                    <input pInputText type=\"text\" formControlName=\"firstname\" placeholder=\"Required\"/>\n                </div>\n                <div class=\"ui-grid-col-4\">\n                    <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['firstname'].valid&&userform.controls['firstname'].dirty\"></p-message>\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                        Authorized Person *:\n                    </div>\n                    <div class=\"ui-grid-col-4\">\n                        <input pInputText type=\"text\" formControlName=\"authPerson\" placeholder=\"Required\"/>\n                    </div>\n                    <div class=\"ui-grid-col-4\">\n                        <p-message severity=\"error\" text=\"Name is required\" *ngIf=\"!userform.controls['authPerson'].valid&&userform.controls['authPerson'].dirty\"></p-message>\n                    </div>\n                </div>\n                <div class=\"ui-grid-row\">\n                        <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                            Number Of Wings *:\n                        </div>\n                        <div class=\"ui-grid-col-4\">\n                            <input pInputText type=\"number\" formControlName=\"wings\" placeholder=\"Required\"/>\n                        </div>\n                        <div class=\"ui-grid-col-4\">\n                            <p-message severity=\"error\" text=\"Required\" *ngIf=\"!userform.controls['wings'].valid&&userform.controls['wings'].dirty\"></p-message>\n                        </div>\n                    </div>\n                    <div class=\"ui-grid-row\">\n                            <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                No Of Flats *:\n                            </div>\n                            <div class=\"ui-grid-col-4\">\n                                <input pInputText type=\"number\" formControlName=\"flats\" placeholder=\"Required\"/>\n                            </div>\n                            <div class=\"ui-grid-col-4\">\n                                <p-message severity=\"error\" text=\"Required\" *ngIf=\"!userform.controls['flats'].valid&&userform.controls['flats'].dirty\"></p-message>\n                            </div>\n                        </div>\n                        <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                    Project Name *:\n                                </div>\n                                <div class=\"ui-grid-col-4\">\n                                    <input pInputText type=\"text\" formControlName=\"projectname\" placeholder=\"Required\"/>\n                                </div>\n                                <div class=\"ui-grid-col-4\">\n                                    <p-message severity=\"error\" text=\"Project name is required\" *ngIf=\"!userform.controls['projectname'].valid&&userform.controls['projectname'].dirty\"></p-message>\n                                </div>\n                            </div>     <div class=\"ui-grid-row\">\n                                    <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                        Account Details *:\n                                    </div>\n                                    <div class=\"ui-grid-col-4\">\n                                        <input pInputText type=\"text\" formControlName=\"account\" placeholder=\"Required\"/>\n                                    </div>\n                                    <div class=\"ui-grid-col-4\">\n                                        <p-message severity=\"error\" text=\"Account details are required\" *ngIf=\"!userform.controls['account'].valid&&userform.controls['account'].dirty\"></p-message>\n                                    </div>\n                                </div>     <div class=\"ui-grid-row\">\n                                        <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                            Email Id *:\n                                        </div>\n                                        <div class=\"ui-grid-col-4\">\n                                            <input pInputText type=\"text\" formControlName=\"email\" placeholder=\"Required\"/>\n                                        </div>\n                                        <div class=\"ui-grid-col-4\">\n                                            <p-message severity=\"error\" text=\"Correct format required\" *ngIf=\"!userform.controls['email'].valid&&userform.controls['email'].dirty\"></p-message>\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                                Mobile Number *:\n                                            </div>\n                                            <div class=\"ui-grid-col-4\">\n                                                <input pInputText type=\"number\" formControlName=\"mobile\" placeholder=\"Required\" minlength=10 maxlength=10/>\n                                            </div>\n                                            <div class=\"ui-grid-col-4\">\n                                                <p-message severity=\"error\" text=\"Mobile no is required\" *ngIf=\"!userform.controls['mobile'].valid&&userform.controls['mobile'].dirty\"></p-message>\n                                            </div>\n                                        </div>\n            <div class=\"p-grid p-justify-center\">\n                <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"presentToast()\" [disabled]=\"!userform.valid\">Save Edit</ion-button>\n               \n            </div>\n        \n        </div>\n    </ion-card>\n</form>\n</ion-content>\n\n <ion-grid>\n            <ion-row color=\"primary\" justify-content-center>\n              <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                <div text-center>\n                 \n                </div>\n                <div padding>\n                \n             \n                \n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\"> Client Name</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\" clientName\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n      \n                  <ion-item>\n                    <ion-label position=\"floating\"  class=\"custom-label\" >Password</ion-label>\n                    <ion-input name=\"pwd\" type=\"pwd\" autocorrect=\"on\"  clearInput=\"true\" [(ngModel)]=\"pwd\" type=\"password\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"lock\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n         \n                  \n                </div>\n                <div padding>\n                    <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"login()\">Login</ion-button>\n      \n                \n                </div>\n              </ion-col>\n            </ion-row>\n         \n            \n          </ion-grid>"

/***/ }),

/***/ "./src/app/edit-admin/edit-admin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-admin/edit-admin.module.ts ***!
  \*************************************************/
/*! exports provided: EditAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdminPageModule", function() { return EditAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-admin.page */ "./src/app/edit-admin/edit-admin.page.ts");
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












var routes = [
    {
        path: '',
        component: _edit_admin_page__WEBPACK_IMPORTED_MODULE_5__["EditAdminPage"]
    }
];
var EditAdminPageModule = /** @class */ (function () {
    function EditAdminPageModule() {
    }
    EditAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_9__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_10__["MessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_admin_page__WEBPACK_IMPORTED_MODULE_5__["EditAdminPage"]]
        })
    ], EditAdminPageModule);
    return EditAdminPageModule;
}());



/***/ }),

/***/ "./src/app/edit-admin/edit-admin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/edit-admin/edit-admin.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-label {\n  color: #a2a4ab !important;\n  font-size: 2.3vh !important;\n}\n\n.button-native {\n  background-color: #45b0d5 !important;\n}\n\n.custom-icon {\n  color: #45b0d5;\n}\n\nion-button {\n  border-radius: 50px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n}\n\nion-item {\n  border-radius: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #ffffff;\n  border-bottom: 0px !important;\n  box-shadow: none !important;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvZWRpdC1hZG1pbi9lZGl0LWFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdC1hZG1pbi9lZGl0LWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDckJGOztBRHVCQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUNyQkY7O0FEdUJDO0VBRUMsb0NBQUE7QUNyQkY7O0FEd0JBO0VBRUUsY0FBQTtBQ3RCRjs7QUR5QkE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUN0QkE7O0FEeUJBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDdEJGOztBRDhCQTtFQUNFLHFCQUFBO0VBQXNCLFdBQUE7QUMxQnhCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1hZG1pbi9lZGl0LWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7ICBcbi8vICAgICAuY2VudGVyLWxvZ2luIHtcbi8vICAgICAgIHdpZHRoOiA2MDBweDtcbi8vICAgICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpb24tYnV0dG9uIHtcbi8vICAgICBib3JkZXItcmFkaXVzOjEwcHggO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzI3MTUgIWltcG9ydGFudDtcbi8vICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbi8vICAgICBoZWlnaHQ6IDV2aDtcbi8vICAgICBtYXJnaW4tdG9wOiAzdnc7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIFxuLy8gICAgIH1cbi8vICAgICBpb24tY29udGVudHtcblxuLy8gICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZGVmMmYxO1xuLy8gICB9XG4vLyAgIGlvbi1oZWFkZXJ7XG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojNTU5NmU2O1xuLy8gICB9XG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VzdG9tLWxhYmVsXG57XG4gIGNvbG9yOiAjYTJhNGFiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi4zdmggIWltcG9ydGFudDtcbn1cbiAuYnV0dG9uLW5hdGl2ZVxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDViMGQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taWNvblxue1xuICBjb2xvcjogIzQ1YjBkNSA7XG59XG5cbmlvbi1idXR0b24ge1xuYm9yZGVyLXJhZGl1czo1MHB4IDtcbmJhY2tncm91bmQtY29sb3I6ICNkMzI3MTUgIWltcG9ydGFudDtcbi0tYm94LXNoYWRvdzpub25lO1xuXG59XG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlNWVhZWVcbiBcbn1cblxuLmN1c3RvbS10b29sYmFye1xuICAtLWJhY2tncm91bmQ6ICMxODI1MzU7Y29sb3I6I2ZmZlxufVxuXG5cblxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3VzdG9tLWxhYmVsIHtcbiAgY29sb3I6ICNhMmE0YWIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyLjN2aCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWIwZDUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uIHtcbiAgY29sb3I6ICM0NWIwZDU7XG59XG5cbmlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNzE1ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTgyNTM1O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/edit-admin/edit-admin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-admin/edit-admin.page.ts ***!
  \***********************************************/
/*! exports provided: EditAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdminPage", function() { return EditAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var EditAdminPage = /** @class */ (function () {
    function EditAdminPage(fb, messageService) {
        this.fb = fb;
        this.messageService = messageService;
        this.text1 = "";
        this.text2 = "";
        this.text3 = "";
        this.text4 = "";
        this.text5 = "";
        this.text6 = "";
        this.text7 = "";
        this.text8 = "";
    }
    EditAdminPage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'authPerson': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'wings': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'flats': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'projectname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'account': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/)])),
        });
    };
    EditAdminPage.prototype.onSubmit = function (value) {
        this.submitted = true;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    };
    EditAdminPage.prototype.presentToast = function () {
    };
    EditAdminPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
    ]; };
    EditAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-admin',
            template: __webpack_require__(/*! raw-loader!./edit-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-admin/edit-admin.page.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./edit-admin.page.scss */ "./src/app/edit-admin/edit-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], EditAdminPage);
    return EditAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-admin-edit-admin-module-es5.js.map