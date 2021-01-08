(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test-routing.module.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/employee/branch/exam/online-test/add-online-test/add-online-test-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AddOnlineTestRoutingModule */

    /***/
    function srcAppEmployeeBranchExamOnlineTestAddOnlineTestAddOnlineTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOnlineTestRoutingModule", function () {
        return AddOnlineTestRoutingModule;
      });
      /* harmony import */


      var _add_online_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-online-test.component */
      "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.component.ts");
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
        component: _add_online_test_component__WEBPACK_IMPORTED_MODULE_0__["AddOnlineTestComponent"]
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

      var AddOnlineTestRoutingModule = /*@__PURE__*/function () {
        var AddOnlineTestRoutingModule = function AddOnlineTestRoutingModule() {
          _classCallCheck(this, AddOnlineTestRoutingModule);
        };

        AddOnlineTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddOnlineTestRoutingModule
        });
        AddOnlineTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddOnlineTestRoutingModule_Factory(t) {
            return new (t || AddOnlineTestRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return AddOnlineTestRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddOnlineTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AddOnlineTestComponent */

    /***/
    function srcAppEmployeeBranchExamOnlineTestAddOnlineTestAddOnlineTestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOnlineTestComponent", function () {
        return AddOnlineTestComponent;
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
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _services_online_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../../services/online-exam.service */
      "./src/app/services/online-exam.service.ts");
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

      var _c0 = ["stepper"];

      function AddOnlineTestComponent_ng_container_22_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Online Exam Title is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_22_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.onlineExamForm.get("title").errors == null ? null : ctx_r1.onlineExamForm.get("title").errors.required);
        }
      }

      function AddOnlineTestComponent_nb_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subject_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", subject_r13._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r13.subject);
        }
      }

      function AddOnlineTestComponent_ng_container_31_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Subject is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_31_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.onlineExamForm.get("subject").errors == null ? null : ctx_r3.onlineExamForm.get("subject").errors.required);
        }
      }

      function AddOnlineTestComponent_ng_container_37_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_37_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.onlineExamForm.get("date").errors == null ? null : ctx_r4.onlineExamForm.get("date").errors.required);
        }
      }

      function AddOnlineTestComponent_ng_container_43_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Time is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_43_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.onlineExamForm.get("time").errors == null ? null : ctx_r5.onlineExamForm.get("time").errors.required);
        }
      }

      function AddOnlineTestComponent_ng_container_49_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Duration is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_49_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Duration should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_49_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddOnlineTestComponent_ng_container_49_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.onlineExamForm.get("duration").errors == null ? null : ctx_r6.onlineExamForm.get("duration").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.onlineExamForm.get("duration").errors == null ? null : ctx_r6.onlineExamForm.get("duration").errors.min);
        }
      }

      function AddOnlineTestComponent_ng_container_55_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_55_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.onlineExamForm.get("description").errors == null ? null : ctx_r7.onlineExamForm.get("description").errors.required);
        }
      }

      function AddOnlineTestComponent_ng_container_61_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Each Question Marks is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_61_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Each Question Marks should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_61_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddOnlineTestComponent_ng_container_61_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.onlineExamForm.get("eachQuestionMarks").errors == null ? null : ctx_r8.onlineExamForm.get("eachQuestionMarks").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.onlineExamForm.get("eachQuestionMarks").errors == null ? null : ctx_r8.onlineExamForm.get("eachQuestionMarks").errors.min);
        }
      }

      function AddOnlineTestComponent_ng_container_67_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Questions are required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_67_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Questions should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_67_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddOnlineTestComponent_ng_container_67_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.onlineExamForm.get("totalQuestions").errors == null ? null : ctx_r9.onlineExamForm.get("totalQuestions").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.onlineExamForm.get("totalQuestions").errors == null ? null : ctx_r9.onlineExamForm.get("totalQuestions").errors.min);
        }
      }

      function AddOnlineTestComponent_ng_container_73_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Marks are required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_73_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Total Marks should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_73_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddOnlineTestComponent_ng_container_73_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.onlineExamForm.get("totalMarks").errors == null ? null : ctx_r10.onlineExamForm.get("totalMarks").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.onlineExamForm.get("totalMarks").errors == null ? null : ctx_r10.onlineExamForm.get("totalMarks").errors.min);
        }
      }

      function AddOnlineTestComponent_ng_container_79_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passing Marks is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_79_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passing Marks should be greater than 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddOnlineTestComponent_ng_container_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddOnlineTestComponent_ng_container_79_p_1_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddOnlineTestComponent_ng_container_79_p_2_Template, 2, 0, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.onlineExamForm.get("passingMarks").errors == null ? null : ctx_r11.onlineExamForm.get("passingMarks").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.onlineExamForm.get("passingMarks").errors == null ? null : ctx_r11.onlineExamForm.get("passingMarks").errors.min);
        }
      }

      var AddOnlineTestComponent = /*@__PURE__*/function () {
        var AddOnlineTestComponent = /*#__PURE__*/function () {
          function AddOnlineTestComponent(branchService, courseService, dateService, batchService, onlineExamService, toastrService, router, route) {
            _classCallCheck(this, AddOnlineTestComponent);

            this.branchService = branchService;
            this.courseService = courseService;
            this.dateService = dateService;
            this.batchService = batchService;
            this.onlineExamService = onlineExamService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
          }

          _createClass(AddOnlineTestComponent, [{
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
              this.onlineExamId = this.onlineExamService.getOnlineExamId();

              if (mode && mode !== 'edit') {
                this.showToastr('top-right', 'danger', 'Invalid Route'); // this.router.navigate(['../page-not-found'], { relativeTo: this.route });

                return;
              } else if (mode && !this.onlineExamId) {
                this.showToastr('top-right', 'danger', 'Online Exam Not Found'); // this.router.navigate(['../page-not-found'], { relativeTo: this.route });

                return;
              }

              this.branchService.getCategoryData().subscribe(function (category) {
                _this.category = category;
              });
              this.courseService.getCourseData().subscribe(function (course) {
                _this.course = course;
              });
              this.batchService.getBatchData().subscribe(function (batch) {
                _this.batch = batch;
              });
              this.subjects = [];
              this.batch.subjects.forEach(function (curSubject) {
                var mySubject = _this.course.subjects.find(function (subject) {
                  return subject._id === curSubject.subject;
                });

                _this.subjects.push(mySubject);
              });
              this.onlineExamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dateService.getDateString(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                time: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                }),
                eachQuestionMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]
                }),
                totalQuestions: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]
                }),
                totalMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: []
                }),
                passingMarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)]
                })
              });

              if (mode && this.onlineExamId) {
                this.onlineExamService.getOnlineExam(this.onlineExamId).subscribe(function (onlineExam) {
                  _this.onlineExam = onlineExam;

                  _this.onlineExamForm.patchValue({
                    title: _this.onlineExam.title,
                    subject: _this.onlineExam.subject,
                    date: _this.onlineExam.date,
                    time: _this.onlineExam.time,
                    duration: _this.onlineExam.duration,
                    branch: _this.onlineExam.branch,
                    description: _this.onlineExam.description,
                    eachQuestionMarks: _this.onlineExam.eachQuestionMarks,
                    totalQuestions: _this.onlineExam.totalQuestions,
                    totalMarks: _this.onlineExam.totalMarks,
                    passingMarks: _this.onlineExam.passingMarks
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
            key: "previousStep",
            value: function previousStep() {
              this.stepper.previous();
            }
          }, {
            key: "submitOnlineExamForm",
            value: function submitOnlineExamForm() {
              this.onlineExamForm.markAllAsTouched();

              if (this.onlineExamForm.invalid) {
                this.showToastr('top-right', 'danger', 'All Online Exam Fields are Required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "calculateTotalMarks",
            value: function calculateTotalMarks() {
              var totalQuestions = this.onlineExamForm.value.totalQuestions;
              var eachQuestionMarks = this.onlineExamForm.value.eachQuestionMarks;
              var totalMarks = (totalQuestions ? totalQuestions : 0) * (eachQuestionMarks ? eachQuestionMarks : 0);
              this.onlineExamForm.patchValue({
                totalMarks: totalMarks
              });
            }
          }, {
            key: "saveOnlineExam",
            value: function saveOnlineExam() {
              var _this2 = this;

              this.onlineExamForm.markAllAsTouched();

              if (this.onlineExamForm.invalid) {
                this.showToastr('top-right', 'danger', 'All Online Exam Fields are Required');
                return;
              }

              this.loading = true;
              var onlineExam = Object.assign({}, this.onlineExamForm.getRawValue());
              onlineExam.branch = this.branchId;
              onlineExam.category = this.category._id;
              onlineExam.course = this.course._id;
              onlineExam.batch = this.batch._id;

              if (!this.onlineExam) {
                this.onlineExamService.addOnlineExam(onlineExam).subscribe(function (res) {
                  _this2.showToastr('top-right', 'success', 'New Online Exam Added Successfully!');

                  _this2.back();
                }, function (error) {
                  _this2.showToastr('top-right', 'danger', error);

                  _this2.loading = false;
                });
              } else {
                onlineExam._id = this.onlineExam._id;
                this.onlineExamService.editOnlineExam(onlineExam).subscribe(function (res) {
                  _this2.showToastr('top-right', 'success', 'Online Exam Updated Successfully!');

                  _this2.back();
                }, function (error) {
                  _this2.showToastr('top-right', 'danger', error);

                  _this2.loading = false;
                });
              }
            }
          }, {
            key: "getSubject",
            value: function getSubject(subjectId) {
              var subject = this.subjects.find(function (curSubject) {
                return curSubject._id === subjectId;
              });

              if (subject) {
                return subject.subject;
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
            key: "back",
            value: function back() {
              this.router.navigate(['../manage'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.onlineExamService.deleteOnlineExamId();
              this.onlineExamService.deleteOnlineExamData();
            }
          }]);

          return AddOnlineTestComponent;
        }();

        AddOnlineTestComponent.ɵfac = function AddOnlineTestComponent_Factory(t) {
          return new (t || AddOnlineTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_online_exam_service__WEBPACK_IMPORTED_MODULE_6__["OnlineExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
        };

        AddOnlineTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: AddOnlineTestComponent,
          selectors: [["ngx-add-online-test"]],
          viewQuery: function AddOnlineTestComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
          },
          decls: 151,
          vars: 37,
          consts: [[1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "warning", 1, "float-right", 3, "click"], [1, "col-12"], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Online Exam Details", 3, "stepControl"], [3, "formGroup", "submit"], [1, "col-md-12"], [1, "form-control-group"], ["for", "input-online-exam-title", 1, "label"], ["type", "text", "nbInput", "", "id", "input-online-exam-title", "name", "title", "formControlName", "title", "placeholder", "Online Exam Title", "fullWidth", "", 3, "status"], [4, "ngIf"], [1, "col-md-6"], ["for", "input-subject", 1, "label"], ["id", "input-subject", "name", "subject", "formControlName", "subject", "placeholder", "Subject", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "input-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-date", "name", "date", "formControlName", "date", "placeholder", "Date", "fullWidth", "", 3, "min", "status"], ["for", "input-time", 1, "label"], ["type", "time", "step", "300", "nbInput", "", "id", "input-time", "name", "time", "formControlName", "time", "placeholder", "Time", "fullWidth", "", 3, "status"], ["for", "input-duration", 1, "label"], ["type", "number", "nbInput", "", "id", "input-duration", "name", "duration", "min", "0", "formControlName", "duration", "placeholder", "Duration (in Min)", "fullWidth", "", 3, "status"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "rows", "2", "id", "input-description", "name", "description", "min", "0", "formControlName", "description", "placeholder", "Description", "fullWidth", "", 3, "status"], ["for", "input-each-question-marks", 1, "label"], ["type", "number", "nbInput", "", "id", "input-each-question-marks", "name", "eachQuestionMarks", "min", "0", "formControlName", "eachQuestionMarks", "placeholder", "Each Question Marks", "fullWidth", "", 3, "status", "input"], ["for", "input-total-question", 1, "label"], ["type", "number", "nbInput", "", "id", "input-total-question", "name", "totalQuestions", "min", "0", "formControlName", "totalQuestions", "placeholder", "Total Question", "fullWidth", "", 3, "status", "input"], ["for", "input-total-marks", 1, "label"], ["type", "number", "nbInput", "", "id", "input-total-marks", "name", "totalMarks", "min", "0", "formControlName", "totalMarks", "placeholder", "Total Marks", "disabled", "true", "fullWidth", "", 3, "status"], ["for", "input-onlineExam-passing-marks", 1, "label"], ["type", "number", "nbInput", "", "id", "input-onlineExam-passing-marks", "name", "passingMarks", "min", "0", "formControlName", "passingMarks", "placeholder", "Passing Marks", "fullWidth", "", 3, "status"], ["type", "submit", "nbButton", "", "size", "small", "status", "basic", 1, "float-right"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [3, "value"]],
          template: function AddOnlineTestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddOnlineTestComponent_Template_button_click_7_listener() {
                return ctx.back();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Back ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-stepper", 5, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nb-step", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddOnlineTestComponent_Template_form_submit_15_listener() {
                return ctx.submitOnlineExamForm();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Online Exam Title:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddOnlineTestComponent_ng_container_22_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Subject:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nb-select", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nb-option", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select Subject");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddOnlineTestComponent_nb_option_30_Template, 2, 2, "nb-option", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddOnlineTestComponent_ng_container_31_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Date:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AddOnlineTestComponent_ng_container_37_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Time:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddOnlineTestComponent_ng_container_43_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Duration (in Min):");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AddOnlineTestComponent_ng_container_49_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Description:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "textarea", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddOnlineTestComponent_ng_container_55_Template, 2, 1, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Each Question Marks:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddOnlineTestComponent_Template_input_input_60_listener() {
                return ctx.calculateTotalMarks();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddOnlineTestComponent_ng_container_61_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Total Question:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "input", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddOnlineTestComponent_Template_input_input_66_listener() {
                return ctx.calculateTotalMarks();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AddOnlineTestComponent_ng_container_67_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Total Marks:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AddOnlineTestComponent_ng_container_73_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Passing Marks:");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AddOnlineTestComponent_ng_container_79_Template, 3, 2, "ng-container", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 35);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Next ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "nb-step", 36);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 37);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 38);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "table", 39);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Online Exam Title");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Subject");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Time");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Duration (in Min)");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Each Question Marks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Total Questions");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Total Marks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Passing Marks");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 40);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 41);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddOnlineTestComponent_Template_button_click_143_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "nb-icon", 42);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 43);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 44);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddOnlineTestComponent_Template_button_click_148_listener() {
                return ctx.saveOnlineExam();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Submit");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

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

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.onlineExam ? "Edit" : "Add", " Online Test");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.onlineExamForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.onlineExamForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("title").touched ? ctx.onlineExamForm.get("title").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("title").invalid && ctx.onlineExamForm.get("title").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("subject").touched ? ctx.onlineExamForm.get("subject").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subjects);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("subject").invalid && ctx.onlineExamForm.get("subject").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.onlineExam ? ctx.onlineExam.date : ctx.dateService.getDateString())("status", ctx.onlineExamForm.get("date").touched ? ctx.onlineExamForm.get("date").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("date").invalid && ctx.onlineExamForm.get("date").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("time").touched ? ctx.onlineExamForm.get("time").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("time").invalid && ctx.onlineExamForm.get("time").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("duration").touched ? ctx.onlineExamForm.get("duration").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("duration").invalid && ctx.onlineExamForm.get("duration").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("description").touched ? ctx.onlineExamForm.get("description").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("description").invalid && ctx.onlineExamForm.get("description").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("eachQuestionMarks").touched ? ctx.onlineExamForm.get("eachQuestionMarks").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("eachQuestionMarks").invalid && ctx.onlineExamForm.get("eachQuestionMarks").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("totalQuestions").touched ? ctx.onlineExamForm.get("totalQuestions").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("totalQuestions").invalid && ctx.onlineExamForm.get("totalQuestions").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("totalMarks").touched ? ctx.onlineExamForm.get("totalMarks").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("totalMarks").invalid && ctx.onlineExamForm.get("totalMarks").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.onlineExamForm.get("passingMarks").touched ? ctx.onlineExamForm.get("passingMarks").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onlineExamForm.get("passingMarks").invalid && ctx.onlineExamForm.get("passingMarks").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.title);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getSubject(ctx.onlineExamForm.value.subject));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.onlineExamForm.value.date));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateService.formatTime(ctx.onlineExamForm.value.time));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.onlineExamForm.value.duration, " Min");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.description);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.eachQuestionMarks);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.totalQuestions);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.totalMarks);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.onlineExamForm.value.passingMarks);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"]],
          styles: [""]
        });
        return AddOnlineTestComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.module.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: AddOnlineTestModule */

    /***/
    function srcAppEmployeeBranchExamOnlineTestAddOnlineTestAddOnlineTestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOnlineTestModule", function () {
        return AddOnlineTestModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _add_online_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-online-test.component */
      "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _add_online_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-online-test-routing.module */
      "./src/app/employee/branch/exam/online-test/add-online-test/add-online-test-routing.module.ts");

      var AddOnlineTestModule = /*@__PURE__*/function () {
        var AddOnlineTestModule = function AddOnlineTestModule() {
          _classCallCheck(this, AddOnlineTestModule);
        };

        AddOnlineTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: AddOnlineTestModule
        });
        AddOnlineTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function AddOnlineTestModule_Factory(t) {
            return new (t || AddOnlineTestModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_online_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddOnlineTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]]
        });
        return AddOnlineTestModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddOnlineTestModule, {
          declarations: [_add_online_test_component__WEBPACK_IMPORTED_MODULE_1__["AddOnlineTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _add_online_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddOnlineTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();