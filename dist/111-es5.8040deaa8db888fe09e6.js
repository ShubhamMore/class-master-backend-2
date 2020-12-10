function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111], {
  /***/
  "./src/app/employee/branch/manage-branch/receipt-info/receipt-info-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/receipt-info/receipt-info-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ReceiptInfoRoutingModule */

  /***/
  function srcAppEmployeeBranchManageBranchReceiptInfoReceiptInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceiptInfoRoutingModule", function () {
      return ReceiptInfoRoutingModule;
    });
    /* harmony import */


    var _receipt_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./receipt-info.component */
    "./src/app/employee/branch/manage-branch/receipt-info/receipt-info.component.ts");
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
      component: _receipt_info_component__WEBPACK_IMPORTED_MODULE_0__["ReceiptInfoComponent"]
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
      redirectTo: 'page-not-found',
      pathMatch: 'full'
    }];

    var ReceiptInfoRoutingModule =
    /*@__PURE__*/
    function () {
      var ReceiptInfoRoutingModule = function ReceiptInfoRoutingModule() {
        _classCallCheck(this, ReceiptInfoRoutingModule);
      };

      ReceiptInfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ReceiptInfoRoutingModule
      });
      ReceiptInfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ReceiptInfoRoutingModule_Factory(t) {
          return new (t || ReceiptInfoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return ReceiptInfoRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReceiptInfoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/manage-branch/receipt-info/receipt-info.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/receipt-info/receipt-info.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ReceiptInfoComponent */

  /***/
  function srcAppEmployeeBranchManageBranchReceiptInfoReceiptInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceiptInfoComponent", function () {
      return ReceiptInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/billing.service */
    "./src/app/services/billing.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReceiptInfoComponent_ng_container_14_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User Name is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReceiptInfoComponent_ng_container_14_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company Name should contain minimum 5 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReceiptInfoComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReceiptInfoComponent_ng_container_14_p_1_Template, 2, 0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReceiptInfoComponent_ng_container_14_p_2_Template, 2, 0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.billingForm.get("name").errors == null ? null : ctx_r0.billingForm.get("name").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.billingForm.get("name").errors == null ? null : ctx_r0.billingForm.get("name").errors.minlength);
      }
    }

    function ReceiptInfoComponent_ng_container_25_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company address is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReceiptInfoComponent_ng_container_25_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company address should be 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReceiptInfoComponent_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReceiptInfoComponent_ng_container_25_p_1_Template, 2, 0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReceiptInfoComponent_ng_container_25_p_2_Template, 2, 0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.billingForm.get("address").errors == null ? null : ctx_r1.billingForm.get("address").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.billingForm.get("address").errors == null ? null : ctx_r1.billingForm.get("address").errors.minlength);
      }
    }

    var ReceiptInfoComponent =
    /*@__PURE__*/
    function () {
      var ReceiptInfoComponent =
      /*#__PURE__*/
      function () {
        function ReceiptInfoComponent(branchService, toastrService, billingService, router, route) {
          _classCallCheck(this, ReceiptInfoComponent);

          this.branchService = branchService;
          this.toastrService = toastrService;
          this.billingService = billingService;
          this.router = router;
          this.route = route;
        }

        _createClass(ReceiptInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
              return;
            }

            this.billingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]
              }),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)]
              }),
              gstNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: []
              }),
              termsAndConditions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: []
              })
            });
            this.getBillingDetails();
          }
        }, {
          key: "getBillingDetails",
          value: function getBillingDetails() {
            var _this = this;

            this.billingService.getBillingDetails(this.branchId).subscribe(function (res) {
              _this.billingDetails = res;

              if (_this.billingDetails) {
                _this.billingForm.patchValue({
                  name: _this.billingDetails.name,
                  address: _this.billingDetails.address,
                  gstNumber: _this.billingDetails.gstNumber,
                  termsAndConditions: _this.billingDetails.termsAndConditions
                });
              }

              _this.loading = false;
            }, function (error) {
              _this.loading = false;
            });
          }
        }, {
          key: "saveBillingDetails",
          value: function saveBillingDetails() {
            var _this2 = this;

            this.billingForm.markAllAsTouched();

            if (this.billingForm.invalid) {
              this.showToastr('top-right', 'danger', 'Fill Billing Details Correctly');
              return;
            }

            this.loading = true;
            var billingDetails = this.billingForm.value;
            billingDetails.branch = this.branchId;

            if (this.billingDetails) {
              billingDetails._id = this.billingDetails._id;
            }

            this.billingService.saveBillingDetails(billingDetails).subscribe(function (res) {
              _this2.showToastr('top-right', 'success', 'Billing Details Updated Successfully!');

              _this2.router.navigate(['../'], {
                relativeTo: _this2.route
              });

              _this2.loading = false;
            }, function (error) {
              _this2.showToastr('top-right', 'danger', error);

              _this2.loading = false;
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

        return ReceiptInfoComponent;
      }();

      ReceiptInfoComponent.ɵfac = function ReceiptInfoComponent_Factory(t) {
        return new (t || ReceiptInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_billing_service__WEBPACK_IMPORTED_MODULE_4__["InstituteBillingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      ReceiptInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReceiptInfoComponent,
        selectors: [["ngx-receipt-info"]],
        decls: 36,
        vars: 5,
        consts: [["id", "title", 1, "title"], [1, "row"], [1, "col-12"], [3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-billing-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-billing-name", "name", "name", "formControlName", "name", "placeholder", "Company Name", "minlength", "5", "maxlength", "30", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-gst-number", 1, "label"], ["type", "text", "nbInput", "", "id", "input-gst-number", "name", "gstNumber", "formControlName", "gstNumber", "placeholder", "GST Number (Optional)", "fullWidth", ""], [1, "col-md-12"], ["for", "input-billing-address", 1, "label"], ["type", "text", "nbInput", "", "id", "input-billing-address", "name", "address", "formControlName", "address", "placeholder", "Company Address", "rows", "2", "minlength", "10", "maxlength", "150", "fullWidth", "", 3, "status"], ["for", "input-terms-conditions", 1, "label"], ["type", "text", "nbInput", "", "id", "input-terms-conditions", "name", "termsAndConditions", "formControlName", "termsAndConditions", "placeholder", "Terms & Conditions (Optional)", "rows", "2", "minlength", "25", "fullWidth", ""], [1, "col-12", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "primary"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function ReceiptInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Receipt Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReceiptInfoComponent_Template_form_ngSubmit_7_listener() {
              return ctx.saveBillingDetails();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Company Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReceiptInfoComponent_ng_container_14_Template, 3, 2, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "GST Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReceiptInfoComponent_ng_container_25_Template, 3, 2, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Terms & Conditions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.billingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.billingForm.get("name").touched ? ctx.billingForm.get("name").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingForm.get("name").invalid && ctx.billingForm.get("name").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.billingForm.get("address").touched ? ctx.billingForm.get("address").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.billingForm.get("address").invalid && ctx.billingForm.get("address").touched);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]],
        styles: [""]
      });
      return ReceiptInfoComponent;
    }();
    /***/

  },

  /***/
  "./src/app/employee/branch/manage-branch/receipt-info/receipt-info.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/receipt-info/receipt-info.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ReceiptInfoModule */

  /***/
  function srcAppEmployeeBranchManageBranchReceiptInfoReceiptInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReceiptInfoModule", function () {
      return ReceiptInfoModule;
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


    var _receipt_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./receipt-info.component */
    "./src/app/employee/branch/manage-branch/receipt-info/receipt-info.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _receipt_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./receipt-info-routing.module */
    "./src/app/employee/branch/manage-branch/receipt-info/receipt-info-routing.module.ts");

    var ReceiptInfoModule =
    /*@__PURE__*/
    function () {
      var ReceiptInfoModule = function ReceiptInfoModule() {
        _classCallCheck(this, ReceiptInfoModule);
      };

      ReceiptInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ReceiptInfoModule
      });
      ReceiptInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ReceiptInfoModule_Factory(t) {
          return new (t || ReceiptInfoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _receipt_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceiptInfoRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
      });
      return ReceiptInfoModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReceiptInfoModule, {
        declarations: [_receipt_info_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _receipt_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceiptInfoRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
      });
    })();
    /***/

  }
}]);