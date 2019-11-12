(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-admin-edit-admin-module"],{

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/inputtext.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/inputtext.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-admin/edit-admin.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-admin/edit-admin.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"text-align: center;\">Edit Admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit(userform.value)\" >\n        <ion-card style=\" background-color: #d8dae2;\">\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\" style=\"margin: 10px 0px\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                    Client Name *:\n                </div>\n                <div class=\"ui-grid-col-4\">\n                    <input pInputText type=\"text\" formControlName=\"firstname\" placeholder=\"Required\"/>\n                </div>\n                <div class=\"ui-grid-col-4\">\n                    <p-message severity=\"error\" text=\"Firstname is required\" *ngIf=\"!userform.controls['firstname'].valid&&userform.controls['firstname'].dirty\"></p-message>\n                </div>\n            </div>\n            <div class=\"ui-grid-row\">\n                    <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                        Authorized Person *:\n                    </div>\n                    <div class=\"ui-grid-col-4\">\n                        <input pInputText type=\"text\" formControlName=\"authPerson\" placeholder=\"Required\"/>\n                    </div>\n                    <div class=\"ui-grid-col-4\">\n                        <p-message severity=\"error\" text=\"Name is required\" *ngIf=\"!userform.controls['authPerson'].valid&&userform.controls['authPerson'].dirty\"></p-message>\n                    </div>\n                </div>\n                <div class=\"ui-grid-row\">\n                        <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                            Number Of Wings *:\n                        </div>\n                        <div class=\"ui-grid-col-4\">\n                            <input pInputText type=\"number\" formControlName=\"wings\" placeholder=\"Required\"/>\n                        </div>\n                        <div class=\"ui-grid-col-4\">\n                            <p-message severity=\"error\" text=\"Required\" *ngIf=\"!userform.controls['wings'].valid&&userform.controls['wings'].dirty\"></p-message>\n                        </div>\n                    </div>\n                    <div class=\"ui-grid-row\">\n                            <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                No Of Flats *:\n                            </div>\n                            <div class=\"ui-grid-col-4\">\n                                <input pInputText type=\"number\" formControlName=\"flats\" placeholder=\"Required\"/>\n                            </div>\n                            <div class=\"ui-grid-col-4\">\n                                <p-message severity=\"error\" text=\"Required\" *ngIf=\"!userform.controls['flats'].valid&&userform.controls['flats'].dirty\"></p-message>\n                            </div>\n                        </div>\n                        <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                    Project Name *:\n                                </div>\n                                <div class=\"ui-grid-col-4\">\n                                    <input pInputText type=\"text\" formControlName=\"projectname\" placeholder=\"Required\"/>\n                                </div>\n                                <div class=\"ui-grid-col-4\">\n                                    <p-message severity=\"error\" text=\"Project name is required\" *ngIf=\"!userform.controls['projectname'].valid&&userform.controls['projectname'].dirty\"></p-message>\n                                </div>\n                            </div>     <div class=\"ui-grid-row\">\n                                    <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                        Account Details *:\n                                    </div>\n                                    <div class=\"ui-grid-col-4\">\n                                        <input pInputText type=\"text\" formControlName=\"account\" placeholder=\"Required\"/>\n                                    </div>\n                                    <div class=\"ui-grid-col-4\">\n                                        <p-message severity=\"error\" text=\"Account details are required\" *ngIf=\"!userform.controls['account'].valid&&userform.controls['account'].dirty\"></p-message>\n                                    </div>\n                                </div>     <div class=\"ui-grid-row\">\n                                        <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                            Email Id *:\n                                        </div>\n                                        <div class=\"ui-grid-col-4\">\n                                            <input pInputText type=\"text\" formControlName=\"email\" placeholder=\"Required\"/>\n                                        </div>\n                                        <div class=\"ui-grid-col-4\">\n                                            <p-message severity=\"error\" text=\"Correct format required\" *ngIf=\"!userform.controls['email'].valid&&userform.controls['email'].dirty\"></p-message>\n                                        </div>\n                                    </div>\n                                    <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-4 \" style=\"text-align: center;\">\n                                                Mobile Number *:\n                                            </div>\n                                            <div class=\"ui-grid-col-4\">\n                                                <input pInputText type=\"number\" formControlName=\"mobile\" placeholder=\"Required\" minlength=10 maxlength=10/>\n                                            </div>\n                                            <div class=\"ui-grid-col-4\">\n                                                <p-message severity=\"error\" text=\"Mobile no is required\" *ngIf=\"!userform.controls['mobile'].valid&&userform.controls['mobile'].dirty\"></p-message>\n                                            </div>\n                                        </div>\n            <div class=\"p-grid p-justify-center\">\n                <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"presentToast()\" [disabled]=\"!userform.valid\">Save Edit</ion-button>\n               \n            </div>\n        \n        </div> -->\n        <!-- <ion-card>\n        <ion-grid>\n            <ion-row color=\"primary\" justify-content-center>\n              <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                <div text-center>\n                 \n                </div>\n                <div padding>\n                \n             \n                \n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\"> Client Name</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\" clientName\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n      \n                  <ion-item>\n                    <ion-label position=\"floating\"  class=\"custom-label\" >Password</ion-label>\n                    <ion-input name=\"pwd\" type=\"pwd\" autocorrect=\"on\"  clearInput=\"true\" [(ngModel)]=\"pwd\" type=\"password\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"lock\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\" class=\"custom-label\">User ID</ion-label>\n                    <ion-input name=\"userid\" type=\"userid\" autocorrect=\"on\" clearInput=\"true\" [(ngModel)]=\"userid\" clearOnEdit=\"true\"></ion-input>\n                    <ion-icon name=\"person\" class=\"custom-icon\" slot=\"start\"></ion-icon>\n                  </ion-item>\n         \n                  \n                </div>\n                <div padding>\n                    <ion-button size=\"large\" color=\"shade\"  type=\"submit\"  expand=\"block\" (click)=\"login()\">Login</ion-button>\n      \n                \n                </div>\n              </ion-col>\n            </ion-row>\n         \n            \n          </ion-grid>\n    </ion-card> -->\n<!-- </form> -->\n  <ion-card>\n            <ion-card-header>\n            \n              <ion-card-title>Admin Form</ion-card-title>\n            </ion-card-header>\n          \n            <ion-card-content style=\"text-align: center;\">\n                <ion-item style=\"    border-style: solid;\n                border-width: thin;\n                border-color: #e6e6e6;\n               margin-top:10px;height:40px;border-radius: 25px;\"  >\n                   \n                    <ion-input placeholder=\"Client Name\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"clientName\"></ion-input>\n                  </ion-item>\n\n                  <ion-item style=\"    border-style: solid;\n                  border-width: thin;\n                  border-color: #e6e6e6;\n                 margin-top:10px;height:40px;border-radius: 25px;\"  >\n                     \n                      <ion-input placeholder=\"Authorized Person\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"authPerson\"></ion-input>\n                    </ion-item>\n\n                    <ion-item style=\"    border-style: solid;\n                    border-width: thin;\n                    border-color: #e6e6e6;\n                   margin-top:10px;height:40px;border-radius: 25px;\"  >\n                       \n                        <ion-input placeholder=\"Number Of Wings\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"wings\"></ion-input>\n                      </ion-item>\n\n                      <ion-item style=\"    border-style: solid;\n                      border-width: thin;\n                      border-color: #e6e6e6;\n                     margin-top:10px;height:40px;border-radius: 25px;\"  >\n                         \n                          <ion-input placeholder=\" No Of Flats\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"flats\"></ion-input>\n                        </ion-item>\n                        <ion-item style=\"    border-style: solid;\n                        border-width: thin;\n                        border-color: #e6e6e6;\n                       margin-top:10px;height:40px;border-radius: 25px;\"  >\n                           \n                            <ion-input placeholder=\" Project Name \" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"projName\"></ion-input>\n                          </ion-item>\n                          <ion-item style=\"    border-style: solid;\n                          border-width: thin;\n                          border-color: #e6e6e6;\n                         margin-top:10px;height:40px;border-radius: 25px;\"  >\n                             \n                              <ion-input placeholder=\"Account Details\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"accDetails\"></ion-input>\n                            </ion-item>\n                            <ion-item style=\"    border-style: solid;\n                            border-width: thin;\n                            border-color: #e6e6e6;\n                           margin-top:10px;height:40px;border-radius: 25px;\"  >\n                               \n                                <ion-input placeholder=\"Email Id\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"email\"></ion-input>\n                              </ion-item>\n                              <ion-item style=\"    border-style: solid;\n                              border-width: thin;\n                              border-color: #e6e6e6;\n                             margin-top:10px;height:40px;border-radius: 25px;\"  >\n                                 \n                                  <ion-input placeholder=\"Mobile No\" style=\"margin-top:-10px;color:#666666;\"  [(ngModel)]=\"mobNo\"></ion-input>\n                                </ion-item>\n\n                        <ion-button expand=\"block\" slot=\"end\"  (click)=\"saveClick()\" style=\"width:30%;color:white;\n                        margin-top: 20px;margin-bottom: 20px;\">Save</ion-button>\n\n            </ion-card-content>\n          </ion-card>\n</ion-content>\n\n"

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

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-label {\n  color: #a2a4ab !important;\n  font-size: 2.3vh !important;\n}\n\n.button-native {\n  background-color: #45b0d5 !important;\n}\n\n.custom-icon {\n  color: #45b0d5;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n\nion-input {\n  --background:#e6e6e6;\n}\n\nion-item {\n  --background:#e6e6e6;\n}\n\nion-button {\n  --background: #49c5b6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvZWRpdC1hZG1pbi9lZGl0LWFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdC1hZG1pbi9lZGl0LWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDckJGOztBRHVCQTtFQUVFLHlCQUFBO0VBQ0EsMkJBQUE7QUNyQkY7O0FEdUJDO0VBRUMsb0NBQUE7QUNyQkY7O0FEd0JBO0VBRUUsY0FBQTtBQ3RCRjs7QUQ2Q0E7RUFDRSxxQkFBQTtFQUFzQixXQUFBO0FDekN4Qjs7QUQ4Q0E7RUFDRSxvQkFBQTtBQzNDRjs7QUQ4Q0M7RUFDQyxvQkFBQTtBQzNDRjs7QUQ4Q0M7RUFDRCxxQkFBQTtBQzNDQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYWRtaW4vZWRpdC1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgeyAgXG4vLyAgICAgLmNlbnRlci1sb2dpbiB7XG4vLyAgICAgICB3aWR0aDogNjAwcHg7XG4vLyAgICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgaW9uLWJ1dHRvbiB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czoxMHB4IDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNzE1ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1ib3gtc2hhZG93Om5vbmU7XG4vLyAgICAgaGVpZ2h0OiA1dmg7XG4vLyAgICAgbWFyZ2luLXRvcDogM3Z3O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBcbi8vICAgICB9XG4vLyAgICAgaW9uLWNvbnRlbnR7XG5cbi8vICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2RlZjJmMTtcbi8vICAgfVxuLy8gICBpb24taGVhZGVye1xuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzU1OTZlNjtcbi8vICAgfVxuLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmN1c3RvbS1sYWJlbFxue1xuICBjb2xvcjogI2EyYTRhYiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIuM3ZoICFpbXBvcnRhbnQ7XG59XG4gLmJ1dHRvbi1uYXRpdmVcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YjBkNSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWljb25cbntcbiAgY29sb3I6ICM0NWIwZDUgO1xufVxuXG4vLyBpb24tYnV0dG9uIHtcbi8vIGJvcmRlci1yYWRpdXM6NTBweCA7XG4vLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNzE1ICFpbXBvcnRhbnQ7XG4vLyAtLWJveC1zaGFkb3c6bm9uZTtcblxuLy8gfVxuLy8gaW9uLWl0ZW0ge1xuLy8gICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4vLyAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuLy8gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAvLyAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTVlYWVlXG4gXG59XG5cbi5jdXN0b20tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiAjMTgyNTM1O2NvbG9yOiNmZmZcbn1cblxuXG5cbmlvbi1pbnB1dHtcbiAgLS1iYWNrZ3JvdW5kOiNlNmU2ZTY7XG4gfVxuXG4gaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDojZTZlNmU2O1xuIH1cblxuIGlvbi1idXR0b257XG4tLWJhY2tncm91bmQ6ICM0OWM1YjY7XG5cbiB9IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3VzdG9tLWxhYmVsIHtcbiAgY29sb3I6ICNhMmE0YWIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyLjN2aCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWIwZDUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pY29uIHtcbiAgY29sb3I6ICM0NWIwZDU7XG59XG5cbi5jdXN0b20tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzE4MjUzNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojZTZlNmU2O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojZTZlNmU2O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDljNWI2O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EditAdminPage = /** @class */ (function () {
    function EditAdminPage(fb, messageService, toastController) {
        this.fb = fb;
        this.messageService = messageService;
        this.toastController = toastController;
        this.text1 = "";
        this.text2 = "";
        this.text3 = "";
        this.text4 = "";
        this.text5 = "";
        this.text6 = "";
        this.text7 = "";
        this.text8 = "";
        this.clientName = "";
        this.authPerson = "";
        this.wings = "";
        this.flats = "";
        this.projName = "";
        this.accDetails = "";
        this.email = "";
        this.mobNo = "";
    }
    EditAdminPage.prototype.ngOnInit = function () {
    };
    EditAdminPage.prototype.saveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.clientName == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter client name',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 2:
                        if (!(this.authPerson == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Person name',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 4:
                        if (!(this.wings == "")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter no Of Wings',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 6:
                        if (!(this.flats == "")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter no Of Flats',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 8:
                        if (!(this.projName == "")) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Project Name',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 10:
                        if (!(this.accDetails == "")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Account Details',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 12:
                        if (!(this.email == "")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Email',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 13:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 16];
                    case 14:
                        if (!(this.mobNo == "")) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Please enter Mobile no',
                                duration: 2000,
                                color: 'medium',
                                position: 'top'
                            })];
                    case 15:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    EditAdminPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    EditAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-admin',
            template: __webpack_require__(/*! raw-loader!./edit-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-admin/edit-admin.page.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./edit-admin.page.scss */ "./src/app/edit-admin/edit-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], EditAdminPage);
    return EditAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-admin-edit-admin-module-es5.js.map