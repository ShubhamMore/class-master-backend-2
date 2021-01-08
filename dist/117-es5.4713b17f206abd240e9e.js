(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117], {
    /***/
    "./src/app/employee/branch/salary/salary-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/employee/branch/salary/salary-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SalaryRoutingModule */

    /***/
    function srcAppEmployeeBranchSalarySalaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaryRoutingModule", function () {
        return SalaryRoutingModule;
      });
      /* harmony import */


      var _salary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./salary.component */
      "./src/app/employee/branch/salary/salary.component.ts");
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
        component: _salary_component__WEBPACK_IMPORTED_MODULE_0__["SalaryComponent"],
        children: [{
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(116)]).then(__webpack_require__.bind(null,
            /*! ./manage-salary/manage-salary.module */
            "./src/app/employee/branch/salary/manage-salary/manage-salary.module.ts")).then(function (m) {
              return m.ManageSalaryModule;
            });
          }
        }, {
          path: 'view',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(118)]).then(__webpack_require__.bind(null,
            /*! ./view-salary-receipt/view-salary-receipt.module */
            "./src/app/employee/branch/salary/view-salary-receipt/view-salary-receipt.module.ts")).then(function (m) {
              return m.ViewSalaryReceiptModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'manage',
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

      var SalaryRoutingModule = /*@__PURE__*/function () {
        var SalaryRoutingModule = function SalaryRoutingModule() {
          _classCallCheck(this, SalaryRoutingModule);
        };

        SalaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: SalaryRoutingModule
        });
        SalaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function SalaryRoutingModule_Factory(t) {
            return new (t || SalaryRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return SalaryRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SalaryRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/salary/salary.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/employee/branch/salary/salary.component.ts ***!
      \************************************************************/

    /*! exports provided: SalaryComponent */

    /***/
    function srcAppEmployeeBranchSalarySalaryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaryComponent", function () {
        return SalaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SalaryComponent = /*@__PURE__*/function () {
        var SalaryComponent = /*#__PURE__*/function () {
          function SalaryComponent() {
            _classCallCheck(this, SalaryComponent);
          }

          _createClass(SalaryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SalaryComponent;
        }();

        SalaryComponent.ɵfac = function SalaryComponent_Factory(t) {
          return new (t || SalaryComponent)();
        };

        SalaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SalaryComponent,
          selectors: [["ngx-salary"]],
          decls: 1,
          vars: 0,
          template: function SalaryComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
          styles: [""]
        });
        return SalaryComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/salary/salary.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/employee/branch/salary/salary.module.ts ***!
      \*********************************************************/

    /*! exports provided: SalaryModule */

    /***/
    function srcAppEmployeeBranchSalarySalaryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaryModule", function () {
        return SalaryModule;
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


      var _salary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./salary-routing.module */
      "./src/app/employee/branch/salary/salary-routing.module.ts");
      /* harmony import */


      var _salary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./salary.component */
      "./src/app/employee/branch/salary/salary.component.ts");

      var SalaryModule = /*@__PURE__*/function () {
        var SalaryModule = function SalaryModule() {
          _classCallCheck(this, SalaryModule);
        };

        SalaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SalaryModule
        });
        SalaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SalaryModule_Factory(t) {
            return new (t || SalaryModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["SalaryRoutingModule"]]]
        });
        return SalaryModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalaryModule, {
          declarations: [_salary_component__WEBPACK_IMPORTED_MODULE_3__["SalaryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _salary_routing_module__WEBPACK_IMPORTED_MODULE_2__["SalaryRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();