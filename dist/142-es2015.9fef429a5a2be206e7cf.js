(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ "./src/app/institute/branch/budget/budget-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/institute/branch/budget/budget-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BudgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetRoutingModule", function() { return BudgetRoutingModule; });
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.component */ "./src/app/institute/branch/budget/budget.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _budget_component__WEBPACK_IMPORTED_MODULE_0__["BudgetComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(143)]).then(__webpack_require__.bind(null, /*! ./manage-budget/manage-budget.module */ "./src/app/institute/branch/budget/manage-budget/manage-budget.module.ts")).then((m) => m.ManageBudgetModule),
            },
            {
                path: 'add',
                loadChildren: () => __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./add-budget/add-budget.module */ "./src/app/institute/branch/budget/add-budget/add-budget.module.ts")).then((m) => m.AddBudgetModule),
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() */ 144).then(__webpack_require__.bind(null, /*! ./view-budget/view-budget.module */ "./src/app/institute/branch/budget/view-budget/view-budget.module.ts")).then((m) => m.ViewBudgetModule),
            },
            {
                path: 'summery',
                loadChildren: () => __webpack_require__.e(/*! import() */ 56).then(__webpack_require__.bind(null, /*! ./view-budget-summery/view-budget-summery.module */ "./src/app/institute/branch/budget/view-budget-summery/view-budget-summery.module.ts")).then((m) => m.ViewBudgetSummeryModule),
            },
            {
                path: '',
                redirectTo: 'manage',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
class BudgetRoutingModule {
}
BudgetRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BudgetRoutingModule });
BudgetRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BudgetRoutingModule_Factory(t) { return new (t || BudgetRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BudgetRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BudgetRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/budget/budget.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/institute/branch/budget/budget.component.ts ***!
  \*************************************************************/
/*! exports provided: BudgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetComponent", function() { return BudgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class BudgetComponent {
    constructor(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
    }
}
BudgetComponent.ɵfac = function BudgetComponent_Factory(t) { return new (t || BudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
BudgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetComponent, selectors: [["ngx-budget"]], decls: 1, vars: 0, template: function BudgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-budget',
                templateUrl: './budget.component.html',
                styleUrls: ['./budget.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/budget/budget.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/institute/branch/budget/budget.module.ts ***!
  \**********************************************************/
/*! exports provided: BudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModule", function() { return BudgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _budget_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget-routing.module */ "./src/app/institute/branch/budget/budget-routing.module.ts");
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget.component */ "./src/app/institute/branch/budget/budget.component.ts");





class BudgetModule {
}
BudgetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BudgetModule });
BudgetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BudgetModule_Factory(t) { return new (t || BudgetModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _budget_routing_module__WEBPACK_IMPORTED_MODULE_2__["BudgetRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BudgetModule, { declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _budget_routing_module__WEBPACK_IMPORTED_MODULE_2__["BudgetRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BudgetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_3__["BudgetComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _budget_routing_module__WEBPACK_IMPORTED_MODULE_2__["BudgetRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);