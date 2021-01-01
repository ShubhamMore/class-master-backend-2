function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[195], {
  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-routing.module.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-routing.module.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentRoutingModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentRoutingModule", function () {
      return StudentCourseInstallmentRoutingModule;
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


    var _student_course_installment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-course-installment.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.component.ts");

    var routes = [{
      path: '',
      component: _student_course_installment_component__WEBPACK_IMPORTED_MODULE_2__["StudentCourseInstallmentComponent"],
      children: [{
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(193)]).then(__webpack_require__.bind(null,
          /*! ./manage-student-course-installment/manage-student-course-installment.module */
          "./src/app/institute/branch/student/student-course/student-course-installment/manage-student-course-installment/manage-student-course-installment.module.ts")).then(function (m) {
            return m.ManageStudentCourseInstallmentModule;
          });
        }
      }, {
        path: 'collect',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(34)]).then(__webpack_require__.bind(null,
          /*! ./collect-student-course-installment/collect-student-course-installment.module */
          "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.module.ts")).then(function (m) {
            return m.CollectStudentCourseInstallmentModule;
          });
        }
      }, {
        path: 'edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(34)]).then(__webpack_require__.bind(null,
          /*! ./collect-student-course-installment/collect-student-course-installment.module */
          "./src/app/institute/branch/student/student-course/student-course-installment/collect-student-course-installment/collect-student-course-installment.module.ts")).then(function (m) {
            return m.CollectStudentCourseInstallmentModule;
          });
        }
      }, {
        path: 'receipt',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(194)]).then(__webpack_require__.bind(null,
          /*! ./student-course-installment-receipt/student-course-installment-receipt.module */
          "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-receipt/student-course-installment-receipt.module.ts")).then(function (m) {
            return m.StudentCourseInstallmentReceiptModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
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
      }]
    }];

    var StudentCourseInstallmentRoutingModule =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentRoutingModule = function StudentCourseInstallmentRoutingModule() {
        _classCallCheck(this, StudentCourseInstallmentRoutingModule);
      };

      StudentCourseInstallmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StudentCourseInstallmentRoutingModule
      });
      StudentCourseInstallmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StudentCourseInstallmentRoutingModule_Factory(t) {
          return new (t || StudentCourseInstallmentRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return StudentCourseInstallmentRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseInstallmentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentComponent */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentComponent", function () {
      return StudentCourseInstallmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../../services/student-course-installment.service */
    "./src/app/services/student-course-installment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StudentCourseInstallmentComponent_router_outlet_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    }

    var StudentCourseInstallmentComponent =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentComponent =
      /*#__PURE__*/
      function () {
        function StudentCourseInstallmentComponent(branchService, // private toastrService: NbToastrService,
        // private studentService: StudentService,
        courseService, studentCourseInstallmentService, router, route) {
          _classCallCheck(this, StudentCourseInstallmentComponent);

          this.branchService = branchService;
          this.courseService = courseService;
          this.studentCourseInstallmentService = studentCourseInstallmentService;
          this.router = router;
          this.route = route;
        }

        _createClass(StudentCourseInstallmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId(); // this.categoryId = this.branchService.getCategoryId();
            // this.courseId = this.courseService.getCourseId();
            // this.studentId = this.studentService.getStudentId();
            // this.studentCourseInstallmentId = this.studentCourseInstallmentService.getStudentCourseInstallmentId();

            if (!this.branchId //  ||
            // !this.categoryId ||
            // !this.courseId ||
            // !this.studentId ||
            // !this.studentCourseInstallmentId
            ) {
                this.router.navigate(['../'], {
                  relativeTo: this.route
                });
                return;
              }

            this.loading = false; //   this.studentCourseInstallmentService
            //     .getStudentCourseInstallment(this.studentCourseInstallmentId)
            //     .subscribe(
            //       (studentCourseInstallment: StudentCourseInstallmentModel) => {
            //         this.studentCourseInstallmentService.setStudentCourseInstallmentData(
            //           studentCourseInstallment,
            //         );
            //         this.loading = false;
            //       },
            //       (err: any) => {
            //         this.showToastr('top-right', 'danger', err);
            //         this.router.navigate(['../'], { relativeTo: this.route });
            //       },
            //     );
            // }
            // private showToastr(position: any, status: any, message: string) {
            //   this.toastrService.show(status, message, {
            //     position,
            //     status,
            //   });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.courseService.deleteCourseId();
            this.studentCourseInstallmentService.deleteStudentCourseInstallmentId();
            this.studentCourseInstallmentService.deleteStudentCourseInstallmentData();
          }
        }]);

        return StudentCourseInstallmentComponent;
      }();

      StudentCourseInstallmentComponent.ɵfac = function StudentCourseInstallmentComponent_Factory(t) {
        return new (t || StudentCourseInstallmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_course_installment_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      StudentCourseInstallmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StudentCourseInstallmentComponent,
        selectors: [["ngx-student-course-installment"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function StudentCourseInstallmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentCourseInstallmentComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: [""]
      });
      return StudentCourseInstallmentComponent;
    }();
    /***/

  },

  /***/
  "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.module.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.module.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: StudentCourseInstallmentModule */

  /***/
  function srcAppInstituteBranchStudentStudentCourseStudentCourseInstallmentStudentCourseInstallmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseInstallmentModule", function () {
      return StudentCourseInstallmentModule;
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


    var _student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student-course-installment-routing.module */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment-routing.module.ts");
    /* harmony import */


    var _student_course_installment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student-course-installment.component */
    "./src/app/institute/branch/student/student-course/student-course-installment/student-course-installment.component.ts");

    var StudentCourseInstallmentModule =
    /*@__PURE__*/
    function () {
      var StudentCourseInstallmentModule = function StudentCourseInstallmentModule() {
        _classCallCheck(this, StudentCourseInstallmentModule);
      };

      StudentCourseInstallmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StudentCourseInstallmentModule
      });
      StudentCourseInstallmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StudentCourseInstallmentModule_Factory(t) {
          return new (t || StudentCourseInstallmentModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseInstallmentRoutingModule"]]]
      });
      return StudentCourseInstallmentModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentCourseInstallmentModule, {
        declarations: [_student_course_installment_component__WEBPACK_IMPORTED_MODULE_3__["StudentCourseInstallmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _student_course_installment_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentCourseInstallmentRoutingModule"]]
      });
    })();
    /***/

  }
}]);