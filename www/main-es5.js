(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-admin/add-admin.module": [
		"./src/app/add-admin/add-admin.module.ts",
		"default~add-admin-add-admin-module~admin-list-admin-list-module",
		"common",
		"add-admin-add-admin-module"
	],
	"./add-device-without-profile/add-device-without-profile.module": [
		"./src/app/add-device-without-profile/add-device-without-profile.module.ts",
		"add-device-without-profile-add-device-without-profile-module"
	],
	"./add-device-woprofile/add-device-woprofile.module": [
		"./src/app/add-device-woprofile/add-device-woprofile.module.ts"
	],
	"./add-device/add-device.module": [
		"./src/app/add-device/add-device.module.ts"
	],
	"./admin-list/admin-list.module": [
		"./src/app/admin-list/admin-list.module.ts",
		"default~add-admin-add-admin-module~admin-list-admin-list-module",
		"default~admin-list-admin-list-module~list-superadmin-list-superadmin-module",
		"admin-list-admin-list-module"
	],
	"./device-activity-superadmin/device-activity-superadmin.module": [
		"./src/app/device-activity-superadmin/device-activity-superadmin.module.ts",
		"device-activity-superadmin-device-activity-superadmin-module"
	],
	"./deviceactivity/deviceactivity.module": [
		"./src/app/deviceactivity/deviceactivity.module.ts",
		"deviceactivity-deviceactivity-module"
	],
	"./edit-admin/edit-admin.module": [
		"./src/app/edit-admin/edit-admin.module.ts",
		"common",
		"edit-admin-edit-admin-module"
	],
	"./list-superadmin/list-superadmin.module": [
		"./src/app/list-superadmin/list-superadmin.module.ts",
		"default~admin-list-admin-list-module~list-superadmin-list-superadmin-module",
		"common",
		"list-superadmin-list-superadmin-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./menu-page/menu-page.module": [
		"./src/app/menu-page/menu-page.module.ts",
		"menu-page-menu-page-module"
	],
	"./myprofile/myprofile.module": [
		"./src/app/myprofile/myprofile.module.ts",
		"myprofile-myprofile-module"
	],
	"./super-admin/super-admin.module": [
		"./src/app/super-admin/super-admin.module.ts",
		"super-admin-super-admin-module"
	],
	"./superdeviceactivity/superdeviceactivity.module": [
		"./src/app/superdeviceactivity/superdeviceactivity.module.ts"
	],
	"./table/table.module": [
		"./src/app/table/table.module.ts",
		"table-table-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-controller_8.entry.js",
		"common",
		2
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js",
		"common",
		3
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-md.entry.js",
		"common",
		4
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js",
		"common",
		5
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-alert-md.entry.js",
		"common",
		6
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-ios.entry.js",
		0,
		"common",
		7
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-app_8-md.entry.js",
		0,
		"common",
		8
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js",
		"common",
		9
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-md.entry.js",
		"common",
		10
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-ios.entry.js",
		"common",
		11
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-back-button-md.entry.js",
		"common",
		12
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-ios.entry.js",
		13
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-backdrop-md.entry.js",
		14
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-ios.entry.js",
		"common",
		15
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-button_2-md.entry.js",
		"common",
		16
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-ios.entry.js",
		"common",
		17
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-card_5-md.entry.js",
		"common",
		18
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-ios.entry.js",
		"common",
		19
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-checkbox-md.entry.js",
		"common",
		20
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-ios.entry.js",
		"common",
		21
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-chip-md.entry.js",
		"common",
		22
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-col_3.entry.js",
		23
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-ios.entry.js",
		"common",
		24
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-datetime_3-md.entry.js",
		"common",
		25
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-ios.entry.js",
		"common",
		26
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-fab_3-md.entry.js",
		"common",
		27
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-img.entry.js",
		28
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js",
		"common",
		29
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-md.entry.js",
		"common",
		30
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-ios.entry.js",
		"common",
		31
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-input-md.entry.js",
		"common",
		32
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-ios.entry.js",
		"common",
		33
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item-option_3-md.entry.js",
		"common",
		34
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-ios.entry.js",
		"common",
		35
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-item_8-md.entry.js",
		"common",
		36
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-ios.entry.js",
		"common",
		37
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-loading-md.entry.js",
		"common",
		38
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-ios.entry.js",
		"common",
		39
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-menu_4-md.entry.js",
		"common",
		40
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-ios.entry.js",
		0,
		"common",
		41
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-modal-md.entry.js",
		0,
		"common",
		42
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-nav_5.entry.js",
		0,
		"common",
		43
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-ios.entry.js",
		0,
		"common",
		44
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-popover-md.entry.js",
		0,
		"common",
		45
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-ios.entry.js",
		"common",
		46
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-progress-bar-md.entry.js",
		"common",
		47
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-ios.entry.js",
		"common",
		48
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-radio_2-md.entry.js",
		"common",
		49
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-ios.entry.js",
		"common",
		50
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-range-md.entry.js",
		"common",
		51
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-ios.entry.js",
		"common",
		52
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-refresher_2-md.entry.js",
		"common",
		53
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-ios.entry.js",
		"common",
		54
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js",
		"common",
		55
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-ripple-effect.entry.js",
		56
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-route_4.entry.js",
		"common",
		57
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-ios.entry.js",
		"common",
		58
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-searchbar-md.entry.js",
		"common",
		59
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-ios.entry.js",
		"common",
		60
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-segment_2-md.entry.js",
		"common",
		61
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-ios.entry.js",
		"common",
		62
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-select_3-md.entry.js",
		"common",
		63
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-ios.entry.js",
		64
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-slide_2-md.entry.js",
		65
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-spinner.entry.js",
		"common",
		66
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-ios.entry.js",
		67
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-split-pane-md.entry.js",
		68
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-ios.entry.js",
		"common",
		69
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab-bar_2-md.entry.js",
		"common",
		70
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js",
		1
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-text.entry.js",
		"common",
		71
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-ios.entry.js",
		"common",
		72
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js",
		"common",
		73
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-ios.entry.js",
		"common",
		74
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toast-md.entry.js",
		"common",
		75
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-ios.entry.js",
		"common",
		76
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-toggle-md.entry.js",
		"common",
		77
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm-es5/ion-virtual-scroll.entry.js",
		78
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/actions/actions.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actions/actions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-list>\n      <ion-item >\n       Add Device\n      </ion-item>\n      <ion-item >\n          Delete Device\n      </ion-item>\n      <ion-item >\n        Edit Device\n      </ion-item>\n      <ion-item >\n        View Data\n        </ion-item>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-device-woprofile/add-device-woprofile.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-device-woprofile/add-device-woprofile.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-row></ion-row>\n<ion-row></ion-row> -->\n\n<ion-header>\n    <ion-toolbar class=\"custom-toolbar\">\n      <ion-title>Add Device W/O Profile</ion-title>\n      <!-- <button ion-button icon-only (click)=\"closeModal()\">\n          \n  \n      </button> -->\n      <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeModal()\">\n          <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n        </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n          <ion-grid>\n              <ion-row>\n                <ion-col  style=\"margin-top:3vh\"><ion-label >DEVEID</ion-label></ion-col>\n                <ion-col size=\"10\">\n                  <ion-row>\n                      <ion-card>\n                          <ion-input  clearInput=\"true\" ></ion-input>\n                          <!-- [(ngModel)]=\"addDeviceID\" -->\n                      </ion-card>\n                  </ion-row>\n                <ion-row> <ion-label style=\"font-size:11px;\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label></ion-row>\n  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"margin-top:3vh\"><ion-label >Comment</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                       <ion-row>\n                          <ion-card>\n                              <ion-input  clearInput=\"true\" ></ion-input>\n                              <!-- [(ngModel)]=\"addDeviceID\" -->\n                            </ion-card>\n                       </ion-row>\n                      <ion-row>\n                          <ion-label style=\"font-size:11px\">The devEUI is a 8-byte unique identified based on IEEE  EUI-64. Mandatory</ion-label>\n                      </ion-row>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div class=\"ui-fluid\"  style=\"padding-top: 2vh;\">\n                <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\" (onOptionClick)=\"onOptionClick($event)\" ></p-selectButton>\n            </div>\n  <div *ngIf=\"!keys\">\n                <ion-row>\n                    <ion-col style=\"margin-top:1vh\"><ion-label >Activated</ion-label></ion-col>\n                    <ion-col size=\"10\" >\n                      <ion-row>\n                          <p-selectButton [options]=\"activatedType\" [(ngModel)]=\"ActivatedSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-row>\n                  <ion-row>\n                      <p style=\"font-size: 11px;\">Select Yes to allow the device to actively operate on the network. If a device not activated, no data will be received from it and data cannot be sent to it.</p>\n                  </ion-row>\n                </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"margin-top:1vh\"><ion-label >Downlink Enabled</ion-label></ion-col>\n                    <ion-col size=\"10\" >\n                      <ion-row>\n                          <p-selectButton [options]=\"DownlinkType\" [(ngModel)]=\"DownlinkSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-row>\n                      <ion-row>\n                          <p style=\"font-size: 11px;\">Select Yes to allow the network to send downlink on the network. If a not allowed, the network will not send any user payloads to thw device.</p>\n                      </ion-row>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                         <ion-col style=\"margin-top:2vh\"><ion-label >Registration Type</ion-label></ion-col>\n                        <ion-col style=\"margin-top:1vh\">\n                          <ion-row><p-selectButton [options]=\"registrationType\" [(ngModel)]=\"registrationSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton></ion-row>\n                          <ion-row><p style=\"font-size: 11px;\">personalised devices have pre-generated session keys and will not perform the JOIN procedure.</p></ion-row>\n                          </ion-col>\n                  <ion-col style=\"margin-top:2vh\"><ion-label >LoRA WAN Mac Version</ion-label></ion-col>\n                  <ion-col>\n                    <ion-card>\n                      <ion-input  clearInput=\"true\" type=\"number\" ></ion-input>\n                      <!-- [(ngModel)]=\"addDeviceID\" -->\n                  </ion-card></ion-col>\n                </ion-row>\n                \n                <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >App Key</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                      <ion-row>\n                          <ion-card>\n                              <ion-item>\n                                <ion-input  clearInput=\"true\" ></ion-input>\n                                <!-- [(ngModel)]=\"addDeviceID\" -->\n                              </ion-item>\n                            </ion-card>\n                      </ion-row>\n                      <ion-row>\n                          <p style=\"font-size: 11px;\">The App Key is a 16-byte encryption key used the data payloads. If provided all encryption is managed by the network. If not provided, the payload encryption must be managedby the application.Optional.</p>\n                      </ion-row>               \n      </ion-col>\n                    </ion-row>\n                    \n          </div>\n          <div *ngIf=\"!QoS\">\n              <ion-grid>\n\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\" size=\"2\"><ion-label >Device Properties</ion-label></ion-col>\n                      <ion-col  size=\"5\">\n                          <p-selectButton [options]=\"devicePropertiesStaMob\" [(ngModel)]=\"devicePropertiesStaMobType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <ion-col size=\"5\" >\n                        <p-selectButton [options]=\"devicePropertiesInOUt\" [(ngModel)]=\"devicePropertiesInOUtType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                  </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select Device Properties or not specified.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select Device Properties or not specified.</p>\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\"><ion-label >QoS Class</ion-label></ion-col>\n                      <ion-col size=\"10\">\n                          <p-selectButton [options]=\"qosClass\" [(ngModel)]=\"qosClassType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select the QoS level for the device.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select the QoS level for the device.</p>\n\n                  <ion-row>\n                      <ion-col style=\"margin-top:1vh\"><ion-label >Uplink redundancy</ion-label></ion-col>\n                      <ion-col size=\"10\">\n                          <p-selectButton [options]=\"uplinkType\" [(ngModel)]=\"uplinkSelectType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                    </ion-col>\n                    <!-- <label style=\"color: black;font-size:9px;position: absolute;margin-left: 18px;\">Select number of transmissions device will do for each uplink. Setting the count to 1 means no reduncancy.</label> -->\n                  </ion-row>\n                  <p style=\"font-size:12px;margin-left:19vh\">Select number of transmissions device will do for each uplink. Setting the count to 1 means no reduncancy.</p>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Allowed duty cycle</ion-label></ion-col>\n                    <ion-col size=\"9.5\">\n                      <ion-card>\n                  \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                   \n                    </ion-card>\n                  </ion-col>\n                    </ion-row>\n                    <p style=\"font-size:12px;margin-left: 19vh;\">Specify the maximum dutycycle in % the device is allowed. If it is exceeded the network try to enforce it. Optional.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:3vh\"><ion-label >Expected duty cycle</ion-label></ion-col>\n                        <ion-col size=\"9.5\">\n                            <ion-card>\n                       \n                            <ion-input  clearInput=\"true\" ></ion-input>\n                            <!-- [(ngModel)]=\"addDeviceID\" -->\n                      \n                          </ion-card>\n                        </ion-col>\n                        </ion-row>\n                        <p style=\"font-size:12px;margin-left: 19vh;\">Specify the expected average duty cycle. Optional.</p>\n                    </ion-grid>\n\n          </div>\n          <div *ngIf=\"!packetStorage\">\n              <ion-grid>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Downlink Packet Expiry Time</ion-label></ion-col>\n                    <ion-col size=\"9\">\n                      <ion-card>\n                  \n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                   \n                      </ion-card>\n                    </ion-col>\n                    </ion-row>\n                    <p style=\"font-size:12px;margin-left: 20vh;\">Time in hours that a downlink packet is stored in the persistent storage. After expiry the packet will be discarded regardless if the packet was sent or not, or if the applicaiton have seen the status of the packet.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:3vh\"><ion-label >Uplink Packet Expiry Time</ion-label></ion-col>\n                        <ion-col size=\"9\">\n                            <ion-card>\n                       \n                            <ion-input  clearInput=\"true\" ></ion-input>\n                            <!-- [(ngModel)]=\"addDeviceID\" -->\n                      \n                          </ion-card>\n                        </ion-col>\n                        </ion-row>\n                        <p style=\"font-size:12px;margin-left: 20vh;\">Time in hours that a received packet will be stored in the persistent storage. After expiry the packet will be discarded regardless if the packet have been read or not.</p>\n                    </ion-grid>\n          </div>\n          <div *ngIf=\"!LoRaParameters\" style=\"padding-top:2vh\">\n              <ion-row>\n                  <ion-col size=\"3\">\n                      <label>LoRaWAN Mac Version</label>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                      <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"cities\" [(ngModel)]=\"selectedCity\" placeholder=\"Select a Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                  </ion-col>\n                  <p-selectButton [options]=\"MacVersion\" [(ngModel)]=\"MacVersionType\" ></p-selectButton>\n                </ion-row>\n                <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >MaxEIRP</ion-label></ion-col>\n                    <ion-col size=\"10\">\n                      <ion-card>\n                      <ion-item>\n                        <ion-input  clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                      </ion-item>\n                    </ion-card>\n      </ion-col>\n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Maximum output power in dBm of the device. This is only applicable to 1.0.2 Rev B or later devices.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >Device Class</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"deviceClass\" [(ngModel)]=\"deviceClassType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                    \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Supported device class.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >FCNT Size</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"fcntSize\" [(ngModel)]=\"fcntSizeType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                     \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Select size of FCNT.</p>\n                    <ion-row>\n                        <ion-col style=\"margin-top:1vh\"><ion-label >Downlink slot delay</ion-label></ion-col>\n                        <ion-col size=\"10\">\n                            <p-selectButton [options]=\"downSlotDelay\" [(ngModel)]=\"downSlotDelayType\" (onOptionClick)=\"ActivatedSelectType($event)\" ></p-selectButton>\n                      </ion-col>\n                    \n                    </ion-row>\n                    <p style=\"font-size: 12px;margin-left:15vh\">Select default delay from end of tranmission till the device listen for downlink. This parameter is only important for personalized devices.</p>\n                    <ion-row>\n                        <ion-col >\n                            <label>RX Slot 2</label>\n                        </ion-col>\n                        <ion-col size=\"10\">\n        \n                            <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"rsSlot\" [(ngModel)]=\"rsSlotType\" placeholder=\"Select a Slot\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                        </ion-col>\n                        <p style=\"font-size: 12px;margin-left:15vh\">Data rate (spreading factor and Bandwidth) used by default in downlink for slot-2 and for class C.</p>\n                          <!-- <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n                      </ion-row>\n       \n                  </div>\n          <div *ngIf=\"!LoRaLocation\">\n                <ion-grid>\n                <ion-row>\n                  <ion-col style=\"margin-top:1vh\">\n                    <ion-label >LoRa Location</ion-label>\n                  </ion-col>\n                  <ion-col size=\"10\" >\n                      <p-selectButton [options]=\"loRaLocationType\" [(ngModel)]=\"LoRaLocationSelectedType\" (onOptionClick)=\"LoRaLocation($event)\" ></p-selectButton>\n                  </ion-col>\n                </ion-row>\n                <p style=\"font-size: 12px;margin-left: 19vh;\"></p>\n              </ion-grid>\n          \n          </div>\n\n\n\n          <div  *ngIf=\"!Additional\">\n           \n              <ion-grid>\n                  <ion-row>\n                    <ion-col  style=\"margin-top:3vh\"><ion-label >Options</ion-label></ion-col>\n                    <ion-col size=\"11\">\n                      <ion-card>\n                      \n                        <ion-input   style=\"background-color: white;\" clearInput=\"true\" ></ion-input>\n                        <!-- [(ngModel)]=\"addDeviceID\" -->\n                    \n                    </ion-card>\n                  </ion-col>\n                    </ion-row>\n                    <p style=\" font-size:12px;margin-left: 15vh;\">The Options is a 4 byte hex value. Normally Left blank.</p>\n                    </ion-grid>\n                 \n                  </div>\n        <div style=\"padding-top:3vh;\">\n              <ion-button style=\"color:black\" size=\"small\"  float-right fill=\"outline\" >Cancel</ion-button>\n            <ion-button size=\"small\"  float-right >OK</ion-button>\n           </div>\n           \n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-device/add-device.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-device/add-device.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"custom-toolbar\">\n    <ion-title>Add Device</ion-title>\n    <!-- <button ion-button icon-only (click)=\"closeModal()\">\n        \n\n    </button> -->\n   <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- class=\"container-login100\" style=\"margin-top:5%;margin-bottom:5%;margin-right:5%;margin-left:5%\" -->\n \n  <!-- <ion-grid>\n    <ion-row style=\"margin-top:7%\">\n      <ion-col size=\"2\"></ion-col>\n      <ion-col  size=\"8\">\n          <div style=\"border:1px solid\"> -->\n          <ion-grid>\n              <ion-row>\n                <ion-col style=\"padding-top: 27px;text-align: center;\">\n                  <ion-label>DEVEID</ion-label>\n                </ion-col>\n                <ion-col size=\"10\">\n                  <ion-card>\n                    <ion-input type=\"text\" [(ngModel)]=\"addDeviceID\"></ion-input>\n                  </ion-card>\n          \n                  <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte\n                    unique identified based on IEEE EUI-64. Mandatory</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col style=\"padding-top: 27px;text-align: center;\">\n                  <ion-label>Comment</ion-label>\n                </ion-col>\n                <ion-col size=\"10\">\n                  <ion-card>\n          \n                    <ion-input clearInput=\"true\" [(ngModel)]=\"comment\"></ion-input>\n          \n          \n                  </ion-card>\n          \n                  <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;\">The devEUI is a 8-byte\n                    unique identified based on IEEE EUI-64. Mandatory</ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <div class=\"ui-fluid\" style=\"padding-top: 2vh;\">\n              <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\" name=\"Profiles\" (onOptionClick)=\"onOptionClick($event)\">\n              </p-selectButton>\n            </div>\n            <!-- <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton> -->\n          \n            <div style=\"margin-top: 5vh;\" *ngIf=\"!profile\">\n              <ion-row>\n                <ion-col style=\"text-align: center;\">\n                  <label>Device Profile</label>\n                </ion-col>\n                <ion-col size=\"9\">\n                  <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"cities\" [(ngModel)]=\"selectedCity\"\n                    placeholder=\"Select a Device Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                </ion-col>\n                <!-- <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n              </ion-row>\n              <ion-row>\n                <ion-col style=\"text-align: center;\">\n                  <label>Service Profile</label>\n                </ion-col>\n                <ion-col size=\"9\">\n          \n                  <p-dropdown autowidth=\"false\" [style]=\"{'width':'100%'}\" [options]=\"service\" [(ngModel)]=\"selectedService\"\n                    placeholder=\"Select a Service Profile\" optionLabel=\"name\" [showClear]=\"true\"></p-dropdown>\n                </ion-col>\n                <!-- <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\">Registered Device Class</ion-label> -->\n              </ion-row>\n            </div>\n            <div style=\"margin-top: 5vh;height: 21vh;\" *ngIf=\"!key\">\n              <ion-row>\n                <ion-col style=\"text-align:center\">\n                  <label>Device Class</label>\n                </ion-col>\n                <ion-col size=\"9\">\n          \n                  <ion-row>\n                    <p-selectButton [options]=\"keysDevice\" [(ngModel)]=\"selectedkeyDevice\"></p-selectButton>\n                  </ion-row>\n                  <ion-row>\n                    <p style=\"font-size:11px\">Supported Device Class</p>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;    margin-left: 195px;margin-top: 42px;\"></ion-label> -->\n          \n              <ion-row>\n                <ion-col style=\"text-align: center;\">\n                  <label>Activated</label>\n                </ion-col>\n                <ion-col size=\"9\">\n                  <ion-row>\n                    <p-selectButton [options]=\"keyActivated\" [(ngModel)]=\"selectedkeyActivated\"></p-selectButton>\n                  </ion-row>\n                  <ion-row>\n                    <p style=\"font-size:11px;\">Select Yes to allow the device to actively operate on the network. If a device not\n                      Activated, no data will be received from it and data cannot be sent to it.</p>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </div>\n          \n            <div style=\"margin-top: 5vh;height: 13vh;\" *ngIf=\"!additional\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col style=\"padding-top: 27px;text-align: center;\">\n                    <ion-label>Options</ion-label>\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <ion-card>\n          \n                      <ion-input style=\"background-color: white;\" clearInput=\"true\" [(ngModel)]=\"option\"></ion-input>\n                      \n          \n                    </ion-card>\n          \n                    <ion-label style=\"color:black;font-size:11px;position: absolute;margin-left: 18px;\">The Options is a 4 byte\n                      hex value. Normally left blank.</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <div style=\"padding-top:3vh\">\n              <ion-button style=\" background-color: #49c5b6;border-color:#49c5b6;\" size=\"small\" float-right fill=\"outline\">Cancel</ion-button>\n              <ion-button size=\"small\" style=\" background-color: #49c5b6;border-color:#49c5b6;\" float-right (click)=\"finalCall()\">OK</ion-button>\n            </div>\n          <!-- </div>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  \n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-split-pane disabled>\n    <ion-menu type=\"overlay\">\n<!-- <ion-header >\n    <ion-toolbar color=\"primary\">\n      <ion-title>\n        Home\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"automaticClose= !automaticClose\">\n          <ion-icon slot=\"icon-only\" name=\"close\" *ngIf=\"automaticClose\"></ion-icon>\n          <ion-icon slot=\"icon-only\" name=\"resize\" *ngIf=\"!automaticClose\"></ion-icon>\n        </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header> -->\n\n  \n  <ion-content>\n      <div style=\"width:100%;height:200px;background-color:#2a3f54;text-align: center;\"> \n          <img  src=\"assets/imgs/transparent_logo.png\"  style=\"background-color: white;width: 70%;height: 65px;border-radius: 20px;margin-top: 5%;\"/>\n          <div style=\"color: white;margin-top: 20%;\">\n             {{username}}\n          </div>\n        </div>\n    <ion-list *ngFor=\"let item of information; let i =index;\" class=\"accordion-list\" llines=\"none\" detail=\"false\" no-padding>\n<ion-item tappable (click)=\"toggleSection(i)\" [ngClass]=\"{'section-active':item.open, 'section': !item.open}\">\n    <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!item.open\"></ion-icon>\n    <ion-icon name=\"arrow-dropdown\" slot=\"end\" *ngIf=\"item.open\"></ion-icon>\n   \n  <ion-label >\n    {{item.name}}\n  </ion-label>\n</ion-item>\n<div *ngIf=\"item.children && item.open\">\n  <ion-list *ngFor=\"let child of item.children; let j= index;\"  class=\"child-list\">\n        <ion-label (click)=\"toggleItem(i,j)\">\n          {{child.name}}\n        </ion-label>\n       \n  </ion-list>\n \n</div>\n    </ion-list>\n    <ion-list  style=\"padding:0px\">\n        <ion-item (click)=\"logout()\">\n          \n                <ion-icon  name=\"log-out\" style=\"margin-right: 15px;font-size: 25px;\" slot=\"end\"></ion-icon>\n             \n            <ion-label>Logout</ion-label>\n          </ion-item>\n       \n  </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet main></ion-router-outlet>\n</ion-split-pane>\n</ion-app>\n\n  <!-- <ion-app>\n  <ion-split-pane disabled>\n    <ion-menu type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list >\n          <!-- <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle> -->\n          \n<!--          <ion-item-group>\n              <ion-item-divider icon=\"construct\"(click)=\"subList('device')\" color=\"light\">Devices\n              </ion-item-divider>\n                \n              <ion-item \n                    *ngFor=\"let device of devices\" lines=\"none\">\n                    <ion-icon name=\"{{ device.icon }}\" item-left></ion-icon>\n                    {{ device.name }}\n                 </ion-item>\n               \n           </ion-item-group>\n            <ion-item-group>\n              <ion-item-divider (click)=\"subList('group')\" color=\"light\">Groups</ion-item-divider>\n                 <ion-item\n                    *ngFor=\"let group of groups\" lines=\"none\">\n                    <ion-icon name=\"{{ group.icon }}\" item-left></ion-icon>\n                    {{ group.name }}\n                 </ion-item>\n           </ion-item-group>\n           <ion-item-group>\n              <ion-item-divider (click)=\"subList('profile')\" color=\"light\">Profiles</ion-item-divider>\n                 <ion-item style=\"animation: backwards;\"\n                    *ngFor=\"let profile of profiles\"\n                    (click)=\"sectionToLoad(profile)\" lines=\"none\">\n                    <ion-icon name=\"{{ profile.icon }}\" item-left></ion-icon>\n                    {{ profile.name }}\n                 </ion-item>\n           </ion-item-group>\n            <ion-item-group>\n              <ion-item-divider  (click)=\"subList('find')\" color=\"light\">Find</ion-item-divider>\n                 <ion-item \n                    *ngFor=\"let find of find\"\n                    (click)=\"sectionToLoad(find)\" lines=\"none\">\n                    <ion-icon name=\"{{ find.icon }}\" item-left></ion-icon>\n                    {{ find.name }}\n                 </ion-item>\n           </ion-item-group>\n         <ion-item-group>\n             <ion-item-divider   (click)=\"subList('account')\"color=\"light\">Accounts</ion-item-divider>\n                <ion-item \n                   *ngFor=\"let account of accounts\"\n                   (click)=\"sectionToLoad(account)\" lines=\"none\">\n                   <ion-icon name=\"{{ account.icon }}\" item-left></ion-icon>\n                   {{ account.name }}\n                </ion-item>\n          </ion-item-group>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cell-custom/cell-custom.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cell-custom/cell-custom.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div style=\"text-align: center;\">\n <!-- <ion-button *ngIf=\"adminLogin\" color=\"danger\" style=\"height: 20px;margin-top: -5px;\"(click)=\"editRow()\">Edit</ion-button> -->\n<ion-button color=\"danger\" style=\"height: 20px;margin-top: -5px;\" (click)=\"viewRow()\">View</ion-button>\n<ion-button *ngIf=\"adminLogin\" color=\"danger\" style=\"height: 20px;margin-top: -5px;\" (click)=\"deleteRow()\">Delete</ion-button> \n<!-- <ion-label (click)=\"action()\">Action   <ion-icon name=\"ios-arrow-down\"></ion-icon></ion-label> -->\n\n</div> \n<!-- <p-overlayPanel #op>\n        Content\n    </p-overlayPanel>\n    \n    <button type=\"text\" pButton label=\"Basic\" (click)=\"op.toggle($event)\"></button> -->\n\n\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/selectdevicemodal/selectdevicemodal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selectdevicemodal/selectdevicemodal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-title>\n      Select Devices\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n    \n    <ion-content>\n        <p *ngIf=\"display\" style=\"text-align:center;color: #f44336\">Please select atleast one device!!</p>\n      <ion-card>\n      \n    <ion-card-content>\n        <ag-grid-angular\n        style=\"width: 100%; height: 350px;\"\n        class=\"ag-theme-balham\"\n        [columnDefs]=\"columnDefs\"\n        [rowData]=\"rowData\"\n        [enableSorting]=\"true\"\n        [animateRows]=\"true\"\n        [pagination]=\"true\"\n        [paginationPageSize]=\"10\"\n        [enableFilter]=\"true\"\n        [floatingFilter]=\"true\"\n        [suppressRowClickSelection]=\"true\"\n        [rowSelection]=\"rowSelection\"\n        (gridReady)=\"onGridReady($event)\"\n        >\n        </ag-grid-angular>\n    </ion-card-content>\n\n    \n  \n        </ion-card>\n       \n        <div style=\"margin-right:2vh\">\n        <ion-button fill=\"outline\" color=\"primary\" style=\"float:right\" >Cancel</ion-button>\n        <ion-button style=\"float:right\" color=\"primary\" (click)=\"onOkClick()\">Ok</ion-button>\n      </div>\n    </ion-content>\n    \n    <!-- [multiSortKey]=\"multiSortKey\"         (gridReady)=\"onGridReady($event)\"-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-menu/side-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item class=\"child-item\" text-wrap detail=\"false\" lines=\"none\">\n  <ion-row no-padding align-items-center>\n    <ion-col size=\"9\">\n      <ion-row no-padding>\n        <ion-col size=\"12\">\n          <h3>{{product.name}}</h3>\n        </ion-col>\n        <ion-col size=\"12\">\n          <p text-lowercase color=\"medium\">{{product.name}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"3 text-right\">\n      <ion-button fill=\"outline\" (click)=\"buyItem(product)\">{{product.name}}</ion-button>\n      </ion-col>\n  </ion-row>\n</ion-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/superdeviceactivity/superdeviceactivity.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/superdeviceactivity/superdeviceactivity.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon end name=\"close\" md=\"md-close\" style=\"background-color: transparent;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Device Activity\n    </ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p style=\"margin-bottom: 10px;margin-left: 20px;margin-top: 30px\">There are no payloads for device: <b>{{device}}.</b></p>\n          <ion-grid>\n                \n              <ion-row>\n                <ion-col>\n                    <!-- <ion-button  shape=\"round\" color=\"shade\" expand=\"full\" ><ion-icon name=\"add\"></ion-icon> Send Data</ion-button> -->\n                </ion-col>\n                <ion-col>\n                    <!-- <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"selectDevice()\"><ion-icon name=\"add\"></ion-icon> Select Device</ion-button> -->\n                </ion-col>\n                <ion-col>\n                    <ion-button shape=\"round\" expand=\"full\" color=\"shade\" (click)=\"refresh()\"><ion-icon name=\"refresh\"></ion-icon>  Refresh List</ion-button>\n                </ion-col>\n              \n              \n              </ion-row>\n            </ion-grid>\n\n            <ion-card-content>\n              <ag-grid-angular\n              style=\"width: 100%; height: 600px;\"\n              class=\"ag-theme-balham\"\n              [columnDefs]=\"columnDefs\"\n              [rowData]=\"rowData\"\n              [enableSorting]=\"true\"\n              [animateRows]=\"true\"\n              [pagination]=\"true\"\n              [paginationPageSize]=\"50\"\n              [enableFilter]=\"true\"\n              [floatingFilter]=\"true\"\n              [suppressRowClickSelection]=\"true\"\n              [rowSelection]=\"rowSelection\">\n              </ag-grid-angular>\n          </ion-card-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/actions/actions.component.scss":
/*!************************************************!*\
  !*** ./src/app/actions/actions.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbnMvYWN0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/actions/actions.component.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/actions.component.ts ***!
  \**********************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () { };
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__(/*! raw-loader!./actions.component.html */ "./node_modules/raw-loader/index.js!./src/app/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.scss */ "./src/app/actions/actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/add-device-woprofile/add-device-woprofile.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/add-device-woprofile/add-device-woprofile.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddDeviceWOProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceWOProfilePageModule", function() { return AddDeviceWOProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-device-woprofile.page */ "./src/app/add-device-woprofile/add-device-woprofile.page.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__);










var routes = [
    {
        path: '',
        component: _add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_6__["AddDeviceWOProfilePage"]
    }
];
var AddDeviceWOProfilePageModule = /** @class */ (function () {
    function AddDeviceWOProfilePageModule() {
    }
    AddDeviceWOProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_device_woprofile_page__WEBPACK_IMPORTED_MODULE_6__["AddDeviceWOProfilePage"]]
        })
    ], AddDeviceWOProfilePageModule);
    return AddDeviceWOProfilePageModule;
}());



/***/ }),

/***/ "./src/app/add-device-woprofile/add-device-woprofile.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/add-device-woprofile/add-device-woprofile.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXZpY2Utd29wcm9maWxlL2FkZC1kZXZpY2Utd29wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-device-woprofile/add-device-woprofile.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/add-device-woprofile/add-device-woprofile.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddDeviceWOProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDeviceWOProfilePage", function() { return AddDeviceWOProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AddDeviceWOProfilePage = /** @class */ (function () {
    function AddDeviceWOProfilePage(modal) {
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
    AddDeviceWOProfilePage.prototype.ngOnInit = function () {
    };
    AddDeviceWOProfilePage.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AddDeviceWOProfilePage.prototype.onOptionClick = function (event) {
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
    AddDeviceWOProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddDeviceWOProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device-woprofile',
            template: __webpack_require__(/*! raw-loader!./add-device-woprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-device-woprofile/add-device-woprofile.page.html"),
            styles: [__webpack_require__(/*! ./add-device-woprofile.page.scss */ "./src/app/add-device-woprofile/add-device-woprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddDeviceWOProfilePage);
    return AddDeviceWOProfilePage;
}());



/***/ }),

/***/ "./src/app/add-device/add-device.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-device/add-device.module.ts ***!
  \*************************************************/
/*! exports provided: AddDevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePageModule", function() { return AddDevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _add_device_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-device.page */ "./src/app/add-device/add-device.page.ts");







//import { AddDeviceModalPage } from './add-device-modal.page';



var routes = [
    {
        path: '',
        component: _add_device_page__WEBPACK_IMPORTED_MODULE_9__["AddDevicePage"]
    }
];
var AddDevicePageModule = /** @class */ (function () {
    function AddDevicePageModule() {
    }
    AddDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["MultiSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_device_page__WEBPACK_IMPORTED_MODULE_9__["AddDevicePage"]]
        })
    ], AddDevicePageModule);
    return AddDevicePageModule;
}());



/***/ }),

/***/ "./src/app/add-device/add-device.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-device/add-device.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-ion-segment-md-h {\n  --background: none;\n  --background-checked: none;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.04);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --color-checked: white;\n  --color-checked-disabled: var(--color-checked);\n  --indicator-color: transparent;\n  --background-checked: red;\n}\n\n.custom-toolbar {\n  --background: #182535;\n  color: #fff;\n}\n\n.button-native {\n  --background-color:red ;\n}\n\n.ion-segment-button {\n  border-style: solid;\n}\n\n.segment-button {\n  border-style: none;\n  border-color: #e62100;\n  color: #e62100;\n  border-width: thin;\n}\n\n.ui-dropdown {\n  background: #ffffff;\n  border: 1px solid #a6a6a6;\n  -webkit-transition: border-color 0.2s;\n  transition: border-color 0.2s;\n  width: 100%;\n}\n\nbody .ui-selectbutton .ui-button {\n  background-color: #dadada;\n  /* border: 1px solid #dadada; */\n  color: #333333;\n  -webkit-transition: background-color 0.2s, box-shadow 0.2s;\n  transition: background-color 0.2s, box-shadow 0.2s;\n  width: 233.33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYWRkLWRldmljZS9hZGQtZGV2aWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLWRldmljZS9hZGQtZGV2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzRUFBQTtFQUNBLDBFQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQXNCLFdBQUE7QUNDMUI7O0FEQ0U7RUFDSSx1QkFBQTtBQ0VOOztBRENFO0VBRUUsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSwwREFBQTtFQUNBLGtEQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRkLWRldmljZS9hZGQtZGV2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbm9uZTtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMDQpO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogd2hpdGU7XG4gICAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJlZDtcbn1cblxuLmN1c3RvbS10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogIzE4MjUzNTtjb2xvcjojZmZmXG4gIH1cbiAgLmJ1dHRvbi1uYXRpdmV7XG4gICAgICAtLWJhY2tncm91bmQtY29sb3I6cmVkXG4gIH1cblxuICAuaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgIC8vbWF4LXdpZHRoOiAyNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIH1cbiAgXG4gIC5zZWdtZW50LWJ1dHRvbiB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI2U2MjEwMDtcbiAgICBjb2xvcjogI2U2MjEwMDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gIH1cblxuLnVpLWRyb3Bkb3duIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNmE2YTY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSAudWktc2VsZWN0YnV0dG9uIC51aS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTsgKi9cbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICAgIHdpZHRoOjIzMy4zM3B4XG59XG4iLCIuc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4wNCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6IHZhcigtLWNvbG9yLWNoZWNrZWQpO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZWQ7XG59XG5cbi5jdXN0b20tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzE4MjUzNTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOnJlZCA7XG59XG5cbi5pb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2U2MjEwMDtcbiAgY29sb3I6ICNlNjIxMDA7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cblxuLnVpLWRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ib2R5IC51aS1zZWxlY3RidXR0b24gLnVpLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7ICovXG4gIGNvbG9yOiAjMzMzMzMzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcbiAgd2lkdGg6IDIzMy4zM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-device/add-device.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-device/add-device.page.ts ***!
  \***********************************************/
/*! exports provided: AddDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePage", function() { return AddDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AddDevicePage = /** @class */ (function () {
    function AddDevicePage(modal) {
        this.modal = modal;
        this.addDeviceID = "";
        this.selectedType = 'Profiles';
        this.profile = false;
        this.key = true;
        this.additional = true;
        this.selectedkeyDevice = "A";
        this.selectedkeyActivated = "No";
        this.option = "";
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.service = [
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
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
    AddDevicePage.prototype.ngOnInit = function () {
        this.types = [
            { label: 'Profiles', value: 'Profiles' },
            { label: 'Keys', value: 'Keys' },
            { label: 'Additional', value: 'Additional' }
        ];
    };
    AddDevicePage.prototype.onOptionClick = function (event) {
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
    };
    AddDevicePage.prototype.finalCall = function () {
        //alert(this.selectedType+"_"+"_"+this.addDeviceID+"_"+this.comment+"_"+this.selectedCity.code+"_"+this.selectedService.code+"_"+this.selectedkeyDevice+"_"+this.selectedkeyActivated+"_"+this.option)
        if (this.selectedType == undefined || this.selectedType == "" || this.addDeviceID == undefined || this.addDeviceID == "" || this.selectedCity.code == undefined || this.selectedCity.code == ""
            || this.selectedService.code == undefined || this.selectedService.code == "" || this.selectedkeyDevice == undefined || this.selectedkeyDevice == "" || this.selectedkeyActivated == undefined || this.selectedkeyActivated == ""
            || this.option == undefined || this.option == "") {
            alert("Enter all Details");
        }
        else {
            alert("True"); //API Call
        }
    };
    AddDevicePage.prototype.closeModal = function () {
        this.modal.dismiss();
    };
    AddDevicePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-device',
            template: __webpack_require__(/*! raw-loader!./add-device.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-device/add-device.page.html"),
            styles: [__webpack_require__(/*! ./add-device.page.scss */ "./src/app/add-device/add-device.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddDevicePage);
    return AddDevicePage;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'menu-page',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: 'list',
        loadChildren: function () { return Promise.all(/*! import() | list-list-module */[__webpack_require__.e("common"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/list/list.module.ts")).then(function (m) { return m.ListPageModule; }); }
    },
    { path: 'super-admin', loadChildren: './super-admin/super-admin.module#SuperAdminPageModule' },
    { path: 'menu-page', loadChildren: './menu-page/menu-page.module#MenuPagePageModule' },
    { path: 'add-admin', loadChildren: './add-admin/add-admin.module#AddAdminPageModule' },
    { path: 'admin-list', loadChildren: './admin-list/admin-list.module#AdminListPageModule' },
    { path: 'edit-admin', loadChildren: './edit-admin/edit-admin.module#EditAdminPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'table', loadChildren: './table/table.module#TablePageModule' },
    { path: 'add-device-without-profile', loadChildren: './add-device-without-profile/add-device-without-profile.module#AddDeviceWithoutProfilePageModule' },
    { path: 'deviceactivity', loadChildren: './deviceactivity/deviceactivity.module#DeviceactivityPageModule' },
    { path: 'add-device', loadChildren: './add-device/add-device.module#AddDevicePageModule' },
    { path: 'add-device-woprofile', loadChildren: './add-device-woprofile/add-device-woprofile.module#AddDeviceWOProfilePageModule' },
    { path: 'device-activity-superadmin', loadChildren: './device-activity-superadmin/device-activity-superadmin.module#DeviceActivitySuperadminPageModule' },
    { path: 'list-superadmin', loadChildren: './list-superadmin/list-superadmin.module#ListSuperadminPageModule' },
    { path: 'superdeviceactivity', loadChildren: './superdeviceactivity/superdeviceactivity.module#SuperdeviceactivityPageModule' },
    { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofilePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var (--ion-color-light);\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background:#fff;\n}\n\n.accordion-list .section, .accordion-list .section-active {\n  --min-height:48px;\n}\n\n.section {\n  --ion-item-background:#fff;\n  --ion-item-color:#000;\n}\n\n.section-active {\n  --ion-item-background:#49c5b6 ;\n  --ion-item-color:#000;\n  font-weight: 600;\n}\n\n.child-list {\n  padding-bottom: 0.5vw;\n  margin-left: 5vh;\n  border-bottom: 0.5px solid gray !important;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background:#e8e7e6;\n  --ion-item-color:#000;\n}\n\n.child-active {\n  --ion-item-background:#49c5b6 ;\n  --ion-item-color:#fff;\n  border: 1px solid black;\n}\n\n.child-active ion-icon {\n  color: #000;\n}\n\n.product-list {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURHQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURJQTtFQUNJLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDREo7O0FERUk7RUFDSSxXQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIgKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmFjY29yZGlvbi1saXN0e1xuICAgIG1hcmdpbi1ib3R0b206NHB4O1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZmZmO1xuXG4gICAgLnNlY3Rpb24sIC5zZWN0aW9uLWFjdGl2ZXtcbiAgICAgICAgLS1taW4taGVpZ2h0OjQ4cHg7XG4gICAgfVxufVxuXG4uc2VjdGlvbntcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZjtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiMwMDA7XG5cbn1cblxuLnNlY3Rpb24tYWN0aXZle1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojNDljNWI2IDtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoaWxkLWxpc3R7XG4gICAgcGFkZGluZy1ib3R0b206MC41dnc7XG4gICAgbWFyZ2luLWxlZnQ6IDV2aDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG4gICAgLmNoaWxkLCAuY2hpbGQtYWN0aXZle1xuICAgICAgICBtYXJnaW4tYm90dG9tOjJweDtcbiAgICAgIFxuICAgIH1cbn1cbi5jaGlsZHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2U4ZTdlNjtcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiMwMDA7XG4gIFxufVxuLmNoaWxkLWFjdGl2ZXtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzQ5YzViNiA7XG4gICAgLS1pb24taXRlbS1jb2xvcjojZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWxpc3R7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5cblxuXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyICgtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5hY2NvcmRpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNmZmY7XG59XG4uYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24sIC5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbi1hY3RpdmUge1xuICAtLW1pbi1oZWlnaHQ6NDhweDtcbn1cblxuLnNlY3Rpb24ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6I2ZmZjtcbiAgLS1pb24taXRlbS1jb2xvcjojMDAwO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IzQ5YzViNiA7XG4gIC0taW9uLWl0ZW0tY29sb3I6IzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMC41dnc7XG4gIG1hcmdpbi1sZWZ0OiA1dmg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcbn1cbi5jaGlsZC1saXN0IC5jaGlsZCwgLmNoaWxkLWxpc3QgLmNoaWxkLWFjdGl2ZSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmNoaWxkIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNlOGU3ZTY7XG4gIC0taW9uLWl0ZW0tY29sb3I6IzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojNDljNWI2IDtcbiAgLS1pb24taXRlbS1jb2xvcjojZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5jaGlsZC1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







// const config = {
//   apiKey: "AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4",
//   authDomain: "eminent-gas-tech.firebaseapp.com",
//   databaseURL: "https://eminent-gas-tech.firebaseio.com",
//   projectId: "eminent-gas-tech",
//   storageBucket: "eminent-gas-tech.appspot.com",
// };
var AppComponent = /** @class */ (function () {
    function AppComponent(menuCtrl, httpData, platform, statusBar, splashScreen, alertController, router) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.httpData = httpData;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertController = alertController;
        this.router = router;
        this.automaticClose = false;
        this.httpData.get('assets/menuItem.json').subscribe(function (res) {
            _this.information = res['items'];
            _this.information[0].open = false;
            _this.initializeApp();
            _this.username = localStorage.getItem('admin');
        });
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        // firebase.initializeApp(config);
    };
    AppComponent.prototype.toggleSection = function (index) {
        this.information[index].open = !this.information[index].open;
        if (this.information && this.information[index].open) {
            this.information
                .filter(function (item, itemIndex) { return itemIndex != index; })
                .map(function (item) { return item.open = false; });
        }
    };
    AppComponent.prototype.toggleItem = function (index, childIndex) {
        if (this.information[index].children[childIndex].name == "My Profile") {
            this.menuCtrl.close();
            this.router.navigateByUrl('/myprofile');
        }
        else if (this.information[index].children[childIndex].name == "Manage Devices") {
            this.menuCtrl.close();
            this.router.navigateByUrl('/list');
        }
        else if (this.information[index].children[childIndex].name == "Device Activity") {
            this.menuCtrl.close();
            this.router.navigateByUrl('/deviceactivity');
        }
    };
    AppComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem("admin");
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Logout !',
                                message: 'Do you want to logout ?',
                                buttons: [
                                    {
                                        text: 'No',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            _this.menuCtrl.close();
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Yes',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                this.menuCtrl.close();
                                                this.router.navigateByUrl('/login');
                                                return [2 /*return*/];
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-component/shared-component.module */ "./src/app/shared-component/shared-component.module.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/actions/actions.component.ts");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cell-custom/cell-custom.component */ "./src/app/cell-custom/cell-custom.component.ts");
/* harmony import */ var _add_device_add_device_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-device/add-device.module */ "./src/app/add-device/add-device.module.ts");
/* harmony import */ var _add_device_woprofile_add_device_woprofile_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-device-woprofile/add-device-woprofile.module */ "./src/app/add-device-woprofile/add-device-woprofile.module.ts");
/* harmony import */ var _superdeviceactivity_superdeviceactivity_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./superdeviceactivity/superdeviceactivity.module */ "./src/app/superdeviceactivity/superdeviceactivity.module.ts");











//import { AddDeviceModalPage } from './add-device-modal/add-device-modal.page';





//import { EmailComposer } from '@ionic-native/email-composer/ngx';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_13__["ActionsComponent"],
                // AddDeviceModalPage,
                // AddDeviceWithoutProfilePage,
                _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_20__["CellCustomComponent"],
            ],
            entryComponents: [
                _actions_actions_component__WEBPACK_IMPORTED_MODULE_13__["ActionsComponent"],
                // AddDeviceModalPage,
                // AddDeviceWithoutProfilePage,
                _cell_custom_cell_custom_component__WEBPACK_IMPORTED_MODULE_20__["CellCustomComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _shared_component_shared_component_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_14__["SelectButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["MultiSelectModule"],
                _add_device_add_device_module__WEBPACK_IMPORTED_MODULE_21__["AddDevicePageModule"],
                _superdeviceactivity_superdeviceactivity_module__WEBPACK_IMPORTED_MODULE_23__["SuperdeviceactivityPageModule"],
                //AddDeviceWithoutProfilePageModule,
                _add_device_woprofile_add_device_woprofile_module__WEBPACK_IMPORTED_MODULE_22__["AddDeviceWOProfilePageModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cell-custom/cell-custom.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cell-custom/cell-custom.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #2a3f54 !important;\n  --box-shadow:none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvY2VsbC1jdXN0b20vY2VsbC1jdXN0b20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NlbGwtY3VzdG9tL2NlbGwtY3VzdG9tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2VsbC1jdXN0b20vY2VsbC1jdXN0b20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOjUwcHggO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTNmNTQgIWltcG9ydGFudDtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICBjb2xvcjp3aGl0ZVxuICAgIFxuICAgIH0iLCJpb24tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhM2Y1NCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cell-custom/cell-custom.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cell-custom/cell-custom.component.ts ***!
  \******************************************************/
/*! exports provided: CellCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellCustomComponent", function() { return CellCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-device/add-device.page */ "./src/app/add-device/add-device.page.ts");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/actions.component */ "./src/app/actions/actions.component.ts");
/* harmony import */ var _superdeviceactivity_superdeviceactivity_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../superdeviceactivity/superdeviceactivity.page */ "./src/app/superdeviceactivity/superdeviceactivity.page.ts");









//import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';
var CellCustomComponent = /** @class */ (function () {
    function CellCustomComponent(events, modalController, router, popoverController, firebaseservice) {
        this.events = events;
        this.modalController = modalController;
        this.router = router;
        this.popoverController = popoverController;
        this.firebaseservice = firebaseservice;
        this.checkLogin = localStorage.getItem('list');
        if (this.checkLogin == 'clientList') {
            this.adminLogin = false;
        }
        else {
            this.adminLogin = true;
        }
    }
    CellCustomComponent.prototype.agInit = function (params) {
        this.params = params;
        this.data = params.value;
    };
    CellCustomComponent.prototype.ngOnInit = function () { };
    CellCustomComponent.prototype.editRow = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rowData, i, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rowData = this.params;
                        i = rowData.rowIndex;
                        console.log(rowData);
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_5__["AddDevicePage"],
                                cssClass: 'my-custom-modal-css'
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CellCustomComponent.prototype.viewRow = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rowData, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rowData = this.params;
                        console.log(rowData);
                        localStorage.setItem("viewdevice", rowData.data.deveui);
                        if (!(this.checkLogin == 'clientList')) return [3 /*break*/, 1];
                        this.router.navigateByUrl('/deviceactivity');
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: _superdeviceactivity_superdeviceactivity_page__WEBPACK_IMPORTED_MODULE_7__["SuperdeviceactivityPage"],
                            cssClass: 'my-custom-modal-css',
                        })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CellCustomComponent.prototype.deleteRow = function () {
        var _this = this;
        var rowData = this.params;
        console.log(rowData);
        this.firebaseservice.deleteARM(rowData.data.original, rowData.data.primary).then(function (data) {
            _this.events.publish('update_list');
            _this.events.publish('amr_list');
        });
    };
    CellCustomComponent.prototype.action = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _actions_actions_component__WEBPACK_IMPORTED_MODULE_6__["ActionsComponent"],
                            event: ev,
                            translucent: true,
                            mode: 'ios'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CellCustomComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    CellCustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cell-custom',
            template: __webpack_require__(/*! raw-loader!./cell-custom.component.html */ "./node_modules/raw-loader/index.js!./src/app/cell-custom/cell-custom.component.html"),
            styles: [__webpack_require__(/*! ./cell-custom.component.scss */ "./src/app/cell-custom/cell-custom.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], CellCustomComponent);
    return CellCustomComponent;
}());



/***/ }),

/***/ "./src/app/selectdevicemodal/selectdevicemodal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/selectdevicemodal/selectdevicemodal.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvc2VsZWN0ZGV2aWNlbW9kYWwvc2VsZWN0ZGV2aWNlbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9zZWxlY3RkZXZpY2Vtb2RhbC9zZWxlY3RkZXZpY2Vtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSixxQkFBQTtFQUNBLFdBQUE7QUNEQSIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGRldmljZW1vZGFsL3NlbGVjdGRldmljZW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmEzZjU0O1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/selectdevicemodal/selectdevicemodal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/selectdevicemodal/selectdevicemodal.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectdevicemodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectdevicemodalPage", function() { return SelectdevicemodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SelectdevicemodalPage = /** @class */ (function () {
    function SelectdevicemodalPage(firebaseService, toastController, modalCtrl) {
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.display = false;
        this.splitarm = [];
        var user = localStorage.getItem("username");
        var pwd = localStorage.getItem("pwd");
        this.getAMRReadings();
        // this.getAdminArm(user,pwd)
        this.columnDefs = [
            {
                headerName: "DEVEUI",
                field: "deveui",
                width: 220,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true
            },
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
                value: ''
            },
        ];
        // this.rowData=data;
    }
    // getAdminArm(user,pwd)
    // {
    //   this.firebaseService.searchUsers(user ,pwd).subscribe(async result => {
    //     var no_of_arms = result[0].payload.doc.data()['no_of_arms']
    //     this.devices = no_of_arms.length
    //     this.getDevices(no_of_arms)
    //   })
    // }
    SelectdevicemodalPage.prototype.getAMRReadings = function () {
        var _this = this;
        this.firebaseService.getMethod("amr_readings.json", "").then(function (data) {
            _this.amr_readings = JSON.parse(data);
            // this.amr_readings = JSON.parse('{"-M0N4f0TmNKwscuC-Elp":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp1":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp2":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQGy","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"}}')
            var user = localStorage.getItem("username");
            var pwd = localStorage.getItem("pwd");
            _this.getAdminArm(user, pwd);
            console.log(_this.amr_readings);
        });
    };
    SelectdevicemodalPage.prototype.getAdminArm = function (user, pwd) {
        var _this = this;
        this.firebaseService.searchUsers(user, pwd).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var dataresult, i, splitdata, other_values, device, flat, meterno, meterdefault, amrdefault;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                dataresult = result[0].payload.doc.data()['no_of_arms'];
                this.devices = dataresult.length;
                for (i = 0; i < dataresult.length; i++) {
                    splitdata = dataresult[i].split('-');
                    other_values = splitdata[1].split(',');
                    device = splitdata[0];
                    flat = other_values[0];
                    meterno = other_values[1];
                    meterdefault = other_values[2];
                    amrdefault = other_values[3];
                    this.splitarm.push({ device: device, flat: flat, meterno: meterno, meterdefault: meterdefault, amrdefault: amrdefault });
                }
                this.getDevices(this.splitarm);
                return [2 /*return*/];
            });
        }); });
    };
    // getDevices(no_of_arms)
    // {
    //   this.firebaseService.getDevices()
    //   .subscribe(result => {
    //     var arms_array = no_of_arms.toString().split(",")
    //     for(var i=0;i<result.length;i++)
    //     {
    //       if(arms_array.includes(result[i].payload.doc.data()['deveui']))
    //       {
    //       var deveui = result[i].payload.doc.data()['deveui']
    //       var devaddr = result[i].payload.doc.data()['devaddr']
    //       var appeui = result[i].payload.doc.data()['appeui']
    //       var comment = result[i].payload.doc.data()['comment']
    //       var latitude = result[i].payload.doc.data()['latitude']
    //       var longitude =result[i].payload.doc.data()['longitude']
    //       var altitude = result[i].payload.doc.data()['altitude']
    //       var device_status = result[i].payload.doc.data()['device_status']
    //       var dl_fcnt = result[i].payload.doc.data()['dl_fcnt']
    //       var lora_device_class =result[i].payload.doc.data()['lora_device_class']
    //       var registration_status =result[i].payload.doc.data()['registration_status']
    //       var expiry_time_uplink =result[i].payload.doc.data()['expiry_time_uplink']
    //       var expiry_time_downlink =result[i].payload.doc.data()['expiry_time_downlink']
    //      // var last_reception = moment(result[i].payload.doc.data()['last_reception'].toInt()).format("DD-MM-YYYY h:mm:ss");
    //      var date_data = result[i].payload.doc.data()['last_reception']
    //      var last_reception = moment(date_data).format("DD-MM-YYYY h:mm:ss")
    //       var groups =result[i].payload.doc.data()['groups']
    //       var applications =result[i].payload.doc.data()['applications']
    //       var tags =result[i].payload.doc.data()['tags']
    //       this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags})
    //     }
    //     }
    //     this.rowData = this.rowData1
    //   })
    // }
    SelectdevicemodalPage.prototype.getDevices = function (no_of_arms) {
        var _this = this;
        this.firebaseService.getDevices()
            .subscribe(function (result) {
            //var arms_array = no_of_arms.toString().split(",")
            for (var i = 0; i < result.length; i++) {
                // if(no_of_arms.includes(result[i].payload.doc.data()['deveui']))
                if ((no_of_arms.filter(function (e) { return e.device === result[i].payload.doc.data()['deveui']; }).length > 0)) {
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
                    var last_reception = moment__WEBPACK_IMPORTED_MODULE_2___default()(date_data).format("DD/MM/YYYY h:mm:ss");
                    var groups = result[i].payload.doc.data()['groups'];
                    var applications = result[i].payload.doc.data()['applications'];
                    var tags = result[i].payload.doc.data()['tags'];
                    var cubic = no_of_arms[i].amrdefault;
                    var flat = no_of_arms[i].flat;
                    var meter = no_of_arms[i].meterno;
                    _this.rowData1.push({ 'deveui': deveui, 'devaddr': devaddr, 'appeui': appeui, 'comment': comment, 'latitude': latitude, 'longitude': longitude, 'altitude': altitude, 'device_status': device_status, 'dl_fcnt': dl_fcnt, 'lora_device_class': lora_device_class, 'registration_status': registration_status, 'expiry_time_uplink': expiry_time_uplink, 'expiry_time_downlink': expiry_time_downlink, 'last_reception': last_reception, 'groups': groups, 'applications': applications, 'tags': tags, 'cubic': cubic, 'flat': flat, 'meter': meter });
                }
            }
            _this.rowData = _this.rowData1;
            for (var j = 0; j < _this.rowData.length; j++) {
                _this.cubic(_this.rowData[j].deveui, j);
            }
        });
    };
    SelectdevicemodalPage.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    SelectdevicemodalPage.prototype.onOkClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selected_row;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                selected_row = this.gridApi.getSelectedRows();
                this.modalCtrl.dismiss(selected_row);
                return [2 /*return*/];
            });
        });
    };
    SelectdevicemodalPage.prototype.cubic = function (device, j) {
        //this.base64ToBase16("EQAAAA4Bsg==")
        var data = this.amr_readings;
        var cubic = "";
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
    };
    SelectdevicemodalPage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    SelectdevicemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selectdevicemodal',
            template: __webpack_require__(/*! raw-loader!./selectdevicemodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/selectdevicemodal/selectdevicemodal.page.html"),
            styles: [__webpack_require__(/*! ./selectdevicemodal.page.scss */ "./src/app/selectdevicemodal/selectdevicemodal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], SelectdevicemodalPage);
    return SelectdevicemodalPage;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var FirebaseService = /** @class */ (function () {
    function FirebaseService(db, http) {
        this.db = db;
        this.http = http;
        this.baseURL = "https://eminent-gas-tech.firebaseio.com/";
    }
    FirebaseService.prototype.getAvatars = function () {
        return this.db.collection('/avatar').valueChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (client, address, arm, person, wings, flats, project, email, mobile, id, userActivation) {
        // value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('Admin/').doc(id).set({
            //  account_details:account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile: mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project,
            pwd: 'Abc@123',
            flag: userActivation
        });
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('Admin').doc(userKey).delete();
    };
    FirebaseService.prototype.deleteARM = function (ARMKey, id) {
        var documentRef = this.db.collection('Admin').doc(id);
        return documentRef.update({
            "no_of_arms": firebase__WEBPACK_IMPORTED_MODULE_5___default.a.firestore.FieldValue.arrayRemove(ARMKey)
        });
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('Admin').snapshotChanges();
    };
    FirebaseService.prototype.getDevices = function () {
        return this.db.collection('Devices').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (email, pwd) {
        return this.db.collection('Admin', function (ref) { return ref.where('email_id', '==', email).where('pwd', '==', pwd); }).snapshotChanges();
    };
    FirebaseService.prototype.getDataPackets = function (device) {
        return this.db.collection('DataPackets', function (ref) { return ref.where('device', '==', device); }).snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByEmail = function (email) {
        return this.db.collection('Admin', function (ref) { return ref.where('email_id', '==', email); }).snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (client, address, arm, person, wings, flats, project, email, mobile, userActivation) {
        return this.db.collection('Admin/').add({
            // account_details:account,
            address: address,
            authorized_person: person,
            client_name: client,
            email_id: email, mobile: mobile,
            no_of_arms: arm,
            no_of_flats: flats,
            no_of_wings: wings,
            project_name: project,
            pwd: 'Abc@123',
            flag: userActivation
        });
    };
    FirebaseService.prototype.getMethod = function (page, params) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve, reject) {
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]();
            options.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            options.headers.append('Accept', 'application/json');
            options.headers.append('Contest-type', 'application/json');
            _this.http.get(_this.baseURL + page, params)
                .subscribe(function (data) {
                var myobj = data['_body'];
                resolve(myobj);
            }, function (err) {
                var error = err['_body'];
                resolve(error);
            });
        });
    };
    FirebaseService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }
    ]; };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/shared-component/shared-component.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-component/shared-component.module.ts ***!
  \*************************************************************/
/*! exports provided: SharedComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentModule", function() { return SharedComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SharedComponentModule = /** @class */ (function () {
    function SharedComponentModule() {
    }
    SharedComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"]]
        })
    ], SharedComponentModule);
    return SharedComponentModule;
}());



/***/ }),

/***/ "./src/app/side-menu/side-menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".child-item {\n  --ion-item-background:#f3f2f1;\n  --padding-start:8px;\n  --inner-padding-end:8px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoaWxkLWl0ZW17XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiNmM2YyZjE7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjhweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOjhweDtcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcbn0iLCIuY2hpbGQtaXRlbSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDojZjNmMmYxO1xuICAtLXBhZGRpbmctc3RhcnQ6OHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/side-menu/side-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.ts ***!
  \**************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    SideMenuComponent.prototype.buyItem = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Added to the cart: $(product.name)'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenuComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SideMenuComponent.prototype, "product", void 0);
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/side-menu/side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/superdeviceactivity/superdeviceactivity.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/superdeviceactivity/superdeviceactivity.module.ts ***!
  \*******************************************************************/
/*! exports provided: SuperdeviceactivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperdeviceactivityPageModule", function() { return SuperdeviceactivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _superdeviceactivity_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./superdeviceactivity.page */ "./src/app/superdeviceactivity/superdeviceactivity.page.ts");







//import { SelectdevicemodalPage } from '../selectdevicemodal/selectdevicemodal.page';

var routes = [
    {
        path: '',
        component: _superdeviceactivity_page__WEBPACK_IMPORTED_MODULE_7__["SuperdeviceactivityPage"]
    },
];
var SuperdeviceactivityPageModule = /** @class */ (function () {
    function SuperdeviceactivityPageModule() {
    }
    SuperdeviceactivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_superdeviceactivity_page__WEBPACK_IMPORTED_MODULE_7__["SuperdeviceactivityPage"]]
        })
    ], SuperdeviceactivityPageModule);
    return SuperdeviceactivityPageModule;
}());



/***/ }),

/***/ "./src/app/superdeviceactivity/superdeviceactivity.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/superdeviceactivity/superdeviceactivity.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  border-radius: 50px;\n  background-color: #49c5b6 !important;\n  --box-shadow:none;\n  color: white;\n}\n\nion-toolbar {\n  --background: #2a3f54;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWtyYW50dmlsYXNyYW5lL0Rlc2t0b3AvRW1pbmVudEdhcy9FbWluZW50R2FzL3NyYy9hcHAvc3VwZXJkZXZpY2VhY3Rpdml0eS9zdXBlcmRldmljZWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3VwZXJkZXZpY2VhY3Rpdml0eS9zdXBlcmRldmljZWFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHSTtFQUNKLHFCQUFBO0VBQ0EsV0FBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvc3VwZXJkZXZpY2VhY3Rpdml0eS9zdXBlcmRldmljZWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6NTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5YzViNiAhaW1wb3J0YW50O1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOndoaXRlXG4gICAgXG4gICAgfVxuXG4gICAgaW9uLXRvb2xiYXJ7XG4tLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG5jb2xvcjojZmZmXG4gICAgfVxuIiwiaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OWM1YjYgIWltcG9ydGFudDtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMyYTNmNTQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/superdeviceactivity/superdeviceactivity.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/superdeviceactivity/superdeviceactivity.page.ts ***!
  \*****************************************************************/
/*! exports provided: SuperdeviceactivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperdeviceactivityPage", function() { return SuperdeviceactivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectdevicemodal/selectdevicemodal.page */ "./src/app/selectdevicemodal/selectdevicemodal.page.ts");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");





var SuperdeviceactivityPage = /** @class */ (function () {
    function SuperdeviceactivityPage(modalController, firebaseService) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.rowData1 = [];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.datapackets = [];
        this.device = localStorage.getItem("viewdevice");
        this.getdatapackets(this.device);
        this.columnDefs = [
            {
                headerName: "Direction",
                field: "direction",
                width: 130,
                headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                filter: false,
            },
            // {
            //   headerName: "Time",
            //   field: "time",
            //   width: 250,
            //   filter:"agDateColumnFilter"
            // },
            {
                headerName: "Time",
                field: "time",
                width: 250,
                filter: false,
            },
            {
                headerName: "FCNT",
                field: "fcnt",
                width: 250,
                filter: false,
            },
            {
                headerName: "Port",
                field: "port",
                width: 250,
            },
            {
                headerName: "Status",
                field: "status",
                width: 250,
                filter: false,
            },
            {
                headerName: "Data Rate",
                field: "data_rate",
                width: 250,
                filter: false,
            },
            {
                headerName: "RSSI",
                field: "rssi",
                width: 250,
                filter: false,
            },
            {
                headerName: "Cubic meter",
                field: "cubic",
                width: 250,
                filter: false,
            },
            {
                headerName: "Data",
                field: "data",
                width: 250,
                filter: false,
            }
            // {
            //   headerName: "Decrypted",
            //   field: "decrypted",
            //   width: 250,
            //   filter: false,
            // },
            // {headerName: 'Actions',
            //  field: 'action', 
            //  width: 330,
            //  filter: false},
        ];
    }
    SuperdeviceactivityPage.prototype.refresh = function () {
        this.rowData1 = [];
        this.rowData = [];
        this.datapackets = [];
        this.getdatapackets(this.device);
    };
    SuperdeviceactivityPage.prototype.getdatapackets = function (device) {
        var _this = this;
        this.firebaseService.getMethod("amr_readings.json", "").then(function (data) {
            _this.amr_readings = JSON.parse(data);
            // this.amr_readings = JSON.parse('{"-M0N4f0TmNKwscuC-Elp":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp1":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp2":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQGy","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"}}')
            var cubic = "";
            for (var key in _this.amr_readings) {
                if (device == _this.amr_readings[key].deveui) {
                    var dataframe = _this.amr_readings[key].dataFrame;
                    // var dataframe = "EQAAAA4Bsg=="
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
                        cubic = (decimal * 0.01).toString();
                    }
                    else {
                        cubic = "0.00";
                    }
                    var direction = "Up";
                    var fcnt = _this.amr_readings[key].fcnt;
                    var port = _this.amr_readings[key].port;
                    var rssi = _this.amr_readings[key].rssi;
                    var data_rate = _this.amr_readings[key].dr_used;
                    var time = _this.amr_readings[key].timestamp;
                    _this.datapackets.push({ 'data': hex_value, 'time': time, 'data_rate': data_rate, 'device': device, 'direction': direction, 'fcnt': fcnt, 'port': port, 'rssi': rssi, 'cubic': cubic });
                    _this.rowData = _this.datapackets;
                }
                else {
                    console.log("no" + _this.amr_readings[key].deveui);
                }
            }
        });
    };
    SuperdeviceactivityPage.prototype.ngOnInit = function () {
    };
    SuperdeviceactivityPage.prototype.selectDevice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _selectdevicemodal_selectdevicemodal_page__WEBPACK_IMPORTED_MODULE_3__["SelectdevicemodalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            _this.device = dataReturned.data[0].deveui;
                            _this.datapackets = [];
                            _this.getdatapackets(dataReturned.data[0].deveui);
                            console.log(dataReturned.data[0].deveui);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SuperdeviceactivityPage.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    SuperdeviceactivityPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    SuperdeviceactivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-superdeviceactivity',
            template: __webpack_require__(/*! raw-loader!./superdeviceactivity.page.html */ "./node_modules/raw-loader/index.js!./src/app/superdeviceactivity/superdeviceactivity.page.html"),
            styles: [__webpack_require__(/*! ./superdeviceactivity.page.scss */ "./src/app/superdeviceactivity/superdeviceactivity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], SuperdeviceactivityPage);
    return SuperdeviceactivityPage;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4",
        authDomain: "eminent-gas-tech.firebaseapp.com",
        databaseURL: "https://eminent-gas-tech.firebaseio.com",
        projectId: "eminent-gas-tech",
        storageBucket: "eminent-gas-tech.appspot.com",
        messagingSenderId: "78505608785",
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vikrantvilasrane/Desktop/EminentGas/EminentGas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map