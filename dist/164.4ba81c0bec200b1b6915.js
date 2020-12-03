(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[164],{

/***/ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ManageEmployeeSalaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeeSalaryRoutingModule", function() { return ManageEmployeeSalaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-employee-salary.component */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts");





var routes = [
    {
        path: '',
        component: _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryComponent"],
        children: [
            {
                path: 'add',
                loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(163)]).then(__webpack_require__.bind(null, /*! ./add-salary/add-salary.module */ "./src/app/institute/branch/employee/manage-employee-salary/add-salary/add-salary.module.ts")).then(function (m) { return m.AddSalaryModule; }); },
            },
            {
                path: 'view',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(166)]).then(__webpack_require__.bind(null, /*! ./view-salary-receipt/view-salary-receipt.module */ "./src/app/institute/branch/employee/manage-employee-salary/view-salary-receipt/view-salary-receipt.module.ts")).then(function (m) { return m.ViewSalaryReceiptModule; });
                },
            },
            {
                path: '',
                loadChildren: function () {
                    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(165)]).then(__webpack_require__.bind(null, /*! ./manage-salary/manage-salary.module */ "./src/app/institute/branch/employee/manage-employee-salary/manage-salary/manage-salary.module.ts")).then(function (m) { return m.ManageSalaryModule; });
                },
            },
            // {
            //   path: '',
            //   redirectTo: 'manage?type=active',
            //   pathMatch: 'full',
            // },
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
var ManageEmployeeSalaryRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageEmployeeSalaryRoutingModule() {
    }
    ManageEmployeeSalaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageEmployeeSalaryRoutingModule });
    ManageEmployeeSalaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageEmployeeSalaryRoutingModule_Factory(t) { return new (t || ManageEmployeeSalaryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ManageEmployeeSalaryRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageEmployeeSalaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ManageEmployeeSalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeeSalaryComponent", function() { return ManageEmployeeSalaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








function ManageEmployeeSalaryComponent_router_outlet_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
}
var ManageEmployeeSalaryComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageEmployeeSalaryComponent(employeeService, branchEmployeeService, branchService, router, route, toastrService) {
        this.employeeService = employeeService;
        this.branchEmployeeService = branchEmployeeService;
        this.branchService = branchService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
    }
    ManageEmployeeSalaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var branchId = this.branchService.getBranchId();
        if (!branchId) {
            this.back();
            return;
        }
        this.branchEmployeeService
            .getBranchEmployeeData()
            .subscribe(function (branchEmployee) {
            if (!branchEmployee) {
                _this.showToastr('top-right', 'danger', 'Branch Employee Not Found');
                _this.back();
                return;
            }
            _this.employeeService.getEmployeeByIMSId(branchEmployee.employee).subscribe(function (employee) {
                _this.employeeService.setEmployeeData(employee);
                _this.loading = false;
            }, function (err) {
                _this.showToastr('top-right', 'danger', err);
                _this.back();
            });
        });
    };
    ManageEmployeeSalaryComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageEmployeeSalaryComponent.prototype.back = function () {
        var type = this.employeeService.getEmployeeType();
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type: type } });
    };
    ManageEmployeeSalaryComponent.prototype.ngOnDestroy = function () {
        this.employeeService.deleteEmployeeData();
    };
    ManageEmployeeSalaryComponent.ɵfac = function ManageEmployeeSalaryComponent_Factory(t) { return new (t || ManageEmployeeSalaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"])); };
    ManageEmployeeSalaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageEmployeeSalaryComponent, selectors: [["ngx-manage-employee-salary"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ManageEmployeeSalaryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManageEmployeeSalaryComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [""] });
    return ManageEmployeeSalaryComponent;
}());



/***/ }),

/***/ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManageEmployeeSalaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeeSalaryModule", function() { return ManageEmployeeSalaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-employee-salary-routing.module */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts");
/* harmony import */ var _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-employee-salary.component */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts");





var ManageEmployeeSalaryModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageEmployeeSalaryModule() {
    }
    ManageEmployeeSalaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageEmployeeSalaryModule });
    ManageEmployeeSalaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageEmployeeSalaryModule_Factory(t) { return new (t || ManageEmployeeSalaryModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryRoutingModule"]]] });
    return ManageEmployeeSalaryModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageEmployeeSalaryModule, { declarations: [_manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeSalaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryRoutingModule"]] }); })();


/***/ })

}]);