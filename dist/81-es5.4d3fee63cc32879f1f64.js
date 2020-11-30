function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81], {
  /***/
  "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test-routing.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test-routing.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: ManageOnlineTestRoutingModule */

  /***/
  function srcAppEmployeeBranchExamOnlineTestManageOnlineTestManageOnlineTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageOnlineTestRoutingModule", function () {
      return ManageOnlineTestRoutingModule;
    });
    /* harmony import */


    var _manage_online_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-online-test.component */
    "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.component.ts");
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
      component: _manage_online_test_component__WEBPACK_IMPORTED_MODULE_0__["ManageOnlineTestComponent"]
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

    var ManageOnlineTestRoutingModule = function ManageOnlineTestRoutingModule() {
      _classCallCheck(this, ManageOnlineTestRoutingModule);
    };

    ManageOnlineTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManageOnlineTestRoutingModule
    });
    ManageOnlineTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ManageOnlineTestRoutingModule_Factory(t) {
        return new (t || ManageOnlineTestRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageOnlineTestRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageOnlineTestRoutingModule, [{
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
  "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ManageOnlineTestComponent */

  /***/
  function srcAppEmployeeBranchExamOnlineTestManageOnlineTestManageOnlineTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageOnlineTestComponent", function () {
      return ManageOnlineTestComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_batch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/batch.service */
    "./src/app/services/batch.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../services/online-exam.service */
    "./src/app/services/online-exam.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManageOnlineTestComponent_nb_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", subject_r6._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subject_r6.subject);
      }
    }

    function ManageOnlineTestComponent_nb_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", year_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](year_r7);
      }
    }

    function ManageOnlineTestComponent_nb_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", month_r8.monthNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](month_r8.month);
      }
    }

    function ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var exam_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          return ctx_r15.onlineExamQuestions(exam_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Question ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var exam_r13 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          return ctx_r17.editOnlineExam(exam_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var exam_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          return ctx_r18.changeOnlineExamStatus(exam_r13._id, !exam_r13.status, i_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var exam_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          return ctx_r19.deleteOnlineExam(exam_r13._id, i_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exam_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r14 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r13.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.dateService.formatDate(exam_r13.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.category.category);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.course.basicDetails.courseName);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", exam_r13.status ? "success" : "danger");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exam_r13.status ? "Inactive" : "Active", " ");
      }
    }

    function ManageOnlineTestComponent_ng_container_32_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Questions");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ManageOnlineTestComponent_ng_container_32_div_1_tr_19_Template, 23, 7, "tr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.onlineExams);
      }
    }

    function ManageOnlineTestComponent_ng_container_32_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No Online Exams Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function ManageOnlineTestComponent_ng_container_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ManageOnlineTestComponent_ng_container_32_div_1_Template, 20, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ManageOnlineTestComponent_ng_container_32_ng_template_2_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.onlineExams.length > 0)("ngIfElse", _r10);
      }
    }

    function ManageOnlineTestComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    var ManageOnlineTestComponent =
    /*#__PURE__*/
    function () {
      function ManageOnlineTestComponent(branchService, courseService, batchService, dateService, toastrService, onlineExamService, router, route) {
        _classCallCheck(this, ManageOnlineTestComponent);

        this.branchService = branchService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.dateService = dateService;
        this.toastrService = toastrService;
        this.onlineExamService = onlineExamService;
        this.router = router;
        this.route = route;
      }

      _createClass(ManageOnlineTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.back();
            return;
          }

          this.onlineExams = [];
          this.branchService.getCategoryData().subscribe(function (category) {
            _this.category = category;
          });
          this.months = this.dateService.getMonths();
          this.years = this.dateService.getYears();
          this.month = (this.dateService.getDate().getMonth() + 1).toString().padStart(2, '0');
          this.year = this.years[this.years.length - 1];
          this.subjects = [];
          this.subject = '';
          this.courseService.getCourseData().subscribe(function (course) {
            _this.course = course;

            _this.batchService.getBatchData().subscribe(function (batch) {
              _this.batch = batch;

              if (course && batch) {
                _this.batch.subjects.forEach(function (curSubject) {
                  var mySubject = _this.course.subjects.find(function (subject) {
                    return subject._id === curSubject.subject;
                  });

                  _this.subjects.push(mySubject);
                });

                _this.searchOnlineExam();
              }
            });
          });
        }
      }, {
        key: "onSelectMonth",
        value: function onSelectMonth(month) {
          this.month = month;
          this.searchOnlineExam();
        }
      }, {
        key: "onSelectYear",
        value: function onSelectYear(year) {
          this.year = year;

          if (year === '') {
            this.month = '';
          }

          this.searchOnlineExam();
        }
      }, {
        key: "onSelectSubject",
        value: function onSelectSubject(subject) {
          this.subject = subject;
          this.searchOnlineExam();
        }
      }, {
        key: "searchOnlineExam",
        value: function searchOnlineExam() {
          var _this2 = this;

          this.loading = true;
          this.onlineExamService.getOnlineExams(this.branchId, this.category._id, this.course._id, this.batch._id, this.subject, this.month, this.year).subscribe(function (onlineExams) {
            _this2.onlineExams = onlineExams;
            _this2.loading = false;
          }, function (error) {
            _this2.loading = false;
          });
        }
      }, {
        key: "addOnlineExam",
        value: function addOnlineExam() {
          this.router.navigate(['../add'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "editOnlineExam",
        value: function editOnlineExam(onlineExam) {
          this.onlineExamService.setOnlineExamId(onlineExam._id);
          this.onlineExamService.setOnlineExamData(onlineExam);
          this.router.navigate(['../edit'], {
            relativeTo: this.route,
            queryParams: {
              mode: 'edit'
            }
          });
        }
      }, {
        key: "onlineExamQuestions",
        value: function onlineExamQuestions(onlineExam) {
          this.onlineExamService.setOnlineExamId(onlineExam._id);
          this.onlineExamService.setOnlineExamData(onlineExam);
          this.router.navigate(['../question'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "changeOnlineExamStatus",
        value: function changeOnlineExamStatus(id, status, i) {
          var _this3 = this;

          this.loading = true;
          this.onlineExamService.changeOnlineExamStatus(id, status).subscribe(function (res) {
            _this3.onlineExams[i].status = status;
            _this3.loading = false;
          }, function (error) {
            _this3.showToastr('top-right', 'danger', error);

            _this3.loading = false;
          });
        }
      }, {
        key: "deleteOnlineExam",
        value: function deleteOnlineExam(id, i) {
          var _this4 = this;

          this.loading = true;
          this.onlineExamService.deleteOnlineExam(id).subscribe(function (res) {
            _this4.onlineExams.splice(i, 1);

            _this4.loading = false;
          }, function (error) {
            _this4.loading = false;
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
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }]);

      return ManageOnlineTestComponent;
    }();

    ManageOnlineTestComponent.ɵfac = function ManageOnlineTestComponent_Factory(t) {
      return new (t || ManageOnlineTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    ManageOnlineTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ManageOnlineTestComponent,
      selectors: [["ngx-manage-online-test"]],
      decls: 35,
      vars: 8,
      consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "plus-circle-outline"], ["id", "select-subject", "name", "subject", "fullWidth", "", "placeholder", "All Subjects", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-year", "name", "year", "fullWidth", "", "placeholder", "All Years", 3, "selected", "selectedChange"], ["id", "select-month", "name", "month", "fullWidth", "", "placeholder", "All Months", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBatches", ""], [1, "table-responsive"], [1, "table"], ["colspan", "3"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbButton", "", "size", "small", 3, "status", "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
      template: function ManageOnlineTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Online Exams");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageOnlineTestComponent_Template_button_click_7_listener() {
            return ctx.addOnlineExam();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Online Exam ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "nb-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nb-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function ManageOnlineTestComponent_Template_nb_select_selectedChange_15_listener($event) {
            return ctx.onSelectSubject($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "All Subjects");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ManageOnlineTestComponent_nb_option_18_Template, 2, 2, "nb-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nb-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function ManageOnlineTestComponent_Template_nb_select_selectedChange_20_listener($event) {
            return ctx.onSelectYear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "All Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ManageOnlineTestComponent_nb_option_23_Template, 2, 2, "nb-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nb-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function ManageOnlineTestComponent_Template_nb_select_selectedChange_25_listener($event) {
            return ctx.onSelectMonth($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "All Months");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ManageOnlineTestComponent_nb_option_28_Template, 2, 2, "nb-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nb-card-body", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ManageOnlineTestComponent_ng_container_32_Template, 4, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ManageOnlineTestComponent_ng_template_33_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.subject);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.subjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.years);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", ctx.month);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ManageOnlineTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'ngx-manage-online-test',
          templateUrl: './manage-online-test.component.html',
          styleUrls: ['./manage-online-test.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]
        }, {
          type: _services_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]
        }, {
          type: _services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__["OnlineExamService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ManageOnlineTestModule */

  /***/
  function srcAppEmployeeBranchExamOnlineTestManageOnlineTestManageOnlineTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageOnlineTestModule", function () {
      return ManageOnlineTestModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _manage_online_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manage-online-test.component */
    "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _manage_online_test_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manage-online-test-routing.module */
    "./src/app/employee/branch/exam/online-test/manage-online-test/manage-online-test-routing.module.ts");

    var ManageOnlineTestModule = function ManageOnlineTestModule() {
      _classCallCheck(this, ManageOnlineTestModule);
    };

    ManageOnlineTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ManageOnlineTestModule
    });
    ManageOnlineTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ManageOnlineTestModule_Factory(t) {
        return new (t || ManageOnlineTestModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_online_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageOnlineTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageOnlineTestModule, {
        declarations: [_manage_online_test_component__WEBPACK_IMPORTED_MODULE_1__["ManageOnlineTestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_online_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageOnlineTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ManageOnlineTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_manage_online_test_component__WEBPACK_IMPORTED_MODULE_1__["ManageOnlineTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_online_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageOnlineTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);