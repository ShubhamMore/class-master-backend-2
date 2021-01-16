(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52], {
    /***/
    "./src/app/employee/branch/assignment/assignment-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/employee/branch/assignment/assignment-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AssignmentRoutingModule */

    /***/
    function srcAppEmployeeBranchAssignmentAssignmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentRoutingModule", function () {
        return AssignmentRoutingModule;
      });
      /* harmony import */


      var _assignment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./assignment.component */
      "./src/app/employee/branch/assignment/assignment.component.ts");
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
            86).then(__webpack_require__.bind(null,
            /*! ./batch-assignment/batch-assignment.module */
            "./src/app/employee/branch/assignment/batch-assignment/batch-assignment.module.ts")).then(function (m) {
              return m.BatchAssignmentModule;
            });
          }
        }, {
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(87)]).then(__webpack_require__.bind(null,
            /*! ./manage-assignment/manage-assignment.module */
            "./src/app/employee/branch/assignment/manage-assignment/manage-assignment.module.ts")).then(function (m) {
              return m.ManageAssignmentModule;
            });
          }
        }, {
          path: 'submission',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(84)]).then(__webpack_require__.bind(null,
            /*! ./assignment-submission/assignment-submission.module */
            "./src/app/employee/branch/assignment/assignment-submission/assignment-submission.module.ts")).then(function (m) {
              return m.AssignmentSubmissionModule;
            });
          }
        }, {
          path: 'add',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(14)]).then(__webpack_require__.bind(null,
            /*! ./save-assignment/save-assignment.module */
            "./src/app/employee/branch/assignment/save-assignment/save-assignment.module.ts")).then(function (m) {
              return m.SaveAssignmentModule;
            });
          }
        }, {
          path: 'edit',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(14)]).then(__webpack_require__.bind(null,
            /*! ./save-assignment/save-assignment.module */
            "./src/app/employee/branch/assignment/save-assignment/save-assignment.module.ts")).then(function (m) {
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

      var AssignmentRoutingModule = /*@__PURE__*/function () {
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
        return AssignmentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssignmentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/assignment/assignment.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/employee/branch/assignment/assignment.component.ts ***!
      \********************************************************************/

    /*! exports provided: AssignmentComponent */

    /***/
    function srcAppEmployeeBranchAssignmentAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function () {
        return AssignmentComponent;
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


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../services/subject.service */
      "./src/app/services/subject.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AssignmentComponent = /*@__PURE__*/function () {
        var AssignmentComponent = /*#__PURE__*/function () {
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
          return new (t || AssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_2__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_6__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
        };

        AssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AssignmentComponent,
          selectors: [["ngx-assignment"]],
          decls: 1,
          vars: 0,
          template: function AssignmentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
          styles: [""]
        });
        return AssignmentComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/assignment/assignment.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/employee/branch/assignment/assignment.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AssignmentModule */

    /***/
    function srcAppEmployeeBranchAssignmentAssignmentModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/employee/branch/assignment/assignment-routing.module.ts");
      /* harmony import */


      var _assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assignment.component */
      "./src/app/employee/branch/assignment/assignment.component.ts");

      var AssignmentModule = /*@__PURE__*/function () {
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
        return AssignmentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssignmentModule, {
          declarations: [_assignment_component__WEBPACK_IMPORTED_MODULE_3__["AssignmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssignmentRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/services/branch-employee.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/branch-employee.service.ts ***!
      \*****************************************************/

    /*! exports provided: BranchEmployeeService */

    /***/
    function srcAppServicesBranchEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchEmployeeService", function () {
        return BranchEmployeeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared-services/http.service */
      "./src/app/services/shared-services/http.service.ts");

      var BranchEmployeeService = /*@__PURE__*/function () {
        var BranchEmployeeService = /*#__PURE__*/function () {
          function BranchEmployeeService(httpService) {
            _classCallCheck(this, BranchEmployeeService);

            this.httpService = httpService;
            this.branchEmployee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.branchEmployees = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.branchEmployeeNameIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          }

          _createClass(BranchEmployeeService, [{
            key: "setBranchEmployeeData",
            value: function setBranchEmployeeData(branchEmployee) {
              this.branchEmployee.next(branchEmployee);
            }
          }, {
            key: "getBranchEmployeeData",
            value: function getBranchEmployeeData() {
              return this.branchEmployee;
            }
          }, {
            key: "deleteBranchEmployeeData",
            value: function deleteBranchEmployeeData() {
              this.branchEmployee.next(null);
            }
          }, {
            key: "setBranchEmployeesData",
            value: function setBranchEmployeesData(branchEmployees) {
              this.branchEmployees.next(branchEmployees);
            }
          }, {
            key: "getBranchEmployeesData",
            value: function getBranchEmployeesData() {
              return this.branchEmployees;
            }
          }, {
            key: "deleteBranchEmployeesData",
            value: function deleteBranchEmployeesData() {
              this.branchEmployees.next([]);
            }
          }, {
            key: "setBranchEmployeeNameIdsData",
            value: function setBranchEmployeeNameIdsData(branchEmployeeNameIds) {
              this.branchEmployeeNameIds.next(branchEmployeeNameIds);
            }
          }, {
            key: "getBranchEmployeeNameIdsData",
            value: function getBranchEmployeeNameIdsData() {
              return this.branchEmployeeNameIds;
            }
          }, {
            key: "deleteBranchEmployeeNameIdsData",
            value: function deleteBranchEmployeeNameIdsData() {
              this.branchEmployeeNameIds.next([]);
            }
          }, {
            key: "setBranchEmployeeId",
            value: function setBranchEmployeeId(branchEmployeeId) {
              this.branchEmployeeId = branchEmployeeId;
            }
          }, {
            key: "getBranchEmployeeId",
            value: function getBranchEmployeeId() {
              return this.branchEmployeeId;
            }
          }, {
            key: "deleteBranchEmployeeId",
            value: function deleteBranchEmployeeId() {
              this.branchEmployeeId = null;
            }
          }, {
            key: "getBranchEmployees",
            value: function getBranchEmployees(branch, type) {
              var data = {
                api: 'getBranchEmployees',
                data: {
                  branch: branch,
                  type: type
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeesForBatch",
            value: function getBranchEmployeesForBatch(branch, role) {
              var data = {
                api: 'getBranchEmployeesForBatch',
                data: {
                  branch: branch,
                  role: role
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeNameIds",
            value: function getBranchEmployeeNameIds(branch, type) {
              var data = {
                api: 'getBranchEmployeeNameIds',
                data: {
                  branch: branch,
                  type: type
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchAllEmployeeNameIds",
            value: function getBranchAllEmployeeNameIds(branch) {
              var data = {
                api: 'getBranchAllEmployeeNameIds',
                data: {
                  branch: branch
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeNameIdsForBatch",
            value: function getBranchEmployeeNameIdsForBatch(branch, role) {
              var data = {
                api: 'getBranchEmployeeNameIdsForBatch',
                data: {
                  branch: branch,
                  role: role
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployee",
            value: function getBranchEmployee(id, employee) {
              var data = {
                api: 'addBranchEmployee',
                data: {
                  id: id,
                  employee: employee
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeRole",
            value: function getBranchEmployeeRole(branch) {
              var data = {
                api: 'getBranchEmployeeRole',
                data: {
                  branch: branch
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeForSalary",
            value: function getBranchEmployeeForSalary(id, employee) {
              var data = {
                api: 'getBranchEmployeeForSalary',
                data: {
                  id: id,
                  employee: employee
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "newBranchEmployee",
            value: function newBranchEmployee(branchEmployee) {
              var data = {
                api: 'newBranchEmployee',
                data: branchEmployee
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeForEditing",
            value: function getBranchEmployeeForEditing(id, employee) {
              var data = {
                api: 'getBranchEmployeeForEditing',
                data: {
                  id: id,
                  employee: employee
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "editBranchEmployee",
            value: function editBranchEmployee(branchEmployee) {
              var data = {
                api: 'updateBranchEmployee',
                data: branchEmployee
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "changeBranchEmployeeStatus",
            value: function changeBranchEmployeeStatus(id, status) {
              var data = {
                api: 'changeBranchEmployeeStatus',
                data: {
                  id: id,
                  status: status
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "deleteBranchEmployee",
            value: function deleteBranchEmployee(id) {
              var data = {
                api: 'deleteBranchEmployee',
                data: {
                  id: id
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }]);

          return BranchEmployeeService;
        }();

        BranchEmployeeService.ɵfac = function BranchEmployeeService_Factory(t) {
          return new (t || BranchEmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
        };

        BranchEmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: BranchEmployeeService,
          factory: BranchEmployeeService.ɵfac,
          providedIn: 'root'
        });
        return BranchEmployeeService;
      }();
      /***/

    }
  }]);
})();