(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[179], {
    /***/
    "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material-routing.module.ts":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material-routing.module.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: AddCourseMaterialRoutingModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseMaterialAddCourseMaterialAddCourseMaterialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseMaterialRoutingModule", function () {
        return AddCourseMaterialRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _add_course_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-course-material.component */
      "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.component.ts");

      var routes = [{
        path: '',
        component: _add_course_material_component__WEBPACK_IMPORTED_MODULE_2__["AddCourseMaterialComponent"]
      }, {
        path: 'page-not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          0).then(__webpack_require__.bind(null,
          /*! ../../../../../../shared/page-not-found/page-not-found.module */
          "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) {
            return m.PageNotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
      }];

      var AddCourseMaterialRoutingModule = /*@__PURE__*/function () {
        var AddCourseMaterialRoutingModule = function AddCourseMaterialRoutingModule() {
          _classCallCheck(this, AddCourseMaterialRoutingModule);
        };

        AddCourseMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddCourseMaterialRoutingModule
        });
        AddCourseMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddCourseMaterialRoutingModule_Factory(t) {
            return new (t || AddCourseMaterialRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AddCourseMaterialRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddCourseMaterialRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.component.ts":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: AddCourseMaterialComponent */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseMaterialAddCourseMaterialAddCourseMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseMaterialComponent", function () {
        return AddCourseMaterialComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_course_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../services/course-material.service */
      "./src/app/services/course-material.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["filePicker"];

      function AddCourseMaterialComponent_nb_card_0_nb_select_16_nb_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r9._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r9.subject);
        }
      }

      function AddCourseMaterialComponent_nb_card_0_nb_select_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function AddCourseMaterialComponent_nb_card_0_nb_select_16_Template_nb_select_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.onSelectSubject($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddCourseMaterialComponent_nb_card_0_nb_select_16_nb_option_3_Template, 2, 2, "nb-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.subject)("status", ctx_r1.invalidSubject ? ctx_r1.subject === "" ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.course.subjects);
        }
      }

      function AddCourseMaterialComponent_nb_card_0_ng_container_17_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddCourseMaterialComponent_nb_card_0_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCourseMaterialComponent_nb_card_0_ng_container_17_p_1_Template, 2, 0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.subject === "");
        }
      }

      function AddCourseMaterialComponent_nb_card_0_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function AddCourseMaterialComponent_nb_card_0_div_32_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCourseMaterialComponent_nb_card_0_div_32_tr_11_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var i_r15 = ctx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.removeFile(i_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r14.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nbTooltip", "Remove ", file_r14.name, "");
        }
      }

      function AddCourseMaterialComponent_nb_card_0_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Content File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddCourseMaterialComponent_nb_card_0_div_32_tr_11_Template, 9, 3, "tr", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.uploadCourseMaterials);
        }
      }

      function AddCourseMaterialComponent_nb_card_0_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No Files Selected, Please Select Files to Upload ");
        }
      }

      function AddCourseMaterialComponent_nb_card_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCourseMaterialComponent_nb_card_0_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.saveCourseMaterial();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Upload\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Subject :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddCourseMaterialComponent_nb_card_0_nb_select_16_Template, 4, 3, "nb-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddCourseMaterialComponent_nb_card_0_ng_container_17_Template, 2, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Click on Following Button to Select Course Material Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCourseMaterialComponent_nb_card_0_Template_input_change_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onFilePicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCourseMaterialComponent_nb_card_0_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return _r3.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Click Here to Pick Files ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AddCourseMaterialComponent_nb_card_0_ng_container_26_Template, 3, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "File/s To Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddCourseMaterialComponent_nb_card_0_div_32_Template, 12, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddCourseMaterialComponent_nb_card_0_ng_template_33_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.course);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invalidSubject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invalidFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadCourseMaterials.length > 0)("ngIfElse", _r6);
        }
      }

      var AddCourseMaterialComponent = /*@__PURE__*/function () {
        var AddCourseMaterialComponent = /*#__PURE__*/function () {
          function AddCourseMaterialComponent(branchService, courseService, courseMaterialService, toastrService, router, route) {
            _classCallCheck(this, AddCourseMaterialComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.courseMaterialService = courseMaterialService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
          }

          _createClass(AddCourseMaterialComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.invalidFile = false;
              this.invalidSubject = false;
              this.branchId = this.branchService.getBranchId();
              this.courseId = this.courseService.getCourseId();

              if (!this.branchId || !this.courseId) {
                this.showToastr('top-right', 'danger', 'Invalid Course');
                this.cancel();
                return;
              }

              this.uploadCourseMaterials = [];
              this.subject = '';
              this.courseService.getCourseData().subscribe(function (course) {
                if (!course) {
                  _this.cancel();

                  return;
                }

                _this.course = course;
                _this.loading = false;
              });
            }
          }, {
            key: "onFilePicked",
            value: function onFilePicked(event) {
              this.invalidFile = false;
              var files = event.target.files;
              var fileExt = ['pdf', 'jpg', 'png', 'jpeg', 'mp4'];
              var ext = null;
              var n = files.length;

              for (var i = 0; i < n; i++) {
                ext = files[i].name.substring(files[i].name.lastIndexOf('.') + 1).toLowerCase();

                if (!(fileExt.indexOf(ext) !== -1)) {
                  this.invalidFile = true;
                  this.fileInput.nativeElement.value = '';
                  return;
                }
              }

              this.invalidFile = false;

              for (var _i = 0; _i < n; _i++) {
                this.uploadCourseMaterials.push(files[_i]);
              }

              this.fileInput.nativeElement.value = '';
            }
          }, {
            key: "onSelectSubject",
            value: function onSelectSubject(subject) {
              this.subject = subject;

              if (subject === '') {
                this.invalidSubject = true;
              } else {
                this.invalidSubject = false;
              }
            }
          }, {
            key: "saveCourseMaterial",
            value: function saveCourseMaterial() {
              var _this2 = this;

              if (!this.subject || this.subject === '') {
                this.invalidSubject = true;
              }

              if (this.uploadCourseMaterials.length < 1) {
                this.showToastr('top-right', 'danger', 'Select at least 1 Course material File');
                this.invalidFile = true;
                return;
              } else if (this.invalidSubject) {
                this.showToastr('top-right', 'danger', 'Please Select Subject');
                return;
              }

              this.loading = true;
              this.invalidFile = false;
              var courseMaterials = new FormData();
              courseMaterials.append('branch', this.branchId);
              courseMaterials.append('category', this.course.basicDetails.category);
              courseMaterials.append('course', this.courseId);
              courseMaterials.append('subject', this.subject);

              for (var i = 0; i < this.uploadCourseMaterials.length; i++) {
                courseMaterials.append('material', this.uploadCourseMaterials[i], this.uploadCourseMaterials[i].name.substring(0, this.uploadCourseMaterials[i].name.lastIndexOf('.')));
              }

              this.courseMaterialService.newCourseMaterials(courseMaterials).subscribe(function (res) {
                var totalFiles = _this2.uploadCourseMaterials.length;
                var overStorageFiles = res.overStorageFiles;

                if (overStorageFiles < totalFiles) {
                  _this2.showToastr('top-right', 'success', "".concat(totalFiles - overStorageFiles, " file").concat(totalFiles - overStorageFiles === 1 ? ' is' : 's are', " Uploaded Successfully!"));
                }

                if (overStorageFiles > 0) {
                  _this2.showToastr('top-right', 'danger', "Storage is full, ".concat(overStorageFiles, " file").concat(overStorageFiles === 1 ? ' is' : 's are', " not Uploaded"));
                }

                _this2.uploadCourseMaterials = [];

                _this2.cancel();
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
          }, {
            key: "removeFile",
            value: function removeFile(index) {
              this.uploadCourseMaterials.splice(index, 1);
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
            key: "cancel",
            value: function cancel() {
              this.router.navigate(['../'], {
                relativeTo: this.route
              });
            }
          }]);

          return AddCourseMaterialComponent;
        }();

        AddCourseMaterialComponent.ɵfac = function AddCourseMaterialComponent_Factory(t) {
          return new (t || AddCourseMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_material_service__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
        };

        AddCourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AddCourseMaterialComponent,
          selectors: [["ngx-add-course-material"]],
          viewQuery: function AddCourseMaterialComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
            }
          },
          decls: 1,
          vars: 1,
          consts: [[4, "ngIf"], [1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "type", "button", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "arrow-circle-up-outline"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-subject", 1, "label"], ["type", "text", "id", "input-subject", "name", "subject", "placeholder", "Select Subject", "fullWidth", "", 3, "selected", "status", "selectedChange", 4, "ngIf"], ["type", "file", "nbInput", "", "id", "input-file", "name", "file", "placeholder", "Select File", "fullWidth", "", "multiple", "", "hidden", "", 3, "change"], ["filePicker", ""], ["nbButton", "", "size", "small", "type", "button", "fullWidth", "", "status", "warning", "id", "files", 3, "click"], [1, "text-center"], [1, "col-md-10", "mx-auto"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noFiles", ""], ["type", "text", "id", "input-subject", "name", "subject", "placeholder", "Select Subject", "fullWidth", "", 3, "selected", "status", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover"], [1, "table-heading"], [1, "table-row"], [1, "table-heading-data"], [1, "table-heading-data", "text-center"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-data"], [1, "mr-2"], [1, "table-data", "text-center"], ["type", "button", "nbButton", "", "size", "tiny", "shape", "round", "status", "danger", 3, "nbTooltip", "click"], ["icon", "close-outline"]],
          template: function AddCourseMaterialComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddCourseMaterialComponent_nb_card_0_Template, 35, 5, "nb-card", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipDirective"]],
          styles: [""]
        });
        return AddCourseMaterialComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.module.ts":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: AddCourseMaterialModule */

    /***/
    function srcAppInstituteBranchManageBranchCourseCourseMaterialAddCourseMaterialAddCourseMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCourseMaterialModule", function () {
        return AddCourseMaterialModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _add_course_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-course-material.component */
      "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _add_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-course-material-routing.module */
      "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material-routing.module.ts");

      var AddCourseMaterialModule = /*@__PURE__*/function () {
        var AddCourseMaterialModule = function AddCourseMaterialModule() {
          _classCallCheck(this, AddCourseMaterialModule);
        };

        AddCourseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: AddCourseMaterialModule
        });
        AddCourseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function AddCourseMaterialModule_Factory(t) {
            return new (t || AddCourseMaterialModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddCourseMaterialRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"]]]
        });
        return AddCourseMaterialModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddCourseMaterialModule, {
          declarations: [_add_course_material_component__WEBPACK_IMPORTED_MODULE_1__["AddCourseMaterialComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddCourseMaterialRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"]]
        });
      })();
      /***/

    }
  }]);
})();