(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[124], {
    /***/
    "./src/app/employee/branch/student/manage-student/manage-student-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/employee/branch/student/manage-student/manage-student-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ManageStudentRoutingModule */

    /***/
    function srcAppEmployeeBranchStudentManageStudentManageStudentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentRoutingModule", function () {
        return ManageStudentRoutingModule;
      });
      /* harmony import */


      var _manage_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-student.component */
      "./src/app/employee/branch/student/manage-student/manage-student.component.ts");
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
        component: _manage_student_component__WEBPACK_IMPORTED_MODULE_0__["ManageStudentComponent"]
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

      var ManageStudentRoutingModule = /*@__PURE__*/function () {
        var ManageStudentRoutingModule = function ManageStudentRoutingModule() {
          _classCallCheck(this, ManageStudentRoutingModule);
        };

        ManageStudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageStudentRoutingModule
        });
        ManageStudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageStudentRoutingModule_Factory(t) {
            return new (t || ManageStudentRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ManageStudentRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/employee/branch/student/manage-student/manage-student.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/employee/branch/student/manage-student/manage-student.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ManageStudentComponent */

    /***/
    function srcAppEmployeeBranchStudentManageStudentManageStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentComponent", function () {
        return ManageStudentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/branch.service */
      "./src/app/services/branch.service.ts");
      /* harmony import */


      var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../../services/student.service */
      "./src/app/services/student.service.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _services_branch_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/branch-student.service */
      "./src/app/services/branch-student.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ManageStudentComponent_nb_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.category);
        }
      }

      function ManageStudentComponent_ng_container_21_div_1_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudentComponent_ng_container_21_div_1_tr_15_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var branchStudent_r9 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.branchStudentCourses(branchStudent_r9._id, branchStudent_r9.student, branchStudent_r9.category);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Courses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudentComponent_ng_container_21_div_1_tr_15_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var branchStudent_r9 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r13.branchAddStudentCourses(branchStudent_r9._id, branchStudent_r9.student, branchStudent_r9.category);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nb-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudentComponent_ng_container_21_div_1_tr_15_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var branchStudent_r9 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r14.editBranchStudent(branchStudent_r9._id, branchStudent_r9.student);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudentComponent_ng_container_21_div_1_tr_15_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var branchStudent_r9 = ctx.$implicit;
            var i_r10 = ctx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.changeBranchStudentStatus(branchStudent_r9._id, !branchStudent_r9.status, i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var branchStudent_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branchStudent_r9.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getCategory(branchStudent_r9.category));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", !branchStudent_r9.status ? "warning" : "danger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !branchStudent_r9.status ? "Activate" : "Deactivate", " ");
        }
      }

      function ManageStudentComponent_ng_container_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ManageStudentComponent_ng_container_21_div_1_tr_15_Template, 19, 5, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.filteredBranchStudents);
        }
      }

      function ManageStudentComponent_ng_container_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Students Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ManageStudentComponent_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageStudentComponent_ng_container_21_div_1_Template, 16, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageStudentComponent_ng_container_21_ng_template_2_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filteredBranchStudents.length > 0)("ngIfElse", _r6);
        }
      }

      function ManageStudentComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ManageStudentComponent = /*@__PURE__*/function () {
        var ManageStudentComponent = /*#__PURE__*/function () {
          function ManageStudentComponent(branchService, studentService, toastrService, branchStudentService, router, route) {
            var _this = this;

            _classCallCheck(this, ManageStudentComponent);

            this.branchService = branchService;
            this.studentService = studentService;
            this.toastrService = toastrService;
            this.branchStudentService = branchStudentService;
            this.router = router;
            this.route = route;
            this.route.queryParams.subscribe(function (param) {
              // put the code from `ngOnInit` here
              _this.ngOnInit();
            });
          }

          _createClass(ManageStudentComponent, [{
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

              this.route.queryParams.subscribe(function (param) {
                _this2.type = param.type;
              });

              if (this.type !== 'active' && this.type !== 'inactive') {
                this.router.navigate(['../manage'], {
                  relativeTo: this.route,
                  queryParams: {
                    type: 'active'
                  }
                });
                return;
              }

              this.studentService.setStudentType(this.type);
              this.branchStudents = [];
              this.filteredBranchStudents = [];
              this.categories = [];
              this.category = '';
              this.getCategories();
              this.getStudents(this.category);
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
            key: "getStudents",
            value: function getStudents(category) {
              var _this4 = this;

              this.loading = true;
              this.branchStudentService.getBranchStudentNameIds(this.branchId, category, this.type).subscribe(function (branchStudents) {
                _this4.branchStudents = branchStudents;
                _this4.filteredBranchStudents = branchStudents;
                _this4.loading = false;
              }, function (err) {
                _this4.showToastr('top-right', 'danger', err);

                _this4.loading = false;
              });
            }
          }, {
            key: "searchStudent",
            value: function searchStudent(student) {
              student = student.trim().toLowerCase();

              if (student) {
                this.filteredBranchStudents = this.branchStudents.filter(function (branchStudent) {
                  return branchStudent.name.toLowerCase().includes(student);
                });
              } else {
                this.filteredBranchStudents = _toConsumableArray(this.branchStudents);
              }
            }
          }, {
            key: "editBranchStudent",
            value: function editBranchStudent(id, student) {
              this.studentService.setStudentId(student);
              this.branchStudentService.setBranchStudentId(id);
              this.router.navigate(['../edit'], {
                relativeTo: this.route,
                queryParams: {
                  mode: 'edit'
                }
              });
            }
          }, {
            key: "branchStudentCourses",
            value: function branchStudentCourses(id, student, category) {
              this.studentService.setStudentId(student);
              this.branchService.setCategoryId(category);
              this.branchStudentService.setBranchStudentId(id);
              this.router.navigate(['../course'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "branchAddStudentCourses",
            value: function branchAddStudentCourses(id, student, category) {
              this.studentService.setStudentId(student);
              this.branchService.setCategoryId(category);
              this.branchStudentService.setBranchStudentId(id);
              this.router.navigate(['../course/add'], {
                relativeTo: this.route
              });
            }
          }, {
            key: "changeBranchStudentStatus",
            value: function changeBranchStudentStatus(id, status, i) {
              var _this5 = this;

              this.branchStudentService.changeBranchStudentStatus(id, status).subscribe(function (res) {
                _this5.branchStudents.splice(i, 1);

                _this5.loading = false;
              }, function (err) {
                _this5.loading = false;
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
            key: "showToastr",
            value: function showToastr(position, status, message) {
              this.toastrService.show(status, message, {
                position: position,
                status: status
              });
            }
          }]);

          return ManageStudentComponent;
        }();

        ManageStudentComponent.ɵfac = function ManageStudentComponent_Factory(t) {
          return new (t || ManageStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_student_service__WEBPACK_IMPORTED_MODULE_4__["BranchStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
        };

        ManageStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ManageStudentComponent,
          selectors: [["ngx-manage-student"]],
          decls: 24,
          vars: 7,
          consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["id", "select-category", "name", "category", "fullWidth", "", "placeholder", "Select Category", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "body-container"], [1, "col-md-6", "col-sm-8", "col-12"], ["nbPrefix", "", "icon", "search-outline", "pack", "eva"], ["type", "text", "nbInput", "", "shape", "round", "placeholder", "Search", "fullWidth", "", 3, "input"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noBranchStudents", ""], [1, "table-responsive"], [1, "table"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [1, "btn-group"], ["nbButton", "", "size", "small", "status", "success", "nbPrefix", "", 3, "click"], ["nbButton", "", "size", "small", "nbTooltip", "Add Course", "nbSuffix", "", "status", "success", 1, "", 3, "click"], ["icon", "plus-outline"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbButton", "", "size", "small", 1, "", 3, "status", "click"], [1, "text-center", "pt-5", "pb-5"]],
          template: function ManageStudentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-select", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageStudentComponent_Template_nb_select_selectedChange_8_listener($event) {
                return ctx.getStudents($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageStudentComponent_nb_option_11_Template, 2, 2, "nb-option", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-body", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-form-field");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nb-icon", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ManageStudentComponent_Template_input_input_17_listener($event) {
                return ctx.searchStudent($event.target.value);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ManageStudentComponent_ng_container_21_Template, 4, 2, "ng-container", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ManageStudentComponent_ng_template_22_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.type), " Students");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.category);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSuffixDirective"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
          styles: [""]
        });
        return ManageStudentComponent;
      }();
      /***/

    },

    /***/
    "./src/app/employee/branch/student/manage-student/manage-student.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/employee/branch/student/manage-student/manage-student.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ManageStudentModule */

    /***/
    function srcAppEmployeeBranchStudentManageStudentManageStudentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageStudentModule", function () {
        return ManageStudentModule;
      });
      /* harmony import */


      var _manage_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./manage-student.component */
      "./src/app/employee/branch/student/manage-student/manage-student.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _manage_student_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./manage-student-routing.module */
      "./src/app/employee/branch/student/manage-student/manage-student-routing.module.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

      var ManageStudentModule = /*@__PURE__*/function () {
        var ManageStudentModule = function ManageStudentModule() {
          _classCallCheck(this, ManageStudentModule);
        };

        ManageStudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ManageStudentModule
        });
        ManageStudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ManageStudentModule_Factory(t) {
            return new (t || ManageStudentModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_student_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"]]]
        });
        return ManageStudentModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudentModule, {
          declarations: [_manage_student_component__WEBPACK_IMPORTED_MODULE_0__["ManageStudentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manage_student_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageStudentRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"]]
        });
      })();
      /***/

    }
  }]);
})();