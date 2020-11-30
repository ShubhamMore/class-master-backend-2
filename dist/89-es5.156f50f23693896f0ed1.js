function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89], {
  /***/
  "./src/app/employee/branch/exam/test/test-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/employee/branch/exam/test/test-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: TestRoutingModule */

  /***/
  function srcAppEmployeeBranchExamTestTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function () {
      return TestRoutingModule;
    });
    /* harmony import */


    var _test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./test.component */
    "./src/app/employee/branch/exam/test/test.component.ts");
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
      component: _test_component__WEBPACK_IMPORTED_MODULE_0__["TestComponent"],
      children: [{
        path: 'batch',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          88).then(__webpack_require__.bind(null,
          /*! ./manage-test/manage-test.module */
          "./src/app/employee/branch/exam/test/manage-test/manage-test.module.ts")).then(function (m) {
            return m.ManageTestModule;
          });
        }
      }, {
        path: 'batch-test',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          86).then(__webpack_require__.bind(null,
          /*! ./batch-test/batch-test.module */
          "./src/app/employee/branch/exam/test/batch-test/batch-test.module.ts")).then(function (m) {
            return m.BatchTestModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'batch',
        pathMatch: 'full'
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
      }]
    }];

    var TestRoutingModule = function TestRoutingModule() {
      _classCallCheck(this, TestRoutingModule);
    };

    TestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TestRoutingModule
    });
    TestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TestRoutingModule_Factory(t) {
        return new (t || TestRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TestRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TestRoutingModule, [{
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
  "./src/app/employee/branch/exam/test/test.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/employee/branch/exam/test/test.component.ts ***!
    \*************************************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppEmployeeBranchExamTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TestComponent =
    /*#__PURE__*/
    function () {
      function TestComponent(branchService, courseService, batchService, router, route) {
        _classCallCheck(this, TestComponent);

        this.branchService = branchService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.router = router;
        this.route = route;
      }

      _createClass(TestComponent, [{
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

          this.courseService.getCourses(this.branchId, '').subscribe(function (courses) {
            _this.courseService.setCoursesData(courses);

            _this.loading = false;
          }, function (error) {});
          this.batchService.getBatches(this.branchId, '', '').subscribe(function (batches) {
            _this.batchService.setBatchesData(batches);
          }, function (error) {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.courseService.deleteCoursesData();
          this.batchService.deleteBatchesData();
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ɵfac = function TestComponent_Factory(t) {
      return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TestComponent,
      selectors: [["ngx-test"]],
      decls: 1,
      vars: 0,
      template: function TestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'ngx-test',
          templateUrl: './test.component.html',
          styleUrls: ['./test.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]
        }, {
          type: _services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/test/test.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/employee/branch/exam/test/test.module.ts ***!
    \**********************************************************/

  /*! exports provided: TestModule */

  /***/
  function srcAppEmployeeBranchExamTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestModule", function () {
      return TestModule;
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


    var _test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./test-routing.module */
    "./src/app/employee/branch/exam/test/test-routing.module.ts");
    /* harmony import */


    var _test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test.component */
    "./src/app/employee/branch/exam/test/test.component.ts");

    var TestModule = function TestModule() {
      _classCallCheck(this, TestModule);
    };

    TestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TestModule
    });
    TestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TestModule_Factory(t) {
        return new (t || TestModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestModule, {
        declarations: [_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);