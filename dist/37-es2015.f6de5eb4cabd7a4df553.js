(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnswerComponent", function() { return AddAnswerComponent; });
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/question-answers.service */ "./src/app/services/question-answers.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function AddAnswerComponent_form_6_ng_container_7_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Answer is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddAnswerComponent_form_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddAnswerComponent_form_6_ng_container_7_p_1_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.answerForm.get("answer").errors == null ? null : ctx_r1.answerForm.get("answer").errors.required);
} }
function AddAnswerComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddAnswerComponent_form_6_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.saveLectureQuestionAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Answer:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddAnswerComponent_form_6_ng_container_7_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAnswerComponent_form_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.answerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r0.answerForm.get("answer").touched ? ctx_r0.answerForm.get("answer").invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.answerForm.get("answer").invalid && ctx_r0.answerForm.get("answer").touched);
} }
class AddAnswerComponent {
    constructor(toastrService, branchService, lectureService, questionAnswersService, ref) {
        this.toastrService = toastrService;
        this.branchService = branchService;
        this.lectureService = lectureService;
        this.questionAnswersService = questionAnswersService;
        this.ref = ref;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.onClose();
            return;
        }
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.lectureQuestionAnswer ? this.lectureQuestionAnswer.answer : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
        });
        this.questionAnswersService.getQuestion().subscribe((questionAnswers) => {
            this.lectureQuestion = questionAnswers;
        });
        this.questionAnswersService
            .getQuestionAnswer()
            .subscribe((questionAnswer) => {
            this.lectureQuestionAnswer = questionAnswer;
            if (questionAnswer) {
                this.answerForm.patchValue({ answer: this.lectureQuestionAnswer.answer });
            }
        });
        this.lectureService.getLectureData().subscribe((lecture) => {
            this.lecture = lecture;
            if (!this.lecture) {
                this.onClose();
                return;
            }
            this.loading = false;
        });
    }
    onClose() {
        this.ref.close();
    }
    saveLectureQuestionAnswer() {
        this.answerForm.markAllAsTouched();
        if (this.answerForm.invalid) {
            this.showToastr('top-right', 'danger', 'Answer is Required');
            return;
        }
        const answer = this.answerForm.value.answer;
        const lectureQuestionAnswer = {
            branch: this.branchId,
            category: this.lecture.category,
            course: this.lecture.course,
            batch: this.lecture.batch,
            lecture: this.lecture._id,
            question: this.lectureQuestion._id,
            answer: answer,
        };
        if (!this.lectureQuestionAnswer) {
            this.questionAnswersService.newLectureQuestionAnswer(lectureQuestionAnswer).subscribe((newLectureQuestionAnswer) => {
                this.showToastr('top-right', 'success', 'New Answer Added Successfully!');
                this.ref.close(newLectureQuestionAnswer);
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        else {
            lectureQuestionAnswer._id = this.lectureQuestionAnswer._id;
            this.questionAnswersService.editLectureQuestionAnswer(lectureQuestionAnswer).subscribe((res) => {
                this.lectureQuestionAnswer.answer = answer;
                this.showToastr('top-right', 'success', 'Answer Updated Successfully!');
                this.ref.close(this.lectureQuestionAnswer);
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    ngOnDestroy() {
        this.questionAnswersService.deleteQuestionAnswerId();
        this.questionAnswersService.deleteQuestionAnswer();
    }
}
AddAnswerComponent.ɵfac = function AddAnswerComponent_Factory(t) { return new (t || AddAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_0__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"])); };
AddAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddAnswerComponent, selectors: [["ngx-add-answer"]], decls: 7, vars: 2, consts: [[1, "answer-box"], ["icon", "close-outline", 1, "float-right", "pointer", 3, "click"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], [1, "row"], [1, "col-12"], [1, "form-control-group"], ["for", "input-answer", 1, "label"], ["type", "text", "nbInput", "", "id", "input-answer", "name", "answer", "formControlName", "answer", "placeholder", "Answer", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "col-6", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function AddAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAnswerComponent_Template_nb_icon_click_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddAnswerComponent_form_6_Template, 16, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.lectureQuestionAnswer ? "Edit" : "New", " Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: [".answer-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .answer-box[_ngcontent-%COMP%] {\n    width: 96vw;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AddAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ngx-add-answer',
                templateUrl: './add-answer.component.html',
                styleUrls: ['./add-answer.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"] }, { type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_0__["LectureService"] }, { type: _services_question_answers_service__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswersService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddQuestionAnswersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionAnswersRoutingModule", function() { return AddQuestionAnswersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AddQuestionAnswersRoutingModule {
}
AddQuestionAnswersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddQuestionAnswersRoutingModule });
AddQuestionAnswersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddQuestionAnswersRoutingModule_Factory(t) { return new (t || AddQuestionAnswersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddQuestionAnswersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddQuestionAnswersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddQuestionAnswersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionAnswersModule", function() { return AddQuestionAnswersModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-answer/add-answer.component */ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-answer/add-answer.component.ts");
/* harmony import */ var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-question/add-question.component */ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-question-answers-routing.module */ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers-routing.module.ts");








class AddQuestionAnswersModule {
}
AddQuestionAnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AddQuestionAnswersModule });
AddQuestionAnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AddQuestionAnswersModule_Factory(t) { return new (t || AddQuestionAnswersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionAnswersRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AddQuestionAnswersModule, { declarations: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionAnswersRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]], exports: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AddQuestionAnswersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _add_question_answers_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionAnswersRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ],
                exports: [_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"], _add_answer_add_answer_component__WEBPACK_IMPORTED_MODULE_2__["AddAnswerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../services/question-answers.service */ "./src/app/services/question-answers.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function AddQuestionComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Question is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddQuestionComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddQuestionComponent_ng_container_13_p_1_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.lectureQuestionForm.get("question").errors == null ? null : ctx_r0.lectureQuestionForm.get("question").errors.required);
} }
class AddQuestionComponent {
    constructor(toastrService, branchService, lectureService, questionAnswersService, ref) {
        this.toastrService = toastrService;
        this.branchService = branchService;
        this.lectureService = lectureService;
        this.questionAnswersService = questionAnswersService;
        this.ref = ref;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.onClose();
            return;
        }
        this.lectureQuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            }),
        });
        this.questionAnswersService.getQuestion().subscribe((questionAnswers) => {
            this.lectureQuestion = questionAnswers;
            if (questionAnswers) {
                this.lectureQuestionForm.patchValue({ question: this.lectureQuestion.question });
            }
        });
        this.lectureService.getLectureData().subscribe((lecture) => {
            this.lecture = lecture;
            if (!this.lecture) {
                this.onClose();
                return;
            }
            this.loading = false;
        });
    }
    saveLectureQuestion() {
        this.lectureQuestionForm.markAllAsTouched();
        if (this.lectureQuestionForm.invalid) {
            this.showToastr('top-right', 'danger', 'Question is Required');
            return;
        }
        const question = this.lectureQuestionForm.value.question;
        const lectureQuestion = {
            branch: this.branchId,
            category: this.lecture.category,
            course: this.lecture.course,
            batch: this.lecture.batch,
            lecture: this.lecture._id,
            question: question,
        };
        if (!this.lectureQuestion) {
            this.questionAnswersService.newLectureQuestion(lectureQuestion).subscribe((newLectureQuestion) => {
                this.showToastr('top-right', 'success', 'New Question Added Successfully!');
                this.ref.close(newLectureQuestion);
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        else {
            lectureQuestion._id = this.lectureQuestion._id;
            this.questionAnswersService.editLectureQuestion(lectureQuestion).subscribe((res) => {
                this.lectureQuestion.question = question;
                this.showToastr('top-right', 'success', 'Question Updated Successfully!');
                this.ref.close(this.lectureQuestion);
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
    }
    onClose() {
        this.ref.close();
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    ngOnDestroy() {
        this.questionAnswersService.deleteQuestionId();
        this.questionAnswersService.deleteQuestion();
    }
}
AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) { return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_0__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"])); };
AddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddQuestionComponent, selectors: [["ngx-add-question"]], decls: 22, vars: 4, consts: [[1, "question-box"], ["icon", "close-outline", 1, "float-right", "pointer", 3, "click"], [3, "formGroup", "submit"], [1, "row"], [1, "col-12"], [1, "form-control-group"], ["for", "input-question", 1, "label"], ["type", "text", "nbInput", "", "id", "input-question", "name", "question", "formControlName", "question", "placeholder", "Question", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "col-6", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function AddQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddQuestionComponent_Template_nb_icon_click_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddQuestionComponent_Template_form_submit_6_listener() { return ctx.saveLectureQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Question:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddQuestionComponent_ng_container_13_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_17_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.lectureQuestion ? "Edit" : "New", " Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.lectureQuestionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.lectureQuestionForm.get("question").touched ? ctx.lectureQuestionForm.get("question").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lectureQuestionForm.get("question").invalid && ctx.lectureQuestionForm.get("question").touched);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: [".question-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .question-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .question-box[_ngcontent-%COMP%] {\n    top: 2vh;\n    left: 2vw;\n    width: 96vw;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AddQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ngx-add-question',
                templateUrl: './add-question.component.html',
                styleUrls: ['./add-question.component.scss'],
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["LectureService"] }, { type: _services_question_answers_service__WEBPACK_IMPORTED_MODULE_0__["QuestionAnswersService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: QuestionAnswersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersRoutingModule", function() { return QuestionAnswersRoutingModule; });
/* harmony import */ var _question_answers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-answers.component */ "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _question_answers_component__WEBPACK_IMPORTED_MODULE_0__["QuestionAnswersComponent"],
    },
    {
        path: 'view',
        loadChildren: () => __webpack_require__.e(/*! import() */ 168).then(__webpack_require__.bind(null, /*! ./view-question-answers/view-question-answers.module */ "./src/app/institute/branch/lecture/question-answers/view-question-answers/view-question-answers.module.ts")).then((m) => m.ViewQuestionAnswersModule),
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    { path: '**', redirectTo: 'page-not-found' },
];
class QuestionAnswersRoutingModule {
}
QuestionAnswersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: QuestionAnswersRoutingModule });
QuestionAnswersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function QuestionAnswersRoutingModule_Factory(t) { return new (t || QuestionAnswersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](QuestionAnswersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuestionAnswersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/question-answers.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: QuestionAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersComponent", function() { return QuestionAnswersComponent; });
/* harmony import */ var _add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-question-answers/add-question/add-question.component */ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question/add-question.component.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../authentication/auth/auth-service/auth.service */ "./src/app/authentication/auth/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_question_answers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/question-answers.service */ "./src/app/services/question-answers.service.ts");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


















function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const lectureQuestion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r11.editQuestion(lectureQuestion_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const lectureQuestion_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r14.deleteQuestion(lectureQuestion_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "nb-user", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_6_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const lectureQuestion_r7 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r17.viewQuestionAnswer(lectureQuestion_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_button_9_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lectureQuestion_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", lectureQuestion_r7.name ? lectureQuestion_r7.name : "Unknown")("title", ctx_r6.formatQuestionAnswerDate(lectureQuestion_r7.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", lectureQuestion_r7.createdBy === ctx_r6.user.imsMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", lectureQuestion_r7.createdBy === ctx_r6.user.imsMasterId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", lectureQuestion_r7.question, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function QuestionAnswersComponent_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuestionAnswersComponent_div_11_ng_container_2_nb_card_1_Template, 12, 5, "nb-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.questionsAnswers);
} }
function QuestionAnswersComponent_div_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You are first to Ask the Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function QuestionAnswersComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, QuestionAnswersComponent_div_11_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, QuestionAnswersComponent_div_11_ng_template_3_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.questionsAnswers.length > 0)("ngIfElse", _r4);
} }
function QuestionAnswersComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class QuestionAnswersComponent {
    constructor(authService, branchService, lectureService, questionAnswerService, toastrService, router, route, dialogService, dateService) {
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
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.editLectureQuestion = false;
        this.user = this.authService.getUserData();
        this.questionsAnswers = [];
        this.lectureService.getLectureData().subscribe((lecture) => {
            this.lecture = lecture;
            if (!this.lecture) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.getQuestionAnswers();
        });
    }
    getQuestionAnswers() {
        this.loading = true;
        this.questionAnswerService
            .getLectureQuestionAnswers(this.branchId, this.lecture.category, this.lecture.course, this.lecture.batch, this.lecture._id)
            .subscribe((questionsAnswers) => {
            this.questionsAnswers = questionsAnswers;
            this.loading = false;
        }, (err) => {
            this.loading = false;
        });
    }
    addQuestion() {
        this.openQuestionDialog();
    }
    openQuestionDialog() {
        this.dialogService
            .open(_add_question_answers_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_0__["AddQuestionComponent"], {
            context: {},
        })
            .onClose.subscribe((question) => question && this.saveLectureQuestion(question));
    }
    editQuestion(questionAnswer) {
        this.questionAnswerService.setQuestionId(questionAnswer._id);
        this.questionAnswerService.setQuestion(questionAnswer);
        this.editLectureQuestion = true;
        this.openQuestionDialog();
    }
    formatQuestionAnswerDate(questionDate) {
        const date = this.dateService.convertToDate(questionDate).toString();
        return date.substr(0, 21);
    }
    deleteQuestion(id, i) {
        this.loading = true;
        this.questionAnswerService.deleteLectureQuestion(id).subscribe((res) => {
            this.questionsAnswers.splice(i, 1);
            this.showToastr('top-right', 'success', `Question Deleted Successfully!`);
            this.loading = false;
        }, (err) => {
            this.showToastr('top-right', 'danger', err);
            this.loading = false;
        });
    }
    viewQuestionAnswer(questionAnswer) {
        this.questionAnswerService.setQuestionAnswersId(questionAnswer._id);
        this.questionAnswerService.setQuestionAnswers(questionAnswer);
        this.router.navigate(['./view'], { relativeTo: this.route });
    }
    saveLectureQuestion(question) {
        if (!this.editLectureQuestion) {
            question.name = this.user.name;
            this.questionsAnswers.push(question);
        }
        else {
            const index = this.questionsAnswers.findIndex((curQuestion) => curQuestion._id === question._id);
            if (index >= 0) {
                this.questionsAnswers[index] = question;
            }
            this.editLectureQuestion = false;
        }
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
}
QuestionAnswersComponent.ɵfac = function QuestionAnswersComponent_Factory(t) { return new (t || QuestionAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_5__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_question_answers_service__WEBPACK_IMPORTED_MODULE_6__["QuestionAnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"])); };
QuestionAnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: QuestionAnswersComponent, selectors: [["ngx-question-answers"]], decls: 14, vars: 2, consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "status", "primary", "fullWidth", "", 3, "click"], ["icon", "plus-circle-outline"], [1, "body-container"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["noQuestions", ""], [4, "ngFor", "ngForOf"], [1, "col-md-6", "col-12"], [3, "name", "title"], [1, "col-md-6", "col-12", "text-right"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "basic", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "primary", 1, "mr-3", 3, "click"], ["class", "mr-3", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], [3, "innerHTML"], ["nbButton", "", "size", "small", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 1, "mr-3", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function QuestionAnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Question & Answers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionAnswersComponent_Template_button_click_7_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nb-card-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, QuestionAnswersComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, QuestionAnswersComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbUserComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](QuestionAnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-question-answers',
                templateUrl: './question-answers.component.html',
                styleUrls: ['./question-answers.component.scss'],
            }]
    }], function () { return [{ type: _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"] }, { type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_5__["LectureService"] }, { type: _services_question_answers_service__WEBPACK_IMPORTED_MODULE_6__["QuestionAnswersService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"] }, { type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/question-answers/question-answers.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/question-answers/question-answers.module.ts ***!
  \**************************************************************************************/
/*! exports provided: QuestionAnswersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswersModule", function() { return QuestionAnswersModule; });
/* harmony import */ var _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-question-answers/add-question-answers.module */ "./src/app/institute/branch/lecture/question-answers/add-question-answers/add-question-answers.module.ts");
/* harmony import */ var _question_answers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-answers.component */ "./src/app/institute/branch/lecture/question-answers/question-answers.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question-answers-routing.module */ "./src/app/institute/branch/lecture/question-answers/question-answers-routing.module.ts");







class QuestionAnswersModule {
}
QuestionAnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: QuestionAnswersModule });
QuestionAnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function QuestionAnswersModule_Factory(t) { return new (t || QuestionAnswersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersRoutingModule"],
            _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](QuestionAnswersModule, { declarations: [_question_answers_component__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersRoutingModule"],
        _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](QuestionAnswersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [_question_answers_component__WEBPACK_IMPORTED_MODULE_1__["QuestionAnswersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _question_answers_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionAnswersRoutingModule"],
                    _add_question_answers_add_question_answers_module__WEBPACK_IMPORTED_MODULE_0__["AddQuestionAnswersModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);