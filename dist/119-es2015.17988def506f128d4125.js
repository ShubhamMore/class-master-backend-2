(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: BatchScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchScheduleRoutingModule", function() { return BatchScheduleRoutingModule; });
/* harmony import */ var _batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__["BatchScheduleComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(120)]).then(__webpack_require__.bind(null, /*! ./manage-batch-schedule/manage-batch-schedule.module */ "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.module.ts")).then((m) => m.ManageBatchScheduleModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./add-schedule/add-schedule.module */ "./src/app/employee/branch/schedule/batch-schedule/add-schedule/add-schedule.module.ts")).then((m) => m.AddScheduleModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./add-schedule/add-schedule.module */ "./src/app/employee/branch/schedule/batch-schedule/add-schedule/add-schedule.module.ts")).then((m) => m.AddScheduleModule),
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() */ 121).then(__webpack_require__.bind(null, /*! ./view-schedule/view-schedule.module */ "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts")).then((m) => m.ViewScheduleModule),
            },
            {
                path: '',
                redirectTo: 'manage',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
let BatchScheduleRoutingModule = /*@__PURE__*/ (() => {
    class BatchScheduleRoutingModule {
    }
    BatchScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BatchScheduleRoutingModule });
    BatchScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BatchScheduleRoutingModule_Factory(t) { return new (t || BatchScheduleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return BatchScheduleRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BatchScheduleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BatchScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchScheduleComponent", function() { return BatchScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function BatchScheduleComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
let BatchScheduleComponent = /*@__PURE__*/ (() => {
    class BatchScheduleComponent {
        constructor(branchService, courseService, batchService, router, route, branchEmployeeService) {
            this.branchService = branchService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.router = router;
            this.route = route;
            this.branchEmployeeService = branchEmployeeService;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId, 'teacher').subscribe((employees) => {
                this.branchEmployeeService.setBranchEmployeeNameIdsData(employees);
                this.loading = false;
            }, (error) => {
                this.router.navigate(['../'], { relativeTo: this.route });
            });
        }
        ngOnDestroy() {
            this.branchService.deleteCategoryId();
            this.branchService.deleteCategoryData();
            this.courseService.deleteCourseId();
            this.courseService.deleteCourseData();
            this.batchService.deleteBatchId();
            this.batchService.deleteBatchData();
            this.branchEmployeeService.deleteBranchEmployeeNameIdsData();
        }
    }
    BatchScheduleComponent.ɵfac = function BatchScheduleComponent_Factory(t) { return new (t || BatchScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__["BranchEmployeeService"])); };
    BatchScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BatchScheduleComponent, selectors: [["ngx-batch-schedule"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function BatchScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BatchScheduleComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return BatchScheduleComponent;
})();


/***/ }),

/***/ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule.module.ts ***!
  \**********************************************************************************/
/*! exports provided: BatchScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchScheduleModule", function() { return BatchScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batch-schedule-routing.module */ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts");
/* harmony import */ var _batch_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch-schedule.component */ "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts");





let BatchScheduleModule = /*@__PURE__*/ (() => {
    class BatchScheduleModule {
    }
    BatchScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BatchScheduleModule });
    BatchScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BatchScheduleModule_Factory(t) { return new (t || BatchScheduleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchScheduleRoutingModule"]]] });
    return BatchScheduleModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BatchScheduleModule, { declarations: [_batch_schedule_component__WEBPACK_IMPORTED_MODULE_3__["BatchScheduleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchScheduleRoutingModule"]] }); })();


/***/ })

}]);