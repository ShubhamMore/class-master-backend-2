function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/capitalize/index.js":
  /*!******************************************!*\
    !*** ./node_modules/capitalize/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCapitalizeIndexJs(module, exports) {
    module.exports = function (string, preserve) {
      if (!preserve) {
        string = string.toLowerCase();
      }

      return string.charAt(0).toUpperCase() + string.substring(1);
    };

    module.exports.words = function (string, preserve) {
      if (!preserve) {
        string = string.toLowerCase();
      }

      return string.replace(/(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g, function (m) {
        return m.toUpperCase();
      });
    };
    /***/

  },

  /***/
  "./node_modules/number-to-words/numberToWords.min.js":
  /*!***********************************************************!*\
    !*** ./node_modules/number-to-words/numberToWords.min.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNumberToWordsNumberToWordsMinJs(module, exports, __webpack_require__) {
    /*!
     * Number-To-Words util
     * @version v1.2.4
     * @link https://github.com/marlun78/number-to-words
     * @author Martin Eneqvist (https://github.com/marlun78)
     * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
     * @license MIT
     */
    !function () {
      "use strict";

      var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this,
          t = 9007199254740991;

      function f(e) {
        return !("number" != typeof e || e != e || e === 1 / 0 || e === -1 / 0);
      }

      function l(e) {
        return "number" == typeof e && Math.abs(e) <= t;
      }

      var n = /(hundred|thousand|(m|b|tr|quadr)illion)$/,
          r = /teen$/,
          o = /y$/,
          i = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
          s = {
        zero: "zeroth",
        one: "first",
        two: "second",
        three: "third",
        four: "fourth",
        five: "fifth",
        six: "sixth",
        seven: "seventh",
        eight: "eighth",
        nine: "ninth",
        ten: "tenth",
        eleven: "eleventh",
        twelve: "twelfth"
      };

      function h(e) {
        return n.test(e) || r.test(e) ? e + "th" : o.test(e) ? e.replace(o, "ieth") : i.test(e) ? e.replace(i, a) : e;
      }

      function a(e, t) {
        return s[t];
      }

      var u = 10,
          d = 100,
          p = 1e3,
          v = 1e6,
          b = 1e9,
          y = 1e12,
          c = 1e15,
          g = 9007199254740992,
          m = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
          w = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

      function x(e, t) {
        var n,
            r = parseInt(e, 10);
        if (!f(r)) throw new TypeError("Not a finite number: " + e + " (" + typeof e + ")");
        if (!l(r)) throw new RangeError("Input is not a safe number, it’s either too large or too small.");
        return n = function e(t) {
          var n,
              r,
              o = arguments[1];
          if (0 === t) return o ? o.join(" ").replace(/,$/, "") : "zero";
          o || (o = []);
          t < 0 && (o.push("minus"), t = Math.abs(t));
          t < 20 ? (n = 0, r = m[t]) : t < d ? (n = t % u, r = w[Math.floor(t / u)], n && (r += "-" + m[n], n = 0)) : t < p ? (n = t % d, r = e(Math.floor(t / d)) + " hundred") : t < v ? (n = t % p, r = e(Math.floor(t / p)) + " thousand,") : t < b ? (n = t % v, r = e(Math.floor(t / v)) + " million,") : t < y ? (n = t % b, r = e(Math.floor(t / b)) + " billion,") : t < c ? (n = t % y, r = e(Math.floor(t / y)) + " trillion,") : t <= g && (n = t % c, r = e(Math.floor(t / c)) + " quadrillion,");
          o.push(r);
          return e(n, o);
        }(r), t ? h(n) : n;
      }

      var M = {
        toOrdinal: function toOrdinal(e) {
          var t = parseInt(e, 10);
          if (!f(t)) throw new TypeError("Not a finite number: " + e + " (" + typeof e + ")");
          if (!l(t)) throw new RangeError("Input is not a safe number, it’s either too large or too small.");
          var n = String(t),
              r = Math.abs(t % 100),
              o = 11 <= r && r <= 13,
              i = n.charAt(n.length - 1);
          return n + (o ? "th" : "1" === i ? "st" : "2" === i ? "nd" : "3" === i ? "rd" : "th");
        },
        toWords: x,
        toWordsOrdinal: function toWordsOrdinal(e) {
          return h(x(e));
        }
      };
      true ? (true && module.exports && (exports = module.exports = M), exports.numberToWords = M) : undefined;
    }();
    /***/
  },

  /***/
  "./src/app/authentication/auth/guards/branch.auth.guard.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/authentication/auth/guards/branch.auth.guard.ts ***!
    \*****************************************************************/

  /*! exports provided: BranchAuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardsBranchAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchAuthGuard", function () {
      return BranchAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BranchAuthGuard =
    /*@__PURE__*/
    function () {
      var BranchAuthGuard =
      /*#__PURE__*/
      function () {
        function BranchAuthGuard(branchService, router) {
          _classCallCheck(this, BranchAuthGuard);

          this.branchService = branchService;
          this.router = router;
        } // tslint:disable-next-line: max-line-length


        _createClass(BranchAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var branchId = this.branchService.getBranchId();

            if (branchId && branchId !== '') {
              return true;
            }

            return this.router.createUrlTree(['/']);
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }]);

        return BranchAuthGuard;
      }();

      BranchAuthGuard.ɵfac = function BranchAuthGuard_Factory(t) {
        return new (t || BranchAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      BranchAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BranchAuthGuard,
        factory: BranchAuthGuard.ɵfac,
        providedIn: 'root'
      });
      return BranchAuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/services/assignment-submission.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/assignment-submission.service.ts ***!
    \***********************************************************/

  /*! exports provided: AssignmentSubmissionService */

  /***/
  function srcAppServicesAssignmentSubmissionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionService", function () {
      return AssignmentSubmissionService;
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

    var AssignmentSubmissionService =
    /*@__PURE__*/
    function () {
      var AssignmentSubmissionService =
      /*#__PURE__*/
      function () {
        function AssignmentSubmissionService(httpService) {
          _classCallCheck(this, AssignmentSubmissionService);

          this.httpService = httpService;
          this.assignmentSubmission = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(AssignmentSubmissionService, [{
          key: "setAssignmentSubmissionData",
          value: function setAssignmentSubmissionData(assignmentSubmission) {
            this.assignmentSubmission.next(assignmentSubmission);
          }
        }, {
          key: "getAssignmentSubmissionData",
          value: function getAssignmentSubmissionData() {
            return this.assignmentSubmission;
          }
        }, {
          key: "deleteAssignmentSubmissionData",
          value: function deleteAssignmentSubmissionData() {
            this.assignmentSubmission.next(null);
          }
        }, {
          key: "setAssignmentSubmissionId",
          value: function setAssignmentSubmissionId(assignmentSubmissionId) {
            this.assignmentSubmissionId = assignmentSubmissionId;
          }
        }, {
          key: "getAssignmentSubmissionId",
          value: function getAssignmentSubmissionId() {
            return this.assignmentSubmissionId;
          }
        }, {
          key: "deleteAssignmentSubmissionId",
          value: function deleteAssignmentSubmissionId() {
            this.assignmentSubmissionId = null;
          }
        }, {
          key: "submitAssignment",
          value: function submitAssignment(assignmentSubmission) {
            var data = {
              api: 'submitAssignment',
              data: assignmentSubmission
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getAssignmentSubmissions",
          value: function getAssignmentSubmissions(assignment) {
            var data = {
              api: 'getAssignmentSubmissions',
              data: {
                assignment: assignment
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getSubmissionOfAssignment",
          value: function getSubmissionOfAssignment(assignment) {
            var data = {
              api: 'getSubmissionOfAssignment',
              data: {
                assignment: assignment
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getAssignmentSubmission",
          value: function getAssignmentSubmission(id) {
            var data = {
              api: 'getAssignmentSubmission',
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
          key: "saveAssignmentSubmissionGrades",
          value: function saveAssignmentSubmissionGrades(submissionGrades) {
            var data = {
              api: 'saveAssignmentSubmissionGrades',
              data: submissionGrades
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "updateAssignmentSubmission",
          value: function updateAssignmentSubmission(assignmentSubmission) {
            var data = {
              api: 'updateAssignmentSubmission',
              data: assignmentSubmission
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteAssignmentSubmission",
          value: function deleteAssignmentSubmission(id) {
            var data = {
              api: 'deleteAssignmentSubmission',
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

        return AssignmentSubmissionService;
      }();

      AssignmentSubmissionService.ɵfac = function AssignmentSubmissionService_Factory(t) {
        return new (t || AssignmentSubmissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      AssignmentSubmissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AssignmentSubmissionService,
        factory: AssignmentSubmissionService.ɵfac,
        providedIn: 'root'
      });
      return AssignmentSubmissionService;
    }();
    /***/

  },

  /***/
  "./src/app/services/assignment.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/assignment.service.ts ***!
    \************************************************/

  /*! exports provided: AssignmentService */

  /***/
  function srcAppServicesAssignmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentService", function () {
      return AssignmentService;
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

    var AssignmentService =
    /*@__PURE__*/
    function () {
      var AssignmentService =
      /*#__PURE__*/
      function () {
        function AssignmentService(httpService) {
          _classCallCheck(this, AssignmentService);

          this.httpService = httpService;
          this.assignment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(AssignmentService, [{
          key: "setAssignmentData",
          value: function setAssignmentData(assignment) {
            this.assignment.next(assignment);
          }
        }, {
          key: "getAssignmentData",
          value: function getAssignmentData() {
            return this.assignment;
          }
        }, {
          key: "deleteAssignmentData",
          value: function deleteAssignmentData() {
            this.assignment.next(null);
          }
        }, {
          key: "setAssignmentId",
          value: function setAssignmentId(assignmentId) {
            this.assignmentId = assignmentId;
          }
        }, {
          key: "getAssignmentId",
          value: function getAssignmentId() {
            return this.assignmentId;
          }
        }, {
          key: "deleteAssignmentId",
          value: function deleteAssignmentId() {
            this.assignmentId = null;
          }
        }, {
          key: "saveAssignment",
          value: function saveAssignment(assignment) {
            var data = {
              api: 'saveAssignment',
              data: assignment
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getAssignments",
          value: function getAssignments(branch, category, course, batch, subject, month, year) {
            var data = {
              api: 'getAssignments',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
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
          key: "getAssignmentsForStudent",
          value: function getAssignmentsForStudent(branch, category, course, batch, subject, month, year) {
            var data = {
              api: 'getAssignmentsForStudent',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
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
          key: "getAssignment",
          value: function getAssignment(id) {
            var data = {
              api: 'getAssignment',
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
          key: "updateAssignment",
          value: function updateAssignment(assignment) {
            var data = {
              api: 'updateAssignment',
              data: assignment
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeAssignmentStatus",
          value: function changeAssignmentStatus(id, status) {
            var data = {
              api: 'changeAssignmentStatus',
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
          key: "deleteAssignmentAttachment",
          value: function deleteAssignmentAttachment(id, publicId) {
            var data = {
              api: 'deleteAssignmentAttachment',
              data: {
                id: id,
                publicId: publicId
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteAssignment",
          value: function deleteAssignment(id) {
            var data = {
              api: 'deleteAssignment',
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

        return AssignmentService;
      }();

      AssignmentService.ɵfac = function AssignmentService_Factory(t) {
        return new (t || AssignmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      AssignmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AssignmentService,
        factory: AssignmentService.ɵfac,
        providedIn: 'root'
      });
      return AssignmentService;
    }();
    /***/

  },

  /***/
  "./src/app/services/attendance.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/attendance.service.ts ***!
    \************************************************/

  /*! exports provided: AttendanceService */

  /***/
  function srcAppServicesAttendanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendanceService", function () {
      return AttendanceService;
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

    var AttendanceService =
    /*@__PURE__*/
    function () {
      var AttendanceService =
      /*#__PURE__*/
      function () {
        function AttendanceService(httpService) {
          _classCallCheck(this, AttendanceService);

          this.httpService = httpService;
        }

        _createClass(AttendanceService, [{
          key: "getStudents",
          value: function getStudents(branch, category, course, batch, lecture) {
            var data = {
              api: 'getStudentsForAttendance',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                lecture: lecture
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "saveAttendance",
          value: function saveAttendance(attendance) {
            var data = {
              api: 'saveAttendance',
              data: attendance
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourseAttendance",
          value: function getStudentCourseAttendance(subject, month, year, student, studentCourse) {
            var data = {
              api: 'getStudentCourseAttendance',
              data: {
                subject: subject,
                month: month,
                year: year,
                student: student,
                studentCourse: studentCourse
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getAttendance",
          value: function getAttendance(month, year, branch, category, course, batch, student) {
            var data = {
              api: 'getAttendance',
              data: {
                month: month,
                year: year,
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return AttendanceService;
      }();

      AttendanceService.ɵfac = function AttendanceService_Factory(t) {
        return new (t || AttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      AttendanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AttendanceService,
        factory: AttendanceService.ɵfac,
        providedIn: 'root'
      });
      return AttendanceService;
    }();
    /***/

  },

  /***/
  "./src/app/services/batch.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/batch.service.ts ***!
    \*******************************************/

  /*! exports provided: BatchService */

  /***/
  function srcAppServicesBatchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatchService", function () {
      return BatchService;
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

    var BatchService =
    /*@__PURE__*/
    function () {
      var BatchService =
      /*#__PURE__*/
      function () {
        function BatchService(httpService) {
          _classCallCheck(this, BatchService);

          this.httpService = httpService;
          this.batches = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.batch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(BatchService, [{
          key: "setBatchId",
          value: function setBatchId(batchId) {
            this.batchId = batchId;
          }
        }, {
          key: "getBatchId",
          value: function getBatchId() {
            return this.batchId;
          }
        }, {
          key: "deleteBatchId",
          value: function deleteBatchId() {
            this.batchId = null;
          }
        }, {
          key: "setBatchesData",
          value: function setBatchesData(batches) {
            this.batches.next(batches);
          }
        }, {
          key: "getBatchesData",
          value: function getBatchesData() {
            return this.batches;
          }
        }, {
          key: "deleteBatchesData",
          value: function deleteBatchesData() {
            this.batches.next([]);
          }
        }, {
          key: "setBatchData",
          value: function setBatchData(batch) {
            this.batch.next(batch);
          }
        }, {
          key: "getBatchData",
          value: function getBatchData() {
            return this.batch;
          }
        }, {
          key: "deleteBatchData",
          value: function deleteBatchData() {
            this.batch.next(null);
          }
        }, {
          key: "getBatchName",
          value: function getBatchName(batchId) {
            return this.batches.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (batches) {
              var batch = batches.find(function (curBatch) {
                return curBatch._id === batchId;
              });

              if (batch) {
                return batch.basicDetails.batchName;
              }

              return '--';
            }));
          }
        }, {
          key: "getBatches",
          value: function getBatches(branch, category, course) {
            var data = {
              api: 'getBatches',
              data: {
                branch: branch,
                category: category,
                course: course
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBatch",
          value: function getBatch(id) {
            var data = {
              api: 'getBatch',
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
          key: "getBatchSubjects",
          value: function getBatchSubjects(course, batch) {
            var data = {
              api: 'getBatchSubjects',
              data: {
                course: course,
                batch: batch
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBatchForEditing",
          value: function getBatchForEditing(id) {
            var data = {
              api: 'getBatchForEditing',
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
          key: "addBatch",
          value: function addBatch(batch) {
            var data = {
              api: 'newBatch',
              data: batch
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editBatch",
          value: function editBatch(batch) {
            var data = {
              api: 'updateBatch',
              data: batch
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteBatch",
          value: function deleteBatch(id) {
            var data = {
              api: 'deleteBatch',
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
          key: "changeBatchStatus",
          value: function changeBatchStatus(id, status) {
            var data = {
              api: 'changeBatchStatus',
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
        }]);

        return BatchService;
      }();

      BatchService.ɵfac = function BatchService_Factory(t) {
        return new (t || BatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      BatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BatchService,
        factory: BatchService.ɵfac,
        providedIn: 'root'
      });
      return BatchService;
    }();
    /***/

  },

  /***/
  "./src/app/services/billing.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/billing.service.ts ***!
    \*********************************************/

  /*! exports provided: InstituteBillingService */

  /***/
  function srcAppServicesBillingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteBillingService", function () {
      return InstituteBillingService;
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

    var InstituteBillingService =
    /*@__PURE__*/
    function () {
      var InstituteBillingService =
      /*#__PURE__*/
      function () {
        function InstituteBillingService(httpService) {
          _classCallCheck(this, InstituteBillingService);

          this.httpService = httpService;
          this.billingDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(InstituteBillingService, [{
          key: "setBilling",
          value: function setBilling(billingDetails) {
            this.billingDetails.next(billingDetails);
          }
        }, {
          key: "getBilling",
          value: function getBilling() {
            return this.billingDetails;
          }
        }, {
          key: "deleteBilling",
          value: function deleteBilling() {
            this.billingDetails.next(null);
          }
        }, {
          key: "saveBillingDetails",
          value: function saveBillingDetails(billingDetails) {
            var data = {
              api: 'saveBillingDetails',
              data: billingDetails
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBillingDetails",
          value: function getBillingDetails(branch) {
            var data = {
              api: 'getBillingDetails',
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
        }]);

        return InstituteBillingService;
      }();

      InstituteBillingService.ɵfac = function InstituteBillingService_Factory(t) {
        return new (t || InstituteBillingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      InstituteBillingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InstituteBillingService,
        factory: InstituteBillingService.ɵfac,
        providedIn: 'root'
      });
      return InstituteBillingService;
    }();
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

    var BranchEmployeeService =
    /*@__PURE__*/
    function () {
      var BranchEmployeeService =
      /*#__PURE__*/
      function () {
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
  "./src/app/services/branch-student.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/branch-student.service.ts ***!
    \****************************************************/

  /*! exports provided: BranchStudentService */

  /***/
  function srcAppServicesBranchStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchStudentService", function () {
      return BranchStudentService;
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

    var BranchStudentService =
    /*@__PURE__*/
    function () {
      var BranchStudentService =
      /*#__PURE__*/
      function () {
        function BranchStudentService(httpService) {
          _classCallCheck(this, BranchStudentService);

          this.httpService = httpService;
        }

        _createClass(BranchStudentService, [{
          key: "setBranchStudentData",
          value: function setBranchStudentData(branchStudent) {
            this.branchStudent = branchStudent;
          }
        }, {
          key: "getBranchStudentData",
          value: function getBranchStudentData() {
            return this.branchStudent;
          }
        }, {
          key: "deleteBranchStudentData",
          value: function deleteBranchStudentData() {
            this.branchStudent = null;
          }
        }, {
          key: "setBranchStudentId",
          value: function setBranchStudentId(branchStudentId) {
            this.branchStudentId = branchStudentId;
          }
        }, {
          key: "getBranchStudentId",
          value: function getBranchStudentId() {
            return this.branchStudentId;
          }
        }, {
          key: "deleteBranchStudentId",
          value: function deleteBranchStudentId() {
            this.branchStudentId = null;
          }
        }, {
          key: "getBranchStudents",
          value: function getBranchStudents(branch, category, type) {
            var data = {
              api: 'getBranchStudents',
              data: {
                branch: branch,
                category: category,
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
          key: "getBranchStudentNameIds",
          value: function getBranchStudentNameIds(branch, category, type) {
            var data = {
              api: 'getBranchStudentNameIds',
              data: {
                branch: branch,
                category: category,
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
          key: "getBranchAllStudentNameIds",
          value: function getBranchAllStudentNameIds(branch, category) {
            var data = {
              api: 'getBranchAllStudentNameIds',
              data: {
                branch: branch,
                category: category
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchStudent",
          value: function getBranchStudent(id, student) {
            var data = {
              api: 'addBranchStudent',
              data: {
                id: id,
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "newBranchStudent",
          value: function newBranchStudent(branchStudent) {
            var data = {
              api: 'newBranchStudent',
              data: branchStudent
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchStudentForEditing",
          value: function getBranchStudentForEditing(id, student) {
            var data = {
              api: 'getBranchStudentForEditing',
              data: {
                id: id,
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editBranchStudent",
          value: function editBranchStudent(branchStudent) {
            var data = {
              api: 'updateBranchStudent',
              data: branchStudent
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeBranchStudentStatus",
          value: function changeBranchStudentStatus(id, status) {
            var data = {
              api: 'changeBranchStudentStatus',
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
          key: "deleteBranchStudent",
          value: function deleteBranchStudent(id) {
            var data = {
              api: 'deleteBranchStudent',
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

        return BranchStudentService;
      }();

      BranchStudentService.ɵfac = function BranchStudentService_Factory(t) {
        return new (t || BranchStudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      BranchStudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BranchStudentService,
        factory: BranchStudentService.ɵfac,
        providedIn: 'root'
      });
      return BranchStudentService;
    }();
    /***/

  },

  /***/
  "./src/app/services/coupon.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/coupon.service.ts ***!
    \********************************************/

  /*! exports provided: CouponService */

  /***/
  function srcAppServicesCouponServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponService", function () {
      return CouponService;
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

    var CouponService =
    /*@__PURE__*/
    function () {
      var CouponService =
      /*#__PURE__*/
      function () {
        function CouponService(httpService) {
          _classCallCheck(this, CouponService);

          this.httpService = httpService;
          this.discountTypes = ['percentage', 'amount'];
          this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(CouponService, [{
          key: "getDiscountTypes",
          value: function getDiscountTypes() {
            return this.discountTypes;
          }
        }, {
          key: "setCouponId",
          value: function setCouponId(couponId) {
            this.couponId = couponId;
          }
        }, {
          key: "getCouponId",
          value: function getCouponId() {
            return this.couponId;
          }
        }, {
          key: "deleteCouponId",
          value: function deleteCouponId() {
            this.couponId = null;
          }
        }, {
          key: "setAppliedCoupon",
          value: function setAppliedCoupon(appliedCoupon) {
            this.appliedCoupon = appliedCoupon;
          }
        }, {
          key: "getAppliedCoupon",
          value: function getAppliedCoupon() {
            return this.appliedCoupon;
          }
        }, {
          key: "deleteAppliedCoupon",
          value: function deleteAppliedCoupon() {
            this.appliedCoupon = null;
          }
        }, {
          key: "setCouponData",
          value: function setCouponData(coupon) {
            this.coupon.next(coupon);
          }
        }, {
          key: "getCouponData",
          value: function getCouponData() {
            return this.coupon;
          }
        }, {
          key: "deleteCouponData",
          value: function deleteCouponData() {
            this.coupon.next(null);
          }
        }, {
          key: "getCoupons",
          value: function getCoupons() {
            var data = {
              api: 'getCoupons',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getCoupon",
          value: function getCoupon(id) {
            var data = {
              api: 'getCoupon',
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
          key: "getCouponForEditing",
          value: function getCouponForEditing(id) {
            var data = {
              api: 'getCouponForEditing',
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
          key: "addCoupon",
          value: function addCoupon(coupon) {
            var data = {
              api: 'newCoupon',
              data: coupon
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editCoupon",
          value: function editCoupon(coupon) {
            var data = {
              api: 'updateCoupon',
              data: coupon
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteCoupon",
          value: function deleteCoupon(id) {
            var data = {
              api: 'deleteCoupon',
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
          key: "changeCouponStatus",
          value: function changeCouponStatus(id, status) {
            var data = {
              api: 'changeCouponStatus',
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
          key: "checkCoupon",
          value: function checkCoupon(code) {
            var data = {
              api: 'checkCoupon',
              data: {
                code: code
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "validateCoupon",
          value: function validateCoupon(code) {
            var data = {
              api: 'validateCoupon',
              data: {
                code: code
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return CouponService;
      }();

      CouponService.ɵfac = function CouponService_Factory(t) {
        return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      CouponService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CouponService,
        factory: CouponService.ɵfac,
        providedIn: 'root'
      });
      return CouponService;
    }();
    /***/

  },

  /***/
  "./src/app/services/course-material.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/course-material.service.ts ***!
    \*****************************************************/

  /*! exports provided: CourseMaterialService */

  /***/
  function srcAppServicesCourseMaterialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseMaterialService", function () {
      return CourseMaterialService;
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

    var CourseMaterialService =
    /*@__PURE__*/
    function () {
      var CourseMaterialService =
      /*#__PURE__*/
      function () {
        function CourseMaterialService(httpService) {
          _classCallCheck(this, CourseMaterialService);

          this.httpService = httpService;
          this.courseMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.courseMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }

        _createClass(CourseMaterialService, [{
          key: "setCourseMaterialId",
          value: function setCourseMaterialId(courseMaterialId) {
            this.courseMaterialId = courseMaterialId;
          }
        }, {
          key: "getCourseMaterialId",
          value: function getCourseMaterialId() {
            return this.courseMaterialId;
          }
        }, {
          key: "deleteCourseMaterialId",
          value: function deleteCourseMaterialId() {
            this.courseMaterialId = null;
          }
        }, {
          key: "setCourseMaterialsData",
          value: function setCourseMaterialsData(courseMaterials) {
            this.courseMaterials.next(courseMaterials);
          }
        }, {
          key: "getCourseMaterialsData",
          value: function getCourseMaterialsData() {
            return this.courseMaterials;
          }
        }, {
          key: "deleteCourseMaterialsData",
          value: function deleteCourseMaterialsData() {
            this.courseMaterials.next([]);
          }
        }, {
          key: "setCourseMaterialData",
          value: function setCourseMaterialData(courseMaterial) {
            this.courseMaterial.next(courseMaterial);
          }
        }, {
          key: "getCourseMaterialData",
          value: function getCourseMaterialData() {
            return this.courseMaterial;
          }
        }, {
          key: "deleteCourseMaterialData",
          value: function deleteCourseMaterialData() {
            this.courseMaterial.next(null);
          }
        }, {
          key: "getCourseMaterials",
          value: function getCourseMaterials(branch, category, course, subject) {
            var data = {
              api: 'getCourseMaterials',
              data: {
                branch: branch,
                category: category,
                course: course,
                subject: subject
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getCourseMaterial",
          value: function getCourseMaterial(id) {
            var data = {
              api: 'getCourseMaterials',
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
          key: "getCourseMaterialsForStudent",
          value: function getCourseMaterialsForStudent(branch, category, course, subject) {
            var data = {
              api: 'getCourseMaterialsForStudent',
              data: {
                branch: branch,
                category: category,
                course: course,
                subject: subject
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "newCourseMaterials",
          value: function newCourseMaterials(materials) {
            var data = {
              api: 'newCourseMaterials',
              data: materials
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeCourseMaterialStatus",
          value: function changeCourseMaterialStatus(id, status) {
            var data = {
              api: 'changeCourseMaterialStatus',
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
          key: "deleteCourseMaterial",
          value: function deleteCourseMaterial(id) {
            var data = {
              api: 'deleteCourseMaterial',
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

        return CourseMaterialService;
      }();

      CourseMaterialService.ɵfac = function CourseMaterialService_Factory(t) {
        return new (t || CourseMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      CourseMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CourseMaterialService,
        factory: CourseMaterialService.ɵfac,
        providedIn: 'root'
      });
      return CourseMaterialService;
    }();
    /***/

  },

  /***/
  "./src/app/services/course.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/course.service.ts ***!
    \********************************************/

  /*! exports provided: CourseService */

  /***/
  function srcAppServicesCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseService", function () {
      return CourseService;
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

    var CourseService =
    /*@__PURE__*/
    function () {
      var CourseService =
      /*#__PURE__*/
      function () {
        function CourseService(httpService) {
          _classCallCheck(this, CourseService);

          this.httpService = httpService;
          this.courses = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.course = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(CourseService, [{
          key: "setCourseId",
          value: function setCourseId(courseId) {
            this.courseId = courseId;
          }
        }, {
          key: "getCourseId",
          value: function getCourseId() {
            return this.courseId;
          }
        }, {
          key: "deleteCourseId",
          value: function deleteCourseId() {
            this.courseId = null;
          }
        }, {
          key: "setCoursesData",
          value: function setCoursesData(courses) {
            this.courses.next(courses);
          }
        }, {
          key: "getCoursesData",
          value: function getCoursesData() {
            return this.courses;
          }
        }, {
          key: "deleteCoursesData",
          value: function deleteCoursesData() {
            this.courses.next([]);
          }
        }, {
          key: "setCourseData",
          value: function setCourseData(course) {
            this.course.next(course);
          }
        }, {
          key: "getCourseData",
          value: function getCourseData() {
            return this.course;
          }
        }, {
          key: "deleteCourseData",
          value: function deleteCourseData() {
            this.course.next(null);
          }
        }, {
          key: "getCourseName",
          value: function getCourseName(courseId) {
            return this.courses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (courses) {
              var course = courses.find(function (curCourse) {
                return curCourse._id === courseId;
              });

              if (course) {
                return course.basicDetails.courseName;
              }

              return '--';
            }));
          }
        }, {
          key: "getCourses",
          value: function getCourses(branch, category) {
            var data = {
              api: 'getCourses',
              data: {
                branch: branch,
                category: category
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getCourse",
          value: function getCourse(id) {
            var data = {
              api: 'getCourse',
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
          key: "getCourseForEditing",
          value: function getCourseForEditing(id) {
            var data = {
              api: 'getCourseForEditing',
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
          key: "addCourse",
          value: function addCourse(Course) {
            var data = {
              api: 'newCourse',
              data: Course
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editCourse",
          value: function editCourse(Course) {
            var data = {
              api: 'updateCourse',
              data: Course
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteCourse",
          value: function deleteCourse(id) {// this.Courses.splice(id, 1);
          }
        }, {
          key: "changeCourseStatus",
          value: function changeCourseStatus(id, status) {
            var data = {
              api: 'changeCourseStatus',
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
        }]);

        return CourseService;
      }();

      CourseService.ɵfac = function CourseService_Factory(t) {
        return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CourseService,
        factory: CourseService.ɵfac,
        providedIn: 'root'
      });
      return CourseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/dashboard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/dashboard.service.ts ***!
    \***********************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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

    var DashboardService =
    /*@__PURE__*/
    function () {
      var DashboardService =
      /*#__PURE__*/
      function () {
        function DashboardService(httpService) {
          _classCallCheck(this, DashboardService);

          this.httpService = httpService;
        }

        _createClass(DashboardService, [{
          key: "getBranchDashboard",
          value: function getBranchDashboard(branch) {
            var data = {
              api: 'getBranchDashboard',
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
          key: "getBranchDashboardForEmployee",
          value: function getBranchDashboardForEmployee(branch) {
            var data = {
              api: 'getBranchDashboardForEmployee',
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
          key: "getStudentBranchDashboard",
          value: function getStudentBranchDashboard(branch) {
            var data = {
              api: 'getStudentBranchDashboard',
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
        }]);

        return DashboardService;
      }();

      DashboardService.ɵfac = function DashboardService_Factory(t) {
        return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DashboardService,
        factory: DashboardService.ɵfac,
        providedIn: 'root'
      });
      return DashboardService;
    }();
    /***/

  },

  /***/
  "./src/app/services/discount-and-offer.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/discount-and-offer.service.ts ***!
    \********************************************************/

  /*! exports provided: DiscountAndOfferService */

  /***/
  function srcAppServicesDiscountAndOfferServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountAndOfferService", function () {
      return DiscountAndOfferService;
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

    var DiscountAndOfferService =
    /*@__PURE__*/
    function () {
      var DiscountAndOfferService =
      /*#__PURE__*/
      function () {
        function DiscountAndOfferService(httpService) {
          _classCallCheck(this, DiscountAndOfferService);

          this.httpService = httpService;
          this.discountTypes = ['percentage', 'amount'];
          this.discountAndOffers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.discountAndOffer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(DiscountAndOfferService, [{
          key: "getDiscountTypes",
          value: function getDiscountTypes() {
            return this.discountTypes;
          }
        }, {
          key: "setDiscountAndOfferId",
          value: function setDiscountAndOfferId(discountAndOfferId) {
            this.discountAndOfferId = discountAndOfferId;
          }
        }, {
          key: "getDiscountAndOfferId",
          value: function getDiscountAndOfferId() {
            return this.discountAndOfferId;
          }
        }, {
          key: "deleteDiscountAndOfferId",
          value: function deleteDiscountAndOfferId() {
            this.discountAndOfferId = null;
          }
        }, {
          key: "setDiscountAndOffersData",
          value: function setDiscountAndOffersData(discountAndOffers) {
            this.discountAndOffers.next(discountAndOffers);
          }
        }, {
          key: "getDiscountAndOffersData",
          value: function getDiscountAndOffersData() {
            return this.discountAndOffers;
          }
        }, {
          key: "deleteDiscountAndOffersData",
          value: function deleteDiscountAndOffersData() {
            this.discountAndOffers.next([]);
          }
        }, {
          key: "setDiscountAndOfferData",
          value: function setDiscountAndOfferData(discountAndOffer) {
            this.discountAndOffer.next(discountAndOffer);
          }
        }, {
          key: "getDiscountAndOfferData",
          value: function getDiscountAndOfferData() {
            return this.discountAndOffer;
          }
        }, {
          key: "deleteDiscountAndOfferData",
          value: function deleteDiscountAndOfferData() {
            this.discountAndOffer.next(null);
          }
        }, {
          key: "getDiscountAndOffers",
          value: function getDiscountAndOffers(branch) {
            var data = {
              api: 'getDiscountAndOffers',
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
          key: "getDiscountAndOffersForStudent",
          value: function getDiscountAndOffersForStudent(branch) {
            var data = {
              api: 'getDiscountAndOffersForStudent',
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
          key: "getDiscountAndOffer",
          value: function getDiscountAndOffer(id) {
            var data = {
              api: 'getDiscountAndOffer',
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
          key: "getDiscountAndOfferForEditing",
          value: function getDiscountAndOfferForEditing(id) {
            var data = {
              api: 'getDiscountAndOfferForEditing',
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
          key: "CheckDiscountAndOffer",
          value: function CheckDiscountAndOffer(branch, code) {
            var data = {
              api: 'CheckDiscountAndOffer',
              data: {
                branch: branch,
                code: code
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "addDiscountAndOffer",
          value: function addDiscountAndOffer(discountAndOffer) {
            var data = {
              api: 'newDiscountAndOffer',
              data: discountAndOffer
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editDiscountAndOffer",
          value: function editDiscountAndOffer(discountAndOffer) {
            var data = {
              api: 'updateDiscountAndOffer',
              data: discountAndOffer
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteDiscountAndOffer",
          value: function deleteDiscountAndOffer(id) {
            var data = {
              api: 'deleteDiscountAndOffer',
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
          key: "changeDiscountAndOfferStatus",
          value: function changeDiscountAndOfferStatus(id, status) {
            var data = {
              api: 'changeDiscountAndOfferStatus',
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
        }]);

        return DiscountAndOfferService;
      }();

      DiscountAndOfferService.ɵfac = function DiscountAndOfferService_Factory(t) {
        return new (t || DiscountAndOfferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      DiscountAndOfferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DiscountAndOfferService,
        factory: DiscountAndOfferService.ɵfac,
        providedIn: 'root'
      });
      return DiscountAndOfferService;
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

    var EmployeeLeaveService =
    /*@__PURE__*/
    function () {
      var EmployeeLeaveService =
      /*#__PURE__*/
      function () {
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

  },

  /***/
  "./src/app/services/employee-salary.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/employee-salary.service.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeSalaryService */

  /***/
  function srcAppServicesEmployeeSalaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeSalaryService", function () {
      return EmployeeSalaryService;
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

    var EmployeeSalaryService =
    /*@__PURE__*/
    function () {
      var EmployeeSalaryService =
      /*#__PURE__*/
      function () {
        function EmployeeSalaryService(httpService) {
          _classCallCheck(this, EmployeeSalaryService);

          this.httpService = httpService;
          this.employeeSalary = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(EmployeeSalaryService, [{
          key: "setEmployeeSalaryData",
          value: function setEmployeeSalaryData(employeeSalary) {
            this.employeeSalary.next(employeeSalary);
          }
        }, {
          key: "getEmployeeSalaryData",
          value: function getEmployeeSalaryData() {
            return this.employeeSalary;
          }
        }, {
          key: "deleteEmployeeSalaryData",
          value: function deleteEmployeeSalaryData() {
            this.employeeSalary.next(null);
          }
        }, {
          key: "setEmployeeSalaryId",
          value: function setEmployeeSalaryId(employeeSalaryId) {
            this.employeeSalaryId = employeeSalaryId;
          }
        }, {
          key: "getEmployeeSalaryId",
          value: function getEmployeeSalaryId() {
            return this.employeeSalaryId;
          }
        }, {
          key: "deleteEmployeeSalaryId",
          value: function deleteEmployeeSalaryId() {
            this.employeeSalaryId = null;
          }
        }, {
          key: "addEmployeeSalary",
          value: function addEmployeeSalary(employeeSalary) {
            var data = {
              api: 'newEmployeeSalary',
              data: employeeSalary
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeEmployeeSalaryStatus",
          value: function changeEmployeeSalaryStatus(id, status) {
            var data = {
              api: 'changeEmployeeSalaryStatus',
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
          key: "getBranchEmployeeSalaries",
          value: function getBranchEmployeeSalaries(branch, employee, month, year) {
            var data = {
              api: 'getBranchEmployeeSalaries',
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
          key: "getMyBranchSalaries",
          value: function getMyBranchSalaries(branch, month, year) {
            var data = {
              api: 'getMyBranchSalaries',
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
          key: "getEmployeeSalaries",
          value: function getEmployeeSalaries(employee, month, year) {
            var data = {
              api: 'getEmployeeSalaries',
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
          key: "getEmployeeSalary",
          value: function getEmployeeSalary(id) {
            var data = {
              api: 'getEmployeeSalary',
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
          key: "deleteEmployeeSalary",
          value: function deleteEmployeeSalary(id) {
            var data = {
              api: 'deleteEmployeeSalary',
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

        return EmployeeSalaryService;
      }();

      EmployeeSalaryService.ɵfac = function EmployeeSalaryService_Factory(t) {
        return new (t || EmployeeSalaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      EmployeeSalaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeSalaryService,
        factory: EmployeeSalaryService.ɵfac,
        providedIn: 'root'
      });
      return EmployeeSalaryService;
    }();
    /***/

  },

  /***/
  "./src/app/services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
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

    var EmployeeService =
    /*@__PURE__*/
    function () {
      var EmployeeService =
      /*#__PURE__*/
      function () {
        function EmployeeService(httpService) {
          _classCallCheck(this, EmployeeService);

          this.httpService = httpService;
          this.employee = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(EmployeeService, [{
          key: "setEmployeeData",
          value: function setEmployeeData(employee) {
            this.employee.next(employee);
          }
        }, {
          key: "getEmployeeData",
          value: function getEmployeeData() {
            return this.employee;
          }
        }, {
          key: "deleteEmployeeData",
          value: function deleteEmployeeData() {
            this.employee.next(null);
          }
        }, {
          key: "setEmployeeType",
          value: function setEmployeeType(employeeType) {
            this.employeeType = employeeType;
          }
        }, {
          key: "getEmployeeType",
          value: function getEmployeeType() {
            return this.employeeType;
          }
        }, {
          key: "deleteEmployeeType",
          value: function deleteEmployeeType() {
            this.employeeType = null;
          }
        }, {
          key: "setEmployeeId",
          value: function setEmployeeId(employeeId) {
            this.employeeId = employeeId;
          }
        }, {
          key: "getEmployeeId",
          value: function getEmployeeId() {
            return this.employeeId;
          }
        }, {
          key: "deleteEmployeeId",
          value: function deleteEmployeeId() {
            this.employeeId = null;
          }
        }, {
          key: "addEmployee",
          value: function addEmployee(employee, branchEmployee) {
            var data = {
              api: 'newEmployee',
              data: {
                employee: employee,
                branchEmployee: branchEmployee
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getEmployees",
          value: function getEmployees() {
            var data = {
              api: 'getEmployees',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getEmployee",
          value: function getEmployee(id) {
            var data = {
              api: 'getEmployee',
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
          key: "getEmployeeByIMSId",
          value: function getEmployeeByIMSId(id) {
            var data = {
              api: 'getEmployeeByIMSId',
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
          key: "searchEmployee",
          value: function searchEmployee(employeeId) {
            var data = {
              api: 'searchEmployee',
              data: {
                employeeId: employeeId
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getEmployeeForEditing",
          value: function getEmployeeForEditing(id) {
            var data = {
              api: 'getEmployeeForEditing',
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
          key: "changeEmployeeStatus",
          value: function changeEmployeeStatus(id, status) {
            var data = {
              api: 'changeEmployeeStatus',
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
          key: "editEmployee",
          value: function editEmployee(employee) {
            var data = {
              api: 'updateEmployee',
              data: employee
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            var data = {
              api: 'deleteEmployee',
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

        return EmployeeService;
      }();

      EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeService,
        factory: EmployeeService.ɵfac,
        providedIn: 'root'
      });
      return EmployeeService;
    }();
    /***/

  },

  /***/
  "./src/app/services/exam.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/exam.service.ts ***!
    \******************************************/

  /*! exports provided: ExamService */

  /***/
  function srcAppServicesExamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamService", function () {
      return ExamService;
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

    var ExamService =
    /*@__PURE__*/
    function () {
      var ExamService =
      /*#__PURE__*/
      function () {
        function ExamService(httpService) {
          _classCallCheck(this, ExamService);

          this.httpService = httpService;
          this.exam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(ExamService, [{
          key: "setExamData",
          value: function setExamData(exam) {
            this.exam.next(exam);
          }
        }, {
          key: "getExamData",
          value: function getExamData() {
            return this.exam;
          }
        }, {
          key: "deleteExamData",
          value: function deleteExamData() {
            this.exam.next(null);
          }
        }, {
          key: "setExamId",
          value: function setExamId(examId) {
            this.examId = examId;
          }
        }, {
          key: "getExamId",
          value: function getExamId() {
            return this.examId;
          }
        }, {
          key: "deleteExamId",
          value: function deleteExamId() {
            this.examId = null;
          }
        }, {
          key: "getStudentCourseScore",
          value: function getStudentCourseScore(subject, month, year, student, studentCourse) {
            var data = {
              api: 'getStudentCourseScore',
              data: {
                subject: subject,
                month: month,
                year: year,
                student: student,
                studentCourse: studentCourse
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentsForExam",
          value: function getStudentsForExam(exam) {
            var data = {
              api: 'getStudentsForExam',
              data: {
                exam: exam
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "saveExam",
          value: function saveExam(exam) {
            var data = {
              api: 'saveExam',
              data: exam
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getExams",
          value: function getExams(branch, category, course, batch, subject, month, year) {
            var data = {
              api: 'getExams',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
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
          key: "getExamsPerformance",
          value: function getExamsPerformance(month, year, branch, category, course, batch, subject, student) {
            var data = {
              api: 'getExamsPerformance',
              data: {
                month: month,
                year: year,
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getExam",
          value: function getExam(id) {
            var data = {
              api: 'getExam',
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
          key: "getExamReport",
          value: function getExamReport(id) {
            var data = {
              api: 'getExamReport',
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
          key: "getExamForEditing",
          value: function getExamForEditing(id) {
            var data = {
              api: 'getExamForEditing',
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
          key: "editExam",
          value: function editExam(exam) {
            var data = {
              api: 'editExam',
              data: exam
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "saveStudentsMarks",
          value: function saveStudentsMarks(id, marks) {
            var data = {
              api: 'saveStudentsMarks',
              data: {
                id: id,
                marks: marks
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteExam",
          value: function deleteExam(id) {
            var data = {
              api: 'deleteExam',
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

        return ExamService;
      }();

      ExamService.ɵfac = function ExamService_Factory(t) {
        return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExamService,
        factory: ExamService.ɵfac,
        providedIn: 'root'
      });
      return ExamService;
    }();
    /***/

  },

  /***/
  "./src/app/services/institute-keys.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/institute-keys.service.ts ***!
    \****************************************************/

  /*! exports provided: InstituteKeysService */

  /***/
  function srcAppServicesInstituteKeysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteKeysService", function () {
      return InstituteKeysService;
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

    var InstituteKeysService =
    /*@__PURE__*/
    function () {
      var InstituteKeysService =
      /*#__PURE__*/
      function () {
        function InstituteKeysService(httpService) {
          _classCallCheck(this, InstituteKeysService);

          this.httpService = httpService;
        }

        _createClass(InstituteKeysService, [{
          key: "setLocalInstitutePaymentAccessKey",
          value: function setLocalInstitutePaymentAccessKey(institutePaymentAccessKey) {
            this.institutePaymentAccessKey = institutePaymentAccessKey;
          }
        }, {
          key: "getLocalInstitutePaymentAccessKey",
          value: function getLocalInstitutePaymentAccessKey() {
            return this.institutePaymentAccessKey;
          }
        }, {
          key: "getInstituteKeys",
          value: function getInstituteKeys() {
            var data = {
              api: 'getInstituteKeys',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getInstitutePaymentAccessKey",
          value: function getInstitutePaymentAccessKey(branch) {
            var data = {
              api: 'getInstitutePaymentAccessKey',
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
          key: "saveInstitutePaymentGatewayKeys",
          value: function saveInstitutePaymentGatewayKeys(keys) {
            var data = {
              api: 'saveInstitutePaymentGatewayKeys',
              data: {
                keys: keys
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "saveInstituteZoomKeys",
          value: function saveInstituteZoomKeys(keys) {
            var data = {
              api: 'saveInstituteZoomKeys',
              data: keys
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "generateZoomAuthToken",
          value: function generateZoomAuthToken() {
            var data = {
              api: 'generateZoomAuthToken'
            };
            return this.httpService.httpGet(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getZoomAuthLink",
          value: function getZoomAuthLink() {
            var data = {
              api: 'getZoomAuthLink',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return InstituteKeysService;
      }();

      InstituteKeysService.ɵfac = function InstituteKeysService_Factory(t) {
        return new (t || InstituteKeysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      InstituteKeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InstituteKeysService,
        factory: InstituteKeysService.ɵfac,
        providedIn: 'root'
      });
      return InstituteKeysService;
    }();
    /***/

  },

  /***/
  "./src/app/services/lead.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/lead.service.ts ***!
    \******************************************/

  /*! exports provided: LeadService */

  /***/
  function srcAppServicesLeadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeadService", function () {
      return LeadService;
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

    var LeadService =
    /*@__PURE__*/
    function () {
      var LeadService =
      /*#__PURE__*/
      function () {
        function LeadService(httpService) {
          _classCallCheck(this, LeadService);

          this.httpService = httpService;
          this.lead = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(LeadService, [{
          key: "setLeadData",
          value: function setLeadData(lead) {
            this.lead.next(lead);
          }
        }, {
          key: "getLeadType",
          value: function getLeadType() {
            return this.leadType;
          }
        }, {
          key: "setLeadType",
          value: function setLeadType(leadType) {
            this.leadType = leadType;
          }
        }, {
          key: "deleteLeadType",
          value: function deleteLeadType() {
            this.leadType = null;
          }
        }, {
          key: "getLeadData",
          value: function getLeadData() {
            return this.lead;
          }
        }, {
          key: "deleteLeadData",
          value: function deleteLeadData() {
            this.lead.next(null);
          }
        }, {
          key: "setLeadId",
          value: function setLeadId(leadId) {
            this.leadId = leadId;
          }
        }, {
          key: "getLeadId",
          value: function getLeadId() {
            return this.leadId;
          }
        }, {
          key: "deleteLeadId",
          value: function deleteLeadId() {
            this.leadId = null;
          }
        }, {
          key: "saveLead",
          value: function saveLead(lead) {
            var data = {
              api: 'saveLead',
              data: lead
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLeads",
          value: function getLeads(branch, category, course, leadType) {
            var data = {
              api: 'getLeads',
              data: {
                branch: branch,
                category: category,
                course: course,
                leadType: leadType
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLead",
          value: function getLead(id) {
            var data = {
              api: 'getLead',
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
          key: "getLeadForEditing",
          value: function getLeadForEditing(id) {
            var data = {
              api: 'getLeadForEditing',
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
          key: "editLead",
          value: function editLead(lead) {
            var data = {
              api: 'editLead',
              data: lead
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeLeadStatus",
          value: function changeLeadStatus(id, status) {
            var data = {
              api: 'changeLeadStatus',
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
          key: "deleteLead",
          value: function deleteLead(id) {
            var data = {
              api: 'deleteLead',
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

        return LeadService;
      }();

      LeadService.ɵfac = function LeadService_Factory(t) {
        return new (t || LeadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      LeadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LeadService,
        factory: LeadService.ɵfac,
        providedIn: 'root'
      });
      return LeadService;
    }();
    /***/

  },

  /***/
  "./src/app/services/lecture-material.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/lecture-material.service.ts ***!
    \******************************************************/

  /*! exports provided: LectureMaterialService */

  /***/
  function srcAppServicesLectureMaterialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LectureMaterialService", function () {
      return LectureMaterialService;
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

    var LectureMaterialService =
    /*@__PURE__*/
    function () {
      var LectureMaterialService =
      /*#__PURE__*/
      function () {
        function LectureMaterialService(httpService) {
          _classCallCheck(this, LectureMaterialService);

          this.httpService = httpService;
          this.lectureMaterial = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.lectureMaterials = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }

        _createClass(LectureMaterialService, [{
          key: "setLectureMaterialId",
          value: function setLectureMaterialId(lectureMaterialId) {
            this.lectureMaterialId = lectureMaterialId;
          }
        }, {
          key: "getLectureMaterialId",
          value: function getLectureMaterialId() {
            return this.lectureMaterialId;
          }
        }, {
          key: "deleteLectureMaterialId",
          value: function deleteLectureMaterialId() {
            this.lectureMaterialId = null;
          }
        }, {
          key: "setLectureMaterialsData",
          value: function setLectureMaterialsData(lectureMaterials) {
            this.lectureMaterials.next(lectureMaterials);
          }
        }, {
          key: "getLectureMaterialsData",
          value: function getLectureMaterialsData() {
            return this.lectureMaterials;
          }
        }, {
          key: "deleteLectureMaterialsData",
          value: function deleteLectureMaterialsData() {
            this.lectureMaterials.next([]);
          }
        }, {
          key: "setLectureMaterialData",
          value: function setLectureMaterialData(lectureMaterial) {
            this.lectureMaterial.next(lectureMaterial);
          }
        }, {
          key: "getLectureMaterialData",
          value: function getLectureMaterialData() {
            return this.lectureMaterial;
          }
        }, {
          key: "deleteLectureMaterialData",
          value: function deleteLectureMaterialData() {
            this.lectureMaterial.next(null);
          }
        }, {
          key: "getLectureMaterials",
          value: function getLectureMaterials(branch, category, course, batch, lecture) {
            var data = {
              api: 'getLectureMaterials',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                lecture: lecture
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLectureMaterial",
          value: function getLectureMaterial(id) {
            var data = {
              api: 'getLectureMaterials',
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
          key: "getLectureMaterialsForStudent",
          value: function getLectureMaterialsForStudent(branch, category, course, batch, lecture) {
            var data = {
              api: 'getLectureMaterialsForStudent',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                lecture: lecture
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "newLectureMaterials",
          value: function newLectureMaterials(materials) {
            var data = {
              api: 'newLectureMaterials',
              data: materials
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeLectureMaterialStatus",
          value: function changeLectureMaterialStatus(id, status) {
            var data = {
              api: 'changeLectureMaterialStatus',
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
          key: "deleteLectureMaterial",
          value: function deleteLectureMaterial(id) {
            var data = {
              api: 'deleteLectureMaterial',
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

        return LectureMaterialService;
      }();

      LectureMaterialService.ɵfac = function LectureMaterialService_Factory(t) {
        return new (t || LectureMaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      LectureMaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LectureMaterialService,
        factory: LectureMaterialService.ɵfac,
        providedIn: 'root'
      });
      return LectureMaterialService;
    }();
    /***/

  },

  /***/
  "./src/app/services/lecture.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/lecture.service.ts ***!
    \*********************************************/

  /*! exports provided: LectureService */

  /***/
  function srcAppServicesLectureServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LectureService", function () {
      return LectureService;
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

    var LectureService =
    /*@__PURE__*/
    function () {
      var LectureService =
      /*#__PURE__*/
      function () {
        function LectureService(httpService) {
          _classCallCheck(this, LectureService);

          this.httpService = httpService;
          this.lecture = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.lectureId = null;
          this.date = null;
        }

        _createClass(LectureService, [{
          key: "getSearchDate",
          value: function getSearchDate() {
            return this.date;
          }
        }, {
          key: "setSearchDate",
          value: function setSearchDate(date) {
            this.date = date;
          }
        }, {
          key: "setLectureData",
          value: function setLectureData(lecture) {
            this.lecture.next(lecture);
          }
        }, {
          key: "getLectureData",
          value: function getLectureData() {
            return this.lecture;
          }
        }, {
          key: "deleteLectureData",
          value: function deleteLectureData() {
            this.lecture.next(null);
          }
        }, {
          key: "setLectureId",
          value: function setLectureId(lectureId) {
            this.lectureId = lectureId;
          }
        }, {
          key: "getLectureId",
          value: function getLectureId() {
            return this.lectureId;
          }
        }, {
          key: "deleteLectureId",
          value: function deleteLectureId() {
            this.lectureId = null;
          }
        }, {
          key: "getLectures",
          value: function getLectures(branch, category, course, batch, date) {
            var data = {
              api: 'getLectures',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                date: date
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLecturesForStudent",
          value: function getLecturesForStudent(branch, category, course, batch, date) {
            var data = {
              api: 'getLecturesForStudent',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                date: date
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLecture",
          value: function getLecture(id) {
            var data = {
              api: 'getLecture',
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
          key: "getUpcomingLecturesForEmployee",
          value: function getUpcomingLecturesForEmployee(branch) {
            var data = {
              api: 'getUpcomingLecturesForEmployee',
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
        }]);

        return LectureService;
      }();

      LectureService.ɵfac = function LectureService_Factory(t) {
        return new (t || LectureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      LectureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LectureService,
        factory: LectureService.ɵfac,
        providedIn: 'root'
      });
      return LectureService;
    }();
    /***/

  },

  /***/
  "./src/app/services/membership.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/membership.service.ts ***!
    \************************************************/

  /*! exports provided: MembershipService */

  /***/
  function srcAppServicesMembershipServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipService", function () {
      return MembershipService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");

    var MembershipService =
    /*@__PURE__*/
    function () {
      var MembershipService =
      /*#__PURE__*/
      function () {
        function MembershipService(httpService) {
          _classCallCheck(this, MembershipService);

          this.httpService = httpService;
          this.membershipPlan = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }

        _createClass(MembershipService, [{
          key: "setMembershipPlan",
          value: function setMembershipPlan(membershipPlan) {
            this.membershipPlan.next(membershipPlan);
          }
        }, {
          key: "getMembershipPlan",
          value: function getMembershipPlan() {
            return this.membershipPlan;
          }
        }, {
          key: "setMembershipType",
          value: function setMembershipType(membershipType) {
            this.membershipType = membershipType;
          }
        }, {
          key: "getMembershipType",
          value: function getMembershipType() {
            return this.membershipType;
          }
        }, {
          key: "getMemberships",
          value: function getMemberships() {
            var data = {
              api: 'getMembershipPlans',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
          }
        }, {
          key: "getMembership",
          value: function getMembership(name) {
            var data = {
              api: 'getMembershipPlan',
              data: {
                name: name
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
          }
        }, {
          key: "saveMembershipPlan",
          value: function saveMembershipPlan(membershipPlan) {
            var data = {
              api: 'saveMembershipPlan',
              data: membershipPlan
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
            }));
          }
        }]);

        return MembershipService;
      }();

      MembershipService.ɵfac = function MembershipService_Factory(t) {
        return new (t || MembershipService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      MembershipService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MembershipService,
        factory: MembershipService.ɵfac,
        providedIn: 'root'
      });
      return MembershipService;
    }();
    /***/

  },

  /***/
  "./src/app/services/online-exam-question.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/online-exam-question.service.ts ***!
    \**********************************************************/

  /*! exports provided: OnlineExamQuestionService */

  /***/
  function srcAppServicesOnlineExamQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineExamQuestionService", function () {
      return OnlineExamQuestionService;
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

    var OnlineExamQuestionService =
    /*@__PURE__*/
    function () {
      var OnlineExamQuestionService =
      /*#__PURE__*/
      function () {
        function OnlineExamQuestionService(httpService) {
          _classCallCheck(this, OnlineExamQuestionService);

          this.httpService = httpService;
          this.onlineExamQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(OnlineExamQuestionService, [{
          key: "setOnlineExamQuestionData",
          value: function setOnlineExamQuestionData(onlineExamQuestion) {
            this.onlineExamQuestion.next(onlineExamQuestion);
          }
        }, {
          key: "getOnlineExamQuestionData",
          value: function getOnlineExamQuestionData() {
            return this.onlineExamQuestion;
          }
        }, {
          key: "deleteOnlineExamQuestionData",
          value: function deleteOnlineExamQuestionData() {
            this.onlineExamQuestion.next(null);
          }
        }, {
          key: "setOnlineExamQuestionId",
          value: function setOnlineExamQuestionId(onlineExamQuestionId) {
            this.onlineExamQuestionId = onlineExamQuestionId;
          }
        }, {
          key: "getOnlineExamQuestionId",
          value: function getOnlineExamQuestionId() {
            return this.onlineExamQuestionId;
          }
        }, {
          key: "deleteOnlineExamQuestionId",
          value: function deleteOnlineExamQuestionId() {
            this.onlineExamQuestionId = null;
          }
        }, {
          key: "newOnlineExamQuestion",
          value: function newOnlineExamQuestion(contents) {
            var data = {
              api: 'newOnlineExamQuestion',
              data: contents
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getOnlineExamQuestion",
          value: function getOnlineExamQuestion(id) {
            var data = {
              api: 'getOnlineExamQuestion',
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
          key: "getOnlineExamQuestions",
          value: function getOnlineExamQuestions(id) {
            var data = {
              api: 'getOnlineExamQuestions',
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
          key: "getOnlineExamQuestionsForStudent",
          value: function getOnlineExamQuestionsForStudent(id) {
            var data = {
              api: 'getOnlineExamQuestionsForStudent',
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
          key: "changeOnlineExamQuestionStatus",
          value: function changeOnlineExamQuestionStatus(id, status) {
            var data = {
              api: 'changeOnlineExamQuestionStatus',
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
          key: "editOnlineExamQuestion",
          value: function editOnlineExamQuestion(question) {
            var data = {
              api: 'editOnlineExamQuestion',
              data: question
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteOnlineExamQuestion",
          value: function deleteOnlineExamQuestion(id) {
            var data = {
              api: 'deleteOnlineExamQuestion',
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

        return OnlineExamQuestionService;
      }();

      OnlineExamQuestionService.ɵfac = function OnlineExamQuestionService_Factory(t) {
        return new (t || OnlineExamQuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      OnlineExamQuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OnlineExamQuestionService,
        factory: OnlineExamQuestionService.ɵfac,
        providedIn: 'root'
      });
      return OnlineExamQuestionService;
    }();
    /***/

  },

  /***/
  "./src/app/services/online-exam.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/online-exam.service.ts ***!
    \*************************************************/

  /*! exports provided: OnlineExamService */

  /***/
  function srcAppServicesOnlineExamServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineExamService", function () {
      return OnlineExamService;
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

    var OnlineExamService =
    /*@__PURE__*/
    function () {
      var OnlineExamService =
      /*#__PURE__*/
      function () {
        function OnlineExamService(httpService) {
          _classCallCheck(this, OnlineExamService);

          this.httpService = httpService;
          this.onlineExam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.date = null;
        }

        _createClass(OnlineExamService, [{
          key: "getSearchDate",
          value: function getSearchDate() {
            return this.date;
          }
        }, {
          key: "setSearchDate",
          value: function setSearchDate(date) {
            this.date = date;
          }
        }, {
          key: "setOnlineExamData",
          value: function setOnlineExamData(onlineExam) {
            this.onlineExam.next(onlineExam);
          }
        }, {
          key: "getOnlineExamData",
          value: function getOnlineExamData() {
            return this.onlineExam;
          }
        }, {
          key: "deleteOnlineExamData",
          value: function deleteOnlineExamData() {
            this.onlineExam.next(null);
          }
        }, {
          key: "setOnlineExamId",
          value: function setOnlineExamId(onlineExamId) {
            this.onlineExamId = onlineExamId;
          }
        }, {
          key: "getOnlineExamId",
          value: function getOnlineExamId() {
            return this.onlineExamId;
          }
        }, {
          key: "deleteOnlineExamId",
          value: function deleteOnlineExamId() {
            this.onlineExamId = null;
          }
        }, {
          key: "getOnlineExam",
          value: function getOnlineExam(id) {
            var data = {
              api: 'getOnlineExam',
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
          key: "getOnlineExamForEditing",
          value: function getOnlineExamForEditing(id) {
            var data = {
              api: 'getOnlineExamForEditing',
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
          key: "getOnlineExams",
          value: function getOnlineExams(branch, category, course, batch, subject, month, year) {
            var data = {
              api: 'getOnlineExams',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
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
          key: "getOnlineExamsForStudent",
          value: function getOnlineExamsForStudent(branch, category, course, batch, subject, month, year) {
            var data = {
              api: 'getOnlineExamsForStudent',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                subject: subject,
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
          key: "addOnlineExam",
          value: function addOnlineExam(onlineExam) {
            var data = {
              api: 'newOnlineExam',
              data: onlineExam
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editOnlineExam",
          value: function editOnlineExam(onlineExam) {
            var data = {
              api: 'editOnlineExam',
              data: onlineExam
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeOnlineExamStatus",
          value: function changeOnlineExamStatus(id, status) {
            var data = {
              api: 'changeOnlineExamStatus',
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
          key: "deleteOnlineExam",
          value: function deleteOnlineExam(id) {
            var data = {
              api: 'deleteOnlineExam',
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
          key: "saveOnlineExamResult",
          value: function saveOnlineExamResult(studentQuestionAnswers, onlineExam) {
            var data = {
              api: 'saveOnlineExamResult',
              data: {
                studentQuestionAnswers: studentQuestionAnswers,
                onlineExam: onlineExam
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getOnlineExamResult",
          value: function getOnlineExamResult(id) {
            var data = {
              api: 'getOnlineExamResult',
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

        return OnlineExamService;
      }();

      OnlineExamService.ɵfac = function OnlineExamService_Factory(t) {
        return new (t || OnlineExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      OnlineExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OnlineExamService,
        factory: OnlineExamService.ɵfac,
        providedIn: 'root'
      });
      return OnlineExamService;
    }();
    /***/

  },

  /***/
  "./src/app/services/payment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/payment.service.ts ***!
    \*********************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppServicesPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
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

    var PaymentService =
    /*@__PURE__*/
    function () {
      var PaymentService =
      /*#__PURE__*/
      function () {
        function PaymentService(httpService) {
          _classCallCheck(this, PaymentService);

          this.httpService = httpService;
        }

        _createClass(PaymentService, [{
          key: "getPaymentDetails",
          value: function getPaymentDetails() {
            return this.paymentDetails;
          }
        }, {
          key: "setPaymentDetails",
          value: function setPaymentDetails(planType, packageType, amount) {
            this.paymentDetails = {
              planType: planType,
              packageType: packageType,
              amount: amount
            };
          }
        }, {
          key: "deletePaymentDetails",
          value: function deletePaymentDetails() {
            this.paymentDetails = null;
          }
        }, {
          key: "getInstitutePaymentDetails",
          value: function getInstitutePaymentDetails() {
            return this.institutePaymentDetails;
          }
        }, {
          key: "setInstitutePaymentDetails",
          value: function setInstitutePaymentDetails(amount) {
            this.institutePaymentDetails = {
              amount: amount
            };
          }
        }, {
          key: "deleteInstitutePaymentDetails",
          value: function deleteInstitutePaymentDetails() {
            this.institutePaymentDetails = null;
          }
        }, {
          key: "verifyPayment",
          value: function verifyPayment(payment, placedOrder) {
            var data = {
              api: 'verifyPayment',
              data: {
                payment: payment,
                receipt: placedOrder
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "verifyInstitutePayment",
          value: function verifyInstitutePayment(branch, payment, placedOrder) {
            var data = {
              api: 'verifyInstitutePayment',
              data: {
                branch: branch,
                payment: payment,
                receipt: placedOrder
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return PaymentService;
      }();

      PaymentService.ɵfac = function PaymentService_Factory(t) {
        return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PaymentService,
        factory: PaymentService.ɵfac,
        providedIn: 'root'
      });
      return PaymentService;
    }();
    /***/

  },

  /***/
  "./src/app/services/question-answers.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/question-answers.service.ts ***!
    \******************************************************/

  /*! exports provided: QuestionAnswersService */

  /***/
  function srcAppServicesQuestionAnswersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionAnswersService", function () {
      return QuestionAnswersService;
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

    var QuestionAnswersService =
    /*@__PURE__*/
    function () {
      var QuestionAnswersService =
      /*#__PURE__*/
      function () {
        function QuestionAnswersService(httpService) {
          _classCallCheck(this, QuestionAnswersService);

          this.httpService = httpService;
          this.question = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.questionAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.questionAnswers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.questionId = null;
          this.questionAnswerId = null;
          this.questionAnswersId = null;
        }

        _createClass(QuestionAnswersService, [{
          key: "setQuestion",
          value: function setQuestion(question) {
            this.question.next(question);
          }
        }, {
          key: "getQuestion",
          value: function getQuestion() {
            return this.question;
          }
        }, {
          key: "deleteQuestion",
          value: function deleteQuestion() {
            this.question.next(null);
          }
        }, {
          key: "setQuestionId",
          value: function setQuestionId(questionId) {
            this.questionId = questionId;
          }
        }, {
          key: "getQuestionId",
          value: function getQuestionId() {
            return this.questionId;
          }
        }, {
          key: "deleteQuestionId",
          value: function deleteQuestionId() {
            this.questionId = null;
          }
        }, {
          key: "setQuestionAnswer",
          value: function setQuestionAnswer(questionAnswer) {
            this.questionAnswer.next(questionAnswer);
          }
        }, {
          key: "getQuestionAnswer",
          value: function getQuestionAnswer() {
            return this.questionAnswer;
          }
        }, {
          key: "deleteQuestionAnswer",
          value: function deleteQuestionAnswer() {
            this.questionAnswer.next(null);
          }
        }, {
          key: "setQuestionAnswerId",
          value: function setQuestionAnswerId(questionAnswerId) {
            this.questionAnswerId = questionAnswerId;
          }
        }, {
          key: "getQuestionAnswerId",
          value: function getQuestionAnswerId() {
            return this.questionAnswerId;
          }
        }, {
          key: "deleteQuestionAnswerId",
          value: function deleteQuestionAnswerId() {
            this.questionAnswerId = null;
          }
        }, {
          key: "setQuestionAnswers",
          value: function setQuestionAnswers(questionAnswers) {
            this.questionAnswers.next(questionAnswers);
          }
        }, {
          key: "getQuestionAnswers",
          value: function getQuestionAnswers() {
            return this.questionAnswers;
          }
        }, {
          key: "deleteQuestionAnswers",
          value: function deleteQuestionAnswers() {
            this.questionAnswers.next(null);
          }
        }, {
          key: "setQuestionAnswersId",
          value: function setQuestionAnswersId(questionAnswersId) {
            this.questionAnswersId = questionAnswersId;
          }
        }, {
          key: "getQuestionAnswersId",
          value: function getQuestionAnswersId() {
            return this.questionAnswersId;
          }
        }, {
          key: "deleteQuestionAnswersId",
          value: function deleteQuestionAnswersId() {
            this.questionAnswersId = null;
          }
        }, {
          key: "getLectureQuestionAnswers",
          value: function getLectureQuestionAnswers(branch, category, course, batch, lecture) {
            var data = {
              api: 'getLectureQuestionAnswers',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                lecture: lecture
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getLectureQuestionAnswer",
          value: function getLectureQuestionAnswer(id) {
            var data = {
              api: 'getLectureQuestionAnswer',
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
          key: "newLectureQuestion",
          value: function newLectureQuestion(question) {
            var data = {
              api: 'newLectureQuestion',
              data: question
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editLectureQuestion",
          value: function editLectureQuestion(question) {
            var data = {
              api: 'editLectureQuestion',
              data: question
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteLectureQuestion",
          value: function deleteLectureQuestion(id) {
            var data = {
              api: 'deleteLectureQuestion',
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
          key: "newLectureQuestionAnswer",
          value: function newLectureQuestionAnswer(answer) {
            var data = {
              api: 'newLectureQuestionAnswer',
              data: answer
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editLectureQuestionAnswer",
          value: function editLectureQuestionAnswer(answer) {
            var data = {
              api: 'editLectureQuestionAnswer',
              data: answer
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteLectureQuestionAnswer",
          value: function deleteLectureQuestionAnswer(id) {
            var data = {
              api: 'deleteLectureQuestionAnswer',
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

        return QuestionAnswersService;
      }();

      QuestionAnswersService.ɵfac = function QuestionAnswersService_Factory(t) {
        return new (t || QuestionAnswersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      QuestionAnswersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: QuestionAnswersService,
        factory: QuestionAnswersService.ɵfac,
        providedIn: 'root'
      });
      return QuestionAnswersService;
    }();
    /***/

  },

  /***/
  "./src/app/services/role.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/role.service.ts ***!
    \******************************************/

  /*! exports provided: RoleService */

  /***/
  function srcAppServicesRoleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleService", function () {
      return RoleService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoleService =
    /*@__PURE__*/
    function () {
      var RoleService =
      /*#__PURE__*/
      function () {
        function RoleService() {
          _classCallCheck(this, RoleService);

          this.employeeRole = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
          this.userRoles = ['institute', 'employee', 'student'];
          this.employeeRoles = ['manager', 'teacher', 'councillor'];
        }

        _createClass(RoleService, [{
          key: "getUserRoles",
          value: function getUserRoles() {
            return this.userRoles;
          }
        }, {
          key: "setEmployeeRole",
          value: function setEmployeeRole(role) {
            this.employeeRole.next(role);
          }
        }, {
          key: "getEmployeeRole",
          value: function getEmployeeRole() {
            return this.employeeRole;
          }
        }, {
          key: "getEmployeeRoles",
          value: function getEmployeeRoles() {
            return this.employeeRoles;
          }
        }]);

        return RoleService;
      }();

      RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || RoleService)();
      };

      RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RoleService,
        factory: RoleService.ɵfac,
        providedIn: 'root'
      });
      return RoleService;
    }();
    /***/

  },

  /***/
  "./src/app/services/schedule.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/schedule.service.ts ***!
    \**********************************************/

  /*! exports provided: ScheduleService */

  /***/
  function srcAppServicesScheduleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleService", function () {
      return ScheduleService;
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

    var ScheduleService =
    /*@__PURE__*/
    function () {
      var ScheduleService =
      /*#__PURE__*/
      function () {
        function ScheduleService(httpService) {
          _classCallCheck(this, ScheduleService);

          this.httpService = httpService;
          this.schedule = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(ScheduleService, [{
          key: "setScheduleData",
          value: function setScheduleData(Schedule) {
            this.schedule.next(Schedule);
          }
        }, {
          key: "getScheduleData",
          value: function getScheduleData() {
            return this.schedule;
          }
        }, {
          key: "deleteScheduleData",
          value: function deleteScheduleData() {
            this.schedule.next(null);
          }
        }, {
          key: "setScheduleId",
          value: function setScheduleId(scheduleId) {
            this.scheduleId = scheduleId;
          }
        }, {
          key: "getScheduleId",
          value: function getScheduleId() {
            return this.scheduleId;
          }
        }, {
          key: "deleteScheduleId",
          value: function deleteScheduleId() {
            this.scheduleId = null;
          }
        }, {
          key: "setScheduleDay",
          value: function setScheduleDay(scheduleDay) {
            this.scheduleDay = scheduleDay;
          }
        }, {
          key: "getScheduleDay",
          value: function getScheduleDay() {
            return this.scheduleDay;
          }
        }, {
          key: "deleteScheduleDay",
          value: function deleteScheduleDay() {
            this.scheduleDay = null;
          }
        }, {
          key: "addSchedule",
          value: function addSchedule(schedules) {
            var data = {
              api: 'newSchedule',
              data: schedules
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeScheduleStatus",
          value: function changeScheduleStatus(id, status) {
            var data = {
              api: 'changeScheduleStatus',
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
          key: "getAllSchedules",
          value: function getAllSchedules(branch, category, course, batch, startDate, endDate) {
            var data = {
              api: 'getAllSchedule',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                startDate: startDate,
                endDate: endDate
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getSchedule",
          value: function getSchedule(id) {
            var data = {
              api: 'getSchedule',
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
          key: "getScheduleForEditing",
          value: function getScheduleForEditing(schedule) {
            var data = {
              api: 'getScheduleForEditing',
              data: {
                schedule: schedule
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editSchedule",
          value: function editSchedule(schedule) {
            var data = {
              api: 'editSchedule',
              data: schedule
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteSchedule",
          value: function deleteSchedule(id) {
            var data = {
              api: 'deleteSchedule',
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

        return ScheduleService;
      }();

      ScheduleService.ɵfac = function ScheduleService_Factory(t) {
        return new (t || ScheduleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      ScheduleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ScheduleService,
        factory: ScheduleService.ɵfac,
        providedIn: 'root'
      });
      return ScheduleService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared-services/storage.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/shared-services/storage.service.ts ***!
    \*************************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesSharedServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService =
    /*@__PURE__*/
    function () {
      var StorageService =
      /*#__PURE__*/
      function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this.KB = 1024;
          this.MB = 1024 * 1024;
          this.GB = 1024 * 1024 * 1024;
        }

        _createClass(StorageService, [{
          key: "convertByteToUnit",
          value: function convertByteToUnit(bytes) {
            bytes = +bytes;
            var value;
            var unit;

            if (bytes < this.KB) {
              value = bytes;

              if (value <= 1) {
                unit = 'Byte';
              } else {
                unit = 'Bytes';
              }
            } else if (bytes >= this.KB && bytes < this.MB) {
              value = bytes / this.KB;
              unit = 'KB';
            } else if (bytes >= this.MB && bytes < this.GB) {
              value = bytes / this.MB;
              unit = 'MB';
            } else {
              value = bytes / this.GB;
              unit = 'GB';
            }

            return {
              value: value,
              unit: unit
            };
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      return StorageService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared-services/user.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/shared-services/user.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/services/shared-services/http.service.ts");

    var UserService =
    /*@__PURE__*/
    function () {
      var UserService =
      /*#__PURE__*/
      function () {
        function UserService(httpService) {
          _classCallCheck(this, UserService);

          this.httpService = httpService;
        }

        _createClass(UserService, [{
          key: "setUserProfile",
          value: function setUserProfile(profile) {
            this.userProfile = profile;
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            return this.userProfile;
          }
        }, {
          key: "checkUser",
          value: function checkUser(email) {
            var data = {
              api: 'checkUser',
              data: {
                email: email
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword(password) {
            var data = {
              api: 'changePassword',
              data: password
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "saveProfile",
          value: function saveProfile(profile) {
            var data = {
              api: 'saveProfile',
              data: profile
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var data = {
              api: 'getProfile',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      return UserService;
    }();
    /***/

  },

  /***/
  "./src/app/services/student-course-installment-receipt.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/services/student-course-installment-receipt.service.ts ***!
    \************************************************************************/

  /*! exports provided: StudentCourseInstallmentReceiptService */

  /***/
  function srcAppServicesStudentCourseInstallmentReceiptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptService", function () {
      return StudentCourseInstallmentReceiptService;
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

    var StudentCourseInstallmentReceiptService =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentReceiptService =
      /*#__PURE__*/
      function () {
        function StudentCourseInstallmentReceiptService(httpService) {
          _classCallCheck(this, StudentCourseInstallmentReceiptService);

          this.httpService = httpService;
          this.studentCourseInstallmentReceipt = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(StudentCourseInstallmentReceiptService, [{
          key: "setStudentCourseInstallmentReceiptData",
          value: function setStudentCourseInstallmentReceiptData(studentCourseInstallmentReceipt) {
            this.studentCourseInstallmentReceipt.next(studentCourseInstallmentReceipt);
          }
        }, {
          key: "getStudentCourseInstallmentReceiptData",
          value: function getStudentCourseInstallmentReceiptData() {
            return this.studentCourseInstallmentReceipt;
          }
        }, {
          key: "deleteStudentCourseInstallmentReceiptData",
          value: function deleteStudentCourseInstallmentReceiptData() {
            this.studentCourseInstallmentReceipt.next(null);
          }
        }, {
          key: "setStudentCourseInstallmentReceiptId",
          value: function setStudentCourseInstallmentReceiptId(studentCourseInstallmentReceiptId) {
            this.studentCourseInstallmentReceiptId = studentCourseInstallmentReceiptId;
          }
        }, {
          key: "getStudentCourseInstallmentReceiptId",
          value: function getStudentCourseInstallmentReceiptId() {
            return this.studentCourseInstallmentReceiptId;
          }
        }, {
          key: "deleteStudentCourseInstallmentReceiptId",
          value: function deleteStudentCourseInstallmentReceiptId() {
            this.studentCourseInstallmentReceiptId = null;
          }
        }, {
          key: "addStudentCourseInstallmentReceipt",
          value: function addStudentCourseInstallmentReceipt(studentCourseInstallmentReceipt) {
            var data = {
              api: 'newStudentCourseInstallmentReceipt',
              data: studentCourseInstallmentReceipt
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "generateStudentCourseInstallmentReceipt",
          value: function generateStudentCourseInstallmentReceipt(order, receipt) {
            var data = {
              api: 'generateStudentCourseInstallmentReceipt',
              data: {
                order: order,
                receipt: receipt
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeStudentCourseInstallmentReceiptStatus",
          value: function changeStudentCourseInstallmentReceiptStatus(id, status) {
            var data = {
              api: 'changeStudentCourseInstallmentReceiptStatus',
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
          key: "getAllStudentCourseInstallmentReceipts",
          value: function getAllStudentCourseInstallmentReceipts(student) {
            var data = {
              api: 'getAllStudentCourseInstallmentReceipts',
              data: {
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentAllCourseInstallmentReceiptsForStudent",
          value: function getStudentAllCourseInstallmentReceiptsForStudent(student) {
            var data = {
              api: 'getStudentAllCourseInstallmentReceiptsForStudent',
              data: {
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourseInstallmentReceipt",
          value: function getStudentCourseInstallmentReceipt(id) {
            var data = {
              api: 'getStudentCourseInstallmentReceipt',
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
          key: "getStudentCourseInstallmentReceiptForEditing",
          value: function getStudentCourseInstallmentReceiptForEditing(id) {
            var data = {
              api: 'getStudentCourseInstallmentReceiptForEditing',
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
          key: "editStudentCourseInstallmentReceipt",
          value: function editStudentCourseInstallmentReceipt(studentCourseInstallmentReceipt) {
            var data = {
              api: 'editStudentCourseInstallmentReceipt',
              data: studentCourseInstallmentReceipt
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteStudentCourseInstallmentReceipt",
          value: function deleteStudentCourseInstallmentReceipt(id) {
            var data = {
              api: 'deleteStudentCourseInstallmentReceipt',
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

        return StudentCourseInstallmentReceiptService;
      }();

      StudentCourseInstallmentReceiptService.ɵfac = function StudentCourseInstallmentReceiptService_Factory(t) {
        return new (t || StudentCourseInstallmentReceiptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      StudentCourseInstallmentReceiptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentCourseInstallmentReceiptService,
        factory: StudentCourseInstallmentReceiptService.ɵfac,
        providedIn: 'root'
      });
      return StudentCourseInstallmentReceiptService;
    }();
    /***/

  },

  /***/
  "./src/app/services/student-course-installment.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/services/student-course-installment.service.ts ***!
    \****************************************************************/

  /*! exports provided: StudentCourseInstallmentService */

  /***/
  function srcAppServicesStudentCourseInstallmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentService", function () {
      return StudentCourseInstallmentService;
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

    var StudentCourseInstallmentService =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentService =
      /*#__PURE__*/
      function () {
        function StudentCourseInstallmentService(httpService) {
          _classCallCheck(this, StudentCourseInstallmentService);

          this.httpService = httpService;
          this.studentCourseInstallments = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.courseInstallment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        } // Installment Id


        _createClass(StudentCourseInstallmentService, [{
          key: "setStudentCourseInstallmentId",
          value: function setStudentCourseInstallmentId(studentCourseInstallmentId) {
            this.studentCourseInstallmentId = studentCourseInstallmentId;
          }
        }, {
          key: "getStudentCourseInstallmentId",
          value: function getStudentCourseInstallmentId() {
            return this.studentCourseInstallmentId;
          }
        }, {
          key: "deleteStudentCourseInstallmentId",
          value: function deleteStudentCourseInstallmentId() {
            this.studentCourseInstallmentId = null;
          } // Installments

        }, {
          key: "setStudentCourseInstallmentData",
          value: function setStudentCourseInstallmentData(studentCourseInstallments) {
            this.studentCourseInstallments.next(studentCourseInstallments);
          }
        }, {
          key: "getStudentCourseInstallmentData",
          value: function getStudentCourseInstallmentData() {
            return this.studentCourseInstallments;
          }
        }, {
          key: "deleteStudentCourseInstallmentData",
          value: function deleteStudentCourseInstallmentData() {
            this.studentCourseInstallments.next(null);
          } // Single Installment Id

        }, {
          key: "setCourseInstallmentId",
          value: function setCourseInstallmentId(courseInstallmentId) {
            this.courseInstallmentId = courseInstallmentId;
          }
        }, {
          key: "getCourseInstallmentId",
          value: function getCourseInstallmentId() {
            return this.courseInstallmentId;
          }
        }, {
          key: "deleteCourseInstallmentId",
          value: function deleteCourseInstallmentId() {
            this.courseInstallmentId = null;
          } // Single Installment

        }, {
          key: "setCourseInstallmentData",
          value: function setCourseInstallmentData(courseInstallment) {
            this.courseInstallment.next(courseInstallment);
          }
        }, {
          key: "getCourseInstallmentData",
          value: function getCourseInstallmentData() {
            return this.courseInstallment;
          }
        }, {
          key: "deleteCourseInstallmentData",
          value: function deleteCourseInstallmentData() {
            this.courseInstallment.next(null);
          } // Set Course Installment Receipt

        }, {
          key: "setCourseInstallmentReceipt",
          value: function setCourseInstallmentReceipt(installmentId, receiptId) {
            this.studentCourseInstallments.subscribe(function (studentCourseInstallment) {
              if (studentCourseInstallment) {
                var i = studentCourseInstallment.installments.findIndex(function (curInstallment) {
                  return curInstallment._id === installmentId;
                });

                if (i >= 0) {
                  if (receiptId) {
                    studentCourseInstallment.amountCollected = studentCourseInstallment.amountCollected + studentCourseInstallment.installments[i].installmentAmount;
                  } else {
                    studentCourseInstallment.amountCollected = studentCourseInstallment.amountCollected - studentCourseInstallment.installments[i].installmentAmount;
                  }

                  studentCourseInstallment.pendingAmount = studentCourseInstallment.totalAmount - studentCourseInstallment.amountCollected;
                  studentCourseInstallment.installments[i].receiptId = receiptId;
                }
              }
            });
          } // Get Course Installment by Installment Id

        }, {
          key: "getCourseInstallment",
          value: function getCourseInstallment(installmentId) {
            return this.studentCourseInstallments.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (studentCourseInstallment) {
              if (studentCourseInstallment) {
                var installment = studentCourseInstallment.installments.find(function (curInstallment) {
                  return curInstallment._id === installmentId;
                });
                return installment;
              }

              return null;
            }));
          }
        }, {
          key: "addStudentCourseInstallment",
          value: function addStudentCourseInstallment(studentCourse, studentCourseInstallment) {
            var data = {
              api: 'newStudentCourseInstallment',
              data: {
                studentCourse: studentCourse,
                studentCourseInstallment: studentCourseInstallment
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourseInstallments",
          value: function getStudentCourseInstallments(student) {
            var data = {
              api: 'getStudentCourseInstallments',
              data: {
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourseInstallment",
          value: function getStudentCourseInstallment(id) {
            var data = {
              api: 'getStudentCourseInstallment',
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
          key: "getStudentCourseInstallmentForEditing",
          value: function getStudentCourseInstallmentForEditing(id) {
            var data = {
              api: 'getStudentCourseInstallmentForEditing',
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
          key: "changeStudentCourseInstallmentStatus",
          value: function changeStudentCourseInstallmentStatus(id, status) {
            var data = {
              api: 'changeStudentCourseInstallmentStatus',
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
          key: "editStudentCourseInstallment",
          value: function editStudentCourseInstallment(studentCourseInstallment) {
            var data = {
              api: 'updateStudentCourseInstallment',
              data: studentCourseInstallment
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteStudentCourseInstallment",
          value: function deleteStudentCourseInstallment(id) {
            var data = {
              api: 'deleteStudentCourseInstallment',
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

        return StudentCourseInstallmentService;
      }();

      StudentCourseInstallmentService.ɵfac = function StudentCourseInstallmentService_Factory(t) {
        return new (t || StudentCourseInstallmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      StudentCourseInstallmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentCourseInstallmentService,
        factory: StudentCourseInstallmentService.ɵfac,
        providedIn: 'root'
      });
      return StudentCourseInstallmentService;
    }();
    /***/

  },

  /***/
  "./src/app/services/student-course.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/student-course.service.ts ***!
    \****************************************************/

  /*! exports provided: StudentCourseService */

  /***/
  function srcAppServicesStudentCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseService", function () {
      return StudentCourseService;
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

    var StudentCourseService =
    /*@__PURE__*/
    function () {
      var StudentCourseService =
      /*#__PURE__*/
      function () {
        function StudentCourseService(httpService) {
          _classCallCheck(this, StudentCourseService);

          this.httpService = httpService;
          this.studentCourse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(StudentCourseService, [{
          key: "setStudentCourseData",
          value: function setStudentCourseData(studentCourse) {
            this.studentCourse.next(studentCourse);
          }
        }, {
          key: "getStudentCourseData",
          value: function getStudentCourseData() {
            return this.studentCourse;
          }
        }, {
          key: "deleteStudentCourseData",
          value: function deleteStudentCourseData() {
            this.studentCourse.next(null);
          }
        }, {
          key: "setStudentCourseId",
          value: function setStudentCourseId(studentCourseId) {
            this.studentCourseId = studentCourseId;
          }
        }, {
          key: "getStudentCourseId",
          value: function getStudentCourseId() {
            return this.studentCourseId;
          }
        }, {
          key: "deleteStudentCourseId",
          value: function deleteStudentCourseId() {
            this.studentCourseId = null;
          }
        }, {
          key: "addStudentCourse",
          value: function addStudentCourse(studentCourse, studentCourseInstallment) {
            var data = {
              api: 'newStudentCourse',
              data: {
                studentCourse: studentCourse,
                studentCourseInstallment: studentCourseInstallment
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourses",
          value: function getStudentCourses(branch, category, student) {
            var data = {
              api: 'getStudentCourses',
              data: {
                branch: branch,
                category: category,
                student: student
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentAllCourses",
          value: function getStudentAllCourses(branch) {
            var data = {
              api: 'getStudentAllCourses',
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
          key: "getStudentCourse",
          value: function getStudentCourse(id) {
            var data = {
              api: 'getStudentCourse',
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
          key: "checkBatchRollNumber",
          value: function checkBatchRollNumber(branch, category, course, batch, rollNumber) {
            var data = {
              api: 'checkBatchRollNumber',
              data: {
                branch: branch,
                category: category,
                course: course,
                batch: batch,
                rollNumber: rollNumber
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentCourseForEditing",
          value: function getStudentCourseForEditing(id) {
            var data = {
              api: 'getStudentCourseForEditing',
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
          key: "changeStudentCourseStatus",
          value: function changeStudentCourseStatus(id, status) {
            var data = {
              api: 'changeStudentCourseStatus',
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
          key: "editStudentCourse",
          value: function editStudentCourse(studentCourse, studentCourseInstallment) {
            var data = {
              api: 'updateStudentCourse',
              data: {
                studentCourse: studentCourse,
                studentCourseInstallment: studentCourseInstallment
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteStudentCourse",
          value: function deleteStudentCourse(id) {
            var data = {
              api: 'deleteStudentCourse',
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

        return StudentCourseService;
      }();

      StudentCourseService.ɵfac = function StudentCourseService_Factory(t) {
        return new (t || StudentCourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      StudentCourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentCourseService,
        factory: StudentCourseService.ɵfac,
        providedIn: 'root'
      });
      return StudentCourseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/student.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/student.service.ts ***!
    \*********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
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

    var StudentService =
    /*@__PURE__*/
    function () {
      var StudentService =
      /*#__PURE__*/
      function () {
        function StudentService(httpService) {
          _classCallCheck(this, StudentService);

          this.httpService = httpService;
          this.student = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(StudentService, [{
          key: "setStudentType",
          value: function setStudentType(type) {
            this.studentType = type;
          }
        }, {
          key: "getStudentType",
          value: function getStudentType() {
            return this.studentType;
          }
        }, {
          key: "deleteStudentType",
          value: function deleteStudentType() {
            this.studentType = null;
          }
        }, {
          key: "setStudentData",
          value: function setStudentData(student) {
            this.student.next(student);
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            return this.student;
          }
        }, {
          key: "deleteStudentData",
          value: function deleteStudentData() {
            this.student.next(null);
          }
        }, {
          key: "setStudentId",
          value: function setStudentId(studentId) {
            this.studentId = studentId;
          }
        }, {
          key: "getStudentId",
          value: function getStudentId() {
            return this.studentId;
          }
        }, {
          key: "deleteStudentId",
          value: function deleteStudentId() {
            this.studentId = null;
          }
        }, {
          key: "getStudentName",
          value: function getStudentName() {
            return this.getStudentData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (student) {
              if (student) {
                return student.name;
              }

              return '--';
            }));
          }
        }, {
          key: "addStudent",
          value: function addStudent(student, branchStudent) {
            var data = {
              api: 'newStudent',
              data: {
                student: student,
                branchStudent: branchStudent
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudents",
          value: function getStudents() {
            var data = {
              api: 'getStudents',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudent",
          value: function getStudent(id) {
            var data = {
              api: 'getStudent',
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
          key: "getStudentByImsId",
          value: function getStudentByImsId(studentImsId) {
            var data = {
              api: 'getStudentByImsId',
              data: {
                studentImsId: studentImsId
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "searchStudent",
          value: function searchStudent(studentId) {
            var data = {
              api: 'searchStudent',
              data: {
                studentId: studentId
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getStudentForEditing",
          value: function getStudentForEditing(id) {
            var data = {
              api: 'getStudentForEditing',
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
          key: "changeStudentStatus",
          value: function changeStudentStatus(id, status) {
            var data = {
              api: 'changeStudentStatus',
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
          key: "editStudent",
          value: function editStudent(student) {
            var data = {
              api: 'updateStudent',
              data: student
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteStudent",
          value: function deleteStudent(id) {
            var data = {
              api: 'deleteStudent',
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

        return StudentService;
      }();

      StudentService.ɵfac = function StudentService_Factory(t) {
        return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentService,
        factory: StudentService.ɵfac,
        providedIn: 'root'
      });
      return StudentService;
    }();
    /***/

  },

  /***/
  "./src/app/services/subject.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/subject.service.ts ***!
    \*********************************************/

  /*! exports provided: SubjectService */

  /***/
  function srcAppServicesSubjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectService", function () {
      return SubjectService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");

    var SubjectService =
    /*@__PURE__*/
    function () {
      var SubjectService =
      /*#__PURE__*/
      function () {
        function SubjectService(httpService) {
          _classCallCheck(this, SubjectService);

          this.httpService = httpService;
          this.subjects = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        }

        _createClass(SubjectService, [{
          key: "setSubjectId",
          value: function setSubjectId(subjectId) {
            this.subjectId = subjectId;
          }
        }, {
          key: "getSubjectId",
          value: function getSubjectId() {
            return this.subjectId;
          }
        }, {
          key: "deleteSubjectId",
          value: function deleteSubjectId() {
            this.subjectId = null;
          }
        }, {
          key: "setSubjectsData",
          value: function setSubjectsData(subjects) {
            this.subjects.next(subjects);
          }
        }, {
          key: "getSubjectsData",
          value: function getSubjectsData() {
            return this.subjects;
          }
        }, {
          key: "deleteSubjectsData",
          value: function deleteSubjectsData() {
            this.subjects.next([]);
          }
        }, {
          key: "setSubjectData",
          value: function setSubjectData(subject) {
            this.subject.next(subject);
          }
        }, {
          key: "getSubjectData",
          value: function getSubjectData() {
            return this.subject;
          }
        }, {
          key: "deleteSubjectData",
          value: function deleteSubjectData() {
            this.subject.next(null);
          }
        }]);

        return SubjectService;
      }();

      SubjectService.ɵfac = function SubjectService_Factory(t) {
        return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));
      };

      SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SubjectService,
        factory: SubjectService.ɵfac,
        providedIn: 'root'
      });
      return SubjectService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/numberToWords.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/numberToWords.ts ***!
    \*****************************************/

  /*! exports provided: numberToWords */

  /***/
  function srcAppSharedNumberToWordsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numberToWords", function () {
      return numberToWords;
    });
    /* harmony import */


    var number_to_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! number-to-words */
    "./node_modules/number-to-words/numberToWords.min.js");
    /* harmony import */


    var number_to_words__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! capitalize */
    "./node_modules/capitalize/index.js");
    /* harmony import */


    var capitalize__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(capitalize__WEBPACK_IMPORTED_MODULE_1__);

    function numberToWords(number) {
      var myNumber = +number;
      var numToWords = number_to_words__WEBPACK_IMPORTED_MODULE_0___default.a.toWords(myNumber).replace(',', '').replace('-', ' ').split(' ');
      var arr = new Array();
      numToWords.forEach(function (curNum) {
        arr.push(capitalize__WEBPACK_IMPORTED_MODULE_1___default()(curNum));
      });
      return arr.join(' ');
    }
    /***/

  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
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
      SOCKET_ENDPOINT: '/classMasterSocketConnection'
    };
    /***/
  }
}]);