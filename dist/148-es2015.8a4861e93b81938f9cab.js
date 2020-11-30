(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[148],{

/***/ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ManageEmployeeSalaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEmployeeSalaryRoutingModule", function() { return ManageEmployeeSalaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-employee-salary.component */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts");





const routes = [
    {
        path: '',
        component: _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryComponent"],
        children: [
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(147)]).then(__webpack_require__.bind(null, /*! ./add-salary/add-salary.module */ "./src/app/institute/branch/employee/manage-employee-salary/add-salary/add-salary.module.ts")).then((m) => m.AddSalaryModule),
            },
            {
                path: 'view',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(150)]).then(__webpack_require__.bind(null, /*! ./view-salary-receipt/view-salary-receipt.module */ "./src/app/institute/branch/employee/manage-employee-salary/view-salary-receipt/view-salary-receipt.module.ts")).then((m) => m.ViewSalaryReceiptModule),
            },
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(149)]).then(__webpack_require__.bind(null, /*! ./manage-salary/manage-salary.module */ "./src/app/institute/branch/employee/manage-employee-salary/manage-salary/manage-salary.module.ts")).then((m) => m.ManageSalaryModule),
            },
            // {
            //   path: '',
            //   redirectTo: 'manage?type=active',
            //   pathMatch: 'full',
            // },
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
class ManageEmployeeSalaryRoutingModule {
}
ManageEmployeeSalaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageEmployeeSalaryRoutingModule });
ManageEmployeeSalaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageEmployeeSalaryRoutingModule_Factory(t) { return new (t || ManageEmployeeSalaryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageEmployeeSalaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageEmployeeSalaryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function ManageEmployeeSalaryComponent_router_outlet_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
} }
class ManageEmployeeSalaryComponent {
    constructor(employeeService, branchEmployeeService, branchService, router, route, toastrService) {
        this.employeeService = employeeService;
        this.branchEmployeeService = branchEmployeeService;
        this.branchService = branchService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.loading = true;
        const branchId = this.branchService.getBranchId();
        if (!branchId) {
            this.back();
            return;
        }
        this.branchEmployeeService
            .getBranchEmployeeData()
            .subscribe((branchEmployee) => {
            if (!branchEmployee) {
                this.showToastr('top-right', 'danger', 'Branch Employee Not Found');
                this.back();
                return;
            }
            this.employeeService.getEmployeeByIMSId(branchEmployee.employee).subscribe((employee) => {
                this.employeeService.setEmployeeData(employee);
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.back();
            });
        });
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    back() {
        const type = this.employeeService.getEmployeeType();
        this.router.navigate(['../'], { relativeTo: this.route, queryParams: { type } });
    }
    ngOnDestroy() {
        this.employeeService.deleteEmployeeData();
    }
}
ManageEmployeeSalaryComponent.ɵfac = function ManageEmployeeSalaryComponent_Factory(t) { return new (t || ManageEmployeeSalaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_3__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"])); };
ManageEmployeeSalaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageEmployeeSalaryComponent, selectors: [["ngx-manage-employee-salary"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ManageEmployeeSalaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ManageEmployeeSalaryComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ManageEmployeeSalaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-manage-employee-salary',
                templateUrl: './manage-employee-salary.component.html',
                styleUrls: ['./manage-employee-salary.component.scss'],
            }]
    }], function () { return [{ type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] }, { type: _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_3__["BranchEmployeeService"] }, { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-employee-salary-routing.module */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary-routing.module.ts");
/* harmony import */ var _manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-employee-salary.component */ "./src/app/institute/branch/employee/manage-employee-salary/manage-employee-salary.component.ts");





class ManageEmployeeSalaryModule {
}
ManageEmployeeSalaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManageEmployeeSalaryModule });
ManageEmployeeSalaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManageEmployeeSalaryModule_Factory(t) { return new (t || ManageEmployeeSalaryModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageEmployeeSalaryModule, { declarations: [_manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeSalaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageEmployeeSalaryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_manage_employee_salary_component__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeSalaryComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_employee_salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageEmployeeSalaryRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);