(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./src/app/content/terms-and-conditions/terms-and-conditions-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/content/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TermsAndConditionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsRoutingModule", function() { return TermsAndConditionsRoutingModule; });
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-and-conditions.component */ "./src/app/content/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__["TermsAndConditionsComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
class TermsAndConditionsRoutingModule {
}
TermsAndConditionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TermsAndConditionsRoutingModule });
TermsAndConditionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TermsAndConditionsRoutingModule_Factory(t) { return new (t || TermsAndConditionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TermsAndConditionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TermsAndConditionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/content/terms-and-conditions/terms-and-conditions.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/content/terms-and-conditions/terms-and-conditions.component.ts ***!
  \********************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/terms-conditions/terms-conditions.component */ "./src/app/shared/terms-conditions/terms-conditions.component.ts");



class TermsAndConditionsComponent {
    constructor() {
    }
    ngOnInit() { }
}
TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) { return new (t || TermsAndConditionsComponent)(); };
TermsAndConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsAndConditionsComponent, selectors: [["ngx-terms-and-conditions"]], decls: 1, vars: 0, template: function TermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-terms-conditions");
    } }, directives: [_shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_1__["TermsConditionsComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-terms-and-conditions',
                templateUrl: './terms-and-conditions.component.html',
                styleUrls: ['./terms-and-conditions.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/content/terms-and-conditions/terms-and-conditions.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/terms-and-conditions/terms-and-conditions.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TermsAndConditionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsModule", function() { return TermsAndConditionsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-and-conditions-routing.module */ "./src/app/content/terms-and-conditions/terms-and-conditions-routing.module.ts");
/* harmony import */ var _terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-and-conditions.component */ "./src/app/content/terms-and-conditions/terms-and-conditions.component.ts");






class TermsAndConditionsModule {
}
TermsAndConditionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TermsAndConditionsModule });
TermsAndConditionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TermsAndConditionsModule_Factory(t) { return new (t || TermsAndConditionsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TermsAndConditionsModule, { declarations: [_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TermsAndConditionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
            }]
    }], null, null); })();


/***/ })

}]);