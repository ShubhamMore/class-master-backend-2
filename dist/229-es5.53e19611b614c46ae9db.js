(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[229], {
    /***/
    "./src/app/student/branch/course/course-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/student/branch/course/course-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: CourseRoutingModule */

    /***/
    function srcAppStudentBranchCourseCourseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function () {
        return CourseRoutingModule;
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


      var _course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course.component */
      "./src/app/student/branch/course/course.component.ts");

      var routes = [{
        path: '',
        component: _course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"],
        children: [{
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(237)]).then(__webpack_require__.bind(null,
            /*! ./manage-course/manage-course.module */
            "./src/app/student/branch/course/manage-course/manage-course.module.ts")).then(function (m) {
              return m.ManageCourseModule;
            });
          }
        }, {
          path: 'material',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(225)]).then(__webpack_require__.bind(null,
            /*! ./course-material/course-material.module */
            "./src/app/student/branch/course/course-material/course-material.module.ts")).then(function (m) {
              return m.CourseMaterialModule;
            });
          }
        }, {
          path: 'installment',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(224)]).then(__webpack_require__.bind(null,
            /*! ./course-installment/course-installment.module */
            "./src/app/student/branch/course/course-installment/course-installment.module.ts")).then(function (m) {
              return m.CourseInstallmentModule;
            });
          }
        }, {
          path: 'attendance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(222)]).then(__webpack_require__.bind(null,
            /*! ./course-attendance/course-attendance.module */
            "./src/app/student/branch/course/course-attendance/course-attendance.module.ts")).then(function (m) {
              return m.CourseAttendanceModule;
            });
          }
        }, {
          path: 'performance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(228)]).then(__webpack_require__.bind(null,
            /*! ./course-performance/course-performance.module */
            "./src/app/student/branch/course/course-performance/course-performance.module.ts")).then(function (m) {
              return m.CoursePerformanceModule;
            });
          }
        }, {
          path: 'lecture',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(230)]).then(__webpack_require__.bind(null,
            /*! ./lecture/lecture.module */
            "./src/app/student/branch/course/lecture/lecture.module.ts")).then(function (m) {
              return m.LectureModule;
            });
          }
        }, {
          path: 'assignment',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(219)]).then(__webpack_require__.bind(null,
            /*! ./assignment/assignment.module */
            "./src/app/student/branch/course/assignment/assignment.module.ts")).then(function (m) {
              return m.AssignmentModule;
            });
          }
        }, {
          path: 'online-test',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(240)]).then(__webpack_require__.bind(null,
            /*! ./online-test/online-test.module */
            "./src/app/student/branch/course/online-test/online-test.module.ts")).then(function (m) {
              return m.OnlineTestModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'manage?type=course',
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

      var CourseRoutingModule = /*@__PURE__*/function () {
        var CourseRoutingModule = function CourseRoutingModule() {
          _classCallCheck(this, CourseRoutingModule);
        };

        CourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CourseRoutingModule
        });
        CourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CourseRoutingModule_Factory(t) {
            return new (t || CourseRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CourseRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/student/branch/course/course.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/student/branch/course/course.component.ts ***!
      \***********************************************************/

    /*! exports provided: CourseComponent */

    /***/
    function srcAppStudentBranchCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      /*! ./../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CourseComponent = /*@__PURE__*/function () {
        var CourseComponent = /*#__PURE__*/function () {
          function CourseComponent(branchService, toastrService, router, route) {
            _classCallCheck(this, CourseComponent);

            this.branchService = branchService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
          }

          _createClass(CourseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.back();
                this.showToastr('top-right', 'danger', 'Student Details Not Available');
                return;
              }
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
            key: "back",
            value: function back() {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return CourseComponent;
        }();

        CourseComponent.ɵfac = function CourseComponent_Factory(t) {
          return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
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
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
          styles: [""]
        });
        return CourseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/student/branch/course/course.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/student/branch/course/course.module.ts ***!
      \********************************************************/

    /*! exports provided: CourseModule */

    /***/
    function srcAppStudentBranchCourseCourseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseModule", function () {
        return CourseModule;
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


      var _course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-routing.module */
      "./src/app/student/branch/course/course-routing.module.ts");
      /* harmony import */


      var _course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course.component */
      "./src/app/student/branch/course/course.component.ts");

      var CourseModule = /*@__PURE__*/function () {
        var CourseModule = function CourseModule() {
          _classCallCheck(this, CourseModule);
        };

        CourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CourseModule
        });
        CourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CourseModule_Factory(t) {
            return new (t || CourseModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"]]]
        });
        return CourseModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseModule, {
          declarations: [_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();