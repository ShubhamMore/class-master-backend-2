(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36], {
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

    },

    /***/
    "./src/app/services/employee-leave.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/services/employee-leave.service.ts ***!
      \****************************************************/

    /*! exports provided: EmployeeLeaveService */

    /***/
    function srcAppServicesEmployeeLeaveServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeLeaveService", function () {
        return EmployeeLeaveService;
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

      var EmployeeLeaveService = /*@__PURE__*/function () {
        var EmployeeLeaveService = /*#__PURE__*/function () {
          function EmployeeLeaveService(httpService) {
            _classCallCheck(this, EmployeeLeaveService);

            this.httpService = httpService;
            this.employeeLeave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          }

          _createClass(EmployeeLeaveService, [{
            key: "setEmployeeLeaveData",
            value: function setEmployeeLeaveData(employeeLeave) {
              this.employeeLeave.next(employeeLeave);
            }
          }, {
            key: "getEmployeeLeaveData",
            value: function getEmployeeLeaveData() {
              return this.employeeLeave;
            }
          }, {
            key: "deleteEmployeeLeaveData",
            value: function deleteEmployeeLeaveData() {
              this.employeeLeave.next(null);
            }
          }, {
            key: "setEmployeeLeaveId",
            value: function setEmployeeLeaveId(employeeLeaveId) {
              this.employeeLeaveId = employeeLeaveId;
            }
          }, {
            key: "getEmployeeLeaveId",
            value: function getEmployeeLeaveId() {
              return this.employeeLeaveId;
            }
          }, {
            key: "deleteEmployeeLeaveId",
            value: function deleteEmployeeLeaveId() {
              this.employeeLeaveId = null;
            }
          }, {
            key: "createEmployeeLeave",
            value: function createEmployeeLeave(employeeLeave) {
              var data = {
                api: 'createEmployeeLeave',
                data: employeeLeave
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "changeEmployeeLeaveStatus",
            value: function changeEmployeeLeaveStatus(leave) {
              var data = {
                api: 'changeEmployeeLeaveStatus',
                data: leave
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getEmployeeLeaves",
            value: function getEmployeeLeaves(employee, month, year) {
              var data = {
                api: 'getEmployeeLeaves',
                data: {
                  employee: employee,
                  month: month,
                  year: year
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchAllEmployeeLeaves",
            value: function getBranchAllEmployeeLeaves(branch, employee, month, year) {
              var data = {
                api: 'getBranchAllEmployeeLeaves',
                data: {
                  branch: branch,
                  employee: employee,
                  month: month,
                  year: year
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getBranchEmployeeLeaves",
            value: function getBranchEmployeeLeaves(branch, employee, month, year) {
              var data = {
                api: 'getBranchEmployeeLeaves',
                data: {
                  branch: branch,
                  employee: employee,
                  month: month,
                  year: year
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getMyBranchLeaves",
            value: function getMyBranchLeaves(branch, month, year) {
              var data = {
                api: 'getMyBranchLeaves',
                data: {
                  branch: branch,
                  month: month,
                  year: year
                }
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "getEmployeeLeave",
            value: function getEmployeeLeave(id) {
              var data = {
                api: 'getEmployeeLeave',
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
          }, {
            key: "updateEmployeeLeave",
            value: function updateEmployeeLeave(employeeLeave) {
              var data = {
                api: 'updateEmployeeLeave',
                data: employeeLeave
              };
              return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
                return response;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            }
          }, {
            key: "deleteEmployeeLeave",
            value: function deleteEmployeeLeave(id) {
              var data = {
                api: 'deleteEmployeeLeave',
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

          return EmployeeLeaveService;
        }();

        EmployeeLeaveService.ɵfac = function EmployeeLeaveService_Factory(t) {
          return new (t || EmployeeLeaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
        };

        EmployeeLeaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: EmployeeLeaveService,
          factory: EmployeeLeaveService.ɵfac,
          providedIn: 'root'
        });
        return EmployeeLeaveService;
      }();
      /***/

    }
  }]);
})();