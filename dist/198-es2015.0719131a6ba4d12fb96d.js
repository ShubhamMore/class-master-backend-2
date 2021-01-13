(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[198],{

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: StudentCourseInstallmentReceiptRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptRoutingModule", function() { return StudentCourseInstallmentReceiptRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-course-installment-receipt.component */ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts");





const routes = [
    {
        path: '',
        component: _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__["StudentCourseInstallmentReceiptComponent"],
    },
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
let StudentCourseInstallmentReceiptRoutingModule = /*@__PURE__*/ (() => {
    class StudentCourseInstallmentReceiptRoutingModule {
    }
    StudentCourseInstallmentReceiptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentCourseInstallmentReceiptRoutingModule });
    StudentCourseInstallmentReceiptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentCourseInstallmentReceiptRoutingModule_Factory(t) { return new (t || StudentCourseInstallmentReceiptRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return StudentCourseInstallmentReceiptRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseInstallmentReceiptRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: StudentCourseInstallmentReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptComponent", function() { return StudentCourseInstallmentReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../services/student-course-installment-receipt.service */ "./src/app/services/student-course-installment-receipt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function StudentCourseInstallmentReceiptComponent_nb_card_2_h6_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GST Number: ", ctx_r1.instituteBilling.gstNumber, "");
    }
}
function StudentCourseInstallmentReceiptComponent_nb_card_2_tr_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GST ", ctx_r2.course.feeDetails.gst, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.gstAmount, "/-");
    }
}
function StudentCourseInstallmentReceiptComponent_nb_card_2_tr_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Late Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.lateFee, "/-");
    }
}
function StudentCourseInstallmentReceiptComponent_nb_card_2_div_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "*Terms & Conditions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.instituteBilling.termsAndConditions);
    }
}
function StudentCourseInstallmentReceiptComponent_nb_card_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StudentCourseInstallmentReceiptComponent_nb_card_2_h6_7_Template, 2, 1, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StudentCourseInstallmentReceiptComponent_nb_card_2_tr_25_Template, 5, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StudentCourseInstallmentReceiptComponent_nb_card_2_tr_26_Template, 5, 1, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Total Amount in Words: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, StudentCourseInstallmentReceiptComponent_nb_card_2_div_40_Template, 7, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "This is Computer Generated receipt, Does not Required any Stamp or Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCourseInstallmentReceiptComponent_nb_card_2_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nb-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.instituteBilling.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.instituteBilling.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instituteBilling.gstNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.studentCourseInstallmentReceipt.description ? ctx_r0.studentCourseInstallmentReceipt.description : ctx_r0.course.basicDetails.courseName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.amount, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instituteBilling.gstNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseInstallmentReceipt.lateFee > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.totalAmount, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallmentReceipt.totalAmountInWords, " Only/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instituteBilling.termsAndConditions);
    }
}
let StudentCourseInstallmentReceiptComponent = /*@__PURE__*/ (() => {
    class StudentCourseInstallmentReceiptComponent {
        constructor(branchService, studentService, toastrService, studentCourseInstallmentReceiptService, router, route) {
            this.branchService = branchService;
            this.studentService = studentService;
            this.toastrService = toastrService;
            this.studentCourseInstallmentReceiptService = studentCourseInstallmentReceiptService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            this.categoryId = this.branchService.getCategoryId();
            this.studentId = this.studentService.getStudentId();
            // tslint:disable-next-line: max-line-length
            this.studentCourseInstallmentReceiptId = this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptId();
            if (!this.branchId ||
                !this.categoryId ||
                !this.studentId ||
                !this.studentCourseInstallmentReceiptId) {
                this.showToastr('top-right', 'danger', 'Invalid Receipt');
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.studentCourseInstallmentReceiptService
                .getStudentCourseInstallmentReceipt(this.studentCourseInstallmentReceiptId)
                .subscribe((res) => {
                this.studentCourseInstallmentReceipt = res.studentCourseInstallmentReceipt;
                this.instituteBilling = res.instituteBilling;
                this.course = res.course;
                if (!res.instituteBilling.gstNumber) {
                    this.amount = res.studentCourseInstallmentReceipt.amount.toFixed(2);
                }
                else {
                    const courseAmount = +res.studentCourseInstallmentReceipt.amount;
                    const gstPercentage = +res.course.feeDetails.gst;
                    const amount = courseAmount / (1 + gstPercentage / 100);
                    const gstAmount = courseAmount - amount;
                    this.gstAmount = gstAmount.toFixed(2);
                    this.amount = amount.toFixed(2);
                }
                this.lateFee = res.studentCourseInstallmentReceipt.lateFee.toFixed(2);
                this.totalAmount = res.studentCourseInstallmentReceipt.totalAmount.toFixed(2);
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            });
        }
        print() {
            window.print();
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        ngOnDestroy() {
            this.studentCourseInstallmentReceiptService.deleteStudentCourseInstallmentReceiptId();
        }
    }
    StudentCourseInstallmentReceiptComponent.ɵfac = function StudentCourseInstallmentReceiptComponent_Factory(t) { return new (t || StudentCourseInstallmentReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseInstallmentReceiptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    StudentCourseInstallmentReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCourseInstallmentReceiptComponent, selectors: [["ngx-student-course-installment-receipt"]], decls: 3, vars: 1, consts: [[1, "row"], [1, "col-sm-10", "mx-auto"], [4, "ngIf"], [1, "row", "p-4"], [1, "col-12"], [1, "text-center"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "p-2"], ["class", "p-2", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "text-center", "pt-5", "pb-5"], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["nbTooltip", "Print", "icon", "printer-outline"]], template: function StudentCourseInstallmentReceiptComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentCourseInstallmentReceiptComponent_nb_card_2_Template, 51, 10, "nb-card", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]], styles: [""] });
    return StudentCourseInstallmentReceiptComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.module.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.module.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: StudentCourseInstallmentReceiptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptModule", function() { return StudentCourseInstallmentReceiptModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-course-installment-receipt-routing.module */ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts");
/* harmony import */ var _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-course-installment-receipt.component */ "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts");






let StudentCourseInstallmentReceiptModule = /*@__PURE__*/ (() => {
    class StudentCourseInstallmentReceiptModule {
    }
    StudentCourseInstallmentReceiptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StudentCourseInstallmentReceiptModule });
    StudentCourseInstallmentReceiptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StudentCourseInstallmentReceiptModule_Factory(t) { return new (t || StudentCourseInstallmentReceiptModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentReceiptRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            ]] });
    return StudentCourseInstallmentReceiptModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentCourseInstallmentReceiptModule, { declarations: [_student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__["StudentCourseInstallmentReceiptComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentReceiptRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]] });
})();


/***/ })

}]);