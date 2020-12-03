(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./src/app/employee/branch/budget/view-budget/view-budget-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/employee/branch/budget/view-budget/view-budget-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewBudgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBudgetRoutingModule", function() { return ViewBudgetRoutingModule; });
/* harmony import */ var _view_budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-budget.component */ "./src/app/employee/branch/budget/view-budget/view-budget.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    { path: '', component: _view_budget_component__WEBPACK_IMPORTED_MODULE_0__["ViewBudgetComponent"] },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
var ViewBudgetRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ViewBudgetRoutingModule() {
    }
    ViewBudgetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewBudgetRoutingModule });
    ViewBudgetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ViewBudgetRoutingModule_Factory(t) { return new (t || ViewBudgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ViewBudgetRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewBudgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/budget/view-budget/view-budget.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employee/branch/budget/view-budget/view-budget.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ViewBudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBudgetComponent", function() { return ViewBudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ViewBudgetComponent = /** @class */ /*@__PURE__*/ (function () {
    function ViewBudgetComponent() {
    }
    ViewBudgetComponent.prototype.ngOnInit = function () {
    };
    ViewBudgetComponent.ɵfac = function ViewBudgetComponent_Factory(t) { return new (t || ViewBudgetComponent)(); };
    ViewBudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewBudgetComponent, selectors: [["ngx-view-budget"]], decls: 2, vars: 0, template: function ViewBudgetComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-budget works!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return ViewBudgetComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/budget/view-budget/view-budget.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employee/branch/budget/view-budget/view-budget.module.ts ***!
  \**************************************************************************/
/*! exports provided: ViewBudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBudgetModule", function() { return ViewBudgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _view_budget_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-budget-routing.module */ "./src/app/employee/branch/budget/view-budget/view-budget-routing.module.ts");
/* harmony import */ var _view_budget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-budget.component */ "./src/app/employee/branch/budget/view-budget/view-budget.component.ts");





var ViewBudgetModule = /** @class */ /*@__PURE__*/ (function () {
    function ViewBudgetModule() {
    }
    ViewBudgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewBudgetModule });
    ViewBudgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewBudgetModule_Factory(t) { return new (t || ViewBudgetModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _view_budget_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewBudgetRoutingModule"]
            ]] });
    return ViewBudgetModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewBudgetModule, { declarations: [_view_budget_component__WEBPACK_IMPORTED_MODULE_3__["ViewBudgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _view_budget_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewBudgetRoutingModule"]] });
})();


/***/ })

}]);