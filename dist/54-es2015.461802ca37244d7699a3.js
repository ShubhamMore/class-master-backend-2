(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./src/app/institute/branch/branch-header/branch-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/institute/branch/branch-header/branch-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: BranchHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchHeaderComponent", function() { return BranchHeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");






class BranchHeaderComponent {
    constructor(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.branchService.getBranch(this.branchId).subscribe((branch) => {
            this.branch = branch;
            this.branchService.setBranchData(branch);
            this.loading = false;
        }, (err) => {
            // this.router.navigate(['../page-not-found'], { relativeTo: this.route });
        });
    }
}
BranchHeaderComponent.ɵfac = function BranchHeaderComponent_Factory(t) { return new (t || BranchHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
BranchHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BranchHeaderComponent, selectors: [["ngx-branch-header"]], decls: 0, vars: 0, template: function BranchHeaderComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BranchHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-branch-header',
                templateUrl: './branch-header.component.html',
                styleUrls: ['./branch-header.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/branch-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/institute/branch/branch-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BranchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchRoutingModule", function() { return BranchRoutingModule; });
/* harmony import */ var _branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch.component */ "./src/app/institute/branch/branch.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    {
        path: '',
        component: _branch_component__WEBPACK_IMPORTED_MODULE_0__["BranchComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e("common"), __webpack_require__.e(145)]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/institute/branch/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule),
            },
            {
                path: 'manage-branch',
                loadChildren: () => __webpack_require__.e(/*! import() */ 183).then(__webpack_require__.bind(null, /*! ./manage-branch/manage-branch.module */ "./src/app/institute/branch/manage-branch/manage-branch.module.ts")).then((m) => m.ManageBranchModule),
            },
            {
                path: 'schedule',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(189)]).then(__webpack_require__.bind(null, /*! ./schedule/schedule.module */ "./src/app/institute/branch/schedule/schedule.module.ts")).then((m) => m.ScheduleModule),
            },
            {
                path: 'lecture',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(167)]).then(__webpack_require__.bind(null, /*! ./lecture/lecture.module */ "./src/app/institute/branch/lecture/lecture.module.ts")).then((m) => m.LectureModule),
            },
            {
                path: 'assignment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(137)]).then(__webpack_require__.bind(null, /*! ./assignment/assignment.module */ "./src/app/institute/branch/assignment/assignment.module.ts")).then((m) => m.AssignmentModule),
            },
            {
                path: 'lead',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(163)]).then(__webpack_require__.bind(null, /*! ./lead/lead.module */ "./src/app/institute/branch/lead/lead.module.ts")).then((m) => m.LeadModule),
            },
            {
                path: 'exam',
                loadChildren: () => __webpack_require__.e(/*! import() */ 152).then(__webpack_require__.bind(null, /*! ./exam/exam.module */ "./src/app/institute/branch/exam/exam.module.ts")).then((m) => m.ExamModule),
            },
            {
                path: 'budget',
                loadChildren: () => __webpack_require__.e(/*! import() */ 142).then(__webpack_require__.bind(null, /*! ./budget/budget.module */ "./src/app/institute/branch/budget/budget.module.ts")).then((m) => m.BudgetModule),
            },
            {
                path: 'student',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(198)]).then(__webpack_require__.bind(null, /*! ./student/student.module */ "./src/app/institute/branch/student/student.module.ts")).then((m) => m.StudentModule),
            },
            {
                path: 'students-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ 204).then(__webpack_require__.bind(null, /*! ./students-report/students-report.module */ "./src/app/institute/branch/students-report/students-report.module.ts")).then((m) => m.StudentsReportModule),
            },
            {
                path: 'employee',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(146)]).then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/institute/branch/employee/employee.module.ts")).then((m) => m.EmployeeModule),
            },
            {
                path: 'leave',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(57)]).then(__webpack_require__.bind(null, /*! ./leave/leave.module */ "./src/app/institute/branch/leave/leave.module.ts")).then((m) => m.LeaveModule),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
            },
            {
                path: '**',
                redirectTo: 'page-not-found',
                pathMatch: 'full',
            },
        ],
    },
];
class BranchRoutingModule {
}
BranchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BranchRoutingModule });
BranchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BranchRoutingModule_Factory(t) { return new (t || BranchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BranchRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/branch.component.ts":
/*!******************************************************!*\
  !*** ./src/app/institute/branch/branch.component.ts ***!
  \******************************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-header/branch-header.component */ "./src/app/institute/branch/branch-header/branch-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function BranchComponent_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
} }
class BranchComponent {
    constructor(branchService, toastrService, router, route) {
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.branchService.checkBranchStatus(this.branchId).subscribe((branchStatus) => {
            if (branchStatus.activated) {
                this.loading = false;
            }
            else {
                this.showToastr('top-right', 'danger', 'Please Activate Branch');
                this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            }
        }, (error) => {
            this.showToastr('top-right', 'danger', error);
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
        });
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    ngOnDestroy() {
        this.branchService.deleteBranchId();
        this.branchService.deleteBranchData();
    }
}
BranchComponent.ɵfac = function BranchComponent_Factory(t) { return new (t || BranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BranchComponent, selectors: [["ngx-branch"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function BranchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-branch-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BranchComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_4__["BranchHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BranchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-branch',
                templateUrl: './branch.component.html',
                styleUrls: ['./branch.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/branch.module.ts":
/*!***************************************************!*\
  !*** ./src/app/institute/branch/branch.module.ts ***!
  \***************************************************/
/*! exports provided: BranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchModule", function() { return BranchModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-routing.module */ "./src/app/institute/branch/branch-routing.module.ts");
/* harmony import */ var _branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch.component */ "./src/app/institute/branch/branch.component.ts");
/* harmony import */ var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch-header/branch-header.component */ "./src/app/institute/branch/branch-header/branch-header.component.ts");







class BranchModule {
}
BranchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BranchModule });
BranchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BranchModule_Factory(t) { return new (t || BranchModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BranchModule, { declarations: [_branch_component__WEBPACK_IMPORTED_MODULE_4__["BranchComponent"], _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__["BranchHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BranchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_branch_component__WEBPACK_IMPORTED_MODULE_4__["BranchComponent"], _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__["BranchHeaderComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]],
            }]
    }], null, null); })();


/***/ })

}]);