function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34], {
  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment-routing.module.ts":
  /*!****************************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment-routing.module.ts ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: CollectStudentCourseInstallmentRoutingModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentCollectStudentCourseInstallmentCollectStudentCourseInstallmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectStudentCourseInstallmentRoutingModule", function () {
      return CollectStudentCourseInstallmentRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _collect_student_course_installment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./collect-student-course-installment.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.component.ts");

    var routes = [{
      path: '',
      component: _collect_student_course_installment_component__WEBPACK_IMPORTED_MODULE_2__["CollectStudentCourseInstallmentComponent"]
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

    var CollectStudentCourseInstallmentRoutingModule = function CollectStudentCourseInstallmentRoutingModule() {
      _classCallCheck(this, CollectStudentCourseInstallmentRoutingModule);
    };

    CollectStudentCourseInstallmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CollectStudentCourseInstallmentRoutingModule
    });
    CollectStudentCourseInstallmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CollectStudentCourseInstallmentRoutingModule_Factory(t) {
        return new (t || CollectStudentCourseInstallmentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CollectStudentCourseInstallmentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectStudentCourseInstallmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.component.ts":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.component.ts ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: CollectStudentCourseInstallmentComponent */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentCollectStudentCourseInstallmentCollectStudentCourseInstallmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectStudentCourseInstallmentComponent", function () {
      return CollectStudentCourseInstallmentComponent;
    });
    /* harmony import */


    var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../../services/student-course-installment.service */
    "./src/app/services/student-course-installment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../services/student-course-installment-receipt.service */
    "./src/app/services/student-course-installment-receipt.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["stepper"];

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_17_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Generated By is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_17_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.courseInstallmentReceiptForm.get("generatedBy").errors == null ? null : ctx_r2.courseInstallmentReceiptForm.get("generatedBy").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_23_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Installment Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_23_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.courseInstallmentReceiptForm.get("date").errors == null ? null : ctx_r3.courseInstallmentReceiptForm.get("date").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Installment Amount is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum Installment Amount should be 0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_p_2_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.courseInstallmentReceiptForm.get("amount").errors == null ? null : ctx_r4.courseInstallmentReceiptForm.get("amount").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.courseInstallmentReceiptForm.get("amount").errors == null ? null : ctx_r4.courseInstallmentReceiptForm.get("amount").errors.min);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_35_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum late fee Amount should be 0. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_35_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.courseInstallmentReceiptForm.get("lateFee").errors == null ? null : ctx_r5.courseInstallmentReceiptForm.get("lateFee").errors.min);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total Amount is Required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum late fee Amount should be 0. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_p_2_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.courseInstallmentReceiptForm.get("totalAmount").errors == null ? null : ctx_r6.courseInstallmentReceiptForm.get("totalAmount").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.courseInstallmentReceiptForm.get("totalAmount").errors == null ? null : ctx_r6.courseInstallmentReceiptForm.get("totalAmount").errors.min);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pending Amount is Required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Minimum Pending Amount should be 0. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_p_2_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.courseInstallmentReceiptForm.get("amountDue").errors == null ? null : ctx_r7.courseInstallmentReceiptForm.get("amountDue").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.courseInstallmentReceiptForm.get("amountDue").errors == null ? null : ctx_r7.courseInstallmentReceiptForm.get("amountDue").errors.min);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_53_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Payment date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_53_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.courseInstallmentReceiptForm.get("paymentDate").errors == null ? null : ctx_r8.courseInstallmentReceiptForm.get("paymentDate").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_71_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Payment Mode is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_71_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.courseInstallmentReceiptForm.get("paymentMode").errors == null ? null : ctx_r9.courseInstallmentReceiptForm.get("paymentMode").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_77_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Bank Details are required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_77_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.courseInstallmentReceiptForm.get("bankDetails").errors == null ? null : ctx_r10.courseInstallmentReceiptForm.get("bankDetails").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_83_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Transaction Details are required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_83_p_1_Template, 2, 0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.courseInstallmentReceiptForm.get("transactionDetails").errors == null ? null : ctx_r11.courseInstallmentReceiptForm.get("transactionDetails").errors.required);
      }
    }

    function CollectStudentCourseInstallmentComponent_nb_card_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectStudentCourseInstallmentComponent_nb_card_0_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r25.back();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Back ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Collect Installment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nb-stepper", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-step", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function CollectStudentCourseInstallmentComponent_nb_card_0_Template_form_submit_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r27.courseInstallmentReceiptFormSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Generated By:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_17_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Installment Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_23_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Installment Amount:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_29_Template, 3, 2, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Late Fee:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function CollectStudentCourseInstallmentComponent_nb_card_0_Template_input_input_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r28.calculateTotalAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_35_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Total Fee:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_41_Template, 3, 2, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Pending Amount:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_47_Template, 3, 2, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Payment Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_53_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Payment Mode:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "nb-select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "nb-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Select Payment Mode");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "nb-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Cash");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "nb-option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "nb-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Waller");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "nb-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Online");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "nb-option", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Other");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_71_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Bank Details:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_77_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Transaction Details:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, CollectStudentCourseInstallmentComponent_nb_card_0_ng_container_83_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Description:");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "textarea", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "nb-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "nb-step", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "table", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](106, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Generated By");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Installment Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Installment Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Late Fee");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Total Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "Payment Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "Payment Mode");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](142, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "Bank Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "Transaction Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "description");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "Pending Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](163, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectStudentCourseInstallmentComponent_nb_card_0_Template_button_click_166_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r29.previousStep();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](167, "nb-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "prev");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CollectStudentCourseInstallmentComponent_nb_card_0_Template_button_click_171_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          return ctx_r30.saveCourseInstallmentReceipt();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stepControl", ctx_r0.courseInstallmentReceiptForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.courseInstallmentReceiptForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("generatedBy").touched ? ctx_r0.courseInstallmentReceiptForm.get("generatedBy").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("generatedBy").invalid && ctx_r0.courseInstallmentReceiptForm.get("generatedBy").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("date").touched ? ctx_r0.courseInstallmentReceiptForm.get("date").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("date").invalid && ctx_r0.courseInstallmentReceiptForm.get("date").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("amount").touched ? ctx_r0.courseInstallmentReceiptForm.get("amount").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("amount").invalid && ctx_r0.courseInstallmentReceiptForm.get("amount").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("lateFee").touched ? ctx_r0.courseInstallmentReceiptForm.get("lateFee").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("lateFee").invalid && ctx_r0.courseInstallmentReceiptForm.get("lateFee").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("totalAmount").touched ? ctx_r0.courseInstallmentReceiptForm.get("totalAmount").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("totalAmount").invalid && ctx_r0.courseInstallmentReceiptForm.get("totalAmount").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("amountDue").touched ? ctx_r0.courseInstallmentReceiptForm.get("amountDue").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("amountDue").invalid && ctx_r0.courseInstallmentReceiptForm.get("amountDue").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("paymentDate").touched ? ctx_r0.courseInstallmentReceiptForm.get("paymentDate").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("paymentDate").touched && ctx_r0.courseInstallmentReceiptForm.get("paymentDate").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("paymentMode").touched ? ctx_r0.courseInstallmentReceiptForm.get("paymentMode").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("paymentMode").touched && ctx_r0.courseInstallmentReceiptForm.get("paymentMode").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("bankDetails").touched ? ctx_r0.courseInstallmentReceiptForm.get("bankDetails").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("bankDetails").invalid && ctx_r0.courseInstallmentReceiptForm.get("bankDetails").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("status", ctx_r0.courseInstallmentReceiptForm.get("transactionDetails").touched ? ctx_r0.courseInstallmentReceiptForm.get("transactionDetails").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.courseInstallmentReceiptForm.get("transactionDetails").invalid && ctx_r0.courseInstallmentReceiptForm.get("transactionDetails").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](106, 36, ctx_r0.getCourseName(ctx_r0.courseId)));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.generatedBy);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.dateService.formatDate(ctx_r0.courseInstallmentReceiptForm.value.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.courseInstallmentReceiptForm.value.amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.lateFee);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.totalAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.dateService.formatDate(ctx_r0.courseInstallmentReceiptForm.value.paymentDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](142, 38, ctx_r0.courseInstallmentReceiptForm.value.paymentMode));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.bankDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.transactionDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.courseInstallmentReceiptForm.value.amountDue);
      }
    }

    var CollectStudentCourseInstallmentComponent =
    /*#__PURE__*/
    function () {
      function CollectStudentCourseInstallmentComponent(dateService, branchService, toastrService, studentService, courseService, studentCourseInstallmentService, studentCourseInstallmentReceiptService, router, route) {
        _classCallCheck(this, CollectStudentCourseInstallmentComponent);

        this.dateService = dateService;
        this.branchService = branchService;
        this.toastrService = toastrService;
        this.studentService = studentService;
        this.courseService = courseService;
        this.studentCourseInstallmentService = studentCourseInstallmentService;
        this.studentCourseInstallmentReceiptService = studentCourseInstallmentReceiptService;
        this.router = router;
        this.route = route;
      }

      _createClass(CollectStudentCourseInstallmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();
          this.categoryId = this.branchService.getCategoryId();
          this.courseId = this.courseService.getCourseId();
          this.studentId = this.studentService.getStudentId();
          this.courseInstallmentId = this.studentCourseInstallmentService.getCourseInstallmentId();

          if (!this.branchId || !this.categoryId || !this.courseId || !this.studentId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          this.studentCourseInstallmentId = this.studentCourseInstallmentService.getStudentCourseInstallmentId();
          this.courseInstallmentReceiptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            generatedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(0)]
            }),
            lateFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(0)]
            }),
            totalAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(0)]
            }),
            paymentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.dateService.getDateString(), {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            bankDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: []
            }),
            transactionDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: []
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: []
            }),
            amountDue: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(0)]
            })
          });
          var mode;
          this.route.queryParams.subscribe(function (param) {
            mode = param.mode;
          });

          if (mode && mode !== 'edit') {
            this.showToastr('top-right', 'danger', 'Invalid Route');
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          } // tslint:disable-next-line: max-line-length


          this.studentCourseInstallmentReceiptId = this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptId();

          if (mode && !this.studentCourseInstallmentReceiptId) {
            this.showToastr('top-right', 'danger', 'Receipt Id Not Provided');
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          if (this.studentCourseInstallmentReceiptId) {
            this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptForEditing(this.studentCourseInstallmentReceiptId).subscribe(function (studentCourseInstallmentReceipt) {
              if (!studentCourseInstallmentReceipt) {
                _this.showToastr('top-right', 'danger', 'Receipt Not Available');

                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });

                return;
              }

              _this.studentCourseInstallmentReceipt = studentCourseInstallmentReceipt;

              _this.courseInstallmentReceiptForm.patchValue({
                generatedBy: _this.studentCourseInstallmentReceipt.generatedBy,
                date: _this.studentCourseInstallmentReceipt.date,
                amount: _this.studentCourseInstallmentReceipt.amount,
                lateFee: _this.studentCourseInstallmentReceipt.lateFee,
                totalAmount: _this.studentCourseInstallmentReceipt.totalAmount,
                paymentDate: _this.studentCourseInstallmentReceipt.paymentDate,
                paymentMode: _this.studentCourseInstallmentReceipt.paymentMode,
                bankDetails: _this.studentCourseInstallmentReceipt.bankDetails,
                transactionDetails: _this.studentCourseInstallmentReceipt.transactionDetails,
                description: _this.studentCourseInstallmentReceipt.description,
                amountDue: _this.studentCourseInstallmentReceipt.amountDue
              });

              _this.loading = false;
            }, function (err) {
              _this.showToastr('top-right', 'danger', 'Receipt Not Available');

              _this.router.navigate(['../'], {
                relativeTo: _this.route
              });
            });
          } else {
            this.studentCourseInstallmentService.getCourseInstallment(this.courseInstallmentId).subscribe(function (courseInstallment) {
              if (!courseInstallment) {
                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });

                return;
              }

              _this.courseInstallment = courseInstallment;

              _this.courseInstallmentReceiptForm.patchValue({
                date: courseInstallment.installmentDate,
                amount: courseInstallment.installmentAmount,
                amountDue: courseInstallment.amountPending
              });

              _this.calculateTotalAmount();

              _this.loading = false;
            });
          }
        }
      }, {
        key: "calculateTotalAmount",
        value: function calculateTotalAmount() {
          var lateFee = +this.courseInstallmentReceiptForm.getRawValue().lateFee;

          if (!lateFee || lateFee < 0) {
            lateFee = 0;
          }

          var amount = +this.courseInstallmentReceiptForm.getRawValue().amount;
          var totalAmount = amount + lateFee;
          this.courseInstallmentReceiptForm.patchValue({
            totalAmount: totalAmount
          });
        }
      }, {
        key: "previousStep",
        value: function previousStep() {
          this.stepper.previous();
        }
      }, {
        key: "courseInstallmentReceiptFormSubmit",
        value: function courseInstallmentReceiptFormSubmit() {
          this.courseInstallmentReceiptForm.markAllAsTouched();

          if (this.courseInstallmentReceiptForm.invalid) {
            this.showToastr('top-right', 'danger', 'Receipt Details are Required');
            return;
          }

          this.stepper.next();
        }
      }, {
        key: "saveCourseInstallmentReceipt",
        value: function saveCourseInstallmentReceipt() {
          var _this2 = this;

          if (this.courseInstallmentReceiptForm.invalid) {
            this.showToastr('top-right', 'danger', 'Receipt Details are Required');
            return;
          }

          this.loading = true;
          var receiptDetails = this.courseInstallmentReceiptForm.getRawValue();
          receiptDetails.studentCourseInstallmentId = this.studentCourseInstallmentId;
          receiptDetails.courseInstallmentId = this.courseInstallmentId;
          receiptDetails.branch = this.branchId;
          receiptDetails.category = this.categoryId;
          receiptDetails.course = this.courseId;
          receiptDetails.student = this.studentId;

          if (!this.studentCourseInstallmentReceipt) {
            this.studentCourseInstallmentReceiptService.addStudentCourseInstallmentReceipt(receiptDetails).subscribe(function (res) {
              _this2.showToastr('top-right', 'success', 'Installment Receipt Generated Successfully!'); // this.studentCourseInstallmentService.setCourseInstallmentReceipt(
              //   this.courseInstallmentId,
              //   res.receiptId,
              // );


              _this2.back();
            }, function (err) {
              _this2.showToastr('top-right', 'danger', err);

              _this2.loading = false;
            });
          } else {
            receiptDetails._id = this.studentCourseInstallmentReceipt._id;
            this.studentCourseInstallmentReceiptService.editStudentCourseInstallmentReceipt(receiptDetails).subscribe(function (res) {
              _this2.showToastr('top-right', 'success', 'Installment Receipt Updated Successfully!');

              _this2.back();
            }, function (err) {
              _this2.showToastr('top-right', 'danger', err);

              _this2.loading = false;
            });
          }
        }
      }, {
        key: "getCourseName",
        value: function getCourseName(courseId) {
          return this.courseService.getCourseName(courseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (courseName) {
            return courseName;
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../'], {
            relativeTo: this.route
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.studentCourseInstallmentReceiptService.deleteStudentCourseInstallmentReceiptId();
          this.studentCourseInstallmentService.deleteCourseInstallmentId();
        }
      }]);

      return CollectStudentCourseInstallmentComponent;
    }();

    CollectStudentCourseInstallmentComponent.ɵfac = function CollectStudentCourseInstallmentComponent_Factory(t) {
      return new (t || CollectStudentCourseInstallmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_0__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_9__["StudentCourseInstallmentReceiptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    CollectStudentCourseInstallmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CollectStudentCourseInstallmentComponent,
      selectors: [["ngx-collect-student-course-installment"]],
      viewQuery: function CollectStudentCourseInstallmentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Receipt Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-generatedBy", 1, "label"], ["type", "text", "nbInput", "", "id", "input-generatedBy", "name", "generatedBy", "formControlName", "generatedBy", "placeholder", "Generated By", "fullWidth", "", 3, "status"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "Date", "fullWidth", "", "disabled", "true", 3, "status"], [1, "col-md-4"], ["for", "input-amount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-amount", "name", "amount", "min", "0", "formControlName", "amount", "placeholder", "amount", "fullWidth", "", "disabled", "true", 3, "status"], ["for", "input-lateFee", 1, "label"], ["type", "number", "nbInput", "", "id", "input-lateFee", "name", "lateFee", "min", "0", "formControlName", "lateFee", "placeholder", "lateFee", "fullWidth", "", 3, "status", "input"], ["for", "input-totalAmount", 1, "label"], ["type", "number", "nbInput", "", "id", "input-totalAmount", "name", "totalAmount", "min", "0", "formControlName", "totalAmount", "placeholder", "totalAmount", "fullWidth", "", "disabled", "true", 3, "status"], ["for", "input-amountDue", 1, "label"], ["type", "number", "nbInput", "", "id", "input-amountDue", "name", "amountDue", "min", "0", "formControlName", "amountDue", "placeholder", "Amount Due", "fullWidth", "", "disabled", "true", 3, "status"], ["for", "input-paymentDate", 1, "label"], ["type", "date", "nbInput", "", "id", "input-paymentDate", "name", "paymentDate", "formControlName", "paymentDate", "placeholder", "Payment Date", "fullWidth", "", 3, "status"], ["for", "input-paymentMode", 1, "label"], ["id", "input-paymentMode", "name", "paymentMode", "formControlName", "paymentMode", "placeholder", "paymentMode", "fullWidth", "", 3, "status"], ["value", ""], ["value", "cash"], ["value", "card"], ["value", "wallet"], ["value", "online"], ["value", "other"], ["for", "input-bankDetails", 1, "label"], ["type", "text", "nbInput", "", "id", "input-bankDetails", "name", "bankDetails", "formControlName", "bankDetails", "placeholder", "Bank Details", "fullWidth", "", 3, "status"], ["for", "input-transactionDetails", 1, "label"], ["type", "text", "nbInput", "", "id", "input-transactionDetails", "name", "transactionDetails", "formControlName", "transactionDetails", "placeholder", "Transaction Details", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "rows", "2", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description (Optional)", "fullWidth", ""], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", "type", "button", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
      template: function CollectStudentCourseInstallmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CollectStudentCourseInstallmentComponent_nb_card_0_Template, 174, 40, "nb-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CollectStudentCourseInstallmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
          selector: 'ngx-collect-student-course-installment',
          templateUrl: './collect-student-course-installment.component.html',
          styleUrls: ['./collect-student-course-installment.component.scss']
        }]
      }], function () {
        return [{
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }, {
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbToastrService"]
        }, {
          type: _services_student_service__WEBPACK_IMPORTED_MODULE_8__["StudentService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
        }, {
          type: _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_0__["StudentCourseInstallmentService"]
        }, {
          type: _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_9__["StudentCourseInstallmentReceiptService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
          args: ['stepper', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.module.ts":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.module.ts ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: CollectStudentCourseInstallmentModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentCollectStudentCourseInstallmentCollectStudentCourseInstallmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectStudentCourseInstallmentModule", function () {
      return CollectStudentCourseInstallmentModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _collect_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collect-student-course-installment-routing.module */
    "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment-routing.module.ts");
    /* harmony import */


    var _collect_student_course_installment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./collect-student-course-installment.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.component.ts");

    var CollectStudentCourseInstallmentModule = function CollectStudentCourseInstallmentModule() {
      _classCallCheck(this, CollectStudentCourseInstallmentModule);
    };

    CollectStudentCourseInstallmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CollectStudentCourseInstallmentModule
    });
    CollectStudentCourseInstallmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function CollectStudentCourseInstallmentModule_Factory(t) {
        return new (t || CollectStudentCourseInstallmentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _collect_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectStudentCourseInstallmentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CollectStudentCourseInstallmentModule, {
        declarations: [_collect_student_course_installment_component__WEBPACK_IMPORTED_MODULE_5__["CollectStudentCourseInstallmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _collect_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectStudentCourseInstallmentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CollectStudentCourseInstallmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_collect_student_course_installment_component__WEBPACK_IMPORTED_MODULE_5__["CollectStudentCourseInstallmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _collect_student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_4__["CollectStudentCourseInstallmentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);