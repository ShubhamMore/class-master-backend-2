(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./src/app/services/branch-employee.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/branch-employee.service.ts ***!
  \*****************************************************/
/*! exports provided: BranchEmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchEmployeeService", function() { return BranchEmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let BranchEmployeeService = /*@__PURE__*/ (() => {
    class BranchEmployeeService {
        constructor(httpService) {
            this.httpService = httpService;
            this.branchEmployee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.branchEmployees = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.branchEmployeeNameIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }
        setBranchEmployeeData(branchEmployee) {
            this.branchEmployee.next(branchEmployee);
        }
        getBranchEmployeeData() {
            return this.branchEmployee;
        }
        deleteBranchEmployeeData() {
            this.branchEmployee.next(null);
        }
        setBranchEmployeesData(branchEmployees) {
            this.branchEmployees.next(branchEmployees);
        }
        getBranchEmployeesData() {
            return this.branchEmployees;
        }
        deleteBranchEmployeesData() {
            this.branchEmployees.next([]);
        }
        setBranchEmployeeNameIdsData(branchEmployeeNameIds) {
            this.branchEmployeeNameIds.next(branchEmployeeNameIds);
        }
        getBranchEmployeeNameIdsData() {
            return this.branchEmployeeNameIds;
        }
        deleteBranchEmployeeNameIdsData() {
            this.branchEmployeeNameIds.next([]);
        }
        setBranchEmployeeId(branchEmployeeId) {
            this.branchEmployeeId = branchEmployeeId;
        }
        getBranchEmployeeId() {
            return this.branchEmployeeId;
        }
        deleteBranchEmployeeId() {
            this.branchEmployeeId = null;
        }
        getBranchEmployees(branch, type) {
            const data = { api: 'getBranchEmployees', data: { branch, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeesForBatch(branch, role) {
            const data = { api: 'getBranchEmployeesForBatch', data: { branch, role } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeNameIds(branch, type) {
            const data = { api: 'getBranchEmployeeNameIds', data: { branch, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchAllEmployeeNameIds(branch) {
            const data = { api: 'getBranchAllEmployeeNameIds', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeNameIdsForBatch(branch, role) {
            const data = { api: 'getBranchEmployeeNameIdsForBatch', data: { branch, role } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployee(id, employee) {
            const data = { api: 'addBranchEmployee', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeRole(branch) {
            const data = { api: 'getBranchEmployeeRole', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeForSalary(id, employee) {
            const data = { api: 'getBranchEmployeeForSalary', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newBranchEmployee(branchEmployee) {
            const data = { api: 'newBranchEmployee', data: branchEmployee };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeForEditing(id, employee) {
            const data = { api: 'getBranchEmployeeForEditing', data: { id, employee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editBranchEmployee(branchEmployee) {
            const data = { api: 'updateBranchEmployee', data: branchEmployee };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeBranchEmployeeStatus(id, status) {
            const data = { api: 'changeBranchEmployeeStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteBranchEmployee(id) {
            const data = { api: 'deleteBranchEmployee', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    BranchEmployeeService.ɵfac = function BranchEmployeeService_Factory(t) { return new (t || BranchEmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BranchEmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchEmployeeService, factory: BranchEmployeeService.ɵfac, providedIn: 'root' });
    return BranchEmployeeService;
})();


/***/ }),

/***/ "./src/app/services/employee-leave.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/employee-leave.service.ts ***!
  \****************************************************/
/*! exports provided: EmployeeLeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeLeaveService", function() { return EmployeeLeaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let EmployeeLeaveService = /*@__PURE__*/ (() => {
    class EmployeeLeaveService {
        constructor(httpService) {
            this.httpService = httpService;
            this.employeeLeave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setEmployeeLeaveData(employeeLeave) {
            this.employeeLeave.next(employeeLeave);
        }
        getEmployeeLeaveData() {
            return this.employeeLeave;
        }
        deleteEmployeeLeaveData() {
            this.employeeLeave.next(null);
        }
        setEmployeeLeaveId(employeeLeaveId) {
            this.employeeLeaveId = employeeLeaveId;
        }
        getEmployeeLeaveId() {
            return this.employeeLeaveId;
        }
        deleteEmployeeLeaveId() {
            this.employeeLeaveId = null;
        }
        createEmployeeLeave(employeeLeave) {
            const data = { api: 'createEmployeeLeave', data: employeeLeave };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeEmployeeLeaveStatus(leave) {
            const data = { api: 'changeEmployeeLeaveStatus', data: leave };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeLeaves(employee, month, year) {
            const data = { api: 'getEmployeeLeaves', data: { employee, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchAllEmployeeLeaves(branch, employee, month, year) {
            const data = { api: 'getBranchAllEmployeeLeaves', data: { branch, employee, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeLeaves(branch, employee, month, year) {
            const data = { api: 'getBranchEmployeeLeaves', data: { branch, employee, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getMyBranchLeaves(branch, month, year) {
            const data = { api: 'getMyBranchLeaves', data: { branch, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeLeave(id) {
            const data = { api: 'getEmployeeLeave', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        updateEmployeeLeave(employeeLeave) {
            const data = { api: 'updateEmployeeLeave', data: employeeLeave };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteEmployeeLeave(id) {
            const data = { api: 'deleteEmployeeLeave', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    EmployeeLeaveService.ɵfac = function EmployeeLeaveService_Factory(t) { return new (t || EmployeeLeaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeLeaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeLeaveService, factory: EmployeeLeaveService.ɵfac, providedIn: 'root' });
    return EmployeeLeaveService;
})();


/***/ })

}]);