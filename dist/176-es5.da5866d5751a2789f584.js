function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176], {
  /***/
  "./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: CourseMaterialRoutingModule */

  /***/
  function srcAppInstituteBranchManageBranchCourseCourseMaterialCourseMaterialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseMaterialRoutingModule", function () {
      return CourseMaterialRoutingModule;
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


    var _course_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./course-material.component */
    "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts");

    var routes = [{
      path: '',
      component: _course_material_component__WEBPACK_IMPORTED_MODULE_2__["CourseMaterialComponent"],
      children: [{
        path: 'manage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(177)]).then(__webpack_require__.bind(null,
          /*! ./manage-course-material/manage-course-material.module */
          "./src/app/institute/branch/manage-branch/course/course-material/manage-course-material/manage-course-material.module.ts")).then(function (m) {
            return m.ManageCourseMaterialModule;
          });
        }
      }, {
        path: 'add',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e(175)]).then(__webpack_require__.bind(null,
          /*! ./add-course-material/add-course-material.module */
          "./src/app/institute/branch/manage-branch/course/course-material/add-course-material/add-course-material.module.ts")).then(function (m) {
            return m.AddCourseMaterialModule;
          });
        }
      }, {
        path: 'view',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e(3), __webpack_require__.e("common"), __webpack_require__.e(178)]).then(__webpack_require__.bind(null,
          /*! ./view-course-material/view-course-material.module */
          "./src/app/institute/branch/manage-branch/course/course-material/view-course-material/view-course-material.module.ts")).then(function (m) {
            return m.ViewCourseMaterialModule;
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

    var CourseMaterialRoutingModule = function CourseMaterialRoutingModule() {
      _classCallCheck(this, CourseMaterialRoutingModule);
    };

    CourseMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CourseMaterialRoutingModule
    });
    CourseMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CourseMaterialRoutingModule_Factory(t) {
        return new (t || CourseMaterialRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseMaterialRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseMaterialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: CourseMaterialComponent */

  /***/
  function srcAppInstituteBranchManageBranchCourseCourseMaterialCourseMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseMaterialComponent", function () {
      return CourseMaterialComponent;
    });
    /* harmony import */


    var _services_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../../../services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CourseMaterialComponent_router_outlet_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    }

    var CourseMaterialComponent =
    /*#__PURE__*/
    function () {
      function CourseMaterialComponent(branchService, courseService, router, route) {
        _classCallCheck(this, CourseMaterialComponent);

        this.branchService = branchService;
        this.courseService = courseService;
        this.router = router;
        this.route = route;
      }

      _createClass(CourseMaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.branchId = this.branchService.getBranchId();
          this.courseId = this.courseService.getCourseId();

          if (!this.branchId || !this.courseId) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          var course = this.courseService.getCourseData();

          if (!course) {
            this.router.navigate(['../'], {
              relativeTo: this.route
            });
            return;
          }

          this.loading = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.courseService.deleteCourseId();
          this.courseService.deleteCourseData();
        }
      }]);

      return CourseMaterialComponent;
    }();

    CourseMaterialComponent.ɵfac = function CourseMaterialComponent_Factory(t) {
      return new (t || CourseMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    CourseMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CourseMaterialComponent,
      selectors: [["ngx-course-material"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function CourseMaterialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CourseMaterialComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ngx-course-material',
          templateUrl: './course-material.component.html',
          styleUrls: ['./course-material.component.scss']
        }]
      }], function () {
        return [{
          type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
        }, {
          type: _services_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/institute/branch/manage-branch/course/course-material/course-material.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/institute/branch/manage-branch/course/course-material/course-material.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: CourseMaterialModule */

  /***/
  function srcAppInstituteBranchManageBranchCourseCourseMaterialCourseMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseMaterialModule", function () {
      return CourseMaterialModule;
    });
    /* harmony import */


    var _course_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./course-material.component */
    "./src/app/institute/branch/manage-branch/course/course-material/course-material.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./course-material-routing.module */
    "./src/app/institute/branch/manage-branch/course/course-material/course-material-routing.module.ts");

    var CourseMaterialModule = function CourseMaterialModule() {
      _classCallCheck(this, CourseMaterialModule);
    };

    CourseMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CourseMaterialModule
    });
    CourseMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CourseMaterialModule_Factory(t) {
        return new (t || CourseMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CourseMaterialModule, {
        declarations: [_course_material_component__WEBPACK_IMPORTED_MODULE_0__["CourseMaterialComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_course_material_component__WEBPACK_IMPORTED_MODULE_0__["CourseMaterialComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_material_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseMaterialRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);