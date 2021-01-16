(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./src/app/institute/branch/exam/exam-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/institute/branch/exam/exam-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ExamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamRoutingModule", function() { return ExamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam.component */ "./src/app/institute/branch/exam/exam.component.ts");





const routes = [
    {
        path: '',
        component: _exam_component__WEBPACK_IMPORTED_MODULE_2__["ExamComponent"],
        children: [
            {
                path: 'test',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(171)]).then(__webpack_require__.bind(null, /*! ./test/test.module */ "./src/app/institute/branch/exam/test/test.module.ts")).then((m) => m.TestModule),
            },
            {
                path: 'online-test',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(166)]).then(__webpack_require__.bind(null, /*! ./online-test/online-test.module */ "./src/app/institute/branch/exam/online-test/online-test.module.ts")).then((m) => m.OnlineTestModule),
            },
            {
                path: '',
                redirectTo: 'test',
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
let ExamRoutingModule = /*@__PURE__*/ (() => {
    class ExamRoutingModule {
    }
    ExamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamRoutingModule });
    ExamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamRoutingModule_Factory(t) { return new (t || ExamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ExamRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/exam.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/institute/branch/exam/exam.component.ts ***!
  \*********************************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ExamComponent = /*@__PURE__*/ (() => {
    class ExamComponent {
        constructor() { }
        ngOnInit() { }
    }
    ExamComponent.ɵfac = function ExamComponent_Factory(t) { return new (t || ExamComponent)(); };
    ExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamComponent, selectors: [["ngx-exam"]], decls: 1, vars: 0, template: function ExamComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
    return ExamComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/exam/exam.module.ts":
/*!******************************************************!*\
  !*** ./src/app/institute/branch/exam/exam.module.ts ***!
  \******************************************************/
/*! exports provided: ExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamModule", function() { return ExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _exam_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exam-routing.module */ "./src/app/institute/branch/exam/exam-routing.module.ts");
/* harmony import */ var _exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exam.component */ "./src/app/institute/branch/exam/exam.component.ts");





let ExamModule = /*@__PURE__*/ (() => {
    class ExamModule {
    }
    ExamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamModule });
    ExamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamModule_Factory(t) { return new (t || ExamModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExamRoutingModule"]]] });
    return ExamModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamModule, { declarations: [_exam_component__WEBPACK_IMPORTED_MODULE_3__["ExamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExamRoutingModule"]] }); })();


/***/ })

}]);