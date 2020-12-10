function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[208], {
  /***/
  "./src/app/institute/membership-plans/membership-plans-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/institute/membership-plans/membership-plans-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: MembershipPlansRoutingModule */

  /***/
  function srcAppInstituteMembershipPlansMembershipPlansRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipPlansRoutingModule", function () {
      return MembershipPlansRoutingModule;
    });
    /* harmony import */


    var _membership_plans_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./membership-plans.component */
    "./src/app/institute/membership-plans/membership-plans.component.ts");
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
      component: _membership_plans_component__WEBPACK_IMPORTED_MODULE_0__["MembershipPlansComponent"]
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

    var MembershipPlansRoutingModule =
    /*@__PURE__*/
    function () {
      var MembershipPlansRoutingModule = function MembershipPlansRoutingModule() {
        _classCallCheck(this, MembershipPlansRoutingModule);
      };

      MembershipPlansRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MembershipPlansRoutingModule
      });
      MembershipPlansRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MembershipPlansRoutingModule_Factory(t) {
          return new (t || MembershipPlansRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return MembershipPlansRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MembershipPlansRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/membership-plans/membership-plans.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/institute/membership-plans/membership-plans.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MembershipPlansComponent */

  /***/
  function srcAppInstituteMembershipPlansMembershipPlansComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipPlansComponent", function () {
      return MembershipPlansComponent;
    });
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../payment/payment.component */
    "./src/app/institute/payment/payment.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../checkout/checkout.component */
    "./src/app/institute/checkout/checkout.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../menu.service */
    "./src/app/institute/menu.service.ts");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_membership_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/membership.service */
    "./src/app/services/membership.service.ts");
    /* harmony import */


    var _services_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../services/payment.service */
    "./src/app/services/payment.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MembershipPlansComponent_button_234_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MembershipPlansComponent_button_234_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r6.activate("membership", "monthly");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Activate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MembershipPlansComponent_button_236_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MembershipPlansComponent_button_236_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8.activate("membership", "quarterly");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Activate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MembershipPlansComponent_button_238_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MembershipPlansComponent_button_238_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10.activate("membership", "half-yearly");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Activate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MembershipPlansComponent_button_240_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MembershipPlansComponent_button_240_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r12.activate("membership", "yearly");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Activate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function MembershipPlansComponent_ng_template_242_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Comming Soon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var MembershipPlansComponent =
    /*@__PURE__*/
    function () {
      var MembershipPlansComponent =
      /*#__PURE__*/
      function () {
        function MembershipPlansComponent(menuService, branchService, membershipService, paymentService, dialogService, toastrService, router, route) {
          _classCallCheck(this, MembershipPlansComponent);

          this.menuService = menuService;
          this.branchService = branchService;
          this.membershipService = membershipService;
          this.paymentService = paymentService;
          this.dialogService = dialogService;
          this.toastrService = toastrService;
          this.router = router;
          this.route = route;
        }

        _createClass(MembershipPlansComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            this.membershipType = this.membershipService.getMembershipType();

            if (this.membershipType !== 'renew') {
              this.branchService.setBranchId('');
              this.branchId = null;
            }

            this.membershipPlans = [];
            this.getMembershipPlans();
            this.menuService.hideMenu();
          }
        }, {
          key: "getMembershipPlans",
          value: function getMembershipPlans() {
            var _this = this;

            this.membershipService.getMemberships().subscribe(function (membershipPlans) {
              _this.membershipPlans = membershipPlans;
              _this.loading = false;
            }, function (error) {
              _this.loading = false;
            });
          }
        }, {
          key: "getPrice",
          value: function getPrice(name) {
            var membershipPlan = this.getMembership(name);

            if (membershipPlan) {
              var price = parseFloat(membershipPlan.price.toString());
              return price.toFixed(2).toString() + '/-';
            } else {
              return '--';
            }
          }
        }, {
          key: "onClosePayment",
          value: function onClosePayment(order) {
            if (order.status) {
              this.activateBranch(this.branchId, order.order, order.receipt);
            }
          }
        }, {
          key: "onCheckout",
          value: function onCheckout(checkout) {
            var _this2 = this;

            if (checkout.status) {
              this.dialogService.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_0__["PaymentComponent"], {
                context: {},
                closeOnBackdropClick: false,
                closeOnEsc: false
              }).onClose.subscribe(function (order) {
                return order && _this2.onClosePayment(order);
              });
            }
          }
        }, {
          key: "getMembership",
          value: function getMembership(name) {
            return this.membershipPlans.find(function (curMembershipPlan) {
              return curMembershipPlan.name === name;
            });
          }
        }, {
          key: "isMembershipPlanAvailable",
          value: function isMembershipPlanAvailable(name) {
            var membershipPlan = this.getMembership(name);

            if (membershipPlan) {
              return true;
            }

            return false;
          }
        }, {
          key: "activate",
          value: function activate(planType, packageType) {
            var _this3 = this;

            var membershipPlan = this.getMembership(packageType);

            if (membershipPlan) {
              this.paymentService.setPaymentDetails(planType, packageType, membershipPlan.price);

              if (this.branchId && this.membershipType === 'renew') {
                this.paymentDetails = this.paymentService.getPaymentDetails();
                this.dialogService.open(_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutComponent"], {
                  context: {},
                  closeOnBackdropClick: false,
                  closeOnEsc: false
                }).onClose.subscribe(function (checkout) {
                  return checkout && _this3.onCheckout(checkout);
                });
              } else {
                this.router.navigate(['../add'], {
                  relativeTo: this.route
                });
              }
            }
          }
        }, {
          key: "activateBranch",
          value: function activateBranch(id, orderId, ReceiptId) {
            var _this4 = this;

            var paymentDetails = {
              amount: this.paymentDetails.amount,
              planType: this.paymentDetails.planType,
              orderId: orderId,
              receiptId: ReceiptId
            };
            this.branchService.activateBranch(id, paymentDetails).subscribe(function (res) {
              _this4.showToastr('top-right', 'success', 'Institute Activated Successfully');

              _this4.router.navigate(['/institute']);
            }, function (error) {
              _this4.showToastr('top-right', 'danger', error);
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
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.branchId && this.membershipType === 'renew') {
              this.branchService.deleteBranchId();
              this.paymentService.deletePaymentDetails();
            }
          }
        }]);

        return MembershipPlansComponent;
      }();

      MembershipPlansComponent.ɵfac = function MembershipPlansComponent_Factory(t) {
        return new (t || MembershipPlansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_membership_service__WEBPACK_IMPORTED_MODULE_5__["MembershipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
      };

      MembershipPlansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MembershipPlansComponent,
        selectors: [["ngx-membership-plans"]],
        decls: 244,
        vars: 12,
        consts: [[1, "table-responsive"], [1, "table", "table-bordered"], [1, "table-header"], [1, "feature-heading"], [1, "first-heading"], [1, "second-heading"], [1, "third-heading"], [1, "fourth-heading"], [1, ""], [1, "feature-title"], [1, "first-title"], [1, "second-title"], [1, "third-title"], [1, "fourth-title"], ["status", "success", "icon", "checkmark"], [1, "feature-footer"], [1, "first-footer"], ["nbButton", "", "size", "small", 3, "click", 4, "ngIf", "ngIfElse"], [1, "second-footer"], [1, "third-footer"], [1, "fourth-footer"], ["noMembership", ""], ["nbButton", "", "size", "small", 3, "click"], ["nbButton", "", "size", "small"]],
        template: function MembershipPlansComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Feature");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Quarterly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Half Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "DURATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "1 Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "3 Months");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "6 Months");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "12 Months");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "CLASS MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "STUDENT MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "ATTENDANCE MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "STUDY MATERIAL STORAGE & SHARING");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "HOMEWORK MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "STUDENT PERFORMANCE TRACKER");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "FEE MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "EMPLOYEE MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "SALARY MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "LEAVE MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "REAL TIME BUSINESS REPORTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "REAL TIME NOTIFICATIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "REMINDER AND ALERTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "LECTURE MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "EXAM MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "ONLINE EXAM MANAGEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "nb-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "STORAGE");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "2GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "2GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "2GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "2GB");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](232, "td", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](234, MembershipPlansComponent_button_234_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](236, MembershipPlansComponent_button_236_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "td", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](238, MembershipPlansComponent_button_238_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "td", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](240, MembershipPlansComponent_button_240_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](242, MembershipPlansComponent_ng_template_242_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](243);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.getPrice("monthly"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.getPrice("quarterly"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.getPrice("half-yearly"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.getPrice("yearly"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](203);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMembershipPlanAvailable("monthly"))("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMembershipPlanAvailable("quarterly"))("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMembershipPlanAvailable("half-yearly"))("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMembershipPlanAvailable("yearly"))("ngIfElse", _r4);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"]],
        styles: [".table-header[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n\n.first-heading[_ngcontent-%COMP%], .second-heading[_ngcontent-%COMP%], .third-heading[_ngcontent-%COMP%], .fourth-heading[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.first-title[_ngcontent-%COMP%], .second-title[_ngcontent-%COMP%], .third-title[_ngcontent-%COMP%], .fourth-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.first-footer[_ngcontent-%COMP%], .second-footer[_ngcontent-%COMP%], .third-footer[_ngcontent-%COMP%], .fourth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
      });
      return MembershipPlansComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/membership-plans/membership-plans.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/institute/membership-plans/membership-plans.module.ts ***!
    \***********************************************************************/

  /*! exports provided: MembershipPlansModule */

  /***/
  function srcAppInstituteMembershipPlansMembershipPlansModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembershipPlansModule", function () {
      return MembershipPlansModule;
    });
    /* harmony import */


    var _membership_plans_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./membership-plans.component */
    "./src/app/institute/membership-plans/membership-plans.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _membership_plans_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./membership-plans-routing.module */
    "./src/app/institute/membership-plans/membership-plans-routing.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var MembershipPlansModule =
    /*@__PURE__*/
    function () {
      var MembershipPlansModule = function MembershipPlansModule() {
        _classCallCheck(this, MembershipPlansModule);
      };

      MembershipPlansModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MembershipPlansModule
      });
      MembershipPlansModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MembershipPlansModule_Factory(t) {
          return new (t || MembershipPlansModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _membership_plans_routing_module__WEBPACK_IMPORTED_MODULE_3__["MembershipPlansRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]]
      });
      return MembershipPlansModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MembershipPlansModule, {
        declarations: [_membership_plans_component__WEBPACK_IMPORTED_MODULE_0__["MembershipPlansComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _membership_plans_routing_module__WEBPACK_IMPORTED_MODULE_3__["MembershipPlansRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]
      });
    })();
    /***/

  }
}]);