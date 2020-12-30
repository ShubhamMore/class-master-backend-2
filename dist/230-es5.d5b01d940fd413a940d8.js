function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[230], {
  /***/
  "./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: OnlineTestQuestionRoutingModule */

  /***/
  function srcAppStudentBranchCourseOnlineTestOnlineTestQuestionOnlineTestQuestionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionRoutingModule", function () {
      return OnlineTestQuestionRoutingModule;
    });
    /* harmony import */


    var _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./online-test-question.component */
    "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts");
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
      component: _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__["OnlineTestQuestionComponent"]
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

    var OnlineTestQuestionRoutingModule =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionRoutingModule = function OnlineTestQuestionRoutingModule() {
        _classCallCheck(this, OnlineTestQuestionRoutingModule);
      };

      OnlineTestQuestionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OnlineTestQuestionRoutingModule
      });
      OnlineTestQuestionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OnlineTestQuestionRoutingModule_Factory(t) {
          return new (t || OnlineTestQuestionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return OnlineTestQuestionRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestQuestionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: OnlineTestQuestionComponent */

  /***/
  function srcAppStudentBranchCourseOnlineTestOnlineTestQuestionOnlineTestQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionComponent", function () {
      return OnlineTestQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../services/online-exam.service */
    "./src/app/services/online-exam.service.ts");
    /* harmony import */


    var _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../services/online-exam-question.service */
    "./src/app/services/online-exam-question.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OnlineTestQuestionComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return !ctx_r5.examStarted ? ctx_r5.startExam() : ctx_r5.submitExam();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r0.examStarted ? "Start" : "Submit", " Exam ");
      }
    }

    function OnlineTestQuestionComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.getDate(ctx_r1.onlineExam.date), ".\xA0", ctx_r1.getTime(ctx_r1.onlineExam.time), "");
      }
    }

    function OnlineTestQuestionComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Click on Start Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Exam will End In ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.examCountDownTimer, " ");
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Exam Ended ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_div_7_div_2_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r15.previousQuestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_div_7_div_2_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r17.nextQuestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-checkbox", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkedChange", function OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template_nb_checkbox_checkedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var answer_r20 = ctx.$implicit;
          var i_r21 = ctx.index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r22.markAnswer(ctx_r22.currentQuestion._id, ctx_r22.currentQuestionIndex, answer_r20._id, i_r21, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r20 = ctx.$implicit;
        var i_r21 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r21 + 1, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r20.answer);
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "Strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template, 7, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Question ", ctx_r13.currentQuestionIndex + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.currentQuestion.question);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.currentQuestion.answers);
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_div_11_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Calculating Result");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_div_11_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "You got: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Attempted: ", ctx_r25.onlineExamResult.answeredQuestions, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Unattempted: ", ctx_r25.onlineExamResult.unAnsweredQuestions, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Correct Answers: ", ctx_r25.onlineExamResult.correctAnswers, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Wrong Answers: ", ctx_r25.onlineExamResult.wrongAnswers, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r25.onlineExamResult.marks, "/", ctx_r25.onlineExam.totalMarks, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.onlineExamResult.status ? "Pass" : "Failed");
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OnlineTestQuestionComponent_div_7_div_2_div_11_p_2_Template, 2, 0, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OnlineTestQuestionComponent_div_7_div_2_div_11_p_3_Template, 21, 7, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.calculatingResult);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.calculatingResult);
      }
    }

    function OnlineTestQuestionComponent_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OnlineTestQuestionComponent_div_7_div_2_p_3_Template, 4, 1, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, OnlineTestQuestionComponent_div_7_div_2_p_4_Template, 2, 0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OnlineTestQuestionComponent_div_7_div_2_button_6_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OnlineTestQuestionComponent_div_7_div_2_button_8_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OnlineTestQuestionComponent_div_7_div_2_div_10_Template, 9, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OnlineTestQuestionComponent_div_7_div_2_div_11_Template, 4, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.examCountDownTimer);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.examCountDownTimer && ctx_r8.examSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.currentQuestionIndex > 0 && !ctx_r8.examSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.currentQuestionIndex < ctx_r8.questions.length - 1 && !ctx_r8.examSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.examSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.examSubmitted);
      }
    }

    function OnlineTestQuestionComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OnlineTestQuestionComponent_div_7_div_1_Template, 3, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OnlineTestQuestionComponent_div_7_div_2_Template, 12, 6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.examStarted);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.examStarted);
      }
    }

    function OnlineTestQuestionComponent_ng_template_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function OnlineTestQuestionComponent_ng_template_8_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Exam will Start In ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r27.waitingToStart, " ");
      }
    }

    function OnlineTestQuestionComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OnlineTestQuestionComponent_ng_template_8_span_1_Template, 2, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OnlineTestQuestionComponent_ng_template_8_span_2_Template, 4, 1, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.waitingToStart === "loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.waitingToStart !== "loading");
      }
    }

    var OnlineTestQuestionComponent =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionComponent =
      /*#__PURE__*/
      function () {
        function OnlineTestQuestionComponent(branchService, toastrService, onlineExamService, onlineExamQuestionService, router, route) {
          _classCallCheck(this, OnlineTestQuestionComponent);

          this.branchService = branchService;
          this.toastrService = toastrService;
          this.onlineExamService = onlineExamService;
          this.onlineExamQuestionService = onlineExamQuestionService;
          this.router = router;
          this.route = route;
        }

        _createClass(OnlineTestQuestionComponent, [{
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

            this.waitingToStart = 'loading';
            this.onlineExamService.getOnlineExamData().subscribe(function (onlineExam) {
              if (!onlineExam) {
                _this.back();

                return;
              }

              _this.onlineExam = onlineExam;
            });
            this.questions = [];
            this.onlineExamService.getOnlineExamResult(this.onlineExam._id).subscribe(function (onlineExamResult) {
              if (onlineExamResult) {
                _this.onlineExamResult = onlineExamResult;
                _this.waitingToStart = null;
                _this.examStarted = true;
                _this.examSubmitted = true;
                _this.calculatingResult = false;
              } else {
                var startTime = _this.onlineExam.date + 'T' + _this.onlineExam.time;
                var countDownDate = new Date(startTime).getTime();
                _this.examStartTime = countDownDate;
                _this.examStarted = false;
                _this.examSubmitted = false;
                _this.examTimeUp = false; // Set Interval

                var interval = setInterval(function () {
                  // Get today's date and time
                  var now = new Date().getTime(); // Find the distance time between current date and the count down date

                  var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

                  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                  var seconds = Math.floor(distance % (1000 * 60) / 1000); // Output the result in an 'waitingToStart' object variable

                  _this.waitingToStart = hours + 'H ' + minutes + 'M ' + seconds + 'S ';

                  if (distance < 0) {
                    // Clear Interval
                    clearInterval(interval);
                    _this.waitingToStart = null;
                  }

                  if (_this.loading) {
                    _this.loading = false;
                  }
                }, 1000);
              }

              _this.loading = false;
            }, function (error) {
              _this.showToastr('top-right', 'danger', error);

              _this.loading = false;
            });
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            date = new Date(date).toString();
            return date.substring(0, 3) + ', ' + date.substring(4, 15);
          }
        }, {
          key: "getTime",
          value: function getTime(time) {
            var hours = +time.split(':')[0];
            var minutes = time.split(':')[1];

            if (+hours > 12) {
              return (+hours - 12).toString().padStart(2, '0') + ':' + minutes + ' PM';
            }

            return hours.toString().padStart(2, '0') + ':' + minutes + ' AM';
          }
        }, {
          key: "startExam",
          value: function startExam() {
            var _this2 = this;

            this.onlineExamQuestionService.getOnlineExamQuestionsForStudent(this.onlineExam._id).subscribe(function (onlineExamQuestions) {
              _this2.questions = onlineExamQuestions;
              _this2.waitingToStart = null;
              _this2.examStarted = true;
              _this2.studentQuestionAnswers = [];
              _this2.currentQuestionIndex = 0;
              _this2.currentQuestion = _this2.questions[0]; // Buffer time in millisecond (For calculating Exam Data)

              var bufferTime = 0 * 1000;
              var duration = +_this2.onlineExam.duration * 60 * 1000;
              var currentTime = new Date().getTime();
              var endTime = _this2.examStartTime + duration + bufferTime;
              var differenceTime = endTime - currentTime;

              if (differenceTime >= duration) {
                _this2.examEndTime = currentTime + duration;
              } else if (endTime > currentTime) {
                _this2.examEndTime = _this2.examStartTime + duration + bufferTime;

                _this2.examCountDown();
              } else {
                _this2.examEndTime = null;
                _this2.examTimeUp = true;

                _this2.submitExam();
              }
            }, function (error) {
              _this2.showToastr('top-right', 'danger', error);
            });
          }
        }, {
          key: "examCountDown",
          value: function examCountDown() {
            var _this3 = this;

            this.examInterval = setInterval(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0,
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee() {
                var now, distance, hours, minutes, seconds;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // Get today's date and time
                        now = new Date().getTime(); // Find the distance time between current date and the count down date

                        distance = this.examEndTime - now; // Time calculations for days, hours, minutes and seconds

                        hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                        minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                        seconds = Math.floor(distance % (1000 * 60) / 1000); // Output the result in an 'CountDown' object variable

                        this.examCountDownTimer = hours + 'H ' + minutes + 'M ' + seconds + 'S ';

                        if (distance < 0) {
                          this.examCountDownTimer = null;
                          this.examTimeUp = true;
                          this.submitExam();
                        }

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, 1000);
          }
        }, {
          key: "previousQuestion",
          value: function previousQuestion() {
            this.currentQuestionIndex -= 1;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
          }
        }, {
          key: "nextQuestion",
          value: function nextQuestion() {
            this.currentQuestionIndex += 1;
            this.currentQuestion = this.questions[this.currentQuestionIndex];
          }
        }, {
          key: "markAnswer",
          value: function markAnswer(questionId, questionIndex, answerId, answerIndex, mark) {
            var index = this.studentQuestionAnswers.findIndex(function (curAnswer) {
              return curAnswer.questionId === questionId;
            });

            if (mark) {
              if (index < 0) {
                var studentQuestionAnswers = {
                  questionId: questionId,
                  questionIndex: questionIndex,
                  answerIds: []
                };
                studentQuestionAnswers.answerIds.push(answerId);
                this.studentQuestionAnswers.push(studentQuestionAnswers);
              } else {
                var _studentQuestionAnswers = this.studentQuestionAnswers[index];

                _studentQuestionAnswers.answerIds.push(answerId);

                this.studentQuestionAnswers[index] = _studentQuestionAnswers;
              }
            } else {
              if (index > -1) {
                var _studentQuestionAnswers2 = this.studentQuestionAnswers[index];

                var ansIndex = _studentQuestionAnswers2.answerIds.findIndex(function (curAnsId) {
                  return curAnsId.answerId === answerId;
                });

                _studentQuestionAnswers2.answerIds.splice(ansIndex, 1);

                this.studentQuestionAnswers[index] = _studentQuestionAnswers2;
              }
            }
          }
        }, {
          key: "submitExam",
          value: function submitExam() {
            var _this4 = this;

            var confirm = true;

            if (!this.examTimeUp) {
              confirm = window.confirm('Do you want to Submit the Exam?');
            }

            if (!confirm) {
              return;
            }

            this.calculatingResult = true;
            this.examSubmitted = true;
            this.currentQuestion = null;
            this.currentQuestionIndex = null; // Clear Interval

            clearInterval(this.examInterval);
            this.examCountDownTimer = null;
            this.onlineExamService.saveOnlineExamResult(this.studentQuestionAnswers, this.onlineExam._id).subscribe(function (res) {
              _this4.onlineExamResult = res.onlineExamResult;

              if (res.type === 0) {
                _this4.showToastr('top-right', 'success', 'Exam Submitted Successfully!');
              }

              _this4.calculatingResult = false;
            }, function (error) {
              _this4.showToastr('top-right', 'danger', error);
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.examInterval);
          }
        }]);

        return OnlineTestQuestionComponent;
      }();

      OnlineTestQuestionComponent.ɵfac = function OnlineTestQuestionComponent_Factory(t) {
        return new (t || OnlineTestQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_4__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_5__["OnlineExamQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      OnlineTestQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OnlineTestQuestionComponent,
        selectors: [["ngx-online-test-question"]],
        decls: 10,
        vars: 5,
        consts: [["type", "button", "class", "float-right", "nbButton", "", "size", "small", "status", "success", 3, "click", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["examStartCountDown", ""], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["id", "countDown", 1, "pt-5", "pb-5", "text-center"], [1, "row"], [1, "col-12"], ["class", "text-right", "id", "examCountDownTimer", 4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Previous Question", 3, "click", 4, "ngIf"], ["class", "float-right", "type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Next Question", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "examCountDownTimer", 1, "text-right"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Previous Question", 3, "click"], ["icon", "arrow-ios-back-outline"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Next Question", 1, "float-right", 3, "click"], ["icon", "arrow-ios-forward-outline"], [1, "text-center"], [4, "ngFor", "ngForOf"], [3, "checkedChange"], [1, "col-12", "pt-3", "pb-3"], ["class", "text-center", 4, "ngIf"], ["id", "waitingToStart", 1, "pt-5", "pb-5", "text-center"]],
        template: function OnlineTestQuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OnlineTestQuestionComponent_button_2_Template, 2, 1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, OnlineTestQuestionComponent_p_5_Template, 3, 2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OnlineTestQuestionComponent_div_7_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OnlineTestQuestionComponent_ng_template_8_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.examSubmitted && !ctx.waitingToStart);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.onlineExam ? ctx.onlineExam.title : "Online Exam", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.waitingToStart)("ngIfElse", _r3);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"]],
        styles: [""]
      });
      return OnlineTestQuestionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/branch/course/online-test/online-test-question/online-test-question.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: OnlineTestQuestionModule */

  /***/
  function srcAppStudentBranchCourseOnlineTestOnlineTestQuestionOnlineTestQuestionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionModule", function () {
      return OnlineTestQuestionModule;
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


    var _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./online-test-question-routing.module */
    "./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts");
    /* harmony import */


    var _online_test_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./online-test-question.component */
    "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts");

    var OnlineTestQuestionModule =
    /*@__PURE__*/
    function () {
      var OnlineTestQuestionModule = function OnlineTestQuestionModule() {
        _classCallCheck(this, OnlineTestQuestionModule);
      };

      OnlineTestQuestionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OnlineTestQuestionModule
      });
      OnlineTestQuestionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OnlineTestQuestionModule_Factory(t) {
          return new (t || OnlineTestQuestionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"]]]
      });
      return OnlineTestQuestionModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestQuestionModule, {
        declarations: [_online_test_question_component__WEBPACK_IMPORTED_MODULE_4__["OnlineTestQuestionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"]]
      });
    })();
    /***/

  }
}]);