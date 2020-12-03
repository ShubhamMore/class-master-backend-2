(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewScheduleRoutingModule", function() { return ViewScheduleRoutingModule; });
/* harmony import */ var _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [{ path: '', component: _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ViewScheduleComponent"] }];
var ViewScheduleRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ViewScheduleRoutingModule() {
    }
    ViewScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewScheduleRoutingModule });
    ViewScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ViewScheduleRoutingModule_Factory(t) { return new (t || ViewScheduleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ViewScheduleRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewScheduleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ViewScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewScheduleComponent", function() { return ViewScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var ViewScheduleComponent = /** @class */ /*@__PURE__*/ (function () {
    function ViewScheduleComponent(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
    }
    ViewScheduleComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
    };
    ViewScheduleComponent.ɵfac = function ViewScheduleComponent_Factory(t) { return new (t || ViewScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    ViewScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewScheduleComponent, selectors: [["ngx-view-schedule"]], decls: 2, vars: 0, template: function ViewScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-schedule works!");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return ViewScheduleComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ViewScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewScheduleModule", function() { return ViewScheduleModule; });
/* harmony import */ var _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-schedule-routing.module */ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts");





var ViewScheduleModule = /** @class */ /*@__PURE__*/ (function () {
    function ViewScheduleModule() {
    }
    ViewScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewScheduleModule });
    ViewScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ViewScheduleModule_Factory(t) { return new (t || ViewScheduleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewScheduleRoutingModule"]]] });
    return ViewScheduleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewScheduleModule, { declarations: [_view_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ViewScheduleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewScheduleRoutingModule"]] }); })();


/***/ })

}]);