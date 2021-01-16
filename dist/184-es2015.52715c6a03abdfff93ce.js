(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[184],{

/***/ "./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CourseMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialRoutingModule", function() { return CourseMaterialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-material.component */ "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts");





const routes = [
    {
        path: '',
        component: _course_material_component__WEBPACK_IMPORTED_MODULE_2__["CourseMaterialComponent"],
        children: [
            {
                path: 'manage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(185)]).then(__webpack_require__.bind(null, /*! ./manage-course-material/manage-course-material.module */ "./src/app/institute/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.module.ts")).then((m) => m.ManageCourseMaterialModule),
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(183)]).then(__webpack_require__.bind(null, /*! ./add-course-material/add-course-material.module */ "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.module.ts")).then((m) => m.AddCourseMaterialModule),
            },
            {
                path: 'view',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e("common"), __webpack_require__.e(186)]).then(__webpack_require__.bind(null, /*! ./view-course-material/view-course-material.module */ "./src/app/institute/branch/manage-branch/course/course-material/view-course-material/view-course-material.module.ts")).then((m) => m.ViewCourseMaterialModule),
            },
            {
                path: '',
                redirectTo: 'manage',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
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
    CourseMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseMaterialRoutingModule });
    CourseMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseMaterialRoutingModule_Factory(t) { return new (t || CourseMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CourseMaterialRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CourseMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialComponent", function() { return CourseMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CourseMaterialComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
let CourseMaterialComponent = /*@__PURE__*/ (() => {
    class CourseMaterialComponent {
        constructor(branchService, courseService, router, route) {
            this.branchService = branchService;
            this.courseService = courseService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            this.courseId = this.courseService.getCourseId();
            if (!this.branchId || !this.courseId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            const course = this.courseService.getCourseData();
            if (!course) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.loading = false;
        }
        ngOnDestroy() {
            this.courseService.deleteCourseId();
            this.courseService.deleteCourseData();
        }
    }
    CourseMaterialComponent.ɵfac = function CourseMaterialComponent_Factory(t) { return new (t || CourseMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    CourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseMaterialComponent, selectors: [["ngx-course-material"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function CourseMaterialComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CourseMaterialComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [""] });
    return CourseMaterialComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/course/course-material/course-material.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CourseMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialModule", function() { return CourseMaterialModule; });
/* harmony import */ var _course_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-material.component */ "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-material-routing.module */ "./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts");





let CourseMaterialModule = /*@__PURE__*/ (() => {
    class CourseMaterialModule {
    }
    CourseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CourseMaterialModule });
    CourseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CourseMaterialModule_Factory(t) { return new (t || CourseMaterialModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialRoutingModule"]]] });
    return CourseMaterialModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseMaterialModule, { declarations: [_course_material_component__WEBPACK_IMPORTED_MODULE_0__["CourseMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialRoutingModule"]] }); })();


/***/ })

}]);