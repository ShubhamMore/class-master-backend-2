function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57], {
  /***/
  "./src/app/institute/branch/leave/leave-comment/leave-comment.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/institute/branch/leave/leave-comment/leave-comment.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: LeaveCommentComponent */

  /***/
  function srcAppInstituteBranchLeaveLeaveCommentLeaveCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveCommentComponent", function () {
      return LeaveCommentComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LeaveCommentComponent =
    /*#__PURE__*/
    function () {
      function LeaveCommentComponent(ref) {
        _classCallCheck(this, LeaveCommentComponent);

        this.ref = ref;
      }

      _createClass(LeaveCommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeComment",
        value: function changeComment(comment) {
          this.comment = comment;
        }
      }, {
        key: "submit",
        value: function submit() {
          this.ref.close(this.comment);
        }
      }]);

      return LeaveCommentComponent;
    }();

    LeaveCommentComponent.ɵfac = function LeaveCommentComponent_Factory(t) {
      return new (t || LeaveCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDialogRef"]));
    };

    LeaveCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LeaveCommentComponent,
      selectors: [["ngx-leave-comment"]],
      decls: 11,
      vars: 0,
      consts: [[1, "comment-box"], ["nbInput", "", "fullWidth", "", "rows", "2", "placeholder", "Comment", 3, "input"], [1, "row"], [1, "col-12", "text-right"], ["type", "button", "nbButton", "", "size", "small", "status", "primary", 3, "click"]],
      template: function LeaveCommentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textArea", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function LeaveCommentComponent_Template_textArea_input_5_listener($event) {
            return ctx.changeComment($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeaveCommentComponent_Template_button_click_9_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"]],
      styles: [".comment-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .comment-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .comment-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .comment-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .comment-box[_ngcontent-%COMP%] {\n    top: 2vh;\n    left: 2vw;\n    width: 96vw;\n  }\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeaveCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-leave-comment',
          templateUrl: './leave-comment.component.html',
          styleUrls: ['./leave-comment.component.scss']
        }]
      }], function () {
        return [{
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/leave/leave-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/institute/branch/leave/leave-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: LeaveRoutingModule */

  /***/
  function srcAppInstituteBranchLeaveLeaveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveRoutingModule", function () {
      return LeaveRoutingModule;
    });
    /* harmony import */


    var _leave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./leave.component */
    "./src/app/institute/branch/leave/leave.component.ts");
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
      component: _leave_component__WEBPACK_IMPORTED_MODULE_0__["LeaveComponent"]
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var LeaveRoutingModule = function LeaveRoutingModule() {
      _classCallCheck(this, LeaveRoutingModule);
    };

    LeaveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LeaveRoutingModule
    });
    LeaveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LeaveRoutingModule_Factory(t) {
        return new (t || LeaveRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LeaveRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeaveRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/leave/leave.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/institute/branch/leave/leave.component.ts ***!
    \***********************************************************/

  /*! exports provided: LeaveComponent */

  /***/
  function srcAppInstituteBranchLeaveLeaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveComponent", function () {
      return LeaveComponent;
    });
    /* harmony import */


    var _leave_comment_leave_comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./leave-comment/leave-comment.component */
    "./src/app/institute/branch/leave/leave-comment/leave-comment.component.ts");
    /* harmony import */


    var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/branch-employee.service */
    "./src/app/services/branch-employee.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/employee-leave.service */
    "./src/app/services/employee-leave.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LeaveComponent_nb_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", employee_r8.employee);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](employee_r8.name);
      }
    }

    function LeaveComponent_nb_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", year_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](year_r9);
      }
    }

    function LeaveComponent_nb_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", month_r10.monthNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](month_r10.month);
      }
    }

    function LeaveComponent_ng_container_29_div_1_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeaveComponent_ng_container_29_div_1_tr_19_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);

          var employeeLeave_r15 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          return ctx_r17.openCommentDialog(employeeLeave_r15._id, "approved");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Approve ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeaveComponent_ng_container_29_div_1_tr_19_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);

          var employeeLeave_r15 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          return ctx_r19.openCommentDialog(employeeLeave_r15._id, "rejected");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Reject ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r15 = ctx.$implicit;
        var i_r16 = ctx.index;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r16 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r14.getEmployeeName(employeeLeave_r15.employee), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r14.dateService.formatDate(employeeLeave_r15.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](employeeLeave_r15.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r14.getLeaveDuration(employeeLeave_r15.duration, employeeLeave_r15.startDate, employeeLeave_r15.endDate, employeeLeave_r15.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r15.reason, " ");
      }
    }

    function LeaveComponent_ng_container_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, LeaveComponent_ng_container_29_div_1_tr_19_Template, 19, 6, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r11.pendingLeaves);
      }
    }

    function LeaveComponent_ng_container_29_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Pending Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    }

    function LeaveComponent_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LeaveComponent_ng_container_29_div_1_Template, 20, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LeaveComponent_ng_container_29_ng_template_2_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.pendingLeaves.length > 0)("ngIfElse", _r12);
      }
    }

    function LeaveComponent_ng_container_31_div_1_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r24 = ctx.$implicit;
        var i_r25 = ctx.index;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r25 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r23.getEmployeeName(employeeLeave_r24.employee), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r23.dateService.formatDate(employeeLeave_r24.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](employeeLeave_r24.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r23.getLeaveDuration(employeeLeave_r24.duration, employeeLeave_r24.startDate, employeeLeave_r24.endDate, employeeLeave_r24.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r24.reason, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r24.monitoredBy, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" on ", ctx_r23.dateService.formatDate(employeeLeave_r24.monitoredDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r24.comment ? employeeLeave_r24.comment : "--", " ");
      }
    }

    function LeaveComponent_ng_container_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Approved By");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, LeaveComponent_ng_container_31_div_1_tr_21_Template, 19, 9, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.approvedLeaves);
      }
    }

    function LeaveComponent_ng_container_31_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Approved Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    }

    function LeaveComponent_ng_container_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LeaveComponent_ng_container_31_div_1_Template, 22, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LeaveComponent_ng_container_31_ng_template_2_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.approvedLeaves.length > 0)("ngIfElse", _r21);
      }
    }

    function LeaveComponent_ng_container_33_div_1_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r30 = ctx.$implicit;
        var i_r31 = ctx.index;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r31 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r29.getEmployeeName(employeeLeave_r30.employee), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r29.dateService.formatDate(employeeLeave_r30.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](employeeLeave_r30.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r29.getLeaveDuration(employeeLeave_r30.duration, employeeLeave_r30.startDate, employeeLeave_r30.endDate, employeeLeave_r30.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r30.reason, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r30.monitoredBy, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" on ", ctx_r29.dateService.formatDate(employeeLeave_r30.monitoredDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", employeeLeave_r30.comment ? employeeLeave_r30.comment : "--", " ");
      }
    }

    function LeaveComponent_ng_container_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Employee");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Rejected By");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, LeaveComponent_ng_container_33_div_1_tr_21_Template, 19, 9, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r26.rejectedLeaves);
      }
    }

    function LeaveComponent_ng_container_33_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Rejected Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    }

    function LeaveComponent_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LeaveComponent_ng_container_33_div_1_Template, 22, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LeaveComponent_ng_container_33_ng_template_2_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.rejectedLeaves.length > 0)("ngIfElse", _r27);
      }
    }

    function LeaveComponent_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
    }

    var LeaveComponent =
    /*#__PURE__*/
    function () {
      function LeaveComponent(branchService, branchEmployeeService, dateService, router, route, employeeLeaveService, toastrService, dialogService) {
        _classCallCheck(this, LeaveComponent);

        this.branchService = branchService;
        this.branchEmployeeService = branchEmployeeService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.employeeLeaveService = employeeLeaveService;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
      }

      _createClass(LeaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.back();
            return;
          }

          this.branchEmployees = [];
          this.employee = '';
          this.approvedLeaves = [];
          this.pendingLeaves = [];
          this.rejectedLeaves = [];
          this.months = this.dateService.getMonths();
          this.years = this.dateService.getYears();
          this.month = (this.dateService.getDate().getMonth() + 1).toString().padStart(2, '0');
          this.year = this.years[this.years.length - 1];
          this.branchEmployeeService.getBranchAllEmployeeNameIds(this.branchId).subscribe(function (branchEmployees) {
            _this.branchEmployees = branchEmployees;
          }, function (error) {
            _this.showToastr('top-right', 'danger', error);
          });
          this.getBranchLeaves();
        }
      }, {
        key: "onSelectEmployee",
        value: function onSelectEmployee(employee) {
          this.employee = employee;
          this.getBranchLeaves();
        }
      }, {
        key: "onSelectMonth",
        value: function onSelectMonth(month) {
          this.month = month;
          this.getBranchLeaves();
        }
      }, {
        key: "onSelectYear",
        value: function onSelectYear(year) {
          this.year = year;

          if (year === '') {
            this.month = '';
          }

          this.getBranchLeaves();
        }
      }, {
        key: "getBranchLeaves",
        value: function getBranchLeaves() {
          var _this2 = this;

          this.loading = true;
          this.employeeLeaveService.getBranchAllEmployeeLeaves(this.branchId, this.employee, this.month, this.year).subscribe(function (leaves) {
            _this2.pendingLeaves = leaves.filter(function (leave) {
              return leave.status === 'pending';
            });
            _this2.approvedLeaves = leaves.filter(function (leave) {
              return leave.status === 'approved';
            });
            _this2.rejectedLeaves = leaves.filter(function (leave) {
              return leave.status === 'rejected';
            });
            _this2.loading = false;
          }, function (error) {
            _this2.showToastr('top-right', 'danger', error);

            _this2.loading = false;
          });
        }
      }, {
        key: "getEmployeeName",
        value: function getEmployeeName(employee) {
          var myEmployee = this.branchEmployees.find(function (curEmployee) {
            return curEmployee.employee === employee;
          });

          if (myEmployee) {
            return myEmployee.name;
          }

          return '--';
        }
      }, {
        key: "getLeaveDuration",
        value: function getLeaveDuration(duration, startDate, endDate, hours) {
          if (duration === 'single') {
            return "Single Day Leave on ".concat(this.dateService.formatDate(startDate));
          } else if (duration === 'multiple') {
            return "Multiple Days Leave from ".concat(this.dateService.formatDate(startDate), " to ").concat(this.dateService.formatDate(endDate));
          } else if ('hourly') {
            return "Hourly Leave on ".concat(this.dateService.formatDate(startDate), " for ").concat(hours, " Hours");
          } else {}
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "changeEmployeeLeaveStatus",
        value: function changeEmployeeLeaveStatus(_id, status, comment) {
          var _this3 = this;

          this.loading = true;
          var employeeLeave = {
            _id: _id,
            status: status,
            comment: comment
          };
          this.employeeLeaveService.changeEmployeeLeaveStatus(employeeLeave).subscribe(function (res) {
            _this3.showToastr('top-right', 'success', "Leave ".concat(status.toUpperCase(), " Successfully!"));

            _this3.getBranchLeaves();
          }, function (error) {
            _this3.showToastr('top-right', 'danger', error);

            _this3.loading = false;
          });
        }
      }, {
        key: "openCommentDialog",
        value: function openCommentDialog(id, status) {
          var _this4 = this;

          this.dialogService.open(_leave_comment_leave_comment_component__WEBPACK_IMPORTED_MODULE_0__["LeaveCommentComponent"], {
            context: {},
            closeOnBackdropClick: false,
            closeOnEsc: false
          }).onClose.subscribe(function (comment) {
            return _this4.changeEmployeeLeaveStatus(id, status, comment);
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
      }]);

      return LeaveComponent;
    }();

    LeaveComponent.ɵfac = function LeaveComponent_Factory(t) {
      return new (t || LeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_employee_leave_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeLeaveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"]));
    };

    LeaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: LeaveComponent,
      selectors: [["ngx-leave"]],
      decls: 36,
      vars: 12,
      consts: [[1, "row"], [1, "col-md-12"], [1, "col-md-3", "col-sm-4"], ["id", "select-employee", "name", "employee", "fullWidth", "", "placeholder", "All Employees", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-year", "name", "year", "fullWidth", "", "placeholder", "All Years", 3, "selected", "selectedChange"], ["id", "select-month", "name", "month", "fullWidth", "", "placeholder", "All Months", 3, "selected", "selectedChange"], [1, "body-container"], ["fullWidth", ""], ["tabTitle", "pending"], [4, "ngIf", "ngIfElse"], ["tabTitle", "approved"], ["tabTitle", "Rejected"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noPendingLeaves", ""], [1, "table-responsive"], [1, "table"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"], ["noApprovedLeaves", ""], ["noRejectedLeaves", ""]],
      template: function LeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Employee Leaves");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "nb-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedChange", function LeaveComponent_Template_nb_select_selectedChange_10_listener($event) {
            return ctx.onSelectEmployee($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "nb-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "All Employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, LeaveComponent_nb_option_13_Template, 2, 2, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "nb-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedChange", function LeaveComponent_Template_nb_select_selectedChange_15_listener($event) {
            return ctx.onSelectYear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nb-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "All Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, LeaveComponent_nb_option_18_Template, 2, 2, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedChange", function LeaveComponent_Template_nb_select_selectedChange_20_listener($event) {
            return ctx.onSelectMonth($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "nb-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "All Months");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, LeaveComponent_nb_option_23_Template, 2, 2, "nb-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "nb-card-body", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nb-tabset", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "nb-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, LeaveComponent_ng_container_29_Template, 4, 2, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "nb-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, LeaveComponent_ng_container_31_Template, 4, 2, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "nb-tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, LeaveComponent_ng_container_33_Template, 4, 2, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, LeaveComponent_ng_template_34_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", ctx.employee);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.branchEmployees);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.years);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", ctx.month);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r6);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](LeaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
        args: [{
          selector: 'ngx-leave',
          templateUrl: './leave.component.html',
          styleUrls: ['./leave.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]
        }, {
          type: _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_1__["BranchEmployeeService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeLeaveService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/leave/leave.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/institute/branch/leave/leave.module.ts ***!
    \********************************************************/

  /*! exports provided: LeaveModule */

  /***/
  function srcAppInstituteBranchLeaveLeaveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveModule", function () {
      return LeaveModule;
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


    var _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./leave-routing.module */
    "./src/app/institute/branch/leave/leave-routing.module.ts");
    /* harmony import */


    var _leave_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./leave.component */
    "./src/app/institute/branch/leave/leave.component.ts");
    /* harmony import */


    var _leave_comment_leave_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./leave-comment/leave-comment.component */
    "./src/app/institute/branch/leave/leave-comment/leave-comment.component.ts");

    var LeaveModule = function LeaveModule() {
      _classCallCheck(this, LeaveModule);
    };

    LeaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LeaveModule
    });
    LeaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LeaveModule_Factory(t) {
        return new (t || LeaveModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTabsetModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LeaveModule, {
        declarations: [_leave_component__WEBPACK_IMPORTED_MODULE_4__["LeaveComponent"], _leave_comment_leave_comment_component__WEBPACK_IMPORTED_MODULE_5__["LeaveCommentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTabsetModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LeaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_leave_component__WEBPACK_IMPORTED_MODULE_4__["LeaveComponent"], _leave_comment_leave_comment_component__WEBPACK_IMPORTED_MODULE_5__["LeaveCommentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTabsetModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);