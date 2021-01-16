(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[187], {
    /***/
    "./src/app/institute/branch/manage-branch/course/course-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: CourseRoutingModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function () {
        return CourseRoutingModule;
      });
      /* harmony import */


      var _course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./course.component */
      "./src/app/institute/branch/manage-branch/course/course.component.ts");
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
        component: _course_component__WEBPACK_IMPORTED_MODULE_0__["CourseComponent"],
        children: [{
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(188)]).then(__webpack_require__.bind(null,
            /*! ./manage-course/manage-course.module */
            "./src/app/institute/branch/manage-branch/course/manage-course/manage-course.module.ts")).then(function (m) {
              return m.ManageCourseModule;
            });
          }
        }, {
          path: 'add',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null,
            /*! ./add-course/add-course.module */
            "./src/app/institute/branch/manage-branch/course/add-course/add-course.module.ts")).then(function (m) {
              return m.AddCourseModule;
            });
          }
        }, {
          path: 'edit',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(31)]).then(__webpack_require__.bind(null,
            /*! ./add-course/add-course.module */
            "./src/app/institute/branch/manage-branch/course/add-course/add-course.module.ts")).then(function (m) {
              return m.AddCourseModule;
            });
          }
        }, {
          path: 'batch',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(181)]).then(__webpack_require__.bind(null,
            /*! ./batch/batch.module */
            "./src/app/institute/branch/manage-branch/course/batch/batch.module.ts")).then(function (m) {
              return m.BatchModule;
            });
          }
        }, {
          path: 'course-material',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(184)]).then(__webpack_require__.bind(null,
            /*! ./course-material/course-material.module */
            "./src/app/institute/branch/manage-branch/course/course-material/course-material.module.ts")).then(function (m) {
              return m.CourseMaterialModule;
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

      var CourseRoutingModule = /*@__PURE__*/function () {
        var CourseRoutingModule = function CourseRoutingModule() {
          _classCallCheck(this, CourseRoutingModule);
        };

        CourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: CourseRoutingModule
        });
        CourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function CourseRoutingModule_Factory(t) {
            return new (t || CourseRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return CourseRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/course.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CourseComponent */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
        return CourseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CourseComponent = /*@__PURE__*/function () {
        var CourseComponent = /*#__PURE__*/function () {
          function CourseComponent(branchService, router, route) {
            _classCallCheck(this, CourseComponent);

            this.branchService = branchService;
            this.router = router;
            this.route = route;
          }

          _createClass(CourseComponent, [{
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

              this.loading = false;
            }
          }]);

          return CourseComponent;
        }();

        CourseComponent.ɵfac = function CourseComponent_Factory(t) {
          return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
        };

        CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CourseComponent,
          selectors: [["ngx-course"]],
          decls: 1,
          vars: 0,
          template: function CourseComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
          styles: [""]
        });
        return CourseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/course.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course.module.ts ***!
      \************************************************************************/

    /*! exports provided: CourseModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseModule", function () {
        return CourseModule;
      });
      /* harmony import */


      var _course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./course.component */
      "./src/app/institute/branch/manage-branch/course/course.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-routing.module */
      "./src/app/institute/branch/manage-branch/course/course-routing.module.ts");

      var CourseModule = /*@__PURE__*/function () {
        var CourseModule = function CourseModule() {
          _classCallCheck(this, CourseModule);
        };

        CourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: CourseModule
        });
        CourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function CourseModule_Factory(t) {
            return new (t || CourseModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseRoutingModule"]]]
        });
        return CourseModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseModule, {
          declarations: [_course_component__WEBPACK_IMPORTED_MODULE_0__["CourseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();