(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[220], {
    /***/
    "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt-routing.module.ts":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt-routing.module.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: CourseInstallmentReceiptRoutingModule */

    /***/
    function srcAppStudentBranchCourseCourseInstallmentCourseInstallmentReceiptCourseInstallmentReceiptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseInstallmentReceiptRoutingModule", function () {
        return CourseInstallmentReceiptRoutingModule;
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


      var _course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-installment-receipt.component */
      "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.component.ts");

      var routes = [{
        path: '',
        component: _course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__["CourseInstallmentReceiptComponent"]
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../../../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }];

      var CourseInstallmentReceiptRoutingModule = /*@__PURE__*/function () {
        var CourseInstallmentReceiptRoutingModule = function CourseInstallmentReceiptRoutingModule() {
          _classCallCheck(this, CourseInstallmentReceiptRoutingModule);
        };

        CourseInstallmentReceiptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: CourseInstallmentReceiptRoutingModule
        });
        CourseInstallmentReceiptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function CourseInstallmentReceiptRoutingModule_Factory(t) {
            return new (t || CourseInstallmentReceiptRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return CourseInstallmentReceiptRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseInstallmentReceiptRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.component.ts":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: CourseInstallmentReceiptComponent */

    /***/
    function srcAppStudentBranchCourseCourseInstallmentCourseInstallmentReceiptCourseInstallmentReceiptComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseInstallmentReceiptComponent", function () {
        return CourseInstallmentReceiptComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../services/student.service */
      "./src/app/services/student.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/student-course-installment-receipt.service */
      "./src/app/services/student-course-installment-receipt.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CourseInstallmentReceiptComponent_nb_card_2_h6_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GST Number: ", ctx_r1.instituteBilling.gstNumber, "");
        }
      }

      function CourseInstallmentReceiptComponent_nb_card_2_tr_25_Template(rf, ctx) {
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
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("GST ", ctx_r2.course.feeDetails.gst, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.gstAmount, "/-");
        }
      }

      function CourseInstallmentReceiptComponent_nb_card_2_tr_26_Template(rf, ctx) {
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
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.lateFee, "/-");
        }
      }

      function CourseInstallmentReceiptComponent_nb_card_2_div_40_Template(rf, ctx) {
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
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.instituteBilling.termsAndConditions);
        }
      }

      function CourseInstallmentReceiptComponent_nb_card_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CourseInstallmentReceiptComponent_nb_card_2_h6_7_Template, 2, 1, "h6", 2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CourseInstallmentReceiptComponent_nb_card_2_tr_25_Template, 5, 2, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CourseInstallmentReceiptComponent_nb_card_2_tr_26_Template, 5, 1, "tr", 9);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CourseInstallmentReceiptComponent_nb_card_2_div_40_Template, 7, 1, "div", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseInstallmentReceiptComponent_nb_card_2_Template_button_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nb-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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

      var CourseInstallmentReceiptComponent = /*@__PURE__*/function () {
        var CourseInstallmentReceiptComponent = /*#__PURE__*/function () {
          function CourseInstallmentReceiptComponent(branchService, studentService, toastrService, studentCourseInstallmentReceiptService, router, route) {
            _classCallCheck(this, CourseInstallmentReceiptComponent);

            this.branchService = branchService;
            this.studentService = studentService;
            this.toastrService = toastrService;
            this.studentCourseInstallmentReceiptService = studentCourseInstallmentReceiptService;
            this.router = router;
            this.route = route;
          }

          _createClass(CourseInstallmentReceiptComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.branchId = this.branchService.getBranchId(); // tslint:disable-next-line: max-line-length

              this.studentCourseInstallmentReceiptId = this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptId();

              if (!this.branchId || !this.studentCourseInstallmentReceiptId) {
                this.showToastr('top-right', 'danger', 'Invalid Receipt');
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceipt(this.studentCourseInstallmentReceiptId).subscribe(function (res) {
                _this.studentCourseInstallmentReceipt = res.studentCourseInstallmentReceipt;
                _this.instituteBilling = res.instituteBilling;
                _this.course = res.course;

                if (!res.instituteBilling.gstNumber) {
                  _this.amount = res.studentCourseInstallmentReceipt.amount.toFixed(2);
                } else {
                  var courseAmount = +res.studentCourseInstallmentReceipt.amount;
                  var gstPercentage = +res.course.feeDetails.gst;
                  var amount = courseAmount / (1 + gstPercentage / 100);
                  var gstAmount = courseAmount - amount;
                  _this.gstAmount = gstAmount.toFixed(2);
                  _this.amount = amount.toFixed(2);
                }

                _this.lateFee = res.studentCourseInstallmentReceipt.lateFee.toFixed(2);
                _this.totalAmount = res.studentCourseInstallmentReceipt.totalAmount.toFixed(2);
                _this.loading = false;
              }, function (err) {
                _this.showToastr('top-right', 'danger', err);

                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });

                return;
              });
            }
          }, {
            key: "print",
            value: function print() {
              window.print();
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
            }
          }]);

          return CourseInstallmentReceiptComponent;
        }();

        CourseInstallmentReceiptComponent.ɵfac = function CourseInstallmentReceiptComponent_Factory(t) {
          return new (t || CourseInstallmentReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseInstallmentReceiptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
        };

        CourseInstallmentReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: CourseInstallmentReceiptComponent,
          selectors: [["ngx-course-installment-receipt"]],
          decls: 3,
          vars: 1,
          consts: [[1, "row"], [1, "col-sm-10", "mx-auto"], [4, "ngIf"], [1, "row", "p-4"], [1, "col-12"], [1, "text-center"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "p-2"], ["class", "p-2", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "text-center", "pt-5", "pb-5"], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["nbTooltip", "Print", "icon", "printer-outline"]],
          template: function CourseInstallmentReceiptComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CourseInstallmentReceiptComponent_nb_card_2_Template, 51, 10, "nb-card", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"]],
          styles: [""]
        });
        return CourseInstallmentReceiptComponent;
      }();
      /***/

    },

    /***/
    "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.module.ts":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.module.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: CourseInstallmentReceiptModule */

    /***/
    function srcAppStudentBranchCourseCourseInstallmentCourseInstallmentReceiptCourseInstallmentReceiptModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseInstallmentReceiptModule", function () {
        return CourseInstallmentReceiptModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./course-installment-receipt-routing.module */
      "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt-routing.module.ts");
      /* harmony import */


      var _course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./course-installment-receipt.component */
      "./src/app/student/branch/course/course-installment/course-installment-receipt/course-installment-receipt.component.ts");

      var CourseInstallmentReceiptModule = /*@__PURE__*/function () {
        var CourseInstallmentReceiptModule = function CourseInstallmentReceiptModule() {
          _classCallCheck(this, CourseInstallmentReceiptModule);
        };

        CourseInstallmentReceiptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: CourseInstallmentReceiptModule
        });
        CourseInstallmentReceiptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function CourseInstallmentReceiptModule_Factory(t) {
            return new (t || CourseInstallmentReceiptModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseInstallmentReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]]
        });
        return CourseInstallmentReceiptModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseInstallmentReceiptModule, {
          declarations: [_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__["CourseInstallmentReceiptComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseInstallmentReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]
        });
      })();
      /***/

    }
  }]);
})();