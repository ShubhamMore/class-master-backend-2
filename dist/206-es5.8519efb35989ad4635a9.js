function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[206], {
  /***/
  "./src/app/institute/manage-institute/manage-institute-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/institute/manage-institute/manage-institute-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ManageInstituteRoutingModule */

  /***/
  function srcAppInstituteManageInstituteManageInstituteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageInstituteRoutingModule", function () {
      return ManageInstituteRoutingModule;
    });
    /* harmony import */


    var _manage_institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-institute.component */
    "./src/app/institute/manage-institute/manage-institute.component.ts");
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
      component: _manage_institute_component__WEBPACK_IMPORTED_MODULE_0__["ManageInstituteComponent"]
    }, {
      path: 'page-not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        0).then(__webpack_require__.bind(null,
        /*! ../../shared/page-not-found/page-not-found.module */
        "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
          return m.PageNotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var ManageInstituteRoutingModule = function ManageInstituteRoutingModule() {
      _classCallCheck(this, ManageInstituteRoutingModule);
    };

    ManageInstituteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManageInstituteRoutingModule
    });
    ManageInstituteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ManageInstituteRoutingModule_Factory(t) {
        return new (t || ManageInstituteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageInstituteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageInstituteRoutingModule, [{
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
  "./src/app/institute/manage-institute/manage-institute.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/institute/manage-institute/manage-institute.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ManageInstituteComponent */

  /***/
  function srcAppInstituteManageInstituteManageInstituteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageInstituteComponent", function () {
      return ManageInstituteComponent;
    });
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../menu.service */
    "./src/app/institute/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function ManageInstituteComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "No Institute Added");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Add Institute ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function ManageInstituteComponent_div_1_tr_10_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInstituteComponent_div_1_tr_10_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

          var branch_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          return ctx_r6.manageBranch(branch_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Manage ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function ManageInstituteComponent_div_1_tr_10_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInstituteComponent_div_1_tr_10_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

          var branch_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          return ctx_r9.activateBranch(branch_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Activate Now ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    }

    function ManageInstituteComponent_div_1_tr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nb-user", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInstituteComponent_div_1_tr_10_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

          var branch_r3 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          return ctx_r12.viewBranch(branch_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInstituteComponent_div_1_tr_10_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

          var branch_r3 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          return ctx_r14.editBranch(branch_r3._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ManageInstituteComponent_div_1_tr_10_button_20_Template, 2, 0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ManageInstituteComponent_div_1_tr_10_button_21_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, branch_r3.basicDetails.branchName))("title", branch_r3.address.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.getAddress(branch_r3.address), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("+91 ", branch_r3.basicDetails.phone, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", branch_r3.status ? "active" : "inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](branch_r3.status ? "Active" : "Inactive");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", branch_r3.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !branch_r3.status);
      }
    }

    function ManageInstituteComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "My Institutes");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ManageInstituteComponent_div_1_tr_10_Template, 22, 10, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.branches);
      }
    }

    var ManageInstituteComponent =
    /*#__PURE__*/
    function () {
      function ManageInstituteComponent(menuService, membershipService, branchService, router, route) {
        _classCallCheck(this, ManageInstituteComponent);

        this.menuService = menuService;
        this.membershipService = membershipService;
        this.branchService = branchService;
        this.router = router;
        this.route = route;
      }

      _createClass(ManageInstituteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.branches = [];
          this.menuService.hideMenu();
          this.branchService.setBranchId('');
          this.branchService.getBranches().subscribe(function (branches) {
            _this.branches = branches;
            _this.loading = false;
          }, function (err) {
            _this.loading = false;
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress(address) {
          var address2 = address.address2 ? address.address2 + ', ' : '';
          return address.address1 + ', ' + address2 + address.city + ' - ' + address.pinCode + ', ' + address.state;
        }
      }, {
        key: "manageBranch",
        value: function manageBranch(id) {
          this.branchService.setBranchId(id);
          this.router.navigate(['../branch/dashboard'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "activateBranch",
        value: function activateBranch(id) {
          this.branchService.setBranchId(id);
          this.membershipService.setMembershipType('renew');
          this.router.navigate(['../membership-plans'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "viewBranch",
        value: function viewBranch(id) {
          this.branchService.setBranchId(id);
          this.router.navigate(['../view'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "editBranch",
        value: function editBranch(id) {
          this.branchService.setBranchId(id);
          this.router.navigate(['../edit'], {
            relativeTo: this.route,
            queryParams: {
              mode: 'edit'
            }
          });
        }
      }]);

      return ManageInstituteComponent;
    }();

    ManageInstituteComponent.ɵfac = function ManageInstituteComponent_Factory(t) {
      return new (t || ManageInstituteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_membership_service__WEBPACK_IMPORTED_MODULE_0__["MembershipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ManageInstituteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ManageInstituteComponent,
      selectors: [["ngx-manage-institute"]],
      decls: 2,
      vars: 2,
      consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-10", "col-12", "mx-auto", "text-center"], ["src", "", "alt", "Institute"], ["nbButton", "", "size", "small", "status", "primary", "routerLink", "/institute/add"], [1, "col-md-12"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "name", "title"], [1, ""], [3, "ngClass"], ["nbButton", "", "size", "small", "status", "info", 1, "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "basic", 1, "mr-2", 3, "click"], ["class", "", "nbButton", "", "size", "small", "status", "warning", 3, "click", 4, "ngIf"], ["class", "", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "warning", 1, "", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 1, "", 3, "click"]],
      template: function ManageInstituteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ManageInstituteComponent_div_0_Template, 11, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ManageInstituteComponent_div_1_Template, 11, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.branches.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.branches.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]],
      styles: [".active[_ngcontent-%COMP%] {\n  color: #00d68f;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ManageInstituteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'ngx-manage-institute',
          templateUrl: './manage-institute.component.html',
          styleUrls: ['./manage-institute.component.scss']
        }]
      }], function () {
        return [{
          type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
        }, {
          type: _services_membership_service__WEBPACK_IMPORTED_MODULE_0__["MembershipService"]
        }, {
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/manage-institute/manage-institute.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/institute/manage-institute/manage-institute.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ManageInstituteModule */

  /***/
  function srcAppInstituteManageInstituteManageInstituteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageInstituteModule", function () {
      return ManageInstituteModule;
    });
    /* harmony import */


    var _manage_institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-institute.component */
    "./src/app/institute/manage-institute/manage-institute.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _manage_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-institute-routing.module */
    "./src/app/institute/manage-institute/manage-institute-routing.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ManageInstituteModule = function ManageInstituteModule() {
      _classCallCheck(this, ManageInstituteModule);
    };

    ManageInstituteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManageInstituteModule
    });
    ManageInstituteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ManageInstituteModule_Factory(t) {
        return new (t || ManageInstituteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageInstituteModule, {
        declarations: [_manage_institute_component__WEBPACK_IMPORTED_MODULE_0__["ManageInstituteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageInstituteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_manage_institute_component__WEBPACK_IMPORTED_MODULE_0__["ManageInstituteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);