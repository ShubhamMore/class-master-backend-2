function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37], {
  /***/
  "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: AddAnswerComponent */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersAddQuestionAnswersAddAnswerAddAnswerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAnswerComponent", function () {
      return AddAnswerComponent;
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


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_lecture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../services/lecture.service */
    "./src/app/services/lecture.service.ts");
    /* harmony import */


    var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../services/question-answers.service */
    "./src/app/services/question-answers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddAnswerComponent_form_6_ng_container_7_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Answer is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddAnswerComponent_form_6_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddAnswerComponent_form_6_ng_container_7_p_1_Template, 2, 0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.answerForm.get("answer").errors == null ? null : ctx_r1.answerForm.get("answer").errors.required);
      }
    }

    function AddAnswerComponent_form_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddAnswerComponent_form_6_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.saveLectureQuestionAnswer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Answer:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "textarea", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddAnswerComponent_form_6_ng_container_7_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAnswerComponent_form_6_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.answerForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.answerForm.get("answer").touched ? ctx_r0.answerForm.get("answer").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.answerForm.get("answer").invalid && ctx_r0.answerForm.get("answer").touched);
      }
    }

    var AddAnswerComponent =
    /*@__PURE__*/
    function () {
      var AddAnswerComponent =
      /*#__PURE__*/
      function () {
        function AddAnswerComponent(toastrService, branchService, lectureService, questionAnswersService, ref) {
          _classCallCheck(this, AddAnswerComponent);

          this.toastrService = toastrService;
          this.branchService = branchService;
          this.lectureService = lectureService;
          this.questionAnswersService = questionAnswersService;
          this.ref = ref;
        }

        _createClass(AddAnswerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.onClose();
              return;
            }

            this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.lectureQuestionAnswer ? this.lectureQuestionAnswer.answer : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              })
            });
            this.questionAnswersService.getQuestion().subscribe(function (questionAnswers) {
              _this.lectureQuestion = questionAnswers;
            });
            this.questionAnswersService.getQuestionAnswer().subscribe(function (questionAnswer) {
              _this.lectureQuestionAnswer = questionAnswer;

              if (questionAnswer) {
                _this.answerForm.patchValue({
                  answer: _this.lectureQuestionAnswer.answer
                });
              }
            });
            this.lectureService.getLectureData().subscribe(function (lecture) {
              _this.lecture = lecture;

              if (!_this.lecture) {
                _this.onClose();

                return;
              }

              _this.loading = false;
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.ref.close();
          }
        }, {
          key: "saveLectureQuestionAnswer",
          value: function saveLectureQuestionAnswer() {
            var _this2 = this;

            this.answerForm.markAllAsTouched();

            if (this.answerForm.invalid) {
              this.showToastr('top-right', 'danger', 'Answer is Required');
              return;
            }

            var answer = this.answerForm.value.answer;
            var lectureQuestionAnswer = {
              branch: this.branchId,
              category: this.lecture.category,
              course: this.lecture.course,
              batch: this.lecture.batch,
              lecture: this.lecture._id,
              question: this.lectureQuestion._id,
              answer: answer
            };

            if (!this.lectureQuestionAnswer) {
              this.questionAnswersService.newLectureQuestionAnswer(lectureQuestionAnswer).subscribe(function (newLectureQuestionAnswer) {
                _this2.showToastr('top-right', 'success', 'New Answer Added Successfully!');

                _this2.ref.close(newLectureQuestionAnswer);
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            } else {
              lectureQuestionAnswer._id = this.lectureQuestionAnswer._id;
              this.questionAnswersService.editLectureQuestionAnswer(lectureQuestionAnswer).subscribe(function (res) {
                _this2.lectureQuestionAnswer.answer = answer;

                _this2.showToastr('top-right', 'success', 'Answer Updated Successfully!');

                _this2.ref.close(_this2.lectureQuestionAnswer);
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.questionAnswersService.deleteQuestionAnswerId();
            this.questionAnswersService.deleteQuestionAnswer();
          }
        }]);

        return AddAnswerComponent;
      }();

      AddAnswerComponent.ɵfac = function AddAnswerComponent_Factory(t) {
        return new (t || AddAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_4__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]));
      };

      AddAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddAnswerComponent,
        selectors: [["ngx-add-answer"]],
        decls: 7,
        vars: 2,
        consts: [[1, "answer-box"], ["icon", "close-outline", 1, "float-right", "pointer", 3, "click"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], [1, "row"], [1, "col-12"], [1, "form-control-group"], ["for", "input-answer", 1, "label"], ["type", "text", "nbInput", "", "id", "input-answer", "name", "answer", "formControlName", "answer", "placeholder", "Answer", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "col-6", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function AddAnswerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAnswerComponent_Template_nb_icon_click_2_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddAnswerComponent_form_6_Template, 16, 3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.lectureQuestionAnswer ? "Edit" : "New", " Answer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]],
        styles: [".answer-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 96vw;\n  }\n}"]
      });
      return AddAnswerComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: AddQuestionAnswersRoutingModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersAddQuestionAnswersAddQuestionAnswersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionAnswersRoutingModule", function () {
      return AddQuestionAnswersRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AddQuestionAnswersRoutingModule =
    /*@__PURE__*/
    function () {
      var AddQuestionAnswersRoutingModule = function AddQuestionAnswersRoutingModule() {
        _classCallCheck(this, AddQuestionAnswersRoutingModule);
      };

      AddQuestionAnswersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddQuestionAnswersRoutingModule
      });
      AddQuestionAnswersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddQuestionAnswersRoutingModule_Factory(t) {
          return new (t || AddQuestionAnswersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return AddQuestionAnswersRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddQuestionAnswersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: AddQuestionAnswersModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersAddQuestionAnswersAddQuestionAnswersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionAnswersModule", function () {
      return AddQuestionAnswersModule;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-answer/add-answer.component */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts");
    /* harmony import */


    var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-question/add-question.component */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-question-answers-routing.module */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts");

    var AddQuestionAnswersModule =
    /*@__PURE__*/
    function () {
      var AddQuestionAnswersModule = function AddQuestionAnswersModule() {
        _classCallCheck(this, AddQuestionAnswersModule);
      };

      AddQuestionAnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AddQuestionAnswersModule
      });
      AddQuestionAnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AddQuestionAnswersModule_Factory(t) {
          return new (t || AddQuestionAnswersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionAnswersRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
      });
      return AddQuestionAnswersModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AddQuestionAnswersModule, {
        declarations: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionAnswersRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]],
        exports: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: AddQuestionComponent */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersAddQuestionAnswersAddQuestionAddQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function () {
      return AddQuestionComponent;
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


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_lecture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../services/lecture.service */
    "./src/app/services/lecture.service.ts");
    /* harmony import */


    var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../../../services/question-answers.service */
    "./src/app/services/question-answers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddQuestionComponent_ng_container_13_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Question is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddQuestionComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddQuestionComponent_ng_container_13_p_1_Template, 2, 0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.lectureQuestionForm.get("question").errors == null ? null : ctx_r0.lectureQuestionForm.get("question").errors.required);
      }
    }

    var AddQuestionComponent =
    /*@__PURE__*/
    function () {
      var AddQuestionComponent =
      /*#__PURE__*/
      function () {
        function AddQuestionComponent(toastrService, branchService, lectureService, questionAnswersService, ref) {
          _classCallCheck(this, AddQuestionComponent);

          this.toastrService = toastrService;
          this.branchService = branchService;
          this.lectureService = lectureService;
          this.questionAnswersService = questionAnswersService;
          this.ref = ref;
        }

        _createClass(AddQuestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.onClose();
              return;
            }

            this.lectureQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              })
            });
            this.questionAnswersService.getQuestion().subscribe(function (questionAnswers) {
              _this3.lectureQuestion = questionAnswers;

              if (questionAnswers) {
                _this3.lectureQuestionForm.patchValue({
                  question: _this3.lectureQuestion.question
                });
              }
            });
            this.lectureService.getLectureData().subscribe(function (lecture) {
              _this3.lecture = lecture;

              if (!_this3.lecture) {
                _this3.onClose();

                return;
              }

              _this3.loading = false;
            });
          }
        }, {
          key: "saveLectureQuestion",
          value: function saveLectureQuestion() {
            var _this4 = this;

            this.lectureQuestionForm.markAllAsTouched();

            if (this.lectureQuestionForm.invalid) {
              this.showToastr('top-right', 'danger', 'Question is Required');
              return;
            }

            var question = this.lectureQuestionForm.value.question;
            var lectureQuestion = {
              branch: this.branchId,
              category: this.lecture.category,
              course: this.lecture.course,
              batch: this.lecture.batch,
              lecture: this.lecture._id,
              question: question
            };

            if (!this.lectureQuestion) {
              this.questionAnswersService.newLectureQuestion(lectureQuestion).subscribe(function (newLectureQuestion) {
                _this4.showToastr('top-right', 'success', 'New Question Added Successfully!');

                _this4.ref.close(newLectureQuestion);
              }, function (error) {
                _this4.showToastr('top-right', 'danger', error);

                _this4.loading = false;
              });
            } else {
              lectureQuestion._id = this.lectureQuestion._id;
              this.questionAnswersService.editLectureQuestion(lectureQuestion).subscribe(function (res) {
                _this4.lectureQuestion.question = question;

                _this4.showToastr('top-right', 'success', 'Question Updated Successfully!');

                _this4.ref.close(_this4.lectureQuestion);
              }, function (error) {
                _this4.showToastr('top-right', 'danger', error);

                _this4.loading = false;
              });
            }
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.ref.close();
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
            this.questionAnswersService.deleteQuestionId();
            this.questionAnswersService.deleteQuestion();
          }
        }]);

        return AddQuestionComponent;
      }();

      AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) {
        return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_4__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]));
      };

      AddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddQuestionComponent,
        selectors: [["ngx-add-question"]],
        decls: 22,
        vars: 4,
        consts: [[1, "question-box"], ["icon", "close-outline", 1, "float-right", "pointer", 3, "click"], [3, "formGroup", "submit"], [1, "row"], [1, "col-12"], [1, "form-control-group"], ["for", "input-question", 1, "label"], ["type", "text", "nbInput", "", "id", "input-question", "name", "question", "formControlName", "question", "placeholder", "Question", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "col-6", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function AddQuestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddQuestionComponent_Template_nb_icon_click_2_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddQuestionComponent_Template_form_submit_6_listener() {
              return ctx.saveLectureQuestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Question:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddQuestionComponent_ng_container_13_Template, 2, 1, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_17_listener() {
              return ctx.onClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.lectureQuestion ? "Edit" : "New", " Question");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.lectureQuestionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.lectureQuestionForm.get("question").touched ? ctx.lectureQuestionForm.get("question").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lectureQuestionForm.get("question").invalid && ctx.lectureQuestionForm.get("question").touched);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]],
        styles: [".question-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .question-box[_ngcontent-%COMP%] {\n    top: 2vh;\n    left: 2vw;\n    width: 96vw;\n  }\n}"]
      });
      return AddQuestionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: QuestionAnswersRoutingModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersQuestionAnswersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionAnswersRoutingModule", function () {
      return QuestionAnswersRoutingModule;
    });
    /* harmony import */


    var _question_answers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./question-answers.component */
    "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts");
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
      component: _question_answers_component__WEBPACK_IMPORTED_MODULE_0__["QuestionAnswersComponent"]
    }, {
      path: 'view',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        168).then(__webpack_require__.bind(null,
        /*! ./view-question-answers/view-question-answers.module */
        "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.module.ts")).then(function (m) {
          return m.ViewQuestionAnswersModule;
        });
      }
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found'
    }];

    var QuestionAnswersRoutingModule =
    /*@__PURE__*/
    function () {
      var QuestionAnswersRoutingModule = function QuestionAnswersRoutingModule() {
        _classCallCheck(this, QuestionAnswersRoutingModule);
      };

      QuestionAnswersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: QuestionAnswersRoutingModule
      });
      QuestionAnswersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function QuestionAnswersRoutingModule_Factory(t) {
          return new (t || QuestionAnswersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return QuestionAnswersRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuestionAnswersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/question-answers.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: QuestionAnswersComponent */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersQuestionAnswersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionAnswersComponent", function () {
      return QuestionAnswersComponent;
    });
    /* harmony import */


    var _add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-question-answers/add-question/add-question.component */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_lecture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/lecture.service */
    "./src/app/services/lecture.service.ts");
    /* harmony import */


    var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../services/question-answers.service */
    "./src/app/services/question-answers.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var lectureQuestion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r11.editQuestion(lectureQuestion_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var lectureQuestion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.deleteQuestion(lectureQuestion_r7._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nb-user", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var lectureQuestion_r7 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r17.viewQuestionAnswer(lectureQuestion_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lectureQuestion_r7 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", lectureQuestion_r7.name ? lectureQuestion_r7.name : "Unknown")("title", ctx_r6.formatQuestionAnswerDate(lectureQuestion_r7.createdAt));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lectureQuestion_r7.createdBy === ctx_r6.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lectureQuestion_r7.createdBy === ctx_r6.user.imsMasterId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", lectureQuestion_r7.question, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function QuestionAnswersComponent_div_11_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template, 12, 5, "nb-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.questionsAnswers);
      }
    }

    function QuestionAnswersComponent_div_11_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You are first to Ask the Question");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function QuestionAnswersComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuestionAnswersComponent_div_11_ng_container_2_Template, 2, 1, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QuestionAnswersComponent_div_11_ng_template_3_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.questionsAnswers.length > 0)("ngIfElse", _r4);
      }
    }

    function QuestionAnswersComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var QuestionAnswersComponent =
    /*@__PURE__*/
    function () {
      var QuestionAnswersComponent =
      /*#__PURE__*/
      function () {
        function QuestionAnswersComponent(authService, branchService, lectureService, questionAnswerService, toastrService, router, route, dialogService, dateService) {
          _classCallCheck(this, QuestionAnswersComponent);

          this.authService = authService;
          this.branchService = branchService;
          this.lectureService = lectureService;
          this.questionAnswerService = questionAnswerService;
          this.toastrService = toastrService;
          this.router = router;
          this.route = route;
          this.dialogService = dialogService;
          this.dateService = dateService;
        }

        _createClass(QuestionAnswersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
              return;
            }

            this.editLectureQuestion = false;
            this.user = this.authService.getUserData();
            this.questionsAnswers = [];
            this.lectureService.getLectureData().subscribe(function (lecture) {
              _this5.lecture = lecture;

              if (!_this5.lecture) {
                _this5.router.navigate(['../'], {
                  relativeTo: _this5.route
                });

                return;
              }

              _this5.getQuestionAnswers();
            });
          }
        }, {
          key: "getQuestionAnswers",
          value: function getQuestionAnswers() {
            var _this6 = this;

            this.loading = true;
            this.questionAnswerService.getLectureQuestionAnswers(this.branchId, this.lecture.category, this.lecture.course, this.lecture.batch, this.lecture._id).subscribe(function (questionsAnswers) {
              _this6.questionsAnswers = questionsAnswers;
              _this6.loading = false;
            }, function (err) {
              _this6.loading = false;
            });
          }
        }, {
          key: "addQuestion",
          value: function addQuestion() {
            this.openQuestionDialog();
          }
        }, {
          key: "openQuestionDialog",
          value: function openQuestionDialog() {
            var _this7 = this;

            this.dialogService.open(_add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__["AddQuestionComponent"], {
              context: {}
            }).onClose.subscribe(function (question) {
              return question && _this7.saveLectureQuestion(question);
            });
          }
        }, {
          key: "editQuestion",
          value: function editQuestion(questionAnswer) {
            this.questionAnswerService.setQuestionId(questionAnswer._id);
            this.questionAnswerService.setQuestion(questionAnswer);
            this.editLectureQuestion = true;
            this.openQuestionDialog();
          }
        }, {
          key: "formatQuestionAnswerDate",
          value: function formatQuestionAnswerDate(questionDate) {
            var date = this.dateService.convertToDate(questionDate).toString();
            return date.substr(0, 21);
          }
        }, {
          key: "deleteQuestion",
          value: function deleteQuestion(id, i) {
            var _this8 = this;

            this.loading = true;
            this.questionAnswerService.deleteLectureQuestion(id).subscribe(function (res) {
              _this8.questionsAnswers.splice(i, 1);

              _this8.showToastr('top-right', 'success', "Question Deleted Successfully!");

              _this8.loading = false;
            }, function (err) {
              _this8.showToastr('top-right', 'danger', err);

              _this8.loading = false;
            });
          }
        }, {
          key: "viewQuestionAnswer",
          value: function viewQuestionAnswer(questionAnswer) {
            this.questionAnswerService.setQuestionAnswersId(questionAnswer._id);
            this.questionAnswerService.setQuestionAnswers(questionAnswer);
            this.router.navigate(['./view'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "saveLectureQuestion",
          value: function saveLectureQuestion(question) {
            if (!this.editLectureQuestion) {
              question.name = this.user.name;
              this.questionsAnswers.push(question);
            } else {
              var index = this.questionsAnswers.findIndex(function (curQuestion) {
                return curQuestion._id === question._id;
              });

              if (index >= 0) {
                this.questionsAnswers[index] = question;
              }

              this.editLectureQuestion = false;
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
        }]);

        return QuestionAnswersComponent;
      }();

      QuestionAnswersComponent.ɵfac = function QuestionAnswersComponent_Factory(t) {
        return new (t || QuestionAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_4__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]));
      };

      QuestionAnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QuestionAnswersComponent,
        selectors: [["ngx-question-answers"]],
        decls: 14,
        vars: 2,
        consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "status", "primary", "fullWidth", "", 3, "click"], ["icon", "plus-circle-outline"], [1, "body-container"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["noQuestions", ""], [4, "ngFor", "ngForOf"], [1, "col-md-6", "col-12"], [3, "name", "title"], [1, "col-md-6", "col-12", "text-right"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "basic", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "primary", 1, "mr-3", 3, "click"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], [3, "innerHTML"], ["nbButton", "", "size", "small", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 1, "mr-3", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
        template: function QuestionAnswersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Question & Answers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuestionAnswersComponent_Template_button_click_7_listener() {
              return ctx.addQuestion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Add Question ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nb-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card-body", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, QuestionAnswersComponent_div_11_Template, 5, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, QuestionAnswersComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserComponent"]],
        styles: [""]
      });
      return QuestionAnswersComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/lecture/question-answers/question-answers.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/institute/branch/lecture/question-answers/question-answers.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: QuestionAnswersModule */

  /***/
  function srcAppInstituteBranchLectureQuestionAnswersQuestionAnswersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionAnswersModule", function () {
      return QuestionAnswersModule;
    });
    /* harmony import */


    var _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-question-answers/add-question-answers.module */
    "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts");
    /* harmony import */


    var _question_answers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./question-answers.component */
    "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./question-answers-routing.module */
    "./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts");

    var QuestionAnswersModule =
    /*@__PURE__*/
    function () {
      var QuestionAnswersModule = function QuestionAnswersModule() {
        _classCallCheck(this, QuestionAnswersModule);
      };

      QuestionAnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: QuestionAnswersModule
      });
      QuestionAnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function QuestionAnswersModule_Factory(t) {
          return new (t || QuestionAnswersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersRoutingModule"], _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"]]]
      });
      return QuestionAnswersModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuestionAnswersModule, {
        declarations: [_question_answers_component__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersRoutingModule"], _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"]]
      });
    })();
    /***/

  }
}]);