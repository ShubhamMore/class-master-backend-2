function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[212], {
  /***/
  "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission-routing.module.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/student/branch/course/assignment/assignment-submission/assignment-submission-routing.module.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: AssignmentSubmissionRoutingModule */

  /***/
  function srcAppStudentBranchCourseAssignmentAssignmentSubmissionAssignmentSubmissionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionRoutingModule", function () {
      return AssignmentSubmissionRoutingModule;
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


    var _assignment_submission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./assignment-submission.component */
    "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.component.ts");

    var routes = [{
      path: '',
      component: _assignment_submission_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentSubmissionComponent"]
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

    var AssignmentSubmissionRoutingModule =
    /*@__PURE__*/
    function () {
      var AssignmentSubmissionRoutingModule = function AssignmentSubmissionRoutingModule() {
        _classCallCheck(this, AssignmentSubmissionRoutingModule);
      };

      AssignmentSubmissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AssignmentSubmissionRoutingModule
      });
      AssignmentSubmissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AssignmentSubmissionRoutingModule_Factory(t) {
          return new (t || AssignmentSubmissionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return AssignmentSubmissionRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssignmentSubmissionRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: AssignmentSubmissionComponent */

  /***/
  function srcAppStudentBranchCourseAssignmentAssignmentSubmissionAssignmentSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionComponent", function () {
      return AssignmentSubmissionComponent;
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
    /*! ../../../../../services/assignment-submission.service */
    "./src/app/services/assignment-submission.service.ts");
    /* harmony import */


    var _services_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../services/assignment.service */
    "./src/app/services/assignment.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["stepper"];
    var _c1 = ["filePicker"];

    function AssignmentSubmissionComponent_ng_container_45_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Assignment Description is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AssignmentSubmissionComponent_ng_container_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AssignmentSubmissionComponent_ng_container_45_p_1_Template, 2, 0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.assignmentSubmissionDetailsForm.get("description").errors == null ? null : ctx_r1.assignmentSubmissionDetailsForm.get("description").errors.required);
      }
    }

    function AssignmentSubmissionComponent_button_56_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_button_56_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.clearFile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AssignmentSubmissionComponent_ng_container_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    }

    var AssignmentSubmissionComponent =
    /*@__PURE__*/
    function () {
      var AssignmentSubmissionComponent =
      /*#__PURE__*/
      function () {
        function AssignmentSubmissionComponent(branchService, assignmentSubmissionService, assignmentService, toastrService, router, route) {
          _classCallCheck(this, AssignmentSubmissionComponent);

          this.branchService = branchService;
          this.assignmentSubmissionService = assignmentSubmissionService;
          this.assignmentService = assignmentService;
          this.toastrService = toastrService;
          this.router = router;
          this.route = route;
        }

        _createClass(AssignmentSubmissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.invalidFile = false;
            this.fileName = null;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.back();
              return;
            }

            this.assignmentService.getAssignmentData().subscribe(function (assignment) {
              _this.assignment = assignment;
            });
            this.assignmentSubmissionDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              })
            });
            this.assignmentSubmissionService.getSubmissionOfAssignment(this.assignment._id).subscribe(function (assignmentSubmission) {
              if (assignmentSubmission) {
                _this.assignmentSubmission = assignmentSubmission;

                _this.assignmentSubmissionDetailsForm.patchValue({
                  description: assignmentSubmission.description
                });

                _this.fileName = assignmentSubmission.fileName;
              }

              _this.loading = false;
            }, function (error) {
              _this.showToastr('top-right', 'danger', error);

              _this.loading = false;
            });
          }
        }, {
          key: "onFilePicked",
          value: function onFilePicked(event) {
            this.invalidFile = false;
            var files = event.target.files;
            var fileExt = ['pdf', 'jpg', 'png', 'jpeg', 'mp4'];
            var ext = null;
            ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();

            if (!(fileExt.indexOf(ext) !== -1)) {
              this.invalidFile = true;
              this.fileName = files[0].name;
              this.fileInput.nativeElement.value = '';
              return;
            }

            this.invalidFile = false;
            this.uploadAssignmentSubmission = files[0];
            this.fileName = files[0].name;
            this.fileInput.nativeElement.value = '';
          }
        }, {
          key: "clearFile",
          value: function clearFile() {
            this.uploadAssignmentSubmission = null;
            this.fileName = null;
            this.fileInput.nativeElement.value = '';
            this.invalidFile = false;
          }
        }, {
          key: "submitAssignmentDetails",
          value: function submitAssignmentDetails() {
            this.assignmentSubmissionDetailsForm.markAllAsTouched();

            if (this.assignmentSubmissionDetailsForm.invalid) {
              this.showToastr('top-right', 'danger', 'Assignment details are required');
              return;
            } else if (!(this.assignmentSubmission || this.uploadAssignmentSubmission)) {
              this.showToastr('top-right', 'danger', 'Please select a File');
              this.invalidFile = true;
              return;
            } else if (this.invalidFile) {
              this.showToastr('top-right', 'danger', 'Select Valid File');
              return;
            }

            this.stepper.next();
          }
        }, {
          key: "saveAssignment",
          value: function saveAssignment() {
            var _this2 = this;

            this.assignmentSubmissionDetailsForm.markAllAsTouched();

            if (this.assignmentSubmissionDetailsForm.invalid) {
              this.showToastr('top-right', 'danger', 'Assignment details are required');
              return;
            } else if (!(this.assignmentSubmission || this.uploadAssignmentSubmission)) {
              this.showToastr('top-right', 'danger', 'Please select a File');
              this.invalidFile = true;
              return;
            } else if (this.invalidFile) {
              this.showToastr('top-right', 'danger', 'Select Valid File');
              return;
            }

            this.loading = true;
            var assignmentSubmission = new FormData();
            assignmentSubmission.append('branch', this.branchId);
            assignmentSubmission.append('assignment', this.assignment._id);
            assignmentSubmission.append('description', this.assignmentSubmissionDetailsForm.value.description);

            if (this.uploadAssignmentSubmission) {
              assignmentSubmission.append('assignmentSubmission', this.uploadAssignmentSubmission, this.uploadAssignmentSubmission.name.substring(0, this.uploadAssignmentSubmission.name.lastIndexOf('.')));
            }

            if (!this.assignmentSubmission) {
              this.assignmentSubmissionService.submitAssignment(assignmentSubmission).subscribe(function (res) {
                _this2.showToastr('top-right', 'success', 'New Assignment Added Successfully!');

                _this2.back();
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            } else {
              assignmentSubmission.append('_id', this.assignmentSubmission._id);
              this.assignmentSubmissionService.updateAssignmentSubmission(assignmentSubmission).subscribe(function (res) {
                _this2.showToastr('top-right', 'success', 'Assignment Submission Updated Successfully!');

                _this2.back();
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
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
          value: function ngOnDestroy() {}
        }]);

        return AssignmentSubmissionComponent;
      }();

      AssignmentSubmissionComponent.ɵfac = function AssignmentSubmissionComponent_Factory(t) {
        return new (t || AssignmentSubmissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_assignment_submission_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      AssignmentSubmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AssignmentSubmissionComponent,
        selectors: [["ngx-assignment-submission"]],
        viewQuery: function AssignmentSubmissionComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
          }
        },
        decls: 91,
        vars: 14,
        consts: [["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [1, "table-responsive"], [1, "table"], [3, "linear"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-12"], [1, "form-control-group"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-md-6"], ["for", "input-subject", 1, "label"], ["type", "file", "nbInput", "", "id", "input-file", "name", "file", "placeholder", "Select File", "fullWidth", "", "hidden", "", 3, "change"], ["filePicker", ""], ["type", "button", "nbPrefix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Attach File", 3, "click"], ["icon", "attach-outline", "pack", "eva"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Attach File", "disabled", "", 3, "value", "click"], ["type", "button", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Remove File", 3, "click", 4, "ngIf"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["type", "button", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Remove File", 3, "click"], ["icon", "close-outline", "status", "danger", "pack", "eva"]],
        template: function AssignmentSubmissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_Template_button_click_2_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Assignment Topic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Assignment Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Assignment Submission Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nb-stepper", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nb-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AssignmentSubmissionComponent_Template_form_submit_36_listener() {
              return ctx.submitAssignmentDetails();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Assignment Details:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AssignmentSubmissionComponent_ng_container_45_Template, 2, 1, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Attach File");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AssignmentSubmissionComponent_Template_input_change_50_listener($event) {
              return ctx.onFilePicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nb-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_Template_button_click_53_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

              return _r2.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "nb-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_Template_input_click_55_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

              return _r2.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AssignmentSubmissionComponent_button_56_Template, 2, 0, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AssignmentSubmissionComponent_ng_container_57_Template, 3, 0, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "nb-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nb-step", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "table", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Attach File");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "nb-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_Template_button_click_88_listener() {
              return ctx.saveAssignment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Submit");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx.assignmentSubmission ? "Submission" : "Edit Submission", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignment.topic);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignment.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignment.submissionDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.assignmentSubmissionDetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.assignmentSubmissionDetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.assignmentSubmissionDetailsForm.get("description").touched ? ctx.assignmentSubmissionDetailsForm.get("description").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.assignmentSubmissionDetailsForm.get("description").invalid && ctx.assignmentSubmissionDetailsForm.get("description").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.fileName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadAssignmentSubmission || !ctx.assignment && ctx.fileName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invalidFile);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.assignmentSubmissionDetailsForm.value.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.uploadAssignmentSubmission ? ctx.fileName : "--");
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperPreviousDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"]],
        styles: [""]
      });
      return AssignmentSubmissionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.module.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.module.ts ***!
    \********************************************************************************************************/

  /*! exports provided: AssignmentSubmissionModule */

  /***/
  function srcAppStudentBranchCourseAssignmentAssignmentSubmissionAssignmentSubmissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionModule", function () {
      return AssignmentSubmissionModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assignment-submission-routing.module */
    "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission-routing.module.ts");
    /* harmony import */


    var _assignment_submission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./assignment-submission.component */
    "./src/app/student/branch/course/assignment/assignment-submission/assignment-submission.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var AssignmentSubmissionModule =
    /*@__PURE__*/
    function () {
      var AssignmentSubmissionModule = function AssignmentSubmissionModule() {
        _classCallCheck(this, AssignmentSubmissionModule);
      };

      AssignmentSubmissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AssignmentSubmissionModule
      });
      AssignmentSubmissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AssignmentSubmissionModule_Factory(t) {
          return new (t || AssignmentSubmissionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
      });
      return AssignmentSubmissionModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssignmentSubmissionModule, {
        declarations: [_assignment_submission_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentSubmissionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
      });
    })();
    /***/

  }
}]);