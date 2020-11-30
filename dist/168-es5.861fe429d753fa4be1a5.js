function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[168], {
  /***/
  "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers-routing.module.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers-routing.module.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: ViewQuestionAnswersRoutingModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersViewQuestionAnswersViewQuestionAnswersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewQuestionAnswersRoutingModule", function () {
      return ViewQuestionAnswersRoutingModule;
    });
    /* harmony import */


    var _view_question_answers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-question-answers.component */
    "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.component.ts");
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
      component: _view_question_answers_component__WEBPACK_IMPORTED_MODULE_0__["ViewQuestionAnswersComponent"]
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
      redirectTo: 'page-not-found'
    }];

    var ViewQuestionAnswersRoutingModule = function ViewQuestionAnswersRoutingModule() {
      _classCallCheck(this, ViewQuestionAnswersRoutingModule);
    };

    ViewQuestionAnswersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewQuestionAnswersRoutingModule
    });
    ViewQuestionAnswersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewQuestionAnswersRoutingModule_Factory(t) {
        return new (t || ViewQuestionAnswersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewQuestionAnswersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewQuestionAnswersRoutingModule, [{
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
  "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: ViewQuestionAnswersComponent */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersViewQuestionAnswersViewQuestionAnswersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewQuestionAnswersComponent", function () {
      return ViewQuestionAnswersComponent;
    });
    /* harmony import */


    var _add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../add-question-answers/add-question/add-question.component */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts");
    /* harmony import */


    var _add_question_answers_add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../add-question-answers/add-answer/add-answer.component */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../services/question-answers.service */
    "./src/app/services/question-answers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_lecture_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../../services/lecture.service */
    "./src/app/services/lecture.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewQuestionAnswersComponent_ng_container_9_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_ng_container_9_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          return ctx_r8.editQuestion(ctx_r8.lectureQuestion);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_ng_container_9_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

          return ctx_r10.deleteQuestion(ctx_r10.lectureQuestion._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);

          var lectureQuestionAnswer_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          return ctx_r17.editQuestionAnswer(lectureQuestionAnswer_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);

          var lectureQuestionAnswer_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          return ctx_r20.deleteQuestionAnswer(lectureQuestionAnswer_r13._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "nb-user", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_6_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_button_7_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lectureQuestionAnswer_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", lectureQuestionAnswer_r13.name ? lectureQuestionAnswer_r13.name : "Unknown")("title", ctx_r12.formatQuestionAnswerDate(lectureQuestionAnswer_r13.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", lectureQuestionAnswer_r13.createdBy === ctx_r12.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", lectureQuestionAnswer_r13.createdBy === ctx_r12.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", lectureQuestionAnswer_r13.answer, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ViewQuestionAnswersComponent_ng_container_9_div_15_nb_card_3_Template, 10, 5, "nb-card", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r5.lectureQuestion.answers);
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " You are first to Answer this Question.. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    function ViewQuestionAnswersComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "nb-user", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_ng_container_9_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          return ctx_r23.addQuestionAnswer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Answer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ViewQuestionAnswersComponent_ng_container_9_button_11_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, ViewQuestionAnswersComponent_ng_container_9_button_12_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ViewQuestionAnswersComponent_ng_container_9_div_15_Template, 4, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, ViewQuestionAnswersComponent_ng_container_9_ng_template_16_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", ctx_r0.lectureQuestion.name ? ctx_r0.lectureQuestion.name : "Unknown")("title", ctx_r0.formatQuestionAnswerDate(ctx_r0.lectureQuestion.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.lectureQuestion.createdBy === ctx_r0.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.lectureQuestion.createdBy === ctx_r0.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r0.lectureQuestion.question, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.lectureQuestion.answers.length > 0)("ngIfElse", _r6);
      }
    }

    function ViewQuestionAnswersComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
    }

    var ViewQuestionAnswersComponent =
    /*#__PURE__*/
    function () {
      function ViewQuestionAnswersComponent(authService, toastrService, branchService, lectureService, questionAnswersService, dateService, router, route, dialogService) {
        _classCallCheck(this, ViewQuestionAnswersComponent);

        this.authService = authService;
        this.toastrService = toastrService;
        this.branchService = branchService;
        this.lectureService = lectureService;
        this.questionAnswersService = questionAnswersService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
      }

      _createClass(ViewQuestionAnswersComponent, [{
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

          this.editLectureQuestionAnswer = false;
          this.user = this.authService.getUserData();
          this.questionAnswersService.getQuestionAnswers().subscribe(function (questionAnswers) {
            if (!questionAnswers) {}

            _this.lectureQuestion = questionAnswers;
          });
          this.lectureService.getLectureData().subscribe(function (lecture) {
            _this.lecture = lecture;

            if (!_this.lecture) {
              _this.back();

              return;
            }
          });
          this.getLectureQuestionAnswers(this.lectureQuestion._id);

          if (!this.lectureQuestion) {} else {
            var id = this.questionAnswersService.getQuestionAnswersId();

            if (id) {
              this.getLectureQuestionAnswers(id);
            } else {
              this.showToastr('top-right', 'danger', 'Question Not Found');
              this.back();
            }
          }
        }
      }, {
        key: "getLectureQuestionAnswers",
        value: function getLectureQuestionAnswers(id) {
          var _this2 = this;

          this.questionAnswersService.getLectureQuestionAnswer(id).subscribe(function (questionAnswer) {
            _this2.lectureQuestion = questionAnswer;
            _this2.loading = false;
          }, function (error) {
            _this2.showToastr('top-right', 'danger', error);

            _this2.back();
          });
        }
      }, {
        key: "addQuestionAnswer",
        value: function addQuestionAnswer() {
          this.openAnswerDialog();
        }
      }, {
        key: "openAnswerDialog",
        value: function openAnswerDialog() {
          var _this3 = this;

          this.dialogService.open(_add_question_answers_add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_1__["AddAnswerComponent"], {
            context: {}
          }).onClose.subscribe(function (answer) {
            return answer && _this3.saveLectureQuestionAnswer(answer);
          });
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(lectureQuestion) {
          var _this4 = this;

          this.questionAnswersService.setQuestionId(lectureQuestion._id);
          this.questionAnswersService.setQuestion(lectureQuestion);
          this.dialogService.open(_add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__["AddQuestionComponent"], {
            context: {}
          }).onClose.subscribe(function (question) {
            if (question) {
              _this4.lectureQuestion = question;
            }
          });
        }
      }, {
        key: "formatQuestionAnswerDate",
        value: function formatQuestionAnswerDate(questionDate) {
          var date = this.dateService.convertToDate(questionDate).toString();
          return date.substr(0, 21);
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(id) {
          var _this5 = this;

          this.loading = true;
          this.questionAnswersService.deleteLectureQuestion(id).subscribe(function (res) {
            _this5.back();

            _this5.showToastr('top-right', 'success', "Question Deleted Successfully!");
          }, function (err) {
            _this5.showToastr('top-right', 'danger', err);

            _this5.loading = false;
          });
        }
      }, {
        key: "deleteQuestionAnswer",
        value: function deleteQuestionAnswer(id, i) {
          var _this6 = this;

          this.questionAnswersService.deleteLectureQuestionAnswer(id).subscribe(function (res) {
            _this6.lectureQuestion.answers.splice(i, 1);

            _this6.showToastr('top-right', 'success', "Answer Deleted Successfully!");
          }, function (err) {
            _this6.showToastr('top-right', 'danger', err);
          });
        }
      }, {
        key: "editQuestionAnswer",
        value: function editQuestionAnswer(lectureQuestionAnswer) {
          if (lectureQuestionAnswer) {
            this.questionAnswersService.setQuestionAnswerId(lectureQuestionAnswer._id);
            this.questionAnswersService.setQuestionAnswer(lectureQuestionAnswer);
            this.editLectureQuestionAnswer = true;
            this.openAnswerDialog();
          } else {
            // tslint:disable-next-line: quotemark
            this.showToastr('top-right', 'danger', "Can't Edit this Answer");
          }
        }
      }, {
        key: "saveLectureQuestionAnswer",
        value: function saveLectureQuestionAnswer(newLectureQuestionAnswer) {
          if (!this.editLectureQuestionAnswer) {
            newLectureQuestionAnswer.name = this.user.name;
            this.lectureQuestion.answers.push(newLectureQuestionAnswer);
          } else {
            var index = this.lectureQuestion.answers.findIndex(function (curAnswer) {
              return curAnswer._id === newLectureQuestionAnswer._id;
            });

            if (index >= 0) {
              this.lectureQuestion.answers[index] = newLectureQuestionAnswer;
            }

            this.editLectureQuestionAnswer = false;
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
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.questionAnswersService.deleteQuestionAnswersId();
          this.questionAnswersService.deleteQuestionAnswers();
        }
      }]);

      return ViewQuestionAnswersComponent;
    }();

    ViewQuestionAnswersComponent.ɵfac = function ViewQuestionAnswersComponent_Factory(t) {
      return new (t || ViewQuestionAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_6__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"]));
    };

    ViewQuestionAnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ViewQuestionAnswersComponent,
      selectors: [["ngx-view-question-answers"]],
      decls: 12,
      vars: 2,
      consts: [[1, "row"], [1, "col-md-12"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "body-container"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "col-md-6", "col-12"], [3, "name", "title"], [1, "col-md-6", "col-12", "text-right"], ["nbButton", "", "size", "small", "status", "success", 1, "mr-3", 3, "click"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "basic", 3, "click", 4, "ngIf"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], [3, "innerHTML"], ["class", "row", 4, "ngIf", "ngIfElse"], ["noAnswers", ""], ["nbButton", "", "size", "small", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 1, "mr-3", 3, "click"], [1, "col-1"], [1, "col-11"], [4, "ngFor", "ngForOf"], [1, "pt-5", "pb-5", "text-center"], [1, "text-center", "pt-5", "pb-5"]],
      template: function ViewQuestionAnswersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ViewQuestionAnswersComponent_Template_button_click_4_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Question & Answers");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "nb-card-body", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ViewQuestionAnswersComponent_ng_container_9_Template, 18, 7, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ViewQuestionAnswersComponent_ng_template_10_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](ViewQuestionAnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
        args: [{
          selector: 'ngx-view-question-answers',
          templateUrl: './view-question-answers.component.html',
          styleUrls: ['./view-question-answers.component.scss']
        }]
      }], function () {
        return [{
          type: _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]
        }, {
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]
        }, {
          type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_6__["LectureService"]
        }, {
          type: _services_question_answers_service__WEBPACK_IMPORTED_MODULE_4__["QuestionAnswersService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.module.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.module.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: ViewQuestionAnswersModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersViewQuestionAnswersViewQuestionAnswersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewQuestionAnswersModule", function () {
      return ViewQuestionAnswersModule;
    });
    /* harmony import */


    var _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../add-question-answers/add-question-answers.module */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _view_question_answers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./view-question-answers.component */
    "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _view_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-question-answers-routing.module */
    "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers-routing.module.ts");

    var ViewQuestionAnswersModule = function ViewQuestionAnswersModule() {
      _classCallCheck(this, ViewQuestionAnswersModule);
    };

    ViewQuestionAnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ViewQuestionAnswersModule
    });
    ViewQuestionAnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function ViewQuestionAnswersModule_Factory(t) {
        return new (t || ViewQuestionAnswersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _view_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewQuestionAnswersRoutingModule"], _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViewQuestionAnswersModule, {
        declarations: [_view_question_answers_component__WEBPACK_IMPORTED_MODULE_2__["ViewQuestionAnswersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _view_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewQuestionAnswersRoutingModule"], _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ViewQuestionAnswersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_view_question_answers_component__WEBPACK_IMPORTED_MODULE_2__["ViewQuestionAnswersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _view_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewQuestionAnswersRoutingModule"], _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);