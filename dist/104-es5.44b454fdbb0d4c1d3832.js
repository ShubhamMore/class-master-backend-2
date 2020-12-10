function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104], {
  /***/
  "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material-routing.module.ts":
  /*!**************************************************************************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material-routing.module.ts ***!
    \**************************************************************************************************************************************/

  /*! exports provided: ManageCourseMaterialRoutingModule */

  /***/
  function srcAppEmployeeBranchManageBranchCourseCourseMaterialManageCourseMaterialManageCourseMaterialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCourseMaterialRoutingModule", function () {
      return ManageCourseMaterialRoutingModule;
    });
    /* harmony import */


    var _manage_course_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-course-material.component */
    "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.component.ts");
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
      component: _manage_course_material_component__WEBPACK_IMPORTED_MODULE_0__["ManageCourseMaterialComponent"]
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

    var ManageCourseMaterialRoutingModule =
    /*@__PURE__*/
    function () {
      var ManageCourseMaterialRoutingModule = function ManageCourseMaterialRoutingModule() {
        _classCallCheck(this, ManageCourseMaterialRoutingModule);
      };

      ManageCourseMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ManageCourseMaterialRoutingModule
      });
      ManageCourseMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ManageCourseMaterialRoutingModule_Factory(t) {
          return new (t || ManageCourseMaterialRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
      return ManageCourseMaterialRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageCourseMaterialRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: ManageCourseMaterialComponent */

  /***/
  function srcAppEmployeeBranchManageBranchCourseCourseMaterialManageCourseMaterialManageCourseMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCourseMaterialComponent", function () {
      return ManageCourseMaterialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_course_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../../services/course-material.service */
    "./src/app/services/course-material.service.ts");
    /* harmony import */


    var _services_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../../../services/shared-services/storage.service */
    "./src/app/services/shared-services/storage.service.ts");
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

    function ManageCourseMaterialComponent_small_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("of ", ctx_r0.course.basicDetails.courseName, "");
      }
    }

    function ManageCourseMaterialComponent_nb_select_18_nb_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject_r6._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r6.subject);
      }
    }

    function ManageCourseMaterialComponent_nb_select_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageCourseMaterialComponent_nb_select_18_Template_nb_select_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.getCourseMaterials($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageCourseMaterialComponent_nb_select_18_nb_option_3_Template, 2, 2, "nb-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.subject);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.course.subjects);
      }
    }

    function ManageCourseMaterialComponent_ng_container_22_div_1_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseMaterialComponent_ng_container_22_div_1_tr_15_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var courseMaterial_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.viewCourseMaterial(courseMaterial_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseMaterialComponent_ng_container_22_div_1_tr_15_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var courseMaterial_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r17.changeCourseMaterialStatus(courseMaterial_r13._id, !courseMaterial_r13.status, i_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseMaterialComponent_ng_container_22_div_1_tr_15_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var courseMaterial_r13 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.deleteCourseMaterial(courseMaterial_r13._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var courseMaterial_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r14 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](courseMaterial_r13.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getSubject(courseMaterial_r13.subject));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getFileSize(courseMaterial_r13.fileSize));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", !courseMaterial_r13.status ? "warning" : "danger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !courseMaterial_r13.status ? "Activate" : "Deactivate", " ");
      }
    }

    function ManageCourseMaterialComponent_ng_container_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "File Size");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManageCourseMaterialComponent_ng_container_22_div_1_tr_15_Template, 18, 6, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.courseMaterials);
      }
    }

    function ManageCourseMaterialComponent_ng_container_22_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Course Material Available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManageCourseMaterialComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageCourseMaterialComponent_ng_container_22_div_1_Template, 16, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageCourseMaterialComponent_ng_container_22_ng_template_2_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.courseMaterials.length > 0)("ngIfElse", _r10);
      }
    }

    function ManageCourseMaterialComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ManageCourseMaterialComponent =
    /*@__PURE__*/
    function () {
      var ManageCourseMaterialComponent =
      /*#__PURE__*/
      function () {
        function ManageCourseMaterialComponent(branchService, courseService, courseMaterialService, storageService, toastrService, router, route) {
          _classCallCheck(this, ManageCourseMaterialComponent);

          this.branchService = branchService;
          this.courseService = courseService;
          this.courseMaterialService = courseMaterialService;
          this.storageService = storageService;
          this.toastrService = toastrService;
          this.router = router;
          this.route = route;
        }

        _createClass(ManageCourseMaterialComponent, [{
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

            this.subject = '';
            this.courseMaterials = [];
            this.courseService.getCourseData().subscribe(function (course) {
              _this.course = course;

              if (!_this.course) {
                _this.router.navigate(['../'], {
                  relativeTo: _this.route
                });

                return;
              }

              _this.getCourseMaterials(_this.subject);
            });
          }
        }, {
          key: "getFileSize",
          value: function getFileSize(fileSize) {
            var size = this.storageService.convertByteToUnit(fileSize);
            return size.value.toFixed(1) + ' ' + size.unit;
          }
        }, {
          key: "getCourseMaterials",
          value: function getCourseMaterials(subject) {
            var _this2 = this;

            this.loading = true;
            this.subject = subject;
            this.courseMaterialService.getCourseMaterials(this.branchId, this.course.basicDetails.category, this.course._id, subject).subscribe(function (courseMaterials) {
              _this2.courseMaterials = courseMaterials;
              _this2.loading = false;
            }, function (err) {
              _this2.loading = false;
            });
          }
        }, {
          key: "addCourseMaterial",
          value: function addCourseMaterial() {
            this.router.navigate(['../add'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "deleteCourseMaterial",
          value: function deleteCourseMaterial(id, i) {
            var _this3 = this;

            this.loading = true;
            this.courseMaterialService.deleteCourseMaterial(id).subscribe(function (res) {
              _this3.courseMaterials.splice(i, 1);

              _this3.showToastr('top-right', 'success', "CourseMaterial Deleted Successfully!");

              _this3.loading = false;
            }, function (err) {
              _this3.showToastr('top-right', 'danger', err);

              _this3.loading = false;
            });
          }
        }, {
          key: "viewCourseMaterial",
          value: function viewCourseMaterial(courseMaterial) {
            this.courseMaterialService.setCourseMaterialId(courseMaterial._id);
            this.courseMaterialService.setCourseMaterialData(courseMaterial);
            this.router.navigate(['../view'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "getSubject",
          value: function getSubject(subjectId) {
            var subject = this.course.subjects.find(function (curSubject) {
              return curSubject._id === subjectId;
            });

            if (subject) {
              return subject.subject;
            }

            return '--';
          }
        }, {
          key: "changeCourseMaterialStatus",
          value: function changeCourseMaterialStatus(id, status, i) {
            var _this4 = this;

            this.loading = true;
            this.courseMaterialService.changeCourseMaterialStatus(id, status).subscribe(function (res) {
              _this4.courseMaterials[i].status = status;

              _this4.showToastr('top-right', 'success', "CourseMaterial ".concat(status ? 'Activated' : 'Deactivated', " Successfully!"));

              _this4.loading = false;
            }, function (err) {
              _this4.showToastr('top-right', 'danger', err);

              _this4.loading = false;
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

        return ManageCourseMaterialComponent;
      }();

      ManageCourseMaterialComponent.ɵfac = function ManageCourseMaterialComponent_Factory(t) {
        return new (t || ManageCourseMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_material_service__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      ManageCourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ManageCourseMaterialComponent,
        selectors: [["ngx-manage-course-material"]],
        decls: 25,
        vars: 4,
        consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [4, "ngIf"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "status", "primary", "fullWidth", "", 3, "click"], ["icon", "plus-circle-outline"], [1, "col-md-9"], [1, "col-md-3"], ["id", "select-subject", "name", "subject", "fullWidth", "", "placeholder", "Select Subject", 3, "selected", "selectedChange", 4, "ngIf"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["id", "select-subject", "name", "subject", "fullWidth", "", "placeholder", "Select Subject", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["CourseMaterials", ""], [1, "table-responsive"], [1, "table"], ["colspan", "3"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "info", 3, "click"], ["nbButton", "", "size", "small", 3, "status", "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
        template: function ManageCourseMaterialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Course Material ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageCourseMaterialComponent_small_6_Template, 2, 1, "small", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageCourseMaterialComponent_Template_button_click_8_listener() {
              return ctx.addCourseMaterial();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add Course Material ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageCourseMaterialComponent_nb_select_18_Template, 4, 2, "nb-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-body", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ManageCourseMaterialComponent_ng_container_22_Template, 4, 2, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ManageCourseMaterialComponent_ng_template_23_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: [""]
      });
      return ManageCourseMaterialComponent;
    }();
    /***/

  },

  /***/
  "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.module.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.module.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: ManageCourseMaterialModule */

  /***/
  function srcAppEmployeeBranchManageBranchCourseCourseMaterialManageCourseMaterialManageCourseMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCourseMaterialModule", function () {
      return ManageCourseMaterialModule;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _manage_course_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manage-course-material.component */
    "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _manage_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manage-course-material-routing.module */
    "./src/app/employee/branch/manage-branch/course/course-material/manage-course-material/manage-course-material-routing.module.ts");

    var ManageCourseMaterialModule =
    /*@__PURE__*/
    function () {
      var ManageCourseMaterialModule = function ManageCourseMaterialModule() {
        _classCallCheck(this, ManageCourseMaterialModule);
      };

      ManageCourseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ManageCourseMaterialModule
      });
      ManageCourseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ManageCourseMaterialModule_Factory(t) {
          return new (t || ManageCourseMaterialModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageCourseMaterialRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"]]]
      });
      return ManageCourseMaterialModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageCourseMaterialModule, {
        declarations: [_manage_course_material_component__WEBPACK_IMPORTED_MODULE_1__["ManageCourseMaterialComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_course_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageCourseMaterialRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"]]
      });
    })();
    /***/

  }
}]);