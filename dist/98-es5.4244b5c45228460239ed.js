(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98], {
    /***/
    "./src/app/employee/branch/lecture/lecture-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/employee/branch/lecture/lecture-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LectureRoutingModule */

    /***/
    function srcAppEmployeeBranchLectureLectureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureRoutingModule", function () {
        return LectureRoutingModule;
      });
      /* harmony import */


      var _lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lecture.component */
      "./src/app/employee/branch/lecture/lecture.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var routes = [{
        path: '',
        component: _lecture_component__WEBPACK_IMPORTED_MODULE_0__["LectureComponent"],
        children: [{
          path: 'batch',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            97).then(__webpack_require__.bind(null,
            /*! ./batch-lecture/batch-lecture.module */
            "./src/app/employee/branch/lecture/batch-lecture/batch-lecture.module.ts")).then(function (m) {
              return m.BatchLectureModule;
            });
          }
        }, {
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e(1), __webpack_require__.e(5), __webpack_require__.e(54)]).then(__webpack_require__.bind(null,
            /*! ./manage-lecture/manage-lecture.module */
            "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.module.ts")).then(function (m) {
              return m.ManageLectureModule;
            });
          }
        }, {
          path: 'view',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            103).then(__webpack_require__.bind(null,
            /*! ./view-lecture/view-lecture.module */
            "./src/app/employee/branch/lecture/view-lecture/view-lecture.module.ts")).then(function (m) {
              return m.ViewLectureModule;
            });
          }
        }, {
          path: 'material',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            101).then(__webpack_require__.bind(null,
            /*! ./study-material/study-material.module */
            "./src/app/employee/branch/lecture/study-material/study-material.module.ts")).then(function (m) {
              return m.StudyMaterialModule;
            });
          }
        }, {
          path: 'q&a',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(36)]).then(__webpack_require__.bind(null,
            /*! ./question-answers/question-answers.module */
            "./src/app/employee/branch/lecture/question-answers/question-answers.module.ts")).then(function (m) {
              return m.QuestionAnswersModule;
            });
          }
        }, {
          path: 'attendance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(96)]).then(__webpack_require__.bind(null,
            /*! ./attendance/attendance.module */
            "./src/app/employee/branch/lecture/attendance/attendance.module.ts")).then(function (m) {
              return m.AttendanceModule;
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

      var LectureRoutingModule = /*@__PURE__*/function () {
        var LectureRoutingModule = function LectureRoutingModule() {
          _classCallCheck(this, LectureRoutingModule);
        };

        LectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: LectureRoutingModule
        });
        LectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function LectureRoutingModule_Factory(t) {
            return new (t || LectureRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return LectureRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LectureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/lecture/lecture.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/employee/branch/lecture/lecture.component.ts ***!
      \**************************************************************/

    /*! exports provided: LectureComponent */

    /***/
    function srcAppEmployeeBranchLectureLectureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureComponent", function () {
        return LectureComponent;
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


      var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/branch-employee.service */
      "./src/app/services/branch-employee.service.ts");
      /* harmony import */


      var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/lecture.service */
      "./src/app/services/lecture.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var LectureComponent = /*@__PURE__*/function () {
        var LectureComponent = /*#__PURE__*/function () {
          function LectureComponent(branchService, branchEmployeeService, lectureService, courseService, batchService, router, route) {
            _classCallCheck(this, LectureComponent);

            this.branchService = branchService;
            this.branchEmployeeService = branchEmployeeService;
            this.lectureService = lectureService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.router = router;
            this.route = route;
          }

          _createClass(LectureComponent, [{
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
              this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId, 'teacher').subscribe(function (employees) {
                _this.branchEmployeeService.setBranchEmployeesData(employees);

                _this.loading = false;
              }, function (error) {
                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.courseService.deleteCoursesData();
              this.batchService.deleteBatchesData();
              this.lectureService.setSearchDate(null);
            }
          }]);

          return LectureComponent;
        }();

        LectureComponent.ɵfac = function LectureComponent_Factory(t) {
          return new (t || LectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        LectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: LectureComponent,
          selectors: [["ngx-lecture"]],
          decls: 1,
          vars: 0,
          template: function LectureComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
          styles: [""]
        });
        return LectureComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/lecture/lecture.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/employee/branch/lecture/lecture.module.ts ***!
      \***********************************************************/

    /*! exports provided: LectureModule */

    /***/
    function srcAppEmployeeBranchLectureLectureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LectureModule", function () {
        return LectureModule;
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


      var _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lecture-routing.module */
      "./src/app/employee/branch/lecture/lecture-routing.module.ts");
      /* harmony import */


      var _lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lecture.component */
      "./src/app/employee/branch/lecture/lecture.component.ts");

      var LectureModule = /*@__PURE__*/function () {
        var LectureModule = function LectureModule() {
          _classCallCheck(this, LectureModule);
        };

        LectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: LectureModule
        });
        LectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function LectureModule_Factory(t) {
            return new (t || LectureModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]]]
        });
        return LectureModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LectureModule, {
          declarations: [_lecture_component__WEBPACK_IMPORTED_MODULE_3__["LectureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["LectureRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();