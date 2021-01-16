(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81], {
    /***/
    "./src/app/authentication/reset-password/reset-password-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/authentication/reset-password/reset-password-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ResetPasswordRoutingModule */

    /***/
    function srcAppAuthenticationResetPasswordResetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function () {
        return ResetPasswordRoutingModule;
      });
      /* harmony import */


      var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password.component */
      "./src/app/authentication/reset-password/reset-password.component.ts");
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
        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_0__["ResetPasswordComponent"],
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

      var ResetPasswordRoutingModule = /*@__PURE__*/function () {
        var ResetPasswordRoutingModule = function ResetPasswordRoutingModule() {
          _classCallCheck(this, ResetPasswordRoutingModule);
        };

        ResetPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ResetPasswordRoutingModule
        });
        ResetPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ResetPasswordRoutingModule_Factory(t) {
            return new (t || ResetPasswordRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ResetPasswordRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/authentication/reset-password/reset-password.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function srcAppAuthenticationResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/shared-services/http.service */
      "./src/app/services/shared-services/http.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/shared-services/encrypt.service */
      "./src/app/services/shared-services/encrypt.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ResetPasswordComponent_ng_container_7_ng_container_8_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_7_ng_container_8_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password should contain minimum 7 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_7_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_7_ng_container_8_p_1_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_7_ng_container_8_p_2_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("password").errors == null ? null : ctx_r3.form.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("password").errors == null ? null : ctx_r3.form.get("password").errors.minlength);
        }
      }

      function ResetPasswordComponent_ng_container_7_ng_container_13_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password confirmation is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_7_ng_container_13_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match the confirm password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ResetPasswordComponent_ng_container_7_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetPasswordComponent_ng_container_7_ng_container_13_p_1_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetPasswordComponent_ng_container_7_ng_container_13_p_2_Template, 2, 0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("confirmPassword").errors == null ? null : ctx_r4.form.get("confirmPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("password").value != ctx_r4.form.get("confirmPassword").value && !(ctx_r4.form.get("confirmPassword").errors == null ? null : ctx_r4.form.get("confirmPassword").errors.required));
        }
      }

      function ResetPasswordComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please set a new password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_ng_container_7_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_ng_container_7_ng_container_8_Template, 3, 2, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Repeat password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetPasswordComponent_ng_container_7_ng_container_13_Template, 3, 2, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Change password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Back to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xA0|\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r0.form.get("password").touched ? ctx_r0.form.get("password").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("password").invalid && ctx_r0.form.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r0.form.get("confirmPassword").touched ? ctx_r0.form.get("confirmPassword").invalid || ctx_r0.form.get("password").value != ctx_r0.form.get("confirmPassword").value ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("confirmPassword").invalid && ctx_r0.form.get("confirmPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.submit);
        }
      }

      function ResetPasswordComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ResetPasswordComponent = /*@__PURE__*/function () {
        var ResetPasswordComponent = /*#__PURE__*/function () {
          function ResetPasswordComponent(httpService, toastrService, roure, encryptService, router, formBuilder) {
            _classCallCheck(this, ResetPasswordComponent);

            this.httpService = httpService;
            this.toastrService = toastrService;
            this.roure = roure;
            this.encryptService = encryptService;
            this.router = router;
            this.formBuilder = formBuilder;
          }

          _createClass(ResetPasswordComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.submit = false;
              this.form = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]
                }),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]
                })
              });
              this.roure.queryParams.subscribe(function (params) {
                if (params.key === undefined) {
                  _this.showToastr('top-right', 'danger', 'Invalid Key');

                  _this.router.navigate(['../page_not_found'], {
                    relativeTo: _this.roure
                  });
                } else {
                  _this.token = params.key;
                  var data = {
                    api: 'validateToken',
                    data: {
                      token: _this.token
                    }
                  };

                  _this.httpService.httpPost(data).subscribe(function (response) {
                    var valid = response.valid_token;

                    if (valid) {
                      _this.loading = false;
                    } else {
                      _this.showToastr('top-right', 'danger', 'Invalid Authentication Token');

                      _this.router.navigate(['../page_not_found'], {
                        relativeTo: _this.roure
                      });
                    }
                  }, function (error) {
                    _this.showToastr('top-right', 'danger', error);

                    _this.router.navigate(['../page_not_found'], {
                      relativeTo: _this.roure
                    });
                  });
                }
              });
            }
          }, {
            key: "reset",
            value: function reset() {
              var _this2 = this;

              this.form.markAllAsTouched();

              if (this.form.invalid) {
                this.showToastr('top-right', 'danger', 'Please Fill all Details Correctly');
                return;
              } else if (this.form.hasError('invalidPassword')) {
                this.showToastr('top-right', 'danger', 'Password & Forgot Password Does not Match');
                return;
              }

              this.submit = true;
              var resetPassword = {
                // user: this.user,
                password: this.encryptService.encrypt(this.form.value.password, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].encKey),
                token: this.token
              };
              var data = {
                api: 'resetPassword',
                data: resetPassword
              };
              this.httpService.httpPost(data).subscribe(function (res) {
                _this2.form.reset();

                _this2.showToastr('top-right', 'success', 'Password Changed Successfully');

                _this2.router.navigate(['/login'], {
                  relativeTo: _this2.roure
                });
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.submit = false;
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

          return ResetPasswordComponent;
        }();

        ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
          return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
        };

        ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ResetPasswordComponent,
          selectors: [["ngx-reset-password"]],
          decls: 10,
          vars: 2,
          consts: [[1, "main-container"], [1, "row"], [1, "col-md-6", "col-sm-10", "col-12", "mx-auto"], ["id", "title", 1, "title"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [1, "sub-title"], [3, "formGroup", "ngSubmit"], [1, "form-control-group"], ["for", "input-password", 1, "label"], ["type", "password", "nbInput", "", "id", "input-password", "name", "password", "formControlName", "password", "placeholder", "Password", "minlength", "7", "maxlength", "20", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "minlength", "5", "maxlength", "30", "fullWidth", "", 3, "status"], ["nbButton", "", "size", "medium", "status", "primary", "fullWidth", "", 3, "disabled"], [1, "sign-in-or-up", "text-right"], ["routerLink", "/login", 1, "text-link"], ["routerLink", "/register", 1, "text-link"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "pt-5", "mt-5", "pb-5", "mb-5", "text-center"]],
          template: function ResetPasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResetPasswordComponent_ng_container_7_Template, 26, 6, "ng-container", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_ng_template_8_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
          styles: ["", ".main-container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n}"]
        });
        return ResetPasswordComponent;
      }();
      /***/

    },

    /***/
    "./src/app/authentication/reset-password/reset-password.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/authentication/reset-password/reset-password.module.ts ***!
      \************************************************************************/

    /*! exports provided: ResetPasswordModule */

    /***/
    function srcAppAuthenticationResetPasswordResetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function () {
        return ResetPasswordModule;
      });
      /* harmony import */


      var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password.component */
      "./src/app/authentication/reset-password/reset-password.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      "./src/app/authentication/reset-password/reset-password-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

      var ResetPasswordModule = /*@__PURE__*/function () {
        var ResetPasswordModule = function ResetPasswordModule() {
          _classCallCheck(this, ResetPasswordModule);
        };

        ResetPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ResetPasswordModule
        });
        ResetPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ResetPasswordModule_Factory(t) {
            return new (t || ResetPasswordModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"]]]
        });
        return ResetPasswordModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordModule, {
          declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_0__["ResetPasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"]]
        });
      })();
      /***/

    }
  }]);
})();