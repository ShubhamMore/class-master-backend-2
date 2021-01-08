(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[164], {
    /***/
    "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test-routing.module.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ManageBatchTestRoutingModule */

    /***/
    function srcAppInstituteBranchExamTestBatchTestManageBatchTestManageBatchTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBatchTestRoutingModule", function () {
        return ManageBatchTestRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _manage_batch_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-batch-test.component */
      "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.component.ts");

      var routes = [{
        path: '',
        component: _manage_batch_test_component__WEBPACK_IMPORTED_MODULE_2__["ManageBatchTestComponent"]
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

      var ManageBatchTestRoutingModule = /*@__PURE__*/function () {
        var ManageBatchTestRoutingModule = function ManageBatchTestRoutingModule() {
          _classCallCheck(this, ManageBatchTestRoutingModule);
        };

        ManageBatchTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ManageBatchTestRoutingModule
        });
        ManageBatchTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ManageBatchTestRoutingModule_Factory(t) {
            return new (t || ManageBatchTestRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return ManageBatchTestRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManageBatchTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ManageBatchTestComponent */

    /***/
    function srcAppInstituteBranchExamTestBatchTestManageBatchTestManageBatchTestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBatchTestComponent", function () {
        return ManageBatchTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../../services/exam.service */
      "./src/app/services/exam.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ManageBatchTestComponent_nb_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r6._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r6.subject);
        }
      }

      function ManageBatchTestComponent_nb_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var year_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r7);
        }
      }

      function ManageBatchTestComponent_nb_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var month_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", month_r8.monthNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r8.month);
        }
      }

      function ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var exam_r13 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.editExam(exam_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var exam_r13 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r17.addExamScore(exam_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Score ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var exam_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r18.changeExamStatus(exam_r13._id, !exam_r13.status, i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var exam_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r19.deleteExam(exam_r13._id, i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exam_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r13.examTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.dateService.formatDate(exam_r13.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.category.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.course.basicDetails.courseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", exam_r13.status ? "success" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exam_r13.status ? "Inactive" : "Active", " ");
        }
      }

      function ManageBatchTestComponent_ng_container_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageBatchTestComponent_ng_container_32_div_1_tr_17_Template, 23, 7, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.exams);
        }
      }

      function ManageBatchTestComponent_ng_container_32_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Exams Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManageBatchTestComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageBatchTestComponent_ng_container_32_div_1_Template, 18, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageBatchTestComponent_ng_container_32_ng_template_2_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.exams.length > 0)("ngIfElse", _r10);
        }
      }

      function ManageBatchTestComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ManageBatchTestComponent = /*@__PURE__*/function () {
        var ManageBatchTestComponent = /*#__PURE__*/function () {
          function ManageBatchTestComponent(branchService, courseService, batchService, toastrService, dateService, examService, router, route) {
            _classCallCheck(this, ManageBatchTestComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.toastrService = toastrService;
            this.dateService = dateService;
            this.examService = examService;
            this.router = router;
            this.route = route;
          }

          _createClass(ManageBatchTestComponent, [{
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
              this.subject = '';
              this.batch.subjects.forEach(function (curSubject) {
                var mySubject = _this.course.subjects.find(function (subject) {
                  return subject._id === curSubject.subject;
                });

                _this.subjects.push(mySubject);
              });
              this.months = this.dateService.getMonths();
              this.years = this.dateService.getYears();
              this.month = (this.dateService.getDate().getMonth() + 1).toString().padStart(2, '0');
              this.year = this.years[this.years.length - 1];
              this.getExams();
            }
          }, {
            key: "onSelectMonth",
            value: function onSelectMonth(month) {
              this.month = month;
              this.getExams();
            }
          }, {
            key: "onSelectYear",
            value: function onSelectYear(year) {
              this.year = year;

              if (year === '') {
                this.month = '';
              }

              this.getExams();
            }
          }, {
            key: "onSelectSubject",
            value: function onSelectSubject(subject) {
              this.subject = subject;
              this.getExams();
            }
          }, {
            key: "getExams",
            value: function getExams() {
              var _this2 = this;

              this.loading = true;
              this.examService.getExams(this.branchId, this.category._id, this.course._id, this.batch._id, this.subject, this.month, this.year).subscribe(function (exams) {
                _this2.exams = exams;
                _this2.loading = false;
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
          }, {
            key: "addExam",
            value: function addExam() {
              this.router.navigate(['../add'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "addExamScore",
            value: function addExamScore(exam) {
              this.examService.setExamData(exam);
              this.router.navigate(['../score'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "editExam",
            value: function editExam(exam) {
              this.examService.setExamId(exam._id);
              this.examService.setExamData(exam);
              this.router.navigate(['../edit'], {
                relativeTo: this.route,
                queryParams: {
                  mode: 'edit'
                }
              });
            }
          }, {
            key: "deleteExam",
            value: function deleteExam(exam, i) {
              var _this3 = this;

              this.loading = true;
              this.examService.deleteExam(exam).subscribe(function (res) {
                _this3.exams.splice(i, 1);

                _this3.loading = false;
              }, function (error) {
                _this3.showToastr('top-right', 'danger', error);

                _this3.loading = false;
              });
            }
          }, {
            key: "changeExamStatus",
            value: function changeExamStatus(exam, status, i) {// this.loading = true
              // this.examService.changeExamStatus(exam, status).subscribe(
              //   (res: any) => {
              //     this.exams[i].status = status;
              //     this.loading = false
              //   },
              //   (error: any) => {
              //     this.showToastr('top-right', 'danger', error);
              //     this.loading = false;
              //   },
              // );
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

          return ManageBatchTestComponent;
        }();

        ManageBatchTestComponent.ɵfac = function ManageBatchTestComponent_Factory(t) {
          return new (t || ManageBatchTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
        };

        ManageBatchTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ManageBatchTestComponent,
          selectors: [["ngx-manage-batch-test"]],
          decls: 35,
          vars: 8,
          consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "plus-circle-outline"], ["id", "select-subject", "name", "subject", "fullWidth", "", "placeholder", "All Subjects", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-year", "name", "year", "fullWidth", "", "placeholder", "All Years", 3, "selected", "selectedChange"], ["id", "select-month", "name", "month", "fullWidth", "", "placeholder", "All Months", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBatches", ""], [1, "table-responsive"], [1, "table"], ["colspan", "4"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["nbButton", "", "size", "small", "status", "warning", 3, "click"], ["nbButton", "", "size", "small", 3, "status", "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
          template: function ManageBatchTestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Classroom Exams");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageBatchTestComponent_Template_button_click_7_listener() {
                return ctx.addExam();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Exam ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-icon", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-select", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageBatchTestComponent_Template_nb_select_selectedChange_15_listener($event) {
                return ctx.onSelectSubject($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "All Subjects");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageBatchTestComponent_nb_option_18_Template, 2, 2, "nb-option", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-select", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageBatchTestComponent_Template_nb_select_selectedChange_20_listener($event) {
                return ctx.onSelectYear($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "All Years");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManageBatchTestComponent_nb_option_23_Template, 2, 2, "nb-option", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-select", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageBatchTestComponent_Template_nb_select_selectedChange_25_listener($event) {
                return ctx.onSelectMonth($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-option", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "All Months");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ManageBatchTestComponent_nb_option_28_Template, 2, 2, "nb-option", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-body", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ManageBatchTestComponent_ng_container_32_Template, 4, 2, "ng-container", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ManageBatchTestComponent_ng_template_33_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.subject);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.year);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.month);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
          styles: [""]
        });
        return ManageBatchTestComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.module.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ManageBatchTestModule */

    /***/
    function srcAppInstituteBranchExamTestBatchTestManageBatchTestManageBatchTestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageBatchTestModule", function () {
        return ManageBatchTestModule;
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


      var _manage_batch_test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-batch-test-routing.module */
      "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test-routing.module.ts");
      /* harmony import */


      var _manage_batch_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./manage-batch-test.component */
      "./src/app/institute/branch/exam/test/batch-test/manage-batch-test/manage-batch-test.component.ts");

      var ManageBatchTestModule = /*@__PURE__*/function () {
        var ManageBatchTestModule = function ManageBatchTestModule() {
          _classCallCheck(this, ManageBatchTestModule);
        };

        ManageBatchTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageBatchTestModule
        });
        ManageBatchTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageBatchTestModule_Factory(t) {
            return new (t || ManageBatchTestModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_batch_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageBatchTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]]
        });
        return ManageBatchTestModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageBatchTestModule, {
          declarations: [_manage_batch_test_component__WEBPACK_IMPORTED_MODULE_4__["ManageBatchTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_batch_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageBatchTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
        });
      })();
      /***/

    }
  }]);
})();