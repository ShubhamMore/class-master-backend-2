(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
    /***/
    "./src/app/employee/branch/student/add-student/add-student-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/employee/branch/student/add-student/add-student-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: AddStudentRoutingModule */

    /***/
    function srcAppEmployeeBranchStudentAddStudentAddStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStudentRoutingModule", function () {
        return AddStudentRoutingModule;
      });
      /* harmony import */


      var _add_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-student.component */
      "./src/app/employee/branch/student/add-student/add-student.component.ts");
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
        component: _add_student_component__WEBPACK_IMPORTED_MODULE_0__["AddStudentComponent"]
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

      var AddStudentRoutingModule = /*@__PURE__*/function () {
        var AddStudentRoutingModule = function AddStudentRoutingModule() {
          _classCallCheck(this, AddStudentRoutingModule);
        };

        AddStudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AddStudentRoutingModule
        });
        AddStudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AddStudentRoutingModule_Factory(t) {
            return new (t || AddStudentRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return AddStudentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddStudentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/student/add-student/add-student.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/employee/branch/student/add-student/add-student.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AddStudentComponent */

    /***/
    function srcAppEmployeeBranchStudentAddStudentAddStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function () {
        return AddStudentComponent;
      });
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../../environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/student.service */
      "./src/app/services/student.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/shared-services/user.service */
      "./src/app/services/shared-services/user.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _services_branch_student_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../services/branch-student.service */
      "./src/app/services/branch-student.service.ts");
      /* harmony import */


      var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../services/shared-services/encrypt.service */
      "./src/app/services/shared-services/encrypt.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["stepper"];

      function AddStudentComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-checkbox", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checkedChange", function AddStudentComponent_div_12_Template_nb_checkbox_checkedChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.alreadyRegister($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Already Registered Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.alreadyRegisteredUser);
        }
      }

      function AddStudentComponent_div_13_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_div_13_ng_container_8_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Student Id is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_div_13_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_div_13_ng_container_8_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.studentSearchForm.get("studentId").errors == null ? null : ctx_r11.studentSearchForm.get("studentId").errors.required);
        }
      }

      function AddStudentComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddStudentComponent_div_13_Template_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.searchStudent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Student Id:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddStudentComponent_div_13_button_7_Template, 2, 0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddStudentComponent_div_13_ng_container_8_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.studentSearchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r2.studentSearchForm.get("studentId").touched ? ctx_r2.studentSearchForm.get("studentId").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.student);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.studentSearchForm.get("studentId").invalid && ctx_r2.studentSearchForm.get("studentId").touched);
        }
      }

      function AddStudentComponent_form_14_ng_container_7_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Student name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_7_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Student Name should contain minimum 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_7_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddStudentComponent_form_14_ng_container_7_p_2_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.studentForm.get("name").errors == null ? null : ctx_r15.studentForm.get("name").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.studentForm.get("name").errors == null ? null : ctx_r15.studentForm.get("name").errors.minlength);
        }
      }

      function AddStudentComponent_form_14_ng_container_13_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_13_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_13_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email Already registered, Please try another Email! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_13_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddStudentComponent_form_14_ng_container_13_p_2_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddStudentComponent_form_14_ng_container_13_p_3_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.studentForm.get("email").errors == null ? null : ctx_r16.studentForm.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.studentForm.get("email").errors == null ? null : ctx_r16.studentForm.get("email").errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.userExist);
        }
      }

      function AddStudentComponent_form_14_ng_container_19_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_19_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone should contain 10 digits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_19_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddStudentComponent_form_14_ng_container_19_p_2_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r17.studentForm.get("phone").errors == null ? null : ctx_r17.studentForm.get("phone").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r17.studentForm.get("phone").errors == null ? null : ctx_r17.studentForm.get("phone").errors.minlength) || (ctx_r17.studentForm.get("phone").errors == null ? null : ctx_r17.studentForm.get("phone").errors.maxlength) || (ctx_r17.studentForm.get("phone").errors == null ? null : ctx_r17.studentForm.get("phone").errors.min) || (ctx_r17.studentForm.get("phone").errors == null ? null : ctx_r17.studentForm.get("phone").errors.max));
        }
      }

      function AddStudentComponent_form_14_ng_container_35_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parent Name should contain minimum 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_35_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.studentForm.get("parentName").errors == null ? null : ctx_r18.studentForm.get("parentName").errors.minlength);
        }
      }

      function AddStudentComponent_form_14_ng_container_41_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parent Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_41_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.studentForm.get("parentEmail").errors == null ? null : ctx_r19.studentForm.get("parentEmail").errors.parentEmail);
        }
      }

      function AddStudentComponent_form_14_ng_container_47_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Parent Phone should contain 10 digits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_form_14_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_form_14_ng_container_47_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r20.studentForm.get("parentPhone").errors == null ? null : ctx_r20.studentForm.get("parentPhone").errors.minlength) || (ctx_r20.studentForm.get("parentPhone").errors == null ? null : ctx_r20.studentForm.get("parentPhone").errors.maxlength) || (ctx_r20.studentForm.get("parentPhone").errors == null ? null : ctx_r20.studentForm.get("parentPhone").errors.min) || (ctx_r20.studentForm.get("parentPhone").errors == null ? null : ctx_r20.studentForm.get("parentPhone").errors.max));
        }
      }

      function AddStudentComponent_form_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AddStudentComponent_form_14_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r31.studentFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Student Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AddStudentComponent_form_14_ng_container_7_Template, 3, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddStudentComponent_form_14_Template_input_input_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r33.checkUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddStudentComponent_form_14_ng_container_13_Template, 4, 3, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddStudentComponent_form_14_ng_container_19_Template, 3, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Birth Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "textarea", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Parent Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AddStudentComponent_form_14_ng_container_35_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Parent Email address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddStudentComponent_form_14_ng_container_41_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Parent Phone:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AddStudentComponent_form_14_ng_container_47_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "nb-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.studentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("name").touched ? ctx_r3.studentForm.get("name").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.studentForm.get("name").invalid && ctx_r3.studentForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("email").touched ? ctx_r3.studentForm.get("email").invalid || ctx_r3.userExist ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.studentForm.get("email").invalid || ctx_r3.userExist) && ctx_r3.studentForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("phone").touched ? ctx_r3.studentForm.get("phone").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.studentForm.get("phone").invalid && ctx_r3.studentForm.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r3.dateService.getDateString());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("parentName").touched ? ctx_r3.studentForm.get("parentName").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.studentForm.get("parentName").invalid && ctx_r3.studentForm.get("parentName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("parentEmail").touched ? ctx_r3.studentForm.get("parentEmail").invalid || ctx_r3.userExist ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.studentForm.get("parentEmail").invalid || ctx_r3.userExist) && ctx_r3.studentForm.get("parentEmail").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx_r3.studentForm.get("parentPhone").touched ? ctx_r3.studentForm.get("parentPhone").invalid ? "danger" : "success" : "basic");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.studentForm.get("parentPhone").invalid && ctx_r3.studentForm.get("parentPhone").touched);
        }
      }

      function AddStudentComponent_nb_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r34._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r34.category);
        }
      }

      function AddStudentComponent_ng_container_26_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Branch Category is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_ng_container_26_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.branchStudentForm.get("category").errors == null ? null : ctx_r5.branchStudentForm.get("category").errors.required);
        }
      }

      function AddStudentComponent_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Admission Date is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddStudentComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddStudentComponent_ng_container_32_p_1_Template, 2, 0, "p", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.branchStudentForm.get("admissionDate").errors == null ? null : ctx_r6.branchStudentForm.get("admissionDate").errors.required);
        }
      }

      function AddStudentComponent_tr_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IMS Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.studentSearchForm.value.studentId);
        }
      }

      var AddStudentComponent = /*@__PURE__*/function () {
        var AddStudentComponent = /*#__PURE__*/function () {
          function AddStudentComponent(branchService, studentService, dateService, userService, toastrService, branchStudentService, encryptService, router, route) {
            _classCallCheck(this, AddStudentComponent);

            this.branchService = branchService;
            this.studentService = studentService;
            this.dateService = dateService;
            this.userService = userService;
            this.toastrService = toastrService;
            this.branchStudentService = branchStudentService;
            this.encryptService = encryptService;
            this.router = router;
            this.route = route; // route.queryParams.subscribe((param: Params) => {
            //   // put the code from `ngOnInit` here
            //   this.ngOnInit();
            // });
          }

          _createClass(AddStudentComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.loading = true;
              this.submit = false;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.studentId = this.studentService.getStudentId();
              this.branchStudentId = this.branchStudentService.getBranchStudentId();
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
              } else if (mode && !this.studentId && !this.branchStudentId) {
                this.showToastr('top-right', 'danger', 'Student Not Found');
                this.router.navigate(['../page-not-found'], {
                  relativeTo: this.route
                });
                return;
              }

              this.alreadyRegisteredUser = false;
              this.categories = [];
              this.getCategories();
              this.studentSearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                })
              });
              this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
                }),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                }),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]
                }),
                birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: []
                }),
                parentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: []
                }),
                parentEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
                }),
                parentPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]
                }),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: []
                })
              });
              this.branchStudentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
                admissionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dateService.getDateString(), {
                  validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                  validators: []
                })
              });

              if (mode && this.studentId && this.branchStudentId) {
                this.branchStudentService.getBranchStudentForEditing(this.branchStudentId, this.studentId).subscribe(function (res) {
                  _this.student = res.student;
                  _this.branchStudent = res.branchStudent;
                  _this.userExist = false;

                  _this.studentSearchForm.patchValue({
                    studentId: _this.student.imsMasterId
                  });

                  _this.studentForm.patchValue({
                    name: _this.student.name,
                    email: _this.student.email,
                    phone: _this.student.phone,
                    parentName: _this.student.parentName,
                    parentEmail: _this.student.parentEmail,
                    parentPhone: _this.student.parentPhone,
                    birthDate: _this.student.birthDate,
                    address: _this.student.address
                  });

                  _this.disableStudentDetails();

                  _this.branchStudentForm.patchValue({
                    category: _this.branchStudent.category,
                    admissionDate: _this.branchStudent.admissionDate,
                    description: _this.branchStudent.description
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
                }, function (error) {
                  _this2.showToastr('top-right', 'danger', error);

                  _this2.loading = false;
                });
              }
            }
          }, {
            key: "checkUser",
            value: function checkUser() {
              var _this3 = this;

              if (this.studentForm.get('email').valid && !this.student) {
                this.userService.checkUser(this.studentForm.value.email).subscribe(function (res) {
                  _this3.userExist = res.exist;
                }, function (error) {});
              }
            }
          }, {
            key: "alreadyRegister",
            value: function alreadyRegister(alreadyRegisteredUser) {
              this.alreadyRegisteredUser = alreadyRegisteredUser;
            }
          }, {
            key: "searchStudent",
            value: function searchStudent() {
              var _this4 = this;

              this.studentSearchForm.markAllAsTouched();

              if (this.studentSearchForm.invalid) {
                this.showToastr('top-right', 'danger', 'Enter Student Id');
                return;
              }

              this.studentId = this.studentSearchForm.value.studentId;
              this.loading = true;
              this.studentService.searchStudent(this.studentId).subscribe(function (student) {
                _this4.student = student;
                _this4.studentId = student.imsMasterId;
                _this4.userExist = false;
                _this4.alreadyRegisteredUser = false;

                _this4.studentSearchForm.patchValue({
                  studentId: _this4.student.imsMasterId
                });

                _this4.studentForm.patchValue({
                  name: _this4.student.name,
                  email: _this4.student.email,
                  phone: _this4.student.phone,
                  parentName: _this4.student.parentName,
                  parentEmail: _this4.student.parentEmail,
                  parentPhone: _this4.student.parentPhone,
                  birthDate: _this4.student.birthDate,
                  address: _this4.student.address
                });

                _this4.disableStudentDetails();

                _this4.loading = false;
              }, function (err) {
                _this4.showToastr('top-right', 'danger', err);

                _this4.studentId = null;
                _this4.loading = false;
              });
            }
          }, {
            key: "enableStudentDetails",
            value: function enableStudentDetails() {
              this.studentForm.get('name').enable();
              this.studentForm.get('email').enable();
              this.studentForm.get('phone').enable();
              this.studentForm.get('parentName').enable();
              this.studentForm.get('parentEmail').enable();
              this.studentForm.get('parentPhone').enable();
              this.studentForm.get('birthDate').enable();
              this.studentForm.get('address').enable();
              this.studentSearchForm.get('studentId').enable();
            }
          }, {
            key: "disableStudentDetails",
            value: function disableStudentDetails() {
              this.studentForm.get('name').disable();
              this.studentForm.get('email').disable();
              this.studentForm.get('phone').disable();
              this.studentForm.get('parentName').disable();
              this.studentForm.get('parentEmail').disable();
              this.studentForm.get('parentPhone').disable();
              this.studentForm.get('birthDate').disable();
              this.studentForm.get('address').disable();
              this.studentSearchForm.get('studentId').disable();
            }
          }, {
            key: "previousStep",
            value: function previousStep() {
              this.stepper.previous();

              if (this.student) {
                this.disableStudentDetails();
              }
            }
          }, {
            key: "studentFormSubmit",
            value: function studentFormSubmit() {
              this.studentForm.markAllAsTouched();

              if (this.studentForm.invalid) {
                this.showToastr('top-right', 'danger', 'Student Details are Required');
                return;
              } else if (this.userExist) {
                this.showToastr('top-right', 'danger', 'User with this email address is already Exist');
                return;
              }

              if (this.student) {
                this.enableStudentDetails();
              }

              this.stepper.next();
            }
          }, {
            key: "branchStudentFormSubmit",
            value: function branchStudentFormSubmit() {
              this.branchStudentForm.markAllAsTouched();

              if (this.studentForm.invalid) {
                this.showToastr('top-right', 'danger', 'Student Branch Details are Required');
                return;
              }

              this.stepper.next();
            }
          }, {
            key: "saveStudent",
            value: function saveStudent() {
              var _this5 = this;

              this.studentForm.markAllAsTouched();
              this.branchStudentForm.markAllAsTouched();

              if (this.studentForm.invalid) {
                this.showToastr('top-right', 'danger', 'Student Details are Required');
                return;
              } else if (this.studentForm.invalid) {
                this.showToastr('top-right', 'danger', 'Student Branch Details are Required');
                return;
              }

              this.submit = true;

              if (!this.studentId && !this.branchStudentId) {
                var newStudent = this.studentForm.value;
                newStudent.password = this.encryptService.encrypt(newStudent.phone, _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].encKey);
                var newBranchStudent = this.branchStudentForm.value;
                newBranchStudent.branch = this.branchId;
                this.studentService.addStudent(newStudent, newBranchStudent).subscribe(function (res) {
                  _this5.showToastr('top-right', 'success', 'New Student Added Successfully');

                  _this5.back();
                }, function (error) {
                  _this5.showToastr('top-right', 'danger', error);

                  _this5.submit = false;
                });
              } else if (this.studentId && !this.branchStudentId) {
                var _newBranchStudent = this.branchStudentForm.value;
                _newBranchStudent.branch = this.branchId;
                _newBranchStudent.student = this.studentId;
                this.branchStudentService.newBranchStudent(_newBranchStudent).subscribe(function (res) {
                  _this5.showToastr('top-right', 'success', 'New Branch Student added Successfully');

                  _this5.back();
                }, function (error) {
                  _this5.showToastr('top-right', 'danger', error);

                  _this5.submit = false;
                });
              } else if (this.studentId && this.branchStudentId) {
                var branchStudent = this.branchStudentForm.value;
                branchStudent._id = this.branchStudentId;
                this.branchStudentService.editBranchStudent(branchStudent).subscribe(function (res) {
                  _this5.showToastr('top-right', 'success', 'Student Updated Successfully');

                  _this5.back();
                }, function (error) {
                  _this5.showToastr('top-right', 'danger', error);

                  _this5.submit = false;
                });
              } else {
                this.showToastr('top-right', 'danger', 'Invalid data');
                this.submit = false;
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
            key: "back",
            value: function back() {
              var type = this.studentService.getStudentType();
              this.router.navigate(['../'], {
                relativeTo: this.route,
                queryParams: {
                  type: type
                }
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.studentService.deleteStudentId();
              this.branchStudentService.deleteBranchStudentId();
            }
          }]);

          return AddStudentComponent;
        }();

        AddStudentComponent.ɵfac = function AddStudentComponent_Factory(t) {
          return new (t || AddStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_branch_student_service__WEBPACK_IMPORTED_MODULE_8__["BranchStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_9__["EncryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]));
        };

        AddStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
          type: AddStudentComponent,
          selectors: [["ngx-add-student"]],
          viewQuery: function AddStudentComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
          },
          decls: 117,
          vars: 30,
          consts: [["type", "button", "nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear", "disableStepNavigation"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-6 col-sm-8", 4, "ngIf"], ["class", "", 3, "formGroup", "submit", 4, "ngIf"], ["label", "Enrollment Details", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-control-group"], ["for", "input-category", 1, "label"], ["id", "input-category", "name", "category", "formControlName", "category", "placeholder", "Select Category", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "input-admission-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-admission-date", "name", "admissionDate", "formControlName", "admissionDate", "placeholder", "admissionDate", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description (Optional)", "fullWidth", ""], [1, "col-6", "text-left"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "click"], ["icon", "arrow-ios-back-outline"], [1, "col-6", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], ["type", "button", "nbButton", "", "size", "small", 1, "", 3, "disabled", "click"], ["nbButton", "", "size", "small", "nbSpinnerStatus", "primary", "nbSpinnerSize", "small", 3, "disabled", "nbSpinner", "click"], ["id", "input-already-registered", "name", "alreadyRegistered", 3, "checked", "checkedChange"], [1, "col-md-6", "col-sm-8"], [1, "", 3, "formGroup", "submit"], ["for", "input-student-student-id", 1, "label"], ["type", "text", "nbInput", "", "id", "input-student-id", "studentId", "studentId", "formControlName", "studentId", "placeholder", "Student Email or IMS Master Id", "fullWidth", "", 3, "status"], ["nbSuffix", "", "nbTooltip", "Fetch", "nbButton", "", "size", "small", "ghost", "", "type", "submit", 4, "ngIf"], ["nbSuffix", "", "nbTooltip", "Fetch", "nbButton", "", "size", "small", "ghost", "", "type", "submit"], ["icon", "arrow-circle-right-outline", "status", "success"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-student-student-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-student-name", "name", "name", "formControlName", "name", "placeholder", "Student Name", "minlength", "3", "maxlength", "30", "fullWidth", "", 3, "status"], ["for", "input-email", 1, "label"], ["type", "email", "nbInput", "", "id", "input-email", "name", "email", "formControlName", "email", "placeholder", "Email address", "fullWidth", "", 3, "status", "input"], ["for", "input-phone", 1, "label"], ["type", "number", "nbInput", "", "id", "input-phone", "name", "phone", "formControlName", "phone", "placeholder", "phone", "minlength", "10", "maxlength", "10", "min", "1000000000", "max", "9999999999", "fullWidth", "", 3, "status"], ["for", "input-birth-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-birth-date", "name", "birthDate", "formControlName", "birthDate", "placeholder", "Birth Date", "fullWidth", "", 3, "max"], ["for", "input-address", 1, "label"], ["type", "text", "nbInput", "", "id", "input-address", "name", "address", "formControlName", "address", "placeholder", "Address (Optional)", "fullWidth", ""], ["for", "input-parent-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-parent-name", "name", "parentName", "formControlName", "parentName", "placeholder", "Parent Name", "minlength", "3", "maxlength", "30", "fullWidth", "", 3, "status"], ["for", "input-parent-email", 1, "label"], ["type", "parentEmail", "nbInput", "", "id", "input-parent-email", "name", "parentEmail", "formControlName", "parentEmail", "placeholder", "Parent Email address", "fullWidth", "", 3, "status"], ["for", "input-parent-phone", 1, "label"], ["type", "number", "nbInput", "", "id", "input-parent-phone", "name", "parentPhone", "formControlName", "parentPhone", "placeholder", "Parent Phone", "minlength", "10", "maxlength", "10", "min", "1000000000", "max", "9999999999", "fullWidth", "", 3, "status"], [1, "col-md-12", "text-right"], [3, "value"]],
          template: function AddStudentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddStudentComponent_Template_button_click_2_listener() {
                return ctx.back();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Back ");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-stepper", 2, 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-step", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddStudentComponent_div_12_Template, 3, 1, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddStudentComponent_div_13_Template, 9, 4, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddStudentComponent_form_14_Template, 55, 14, "form", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nb-step", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddStudentComponent_Template_form_ngSubmit_16_listener() {
                return ctx.branchStudentFormSubmit();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Branch Category:");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nb-select", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nb-option", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Select Category");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddStudentComponent_nb_option_25_Template, 2, 2, "nb-option", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddStudentComponent_ng_container_26_Template, 2, 1, "ng-container", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Admission Date:");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddStudentComponent_ng_container_32_Template, 2, 1, "ng-container", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Description:");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "textarea", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddStudentComponent_Template_button_click_41_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "nb-icon", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Next");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "nb-icon", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "nb-step", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "table", 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, AddStudentComponent_tr_55_Template, 5, 1, "tr", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Student Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Phone");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Address");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Parent Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Parent Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Parent Phone");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Category");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Admission Date");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Description");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "button", 33);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddStudentComponent_Template_button_click_109_listener() {
                return ctx.previousStep();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "nb-icon", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "prev");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "button", 34);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddStudentComponent_Template_button_click_114_listener() {
                return ctx.saveStudent();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Submit");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", !ctx.student ? "Add New Student" : "Edit Student " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 28, ctx.student.name), " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("linear", true)("disableStepNavigation", true);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.studentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.student);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alreadyRegisteredUser || ctx.student);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.alreadyRegisteredUser);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepControl", ctx.branchStudentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.branchStudentForm);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.branchStudentForm.get("category").touched ? ctx.branchStudentForm.get("category").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchStudentForm.get("category").invalid && ctx.branchStudentForm.get("category").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("status", ctx.branchStudentForm.get("admissionDate").touched ? ctx.branchStudentForm.get("admissionDate").invalid ? "danger" : "success" : "basic");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchStudentForm.get("admissionDate").invalid && ctx.branchStudentForm.get("admissionDate").touched);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.studentSearchForm.value.studentId);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentForm.value.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentForm.value.email);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentForm.value.phone);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentForm.value.address ? ctx.studentForm.value.address : "--");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.studentForm.value.parentName ? ctx.studentForm.value.parentName : "--");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.studentForm.value.parentEmail ? ctx.studentForm.value.parentEmail : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.studentForm.value.parentPhone ? ctx.studentForm.value.parentPhone : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getCategory(ctx.branchStudentForm.value.category));

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.branchStudentForm.value.admissionDate));

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.branchStudentForm.value.description ? ctx.studentForm.value.description : "--", " ");

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submit);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submit)("nbSpinner", ctx.submit);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSuffixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"]],
          styles: [""]
        });
        return AddStudentComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/student/add-student/add-student.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/employee/branch/student/add-student/add-student.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AddStudentModule */

    /***/
    function srcAppEmployeeBranchStudentAddStudentAddStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStudentModule", function () {
        return AddStudentModule;
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


      var _add_student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-student-routing.module */
      "./src/app/employee/branch/student/add-student/add-student-routing.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _add_student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-student.component */
      "./src/app/employee/branch/student/add-student/add-student.component.ts");

      var AddStudentModule = /*@__PURE__*/function () {
        var AddStudentModule = function AddStudentModule() {
          _classCallCheck(this, AddStudentModule);
        };

        AddStudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AddStudentModule
        });
        AddStudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AddStudentModule_Factory(t) {
            return new (t || AddStudentModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddStudentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
        });
        return AddStudentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddStudentModule, {
          declarations: [_add_student_component__WEBPACK_IMPORTED_MODULE_5__["AddStudentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_student_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddStudentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();