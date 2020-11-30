function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136], {
  /***/
  "./src/app/employee/profile/profile-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/employee/profile/profile-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppEmployeeProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/employee/profile/profile.component.ts");
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
      component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
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

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileRoutingModule, [{
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
  "./src/app/employee/profile/profile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/employee/profile/profile.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppEmployeeProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/shared-services/user.service */
    "./src/app/services/shared-services/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/shared-services/encrypt.service */
    "./src/app/services/shared-services/encrypt.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileComponent_h3_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.profile.name), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx_r0.profile.imsMasterId));
      }
    }

    function ProfileComponent_small_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r1.profile.email));
      }
    }

    function ProfileComponent_ng_container_18_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User Name is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_18_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User Name should contain minimum 5 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_18_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_18_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.profileForm.get("name").errors == null ? null : ctx_r2.profileForm.get("name").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.profileForm.get("name").errors == null ? null : ctx_r2.profileForm.get("name").errors.minlength);
      }
    }

    function ProfileComponent_ng_container_24_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User phone is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_24_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User phone should be 10 digits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_24_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_24_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.minlength) || (ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.maxlength) || (ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.pattern) || (ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.min) || (ctx_r3.profileForm.get("phone").errors == null ? null : ctx_r3.profileForm.get("phone").errors.max));
      }
    }

    function ProfileComponent_ng_container_30_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Birth Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_30_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.profileForm.get("birthDate").errors == null ? null : ctx_r4.profileForm.get("birthDate").errors.required);
      }
    }

    function ProfileComponent_ng_container_36_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User address is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_36_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " User address should be 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_36_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_36_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.profileForm.get("address").errors == null ? null : ctx_r5.profileForm.get("address").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.profileForm.get("address").errors == null ? null : ctx_r5.profileForm.get("address").errors.minlength);
      }
    }

    function ProfileComponent_ng_container_42_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Qualification is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_42_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.profileForm.get("qualification").errors == null ? null : ctx_r6.profileForm.get("qualification").errors.required);
      }
    }

    function ProfileComponent_ng_container_62_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Old Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_62_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Old Password should contain minimum 7 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_62_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_62_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.changePasswordForm.get("oldPassword").errors == null ? null : ctx_r7.changePasswordForm.get("oldPassword").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.changePasswordForm.get("oldPassword").errors == null ? null : ctx_r7.changePasswordForm.get("oldPassword").errors.minlength);
      }
    }

    function ProfileComponent_ng_container_68_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_68_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password should contain minimum 7 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_68_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_68_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.changePasswordForm.get("password").errors == null ? null : ctx_r8.changePasswordForm.get("password").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.changePasswordForm.get("password").errors == null ? null : ctx_r8.changePasswordForm.get("password").errors.minlength);
      }
    }

    function ProfileComponent_ng_container_74_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password confirmation is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_74_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password does not match the confirm password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_ng_container_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileComponent_ng_container_74_p_1_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_ng_container_74_p_2_Template, 2, 0, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.changePasswordForm.get("confirmPassword").errors == null ? null : ctx_r9.changePasswordForm.get("confirmPassword").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.changePasswordForm.get("password").value != ctx_r9.changePasswordForm.get("confirmPassword").value && !ctx_r9.changePasswordForm.hasError("invalidConfirmPassword"));
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(userService, toastrService, authService, encryptService) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this.toastrService = toastrService;
        this.authService = authService;
        this.encryptService = encryptService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]
            }),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9999999999)]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]
            }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: []
            }),
            qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: []
            })
          });
          this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]
            })
          }, {
            validators: this.passwordValidator.bind(this)
          });
          this.getProfile();
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
        key: "getProfile",
        value: function getProfile() {
          var _this = this;

          this.userService.getProfile().subscribe(function (res) {
            _this.profile = res;

            _this.profileForm.patchValue({
              name: _this.profile.name,
              phone: _this.profile.phone,
              address: _this.profile.address,
              birthDate: _this.profile.birthDate,
              qualification: _this.profile.qualification
            });

            _this.loading = false;
          }, function (error) {
            _this.loading = false;
          });
        }
      }, {
        key: "saveProfile",
        value: function saveProfile() {
          var _this2 = this;

          this.profileForm.markAllAsTouched();

          if (this.profileForm.invalid) {
            this.showToastr('top-right', 'danger', 'Fill Profile Details Correctly');
            return;
          }

          this.loading = true;
          var profile = this.profileForm.value;
          this.userService.saveProfile(profile).subscribe(function (res) {
            _this2.showToastr('top-right', 'success', 'Profile updated Successfully!');

            _this2.loading = false;
          }, function (error) {
            _this2.showToastr('top-right', 'danger', error);

            _this2.loading = false;
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this3 = this;

          this.changePasswordForm.markAllAsTouched();

          if (this.changePasswordForm.invalid) {
            this.showToastr('top-right', 'danger', 'Fill change Password Data Correctly');
            return;
          } else if (this.changePasswordForm.hasError('invalidPassword')) {
            this.showToastr('top-right', 'danger', 'New Password and Confirm Password Does Noy Match');
            return;
          }

          this.loading = true;
          var password = {
            email: this.authService.getUserData().email,
            password: this.encryptService.encrypt(this.changePasswordForm.value.oldPassword, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].encKey),
            newPassword: this.encryptService.encrypt(this.changePasswordForm.value.password, _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].encKey)
          };
          this.userService.changePassword(password).subscribe(function (res) {
            _this3.changePasswordForm.reset();

            _this3.showToastr('top-right', 'success', 'Password Changed Successfully!');

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

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["ngx-profile"]],
      decls: 80,
      vars: 20,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-12"], ["id", "title", 1, "title"], ["class", "float-right", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "sub-title"], [1, "col-md-4"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-name", "name", "name", "formControlName", "name", "placeholder", "User Name", "minlength", "5", "maxlength", "20", "fullWidth", "", 3, "status"], ["for", "input-phone", 1, "label"], ["type", "text", "pattern", "\\d*", "nbInput", "", "id", "input-phone", "name", "phone", "formControlName", "phone", "placeholder", "User phone", "minlength", "10", "maxlength", "10", "min", "1000000000", "max", "9999999999", "fullWidth", "", 3, "status"], ["for", "input-birth-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-birth-date", "name", "birthDate", "formControlName", "birthDate", "placeholder", "Birth Date (Optional)", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-address", 1, "label"], ["type", "text", "nbInput", "", "id", "input-address", "name", "address", "formControlName", "address", "placeholder", "User Address", "rows", "2", "minlength", "10", "maxlength", "150", "fullWidth", "", 3, "status"], ["for", "input-qualification", 1, "label"], ["type", "text", "nbInput", "", "id", "input-qualification", "name", "qualification", "formControlName", "qualification", "placeholder", "Qualification (Optional)", "rows", "2", "fullWidth", "", 3, "status"], [1, "col-12", "text-right"], ["type", "submit", "nbButton", "", "size", "small", "status", "primary"], ["for", "input-old-password", 1, "label"], ["type", "password", "nbInput", "", "id", "input-old-password", "name", "oldPassword", "formControlName", "oldPassword", "placeholder", "Old Password", "minlength", "7", "maxlength", "20", "fullWidth", "", 3, "status"], ["for", "input-password", 1, "label"], ["type", "password", "nbInput", "", "id", "input-password", "name", "password", "formControlName", "password", "placeholder", "Password", "minlength", "7", "maxlength", "20", "fullWidth", "", 3, "status"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "minlength", "5", "maxlength", "30", "fullWidth", "", 3, "status"], [1, "col-md-12", "text-right"], [1, "float-right"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileComponent_h3_2_Template, 6, 6, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " User Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProfileComponent_small_8_Template, 4, 3, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_9_listener() {
            return ctx.saveProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Personal Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "User Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ProfileComponent_ng_container_18_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "User phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProfileComponent_ng_container_24_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Birth Date (Optional):");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ProfileComponent_ng_container_30_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "User Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ProfileComponent_ng_container_36_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Qualification (Optional):");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "textarea", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ProfileComponent_ng_container_42_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Save Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Change password");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Please set a new password");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_55_listener() {
            return ctx.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Old Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, ProfileComponent_ng_container_62_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ProfileComponent_ng_container_68_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Repeat password:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, ProfileComponent_ng_container_74_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Change password");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.profileForm.get("name").touched ? ctx.profileForm.get("name").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.get("name").invalid && ctx.profileForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.profileForm.get("phone").touched ? ctx.profileForm.get("phone").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.get("phone").invalid && ctx.profileForm.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.profileForm.get("birthDate").touched ? ctx.profileForm.get("birthDate").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.get("birthDate").invalid && ctx.profileForm.get("birthDate").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.profileForm.get("address").touched ? ctx.profileForm.get("address").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.get("address").invalid && ctx.profileForm.get("address").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.profileForm.get("qualification").touched ? ctx.profileForm.get("qualification").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.profileForm.get("qualification").invalid && ctx.profileForm.get("qualification").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.changePasswordForm.get("oldPassword").touched ? ctx.changePasswordForm.get("oldPassword").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("oldPassword").invalid && ctx.changePasswordForm.get("oldPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.changePasswordForm.get("password").touched ? ctx.changePasswordForm.get("password").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("password").invalid && ctx.changePasswordForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx.changePasswordForm.get("confirmPassword").touched ? ctx.changePasswordForm.get("confirmPassword").invalid || ctx.changePasswordForm.get("password").value != ctx.changePasswordForm.get("confirmPassword").value ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmPassword").invalid && ctx.changePasswordForm.get("confirmPassword").touched);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'ngx-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbToastrService"]
        }, {
          type: _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_6__["EncryptService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/profile/profile.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/employee/profile/profile.module.ts ***!
    \****************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppEmployeeProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/employee/profile/profile.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/employee/profile/profile-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);