(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78], {
    /***/
    "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary-routing.module.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AddSalaryRoutingModule */

    /***/
    function srcAppEmployeeBranchEmployeeManageEmployeeSalaryAddSalaryAddSalaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSalaryRoutingModule", function () {
        return AddSalaryRoutingModule;
      });
      /* harmony import */


      var _add_salary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-salary.component */
      "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _add_salary_component__WEBPACK_IMPORTED_MODULE_0__["AddSalaryComponent"]
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../../../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }];

      var AddSalaryRoutingModule = /*@__PURE__*/function () {
        var AddSalaryRoutingModule = function AddSalaryRoutingModule() {
          _classCallCheck(this, AddSalaryRoutingModule);
        };

        AddSalaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddSalaryRoutingModule
        });
        AddSalaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddSalaryRoutingModule_Factory(t) {
            return new (t || AddSalaryRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return AddSalaryRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddSalaryRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.component.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AddSalaryComponent */

    /***/
    function srcAppEmployeeBranchEmployeeManageEmployeeSalaryAddSalaryAddSalaryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSalaryComponent", function () {
        return AddSalaryComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_numberToWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../shared/numberToWords */
      "./src/app/shared/numberToWords.ts");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/employee.service */
      "./src/app/services/employee.service.ts");
      /* harmony import */


      var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/branch-employee.service */
      "./src/app/services/branch-employee.service.ts");
      /* harmony import */


      var _services_employee_salary_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../services/employee-salary.service */
      "./src/app/services/employee-salary.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["stepper"];

      function AddSalaryComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "IMS ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Role:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Basic Salary:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.imsMasterId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 6, ctx_r0.branchEmployee.role), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.branchEmployee.basicSalary, "/- ");
        }
      }

      function AddSalaryComponent_ng_container_20_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_20_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salaryForm.get("date").errors == null ? null : ctx_r2.salaryForm.get("date").errors.required);
        }
      }

      function AddSalaryComponent_nb_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", month_r20.monthNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](month_r20.month);
        }
      }

      function AddSalaryComponent_ng_container_27_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_27_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.salaryForm.get("month").errors == null ? null : ctx_r4.salaryForm.get("month").errors.required);
        }
      }

      function AddSalaryComponent_nb_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var year_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", year_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r22);
        }
      }

      function AddSalaryComponent_ng_container_34_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Year ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_34_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.salaryForm.get("year").errors == null ? null : ctx_r6.salaryForm.get("year").errors.required);
        }
      }

      function AddSalaryComponent_ng_container_40_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Basic Amount is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_40_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Basic Amount should be greater than 0! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_40_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddSalaryComponent_ng_container_40_p_2_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.salaryForm.get("basicAmount").errors == null ? null : ctx_r7.salaryForm.get("basicAmount").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.salaryForm.get("basicAmount").errors == null ? null : ctx_r7.salaryForm.get("basicAmount").errors.min);
        }
      }

      function AddSalaryComponent_ng_container_75_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_75_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Amount should be greater than 0! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_75_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddSalaryComponent_ng_container_75_p_2_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.ernDeductForm.get("amount").errors == null ? null : ctx_r8.ernDeductForm.get("amount").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.ernDeductForm.get("amount").errors == null ? null : ctx_r8.ernDeductForm.get("amount").errors.min);
        }
      }

      function AddSalaryComponent_div_87_tr_12_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_div_87_tr_12_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var i_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r32.deleteErnDeduct(true, i_r30);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_div_87_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddSalaryComponent_div_87_tr_12_button_8_Template, 2, 0, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var earning_r29 = ctx.$implicit;
          var i_r30 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r30 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](earning_r29.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](earning_r29.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r30 !== 0);
        }
      }

      function AddSalaryComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Earning");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddSalaryComponent_div_87_tr_12_Template, 9, 4, "tr", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.earnings);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.totalEarning());
        }
      }

      function AddSalaryComponent_div_94_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_div_94_tr_12_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var i_r37 = ctx.index;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r38.deleteErnDeduct(false, i_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nb-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deduction_r36 = ctx.$implicit;
          var i_r37 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r37 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deduction_r36.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deduction_r36.amount);
        }
      }

      function AddSalaryComponent_div_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Deduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddSalaryComponent_div_94_tr_12_Template, 10, 3, "tr", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.deductions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.totalDeduction());
        }
      }

      function AddSalaryComponent_ng_container_115_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Generated By is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_115_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.paymentDetailsForm.get("generatedBy").errors == null ? null : ctx_r11.paymentDetailsForm.get("generatedBy").errors.required);
        }
      }

      function AddSalaryComponent_ng_container_131_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Payment Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_container_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSalaryComponent_ng_container_131_p_1_Template, 2, 0, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.paymentDetailsForm.get("paymentMode").errors == null ? null : ctx_r12.paymentDetailsForm.get("paymentMode").errors.required);
        }
      }

      function AddSalaryComponent_div_185_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var earning_r43 = ctx.$implicit;
          var i_r44 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r44 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](earning_r43.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](earning_r43.amount);
        }
      }

      function AddSalaryComponent_div_185_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Earning");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddSalaryComponent_div_185_tr_11_Template, 7, 3, "tr", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.earnings);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.totalEarning());
        }
      }

      function AddSalaryComponent_div_190_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deduction_r46 = ctx.$implicit;
          var i_r47 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r47 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deduction_r46.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](deduction_r46.amount);
        }
      }

      function AddSalaryComponent_div_190_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Deduction");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddSalaryComponent_div_190_tr_11_Template, 7, 3, "tr", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.deductions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.totalDeduction());
        }
      }

      function AddSalaryComponent_ng_template_233_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Earnings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSalaryComponent_ng_template_235_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Deductions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var AddSalaryComponent = /*@__PURE__*/function () {
        var AddSalaryComponent = /*#__PURE__*/function () {
          function AddSalaryComponent(branchService, employeeService, branchEmployeeService, employeeSalaryService, dateService, toastrService, router, route) {
            _classCallCheck(this, AddSalaryComponent);

            this.branchService = branchService;
            this.employeeService = employeeService;
            this.branchEmployeeService = branchEmployeeService;
            this.employeeSalaryService = employeeSalaryService;
            this.dateService = dateService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route; // route.queryParams.subscribe((param: Params) => {
            //   // put the code from `ngOnInit` here
            //   this.ngOnInit();
            // });
          }

          _createClass(AddSalaryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.employeeService.getEmployeeData().subscribe(function (employee) {
                _this.employee = employee;
              });
              this.branchEmployeeService.getBranchEmployeeData().subscribe(function (branchEmployee) {
                _this.branchEmployee = branchEmployee;
              });
              this.ernDeduction = true;
              this.earnings = [{
                description: 'Basic Amount',
                amount: parseFloat(this.branchEmployee.basicSalary).toFixed(2)
              }];
              this.deductions = [];
              this.years = this.dateService.getYears();
              this.months = this.dateService.getMonths();
              this.salaryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                month: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getCurrentMonth(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                year: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getCurrentYear(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                basicAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.branchEmployee.basicSalary, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                })
              });
              this.salaryForm.get('basicAmount').disable();
              this.ernDeductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]
                })
              });
              this.paymentDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                generatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                bankDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                }),
                transactionDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                })
              });
              this.loading = false;
            }
          }, {
            key: "ernDeductChange",
            value: function ernDeductChange(ernDeduction) {
              if (ernDeduction === '0') {
                this.ernDeduction = true;
              } else {
                this.ernDeduction = false;
              }
            }
          }, {
            key: "addErnDeduct",
            value: function addErnDeduct() {
              if (this.ernDeductForm.invalid) {
                this.showToastr('top-right', 'danger', "Enter Valid ".concat(this.ernDeduction ? 'Earning' : 'Deduction', " Details"));
                return;
              }

              var extras = {
                description: this.ernDeductForm.value.description,
                amount: parseFloat(this.ernDeductForm.value.amount).toFixed(2)
              };

              if (this.ernDeduction) {
                this.earnings.push(extras);
              } else {
                this.deductions.push(extras);
              }

              this.ernDeductForm.reset({
                amount: '0'
              });
            }
          }, {
            key: "deleteErnDeduct",
            value: function deleteErnDeduct(ernDeduct, i) {
              if (ernDeduct) {
                if (i === 0) {
                  return;
                }

                this.earnings.splice(i, 1);
              } else {
                this.deductions.splice(i, 1);
              }
            }
          }, {
            key: "totalEarning",
            value: function totalEarning() {
              var totalEarningAmount = 0;
              this.earnings.forEach(function (earning) {
                totalEarningAmount += +earning.amount;
              });
              return parseFloat(totalEarningAmount).toFixed(2);
            }
          }, {
            key: "totalDeduction",
            value: function totalDeduction() {
              var totalDeductionAmount = 0;
              this.deductions.forEach(function (deduction) {
                totalDeductionAmount += +deduction.amount;
              });
              return parseFloat(totalDeductionAmount).toFixed(2);
            }
          }, {
            key: "getNetSalary",
            value: function getNetSalary() {
              var totalEarnings = +this.totalEarning();
              var totalDeductions = +this.totalDeduction();
              var netSalary = totalEarnings - totalDeductions;
              return netSalary.toFixed(2).toString();
            }
          }, {
            key: "getNetSalaryInWords",
            value: function getNetSalaryInWords() {
              var netSalary = +this.getNetSalary();
              return Object(_shared_numberToWords__WEBPACK_IMPORTED_MODULE_2__["numberToWords"])(netSalary) + ' Only/-';
            }
          }, {
            key: "previousStep",
            value: function previousStep() {
              if (this.stepper.selectedIndex === 1) {
                this.salaryForm.get('basicAmount').disable();
              }

              this.stepper.previous();
            }
          }, {
            key: "salaryFormSubmit",
            value: function salaryFormSubmit() {
              this.salaryForm.markAllAsTouched();

              if (this.salaryForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Salary Details are Required');
                return;
              }

              this.stepper.next();
              this.salaryForm.get('basicAmount').enable();
            }
          }, {
            key: "ernDeductFormSubmit",
            value: function ernDeductFormSubmit() {
              this.stepper.next();
            }
          }, {
            key: "paymentDetailsFormSubmit",
            value: function paymentDetailsFormSubmit() {
              this.paymentDetailsForm.markAllAsTouched();

              if (this.paymentDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Enter Valid Payment Details');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "saveEmployee",
            value: function saveEmployee() {
              var _this2 = this;

              this.salaryForm.markAllAsTouched();

              if (this.salaryForm.invalid) {
                this.showToastr('top-right', 'danger', 'Employee Salary Details are Required');
                return;
              }

              this.loading = true;
              var employeeSalary = Object.assign(Object.assign(Object.assign(Object.assign({
                branch: this.branchId,
                employee: this.employee.imsMasterId,
                role: this.branchEmployee.role
              }, this.salaryForm.value), {
                earnings: this.earnings,
                deductions: this.deductions
              }), this.paymentDetailsForm.value), {
                netSalary: this.getNetSalary(),
                netSalaryInWords: this.getNetSalaryInWords()
              });
              this.employeeSalaryService.addEmployeeSalary(employeeSalary).subscribe(function (res) {
                _this2.showToastr('top-right', 'success', 'Employee Salary Added Successfully');

                _this2.back();

                _this2.loading = false;
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
          }, {
            key: "showToastr",
            value: function showToastr(position, status, message) {
              this.toastrService.show(status, message, {
                position: position,
                status: status
              });
            }
          }, {
            key: "back",
            value: function back() {
              var type = this.employeeService.getEmployeeType();
              this.router.navigate(['../'], {
                relativeTo: this.route,
                queryParams: {
                  type: type
                }
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.employeeService.deleteEmployeeId();
              this.branchEmployeeService.deleteBranchEmployeeId();
            }
          }]);

          return AddSalaryComponent;
        }();

        AddSalaryComponent.ɵfac = function AddSalaryComponent_Factory(t) {
          return new (t || AddSalaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_salary_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeSalaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]));
        };

        AddSalaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AddSalaryComponent,
          selectors: [["ngx-add-salary"]],
          viewQuery: function AddSalaryComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
          },
          decls: 237,
          vars: 47,
          consts: [[1, "row"], [1, "col-12"], ["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], ["class", "row", 4, "ngIf"], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Salary Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "col-md-4", "col-sm-6", "col-12"], [1, "form-control-group"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "date", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-month", 1, "label"], ["fullWidth", "", "formControlName", "month"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-year", 1, "label"], ["fullWidth", "", "formControlName", "year"], ["for", "input-basic-amount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-basic-amount", "name", "basicAmount", "formControlName", "basicAmount", "placeholder", "basicAmount", "min", "0", "fullWidth", "", 3, "status"], [1, "col-md-8", "col-sm-6", "col-12"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description", "fullWidth", "", "status", "basic"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Earnings/Deductions"], ["fullWidth", "", "selected", "0", 3, "selectedChange"], ["value", "0"], ["value", "1"], ["type", "string", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "fullWidth", "", "status", "basic", 3, "placeholder"], ["for", "input-amount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-amount", "name", "amount", "formControlName", "amount", "placeholder", "Amount", "min", "0", "fullWidth", "", 3, "status"], [1, "col-md-8", "col-sm-6", "col-12", "text-right"], ["type", "submit", "nbButton", "", "size", "small", 1, "mt-4", 3, "status"], [1, "col-md-6", "col-12"], ["status", "basic"], [1, "ern-deduct-body"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "col-md-6"], ["nbButton", "", "size", "small", "type", "button", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["label", "Payment Details", 3, "stepControl"], ["for", "input-generated-by", 1, "label"], ["type", "text", "nbInput", "", "id", "input-generated-by", "name", "generatedBy", "formControlName", "generatedBy", "placeholder", "Generated By", "fullWidth", "", 3, "status"], ["for", "input-payment-mode", 1, "label"], ["id", "input-payment-mode", "name", "paymentMode", "formControlName", "paymentMode", "fullWidth", "", 3, "status"], ["value", ""], ["value", "cash"], ["value", "card"], ["value", "wallet"], ["value", "other"], ["for", "input-bank-details", 1, "label"], ["type", "text", "nbInput", "", "id", "input-bank-details", "name", "bankDetails", "formControlName", "bankDetails", "placeholder", "Bank Details", "fullWidth", "", "status", "basic"], ["for", "input-transaction-details", 1, "label"], ["type", "text", "nbInput", "", "id", "input-transaction-details", "name", "transactionDetails", "formControlName", "transactionDetails", "placeholder", "Transaction Details", "fullWidth", "", "status", "basic"], [1, "col-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], [1, "col-6", "text-right"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], ["nbButton", "", "size", "small", 3, "click"], ["noEarnings", ""], ["noDeductions", ""], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"], [1, "table", "table-am"], [4, "ngFor", "ngForOf"], ["colspan", "2"], ["nbButton", "", "size", "small", "outline", "", "status", "danger", "shape", "round", "nbTooltip", "Remove Earning", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "outline", "", "status", "danger", "shape", "round", "nbTooltip", "Remove Earning", 3, "click"], ["icon", "close-outline"], [1, "table", "table-sm"], ["nbButton", "", "size", "small", "outline", "", "status", "danger", "shape", "round", "nbTooltip", "Remove Deduction", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
          template: function AddSalaryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_4_listener() {
                return ctx.back();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Back ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Generate Salary");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddSalaryComponent_div_8_Template, 26, 8, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-stepper", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-step", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddSalaryComponent_Template_form_submit_13_listener() {
                return ctx.salaryFormSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddSalaryComponent_ng_container_20_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Select Month:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nb-select", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddSalaryComponent_nb_option_26_Template, 2, 2, "nb-option", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddSalaryComponent_ng_container_27_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Select Year:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-select", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddSalaryComponent_nb_option_33_Template, 2, 2, "nb-option", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AddSalaryComponent_ng_container_34_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Basic Amount:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddSalaryComponent_ng_container_40_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Description:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "nb-icon", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nb-step", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddSalaryComponent_Template_form_submit_54_listener() {
                return ctx.addErnDeduct();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Select Definition:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "nb-select", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddSalaryComponent_Template_nb_select_selectedChange_60_listener($event) {
                return ctx.ernDeductChange($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nb-option", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Earning");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nb-option", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Deduction");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Amount:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, AddSalaryComponent_ng_container_75_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "nb-card", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h5");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Earnings");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "nb-card-body", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, AddSalaryComponent_div_87_Template, 18, 2, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "nb-card", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h5");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Deductions");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "nb-card-body", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, AddSalaryComponent_div_94_Template, 18, 2, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_98_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "nb-icon", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Previous");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_103_listener() {
                return ctx.ernDeductFormSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "nb-icon", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "nb-step", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddSalaryComponent_Template_form_submit_108_listener() {
                return ctx.paymentDetailsFormSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Generated By:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, AddSalaryComponent_ng_container_115_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Payment Mode:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "nb-select", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "nb-option", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Select Payment Mode");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "nb-option", 50);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Cash");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "nb-option", 51);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "nb-option", 52);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Waller");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "nb-option", 53);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Other");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, AddSalaryComponent_ng_container_131_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "label", 54);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Bank Details:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "input", 55);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 56);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Transaction Details:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "input", 57);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_145_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "nb-icon", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "button", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "nb-icon", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "nb-step", 61);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 62);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 63);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "table", 64);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Month/Year");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\xA0");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Basic Salary");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Earnings");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](185, AddSalaryComponent_div_185_Template, 17, 2, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Deductions");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, AddSalaryComponent_div_190_Template, 17, 2, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Generated By");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Payment Mode");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "uppercase");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Bank Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Transaction Details");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Net Salary");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Net Salary in Words");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 58);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 59);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_225_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "nb-icon", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 60);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "button", 65);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSalaryComponent_Template_button_click_230_listener() {
                return ctx.saveEmployee();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Submit");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](233, AddSalaryComponent_ng_template_233_Template, 2, 0, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](235, AddSalaryComponent_ng_template_235_Template, 2, 0, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](234);

              var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.salaryForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.salaryForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.salaryForm.get("date").touched ? ctx.salaryForm.get("date").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salaryForm.get("date").invalid && ctx.salaryForm.get("date").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salaryForm.get("month").invalid && ctx.salaryForm.get("month").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salaryForm.get("year").invalid && ctx.salaryForm.get("year").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.salaryForm.get("basicAmount").touched ? ctx.salaryForm.get("basicAmount").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salaryForm.get("basicAmount").invalid && ctx.salaryForm.get("basicAmount").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ernDeductForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.ernDeduction ? "Earning" : "Deduction", " Note:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.ernDeduction ? "Earning" : "Deduction");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.ernDeductForm.get("amount").touched ? ctx.ernDeductForm.get("amount").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ernDeductForm.get("amount").invalid && ctx.ernDeductForm.get("amount").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.ernDeduction ? "success" : "danger");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Add ", ctx.ernDeduction ? "Earning" : "Deduction", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.earnings.length > 0)("ngIfElse", _r15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductions.length > 0)("ngIfElse", _r17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.paymentDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.paymentDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.paymentDetailsForm.get("generatedBy").touched ? ctx.paymentDetailsForm.get("generatedBy").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentDetailsForm.get("generatedBy").invalid && ctx.paymentDetailsForm.get("generatedBy").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.paymentDetailsForm.get("paymentMode").touched ? ctx.paymentDetailsForm.get("paymentMode").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentDetailsForm.get("paymentMode").invalid && ctx.paymentDetailsForm.get("paymentMode").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.salaryForm.value.date);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dateService.getMonthByMonthNumber(ctx.salaryForm.value.month), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.salaryForm.value.year, " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.branchEmployee.basicSalary);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.salaryForm.value.description ? ctx.salaryForm.value.description : "--");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.earnings.length > 0)("ngIfElse", _r15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deductions.length > 0)("ngIfElse", _r17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.paymentDetailsForm.value.generatedBy);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](201, 45, ctx.paymentDetailsForm.value.paymentMode));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paymentDetailsForm.value.bankDetails ? ctx.paymentDetailsForm.value.bankDetails : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paymentDetailsForm.value.transactionDetails ? ctx.paymentDetailsForm.value.transactionDetails : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getNetSalary());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getNetSalaryInWords());
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTooltipDirective"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]],
          styles: [".ern-deduct-body[_ngcontent-%COMP%] {\n  height: 20rem;\n  max-height: 20rem;\n  overflow-y: auto;\n}"]
        });
        return AddSalaryComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.module.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: AddSalaryModule */

    /***/
    function srcAppEmployeeBranchEmployeeManageEmployeeSalaryAddSalaryAddSalaryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSalaryModule", function () {
        return AddSalaryModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _add_salary_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-salary-routing.module */
      "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary-routing.module.ts");
      /* harmony import */


      var _add_salary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-salary.component */
      "./src/app/employee/branch/employee/manage-employee-salary/add-salary/add-salary.component.ts");

      var AddSalaryModule = /*@__PURE__*/function () {
        var AddSalaryModule = function AddSalaryModule() {
          _classCallCheck(this, AddSalaryModule);
        };

        AddSalaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: AddSalaryModule
        });
        AddSalaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function AddSalaryModule_Factory(t) {
            return new (t || AddSalaryModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_salary_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddSalaryRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
        });
        return AddSalaryModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddSalaryModule, {
          declarations: [_add_salary_component__WEBPACK_IMPORTED_MODULE_5__["AddSalaryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_salary_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddSalaryRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToggleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();