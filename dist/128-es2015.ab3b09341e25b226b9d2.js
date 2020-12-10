(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./src/app/employee/branch/student/student-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employee/branch/student/student-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.component */ "./src/app/employee/branch/student/student.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _student_component__WEBPACK_IMPORTED_MODULE_0__["StudentComponent"],
        children: [
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./add-student/add-student.module */ "./src/app/employee/branch/student/add-student/add-student.module.ts")).then((m) => m.AddStudentModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./add-student/add-student.module */ "./src/app/employee/branch/student/add-student/add-student.module.ts")).then((m) => m.AddStudentModule),
            },
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(120)]).then(__webpack_require__.bind(null, /*! ./manage-student/manage-student.module */ "./src/app/employee/branch/student/manage-student/manage-student.module.ts")).then((m) => m.ManageStudentModule),
            },
            {
                path: 'course',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(127)]).then(__webpack_require__.bind(null, /*! ./student-course/student-course.module */ "./src/app/employee/branch/student/student-course/student-course.module.ts")).then((m) => m.StudentCourseModule),
            },
            {
                path: '',
                redirectTo: 'manage?type=active',
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
let StudentRoutingModule = /*@__PURE__*/ (() => {
    class StudentRoutingModule {
    }
    StudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudentRoutingModule });
    StudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StudentRoutingModule_Factory(t) { return new (t || StudentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return StudentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/student/student.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee/branch/student/student.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let StudentComponent = /*@__PURE__*/ (() => {
    class StudentComponent {
        constructor(branchService, studentService, router, route) {
            this.branchService = branchService;
            this.studentService = studentService;
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
            this.studentService.deleteStudentType();
        }
    }
    StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["ngx-student"]], decls: 1, vars: 0, template: function StudentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [""] });
    return StudentComponent;
})();


/***/ }),

/***/ "./src/app/employee/branch/student/student.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employee/branch/student/student.module.ts ***!
  \***********************************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/employee/branch/student/student-routing.module.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student.component */ "./src/app/employee/branch/student/student.component.ts");





let StudentModule = /*@__PURE__*/ (() => {
    class StudentModule {
    }
    StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentModule });
    StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentModule_Factory(t) { return new (t || StudentModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"]]] });
    return StudentModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentModule, { declarations: [_student_component__WEBPACK_IMPORTED_MODULE_3__["StudentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"]] }); })();


/***/ })

}]);