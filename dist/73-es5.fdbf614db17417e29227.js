function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73], {
  /***/
  "./src/app/employee/branch/employee/employee-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/employee/branch/employee/employee-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppEmployeeBranchEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
    });
    /* harmony import */


    var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./employee.component */
    "./src/app/employee/branch/employee/employee.component.ts");
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
      component: _employee_component__WEBPACK_IMPORTED_MODULE_0__["EmployeeComponent"],
      children: [{
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
          /*! ./add-employee/add-employee.module */
          "./src/app/employee/branch/employee/add-employee/add-employee.module.ts")).then(function (m) {
            return m.AddEmployeeModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
          /*! ./add-employee/add-employee.module */
          "./src/app/employee/branch/employee/add-employee/add-employee.module.ts")).then(function (m) {
            return m.AddEmployeeModule;
          });
        }
      }, {
        path: 'manage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          78).then(__webpack_require__.bind(null,
          /*! ./manage-employee/manage-employee.module */
          "./src/app/employee/branch/employee/manage-employee/manage-employee.module.ts")).then(function (m) {
            return m.ManageEmployeeModule;
          });
        }
      }, {
        path: 'salary',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          75).then(__webpack_require__.bind(null,
          /*! ./manage-employee-salary/manage-employee-salary.module */
          "./src/app/employee/branch/employee/manage-employee-salary/manage-employee-salary.module.ts")).then(function (m) {
            return m.ManageEmployeeSalaryModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'manage?type=active',
        pathMatch: 'full'
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }]
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
    EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
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
  "./src/app/employee/branch/employee/employee.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/employee/branch/employee/employee.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppEmployeeBranchEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EmployeeComponent =
    /*#__PURE__*/
    function () {
      function EmployeeComponent(branchService, employeeService, router, route) {
        _classCallCheck(this, EmployeeComponent);

        this.branchService = branchService;
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.employeeService.deleteEmployeeType();
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EmployeeComponent,
      selectors: [["ngx-employee"]],
      decls: 1,
      vars: 0,
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-employee',
          templateUrl: './employee.component.html',
          styleUrls: ['./employee.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_0__["EmployeeService"]
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
  "./src/app/employee/branch/employee/employee.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/employee/branch/employee/employee.module.ts ***!
    \*************************************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppEmployeeBranchEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
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


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/employee/branch/employee/employee-routing.module.ts");
    /* harmony import */


    var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee.component */
    "./src/app/employee/branch/employee/employee.component.ts");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);