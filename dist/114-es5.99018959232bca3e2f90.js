(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114], {
    /***/
    "./src/app/employee/branch/manage-branch/manage-branch-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/manage-branch-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ManageBranchRoutingModule */

    /***/
    function srcAppEmployeeBranchManageBranchManageBranchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBranchRoutingModule", function () {
        return ManageBranchRoutingModule;
      });
      /* harmony import */


      var _manage_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-branch.component */
      "./src/app/employee/branch/manage-branch/manage-branch.component.ts");
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
        component: _manage_branch_component__WEBPACK_IMPORTED_MODULE_0__["ManageBranchComponent"],
        children: [{
          path: 'receipt',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(115)]).then(__webpack_require__.bind(null,
            /*! ./receipt-info/receipt-info.module */
            "./src/app/employee/branch/manage-branch/receipt-info/receipt-info.module.ts")).then(function (m) {
              return m.ReceiptInfoModule;
            });
          }
        }, {
          path: 'course',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            110).then(__webpack_require__.bind(null,
            /*! ./course/course.module */
            "./src/app/employee/branch/manage-branch/course/course.module.ts")).then(function (m) {
              return m.CourseModule;
            });
          }
        }, {
          path: 'discount-and-offers',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            112).then(__webpack_require__.bind(null,
            /*! ./discount-and-offer/discount-and-offer.module */
            "./src/app/employee/branch/manage-branch/discount-and-offer/discount-and-offer.module.ts")).then(function (m) {
              return m.DiscountAndOfferModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'course',
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

      var ManageBranchRoutingModule = /*@__PURE__*/function () {
        var ManageBranchRoutingModule = function ManageBranchRoutingModule() {
          _classCallCheck(this, ManageBranchRoutingModule);
        };

        ManageBranchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageBranchRoutingModule
        });
        ManageBranchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageBranchRoutingModule_Factory(t) {
            return new (t || ManageBranchRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ManageBranchRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageBranchRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/manage-branch/manage-branch.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/manage-branch.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ManageBranchComponent */

    /***/
    function srcAppEmployeeBranchManageBranchManageBranchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBranchComponent", function () {
        return ManageBranchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ManageBranchComponent = /*@__PURE__*/function () {
        var ManageBranchComponent = /*#__PURE__*/function () {
          function ManageBranchComponent(branchService, router, route) {
            _classCallCheck(this, ManageBranchComponent);

            this.branchService = branchService;
            this.router = router;
            this.route = route;
          }

          _createClass(ManageBranchComponent, [{
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
          }]);

          return ManageBranchComponent;
        }();

        ManageBranchComponent.ɵfac = function ManageBranchComponent_Factory(t) {
          return new (t || ManageBranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
        };

        ManageBranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ManageBranchComponent,
          selectors: [["ngx-manage-branch"]],
          decls: 1,
          vars: 0,
          template: function ManageBranchComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
          styles: [""]
        });
        return ManageBranchComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/manage-branch/manage-branch.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/manage-branch.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ManageBranchModule */

    /***/
    function srcAppEmployeeBranchManageBranchManageBranchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBranchModule", function () {
        return ManageBranchModule;
      });
      /* harmony import */


      var _manage_branch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-branch.component */
      "./src/app/employee/branch/manage-branch/manage-branch.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _manage_branch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-branch-routing.module */
      "./src/app/employee/branch/manage-branch/manage-branch-routing.module.ts");

      var ManageBranchModule = /*@__PURE__*/function () {
        var ManageBranchModule = function ManageBranchModule() {
          _classCallCheck(this, ManageBranchModule);
        };

        ManageBranchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageBranchModule
        });
        ManageBranchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageBranchModule_Factory(t) {
            return new (t || ManageBranchModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageBranchRoutingModule"]]]
        });
        return ManageBranchModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageBranchModule, {
          declarations: [_manage_branch_component__WEBPACK_IMPORTED_MODULE_0__["ManageBranchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_branch_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageBranchRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();