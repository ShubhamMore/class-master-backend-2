(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/app/institute/branch/employee/add-employee/add-employee-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/institute/branch/employee/add-employee/add-employee-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddEmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeRoutingModule", function() { return AddEmployeeRoutingModule; });
/* harmony import */ var _add_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-employee.component */ "./src/app/institute/branch/employee/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _add_employee_component__WEBPACK_IMPORTED_MODULE_0__["AddEmployeeComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
let AddEmployeeRoutingModule = /*@__PURE__*/ (() => {
    class AddEmployeeRoutingModule {
    }
    AddEmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddEmployeeRoutingModule });
    AddEmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddEmployeeRoutingModule_Factory(t) { return new (t || AddEmployeeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AddEmployeeRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddEmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/employee/add-employee/add-employee.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/institute/branch/employee/add-employee/add-employee.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/shared-services/user.service */ "./src/app/services/shared-services/user.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../services/shared-services/encrypt.service */ "./src/app/services/shared-services/encrypt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = ["stepper"];
function AddEmployeeComponent_div_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function AddEmployeeComponent_div_12_Template_nb_checkbox_checkedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.alreadyRegister($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Already Registered Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.alreadyRegisteredUser);
    }
}
function AddEmployeeComponent_div_13_button_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_div_13_ng_container_8_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Employee Id is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_div_13_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_div_13_ng_container_8_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.employeeSearchForm.get("employeeId").errors == null ? null : ctx_r11.employeeSearchForm.get("employeeId").errors.required);
    }
}
function AddEmployeeComponent_div_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddEmployeeComponent_div_13_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.searchEmployee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Employee Id:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddEmployeeComponent_div_13_button_7_Template, 2, 0, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddEmployeeComponent_div_13_ng_container_8_Template, 2, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.employeeSearchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r2.employeeSearchForm.get("employeeId").touched ? ctx_r2.employeeSearchForm.get("employeeId").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.employeeSearchForm.get("employeeId").invalid && ctx_r2.employeeSearchForm.get("employeeId").touched);
    }
}
function AddEmployeeComponent_form_14_ng_container_7_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Employee name is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_7_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Employee Name should contain minimum 3 characters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_form_14_ng_container_7_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddEmployeeComponent_form_14_ng_container_7_p_2_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.employeeForm.get("name").errors == null ? null : ctx_r15.employeeForm.get("name").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.employeeForm.get("name").errors == null ? null : ctx_r15.employeeForm.get("name").errors.minlength);
    }
}
function AddEmployeeComponent_form_14_ng_container_13_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_13_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email should be the real one! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_13_p_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Already registered, Please try another Email! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_form_14_ng_container_13_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddEmployeeComponent_form_14_ng_container_13_p_2_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddEmployeeComponent_form_14_ng_container_13_p_3_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.employeeForm.get("email").errors == null ? null : ctx_r16.employeeForm.get("email").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.employeeForm.get("email").errors == null ? null : ctx_r16.employeeForm.get("email").errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.userExist);
    }
}
function AddEmployeeComponent_form_14_ng_container_19_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_19_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone should contain 10 digits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_form_14_ng_container_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_form_14_ng_container_19_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddEmployeeComponent_form_14_ng_container_19_p_2_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.employeeForm.get("phone").errors == null ? null : ctx_r17.employeeForm.get("phone").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r17.employeeForm.get("phone").errors == null ? null : ctx_r17.employeeForm.get("phone").errors.minlength) || (ctx_r17.employeeForm.get("phone").errors == null ? null : ctx_r17.employeeForm.get("phone").errors.maxlength) || (ctx_r17.employeeForm.get("phone").errors == null ? null : ctx_r17.employeeForm.get("phone").errors.min) || (ctx_r17.employeeForm.get("phone").errors == null ? null : ctx_r17.employeeForm.get("phone").errors.max));
    }
}
function AddEmployeeComponent_form_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddEmployeeComponent_form_14_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.employeeFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Employee Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddEmployeeComponent_form_14_ng_container_7_Template, 3, 2, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddEmployeeComponent_form_14_Template_input_input_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.checkUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddEmployeeComponent_form_14_ng_container_13_Template, 4, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddEmployeeComponent_form_14_ng_container_19_Template, 3, 2, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Birth Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Qualification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "textarea", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "nb-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.employeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.employeeForm.get("name").touched ? ctx_r3.employeeForm.get("name").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.employeeForm.get("name").invalid && ctx_r3.employeeForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.employeeForm.get("email").touched ? ctx_r3.employeeForm.get("email").invalid || ctx_r3.userExist ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.employeeForm.get("email").invalid || ctx_r3.userExist) && ctx_r3.employeeForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.employeeForm.get("phone").touched ? ctx_r3.employeeForm.get("phone").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.employeeForm.get("phone").invalid && ctx_r3.employeeForm.get("phone").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r3.dateService.getDateString());
    }
}
function AddEmployeeComponent_nb_option_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const role_r28 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", role_r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, role_r28));
    }
}
function AddEmployeeComponent_ng_container_26_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Employee Role is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_ng_container_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_ng_container_26_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.branchEmployeeForm.get("role").errors == null ? null : ctx_r5.branchEmployeeForm.get("role").errors.required);
    }
}
function AddEmployeeComponent_ng_container_32_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Basic Salary is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_ng_container_32_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Basic Salary should be more than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function AddEmployeeComponent_ng_container_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddEmployeeComponent_ng_container_32_p_1_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddEmployeeComponent_ng_container_32_p_2_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.branchEmployeeForm.get("basicSalary").errors == null ? null : ctx_r6.branchEmployeeForm.get("basicSalary").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.branchEmployeeForm.get("basicSalary").errors == null ? null : ctx_r6.branchEmployeeForm.get("basicSalary").errors.min);
    }
}
function AddEmployeeComponent_tr_55_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IMS Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.employeeSearchForm.value.employeeId);
    }
}
let AddEmployeeComponent = /*@__PURE__*/ (() => {
    class AddEmployeeComponent {
        constructor(branchService, employeeService, roleService, dateService, userService, toastrService, branchEmployeeService, encryptService, router, route) {
            this.branchService = branchService;
            this.employeeService = employeeService;
            this.roleService = roleService;
            this.dateService = dateService;
            this.userService = userService;
            this.toastrService = toastrService;
            this.branchEmployeeService = branchEmployeeService;
            this.encryptService = encryptService;
            this.router = router;
            this.route = route;
            // route.queryParams.subscribe((param: Params) => {
            //   // put the code from `ngOnInit` here
            //   this.ngOnInit();
            // });
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.employeeId = this.employeeService.getEmployeeId();
            this.branchEmployeeId = this.branchEmployeeService.getBranchEmployeeId();
            let mode;
            this.route.queryParams.subscribe((param) => {
                mode = param.mode;
            });
            if (mode && mode !== 'edit') {
                this.showToastr('top-right', 'danger', 'Invalid Route');
                this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                return;
            }
            else if (mode && !this.employeeId && !this.branchEmployeeId) {
                this.showToastr('top-right', 'danger', 'Employee Not Found');
                this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                return;
            }
            this.roles = this.roleService.getEmployeeRoles();
            this.alreadyRegisteredUser = false;
            this.employeeSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            });
            this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)] }),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email] }),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999),
                    ],
                }),
                birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [],
                }),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [] }),
                qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [] }),
            });
            this.branchEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
                basicSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                    validators: [],
                }),
            });
            if (mode && this.employeeId && this.branchEmployeeId) {
                this.branchEmployeeService
                    .getBranchEmployeeForEditing(this.branchEmployeeId, this.employeeId)
                    .subscribe((res) => {
                    this.employee = res.employee;
                    this.branchEmployee = res.branchEmployee;
                    this.userExist = false;
                    this.employeeSearchForm.patchValue({
                        employeeId: this.employee.imsMasterId,
                    });
                    this.employeeForm.patchValue({
                        name: this.employee.name,
                        email: this.employee.email,
                        phone: this.employee.phone,
                        birthDate: this.employee.birthDate,
                        address: this.employee.address,
                    });
                    this.disableEmployeeDetails();
                    this.branchEmployeeForm.patchValue({
                        role: this.branchEmployee.role,
                        basicSalary: this.branchEmployee.basicSalary,
                        description: this.branchEmployee.description,
                    });
                    this.loading = false;
                }, (err) => {
                    this.showToastr('top-right', 'danger', err);
                    this.back();
                });
            }
            else {
                this.loading = false;
            }
        }
        checkUser() {
            if (this.employeeForm.get('email').valid && !this.employee) {
                this.userService.checkUser(this.employeeForm.value.email).subscribe((res) => {
                    this.userExist = res.exist;
                }, (error) => { });
            }
        }
        alreadyRegister(alreadyRegisteredUser) {
            this.alreadyRegisteredUser = alreadyRegisteredUser;
        }
        searchEmployee() {
            this.employeeSearchForm.markAllAsTouched();
            if (this.employeeSearchForm.invalid) {
                this.showToastr('top-right', 'danger', 'Enter Employee Id');
                return;
            }
            this.employeeId = this.employeeSearchForm.value.employeeId;
            this.loading = true;
            this.employeeService.searchEmployee(this.employeeId).subscribe((employee) => {
                this.employee = employee;
                this.employeeId = employee.imsMasterId;
                this.userExist = false;
                this.alreadyRegisteredUser = false;
                this.employeeSearchForm.patchValue({
                    employeeId: this.employee.imsMasterId,
                });
                this.employeeForm.patchValue({
                    name: this.employee.name,
                    email: this.employee.email,
                    phone: this.employee.phone,
                    birthDate: this.employee.birthDate,
                    address: this.employee.address,
                });
                this.disableEmployeeDetails();
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.employeeId = null;
                this.loading = false;
            });
        }
        enableEmployeeDetails() {
            this.employeeForm.get('name').enable();
            this.employeeForm.get('email').enable();
            this.employeeForm.get('phone').enable();
            this.employeeForm.get('birthDate').enable();
            this.employeeForm.get('address').enable();
            this.employeeForm.get('qualification').enable();
            this.employeeSearchForm.get('employeeId').enable();
        }
        disableEmployeeDetails() {
            this.employeeForm.get('name').disable();
            this.employeeForm.get('email').disable();
            this.employeeForm.get('phone').disable();
            this.employeeForm.get('birthDate').disable();
            this.employeeForm.get('address').disable();
            this.employeeForm.get('qualification').disable();
            this.employeeSearchForm.get('employeeId').disable();
        }
        previousStep() {
            this.stepper.previous();
            if (this.employee) {
                this.disableEmployeeDetails();
            }
        }
        employeeFormSubmit() {
            this.employeeForm.markAllAsTouched();
            if (this.employeeForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Details are Required');
                return;
            }
            else if (this.userExist) {
                this.showToastr('top-right', 'danger', 'User with this email address is already Exist');
                return;
            }
            if (this.employee) {
                this.enableEmployeeDetails();
            }
            this.stepper.next();
        }
        branchEmployeeFormSubmit() {
            this.branchEmployeeForm.markAllAsTouched();
            if (this.employeeForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Branch Details are Required');
                return;
            }
            this.stepper.next();
        }
        saveEmployee() {
            this.employeeForm.markAllAsTouched();
            this.branchEmployeeForm.markAllAsTouched();
            if (this.employeeForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Details are Required');
                return;
            }
            else if (this.employeeForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Branch Details are Required');
                return;
            }
            this.loading = true;
            if (!this.employeeId && !this.branchEmployeeId) {
                const newEmployee = this.employeeForm.value;
                newEmployee.password = this.encryptService.encrypt(newEmployee.phone, _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].encKey);
                const newBranchEmployee = this.branchEmployeeForm.value;
                newBranchEmployee.branch = this.branchId;
                this.employeeService.addEmployee(newEmployee, newBranchEmployee).subscribe((res) => {
                    this.showToastr('top-right', 'success', 'New Employee Added Successfully');
                    this.back();
                    this.loading = false;
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            }
            else if (this.employeeId && !this.branchEmployeeId) {
                const newBranchEmployee = this.branchEmployeeForm.value;
                newBranchEmployee.branch = this.branchId;
                newBranchEmployee.employee = this.employeeId;
                this.branchEmployeeService.newBranchEmployee(newBranchEmployee).subscribe((res) => {
                    this.showToastr('top-right', 'success', 'New Branch Employee added Successfully');
                    this.back();
                    this.loading = false;
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            }
            else if (this.employeeId && this.branchEmployeeId) {
                const branchEmployee = this.branchEmployeeForm.value;
                branchEmployee._id = this.branchEmployeeId;
                this.branchEmployeeService.editBranchEmployee(branchEmployee).subscribe((res) => {
                    this.showToastr('top-right', 'success', 'Employee Updated Successfully');
                    this.back();
                    this.loading = false;
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            }
            else {
                this.showToastr('top-right', 'danger', 'Invalid data');
                this.loading = false;
            }
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
            this.employeeService.deleteEmployeeId();
            this.branchEmployeeService.deleteBranchEmployeeId();
        }
    }
    AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) { return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_9__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_10__["EncryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"])); };
    AddEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddEmployeeComponent, selectors: [["ngx-add-employee"]], viewQuery: function AddEmployeeComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
        }, decls: 108, vars: 27, consts: [["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-6 col-sm-8", 4, "ngIf"], ["class", "", 3, "formGroup", "submit", 4, "ngIf"], ["label", "Enrollment Details", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-employee-role", 1, "label"], ["id", "input-role", "name", "role", "formControlName", "role", "placeholder", "Select Role", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "input-basic-salary", 1, "label"], ["type", "number", "nbInput", "", "id", "input-basic-salary", "name", "basicSalary", "formControlName", "basicSalary", "placeholder", "basicSalary", "min", "0", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description (Optional)", "fullWidth", ""], [1, "col-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-6", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], ["nbButton", "", "size", "small", 3, "click"], ["id", "input-already-registered", "name", "alreadyRegistered", 3, "checked", "checkedChange"], [1, "col-md-6", "col-sm-8"], [1, "", 3, "formGroup", "submit"], ["for", "input-employee-employee-id", 1, "label"], ["type", "text", "nbInput", "", "id", "input-employee-id", "employeeId", "employeeId", "formControlName", "employeeId", "placeholder", "Employee Email or IMS Master Id", "fullWidth", "", 3, "status"], ["nbSuffix", "", "nbTooltip", "Fetch", "nbButton", "", "size", "small", "ghost", "", "type", "submit", 4, "ngIf"], ["nbSuffix", "", "nbTooltip", "Fetch", "nbButton", "", "size", "small", "ghost", "", "type", "submit"], ["icon", "arrow-circle-right-outline", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-employee-employee-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-employee-name", "name", "name", "formControlName", "name", "placeholder", "Employee Name", "minlength", "3", "maxlength", "30", "fullWidth", "", 3, "status"], ["for", "input-email", 1, "label"], ["type", "email", "nbInput", "", "id", "input-email", "name", "email", "formControlName", "email", "placeholder", "Email address", "fullWidth", "", 3, "status", "input"], ["for", "input-phone", 1, "label"], ["type", "number", "nbInput", "", "id", "input-phone", "name", "phone", "formControlName", "phone", "placeholder", "phone", "minlength", "10", "maxlength", "10", "min", "1000000000", "max", "9999999999", "fullWidth", "", 3, "status"], ["for", "input-birth-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-birth-date", "name", "birthDate", "formControlName", "birthDate", "placeholder", "Birth Date", "fullWidth", "", 3, "max"], ["for", "input-address", 1, "label"], ["type", "text", "nbInput", "", "id", "input-address", "name", "address", "formControlName", "address", "placeholder", "Address (Optional)", "fullWidth", ""], ["for", "input-qualification", 1, "label"], ["type", "text", "nbInput", "", "id", "input-qualification", "name", "qualification", "formControlName", "qualification", "placeholder", "Qualification (Optional)", "fullWidth", ""], [1, "col-md-12", "text-right"], [3, "value"]], template: function AddEmployeeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_2_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-stepper", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-step", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddEmployeeComponent_div_12_Template, 3, 1, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddEmployeeComponent_div_13_Template, 9, 4, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddEmployeeComponent_form_14_Template, 42, 8, "form", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nb-step", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddEmployeeComponent_Template_form_ngSubmit_16_listener() { return ctx.branchEmployeeFormSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Role:");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nb-select", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nb-option", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Select Role");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddEmployeeComponent_nb_option_25_Template, 3, 4, "nb-option", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddEmployeeComponent_ng_container_26_Template, 2, 1, "ng-container", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Basic Salary:");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddEmployeeComponent_ng_container_32_Template, 3, 2, "ng-container", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Description:");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "textarea", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_41_listener() { return ctx.previousStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "nb-icon", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "prev");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Next");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "nb-icon", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "nb-step", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "table", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, AddEmployeeComponent_tr_55_Template, 5, 1, "tr", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Employee Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Phone");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Address");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Qualification");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Role");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](86, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Basic Salary");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "button", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_100_listener() { return ctx.previousStep(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "nb-icon", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "prev");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "button", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_button_click_105_listener() { return ctx.saveEmployee(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx.employee ? "Add New" : "Edit" + " Employee " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 23, ctx.employee.name), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.employeeForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.employee);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alreadyRegisteredUser || ctx.employee);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.alreadyRegisteredUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.branchEmployeeForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.branchEmployeeForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.branchEmployeeForm.get("role").touched ? ctx.branchEmployeeForm.get("role").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.roles);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchEmployeeForm.get("role").invalid && ctx.branchEmployeeForm.get("role").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.branchEmployeeForm.get("basicSalary").touched ? ctx.branchEmployeeForm.get("basicSalary").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchEmployeeForm.get("basicSalary").invalid && ctx.branchEmployeeForm.get("basicSalary").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.employeeSearchForm.value.employeeId);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.employeeForm.value.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.employeeForm.value.email);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.employeeForm.value.phone);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.employeeForm.value.address);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.employeeForm.value.qualification);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](86, 25, ctx.branchEmployeeForm.value.role));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.branchEmployeeForm.value.basicSalary);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.branchEmployeeForm.value.description);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"]], styles: [""] });
    return AddEmployeeComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/employee/add-employee/add-employee.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/institute/branch/employee/add-employee/add-employee.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddEmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeModule", function() { return AddEmployeeModule; });
/* harmony import */ var _add_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-employee.component */ "./src/app/institute/branch/employee/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-employee-routing.module */ "./src/app/institute/branch/employee/add-employee/add-employee-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");







let AddEmployeeModule = /*@__PURE__*/ (() => {
    class AddEmployeeModule {
    }
    AddEmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddEmployeeModule });
    AddEmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddEmployeeModule_Factory(t) { return new (t || AddEmployeeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddEmployeeRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ]] });
    return AddEmployeeModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddEmployeeModule, { declarations: [_add_employee_component__WEBPACK_IMPORTED_MODULE_0__["AddEmployeeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddEmployeeRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] });
})();


/***/ })

}]);