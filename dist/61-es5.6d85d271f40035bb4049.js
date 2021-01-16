(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61], {
    /***/
    "./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: BatchScheduleRoutingModule */

    /***/
    function srcAppEmployeeBranchScheduleBatchScheduleBatchScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchScheduleRoutingModule", function () {
        return BatchScheduleRoutingModule;
      });
      /* harmony import */


      var _batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./batch-schedule.component */
      "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts");
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
        component: _batch_schedule_component__WEBPACK_IMPORTED_MODULE_0__["BatchScheduleComponent"],
        children: [{
          path: 'manage',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(128)]).then(__webpack_require__.bind(null,
            /*! ./manage-batch-schedule/manage-batch-schedule.module */
            "./src/app/employee/branch/schedule/batch-schedule/manage-batch-schedule/manage-batch-schedule.module.ts")).then(function (m) {
              return m.ManageBatchScheduleModule;
            });
          }
        }, {
          path: 'add',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
            /*! ./add-schedule/add-schedule.module */
            "./src/app/employee/branch/schedule/batch-schedule/add-schedule/add-schedule.module.ts")).then(function (m) {
              return m.AddScheduleModule;
            });
          }
        }, {
          path: 'edit',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null,
            /*! ./add-schedule/add-schedule.module */
            "./src/app/employee/branch/schedule/batch-schedule/add-schedule/add-schedule.module.ts")).then(function (m) {
              return m.AddScheduleModule;
            });
          }
        }, {
          path: 'view',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            129).then(__webpack_require__.bind(null,
            /*! ./view-schedule/view-schedule.module */
            "./src/app/employee/branch/schedule/batch-schedule/view-schedule/view-schedule.module.ts")).then(function (m) {
              return m.ViewScheduleModule;
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

      var BatchScheduleRoutingModule = /*@__PURE__*/function () {
        var BatchScheduleRoutingModule = function BatchScheduleRoutingModule() {
          _classCallCheck(this, BatchScheduleRoutingModule);
        };

        BatchScheduleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: BatchScheduleRoutingModule
        });
        BatchScheduleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function BatchScheduleRoutingModule_Factory(t) {
            return new (t || BatchScheduleRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return BatchScheduleRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BatchScheduleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: BatchScheduleComponent */

    /***/
    function srcAppEmployeeBranchScheduleBatchScheduleBatchScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchScheduleComponent", function () {
        return BatchScheduleComponent;
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


      var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/branch-employee.service */
      "./src/app/services/branch-employee.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function BatchScheduleComponent_router_outlet_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      }

      var BatchScheduleComponent = /*@__PURE__*/function () {
        var BatchScheduleComponent = /*#__PURE__*/function () {
          function BatchScheduleComponent(branchService, courseService, batchService, router, route, branchEmployeeService) {
            _classCallCheck(this, BatchScheduleComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.router = router;
            this.route = route;
            this.branchEmployeeService = branchEmployeeService;
          }

          _createClass(BatchScheduleComponent, [{
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

              this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId, 'teacher').subscribe(function (employees) {
                _this.branchEmployeeService.setBranchEmployeeNameIdsData(employees);

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
              // this.branchService.deleteCategoryId();
              // this.branchService.deleteCategoryData();
              this.courseService.deleteCourseId();
              this.courseService.deleteCourseData();
              this.batchService.deleteBatchId();
              this.batchService.deleteBatchData();
              this.branchEmployeeService.deleteBranchEmployeeNameIdsData();
            }
          }]);

          return BatchScheduleComponent;
        }();

        BatchScheduleComponent.ɵfac = function BatchScheduleComponent_Factory(t) {
          return new (t || BatchScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_5__["BranchEmployeeService"]));
        };

        BatchScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BatchScheduleComponent,
          selectors: [["ngx-batch-schedule"]],
          decls: 1,
          vars: 1,
          consts: [[4, "ngIf"]],
          template: function BatchScheduleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BatchScheduleComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
          styles: [""]
        });
        return BatchScheduleComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/employee/branch/schedule/batch-schedule/batch-schedule.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: BatchScheduleModule */

    /***/
    function srcAppEmployeeBranchScheduleBatchScheduleBatchScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BatchScheduleModule", function () {
        return BatchScheduleModule;
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


      var _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./batch-schedule-routing.module */
      "./src/app/employee/branch/schedule/batch-schedule/batch-schedule-routing.module.ts");
      /* harmony import */


      var _batch_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./batch-schedule.component */
      "./src/app/employee/branch/schedule/batch-schedule/batch-schedule.component.ts");

      var BatchScheduleModule = /*@__PURE__*/function () {
        var BatchScheduleModule = function BatchScheduleModule() {
          _classCallCheck(this, BatchScheduleModule);
        };

        BatchScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: BatchScheduleModule
        });
        BatchScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function BatchScheduleModule_Factory(t) {
            return new (t || BatchScheduleModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchScheduleRoutingModule"]]]
        });
        return BatchScheduleModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BatchScheduleModule, {
          declarations: [_batch_schedule_component__WEBPACK_IMPORTED_MODULE_3__["BatchScheduleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _batch_schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__["BatchScheduleRoutingModule"]]
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