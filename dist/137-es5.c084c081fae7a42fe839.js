function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137], {
  /***/
  "./src/app/institute/branch/assignment/assignment-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AssignmentRoutingModule */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentRoutingModule", function () {
      return AssignmentRoutingModule;
    });
    /* harmony import */


    var _assignment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./assignment.component */
    "./src/app/institute/branch/assignment/assignment.component.ts");
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
      component: _assignment_component__WEBPACK_IMPORTED_MODULE_0__["AssignmentComponent"],
      children: [{
        path: 'batch',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          140).then(__webpack_require__.bind(null,
          /*! ./batch-assignment/batch-assignment.module */
          "./src/app/institute/branch/assignment/batch-assignment/batch-assignment.module.ts")).then(function (m) {
            return m.BatchAssignmentModule;
          });
        }
      }, {
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(141)]).then(__webpack_require__.bind(null,
          /*! ./manage-assignment/manage-assignment.module */
          "./src/app/institute/branch/assignment/manage-assignment/manage-assignment.module.ts")).then(function (m) {
            return m.ManageAssignmentModule;
          });
        }
      }, {
        path: 'submission',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(138)]).then(__webpack_require__.bind(null,
          /*! ./assignment-submission/assignment-submission.module */
          "./src/app/institute/branch/assignment/assignment-submission/assignment-submission.module.ts")).then(function (m) {
            return m.AssignmentSubmissionModule;
          });
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(22)]).then(__webpack_require__.bind(null,
          /*! ./save-assignment/save-assignment.module */
          "./src/app/institute/branch/assignment/save-assignment/save-assignment.module.ts")).then(function (m) {
            return m.SaveAssignmentModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(22)]).then(__webpack_require__.bind(null,
          /*! ./save-assignment/save-assignment.module */
          "./src/app/institute/branch/assignment/save-assignment/save-assignment.module.ts")).then(function (m) {
            return m.SaveAssignmentModule;
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

    var AssignmentRoutingModule = function AssignmentRoutingModule() {
      _classCallCheck(this, AssignmentRoutingModule);
    };

    AssignmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AssignmentRoutingModule
    });
    AssignmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AssignmentRoutingModule_Factory(t) {
        return new (t || AssignmentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssignmentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssignmentRoutingModule, [{
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
  "./src/app/institute/branch/assignment/assignment.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AssignmentComponent */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function () {
      return AssignmentComponent;
    });
    /* harmony import */


    var _services_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../services/subject.service */
    "./src/app/services/subject.service.ts");
    /* harmony import */


    var _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/lecture.service */
    "./src/app/services/lecture.service.ts");
    /* harmony import */


    var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/branch-employee.service */
    "./src/app/services/branch-employee.service.ts");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AssignmentComponent =
    /*#__PURE__*/
    function () {
      function AssignmentComponent(branchService, branchEmployeeService, lectureService, courseService, batchService, subjectService, router, route) {
        _classCallCheck(this, AssignmentComponent);

        this.branchService = branchService;
        this.branchEmployeeService = branchEmployeeService;
        this.lectureService = lectureService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.subjectService = subjectService;
        this.router = router;
        this.route = route;
      }

      _createClass(AssignmentComponent, [{
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
          this.courseService.deleteCourseData();
          this.batchService.deleteBatchData();
          this.subjectService.deleteSubjectsData();
          this.lectureService.setSearchDate(null);
        }
      }]);

      return AssignmentComponent;
    }();

    AssignmentComponent.ɵfac = function AssignmentComponent_Factory(t) {
      return new (t || AssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_0__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    AssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AssignmentComponent,
      selectors: [["ngx-assignment"]],
      decls: 1,
      vars: 0,
      template: function AssignmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'ngx-assignment',
          templateUrl: './assignment.component.html',
          styleUrls: ['./assignment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]
        }, {
          type: _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]
        }, {
          type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["LectureService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
        }, {
          type: _services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]
        }, {
          type: _services_subject_service__WEBPACK_IMPORTED_MODULE_0__["SubjectService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/assignment/assignment.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment.module.ts ***!
    \******************************************************************/

  /*! exports provided: AssignmentModule */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentModule", function () {
      return AssignmentModule;
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


    var _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./assignment-routing.module */
    "./src/app/institute/branch/assignment/assignment-routing.module.ts");
    /* harmony import */


    var _assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assignment.component */
    "./src/app/institute/branch/assignment/assignment.component.ts");

    var AssignmentModule = function AssignmentModule() {
      _classCallCheck(this, AssignmentModule);
    };

    AssignmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AssignmentModule
    });
    AssignmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AssignmentModule_Factory(t) {
        return new (t || AssignmentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssignmentModule, {
        declarations: [_assignment_component__WEBPACK_IMPORTED_MODULE_3__["AssignmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_assignment_component__WEBPACK_IMPORTED_MODULE_3__["AssignmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);