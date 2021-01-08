(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49], {
    /***/
    "./src/app/authentication/register/register-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/authentication/register/register-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: RegisterRoutingModule */

    /***/
    function srcAppAuthenticationRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function () {
        return RegisterRoutingModule;
      });
      /* harmony import */


      var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.component */
      "./src/app/authentication/register/register.component.ts");
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
        component: _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"],
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

      var RegisterRoutingModule = /*@__PURE__*/function () {
        var RegisterRoutingModule = function RegisterRoutingModule() {
          _classCallCheck(this, RegisterRoutingModule);
        };

        RegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: RegisterRoutingModule
        });
        RegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function RegisterRoutingModule_Factory(t) {
            return new (t || RegisterRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return RegisterRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/authentication/register/register.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/authentication/register/register.component.ts ***!
      \***************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAuthenticationRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      "./src/app/authentication/register/terms-and-conditions/terms-and-conditions.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../auth/auth-service/auth.service */
      "./src/app/authentication/auth/auth-service/auth.service.ts");
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/role.service */
      "./src/app/services/role.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/shared-services/encrypt.service */
      "./src/app/services/shared-services/encrypt.service.ts");
      /* harmony import */


      var _services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/shared-services/user.service */
      "./src/app/services/shared-services/user.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RegisterComponent_ng_container_12_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Full name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_12_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Full name should contains minimum 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_12_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_ng_container_12_p_2_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.get("name").errors == null ? null : ctx_r0.form.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.form.get("name").errors == null ? null : ctx_r0.form.get("name").errors.minlength);
        }
      }

      function RegisterComponent_ng_container_17_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_17_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_17_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email Already registered, Please try another Email! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_17_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_ng_container_17_p_2_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_ng_container_17_p_3_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").errors == null ? null : ctx_r1.form.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("email").errors == null ? null : ctx_r1.form.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userExist);
        }
      }

      function RegisterComponent_ng_container_22_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_22_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone should contain 10 digits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_22_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_ng_container_22_p_2_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.form.get("phone").errors == null ? null : ctx_r2.form.get("phone").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.form.get("phone").errors == null ? null : ctx_r2.form.get("phone").errors.pattern) || (ctx_r2.form.get("phone").errors == null ? null : ctx_r2.form.get("phone").errors.minlength));
        }
      }

      function RegisterComponent_ng_container_27_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_27_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should contain minimum 7 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_27_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_ng_container_27_p_2_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form.get("password").errors == null ? null : ctx_r3.form.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form.get("password").errors == null ? null : ctx_r3.form.get("password").errors.minlength);
        }
      }

      function RegisterComponent_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password confirmation is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_32_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password does not match the confirm password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_32_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_ng_container_32_p_2_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.form.get("confirmPassword").errors == null ? null : ctx_r4.form.get("confirmPassword").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.form.get("password").value != ctx_r4.form.get("confirmPassword").value && !(ctx_r4.form.get("confirmPassword").errors == null ? null : ctx_r4.form.get("confirmPassword").errors.required));
        }
      }

      function RegisterComponent_nb_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, role_r18));
        }
      }

      function RegisterComponent_ng_container_38_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User Role is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_ng_container_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_38_p_1_Template, 2, 0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.form.get("userRole").errors == null ? null : ctx_r6.form.get("userRole").errors.required);
        }
      }

      var RegisterComponent = /*@__PURE__*/function () {
        var RegisterComponent = /*#__PURE__*/function () {
          function RegisterComponent(authService, roleService, toastrService, router, route, encryptService, userService, dialogService) {
            _classCallCheck(this, RegisterComponent);

            this.authService = authService;
            this.roleService = roleService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
            this.encryptService = encryptService;
            this.userService = userService;
            this.dialogService = dialogService;
          }

          _createClass(RegisterComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;
              this.roles = this.roleService.getUserRoles();
              this.userExist = false;
              this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]
                }),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
                }),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]
                }),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]
                }),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]
                }),
                userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.roles[0], {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                })
              }, {
                validators: this.passwordValidator.bind(this)
              });
              this.loading = false;
            }
          }, {
            key: "passwordValidator",
            value: function passwordValidator(group) {
              if (group.value.password !== group.value.confirmPassword) {
                return {
                  invalidConfirmPassword: true
                };
              }

              return null;
            }
          }, {
            key: "openTermsAndConditions",
            value: function openTermsAndConditions() {
              var _this = this;

              this.dialogService.open(_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__["TermsAndConditionsComponent"], {
                closeOnEsc: true,
                hasScroll: false
              }).onClose.subscribe(function (status) {
                _this.termsConditions = status;
              });
            }
          }, {
            key: "checkUser",
            value: function checkUser() {
              var _this2 = this;

              if (this.form.get('email').valid) {
                this.userService.checkUser(this.form.value.email).subscribe(function (res) {
                  _this2.userExist = res.exist;
                }, function (error) {});
              }
            }
          }, {
            key: "acceptTermsConditions",
            value: function acceptTermsConditions(e) {
              this.termsConditions = e;
            }
          }, {
            key: "register",
            value: function register() {
              var _this3 = this;

              this.form.markAllAsTouched();

              if (!this.form.valid) {
                this.showToastr('top-right', 'danger', 'All Fields are required');
                return;
              } else if (this.userExist) {
                this.showToastr('top-right', 'danger', 'This user Already exist, Please try another Email');
                return;
              } else if (!this.termsConditions) {
                this.showToastr('top-right', 'warning', 'Accept Terms & Conditions');
                this.openTermsAndConditions();
                return;
              }

              this.loading = true;
              var data = {
                name: this.form.value.name.toLowerCase(),
                userRole: this.form.value.userRole,
                email: this.form.value.email,
                phone: this.form.value.phone,
                password: this.encryptService.encrypt(this.form.value.password, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encKey)
              };
              var authObs;
              authObs = this.authService.createUser(data);
              authObs.subscribe(function (res) {
                _this3.loading = false;

                _this3.showToastr('top-right', 'success', 'New User Created Successfully');

                _this3.router.navigate(['/login'], {
                  relativeTo: _this3.route
                });
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

          return RegisterComponent;
        }();

        RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
          return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_8__["EncryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogService"]));
        };

        RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: RegisterComponent,
          selectors: [["ngx-register"]],
          decls: 54,
          vars: 15,
          consts: [[1, "main-container"], [1, "row"], [1, "col-md-6", "col-sm-10", "col-12", "mx-auto"], ["id", "title", 1, "title"], [3, "formGroup", "ngSubmit"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-name", "name", "fullName", "placeholder", "Full name", "formControlName", "name", "minlength", "5", "maxlength", "30", "autofocus", "", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-email", 1, "label"], ["type", "email", "nbInput", "", "id", "input-email", "name", "email", "formControlName", "email", "placeholder", "Email address", "fullWidth", "", 3, "status", "input"], ["for", "input-phone", 1, "label"], ["type", "number", "nbInput", "", "id", "input-phone", "name", "phone", "formControlName", "phone", "placeholder", "phone", "minlength", "10", "maxlength", "10", "min", "0", "fullWidth", "", 3, "status"], ["for", "input-password", 1, "label"], ["type", "password", "nbInput", "", "id", "input-password", "name", "password", "formControlName", "password", "placeholder", "Password", "minlength", "7", "maxlength", "20", "fullWidth", "", 3, "status"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "minlength", "5", "maxlength", "30", "fullWidth", "", 3, "status"], ["for", "input-role", 1, "label"], ["type", "text", "selected", "institute", "id", "input-role", "name", "userRole", "placeholder", "Select User Role", "formControlName", "userRole", "fullWidth", "", 3, "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control-group", "accept-group"], ["name", "terms", 3, "checked", "checkedChange"], [1, "pointer", 3, "click"], ["nbButton", "", "size", "medium", "fullWidth", "", "status", "primary"], ["aria-label", "Sign in", 1, "another-action", "text-right"], ["routerLink", "/login", 1, "text-link"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"]],
          template: function RegisterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
                return ctx.register();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Full name:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_ng_container_12_Template, 3, 2, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email address:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_16_listener() {
                return ctx.checkUser();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_ng_container_17_Template, 4, 3, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Phone:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterComponent_ng_container_22_Template, 3, 2, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RegisterComponent_ng_container_27_Template, 3, 2, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Repeat password:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_ng_container_32_Template, 3, 2, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "User Role:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nb-select", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_nb_option_37_Template, 3, 4, "nb-option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_ng_container_38_Template, 2, 1, "ng-container", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nb-checkbox", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkedChange", function RegisterComponent_Template_nb_checkbox_checkedChange_41_listener($event) {
                return ctx.acceptTermsConditions($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Agree to ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_43_listener() {
                return ctx.openTermsAndConditions();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Terms & Conditions");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Register ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "section", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Already have an account? ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Log in");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("name").touched ? ctx.form.get("name").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid && ctx.form.get("name").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("email").touched ? ctx.form.get("email").invalid || ctx.userExist ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.form.get("email").invalid || ctx.userExist) && ctx.form.get("email").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("phone").touched ? ctx.form.get("phone").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("phone").invalid && ctx.form.get("phone").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("password").touched ? ctx.form.get("password").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("password").invalid && ctx.form.get("password").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("confirmPassword").touched ? ctx.form.get("confirmPassword").invalid || ctx.form.get("password").value != ctx.form.get("confirmPassword").value ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("confirmPassword").invalid && ctx.form.get("confirmPassword").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.form.get("userRole").touched ? ctx.form.get("userRole").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.get("userRole").invalid && ctx.form.get("userRole").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.termsConditions);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]],
          styles: ["", ".main-container[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .main-container[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n}"]
        });
        return RegisterComponent;
      }();
      /***/

    },

    /***/
    "./src/app/authentication/register/register.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/authentication/register/register.module.ts ***!
      \************************************************************/

    /*! exports provided: RegisterModule */

    /***/
    function srcAppAuthenticationRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
        return RegisterModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.component */
      "./src/app/authentication/register/register.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/authentication/register/register-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../@theme/theme.module */
      "./src/app/@theme/theme.module.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      "./src/app/authentication/register/terms-and-conditions/terms-and-conditions.component.ts");

      var RegisterModule = /*@__PURE__*/function () {
        var RegisterModule = function RegisterModule() {
          _classCallCheck(this, RegisterModule);
        };

        RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: RegisterModule
        });
        RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function RegisterModule_Factory(t) {
            return new (t || RegisterModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]]
        });
        return RegisterModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterModule, {
          declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"], _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_8__["TermsAndConditionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/authentication/register/terms-and-conditions/terms-and-conditions.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/authentication/register/terms-and-conditions/terms-and-conditions.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TermsAndConditionsComponent */

    /***/
    function srcAppAuthenticationRegisterTermsAndConditionsTermsAndConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
        return TermsAndConditionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/terms-conditions/terms-conditions.component */
      "./src/app/shared/terms-conditions/terms-conditions.component.ts");

      var TermsAndConditionsComponent = /*@__PURE__*/function () {
        var TermsAndConditionsComponent = /*#__PURE__*/function () {
          function TermsAndConditionsComponent(ref) {
            _classCallCheck(this, TermsAndConditionsComponent);

            this.ref = ref;
          }

          _createClass(TermsAndConditionsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "close",
            value: function close() {
              this.ref.close(false);
            }
          }, {
            key: "agree",
            value: function agree() {
              this.ref.close(true);
            }
          }]);

          return TermsAndConditionsComponent;
        }();

        TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) {
          return new (t || TermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"]));
        };

        TermsAndConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TermsAndConditionsComponent,
          selectors: [["ngx-terms-and-conditions"]],
          decls: 10,
          vars: 0,
          consts: [[1, "terms-and-conditions-box"], [1, "row"], [1, "col-12"], ["type", "button", "nbButton", "", "size", "small", "status", "success", 1, "float-right", "ml-3", 3, "click"], ["type", "button", "nbButton", "", "size", "small", "status", "basic", 1, "float-right", "ml-3", 3, "click"]],
          template: function TermsAndConditionsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-terms-conditions");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-footer");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_button_click_6_listener() {
                return ctx.agree();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agree ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsAndConditionsComponent_Template_button_click_8_listener() {
                return ctx.close();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Disagree ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _shared_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"]],
          styles: [".terms-and-conditions-box[_ngcontent-%COMP%] {\n  width: 60vw;\n  height: 75vh;\n  overflow: auto;\n}\n\n@media only screen and (max-width: 1200px) {\n  .terms-and-conditions-box[_ngcontent-%COMP%] {\n    width: 65vw;\n    height: 80vh;\n  }\n}\n\n@media only screen and (max-width: 840px) {\n  .terms-and-conditions-box[_ngcontent-%COMP%] {\n    width: 70vw;\n    height: 85vh;\n  }\n}\n\n@media only screen and (max-width: 420px) {\n  .terms-and-conditions-box[_ngcontent-%COMP%] {\n    width: 90vw;\n    height: 90vh;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .terms-and-conditions-box[_ngcontent-%COMP%] {\n    width: 95vw;\n    height: 95vh;\n  }\n}"]
        });
        return TermsAndConditionsComponent;
      }();
      /***/

    }
  }]);
})();