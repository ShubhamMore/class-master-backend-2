(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[222],{

/***/ "./src/app/student/branch/course/course-material/course-material-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/branch/course/course-material/course-material-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CourseMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialRoutingModule", function() { return CourseMaterialRoutingModule; });
/* harmony import */ var _course_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-material.component */ "./src/app/student/branch/course/course-material/course-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _course_material_component__WEBPACK_IMPORTED_MODULE_0__["CourseMaterialComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(223)]).then(__webpack_require__.bind(null, /*! ./manage-course-material/manage-course-material.module */ "./src/app/student/branch/course/course-material/manage-course-material/manage-course-material.module.ts")).then((m) => m.ManageCourseMaterialModule),
            },
            {
                path: 'view',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e("common"), __webpack_require__.e(224)]).then(__webpack_require__.bind(null, /*! ./view-course-material/view-course-material.module */ "./src/app/student/branch/course/course-material/view-course-material/view-course-material.module.ts")).then((m) => m.ViewCourseMaterialModule),
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
let CourseMaterialRoutingModule = /*@__PURE__*/ (() => {
    class CourseMaterialRoutingModule {
    }
    CourseMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CourseMaterialRoutingModule });
    CourseMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CourseMaterialRoutingModule_Factory(t) { return new (t || CourseMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return CourseMaterialRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/course-material/course-material.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/student/branch/course/course-material/course-material.component.ts ***!
  \************************************************************************************/
/*! exports provided: CourseMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialComponent", function() { return CourseMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _student_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../student-branch.service */ "./src/app/student/branch/student-branch.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CourseMaterialComponent = /*@__PURE__*/ (() => {
    class CourseMaterialComponent {
        constructor(branchService, studentBranchService, lectureService, studentCourseService, router, route) {
            this.branchService = branchService;
            this.studentBranchService = studentBranchService;
            this.lectureService = lectureService;
            this.studentCourseService = studentCourseService;
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
        }
        ngOnDestroy() {
            this.lectureService.setSearchDate(null);
            this.studentCourseService.deleteStudentCourseData();
        }
    }
    CourseMaterialComponent.ɵfac = function CourseMaterialComponent_Factory(t) { return new (t || CourseMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_branch_service__WEBPACK_IMPORTED_MODULE_2__["StudentBranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    CourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseMaterialComponent, selectors: [["ngx-course-material"]], decls: 1, vars: 0, template: function CourseMaterialComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [""] });
    return CourseMaterialComponent;
})();


/***/ }),

/***/ "./src/app/student/branch/course/course-material/course-material.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/student/branch/course/course-material/course-material.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CourseMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialModule", function() { return CourseMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_material_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-material-routing.module */ "./src/app/student/branch/course/course-material/course-material-routing.module.ts");
/* harmony import */ var _course_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-material.component */ "./src/app/student/branch/course/course-material/course-material.component.ts");





let CourseMaterialModule = /*@__PURE__*/ (() => {
    class CourseMaterialModule {
    }
    CourseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseMaterialModule });
    CourseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseMaterialModule_Factory(t) { return new (t || CourseMaterialModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _course_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseMaterialRoutingModule"]
            ]] });
    return CourseMaterialModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseMaterialModule, { declarations: [_course_material_component__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _course_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseMaterialRoutingModule"]] });
})();


/***/ })

}]);