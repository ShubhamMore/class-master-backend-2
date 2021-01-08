(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165], {
    /***/
    "./src/app/institute/branch/exam/test/manage-test/manage-test-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/manage-test/manage-test-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ManageTestRoutingModule */

    /***/
    function srcAppInstituteBranchExamTestManageTestManageTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTestRoutingModule", function () {
        return ManageTestRoutingModule;
      });
      /* harmony import */


      var _manage_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-test.component */
      "./src/app/institute/branch/exam/test/manage-test/manage-test.component.ts");
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
        component: _manage_test_component__WEBPACK_IMPORTED_MODULE_0__["ManageTestComponent"]
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

      var ManageTestRoutingModule = /*@__PURE__*/function () {
        var ManageTestRoutingModule = function ManageTestRoutingModule() {
          _classCallCheck(this, ManageTestRoutingModule);
        };

        ManageTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageTestRoutingModule
        });
        ManageTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageTestRoutingModule_Factory(t) {
            return new (t || ManageTestRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ManageTestRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/institute/branch/exam/test/manage-test/manage-test.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/manage-test/manage-test.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ManageTestComponent */

    /***/
    function srcAppInstituteBranchExamTestManageTestManageTestComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTestComponent", function () {
        return ManageTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../../services/shared-services/date.service */
      "./src/app/services/shared-services/date.service.ts");
      /* harmony import */


      var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/course.service */
      "./src/app/services/course.service.ts");
      /* harmony import */


      var _services_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/batch.service */
      "./src/app/services/batch.service.ts");
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

      function ManageTestComponent_nb_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r5.category);
        }
      }

      function ManageTestComponent_nb_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var course_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", course_r6._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r6.basicDetails.courseName);
        }
      }

      function ManageTestComponent_ng_container_19_div_1_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageTestComponent_ng_container_19_div_1_tr_17_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var batch_r11 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r13.manageExam(batch_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Manage Exam ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var batch_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](batch_r11.basicDetails.batchName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getCategory(batch_r11.category));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getCourse(batch_r11.course));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.dateService.formatDate(batch_r11.basicDetails.startDate));
        }
      }

      function ManageTestComponent_ng_container_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageTestComponent_ng_container_19_div_1_tr_17_Template, 14, 5, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.batches);
        }
      }

      function ManageTestComponent_ng_container_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Batches Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManageTestComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageTestComponent_ng_container_19_div_1_Template, 18, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageTestComponent_ng_container_19_ng_template_2_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.batches.length > 0)("ngIfElse", _r8);
        }
      }

      function ManageTestComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ManageTestComponent = /*@__PURE__*/function () {
        var ManageTestComponent = /*#__PURE__*/function () {
          function ManageTestComponent(branchService, dateService, courseService, batchService, toastrService, router, route) {
            _classCallCheck(this, ManageTestComponent);

            this.branchService = branchService;
            this.dateService = dateService;
            this.courseService = courseService;
            this.batchService = batchService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
          }

          _createClass(ManageTestComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.loading = true;
              this.branchId = this.branchService.getBranchId();

              if (!this.branchId) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

              this.categories = [];
              this.courses = [];
              this.myCourses = [];
              this.batches = [];
              this.category = '';
              this.course = '';
              this.getCategories();
              this.getCourses();
            }
          }, {
            key: "getCategories",
            value: function getCategories() {
              var _this = this;

              this.branchService.getBranchData().subscribe(function (branch) {
                if (branch) {
                  _this.categories = branch.categories;
                }
              });

              if (!this.categories) {
                this.branchService.getBranch(this.branchId).subscribe(function (branch) {
                  _this.branchService.setBranchData(branch);

                  _this.categories = branch.categories;

                  _this.getBatches(_this.category, _this.course);
                }, function (error) {
                  _this.showToastr('top-right', 'danger', error); // this.loading = false;

                });
              } else {
                this.getBatches(this.category, this.course);
              }
            }
          }, {
            key: "getCourses",
            value: function getCourses() {
              var _this2 = this;

              this.courseService.getCoursesData().subscribe(function (courses) {
                _this2.courses = courses;
              });
            }
          }, {
            key: "onSelectCategory",
            value: function onSelectCategory(category) {
              this.category = category;
              this.course = '';
              this.myCourses = this.courses.filter(function (course) {
                return course.basicDetails.category === category;
              });
              this.getBatches(this.category, this.course);
            }
          }, {
            key: "onSelectCourse",
            value: function onSelectCourse(course) {
              this.course = course;
              this.getBatches(this.category, this.course);
            }
          }, {
            key: "getBatches",
            value: function getBatches(category, course) {
              var _this3 = this;

              this.loading = true;
              this.batchService.getBatches(this.branchId, category, course).subscribe(function (batches) {
                _this3.batches = batches;
                _this3.loading = false;
              }, function (error) {
                _this3.showToastr('top-right', 'danger', error);

                _this3.loading = false;
              });
            }
          }, {
            key: "manageExam",
            value: function manageExam(batch) {
              this.batchService.setBatchId(batch._id);
              this.batchService.setBatchData(batch);
              this.courseService.setCourseId(batch.course);
              var myCourse = this.courses.find(function (curCourse) {
                return curCourse._id === batch.course;
              });
              this.courseService.setCourseData(myCourse);
              this.branchService.setCategoryId(batch.category);
              var myCategory = this.categories.find(function (curCategory) {
                return curCategory._id === batch.category;
              });
              this.branchService.setCategoryData(myCategory);
              this.router.navigate(['../batch-test'], {
                relativeTo: this.route
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
          }]);

          return ManageTestComponent;
        }();

        ManageTestComponent.ɵfac = function ManageTestComponent_Factory(t) {
          return new (t || ManageTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
        };

        ManageTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ManageTestComponent,
          selectors: [["ngx-manage-test"]],
          decls: 22,
          vars: 6,
          consts: [[1, "row"], [1, "col-md-6", "col-sm-4"], [1, "col-md-3", "col-sm-4"], ["id", "select-category", "name", "category", "fullWidth", "", "placeholder", "Select Category", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-course", "name", "course", "fullWidth", "", "placeholder", "Select Course", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBatches", ""], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], [1, "text-center", "pt-5", "pb-5"]],
          template: function ManageTestComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Classroom Exams");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-select", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageTestComponent_Template_nb_select_selectedChange_7_listener($event) {
                return ctx.onSelectCategory($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-option", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Categories");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ManageTestComponent_nb_option_10_Template, 2, 2, "nb-option", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-select", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageTestComponent_Template_nb_select_selectedChange_12_listener($event) {
                return ctx.onSelectCourse($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-option", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All Courses");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManageTestComponent_nb_option_15_Template, 2, 2, "nb-option", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-body", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ManageTestComponent_ng_container_19_Template, 4, 2, "ng-container", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ManageTestComponent_ng_template_20_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.category);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.course);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myCourses);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"]],
          styles: [""]
        });
        return ManageTestComponent;
      }();
      /***/

    },

    /***/
    "./src/app/institute/branch/exam/test/manage-test/manage-test.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/institute/branch/exam/test/manage-test/manage-test.module.ts ***!
      \******************************************************************************/

    /*! exports provided: ManageTestModule */

    /***/
    function srcAppInstituteBranchExamTestManageTestManageTestModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageTestModule", function () {
        return ManageTestModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _manage_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./manage-test.component */
      "./src/app/institute/branch/exam/test/manage-test/manage-test.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _manage_test_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./manage-test-routing.module */
      "./src/app/institute/branch/exam/test/manage-test/manage-test-routing.module.ts");

      var ManageTestModule = /*@__PURE__*/function () {
        var ManageTestModule = function ManageTestModule() {
          _classCallCheck(this, ManageTestModule);
        };

        ManageTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: ManageTestModule
        });
        ManageTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function ManageTestModule_Factory(t) {
            return new (t || ManageTestModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"]]]
        });
        return ManageTestModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageTestModule, {
          declarations: [_manage_test_component__WEBPACK_IMPORTED_MODULE_1__["ManageTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _manage_test_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageTestRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"]]
        });
      })();
      /***/

    }
  }]);
})();