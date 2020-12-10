(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./src/app/institute/branch/student/student-course/student-course-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: StudentCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseRoutingModule", function() { return StudentCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _student_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-course.component */ "./src/app/institute/branch/student/student-course/student-course.component.ts");





const routes = [
    {
        path: '',
        component: _student_course_component__WEBPACK_IMPORTED_MODULE_2__["StudentCourseComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(191)]).then(__webpack_require__.bind(null, /*! ./manage-student-course/manage-student-course.module */ "./src/app/institute/branch/student/student-course/manage-student-course/manage-student-course.module.ts")).then((m) => m.ManageStudentCourseModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! ./add-student-course/add-student-course.module */ "./src/app/institute/branch/student/student-course/add-student-course/add-student-course.module.ts")).then((m) => m.AddStudentCourseModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, /*! ./add-student-course/add-student-course.module */ "./src/app/institute/branch/student/student-course/add-student-course/add-student-course.module.ts")).then((m) => m.AddStudentCourseModule),
            },
            {
                path: 'installment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(195)]).then(__webpack_require__.bind(null, /*! ./student-course-installment/student-course-installment.module */ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.module.ts")).then((m) => m.StudentCourseInstallmentModule),
            },
            {
                path: 'attendance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(192)]).then(__webpack_require__.bind(null, /*! ./student-course-attendance/student-course-attendance.module */ "./src/app/institute/branch/student/student-course/student-course-attendance/student-course-attendance.module.ts")).then((m) => m.StudentCourseAttendanceModule),
            },
            {
                path: 'performance',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(196)]).then(__webpack_require__.bind(null, /*! ./student-course-performance/student-course-performance.module */ "./src/app/institute/branch/student/student-course/student-course-performance/student-course-performance.module.ts")).then((m) => m.StudentCoursePerformanceModule),
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
let StudentCourseRoutingModule = /*@__PURE__*/ (() => {
    class StudentCourseRoutingModule {
    }
    StudentCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCourseRoutingModule });
    StudentCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCourseRoutingModule_Factory(t) { return new (t || StudentCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return StudentCourseRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseComponent", function() { return StudentCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/discount-and-offer.service */ "./src/app/services/discount-and-offer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let StudentCourseComponent = /*@__PURE__*/ (() => {
    class StudentCourseComponent {
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
    StudentCourseComponent.ɵfac = function StudentCourseComponent_Factory(t) { return new (t || StudentCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_6__["DiscountAndOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
    StudentCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCourseComponent, selectors: [["ngx-student-course"]], decls: 1, vars: 0, template: function StudentCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [""] });
    return StudentCourseComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StudentCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseModule", function() { return StudentCourseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-course-routing.module */ "./src/app/institute/branch/student/student-course/student-course-routing.module.ts");
/* harmony import */ var _student_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-course.component */ "./src/app/institute/branch/student/student-course/student-course.component.ts");





let StudentCourseModule = /*@__PURE__*/ (() => {
    class StudentCourseModule {
    }
    StudentCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCourseModule });
    StudentCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCourseModule_Factory(t) { return new (t || StudentCourseModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseRoutingModule"]]] });
    return StudentCourseModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseModule, { declarations: [_student_course_component__WEBPACK_IMPORTED_MODULE_3__["StudentCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseRoutingModule"]] }); })();


/***/ })

}]);