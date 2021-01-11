(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
    /***/
    "./src/app/institute/branch/manage-branch/course/add-course/add-course-routing.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/add-course/add-course-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AddCourseRoutingModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseAddCourseAddCourseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseRoutingModule", function () {
        return AddCourseRoutingModule;
      });
      /* harmony import */


      var _add_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-course.component */
      "./src/app/institute/branch/manage-branch/course/add-course/add-course.component.ts");
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
        component: _add_course_component__WEBPACK_IMPORTED_MODULE_0__["AddCourseComponent"]
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../../../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }];

      var AddCourseRoutingModule = /*@__PURE__*/function () {
        var AddCourseRoutingModule = function AddCourseRoutingModule() {
          _classCallCheck(this, AddCourseRoutingModule);
        };

        AddCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddCourseRoutingModule
        });
        AddCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddCourseRoutingModule_Factory(t) {
            return new (t || AddCourseRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return AddCourseRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddCourseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/add-course/add-course.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/add-course/add-course.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: AddCourseComponent */

    /***/
    function srcAppInstituteBranchManageBranchCourseAddCourseAddCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseComponent", function () {
        return AddCourseComponent;
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


      var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! bson */
      "./node_modules/bson/dist/bson.browser.esm.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["stepper"];

      function AddCourseComponent_ng_container_20_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course Name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_20_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course Name should contain minimum 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_20_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCourseComponent_ng_container_20_p_2_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.courseBasicDetailsForm.get("courseName").errors == null ? null : ctx_r1.courseBasicDetailsForm.get("courseName").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.courseBasicDetailsForm.get("courseName").errors == null ? null : ctx_r1.courseBasicDetailsForm.get("courseName").errors.minlength);
        }
      }

      function AddCourseComponent_ng_container_26_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course Duration is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_26_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course Duration should be greater than 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_26_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCourseComponent_ng_container_26_p_2_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.courseBasicDetailsForm.get("duration").errors == null ? null : ctx_r2.courseBasicDetailsForm.get("duration").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.courseBasicDetailsForm.get("duration").errors == null ? null : ctx_r2.courseBasicDetailsForm.get("duration").errors.min);
        }
      }

      function AddCourseComponent_nb_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r13._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r13.category);
        }
      }

      function AddCourseComponent_ng_container_35_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Branch Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_35_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.courseBasicDetailsForm.get("category").errors == null ? null : ctx_r4.courseBasicDetailsForm.get("category").errors.required);
        }
      }

      function AddCourseComponent_div_58_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCourseComponent_div_58_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r19.deleteSubject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nb-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_div_58_ng_container_7_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Subject ", i_r16 + 1, " is required! ");
        }
      }

      function AddCourseComponent_div_58_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_div_58_ng_container_7_p_1_Template, 2, 1, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subject_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r15.get("subject").errors == null ? null : subject_r15.get("subject").errors.required);
        }
      }

      function AddCourseComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddCourseComponent_div_58_button_6_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AddCourseComponent_div_58_ng_container_7_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", subject_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "input-subject-", i_r16, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subject ", i_r16 + 1, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "input-subject-", i_r16, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "subject-", i_r16, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Subject ", i_r16 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", subject_r15.get("subject").touched ? subject_r15.get("subject").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r16 !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r15.get("subject").invalid && subject_r15.get("subject").touched);
        }
      }

      function AddCourseComponent_ng_container_79_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fee is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_79_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Fee amount should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_79_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCourseComponent_ng_container_79_p_2_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.courseFeeDetailsForm.get("fees").errors == null ? null : ctx_r6.courseFeeDetailsForm.get("fees").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.courseFeeDetailsForm.get("fees").errors == null ? null : ctx_r6.courseFeeDetailsForm.get("fees").errors.min);
        }
      }

      function AddCourseComponent_ng_container_89_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GST is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_89_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " GST percentage should be between 0% to 100% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_89_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCourseComponent_ng_container_89_p_2_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.courseFeeDetailsForm.get("gst").errors == null ? null : ctx_r7.courseFeeDetailsForm.get("gst").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r7.courseFeeDetailsForm.get("gst").errors == null ? null : ctx_r7.courseFeeDetailsForm.get("gst").errors.max) || (ctx_r7.courseFeeDetailsForm.get("gst").errors == null ? null : ctx_r7.courseFeeDetailsForm.get("gst").errors.maxLength) || (ctx_r7.courseFeeDetailsForm.get("gst").errors == null ? null : ctx_r7.courseFeeDetailsForm.get("gst").errors.min));
        }
      }

      function AddCourseComponent_ng_container_95_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Fee is required, Please enter Fee Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_95_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Fee amount should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCourseComponent_ng_container_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddCourseComponent_ng_container_95_p_1_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddCourseComponent_ng_container_95_p_2_Template, 2, 0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.courseFeeDetailsForm.get("totalFees").errors == null ? null : ctx_r8.courseFeeDetailsForm.get("totalFees").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r8.courseFeeDetailsForm.get("totalFees").errors == null ? null : ctx_r8.courseFeeDetailsForm.get("totalFees").errors.min) || (ctx_r8.courseFeeDetailsForm.get("totalFees").errors == null ? null : ctx_r8.courseFeeDetailsForm.get("totalFees").errors.minLength));
        }
      }

      var AddCourseComponent = /*@__PURE__*/function () {
        var AddCourseComponent = /*#__PURE__*/function () {
          function AddCourseComponent(branchService, courseService, toastrService, router, route) {
            var _this = this;

            _classCallCheck(this, AddCourseComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
            this.route.queryParams.subscribe(function (param) {
              if (param.mode) {
                _this.ngOnInit();
              }
            });
          }

          _createClass(AddCourseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this2 = this;

              this.loading = true;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.courseId = this.courseService.getCourseId();
              var mode;
              this.route.queryParams.subscribe(function (param) {
                mode = param.mode;
              });

              if (mode && mode !== 'edit') {
                this.showToastr('top-right', 'danger', 'Invalid Route');
                this.router.navigate(['../page-not-found'], {
                  relativeTo: this.route
                });
                return;
              } else if (mode && !this.courseId) {
                this.showToastr('top-right', 'danger', 'Course Not Available');
                this.router.navigate(['../page-not-found'], {
                  relativeTo: this.route
                });
                return;
              }

              this.courseBasicDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                courseName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(99)]
                }),
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                })
              });
              this.courseSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                subjects: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
              }, {
                validators: this.atLeastOneSubjectValidator.bind(this)
              });
              this.courseFeeDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                fees: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]
                }),
                gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('0', {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(100)]
                }),
                totalFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                })
              });
              this.getCategories();
              this.inclusiveGST = false;

              if (this.courseId) {
                this.courseService.getCourseForEditing(this.courseId).subscribe(function (course) {
                  if (!course) {
                    _this2.router.navigate(['../page-not-found'], {
                      relativeTo: _this2.route
                    });

                    return;
                  }

                  _this2.course = course;

                  _this2.courseBasicDetailsForm.patchValue({
                    courseName: course.basicDetails.courseName,
                    duration: course.basicDetails.duration,
                    category: course.basicDetails.category,
                    description: course.basicDetails.description
                  });

                  _this2.courseFeeDetailsForm.patchValue({
                    fees: course.feeDetails.fees,
                    gst: course.feeDetails.gst
                  });

                  _this2.inclusiveGST = course.feeDetails.inclusiveGST;

                  _this2.calculateTotal();

                  var subjects = _this2.getSubjects();

                  subjects.controls = [];

                  _this2.course.subjects.forEach(function (subject) {
                    _this2.addSubject(subject);
                  });

                  _this2.loading = false;
                }, function (err) {
                  _this2.router.navigate(['../page-not-found'], {
                    relativeTo: _this2.route
                  });

                  return;
                });
              } else {
                this.generateSubject();
                this.loading = false;
              }
            }
          }, {
            key: "getCategories",
            value: function getCategories() {
              var _this3 = this;

              this.branchService.getBranchData().subscribe(function (branch) {
                if (branch) {
                  _this3.categories = branch.categories;
                }
              });

              if (!this.categories) {
                this.branchService.getBranch(this.branchId).subscribe(function (branch) {
                  _this3.branchService.setBranchData(branch);

                  _this3.categories = branch.categories;
                }, function (error) {
                  _this3.showToastr('top-right', 'danger', error);

                  _this3.loading = false;
                });
              }
            }
          }, {
            key: "atLeastOneSubjectValidator",
            value: function atLeastOneSubjectValidator(group) {
              var subjects = group.value.subjects;
              var status = false;
              subjects.forEach(function (subject) {
                if (subject.status) {
                  status = true;
                }
              });

              if (!status) {
                return {
                  atLeastOneSubjectError: true
                };
              }

              return null;
            }
          }, {
            key: "getSubjects",
            value: function getSubjects() {
              return this.courseSubjectForm.get('subjects');
            }
          }, {
            key: "newSubject",
            value: function newSubject(subjectData) {
              return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](subjectData._id ? subjectData._id : new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"]().toString(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](subjectData.subject ? subjectData.subject : null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](subjectData.status, {
                  validators: []
                })
              });
            }
          }, {
            key: "addSubject",
            value: function addSubject(subject) {
              var subjects = this.getSubjects();
              subjects.push(this.newSubject(subject));
            }
          }, {
            key: "generateSubject",
            value: function generateSubject() {
              var subject = {
                _id: new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"]().toString(),
                subject: '',
                status: true
              };
              this.addSubject(subject);
            }
          }, {
            key: "deleteSubject",
            value: function deleteSubject(i) {
              if (i !== 0 && i !== 1) {
                var subjects = this.getSubjects();
                subjects.removeAt(i);
              }
            }
          }, {
            key: "inclusiveGSTChanged",
            value: function inclusiveGSTChanged(inclusiveGST) {
              this.inclusiveGST = inclusiveGST;
              this.calculateTotal();
            }
          }, {
            key: "calculateTotal",
            value: function calculateTotal() {
              var inclusiveGST = this.inclusiveGST;
              var fee = this.courseFeeDetailsForm.value.fees;
              var gst = this.courseFeeDetailsForm.value.gst;

              if (inclusiveGST) {
                this.courseFeeDetailsForm.patchValue({
                  totalFees: fee
                });
                return;
              }

              var gstValue = +fee / 100 * +gst;
              var totalFees = (+fee + gstValue).toString();
              this.courseFeeDetailsForm.patchValue({
                totalFees: totalFees
              });
            }
          }, {
            key: "submitBasicDetails",
            value: function submitBasicDetails() {
              this.courseBasicDetailsForm.markAllAsTouched();

              if (this.courseBasicDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Basic details are required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "submitSubjects",
            value: function submitSubjects() {
              this.courseSubjectForm.markAllAsTouched();

              if (this.courseSubjectForm.invalid) {
                this.showToastr('top-right', 'danger', 'At least 1 Subject is required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "submitFeeDetails",
            value: function submitFeeDetails() {
              this.courseFeeDetailsForm.markAllAsTouched();

              if (this.courseFeeDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Fee details are required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "saveCourse",
            value: function saveCourse() {
              var _this4 = this;

              this.courseBasicDetailsForm.markAllAsTouched();
              this.courseSubjectForm.markAllAsTouched();
              this.courseFeeDetailsForm.markAllAsTouched();

              if (this.courseBasicDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Basic details are required');
                return;
              } else if (this.courseSubjectForm.invalid) {
                this.showToastr('top-right', 'danger', 'At least 1 Subject is required');
                return;
              } else if (this.courseFeeDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Fee Details are required');
                return;
              }

              this.loading = true;
              var course = {
                branch: this.branchId,
                basicDetails: this.courseBasicDetailsForm.value,
                subjects: this.courseSubjectForm.value.subjects,
                feeDetails: this.courseFeeDetailsForm.value
              };
              course.feeDetails.inclusiveGST = this.inclusiveGST;

              if (!this.course) {
                this.courseService.addCourse(course).subscribe(function (res) {
                  _this4.showToastr('top-right', 'success', 'New Course Added Successfully!');

                  _this4.router.navigate(['../'], {
                    relativeTo: _this4.route
                  });
                }, function (error) {
                  _this4.showToastr('top-right', 'danger', error);

                  _this4.loading = false;
                });
              } else {
                course._id = this.course._id;
                this.courseService.editCourse(course).subscribe(function (res) {
                  _this4.showToastr('top-right', 'success', 'Course Updated Successfully!');

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
            key: "showToastr",
            value: function showToastr(position, status, message) {
              this.toastrService.show(status, message, {
                position: position,
                status: status
              });
            }
          }, {
            key: "getGstAmount",
            value: function getGstAmount() {
              var fee = this.courseFeeDetailsForm.value.fees;
              var gst = this.courseFeeDetailsForm.value.gst;
              var gstValue = +fee / 100 * +gst;
              return gstValue.toString();
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
            key: "getSubjectsData",
            value: function getSubjectsData() {
              var subjects = [];
              this.courseSubjectForm.value.subjects.forEach(function (subject) {
                subjects.push(subject.subject);
              });
              return subjects.join(', ');
            }
          }, {
            key: "back",
            value: function back() {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.courseService.deleteCourseId();
            }
          }]);

          return AddCourseComponent;
        }();

        AddCourseComponent.ɵfac = function AddCourseComponent_Factory(t) {
          return new (t || AddCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        AddCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AddCourseComponent,
          selectors: [["ngx-add-course"]],
          viewQuery: function AddCourseComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
          },
          decls: 170,
          vars: 34,
          consts: [["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-5"], [1, "form-control-group"], ["for", "input -course-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-course-name", "name", "courseName", "formControlName", "courseName", "placeholder", "Course Name", "minlength", "3", "maxlength", "30", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-md-3"], ["for", "input-duration", 1, "label"], ["type", "number", "nbInput", "", "id", "input-duration", "name", "duration", "min", "1", "maxlength", "2", "formControlName", "duration", "placeholder", "Duration (in Months)", "fullWidth", "", 3, "status"], [1, "col-md-4"], ["for", "input-billing-category", 1, "label"], ["id", "input-category", "name", "category", "formControlName", "category", "placeholder", "Select Category", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["for", "input-billing-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description (Optional)", "fullWidth", ""], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Subject Details", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4", "mb-3"], ["type", "button", "nbButton", "", "size", "small", "fullWidth", "", 3, "click"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-6", "text-right"], ["label", "Fee Details", 3, "stepControl"], ["for", "input-fees", 1, "label"], ["type", "number", "nbInput", "", "id", "input-fees", "name", "fees", "min", "0", "formControlName", "fees", "placeholder", "fees", "fullWidth", "", 3, "status", "input"], [1, "form-control-group", "mt-4"], ["id", "input-inclusive-GST", "name", "inclusiveGST", 3, "checked", "checkedChange"], ["for", "input-gst", 1, "label"], ["type", "number", "nbInput", "", "id", "input-gst", "name", "gst", "min", "0", "max", "100", "maxlength", "3", "formControlName", "gst", "placeholder", "GST (in %)", "fullWidth", "", 3, "status", "input"], ["for", "input-total-fees", 1, "label"], ["type", "number", "nbInput", "", "id", "input-total-fees", "name", "totalFees", "formControlName", "totalFees", "placeholder", "Total Fees", "fullWidth", "", "disabled", "true", 3, "status"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"], [1, "col-md-6"], [1, "form-control-group", 3, "formGroup"], [1, "label", 3, "for"], ["type", "text", "nbInput", "", "formControlName", "subject", "fullWidth", "", 3, "id", "name", "placeholder", "status"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 3, "click", 4, "ngIf"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 3, "click"], ["icon", "minus-outline", "status", "danger"]],
          template: function AddCourseComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_2_listener() {
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

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddCourseComponent_Template_form_submit_11_listener() {
                return ctx.submitBasicDetails();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Course Details:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Course Name:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddCourseComponent_ng_container_20_Template, 3, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Course Duration:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddCourseComponent_ng_container_26_Template, 3, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Category:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nb-select", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nb-option", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Select Category");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AddCourseComponent_nb_option_34_Template, 2, 2, "nb-option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AddCourseComponent_ng_container_35_Template, 2, 1, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Description:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "textarea", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "nb-icon", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nb-step", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "form", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCourseComponent_Template_form_ngSubmit_49_listener() {
                return ctx.submitSubjects();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Click on following button to add more Subjects");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_55_listener() {
                return ctx.generateSubject();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Add Subject ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AddCourseComponent_div_58_Template, 8, 9, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "nb-icon", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "nb-icon", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nb-step", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "form", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCourseComponent_Template_form_ngSubmit_72_listener() {
                return ctx.submitFeeDetails();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Fees:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "input", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddCourseComponent_Template_input_input_78_listener() {
                return ctx.calculateTotal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AddCourseComponent_ng_container_79_Template, 3, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "nb-checkbox", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkedChange", function AddCourseComponent_Template_nb_checkbox_checkedChange_82_listener($event) {
                return ctx.inclusiveGSTChanged($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " Inclusive GST ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "GST (in %):");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "input", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddCourseComponent_Template_input_input_88_listener() {
                return ctx.calculateTotal();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, AddCourseComponent_ng_container_89_Template, 3, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Total Fees:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, AddCourseComponent_ng_container_95_Template, 3, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "nb-icon", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "nb-icon", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "nb-step", 45);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 46);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 47);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "table", 48);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Course Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Course Duration");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Category");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Subjects");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Fees");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "GST (in %)");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "GST Amount");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Total Fees");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "button", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "nb-icon", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "button", 49);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCourseComponent_Template_button_click_167_listener() {
                return ctx.saveCourse();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Submit");

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

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx.course ? "Add New Course" : "Edit Course " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 32, ctx.course.basicDetails.courseName), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.courseBasicDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.courseBasicDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseBasicDetailsForm.get("courseName").touched ? ctx.courseBasicDetailsForm.get("courseName").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseBasicDetailsForm.get("courseName").invalid && ctx.courseBasicDetailsForm.get("courseName").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseBasicDetailsForm.get("duration").touched ? ctx.courseBasicDetailsForm.get("duration").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseBasicDetailsForm.get("duration").invalid && ctx.courseBasicDetailsForm.get("duration").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseBasicDetailsForm.get("category").touched ? ctx.courseBasicDetailsForm.get("category").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseBasicDetailsForm.get("category").invalid && ctx.courseBasicDetailsForm.get("category").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.courseSubjectForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.courseSubjectForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.courseSubjectForm.get("subjects")["controls"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.courseFeeDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.courseFeeDetailsForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseFeeDetailsForm.get("fees").touched ? ctx.courseFeeDetailsForm.get("fees").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseFeeDetailsForm.get("fees").invalid && ctx.courseFeeDetailsForm.get("fees").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.inclusiveGST);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseFeeDetailsForm.get("gst").touched && ctx.courseFeeDetailsForm.get("gst").invalid ? "danger" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseFeeDetailsForm.get("gst").invalid && ctx.courseFeeDetailsForm.get("gst").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.courseFeeDetailsForm.get("totalFees").touched && ctx.courseFeeDetailsForm.get("totalFees").invalid ? "danger" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.courseFeeDetailsForm.get("totalFees").invalid && ctx.courseFeeDetailsForm.get("totalFees").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.courseBasicDetailsForm.value.courseName);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.courseBasicDetailsForm.value.duration, " Month/s");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCategory(ctx.courseBasicDetailsForm.value.category));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.courseBasicDetailsForm.value.description ? ctx.courseBasicDetailsForm.value.description : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getSubjectsData());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.courseFeeDetailsForm.value.fees);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.courseFeeDetailsForm.value.gst, " %");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.inclusiveGST ? ctx.getGstAmount() + " Included in Fee Amount" : ctx.getGstAmount(), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.courseFeeDetailsForm.value.totalFees);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperPreviousDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]],
          styles: [""]
        });
        return AddCourseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/add-course/add-course.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/add-course/add-course.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: AddCourseModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseAddCourseAddCourseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseModule", function () {
        return AddCourseModule;
      });
      /* harmony import */


      var _add_course_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-course.component */
      "./src/app/institute/branch/manage-branch/course/add-course/add-course.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _add_course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-course-routing.module */
      "./src/app/institute/branch/manage-branch/course/add-course/add-course-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

      var AddCourseModule = /*@__PURE__*/function () {
        var AddCourseModule = function AddCourseModule() {
          _classCallCheck(this, AddCourseModule);
        };

        AddCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddCourseModule
        });
        AddCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddCourseModule_Factory(t) {
            return new (t || AddCourseModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCourseRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
        });
        return AddCourseModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddCourseModule, {
          declarations: [_add_course_component__WEBPACK_IMPORTED_MODULE_0__["AddCourseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _add_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddCourseRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();