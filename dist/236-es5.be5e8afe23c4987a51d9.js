(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[236], {
    /***/
    "./src/app/student/branch/course/lecture/view-lecture/view-lecture-routing.module.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/student/branch/course/lecture/view-lecture/view-lecture-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ViewLectureRoutingModule */

    /***/
    function srcAppStudentBranchCourseLectureViewLectureViewLectureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewLectureRoutingModule", function () {
        return ViewLectureRoutingModule;
      });
      /* harmony import */


      var _view_lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-lecture.component */
      "./src/app/student/branch/course/lecture/view-lecture/view-lecture.component.ts");
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
        component: _view_lecture_component__WEBPACK_IMPORTED_MODULE_0__["ViewLectureComponent"]
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
        redirectTo: 'page-not-found'
      }];

      var ViewLectureRoutingModule = /*@__PURE__*/function () {
        var ViewLectureRoutingModule = function ViewLectureRoutingModule() {
          _classCallCheck(this, ViewLectureRoutingModule);
        };

        ViewLectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ViewLectureRoutingModule
        });
        ViewLectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ViewLectureRoutingModule_Factory(t) {
            return new (t || ViewLectureRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
        return ViewLectureRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewLectureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/student/branch/course/lecture/view-lecture/view-lecture.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/student/branch/course/lecture/view-lecture/view-lecture.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ViewLectureComponent */

    /***/
    function srcAppStudentBranchCourseLectureViewLectureViewLectureComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewLectureComponent", function () {
        return ViewLectureComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ViewLectureComponent = /*@__PURE__*/function () {
        var ViewLectureComponent = /*#__PURE__*/function () {
          function ViewLectureComponent() {
            _classCallCheck(this, ViewLectureComponent);
          }

          _createClass(ViewLectureComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ViewLectureComponent;
        }();

        ViewLectureComponent.ɵfac = function ViewLectureComponent_Factory(t) {
          return new (t || ViewLectureComponent)();
        };

        ViewLectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ViewLectureComponent,
          selectors: [["ngx-view-lecture"]],
          decls: 2,
          vars: 0,
          template: function ViewLectureComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-lecture works!");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [""]
        });
        return ViewLectureComponent;
      }();
      /***/

    },

    /***/
    "./src/app/student/branch/course/lecture/view-lecture/view-lecture.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/student/branch/course/lecture/view-lecture/view-lecture.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ViewLectureModule */

    /***/
    function srcAppStudentBranchCourseLectureViewLectureViewLectureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewLectureModule", function () {
        return ViewLectureModule;
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


      var _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-lecture-routing.module */
      "./src/app/student/branch/course/lecture/view-lecture/view-lecture-routing.module.ts");
      /* harmony import */


      var _view_lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-lecture.component */
      "./src/app/student/branch/course/lecture/view-lecture/view-lecture.component.ts");

      var ViewLectureModule = /*@__PURE__*/function () {
        var ViewLectureModule = function ViewLectureModule() {
          _classCallCheck(this, ViewLectureModule);
        };

        ViewLectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: ViewLectureModule
        });
        ViewLectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function ViewLectureModule_Factory(t) {
            return new (t || ViewLectureModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewLectureRoutingModule"]]]
        });
        return ViewLectureModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewLectureModule, {
          declarations: [_view_lecture_component__WEBPACK_IMPORTED_MODULE_3__["ViewLectureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewLectureRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();