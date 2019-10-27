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

/***/ "./node_modules/raw-loader/index.js!./src/app/add-admin/add-admin.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-admin/add-admin.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n            <ion-toolbar>\n              <ion-title style=\"text-align: center;\">Add Admin</ion-title>\n            </ion-toolbar>\n          </ion-header>\n          <ion-content justify-content-center align-items-center style=\"height: 100%\">\n              <ion-card style=\" background-color: #d8dae2;\" >\n          <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\">\n           \n                  <ion-card style=\" background-color: #ffffff;\">\n                  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n                      <div class=\"ui-grid-row\">\n                          <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                              Client Name *:\n                          </div>\n                          <div class=\"ui-grid-col-4\">\n                              <input pInputText type=\"text\" formControlName=\"clientName\" placeholder=\"Required\"/>\n                          </div>\n                          <div class=\"ui-grid-col-4\">\n                              <p-message severity=\"error\" text=\"client Name is required\" *ngIf=\"!userform.controls['clientName'].valid&&userform.controls['clientName'].dirty\"></p-message>\n                          </div>\n                      </div>\n                      <div class=\"ui-grid-row\">\n                              <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                  Address *:\n                              </div>\n                              <div class=\"ui-grid-col-4\">\n                                  <input pInputText type=\"text\" formControlName=\"address\" placeholder=\"Required\"/>\n                              </div>\n                              <div class=\"ui-grid-col-4\">\n                                  <p-message severity=\"error\" text=\"Address is required\" *ngIf=\"!userform.controls['address'].valid&&userform.controls['address'].dirty\"></p-message>\n                              </div>\n                          </div>\n                          <div class=\"ui-grid-row\">\n                                  <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                      Number Of Arms *:\n                                  </div>\n                                  <div class=\"ui-grid-col-4\">\n                                      <input pInputText type=\"number\" formControlName=\"arms\" placeholder=\"Required\"/>\n                                  </div>\n                                  <div class=\"ui-grid-col-4\">\n                                      <p-message severity=\"error\" text=\"Required\" *ngIf=\"!userform.controls['arms'].valid&&userform.controls['arms'].dirty\"></p-message>\n                                  </div>\n                              </div>\n                             \n                                  <div class=\"ui-grid-row\">\n                                          <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                              Project Name *:\n                                          </div>\n                                          <div class=\"ui-grid-col-4\">\n                                              <input pInputText type=\"text\" formControlName=\"projectname\" placeholder=\"Required\"/>\n                                          </div>\n                                          <div class=\"ui-grid-col-4\">\n                                              <p-message severity=\"error\" text=\"Project name is required\" *ngIf=\"!userform.controls['projectname'].valid&&userform.controls['projectname'].dirty\"></p-message>\n                                          </div>\n                                      </div>      <div class=\"ui-grid-row\">\n                                                  <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                                      Email Id *:\n                                                  </div>\n                                                  <div class=\"ui-grid-col-4\">\n                                                      <input pInputText type=\"text\" formControlName=\"email\" placeholder=\"Required\"/>\n                                                  </div>\n                                                  <div class=\"ui-grid-col-4\">\n                                                      <p-message severity=\"error\" text=\"Correct format required\" *ngIf=\"!userform.controls['email'].valid&&userform.controls['email'].dirty\"></p-message>\n                                                  </div>\n                                              </div>\n                                              <div class=\"ui-grid-row\">\n                                                      <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                                          Mobile Number *:\n                                                      </div>\n                                                      <div class=\"ui-grid-col-4\">\n                                                          <input pInputText type=\"number\" formControlName=\"mobile\" placeholder=\"Required\" minlength=10 maxlength=10/>\n                                                      </div>\n                                                      <div class=\"ui-grid-col-4\">\n                                                          <p-message severity=\"error\" text=\"Mobile no is required\" *ngIf=\"!userform.controls['mobile'].valid&&userform.controls['mobile'].dirty\"></p-message>\n                                                      </div>\n                                                  </div>\n                      <div class=\"p-grid p-justify-center\">\n                          <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"presentToast()\" [disabled]=\"!userform.valid\">Save</ion-button>\n                         \n                      </div>\n                  \n                  </div>\n              </ion-card>\n      \n          </form>\n          <ion-card style=\" background-color: #ffffff;\">\n\n    \n                <div class=\"p-grid p-justify-center\">\n                    <div class=\"p-col-2\" style=\"padding-top: 2vh;\">\n                     \n                        <ion-label position=\"floating\">Admin Login Id</ion-label>\n                      \n                    \n                    </div>\n                    <div class=\"p-col-2 p-justify-left\">\n                        <ion-label position=\"floating\">ABC@1234</ion-label>\n                    </div>\n                   \n                </div>\n                <div class=\"p-grid p-justify-center\">\n                    <div class=\"p-col-2\" style=\"padding-top: 2vh;\">\n                     \n                        <ion-label position=\"floating\">Admin Password : </ion-label>\n                      \n                    \n                    </div>\n                    <div class=\"p-col-2  p-justify-left\">\n                        <ion-label position=\"floating\">***********</ion-label>\n                    </div>\n                   \n                </div>\n                   \n              </ion-card>\n              </ion-card>\n          </ion-content>"

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
        declarations: [_add_admin_page__WEBPACK_IMPORTED_MODULE_5__["AddAdminPage"]]
    })
], AddAdminPageModule);



/***/ }),

/***/ "./src/app/add-admin/add-admin.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 600px) {\n  .center-login {\n    width: 600px;\n    margin: 0 auto;\n  }\n}\nion-button {\n  border-radius: 10px;\n  background-color: #d32715 !important;\n  --box-shadow:none;\n  height: 5vh;\n  margin-top: 3vw;\n}\nion-content {\n  --ion-background-color:#a6a6a6;\n}\nion-header {\n  --ion-background-color:#d8dae2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYWRkLWFkbWluL2FkZC1hZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1hZG1pbi9hZGQtYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQ0NGO0FBQ0Y7QURDQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFRTtFQUVFLDhCQUFBO0FDQUo7QURFQTtFQUNFLDhCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtYWRtaW4vYWRkLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7ICBcbiAgLmNlbnRlci1sb2dpbiB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czoxMHB4IDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgXG4gIH1cbiAgaW9uLWNvbnRlbnR7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhNmE2YTY7XG59XG5pb24taGVhZGVye1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkOGRhZTI7XG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNlbnRlci1sb2dpbiB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5pb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjcxNSAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbi10b3A6IDN2dztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNhNmE2YTY7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNkOGRhZTI7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-admin/add-admin.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-admin/add-admin.page.ts ***!
  \*********************************************/
/*! exports provided: AddAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPage", function() { return AddAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




let AddAdminPage = class AddAdminPage {
    constructor(fb, messageService) {
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
    ngOnInit() {
        this.userform = this.fb.group({
            'clientName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'arms': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'projectname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/)])),
        });
    }
    onSubmit(value) {
        this.submitted = true;
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    }
    presentToast() {
    }
};
AddAdminPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
AddAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-admin',
        template: __webpack_require__(/*! raw-loader!./add-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-admin/add-admin.page.html"),
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
        styles: [__webpack_require__(/*! ./add-admin.page.scss */ "./src/app/add-admin/add-admin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], AddAdminPage);



/***/ })

}]);
//# sourceMappingURL=add-admin-add-admin-module-es2015.js.map