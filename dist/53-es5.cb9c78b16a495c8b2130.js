function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53], {
  /***/
  "./src/app/employee/branch/my-leave/my-leave-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/employee/branch/my-leave/my-leave-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MyLeaveRoutingModule */

  /***/
  function srcAppEmployeeBranchMyLeaveMyLeaveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLeaveRoutingModule", function () {
      return MyLeaveRoutingModule;
    });
    /* harmony import */


    var _my_leave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./my-leave.component */
    "./src/app/employee/branch/my-leave/my-leave.component.ts");
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
      component: _my_leave_component__WEBPACK_IMPORTED_MODULE_0__["MyLeaveComponent"]
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

    var MyLeaveRoutingModule = function MyLeaveRoutingModule() {
      _classCallCheck(this, MyLeaveRoutingModule);
    };

    MyLeaveRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MyLeaveRoutingModule
    });
    MyLeaveRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MyLeaveRoutingModule_Factory(t) {
        return new (t || MyLeaveRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyLeaveRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyLeaveRoutingModule, [{
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
  "./src/app/employee/branch/my-leave/my-leave.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/employee/branch/my-leave/my-leave.component.ts ***!
    \****************************************************************/

  /*! exports provided: MyLeaveComponent */

  /***/
  function srcAppEmployeeBranchMyLeaveMyLeaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLeaveComponent", function () {
      return MyLeaveComponent;
    });
    /* harmony import */


    var _save_leave_save_leave_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./save-leave/save-leave.component */
    "./src/app/employee/branch/my-leave/save-leave/save-leave.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/employee-leave.service */
    "./src/app/services/employee-leave.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MyLeaveComponent_nb_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var year_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", year_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](year_r7);
      }
    }

    function MyLeaveComponent_nb_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", month_r8.monthNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](month_r8.month);
      }
    }

    function MyLeaveComponent_ng_container_28_div_1_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyLeaveComponent_ng_container_28_div_1_tr_17_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

          var employeeLeave_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          return ctx_r15.editLeave(employeeLeave_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyLeaveComponent_ng_container_28_div_1_tr_17_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);

          var employeeLeave_r13 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          return ctx_r17.deleteLeave(employeeLeave_r13._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r14 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r12.dateService.formatDate(employeeLeave_r13.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employeeLeave_r13.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r12.getLeaveDuration(employeeLeave_r13.duration, employeeLeave_r13.startDate, employeeLeave_r13.endDate, employeeLeave_r13.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r13.reason, " ");
      }
    }

    function MyLeaveComponent_ng_container_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MyLeaveComponent_ng_container_28_div_1_tr_17_Template, 17, 5, "tr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.pendingLeaves);
      }
    }

    function MyLeaveComponent_ng_container_28_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Pending Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function MyLeaveComponent_ng_container_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyLeaveComponent_ng_container_28_div_1_Template, 18, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MyLeaveComponent_ng_container_28_ng_template_2_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.pendingLeaves.length > 0)("ngIfElse", _r10);
      }
    }

    function MyLeaveComponent_ng_container_30_div_1_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r22 = ctx.$implicit;
        var i_r23 = ctx.index;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r23 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r21.dateService.formatDate(employeeLeave_r22.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employeeLeave_r22.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r21.getLeaveDuration(employeeLeave_r22.duration, employeeLeave_r22.startDate, employeeLeave_r22.endDate, employeeLeave_r22.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r22.reason, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r22.monitoredBy, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" on ", ctx_r21.dateService.formatDate(employeeLeave_r22.monitoredDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r22.comment ? employeeLeave_r22.comment : "--", " ");
      }
    }

    function MyLeaveComponent_ng_container_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Approved By");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MyLeaveComponent_ng_container_30_div_1_tr_19_Template, 17, 8, "tr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r18.approvedLeaves);
      }
    }

    function MyLeaveComponent_ng_container_30_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Approved Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function MyLeaveComponent_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyLeaveComponent_ng_container_30_div_1_Template, 20, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MyLeaveComponent_ng_container_30_ng_template_2_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.approvedLeaves.length > 0)("ngIfElse", _r19);
      }
    }

    function MyLeaveComponent_ng_container_32_div_1_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employeeLeave_r28 = ctx.$implicit;
        var i_r29 = ctx.index;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r29 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r27.dateService.formatDate(employeeLeave_r28.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](employeeLeave_r28.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r27.getLeaveDuration(employeeLeave_r28.duration, employeeLeave_r28.startDate, employeeLeave_r28.endDate, employeeLeave_r28.hours), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r28.reason, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r28.monitoredBy, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" on ", ctx_r27.dateService.formatDate(employeeLeave_r28.monitoredDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", employeeLeave_r28.comment ? employeeLeave_r28.comment : "--", " ");
      }
    }

    function MyLeaveComponent_ng_container_32_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Rejected By");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Comment");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MyLeaveComponent_ng_container_32_div_1_tr_19_Template, 17, 8, "tr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r24.rejectedLeaves);
      }
    }

    function MyLeaveComponent_ng_container_32_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Rejected Leaves");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    function MyLeaveComponent_ng_container_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyLeaveComponent_ng_container_32_div_1_Template, 20, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MyLeaveComponent_ng_container_32_ng_template_2_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.rejectedLeaves.length > 0)("ngIfElse", _r25);
      }
    }

    function MyLeaveComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
    }

    var MyLeaveComponent =
    /*#__PURE__*/
    function () {
      function MyLeaveComponent(branchService, dateService, router, route, employeeLeaveService, toastrService, dialogService) {
        _classCallCheck(this, MyLeaveComponent);

        this.branchService = branchService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.employeeLeaveService = employeeLeaveService;
        this.toastrService = toastrService;
        this.dialogService = dialogService;
      }

      _createClass(MyLeaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.back();
            return;
          }

          this.approvedLeaves = [];
          this.pendingLeaves = [];
          this.rejectedLeaves = [];
          this.months = this.dateService.getMonths();
          this.years = this.dateService.getYears();
          this.month = (this.dateService.getDate().getMonth() + 1).toString().padStart(2, '0');
          this.year = this.years[this.years.length - 1];
          this.getMyLeaves();
        }
      }, {
        key: "onSelectMonth",
        value: function onSelectMonth(month) {
          this.month = month;
          this.getMyLeaves();
        }
      }, {
        key: "onSelectYear",
        value: function onSelectYear(year) {
          this.year = year;

          if (year === '') {
            this.month = '';
          }

          this.getMyLeaves();
        }
      }, {
        key: "getMyLeaves",
        value: function getMyLeaves() {
          var _this = this;

          this.loading = true;
          this.employeeLeaveService.getMyBranchLeaves(this.branchId, this.month, this.year).subscribe(function (leaves) {
            _this.pendingLeaves = leaves.filter(function (leave) {
              return leave.status === 'pending';
            });
            _this.approvedLeaves = leaves.filter(function (leave) {
              return leave.status === 'accepted';
            });
            _this.rejectedLeaves = leaves.filter(function (leave) {
              return leave.status === 'rejected';
            });
            _this.loading = false;
          }, function (error) {
            _this.showToastr('top-right', 'danger', error);

            _this.loading = false;
          });
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
        key: "saveLeave",
        value: function saveLeave(type, leave) {
          if (type === 'new') {
            this.pendingLeaves.push(leave);
          } else {
            var index = this.pendingLeaves.findIndex(function (curLeave) {
              return curLeave._id === leave._id;
            });

            if (index >= 0) {
              this.pendingLeaves[index] = leave;
            }
          }
        }
      }, {
        key: "openLeaveDialog",
        value: function openLeaveDialog() {
          var _this2 = this;

          this.dialogService.open(_save_leave_save_leave_component__WEBPACK_IMPORTED_MODULE_0__["SaveLeaveComponent"], {
            context: {},
            closeOnBackdropClick: false,
            closeOnEsc: false
          }).onClose.subscribe(function (myLeave) {
            return myLeave && _this2.saveLeave(myLeave.type, myLeave.leave);
          });
        }
      }, {
        key: "createLeave",
        value: function createLeave() {
          this.openLeaveDialog();
        }
      }, {
        key: "editLeave",
        value: function editLeave(leave) {
          this.employeeLeaveService.setEmployeeLeaveId(leave._id);
          this.employeeLeaveService.setEmployeeLeaveData(leave);
          this.openLeaveDialog();
        }
      }, {
        key: "deleteLeave",
        value: function deleteLeave(id) {
          var _this3 = this;

          this.loading = true;
          this.employeeLeaveService.deleteEmployeeLeave(id).subscribe(function (res) {
            var index = _this3.pendingLeaves.findIndex(function (curLeave) {
              return curLeave._id === id;
            });

            if (index >= 0) {
              _this3.pendingLeaves.splice(index, 1);
            }

            _this3.loading = false;
          }, function (error) {
            _this3.showToastr('top-right', 'danger', error);

            _this3.loading = false;
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

      return MyLeaveComponent;
    }();

    MyLeaveComponent.ɵfac = function MyLeaveComponent_Factory(t) {
      return new (t || MyLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_employee_leave_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeLeaveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]));
    };

    MyLeaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: MyLeaveComponent,
      selectors: [["ngx-my-leave"]],
      decls: 35,
      vars: 10,
      consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["type", "button", "nbButton", "", "size", "small", "status", "primary", "fullWidth", "", 3, "click"], [1, "col-md-6", "col-sm-4"], ["id", "select-year", "name", "year", "fullWidth", "", "placeholder", "All Years", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-month", "name", "month", "fullWidth", "", "placeholder", "All Months", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-12"], ["fullWidth", ""], ["tabTitle", "pending"], [4, "ngIf", "ngIfElse"], ["tabTitle", "approved"], ["tabTitle", "Rejected"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noPendingLeaves", ""], [1, "table-responsive"], [1, "table"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"], ["noApprovedLeaves", ""], ["noRejectedLeaves", ""]],
      template: function MyLeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "My Leaves");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyLeaveComponent_Template_button_click_7_listener() {
            return ctx.createLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Apply For Leave ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "nb-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function MyLeaveComponent_Template_nb_select_selectedChange_14_listener($event) {
            return ctx.onSelectYear($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "All Years");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MyLeaveComponent_nb_option_17_Template, 2, 2, "nb-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "nb-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedChange", function MyLeaveComponent_Template_nb_select_selectedChange_19_listener($event) {
            return ctx.onSelectMonth($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "nb-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "All Months");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, MyLeaveComponent_nb_option_22_Template, 2, 2, "nb-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "nb-card-body", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "nb-tabset", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "nb-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, MyLeaveComponent_ng_container_28_Template, 4, 2, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nb-tab", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MyLeaveComponent_ng_container_30_Template, 4, 2, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "nb-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, MyLeaveComponent_ng_container_32_Template, 4, 2, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, MyLeaveComponent_ng_template_33_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.years);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.month);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.months);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r5);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MyLeaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
          selector: 'ngx-my-leave',
          templateUrl: './my-leave.component.html',
          styleUrls: ['./my-leave.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeLeaveService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/my-leave/my-leave.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/employee/branch/my-leave/my-leave.module.ts ***!
    \*************************************************************/

  /*! exports provided: MyLeaveModule */

  /***/
  function srcAppEmployeeBranchMyLeaveMyLeaveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyLeaveModule", function () {
      return MyLeaveModule;
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


    var _my_leave_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-leave-routing.module */
    "./src/app/employee/branch/my-leave/my-leave-routing.module.ts");
    /* harmony import */


    var _my_leave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-leave.component */
    "./src/app/employee/branch/my-leave/my-leave.component.ts");
    /* harmony import */


    var _save_leave_save_leave_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./save-leave/save-leave.component */
    "./src/app/employee/branch/my-leave/save-leave/save-leave.component.ts");

    var MyLeaveModule = function MyLeaveModule() {
      _classCallCheck(this, MyLeaveModule);
    };

    MyLeaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MyLeaveModule
    });
    MyLeaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MyLeaveModule_Factory(t) {
        return new (t || MyLeaveModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _my_leave_routing_module__WEBPACK_IMPORTED_MODULE_4__["MyLeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyLeaveModule, {
        declarations: [_my_leave_component__WEBPACK_IMPORTED_MODULE_5__["MyLeaveComponent"], _save_leave_save_leave_component__WEBPACK_IMPORTED_MODULE_6__["SaveLeaveComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _my_leave_routing_module__WEBPACK_IMPORTED_MODULE_4__["MyLeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MyLeaveModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_my_leave_component__WEBPACK_IMPORTED_MODULE_5__["MyLeaveComponent"], _save_leave_save_leave_component__WEBPACK_IMPORTED_MODULE_6__["SaveLeaveComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _my_leave_routing_module__WEBPACK_IMPORTED_MODULE_4__["MyLeaveRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/my-leave/save-leave/save-leave.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/employee/branch/my-leave/save-leave/save-leave.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SaveLeaveComponent */

  /***/
  function srcAppEmployeeBranchMyLeaveSaveLeaveSaveLeaveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveLeaveComponent", function () {
      return SaveLeaveComponent;
    });
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../services/employee-leave.service */
    "./src/app/services/employee-leave.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["stepper"];

    function SaveLeaveComponent_nb_stepper_6_ng_container_10_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Application Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_10_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.leaveForm.get("date").errors == null ? null : ctx_r4.leaveForm.get("date").errors.required);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_nb_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var leaveType_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", leaveType_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](leaveType_r14);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_19_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Leave Type is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_19_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.leaveForm.get("leaveType").errors == null ? null : ctx_r6.leaveForm.get("leaveType").errors.required);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_nb_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var duration_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", duration_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, duration_r16));
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_26_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Duration is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_26_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.leaveForm.get("duration").errors == null ? null : ctx_r8.leaveForm.get("duration").errors.required);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_32_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Start Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_32_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.leaveForm.get("startDate").errors == null ? null : ctx_r9.leaveForm.get("startDate").errors.required);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_38_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " End Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_38_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.leaveForm.hasError("invalidEndDate"));
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_44_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Leave Hours are required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_44_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.leaveForm.hasError("invalidHours"));
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_50_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Leave Reason is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function SaveLeaveComponent_nb_stepper_6_ng_container_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveLeaveComponent_nb_stepper_6_ng_container_50_p_1_Template, 2, 0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.leaveForm.get("reason").errors == null ? null : ctx_r12.leaveForm.get("reason").errors.required);
      }
    }

    function SaveLeaveComponent_nb_stepper_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-stepper", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-step", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function SaveLeaveComponent_nb_stepper_6_Template_form_submit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          return ctx_r22.submitLeave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Application Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SaveLeaveComponent_nb_stepper_6_ng_container_10_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Leave Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nb-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "nb-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Select Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SaveLeaveComponent_nb_stepper_6_nb_option_18_Template, 2, 2, "nb-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SaveLeaveComponent_nb_stepper_6_ng_container_19_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Duration:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "nb-select", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedChange", function SaveLeaveComponent_nb_stepper_6_Template_nb_select_selectedChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          return ctx_r24.onChangeDuration($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, SaveLeaveComponent_nb_stepper_6_nb_option_25_Template, 3, 4, "nb-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SaveLeaveComponent_nb_stepper_6_ng_container_26_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Start Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SaveLeaveComponent_nb_stepper_6_ng_container_32_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "End Date:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, SaveLeaveComponent_nb_stepper_6_ng_container_38_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Hours:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, SaveLeaveComponent_nb_stepper_6_ng_container_44_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Reason:");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "textarea", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, SaveLeaveComponent_nb_stepper_6_ng_container_50_Template, 2, 1, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "nb-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "nb-step", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "table", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Application Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Leave Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Hours");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Reason");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](102, "nb-icon", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "prev");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveLeaveComponent_nb_stepper_6_Template_button_click_106_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          return ctx_r25.saveLeave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx_r0.leaveForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.leaveForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx_r0.dateService.getDateString())("status", ctx_r0.leaveForm.get("date").touched ? ctx_r0.leaveForm.get("date").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("date").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r0.leaveForm.get("leaveType").touched ? ctx_r0.leaveForm.get("leaveType").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.leaveTypes);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("leaveType").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r0.leaveForm.get("duration").touched ? ctx_r0.leaveForm.get("duration").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.durations);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("duration").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx_r0.dateService.getDateString())("status", ctx_r0.leaveForm.get("startDate").touched ? ctx_r0.leaveForm.get("startDate").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("startDate").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx_r0.dateService.getDateString())("status", ctx_r0.leaveForm.get("startDate").touched ? ctx_r0.leaveForm.hasError("invalidEndDate") ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("endDate").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r0.leaveForm.get("hours").touched ? ctx_r0.leaveForm.hasError("invalidHours") ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("hours").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r0.leaveForm.get("reason").touched ? ctx_r0.leaveForm.get("reason").invalid ? "danger" : "success" : "basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.leaveForm.get("reason").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.dateService.formatDate(ctx_r0.leaveForm.value.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.leaveForm.value.leaveType);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.leaveForm.value.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.dateService.formatDate(ctx_r0.leaveForm.value.startDate), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.leaveForm.value.endDate ? ctx_r0.dateService.formatDate(ctx_r0.leaveForm.value.endDate) : "--", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.leaveForm.value.hours ? ctx_r0.leaveForm.value.hours + " Hour/s" : "--");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.leaveForm.value.reason);
      }
    }

    function SaveLeaveComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    var SaveLeaveComponent =
    /*#__PURE__*/
    function () {
      function SaveLeaveComponent(branchService, dateService, leaveService, toastrService, ref) {
        _classCallCheck(this, SaveLeaveComponent);

        this.branchService = branchService;
        this.dateService = dateService;
        this.leaveService = leaveService;
        this.toastrService = toastrService;
        this.ref = ref;
      }

      _createClass(SaveLeaveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.loading = true;
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.onClose();
            return;
          }

          this.durations = ['single', 'multiple', 'hourly'];
          this.leaveTypes = ['Emergency Leave', 'No Call No Show', 'Planned Leave', 'Sick Leave', 'Unplanned Leave'];
          this.leaveService.getEmployeeLeaveData().subscribe(function (leave) {
            _this4.leave = leave;
            _this4.leaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              leaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.leaveType : '', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.duration : _this4.durations[0], {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.date : _this4.dateService.getDateString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.startDate : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              }),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.endDate : null, {
                validators: []
              }),
              hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.hours : null, {
                validators: []
              }),
              reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](leave ? leave.reason : null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              })
            }, {
              validators: _this4.durationValidator.bind(_this4)
            });

            _this4.onChangeDuration(_this4.leaveForm.value.duration);

            _this4.loading = false;
          });
        }
      }, {
        key: "durationValidator",
        value: function durationValidator(group) {
          var duration = group.value.duration;

          if (duration === 'multiple') {
            var endDate = group.value.endDate;

            if (!endDate) {
              return {
                invalidEndDate: true
              };
            } else {
              return null;
            }
          } else if (duration === 'hourly') {
            var hours = group.value.hours;

            if (!hours) {
              return {
                invalidHours: true
              };
            } else {
              return null;
            }
          } else {
            return null;
          }
        }
      }, {
        key: "onChangeDuration",
        value: function onChangeDuration(duration) {
          if (duration === 'single') {
            this.leaveForm.patchValue({
              endDate: null,
              hours: null
            });
            this.leaveForm.get('endDate').disable();
            this.leaveForm.get('hours').disable();
          } else if (duration === 'multiple') {
            this.leaveForm.patchValue({
              hours: null
            });
            this.leaveForm.get('endDate').enable();
            this.leaveForm.get('hours').disable();
          } else if (duration === 'hourly') {
            this.leaveForm.patchValue({
              endDate: null
            });
            this.leaveForm.get('endDate').disable();
            this.leaveForm.get('hours').enable();
          } else {
            this.leaveForm.get('endDate').enable();
            this.leaveForm.get('hours').enable();
          }
        }
      }, {
        key: "submitLeave",
        value: function submitLeave() {
          this.leaveForm.markAllAsTouched();

          if (this.leaveForm.invalid) {
            this.showToastr('top-right', 'danger', 'Leave Details are required');
            return;
          }

          this.stepper.next();
        }
      }, {
        key: "saveLeave",
        value: function saveLeave() {
          var _this5 = this;

          this.leaveForm.markAllAsTouched();

          if (this.leaveForm.invalid) {
            this.showToastr('top-right', 'danger', 'Leave Details are required');
            return;
          }

          this.loading = true;
          var leave = Object.assign({
            branch: this.branchId
          }, this.leaveForm.getRawValue());

          if (!this.leave) {
            this.leaveService.createEmployeeLeave(leave).subscribe(function (resLeave) {
              _this5.ref.close({
                leave: resLeave,
                type: 'new'
              });
            }, function (error) {
              _this5.showToastr('top-right', 'danger', error);

              _this5.loading = false;
            });
          } else {
            leave._id = this.leave._id;
            this.leaveService.updateEmployeeLeave(leave).subscribe(function (res) {
              _this5.ref.close({
                leave: leave,
                type: 'edit'
              });
            }, function (error) {
              _this5.showToastr('top-right', 'danger', error);

              _this5.loading = false;
            });
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.ref.close();
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
          this.leaveService.deleteEmployeeLeaveData();
        }
      }]);

      return SaveLeaveComponent;
    }();

    SaveLeaveComponent.ɵfac = function SaveLeaveComponent_Factory(t) {
      return new (t || SaveLeaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_0__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_employee_leave_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeLeaveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"]));
    };

    SaveLeaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SaveLeaveComponent,
      selectors: [["ngx-save-leave"]],
      viewQuery: function SaveLeaveComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        }
      },
      decls: 9,
      vars: 3,
      consts: [[1, "leave-box"], ["icon", "close-outline", 1, "float-right", "pointer", 3, "click"], [1, ""], [3, "linear", 4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "linear"], ["stepper", ""], ["label", "Leave Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "Date", "fullWidth", "", 3, "min", "status"], [4, "ngIf"], ["for", "input-leave-type", 1, "label"], ["id", "input-leave-type", "name", "leaveType", "formControlName", "leaveType", "placeholder", "Select Leave Type", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-duration", 1, "label"], ["id", "input-duration", "name", "duration", "formControlName", "duration", "placeholder", "Select Duration", "fullWidth", "", 3, "status", "selectedChange"], ["for", "input-start-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-start-date", "name", "startDate", "formControlName", "startDate", "placeholder", "Start Date", "fullWidth", "", 3, "min", "status"], ["for", "input-end-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-end-date", "name", "endDate", "formControlName", "endDate", "placeholder", "End Date", "fullWidth", "", 3, "min", "status"], ["for", "input-hours", 1, "label"], ["type", "number", "nbInput", "", "id", "input-hours", "name", "hours", "min", "0", "formControlName", "hours", "placeholder", "Hours", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-reason", 1, "label"], ["type", "text", "nbInput", "", "id", "input-reason", "name", "reason", "formControlName", "reason", "placeholder", "Reason", "fullWidth", "", 3, "status"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"], [1, "text-center", "pt-5", "pb-5"]],
      template: function SaveLeaveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveLeaveComponent_Template_nb_icon_click_2_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SaveLeaveComponent_nb_stepper_6_Template, 109, 29, "nb-stepper", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SaveLeaveComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx.leave ? "Apply for Leave" : "Edit Leave", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperPreviousDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
      styles: [".leave-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .leave-box[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .leave-box[_ngcontent-%COMP%] {\n    width: 70vw;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .leave-box[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .leave-box[_ngcontent-%COMP%] {\n    width: 96vw;\n  }\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](SaveLeaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'ngx-save-leave',
          templateUrl: './save-leave.component.html',
          styleUrls: ['./save-leave.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_0__["BranchService"]
        }, {
          type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]
        }, {
          type: _services_employee_leave_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeLeaveService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"]
        }];
      }, {
        stepper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['stepper', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  }
}]);