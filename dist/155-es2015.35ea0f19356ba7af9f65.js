(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[155],{

/***/ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions-routing.module.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions-routing.module.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: ManageOnlineTestQuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOnlineTestQuestionsRoutingModule", function() { return ManageOnlineTestQuestionsRoutingModule; });
/* harmony import */ var _manage_online_test_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-online-test-questions.component */ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _manage_online_test_questions_component__WEBPACK_IMPORTED_MODULE_0__["ManageOnlineTestQuestionsComponent"] },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
let ManageOnlineTestQuestionsRoutingModule = /*@__PURE__*/ (() => {
    class ManageOnlineTestQuestionsRoutingModule {
    }
    ManageOnlineTestQuestionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageOnlineTestQuestionsRoutingModule });
    ManageOnlineTestQuestionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageOnlineTestQuestionsRoutingModule_Factory(t) { return new (t || ManageOnlineTestQuestionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageOnlineTestQuestionsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageOnlineTestQuestionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ManageOnlineTestQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOnlineTestQuestionsComponent", function() { return ManageOnlineTestQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../services/online-exam.service */ "./src/app/services/online-exam.service.ts");
/* harmony import */ var _services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../services/online-exam-question.service */ "./src/app/services/online-exam-question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ManageOnlineTestQuestionsComponent_button_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageOnlineTestQuestionsComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addOnlineExamQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nb-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageOnlineTestQuestionsComponent_ng_container_21_div_1_tr_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageOnlineTestQuestionsComponent_ng_container_21_div_1_tr_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const question_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.editOnlineExamQuestion(question_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageOnlineTestQuestionsComponent_ng_container_21_div_1_tr_11_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const question_r10 = ctx.$implicit; const i_r11 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.deleteOnlineExamQuestion(question_r10._id, i_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const question_r10 = ctx.$implicit;
        const i_r11 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r10.question.substring(0, 15) + (question_r10.question.length > 15 ? ".." : ""));
    }
}
function ManageOnlineTestQuestionsComponent_ng_container_21_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageOnlineTestQuestionsComponent_ng_container_21_div_1_tr_11_Template, 12, 2, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.onlineExamQuestions);
    }
}
function ManageOnlineTestQuestionsComponent_ng_container_21_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Online Exams Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageOnlineTestQuestionsComponent_ng_container_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageOnlineTestQuestionsComponent_ng_container_21_div_1_Template, 12, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageOnlineTestQuestionsComponent_ng_container_21_ng_template_2_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.onlineExamQuestions.length > 0)("ngIfElse", _r7);
    }
}
function ManageOnlineTestQuestionsComponent_ng_template_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let ManageOnlineTestQuestionsComponent = /*@__PURE__*/ (() => {
    class ManageOnlineTestQuestionsComponent {
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
            this.onlineExamQuestions = [];
            this.onlineExamService.getOnlineExamData().subscribe((onlineExam) => {
                this.onlineExam = onlineExam;
                if (!onlineExam) {
                    this.back();
                    return;
                }
                this.onlineExamQuestionService.getOnlineExamQuestions(onlineExam._id).subscribe((onlineExamQuestions) => {
                    this.onlineExamQuestions = onlineExamQuestions;
                    this.loading = false;
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            });
        }
        addOnlineExamQuestion() {
            this.router.navigate(['../add'], { relativeTo: this.route });
        }
        editOnlineExamQuestion(onlineExamQuestion) {
            this.onlineExamQuestionService.setOnlineExamQuestionId(onlineExamQuestion._id);
            this.onlineExamQuestionService.setOnlineExamQuestionData(onlineExamQuestion);
            this.router.navigate(['../edit'], { relativeTo: this.route, queryParams: { mode: 'edit' } });
        }
        changeOnlineExamQuestionStatus(id, status, i) {
            this.loading = true;
            this.onlineExamQuestionService.changeOnlineExamQuestionStatus(id, status).subscribe((res) => {
                this.onlineExamQuestions[i].status = status;
                this.loading = false;
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        deleteOnlineExamQuestion(id, i) {
            this.loading = true;
            this.onlineExamQuestionService.deleteOnlineExamQuestion(id).subscribe((res) => {
                this.onlineExamQuestions.splice(i, 1);
                this.loading = false;
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        back() {
            this.router.navigate(['../../manage'], { relativeTo: this.route });
        }
        ngOnDestroy() { }
    }
    ManageOnlineTestQuestionsComponent.ɵfac = function ManageOnlineTestQuestionsComponent_Factory(t) { return new (t || ManageOnlineTestQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_3__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_online_exam_question_service__WEBPACK_IMPORTED_MODULE_4__["OnlineExamQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    ManageOnlineTestQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageOnlineTestQuestionsComponent, selectors: [["ngx-manage-online-test-questions"]], decls: 24, vars: 5, consts: [[1, "row"], [1, "col-md-12"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "fullWidth", "", "status", "primary", 3, "click", 4, "ngIf"], [1, "body-container"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["nbButton", "", "size", "small", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "plus-circle-outline"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBatches", ""], [1, "table-responsive"], [1, "table"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageOnlineTestQuestionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageOnlineTestQuestionsComponent_Template_button_click_4_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Online Exam Questions");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageOnlineTestQuestionsComponent_button_17_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-card-body", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ManageOnlineTestQuestionsComponent_ng_container_21_Template, 4, 2, "ng-container", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ManageOnlineTestQuestionsComponent_ng_template_22_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add ", ctx.onlineExam.totalQuestions - ctx.onlineExamQuestions.length, " more Questions ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx.onlineExam.totalQuestions, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlineExamQuestions.length <= ctx.onlineExam.totalQuestions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [""] });
    return ManageOnlineTestQuestionsComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.module.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.module.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: ManageOnlineTestQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOnlineTestQuestionsModule", function() { return ManageOnlineTestQuestionsModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _manage_online_test_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-online-test-questions.component */ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-online-test-questions-routing.module */ "./src/app/institute/branch/exam/online-test/online-test-question/manage-online-test-questions/manage-online-test-questions-routing.module.ts");






let ManageOnlineTestQuestionsModule = /*@__PURE__*/ (() => {
    class ManageOnlineTestQuestionsModule {
    }
    ManageOnlineTestQuestionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageOnlineTestQuestionsModule });
    ManageOnlineTestQuestionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ManageOnlineTestQuestionsModule_Factory(t) { return new (t || ManageOnlineTestQuestionsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _manage_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageOnlineTestQuestionsRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            ]] });
    return ManageOnlineTestQuestionsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageOnlineTestQuestionsModule, { declarations: [_manage_online_test_questions_component__WEBPACK_IMPORTED_MODULE_1__["ManageOnlineTestQuestionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _manage_online_test_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageOnlineTestQuestionsRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]] });
})();


/***/ })

}]);