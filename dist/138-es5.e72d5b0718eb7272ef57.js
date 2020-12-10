function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138], {
  /***/
  "./src/app/institute/branch/assignment/assignment-submission/assignment-submission-routing.module.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment-submission/assignment-submission-routing.module.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: AssignmentSubmissionRoutingModule */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentSubmissionAssignmentSubmissionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/institute/branch/assignment/assignment-submission/assignment-submission.component.ts");

    var routes = [{
      path: '',
      component: _assignment_submission_component__WEBPACK_IMPORTED_MODULE_2__["AssignmentSubmissionComponent"]
    }, {
      path: 'grade',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        139).then(__webpack_require__.bind(null,
        /*! ./submission-grading/submission-grading.module */
        "./src/app/institute/branch/assignment/assignment-submission/submission-grading/submission-grading.module.ts")).then(function (m) {
          return m.SubmissionGradingModule;
        });
      }
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../../shared/page-not-found/page-not-found.module */
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
  "./src/app/institute/branch/assignment/assignment-submission/assignment-submission.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment-submission/assignment-submission.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: AssignmentSubmissionComponent */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentSubmissionAssignmentSubmissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionComponent", function () {
      return AssignmentSubmissionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_assignment_submission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/assignment-submission.service */
    "./src/app/services/assignment-submission.service.ts");
    /* harmony import */


    var _services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../services/assignment.service */
    "./src/app/services/assignment.service.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../services/shared-services/date.service */
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

    function AssignmentSubmissionComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mark Grades ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AssignmentSubmissionComponent_tr_25_td_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_tr_25_td_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var submission_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.markGrade(submission_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mark ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var submission_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !submission_r2.status);
      }
    }

    function AssignmentSubmissionComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AssignmentSubmissionComponent_tr_25_td_9_Template, 3, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var submission_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submission_r2.studentName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submission_r2.status ? "Submitted" : "Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", submission_r2.grades ? submission_r2.grades : "--", "/", ctx_r1.assignment.totalGrades, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.assignment.generatedBy === ctx_r1.user.imsMasterId);
      }
    }

    var AssignmentSubmissionComponent =
    /*@__PURE__*/
    function () {
      var AssignmentSubmissionComponent =
      /*#__PURE__*/
      function () {
        function AssignmentSubmissionComponent(branchService, assignmentSubmissionService, assignmentService, authService, dateService, router, route, toastrService) {
          _classCallCheck(this, AssignmentSubmissionComponent);

          this.branchService = branchService;
          this.assignmentSubmissionService = assignmentSubmissionService;
          this.assignmentService = assignmentService;
          this.authService = authService;
          this.dateService = dateService;
          this.router = router;
          this.route = route;
          this.toastrService = toastrService;
        }

        _createClass(AssignmentSubmissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.back();
              return;
            }

            this.user = this.authService.getUserData();
            this.assignmentService.getAssignmentData().subscribe(function (assignment) {
              _this.assignment = assignment;

              if (!assignment) {
                _this.showToastr('top-right', 'danger', 'Assignment Not Found');

                _this.back();

                return;
              }

              _this.assignmentSubmissions = [];

              _this.assignmentSubmissionService.getAssignmentSubmissions(assignment._id).subscribe(function (assignmentSubmissions) {
                _this.assignmentSubmissions = assignmentSubmissions;
                _this.loading = false;
              }, function (error) {
                _this.showToastr('top-right', 'danger', error);

                _this.loading = false;
              });
            });
          }
        }, {
          key: "markGrade",
          value: function markGrade(submission) {
            if (this.assignment.generatedBy === this.user.imsMasterId) {
              this.assignmentSubmissionService.setAssignmentSubmissionData(submission);
              this.router.navigate(['./grade'], {
                relativeTo: this.route
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
            this.router.navigate(['../manage'], {
              relativeTo: this.route
            });
          }
        }]);

        return AssignmentSubmissionComponent;
      }();

      AssignmentSubmissionComponent.ɵfac = function AssignmentSubmissionComponent_Factory(t) {
        return new (t || AssignmentSubmissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_assignment_submission_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentSubmissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]));
      };

      AssignmentSubmissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AssignmentSubmissionComponent,
        selectors: [["ngx-assignment-submission"]],
        decls: 26,
        vars: 2,
        consts: [[1, "row"], [1, "col-md-12"], ["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "col-12"], [1, "table-responsive"], [1, "table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 1, "", 3, "disabled", "click"]],
        template: function AssignmentSubmissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentSubmissionComponent_Template_button_click_4_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Submission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " # ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Student ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Submission Status ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Grades ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AssignmentSubmissionComponent_th_23_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AssignmentSubmissionComponent_tr_25_Template, 10, 6, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignment.generatedBy === ctx.user.imsMasterId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assignmentSubmissions);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        styles: [""]
      });
      return AssignmentSubmissionComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/assignment/assignment-submission/assignment-submission.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/institute/branch/assignment/assignment-submission/assignment-submission.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: AssignmentSubmissionModule */

  /***/
  function srcAppInstituteBranchAssignmentAssignmentSubmissionAssignmentSubmissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentSubmissionModule", function () {
      return AssignmentSubmissionModule;
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


    var _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assignment-submission-routing.module */
    "./src/app/institute/branch/assignment/assignment-submission/assignment-submission-routing.module.ts");
    /* harmony import */


    var _assignment_submission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./assignment-submission.component */
    "./src/app/institute/branch/assignment/assignment-submission/assignment-submission.component.ts");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]]
      });
      return AssignmentSubmissionModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AssignmentSubmissionModule, {
        declarations: [_assignment_submission_component__WEBPACK_IMPORTED_MODULE_4__["AssignmentSubmissionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignment_submission_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignmentSubmissionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]]
      });
    })();
    /***/

  }
}]);