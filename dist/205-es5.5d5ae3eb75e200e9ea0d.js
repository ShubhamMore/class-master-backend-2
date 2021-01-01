function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[205], {
  /***/
  "./src/app/institute/home/home-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/institute/home/home-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppInstituteHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/institute/home/home.component.ts");
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
      component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
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

    var HomeRoutingModule =
    /*@__PURE__*/
    function () {
      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return HomeRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/institute/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppInstituteHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../menu.service */
    "./src/app/institute/menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No Institute Added");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add Institute ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_nb_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Institute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Institutes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_div_1_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_div_1_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var branch_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.manageBranch(branch_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Manage ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_div_1_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_div_1_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var branch_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.activateBranch(branch_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Activate Now ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-badge", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-user", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card-footer", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_div_2_div_1_button_15_Template, 2, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_div_2_div_1_button_16_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", branch_r4.status ? "Active" : "Inactive")("status", branch_r4.status ? "success" : "danger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", branch_r4.basicDetails.branchName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, branch_r4.basicDetails.branchName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r4.address.city, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +91 ", branch_r4.basicDetails.phone, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", branch_r4.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !branch_r4.status);
      }
    }

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_2_div_1_Template, 17, 10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.branches);
      }
    }

    var HomeComponent =
    /*@__PURE__*/
    function () {
      var HomeComponent =
      /*#__PURE__*/
      function () {
        function HomeComponent(branchService, membershipService, menuService, router, route) {
          _classCallCheck(this, HomeComponent);

          this.branchService = branchService;
          this.membershipService = membershipService;
          this.menuService = menuService;
          this.router = router;
          this.route = route;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branches = [];
            this.menuService.hideMenu();
            this.branchService.setBranchId('');
            this.branchService.getBranches().subscribe(function (branches) {
              _this.branches = branches;

              _this.branchService.setBranchesData(branches);

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
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_membership_service__WEBPACK_IMPORTED_MODULE_2__["MembershipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["ngx-home"]],
        decls: 3,
        vars: 3,
        consts: [["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col-md-10", "col-12", "mx-auto", "text-center"], ["src", "", "alt", "Institute"], ["nbButton", "", "size", "small", "status", "primary", "routerLink", "../membership-plans"], [1, "col-12"], ["nbButton", "", "size", "small", "status", "warning", "routerLink", "../membership-plans", 1, "float-right"], [1, ""], ["icon", "plus-circle-outline"], ["class", "col-md-3 col-sm-4 col-12", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-4", "col-12"], [1, "shadow-sm"], [2, "position", "relative"], ["position", "top right", 3, "text", "status"], ["size", "medium", 1, "text-center", 3, "name"], [1, "text-center"], [1, "text-right"], ["class", "", "nbButton", "", "size", "small", "status", "warning", 3, "click", 4, "ngIf"], ["class", "", "nbButton", "", "size", "small", "status", "danger", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "warning", 1, "", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 1, "", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 11, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_nb_card_1_Template, 10, 0, "nb-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.branches.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.branches.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.branches.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbBadgeComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardFooterComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]],
        styles: [".active[_ngcontent-%COMP%] {\n  color: #00d68f;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}"]
      });
      return HomeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/home/home.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/institute/home/home.module.ts ***!
    \***********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppInstituteHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/institute/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/institute/home/home-routing.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var HomeModule =
    /*@__PURE__*/
    function () {
      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbBadgeModule"]]]
      });
      return HomeModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbBadgeModule"]]
      });
    })();
    /***/

  }
}]);