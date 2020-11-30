(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[228],{

/***/ "./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: OnlineTestQuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionRoutingModule", function() { return OnlineTestQuestionRoutingModule; });
/* harmony import */ var _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./online-test-question.component */ "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _online_test_question_component__WEBPACK_IMPORTED_MODULE_0__["OnlineTestQuestionComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
class OnlineTestQuestionRoutingModule {
}
OnlineTestQuestionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlineTestQuestionRoutingModule });
OnlineTestQuestionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlineTestQuestionRoutingModule_Factory(t) { return new (t || OnlineTestQuestionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestQuestionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnlineTestQuestionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OnlineTestQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionComponent", function() { return OnlineTestQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/online-exam-question.service */ "./src/app/services/online-exam-question.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/online-exam.service */ "./src/app/services/online-exam.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function OnlineTestQuestionComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return !ctx_r5.examStarted ? ctx_r5.startExam() : ctx_r5.submitExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", !ctx_r0.examStarted ? "Start" : "Submit", " Exam ");
} }
function OnlineTestQuestionComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.getDate(ctx_r1.onlineExam.date), ".\u00A0", ctx_r1.getTime(ctx_r1.onlineExam.time), "");
} }
function OnlineTestQuestionComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Click on Start Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_div_7_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Exam will End In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r9.examCountDownTimer, " ");
} }
function OnlineTestQuestionComponent_div_7_div_2_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Exam Ended ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_div_7_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_div_7_div_2_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r15.previousQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_div_7_div_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnlineTestQuestionComponent_div_7_div_2_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r17.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("checkedChange", function OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template_nb_checkbox_checkedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const answer_r20 = ctx.$implicit; const i_r21 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r22.markAnswer(ctx_r22.currentQuestion._id, ctx_r22.currentQuestionIndex, answer_r20._id, i_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", i_r21 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](answer_r20.answer);
} }
function OnlineTestQuestionComponent_div_7_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "Strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OnlineTestQuestionComponent_div_7_div_2_div_10_div_8_Template, 7, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx_r13.currentQuestionIndex + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r13.currentQuestion.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r13.currentQuestion.answers);
} }
function OnlineTestQuestionComponent_div_7_div_2_div_11_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Calculating Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_div_7_div_2_div_11_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "You got: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Attempted: ", ctx_r25.onlineExamResult.answeredQuestions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Unattempted: ", ctx_r25.onlineExamResult.unAnsweredQuestions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Correct Answers: ", ctx_r25.onlineExamResult.correctAnswers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Wrong Answers: ", ctx_r25.onlineExamResult.wrongAnswers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r25.onlineExamResult.marks, "/", ctx_r25.onlineExam.totalMarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r25.onlineExamResult.status ? "Pass" : "Failed");
} }
function OnlineTestQuestionComponent_div_7_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OnlineTestQuestionComponent_div_7_div_2_div_11_p_2_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OnlineTestQuestionComponent_div_7_div_2_div_11_p_3_Template, 21, 7, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.calculatingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r14.calculatingResult);
} }
function OnlineTestQuestionComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OnlineTestQuestionComponent_div_7_div_2_p_3_Template, 4, 1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OnlineTestQuestionComponent_div_7_div_2_p_4_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, OnlineTestQuestionComponent_div_7_div_2_button_6_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OnlineTestQuestionComponent_div_7_div_2_button_8_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, OnlineTestQuestionComponent_div_7_div_2_div_10_Template, 9, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OnlineTestQuestionComponent_div_7_div_2_div_11_Template, 4, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.examCountDownTimer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.examCountDownTimer && ctx_r8.examSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.currentQuestionIndex > 0 && !ctx_r8.examSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.currentQuestionIndex < ctx_r8.questions.length - 1 && !ctx_r8.examSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.examSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.examSubmitted);
} }
function OnlineTestQuestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OnlineTestQuestionComponent_div_7_div_1_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OnlineTestQuestionComponent_div_7_div_2_Template, 12, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.examStarted);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.examStarted);
} }
function OnlineTestQuestionComponent_ng_template_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function OnlineTestQuestionComponent_ng_template_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Exam will Start In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r27.waitingToStart, " ");
} }
function OnlineTestQuestionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OnlineTestQuestionComponent_ng_template_8_span_1_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OnlineTestQuestionComponent_ng_template_8_span_2_Template, 4, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.waitingToStart === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.waitingToStart !== "loading");
} }
class OnlineTestQuestionComponent {
    constructor(branchService, toastrService, onlineExamService, onlineExamQuestionService, router, route) {
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.onlineExamService = onlineExamService;
        this.onlineExamQuestionService = onlineExamQuestionService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.waitingToStart = 'loading';
        this.onlineExamService.getOnlineExamData().subscribe((onlineExam) => {
            if (!onlineExam) {
                this.back();
                return;
            }
            this.onlineExam = onlineExam;
        });
        this.questions = [];
        this.onlineExamService.getOnlineExamResult(this.onlineExam._id).subscribe((onlineExamResult) => {
            if (onlineExamResult) {
                this.onlineExamResult = onlineExamResult;
                this.waitingToStart = null;
                this.examStarted = true;
                this.examSubmitted = true;
                this.calculatingResult = false;
            }
            else {
                const startTime = this.onlineExam.date + 'T' + this.onlineExam.time;
                const countDownDate = new Date(startTime).getTime();
                this.examStartTime = countDownDate;
                this.examStarted = false;
                this.examSubmitted = false;
                this.examTimeUp = false;
                // Set Interval
                const interval = setInterval(() => {
                    // Get today's date and time
                    const now = new Date().getTime();
                    // Find the distance time between current date and the count down date
                    const distance = countDownDate - now;
                    // Time calculations for days, hours, minutes and seconds
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    // Output the result in an 'waitingToStart' object variable
                    this.waitingToStart = hours + 'H ' + minutes + 'M ' + seconds + 'S ';
                    if (distance < 0) {
                        // Clear Interval
                        clearInterval(interval);
                        this.waitingToStart = null;
                    }
                    if (this.loading) {
                        this.loading = false;
                    }
                }, 1000);
            }
            this.loading = false;
        }, (error) => {
            this.showToastr('top-right', 'danger', error);
            this.loading = false;
        });
    }
    getDate(date) {
        date = new Date(date).toString();
        return date.substring(0, 3) + ', ' + date.substring(4, 15);
    }
    getTime(time) {
        const hours = +time.split(':')[0];
        const minutes = time.split(':')[1];
        if (+hours > 12) {
            return (+hours - 12).toString().padStart(2, '0') + ':' + minutes + ' PM';
        }
        return hours.toString().padStart(2, '0') + ':' + minutes + ' AM';
    }
    startExam() {
        this.onlineExamQuestionService.getOnlineExamQuestionsForStudent(this.onlineExam._id).subscribe((onlineExamQuestions) => {
            this.questions = onlineExamQuestions;
            this.waitingToStart = null;
            this.examStarted = true;
            this.studentQuestionAnswers = [];
            this.currentQuestionIndex = 0;
            this.currentQuestion = this.questions[0];
            // Buffer time in millisecond (For calculating Exam Data)
            const bufferTime = 0 * 1000;
            const duration = +this.onlineExam.duration * 60 * 1000;
            const currentTime = new Date().getTime();
            const endTime = this.examStartTime + duration + bufferTime;
            const differenceTime = endTime - currentTime;
            if (differenceTime >= duration) {
                this.examEndTime = currentTime + duration;
            }
            else if (endTime > currentTime) {
                this.examEndTime = this.examStartTime + duration + bufferTime;
                this.examCountDown();
            }
            else {
                this.examEndTime = null;
                this.examTimeUp = true;
                this.submitExam();
            }
        }, (error) => {
            this.showToastr('top-right', 'danger', error);
        });
    }
    examCountDown() {
        this.examInterval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get today's date and time
            const now = new Date().getTime();
            // Find the distance time between current date and the count down date
            const distance = this.examEndTime - now;
            // Time calculations for days, hours, minutes and seconds
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an 'CountDown' object variable
            this.examCountDownTimer = hours + 'H ' + minutes + 'M ' + seconds + 'S ';
            if (distance < 0) {
                this.examCountDownTimer = null;
                this.examTimeUp = true;
                this.submitExam();
            }
        }), 1000);
    }
    previousQuestion() {
        this.currentQuestionIndex -= 1;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
    nextQuestion() {
        this.currentQuestionIndex += 1;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
    markAnswer(questionId, questionIndex, answerId, answerIndex, mark) {
        const index = this.studentQuestionAnswers.findIndex((curAnswer) => curAnswer.questionId === questionId);
        if (mark) {
            if (index < 0) {
                const studentQuestionAnswers = {
                    questionId,
                    questionIndex,
                    answerIds: [],
                };
                studentQuestionAnswers.answerIds.push(answerId);
                this.studentQuestionAnswers.push(studentQuestionAnswers);
            }
            else {
                const studentQuestionAnswers = this.studentQuestionAnswers[index];
                studentQuestionAnswers.answerIds.push(answerId);
                this.studentQuestionAnswers[index] = studentQuestionAnswers;
            }
        }
        else {
            if (index > -1) {
                const studentQuestionAnswers = this.studentQuestionAnswers[index];
                const ansIndex = studentQuestionAnswers.answerIds.findIndex((curAnsId) => curAnsId.answerId === answerId);
                studentQuestionAnswers.answerIds.splice(ansIndex, 1);
                this.studentQuestionAnswers[index] = studentQuestionAnswers;
            }
        }
    }
    submitExam() {
        let confirm = true;
        if (!this.examTimeUp) {
            confirm = window.confirm('Do you want to Submit the Exam?');
        }
        if (!confirm) {
            return;
        }
        this.calculatingResult = true;
        this.examSubmitted = true;
        this.currentQuestion = null;
        this.currentQuestionIndex = null;
        // Clear Interval
        clearInterval(this.examInterval);
        this.examCountDownTimer = null;
        this.onlineExamService
            .saveOnlineExamResult(this.studentQuestionAnswers, this.onlineExam._id)
            .subscribe((res) => {
            this.onlineExamResult = res.onlineExamResult;
            if (res.type === 0) {
                this.showToastr('top-right', 'success', 'Exam Submitted Successfully!');
            }
            this.calculatingResult = false;
        }, (error) => {
            this.showToastr('top-right', 'danger', error);
        });
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    back() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        clearInterval(this.examInterval);
    }
}
OnlineTestQuestionComponent.ɵfac = function OnlineTestQuestionComponent_Factory(t) { return new (t || OnlineTestQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_3__["OnlineExamQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
OnlineTestQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OnlineTestQuestionComponent, selectors: [["ngx-online-test-question"]], decls: 10, vars: 5, consts: [["type", "button", "class", "float-right", "nbButton", "", "size", "small", "status", "success", 3, "click", 4, "ngIf"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["examStartCountDown", ""], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["id", "countDown", 1, "pt-5", "pb-5", "text-center"], [1, "row"], [1, "col-12"], ["class", "text-right", "id", "examCountDownTimer", 4, "ngIf"], [1, "col-6"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Previous Question", 3, "click", 4, "ngIf"], ["class", "float-right", "type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Next Question", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "examCountDownTimer", 1, "text-right"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Previous Question", 3, "click"], ["icon", "arrow-ios-back-outline"], ["type", "button", "nbButton", "", "size", "small", "status", "success", "nbTooltip", "Next Question", 1, "float-right", 3, "click"], ["icon", "arrow-ios-forward-outline"], [1, "text-center"], [4, "ngFor", "ngForOf"], [3, "checkedChange"], [1, "col-12", "pt-3", "pb-3"], ["class", "text-center", 4, "ngIf"], ["id", "waitingToStart", 1, "pt-5", "pb-5", "text-center"]], template: function OnlineTestQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OnlineTestQuestionComponent_button_2_Template, 2, 1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, OnlineTestQuestionComponent_p_5_Template, 3, 2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OnlineTestQuestionComponent_div_7_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OnlineTestQuestionComponent_ng_template_8_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.examSubmitted && !ctx.waitingToStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.onlineExam ? ctx.onlineExam.title : "Online Exam", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onlineExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.waitingToStart)("ngIfElse", _r3);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OnlineTestQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'ngx-online-test-question',
                templateUrl: './online-test-question.component.html',
                styleUrls: ['./online-test-question.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }, { type: _services_online_exam_service__WEBPACK_IMPORTED_MODULE_5__["OnlineExamService"] }, { type: _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_3__["OnlineExamQuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/branch/course/online-test/online-test-question/online-test-question.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-question/online-test-question.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: OnlineTestQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestQuestionModule", function() { return OnlineTestQuestionModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-test-question-routing.module */ "./src/app/student/branch/course/online-test/online-test-question/online-test-question-routing.module.ts");
/* harmony import */ var _online_test_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-test-question.component */ "./src/app/student/branch/course/online-test/online-test-question/online-test-question.component.ts");






class OnlineTestQuestionModule {
}
OnlineTestQuestionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlineTestQuestionModule });
OnlineTestQuestionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlineTestQuestionModule_Factory(t) { return new (t || OnlineTestQuestionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestQuestionModule, { declarations: [_online_test_question_component__WEBPACK_IMPORTED_MODULE_4__["OnlineTestQuestionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnlineTestQuestionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_online_test_question_component__WEBPACK_IMPORTED_MODULE_4__["OnlineTestQuestionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _online_test_question_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestQuestionRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCheckboxModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);