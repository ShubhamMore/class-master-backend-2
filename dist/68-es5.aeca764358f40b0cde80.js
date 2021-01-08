(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68], {
    /***/
    "./src/app/authentication/forgot-password/forgot-password-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/authentication/forgot-password/forgot-password-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ForgotPasswordRoutingModule */

    /***/
    function srcAppAuthenticationForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function () {
        return ForgotPasswordRoutingModule;
      });
      /* harmony import */


      var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password.component */
      "./src/app/authentication/forgot-password/forgot-password.component.ts");
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
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"],
        canActivate: []
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

      var ForgotPasswordRoutingModule = /*@__PURE__*/function () {
        var ForgotPasswordRoutingModule = function ForgotPasswordRoutingModule() {
          _classCallCheck(this, ForgotPasswordRoutingModule);
        };

        ForgotPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ForgotPasswordRoutingModule
        });
        ForgotPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ForgotPasswordRoutingModule_Factory(t) {
            return new (t || ForgotPasswordRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ForgotPasswordRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPasswordRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/authentication/forgot-password/forgot-password.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function srcAppAuthenticationForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
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


      var _services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/shared-services/http.service */
      "./src/app/services/shared-services/http.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ForgotPasswordComponent_ng_container_14_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_14_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotPasswordComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_ng_container_14_p_1_Template, 2, 0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_ng_container_14_p_2_Template, 2, 0, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors == null ? null : ctx_r0.form.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("email").errors == null ? null : ctx_r0.form.get("email").errors.email);
        }
      }

      var ForgotPasswordComponent = /*@__PURE__*/function () {
        var ForgotPasswordComponent = /*#__PURE__*/function () {
          function ForgotPasswordComponent(httpService, toastrService, router) {
            _classCallCheck(this, ForgotPasswordComponent);

            this.httpService = httpService;
            this.toastrService = toastrService;
            this.router = router;
          }

          _createClass(ForgotPasswordComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;
              this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                })
              });
              this.loading = false;
            }
          }, {
            key: "forgotPassword",
            value: function forgotPassword() {
              var _this = this;

              this.form.markAllAsTouched();

              if (this.form.invalid) {
                this.showToastr('top-right', 'danger', 'Enter Valid Email Address');
                return;
              }

              this.loading = true;
              var data = {
                api: 'forgotPassword',
                data: {
                  email: this.form.value.email
                }
              };
              this.httpService.httpPost(data).subscribe(function (res) {
                _this.form.reset();

                _this.showToastr('top-right', 'success', 'Reset Password Link Send to your Email Successfully');

                _this.loading = false;
              }, function (error) {
                _this.showToastr('top-right', 'danger', error);

                _this.loading = false;
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

          return ForgotPasswordComponent;
        }();

        ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
          return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
        };

        ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ForgotPasswordComponent,
          selectors: [["ngx-forgot-password"]],
          decls: 27,
          vars: 3,
          consts: [[1, "main-container"], [1, "row"], [1, "col-md-6", "col-sm-10", "col-12", "mx-auto"], ["id", "title", 1, "title"], [1, "sub-title"], [3, "formGroup", "ngSubmit"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "type", "email", "id", "input-email", "name", "email", "placeholder", "Email address", "formControlName", "email", "autofocus", "", "fullWidth", "", 3, "status"], [4, "ngIf"], ["nbButton", "", "size", "medium", "fullWidth", "", "status", "primary"], [1, "sign-in-or-up", "text-right"], ["routerLink", "/login", 1, "text-link"], ["routerLink", "/register", 1, "text-link"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
          template: function ForgotPasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forgot Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Enter your email address and we\u2019ll send a link to reset your password ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_9_listener() {
                return ctx.forgotPassword();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your email address:");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ForgotPasswordComponent_ng_container_14_Template, 3, 2, "ng-container", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Request password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Back to ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log In");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0|\xA0 ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Register");

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
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx.form.get("email").touched ? ctx.form.get("email").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
          styles: ["", ".main-container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n}"]
        });
        return ForgotPasswordComponent;
      }();
      /***/

    },

    /***/
    "./src/app/authentication/forgot-password/forgot-password.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/authentication/forgot-password/forgot-password.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ForgotPasswordModule */

    /***/
    function srcAppAuthenticationForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function () {
        return ForgotPasswordModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "./src/app/authentication/forgot-password/forgot-password-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.component */
      "./src/app/authentication/forgot-password/forgot-password.component.ts");

      var ForgotPasswordModule = /*@__PURE__*/function () {
        var ForgotPasswordModule = function ForgotPasswordModule() {
          _classCallCheck(this, ForgotPasswordModule);
        };

        ForgotPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ForgotPasswordModule
        });
        ForgotPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ForgotPasswordModule_Factory(t) {
            return new (t || ForgotPasswordModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"]]]
        });
        return ForgotPasswordModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordModule, {
          declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"]]
        });
      })();
      /***/

    }
  }]);
})();