(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/add-student-course/add-student-course-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AddStudentCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentCourseRoutingModule", function() { return AddStudentCourseRoutingModule; });
/* harmony import */ var _add_student_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-student-course.component */ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _add_student_course_component__WEBPACK_IMPORTED_MODULE_0__["AddStudentCourseComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
var AddStudentCourseRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function AddStudentCourseRoutingModule() {
    }
    AddStudentCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddStudentCourseRoutingModule });
    AddStudentCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddStudentCourseRoutingModule_Factory(t) { return new (t || AddStudentCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AddStudentCourseRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddStudentCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/add-student-course/add-student-course.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddStudentCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentCourseComponent", function() { return AddStudentCourseComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/discount-and-offer.service */ "./src/app/services/discount-and-offer.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _services_student_course_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../services/student-course.service */ "./src/app/services/student-course.service.ts");
/* harmony import */ var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../services/student-course-installment.service */ "./src/app/services/student-course-installment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
















var _c0 = ["stepper"];
function AddStudentCourseComponent_nb_card_0_nb_option_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var course_r22 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", course_r22._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r22.basicDetails.courseName);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_20_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Student Course is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_20_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.studentCourseForm.get("course").errors == null ? null : ctx_r3.studentCourseForm.get("course").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_nb_option_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var batch_r24 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", batch_r24._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](batch_r24.basicDetails.batchName);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_29_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Student Batch is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_29_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.studentCourseForm.get("batch").errors == null ? null : ctx_r5.studentCourseForm.get("batch").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_35_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Roll Number is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_35_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Roll Number should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_35_p_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This roll number already Exist! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_35_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_35_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddStudentCourseComponent_nb_card_0_ng_container_35_p_3_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.studentCourseForm.get("rollNumber").errors == null ? null : ctx_r6.studentCourseForm.get("rollNumber").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.studentCourseForm.get("rollNumber").errors == null ? null : ctx_r6.studentCourseForm.get("rollNumber").errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.rollNumberAlreadyExist);
    }
}
function AddStudentCourseComponent_nb_card_0_nb_option_43_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var discount_r29 = ctx.$implicit;
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", discount_r29._id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.getDiscount(discount_r29._id));
    }
}
function AddStudentCourseComponent_nb_card_0_nb_option_49_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var discountType_r30 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", discountType_r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, discountType_r30));
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_55_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Discount Amount should be more than or equal to 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_55_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Discount Percentage should be between 0% to 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_55_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_55_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_55_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.studentCourseForm.get("additionalDiscountAmount").errors == null ? null : ctx_r9.studentCourseForm.get("additionalDiscountAmount").errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.studentCourseForm.hasError("invalidDiscountPercentage"));
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_61_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Activation date is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_61_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_61_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.studentCourseForm.get("activationDate").errors == null ? null : ctx_r10.studentCourseForm.get("activationDate").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_67_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Net Payable Amount is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_67_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Net Payable Amount should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_67_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_67_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_67_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.studentCourseForm.get("netPayable").errors == null ? null : ctx_r11.studentCourseForm.get("netPayable").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.studentCourseForm.get("netPayable").errors == null ? null : ctx_r11.studentCourseForm.get("netPayable").errors.min);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_83_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_83_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_83_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.studentCourseFeeForm.get("date").errors == null ? null : ctx_r12.studentCourseFeeForm.get("date").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_99_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Student Course is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_99_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_99_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.studentCourseFeeForm.get("installmentType").errors == null ? null : ctx_r13.studentCourseFeeForm.get("installmentType").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_105_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number of Installments are Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_105_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Number of Installments should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_105_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_105_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_105_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.studentCourseFeeForm.get("noOfInstallments").errors == null ? null : ctx_r14.studentCourseFeeForm.get("noOfInstallments").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.studentCourseFeeForm.get("noOfInstallments").errors == null ? null : ctx_r14.studentCourseFeeForm.get("noOfInstallments").errors.min);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_111_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Pending Amount is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_111_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Pending Amount should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_111_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_111_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_111_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.studentCourseFeeForm.get("pendingAmount").errors == null ? null : ctx_r15.studentCourseFeeForm.get("pendingAmount").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.studentCourseFeeForm.get("pendingAmount").errors == null ? null : ctx_r15.studentCourseFeeForm.get("pendingAmount").errors.min);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_117_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Collected Amount is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_117_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Collected Amount should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_117_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_117_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_117_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.studentCourseFeeForm.get("amountCollected").errors == null ? null : ctx_r16.studentCourseFeeForm.get("amountCollected").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.studentCourseFeeForm.get("amountCollected").errors == null ? null : ctx_r16.studentCourseFeeForm.get("amountCollected").errors.min);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_123_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Amount is Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_123_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Amount should be greater than 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_ng_container_123_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_ng_container_123_p_1_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_ng_container_123_p_2_Template, 2, 0, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.studentCourseFeeForm.get("totalAmount").errors == null ? null : ctx_r17.studentCourseFeeForm.get("totalAmount").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.studentCourseFeeForm.get("totalAmount").errors == null ? null : ctx_r17.studentCourseFeeForm.get("totalAmount").errors.min);
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_7_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Installment ", i_r48 + 1, " Date is required ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_7_p_1_Template, 2, 1, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var installment_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("installmentDate").errors == null ? null : installment_r47.get("installmentDate").errors.required);
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Installment ", i_r48 + 1, " Amount is Required ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Installment ", i_r48 + 1, " Amount should be Minimum ", ctx_r56.getMinInstallmentAmount(i_r48), " ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Installment ", i_r48 + 1, " Amount should be Maximum ", ctx_r57.getMaxInstallmentAmount(i_r48), " ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_1_Template, 2, 1, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_2_Template, 2, 2, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_p_3_Template, 2, 2, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var installment_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("installmentAmount").errors == null ? null : installment_r47.get("installmentAmount").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.hasError("invalidMinInstallmentAmount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.hasError("invalidMaxInstallmentAmount"));
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Installment ", i_r48 + 1, " Pending Amount is Required ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Installment ", i_r48 + 1, " Pending Amount should be Minimum ", ctx_r63.getMinInstallmentPendingAmount(i_r48), " ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Installment ", i_r48 + 1, " Pending Amount should be Maximum ", ctx_r64.getMaxInstallmentPendingAmount(i_r48), " ");
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_1_Template, 2, 1, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_2_Template, 2, 2, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_p_3_Template, 2, 2, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var installment_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("amountPending").errors == null ? null : installment_r47.get("amountPending").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.hasError("invalidMinInstallmentPendingAmount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.hasError("invalidMaxInstallmentPendingAmount"));
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_7_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); var i_r48 = ctx.index; var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r69.customInstallmentAmount($event.target.value, i_r48); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_11_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_ng_container_15_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var installment_r47 = ctx.$implicit;
        var i_r48 = ctx.index;
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", installment_r47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Installment ", installment_r47.value.installmentNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "input-installmentDate-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "installmentDate-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r46.getMinInstallmentDate(i_r48))("max", ctx_r46.getMaxInstallmentDate(i_r48))("status", installment_r47.get("installmentDate").touched ? installment_r47.get("installmentDate").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("installmentDate").touched && installment_r47.get("installmentDate").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "input-installmentAmount-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "installmentAmount-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r46.getMinInstallmentAmount(i_r48))("max", ctx_r46.getMaxInstallmentAmount(i_r48))("status", installment_r47.get("installmentAmount").touched ? installment_r47.get("installmentAmount").invalid || installment_r47.hasError("invalidMinInstallmentAmount") || installment_r47.hasError("invalidMaxInstallmentAmount") ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("installmentAmount").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "input-amountPending-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "amountPending-", i_r48, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx_r46.getMinInstallmentPendingAmount(i_r48))("max", ctx_r46.getMaxInstallmentPendingAmount(i_r48))("status", installment_r47.get("amountPending").touched ? installment_r47.get("amountPending").invalid || installment_r47.hasError("invalidMinInstallmentPendingAmount") || installment_r47.hasError("invalidMaxInstallmentPendingAmount") ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", installment_r47.get("amountPending").touched);
    }
}
function AddStudentCourseComponent_nb_card_0_div_140_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Installment Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Installment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Installment Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Pending Amount after This Installment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddStudentCourseComponent_nb_card_0_div_140_ng_container_13_Template, 16, 20, "ng-container", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.studentCourseInstallmentForm.get("installments")["controls"]);
    }
}
function AddStudentCourseComponent_nb_card_0_ng_template_141_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Installments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddStudentCourseComponent_nb_card_0_tr_244_Template(rf, ctx) {
    if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var installment_r71 = ctx.$implicit;
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Installment ", installment_r71.value.installmentNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r21.dateService.formatDate(installment_r71.value.installmentDate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](installment_r71.value.installmentAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](installment_r71.value.amountPending);
    }
}
function AddStudentCourseComponent_nb_card_0_Template(rf, ctx) {
    if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentCourseComponent_nb_card_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r73.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-stepper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddStudentCourseComponent_nb_card_0_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.studentCourseFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Course:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nb-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddStudentCourseComponent_nb_card_0_Template_nb_select_selectedChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.onSelectCourse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Select Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddStudentCourseComponent_nb_card_0_nb_option_19_Template, 2, 2, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddStudentCourseComponent_nb_card_0_ng_container_20_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Batch:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nb-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddStudentCourseComponent_nb_card_0_Template_nb_select_selectedChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r77.onSelectBatch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Select Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AddStudentCourseComponent_nb_card_0_nb_option_28_Template, 2, 2, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddStudentCourseComponent_nb_card_0_ng_container_29_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Roll Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddStudentCourseComponent_nb_card_0_Template_input_input_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.checkRollNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AddStudentCourseComponent_nb_card_0_ng_container_35_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Discount/Offer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nb-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddStudentCourseComponent_nb_card_0_Template_nb_select_selectedChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r79.onSelectDiscount($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Select Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddStudentCourseComponent_nb_card_0_nb_option_43_Template, 2, 2, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Additional Discount Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nb-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddStudentCourseComponent_nb_card_0_Template_nb_select_selectedChange_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.changeAdditionalDiscountType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AddStudentCourseComponent_nb_card_0_nb_option_49_Template, 3, 4, "nb-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Additional Discount Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddStudentCourseComponent_nb_card_0_Template_input_input_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r81.onAdditionalDiscountAmount($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddStudentCourseComponent_nb_card_0_ng_container_55_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Activation Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddStudentCourseComponent_nb_card_0_ng_container_61_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Net Payable:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AddStudentCourseComponent_nb_card_0_ng_container_67_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "nb-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "nb-step", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddStudentCourseComponent_nb_card_0_Template_form_ngSubmit_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r82.studentCourseFeeFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, AddStudentCourseComponent_nb_card_0_ng_container_83_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Installment Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "nb-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddStudentCourseComponent_nb_card_0_Template_nb_select_selectedChange_88_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r83.onSelectInstallmentType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "nb-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Pay Once");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "nb-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Pay Twice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "nb-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Pay Quarterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "nb-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Pay Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "nb-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Pay Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, AddStudentCourseComponent_nb_card_0_ng_container_99_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Number of Installments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddStudentCourseComponent_nb_card_0_Template_input_input_104_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.generateNoOfInstallments($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, AddStudentCourseComponent_nb_card_0_ng_container_105_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Pending Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, AddStudentCourseComponent_nb_card_0_ng_container_111_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Amount Collected:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, AddStudentCourseComponent_nb_card_0_ng_container_117_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Total Payable Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, AddStudentCourseComponent_nb_card_0_ng_container_123_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentCourseComponent_nb_card_0_Template_button_click_127_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.previousStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "nb-icon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "nb-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "nb-step", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddStudentCourseComponent_nb_card_0_Template_form_ngSubmit_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r86.studentCourseInstallmentFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, AddStudentCourseComponent_nb_card_0_div_140_Template, 14, 1, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, AddStudentCourseComponent_nb_card_0_ng_template_141_Template, 2, 0, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentCourseComponent_nb_card_0_Template_button_click_146_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r87.previousStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "nb-icon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "nb-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "nb-step", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "table", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Course Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Roll Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Additional Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Net Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Activation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Course Fee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Number of Installments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Amount Collected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Pending Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Total Payable Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "th", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Installment Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "td", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "table", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Installment No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Installment Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Installment Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Pending Amount after Installment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](244, AddStudentCourseComponent_nb_card_0_tr_244_Template, 9, 4, "tr", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentCourseComponent_nb_card_0_Template_button_click_248_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.previousStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "nb-icon", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddStudentCourseComponent_nb_card_0_Template_button_click_253_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.saveStudentCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](142);
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx_r0.studentCourse ? "New Student Course" : "Edit Student Course", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx_r0.studentCourseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.studentCourseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("course").touched ? ctx_r0.studentCourseForm.get("course").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseForm.get("course").invalid && ctx_r0.studentCourseForm.get("course").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("batch").touched ? ctx_r0.studentCourseForm.get("batch").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.courseBatches);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseForm.get("batch").invalid && ctx_r0.studentCourseForm.get("batch").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("rollNumber").touched ? ctx_r0.studentCourseForm.get("rollNumber").invalid || ctx_r0.rollNumberAlreadyExist ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.studentCourseForm.get("rollNumber").invalid || ctx_r0.rollNumberAlreadyExist) && ctx_r0.studentCourseForm.get("rollNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.discounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx_r0.discountTypes.length > 0 ? ctx_r0.discountTypes[0] : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.discountTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("additionalDiscountAmount").touched ? ctx_r0.studentCourseForm.get("additionalDiscountAmount").invalid || ctx_r0.studentCourseForm.hasError("invalidDiscountPercentage") ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseForm.get("additionalDiscountAmount").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("activationDate").invalid ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseForm.get("activationDate").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseForm.get("netPayable").touched ? ctx_r0.studentCourseForm.get("netPayable").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseForm.get("netPayable").invalid && ctx_r0.studentCourseForm.get("netPayable").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx_r0.studentCourseFeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.studentCourseFeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("date").invalid ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("date").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("installmentType").touched ? ctx_r0.studentCourseFeeForm.get("installmentType").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("installmentType").invalid && ctx_r0.studentCourseFeeForm.get("installmentType").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("noOfInstallments").touched ? ctx_r0.studentCourseFeeForm.get("noOfInstallments").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("noOfInstallments").invalid && ctx_r0.studentCourseFeeForm.get("noOfInstallments").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("pendingAmount").invalid ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("pendingAmount").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("amountCollected").invalid ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("amountCollected").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.studentCourseFeeForm.get("totalAmount").invalid ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseFeeForm.get("totalAmount").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx_r0.studentCourseInstallmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.studentCourseInstallmentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.getNoOfInstallments() && ctx_r0.studentCourseInstallmentForm.get("installments")["controls"].length > 0)("ngIfElse", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getCourse(ctx_r0.studentCourseForm.value.course));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getBatch(ctx_r0.studentCourseForm.value.batch));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseForm.value.rollNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getDiscount(ctx_r0.studentCourseForm.value.discount));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.studentCourseForm.value.additionalDiscountAmount ? ctx_r0.studentCourseForm.value.additionalDiscountAmount + (ctx_r0.studentCourseForm.value.additionalDiscountType === "percentage" ? "%" : "") : "--", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseForm.value.netPayable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.dateService.formatDate(ctx_r0.studentCourseForm.value.activationDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.dateService.formatDate(ctx_r0.studentCourseFeeForm.value.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseFeeForm.getRawValue().noOfInstallments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseFeeForm.value.amountCollected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseFeeForm.value.pendingAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.studentCourseFeeForm.value.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.studentCourseInstallmentForm.get("installments")["controls"]);
    }
}
var AddStudentCourseComponent = /** @class */ /*@__PURE__*/ (function () {
    function AddStudentCourseComponent(dateService, toastrService, branchService, courseService, batchService, discountAndOfferService, studentService, studentCourseService, studentCourseInstallmentService, router, route) {
        this.dateService = dateService;
        this.toastrService = toastrService;
        this.branchService = branchService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.discountAndOfferService = discountAndOfferService;
        this.studentService = studentService;
        this.studentCourseService = studentCourseService;
        this.studentCourseInstallmentService = studentCourseInstallmentService;
        this.router = router;
        this.route = route;
        // route.queryParams.subscribe((param: Params) => {
        //   this.ngOnInit();
        // });
    }
    AddStudentCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        this.categoryId = this.branchService.getCategoryId();
        this.studentId = this.studentService.getStudentId();
        if (!this.branchId && !this.categoryId && !this.studentId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.studentCourseId = this.studentCourseService.getStudentCourseId();
        var mode;
        this.route.queryParams.subscribe(function (param) {
            mode = param.mode;
        });
        if (mode && mode !== 'edit') {
            this.showToastr('top-right', 'danger', 'Invalid Route');
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        else if (mode && !this.studentCourseId) {
            this.showToastr('top-right', 'danger', 'Student Course Not Found');
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.discounts = [];
        this.courses = [];
        this.batches = [];
        this.courseBatches = [];
        this.discountTypes = [];
        this.rollNumberAlreadyExist = false;
        this.courseService.getCoursesData().subscribe(function (courses) {
            _this.courses = courses;
        });
        this.batchService.getBatchesData().subscribe(function (batches) {
            _this.batches = batches;
        });
        this.discountAndOfferService
            .getDiscountAndOffersData()
            .subscribe(function (discountAndOffers) {
            _this.discounts = discountAndOffers;
        });
        this.discountTypes = this.discountAndOfferService.getDiscountTypes();
        this.studentCourseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            course: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] }),
            batch: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] }),
            rollNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)] }),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', {
                validators: [],
            }),
            additionalDiscountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.discountTypes.length > 0 ? this.discountTypes[0] : '', {
                validators: [],
            }),
            additionalDiscountAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            }),
            activationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            netPayable: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
        }, {
            validators: this.discountPercentageValidator.bind(this),
        });
        this.studentCourseFeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            installmentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('0', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            noOfInstallments: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](1, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)],
            }),
            pendingAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            }),
            amountCollected: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            }),
            totalAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            }),
        });
        this.studentCourseInstallmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            installments: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
        });
        if (mode && this.studentId && this.studentCourseId) {
            this.studentCourseService.getStudentCourseForEditing(this.studentCourseId).subscribe(function (res) {
                _this.studentCourse = res.studentCourse;
                _this.studentCourseInstallment = res.studentCourseInstallment;
                _this.studentCourseForm.patchValue({
                    course: _this.studentCourse.course,
                    activationDate: _this.studentCourse.activationDate,
                    rollNumber: _this.studentCourse.rollNumber,
                    discount: _this.studentCourse.discount,
                    additionalDiscountType: _this.studentCourse.additionalDiscountType,
                    additionalDiscountAmount: _this.studentCourse.additionalDiscountAmount,
                    netPayable: _this.studentCourse.netPayable,
                });
                _this.onSelectCourse(_this.studentCourse.course);
                _this.studentCourseForm.patchValue({
                    batch: _this.studentCourse.batch,
                });
                _this.disableStudentCourseDetails();
                if (_this.studentCourseInstallment) {
                    _this.studentCourseFeeForm.patchValue({
                        installmentType: _this.studentCourseInstallment.installmentType,
                        date: _this.studentCourseInstallment.date,
                        noOfInstallments: _this.studentCourseInstallment.noOfInstallments,
                        amountCollected: _this.studentCourseInstallment.amountCollected,
                        pendingAmount: _this.studentCourseInstallment.pendingAmount,
                        totalAmount: _this.studentCourseInstallment.totalAmount,
                    });
                    _this.disableStudentCourseFeeForm();
                    _this.resetStudentCourseInstallments();
                    _this.studentCourseInstallment.installments.forEach(function (installment, i) {
                        _this.addStudentCourseInstallment(installment);
                        if (installment.receiptId) {
                            // this.getStudentCourseInstallments()[i].get('installmentDate').disable();
                        }
                    });
                    _this.disableStudentCourseInstallmentFields();
                }
                _this.loading = false;
            }, function (err) {
                _this.showToastr('top-right', 'danger', err);
                _this.back();
            });
        }
        else {
            this.loading = false;
        }
    };
    AddStudentCourseComponent.prototype.discountPercentageValidator = function (group) {
        var discountType = group.getRawValue().additionalDiscountType;
        var amount = +group.getRawValue().additionalDiscountAmount;
        if (discountType === 'percentage' && amount > 100) {
            return { invalidDiscountPercentage: true };
        }
        return null;
    };
    AddStudentCourseComponent.prototype.checkRollNumber = function () {
        var _this = this;
        var rollNumber = this.studentCourseForm.getRawValue().rollNumber;
        var batchId = this.studentCourseForm.getRawValue().batch;
        if (rollNumber) {
            rollNumber = rollNumber.toString();
            if (this.studentCourse &&
                this.studentCourse.batch === batchId &&
                this.studentCourse.rollNumber === rollNumber) {
                return;
            }
            var courseId = this.studentCourseForm.getRawValue().course;
            if (courseId && batchId) {
                this.studentCourseService
                    .checkBatchRollNumber(this.branchId, this.categoryId, courseId, batchId, rollNumber)
                    .subscribe(function (res) {
                    _this.rollNumberAlreadyExist = res.rollNumberExist;
                }, function (err) { });
            }
        }
    };
    AddStudentCourseComponent.prototype.onSelectCourse = function (courseId) {
        this.studentCourseForm.patchValue({ batch: '' });
        this.courseBatches = [];
        this.courseBatches = this.batches.filter(function (curBatch) { return curBatch.course === courseId; });
        this.course = this.courses.find(function (curCourse) { return curCourse._id === courseId; });
        this.calculateNetPayableAmount();
    };
    AddStudentCourseComponent.prototype.onSelectBatch = function (batchId) {
        if (batchId !== '') {
            this.studentCourseForm.get('rollNumber').enable();
            this.batch = this.batches.find(function (curBatch) { return curBatch._id === batchId; });
            this.checkRollNumber();
        }
        else {
            this.studentCourseForm.get('rollNumber').disable();
        }
    };
    AddStudentCourseComponent.prototype.onSelectDiscount = function (discountId) {
        this.discount = this.discounts.find(function (curDicount) { return curDicount._id === discountId; });
        this.calculateNetPayableAmount();
    };
    AddStudentCourseComponent.prototype.onAdditionalDiscountAmount = function (amount) {
        if (amount >= 0) {
            this.calculateNetPayableAmount();
        }
    };
    AddStudentCourseComponent.prototype.changeAdditionalDiscountType = function () {
        this.studentCourseForm.patchValue({ additionalDiscount: 0 });
        this.calculateNetPayableAmount();
    };
    AddStudentCourseComponent.prototype.calculateNetPayableAmount = function () {
        var netPayable = 0;
        var totalDiscountPercentage = 0;
        var totalDiscountAmount = 0;
        var calculatedAmount = 0;
        var totalFee = this.course ? +this.course.feeDetails.totalFees : 0;
        var discountType = this.discount ? this.discount.discountType : '';
        var additionalDiscountType = this.studentCourseForm.getRawValue().additionalDiscountType;
        var discount = this.discount ? +this.discount.discountAmount : 0;
        var additionalDiscount = +this.studentCourseForm.getRawValue().additionalDiscountAmount;
        if (this.course && totalFee) {
            calculatedAmount = totalFee;
            if (this.discount && discountType) {
                if (discountType === 'percentage') {
                    totalDiscountPercentage += discount;
                }
                else {
                    totalDiscountAmount += discount;
                }
            }
            if (additionalDiscount) {
                if (additionalDiscountType === 'percentage') {
                    totalDiscountPercentage += additionalDiscount;
                }
                else {
                    totalDiscountAmount += additionalDiscount;
                }
            }
            var percentageAmount = (totalDiscountPercentage / 100) * totalFee;
            calculatedAmount = totalFee - totalDiscountAmount - percentageAmount;
            netPayable = calculatedAmount;
            this.studentCourseForm.patchValue({ netPayable: netPayable });
            this.studentCourseFeeForm.patchValue({ totalAmount: netPayable });
            this.calculatePendingAmount();
            var installmentType = this.studentCourseFeeForm.getRawValue().installmentType;
            this.onSelectInstallmentType(installmentType);
        }
    };
    AddStudentCourseComponent.prototype.calculatePendingAmount = function () {
        var pendingAmount = 0;
        var totalAmount = this.studentCourseFeeForm.getRawValue().totalAmount;
        var amountCollected = this.studentCourseFeeForm.getRawValue().amountCollected;
        pendingAmount = +totalAmount - (amountCollected ? amountCollected : 0);
        this.studentCourseFeeForm.patchValue({ pendingAmount: pendingAmount });
    };
    AddStudentCourseComponent.prototype.enableStudentCourseDetails = function () {
        this.studentCourseForm.get('course').enable();
        this.studentCourseForm.get('discount').enable();
        this.studentCourseForm.get('additionalDiscountType').enable();
        this.studentCourseForm.get('additionalDiscountAmount').enable();
    };
    AddStudentCourseComponent.prototype.disableStudentCourseDetails = function () {
        this.studentCourseForm.get('course').disable();
        this.studentCourseForm.get('discount').disable();
        this.studentCourseForm.get('additionalDiscountType').disable();
        this.studentCourseForm.get('additionalDiscountAmount').disable();
    };
    AddStudentCourseComponent.prototype.enableStudentCourseFeeForm = function () {
        this.studentCourseFeeForm.get('installmentType').enable();
        this.studentCourseFeeForm.get('noOfInstallments').enable();
    };
    AddStudentCourseComponent.prototype.disableStudentCourseFeeForm = function () {
        this.studentCourseFeeForm.get('installmentType').disable();
        this.studentCourseFeeForm.get('noOfInstallments').disable();
    };
    AddStudentCourseComponent.prototype.getStudentCourseInstallments = function () {
        var installments = this.studentCourseInstallmentForm.get('installments');
        return installments.controls;
    };
    AddStudentCourseComponent.prototype.resetStudentCourseInstallments = function () {
        var installments = this.studentCourseInstallmentForm.get('installments');
        installments.controls = [];
    };
    AddStudentCourseComponent.prototype.newStudentCourseInstallment = function (studentCourseInstallment) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment._id ? studentCourseInstallment._id : new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"]().toString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            installmentNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.installmentNo ? studentCourseInstallment.installmentNo : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            installmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.installmentDate
                ? studentCourseInstallment.installmentDate
                : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            installmentAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.installmentAmount
                ? studentCourseInstallment.installmentAmount
                : 0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            amountPending: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.installmentAmount ? studentCourseInstallment.amountPending : 0, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            }),
            receiptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.receiptId ? studentCourseInstallment.receiptId : null, {
                validators: [],
            }),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](studentCourseInstallment.status ? studentCourseInstallment.status : true, {
                validators: [],
            }),
        }, {
            validators: [
                this.minInstallmentAmountValidator.bind(this),
                this.maxInstallmentAmountValidator.bind(this),
                this.minInstallmentPendingAmountValidator.bind(this),
                this.maxInstallmentPendingAmountValidator.bind(this),
            ],
        });
    };
    AddStudentCourseComponent.prototype.minInstallmentAmountValidator = function (group) {
        var installmentNo = +group.getRawValue().installmentNo;
        var installmentAmount = +group.getRawValue().installmentAmount;
        var minInstallmentAmount = this.getMinInstallmentAmount(installmentNo - 1);
        if (installmentAmount < minInstallmentAmount) {
            return { invalidMinInstallmentAmount: true };
        }
        return null;
    };
    AddStudentCourseComponent.prototype.maxInstallmentAmountValidator = function (group) {
        var installmentNo = +group.getRawValue().installmentNo;
        var installmentAmount = +group.getRawValue().installmentAmount;
        var maxInstallmentAmount = this.getMaxInstallmentAmount(installmentNo - 1);
        if (installmentAmount > maxInstallmentAmount) {
            return { invalidMaxInstallmentAmount: true };
        }
        return null;
    };
    AddStudentCourseComponent.prototype.minInstallmentPendingAmountValidator = function (group) {
        var installmentNo = +group.getRawValue().installmentNo;
        var installmentPendingAmount = +group.getRawValue().amountPending;
        var minInstallmentPendingAmount = this.getMinInstallmentPendingAmount(installmentNo - 1);
        if (installmentPendingAmount < minInstallmentPendingAmount) {
            return { invalidMinInstallmentPendingAmount: true };
        }
        return null;
    };
    AddStudentCourseComponent.prototype.maxInstallmentPendingAmountValidator = function (group) {
        var installmentNo = +group.getRawValue().installmentNo;
        var installmentPendingAmount = +group.getRawValue().amountPending;
        var maxInstallmentPendingAmount = this.getMaxInstallmentPendingAmount(installmentNo - 1);
        if (installmentPendingAmount > maxInstallmentPendingAmount) {
            return { invalidMinInstallmentPendingAmount: true };
        }
        return null;
    };
    AddStudentCourseComponent.prototype.addStudentCourseInstallment = function (studentCourseInstallment) {
        var installments = this.getStudentCourseInstallments();
        installments.push(this.newStudentCourseInstallment(studentCourseInstallment));
    };
    AddStudentCourseComponent.prototype.onSelectInstallmentType = function (installmentType) {
        this.studentCourseFeeForm.patchValue({ amountCollected: 0 });
        if (installmentType === '0') {
            this.studentCourseFeeForm.get('noOfInstallments').disable();
            this.generateNoOfInstallments(1);
        }
        else if (installmentType === '1') {
            this.studentCourseFeeForm.get('noOfInstallments').disable();
            this.generateNoOfInstallments(2);
        }
        else if (installmentType === '2') {
            this.studentCourseFeeForm.get('noOfInstallments').disable();
            this.generateNoOfInstallments(4);
        }
        else if (installmentType === '3') {
            this.studentCourseFeeForm.get('noOfInstallments').disable();
            this.generateNoOfInstallments(this.course.basicDetails.duration);
        }
        else {
            this.studentCourseFeeForm.get('noOfInstallments').enable();
            var noOfInstallments = this.studentCourseFeeForm.getRawValue().noOfInstallments;
            this.generateNoOfInstallments(noOfInstallments);
        }
    };
    AddStudentCourseComponent.prototype.generateNoOfInstallments = function (noOfInstallments) {
        if (noOfInstallments) {
            noOfInstallments = noOfInstallments > 0 ? noOfInstallments : 3;
            this.studentCourseFeeForm.patchValue({ amountCollected: 0 });
            this.studentCourseFeeForm.patchValue({ noOfInstallments: noOfInstallments });
            var interval = 2592000000; // 30 * 24 * 60 * 60 * 1000
            var duration = +this.course.basicDetails.duration;
            var installmentDuration = duration / noOfInstallments;
            var date = this.studentCourseFeeForm.getRawValue().date;
            var netPayable = +this.studentCourseForm.getRawValue().netPayable;
            var amount = netPayable / noOfInstallments;
            var pendingAmount = +this.studentCourseFeeForm.getRawValue().pendingAmount;
            this.resetStudentCourseInstallments();
            for (var i = 0; i < noOfInstallments; i++) {
                var installmentDate = this.dateService.millisecondsToDateString(this.dateService.dateToMilliseconds(date) + interval * (installmentDuration * i));
                var amountPending = pendingAmount - +(amount * (i + 1));
                amountPending = amountPending < 0 ? 0 : amountPending;
                var installmentData = {
                    _id: new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"](),
                    installmentNo: (i + 1).toString(),
                    installmentDate: installmentDate,
                    installmentAmount: Math.ceil(amount),
                    amountPending: Math.ceil(amountPending),
                    receiptId: null,
                    status: true,
                };
                this.addStudentCourseInstallment(installmentData);
            }
            var installmentType = this.studentCourseFeeForm.getRawValue().installmentType;
            if (installmentType === '4') {
                this.enableStudentCourseInstallmentFields();
            }
            else {
                this.disableStudentCourseInstallmentFields();
            }
        }
    };
    AddStudentCourseComponent.prototype.customInstallmentAmount = function (amount, i) {
        if (!amount ||
            amount < this.getMinInstallmentAmount(i) ||
            amount > this.getMaxInstallmentAmount(i)) {
            return;
        }
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        var pendingAmount = i === 0
            ? this.studentCourseFeeForm.getRawValue().totalAmount
            : installments[i - 1].getRawValue().amountPending;
        var amountPending = pendingAmount - amount;
        installments[i].patchValue({ amountPending: amountPending });
        var noOfUnchangedInstallments = noOfInstallments - (i + 1) > 0 ? noOfInstallments - (i + 1) : 1;
        var installmentAmount = Math.ceil(amountPending / noOfUnchangedInstallments);
        if (i !== noOfInstallments - 1) {
            for (var j = 0; j < noOfUnchangedInstallments; j++) {
                var curAmountPending = amountPending - +(installmentAmount * (j + 1));
                curAmountPending = curAmountPending < 0 ? 0 : curAmountPending;
                var index = i + j + 1;
                if (index === noOfInstallments - 1) {
                    if (this.getMaxInstallmentAmount(index) < installmentAmount) {
                        installmentAmount = this.getMaxInstallmentAmount(index);
                    }
                }
                installments[index].patchValue({
                    installmentAmount: installmentAmount,
                    amountPending: curAmountPending,
                });
            }
        }
    };
    AddStudentCourseComponent.prototype.getMinInstallmentDate = function (i) {
        var installments = this.getStudentCourseInstallments();
        if (i === 0) {
            // First Installment
            return this.studentCourseFeeForm.getRawValue().date;
        }
        else {
            return installments[i - 1].getRawValue().installmentDate;
        }
    };
    AddStudentCourseComponent.prototype.getMaxInstallmentDate = function (i) {
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        if (i === 0 && noOfInstallments === 1) {
            // First Installment
            return this.studentCourseFeeForm.getRawValue().date;
        }
        else if (i === noOfInstallments - 1) {
            // Last Installment
            return this.dateService.millisecondsToDateString(this.dateService.dateToMilliseconds(this.studentCourseFeeForm.getRawValue().date) +
                1000 * 60 * 60 * 24 * 30 * this.course.basicDetails.duration);
        }
        else {
            return installments[i + 1].getRawValue().installmentDate;
        }
    };
    AddStudentCourseComponent.prototype.getMinInstallmentAmount = function (i) {
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        if (i === 0 && noOfInstallments === 1) {
            // First Installment for only 1 installment
            return this.studentCourseFeeForm.getRawValue().totalAmount;
        }
        else if (i === 0 && noOfInstallments > 1) {
            // Last Installment for more than 1 installment
            return 1;
        }
        else if (i === noOfInstallments - 1) {
            // Last Installment
            return installments[i - 1].getRawValue().amountPending;
        }
        else {
            return 1;
        }
    };
    AddStudentCourseComponent.prototype.getMaxInstallmentAmount = function (i) {
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        if (i === 0 && noOfInstallments >= 1) {
            // First Instalment
            return this.studentCourseFeeForm.getRawValue().totalAmount;
        }
        else if (i === noOfInstallments - 1) {
            // Last Installment
            return installments[i - 1].getRawValue().amountPending;
        }
        else {
            return installments[i - 1].getRawValue().amountPending;
        }
    };
    AddStudentCourseComponent.prototype.getMinInstallmentPendingAmount = function (i) {
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        if (i === 0 && noOfInstallments >= 1) {
            // First Installment
            return 0;
        }
        else if (i === noOfInstallments - 1) {
            // Last Installment
            return 0;
        }
        else {
            if (installments[i]) {
                return (installments[i - 1].getRawValue().amountPending -
                    installments[i].getRawValue().installmentAmount);
            }
            return 0;
        }
    };
    AddStudentCourseComponent.prototype.getMaxInstallmentPendingAmount = function (i) {
        var installments = this.getStudentCourseInstallments();
        var noOfInstallments = this.getNoOfInstallments();
        if (i === 0 && noOfInstallments >= 1) {
            // First Installment
            return this.studentCourseFeeForm.getRawValue().totalAmount;
        }
        else if (i === noOfInstallments - 1) {
            // Last Installment
            return 0;
        }
        else {
            if (installments[i]) {
                return (installments[i - 1].getRawValue().amountPending -
                    installments[i].getRawValue().installmentAmount +
                    1);
            }
        }
    };
    AddStudentCourseComponent.prototype.getNoOfInstallments = function () {
        return +this.studentCourseFeeForm.getRawValue().noOfInstallments;
    };
    AddStudentCourseComponent.prototype.enableStudentCourseInstallmentFields = function () {
        var installments = this.getStudentCourseInstallments();
        installments.forEach(function (installment) {
            installment.get('installmentAmount').enable();
            // installment.get('amountPending').enable();
        });
    };
    AddStudentCourseComponent.prototype.disableStudentCourseInstallmentFields = function () {
        var installments = this.getStudentCourseInstallments();
        installments.forEach(function (installment) {
            installment.get('installmentAmount').disable();
            // installment.get('amountPending').disable();
        });
    };
    AddStudentCourseComponent.prototype.previousStep = function () {
        if (this.studentCourse) {
            this.disableStudentCourseDetails();
        }
        var installmentType = this.studentCourseFeeForm.getRawValue().installmentType;
        if (this.studentCourseInstallment) {
            this.disableStudentCourseInstallmentFields();
        }
        else if (installmentType !== '4') {
            this.disableStudentCourseInstallmentFields();
        }
        this.stepper.previous();
    };
    AddStudentCourseComponent.prototype.studentCourseFormSubmit = function () {
        this.studentCourseForm.markAllAsTouched();
        if (this.rollNumberAlreadyExist) {
            this.showToastr('top-right', 'danger', 'Student Roll Number for this Batch already Exist');
            return;
        }
        else if (this.studentCourseForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Details are Required');
            return;
        }
        if (this.studentCourse) {
            this.enableStudentCourseDetails();
        }
        this.stepper.next();
    };
    AddStudentCourseComponent.prototype.studentCourseFeeFormSubmit = function () {
        this.studentCourseFeeForm.markAllAsTouched();
        if (this.studentCourseFeeForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Fee Details are Required');
            return;
        }
        this.stepper.next();
    };
    AddStudentCourseComponent.prototype.studentCourseInstallmentFormSubmit = function () {
        this.studentCourseInstallmentForm.markAllAsTouched();
        if (this.studentCourseInstallmentForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Installment Details are Required');
            return;
        }
        if (!this.validateStudentCourseInstallmentForm()) {
            this.showToastr('top-right', 'danger', 'Student Course Installment Details are Required');
            return;
        }
        this.enableStudentCourseInstallmentFields();
        this.stepper.next();
    };
    AddStudentCourseComponent.prototype.validateStudentCourseInstallmentForm = function () {
        var installments = this.getStudentCourseInstallments();
        var invalidInstallments = false;
        installments.forEach(function (installment, i) {
            if (installment.invalid) {
                invalidInstallments = true;
            }
        });
        if (invalidInstallments) {
            return false;
        }
        return true;
    };
    AddStudentCourseComponent.prototype.saveStudentCourse = function () {
        var _this = this;
        this.studentCourseForm.markAllAsTouched();
        this.studentCourseFeeForm.markAllAsTouched();
        this.studentCourseInstallmentForm.markAllAsTouched();
        if (this.rollNumberAlreadyExist) {
            this.showToastr('top-right', 'danger', 'Student Roll Number for this Batch already Exist');
            return;
        }
        else if (this.studentCourseForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Details are Required');
            return;
        }
        else if (this.studentCourseFeeForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Fee Details are Required');
            return;
        }
        else if (this.studentCourseInstallmentForm.invalid) {
            this.showToastr('top-right', 'danger', 'Student Course Installment Details are Required');
            return;
        }
        else if (!this.validateStudentCourseInstallmentForm()) {
            this.showToastr('top-right', 'danger', 'Student Course Installment Details are Required');
            return;
        }
        this.loading = true;
        var studentCourseDetails = this.studentCourseForm.getRawValue();
        studentCourseDetails.branch = this.branchId;
        studentCourseDetails.category = this.categoryId;
        studentCourseDetails.student = this.studentId;
        var studentCourseInstallmentDetails = this.studentCourseFeeForm.getRawValue();
        studentCourseInstallmentDetails.installments = this.studentCourseInstallmentForm.getRawValue().installments;
        studentCourseInstallmentDetails.branch = this.branchId;
        studentCourseInstallmentDetails.category = this.categoryId;
        studentCourseInstallmentDetails.course = studentCourseDetails.course;
        studentCourseInstallmentDetails.student = this.studentId;
        if (!this.studentCourse && !this.studentCourseInstallment) {
            this.studentCourseService
                .addStudentCourse(studentCourseDetails, studentCourseInstallmentDetails)
                .subscribe(function (res) {
                _this.showToastr('top-right', 'success', 'Student Course Created Successfully!');
                _this.back();
                _this.loading = false;
            }, function (err) {
                _this.showToastr('top-right', 'danger', err);
                _this.loading = false;
            });
        }
        else if (this.studentCourse && !this.studentCourseInstallment) {
            this.studentCourseInstallmentService
                .addStudentCourseInstallment(this.studentCourse._id, studentCourseInstallmentDetails)
                .subscribe(function (res) {
                _this.showToastr('top-right', 'success', 'Student Course Installments Created Successfully!');
                _this.back();
                _this.loading = false;
            }, function (err) {
                _this.showToastr('top-right', 'danger', err);
                _this.loading = false;
            });
        }
        else {
            studentCourseDetails._id = this.studentCourse._id;
            studentCourseInstallmentDetails._id = this.studentCourseInstallment._id;
            this.studentCourseService
                .editStudentCourse(studentCourseDetails, studentCourseInstallmentDetails)
                .subscribe(function (res) {
                _this.showToastr('top-right', 'success', 'Student Course Updated Successfully!');
                _this.back();
                _this.loading = false;
            }, function (err) {
                _this.showToastr('top-right', 'danger', err);
                _this.loading = false;
            });
        }
        this.loading = false;
    };
    AddStudentCourseComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    AddStudentCourseComponent.prototype.getCourse = function (courseId) {
        var course = this.courses.find(function (curCourse) { return curCourse._id === courseId; });
        if (course) {
            return course.basicDetails.courseName;
        }
        return '--';
    };
    AddStudentCourseComponent.prototype.getBatch = function (batchId) {
        var batch = this.batches.find(function (curBatch) { return curBatch._id === batchId; });
        if (batch) {
            return batch.basicDetails.batchName;
        }
        return '--';
    };
    AddStudentCourseComponent.prototype.getDiscount = function (discountId) {
        var discount = this.discounts.find(function (curDiscount) { return curDiscount._id === discountId; });
        if (discount) {
            var discountString = discount.offerName +
                ' (' +
                discount.code +
                ' - ' +
                discount.discountAmount +
                (discount.discountType === 'percentage' ? '%' : '.00') +
                ')';
            return discountString;
        }
        return '--';
    };
    AddStudentCourseComponent.prototype.back = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    AddStudentCourseComponent.prototype.ngOnDestroy = function () { };
    AddStudentCourseComponent.ɵfac = function AddStudentCourseComponent_Factory(t) { return new (t || AddStudentCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_7__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_discount_and_offer_service__WEBPACK_IMPORTED_MODULE_8__["DiscountAndOfferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_service__WEBPACK_IMPORTED_MODULE_10__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_11__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"])); };
    AddStudentCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddStudentCourseComponent, selectors: [["ngx-add-student-course"]], viewQuery: function AddStudentCourseComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
        }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Course Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-4"], [1, "form-control-group"], ["for", "input-student-course", 1, "label"], ["id", "input-student-course", "name", "course", "formControlName", "course", "placeholder", "Select Course", "fullWidth", "", 3, "status", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-student-batch", 1, "label"], ["id", "input-student-batch", "name", "batch", "formControlName", "batch", "placeholder", "Select Batch", "fullWidth", "", 3, "status", "selectedChange"], ["for", "input-roll-number", 1, "label"], ["type", "number", "nbInput", "", "id", "input-roll-number", "name", "rollNumber", "formControlName", "rollNumber", "min", "1", "placeholder", "Roll Number", "fullWidth", "", 3, "status", "input"], ["for", "input-student-discount", 1, "label"], ["id", "input-student-discount", "name", "discount", "formControlName", "discount", "placeholder", "Select Discount", "fullWidth", "", 3, "selectedChange"], ["for", "input-additional-discount-type", 1, "label"], ["id", "input-additional-discount-type", "name", "additionalDiscountType", "formControlName", "additionalDiscountType", "placeholder", "Select Discount Type", "fullWidth", "", 3, "selected", "selectedChange"], ["for", "input-discount-amount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-discount-amount", "name", "additionalDiscountAmount", "formControlName", "additionalDiscountAmount", "placeholder", "Discount Amount", "min", "0", "fullWidth", "", 3, "status", "input"], [1, "col-md-6"], ["for", "input-activation-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-activation-date", "name", "activationDate", "formControlName", "activationDate", "placeholder", "Activation Date", "fullWidth", "", 3, "status"], ["for", "input-net-payable", 1, "label"], ["type", "number", "nbInput", "", "id", "input-net-payable", "name", "netPayable", "formControlName", "netPayable", "placeholder", "Net Payable", "min", "0", "fullWidth", "", "disabled", "true", 3, "status"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Course Fee Details", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "Date", "fullWidth", "", 3, "status"], ["for", "input-course-installment-type", 1, "label"], ["id", "input-course-installment-type", "name", "installmentType", "formControlName", "installmentType", "placeholder", "Select Installment Type", "fullWidth", "", 3, "status", "selectedChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["for", "input-noOfInstallments", 1, "label"], ["type", "number", "nbInput", "", "id", "input-noOfInstallments", "name", "noOfInstallments", "formControlName", "noOfInstallments", "placeholder", "Number of Installments", "min", "0", "fullWidth", "", 3, "status", "input"], ["for", "input-pendingAmount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-pendingAmount", "name", "pendingAmount", "formControlName", "pendingAmount", "placeholder", "Pending Amount", "min", "0", "fullWidth", "", "disabled", "true", 3, "status"], ["for", "input-amountCollected", 1, "label"], ["type", "number", "nbInput", "", "id", "input-amountCollected", "name", "amountCollected", "formControlName", "amountCollected", "placeholder", "Amount Collected", "min", "0", "fullWidth", "", "disabled", "true", 3, "status"], ["for", "input-totalAmount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-totalAmount", "name", "totalAmount", "formControlName", "totalAmount", "placeholder", "Total Amount", "min", "0", "fullWidth", "", "disabled", "true", 3, "status"], [1, "col-md-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["label", "Installment Details", 3, "stepControl"], [1, "col-md-12"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noInstallments", ""], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], ["colspan", "2"], [1, "table", "table-sm", "table-bordered"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", 3, "click"], [3, "value"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "formGroup"], ["type", "date", "nbInput", "", "formControlName", "installmentDate", "placeholder", "Installment Date", "fullWidth", "", 3, "id", "name", "min", "max", "status"], ["type", "number", "nbInput", "", "formControlName", "installmentAmount", "placeholder", "Installment Amount", "fullWidth", "", 3, "id", "name", "min", "max", "status", "input"], ["type", "number", "nbInput", "", "formControlName", "amountPending", "placeholder", "Pending Amount", "fullWidth", "", "disabled", "true", 3, "id", "name", "min", "max", "status"], [1, "mt-4", "text-center"]], template: function AddStudentCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddStudentCourseComponent_nb_card_0_Template, 256, 53, "nb-card", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"]], styles: [""] });
    return AddStudentCourseComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/employee/branch/student/student-course/add-student-course/add-student-course.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddStudentCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentCourseModule", function() { return AddStudentCourseModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _add_student_course_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-student-course-routing.module */ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course-routing.module.ts");
/* harmony import */ var _add_student_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-student-course.component */ "./src/app/employee/branch/student/student-course/add-student-course/add-student-course.component.ts");







var AddStudentCourseModule = /** @class */ /*@__PURE__*/ (function () {
    function AddStudentCourseModule() {
    }
    AddStudentCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddStudentCourseModule });
    AddStudentCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AddStudentCourseModule_Factory(t) { return new (t || AddStudentCourseModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _add_student_course_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddStudentCourseRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            ]] });
    return AddStudentCourseModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddStudentCourseModule, { declarations: [_add_student_course_component__WEBPACK_IMPORTED_MODULE_5__["AddStudentCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _add_student_course_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddStudentCourseRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] });
})();


/***/ })

}]);