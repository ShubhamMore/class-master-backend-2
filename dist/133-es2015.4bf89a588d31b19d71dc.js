(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./src/app/employee/branch/students-report/student-courses/student-courses-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/student-courses/student-courses-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: StudentCoursesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCoursesRoutingModule", function() { return StudentCoursesRoutingModule; });
/* harmony import */ var _student_courses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-courses.component */ "./src/app/employee/branch/students-report/student-courses/student-courses.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _student_courses_component__WEBPACK_IMPORTED_MODULE_0__["StudentCoursesComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(130)]).then(__webpack_require__.bind(null, /*! ./manage-student-course/manage-student-course.module */ "./src/app/employee/branch/students-report/student-courses/manage-student-course/manage-student-course.module.ts")).then((m) => m.ManageStudentCourseModule),
            },
            {
                path: 'attendance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(131)]).then(__webpack_require__.bind(null, /*! ./student-course-attendance/student-course-attendance.module */ "./src/app/employee/branch/students-report/student-courses/student-course-attendance/student-course-attendance.module.ts")).then((m) => m.StudentCourseAttendanceModule),
            },
            {
                path: 'performance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(132)]).then(__webpack_require__.bind(null, /*! ./student-course-performance/student-course-performance.module */ "./src/app/employee/branch/students-report/student-courses/student-course-performance/student-course-performance.module.ts")).then((m) => m.StudentCoursePerformanceModule),
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
let StudentCoursesRoutingModule = /*@__PURE__*/ (() => {
    class StudentCoursesRoutingModule {
    }
    StudentCoursesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudentCoursesRoutingModule });
    StudentCoursesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StudentCoursesRoutingModule_Factory(t) { return new (t || StudentCoursesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return StudentCoursesRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentCoursesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/students-report/student-courses/student-courses.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/student-courses/student-courses.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StudentCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCoursesComponent", function() { return StudentCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/discount-and-offer.service */ "./src/app/services/discount-and-offer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let StudentCoursesComponent = /*@__PURE__*/ (() => {
    class StudentCoursesComponent {
        constructor(branchService, toastrService, courseService, batchService, studentService, discountAndOfferService, router, route) {
            this.branchService = branchService;
            this.toastrService = toastrService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.studentService = studentService;
            this.discountAndOfferService = discountAndOfferService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.branchId = this.branchService.getBranchId();
            this.categoryId = this.branchService.getCategoryId();
            this.studentId = this.studentService.getStudentId();
            if (!this.branchId && !this.categoryId && !this.studentId) {
                this.back();
                this.showToastr('top-right', 'danger', 'Student Details Not Available');
                return;
            }
            this.studentService.getStudentByImsId(this.studentId).subscribe((student) => {
                this.studentService.setStudentData(student);
            }, (err) => {
                this.studentService.setStudentData(null);
                this.showToastr('top-right', 'danger', err);
                this.back();
            });
            this.courseService.getCourses(this.branchId, this.categoryId).subscribe((courses) => {
                this.courseService.setCoursesData(courses);
            }, (err) => {
                this.courseService.setCoursesData(null);
                this.showToastr('top-right', 'danger', err);
                this.back();
            });
            this.batchService.getBatches(this.branchId, this.categoryId, '').subscribe((batches) => {
                this.batchService.setBatchesData(batches);
            }, (err) => {
                this.batchService.setBatchesData(null);
                this.showToastr('top-right', 'danger', err);
                this.back();
            });
            this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe((discountAndOffers) => {
                this.discountAndOfferService.setDiscountAndOffersData(discountAndOffers);
            }, (err) => {
                this.discountAndOfferService.setDiscountAndOffersData(null);
                this.showToastr('top-right', 'danger', err);
                this.back();
            });
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        back() {
            const type = this.studentService.getStudentType();
            this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type } });
        }
        ngOnDestroy() {
            this.branchService.deleteCategoryId();
            this.studentService.deleteStudentId();
            this.studentService.deleteStudentData();
            this.courseService.deleteCoursesData();
            this.batchService.deleteBatchesData();
            this.discountAndOfferService.deleteDiscountAndOffersData();
        }
    }
    StudentCoursesComponent.ɵfac = function StudentCoursesComponent_Factory(t) { return new (t || StudentCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__["DiscountAndOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
    StudentCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCoursesComponent, selectors: [["ngx-student-courses"]], decls: 1, vars: 0, template: function StudentCoursesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [""] });
    return StudentCoursesComponent;
})();


/***/ }),

/***/ "./src/app/employee/branch/students-report/student-courses/student-courses.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/employee/branch/students-report/student-courses/student-courses.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: StudentCoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCoursesModule", function() { return StudentCoursesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _student_courses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-courses-routing.module */ "./src/app/employee/branch/students-report/student-courses/student-courses-routing.module.ts");
/* harmony import */ var _student_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-courses.component */ "./src/app/employee/branch/students-report/student-courses/student-courses.component.ts");





let StudentCoursesModule = /*@__PURE__*/ (() => {
    class StudentCoursesModule {
    }
    StudentCoursesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCoursesModule });
    StudentCoursesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCoursesModule_Factory(t) { return new (t || StudentCoursesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_courses_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCoursesRoutingModule"]]] });
    return StudentCoursesModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCoursesModule, { declarations: [_student_courses_component__WEBPACK_IMPORTED_MODULE_3__["StudentCoursesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_courses_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCoursesRoutingModule"]] }); })();


/***/ })

}]);