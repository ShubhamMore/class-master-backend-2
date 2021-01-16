(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17], {
    /***/
    "./src/app/employee/branch/exam/test/batch-test/add-test/add-test-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/employee/branch/exam/test/batch-test/add-test/add-test-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: AddTestRoutingModule */

    /***/
    function srcAppEmployeeBranchExamTestBatchTestAddTestAddTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTestRoutingModule", function () {
        return AddTestRoutingModule;
      });
      /* harmony import */


      var _add_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-test.component */
      "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.component.ts");
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
        component: _add_test_component__WEBPACK_IMPORTED_MODULE_0__["AddTestComponent"]
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

      var AddTestRoutingModule = /*@__PURE__*/function () {
        var AddTestRoutingModule = function AddTestRoutingModule() {
          _classCallCheck(this, AddTestRoutingModule);
        };

        AddTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddTestRoutingModule
        });
        AddTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddTestRoutingModule_Factory(t) {
            return new (t || AddTestRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return AddTestRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/employee/branch/exam/test/batch-test/add-test/add-test.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddTestComponent */

    /***/
    function srcAppEmployeeBranchExamTestBatchTestAddTestAddTestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTestComponent", function () {
        return AddTestComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../services/exam.service */
      "./src/app/services/exam.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["stepper"];

      function AddTestComponent_ng_container_22_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Exam title is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_22_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.examForm.get("examTitle").errors == null ? null : ctx_r1.examForm.get("examTitle").errors.required);
        }
      }

      function AddTestComponent_nb_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", subject_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r10.subject);
        }
      }

      function AddTestComponent_ng_container_31_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Subject is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_31_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.examForm.get("subject").errors == null ? null : ctx_r3.examForm.get("subject").errors.required);
        }
      }

      function AddTestComponent_ng_container_37_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Out of Marks is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_37_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Out of Marks should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_37_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddTestComponent_ng_container_37_p_2_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.examForm.get("outOfMarks").errors == null ? null : ctx_r4.examForm.get("outOfMarks").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.examForm.get("outOfMarks").errors == null ? null : ctx_r4.examForm.get("outOfMarks").errors.min);
        }
      }

      function AddTestComponent_ng_container_43_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passing Marks is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_43_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passing Marks should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_43_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddTestComponent_ng_container_43_p_2_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.examForm.get("passingMarks").errors == null ? null : ctx_r5.examForm.get("passingMarks").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.examForm.get("passingMarks").errors == null ? null : ctx_r5.examForm.get("passingMarks").errors.min);
        }
      }

      function AddTestComponent_ng_container_49_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_49_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.examForm.get("date").errors == null ? null : ctx_r6.examForm.get("date").errors.required);
        }
      }

      function AddTestComponent_ng_container_55_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Time is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_55_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.examForm.get("time").errors == null ? null : ctx_r7.examForm.get("time").errors.required);
        }
      }

      function AddTestComponent_ng_container_61_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Duration is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_61_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Duration should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddTestComponent_ng_container_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddTestComponent_ng_container_61_p_1_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddTestComponent_ng_container_61_p_2_Template, 2, 0, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.examForm.get("duration").errors == null ? null : ctx_r8.examForm.get("duration").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.examForm.get("duration").errors == null ? null : ctx_r8.examForm.get("duration").errors.min);
        }
      }

      var AddTestComponent = /*@__PURE__*/function () {
        var AddTestComponent = /*#__PURE__*/function () {
          function AddTestComponent(branchService, courseService, dateService, batchService, examService, toastrService, router, route) {
            _classCallCheck(this, AddTestComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.dateService = dateService;
            this.batchService = batchService;
            this.examService = examService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
          }

          _createClass(AddTestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.submit = false;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              var mode;
              this.route.queryParams.subscribe(function (param) {
                mode = param.mode;
              });
              this.examId = this.examService.getExamId();

              if (mode && mode !== 'edit') {
                this.showToastr('top-right', 'danger', 'Invalid Route'); // this.router.navigate(['../page-not-found'], { relativeTo: this.route });

                return;
              } else if (mode && !this.examId) {
                this.showToastr('top-right', 'danger', 'Exam Not Found'); // this.router.navigate(['../page-not-found'], { relativeTo: this.route });

                return;
              }

              this.branchService.getCategoryData().subscribe(function (category) {
                _this.category = category;
              });
              this.courseService.getCourseData().subscribe(function (course) {
                _this.course = course;
              });
              this.batchService.getBatchData().subscribe(function (batch) {
                _this.batch = batch;
              });
              this.subjects = [];
              this.batch.subjects.forEach(function (curSubject) {
                var mySubject = _this.course.subjects.find(function (subject) {
                  return subject._id === curSubject.subject;
                });

                _this.subjects.push(mySubject);
              });
              this.examForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                examTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                outOfMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]
                }),
                passingMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]
                }),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                time: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]
                })
              });

              if (mode && this.examId) {
                this.examService.getExam(this.examId).subscribe(function (exam) {
                  _this.exam = exam;

                  _this.examForm.patchValue({
                    examTitle: _this.exam.examTitle,
                    subject: _this.exam.subject,
                    outOfMarks: _this.exam.outOfMarks,
                    passingMarks: _this.exam.passingMarks,
                    date: _this.exam.date,
                    time: _this.exam.time,
                    duration: _this.exam.duration
                  });

                  _this.loading = false;
                }, function (err) {
                  _this.showToastr('top-right', 'danger', err);

                  _this.back();
                });
              } else {
                this.loading = false;
              }
            }
          }, {
            key: "previousStep",
            value: function previousStep() {
              this.stepper.previous();
            }
          }, {
            key: "submitExamForm",
            value: function submitExamForm() {
              this.examForm.markAllAsTouched();

              if (this.examForm.invalid) {
                this.showToastr('top-right', 'danger', 'All Exam Fields are Required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "saveExam",
            value: function saveExam() {
              var _this2 = this;

              this.examForm.markAllAsTouched();

              if (this.examForm.invalid) {
                this.showToastr('top-right', 'danger', 'All Exam Fields are Required');
                return;
              }

              this.submit = true;
              var exam = this.examForm.value;
              exam.branch = this.branchId;
              exam.category = this.category._id;
              exam.course = this.course._id;
              exam.batch = this.batch._id;

              if (!this.exam) {
                this.examService.saveExam(exam).subscribe(function (res) {
                  _this2.showToastr('top-right', 'success', 'New Exam Added Successfully!');

                  _this2.back();
                }, function (error) {
                  _this2.showToastr('top-right', 'danger', error);

                  _this2.submit = false;
                });
              } else {
                exam._id = this.exam._id;
                exam.marks = this.exam.marks;
                this.examService.editExam(exam).subscribe(function (res) {
                  _this2.showToastr('top-right', 'success', 'New Exam Updated Successfully!');

                  _this2.back();
                }, function (error) {
                  _this2.showToastr('top-right', 'danger', error);

                  _this2.submit = false;
                });
              }
            }
          }, {
            key: "getSubject",
            value: function getSubject(subjectId) {
              var subject = this.subjects.find(function (curSubject) {
                return curSubject._id === subjectId;
              });

              if (subject) {
                return subject.subject;
              }

              return '--';
            }
          }, {
            key: "showToastr",
            value: function showToastr(position, status, message) {
              this.toastrService.show(status, message, {
                position: position,
                status: status
              });
            }
          }, {
            key: "back",
            value: function back() {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.examService.deleteExamId();
              this.examService.deleteExamData();
            }
          }]);

          return AddTestComponent;
        }();

        AddTestComponent.ɵfac = function AddTestComponent_Factory(t) {
          return new (t || AddTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
        };

        AddTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AddTestComponent,
          selectors: [["ngx-add-test"]],
          viewQuery: function AddTestComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
          },
          decls: 119,
          vars: 32,
          consts: [[1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-12"], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Exam Details", 3, "stepControl"], [3, "formGroup", "submit"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-exam-title", 1, "label"], ["type", "text", "nbInput", "", "id", "input-exam-title", "name", "title", "formControlName", "examTitle", "placeholder", "Exam Title", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-subject", 1, "label"], ["id", "input-subject", "name", "subject", "formControlName", "subject", "placeholder", "Subject", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-exam-out-of-marks", 1, "label"], ["type", "number", "nbInput", "", "id", "input-exam-out-of-marks", "name", "outOfMarks", "min", "0", "formControlName", "outOfMarks", "placeholder", "Out of Marks", "fullWidth", "", 3, "status"], ["for", "input-exam-passing-marks", 1, "label"], ["type", "number", "nbInput", "", "id", "input-exam-passing-marks", "name", "passingMarks", "min", "0", "formControlName", "passingMarks", "placeholder", "Passing Marks", "fullWidth", "", 3, "status"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "Date", "fullWidth", "", 3, "min", "status"], ["for", "input-time", 1, "label"], ["type", "time", "step", "300", "nbInput", "", "id", "input-time", "name", "time", "formControlName", "time", "placeholder", "Time", "fullWidth", "", 3, "status"], ["for", "input-duration", 1, "label"], ["type", "number", "nbInput", "", "id", "input-duration", "name", "duration", "min", "0", "formControlName", "duration", "placeholder", "Duration (in Min)", "fullWidth", "", 3, "status"], ["type", "submit", "nbButton", "", "size", "small", "status", "basic", 1, "float-right"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "disabled", "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", "nbSpinnerStatus", "primary", "nbSpinnerSize", "small", 3, "disabled", "nbSpinner", "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"]],
          template: function AddTestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTestComponent_Template_button_click_7_listener() {
                return ctx.back();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Back ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-stepper", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nb-step", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddTestComponent_Template_form_submit_15_listener() {
                return ctx.submitExamForm();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Exam Title:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddTestComponent_ng_container_22_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Subject:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nb-select", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nb-option", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select Subject");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddTestComponent_nb_option_30_Template, 2, 2, "nb-option", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddTestComponent_ng_container_31_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Out of Marks:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AddTestComponent_ng_container_37_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Passing Marks:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddTestComponent_ng_container_43_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Date:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AddTestComponent_ng_container_49_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Time:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddTestComponent_ng_container_55_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Duration (in Min):");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddTestComponent_ng_container_61_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Next ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nb-step", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "table", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Exam Title");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Subject");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Out of Marks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Passing Marks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Time");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Duration (in Min)");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTestComponent_Template_button_click_110_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "nb-icon", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddTestComponent_Template_button_click_115_listener() {
                return ctx.saveExam();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Submit");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddTestComponent_Template_form_submit_118_listener() {
                return ctx.saveExam();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.exam ? "Edit" : "Add", " Test");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.examForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.examForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("examTitle").touched ? ctx.examForm.get("examTitle").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("examTitle").invalid && ctx.examForm.get("examTitle").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("subject").touched ? ctx.examForm.get("subject").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subjects);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("subject").invalid && ctx.examForm.get("subject").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("outOfMarks").touched ? ctx.examForm.get("outOfMarks").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("outOfMarks").invalid && ctx.examForm.get("outOfMarks").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("passingMarks").touched ? ctx.examForm.get("passingMarks").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("passingMarks").invalid && ctx.examForm.get("passingMarks").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.exam ? ctx.exam.date : ctx.dateService.getDateString())("status", ctx.examForm.get("date").touched ? ctx.examForm.get("date").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("date").invalid && ctx.examForm.get("date").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("time").touched ? ctx.examForm.get("time").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("time").invalid && ctx.examForm.get("time").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.examForm.get("duration").touched ? ctx.examForm.get("duration").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.examForm.get("duration").invalid && ctx.examForm.get("duration").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.examForm.value.examTitle);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getSubject(ctx.examForm.value.subject));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.examForm.value.outOfMarks);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.examForm.value.passingMarks);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.examForm.value.date));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateService.formatTime(ctx.examForm.value.time));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.examForm.value.duration, " Min");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submit);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submit)("nbSpinner", ctx.submit);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.examForm);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerDirective"]],
          styles: [""]
        });
        return AddTestComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/employee/branch/exam/test/batch-test/add-test/add-test.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddTestModule */

    /***/
    function srcAppEmployeeBranchExamTestBatchTestAddTestAddTestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTestModule", function () {
        return AddTestModule;
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


      var _add_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-test.component */
      "./src/app/employee/branch/exam/test/batch-test/add-test/add-test.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _add_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-test-routing.module */
      "./src/app/employee/branch/exam/test/batch-test/add-test/add-test-routing.module.ts");

      var AddTestModule = /*@__PURE__*/function () {
        var AddTestModule = function AddTestModule() {
          _classCallCheck(this, AddTestModule);
        };

        AddTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: AddTestModule
        });
        AddTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function AddTestModule_Factory(t) {
            return new (t || AddTestModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
        });
        return AddTestModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddTestModule, {
          declarations: [_add_test_component__WEBPACK_IMPORTED_MODULE_2__["AddTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();