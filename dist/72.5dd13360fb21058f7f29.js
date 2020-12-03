(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./src/app/institute/branch/branch-header/branch-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/institute/branch/branch-header/branch-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: BranchHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchHeaderComponent", function() { return BranchHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var BranchHeaderComponent = /** @class */ /*@__PURE__*/ (function () {
    function BranchHeaderComponent(branchService, router, route) {
        this.branchService = branchService;
        this.router = router;
        this.route = route;
    }
    BranchHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.branchService.getBranch(this.branchId).subscribe(function (branch) {
            _this.branch = branch;
            _this.branchService.setBranchData(branch);
            _this.loading = false;
        }, function (err) {
            // this.router.navigate(['../page-not-found'], { relativeTo: this.route });
        });
    };
    BranchHeaderComponent.ɵfac = function BranchHeaderComponent_Factory(t) { return new (t || BranchHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    BranchHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BranchHeaderComponent, selectors: [["ngx-branch-header"]], decls: 0, vars: 0, template: function BranchHeaderComponent_Template(rf, ctx) { }, styles: [""] });
    return BranchHeaderComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");





var routes = [
    {
        path: '',
        component: _branch_component__WEBPACK_IMPORTED_MODULE_0__["BranchComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e("common"), __webpack_require__.e(161)]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/institute/branch/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); },
            },
            {
                path: 'manage-branch',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 191).then(__webpack_require__.bind(null, /*! ./manage-branch/manage-branch.module */ "./src/app/institute/branch/manage-branch/manage-branch.module.ts")).then(function (m) { return m.ManageBranchModule; });
                },
            },
            {
                path: 'schedule',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ 55).then(__webpack_require__.bind(null, /*! ./schedule/schedule.module */ "./src/app/institute/branch/schedule/schedule.module.ts")).then(function (m) { return m.ScheduleModule; }); },
            },
            {
                path: 'lecture',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(54)]).then(__webpack_require__.bind(null, /*! ./lecture/lecture.module */ "./src/app/institute/branch/lecture/lecture.module.ts")).then(function (m) { return m.LectureModule; }); },
            },
            {
                path: 'assignment',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e("common"), __webpack_require__.e(153)]).then(__webpack_require__.bind(null, /*! ./assignment/assignment.module */ "./src/app/institute/branch/assignment/assignment.module.ts")).then(function (m) { return m.AssignmentModule; });
                },
            },
            {
                path: 'lead',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, /*! ./lead/lead.module */ "./src/app/institute/branch/lead/lead.module.ts")).then(function (m) { return m.LeadModule; }); },
            },
            {
                path: 'exam',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ 168).then(__webpack_require__.bind(null, /*! ./exam/exam.module */ "./src/app/institute/branch/exam/exam.module.ts")).then(function (m) { return m.ExamModule; }); },
            },
            {
                path: 'budget',
                loadChildren: function () { return __webpack_require__.e(/*! import() */ 158).then(__webpack_require__.bind(null, /*! ./budget/budget.module */ "./src/app/institute/branch/budget/budget.module.ts")).then(function (m) { return m.BudgetModule; }); },
            },
            {
                path: 'student',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(204)]).then(__webpack_require__.bind(null, /*! ./student/student.module */ "./src/app/institute/branch/student/student.module.ts")).then(function (m) { return m.StudentModule; }); },
            },
            {
                path: 'students-report',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 209).then(__webpack_require__.bind(null, /*! ./students-report/students-report.module */ "./src/app/institute/branch/students-report/students-report.module.ts")).then(function (m) { return m.StudentsReportModule; });
                },
            },
            {
                path: 'employee',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(162)]).then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/institute/branch/employee/employee.module.ts")).then(function (m) { return m.EmployeeModule; }); },
            },
            {
                path: 'leave',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(76)]).then(__webpack_require__.bind(null, /*! ./leave/leave.module */ "./src/app/institute/branch/leave/leave.module.ts")).then(function (m) { return m.LeaveModule; }); },
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'page-not-found',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
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
var BranchRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function BranchRoutingModule() {
    }
    BranchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BranchRoutingModule });
    BranchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function BranchRoutingModule_Factory(t) { return new (t || BranchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return BranchRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BranchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-header/branch-header.component */ "./src/app/institute/branch/branch-header/branch-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







function BranchComponent_router_outlet_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
var BranchComponent = /** @class */ /*@__PURE__*/ (function () {
    function BranchComponent(branchService, toastrService, router, route) {
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
    }
    BranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.branchService.checkBranchStatus(this.branchId).subscribe(function (branchStatus) {
            if (branchStatus.activated) {
                _this.loading = false;
            }
            else {
                _this.showToastr('top-right', 'danger', 'Please Activate Branch');
                _this.router.navigate(['../page-not-found'], { relativeTo: _this.route });
            }
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
            _this.router.navigate(['../page-not-found'], { relativeTo: _this.route });
        });
    };
    BranchComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    BranchComponent.prototype.ngOnDestroy = function () {
        this.branchService.deleteBranchId();
        this.branchService.deleteBranchData();
    };
    BranchComponent.ɵfac = function BranchComponent_Factory(t) { return new (t || BranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    BranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BranchComponent, selectors: [["ngx-branch"]], decls: 2, vars: 1, consts: [[4, "ngIf"]], template: function BranchComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-branch-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BranchComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_4__["BranchHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [""] });
    return BranchComponent;
}());



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
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-routing.module */ "./src/app/institute/branch/branch-routing.module.ts");
/* harmony import */ var _branch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch.component */ "./src/app/institute/branch/branch.component.ts");
/* harmony import */ var _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch-header/branch-header.component */ "./src/app/institute/branch/branch-header/branch-header.component.ts");







var BranchModule = /** @class */ /*@__PURE__*/ (function () {
    function BranchModule() {
    }
    BranchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BranchModule });
    BranchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BranchModule_Factory(t) { return new (t || BranchModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]]] });
    return BranchModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BranchModule, { declarations: [_branch_component__WEBPACK_IMPORTED_MODULE_4__["BranchComponent"], _branch_header_branch_header_component__WEBPACK_IMPORTED_MODULE_5__["BranchHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BranchRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbUserModule"]] }); })();


/***/ })

}]);