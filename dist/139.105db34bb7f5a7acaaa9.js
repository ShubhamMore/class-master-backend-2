(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ManageStudentCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseRoutingModule", function() { return ManageStudentCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_student_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-student-course.component */ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.component.ts");





var routes = [
    {
        path: '',
        component: _manage_student_course_component__WEBPACK_IMPORTED_MODULE_2__["ManageStudentCourseComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
var ManageStudentCourseRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentCourseRoutingModule() {
    }
    ManageStudentCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageStudentCourseRoutingModule });
    ManageStudentCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageStudentCourseRoutingModule_Factory(t) { return new (t || ManageStudentCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ManageStudentCourseRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageStudentCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ManageStudentCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseComponent", function() { return ManageStudentCourseComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");













function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template(rf, ctx) {
    if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var studentCourse_r7 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.courseInstallments(studentCourse_r7._id, studentCourse_r7.course, studentCourse_r7.studentCourseInstallment); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Installments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var studentCourse_r7 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.courseAttendance(studentCourse_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Attendance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var studentCourse_r7 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.coursePerformance(studentCourse_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Performance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var studentCourse_r7 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.courseEdit(studentCourse_r7._id, studentCourse_r7.studentCourseInstallment); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var studentCourse_r7 = ctx.$implicit; var i_r8 = ctx.index; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.changeCourseStatus(studentCourse_r7._id, !studentCourse_r7.status, i_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var studentCourse_r7 = ctx.$implicit;
        var i_r8 = ctx.index;
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r8 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx_r6.getCourseName(studentCourse_r7.course)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 9, ctx_r6.getBatchName(studentCourse_r7.batch)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](studentCourse_r7.rollNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.dateService.formatDate(studentCourse_r7.activationDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", !studentCourse_r7.status ? "warning" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !studentCourse_r7.status ? "Activate" : "Deactivate", " ");
    }
}
function ManageStudentCourseComponent_ng_container_15_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Roll Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Activation date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Installments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ManageStudentCourseComponent_ng_container_15_div_1_tr_23_Template, 28, 11, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.studentCourses);
    }
}
function ManageStudentCourseComponent_ng_container_15_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Student Courses Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ManageStudentCourseComponent_ng_container_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ManageStudentCourseComponent_ng_container_15_div_1_Template, 24, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManageStudentCourseComponent_ng_container_15_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourses.length > 0)("ngIfElse", _r4);
    }
}
function ManageStudentCourseComponent_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
var ManageStudentCourseComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentCourseComponent(dateService, branchService, toastrService, studentService, courseService, batchService, studentCourseService, studentCourseInstallmentService, router, route) {
        this.dateService = dateService;
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.studentService = studentService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.studentCourseService = studentCourseService;
        this.studentCourseInstallmentService = studentCourseInstallmentService;
        this.router = router;
        this.route = route;
    }
    ManageStudentCourseComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        this.categoryId = this.branchService.getCategoryId();
        this.studentId = this.studentService.getStudentId();
        if (!this.branchId || !this.categoryId || !this.studentId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.studentCourses = [];
        this.getStudentCourses();
    };
    ManageStudentCourseComponent.prototype.getStudentCourses = function () {
        var _this = this;
        this.studentCourseService
            .getStudentCourses(this.branchId, this.categoryId, this.studentId)
            .subscribe(function (studentCourses) {
            _this.studentCourses = studentCourses;
            _this.loading = false;
        }, function (err) {
            _this.showToastr('top-right', 'danger', err);
            _this.loading = false;
        });
    };
    ManageStudentCourseComponent.prototype.addStudentCourse = function () {
        this.router.navigate(['../add'], { relativeTo: this.route });
    };
    ManageStudentCourseComponent.prototype.courseInstallments = function (studentCourseId, courseId, studentCourseInstallmentId) {
        this.courseService.setCourseId(courseId);
        this.studentCourseService.setStudentCourseId(studentCourseId);
        this.studentCourseInstallmentService.setStudentCourseInstallmentId(studentCourseInstallmentId);
        this.router.navigate(['../installment'], { relativeTo: this.route });
    };
    ManageStudentCourseComponent.prototype.courseEdit = function (studentCourseId, studentCourseInstallmentId) {
        this.studentCourseService.setStudentCourseId(studentCourseId);
        this.studentCourseInstallmentService.setStudentCourseInstallmentId(studentCourseInstallmentId);
        this.router.navigate(['../edit'], { relativeTo: this.route, queryParams: { mode: 'edit' } });
    };
    ManageStudentCourseComponent.prototype.courseAttendance = function (studentCourse) {
        this.studentCourseService.setStudentCourseId(studentCourse._id);
        this.studentCourseService.setStudentCourseData(studentCourse);
        this.router.navigate(['../attendance'], { relativeTo: this.route });
    };
    ManageStudentCourseComponent.prototype.coursePerformance = function (studentCourse) {
        this.studentCourseService.setStudentCourseId(studentCourse._id);
        this.studentCourseService.setStudentCourseData(studentCourse);
        this.router.navigate(['../performance'], { relativeTo: this.route });
    };
    ManageStudentCourseComponent.prototype.changeCourseStatus = function (studentCourseId, status, i) { };
    ManageStudentCourseComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageStudentCourseComponent.prototype.getStudentName = function () {
        return this.studentService.getStudentName().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (studentName) {
            return studentName;
        }));
    };
    ManageStudentCourseComponent.prototype.getCourseName = function (courseId) {
        return this.courseService.getCourseName(courseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (courseName) {
            return courseName;
        }));
    };
    ManageStudentCourseComponent.prototype.getBatchName = function (BatchId) {
        return this.batchService.getBatchName(BatchId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (batchName) {
            return batchName;
        }));
    };
    ManageStudentCourseComponent.prototype.back = function () {
        var type = this.studentService.getStudentType();
        this.router.navigate(['../../'], { relativeTo: this.route, queryParams: { type: type } });
    };
    ManageStudentCourseComponent.prototype.ngOnDestroy = function () { };
    ManageStudentCourseComponent.ɵfac = function ManageStudentCourseComponent_Factory(t) { return new (t || ManageStudentCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_5__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_7__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_8__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_9__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
    ManageStudentCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageStudentCourseComponent, selectors: [["ngx-manage-student-course"]], decls: 18, vars: 7, consts: [[1, "row"], [1, "col-md-12"], ["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "body-container"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noStudentCourses", ""], [1, "table-responsive"], [1, "table"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "info", 3, "click"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbButton", "", "size", "small", 1, "", 3, "status", "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageStudentCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseComponent_Template_button_click_4_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Courses ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-card-body", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManageStudentCourseComponent_ng_container_15_Template, 4, 2, "ng-container", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManageStudentCourseComponent_ng_template_16_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx.getStudentName())), "");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [""] });
    return ManageStudentCourseComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ManageStudentCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseModule", function() { return ManageStudentCourseModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_student_course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-student-course-routing.module */ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course-routing.module.ts");
/* harmony import */ var _manage_student_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-student-course.component */ "./src/app/employee/branch/student/student-course/manage-student-course/manage-student-course.component.ts");






var ManageStudentCourseModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageStudentCourseModule() {
    }
    ManageStudentCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudentCourseModule });
    ManageStudentCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudentCourseModule_Factory(t) { return new (t || ManageStudentCourseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_student_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentCourseRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            ]] });
    return ManageStudentCourseModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentCourseModule, { declarations: [_manage_student_course_component__WEBPACK_IMPORTED_MODULE_4__["ManageStudentCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manage_student_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentCourseRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]] });
})();


/***/ })

}]);