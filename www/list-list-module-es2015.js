(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Devices\n      </ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n      \n      <ion-content>\n        <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are 58 devices registered.</p>\n          <ion-grid>\n                \n              <ion-row>\n                <ion-col>\n                    <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" ><ion-icon name=\"add\"></ion-icon> Add Device</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" ><ion-icon name=\"add\"></ion-icon>  Add Device w/o profile</ion-button>\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" ><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n                </ion-col>\n              \n              \n              </ion-row>\n            </ion-grid>\n        <ion-card>\n      <ion-card-content>\n          <ag-grid-angular\n          style=\"width: 100%; height: 600px;\"\n          class=\"ag-theme-balham\"\n          [columnDefs]=\"columnDefs\"\n          [rowData]=\"rowData\"\n          [enableSorting]=\"true\"\n          [animateRows]=\"true\"\n          [pagination]=\"true\"\n          [paginationPageSize]=\"50\"\n          [enableFilter]=\"true\"\n          [floatingFilter]=\"true\"\n          [suppressRowClickSelection]=\"true\"\n          [rowSelection]=\"rowSelection\">\n          </ag-grid-angular>\n      </ion-card-content>\n      \n          </ion-card>\n      </ion-content>\n      \n      <!-- [multiSortKey]=\"multiSortKey\"         (gridReady)=\"onGridReady($event)\"-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");








let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"],
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



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHSTtFQUNKLHFCQUFBO0VBQ0EsV0FBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfSIsImlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDljNWI2ICFpbXBvcnRhbnQ7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmEzZjU0O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/company.json */ "./src/assets/company.json", 1);



// declare var firebase;
// var config={
//   apiKey: 'AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4',
//   authDomaim : 'eminent-gas-tech.firebase',
//   databaseURL : 'https://eminent-gas-tech.firebaseio.com'
// };
// firebase.initializeApp(config)
let ListPage = class ListPage {
    constructor() {
        this.rowData = [];
        this.rowSelection = "multiple";
        this.columnDefs = [
            {
                headerName: "Athlete",
                field: "athlete",
                width: 150,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
            {
                headerName: "Age",
                field: "age",
                width: 150,
                filter: "agNumberColumnFilter"
            },
            {
                headerName: "Country",
                field: "country",
                width: 150
            },
            {
                headerName: "Year",
                field: "year",
                width: 150
            },
            {
                headerName: "Date",
                field: "date",
                filter: "agDateColumnFilter"
            },
            {
                headerName: "Sport",
                field: "sport",
                width: 150,
                filter: false
            },
            {
                headerName: "Gold",
                field: "gold",
                width: 150,
                filter: "agNumberColumnFilter"
            },
            {
                headerName: "Silver",
                field: "silver",
                width: 150,
                filter: "agNumberColumnFilter"
            },
            {
                headerName: "Bronze",
                field: "bronze",
                width: 150,
                filter: "agNumberColumnFilter"
            },
            {
                headerName: "Total",
                field: "total",
                width: 150,
                filter: false
            }
        ];
        this.rowData = _assets_company_json__WEBPACK_IMPORTED_MODULE_2__;
    }
};
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map