(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[193],{

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment-routing.module.ts":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment-routing.module.ts ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: ManageStudentCourseInstallmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseInstallmentRoutingModule", function() { return ManageStudentCourseInstallmentRoutingModule; });
/* harmony import */ var _manage_student_course_installment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-student-course-installment.component */ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _manage_student_course_installment_component__WEBPACK_IMPORTED_MODULE_0__["ManageStudentCourseInstallmentComponent"],
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
let ManageStudentCourseInstallmentRoutingModule = /*@__PURE__*/ (() => {
    class ManageStudentCourseInstallmentRoutingModule {
    }
    ManageStudentCourseInstallmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudentCourseInstallmentRoutingModule });
    ManageStudentCourseInstallmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudentCourseInstallmentRoutingModule_Factory(t) { return new (t || ManageStudentCourseInstallmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageStudentCourseInstallmentRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentCourseInstallmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: ManageStudentCourseInstallmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseInstallmentComponent", function() { return ManageStudentCourseInstallmentComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../services/student-course-installment-receipt.service */ "./src/app/services/student-course-installment-receipt.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const installment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.editReceipt(installment_r7._id, installment_r7.receiptId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const installment_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.deleteReceipt(installment_r7._id, installment_r7.receiptId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const installment_r7 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return installment_r7.receiptId ? ctx_r17.showReceipt(installment_r7.receiptId) : ctx_r17.collectInstallment(installment_r7._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_13_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_button_15_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const installment_r7 = ctx.$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Installment ", installment_r7.installmentNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.dateService.formatDate(installment_r7.installmentDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](installment_r7.installmentAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](installment_r7.amountPending);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", installment_r7.receiptId ? "success" : "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", installment_r7.receiptId ? "Receipt" : " Collect", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r7.receiptId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r7.receiptId);
    }
}
function ManageStudentCourseInstallmentComponent_ng_container_13_div_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Installment No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Installment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Installment Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pending Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Collect/Receipt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ManageStudentCourseInstallmentComponent_ng_container_13_div_32_tr_17_Template, 16, 8, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.studentCourseInstallment.installments);
    }
}
function ManageStudentCourseInstallmentComponent_ng_container_13_ng_template_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Student Course Installments Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function ManageStudentCourseInstallmentComponent_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Course: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Collected Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Pending Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Total Amount: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ManageStudentCourseInstallmentComponent_ng_container_13_div_32_Template, 18, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ManageStudentCourseInstallmentComponent_ng_container_13_ng_template_33_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, ctx_r0.getCourseName(ctx_r0.studentCourseInstallment.course)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.dateService.formatDate(ctx_r0.studentCourseInstallment.date), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallment.amountCollected, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallment.pendingAmount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseInstallment.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseInstallment.installments.length > 0)("ngIfElse", _r4);
    }
}
function ManageStudentCourseInstallmentComponent_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
let ManageStudentCourseInstallmentComponent = /*@__PURE__*/ (() => {
    class ManageStudentCourseInstallmentComponent {
        constructor(branchService, dateService, toastrService, studentCourseInstallmentService, studentCourseInstallmentReceiptService, courseService, studentService, router, route) {
            this.branchService = branchService;
            this.dateService = dateService;
            this.toastrService = toastrService;
            this.studentCourseInstallmentService = studentCourseInstallmentService;
            this.studentCourseInstallmentReceiptService = studentCourseInstallmentReceiptService;
            this.courseService = courseService;
            this.studentService = studentService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            this.categoryId = this.branchService.getCategoryId();
            this.studentId = this.studentService.getStudentId();
            this.courseId = this.courseService.getCourseId();
            this.studentCourseInstallmentId = this.studentCourseInstallmentService.getStudentCourseInstallmentId();
            if (!this.branchId ||
                !this.categoryId ||
                !this.courseId ||
                !this.studentId ||
                !this.studentCourseInstallmentId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            // New Code
            this.studentCourseInstallmentService
                .getStudentCourseInstallment(this.studentCourseInstallmentId)
                .subscribe((studentCourseInstallment) => {
                this.studentCourseInstallmentService.setStudentCourseInstallmentData(studentCourseInstallment);
                this.studentCourseInstallment = studentCourseInstallment;
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.router.navigate(['../'], { relativeTo: this.route });
            });
            //  Old Code
            // this.studentCourseInstallmentService
            //   .getStudentCourseInstallmentData()
            //   .subscribe((studentCourseInstallment: StudentCourseInstallmentModel) => {
            //     this.studentCourseInstallment = studentCourseInstallment;
            //   });
            // this.loading = false;
        }
        getStudentName() {
            return this.studentService.getStudentName().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((studentName) => {
                return studentName;
            }));
        }
        getCourseName(courseId) {
            return this.courseService.getCourseName(courseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((courseName) => {
                return courseName;
            }));
        }
        editReceipt(installmentId, receiptId) {
            this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(receiptId);
            this.studentCourseInstallmentService.setCourseInstallmentId(installmentId);
            this.router.navigate(['../edit'], { relativeTo: this.route, queryParams: { mode: 'edit' } });
        }
        showReceipt(receiptId) {
            this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(receiptId);
            this.router.navigate(['../receipt'], { relativeTo: this.route });
        }
        deleteReceipt(installmentId, receiptId) {
            this.loading = true;
            this.studentCourseInstallmentReceiptService
                .deleteStudentCourseInstallmentReceipt(receiptId)
                .subscribe((res) => {
                this.studentCourseInstallmentService.setCourseInstallmentReceipt(installmentId, null);
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.loading = false;
            });
        }
        collectInstallment(installmentId) {
            this.studentCourseInstallmentService.setCourseInstallmentId(installmentId);
            this.router.navigate(['../collect'], { relativeTo: this.route });
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        ngOnDestroy() { }
    }
    ManageStudentCourseInstallmentComponent.ɵfac = function ManageStudentCourseInstallmentComponent_Factory(t) { return new (t || ManageStudentCourseInstallmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_5__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_6__["StudentCourseInstallmentReceiptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
    ManageStudentCourseInstallmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageStudentCourseInstallmentComponent, selectors: [["ngx-manage-student-course-installment"]], decls: 16, vars: 7, consts: [[1, "row"], [1, "col-md-9"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "table-responsive"], [1, "table"], [1, "border", "shadow-sm"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noStudentCourseInstallments", ""], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", 3, "status", "click"], ["nbButton", "", "size", "small", "status", "basic", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbTooltip", "Edit Receipt", "icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], ["nbTooltip", "Delete Receipt", "icon", "trash-outline"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageStudentCourseInstallmentComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Installments ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card-body", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ManageStudentCourseInstallmentComponent_ng_container_13_Template, 35, 9, "ng-container", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ManageStudentCourseInstallmentComponent_ng_template_14_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, ctx.getStudentName())), "");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}"] });
    return ManageStudentCourseInstallmentComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.module.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.module.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: ManageStudentCourseInstallmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentCourseInstallmentModule", function() { return ManageStudentCourseInstallmentModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-student-course-installment-routing.module */ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment-routing.module.ts");
/* harmony import */ var _manage_student_course_installment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-student-course-installment.component */ "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.component.ts");






let ManageStudentCourseInstallmentModule = /*@__PURE__*/ (() => {
    class ManageStudentCourseInstallmentModule {
    }
    ManageStudentCourseInstallmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudentCourseInstallmentModule });
    ManageStudentCourseInstallmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudentCourseInstallmentModule_Factory(t) { return new (t || ManageStudentCourseInstallmentModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manage_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentCourseInstallmentRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            ]] });
    return ManageStudentCourseInstallmentModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentCourseInstallmentModule, { declarations: [_manage_student_course_installment_component__WEBPACK_IMPORTED_MODULE_4__["ManageStudentCourseInstallmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _manage_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentCourseInstallmentRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]] });
})();


/***/ })

}]);