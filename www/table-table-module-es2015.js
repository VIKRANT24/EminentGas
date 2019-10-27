(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>table</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n<ion-card-content>\n    <ag-grid-angular\n    style=\"width: 100%; height: 500px;\"\n    class=\"ag-theme-balham\"\n    [columnDefs]=\"columnDefs\"\n    [rowData]=\"rowData\"\n    [enableSorting]=\"true\"\n    [multiSortKey]=\"multiSortKey\"\n    [animateRows]=\"true\"\n    (gridReady)=\"onGridReady($event)\"\n    [pagination]=\"true\"\n    [paginationPageSize]=\"50\"\n    [enableFilter]=\"true\"\n    [floatingFilter]=\"true\"\n    [suppressRowClickSelection]=\"true\"\n    [rowSelection]=\"rowSelection\">\n    </ag-grid-angular>\n</ion-card-content>\n\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/table/table.module.ts":
/*!***************************************!*\
  !*** ./src/app/table/table.module.ts ***!
  \***************************************/
/*! exports provided: TablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePageModule", function() { return TablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _table_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table.page */ "./src/app/table/table.page.ts");








const routes = [
    {
        path: '',
        component: _table_page__WEBPACK_IMPORTED_MODULE_7__["TablePage"]
    }
];
let TablePageModule = class TablePageModule {
};
TablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"]
        ],
        declarations: [_table_page__WEBPACK_IMPORTED_MODULE_7__["TablePage"]]
    })
], TablePageModule);



/***/ }),

/***/ "./src/app/table/table.page.scss":
/*!***************************************!*\
  !*** ./src/app/table/table.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/table/table.page.ts":
/*!*************************************!*\
  !*** ./src/app/table/table.page.ts ***!
  \*************************************/
/*! exports provided: TablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePage", function() { return TablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_company_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/company.json */ "./src/assets/company.json");
var _assets_company_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/company.json */ "./src/assets/company.json", 1);



let TablePage = class TablePage {
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
TablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.page.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.page.html"),
        styles: [__webpack_require__(/*! ./table.page.scss */ "./src/app/table/table.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TablePage);



/***/ })

}]);
//# sourceMappingURL=table-table-module-es2015.js.map