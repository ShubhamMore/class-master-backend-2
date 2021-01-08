(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54], {
    /***/
    "./src/app/employee/branch/lecture/manage-lecture/manage-lecture-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/employee/branch/lecture/manage-lecture/manage-lecture-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ManageLectureRoutingModule */

    /***/
    function srcAppEmployeeBranchLectureManageLectureManageLectureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageLectureRoutingModule", function () {
        return ManageLectureRoutingModule;
      });
      /* harmony import */


      var _manage_lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-lecture.component */
      "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.component.ts");
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
        component: _manage_lecture_component__WEBPACK_IMPORTED_MODULE_0__["ManageLectureComponent"]
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
        redirectTo: 'page-not-found'
      }];

      var ManageLectureRoutingModule = /*@__PURE__*/function () {
        var ManageLectureRoutingModule = function ManageLectureRoutingModule() {
          _classCallCheck(this, ManageLectureRoutingModule);
        };

        ManageLectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageLectureRoutingModule
        });
        ManageLectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageLectureRoutingModule_Factory(t) {
            return new (t || ManageLectureRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ManageLectureRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageLectureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/employee/branch/lecture/manage-lecture/manage-lecture.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ManageLectureComponent */

    /***/
    function srcAppEmployeeBranchLectureManageLectureManageLectureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageLectureComponent", function () {
        return ManageLectureComponent;
      });
      /* harmony import */


      var _online_lecture_online_lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./online-lecture/online-lecture.component */
      "./src/app/employee/branch/lecture/manage-lecture/online-lecture/online-lecture.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/lecture.service */
      "./src/app/services/lecture.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function ManageLectureComponent_small_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.batch.basicDetails.batchName);
        }
      }

      function ManageLectureComponent_nb_card_body_9_div_3_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_3_tr_3_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var lecture_r11 = ctx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r12.markAttendance(lecture_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Attendance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_3_tr_3_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var lecture_r11 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r14.lectureMaterial(lecture_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Study Material ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_3_tr_3_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var lecture_r11 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r15.questionAnswers(lecture_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Q&A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lecture_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.getTime(lecture_r11.startTime, lecture_r11.endTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.getSubject(lecture_r11.subject));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lecture_r11.topic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lecture_r11.teacher);
        }
      }

      function ManageLectureComponent_nb_card_body_9_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManageLectureComponent_nb_card_body_9_div_3_tr_3_Template, 18, 4, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.classroomLectures);
        }
      }

      function ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var lecture_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r18.startOnlineLecture(lecture_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Go Live ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var lecture_r17 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r20.markAttendance(lecture_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Attendance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var lecture_r17 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r21.lectureMaterial(lecture_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Study Material ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var lecture_r17 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r22.questionAnswers(lecture_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Q&A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lecture_r17 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.getTime(lecture_r17.startTime, lecture_r17.endTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.getSubject(lecture_r17.subject));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lecture_r17.topic);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lecture_r17.teacher);
        }
      }

      function ManageLectureComponent_nb_card_body_9_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManageLectureComponent_nb_card_body_9_div_5_tr_3_Template, 21, 4, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.onlineLectures);
        }
      }

      function ManageLectureComponent_nb_card_body_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-tabset", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ManageLectureComponent_nb_card_body_9_div_3_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManageLectureComponent_nb_card_body_9_div_5_Template, 4, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.classroomLectures.length > 0)("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.onlineLectures.length > 0)("ngIfElse", _r4);
        }
      }

      function ManageLectureComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Classroom Lecture");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ManageLectureComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Online Lecture");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ManageLectureComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ManageLectureComponent = /*@__PURE__*/function () {
        var ManageLectureComponent = /*#__PURE__*/function () {
          function ManageLectureComponent(branchService, lectureService, courseService, batchService, dateService, router, route, windowService, toastrService) {
            _classCallCheck(this, ManageLectureComponent);

            this.branchService = branchService;
            this.lectureService = lectureService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.dateService = dateService;
            this.router = router;
            this.route = route;
            this.windowService = windowService;
            this.toastrService = toastrService;
          }

          _createClass(ManageLectureComponent, [{
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

              this.branchService.getCategoryData().subscribe(function (category) {
                _this.category = category;
              });
              this.courseService.getCourseData().subscribe(function (course) {
                _this.course = course;
              });
              this.batchService.getBatchData().subscribe(function (batch) {
                _this.batch = batch;
              });
              this.date = this.lectureService.getSearchDate();

              if (!this.date) {
                this.date = this.dateService.getDateString();
              }

              this.onlineLectures = [];
              this.classroomLectures = [];
              this.getLecture();
            }
          }, {
            key: "getTime",
            value: function getTime(startTime, endTime) {
              startTime = this.dateService.formatTime(startTime);
              endTime = this.dateService.formatTime(endTime);
              return startTime + ' - ' + endTime;
            }
          }, {
            key: "getSubject",
            value: function getSubject(subject) {
              var mySubject = this.course.subjects.find(function (curSubject) {
                return curSubject._id === subject;
              });

              if (!mySubject) {
                return '--';
              }

              return mySubject.subject;
            }
          }, {
            key: "markAttendance",
            value: function markAttendance(lecture) {
              this.lectureService.setLectureId(lecture._id);
              this.lectureService.setLectureData(lecture);
              this.router.navigate(['../attendance'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "startOnlineLecture",
            value: function startOnlineLecture(lecture) {
              if (lecture.sessionType === 'online') {
                this.lectureService.setLectureId(lecture._id);
                this.windowService.open(_online_lecture_online_lecture_component__WEBPACK_IMPORTED_MODULE_0__["OnlineLectureComponent"], {
                  title: lecture.topic,
                  context: {}
                });
              } else {
                this.showToastr('top-right', 'danger', 'This os not an Online Lecture');
              }
            }
          }, {
            key: "lectureMaterial",
            value: function lectureMaterial(lecture) {
              this.lectureService.setLectureId(lecture._id);
              this.lectureService.setLectureData(lecture);
              this.router.navigate(['../material'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "questionAnswers",
            value: function questionAnswers(lecture) {
              this.lectureService.setLectureId(lecture._id);
              this.lectureService.setLectureData(lecture);
              this.router.navigate(['../q&a'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "getLecture",
            value: function getLecture() {
              var _this2 = this;

              this.loading = true;
              this.lectureService.getLectures(this.branchId, this.category._id, this.course._id, this.batch._id, this.date).subscribe(function (lectures) {
                _this2.onlineLectures = lectures.filter(function (lecture) {
                  return lecture.sessionType === 'online';
                });
                _this2.classroomLectures = lectures.filter(function (lecture) {
                  return lecture.sessionType === 'classroom';
                });
                _this2.loading = false;
              }, function (error) {
                _this2.showToastr('top-right', 'danger', error);

                _this2.loading = false;
              });
            }
          }, {
            key: "dateChanged",
            value: function dateChanged() {
              if (this.date) {
                this.lectureService.setSearchDate(this.date);
                this.getLecture();
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
          }]);

          return ManageLectureComponent;
        }();

        ManageLectureComponent.ɵfac = function ManageLectureComponent_Factory(t) {
          return new (t || ManageLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbWindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbToastrService"]));
        };

        ManageLectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ManageLectureComponent,
          selectors: [["ngx-manage-lecture"]],
          decls: 16,
          vars: 4,
          consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [4, "ngIf"], [1, "col-md-3", "col-sm-4"], ["type", "date", "nbInput", "", "fullWidth", "", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf", "ngIfElse"], ["noClassroomLecture", ""], ["noOnlineLecture", ""], ["loadingTemplate", ""], ["fullWidth", ""], ["tabTitle", "Classroom Lecture"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["tabTitle", "Online Lecture"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["status", "primary", "nbButton", "", "size", "small", 3, "click"], ["status", "warning", "nbButton", "", "size", "small", 3, "click"], ["status", "success", "nbButton", "", "size", "small", 3, "click"], ["status", "info", "nbButton", "", "size", "small", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
          template: function ManageLectureComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Lecture of ");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ManageLectureComponent_small_6_Template, 2, 1, "small", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ManageLectureComponent_Template_input_ngModelChange_8_listener($event) {
                return ctx.date = $event;
              })("change", function ManageLectureComponent_Template_input_change_8_listener() {
                return ctx.dateChanged();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManageLectureComponent_nb_card_body_9_Template, 6, 4, "nb-card-body", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManageLectureComponent_ng_template_10_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManageLectureComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ManageLectureComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.batch);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r6);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]],
          styles: [".online[_ngcontent-%COMP%] {\n  color: #00d68f;\n}"]
        });
        return ManageLectureComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/employee/branch/lecture/manage-lecture/manage-lecture.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ManageLectureModule */

    /***/
    function srcAppEmployeeBranchLectureManageLectureManageLectureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageLectureModule", function () {
        return ManageLectureModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _online_lecture_online_lecture_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./online-lecture/online-lecture.component */
      "./src/app/employee/branch/lecture/manage-lecture/online-lecture/online-lecture.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-lecture-routing.module */
      "./src/app/employee/branch/lecture/manage-lecture/manage-lecture-routing.module.ts");
      /* harmony import */


      var _manage_lecture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./manage-lecture.component */
      "./src/app/employee/branch/lecture/manage-lecture/manage-lecture.component.ts");

      var ManageLectureModule = /*@__PURE__*/function () {
        var ManageLectureModule = function ManageLectureModule() {
          _classCallCheck(this, ManageLectureModule);
        };

        ManageLectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
          type: ManageLectureModule
        });
        ManageLectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
          factory: function ManageLectureModule_Factory(t) {
            return new (t || ManageLectureModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageLectureRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
        });
        return ManageLectureModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ManageLectureModule, {
          declarations: [_manage_lecture_component__WEBPACK_IMPORTED_MODULE_7__["ManageLectureComponent"], _online_lecture_online_lecture_component__WEBPACK_IMPORTED_MODULE_1__["OnlineLectureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _manage_lecture_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageLectureRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/lecture/manage-lecture/online-lecture/online-lecture.component.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/employee/branch/lecture/manage-lecture/online-lecture/online-lecture.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: OnlineLectureComponent */

    /***/
    function srcAppEmployeeBranchLectureManageLectureOnlineLectureOnlineLectureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlineLectureComponent", function () {
        return OnlineLectureComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/lecture.service */
      "./src/app/services/lecture.service.ts");
      /* harmony import */


      var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../authentication/auth/auth-service/auth.service */
      "./src/app/authentication/auth/auth-service/auth.service.ts");
      /* harmony import */


      var _services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/shared-services/encrypt.service */
      "./src/app/services/shared-services/encrypt.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../pipe/safe-url.pipe */
      "./src/app/pipe/safe-url.pipe.ts");

      function OnlineLectureComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "safeUrl");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.zoomURL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      var OnlineLectureComponent = /*@__PURE__*/function () {
        var OnlineLectureComponent = /*#__PURE__*/function () {
          function OnlineLectureComponent(lectureService, authService, encryptService) {
            _classCallCheck(this, OnlineLectureComponent);

            this.lectureService = lectureService;
            this.authService = authService;
            this.encryptService = encryptService;
          }

          _createClass(OnlineLectureComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;
              var lecture = this.lectureService.getLectureId();
              var user = this.authService.getUserData().imsMasterId;
              this.zoomURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].zoomLiveURL + '?lecture=' + lecture + '&user=' + user;
              this.loading = false;
            }
          }]);

          return OnlineLectureComponent;
        }();

        OnlineLectureComponent.ɵfac = function OnlineLectureComponent_Factory(t) {
          return new (t || OnlineLectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_encrypt_service__WEBPACK_IMPORTED_MODULE_4__["EncryptService"]));
        };

        OnlineLectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: OnlineLectureComponent,
          selectors: [["ngx-online-lecture"]],
          decls: 1,
          vars: 1,
          consts: [["class", "zoom-meeting", 4, "ngIf"], [1, "zoom-meeting"], ["width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "true", "allow", "camera; microphone;", 3, "src"]],
          template: function OnlineLectureComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OnlineLectureComponent_div_0_Template, 3, 3, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          pipes: [_pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__["SafeUrlPipe"]],
          styles: [".zoom-meeting[_ngcontent-%COMP%] {\n  width: 90vw;\n  height: 80vh;\n}"]
        });
        return OnlineLectureComponent;
      }();
      /***/

    }
  }]);
})();