(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[223],{

/***/ "./src/app/student/branch/course/course-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/student/branch/course/course-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function() { return CourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.component */ "./src/app/student/branch/course/course.component.ts");





const routes = [
    {
        path: '',
        component: _course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(231)]).then(__webpack_require__.bind(null, /*! ./manage-course/manage-course.module */ "./src/app/student/branch/course/manage-course/manage-course.module.ts")).then((m) => m.ManageCourseModule),
            },
            {
                path: 'installment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(221)]).then(__webpack_require__.bind(null, /*! ./course-installment/course-installment.module */ "./src/app/student/branch/course/course-installment/course-installment.module.ts")).then((m) => m.CourseInstallmentModule),
            },
            {
                path: 'attendance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(219)]).then(__webpack_require__.bind(null, /*! ./course-attendance/course-attendance.module */ "./src/app/student/branch/course/course-attendance/course-attendance.module.ts")).then((m) => m.CourseAttendanceModule),
            },
            {
                path: 'performance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(222)]).then(__webpack_require__.bind(null, /*! ./course-performance/course-performance.module */ "./src/app/student/branch/course/course-performance/course-performance.module.ts")).then((m) => m.CoursePerformanceModule),
            },
            {
                path: 'lecture',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(224)]).then(__webpack_require__.bind(null, /*! ./lecture/lecture.module */ "./src/app/student/branch/course/lecture/lecture.module.ts")).then((m) => m.LectureModule),
            },
            {
                path: 'assignment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(216)]).then(__webpack_require__.bind(null, /*! ./assignment/assignment.module */ "./src/app/student/branch/course/assignment/assignment.module.ts")).then((m) => m.AssignmentModule),
            },
            {
                path: 'online-test',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(234)]).then(__webpack_require__.bind(null, /*! ./online-test/online-test.module */ "./src/app/student/branch/course/online-test/online-test.module.ts")).then((m) => m.OnlineTestModule),
            },
            {
                path: '',
                redirectTo: 'manage?type=course',
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
let CourseRoutingModule = /*@__PURE__*/ (() => {
    class CourseRoutingModule {
    }
    CourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseRoutingModule });
    CourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseRoutingModule_Factory(t) { return new (t || CourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CourseRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/course.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/student/branch/course/course.component.ts ***!
  \***********************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let CourseComponent = /*@__PURE__*/ (() => {
    class CourseComponent {
        constructor(branchService, toastrService, router, route) {
            this.branchService = branchService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.back();
                this.showToastr('top-right', 'danger', 'Student Details Not Available');
                return;
            }
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        back() {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        ngOnDestroy() { }
    }
    CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["ngx-course"]], decls: 1, vars: 0, template: function CourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [""] });
    return CourseComponent;
})();


/***/ }),

/***/ "./src/app/student/branch/course/course.module.ts":
/*!********************************************************!*\
  !*** ./src/app/student/branch/course/course.module.ts ***!
  \********************************************************/
/*! exports provided: CourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModule", function() { return CourseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-routing.module */ "./src/app/student/branch/course/course-routing.module.ts");
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course.component */ "./src/app/student/branch/course/course.component.ts");





let CourseModule = /*@__PURE__*/ (() => {
    class CourseModule {
    }
    CourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseModule });
    CourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseModule_Factory(t) { return new (t || CourseModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"]]] });
    return CourseModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseModule, { declarations: [_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"]] }); })();


/***/ })

}]);