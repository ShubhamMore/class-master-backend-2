(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[215], {
    /***/
    "./src/app/institute/transaction/view-transaction/view-transaction-routing.module.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/institute/transaction/view-transaction/view-transaction-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ViewTransactionRoutingModule */

    /***/
    function srcAppInstituteTransactionViewTransactionViewTransactionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewTransactionRoutingModule", function () {
        return ViewTransactionRoutingModule;
      });
      /* harmony import */


      var _view_transaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-transaction.component */
      "./src/app/institute/transaction/view-transaction/view-transaction.component.ts");
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
        component: _view_transaction_component__WEBPACK_IMPORTED_MODULE_0__["ViewTransactionComponent"],
        canActivate: []
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

      var ViewTransactionRoutingModule = /*@__PURE__*/function () {
        var ViewTransactionRoutingModule = function ViewTransactionRoutingModule() {
          _classCallCheck(this, ViewTransactionRoutingModule);
        };

        ViewTransactionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ViewTransactionRoutingModule
        });
        ViewTransactionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ViewTransactionRoutingModule_Factory(t) {
            return new (t || ViewTransactionRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ViewTransactionRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewTransactionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/transaction/view-transaction/view-transaction.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/institute/transaction/view-transaction/view-transaction.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ViewTransactionComponent */

    /***/
    function srcAppInstituteTransactionViewTransactionViewTransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewTransactionComponent", function () {
        return ViewTransactionComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/transaction.service */
      "./src/app/services/transaction.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ViewTransactionComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Transaction Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "thead", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "GST 18%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "This is computer generated receipt and requires no signature.");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.address, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.transaction.userName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.transaction.order_id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.dateService.formatDate(ctx_r0.dateService.convertToDateString(ctx_r0.transaction.createdAt)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.transaction.packageType, "\xA0", ctx_r0.transaction.planType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.transaction.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.transaction.amount);
        }
      }

      function ViewTransactionComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ViewTransactionComponent = /*@__PURE__*/function () {
        var ViewTransactionComponent = /*#__PURE__*/function () {
          function ViewTransactionComponent(transactionService, router, route, dateService, toastrService) {
            _classCallCheck(this, ViewTransactionComponent);

            this.transactionService = transactionService;
            this.router = router;
            this.route = route;
            this.dateService = dateService;
            this.toastrService = toastrService;
          }

          _createClass(ViewTransactionComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.address = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].address;
              this.transactionService.getInstituteTransactionData().subscribe(function (transaction) {
                if (!transaction) {
                  _this.showToastr('top-right', 'danger', 'Transaction Not Available');

                  _this.back();
                }

                _this.transaction = transaction;
                _this.loading = false;
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
            key: "showToastr",
            value: function showToastr(position, status, message) {
              this.toastrService.show(status, message, {
                position: position,
                status: status
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {}
          }]);

          return ViewTransactionComponent;
        }();

        ViewTransactionComponent.ɵfac = function ViewTransactionComponent_Factory(t) {
          return new (t || ViewTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]));
        };

        ViewTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ViewTransactionComponent,
          selectors: [["ngx-view-transaction"]],
          decls: 10,
          vars: 2,
          consts: [["type", "button", "nbButton", "", "status", "warning", "size", "small", 1, "float-right", 3, "click"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "row", "m-5"], [1, "col-md-9", "col-11", "mx-auto"], [1, "row"], [1, "col-md-4", "col-sm-6", "co-10", "mx-auto"], [1, "text-center"], ["src", "./../../../../assets/brand/class-master.png", "alt", "Class Master", "width", "75%"], [1, "col-12"], [1, "text-center", "pt-2"], [1, "col-md-6", "col-10", "mx-auto"], [1, "col-10", "mx-auto"], [1, "col-md-8", "col-sm-10", "col-12", "mx-auto"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "pt-5", "pb-5", "text-center"]],
          template: function ViewTransactionComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewTransactionComponent_Template_button_click_2_listener() {
                return ctx.back();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Transaction");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewTransactionComponent_div_7_Template, 60, 8, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewTransactionComponent_ng_template_8_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
          styles: [""]
        });
        return ViewTransactionComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/transaction/view-transaction/view-transaction.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/institute/transaction/view-transaction/view-transaction.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ViewTransactionModule */

    /***/
    function srcAppInstituteTransactionViewTransactionViewTransactionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewTransactionModule", function () {
        return ViewTransactionModule;
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


      var _view_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-transaction-routing.module */
      "./src/app/institute/transaction/view-transaction/view-transaction-routing.module.ts");
      /* harmony import */


      var _view_transaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-transaction.component */
      "./src/app/institute/transaction/view-transaction/view-transaction.component.ts");

      var ViewTransactionModule = /*@__PURE__*/function () {
        var ViewTransactionModule = function ViewTransactionModule() {
          _classCallCheck(this, ViewTransactionModule);
        };

        ViewTransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ViewTransactionModule
        });
        ViewTransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ViewTransactionModule_Factory(t) {
            return new (t || ViewTransactionModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewTransactionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"]]]
        });
        return ViewTransactionModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewTransactionModule, {
          declarations: [_view_transaction_component__WEBPACK_IMPORTED_MODULE_4__["ViewTransactionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _view_transaction_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewTransactionRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"]]
        });
      })();
      /***/

    }
  }]);
})();