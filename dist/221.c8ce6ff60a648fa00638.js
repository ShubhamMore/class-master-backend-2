(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[221],{

/***/ "./src/app/student/branch/course/lecture/lecture-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/lecture-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureRoutingModule", function() { return LectureRoutingModule; });
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lecture.component */ "./src/app/student/branch/course/lecture/lecture.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");





var routes = [
    {
        path: '',
        component: _lecture_component__WEBPACK_IMPORTED_MODULE_0__["LectureComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 222).then(__webpack_require__.bind(null, /*! ./manage-lecture/manage-lecture.module */ "./src/app/student/branch/course/lecture/manage-lecture/manage-lecture.module.ts")).then(function (m) { return m.ManageLectureModule; });
                },
            },
            {
                path: 'view',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 227).then(__webpack_require__.bind(null, /*! ./view-lecture/view-lecture.module */ "./src/app/student/branch/course/lecture/view-lecture/view-lecture.module.ts")).then(function (m) { return m.ViewLectureModule; });
                },
            },
            {
                path: 'material',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 225).then(__webpack_require__.bind(null, /*! ./study-material/study-material.module */ "./src/app/student/branch/course/lecture/study-material/study-material.module.ts")).then(function (m) { return m.StudyMaterialModule; });
                },
            },
            {
                path: 'q&a',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, /*! ./question-answers/question-answers.module */ "./src/app/student/branch/course/lecture/question-answers/question-answers.module.ts")).then(function (m) { return m.QuestionAnswersModule; });
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
var LectureRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function LectureRoutingModule() {
    }
    LectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LectureRoutingModule });
    LectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LectureRoutingModule_Factory(t) { return new (t || LectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return LectureRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/lecture/lecture.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/lecture.component.ts ***!
  \********************************************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var LectureComponent = /** @class */ /*@__PURE__*/ (function () {
    function LectureComponent(branchService, studentBranchService, lectureService, studentCourseService, router, route) {
        this.branchService = branchService;
        this.studentBranchService = studentBranchService;
        this.lectureService = lectureService;
        this.studentCourseService = studentCourseService;
        this.router = router;
        this.route = route;
    }
    LectureComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
    };
    LectureComponent.prototype.ngOnDestroy = function () {
        this.lectureService.setSearchDate(null);
        this.studentCourseService.deleteStudentCourseData();
    };
    LectureComponent.ɵfac = function LectureComponent_Factory(t) { return new (t || LectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_2__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    LectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LectureComponent, selectors: [["ngx-lecture"]], decls: 1, vars: 0, template: function LectureComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [""] });
    return LectureComponent;
}());



/***/ }),

/***/ "./src/app/student/branch/course/lecture/lecture.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/student/branch/course/lecture/lecture.module.ts ***!
  \*****************************************************************/
/*! exports provided: LectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureModule", function() { return LectureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lecture-routing.module */ "./src/app/student/branch/course/lecture/lecture-routing.module.ts");
/* harmony import */ var _lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lecture.component */ "./src/app/student/branch/course/lecture/lecture.component.ts");





var LectureModule = /** @class */ /*@__PURE__*/ (function () {
    function LectureModule() {
    }
    LectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LectureModule });
    LectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LectureModule_Factory(t) { return new (t || LectureModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]]] });
    return LectureModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LectureModule, { declarations: [_lecture_component__WEBPACK_IMPORTED_MODULE_3__["LectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]] }); })();


/***/ })

}]);