function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[187], {
  /***/
  "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ViewScheduleRoutingModule */

  /***/
  function srcAppInstituteBranchScheduleBatchScheduleViewScheduleViewScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewScheduleRoutingModule", function () {
      return ViewScheduleRoutingModule;
    });
    /* harmony import */


    var _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-schedule.component */
    "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts");
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
      component: _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ViewScheduleComponent"]
    }];

    var ViewScheduleRoutingModule = function ViewScheduleRoutingModule() {
      _classCallCheck(this, ViewScheduleRoutingModule);
    };

    ViewScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewScheduleRoutingModule
    });
    ViewScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewScheduleRoutingModule_Factory(t) {
        return new (t || ViewScheduleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewScheduleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewScheduleRoutingModule, [{
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
  "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ViewScheduleComponent */

  /***/
  function srcAppInstituteBranchScheduleBatchScheduleViewScheduleViewScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewScheduleComponent", function () {
      return ViewScheduleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ViewScheduleComponent =
    /*#__PURE__*/
    function () {
      function ViewScheduleComponent(branchService, router, route) {
        _classCallCheck(this, ViewScheduleComponent);

        this.branchService = branchService;
        this.router = router;
        this.route = route;
      }

      _createClass(ViewScheduleComponent, [{
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

      return ViewScheduleComponent;
    }();

    ViewScheduleComponent.ɵfac = function ViewScheduleComponent_Factory(t) {
      return new (t || ViewScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ViewScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewScheduleComponent,
      selectors: [["ngx-view-schedule"]],
      decls: 2,
      vars: 0,
      template: function ViewScheduleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-schedule works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-view-schedule',
          templateUrl: './view-schedule.component.html',
          styleUrls: ['./view-schedule.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ViewScheduleModule */

  /***/
  function srcAppInstituteBranchScheduleBatchScheduleViewScheduleViewScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewScheduleModule", function () {
      return ViewScheduleModule;
    });
    /* harmony import */


    var _view_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-schedule.component */
    "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-schedule-routing.module */
    "./src/app/institute/branch/schedule/batch-schedule/view-schedule/view-schedule-routing.module.ts");

    var ViewScheduleModule = function ViewScheduleModule() {
      _classCallCheck(this, ViewScheduleModule);
    };

    ViewScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewScheduleModule
    });
    ViewScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewScheduleModule_Factory(t) {
        return new (t || ViewScheduleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewScheduleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewScheduleModule, {
        declarations: [_view_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ViewScheduleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewScheduleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewScheduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_view_schedule_component__WEBPACK_IMPORTED_MODULE_0__["ViewScheduleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_schedule_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewScheduleRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);