(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./src/app/employee/branch/lead/lead-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee/branch/lead/lead-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LeadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadRoutingModule", function() { return LeadRoutingModule; });
/* harmony import */ var _lead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lead.component */ "./src/app/employee/branch/lead/lead.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _lead_component__WEBPACK_IMPORTED_MODULE_0__["LeadComponent"],
        children: [
            {
                path: 'add',
                loadChildren: () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./add-lead/add-lead.module */ "./src/app/employee/branch/lead/add-lead/add-lead.module.ts")).then((m) => m.AddLeadModule),
            },
            {
                path: 'edit',
                loadChildren: () => __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./add-lead/add-lead.module */ "./src/app/employee/branch/lead/add-lead/add-lead.module.ts")).then((m) => m.AddLeadModule),
            },
            {
                path: 'manage',
                loadChildren: () => __webpack_require__.e(/*! import() */ 91).then(__webpack_require__.bind(null, /*! ./manage-lead/manage-lead.module */ "./src/app/employee/branch/lead/manage-lead/manage-lead.module.ts")).then((m) => m.ManageLeadModule),
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
let LeadRoutingModule = /*@__PURE__*/ (() => {
    class LeadRoutingModule {
    }
    LeadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LeadRoutingModule });
    LeadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LeadRoutingModule_Factory(t) { return new (t || LeadRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return LeadRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LeadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/lead/lead.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employee/branch/lead/lead.component.ts ***!
  \********************************************************/
/*! exports provided: LeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadComponent", function() { return LeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_lead_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/lead.service */ "./src/app/services/lead.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LeadComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
let LeadComponent = /*@__PURE__*/ (() => {
    class LeadComponent {
        constructor(branchService, courseService, leadService, router, route) {
            this.branchService = branchService;
            this.courseService = courseService;
            this.leadService = leadService;
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
            this.courseService.getCourses(this.branchId, '').subscribe((courses) => {
                this.courseService.setCoursesData(courses);
                this.loading = false;
            }, (err) => {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            });
        }
        ngOnDestroy() {
            this.courseService.deleteCoursesData();
            this.leadService.deleteLeadType();
        }
    }
    LeadComponent.ɵfac = function LeadComponent_Factory(t) { return new (t || LeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_3__["LeadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
    LeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeadComponent, selectors: [["ngx-lead"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function LeadComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeadComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return LeadComponent;
})();


/***/ }),

/***/ "./src/app/employee/branch/lead/lead.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/branch/lead/lead.module.ts ***!
  \*****************************************************/
/*! exports provided: LeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadModule", function() { return LeadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lead_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lead-routing.module */ "./src/app/employee/branch/lead/lead-routing.module.ts");
/* harmony import */ var _lead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead.component */ "./src/app/employee/branch/lead/lead.component.ts");





let LeadModule = /*@__PURE__*/ (() => {
    class LeadModule {
    }
    LeadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LeadModule });
    LeadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LeadModule_Factory(t) { return new (t || LeadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lead_routing_module__WEBPACK_IMPORTED_MODULE_2__["LeadRoutingModule"]]] });
    return LeadModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LeadModule, { declarations: [_lead_component__WEBPACK_IMPORTED_MODULE_3__["LeadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lead_routing_module__WEBPACK_IMPORTED_MODULE_2__["LeadRoutingModule"]] }); })();


/***/ })

}]);