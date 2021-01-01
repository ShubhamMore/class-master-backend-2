function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86], {
  /***/
  "./src/app/employee/branch/exam/test/batch-test/batch-test-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/employee/branch/exam/test/batch-test/batch-test-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: BatchTestRoutingModule */

  /***/
  function srcAppEmployeeBranchExamTestBatchTestBatchTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatchTestRoutingModule", function () {
      return BatchTestRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _batch_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./batch-test.component */
    "./src/app/employee/branch/exam/test/batch-test/batch-test.component.ts");

    var routes = [{
      path: '',
      component: _batch_test_component__WEBPACK_IMPORTED_MODULE_2__["BatchTestComponent"],
      children: [{
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(87)]).then(__webpack_require__.bind(null,
          /*! ./manage-batch-test/manage-batch-test.module */
          "./src/app/employee/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.module.ts")).then(function (m) {
            return m.ManageBatchTestModule;
          });
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(13)]).then(__webpack_require__.bind(null,
          /*! ./add-test/add-test.module */
          "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.module.ts")).then(function (m) {
            return m.AddTestModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(13)]).then(__webpack_require__.bind(null,
          /*! ./add-test/add-test.module */
          "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.module.ts")).then(function (m) {
            return m.AddTestModule;
          });
        }
      }, {
        path: 'score',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(85)]).then(__webpack_require__.bind(null,
          /*! ./add-test-score/add-test-score.module */
          "./src/app/employee/branch/exam/test/batch-test/add-test-score/add-test-score.module.ts")).then(function (m) {
            return m.AddTestScoreModule;
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
          /*! ../../../../../shared/page-not-found/page-not-found.module */
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

    var BatchTestRoutingModule =
    /*@__PURE__*/
    function () {
      var BatchTestRoutingModule = function BatchTestRoutingModule() {
        _classCallCheck(this, BatchTestRoutingModule);
      };

      BatchTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BatchTestRoutingModule
      });
      BatchTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BatchTestRoutingModule_Factory(t) {
          return new (t || BatchTestRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return BatchTestRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BatchTestRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/test/batch-test/batch-test.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/employee/branch/exam/test/batch-test/batch-test.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BatchTestComponent */

  /***/
  function srcAppEmployeeBranchExamTestBatchTestBatchTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatchTestComponent", function () {
      return BatchTestComponent;
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


    var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BatchTestComponent =
    /*@__PURE__*/
    function () {
      var BatchTestComponent =
      /*#__PURE__*/
      function () {
        function BatchTestComponent(branchService, courseService, batchService, router, route) {
          _classCallCheck(this, BatchTestComponent);

          this.branchService = branchService;
          this.courseService = courseService;
          this.batchService = batchService;
          this.router = router;
          this.route = route;
        }

        _createClass(BatchTestComponent, [{
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
            this.branchService.deleteCategoryId();
            this.branchService.deleteCategoryData();
            this.courseService.deleteCourseId();
            this.courseService.deleteCourseData();
            this.batchService.deleteBatchId();
            this.batchService.deleteBatchData();
          }
        }]);

        return BatchTestComponent;
      }();

      BatchTestComponent.ɵfac = function BatchTestComponent_Factory(t) {
        return new (t || BatchTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      BatchTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BatchTestComponent,
        selectors: [["ngx-batch-test"]],
        decls: 1,
        vars: 0,
        template: function BatchTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: [""]
      });
      return BatchTestComponent;
    }();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/test/batch-test/batch-test.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/employee/branch/exam/test/batch-test/batch-test.module.ts ***!
    \***************************************************************************/

  /*! exports provided: BatchTestModule */

  /***/
  function srcAppEmployeeBranchExamTestBatchTestBatchTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatchTestModule", function () {
      return BatchTestModule;
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


    var _batch_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./batch-test-routing.module */
    "./src/app/employee/branch/exam/test/batch-test/batch-test-routing.module.ts");
    /* harmony import */


    var _batch_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./batch-test.component */
    "./src/app/employee/branch/exam/test/batch-test/batch-test.component.ts");

    var BatchTestModule =
    /*@__PURE__*/
    function () {
      var BatchTestModule = function BatchTestModule() {
        _classCallCheck(this, BatchTestModule);
      };

      BatchTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BatchTestModule
      });
      BatchTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BatchTestModule_Factory(t) {
          return new (t || BatchTestModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchTestRoutingModule"]]]
      });
      return BatchTestModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BatchTestModule, {
        declarations: [_batch_test_component__WEBPACK_IMPORTED_MODULE_3__["BatchTestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchTestRoutingModule"]]
      });
    })();
    /***/

  }
}]);