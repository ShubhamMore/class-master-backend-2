function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[207], {
  /***/
  "./src/app/institute/manage-institute/view-institute/view-institute-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/institute/manage-institute/view-institute/view-institute-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ViewInstituteRoutingModule */

  /***/
  function srcAppInstituteManageInstituteViewInstituteViewInstituteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInstituteRoutingModule", function () {
      return ViewInstituteRoutingModule;
    });
    /* harmony import */


    var _view_institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-institute.component */
    "./src/app/institute/manage-institute/view-institute/view-institute.component.ts");
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
      component: _view_institute_component__WEBPACK_IMPORTED_MODULE_0__["ViewInstituteComponent"]
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

    var ViewInstituteRoutingModule = function ViewInstituteRoutingModule() {
      _classCallCheck(this, ViewInstituteRoutingModule);
    };

    ViewInstituteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewInstituteRoutingModule
    });
    ViewInstituteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewInstituteRoutingModule_Factory(t) {
        return new (t || ViewInstituteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewInstituteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewInstituteRoutingModule, [{
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
  "./src/app/institute/manage-institute/view-institute/view-institute.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/institute/manage-institute/view-institute/view-institute.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ViewInstituteComponent */

  /***/
  function srcAppInstituteManageInstituteViewInstituteViewInstituteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInstituteComponent", function () {
      return ViewInstituteComponent;
    });
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../menu.service */
    "./src/app/institute/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function ViewInstituteComponent_nb_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Branch Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Current Plan Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Activation Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Expiry Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Address 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Address 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Pincode");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "State");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, ctx_r0.branch.basicDetails.branchName));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.basicDetails.branchName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.currentPlanDetails.planType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.currentPlanDetails.activationDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.currentPlanDetails.expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.basicDetails.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.basicDetails.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.address.address1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.address.address2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.address.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.address.pinCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.address.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getCategories());
      }
    }

    var ViewInstituteComponent =
    /*#__PURE__*/
    function () {
      function ViewInstituteComponent(menuService, branchService, router, route) {
        _classCallCheck(this, ViewInstituteComponent);

        this.menuService = menuService;
        this.branchService = branchService;
        this.router = router;
        this.route = route;
      }

      _createClass(ViewInstituteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.menuService.hideMenu();
          this.branchId = this.branchService.getBranchId();

          if (!this.branchId) {
            this.router.navigate(['../page-not-found'], {
              relativeTo: this.route
            });
            return;
          }

          this.branchService.getBranch(this.branchId).subscribe(function (branch) {
            _this.branch = branch;
            _this.loading = false;
          }, function (error) {
            _this.router.navigate(['../'], {
              relativeTo: _this.route
            });
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var categories = [];
          this.branch.categories.forEach(function (category) {
            categories.push(category.category);
          });
          return categories.join(', ');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.branchService.deleteBranchId();
        }
      }]);

      return ViewInstituteComponent;
    }();

    ViewInstituteComponent.ɵfac = function ViewInstituteComponent_Factory(t) {
      return new (t || ViewInstituteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ViewInstituteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewInstituteComponent,
      selectors: [["ngx-view-institute"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered"]],
      template: function ViewInstituteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ViewInstituteComponent_nb_card_0_Template, 69, 15, "nb-card", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewInstituteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-view-institute',
          templateUrl: './view-institute.component.html',
          styleUrls: ['./view-institute.component.scss']
        }]
      }], function () {
        return [{
          type: _menu_service__WEBPACK_IMPORTED_MODULE_0__["MenuService"]
        }, {
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/manage-institute/view-institute/view-institute.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/institute/manage-institute/view-institute/view-institute.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ViewInstituteModule */

  /***/
  function srcAppInstituteManageInstituteViewInstituteViewInstituteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInstituteModule", function () {
      return ViewInstituteModule;
    });
    /* harmony import */


    var _view_institute_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view-institute.component */
    "./src/app/institute/manage-institute/view-institute/view-institute.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _view_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-institute-routing.module */
    "./src/app/institute/manage-institute/view-institute/view-institute-routing.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ViewInstituteModule = function ViewInstituteModule() {
      _classCallCheck(this, ViewInstituteModule);
    };

    ViewInstituteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ViewInstituteModule
    });
    ViewInstituteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ViewInstituteModule_Factory(t) {
        return new (t || ViewInstituteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewInstituteModule, {
        declarations: [_view_institute_component__WEBPACK_IMPORTED_MODULE_0__["ViewInstituteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewInstituteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_view_institute_component__WEBPACK_IMPORTED_MODULE_0__["ViewInstituteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_institute_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewInstituteRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);