function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114], {
  /***/
  "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ViewSalaryReceiptRoutingModule */

  /***/
  function srcAppEmployeeBranchSalaryViewSalaryReceiptViewSalaryReceiptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSalaryReceiptRoutingModule", function () {
      return ViewSalaryReceiptRoutingModule;
    });
    /* harmony import */


    var _view_salary_receipt_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-salary-receipt.component */
    "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.component.ts");
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
      component: _view_salary_receipt_component__WEBPACK_IMPORTED_MODULE_0__["ViewSalaryReceiptComponent"]
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var ViewSalaryReceiptRoutingModule = function ViewSalaryReceiptRoutingModule() {
      _classCallCheck(this, ViewSalaryReceiptRoutingModule);
    };

    ViewSalaryReceiptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewSalaryReceiptRoutingModule
    });
    ViewSalaryReceiptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewSalaryReceiptRoutingModule_Factory(t) {
        return new (t || ViewSalaryReceiptRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewSalaryReceiptRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewSalaryReceiptRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ViewSalaryReceiptComponent */

  /***/
  function srcAppEmployeeBranchSalaryViewSalaryReceiptViewSalaryReceiptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSalaryReceiptComponent", function () {
      return ViewSalaryReceiptComponent;
    });
    /* harmony import */


    var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/branch-employee.service */
    "./src/app/services/branch-employee.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_billing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/billing.service */
    "./src/app/services/billing.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _services_employee_salary_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../services/employee-salary.service */
    "./src/app/services/employee-salary.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewSalaryReceiptComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.receipt.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.receipt.address);
      }
    }

    function ViewSalaryReceiptComponent_div_44_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var earning_r8 = ctx.$implicit;
        var i_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r9 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](earning_r8.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](earning_r8.amount);
      }
    }

    function ViewSalaryReceiptComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Earning");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ViewSalaryReceiptComponent_div_44_tr_11_Template, 7, 3, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.salary.earnings);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.totalEarning());
      }
    }

    function ViewSalaryReceiptComponent_div_48_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var deduction_r11 = ctx.$implicit;
        var i_r12 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r12 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](deduction_r11.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](deduction_r11.amount);
      }
    }

    function ViewSalaryReceiptComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Deduction");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ViewSalaryReceiptComponent_div_48_tr_11_Template, 7, 3, "tr", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.salary.deductions);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.totalDeduction());
      }
    }

    function ViewSalaryReceiptComponent_ng_template_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Earnings");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
    }

    function ViewSalaryReceiptComponent_ng_template_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Deductions");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
    }

    var ViewSalaryReceiptComponent =
    /*#__PURE__*/
    function () {
      function ViewSalaryReceiptComponent(branchService, salaryService, employeeService, branchEmployeeService, dateService, router, toastrService, receiptService, route) {
        _classCallCheck(this, ViewSalaryReceiptComponent);

        this.branchService = branchService;
        this.salaryService = salaryService;
        this.employeeService = employeeService;
        this.branchEmployeeService = branchEmployeeService;
        this.dateService = dateService;
        this.router = router;
        this.toastrService = toastrService;
        this.receiptService = receiptService;
        this.route = route;
      }

      _createClass(ViewSalaryReceiptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          var branchId = this.branchService.getBranchId();

          if (!branchId) {
            this.back();
            return;
          }

          this.salaryService.getEmployeeSalaryData().subscribe(function (salary) {
            _this.salary = salary;
          });

          if (!this.salary) {
            this.showToastr('top-right', 'danger', 'Salary Not Found');
            this.back();
          }

          this.receiptService.getBillingDetails(branchId).subscribe(function (receipt) {
            _this.receipt = receipt;
            _this.loading = false;
          }, function (error) {
            _this.showToastr('top-right', 'danger', error);

            _this.back();
          });
        }
      }, {
        key: "totalEarning",
        value: function totalEarning() {
          var totalEarningAmount = 0;
          this.salary.earnings.forEach(function (earning) {
            totalEarningAmount += +earning.amount;
          });
          return parseFloat(totalEarningAmount).toFixed(2);
        }
      }, {
        key: "totalDeduction",
        value: function totalDeduction() {
          var totalDeductionAmount = 0;
          this.salary.deductions.forEach(function (deduction) {
            totalDeductionAmount += +deduction.amount;
          });
          return parseFloat(totalDeductionAmount).toFixed(2);
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "print",
        value: function print() {
          window.print();
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ViewSalaryReceiptComponent;
    }();

    ViewSalaryReceiptComponent.ɵfac = function ViewSalaryReceiptComponent_Factory(t) {
      return new (t || ViewSalaryReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_employee_salary_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeSalaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_0__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_billing_service__WEBPACK_IMPORTED_MODULE_2__["InstituteBillingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    ViewSalaryReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ViewSalaryReceiptComponent,
      selectors: [["ngx-view-salary-receipt"]],
      decls: 95,
      vars: 19,
      consts: [["class", "row", 4, "ngIf"], [1, "text-center"], [1, "row"], [1, "col-md-10", "col-12", "mx-auto"], [1, "col-12", "text-right"], [1, "col-md-6", "col-12"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "col-12"], [1, "text-right"], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["icon", "printer-outline"], ["noEarnings", ""], ["noDeductions", ""], [1, "col-12", "text-center"], [1, "table-responsive"], [1, "table", "table-am"], [4, "ngFor", "ngForOf"], ["colspan", "2"], [1, "table", "table-sm"]],
      template: function ViewSalaryReceiptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ViewSalaryReceiptComponent_div_2_Template, 6, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Salary Slip");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Employee Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Employee Role: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Month: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Year: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Earnings");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ViewSalaryReceiptComponent_div_44_Template, 17, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Deductions");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, ViewSalaryReceiptComponent_div_48_Template, 17, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Net Salary: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Net Salary in Words: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Generated By: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Payment Mode: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Bank Details: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Transaction Details: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, "*This is Computer Generated Receipt, Does not Required any Stamp or Signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewSalaryReceiptComponent_Template_button_click_89_listener() {
            return ctx.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "nb-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, ViewSalaryReceiptComponent_ng_template_91_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, ViewSalaryReceiptComponent_ng_template_93_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](92);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.dateService.formatDate(ctx.salary.date), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.role, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.dateService.getMonthByMonthNumber(ctx.salary.month), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.salary.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.salary.description ? ctx.salary.description : "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.salary.earnings.length > 0)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.salary.deductions.length > 0)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.netSalary, "/-");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.netSalaryInWords, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.salary.generatedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 17, ctx.salary.paymentMode));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.bankDetails ? ctx.salary.bankDetails : "--", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.salary.transactionDetails ? ctx.salary.transactionDetails : "--", " ");
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ViewSalaryReceiptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
          selector: 'ngx-view-salary-receipt',
          templateUrl: './view-salary-receipt.component.html',
          styleUrls: ['./view-salary-receipt.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]
        }, {
          type: _services_employee_salary_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeSalaryService"]
        }, {
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_0__["BranchEmployeeService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
        }, {
          type: _services_billing_service__WEBPACK_IMPORTED_MODULE_2__["InstituteBillingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: ViewSalaryReceiptModule */

  /***/
  function srcAppEmployeeBranchSalaryViewSalaryReceiptViewSalaryReceiptModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSalaryReceiptModule", function () {
      return ViewSalaryReceiptModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _view_salary_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./view-salary-receipt-routing.module */
    "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt-routing.module.ts");
    /* harmony import */


    var _view_salary_receipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-salary-receipt.component */
    "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ViewSalaryReceiptModule = function ViewSalaryReceiptModule() {
      _classCallCheck(this, ViewSalaryReceiptModule);
    };

    ViewSalaryReceiptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ViewSalaryReceiptModule
    });
    ViewSalaryReceiptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ViewSalaryReceiptModule_Factory(t) {
        return new (t || ViewSalaryReceiptModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_salary_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewSalaryReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewSalaryReceiptModule, {
        declarations: [_view_salary_receipt_component__WEBPACK_IMPORTED_MODULE_3__["ViewSalaryReceiptComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_salary_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewSalaryReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewSalaryReceiptModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_view_salary_receipt_component__WEBPACK_IMPORTED_MODULE_3__["ViewSalaryReceiptComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_salary_receipt_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewSalaryReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);