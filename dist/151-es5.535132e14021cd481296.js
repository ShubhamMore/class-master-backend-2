function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151], {
  /***/
  "./src/app/institute/branch/employee/manage-employee/manage-employee-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/institute/branch/employee/manage-employee/manage-employee-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ManageEmployeeRoutingModule */

  /***/
  function srcAppInstituteBranchEmployeeManageEmployeeManageEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageEmployeeRoutingModule", function () {
      return ManageEmployeeRoutingModule;
    });
    /* harmony import */


    var _manage_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-employee.component */
    "./src/app/institute/branch/employee/manage-employee/manage-employee.component.ts");
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
      component: _manage_employee_component__WEBPACK_IMPORTED_MODULE_0__["ManageEmployeeComponent"]
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

    var ManageEmployeeRoutingModule = function ManageEmployeeRoutingModule() {
      _classCallCheck(this, ManageEmployeeRoutingModule);
    };

    ManageEmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManageEmployeeRoutingModule
    });
    ManageEmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ManageEmployeeRoutingModule_Factory(t) {
        return new (t || ManageEmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageEmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageEmployeeRoutingModule, [{
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
  "./src/app/institute/branch/employee/manage-employee/manage-employee.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/institute/branch/employee/manage-employee/manage-employee.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ManageEmployeeComponent */

  /***/
  function srcAppInstituteBranchEmployeeManageEmployeeManageEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageEmployeeComponent", function () {
      return ManageEmployeeComponent;
    });
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/branch-employee.service */
    "./src/app/services/branch-employee.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageEmployeeComponent_ng_container_10_div_1_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageEmployeeComponent_ng_container_10_div_1_tr_13_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var branchEmployee_r7 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r9.editBranchEmployee(branchEmployee_r7._id, branchEmployee_r7.employee);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageEmployeeComponent_ng_container_10_div_1_tr_13_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var branchEmployee_r7 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r11.branchEmployeeSalary(branchEmployee_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Salary ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ManageEmployeeComponent_ng_container_10_div_1_tr_13_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);

          var branchEmployee_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r12.changeBranchEmployeeStatus(branchEmployee_r7._id, !branchEmployee_r7.status, i_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branchEmployee_r7 = ctx.$implicit;
        var i_r8 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r8 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](branchEmployee_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, branchEmployee_r7.role));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", !branchEmployee_r7.status ? "warning" : "danger");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !branchEmployee_r7.status ? "Activate" : "Deactivate", " ");
      }
    }

    function ManageEmployeeComponent_ng_container_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ManageEmployeeComponent_ng_container_10_div_1_tr_13_Template, 15, 7, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.branchEmployees);
      }
    }

    function ManageEmployeeComponent_ng_container_10_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Employees Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ManageEmployeeComponent_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ManageEmployeeComponent_ng_container_10_div_1_Template, 14, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ManageEmployeeComponent_ng_container_10_ng_template_2_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.branchEmployees.length > 0)("ngIfElse", _r4);
      }
    }

    function ManageEmployeeComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var ManageEmployeeComponent =
    /*#__PURE__*/
    function () {
      function ManageEmployeeComponent(branchService, employeeService, branchEmployeeService, router, route) {
        var _this = this;

        _classCallCheck(this, ManageEmployeeComponent);

        this.branchService = branchService;
        this.employeeService = employeeService;
        this.branchEmployeeService = branchEmployeeService;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (param) {
          // put the code from `ngOnInit` here
          _this.ngOnInit();
        });
      }

      _createClass(ManageEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          this.route.queryParams.subscribe(function (param) {
            _this2.type = param.type;
          });

          if (this.type !== 'active' && this.type !== 'inactive') {
            this.router.navigate(['../manage'], {
              relativeTo: this.route,
              queryParams: {
                type: 'active'
              }
            });
            return;
          }

          this.employeeService.setEmployeeType(this.type);
          this.branchEmployees = [];
          this.branchEmployeeService.getBranchEmployeeNameIds(this.branchId, this.type).subscribe(function (branchEmployees) {
            _this2.branchEmployees = branchEmployees;
            _this2.loading = false;
          }, function (err) {
            _this2.loading = false;
          });
        }
      }, {
        key: "editBranchEmployee",
        value: function editBranchEmployee(id, employee) {
          this.employeeService.setEmployeeId(employee);
          this.branchEmployeeService.setBranchEmployeeId(id);
          this.router.navigate(['../edit'], {
            relativeTo: this.route,
            queryParams: {
              mode: 'edit'
            }
          });
        }
      }, {
        key: "branchEmployeeSalary",
        value: function branchEmployeeSalary(branchEmployee) {
          this.branchEmployeeService.setBranchEmployeeData(branchEmployee);
          this.router.navigate(['../salary'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "changeBranchEmployeeStatus",
        value: function changeBranchEmployeeStatus(id, status, i) {
          var _this3 = this;

          this.branchEmployeeService.changeBranchEmployeeStatus(id, status).subscribe(function (res) {
            _this3.branchEmployees.splice(i, 1);

            _this3.loading = false;
          }, function (err) {
            _this3.loading = false;
          });
        }
      }]);

      return ManageEmployeeComponent;
    }();

    ManageEmployeeComponent.ɵfac = function ManageEmployeeComponent_Factory(t) {
      return new (t || ManageEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ManageEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ManageEmployeeComponent,
      selectors: [["ngx-manage-employee"]],
      decls: 13,
      vars: 5,
      consts: [[1, "row"], [1, "col-md-12"], [1, "body-container"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBranchEmployees", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "size", "small", "status", "success", 1, "mr-3", 3, "click"], ["nbButton", "", "size", "small", 1, "", 3, "status", "click"], [1, "text-center", "pt-5", "pb-5"]],
      template: function ManageEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ManageEmployeeComponent_ng_container_10_Template, 4, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ManageEmployeeComponent_ng_template_11_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, ctx.type), " Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ManageEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'ngx-manage-employee',
          templateUrl: './manage-employee.component.html',
          styleUrls: ['./manage-employee.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]
        }, {
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]
        }, {
          type: _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__["BranchEmployeeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/employee/manage-employee/manage-employee.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/institute/branch/employee/manage-employee/manage-employee.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ManageEmployeeModule */

  /***/
  function srcAppInstituteBranchEmployeeManageEmployeeManageEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageEmployeeModule", function () {
      return ManageEmployeeModule;
    });
    /* harmony import */


    var _manage_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-employee.component */
    "./src/app/institute/branch/employee/manage-employee/manage-employee.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _manage_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-employee-routing.module */
    "./src/app/institute/branch/employee/manage-employee/manage-employee-routing.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ManageEmployeeModule = function ManageEmployeeModule() {
      _classCallCheck(this, ManageEmployeeModule);
    };

    ManageEmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManageEmployeeModule
    });
    ManageEmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ManageEmployeeModule_Factory(t) {
        return new (t || ManageEmployeeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageEmployeeModule, {
        declarations: [_manage_employee_component__WEBPACK_IMPORTED_MODULE_0__["ManageEmployeeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageEmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_manage_employee_component__WEBPACK_IMPORTED_MODULE_0__["ManageEmployeeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageEmployeeRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);