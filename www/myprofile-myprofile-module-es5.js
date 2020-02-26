(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myprofile-myprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/myprofile.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Profile\n      </ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item-divider>\n          <ion-label>\n            Name\n          </ion-label>\n        </ion-item-divider>\n      \n        <ion-item><ion-label>{{name}}</ion-label></ion-item>\n \n      \n        <ion-item-divider>\n          <ion-label>\n            Email\n          </ion-label>\n        </ion-item-divider>\n      \n        <ion-item><ion-label>{{email}}</ion-label></ion-item>\n\n        <ion-item-divider>\n            <ion-label>\n              Address\n            </ion-label>\n          </ion-item-divider>\n        \n          <ion-item><ion-label>{{address}}</ion-label></ion-item>\n\n          <ion-item-divider>\n              <ion-label>\n                Mobile\n              </ion-label>\n            </ion-item-divider>\n          \n            <ion-item><ion-label>{{mobile}}</ion-label></ion-item>\n\n            <ion-item-divider>\n                <ion-label>\n                  Project Name\n                </ion-label>\n              </ion-item-divider>\n            \n              <ion-item><ion-label>{{project_name}}</ion-label></ion-item>\n      </ion-list>\n     \n  \n     \n     \n     \n      \n  </ion-content>"

/***/ }),

/***/ "./src/app/myprofile/myprofile.module.ts":
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.module.ts ***!
  \***********************************************/
/*! exports provided: MyprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprofile.page */ "./src/app/myprofile/myprofile.page.ts");







var routes = [
    {
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_6__["MyprofilePage"]
    }
];
var MyprofilePageModule = /** @class */ (function () {
    function MyprofilePageModule() {
    }
    MyprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_6__["MyprofilePage"]]
        })
    ], MyprofilePageModule);
    return MyprofilePageModule;
}());



/***/ }),

/***/ "./src/app/myprofile/myprofile.page.scss":
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215cHJvZmlsZS9teXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdJO0VBQ0oscUJBQUE7RUFDQSxXQUFBO0FDQUEiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvbXlwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfSIsImlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmEzZjU0O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/myprofile/myprofile.page.ts":
/*!*********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.ts ***!
  \*********************************************/
/*! exports provided: MyprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePage", function() { return MyprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(loadingController, firebaseService) {
        this.loadingController = loadingController;
        this.firebaseService = firebaseService;
        this.name = "";
        this.email = "";
        this.project_name = "";
        this.mobile = "";
        this.address = "";
        var emailid = localStorage.getItem('username');
        this.getUserDetails(emailid);
    }
    MyprofilePage.prototype.ngOnInit = function () {
    };
    MyprofilePage.prototype.showLoader = function () {
        this.loaderToShow = this.loadingController.create({
            // message: 'This Loader will Not AutoHide'
            spinner: 'crescent',
            cssClass: 'custom-loader-class'
        }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
                console.log('Loading dismissed!');
            });
        });
        //  this.hideLoader();
    };
    MyprofilePage.prototype.hideLoader = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadingController.dismiss();
        }, 4000);
    };
    MyprofilePage.prototype.getUserDetails = function (emailid) {
        var _this = this;
        this.showLoader();
        this.firebaseService.searchUsersByEmail(emailid)
            .subscribe(function (result) {
            var data = result[0].payload.doc.data();
            _this.name = data['client_name'];
            _this.email = data['email_id'];
            _this.address = data['address'];
            _this.mobile = data['mobile'];
            _this.project_name = data['project_name'];
            _this.hideLoader();
        });
    };
    MyprofilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    MyprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! raw-loader!./myprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.page.html"),
            styles: [__webpack_require__(/*! ./myprofile.page.scss */ "./src/app/myprofile/myprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], MyprofilePage);
    return MyprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=myprofile-myprofile-module-es5.js.map