function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158], {
  /***/
  "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score-routing.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score-routing.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: AddTestScoreRoutingModule */

  /***/
  function srcAppInstituteBranchExamTestBatchTestAddTestScoreAddTestScoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTestScoreRoutingModule", function () {
      return AddTestScoreRoutingModule;
    });
    /* harmony import */


    var _add_test_score_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-test-score.component */
    "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.component.ts");
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
      component: _add_test_score_component__WEBPACK_IMPORTED_MODULE_0__["AddTestScoreComponent"]
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../../../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var AddTestScoreRoutingModule = function AddTestScoreRoutingModule() {
      _classCallCheck(this, AddTestScoreRoutingModule);
    };

    AddTestScoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AddTestScoreRoutingModule
    });
    AddTestScoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AddTestScoreRoutingModule_Factory(t) {
        return new (t || AddTestScoreRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddTestScoreRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddTestScoreRoutingModule, [{
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
  "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AddTestScoreComponent */

  /***/
  function srcAppInstituteBranchExamTestBatchTestAddTestScoreAddTestScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTestScoreComponent", function () {
      return AddTestScoreComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../../services/exam.service */
    "./src/app/services/exam.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var studentScore_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Enter valid Marks of ", studentScore_r6.value.name, " ");
      }
    }

    function AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum marks should be 0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Maximum marks should be ", ctx_r11.exam.outOfMarks, " ");
      }
    }

    function AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_1_Template, 2, 1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_2_Template, 2, 0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_p_3_Template, 2, 1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var studentScore_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", studentScore_r6.get("marks").errors == null ? null : studentScore_r6.get("marks").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", studentScore_r6.get("marks").errors == null ? null : studentScore_r6.get("marks").errors.min);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", studentScore_r6.get("marks").errors == null ? null : studentScore_r6.get("marks").errors.max);
      }
    }

    function AddTestScoreComponent_ng_container_54_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AddTestScoreComponent_ng_container_54_ng_container_15_ng_container_9_Template, 4, 3, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var studentScore_r6 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", studentScore_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](studentScore_r6.value.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](studentScore_r6.value.rollNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "Marks of ", studentScore_r6.value.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", studentScore_r6.student)("name", studentScore_r6.student)("max", ctx_r5.exam.outOfMarks)("status", studentScore_r6.get("marks").touched ? studentScore_r6.get("marks").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", studentScore_r6.get("marks").invalid && studentScore_r6.get("marks").touched);
      }
    }

    function AddTestScoreComponent_ng_container_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function AddTestScoreComponent_ng_container_54_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r14.saveMarks();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Student Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Roll Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Marks");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AddTestScoreComponent_ng_container_54_ng_container_15_Template, 10, 9, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.examMarksForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.examMarksForm.get("marks")["controls"]);
      }
    }

    function AddTestScoreComponent_ng_template_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Students Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function AddTestScoreComponent_ng_template_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " No Students Found ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    var AddTestScoreComponent =
    /*#__PURE__*/
    function () {
      function AddTestScoreComponent(branchService, toastrService, courseService, batchService, router, examService, dateService, route) {
        _classCallCheck(this, AddTestScoreComponent);

        this.branchService = branchService;
        this.toastrService = toastrService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.router = router;
        this.examService = examService;
        this.dateService = dateService;
        this.route = route;
      }

      _createClass(AddTestScoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.back();
            return;
          }

          this.examService.getExamData().subscribe(function (exam) {
            _this.exam = exam;
          });

          if (!this.exam) {
            this.showToastr('top-right', 'danger', 'Exam Not Found');
            this.back();
            return;
          }

          this.examMarksForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
          });
          this.branchService.getCategoryData().subscribe(function (category) {
            _this.category = category;
          });
          this.courseService.getCourseData().subscribe(function (course) {
            _this.course = course;
          });
          this.batchService.getBatchData().subscribe(function (batch) {
            _this.batch = batch;
          });
          this.getStudents();
        }
      }, {
        key: "getStudents",
        value: function getStudents() {
          var _this2 = this;

          this.loading = true;
          this.examService.getStudentsForExam(this.exam._id).subscribe(function (students) {
            students.map(function (student) {
              return student.marks = student.marks ? student.marks : 0;
            });

            var examScore = _this2.getStudentsScore();

            examScore.controls = [];
            students.forEach(function (student) {
              _this2.addStudentScore(student);
            });
            _this2.loading = false;
          }, function (error) {
            _this2.showToastr('top-right', 'danger', error);

            _this2.loading = false;
          });
        }
      }, {
        key: "getStudentsScore",
        value: function getStudentsScore() {
          return this.examMarksForm.get('marks');
        }
      }, {
        key: "addStudentScore",
        value: function addStudentScore(student) {
          var examScore = this.getStudentsScore();
          examScore.push(this.newStudentScore(student));
        }
      }, {
        key: "newStudentScore",
        value: function newStudentScore(student) {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](student.name, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            student: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](student.student, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            rollNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](student.rollNumber, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](student.marks ? student.marks : 0, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(this.exam.outOfMarks)]
            })
          });
        }
      }, {
        key: "isNumber",
        value: function isNumber(number) {
          return Number.isInteger(number);
        }
      }, {
        key: "saveMarks",
        value: function saveMarks() {
          var _this3 = this;

          this.examMarksForm.markAllAsTouched();

          if (this.examMarksForm.invalid) {
            this.showToastr('top-right', 'danger', 'Enter Valid Marks for All Students');
            return;
          }

          var studentScore = this.examMarksForm.value.marks;
          this.examService.saveStudentsMarks(this.exam._id, studentScore).subscribe(function (res) {
            _this3.showToastr('top-right', 'success', "Exam Marks Updated Successfully");

            _this3.back();
          }, function (error) {
            _this3.showToastr('top-right', 'danger', error);
          });
        }
      }, {
        key: "getSubject",
        value: function getSubject(subject) {
          var mySubject = this.course.subjects.find(function (curSubject) {
            return curSubject._id === subject;
          });

          if (!mySubject) {
            return '--';
          }

          return mySubject.subject;
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../manage'], {
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

      return AddTestScoreComponent;
    }();

    AddTestScoreComponent.ɵfac = function AddTestScoreComponent_Factory(t) {
      return new (t || AddTestScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    AddTestScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddTestScoreComponent,
      selectors: [["ngx-add-test-score"]],
      decls: 59,
      vars: 10,
      consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-md-6", "col-12"], [4, "ngIf", "ngIfElse"], ["noStudents", ""], ["noStudentMarks", ""], [1, "", 3, "formGroup", "submit"], [1, "col-12"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-12", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "primary"], [3, "formGroup"], [1, "form-control-group"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "marks", "min", "0", 1, "input-marks", 3, "id", "name", "placeholder", "max", "status"], [4, "ngIf"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "text-center", "pt-5", "pb-5"], [1, "text-center", "mt-5", "mb-5"]],
      template: function AddTestScoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Exam Score");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddTestScoreComponent_Template_button_click_7_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Exam Title: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Duration: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Category: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Course: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Batch: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Subject: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, AddTestScoreComponent_ng_container_54_Template, 21, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AddTestScoreComponent_ng_template_55_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, AddTestScoreComponent_ng_template_57_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.exam.examTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.exam.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.dateService.formatTime(ctx.exam.time));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.exam.duration, " Min");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.category.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.course.basicDetails.courseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.batch.basicDetails.batchName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getSubject(ctx.exam.subject));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.examMarksForm.get("marks")["controls"].length > 0)("ngIfElse", _r1);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AddTestScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
          selector: 'ngx-add-test-score',
          templateUrl: './add-test-score.component.html',
          styleUrls: ['./add-test-score.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]
        }, {
          type: _services_batch_service__WEBPACK_IMPORTED_MODULE_1__["BatchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: AddTestScoreModule */

  /***/
  function srcAppInstituteBranchExamTestBatchTestAddTestScoreAddTestScoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTestScoreModule", function () {
      return AddTestScoreModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _add_test_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-test-score.component */
    "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_test_score_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-test-score-routing.module */
    "./src/app/institute/branch/exam/test/batch-test/add-test-score/add-test-score-routing.module.ts");

    var AddTestScoreModule = function AddTestScoreModule() {
      _classCallCheck(this, AddTestScoreModule);
    };

    AddTestScoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AddTestScoreModule
    });
    AddTestScoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AddTestScoreModule_Factory(t) {
        return new (t || AddTestScoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_test_score_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTestScoreRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddTestScoreModule, {
        declarations: [_add_test_score_component__WEBPACK_IMPORTED_MODULE_2__["AddTestScoreComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_test_score_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTestScoreRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AddTestScoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_add_test_score_component__WEBPACK_IMPORTED_MODULE_2__["AddTestScoreComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_test_score_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTestScoreRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);