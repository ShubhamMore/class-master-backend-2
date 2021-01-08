(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ "./src/app/institute/branch/exam/test/test-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/institute/branch/exam/test/test-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function() { return TestRoutingModule; });
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.component */ "./src/app/institute/branch/exam/test/test.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _test_component__WEBPACK_IMPORTED_MODULE_0__["TestComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 165).then(__webpack_require__.bind(null, /*! ./manage-test/manage-test.module */ "./src/app/institute/branch/exam/test/manage-test/manage-test.module.ts")).then((m) => m.ManageTestModule),
            },
            {
                path: 'batch-test',
                loadChildren: () => __webpack_require__.e(/*! import() */ 163).then(__webpack_require__.bind(null, /*! ./batch-test/batch-test.module */ "./src/app/institute/branch/exam/test/batch-test/batch-test.module.ts")).then((m) => m.BatchTestModule),
            },
            {
                path: '',
                redirectTo: 'batch',
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
let TestRoutingModule = /*@__PURE__*/ (() => {
    class TestRoutingModule {
    }
    TestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TestRoutingModule });
    TestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TestRoutingModule_Factory(t) { return new (t || TestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return TestRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/test/test.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/institute/branch/exam/test/test.component.ts ***!
  \**************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let TestComponent = /*@__PURE__*/ (() => {
    class TestComponent {
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
    TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["ngx-test"]], decls: 1, vars: 0, template: function TestComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return TestComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/exam/test/test.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/institute/branch/exam/test/test.module.ts ***!
  \***********************************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/institute/branch/exam/test/test-routing.module.ts");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.component */ "./src/app/institute/branch/exam/test/test.component.ts");





let TestModule = /*@__PURE__*/ (() => {
    class TestModule {
    }
    TestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TestModule });
    TestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TestModule_Factory(t) { return new (t || TestModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"]]] });
    return TestModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestModule, { declarations: [_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"]] }); })();


/***/ })

}]);