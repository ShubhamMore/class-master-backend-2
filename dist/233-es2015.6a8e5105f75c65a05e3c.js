(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[233],{

/***/ "./src/app/student/branch/course/online-test/online-test-result/online-test-result-routing.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-result/online-test-result-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OnlineTestResultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestResultRoutingModule", function() { return OnlineTestResultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
let OnlineTestResultRoutingModule = /*@__PURE__*/ (() => {
    class OnlineTestResultRoutingModule {
    }
    OnlineTestResultRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OnlineTestResultRoutingModule });
    OnlineTestResultRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OnlineTestResultRoutingModule_Factory(t) { return new (t || OnlineTestResultRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return OnlineTestResultRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnlineTestResultRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/student/branch/course/online-test/online-test-result/online-test-result.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-result/online-test-result.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OnlineTestResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestResultComponent", function() { return OnlineTestResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/online-exam.service */ "./src/app/services/online-exam.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






let OnlineTestResultComponent = /*@__PURE__*/ (() => {
    class OnlineTestResultComponent {
        constructor(onlineExamService, route, router, toastrService, location) {
            this.onlineExamService = onlineExamService;
            this.route = route;
            this.router = router;
            this.toastrService = toastrService;
            this.location = location;
            location.onPopState(() => {
                this.back();
            });
        }
        ngOnInit() {
            this.loading = true;
            this.onlineExamService.getOnlineExamData().subscribe((onlineExam) => {
                if (onlineExam) {
                    this.onlineExamService.getOnlineExamResult(onlineExam._id).subscribe((onlineExamResult) => {
                        this.onlineExamResult = onlineExamResult;
                        this.loading = false;
                    }, (error) => {
                        this.showToastr('top-right', 'danger', error);
                        this.back();
                    });
                }
                else {
                    this.back();
                }
            });
        }
        getPassingMarks(passingMarks, totalMarks) {
            return Math.ceil((+totalMarks / 100) * passingMarks);
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
    }
    OnlineTestResultComponent.ɵfac = function OnlineTestResultComponent_Factory(t) { return new (t || OnlineTestResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_1__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"])); };
    OnlineTestResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineTestResultComponent, selectors: [["ngx-online-test-result"]], decls: 66, vars: 12, consts: [["nbButton", "", "size", "small", "status", "basic", 1, "float-right", 3, "click"], ["icon", "close-outline"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered"]], template: function OnlineTestResultComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnlineTestResultComponent_Template_button_click_2_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Result of ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Exam Title:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Exam Date:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Exam Time:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total Marks:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Passing Marks:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Student Marks:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Status:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Answered Questions:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Unanswered Questions:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Correct Answers:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Wrong Answers:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExam.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExam.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExam.date);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExam.time);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExam.totalMarks);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPassingMarks(ctx.onlineExam.passingMarks, ctx.onlineExam.totalMarks));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.marks);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.status);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.answeredQuestions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.unAnsweredQuestions);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.correctAnswers);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.onlineExamResult.wrongAnswers);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"]], styles: [""] });
    return OnlineTestResultComponent;
})();


/***/ }),

/***/ "./src/app/student/branch/course/online-test/online-test-result/online-test-result.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/student/branch/course/online-test/online-test-result/online-test-result.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: OnlineTestResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestResultModule", function() { return OnlineTestResultModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _online_test_result_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./online-test-result-routing.module */ "./src/app/student/branch/course/online-test/online-test-result/online-test-result-routing.module.ts");
/* harmony import */ var _online_test_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./online-test-result.component */ "./src/app/student/branch/course/online-test/online-test-result/online-test-result.component.ts");






let OnlineTestResultModule = /*@__PURE__*/ (() => {
    class OnlineTestResultModule {
    }
    OnlineTestResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OnlineTestResultModule });
    OnlineTestResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OnlineTestResultModule_Factory(t) { return new (t || OnlineTestResultModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _online_test_result_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestResultRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            ]] });
    return OnlineTestResultModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnlineTestResultModule, { declarations: [_online_test_result_component__WEBPACK_IMPORTED_MODULE_4__["OnlineTestResultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _online_test_result_routing_module__WEBPACK_IMPORTED_MODULE_3__["OnlineTestResultRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"]] });
})();


/***/ })

}]);