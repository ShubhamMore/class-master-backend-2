(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[193],{

/***/ "./src/app/institute/branch/schedule/schedule-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/institute/branch/schedule/schedule-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ScheduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleRoutingModule", function() { return ScheduleRoutingModule; });
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.component */ "./src/app/institute/branch/schedule/schedule.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 192).then(__webpack_require__.bind(null, /*! ./manage-schedule/manage-schedule.module */ "./src/app/institute/branch/schedule/manage-schedule/manage-schedule.module.ts")).then((m) => m.ManageScheduleModule),
            },
            {
                path: 'batch-schedule',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(189)]).then(__webpack_require__.bind(null, /*! ./batch-schedule/batch-schedule.module */ "./src/app/institute/branch/schedule/batch-schedule/batch-schedule.module.ts")).then((m) => m.BatchScheduleModule),
            },
            {
                path: '',
                redirectTo: 'batch',
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
let ScheduleRoutingModule = /*@__PURE__*/ (() => {
    class ScheduleRoutingModule {
    }
    ScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScheduleRoutingModule });
    ScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ScheduleRoutingModule_Factory(t) { return new (t || ScheduleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ScheduleRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScheduleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/schedule/schedule.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/institute/branch/schedule/schedule.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let ScheduleComponent = /*@__PURE__*/ (() => {
    class ScheduleComponent {
        constructor(branchService, courseService, batchService, router, route) {
            this.branchService = branchService;
            this.courseService = courseService;
            this.batchService = batchService;
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
            this.courseService.getCourses(this.branchId, '').subscribe((courses) => {
                this.courseService.setCoursesData(courses);
                this.loading = false;
            }, (error) => { });
            this.batchService.getBatches(this.branchId, '', '').subscribe((batches) => {
                this.batchService.setBatchesData(batches);
            }, (error) => { });
        }
        ngOnDestroy() {
            this.courseService.deleteCoursesData();
            this.batchService.deleteBatchesData();
        }
    }
    ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["ngx-schedule"]], decls: 1, vars: 0, template: function ScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return ScheduleComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/schedule/schedule.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/institute/branch/schedule/schedule.module.ts ***!
  \**************************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/institute/branch/schedule/schedule-routing.module.ts");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.component */ "./src/app/institute/branch/schedule/schedule.component.ts");





let ScheduleModule = /*@__PURE__*/ (() => {
    class ScheduleModule {
    }
    ScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScheduleModule });
    ScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScheduleModule_Factory(t) { return new (t || ScheduleModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScheduleRoutingModule"]]] });
    return ScheduleModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScheduleModule, { declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScheduleRoutingModule"]] }); })();


/***/ })

}]);