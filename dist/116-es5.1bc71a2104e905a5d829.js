(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116], {
    /***/
    "./src/app/employee/branch/manage-branch/course/batch/batch-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/course/batch/batch-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: BatchRoutingModule */

    /***/
    function srcAppEmployeeBranchManageBranchCourseBatchBatchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchRoutingModule", function () {
        return BatchRoutingModule;
      });
      /* harmony import */


      var _batch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./batch.component */
      "./src/app/employee/branch/manage-branch/course/batch/batch.component.ts");
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
        component: _batch_component__WEBPACK_IMPORTED_MODULE_0__["BatchComponent"],
        children: [{
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(117)]).then(__webpack_require__.bind(null,
            /*! ./manage-batch/manage-batch.module */
            "./src/app/employee/branch/manage-branch/course/batch/manage-batch/manage-batch.module.ts")).then(function (m) {
              return m.ManageBatchModule;
            });
          }
        }, {
          path: 'add',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null,
            /*! ./add-batch/add-batch.module */
            "./src/app/employee/branch/manage-branch/course/batch/add-batch/add-batch.module.ts")).then(function (m) {
              return m.AddBatchModule;
            });
          }
        }, {
          path: 'edit',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null,
            /*! ./add-batch/add-batch.module */
            "./src/app/employee/branch/manage-branch/course/batch/add-batch/add-batch.module.ts")).then(function (m) {
              return m.AddBatchModule;
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

      var BatchRoutingModule = /*@__PURE__*/function () {
        var BatchRoutingModule = function BatchRoutingModule() {
          _classCallCheck(this, BatchRoutingModule);
        };

        BatchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: BatchRoutingModule
        });
        BatchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function BatchRoutingModule_Factory(t) {
            return new (t || BatchRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return BatchRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BatchRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/manage-branch/course/batch/batch.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/course/batch/batch.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: BatchComponent */

    /***/
    function srcAppEmployeeBranchManageBranchCourseBatchBatchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchComponent", function () {
        return BatchComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var BatchComponent = /*@__PURE__*/function () {
        var BatchComponent = /*#__PURE__*/function () {
          function BatchComponent(branchService, courseService, router, route) {
            _classCallCheck(this, BatchComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.router = router;
            this.route = route;
          }

          _createClass(BatchComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;
              this.branchId = this.branchService.getBranchId();
              this.courseId = this.courseService.getCourseId();

              if (!this.branchId || !this.courseId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              var course = this.courseService.getCourseData();

              if (!course) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.loading = false;
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.courseService.deleteCourseId();
              this.courseService.deleteCourseData();
            }
          }]);

          return BatchComponent;
        }();

        BatchComponent.ɵfac = function BatchComponent_Factory(t) {
          return new (t || BatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
        };

        BatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BatchComponent,
          selectors: [["ngx-batch"]],
          decls: 1,
          vars: 0,
          template: function BatchComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
          styles: [""]
        });
        return BatchComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/manage-branch/course/batch/batch.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/employee/branch/manage-branch/course/batch/batch.module.ts ***!
      \****************************************************************************/

    /*! exports provided: BatchModule */

    /***/
    function srcAppEmployeeBranchManageBranchCourseBatchBatchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchModule", function () {
        return BatchModule;
      });
      /* harmony import */


      var _batch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./batch.component */
      "./src/app/employee/branch/manage-branch/course/batch/batch.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _batch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./batch-routing.module */
      "./src/app/employee/branch/manage-branch/course/batch/batch-routing.module.ts");

      var BatchModule = /*@__PURE__*/function () {
        var BatchModule = function BatchModule() {
          _classCallCheck(this, BatchModule);
        };

        BatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: BatchModule
        });
        BatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function BatchModule_Factory(t) {
            return new (t || BatchModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _batch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BatchRoutingModule"]]]
        });
        return BatchModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BatchModule, {
          declarations: [_batch_component__WEBPACK_IMPORTED_MODULE_0__["BatchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _batch_routing_module__WEBPACK_IMPORTED_MODULE_3__["BatchRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();