(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[216],{

/***/ "./src/app/student/branch/course/assignment/assignment-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/student/branch/course/assignment/assignment-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AssignmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentRoutingModule", function() { return AssignmentRoutingModule; });
/* harmony import */ var _assignment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignment.component */ "./src/app/student/branch/course/assignment/assignment.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _assignment_component__WEBPACK_IMPORTED_MODULE_0__["AssignmentComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(218)]).then(__webpack_require__.bind(null, /*! ./manage-assignment/manage-assignment.module */ "./src/app/student/branch/course/assignment/manage-assignment/manage-assignment.module.ts")).then(function (m) { return m.ManageAssignmentModule; });
                },
            },
            {
                path: 'submission',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(217)]).then(__webpack_require__.bind(null, /*! ./assignment-submission/assignment-submission.module */ "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.module.ts")).then(function (m) { return m.AssignmentSubmissionModule; });
                },
            },
            {
                path: '',
                redirectTo: 'manage',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
                },
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
var AssignmentRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function AssignmentRoutingModule() {
    }
    AssignmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AssignmentRoutingModule });
    AssignmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AssignmentRoutingModule_Factory(t) { return new (t || AssignmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AssignmentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssignmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/assignment/assignment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/student/branch/course/assignment/assignment.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");











function AssignmentComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
var AssignmentComponent = /** @class */ /*@__PURE__*/ (function () {
    function AssignmentComponent(branchService, studentBranchService, studentCourseService, courseService, batchService, subjectService, toastrService, router, route) {
        this.branchService = branchService;
        this.studentBranchService = studentBranchService;
        this.studentCourseService = studentCourseService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.subjectService = subjectService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
    }
    AssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.back();
            return;
        }
        this.studentCourseService
            .getStudentCourseData()
            .subscribe(function (studentCourse) {
            _this.studentCourse = studentCourse;
        });
        if (!this.studentCourse) {
            this.showToastr('top-right', 'danger', 'Student Course Not Found');
            this.back();
            return;
        }
        this.batchService
            .getBatchSubjects(this.studentCourse.course, this.studentCourse.batch)
            .subscribe(function (subjects) {
            _this.subjectService.setSubjectsData(subjects);
            _this.loading = false;
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
            _this.back();
        });
    };
    AssignmentComponent.prototype.back = function () {
        var type = this.studentBranchService.getType();
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type: type } });
    };
    AssignmentComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    AssignmentComponent.prototype.ngOnDestroy = function () {
        this.courseService.deleteCourseData();
        this.batchService.deleteBatchData();
        this.subjectService.deleteSubjectsData();
    };
    AssignmentComponent.ɵfac = function AssignmentComponent_Factory(t) { return new (t || AssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_2__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
    AssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentComponent, selectors: [["ngx-assignment"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function AssignmentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AssignmentComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: [""] });
    return AssignmentComponent;
}());



/***/ }),

/***/ "./src/app/student/branch/course/assignment/assignment.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/student/branch/course/assignment/assignment.module.ts ***!
  \***********************************************************************/
/*! exports provided: AssignmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentModule", function() { return AssignmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignment-routing.module */ "./src/app/student/branch/course/assignment/assignment-routing.module.ts");
/* harmony import */ var _assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignment.component */ "./src/app/student/branch/course/assignment/assignment.component.ts");





var AssignmentModule = /** @class */ /*@__PURE__*/ (function () {
    function AssignmentModule() {
    }
    AssignmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssignmentModule });
    AssignmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssignmentModule_Factory(t) { return new (t || AssignmentModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]
            ]] });
    return AssignmentModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssignmentModule, { declarations: [_assignment_component__WEBPACK_IMPORTED_MODULE_3__["AssignmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]] });
})();


/***/ })

}]);