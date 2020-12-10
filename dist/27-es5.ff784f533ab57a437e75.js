function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
  /***/
  "./src/app/institute/branch/lead/add-lead/add-lead-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/institute/branch/lead/add-lead/add-lead-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AddLeadRoutingModule */

  /***/
  function srcAppInstituteBranchLeadAddLeadAddLeadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLeadRoutingModule", function () {
      return AddLeadRoutingModule;
    });
    /* harmony import */


    var _add_lead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./add-lead.component */
    "./src/app/institute/branch/lead/add-lead/add-lead.component.ts");
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
      component: _add_lead_component__WEBPACK_IMPORTED_MODULE_0__["AddLeadComponent"]
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

    var AddLeadRoutingModule =
    /*@__PURE__*/
    function () {
      var AddLeadRoutingModule = function AddLeadRoutingModule() {
        _classCallCheck(this, AddLeadRoutingModule);
      };

      AddLeadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AddLeadRoutingModule
      });
      AddLeadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AddLeadRoutingModule_Factory(t) {
          return new (t || AddLeadRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return AddLeadRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddLeadRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/lead/add-lead/add-lead.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/institute/branch/lead/add-lead/add-lead.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddLeadComponent */

  /***/
  function srcAppInstituteBranchLeadAddLeadAddLeadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLeadComponent", function () {
      return AddLeadComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_lead_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../services/lead.service */
    "./src/app/services/lead.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["stepper"];

    function AddLeadComponent_ng_container_18_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Lead Name is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_18_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Lead Name should contain minimum 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_18_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddLeadComponent_ng_container_18_p_2_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.leadForm.get("leadName").errors == null ? null : ctx_r1.leadForm.get("leadName").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.leadForm.get("leadName").errors == null ? null : ctx_r1.leadForm.get("leadName").errors.minlength);
      }
    }

    function AddLeadComponent_ng_container_24_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_24_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email should be the real one! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_24_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddLeadComponent_ng_container_24_p_2_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.leadForm.get("leadEmail").errors == null ? null : ctx_r2.leadForm.get("leadEmail").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.leadForm.get("leadEmail").errors == null ? null : ctx_r2.leadForm.get("leadEmail").errors.email);
      }
    }

    function AddLeadComponent_ng_container_30_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_30_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone should contain 10 digits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_30_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddLeadComponent_ng_container_30_p_2_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.leadForm.get("leadContact").errors == null ? null : ctx_r3.leadForm.get("leadContact").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r3.leadForm.get("leadContact").errors == null ? null : ctx_r3.leadForm.get("leadContact").errors.minlength) || (ctx_r3.leadForm.get("leadContact").errors == null ? null : ctx_r3.leadForm.get("leadContact").errors.maxlength) || (ctx_r3.leadForm.get("leadContact").errors == null ? null : ctx_r3.leadForm.get("leadContact").errors.min) || (ctx_r3.leadForm.get("leadContact").errors == null ? null : ctx_r3.leadForm.get("leadContact").errors.max));
      }
    }

    function AddLeadComponent_ng_container_41_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_41_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.leadForm.get("date").errors == null ? null : ctx_r4.leadForm.get("date").errors.required);
      }
    }

    function AddLeadComponent_ng_container_47_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Follow Up Date is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_47_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.leadForm.get("followUpDate").errors == null ? null : ctx_r5.leadForm.get("followUpDate").errors.required);
      }
    }

    function AddLeadComponent_nb_option_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r27._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r27.category);
      }
    }

    function AddLeadComponent_ng_container_56_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Category is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_56_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.leadForm.get("category").errors == null ? null : ctx_r7.leadForm.get("category").errors.required);
      }
    }

    function AddLeadComponent_nb_option_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", course_r29._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r29.basicDetails.courseName);
      }
    }

    function AddLeadComponent_ng_container_65_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_65_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.leadForm.get("course").errors == null ? null : ctx_r9.leadForm.get("course").errors.required);
      }
    }

    function AddLeadComponent_nb_option_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var source_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", source_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, source_r31));
      }
    }

    function AddLeadComponent_ng_container_74_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Source is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_74_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.leadForm.get("source").errors == null ? null : ctx_r11.leadForm.get("source").errors.required);
      }
    }

    function AddLeadComponent_nb_option_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var strength_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", strength_r33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, strength_r33));
      }
    }

    function AddLeadComponent_ng_container_83_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Strength is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_83_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.leadForm.get("strength").errors == null ? null : ctx_r13.leadForm.get("strength").errors.required);
      }
    }

    function AddLeadComponent_nb_option_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mode_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mode_r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, mode_r35));
      }
    }

    function AddLeadComponent_ng_container_92_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mode is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_92_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.leadForm.get("mode").errors == null ? null : ctx_r15.leadForm.get("mode").errors.required);
      }
    }

    function AddLeadComponent_nb_option_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var status_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, status_r37));
      }
    }

    function AddLeadComponent_ng_container_101_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_101_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.leadForm.get("status").errors == null ? null : ctx_r17.leadForm.get("status").errors.required);
      }
    }

    function AddLeadComponent_ng_container_107_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Comment is required! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AddLeadComponent_ng_container_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddLeadComponent_ng_container_107_p_1_Template, 2, 0, "p", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.leadForm.get("comment").errors == null ? null : ctx_r18.leadForm.get("comment").errors.required);
      }
    }

    var AddLeadComponent =
    /*@__PURE__*/
    function () {
      var AddLeadComponent =
      /*#__PURE__*/
      function () {
        function AddLeadComponent(branchService, toastrService, leadService, dateService, courseService, router, route) {
          _classCallCheck(this, AddLeadComponent);

          this.branchService = branchService;
          this.toastrService = toastrService;
          this.leadService = leadService;
          this.dateService = dateService;
          this.courseService = courseService;
          this.router = router;
          this.route = route; // route.queryParams.subscribe((param: Params) => {
          //   this.ngOnInit();
          // });
        }

        _createClass(AddLeadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.branchId = this.branchService.getBranchId();

            if (!this.branchId) {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
              return;
            }

            var mode;
            this.route.queryParams.subscribe(function (param) {
              mode = param.mode;
            });
            this.leadId = this.leadService.getLeadId();

            if (mode && mode !== 'edit') {
              this.showToastr('top-right', 'danger', 'Invalid Route');
              this.router.navigate(['../page-not-found'], {
                relativeTo: this.route
              });
              return;
            } else if (mode && !this.leadId) {
              this.showToastr('top-right', 'danger', 'Lead Not Found');
              this.router.navigate(['../page-not-found'], {
                relativeTo: this.route
              });
              return;
            }

            this.categories = [];
            this.courses = [];
            this.myCourses = [];
            this.modes = ['walk in', 'telephonic', 'email', 'digital'];
            this.strengths = ['hot', 'cold'];
            this.sources = ['referral', 'seminar', 'advertisement', 'digital media', 'classifieds', 'others'];
            this.statuses = ['open', 'lost', 'won'];
            this.getCategories();
            this.getCourses();
            this.leadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              leadName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              leadContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(9999999999)]
              }),
              leadEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]
              }),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              course: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: []
              }),
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              followUpDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              strength: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              source: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              }),
              comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
              })
            });

            if (mode && this.leadId) {
              this.leadService.getLeadForEditing(this.leadId).subscribe(function (res) {
                _this.lead = res;

                _this.leadForm.patchValue({
                  leadName: _this.lead.leadName,
                  leadEmail: _this.lead.leadEmail,
                  leadContact: _this.lead.leadContact,
                  category: _this.lead.category,
                  address: _this.lead.address,
                  date: _this.lead.date,
                  followUpDate: _this.lead.followUpDate,
                  status: _this.lead.status,
                  strength: _this.lead.strength,
                  mode: _this.lead.mode,
                  source: _this.lead.source,
                  comment: _this.lead.comment
                });

                _this.onSelectCategory(_this.lead.category);

                _this.leadForm.patchValue({
                  course: _this.lead.course
                });

                _this.loading = false;
              }, function (err) {
                _this.showToastr('top-right', 'danger', err);

                _this.back();
              });
            } else {
              this.loading = false;
            }
          }
        }, {
          key: "onSelectCategory",
          value: function onSelectCategory(category) {
            this.myCourses = this.courses.filter(function (course) {
              return course.basicDetails.category === category;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this2 = this;

            this.branchService.getBranchData().subscribe(function (branch) {
              if (branch) {
                _this2.categories = branch.categories;
              }
            });

            if (!this.categories) {
              this.branchService.getBranch(this.branchId).subscribe(function (branch) {
                _this2.branchService.setBranchData(branch);

                _this2.categories = branch.categories;
                _this2.loading = false;
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
          }
        }, {
          key: "getCourses",
          value: function getCourses() {
            var _this3 = this;

            this.courseService.getCoursesData().subscribe(function (courses) {
              _this3.courses = courses;
            });
          }
        }, {
          key: "previousStep",
          value: function previousStep() {
            this.stepper.previous();
          }
        }, {
          key: "submitLeadForm",
          value: function submitLeadForm() {
            this.leadForm.markAllAsTouched();

            if (this.leadForm.invalid) {
              this.showToastr('top-right', 'danger', 'Fill all Details Correctly');
              return;
            }

            this.stepper.next();
          }
        }, {
          key: "saveLead",
          value: function saveLead() {
            var _this4 = this;

            this.loading = true;
            this.leadForm.markAllAsTouched();

            if (this.leadForm.invalid) {
              this.showToastr('top-right', 'danger', 'Fill all Details Correctly');
              return;
            }

            var lead = this.leadForm.value;
            lead.branch = this.branchId;

            if (!this.lead) {
              this.leadService.saveLead(lead).subscribe(function (res) {
                _this4.showToastr('top-right', 'success', 'New Lead Added Successfully!');

                _this4.router.navigate(['../'], {
                  relativeTo: _this4.route
                });
              }, function (error) {
                _this4.showToastr('top-right', 'danger', error);

                _this4.loading = false;
              });
            } else {
              lead._id = this.leadId;
              this.leadService.editLead(lead).subscribe(function (res) {
                _this4.showToastr('top-right', 'success', 'Lead Updated Successfully!');

                _this4.router.navigate(['../'], {
                  relativeTo: _this4.route
                });
              }, function (error) {
                _this4.showToastr('top-right', 'danger', error);

                _this4.loading = false;
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            var leadType = this.leadService.getLeadType();
            this.router.navigate(['../'], {
              relativeTo: this.route,
              queryParams: {
                type: leadType
              }
            });
          }
        }, {
          key: "getCategory",
          value: function getCategory(categoryId) {
            var category = this.categories.find(function (curCategory) {
              return curCategory._id === categoryId;
            });

            if (category) {
              return category.category;
            }

            return '--';
          }
        }, {
          key: "getCourse",
          value: function getCourse(courseId) {
            var course = this.courses.find(function (curCourse) {
              return curCourse._id === courseId;
            });

            if (course) {
              return course.basicDetails.courseName;
            }

            return '--';
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
            this.leadService.deleteLeadId();
          }
        }]);

        return AddLeadComponent;
      }();

      AddLeadComponent.ɵfac = function AddLeadComponent_Factory(t) {
        return new (t || AddLeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_4__["LeadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
      };

      AddLeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddLeadComponent,
        selectors: [["ngx-add-lead"]],
        viewQuery: function AddLeadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 200,
        vars: 59,
        consts: [["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-4", "col-sm-6"], [1, "form-control-group"], ["for", "input-lead-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-lead-name", "name", "leadName", "formControlName", "leadName", "placeholder", "Lead Name", "minlength", "3", "maxlength", "30", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-email", 1, "label"], ["type", "email", "nbInput", "", "id", "input-email", "name", "email", "formControlName", "leadEmail", "placeholder", "Email address", "fullWidth", "", 3, "status"], ["for", "input-phone", 1, "label"], ["type", "number", "nbInput", "", "id", "input-phone", "name", "phone", "formControlName", "leadContact", "placeholder", "phone", "minlength", "10", "maxlength", "10", "min", "1000000000", "max", "9999999999", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-address", 1, "label"], ["type", "text", "nbInput", "", "id", "input-address", "name", "address", "formControlName", "address", "placeholder", "address (Optional)", "fullWidth", ""], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "date", "fullWidth", "", 3, "min", "status"], ["for", "input-follow-up-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-follow-up-date", "name", "followUpDate", "formControlName", "followUpDate", "placeholder", "followUpDate", "fullWidth", "", 3, "min", "status"], ["for", "input-category", 1, "label"], ["id", "input-category", "name", "category", "formControlName", "category", "placeholder", "Select Category", "fullWidth", "", 3, "status", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-course", 1, "label"], ["id", "input-course", "name", "course", "formControlName", "course", "placeholder", "Select Course", "fullWidth", "", 3, "status"], ["for", "input-source", 1, "label"], ["id", "input-source", "name", "source", "formControlName", "source", "placeholder", "Select Source", "fullWidth", "", 3, "status"], ["for", "input-strength", 1, "label"], ["id", "input-strength", "name", "strength", "formControlName", "strength", "placeholder", "Select Strength", "fullWidth", "", 3, "status"], ["for", "input-mode", 1, "label"], ["id", "input-mode", "name", "mode", "formControlName", "mode", "placeholder", "Select Mode", "fullWidth", "", 3, "status"], ["for", "input-status", 1, "label"], ["id", "input-status", "name", "status", "formControlName", "status", "placeholder", "Select Status", "fullWidth", "", 3, "status"], ["for", "input-comment", 1, "label"], ["type", "text", "nbInput", "", "id", "input-comment", "name", "comment", "formControlName", "comment", "placeholder", "Comment", "maxlength", "50", "fullWidth", "", 3, "status"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"]],
        template: function AddLeadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLeadComponent_Template_button_click_2_listener() {
              return ctx.back();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddLeadComponent_Template_form_submit_11_listener() {
              return ctx.submitLeadForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddLeadComponent_ng_container_18_Template, 3, 2, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Email address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddLeadComponent_ng_container_24_Template, 3, 2, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Phone:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddLeadComponent_ng_container_30_Template, 3, 2, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "textarea", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddLeadComponent_ng_container_41_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Follow Up Date:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddLeadComponent_ng_container_47_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Category:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nb-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedChange", function AddLeadComponent_Template_nb_select_selectedChange_52_listener($event) {
              return ctx.onSelectCategory($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Select Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddLeadComponent_nb_option_55_Template, 2, 2, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddLeadComponent_ng_container_56_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Course:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nb-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Select Course");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, AddLeadComponent_nb_option_64_Template, 2, 2, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AddLeadComponent_ng_container_65_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Source:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nb-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Select Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AddLeadComponent_nb_option_73_Template, 3, 4, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, AddLeadComponent_ng_container_74_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Strength:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "nb-select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Select Strength");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, AddLeadComponent_nb_option_82_Template, 3, 4, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, AddLeadComponent_ng_container_83_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Mode:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "nb-select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Select Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, AddLeadComponent_nb_option_91_Template, 3, 4, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, AddLeadComponent_ng_container_92_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "nb-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "nb-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Select Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, AddLeadComponent_nb_option_100_Template, 3, 4, "nb-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, AddLeadComponent_ng_container_101_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Comment:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, AddLeadComponent_ng_container_107_Template, 2, 1, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "nb-icon", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "nb-step", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "table", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Follow Up Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Course");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Source");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](165, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](171, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Strength");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](177, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](183, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "nb-icon", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "prev");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "button", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLeadComponent_Template_button_click_197_listener() {
              return ctx.saveLead();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx.lead ? "Add New Lead" : "Edit Lead " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 49, ctx.lead.leadName), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.leadForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.leadForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("leadName").touched ? ctx.leadForm.get("leadName").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("leadName").invalid && ctx.leadForm.get("leadName").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("leadEmail").touched ? ctx.leadForm.get("leadEmail").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("leadEmail").invalid && ctx.leadForm.get("leadEmail").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("leadContact").touched ? ctx.leadForm.get("leadContact").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("leadContact").invalid && ctx.leadForm.get("leadContact").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.dateService.getDateString())("status", ctx.leadForm.get("date").touched ? ctx.leadForm.get("date").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("date").invalid && ctx.leadForm.get("date").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.dateService.getDateString())("status", ctx.leadForm.get("followUpDate").touched ? ctx.leadForm.get("followUpDate").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("followUpDate").invalid && ctx.leadForm.get("followUpDate").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("category").touched ? ctx.leadForm.get("category").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("category").invalid && ctx.leadForm.get("category").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("course").touched ? ctx.leadForm.get("course").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.myCourses);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("course").invalid && ctx.leadForm.get("course").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("source").touched ? ctx.leadForm.get("source").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sources);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("source").invalid && ctx.leadForm.get("source").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("strength").touched ? ctx.leadForm.get("strength").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.strengths);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("strength").invalid && ctx.leadForm.get("strength").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("mode").touched ? ctx.leadForm.get("mode").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.modes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("mode").invalid && ctx.leadForm.get("mode").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("status").touched ? ctx.leadForm.get("status").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statuses);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("status").invalid && ctx.leadForm.get("status").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.leadForm.get("comment").touched ? ctx.leadForm.get("comment").invalid ? "danger" : "success" : "basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leadForm.get("comment").invalid && ctx.leadForm.get("comment").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.leadName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.leadEmail);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.leadContact);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.date);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.followUpDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCategory(ctx.leadForm.value.category));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCourse(ctx.leadForm.value.course));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](165, 51, ctx.leadForm.value.source));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](171, 53, ctx.leadForm.value.mode));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](177, 55, ctx.leadForm.value.strength));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](183, 57, ctx.leadForm.value.status));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.leadForm.value.comment);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperPreviousDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]],
        styles: [""]
      });
      return AddLeadComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/lead/add-lead/add-lead.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/institute/branch/lead/add-lead/add-lead.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddLeadModule */

  /***/
  function srcAppInstituteBranchLeadAddLeadAddLeadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLeadModule", function () {
      return AddLeadModule;
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


    var _add_lead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-lead.component */
    "./src/app/institute/branch/lead/add-lead/add-lead.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_lead_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-lead-routing.module */
    "./src/app/institute/branch/lead/add-lead/add-lead-routing.module.ts");

    var AddLeadModule =
    /*@__PURE__*/
    function () {
      var AddLeadModule = function AddLeadModule() {
        _classCallCheck(this, AddLeadModule);
      };

      AddLeadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AddLeadModule
      });
      AddLeadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AddLeadModule_Factory(t) {
          return new (t || AddLeadModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_lead_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddLeadRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"]]]
      });
      return AddLeadModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddLeadModule, {
        declarations: [_add_lead_component__WEBPACK_IMPORTED_MODULE_2__["AddLeadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _add_lead_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddLeadRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"]]
      });
    })();
    /***/

  }
}]);