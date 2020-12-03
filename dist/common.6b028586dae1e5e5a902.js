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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var BranchAuthGuard = /** @class */ /*@__PURE__*/ (function () {
    function BranchAuthGuard(branchService, router) {
        this.branchService = branchService;
        this.router = router;
    }
    // tslint:disable-next-line: max-line-length
    BranchAuthGuard.prototype.canActivate = function (route, router) {
        var branchId = this.branchService.getBranchId();
        if (branchId && branchId !== '') {
            return true;
        }
        return this.router.createUrlTree(['/']);
    };
    // tslint:disable-next-line: max-line-length
    BranchAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    BranchAuthGuard.ɵfac = function BranchAuthGuard_Factory(t) { return new (t || BranchAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    BranchAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchAuthGuard, factory: BranchAuthGuard.ɵfac, providedIn: 'root' });
    return BranchAuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var AssignmentSubmissionService = /** @class */ /*@__PURE__*/ (function () {
    function AssignmentSubmissionService(httpService) {
        this.httpService = httpService;
        this.assignmentSubmission = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AssignmentSubmissionService.prototype.setAssignmentSubmissionData = function (assignmentSubmission) {
        this.assignmentSubmission.next(assignmentSubmission);
    };
    AssignmentSubmissionService.prototype.getAssignmentSubmissionData = function () {
        return this.assignmentSubmission;
    };
    AssignmentSubmissionService.prototype.deleteAssignmentSubmissionData = function () {
        this.assignmentSubmission.next(null);
    };
    AssignmentSubmissionService.prototype.setAssignmentSubmissionId = function (assignmentSubmissionId) {
        this.assignmentSubmissionId = assignmentSubmissionId;
    };
    AssignmentSubmissionService.prototype.getAssignmentSubmissionId = function () {
        return this.assignmentSubmissionId;
    };
    AssignmentSubmissionService.prototype.deleteAssignmentSubmissionId = function () {
        this.assignmentSubmissionId = null;
    };
    AssignmentSubmissionService.prototype.submitAssignment = function (assignmentSubmission) {
        var data = { api: 'submitAssignment', data: assignmentSubmission };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.getAssignmentSubmissions = function (assignment) {
        var data = { api: 'getAssignmentSubmissions', data: { assignment: assignment } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.getSubmissionOfAssignment = function (assignment) {
        var data = { api: 'getSubmissionOfAssignment', data: { assignment: assignment } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.getAssignmentSubmission = function (id) {
        var data = { api: 'getAssignmentSubmission', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.saveAssignmentSubmissionGrades = function (submissionGrades) {
        var data = { api: 'saveAssignmentSubmissionGrades', data: submissionGrades };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.updateAssignmentSubmission = function (assignmentSubmission) {
        var data = { api: 'updateAssignmentSubmission', data: assignmentSubmission };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.prototype.deleteAssignmentSubmission = function (id) {
        var data = { api: 'deleteAssignmentSubmission', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentSubmissionService.ɵfac = function AssignmentSubmissionService_Factory(t) { return new (t || AssignmentSubmissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AssignmentSubmissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignmentSubmissionService, factory: AssignmentSubmissionService.ɵfac, providedIn: 'root' });
    return AssignmentSubmissionService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var AssignmentService = /** @class */ /*@__PURE__*/ (function () {
    function AssignmentService(httpService) {
        this.httpService = httpService;
        this.assignment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    AssignmentService.prototype.setAssignmentData = function (assignment) {
        this.assignment.next(assignment);
    };
    AssignmentService.prototype.getAssignmentData = function () {
        return this.assignment;
    };
    AssignmentService.prototype.deleteAssignmentData = function () {
        this.assignment.next(null);
    };
    AssignmentService.prototype.setAssignmentId = function (assignmentId) {
        this.assignmentId = assignmentId;
    };
    AssignmentService.prototype.getAssignmentId = function () {
        return this.assignmentId;
    };
    AssignmentService.prototype.deleteAssignmentId = function () {
        this.assignmentId = null;
    };
    AssignmentService.prototype.saveAssignment = function (assignment) {
        var data = { api: 'saveAssignment', data: assignment };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.getAssignments = function (branch, category, course, batch, subject, month, year) {
        var data = {
            api: 'getAssignments',
            data: { branch: branch, category: category, course: course, batch: batch, subject: subject, month: month, year: year },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.getAssignmentsForStudent = function (branch, category, course, batch, subject, month, year) {
        var data = {
            api: 'getAssignmentsForStudent',
            data: { branch: branch, category: category, course: course, batch: batch, subject: subject, month: month, year: year },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.getAssignment = function (id) {
        var data = { api: 'getAssignment', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.updateAssignment = function (assignment) {
        var data = { api: 'updateAssignment', data: assignment };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.changeAssignmentStatus = function (id, status) {
        var data = { api: 'changeAssignmentStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.deleteAssignmentAttachment = function (id, publicId) {
        var data = { api: 'deleteAssignmentAttachment', data: { id: id, publicId: publicId } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.prototype.deleteAssignment = function (id) {
        var data = { api: 'deleteAssignment', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AssignmentService.ɵfac = function AssignmentService_Factory(t) { return new (t || AssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignmentService, factory: AssignmentService.ɵfac, providedIn: 'root' });
    return AssignmentService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var AttendanceService = /** @class */ /*@__PURE__*/ (function () {
    function AttendanceService(httpService) {
        this.httpService = httpService;
    }
    AttendanceService.prototype.getStudents = function (branch, category, course, batch, lecture) {
        var data = {
            api: 'getStudentsForAttendance',
            data: { branch: branch, category: category, course: course, batch: batch, lecture: lecture },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AttendanceService.prototype.saveAttendance = function (attendance) {
        var data = { api: 'saveAttendance', data: attendance };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AttendanceService.prototype.getStudentCourseAttendance = function (subject, month, year, student, studentCourse) {
        var data = {
            api: 'getStudentCourseAttendance',
            data: { subject: subject, month: month, year: year, student: student, studentCourse: studentCourse },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AttendanceService.prototype.getAttendance = function (month, year, branch, category, course, batch, student) {
        var data = {
            api: 'getAttendance',
            data: { month: month, year: year, branch: branch, category: category, course: course, batch: batch, student: student },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    AttendanceService.ɵfac = function AttendanceService_Factory(t) { return new (t || AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    AttendanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttendanceService, factory: AttendanceService.ɵfac, providedIn: 'root' });
    return AttendanceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var InstituteBillingService = /** @class */ /*@__PURE__*/ (function () {
    function InstituteBillingService(httpService) {
        this.httpService = httpService;
        this.billingDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    InstituteBillingService.prototype.setBilling = function (billingDetails) {
        this.billingDetails.next(billingDetails);
    };
    InstituteBillingService.prototype.getBilling = function () {
        return this.billingDetails;
    };
    InstituteBillingService.prototype.deleteBilling = function () {
        this.billingDetails.next(null);
    };
    InstituteBillingService.prototype.saveBillingDetails = function (billingDetails) {
        var data = { api: 'saveBillingDetails', data: billingDetails };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteBillingService.prototype.getBillingDetails = function (branch) {
        var data = { api: 'getBillingDetails', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteBillingService.ɵfac = function InstituteBillingService_Factory(t) { return new (t || InstituteBillingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteBillingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteBillingService, factory: InstituteBillingService.ɵfac, providedIn: 'root' });
    return InstituteBillingService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var BranchEmployeeService = /** @class */ /*@__PURE__*/ (function () {
    function BranchEmployeeService(httpService) {
        this.httpService = httpService;
        this.branchEmployee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.branchEmployees = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.branchEmployeeNameIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    BranchEmployeeService.prototype.setBranchEmployeeData = function (branchEmployee) {
        this.branchEmployee.next(branchEmployee);
    };
    BranchEmployeeService.prototype.getBranchEmployeeData = function () {
        return this.branchEmployee;
    };
    BranchEmployeeService.prototype.deleteBranchEmployeeData = function () {
        this.branchEmployee.next(null);
    };
    BranchEmployeeService.prototype.setBranchEmployeesData = function (branchEmployees) {
        this.branchEmployees.next(branchEmployees);
    };
    BranchEmployeeService.prototype.getBranchEmployeesData = function () {
        return this.branchEmployees;
    };
    BranchEmployeeService.prototype.deleteBranchEmployeesData = function () {
        this.branchEmployees.next([]);
    };
    BranchEmployeeService.prototype.setBranchEmployeeNameIdsData = function (branchEmployeeNameIds) {
        this.branchEmployeeNameIds.next(branchEmployeeNameIds);
    };
    BranchEmployeeService.prototype.getBranchEmployeeNameIdsData = function () {
        return this.branchEmployeeNameIds;
    };
    BranchEmployeeService.prototype.deleteBranchEmployeeNameIdsData = function () {
        this.branchEmployeeNameIds.next([]);
    };
    BranchEmployeeService.prototype.setBranchEmployeeId = function (branchEmployeeId) {
        this.branchEmployeeId = branchEmployeeId;
    };
    BranchEmployeeService.prototype.getBranchEmployeeId = function () {
        return this.branchEmployeeId;
    };
    BranchEmployeeService.prototype.deleteBranchEmployeeId = function () {
        this.branchEmployeeId = null;
    };
    BranchEmployeeService.prototype.getBranchEmployees = function (branch, type) {
        var data = { api: 'getBranchEmployees', data: { branch: branch, type: type } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeesForBatch = function (branch, role) {
        var data = { api: 'getBranchEmployeesForBatch', data: { branch: branch, role: role } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeeNameIds = function (branch, type) {
        var data = { api: 'getBranchEmployeeNameIds', data: { branch: branch, type: type } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchAllEmployeeNameIds = function (branch) {
        var data = { api: 'getBranchAllEmployeeNameIds', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeeNameIdsForBatch = function (branch, role) {
        var data = { api: 'getBranchEmployeeNameIdsForBatch', data: { branch: branch, role: role } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployee = function (id, employee) {
        var data = { api: 'addBranchEmployee', data: { id: id, employee: employee } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeeRole = function (branch) {
        var data = { api: 'getBranchEmployeeRole', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeeForSalary = function (id, employee) {
        var data = { api: 'getBranchEmployeeForSalary', data: { id: id, employee: employee } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.newBranchEmployee = function (branchEmployee) {
        var data = { api: 'newBranchEmployee', data: branchEmployee };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.getBranchEmployeeForEditing = function (id, employee) {
        var data = { api: 'getBranchEmployeeForEditing', data: { id: id, employee: employee } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.editBranchEmployee = function (branchEmployee) {
        var data = { api: 'updateBranchEmployee', data: branchEmployee };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.changeBranchEmployeeStatus = function (id, status) {
        var data = { api: 'changeBranchEmployeeStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.prototype.deleteBranchEmployee = function (id) {
        var data = { api: 'deleteBranchEmployee', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchEmployeeService.ɵfac = function BranchEmployeeService_Factory(t) { return new (t || BranchEmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BranchEmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchEmployeeService, factory: BranchEmployeeService.ɵfac, providedIn: 'root' });
    return BranchEmployeeService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var BranchStudentService = /** @class */ /*@__PURE__*/ (function () {
    function BranchStudentService(httpService) {
        this.httpService = httpService;
    }
    BranchStudentService.prototype.setBranchStudentData = function (branchStudent) {
        this.branchStudent = branchStudent;
    };
    BranchStudentService.prototype.getBranchStudentData = function () {
        return this.branchStudent;
    };
    BranchStudentService.prototype.deleteBranchStudentData = function () {
        this.branchStudent = null;
    };
    BranchStudentService.prototype.setBranchStudentId = function (branchStudentId) {
        this.branchStudentId = branchStudentId;
    };
    BranchStudentService.prototype.getBranchStudentId = function () {
        return this.branchStudentId;
    };
    BranchStudentService.prototype.deleteBranchStudentId = function () {
        this.branchStudentId = null;
    };
    BranchStudentService.prototype.getBranchStudents = function (branch, category, type) {
        var data = { api: 'getBranchStudents', data: { branch: branch, category: category, type: type } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.getBranchStudentNameIds = function (branch, category, type) {
        var data = { api: 'getBranchStudentNameIds', data: { branch: branch, category: category, type: type } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.getBranchAllStudentNameIds = function (branch, category) {
        var data = { api: 'getBranchAllStudentNameIds', data: { branch: branch, category: category } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.getBranchStudent = function (id, student) {
        var data = { api: 'addBranchStudent', data: { id: id, student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.newBranchStudent = function (branchStudent) {
        var data = { api: 'newBranchStudent', data: branchStudent };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.getBranchStudentForEditing = function (id, student) {
        var data = { api: 'getBranchStudentForEditing', data: { id: id, student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.editBranchStudent = function (branchStudent) {
        var data = { api: 'updateBranchStudent', data: branchStudent };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.changeBranchStudentStatus = function (id, status) {
        var data = { api: 'changeBranchStudentStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.prototype.deleteBranchStudent = function (id) {
        var data = { api: 'deleteBranchStudent', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    BranchStudentService.ɵfac = function BranchStudentService_Factory(t) { return new (t || BranchStudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    BranchStudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchStudentService, factory: BranchStudentService.ɵfac, providedIn: 'root' });
    return BranchStudentService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var CouponService = /** @class */ /*@__PURE__*/ (function () {
    function CouponService(httpService) {
        this.httpService = httpService;
        this.discountTypes = ['percentage', 'amount'];
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    CouponService.prototype.getDiscountTypes = function () {
        return this.discountTypes;
    };
    CouponService.prototype.setCouponId = function (couponId) {
        this.couponId = couponId;
    };
    CouponService.prototype.getCouponId = function () {
        return this.couponId;
    };
    CouponService.prototype.deleteCouponId = function () {
        this.couponId = null;
    };
    CouponService.prototype.setAppliedCoupon = function (appliedCoupon) {
        this.appliedCoupon = appliedCoupon;
    };
    CouponService.prototype.getAppliedCoupon = function () {
        return this.appliedCoupon;
    };
    CouponService.prototype.deleteAppliedCoupon = function () {
        this.appliedCoupon = null;
    };
    CouponService.prototype.setCouponData = function (coupon) {
        this.coupon.next(coupon);
    };
    CouponService.prototype.getCouponData = function () {
        return this.coupon;
    };
    CouponService.prototype.deleteCouponData = function () {
        this.coupon.next(null);
    };
    CouponService.prototype.getCoupons = function () {
        var data = { api: 'getCoupons', data: {} };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.getCoupon = function (id) {
        var data = { api: 'getCoupon', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.getCouponForEditing = function (id) {
        var data = { api: 'getCouponForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.addCoupon = function (coupon) {
        var data = { api: 'newCoupon', data: coupon };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.editCoupon = function (coupon) {
        var data = { api: 'updateCoupon', data: coupon };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.deleteCoupon = function (id) {
        var data = { api: 'deleteCoupon', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.changeCouponStatus = function (id, status) {
        var data = { api: 'changeCouponStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.checkCoupon = function (code) {
        var data = { api: 'checkCoupon', data: { code: code } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.prototype.validateCoupon = function (code) {
        var data = { api: 'validateCoupon', data: { code: code } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CouponService.ɵfac = function CouponService_Factory(t) { return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CouponService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CouponService, factory: CouponService.ɵfac, providedIn: 'root' });
    return CouponService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var CourseMaterialService = /** @class */ /*@__PURE__*/ (function () {
    function CourseMaterialService(httpService) {
        this.httpService = httpService;
        this.courseMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.courseMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    CourseMaterialService.prototype.setCourseMaterialId = function (courseMaterialId) {
        this.courseMaterialId = courseMaterialId;
    };
    CourseMaterialService.prototype.getCourseMaterialId = function () {
        return this.courseMaterialId;
    };
    CourseMaterialService.prototype.deleteCourseMaterialId = function () {
        this.courseMaterialId = null;
    };
    CourseMaterialService.prototype.setCourseMaterialsData = function (courseMaterials) {
        this.courseMaterials.next(courseMaterials);
    };
    CourseMaterialService.prototype.getCourseMaterialsData = function () {
        return this.courseMaterials;
    };
    CourseMaterialService.prototype.deleteCourseMaterialsData = function () {
        this.courseMaterials.next([]);
    };
    CourseMaterialService.prototype.setCourseMaterialData = function (courseMaterial) {
        this.courseMaterial.next(courseMaterial);
    };
    CourseMaterialService.prototype.getCourseMaterialData = function () {
        return this.courseMaterial;
    };
    CourseMaterialService.prototype.deleteCourseMaterialData = function () {
        this.courseMaterial.next(null);
    };
    CourseMaterialService.prototype.getCourseMaterials = function (branch, category, course, subject) {
        var data = { api: 'getCourseMaterials', data: { branch: branch, category: category, course: course, subject: subject } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.prototype.getCourseMaterial = function (id) {
        var data = { api: 'getCourseMaterials', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.prototype.getCourseMaterialsForStudent = function (branch, category, course, subject) {
        var data = {
            api: 'getCourseMaterialsForStudent',
            data: { branch: branch, category: category, course: course, subject: subject },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.prototype.newCourseMaterials = function (materials) {
        var data = { api: 'newCourseMaterials', data: materials };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.prototype.changeCourseMaterialStatus = function (id, status) {
        var data = { api: 'changeCourseMaterialStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.prototype.deleteCourseMaterial = function (id) {
        var data = { api: 'deleteCourseMaterial', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    CourseMaterialService.ɵfac = function CourseMaterialService_Factory(t) { return new (t || CourseMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    CourseMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseMaterialService, factory: CourseMaterialService.ɵfac, providedIn: 'root' });
    return CourseMaterialService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var DashboardService = /** @class */ /*@__PURE__*/ (function () {
    function DashboardService(httpService) {
        this.httpService = httpService;
    }
    DashboardService.prototype.getBranchDashboard = function (branch) {
        var data = { api: 'getBranchDashboard', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DashboardService.prototype.getBranchDashboardForEmployee = function (branch) {
        var data = { api: 'getBranchDashboardForEmployee', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DashboardService.prototype.getStudentBranchDashboard = function (branch) {
        var data = { api: 'getStudentBranchDashboard', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
    return DashboardService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var DiscountAndOfferService = /** @class */ /*@__PURE__*/ (function () {
    function DiscountAndOfferService(httpService) {
        this.httpService = httpService;
        this.discountTypes = ['percentage', 'amount'];
        this.discountAndOffers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.discountAndOffer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    DiscountAndOfferService.prototype.getDiscountTypes = function () {
        return this.discountTypes;
    };
    DiscountAndOfferService.prototype.setDiscountAndOfferId = function (discountAndOfferId) {
        this.discountAndOfferId = discountAndOfferId;
    };
    DiscountAndOfferService.prototype.getDiscountAndOfferId = function () {
        return this.discountAndOfferId;
    };
    DiscountAndOfferService.prototype.deleteDiscountAndOfferId = function () {
        this.discountAndOfferId = null;
    };
    DiscountAndOfferService.prototype.setDiscountAndOffersData = function (discountAndOffers) {
        this.discountAndOffers.next(discountAndOffers);
    };
    DiscountAndOfferService.prototype.getDiscountAndOffersData = function () {
        return this.discountAndOffers;
    };
    DiscountAndOfferService.prototype.deleteDiscountAndOffersData = function () {
        this.discountAndOffers.next([]);
    };
    DiscountAndOfferService.prototype.setDiscountAndOfferData = function (discountAndOffer) {
        this.discountAndOffer.next(discountAndOffer);
    };
    DiscountAndOfferService.prototype.getDiscountAndOfferData = function () {
        return this.discountAndOffer;
    };
    DiscountAndOfferService.prototype.deleteDiscountAndOfferData = function () {
        this.discountAndOffer.next(null);
    };
    DiscountAndOfferService.prototype.getDiscountAndOffers = function (branch) {
        var data = { api: 'getDiscountAndOffers', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.getDiscountAndOffersForStudent = function (branch) {
        var data = { api: 'getDiscountAndOffersForStudent', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.getDiscountAndOffer = function (id) {
        var data = { api: 'getDiscountAndOffer', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.getDiscountAndOfferForEditing = function (id) {
        var data = { api: 'getDiscountAndOfferForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.CheckDiscountAndOffer = function (branch, code) {
        var data = { api: 'CheckDiscountAndOffer', data: { branch: branch, code: code } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.addDiscountAndOffer = function (discountAndOffer) {
        var data = { api: 'newDiscountAndOffer', data: discountAndOffer };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.editDiscountAndOffer = function (discountAndOffer) {
        var data = { api: 'updateDiscountAndOffer', data: discountAndOffer };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.deleteDiscountAndOffer = function (id) {
        var data = { api: 'deleteDiscountAndOffer', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.prototype.changeDiscountAndOfferStatus = function (id, status) {
        var data = { api: 'changeDiscountAndOfferStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    DiscountAndOfferService.ɵfac = function DiscountAndOfferService_Factory(t) { return new (t || DiscountAndOfferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    DiscountAndOfferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DiscountAndOfferService, factory: DiscountAndOfferService.ɵfac, providedIn: 'root' });
    return DiscountAndOfferService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var EmployeeLeaveService = /** @class */ /*@__PURE__*/ (function () {
    function EmployeeLeaveService(httpService) {
        this.httpService = httpService;
        this.employeeLeave = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    EmployeeLeaveService.prototype.setEmployeeLeaveData = function (employeeLeave) {
        this.employeeLeave.next(employeeLeave);
    };
    EmployeeLeaveService.prototype.getEmployeeLeaveData = function () {
        return this.employeeLeave;
    };
    EmployeeLeaveService.prototype.deleteEmployeeLeaveData = function () {
        this.employeeLeave.next(null);
    };
    EmployeeLeaveService.prototype.setEmployeeLeaveId = function (employeeLeaveId) {
        this.employeeLeaveId = employeeLeaveId;
    };
    EmployeeLeaveService.prototype.getEmployeeLeaveId = function () {
        return this.employeeLeaveId;
    };
    EmployeeLeaveService.prototype.deleteEmployeeLeaveId = function () {
        this.employeeLeaveId = null;
    };
    EmployeeLeaveService.prototype.createEmployeeLeave = function (employeeLeave) {
        var data = { api: 'createEmployeeLeave', data: employeeLeave };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.changeEmployeeLeaveStatus = function (leave) {
        var data = { api: 'changeEmployeeLeaveStatus', data: leave };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.getEmployeeLeaves = function (employee, month, year) {
        var data = { api: 'getEmployeeLeaves', data: { employee: employee, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.getBranchAllEmployeeLeaves = function (branch, employee, month, year) {
        var data = { api: 'getBranchAllEmployeeLeaves', data: { branch: branch, employee: employee, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.getBranchEmployeeLeaves = function (branch, employee, month, year) {
        var data = { api: 'getBranchEmployeeLeaves', data: { branch: branch, employee: employee, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.getMyBranchLeaves = function (branch, month, year) {
        var data = { api: 'getMyBranchLeaves', data: { branch: branch, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.getEmployeeLeave = function (id) {
        var data = { api: 'getEmployeeLeave', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.updateEmployeeLeave = function (employeeLeave) {
        var data = { api: 'updateEmployeeLeave', data: employeeLeave };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.prototype.deleteEmployeeLeave = function (id) {
        var data = { api: 'deleteEmployeeLeave', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeLeaveService.ɵfac = function EmployeeLeaveService_Factory(t) { return new (t || EmployeeLeaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeLeaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeLeaveService, factory: EmployeeLeaveService.ɵfac, providedIn: 'root' });
    return EmployeeLeaveService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var EmployeeSalaryService = /** @class */ /*@__PURE__*/ (function () {
    function EmployeeSalaryService(httpService) {
        this.httpService = httpService;
        this.employeeSalary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    EmployeeSalaryService.prototype.setEmployeeSalaryData = function (employeeSalary) {
        this.employeeSalary.next(employeeSalary);
    };
    EmployeeSalaryService.prototype.getEmployeeSalaryData = function () {
        return this.employeeSalary;
    };
    EmployeeSalaryService.prototype.deleteEmployeeSalaryData = function () {
        this.employeeSalary.next(null);
    };
    EmployeeSalaryService.prototype.setEmployeeSalaryId = function (employeeSalaryId) {
        this.employeeSalaryId = employeeSalaryId;
    };
    EmployeeSalaryService.prototype.getEmployeeSalaryId = function () {
        return this.employeeSalaryId;
    };
    EmployeeSalaryService.prototype.deleteEmployeeSalaryId = function () {
        this.employeeSalaryId = null;
    };
    EmployeeSalaryService.prototype.addEmployeeSalary = function (employeeSalary) {
        var data = { api: 'newEmployeeSalary', data: employeeSalary };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.changeEmployeeSalaryStatus = function (id, status) {
        var data = { api: 'changeEmployeeSalaryStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.getBranchEmployeeSalaries = function (branch, employee, month, year) {
        var data = { api: 'getBranchEmployeeSalaries', data: { branch: branch, employee: employee, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.getMyBranchSalaries = function (branch, month, year) {
        var data = { api: 'getMyBranchSalaries', data: { branch: branch, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.getEmployeeSalaries = function (employee, month, year) {
        var data = { api: 'getEmployeeSalaries', data: { employee: employee, month: month, year: year } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.getEmployeeSalary = function (id) {
        var data = { api: 'getEmployeeSalary', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.prototype.deleteEmployeeSalary = function (id) {
        var data = { api: 'deleteEmployeeSalary', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeSalaryService.ɵfac = function EmployeeSalaryService_Factory(t) { return new (t || EmployeeSalaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeSalaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeSalaryService, factory: EmployeeSalaryService.ɵfac, providedIn: 'root' });
    return EmployeeSalaryService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var EmployeeService = /** @class */ /*@__PURE__*/ (function () {
    function EmployeeService(httpService) {
        this.httpService = httpService;
        this.employee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    EmployeeService.prototype.setEmployeeData = function (employee) {
        this.employee.next(employee);
    };
    EmployeeService.prototype.getEmployeeData = function () {
        return this.employee;
    };
    EmployeeService.prototype.deleteEmployeeData = function () {
        this.employee.next(null);
    };
    EmployeeService.prototype.setEmployeeType = function (employeeType) {
        this.employeeType = employeeType;
    };
    EmployeeService.prototype.getEmployeeType = function () {
        return this.employeeType;
    };
    EmployeeService.prototype.deleteEmployeeType = function () {
        this.employeeType = null;
    };
    EmployeeService.prototype.setEmployeeId = function (employeeId) {
        this.employeeId = employeeId;
    };
    EmployeeService.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    EmployeeService.prototype.deleteEmployeeId = function () {
        this.employeeId = null;
    };
    EmployeeService.prototype.addEmployee = function (employee, branchEmployee) {
        var data = { api: 'newEmployee', data: { employee: employee, branchEmployee: branchEmployee } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.getEmployees = function () {
        var data = { api: 'getEmployees', data: {} };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.getEmployee = function (id) {
        var data = { api: 'getEmployee', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.getEmployeeByIMSId = function (id) {
        var data = { api: 'getEmployeeByIMSId', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.searchEmployee = function (employeeId) {
        var data = { api: 'searchEmployee', data: { employeeId: employeeId } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.getEmployeeForEditing = function (id) {
        var data = { api: 'getEmployeeForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.changeEmployeeStatus = function (id, status) {
        var data = { api: 'changeEmployeeStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.editEmployee = function (employee) {
        var data = { api: 'updateEmployee', data: employee };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        var data = { api: 'deleteEmployee', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
    return EmployeeService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var ExamService = /** @class */ /*@__PURE__*/ (function () {
    function ExamService(httpService) {
        this.httpService = httpService;
        this.exam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ExamService.prototype.setExamData = function (exam) {
        this.exam.next(exam);
    };
    ExamService.prototype.getExamData = function () {
        return this.exam;
    };
    ExamService.prototype.deleteExamData = function () {
        this.exam.next(null);
    };
    ExamService.prototype.setExamId = function (examId) {
        this.examId = examId;
    };
    ExamService.prototype.getExamId = function () {
        return this.examId;
    };
    ExamService.prototype.deleteExamId = function () {
        this.examId = null;
    };
    ExamService.prototype.getStudentCourseScore = function (subject, month, year, student, studentCourse) {
        var data = {
            api: 'getStudentCourseScore',
            data: { subject: subject, month: month, year: year, student: student, studentCourse: studentCourse },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getStudentsForExam = function (exam) {
        var data = {
            api: 'getStudentsForExam',
            data: { exam: exam },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.saveExam = function (exam) {
        var data = { api: 'saveExam', data: exam };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getExams = function (branch, category, course, batch, subject, month, year) {
        var data = {
            api: 'getExams',
            data: { branch: branch, category: category, course: course, batch: batch, subject: subject, month: month, year: year },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getExamsPerformance = function (month, year, branch, category, course, batch, subject, student) {
        var data = {
            api: 'getExamsPerformance',
            data: { month: month, year: year, branch: branch, category: category, course: course, batch: batch, subject: subject, student: student },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getExam = function (id) {
        var data = { api: 'getExam', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getExamReport = function (id) {
        var data = { api: 'getExamReport', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.getExamForEditing = function (id) {
        var data = { api: 'getExamForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.editExam = function (exam) {
        var data = { api: 'editExam', data: exam };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.saveStudentsMarks = function (id, marks) {
        var data = { api: 'saveStudentsMarks', data: { id: id, marks: marks } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.prototype.deleteExam = function (id) {
        var data = { api: 'deleteExam', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ExamService.ɵfac = function ExamService_Factory(t) { return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac, providedIn: 'root' });
    return ExamService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var InstituteKeysService = /** @class */ /*@__PURE__*/ (function () {
    function InstituteKeysService(httpService) {
        this.httpService = httpService;
    }
    InstituteKeysService.prototype.setLocalInstitutePaymentAccessKey = function (institutePaymentAccessKey) {
        this.institutePaymentAccessKey = institutePaymentAccessKey;
    };
    InstituteKeysService.prototype.getLocalInstitutePaymentAccessKey = function () {
        return this.institutePaymentAccessKey;
    };
    InstituteKeysService.prototype.getInstituteKeys = function () {
        var data = {
            api: 'getInstituteKeys',
            data: {},
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.prototype.getInstitutePaymentAccessKey = function (branch) {
        var data = {
            api: 'getInstitutePaymentAccessKey',
            data: { branch: branch },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.prototype.saveInstitutePaymentGatewayKeys = function (keys) {
        var data = {
            api: 'saveInstitutePaymentGatewayKeys',
            data: { keys: keys },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.prototype.saveInstituteZoomKeys = function (keys) {
        var data = {
            api: 'saveInstituteZoomKeys',
            data: keys,
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.prototype.generateZoomAuthToken = function () {
        var data = {
            api: 'generateZoomAuthToken',
        };
        return this.httpService.httpGet(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.prototype.getZoomAuthLink = function () {
        var data = {
            api: 'getZoomAuthLink',
            data: {},
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    InstituteKeysService.ɵfac = function InstituteKeysService_Factory(t) { return new (t || InstituteKeysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    InstituteKeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstituteKeysService, factory: InstituteKeysService.ɵfac, providedIn: 'root' });
    return InstituteKeysService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var LeadService = /** @class */ /*@__PURE__*/ (function () {
    function LeadService(httpService) {
        this.httpService = httpService;
        this.lead = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    LeadService.prototype.setLeadData = function (lead) {
        this.lead.next(lead);
    };
    LeadService.prototype.getLeadType = function () {
        return this.leadType;
    };
    LeadService.prototype.setLeadType = function (leadType) {
        this.leadType = leadType;
    };
    LeadService.prototype.deleteLeadType = function () {
        this.leadType = null;
    };
    LeadService.prototype.getLeadData = function () {
        return this.lead;
    };
    LeadService.prototype.deleteLeadData = function () {
        this.lead.next(null);
    };
    LeadService.prototype.setLeadId = function (leadId) {
        this.leadId = leadId;
    };
    LeadService.prototype.getLeadId = function () {
        return this.leadId;
    };
    LeadService.prototype.deleteLeadId = function () {
        this.leadId = null;
    };
    LeadService.prototype.saveLead = function (lead) {
        var data = { api: 'saveLead', data: lead };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.getLeads = function (branch, category, course, leadType) {
        var data = { api: 'getLeads', data: { branch: branch, category: category, course: course, leadType: leadType } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.getLead = function (id) {
        var data = { api: 'getLead', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.getLeadForEditing = function (id) {
        var data = { api: 'getLeadForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.editLead = function (lead) {
        var data = { api: 'editLead', data: lead };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.changeLeadStatus = function (id, status) {
        var data = { api: 'changeLeadStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.prototype.deleteLead = function (id) {
        var data = { api: 'deleteLead', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LeadService.ɵfac = function LeadService_Factory(t) { return new (t || LeadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LeadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeadService, factory: LeadService.ɵfac, providedIn: 'root' });
    return LeadService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var LectureMaterialService = /** @class */ /*@__PURE__*/ (function () {
    function LectureMaterialService(httpService) {
        this.httpService = httpService;
        this.lectureMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.lectureMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    LectureMaterialService.prototype.setLectureMaterialId = function (lectureMaterialId) {
        this.lectureMaterialId = lectureMaterialId;
    };
    LectureMaterialService.prototype.getLectureMaterialId = function () {
        return this.lectureMaterialId;
    };
    LectureMaterialService.prototype.deleteLectureMaterialId = function () {
        this.lectureMaterialId = null;
    };
    LectureMaterialService.prototype.setLectureMaterialsData = function (lectureMaterials) {
        this.lectureMaterials.next(lectureMaterials);
    };
    LectureMaterialService.prototype.getLectureMaterialsData = function () {
        return this.lectureMaterials;
    };
    LectureMaterialService.prototype.deleteLectureMaterialsData = function () {
        this.lectureMaterials.next([]);
    };
    LectureMaterialService.prototype.setLectureMaterialData = function (lectureMaterial) {
        this.lectureMaterial.next(lectureMaterial);
    };
    LectureMaterialService.prototype.getLectureMaterialData = function () {
        return this.lectureMaterial;
    };
    LectureMaterialService.prototype.deleteLectureMaterialData = function () {
        this.lectureMaterial.next(null);
    };
    LectureMaterialService.prototype.getLectureMaterials = function (branch, category, course, batch, lecture) {
        var data = { api: 'getLectureMaterials', data: { branch: branch, category: category, course: course, batch: batch, lecture: lecture } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.prototype.getLectureMaterial = function (id) {
        var data = { api: 'getLectureMaterials', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.prototype.getLectureMaterialsForStudent = function (branch, category, course, batch, lecture) {
        var data = {
            api: 'getLectureMaterialsForStudent',
            data: { branch: branch, category: category, course: course, batch: batch, lecture: lecture },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.prototype.newLectureMaterials = function (materials) {
        var data = { api: 'newLectureMaterials', data: materials };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.prototype.changeLectureMaterialStatus = function (id, status) {
        var data = { api: 'changeLectureMaterialStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.prototype.deleteLectureMaterial = function (id) {
        var data = { api: 'deleteLectureMaterial', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureMaterialService.ɵfac = function LectureMaterialService_Factory(t) { return new (t || LectureMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LectureMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LectureMaterialService, factory: LectureMaterialService.ɵfac, providedIn: 'root' });
    return LectureMaterialService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var LectureService = /** @class */ /*@__PURE__*/ (function () {
    function LectureService(httpService) {
        this.httpService = httpService;
        this.lecture = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.lectureId = null;
        this.date = null;
    }
    LectureService.prototype.getSearchDate = function () {
        return this.date;
    };
    LectureService.prototype.setSearchDate = function (date) {
        this.date = date;
    };
    LectureService.prototype.setLectureData = function (lecture) {
        this.lecture.next(lecture);
    };
    LectureService.prototype.getLectureData = function () {
        return this.lecture;
    };
    LectureService.prototype.deleteLectureData = function () {
        this.lecture.next(null);
    };
    LectureService.prototype.setLectureId = function (lectureId) {
        this.lectureId = lectureId;
    };
    LectureService.prototype.getLectureId = function () {
        return this.lectureId;
    };
    LectureService.prototype.deleteLectureId = function () {
        this.lectureId = null;
    };
    LectureService.prototype.getLectures = function (branch, category, course, batch, date) {
        var data = {
            api: 'getLectures',
            data: { branch: branch, category: category, course: course, batch: batch, date: date },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureService.prototype.getLecturesForStudent = function (branch, category, course, batch, date) {
        var data = {
            api: 'getLecturesForStudent',
            data: { branch: branch, category: category, course: course, batch: batch, date: date },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureService.prototype.getLecture = function (id) {
        var data = { api: 'getLecture', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureService.prototype.getUpcomingLecturesForEmployee = function (branch) {
        var data = { api: 'getUpcomingLecturesForEmployee', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    LectureService.ɵfac = function LectureService_Factory(t) { return new (t || LectureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    LectureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LectureService, factory: LectureService.ɵfac, providedIn: 'root' });
    return LectureService;
}());



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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var MembershipService = /** @class */ /*@__PURE__*/ (function () {
    function MembershipService(httpService) {
        this.httpService = httpService;
        this.membershipPlan = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    MembershipService.prototype.setMembershipPlan = function (membershipPlan) {
        this.membershipPlan.next(membershipPlan);
    };
    MembershipService.prototype.getMembershipPlan = function () {
        return this.membershipPlan;
    };
    MembershipService.prototype.setMembershipType = function (membershipType) {
        this.membershipType = membershipType;
    };
    MembershipService.prototype.getMembershipType = function () {
        return this.membershipType;
    };
    MembershipService.prototype.getMemberships = function () {
        var data = { api: 'getMembershipPlans', data: {} };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    MembershipService.prototype.getMembership = function (name) {
        var data = { api: 'getMembershipPlan', data: { name: name } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    MembershipService.prototype.saveMembershipPlan = function (membershipPlan) {
        var data = { api: 'saveMembershipPlan', data: membershipPlan };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    MembershipService.ɵfac = function MembershipService_Factory(t) { return new (t || MembershipService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    MembershipService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MembershipService, factory: MembershipService.ɵfac, providedIn: 'root' });
    return MembershipService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var OnlineExamQuestionService = /** @class */ /*@__PURE__*/ (function () {
    function OnlineExamQuestionService(httpService) {
        this.httpService = httpService;
        this.onlineExamQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    OnlineExamQuestionService.prototype.setOnlineExamQuestionData = function (onlineExamQuestion) {
        this.onlineExamQuestion.next(onlineExamQuestion);
    };
    OnlineExamQuestionService.prototype.getOnlineExamQuestionData = function () {
        return this.onlineExamQuestion;
    };
    OnlineExamQuestionService.prototype.deleteOnlineExamQuestionData = function () {
        this.onlineExamQuestion.next(null);
    };
    OnlineExamQuestionService.prototype.setOnlineExamQuestionId = function (onlineExamQuestionId) {
        this.onlineExamQuestionId = onlineExamQuestionId;
    };
    OnlineExamQuestionService.prototype.getOnlineExamQuestionId = function () {
        return this.onlineExamQuestionId;
    };
    OnlineExamQuestionService.prototype.deleteOnlineExamQuestionId = function () {
        this.onlineExamQuestionId = null;
    };
    OnlineExamQuestionService.prototype.newOnlineExamQuestion = function (contents) {
        var data = { api: 'newOnlineExamQuestion', data: contents };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.getOnlineExamQuestion = function (id) {
        var data = { api: 'getOnlineExamQuestion', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.getOnlineExamQuestions = function (id) {
        var data = { api: 'getOnlineExamQuestions', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.getOnlineExamQuestionsForStudent = function (id) {
        var data = { api: 'getOnlineExamQuestionsForStudent', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.changeOnlineExamQuestionStatus = function (id, status) {
        var data = { api: 'changeOnlineExamQuestionStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.editOnlineExamQuestion = function (question) {
        var data = { api: 'editOnlineExamQuestion', data: question };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.prototype.deleteOnlineExamQuestion = function (id) {
        var data = { api: 'deleteOnlineExamQuestion', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamQuestionService.ɵfac = function OnlineExamQuestionService_Factory(t) { return new (t || OnlineExamQuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    OnlineExamQuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnlineExamQuestionService, factory: OnlineExamQuestionService.ɵfac, providedIn: 'root' });
    return OnlineExamQuestionService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var OnlineExamService = /** @class */ /*@__PURE__*/ (function () {
    function OnlineExamService(httpService) {
        this.httpService = httpService;
        this.onlineExam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.date = null;
    }
    OnlineExamService.prototype.getSearchDate = function () {
        return this.date;
    };
    OnlineExamService.prototype.setSearchDate = function (date) {
        this.date = date;
    };
    OnlineExamService.prototype.setOnlineExamData = function (onlineExam) {
        this.onlineExam.next(onlineExam);
    };
    OnlineExamService.prototype.getOnlineExamData = function () {
        return this.onlineExam;
    };
    OnlineExamService.prototype.deleteOnlineExamData = function () {
        this.onlineExam.next(null);
    };
    OnlineExamService.prototype.setOnlineExamId = function (onlineExamId) {
        this.onlineExamId = onlineExamId;
    };
    OnlineExamService.prototype.getOnlineExamId = function () {
        return this.onlineExamId;
    };
    OnlineExamService.prototype.deleteOnlineExamId = function () {
        this.onlineExamId = null;
    };
    OnlineExamService.prototype.getOnlineExam = function (id) {
        var data = { api: 'getOnlineExam', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.getOnlineExamForEditing = function (id) {
        var data = { api: 'getOnlineExamForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.getOnlineExams = function (branch, category, course, batch, subject, month, year) {
        var data = {
            api: 'getOnlineExams',
            data: { branch: branch, category: category, course: course, batch: batch, subject: subject, month: month, year: year },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.getOnlineExamsForStudent = function (branch, category, course, batch, subject, month, year) {
        var data = {
            api: 'getOnlineExamsForStudent',
            data: { branch: branch, category: category, course: course, batch: batch, subject: subject, month: month, year: year },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.addOnlineExam = function (onlineExam) {
        var data = { api: 'newOnlineExam', data: onlineExam };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.editOnlineExam = function (onlineExam) {
        var data = { api: 'editOnlineExam', data: onlineExam };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.changeOnlineExamStatus = function (id, status) {
        var data = { api: 'changeOnlineExamStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.deleteOnlineExam = function (id) {
        var data = { api: 'deleteOnlineExam', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.saveOnlineExamResult = function (studentQuestionAnswers, onlineExam) {
        var data = { api: 'saveOnlineExamResult', data: { studentQuestionAnswers: studentQuestionAnswers, onlineExam: onlineExam } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.prototype.getOnlineExamResult = function (id) {
        var data = { api: 'getOnlineExamResult', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    OnlineExamService.ɵfac = function OnlineExamService_Factory(t) { return new (t || OnlineExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    OnlineExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnlineExamService, factory: OnlineExamService.ɵfac, providedIn: 'root' });
    return OnlineExamService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var PaymentService = /** @class */ /*@__PURE__*/ (function () {
    function PaymentService(httpService) {
        this.httpService = httpService;
    }
    PaymentService.prototype.getPaymentDetails = function () {
        return this.paymentDetails;
    };
    PaymentService.prototype.setPaymentDetails = function (planType, packageType, amount) {
        this.paymentDetails = { planType: planType, packageType: packageType, amount: amount };
    };
    PaymentService.prototype.deletePaymentDetails = function () {
        this.paymentDetails = null;
    };
    PaymentService.prototype.getInstitutePaymentDetails = function () {
        return this.institutePaymentDetails;
    };
    PaymentService.prototype.setInstitutePaymentDetails = function (amount) {
        this.institutePaymentDetails = { amount: amount };
    };
    PaymentService.prototype.deleteInstitutePaymentDetails = function () {
        this.institutePaymentDetails = null;
    };
    PaymentService.prototype.verifyPayment = function (payment, placedOrder) {
        var data = {
            api: 'verifyPayment',
            data: {
                payment: payment,
                receipt: placedOrder,
            },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    PaymentService.prototype.verifyInstitutePayment = function (branch, payment, placedOrder) {
        var data = {
            api: 'verifyInstitutePayment',
            data: {
                branch: branch,
                payment: payment,
                receipt: placedOrder,
            },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
    return PaymentService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var QuestionAnswersService = /** @class */ /*@__PURE__*/ (function () {
    function QuestionAnswersService(httpService) {
        this.httpService = httpService;
        this.question = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.questionAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.questionAnswers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.questionId = null;
        this.questionAnswerId = null;
        this.questionAnswersId = null;
    }
    QuestionAnswersService.prototype.setQuestion = function (question) {
        this.question.next(question);
    };
    QuestionAnswersService.prototype.getQuestion = function () {
        return this.question;
    };
    QuestionAnswersService.prototype.deleteQuestion = function () {
        this.question.next(null);
    };
    QuestionAnswersService.prototype.setQuestionId = function (questionId) {
        this.questionId = questionId;
    };
    QuestionAnswersService.prototype.getQuestionId = function () {
        return this.questionId;
    };
    QuestionAnswersService.prototype.deleteQuestionId = function () {
        this.questionId = null;
    };
    QuestionAnswersService.prototype.setQuestionAnswer = function (questionAnswer) {
        this.questionAnswer.next(questionAnswer);
    };
    QuestionAnswersService.prototype.getQuestionAnswer = function () {
        return this.questionAnswer;
    };
    QuestionAnswersService.prototype.deleteQuestionAnswer = function () {
        this.questionAnswer.next(null);
    };
    QuestionAnswersService.prototype.setQuestionAnswerId = function (questionAnswerId) {
        this.questionAnswerId = questionAnswerId;
    };
    QuestionAnswersService.prototype.getQuestionAnswerId = function () {
        return this.questionAnswerId;
    };
    QuestionAnswersService.prototype.deleteQuestionAnswerId = function () {
        this.questionAnswerId = null;
    };
    QuestionAnswersService.prototype.setQuestionAnswers = function (questionAnswers) {
        this.questionAnswers.next(questionAnswers);
    };
    QuestionAnswersService.prototype.getQuestionAnswers = function () {
        return this.questionAnswers;
    };
    QuestionAnswersService.prototype.deleteQuestionAnswers = function () {
        this.questionAnswers.next(null);
    };
    QuestionAnswersService.prototype.setQuestionAnswersId = function (questionAnswersId) {
        this.questionAnswersId = questionAnswersId;
    };
    QuestionAnswersService.prototype.getQuestionAnswersId = function () {
        return this.questionAnswersId;
    };
    QuestionAnswersService.prototype.deleteQuestionAnswersId = function () {
        this.questionAnswersId = null;
    };
    QuestionAnswersService.prototype.getLectureQuestionAnswers = function (branch, category, course, batch, lecture) {
        var data = {
            api: 'getLectureQuestionAnswers',
            data: { branch: branch, category: category, course: course, batch: batch, lecture: lecture },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.getLectureQuestionAnswer = function (id) {
        var data = { api: 'getLectureQuestionAnswer', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.newLectureQuestion = function (question) {
        var data = { api: 'newLectureQuestion', data: question };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.editLectureQuestion = function (question) {
        var data = { api: 'editLectureQuestion', data: question };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.deleteLectureQuestion = function (id) {
        var data = { api: 'deleteLectureQuestion', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.newLectureQuestionAnswer = function (answer) {
        var data = { api: 'newLectureQuestionAnswer', data: answer };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.editLectureQuestionAnswer = function (answer) {
        var data = { api: 'editLectureQuestionAnswer', data: answer };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.prototype.deleteLectureQuestionAnswer = function (id) {
        var data = { api: 'deleteLectureQuestionAnswer', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    QuestionAnswersService.ɵfac = function QuestionAnswersService_Factory(t) { return new (t || QuestionAnswersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    QuestionAnswersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionAnswersService, factory: QuestionAnswersService.ɵfac, providedIn: 'root' });
    return QuestionAnswersService;
}());



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var RoleService = /** @class */ /*@__PURE__*/ (function () {
    function RoleService() {
        this.employeeRole = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.userRoles = ['institute', 'employee', 'student'];
        this.employeeRoles = ['manager', 'teacher', 'councillor'];
    }
    RoleService.prototype.getUserRoles = function () {
        return this.userRoles;
    };
    RoleService.prototype.setEmployeeRole = function (role) {
        this.employeeRole.next(role);
    };
    RoleService.prototype.getEmployeeRole = function () {
        return this.employeeRole;
    };
    RoleService.prototype.getEmployeeRoles = function () {
        return this.employeeRoles;
    };
    RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(); };
    RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
    return RoleService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var ScheduleService = /** @class */ /*@__PURE__*/ (function () {
    function ScheduleService(httpService) {
        this.httpService = httpService;
        this.schedule = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ScheduleService.prototype.setScheduleData = function (Schedule) {
        this.schedule.next(Schedule);
    };
    ScheduleService.prototype.getScheduleData = function () {
        return this.schedule;
    };
    ScheduleService.prototype.deleteScheduleData = function () {
        this.schedule.next(null);
    };
    ScheduleService.prototype.setScheduleId = function (scheduleId) {
        this.scheduleId = scheduleId;
    };
    ScheduleService.prototype.getScheduleId = function () {
        return this.scheduleId;
    };
    ScheduleService.prototype.deleteScheduleId = function () {
        this.scheduleId = null;
    };
    ScheduleService.prototype.setScheduleDay = function (scheduleDay) {
        this.scheduleDay = scheduleDay;
    };
    ScheduleService.prototype.getScheduleDay = function () {
        return this.scheduleDay;
    };
    ScheduleService.prototype.deleteScheduleDay = function () {
        this.scheduleDay = null;
    };
    ScheduleService.prototype.addSchedule = function (schedules) {
        var data = { api: 'newSchedule', data: schedules };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.changeScheduleStatus = function (id, status) {
        var data = { api: 'changeScheduleStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.getAllSchedules = function (branch, category, course, batch, startDate, endDate) {
        var data = {
            api: 'getAllSchedule',
            data: { branch: branch, category: category, course: course, batch: batch, startDate: startDate, endDate: endDate },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.getSchedule = function (id) {
        var data = { api: 'getSchedule', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.getScheduleForEditing = function (schedule) {
        var data = { api: 'getScheduleForEditing', data: { schedule: schedule } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.editSchedule = function (schedule) {
        var data = { api: 'editSchedule', data: schedule };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.prototype.deleteSchedule = function (id) {
        var data = { api: 'deleteSchedule', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ScheduleService.ɵfac = function ScheduleService_Factory(t) { return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScheduleService, factory: ScheduleService.ɵfac, providedIn: 'root' });
    return ScheduleService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var StorageService = /** @class */ /*@__PURE__*/ (function () {
    function StorageService() {
        this.KB = 1024;
        this.MB = 1024 * 1024;
        this.GB = 1024 * 1024 * 1024;
    }
    StorageService.prototype.convertByteToUnit = function (bytes) {
        bytes = +bytes;
        var value;
        var unit;
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
        return { value: value, unit: unit };
    };
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/shared-services/http.service.ts");





var UserService = /** @class */ /*@__PURE__*/ (function () {
    function UserService(httpService) {
        this.httpService = httpService;
    }
    UserService.prototype.setUserProfile = function (profile) {
        this.userProfile = profile;
    };
    UserService.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    UserService.prototype.checkUser = function (email) {
        var data = { api: 'checkUser', data: { email: email } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.prototype.changePassword = function (password) {
        var data = { api: 'changePassword', data: password };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.prototype.saveProfile = function (profile) {
        var data = { api: 'saveProfile', data: profile };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.prototype.getProfile = function () {
        var data = { api: 'getProfile', data: {} };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
    return UserService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var StudentCourseInstallmentReceiptService = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseInstallmentReceiptService(httpService) {
        this.httpService = httpService;
        this.studentCourseInstallmentReceipt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    StudentCourseInstallmentReceiptService.prototype.setStudentCourseInstallmentReceiptData = function (studentCourseInstallmentReceipt) {
        this.studentCourseInstallmentReceipt.next(studentCourseInstallmentReceipt);
    };
    StudentCourseInstallmentReceiptService.prototype.getStudentCourseInstallmentReceiptData = function () {
        return this.studentCourseInstallmentReceipt;
    };
    StudentCourseInstallmentReceiptService.prototype.deleteStudentCourseInstallmentReceiptData = function () {
        this.studentCourseInstallmentReceipt.next(null);
    };
    StudentCourseInstallmentReceiptService.prototype.setStudentCourseInstallmentReceiptId = function (studentCourseInstallmentReceiptId) {
        this.studentCourseInstallmentReceiptId = studentCourseInstallmentReceiptId;
    };
    StudentCourseInstallmentReceiptService.prototype.getStudentCourseInstallmentReceiptId = function () {
        return this.studentCourseInstallmentReceiptId;
    };
    StudentCourseInstallmentReceiptService.prototype.deleteStudentCourseInstallmentReceiptId = function () {
        this.studentCourseInstallmentReceiptId = null;
    };
    StudentCourseInstallmentReceiptService.prototype.addStudentCourseInstallmentReceipt = function (studentCourseInstallmentReceipt) {
        var data = {
            api: 'newStudentCourseInstallmentReceipt',
            data: studentCourseInstallmentReceipt,
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.generateStudentCourseInstallmentReceipt = function (order, receipt) {
        var data = {
            api: 'generateStudentCourseInstallmentReceipt',
            data: {
                order: order,
                receipt: receipt,
            },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.changeStudentCourseInstallmentReceiptStatus = function (id, status) {
        var data = { api: 'changeStudentCourseInstallmentReceiptStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.getAllStudentCourseInstallmentReceipts = function (student) {
        var data = { api: 'getAllStudentCourseInstallmentReceipts', data: { student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.getStudentAllCourseInstallmentReceiptsForStudent = function (student) {
        var data = { api: 'getStudentAllCourseInstallmentReceiptsForStudent', data: { student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.getStudentCourseInstallmentReceipt = function (id) {
        var data = {
            api: 'getStudentCourseInstallmentReceipt',
            data: { id: id },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.getStudentCourseInstallmentReceiptForEditing = function (id) {
        var data = {
            api: 'getStudentCourseInstallmentReceiptForEditing',
            data: { id: id },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.editStudentCourseInstallmentReceipt = function (studentCourseInstallmentReceipt) {
        var data = {
            api: 'editStudentCourseInstallmentReceipt',
            data: studentCourseInstallmentReceipt,
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.prototype.deleteStudentCourseInstallmentReceipt = function (id) {
        var data = {
            api: 'deleteStudentCourseInstallmentReceipt',
            data: { id: id },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentReceiptService.ɵfac = function StudentCourseInstallmentReceiptService_Factory(t) { return new (t || StudentCourseInstallmentReceiptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseInstallmentReceiptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseInstallmentReceiptService, factory: StudentCourseInstallmentReceiptService.ɵfac, providedIn: 'root' });
    return StudentCourseInstallmentReceiptService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var StudentCourseInstallmentService = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseInstallmentService(httpService) {
        this.httpService = httpService;
        this.studentCourseInstallments = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.courseInstallment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    // Installment Id
    StudentCourseInstallmentService.prototype.setStudentCourseInstallmentId = function (studentCourseInstallmentId) {
        this.studentCourseInstallmentId = studentCourseInstallmentId;
    };
    StudentCourseInstallmentService.prototype.getStudentCourseInstallmentId = function () {
        return this.studentCourseInstallmentId;
    };
    StudentCourseInstallmentService.prototype.deleteStudentCourseInstallmentId = function () {
        this.studentCourseInstallmentId = null;
    };
    // Installments
    StudentCourseInstallmentService.prototype.setStudentCourseInstallmentData = function (studentCourseInstallments) {
        this.studentCourseInstallments.next(studentCourseInstallments);
    };
    StudentCourseInstallmentService.prototype.getStudentCourseInstallmentData = function () {
        return this.studentCourseInstallments;
    };
    StudentCourseInstallmentService.prototype.deleteStudentCourseInstallmentData = function () {
        this.studentCourseInstallments.next(null);
    };
    // Single Installment Id
    StudentCourseInstallmentService.prototype.setCourseInstallmentId = function (courseInstallmentId) {
        this.courseInstallmentId = courseInstallmentId;
    };
    StudentCourseInstallmentService.prototype.getCourseInstallmentId = function () {
        return this.courseInstallmentId;
    };
    StudentCourseInstallmentService.prototype.deleteCourseInstallmentId = function () {
        this.courseInstallmentId = null;
    };
    // Single Installment
    StudentCourseInstallmentService.prototype.setCourseInstallmentData = function (courseInstallment) {
        this.courseInstallment.next(courseInstallment);
    };
    StudentCourseInstallmentService.prototype.getCourseInstallmentData = function () {
        return this.courseInstallment;
    };
    StudentCourseInstallmentService.prototype.deleteCourseInstallmentData = function () {
        this.courseInstallment.next(null);
    };
    // Set Course Installment Receipt
    StudentCourseInstallmentService.prototype.setCourseInstallmentReceipt = function (installmentId, receiptId) {
        this.studentCourseInstallments.subscribe(function (studentCourseInstallment) {
            if (studentCourseInstallment) {
                var i = studentCourseInstallment.installments.findIndex(function (curInstallment) { return curInstallment._id === installmentId; });
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
    };
    // Get Course Installment by Installment Id
    StudentCourseInstallmentService.prototype.getCourseInstallment = function (installmentId) {
        return this.studentCourseInstallments.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (studentCourseInstallment) {
            if (studentCourseInstallment) {
                var installment = studentCourseInstallment.installments.find(function (curInstallment) { return curInstallment._id === installmentId; });
                return installment;
            }
            return null;
        }));
    };
    StudentCourseInstallmentService.prototype.addStudentCourseInstallment = function (studentCourse, studentCourseInstallment) {
        var data = {
            api: 'newStudentCourseInstallment',
            data: { studentCourse: studentCourse, studentCourseInstallment: studentCourseInstallment },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.getStudentCourseInstallments = function (student) {
        var data = { api: 'getStudentCourseInstallments', data: { student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.getStudentCourseInstallment = function (id) {
        var data = { api: 'getStudentCourseInstallment', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.getStudentCourseInstallmentForEditing = function (id) {
        var data = { api: 'getStudentCourseInstallmentForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.changeStudentCourseInstallmentStatus = function (id, status) {
        var data = { api: 'changeStudentCourseInstallmentStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.editStudentCourseInstallment = function (studentCourseInstallment) {
        var data = { api: 'updateStudentCourseInstallment', data: studentCourseInstallment };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.prototype.deleteStudentCourseInstallment = function (id) {
        var data = { api: 'deleteStudentCourseInstallment', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseInstallmentService.ɵfac = function StudentCourseInstallmentService_Factory(t) { return new (t || StudentCourseInstallmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseInstallmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseInstallmentService, factory: StudentCourseInstallmentService.ɵfac, providedIn: 'root' });
    return StudentCourseInstallmentService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var StudentCourseService = /** @class */ /*@__PURE__*/ (function () {
    function StudentCourseService(httpService) {
        this.httpService = httpService;
        this.studentCourse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    StudentCourseService.prototype.setStudentCourseData = function (studentCourse) {
        this.studentCourse.next(studentCourse);
    };
    StudentCourseService.prototype.getStudentCourseData = function () {
        return this.studentCourse;
    };
    StudentCourseService.prototype.deleteStudentCourseData = function () {
        this.studentCourse.next(null);
    };
    StudentCourseService.prototype.setStudentCourseId = function (studentCourseId) {
        this.studentCourseId = studentCourseId;
    };
    StudentCourseService.prototype.getStudentCourseId = function () {
        return this.studentCourseId;
    };
    StudentCourseService.prototype.deleteStudentCourseId = function () {
        this.studentCourseId = null;
    };
    StudentCourseService.prototype.addStudentCourse = function (studentCourse, studentCourseInstallment) {
        var data = { api: 'newStudentCourse', data: { studentCourse: studentCourse, studentCourseInstallment: studentCourseInstallment } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.getStudentCourses = function (branch, category, student) {
        var data = { api: 'getStudentCourses', data: { branch: branch, category: category, student: student } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.getStudentAllCourses = function (branch) {
        var data = { api: 'getStudentAllCourses', data: { branch: branch } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.getStudentCourse = function (id) {
        var data = { api: 'getStudentCourse', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.checkBatchRollNumber = function (branch, category, course, batch, rollNumber) {
        var data = {
            api: 'checkBatchRollNumber',
            data: { branch: branch, category: category, course: course, batch: batch, rollNumber: rollNumber },
        };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.getStudentCourseForEditing = function (id) {
        var data = { api: 'getStudentCourseForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.changeStudentCourseStatus = function (id, status) {
        var data = { api: 'changeStudentCourseStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.editStudentCourse = function (studentCourse, studentCourseInstallment) {
        var data = { api: 'updateStudentCourse', data: { studentCourse: studentCourse, studentCourseInstallment: studentCourseInstallment } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.prototype.deleteStudentCourse = function (id) {
        var data = { api: 'deleteStudentCourse', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentCourseService.ɵfac = function StudentCourseService_Factory(t) { return new (t || StudentCourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentCourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentCourseService, factory: StudentCourseService.ɵfac, providedIn: 'root' });
    return StudentCourseService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-services/http.service */ "./src/app/services/shared-services/http.service.ts");





var StudentService = /** @class */ /*@__PURE__*/ (function () {
    function StudentService(httpService) {
        this.httpService = httpService;
        this.student = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    StudentService.prototype.setStudentType = function (type) {
        this.studentType = type;
    };
    StudentService.prototype.getStudentType = function () {
        return this.studentType;
    };
    StudentService.prototype.deleteStudentType = function () {
        this.studentType = null;
    };
    StudentService.prototype.setStudentData = function (student) {
        this.student.next(student);
    };
    StudentService.prototype.getStudentData = function () {
        return this.student;
    };
    StudentService.prototype.deleteStudentData = function () {
        this.student.next(null);
    };
    StudentService.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    StudentService.prototype.getStudentId = function () {
        return this.studentId;
    };
    StudentService.prototype.deleteStudentId = function () {
        this.studentId = null;
    };
    StudentService.prototype.getStudentName = function () {
        return this.getStudentData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (student) {
            if (student) {
                return student.name;
            }
            return '--';
        }));
    };
    StudentService.prototype.addStudent = function (student, branchStudent) {
        var data = { api: 'newStudent', data: { student: student, branchStudent: branchStudent } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.getStudents = function () {
        var data = { api: 'getStudents', data: {} };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.getStudent = function (id) {
        var data = { api: 'getStudent', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.getStudentByImsId = function (studentImsId) {
        var data = { api: 'getStudentByImsId', data: { studentImsId: studentImsId } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.searchStudent = function (studentId) {
        var data = { api: 'searchStudent', data: { studentId: studentId } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.getStudentForEditing = function (id) {
        var data = { api: 'getStudentForEditing', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.changeStudentStatus = function (id, status) {
        var data = { api: 'changeStudentStatus', data: { id: id, status: status } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.editStudent = function (student) {
        var data = { api: 'updateStudent', data: student };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.prototype.deleteStudent = function (id) {
        var data = { api: 'deleteStudent', data: { id: id } };
        return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
    StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
    return StudentService;
}());



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
    var myNumber = +number;
    var numToWords = number_to_words__WEBPACK_IMPORTED_MODULE_0___default.a.toWords(myNumber).replace(',', '').replace('-', ' ').split(' ');
    var arr = new Array();
    numToWords.forEach(function (curNum) {
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
var environment = {
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