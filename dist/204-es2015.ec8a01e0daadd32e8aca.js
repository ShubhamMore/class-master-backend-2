(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./src/app/institute/branch/students-report/students-report-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/institute/branch/students-report/students-report-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: StudentsReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsReportRoutingModule", function() { return StudentsReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'manage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(199)]).then(__webpack_require__.bind(null, /*! ./manage-student-reports/manage-student-reports.module */ "./src/app/institute/branch/students-report/manage-student-reports/manage-student-reports.module.ts")).then((m) => m.ManageStudentReportsModule),
    },
    {
        path: 'course',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(203)]).then(__webpack_require__.bind(null, /*! ./student-courses/student-courses.module */ "./src/app/institute/branch/students-report/student-courses/student-courses.module.ts")).then((m) => m.StudentCoursesModule),
    },
    {
        path: '',
        redirectTo: 'manage',
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
];
let StudentsReportRoutingModule = /*@__PURE__*/ (() => {
    class StudentsReportRoutingModule {
    }
    StudentsReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentsReportRoutingModule });
    StudentsReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentsReportRoutingModule_Factory(t) { return new (t || StudentsReportRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return StudentsReportRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/students-report/students-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/institute/branch/students-report/students-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StudentsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsReportComponent", function() { return StudentsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let StudentsReportComponent = /*@__PURE__*/ (() => {
    class StudentsReportComponent {
        constructor() {
        }
        ngOnInit() { }
    }
    StudentsReportComponent.ɵfac = function StudentsReportComponent_Factory(t) { return new (t || StudentsReportComponent)(); };
    StudentsReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentsReportComponent, selectors: [["ngx-students-report"]], decls: 1, vars: 0, template: function StudentsReportComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return StudentsReportComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/students-report/students-report.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/institute/branch/students-report/students-report.module.ts ***!
  \****************************************************************************/
/*! exports provided: StudentsReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsReportModule", function() { return StudentsReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./students-report-routing.module */ "./src/app/institute/branch/students-report/students-report-routing.module.ts");
/* harmony import */ var _students_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students-report.component */ "./src/app/institute/branch/students-report/students-report.component.ts");





let StudentsReportModule = /*@__PURE__*/ (() => {
    class StudentsReportModule {
    }
    StudentsReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentsReportModule });
    StudentsReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentsReportModule_Factory(t) { return new (t || StudentsReportModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsReportRoutingModule"]]] });
    return StudentsReportModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentsReportModule, { declarations: [_students_report_component__WEBPACK_IMPORTED_MODULE_3__["StudentsReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _students_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentsReportRoutingModule"]] }); })();


/***/ })

}]);