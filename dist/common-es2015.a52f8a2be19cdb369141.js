(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/capitalize/index.js":
/*!******************************************!*\
  !*** ./node_modules/capitalize/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string, preserve) {
  if (!preserve) {
    string = string.toLowerCase();
  }
  return string.replace(/(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g, function (m) {
    return m.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):undefined}();

/***/ }),

/***/ "./src/app/authentication/auth/guards/branch.auth.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/auth/guards/branch.auth.guard.ts ***!
  \*****************************************************************/
/*! exports provided: BranchAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchAuthGuard", function() { return BranchAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let BranchAuthGuard = /*@__PURE__*/ (() => {
    class BranchAuthGuard {
        constructor(branchService, router) {
            this.branchService = branchService;
            this.router = router;
        }
        // tslint:disable-next-line: max-line-length
        canActivate(route, router) {
            const branchId = this.branchService.getBranchId();
            if (branchId && branchId !== '') {
                return true;
            }
            return this.router.createUrlTree(['/']);
        }
        // tslint:disable-next-line: max-line-length
        canActivateChild(route, state) {
            return this.canActivate(route, state);
        }
    }
    BranchAuthGuard.ɵfac = function BranchAuthGuard_Factory(t) { return new (t || BranchAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    BranchAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchAuthGuard, factory: BranchAuthGuard.ɵfac, providedIn: 'root' });
    return BranchAuthGuard;
})();


/***/ }),

/***/ "./src/app/services/assignment-submission.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/assignment-submission.service.ts ***!
  \***********************************************************/
/*! exports provided: AssignmentSubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionService", function() { return AssignmentSubmissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let AssignmentSubmissionService = /*@__PURE__*/ (() => {
    class AssignmentSubmissionService {
        constructor(httpService) {
            this.httpService = httpService;
            this.assignmentSubmission = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setAssignmentSubmissionData(assignmentSubmission) {
            this.assignmentSubmission.next(assignmentSubmission);
        }
        getAssignmentSubmissionData() {
            return this.assignmentSubmission;
        }
        deleteAssignmentSubmissionData() {
            this.assignmentSubmission.next(null);
        }
        setAssignmentSubmissionId(assignmentSubmissionId) {
            this.assignmentSubmissionId = assignmentSubmissionId;
        }
        getAssignmentSubmissionId() {
            return this.assignmentSubmissionId;
        }
        deleteAssignmentSubmissionId() {
            this.assignmentSubmissionId = null;
        }
        submitAssignment(assignmentSubmission) {
            const data = { api: 'submitAssignment', data: assignmentSubmission };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAssignmentSubmissions(assignment) {
            const data = { api: 'getAssignmentSubmissions', data: { assignment } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getSubmissionOfAssignment(assignment) {
            const data = { api: 'getSubmissionOfAssignment', data: { assignment } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAssignmentSubmission(id) {
            const data = { api: 'getAssignmentSubmission', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveAssignmentSubmissionGrades(submissionGrades) {
            const data = { api: 'saveAssignmentSubmissionGrades', data: submissionGrades };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        updateAssignmentSubmission(assignmentSubmission) {
            const data = { api: 'updateAssignmentSubmission', data: assignmentSubmission };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteAssignmentSubmission(id) {
            const data = { api: 'deleteAssignmentSubmission', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    AssignmentSubmissionService.ɵfac = function AssignmentSubmissionService_Factory(t) { return new (t || AssignmentSubmissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AssignmentSubmissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignmentSubmissionService, factory: AssignmentSubmissionService.ɵfac, providedIn: 'root' });
    return AssignmentSubmissionService;
})();


/***/ }),

/***/ "./src/app/services/assignment.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/assignment.service.ts ***!
  \************************************************/
/*! exports provided: AssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentService", function() { return AssignmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let AssignmentService = /*@__PURE__*/ (() => {
    class AssignmentService {
        constructor(httpService) {
            this.httpService = httpService;
            this.assignment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setAssignmentData(assignment) {
            this.assignment.next(assignment);
        }
        getAssignmentData() {
            return this.assignment;
        }
        deleteAssignmentData() {
            this.assignment.next(null);
        }
        setAssignmentId(assignmentId) {
            this.assignmentId = assignmentId;
        }
        getAssignmentId() {
            return this.assignmentId;
        }
        deleteAssignmentId() {
            this.assignmentId = null;
        }
        saveAssignment(assignment) {
            const data = { api: 'saveAssignment', data: assignment };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAssignments(branch, category, course, batch, subject, month, year) {
            const data = {
                api: 'getAssignments',
                data: { branch, category, course, batch, subject, month, year },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAssignmentsForStudent(branch, category, course, batch, subject, month, year) {
            const data = {
                api: 'getAssignmentsForStudent',
                data: { branch, category, course, batch, subject, month, year },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAssignment(id) {
            const data = { api: 'getAssignment', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        updateAssignment(assignment) {
            const data = { api: 'updateAssignment', data: assignment };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeAssignmentStatus(id, status) {
            const data = { api: 'changeAssignmentStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteAssignmentAttachment(id, publicId) {
            const data = { api: 'deleteAssignmentAttachment', data: { id, publicId } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteAssignment(id) {
            const data = { api: 'deleteAssignment', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    AssignmentService.ɵfac = function AssignmentService_Factory(t) { return new (t || AssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignmentService, factory: AssignmentService.ɵfac, providedIn: 'root' });
    return AssignmentService;
})();


/***/ }),

/***/ "./src/app/services/attendance.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/attendance.service.ts ***!
  \************************************************/
/*! exports provided: AttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceService", function() { return AttendanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let AttendanceService = /*@__PURE__*/ (() => {
    class AttendanceService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getStudents(branch, category, course, batch, lecture) {
            const data = {
                api: 'getStudentsForAttendance',
                data: { branch, category, course, batch, lecture },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveAttendance(attendance) {
            const data = { api: 'saveAttendance', data: attendance };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseAttendance(subject, month, year, student, studentCourse) {
            const data = {
                api: 'getStudentCourseAttendance',
                data: { subject, month, year, student, studentCourse },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAttendance(month, year, branch, category, course, batch, student) {
            const data = {
                api: 'getAttendance',
                data: { month, year, branch, category, course, batch, student },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    AttendanceService.ɵfac = function AttendanceService_Factory(t) { return new (t || AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AttendanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttendanceService, factory: AttendanceService.ɵfac, providedIn: 'root' });
    return AttendanceService;
})();


/***/ }),

/***/ "./src/app/services/batch.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/batch.service.ts ***!
  \*******************************************/
/*! exports provided: BatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchService", function() { return BatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let BatchService = /*@__PURE__*/ (() => {
    class BatchService {
        constructor(httpService) {
            this.httpService = httpService;
            this.batches = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.batch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setBatchId(batchId) {
            this.batchId = batchId;
        }
        getBatchId() {
            return this.batchId;
        }
        deleteBatchId() {
            this.batchId = null;
        }
        setBatchesData(batches) {
            this.batches.next(batches);
        }
        getBatchesData() {
            return this.batches;
        }
        deleteBatchesData() {
            this.batches.next([]);
        }
        setBatchData(batch) {
            this.batch.next(batch);
        }
        getBatchData() {
            return this.batch;
        }
        deleteBatchData() {
            this.batch.next(null);
        }
        getBatchName(batchId) {
            return this.batches.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((batches) => {
                const batch = batches.find((curBatch) => curBatch._id === batchId);
                if (batch) {
                    return batch.basicDetails.batchName;
                }
                return '--';
            }));
        }
        getBatches(branch, category, course) {
            const data = { api: 'getBatches', data: { branch, category, course } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBatch(id) {
            const data = { api: 'getBatch', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBatchSubjects(course, batch) {
            const data = { api: 'getBatchSubjects', data: { course, batch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBatchForEditing(id) {
            const data = { api: 'getBatchForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        addBatch(batch) {
            const data = { api: 'newBatch', data: batch };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editBatch(batch) {
            const data = { api: 'updateBatch', data: batch };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteBatch(id) {
            const data = { api: 'deleteBatch', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeBatchStatus(id, status) {
            const data = { api: 'changeBatchStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    BatchService.ɵfac = function BatchService_Factory(t) { return new (t || BatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BatchService, factory: BatchService.ɵfac, providedIn: 'root' });
    return BatchService;
})();


/***/ }),

/***/ "./src/app/services/billing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/billing.service.ts ***!
  \*********************************************/
/*! exports provided: InstituteBillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteBillingService", function() { return InstituteBillingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let InstituteBillingService = /*@__PURE__*/ (() => {
    class InstituteBillingService {
        constructor(httpService) {
            this.httpService = httpService;
            this.billingDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setBilling(billingDetails) {
            this.billingDetails.next(billingDetails);
        }
        getBilling() {
            return this.billingDetails;
        }
        deleteBilling() {
            this.billingDetails.next(null);
        }
        saveBillingDetails(billingDetails) {
            const data = { api: 'saveBillingDetails', data: billingDetails };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBillingDetails(branch) {
            const data = { api: 'getBillingDetails', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    InstituteBillingService.ɵfac = function InstituteBillingService_Factory(t) { return new (t || InstituteBillingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteBillingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteBillingService, factory: InstituteBillingService.ɵfac, providedIn: 'root' });
    return InstituteBillingService;
})();


/***/ }),

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

/***/ "./src/app/services/branch-student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/branch-student.service.ts ***!
  \****************************************************/
/*! exports provided: BranchStudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchStudentService", function() { return BranchStudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let BranchStudentService = /*@__PURE__*/ (() => {
    class BranchStudentService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        setBranchStudentData(branchStudent) {
            this.branchStudent = branchStudent;
        }
        getBranchStudentData() {
            return this.branchStudent;
        }
        deleteBranchStudentData() {
            this.branchStudent = null;
        }
        setBranchStudentId(branchStudentId) {
            this.branchStudentId = branchStudentId;
        }
        getBranchStudentId() {
            return this.branchStudentId;
        }
        deleteBranchStudentId() {
            this.branchStudentId = null;
        }
        getBranchStudents(branch, category, type) {
            const data = { api: 'getBranchStudents', data: { branch, category, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchStudentNameIds(branch, category, type) {
            const data = { api: 'getBranchStudentNameIds', data: { branch, category, type } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchAllStudentNameIds(branch, category) {
            const data = { api: 'getBranchAllStudentNameIds', data: { branch, category } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchStudent(id, student) {
            const data = { api: 'addBranchStudent', data: { id, student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newBranchStudent(branchStudent) {
            const data = { api: 'newBranchStudent', data: branchStudent };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchStudentForEditing(id, student) {
            const data = { api: 'getBranchStudentForEditing', data: { id, student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editBranchStudent(branchStudent) {
            const data = { api: 'updateBranchStudent', data: branchStudent };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeBranchStudentStatus(id, status) {
            const data = { api: 'changeBranchStudentStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteBranchStudent(id) {
            const data = { api: 'deleteBranchStudent', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    BranchStudentService.ɵfac = function BranchStudentService_Factory(t) { return new (t || BranchStudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BranchStudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchStudentService, factory: BranchStudentService.ɵfac, providedIn: 'root' });
    return BranchStudentService;
})();


/***/ }),

/***/ "./src/app/services/coupon.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/coupon.service.ts ***!
  \********************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let CouponService = /*@__PURE__*/ (() => {
    class CouponService {
        constructor(httpService) {
            this.httpService = httpService;
            this.discountTypes = ['percentage', 'amount'];
            this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        getDiscountTypes() {
            return this.discountTypes;
        }
        setCouponId(couponId) {
            this.couponId = couponId;
        }
        getCouponId() {
            return this.couponId;
        }
        deleteCouponId() {
            this.couponId = null;
        }
        setAppliedCoupon(appliedCoupon) {
            this.appliedCoupon = appliedCoupon;
        }
        getAppliedCoupon() {
            return this.appliedCoupon;
        }
        deleteAppliedCoupon() {
            this.appliedCoupon = null;
        }
        setCouponData(coupon) {
            this.coupon.next(coupon);
        }
        getCouponData() {
            return this.coupon;
        }
        deleteCouponData() {
            this.coupon.next(null);
        }
        getCoupons() {
            const data = { api: 'getCoupons', data: {} };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCoupon(id) {
            const data = { api: 'getCoupon', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCouponForEditing(id) {
            const data = { api: 'getCouponForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        addCoupon(coupon) {
            const data = { api: 'newCoupon', data: coupon };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editCoupon(coupon) {
            const data = { api: 'updateCoupon', data: coupon };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteCoupon(id) {
            const data = { api: 'deleteCoupon', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeCouponStatus(id, status) {
            const data = { api: 'changeCouponStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        checkCoupon(code) {
            const data = { api: 'checkCoupon', data: { code } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        validateCoupon(code) {
            const data = { api: 'validateCoupon', data: { code } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    CouponService.ɵfac = function CouponService_Factory(t) { return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CouponService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CouponService, factory: CouponService.ɵfac, providedIn: 'root' });
    return CouponService;
})();


/***/ }),

/***/ "./src/app/services/course-material.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/course-material.service.ts ***!
  \*****************************************************/
/*! exports provided: CourseMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMaterialService", function() { return CourseMaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let CourseMaterialService = /*@__PURE__*/ (() => {
    class CourseMaterialService {
        constructor(httpService) {
            this.httpService = httpService;
            this.courseMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.courseMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }
        setCourseMaterialId(courseMaterialId) {
            this.courseMaterialId = courseMaterialId;
        }
        getCourseMaterialId() {
            return this.courseMaterialId;
        }
        deleteCourseMaterialId() {
            this.courseMaterialId = null;
        }
        setCourseMaterialsData(courseMaterials) {
            this.courseMaterials.next(courseMaterials);
        }
        getCourseMaterialsData() {
            return this.courseMaterials;
        }
        deleteCourseMaterialsData() {
            this.courseMaterials.next([]);
        }
        setCourseMaterialData(courseMaterial) {
            this.courseMaterial.next(courseMaterial);
        }
        getCourseMaterialData() {
            return this.courseMaterial;
        }
        deleteCourseMaterialData() {
            this.courseMaterial.next(null);
        }
        getCourseMaterials(branch, category, course, subject) {
            const data = { api: 'getCourseMaterials', data: { branch, category, course, subject } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCourseMaterial(id) {
            const data = { api: 'getCourseMaterials', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCourseMaterialsForStudent(branch, category, course, subject) {
            const data = {
                api: 'getCourseMaterialsForStudent',
                data: { branch, category, course, subject },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newCourseMaterials(materials) {
            const data = { api: 'newCourseMaterials', data: materials };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeCourseMaterialStatus(id, status) {
            const data = { api: 'changeCourseMaterialStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteCourseMaterial(id) {
            const data = { api: 'deleteCourseMaterial', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    CourseMaterialService.ɵfac = function CourseMaterialService_Factory(t) { return new (t || CourseMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CourseMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseMaterialService, factory: CourseMaterialService.ɵfac, providedIn: 'root' });
    return CourseMaterialService;
})();


/***/ }),

/***/ "./src/app/services/course.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/course.service.ts ***!
  \********************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let CourseService = /*@__PURE__*/ (() => {
    class CourseService {
        constructor(httpService) {
            this.httpService = httpService;
            this.courses = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.course = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setCourseId(courseId) {
            this.courseId = courseId;
        }
        getCourseId() {
            return this.courseId;
        }
        deleteCourseId() {
            this.courseId = null;
        }
        setCoursesData(courses) {
            this.courses.next(courses);
        }
        getCoursesData() {
            return this.courses;
        }
        deleteCoursesData() {
            this.courses.next([]);
        }
        setCourseData(course) {
            this.course.next(course);
        }
        getCourseData() {
            return this.course;
        }
        deleteCourseData() {
            this.course.next(null);
        }
        getCourseName(courseId) {
            return this.courses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((courses) => {
                const course = courses.find((curCourse) => curCourse._id === courseId);
                if (course) {
                    return course.basicDetails.courseName;
                }
                return '--';
            }));
        }
        getCourses(branch, category) {
            const data = { api: 'getCourses', data: { branch, category } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCourse(id) {
            const data = { api: 'getCourse', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getCourseForEditing(id) {
            const data = { api: 'getCourseForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        addCourse(Course) {
            const data = { api: 'newCourse', data: Course };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editCourse(Course) {
            const data = { api: 'updateCourse', data: Course };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteCourse(id) {
            // this.Courses.splice(id, 1);
        }
        changeCourseStatus(id, status) {
            const data = { api: 'changeCourseStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
    return CourseService;
})();


/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let DashboardService = /*@__PURE__*/ (() => {
    class DashboardService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getBranchDashboard(branch) {
            const data = { api: 'getBranchDashboard', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchDashboardForEmployee(branch) {
            const data = { api: 'getBranchDashboardForEmployee', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentBranchDashboard(branch) {
            const data = { api: 'getStudentBranchDashboard', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
    return DashboardService;
})();


/***/ }),

/***/ "./src/app/services/discount-and-offer.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/discount-and-offer.service.ts ***!
  \********************************************************/
/*! exports provided: DiscountAndOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountAndOfferService", function() { return DiscountAndOfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let DiscountAndOfferService = /*@__PURE__*/ (() => {
    class DiscountAndOfferService {
        constructor(httpService) {
            this.httpService = httpService;
            this.discountTypes = ['percentage', 'amount'];
            this.discountAndOffers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            this.discountAndOffer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        getDiscountTypes() {
            return this.discountTypes;
        }
        setDiscountAndOfferId(discountAndOfferId) {
            this.discountAndOfferId = discountAndOfferId;
        }
        getDiscountAndOfferId() {
            return this.discountAndOfferId;
        }
        deleteDiscountAndOfferId() {
            this.discountAndOfferId = null;
        }
        setDiscountAndOffersData(discountAndOffers) {
            this.discountAndOffers.next(discountAndOffers);
        }
        getDiscountAndOffersData() {
            return this.discountAndOffers;
        }
        deleteDiscountAndOffersData() {
            this.discountAndOffers.next([]);
        }
        setDiscountAndOfferData(discountAndOffer) {
            this.discountAndOffer.next(discountAndOffer);
        }
        getDiscountAndOfferData() {
            return this.discountAndOffer;
        }
        deleteDiscountAndOfferData() {
            this.discountAndOffer.next(null);
        }
        getDiscountAndOffers(branch) {
            const data = { api: 'getDiscountAndOffers', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getDiscountAndOffersForStudent(branch) {
            const data = { api: 'getDiscountAndOffersForStudent', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getDiscountAndOffer(id) {
            const data = { api: 'getDiscountAndOffer', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getDiscountAndOfferForEditing(id) {
            const data = { api: 'getDiscountAndOfferForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        CheckDiscountAndOffer(branch, code) {
            const data = { api: 'CheckDiscountAndOffer', data: { branch, code } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        addDiscountAndOffer(discountAndOffer) {
            const data = { api: 'newDiscountAndOffer', data: discountAndOffer };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editDiscountAndOffer(discountAndOffer) {
            const data = { api: 'updateDiscountAndOffer', data: discountAndOffer };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteDiscountAndOffer(id) {
            const data = { api: 'deleteDiscountAndOffer', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeDiscountAndOfferStatus(id, status) {
            const data = { api: 'changeDiscountAndOfferStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    DiscountAndOfferService.ɵfac = function DiscountAndOfferService_Factory(t) { return new (t || DiscountAndOfferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    DiscountAndOfferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DiscountAndOfferService, factory: DiscountAndOfferService.ɵfac, providedIn: 'root' });
    return DiscountAndOfferService;
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


/***/ }),

/***/ "./src/app/services/employee-salary.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/employee-salary.service.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeSalaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSalaryService", function() { return EmployeeSalaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let EmployeeSalaryService = /*@__PURE__*/ (() => {
    class EmployeeSalaryService {
        constructor(httpService) {
            this.httpService = httpService;
            this.employeeSalary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setEmployeeSalaryData(employeeSalary) {
            this.employeeSalary.next(employeeSalary);
        }
        getEmployeeSalaryData() {
            return this.employeeSalary;
        }
        deleteEmployeeSalaryData() {
            this.employeeSalary.next(null);
        }
        setEmployeeSalaryId(employeeSalaryId) {
            this.employeeSalaryId = employeeSalaryId;
        }
        getEmployeeSalaryId() {
            return this.employeeSalaryId;
        }
        deleteEmployeeSalaryId() {
            this.employeeSalaryId = null;
        }
        addEmployeeSalary(employeeSalary) {
            const data = { api: 'newEmployeeSalary', data: employeeSalary };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeEmployeeSalaryStatus(id, status) {
            const data = { api: 'changeEmployeeSalaryStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getBranchEmployeeSalaries(branch, employee, month, year) {
            const data = { api: 'getBranchEmployeeSalaries', data: { branch, employee, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getMyBranchSalaries(branch, month, year) {
            const data = { api: 'getMyBranchSalaries', data: { branch, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeSalaries(employee, month, year) {
            const data = { api: 'getEmployeeSalaries', data: { employee, month, year } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeSalary(id) {
            const data = { api: 'getEmployeeSalary', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteEmployeeSalary(id) {
            const data = { api: 'deleteEmployeeSalary', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    EmployeeSalaryService.ɵfac = function EmployeeSalaryService_Factory(t) { return new (t || EmployeeSalaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeSalaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeSalaryService, factory: EmployeeSalaryService.ɵfac, providedIn: 'root' });
    return EmployeeSalaryService;
})();


/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let EmployeeService = /*@__PURE__*/ (() => {
    class EmployeeService {
        constructor(httpService) {
            this.httpService = httpService;
            this.employee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setEmployeeData(employee) {
            this.employee.next(employee);
        }
        getEmployeeData() {
            return this.employee;
        }
        deleteEmployeeData() {
            this.employee.next(null);
        }
        setEmployeeType(employeeType) {
            this.employeeType = employeeType;
        }
        getEmployeeType() {
            return this.employeeType;
        }
        deleteEmployeeType() {
            this.employeeType = null;
        }
        setEmployeeId(employeeId) {
            this.employeeId = employeeId;
        }
        getEmployeeId() {
            return this.employeeId;
        }
        deleteEmployeeId() {
            this.employeeId = null;
        }
        addEmployee(employee, branchEmployee) {
            const data = { api: 'newEmployee', data: { employee, branchEmployee } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployees() {
            const data = { api: 'getEmployees', data: {} };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployee(id) {
            const data = { api: 'getEmployee', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeByIMSId(id) {
            const data = { api: 'getEmployeeByIMSId', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        searchEmployee(employeeId) {
            const data = { api: 'searchEmployee', data: { employeeId } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getEmployeeForEditing(id) {
            const data = { api: 'getEmployeeForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeEmployeeStatus(id, status) {
            const data = { api: 'changeEmployeeStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editEmployee(employee) {
            const data = { api: 'updateEmployee', data: employee };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteEmployee(id) {
            const data = { api: 'deleteEmployee', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
    return EmployeeService;
})();


/***/ }),

/***/ "./src/app/services/exam.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/exam.service.ts ***!
  \******************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let ExamService = /*@__PURE__*/ (() => {
    class ExamService {
        constructor(httpService) {
            this.httpService = httpService;
            this.exam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setExamData(exam) {
            this.exam.next(exam);
        }
        getExamData() {
            return this.exam;
        }
        deleteExamData() {
            this.exam.next(null);
        }
        setExamId(examId) {
            this.examId = examId;
        }
        getExamId() {
            return this.examId;
        }
        deleteExamId() {
            this.examId = null;
        }
        getStudentCourseScore(subject, month, year, student, studentCourse) {
            const data = {
                api: 'getStudentCourseScore',
                data: { subject, month, year, student, studentCourse },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentsForExam(exam) {
            const data = {
                api: 'getStudentsForExam',
                data: { exam },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveExam(exam) {
            const data = { api: 'saveExam', data: exam };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getExams(branch, category, course, batch, subject, month, year) {
            const data = {
                api: 'getExams',
                data: { branch, category, course, batch, subject, month, year },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getExamsPerformance(month, year, branch, category, course, batch, subject, student) {
            const data = {
                api: 'getExamsPerformance',
                data: { month, year, branch, category, course, batch, subject, student },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getExam(id) {
            const data = { api: 'getExam', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getExamReport(id) {
            const data = { api: 'getExamReport', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getExamForEditing(id) {
            const data = { api: 'getExamForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editExam(exam) {
            const data = { api: 'editExam', data: exam };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveStudentsMarks(id, marks) {
            const data = { api: 'saveStudentsMarks', data: { id, marks } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteExam(id) {
            const data = { api: 'deleteExam', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    ExamService.ɵfac = function ExamService_Factory(t) { return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac, providedIn: 'root' });
    return ExamService;
})();


/***/ }),

/***/ "./src/app/services/institute-keys.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/institute-keys.service.ts ***!
  \****************************************************/
/*! exports provided: InstituteKeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteKeysService", function() { return InstituteKeysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let InstituteKeysService = /*@__PURE__*/ (() => {
    class InstituteKeysService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        setLocalInstitutePaymentAccessKey(institutePaymentAccessKey) {
            this.institutePaymentAccessKey = institutePaymentAccessKey;
        }
        getLocalInstitutePaymentAccessKey() {
            return this.institutePaymentAccessKey;
        }
        getInstituteKeys() {
            const data = {
                api: 'getInstituteKeys',
                data: {},
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getInstitutePaymentAccessKey(branch) {
            const data = {
                api: 'getInstitutePaymentAccessKey',
                data: { branch },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveInstitutePaymentGatewayKeys(keys) {
            const data = {
                api: 'saveInstitutePaymentGatewayKeys',
                data: { keys },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveInstituteZoomKeys(keys) {
            const data = {
                api: 'saveInstituteZoomKeys',
                data: keys,
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        generateZoomAuthToken() {
            const data = {
                api: 'generateZoomAuthToken',
            };
            return this.httpService.httpGet(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getZoomAuthLink() {
            const data = {
                api: 'getZoomAuthLink',
                data: {},
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    InstituteKeysService.ɵfac = function InstituteKeysService_Factory(t) { return new (t || InstituteKeysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteKeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteKeysService, factory: InstituteKeysService.ɵfac, providedIn: 'root' });
    return InstituteKeysService;
})();


/***/ }),

/***/ "./src/app/services/lead.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/lead.service.ts ***!
  \******************************************/
/*! exports provided: LeadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadService", function() { return LeadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let LeadService = /*@__PURE__*/ (() => {
    class LeadService {
        constructor(httpService) {
            this.httpService = httpService;
            this.lead = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setLeadData(lead) {
            this.lead.next(lead);
        }
        getLeadType() {
            return this.leadType;
        }
        setLeadType(leadType) {
            this.leadType = leadType;
        }
        deleteLeadType() {
            this.leadType = null;
        }
        getLeadData() {
            return this.lead;
        }
        deleteLeadData() {
            this.lead.next(null);
        }
        setLeadId(leadId) {
            this.leadId = leadId;
        }
        getLeadId() {
            return this.leadId;
        }
        deleteLeadId() {
            this.leadId = null;
        }
        saveLead(lead) {
            const data = { api: 'saveLead', data: lead };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLeads(branch, category, course, leadType) {
            const data = { api: 'getLeads', data: { branch, category, course, leadType } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLead(id) {
            const data = { api: 'getLead', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLeadForEditing(id) {
            const data = { api: 'getLeadForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editLead(lead) {
            const data = { api: 'editLead', data: lead };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeLeadStatus(id, status) {
            const data = { api: 'changeLeadStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteLead(id) {
            const data = { api: 'deleteLead', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    LeadService.ɵfac = function LeadService_Factory(t) { return new (t || LeadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LeadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeadService, factory: LeadService.ɵfac, providedIn: 'root' });
    return LeadService;
})();


/***/ }),

/***/ "./src/app/services/lecture-material.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/lecture-material.service.ts ***!
  \******************************************************/
/*! exports provided: LectureMaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureMaterialService", function() { return LectureMaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let LectureMaterialService = /*@__PURE__*/ (() => {
    class LectureMaterialService {
        constructor(httpService) {
            this.httpService = httpService;
            this.lectureMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.lectureMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }
        setLectureMaterialId(lectureMaterialId) {
            this.lectureMaterialId = lectureMaterialId;
        }
        getLectureMaterialId() {
            return this.lectureMaterialId;
        }
        deleteLectureMaterialId() {
            this.lectureMaterialId = null;
        }
        setLectureMaterialsData(lectureMaterials) {
            this.lectureMaterials.next(lectureMaterials);
        }
        getLectureMaterialsData() {
            return this.lectureMaterials;
        }
        deleteLectureMaterialsData() {
            this.lectureMaterials.next([]);
        }
        setLectureMaterialData(lectureMaterial) {
            this.lectureMaterial.next(lectureMaterial);
        }
        getLectureMaterialData() {
            return this.lectureMaterial;
        }
        deleteLectureMaterialData() {
            this.lectureMaterial.next(null);
        }
        getLectureMaterials(branch, category, course, batch, lecture) {
            const data = { api: 'getLectureMaterials', data: { branch, category, course, batch, lecture } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLectureMaterial(id) {
            const data = { api: 'getLectureMaterials', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLectureMaterialsForStudent(branch, category, course, batch, lecture) {
            const data = {
                api: 'getLectureMaterialsForStudent',
                data: { branch, category, course, batch, lecture },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newLectureMaterials(materials) {
            const data = { api: 'newLectureMaterials', data: materials };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeLectureMaterialStatus(id, status) {
            const data = { api: 'changeLectureMaterialStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteLectureMaterial(id) {
            const data = { api: 'deleteLectureMaterial', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    LectureMaterialService.ɵfac = function LectureMaterialService_Factory(t) { return new (t || LectureMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LectureMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LectureMaterialService, factory: LectureMaterialService.ɵfac, providedIn: 'root' });
    return LectureMaterialService;
})();


/***/ }),

/***/ "./src/app/services/lecture.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/lecture.service.ts ***!
  \*********************************************/
/*! exports provided: LectureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureService", function() { return LectureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let LectureService = /*@__PURE__*/ (() => {
    class LectureService {
        constructor(httpService) {
            this.httpService = httpService;
            this.lecture = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.lectureId = null;
            this.date = null;
        }
        getSearchDate() {
            return this.date;
        }
        setSearchDate(date) {
            this.date = date;
        }
        setLectureData(lecture) {
            this.lecture.next(lecture);
        }
        getLectureData() {
            return this.lecture;
        }
        deleteLectureData() {
            this.lecture.next(null);
        }
        setLectureId(lectureId) {
            this.lectureId = lectureId;
        }
        getLectureId() {
            return this.lectureId;
        }
        deleteLectureId() {
            this.lectureId = null;
        }
        getLectures(branch, category, course, batch, date) {
            const data = {
                api: 'getLectures',
                data: { branch, category, course, batch, date },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLecturesForStudent(branch, category, course, batch, date) {
            const data = {
                api: 'getLecturesForStudent',
                data: { branch, category, course, batch, date },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLecture(id) {
            const data = { api: 'getLecture', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getUpcomingLecturesForEmployee(branch) {
            const data = { api: 'getUpcomingLecturesForEmployee', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    LectureService.ɵfac = function LectureService_Factory(t) { return new (t || LectureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LectureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LectureService, factory: LectureService.ɵfac, providedIn: 'root' });
    return LectureService;
})();


/***/ }),

/***/ "./src/app/services/membership.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/membership.service.ts ***!
  \************************************************/
/*! exports provided: MembershipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipService", function() { return MembershipService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let MembershipService = /*@__PURE__*/ (() => {
    class MembershipService {
        constructor(httpService) {
            this.httpService = httpService;
            this.membershipPlan = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }
        setMembershipPlan(membershipPlan) {
            this.membershipPlan.next(membershipPlan);
        }
        getMembershipPlan() {
            return this.membershipPlan;
        }
        setMembershipType(membershipType) {
            this.membershipType = membershipType;
        }
        getMembershipType() {
            return this.membershipType;
        }
        getMemberships() {
            const data = { api: 'getMembershipPlans', data: {} };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
        }
        getMembership(name) {
            const data = { api: 'getMembershipPlan', data: { name } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
        }
        saveMembershipPlan(membershipPlan) {
            const data = { api: 'saveMembershipPlan', data: membershipPlan };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
        }
    }
    MembershipService.ɵfac = function MembershipService_Factory(t) { return new (t || MembershipService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    MembershipService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MembershipService, factory: MembershipService.ɵfac, providedIn: 'root' });
    return MembershipService;
})();


/***/ }),

/***/ "./src/app/services/online-exam-question.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/online-exam-question.service.ts ***!
  \**********************************************************/
/*! exports provided: OnlineExamQuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineExamQuestionService", function() { return OnlineExamQuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let OnlineExamQuestionService = /*@__PURE__*/ (() => {
    class OnlineExamQuestionService {
        constructor(httpService) {
            this.httpService = httpService;
            this.onlineExamQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setOnlineExamQuestionData(onlineExamQuestion) {
            this.onlineExamQuestion.next(onlineExamQuestion);
        }
        getOnlineExamQuestionData() {
            return this.onlineExamQuestion;
        }
        deleteOnlineExamQuestionData() {
            this.onlineExamQuestion.next(null);
        }
        setOnlineExamQuestionId(onlineExamQuestionId) {
            this.onlineExamQuestionId = onlineExamQuestionId;
        }
        getOnlineExamQuestionId() {
            return this.onlineExamQuestionId;
        }
        deleteOnlineExamQuestionId() {
            this.onlineExamQuestionId = null;
        }
        newOnlineExamQuestion(contents) {
            const data = { api: 'newOnlineExamQuestion', data: contents };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamQuestion(id) {
            const data = { api: 'getOnlineExamQuestion', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamQuestions(id) {
            const data = { api: 'getOnlineExamQuestions', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamQuestionsForStudent(id) {
            const data = { api: 'getOnlineExamQuestionsForStudent', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeOnlineExamQuestionStatus(id, status) {
            const data = { api: 'changeOnlineExamQuestionStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editOnlineExamQuestion(question) {
            const data = { api: 'editOnlineExamQuestion', data: question };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteOnlineExamQuestion(id) {
            const data = { api: 'deleteOnlineExamQuestion', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    OnlineExamQuestionService.ɵfac = function OnlineExamQuestionService_Factory(t) { return new (t || OnlineExamQuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    OnlineExamQuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnlineExamQuestionService, factory: OnlineExamQuestionService.ɵfac, providedIn: 'root' });
    return OnlineExamQuestionService;
})();


/***/ }),

/***/ "./src/app/services/online-exam.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/online-exam.service.ts ***!
  \*************************************************/
/*! exports provided: OnlineExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineExamService", function() { return OnlineExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let OnlineExamService = /*@__PURE__*/ (() => {
    class OnlineExamService {
        constructor(httpService) {
            this.httpService = httpService;
            this.onlineExam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.date = null;
        }
        getSearchDate() {
            return this.date;
        }
        setSearchDate(date) {
            this.date = date;
        }
        setOnlineExamData(onlineExam) {
            this.onlineExam.next(onlineExam);
        }
        getOnlineExamData() {
            return this.onlineExam;
        }
        deleteOnlineExamData() {
            this.onlineExam.next(null);
        }
        setOnlineExamId(onlineExamId) {
            this.onlineExamId = onlineExamId;
        }
        getOnlineExamId() {
            return this.onlineExamId;
        }
        deleteOnlineExamId() {
            this.onlineExamId = null;
        }
        getOnlineExam(id) {
            const data = { api: 'getOnlineExam', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamForEditing(id) {
            const data = { api: 'getOnlineExamForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExams(branch, category, course, batch, subject, month, year) {
            const data = {
                api: 'getOnlineExams',
                data: { branch, category, course, batch, subject, month, year },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamsForStudent(branch, category, course, batch, subject, month, year) {
            const data = {
                api: 'getOnlineExamsForStudent',
                data: { branch, category, course, batch, subject, month, year },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        addOnlineExam(onlineExam) {
            const data = { api: 'newOnlineExam', data: onlineExam };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editOnlineExam(onlineExam) {
            const data = { api: 'editOnlineExam', data: onlineExam };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeOnlineExamStatus(id, status) {
            const data = { api: 'changeOnlineExamStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteOnlineExam(id) {
            const data = { api: 'deleteOnlineExam', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveOnlineExamResult(studentQuestionAnswers, onlineExam) {
            const data = { api: 'saveOnlineExamResult', data: { studentQuestionAnswers, onlineExam } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getOnlineExamResult(id) {
            const data = { api: 'getOnlineExamResult', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    OnlineExamService.ɵfac = function OnlineExamService_Factory(t) { return new (t || OnlineExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    OnlineExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnlineExamService, factory: OnlineExamService.ɵfac, providedIn: 'root' });
    return OnlineExamService;
})();


/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let PaymentService = /*@__PURE__*/ (() => {
    class PaymentService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        getPaymentDetails() {
            return this.paymentDetails;
        }
        setPaymentDetails(planType, packageType, amount) {
            this.paymentDetails = { planType, packageType, amount };
        }
        deletePaymentDetails() {
            this.paymentDetails = null;
        }
        getInstitutePaymentDetails() {
            return this.institutePaymentDetails;
        }
        setInstitutePaymentDetails(amount) {
            this.institutePaymentDetails = { amount };
        }
        deleteInstitutePaymentDetails() {
            this.institutePaymentDetails = null;
        }
        verifyPayment(payment, placedOrder) {
            const data = {
                api: 'verifyPayment',
                data: {
                    payment,
                    receipt: placedOrder,
                },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        verifyInstitutePayment(branch, payment, placedOrder) {
            const data = {
                api: 'verifyInstitutePayment',
                data: {
                    branch,
                    payment,
                    receipt: placedOrder,
                },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
    return PaymentService;
})();


/***/ }),

/***/ "./src/app/services/question-answers.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/question-answers.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionAnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersService", function() { return QuestionAnswersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let QuestionAnswersService = /*@__PURE__*/ (() => {
    class QuestionAnswersService {
        constructor(httpService) {
            this.httpService = httpService;
            this.question = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.questionAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.questionAnswers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.questionId = null;
            this.questionAnswerId = null;
            this.questionAnswersId = null;
        }
        setQuestion(question) {
            this.question.next(question);
        }
        getQuestion() {
            return this.question;
        }
        deleteQuestion() {
            this.question.next(null);
        }
        setQuestionId(questionId) {
            this.questionId = questionId;
        }
        getQuestionId() {
            return this.questionId;
        }
        deleteQuestionId() {
            this.questionId = null;
        }
        setQuestionAnswer(questionAnswer) {
            this.questionAnswer.next(questionAnswer);
        }
        getQuestionAnswer() {
            return this.questionAnswer;
        }
        deleteQuestionAnswer() {
            this.questionAnswer.next(null);
        }
        setQuestionAnswerId(questionAnswerId) {
            this.questionAnswerId = questionAnswerId;
        }
        getQuestionAnswerId() {
            return this.questionAnswerId;
        }
        deleteQuestionAnswerId() {
            this.questionAnswerId = null;
        }
        setQuestionAnswers(questionAnswers) {
            this.questionAnswers.next(questionAnswers);
        }
        getQuestionAnswers() {
            return this.questionAnswers;
        }
        deleteQuestionAnswers() {
            this.questionAnswers.next(null);
        }
        setQuestionAnswersId(questionAnswersId) {
            this.questionAnswersId = questionAnswersId;
        }
        getQuestionAnswersId() {
            return this.questionAnswersId;
        }
        deleteQuestionAnswersId() {
            this.questionAnswersId = null;
        }
        getLectureQuestionAnswers(branch, category, course, batch, lecture) {
            const data = {
                api: 'getLectureQuestionAnswers',
                data: { branch, category, course, batch, lecture },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getLectureQuestionAnswer(id) {
            const data = { api: 'getLectureQuestionAnswer', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newLectureQuestion(question) {
            const data = { api: 'newLectureQuestion', data: question };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editLectureQuestion(question) {
            const data = { api: 'editLectureQuestion', data: question };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteLectureQuestion(id) {
            const data = { api: 'deleteLectureQuestion', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        newLectureQuestionAnswer(answer) {
            const data = { api: 'newLectureQuestionAnswer', data: answer };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editLectureQuestionAnswer(answer) {
            const data = { api: 'editLectureQuestionAnswer', data: answer };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteLectureQuestionAnswer(id) {
            const data = { api: 'deleteLectureQuestionAnswer', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    QuestionAnswersService.ɵfac = function QuestionAnswersService_Factory(t) { return new (t || QuestionAnswersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    QuestionAnswersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionAnswersService, factory: QuestionAnswersService.ɵfac, providedIn: 'root' });
    return QuestionAnswersService;
})();


/***/ }),

/***/ "./src/app/services/role.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let RoleService = /*@__PURE__*/ (() => {
    class RoleService {
        constructor() {
            this.employeeRole = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
            this.userRoles = ['institute', 'employee', 'student'];
            this.employeeRoles = ['manager', 'teacher', 'councillor'];
        }
        getUserRoles() {
            return this.userRoles;
        }
        setEmployeeRole(role) {
            this.employeeRole.next(role);
        }
        getEmployeeRole() {
            return this.employeeRole;
        }
        getEmployeeRoles() {
            return this.employeeRoles;
        }
    }
    RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(); };
    RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
    return RoleService;
})();


/***/ }),

/***/ "./src/app/services/schedule.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/schedule.service.ts ***!
  \**********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let ScheduleService = /*@__PURE__*/ (() => {
    class ScheduleService {
        constructor(httpService) {
            this.httpService = httpService;
            this.schedule = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setScheduleData(Schedule) {
            this.schedule.next(Schedule);
        }
        getScheduleData() {
            return this.schedule;
        }
        deleteScheduleData() {
            this.schedule.next(null);
        }
        setScheduleId(scheduleId) {
            this.scheduleId = scheduleId;
        }
        getScheduleId() {
            return this.scheduleId;
        }
        deleteScheduleId() {
            this.scheduleId = null;
        }
        setScheduleDay(scheduleDay) {
            this.scheduleDay = scheduleDay;
        }
        getScheduleDay() {
            return this.scheduleDay;
        }
        deleteScheduleDay() {
            this.scheduleDay = null;
        }
        addSchedule(schedules) {
            const data = { api: 'newSchedule', data: schedules };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeScheduleStatus(id, status) {
            const data = { api: 'changeScheduleStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAllSchedules(branch, category, course, batch, startDate, endDate) {
            const data = {
                api: 'getAllSchedule',
                data: { branch, category, course, batch, startDate, endDate },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getSchedule(id) {
            const data = { api: 'getSchedule', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getScheduleForEditing(schedule) {
            const data = { api: 'getScheduleForEditing', data: { schedule } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editSchedule(schedule) {
            const data = { api: 'editSchedule', data: schedule };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteSchedule(id) {
            const data = { api: 'deleteSchedule', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    ScheduleService.ɵfac = function ScheduleService_Factory(t) { return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScheduleService, factory: ScheduleService.ɵfac, providedIn: 'root' });
    return ScheduleService;
})();


/***/ }),

/***/ "./src/app/services/shared-services/storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/shared-services/storage.service.ts ***!
  \*************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StorageService = /*@__PURE__*/ (() => {
    class StorageService {
        constructor() {
            this.KB = 1024;
            this.MB = 1024 * 1024;
            this.GB = 1024 * 1024 * 1024;
        }
        convertByteToUnit(bytes) {
            bytes = +bytes;
            let value;
            let unit;
            if (bytes < this.KB) {
                value = bytes;
                if (value <= 1) {
                    unit = 'Byte';
                }
                else {
                    unit = 'Bytes';
                }
            }
            else if (bytes >= this.KB && bytes < this.MB) {
                value = bytes / this.KB;
                unit = 'KB';
            }
            else if (bytes >= this.MB && bytes < this.GB) {
                value = bytes / this.MB;
                unit = 'MB';
            }
            else {
                value = bytes / this.GB;
                unit = 'GB';
            }
            return { value, unit };
        }
    }
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
})();


/***/ }),

/***/ "./src/app/services/shared-services/user.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/shared-services/user.service.ts ***!
  \**********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/shared-services/http.service.ts");





let UserService = /*@__PURE__*/ (() => {
    class UserService {
        constructor(httpService) {
            this.httpService = httpService;
        }
        setUserProfile(profile) {
            this.userProfile = profile;
        }
        getUserProfile() {
            return this.userProfile;
        }
        checkUser(email) {
            const data = { api: 'checkUser', data: { email } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changePassword(password) {
            const data = { api: 'changePassword', data: password };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        saveProfile(profile) {
            const data = { api: 'saveProfile', data: profile };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getProfile() {
            const data = { api: 'getProfile', data: {} };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
})();


/***/ }),

/***/ "./src/app/services/student-course-installment-receipt.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/student-course-installment-receipt.service.ts ***!
  \************************************************************************/
/*! exports provided: StudentCourseInstallmentReceiptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptService", function() { return StudentCourseInstallmentReceiptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let StudentCourseInstallmentReceiptService = /*@__PURE__*/ (() => {
    class StudentCourseInstallmentReceiptService {
        constructor(httpService) {
            this.httpService = httpService;
            this.studentCourseInstallmentReceipt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setStudentCourseInstallmentReceiptData(studentCourseInstallmentReceipt) {
            this.studentCourseInstallmentReceipt.next(studentCourseInstallmentReceipt);
        }
        getStudentCourseInstallmentReceiptData() {
            return this.studentCourseInstallmentReceipt;
        }
        deleteStudentCourseInstallmentReceiptData() {
            this.studentCourseInstallmentReceipt.next(null);
        }
        setStudentCourseInstallmentReceiptId(studentCourseInstallmentReceiptId) {
            this.studentCourseInstallmentReceiptId = studentCourseInstallmentReceiptId;
        }
        getStudentCourseInstallmentReceiptId() {
            return this.studentCourseInstallmentReceiptId;
        }
        deleteStudentCourseInstallmentReceiptId() {
            this.studentCourseInstallmentReceiptId = null;
        }
        addStudentCourseInstallmentReceipt(studentCourseInstallmentReceipt) {
            const data = {
                api: 'newStudentCourseInstallmentReceipt',
                data: studentCourseInstallmentReceipt,
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        generateStudentCourseInstallmentReceipt(order, receipt) {
            const data = {
                api: 'generateStudentCourseInstallmentReceipt',
                data: {
                    order,
                    receipt,
                },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeStudentCourseInstallmentReceiptStatus(id, status) {
            const data = { api: 'changeStudentCourseInstallmentReceiptStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getAllStudentCourseInstallmentReceipts(student) {
            const data = { api: 'getAllStudentCourseInstallmentReceipts', data: { student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentAllCourseInstallmentReceiptsForStudent(student) {
            const data = { api: 'getStudentAllCourseInstallmentReceiptsForStudent', data: { student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseInstallmentReceipt(id) {
            const data = {
                api: 'getStudentCourseInstallmentReceipt',
                data: { id },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseInstallmentReceiptForEditing(id) {
            const data = {
                api: 'getStudentCourseInstallmentReceiptForEditing',
                data: { id },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editStudentCourseInstallmentReceipt(studentCourseInstallmentReceipt) {
            const data = {
                api: 'editStudentCourseInstallmentReceipt',
                data: studentCourseInstallmentReceipt,
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteStudentCourseInstallmentReceipt(id) {
            const data = {
                api: 'deleteStudentCourseInstallmentReceipt',
                data: { id },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    StudentCourseInstallmentReceiptService.ɵfac = function StudentCourseInstallmentReceiptService_Factory(t) { return new (t || StudentCourseInstallmentReceiptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseInstallmentReceiptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseInstallmentReceiptService, factory: StudentCourseInstallmentReceiptService.ɵfac, providedIn: 'root' });
    return StudentCourseInstallmentReceiptService;
})();


/***/ }),

/***/ "./src/app/services/student-course-installment.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/student-course-installment.service.ts ***!
  \****************************************************************/
/*! exports provided: StudentCourseInstallmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentService", function() { return StudentCourseInstallmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let StudentCourseInstallmentService = /*@__PURE__*/ (() => {
    class StudentCourseInstallmentService {
        constructor(httpService) {
            this.httpService = httpService;
            this.studentCourseInstallments = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this.courseInstallment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        // Installment Id
        setStudentCourseInstallmentId(studentCourseInstallmentId) {
            this.studentCourseInstallmentId = studentCourseInstallmentId;
        }
        getStudentCourseInstallmentId() {
            return this.studentCourseInstallmentId;
        }
        deleteStudentCourseInstallmentId() {
            this.studentCourseInstallmentId = null;
        }
        // Installments
        setStudentCourseInstallmentData(studentCourseInstallments) {
            this.studentCourseInstallments.next(studentCourseInstallments);
        }
        getStudentCourseInstallmentData() {
            return this.studentCourseInstallments;
        }
        deleteStudentCourseInstallmentData() {
            this.studentCourseInstallments.next(null);
        }
        // Single Installment Id
        setCourseInstallmentId(courseInstallmentId) {
            this.courseInstallmentId = courseInstallmentId;
        }
        getCourseInstallmentId() {
            return this.courseInstallmentId;
        }
        deleteCourseInstallmentId() {
            this.courseInstallmentId = null;
        }
        // Single Installment
        setCourseInstallmentData(courseInstallment) {
            this.courseInstallment.next(courseInstallment);
        }
        getCourseInstallmentData() {
            return this.courseInstallment;
        }
        deleteCourseInstallmentData() {
            this.courseInstallment.next(null);
        }
        // Set Course Installment Receipt
        setCourseInstallmentReceipt(installmentId, receiptId) {
            this.studentCourseInstallments.subscribe((studentCourseInstallment) => {
                if (studentCourseInstallment) {
                    const i = studentCourseInstallment.installments.findIndex((curInstallment) => curInstallment._id === installmentId);
                    if (i >= 0) {
                        if (receiptId) {
                            studentCourseInstallment.amountCollected =
                                studentCourseInstallment.amountCollected +
                                    studentCourseInstallment.installments[i].installmentAmount;
                        }
                        else {
                            studentCourseInstallment.amountCollected =
                                studentCourseInstallment.amountCollected -
                                    studentCourseInstallment.installments[i].installmentAmount;
                        }
                        studentCourseInstallment.pendingAmount =
                            studentCourseInstallment.totalAmount - studentCourseInstallment.amountCollected;
                        studentCourseInstallment.installments[i].receiptId = receiptId;
                    }
                }
            });
        }
        // Get Course Installment by Installment Id
        getCourseInstallment(installmentId) {
            return this.studentCourseInstallments.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((studentCourseInstallment) => {
                if (studentCourseInstallment) {
                    const installment = studentCourseInstallment.installments.find((curInstallment) => curInstallment._id === installmentId);
                    return installment;
                }
                return null;
            }));
        }
        addStudentCourseInstallment(studentCourse, studentCourseInstallment) {
            const data = {
                api: 'newStudentCourseInstallment',
                data: { studentCourse, studentCourseInstallment },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseInstallments(student) {
            const data = { api: 'getStudentCourseInstallments', data: { student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseInstallment(id) {
            const data = { api: 'getStudentCourseInstallment', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseInstallmentForEditing(id) {
            const data = { api: 'getStudentCourseInstallmentForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeStudentCourseInstallmentStatus(id, status) {
            const data = { api: 'changeStudentCourseInstallmentStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editStudentCourseInstallment(studentCourseInstallment) {
            const data = { api: 'updateStudentCourseInstallment', data: studentCourseInstallment };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteStudentCourseInstallment(id) {
            const data = { api: 'deleteStudentCourseInstallment', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    StudentCourseInstallmentService.ɵfac = function StudentCourseInstallmentService_Factory(t) { return new (t || StudentCourseInstallmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseInstallmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseInstallmentService, factory: StudentCourseInstallmentService.ɵfac, providedIn: 'root' });
    return StudentCourseInstallmentService;
})();


/***/ }),

/***/ "./src/app/services/student-course.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/student-course.service.ts ***!
  \****************************************************/
/*! exports provided: StudentCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseService", function() { return StudentCourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let StudentCourseService = /*@__PURE__*/ (() => {
    class StudentCourseService {
        constructor(httpService) {
            this.httpService = httpService;
            this.studentCourse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setStudentCourseData(studentCourse) {
            this.studentCourse.next(studentCourse);
        }
        getStudentCourseData() {
            return this.studentCourse;
        }
        deleteStudentCourseData() {
            this.studentCourse.next(null);
        }
        setStudentCourseId(studentCourseId) {
            this.studentCourseId = studentCourseId;
        }
        getStudentCourseId() {
            return this.studentCourseId;
        }
        deleteStudentCourseId() {
            this.studentCourseId = null;
        }
        addStudentCourse(studentCourse, studentCourseInstallment) {
            const data = { api: 'newStudentCourse', data: { studentCourse, studentCourseInstallment } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourses(branch, category, student) {
            const data = { api: 'getStudentCourses', data: { branch, category, student } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentAllCourses(branch) {
            const data = { api: 'getStudentAllCourses', data: { branch } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourse(id) {
            const data = { api: 'getStudentCourse', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        checkBatchRollNumber(branch, category, course, batch, rollNumber) {
            const data = {
                api: 'checkBatchRollNumber',
                data: { branch, category, course, batch, rollNumber },
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentCourseForEditing(id) {
            const data = { api: 'getStudentCourseForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeStudentCourseStatus(id, status) {
            const data = { api: 'changeStudentCourseStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editStudentCourse(studentCourse, studentCourseInstallment) {
            const data = { api: 'updateStudentCourse', data: { studentCourse, studentCourseInstallment } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteStudentCourse(id) {
            const data = { api: 'deleteStudentCourse', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    StudentCourseService.ɵfac = function StudentCourseService_Factory(t) { return new (t || StudentCourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseService, factory: StudentCourseService.ɵfac, providedIn: 'root' });
    return StudentCourseService;
})();


/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





let StudentService = /*@__PURE__*/ (() => {
    class StudentService {
        constructor(httpService) {
            this.httpService = httpService;
            this.student = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }
        setStudentType(type) {
            this.studentType = type;
        }
        getStudentType() {
            return this.studentType;
        }
        deleteStudentType() {
            this.studentType = null;
        }
        setStudentData(student) {
            this.student.next(student);
        }
        getStudentData() {
            return this.student;
        }
        deleteStudentData() {
            this.student.next(null);
        }
        setStudentId(studentId) {
            this.studentId = studentId;
        }
        getStudentId() {
            return this.studentId;
        }
        deleteStudentId() {
            this.studentId = null;
        }
        getStudentName() {
            return this.getStudentData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((student) => {
                if (student) {
                    return student.name;
                }
                return '--';
            }));
        }
        addStudent(student, branchStudent) {
            const data = { api: 'newStudent', data: { student, branchStudent } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudents() {
            const data = { api: 'getStudents', data: {} };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudent(id) {
            const data = { api: 'getStudent', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentByImsId(studentImsId) {
            const data = { api: 'getStudentByImsId', data: { studentImsId } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        searchStudent(studentId) {
            const data = { api: 'searchStudent', data: { studentId } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        getStudentForEditing(id) {
            const data = { api: 'getStudentForEditing', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        changeStudentStatus(id, status) {
            const data = { api: 'changeStudentStatus', data: { id, status } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        editStudent(student) {
            const data = { api: 'updateStudent', data: student };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
        deleteStudent(id) {
            const data = { api: 'deleteStudent', data: { id } };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
        }
    }
    StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
    return StudentService;
})();


/***/ }),

/***/ "./src/app/services/subject.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");




let SubjectService = /*@__PURE__*/ (() => {
    class SubjectService {
        constructor(httpService) {
            this.httpService = httpService;
            this.subjects = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
            this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }
        setSubjectId(subjectId) {
            this.subjectId = subjectId;
        }
        getSubjectId() {
            return this.subjectId;
        }
        deleteSubjectId() {
            this.subjectId = null;
        }
        setSubjectsData(subjects) {
            this.subjects.next(subjects);
        }
        getSubjectsData() {
            return this.subjects;
        }
        deleteSubjectsData() {
            this.subjects.next([]);
        }
        setSubjectData(subject) {
            this.subject.next(subject);
        }
        getSubjectData() {
            return this.subject;
        }
        deleteSubjectData() {
            this.subject.next(null);
        }
    }
    SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
    SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });
    return SubjectService;
})();


/***/ }),

/***/ "./src/app/shared/numberToWords.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/numberToWords.ts ***!
  \*****************************************/
/*! exports provided: numberToWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToWords", function() { return numberToWords; });
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/numberToWords.min.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! capitalize */ "./node_modules/capitalize/index.js");
/* harmony import */ var capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(capitalize__WEBPACK_IMPORTED_MODULE_1__);


function numberToWords(number) {
    const myNumber = +number;
    const numToWords = number_to_words__WEBPACK_IMPORTED_MODULE_0___default.a.toWords(myNumber).replace(',', '').replace('-', ' ').split(' ');
    const arr = new Array();
    numToWords.forEach((curNum) => {
        arr.push(capitalize__WEBPACK_IMPORTED_MODULE_1___default()(curNum));
    });
    return arr.join(' ');
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const environment = {
    production: true,
    backend: '',
    encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
    aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
    razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
    zoomLiveURL: '/online-meeting/#/live',
    SOCKET_ENDPOINT: '/classMasterSocketConnection',
};


/***/ })

}]);