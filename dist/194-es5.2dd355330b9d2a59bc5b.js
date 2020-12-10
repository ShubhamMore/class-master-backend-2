function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194], {
  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts":
  /*!****************************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentReceiptRoutingModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentReceiptStudentCourseInstallmentReceiptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptRoutingModule", function () {
      return StudentCourseInstallmentReceiptRoutingModule;
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


    var _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-course-installment-receipt.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts");

    var routes = [{
      path: '',
      component: _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_2__["StudentCourseInstallmentReceiptComponent"]
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

    var StudentCourseInstallmentReceiptRoutingModule =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentReceiptRoutingModule = function StudentCourseInstallmentReceiptRoutingModule() {
        _classCallCheck(this, StudentCourseInstallmentReceiptRoutingModule);
      };

      StudentCourseInstallmentReceiptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StudentCourseInstallmentReceiptRoutingModule
      });
      StudentCourseInstallmentReceiptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StudentCourseInstallmentReceiptRoutingModule_Factory(t) {
          return new (t || StudentCourseInstallmentReceiptRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return StudentCourseInstallmentReceiptRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseInstallmentReceiptRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts":
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts ***!
    \***********************************************************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentReceiptComponent */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentReceiptStudentCourseInstallmentReceiptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptComponent", function () {
      return StudentCourseInstallmentReceiptComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../services/student-course-installment-receipt.service */
    "./src/app/services/student-course-installment-receipt.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentCourseInstallmentReceiptComponent_nb_card_2_h6_7_Template(rf, ctx) {
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

    function StudentCourseInstallmentReceiptComponent_nb_card_2_tr_25_Template(rf, ctx) {
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
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.studentCourseInstallmentReceipt.lateFee, ".00/-");
      }
    }

    function StudentCourseInstallmentReceiptComponent_nb_card_2_div_39_Template(rf, ctx) {
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
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.instituteBilling.termsAndConditions);
      }
    }

    function StudentCourseInstallmentReceiptComponent_nb_card_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StudentCourseInstallmentReceiptComponent_nb_card_2_tr_25_Template, 5, 1, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Total Amount in Words: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, StudentCourseInstallmentReceiptComponent_nb_card_2_div_39_Template, 7, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "This is Computer Generated receipt, Does not Required any Stamp or Signature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentCourseInstallmentReceiptComponent_nb_card_2_Template_button_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.print();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nb-icon", 13);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.studentCourseInstallmentReceipt.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallmentReceipt.amount, ".00/-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.studentCourseInstallmentReceipt.lateFee > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallmentReceipt.totalAmount, ".00/-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.studentCourseInstallmentReceipt.totalAmountInWords, " Only/-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.instituteBilling.termsAndConditions);
      }
    }

    var StudentCourseInstallmentReceiptComponent =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentReceiptComponent =
      /*#__PURE__*/
      function () {
        function StudentCourseInstallmentReceiptComponent(branchService, studentService, toastrService, studentCourseInstallmentReceiptService, router, route) {
          _classCallCheck(this, StudentCourseInstallmentReceiptComponent);

          this.branchService = branchService;
          this.studentService = studentService;
          this.toastrService = toastrService;
          this.studentCourseInstallmentReceiptService = studentCourseInstallmentReceiptService;
          this.router = router;
          this.route = route;
        }

        _createClass(StudentCourseInstallmentReceiptComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            this.categoryId = this.branchService.getCategoryId();
            this.studentId = this.studentService.getStudentId(); // tslint:disable-next-line: max-line-length

            this.studentCourseInstallmentReceiptId = this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptId();

            if (!this.branchId || !this.categoryId || !this.studentId || !this.studentCourseInstallmentReceiptId) {
              this.showToastr('top-right', 'danger', 'Invalid Receipt');
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
              return;
            }

            this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceipt(this.studentCourseInstallmentReceiptId).subscribe(function (res) {
              _this.studentCourseInstallmentReceipt = res.studentCourseInstallmentReceipt;
              _this.instituteBilling = res.instituteBilling;
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

        return StudentCourseInstallmentReceiptComponent;
      }();

      StudentCourseInstallmentReceiptComponent.ɵfac = function StudentCourseInstallmentReceiptComponent_Factory(t) {
        return new (t || StudentCourseInstallmentReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_receipt_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseInstallmentReceiptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      StudentCourseInstallmentReceiptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StudentCourseInstallmentReceiptComponent,
        selectors: [["ngx-student-course-installment-receipt"]],
        decls: 3,
        vars: 1,
        consts: [[1, "row"], [1, "col-sm-10", "mx-auto"], [4, "ngIf"], [1, "row", "p-4"], [1, "col-12"], [1, "text-center"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "p-2"], ["class", "p-2", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "text-center", "pt-5", "pb-5"], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", 3, "click"], ["nbTooltip", "Print", "icon", "printer-outline"]],
        template: function StudentCourseInstallmentReceiptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentCourseInstallmentReceiptComponent_nb_card_2_Template, 50, 9, "nb-card", 2);

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
      return StudentCourseInstallmentReceiptComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.module.ts":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.module.ts ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentReceiptModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentReceiptStudentCourseInstallmentReceiptModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentReceiptModule", function () {
      return StudentCourseInstallmentReceiptModule;
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


    var _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-course-installment-receipt-routing.module */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt-routing.module.ts");
    /* harmony import */


    var _student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student-course-installment-receipt.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.component.ts");

    var StudentCourseInstallmentReceiptModule =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentReceiptModule = function StudentCourseInstallmentReceiptModule() {
        _classCallCheck(this, StudentCourseInstallmentReceiptModule);
      };

      StudentCourseInstallmentReceiptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: StudentCourseInstallmentReceiptModule
      });
      StudentCourseInstallmentReceiptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function StudentCourseInstallmentReceiptModule_Factory(t) {
          return new (t || StudentCourseInstallmentReceiptModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]]
      });
      return StudentCourseInstallmentReceiptModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentCourseInstallmentReceiptModule, {
        declarations: [_student_course_installment_receipt_component__WEBPACK_IMPORTED_MODULE_4__["StudentCourseInstallmentReceiptComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _student_course_installment_receipt_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentReceiptRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]
      });
    })();
    /***/

  }
}]);