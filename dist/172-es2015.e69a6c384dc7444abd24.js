(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[172],{

/***/ "./src/app/institute/branch/lecture/view-lecture/view-lecture-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/view-lecture/view-lecture-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewLectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLectureRoutingModule", function() { return ViewLectureRoutingModule; });
/* harmony import */ var _view_lecture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-lecture.component */ "./src/app/institute/branch/lecture/view-lecture/view-lecture.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _view_lecture_component__WEBPACK_IMPORTED_MODULE_0__["ViewLectureComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    { path: '**', redirectTo: 'page-not-found' },
];
class ViewLectureRoutingModule {
}
ViewLectureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ViewLectureRoutingModule });
ViewLectureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ViewLectureRoutingModule_Factory(t) { return new (t || ViewLectureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ViewLectureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewLectureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/view-lecture/view-lecture.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/view-lecture/view-lecture.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLectureComponent", function() { return ViewLectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ViewLectureComponent {
    constructor() {
    }
    ngOnInit() { }
}
ViewLectureComponent.ɵfac = function ViewLectureComponent_Factory(t) { return new (t || ViewLectureComponent)(); };
ViewLectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewLectureComponent, selectors: [["ngx-view-lecture"]], decls: 2, vars: 0, template: function ViewLectureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-lecture works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-view-lecture',
                templateUrl: './view-lecture.component.html',
                styleUrls: ['./view-lecture.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/view-lecture/view-lecture.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/view-lecture/view-lecture.module.ts ***!
  \******************************************************************************/
/*! exports provided: ViewLectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLectureModule", function() { return ViewLectureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-lecture-routing.module */ "./src/app/institute/branch/lecture/view-lecture/view-lecture-routing.module.ts");
/* harmony import */ var _view_lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-lecture.component */ "./src/app/institute/branch/lecture/view-lecture/view-lecture.component.ts");





class ViewLectureModule {
}
ViewLectureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewLectureModule });
ViewLectureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewLectureModule_Factory(t) { return new (t || ViewLectureModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewLectureRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewLectureModule, { declarations: [_view_lecture_component__WEBPACK_IMPORTED_MODULE_3__["ViewLectureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewLectureRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewLectureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_lecture_component__WEBPACK_IMPORTED_MODULE_3__["ViewLectureComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _view_lecture_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewLectureRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);