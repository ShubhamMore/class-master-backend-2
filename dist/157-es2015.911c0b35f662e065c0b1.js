(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./src/app/institute/branch/exam/online-test/online-test-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: OnlineTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestRoutingModule", function() { return OnlineTestRoutingModule; });
/* harmony import */ var _online_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online-test.component */ "./src/app/institute/branch/exam/online-test/online-test.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _online_test_component__WEBPACK_IMPORTED_MODULE_0__["OnlineTestComponent"],
        children: [
            {
                path: 'batch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 153).then(__webpack_require__.bind(null, /*! ./manage-batch-online-test/manage-batch-online-test.module */ "./src/app/institute/branch/exam/online-test/manage-batch-online-test/manage-batch-online-test.module.ts")).then((m) => m.ManageBatchOnlineTestModule),
            },
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(154)]).then(__webpack_require__.bind(null, /*! ./manage-online-test/manage-online-test.module */ "./src/app/institute/branch/exam/online-test/manage-online-test/manage-online-test.module.ts")).then((m) => m.ManageOnlineTestModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./add-online-test/add-online-test.module */ "./src/app/institute/branch/exam/online-test/add-online-test/add-online-test.module.ts")).then((m) => m.AddOnlineTestModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ./add-online-test/add-online-test.module */ "./src/app/institute/branch/exam/online-test/add-online-test/add-online-test.module.ts")).then((m) => m.AddOnlineTestModule),
            },
            {
                path: 'question',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(156)]).then(__webpack_require__.bind(null, /*! ./online-test-question/online-test-question.module */ "./src/app/institute/branch/exam/online-test/online-test-question/online-test-question.module.ts")).then((m) => m.OnlineTestQuestionModule),
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
class OnlineTestRoutingModule {
}
OnlineTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlineTestRoutingModule });
OnlineTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlineTestRoutingModule_Factory(t) { return new (t || OnlineTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnlineTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test.component.ts ***!
  \****************************************************************************/
/*! exports provided: OnlineTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestComponent", function() { return OnlineTestComponent; });
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function OnlineTestComponent_router_outlet_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
} }
class OnlineTestComponent {
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
        }, (error) => { });
        this.batchService.getBatches(this.branchId, '', '').subscribe((batches) => {
            this.batchService.setBatchesData(batches);
            this.loading = false;
        }, (error) => { });
    }
    ngOnDestroy() {
        this.courseService.deleteCoursesData();
        this.batchService.deleteBatchesData();
    }
}
OnlineTestComponent.ɵfac = function OnlineTestComponent_Factory(t) { return new (t || OnlineTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
OnlineTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OnlineTestComponent, selectors: [["ngx-online-test"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function OnlineTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OnlineTestComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OnlineTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'ngx-online-test',
                templateUrl: './online-test.component.html',
                styleUrls: ['./online-test.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"] }, { type: _services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"] }, { type: _services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test.module.ts ***!
  \*************************************************************************/
/*! exports provided: OnlineTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestModule", function() { return OnlineTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-test-routing.module */ "./src/app/institute/branch/exam/online-test/online-test-routing.module.ts");
/* harmony import */ var _online_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-test.component */ "./src/app/institute/branch/exam/online-test/online-test.component.ts");





class OnlineTestModule {
}
OnlineTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnlineTestModule });
OnlineTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnlineTestModule_Factory(t) { return new (t || OnlineTestModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlineTestModule, { declarations: [_online_test_component__WEBPACK_IMPORTED_MODULE_3__["OnlineTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_online_test_component__WEBPACK_IMPORTED_MODULE_3__["OnlineTestComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _online_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineTestRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);