(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[170],{

/***/ "./src/app/institute/branch/lecture/study-material/study-material-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/study-material-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: StudyMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialRoutingModule", function() { return StudyMaterialRoutingModule; });
/* harmony import */ var _study_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./study-material.component */ "./src/app/institute/branch/lecture/study-material/study-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _study_material_component__WEBPACK_IMPORTED_MODULE_0__["StudyMaterialComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(169)]).then(__webpack_require__.bind(null, /*! ./manage-study-material/manage-study-material.module */ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.module.ts")).then((m) => m.ManageStudyMaterialModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./add-study-material/add-study-material.module */ "./src/app/institute/branch/lecture/study-material/add-study-material/add-study-material.module.ts")).then((m) => m.AddStudyMaterialModule),
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, /*! ./add-study-material/add-study-material.module */ "./src/app/institute/branch/lecture/study-material/add-study-material/add-study-material.module.ts")).then((m) => m.AddStudyMaterialModule),
            },
            {
                path: 'view',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e("common"), __webpack_require__.e(171)]).then(__webpack_require__.bind(null, /*! ./view-study-material/view-study-material.module */ "./src/app/institute/branch/lecture/study-material/view-study-material/view-study-material.module.ts")).then((m) => m.ViewStudyMaterialModule),
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
            { path: '**', redirectTo: 'page-not-found' },
        ],
    },
];
class StudyMaterialRoutingModule {
}
StudyMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudyMaterialRoutingModule });
StudyMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StudyMaterialRoutingModule_Factory(t) { return new (t || StudyMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudyMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudyMaterialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/study-material/study-material.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/study-material.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudyMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialComponent", function() { return StudyMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class StudyMaterialComponent {
    constructor() {
    }
    ngOnInit() { }
}
StudyMaterialComponent.ɵfac = function StudyMaterialComponent_Factory(t) { return new (t || StudyMaterialComponent)(); };
StudyMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudyMaterialComponent, selectors: [["ngx-study-material"]], decls: 1, vars: 0, template: function StudyMaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudyMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-study-material',
                templateUrl: './study-material.component.html',
                styleUrls: ['./study-material.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/study-material/study-material.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/study-material.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StudyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialModule", function() { return StudyMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _study_material_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./study-material-routing.module */ "./src/app/institute/branch/lecture/study-material/study-material-routing.module.ts");
/* harmony import */ var _study_material_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./study-material.component */ "./src/app/institute/branch/lecture/study-material/study-material.component.ts");





class StudyMaterialModule {
}
StudyMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudyMaterialModule });
StudyMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudyMaterialModule_Factory(t) { return new (t || StudyMaterialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _study_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudyMaterialRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudyMaterialModule, { declarations: [_study_material_component__WEBPACK_IMPORTED_MODULE_3__["StudyMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _study_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudyMaterialRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudyMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_study_material_component__WEBPACK_IMPORTED_MODULE_3__["StudyMaterialComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _study_material_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudyMaterialRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);