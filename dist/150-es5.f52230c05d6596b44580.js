(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150], {
    /***/
    "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading-routing.module.ts":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading-routing.module.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: SubmissionGradingRoutingModule */

    /***/
    function srcAppInstituteBranchAssignmentAssignmentSubmissionSubmissionGradingSubmissionGradingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmissionGradingRoutingModule", function () {
        return SubmissionGradingRoutingModule;
      });
      /* harmony import */


      var _submission_grading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./submission-grading.component */
      "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        component: _submission_grading_component__WEBPACK_IMPORTED_MODULE_0__["SubmissionGradingComponent"]
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
        redirectTo: 'page-not-found'
      }];

      var SubmissionGradingRoutingModule = /*@__PURE__*/function () {
        var SubmissionGradingRoutingModule = function SubmissionGradingRoutingModule() {
          _classCallCheck(this, SubmissionGradingRoutingModule);
        };

        SubmissionGradingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: SubmissionGradingRoutingModule
        });
        SubmissionGradingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function SubmissionGradingRoutingModule_Factory(t) {
            return new (t || SubmissionGradingRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return SubmissionGradingRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubmissionGradingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.component.ts":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: SubmissionGradingComponent */

    /***/
    function srcAppInstituteBranchAssignmentAssignmentSubmissionSubmissionGradingSubmissionGradingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmissionGradingComponent", function () {
        return SubmissionGradingComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_assignment_submission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/assignment-submission.service */
      "./src/app/services/assignment-submission.service.ts");
      /* harmony import */


      var _services_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/assignment.service */
      "./src/app/services/assignment.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SubmissionGradingComponent_form_19_ng_container_23_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Assignment Grades are required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SubmissionGradingComponent_form_19_ng_container_23_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Assignment Total Grades Should be more than equal to 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SubmissionGradingComponent_form_19_ng_container_23_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Assignment Total Grades Should be less than equal to ", ctx_r7.assignment.totalGrades, " ");
        }
      }

      function SubmissionGradingComponent_form_19_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubmissionGradingComponent_form_19_ng_container_23_p_1_Template, 2, 0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SubmissionGradingComponent_form_19_ng_container_23_p_2_Template, 2, 0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SubmissionGradingComponent_form_19_ng_container_23_p_3_Template, 2, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.assignmentSubmissionForm.get("grades").errors == null ? null : ctx_r3.assignmentSubmissionForm.get("grades").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.assignmentSubmissionForm.get("totalGrades").errors == null ? null : ctx_r3.assignmentSubmissionForm.get("totalGrades").errors.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.assignmentSubmissionForm.get("totalGrades").errors == null ? null : ctx_r3.assignmentSubmissionForm.get("totalGrades").errors.max);
        }
      }

      function SubmissionGradingComponent_form_19_ng_container_29_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Assignment Remark is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SubmissionGradingComponent_form_19_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubmissionGradingComponent_form_19_ng_container_29_p_1_Template, 2, 0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.assignmentSubmissionForm.get("remark").errors == null ? null : ctx_r4.assignmentSubmissionForm.get("remark").errors.required);
        }
      }

      function SubmissionGradingComponent_form_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SubmissionGradingComponent_form_19_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.saveGrades();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Description : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Submitted On : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Attachment : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Grades:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SubmissionGradingComponent_form_19_ng_container_23_Template, 4, 3, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remark:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SubmissionGradingComponent_form_19_ng_container_29_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.assignmentSubmissionForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.assignmentSubmission.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.dateService.millisecondsToDate(ctx_r0.assignmentSubmission.createdAt), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("download", ctx_r0.assignmentSubmission.studentName + "-" + ctx_r0.assignmentSubmission.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.assignmentSubmission.secureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.assignmentSubmission.fileName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("max", ctx_r0.assignment.totalGrades)("status", ctx_r0.assignmentSubmissionForm.get("grades").touched ? ctx_r0.assignmentSubmissionForm.get("grades").invalid ? "danger" : "success" : "basic")("placeholder", ctx_r0.assignment.totalGrades);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.assignmentSubmissionForm.get("grades").invalid && ctx_r0.assignmentSubmissionForm.get("grades").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.assignmentSubmissionForm.get("remark").touched ? ctx_r0.assignmentSubmissionForm.get("remark").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.assignmentSubmissionForm.get("remark").invalid && ctx_r0.assignmentSubmissionForm.get("remark").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.submit)("nbSpinner", ctx_r0.submit);
        }
      }

      function SubmissionGradingComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var SubmissionGradingComponent = /*@__PURE__*/function () {
        var SubmissionGradingComponent = /*#__PURE__*/function () {
          function SubmissionGradingComponent(branchService, assignmentSubmissionService, assignmentService, dateService, router, route, toastrService) {
            _classCallCheck(this, SubmissionGradingComponent);

            this.branchService = branchService;
            this.assignmentSubmissionService = assignmentSubmissionService;
            this.assignmentService = assignmentService;
            this.dateService = dateService;
            this.router = router;
            this.route = route;
            this.toastrService = toastrService;
          }

          _createClass(SubmissionGradingComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.submit = false;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.assignmentService.getAssignmentData().subscribe(function (assignment) {
                _this.assignment = assignment;

                if (!assignment) {
                  _this.showToastr('top-right', 'danger', 'Assignment Not Found');

                  _this.back();

                  return;
                }

                _this.assignmentSubmissionService.getAssignmentSubmissionData().subscribe(function (assignmentSubmission) {
                  _this.assignmentSubmission = assignmentSubmission;

                  if (!assignmentSubmission) {
                    _this.back();

                    return;
                  }

                  _this.assignmentSubmissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                    grades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](assignmentSubmission.grades, {
                      validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(+assignment.totalGrades)]
                    }),
                    remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](assignmentSubmission.remark, {
                      validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                    })
                  });
                  _this.loading = false;
                });
              });
            }
          }, {
            key: "saveGrades",
            value: function saveGrades() {
              var _this2 = this;

              this.assignmentSubmissionForm.markAllAsTouched();

              if (this.assignmentSubmissionForm.invalid) {
                this.showToastr('top-right', 'danger', 'All grading Fields are required');
                return;
              }

              this.submit = true;
              var submissionGrades = Object.assign({
                _id: this.assignmentSubmission._id
              }, this.assignmentSubmissionForm.value);
              this.assignmentSubmissionService.saveAssignmentSubmissionGrades(submissionGrades).subscribe(function (res) {
                _this2.showToastr('top-right', 'success', 'Grades Updated Successfully');

                _this2.back();
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.submit = false;
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
            key: "back",
            value: function back() {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.assignmentSubmissionService.deleteAssignmentSubmissionData();
            }
          }]);

          return SubmissionGradingComponent;
        }();

        SubmissionGradingComponent.ɵfac = function SubmissionGradingComponent_Factory(t) {
          return new (t || SubmissionGradingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_assignment_submission_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]));
        };

        SubmissionGradingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: SubmissionGradingComponent,
          selectors: [["ngx-submission-grading"]],
          decls: 22,
          vars: 5,
          consts: [[1, "pl-3"], [3, "formGroup", "submit", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "formGroup", "submit"], [1, "row"], [1, "col-md-12"], [1, "col-md-6"], ["target", "_blank", 3, "href", "download"], [1, "form-control-group"], ["for", "input-submission-grades", 1, "label"], ["type", "number", "nbInput", "", "id", "input-submission-grades", "name", "grades", "formControlName", "grades", "min", "0", "fullWidth", "", 3, "max", "status", "placeholder"], [4, "ngIf"], ["for", "input-submission-remark", 1, "label"], ["type", "text", "nbInput", "", "id", "input-submission-remark", "name", "remark", "rows", "2", "formControlName", "remark", "placeholder", "Remark", "fullWidth", "", 3, "status"], [1, "col-12"], ["type", "submit", "nbButton", "", "size", "small", "status", "primary", "nbSpinnerStatus", "primary", "nbSpinnerSize", "small", 1, "float-right", 3, "disabled", "nbSpinner"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "pt-5", "pb-5", "text-center"]],
          template: function SubmissionGradingComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Assignment : ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Submission Date : ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Description : ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SubmissionGradingComponent_form_19_Template, 35, 14, "form", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SubmissionGradingComponent_ng_template_20_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignment.topic);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.assignment.submissionDate));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignment.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerDirective"]],
          styles: [""]
        });
        return SubmissionGradingComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.module.ts":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: SubmissionGradingModule */

    /***/
    function srcAppInstituteBranchAssignmentAssignmentSubmissionSubmissionGradingSubmissionGradingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubmissionGradingModule", function () {
        return SubmissionGradingModule;
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


      var _submission_grading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./submission-grading.component */
      "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _submission_grading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./submission-grading-routing.module */
      "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading-routing.module.ts");

      var SubmissionGradingModule = /*@__PURE__*/function () {
        var SubmissionGradingModule = function SubmissionGradingModule() {
          _classCallCheck(this, SubmissionGradingModule);
        };

        SubmissionGradingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: SubmissionGradingModule
        });
        SubmissionGradingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function SubmissionGradingModule_Factory(t) {
            return new (t || SubmissionGradingModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _submission_grading_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmissionGradingRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
        });
        return SubmissionGradingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SubmissionGradingModule, {
          declarations: [_submission_grading_component__WEBPACK_IMPORTED_MODULE_2__["SubmissionGradingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _submission_grading_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubmissionGradingRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();