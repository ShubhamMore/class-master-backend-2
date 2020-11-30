function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122], {
  /***/
  "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance-routing.module.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance-routing.module.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: StudentCourseAttendanceRoutingModule */

  /***/
  function srcAppEmployeeBranchStudentStudentCourseStudentCourseAttendanceStudentCourseAttendanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseAttendanceRoutingModule", function () {
      return StudentCourseAttendanceRoutingModule;
    });
    /* harmony import */


    var _student_course_attendance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./student-course-attendance.component */
    "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.component.ts");
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
      component: _student_course_attendance_component__WEBPACK_IMPORTED_MODULE_0__["StudentCourseAttendanceComponent"]
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var StudentCourseAttendanceRoutingModule = function StudentCourseAttendanceRoutingModule() {
      _classCallCheck(this, StudentCourseAttendanceRoutingModule);
    };

    StudentCourseAttendanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StudentCourseAttendanceRoutingModule
    });
    StudentCourseAttendanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function StudentCourseAttendanceRoutingModule_Factory(t) {
        return new (t || StudentCourseAttendanceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentCourseAttendanceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentCourseAttendanceRoutingModule, [{
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
  "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: StudentCourseAttendanceComponent */

  /***/
  function srcAppEmployeeBranchStudentStudentCourseStudentCourseAttendanceStudentCourseAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseAttendanceComponent", function () {
      return StudentCourseAttendanceComponent;
    });
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _services_attendance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/attendance.service */
    "./src/app/services/attendance.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_student_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../services/student-course.service */
    "./src/app/services/student-course.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentCourseAttendanceComponent_nb_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", subject_r6._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](subject_r6.subject);
      }
    }

    function StudentCourseAttendanceComponent_nb_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", year_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](year_r7);
      }
    }

    function StudentCourseAttendanceComponent_nb_option_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", month_r8.monthNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](month_r8.month);
      }
    }

    function StudentCourseAttendanceComponent_ng_container_55_div_1_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var atten_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r14 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r12.dateService.formatDate(atten_r13.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](atten_r13.subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](atten_r13.topic);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", atten_r13.attendance ? "present" : "absent");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](atten_r13.attendance ? "Present" : "Absent");
      }
    }

    function StudentCourseAttendanceComponent_ng_container_55_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Topic");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Attendance");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StudentCourseAttendanceComponent_ng_container_55_div_1_tr_15_Template, 12, 6, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r9.attendance);
      }
    }

    function StudentCourseAttendanceComponent_ng_container_55_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "No Attendance Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
    }

    function StudentCourseAttendanceComponent_ng_container_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StudentCourseAttendanceComponent_ng_container_55_div_1_Template, 16, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StudentCourseAttendanceComponent_ng_container_55_ng_template_2_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.attendance.length > 0)("ngIfElse", _r10);
      }
    }

    function StudentCourseAttendanceComponent_ng_template_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
    }

    var StudentCourseAttendanceComponent =
    /*#__PURE__*/
    function () {
      function StudentCourseAttendanceComponent(dateService, branchService, batchService, toastrService, studentService, studentCourseService, attendanceService, router, route) {
        _classCallCheck(this, StudentCourseAttendanceComponent);

        this.dateService = dateService;
        this.branchService = branchService;
        this.batchService = batchService;
        this.toastrService = toastrService;
        this.studentService = studentService;
        this.studentCourseService = studentCourseService;
        this.attendanceService = attendanceService;
        this.router = router;
        this.route = route;
      }

      _createClass(StudentCourseAttendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();
          this.categoryId = this.branchService.getCategoryId();
          this.studentCourseId = this.studentCourseService.getStudentCourseId();
          this.studentId = this.studentService.getStudentId();

          if (!this.branchId || !this.categoryId || !this.studentCourseId || !this.studentId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          this.studentCourseService.getStudentCourseData().subscribe(function (studentCourse) {
            _this.studentCourse = studentCourse;
          });

          if (!this.studentCourse) {
            this.showToastr('top-right', 'danger', 'Student Course Not Found');
            this.back();
            return;
          }

          this.attendance = [];
          this.subjects = [];
          this.subject = '';
          this.months = this.dateService.getMonths();
          this.years = this.dateService.getYears();
          this.month = (this.dateService.getDate().getMonth() + 1).toString().padStart(2, '0');
          this.year = this.years[this.years.length - 1];
          this.totalLectures = 0;
          this.totalPresent = 0;
          this.totalAbsent = 0;
          this.attendancePercentage = '--';
          this.batchService.getBatchSubjects(this.studentCourse.course, this.studentCourse.batch).subscribe(function (subjects) {
            _this.subjects = subjects;

            _this.getStudentCourseAttendance();
          }, function (error) {
            _this.showToastr('top-right', 'danger', error);

            _this.back();
          });
        }
      }, {
        key: "onSelectMonth",
        value: function onSelectMonth(month) {
          this.month = month;
          this.getStudentCourseAttendance();
        }
      }, {
        key: "onSelectYear",
        value: function onSelectYear(year) {
          this.year = year;

          if (year === '') {
            this.month = '';
          }

          this.getStudentCourseAttendance();
        }
      }, {
        key: "onSelectSubject",
        value: function onSelectSubject(subject) {
          this.subject = subject;
          this.getStudentCourseAttendance();
        }
      }, {
        key: "getStudentCourseAttendance",
        value: function getStudentCourseAttendance() {
          var _this2 = this;

          this.loading = true;
          this.attendanceService.getStudentCourseAttendance(this.subject, this.month, this.year, this.studentId, this.studentCourseId).subscribe(function (attendance) {
            _this2.attendance = attendance;

            _this2.calculateAttendance(attendance.length);

            _this2.loading = false;
          }, function (error) {
            _this2.showToastr('top-right', 'danger', error);

            _this2.back();
          });
        }
      }, {
        key: "calculateAttendance",
        value: function calculateAttendance(totalLectures) {
          var totalPresent = 0;
          var totalAbsent = 0;
          this.attendance.forEach(function (atten) {
            if (atten.attendance) {
              totalPresent++;
            } else {
              totalAbsent++;
            }
          });
          this.totalLectures = totalLectures;
          this.totalPresent = totalPresent;
          this.totalAbsent = totalAbsent;
          var attendancePercentage;

          if (totalLectures > 0) {
            attendancePercentage = totalPresent * 100 / totalLectures;
          }

          if (attendancePercentage) {
            this.attendancePercentage = attendancePercentage.toFixed(2).toString() + '%';
          } else {
            this.attendancePercentage = '--';
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "showToastr",
        value: function showToastr(position, status, message) {
          this.toastrService.show(status, message, {
            position: position,
            status: status
          });
        }
      }]);

      return StudentCourseAttendanceComponent;
    }();

    StudentCourseAttendanceComponent.ɵfac = function StudentCourseAttendanceComponent_Factory(t) {
      return new (t || StudentCourseAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_0__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_attendance_service__WEBPACK_IMPORTED_MODULE_1__["AttendanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    StudentCourseAttendanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: StudentCourseAttendanceComponent,
      selectors: [["ngx-student-course-attendance"]],
      decls: 58,
      vars: 12,
      consts: [[1, "row"], [1, "col-md-12"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-md-3", "col-sm-4"], ["id", "select-subject", "name", "subject", "fullWidth", "", "placeholder", "All Subjects", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-year", "name", "year", "fullWidth", "", "placeholder", "All Years", 3, "selected", "selectedChange"], ["id", "select-month", "name", "month", "fullWidth", "", "placeholder", "All Months", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-10", "col-12", "mx-auto"], [1, "col-md-6", "col-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noAttendance", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "text-center", "pt-5", "pb-5"]],
      template: function StudentCourseAttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StudentCourseAttendanceComponent_Template_button_click_4_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Attendance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "nb-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function StudentCourseAttendanceComponent_Template_nb_select_selectedChange_13_listener($event) {
            return ctx.onSelectSubject($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "All Subjects");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StudentCourseAttendanceComponent_nb_option_16_Template, 2, 2, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "nb-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function StudentCourseAttendanceComponent_Template_nb_select_selectedChange_18_listener($event) {
            return ctx.onSelectYear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "All Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, StudentCourseAttendanceComponent_nb_option_21_Template, 2, 2, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "nb-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function StudentCourseAttendanceComponent_Template_nb_select_selectedChange_23_listener($event) {
            return ctx.onSelectMonth($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "All Months");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, StudentCourseAttendanceComponent_nb_option_26_Template, 2, 2, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "nb-card-body", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Total Lectures: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Attendance Percentage: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Total Present: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Total Absent: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, StudentCourseAttendanceComponent_ng_container_55_Template, 4, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, StudentCourseAttendanceComponent_ng_template_56_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.subjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.years);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx.month);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.totalLectures);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.attendancePercentage);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.totalPresent);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.totalAbsent);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      styles: [".present[_ngcontent-%COMP%] {\n  color: #00d68f;\n}\n\n.absent[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](StudentCourseAttendanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
        args: [{
          selector: 'ngx-student-course-attendance',
          templateUrl: './student-course-attendance.component.html',
          styleUrls: ['./student-course-attendance.component.scss']
        }]
      }], function () {
        return [{
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }, {
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]
        }, {
          type: _services_batch_service__WEBPACK_IMPORTED_MODULE_0__["BatchService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]
        }, {
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
        }, {
          type: _services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"]
        }, {
          type: _services_attendance_service__WEBPACK_IMPORTED_MODULE_1__["AttendanceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.module.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.module.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: StudentCourseAttendanceModule */

  /***/
  function srcAppEmployeeBranchStudentStudentCourseStudentCourseAttendanceStudentCourseAttendanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseAttendanceModule", function () {
      return StudentCourseAttendanceModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _student_course_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-course-attendance-routing.module */
    "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance-routing.module.ts");
    /* harmony import */


    var _student_course_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-course-attendance.component */
    "./src/app/employee/branch/student/student-course/student-course-attendance/student-course-attendance.component.ts");

    var StudentCourseAttendanceModule = function StudentCourseAttendanceModule() {
      _classCallCheck(this, StudentCourseAttendanceModule);
    };

    StudentCourseAttendanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StudentCourseAttendanceModule
    });
    StudentCourseAttendanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function StudentCourseAttendanceModule_Factory(t) {
        return new (t || StudentCourseAttendanceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _student_course_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseAttendanceRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentCourseAttendanceModule, {
        declarations: [_student_course_attendance_component__WEBPACK_IMPORTED_MODULE_4__["StudentCourseAttendanceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _student_course_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseAttendanceRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentCourseAttendanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_student_course_attendance_component__WEBPACK_IMPORTED_MODULE_4__["StudentCourseAttendanceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _student_course_attendance_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseAttendanceRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);