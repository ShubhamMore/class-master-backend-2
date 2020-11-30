function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25], {
  /***/
  "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions-routing.module.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions-routing.module.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: AddOnlineTestQuestionsRoutingModule */

  /***/
  function srcAppInstituteBranchExamOnlineTestOnlineTestQuestionAddOnlineTestQuestionsAddOnlineTestQuestionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOnlineTestQuestionsRoutingModule", function () {
      return AddOnlineTestQuestionsRoutingModule;
    });
    /* harmony import */


    var _add_online_test_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-online-test-questions.component */
    "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.component.ts");
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
      component: _add_online_test_questions_component__WEBPACK_IMPORTED_MODULE_0__["AddOnlineTestQuestionsComponent"]
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

    var AddOnlineTestQuestionsRoutingModule = function AddOnlineTestQuestionsRoutingModule() {
      _classCallCheck(this, AddOnlineTestQuestionsRoutingModule);
    };

    AddOnlineTestQuestionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AddOnlineTestQuestionsRoutingModule
    });
    AddOnlineTestQuestionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AddOnlineTestQuestionsRoutingModule_Factory(t) {
        return new (t || AddOnlineTestQuestionsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddOnlineTestQuestionsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddOnlineTestQuestionsRoutingModule, [{
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
  "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.component.ts":
  /*!*****************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.component.ts ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: AddOnlineTestQuestionsComponent */

  /***/
  function srcAppInstituteBranchExamOnlineTestOnlineTestQuestionAddOnlineTestQuestionsAddOnlineTestQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOnlineTestQuestionsComponent", function () {
      return AddOnlineTestQuestionsComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../services/online-exam-question.service */
    "./src/app/services/online-exam-question.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../../../services/online-exam.service */
    "./src/app/services/online-exam.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["stepper"];

    function AddOnlineTestQuestionsComponent_ng_container_25_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Online Exam Question is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function AddOnlineTestQuestionsComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddOnlineTestQuestionsComponent_ng_container_25_p_1_Template, 2, 0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.onlineExamQuestionForm.get("question").errors == null ? null : ctx_r1.onlineExamQuestionForm.get("question").errors.required);
      }
    }

    function AddOnlineTestQuestionsComponent_div_26_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddOnlineTestQuestionsComponent_div_26_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r10.deleteOption(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function AddOnlineTestQuestionsComponent_div_26_ng_container_11_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Answer ", i_r7 + 1, " is required! ");
      }
    }

    function AddOnlineTestQuestionsComponent_div_26_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddOnlineTestQuestionsComponent_div_26_ng_container_11_p_1_Template, 2, 1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var answer_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", answer_r6.get("answer").errors == null ? null : answer_r6.get("answer").errors.required);
      }
    }

    function AddOnlineTestQuestionsComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AddOnlineTestQuestionsComponent_div_26_button_5_Template, 2, 0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-checkbox", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "textarea", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AddOnlineTestQuestionsComponent_div_26_ng_container_11_Template, 2, 1, "ng-container", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", answer_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r7 !== 0 && i_r7 !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", answer_r6.get("isCorrect").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Answer ", i_r7 + 1, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "input-answer-", i_r7, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "answer-", i_r7, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("placeholder", "Answer ", i_r7 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", answer_r6.get("answer").touched ? answer_r6.get("answer").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", answer_r6.get("answer").invalid && answer_r6.get("answer").touched);
      }
    }

    function AddOnlineTestQuestionsComponent_ng_container_31_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " *Please Select at least One Correct Answer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function AddOnlineTestQuestionsComponent_ng_container_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddOnlineTestQuestionsComponent_ng_container_31_p_1_Template, 2, 0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.onlineExamQuestionForm.hasError("atLeastOneCorrectAnswerError") && ctx_r3.onlineExamQuestionForm.touched);
      }
    }

    function AddOnlineTestQuestionsComponent_tr_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "nb-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \xA0\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r17 = ctx.$implicit;
        var i_r18 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Answer ", i_r18 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", answer_r17.value.isCorrect ? "success" : "danger")("icon", answer_r17.value.isCorrect ? "checkmark-outline" : "close-outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](answer_r17.value.answer);
      }
    }

    var AddOnlineTestQuestionsComponent =
    /*#__PURE__*/
    function () {
      function AddOnlineTestQuestionsComponent(branchService, onlineExamQuestionService, onlineExamService, dateService, toastrService, router, route) {
        _classCallCheck(this, AddOnlineTestQuestionsComponent);

        this.branchService = branchService;
        this.onlineExamQuestionService = onlineExamQuestionService;
        this.onlineExamService = onlineExamService;
        this.dateService = dateService;
        this.toastrService = toastrService;
        this.router = router;
        this.route = route;
      }

      _createClass(AddOnlineTestQuestionsComponent, [{
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

          this.onlineExamService.getOnlineExamData().subscribe(function (onlineExam) {
            if (!onlineExam) {
              _this.back();

              return;
            }

            _this.onlineExam = onlineExam;
            var mode;

            _this.route.queryParams.subscribe(function (param) {
              mode = param.mode;
            });

            _this.onlineExamQuestionId = _this.onlineExamQuestionService.getOnlineExamQuestionId();

            if (mode && mode !== 'edit') {
              _this.showToastr('top-right', 'danger', 'Invalid Route');

              return;
            } else if (mode && !_this.onlineExamQuestionId) {
              _this.showToastr('top-right', 'danger', 'Online Exam Question Not Found');

              return;
            }

            _this.onlineExamQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
              }),
              answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
              marks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.onlineExam.eachQuestionMarks, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
              })
            }, {
              validators: _this.atLeastOneCorrectAnswerValidator.bind(_this)
            });

            if (mode && _this.onlineExamQuestionId) {
              _this.onlineExamQuestionService.getOnlineExamQuestion(_this.onlineExamQuestionId).subscribe(function (question) {
                _this.onlineExamQuestion = question;

                _this.onlineExamQuestionForm.patchValue({
                  question: _this.onlineExamQuestion.question,
                  marks: _this.onlineExamQuestion.marks
                });

                var answers = _this.onlineExamQuestionForm.get('answers');

                answers.controls = [];

                _this.onlineExamQuestion.answers.forEach(function (answer) {
                  _this.addOption(answer);
                });

                _this.loading = false;
              }, function (err) {
                _this.showToastr('top-right', 'danger', err);

                _this.back();

                _this.loading = false;
              });
            } else {
              _this.generateOption();

              _this.generateOption();

              _this.loading = false;
            }
          });
        }
      }, {
        key: "atLeastOneCorrectAnswerValidator",
        value: function atLeastOneCorrectAnswerValidator(group) {
          var answers = group.value.answers;
          var isCorrect = false;
          answers.forEach(function (answer) {
            if (answer.isCorrect) {
              isCorrect = true;
            }
          });

          if (!isCorrect) {
            return {
              atLeastOneCorrectAnswerError: true
            };
          }

          return null;
        }
      }, {
        key: "newAnswer",
        value: function newAnswer(answerData) {
          return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](answerData.answer ? answerData.answer : null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            isCorrect: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](answerData.isCorrect, {
              validators: []
            })
          });
        }
      }, {
        key: "addOption",
        value: function addOption(answer) {
          var answers = this.onlineExamQuestionForm.get('answers');
          answers.push(this.newAnswer(answer));
        }
      }, {
        key: "generateOption",
        value: function generateOption() {
          var answer = {
            answer: '',
            isCorrect: false
          };
          this.addOption(answer);
        }
      }, {
        key: "deleteOption",
        value: function deleteOption(i) {
          if (i !== 0 && i !== 1) {
            var answers = this.onlineExamQuestionForm.get('answers');
            answers.removeAt(i);
          }
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.stepper.previous();
        }
      }, {
        key: "submitOnlineExamQuestionForm",
        value: function submitOnlineExamQuestionForm() {
          this.onlineExamQuestionForm.markAllAsTouched();

          if (this.onlineExamQuestionForm.invalid) {
            this.showToastr('top-right', 'danger', 'All Online Exam Question are Required');
            return;
          }

          this.stepper.next();
        }
      }, {
        key: "saveOnlineExamQuestion",
        value: function saveOnlineExamQuestion() {
          var _this2 = this;

          this.onlineExamQuestionForm.markAllAsTouched();

          if (this.onlineExamQuestionForm.invalid) {
            this.showToastr('top-right', 'danger', 'All Online Exam Question Fields are Required');
            return;
          }

          this.loading = true;
          var onlineExamQuestion = this.onlineExamQuestionForm.value;
          onlineExamQuestion.onlineExam = this.onlineExam._id;

          if (!this.onlineExamQuestion) {
            this.onlineExamQuestionService.newOnlineExamQuestion(onlineExamQuestion).subscribe(function (res) {
              _this2.showToastr('top-right', 'success', 'New Question Added Successfully');

              _this2.back();
            }, function (err) {
              _this2.showToastr('top-right', 'danger', err);

              _this2.loading = false;
            });
          } else {
            onlineExamQuestion._id = this.onlineExamQuestion._id;
            this.onlineExamQuestionService.editOnlineExamQuestion(onlineExamQuestion).subscribe(function (res) {
              _this2.showToastr('top-right', 'success', 'New Question Added Successfully');

              _this2.back();
            }, function (err) {
              _this2.showToastr('top-right', 'danger', err);

              _this2.loading = false;
            });
          }
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
          this.onlineExamQuestionService.deleteOnlineExamQuestionId();
          this.onlineExamQuestionService.deleteOnlineExamQuestionData();
        }
      }]);

      return AddOnlineTestQuestionsComponent;
    }();

    AddOnlineTestQuestionsComponent.ɵfac = function AddOnlineTestQuestionsComponent_Factory(t) {
      return new (t || AddOnlineTestQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_2__["OnlineExamQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_6__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    AddOnlineTestQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AddOnlineTestQuestionsComponent,
      selectors: [["ngx-add-online-test-questions"]],
      viewQuery: function AddOnlineTestQuestionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        }
      },
      decls: 62,
      vars: 11,
      consts: [[1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-12"], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Online Exam Details", 3, "stepControl"], [3, "formGroup", "submit"], [1, "col-md-12"], ["for", "input-question", 1, "label"], [1, "form-control-group"], ["type", "text", "nbInput", "", "id", "input-question", "name", "question", "rows", "2", "formControlName", "question", "placeholder", "Question", "fullWidth", "", 3, "status"], [4, "ngIf"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], ["type", "button", "nbButton", "", "size", "small", "status", "primary", 1, "float-right", 3, "click"], ["type", "submit", "nbButton", "", "size", "small", "status", "basic", 1, "float-right"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "col-md-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "formGroup"], ["class", "float-right", "type", "button", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], ["formControlName", "isCorrect", 3, "checked"], ["type", "text", "nbInput", "", "rows", "2", "formControlName", "answer", "fullWidth", "", 3, "id", "name", "placeholder", "status"], ["type", "button", "nbButton", "", "size", "small", "status", "danger", 1, "float-right", 3, "click"], ["icon", "trash-outline"], [3, "status", "icon"]],
      template: function AddOnlineTestQuestionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddOnlineTestQuestionsComponent_Template_button_click_7_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nb-stepper", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nb-step", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function AddOnlineTestQuestionsComponent_Template_form_submit_15_listener() {
            return ctx.submitOnlineExamQuestionForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Question:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AddOnlineTestQuestionsComponent_ng_container_25_Template, 2, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AddOnlineTestQuestionsComponent_div_26_Template, 12, 9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddOnlineTestQuestionsComponent_Template_button_click_28_listener() {
            return ctx.generateOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " Add Option ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AddOnlineTestQuestionsComponent_ng_container_31_Template, 2, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "*For correct answers, Tick the checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "nb-step", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Online Exam Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, AddOnlineTestQuestionsComponent_tr_50_Template, 8, 4, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddOnlineTestQuestionsComponent_Template_button_click_54_listener() {
            return ctx.previousStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "nb-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "prev");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddOnlineTestQuestionsComponent_Template_button_click_59_listener() {
            return ctx.saveOnlineExamQuestion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.onlineExam ? "Edit" : "Add", " Online Exam Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.onlineExamQuestionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.onlineExamQuestionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", ctx.onlineExamQuestionForm.get("question").touched ? ctx.onlineExamQuestionForm.get("question").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onlineExamQuestionForm.get("question").invalid && ctx.onlineExamQuestionForm.get("question").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.onlineExamQuestionForm.get("answers")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onlineExamQuestionForm.hasError("atLeastOneCorrectAnswerError") && ctx.onlineExamQuestionForm.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.onlineExamQuestionForm.value.question);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.onlineExamQuestionForm.get("answers")["controls"]);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AddOnlineTestQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'ngx-add-online-test-questions',
          templateUrl: './add-online-test-questions.component.html',
          styleUrls: ['./add-online-test-questions.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]
        }, {
          type: _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_2__["OnlineExamQuestionService"]
        }, {
          type: _services_online_exam_service__WEBPACK_IMPORTED_MODULE_6__["OnlineExamService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['stepper', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.module.ts":
  /*!**************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.module.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: AddOnlineTestQuestionsModule */

  /***/
  function srcAppInstituteBranchExamOnlineTestOnlineTestQuestionAddOnlineTestQuestionsAddOnlineTestQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddOnlineTestQuestionsModule", function () {
      return AddOnlineTestQuestionsModule;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _add_online_test_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./add-online-test-questions.component */
    "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-online-test-questions-routing.module */
    "./src/app/institute/branch/exam/online-test/online-test-question/add-online-test-questions/add-online-test-questions-routing.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var AddOnlineTestQuestionsModule = function AddOnlineTestQuestionsModule() {
      _classCallCheck(this, AddOnlineTestQuestionsModule);
    };

    AddOnlineTestQuestionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AddOnlineTestQuestionsModule
    });
    AddOnlineTestQuestionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AddOnlineTestQuestionsModule_Factory(t) {
        return new (t || AddOnlineTestQuestionsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddOnlineTestQuestionsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddOnlineTestQuestionsModule, {
        declarations: [_add_online_test_questions_component__WEBPACK_IMPORTED_MODULE_1__["AddOnlineTestQuestionsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddOnlineTestQuestionsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddOnlineTestQuestionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_add_online_test_questions_component__WEBPACK_IMPORTED_MODULE_1__["AddOnlineTestQuestionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddOnlineTestQuestionsRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);