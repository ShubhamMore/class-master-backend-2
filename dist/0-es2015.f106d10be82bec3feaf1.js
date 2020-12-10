(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/shared/page-not-found/page-not-found-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"],
    },
];
let PageNotFoundRoutingModule = /*@__PURE__*/ (() => {
    class PageNotFoundRoutingModule {
    }
    PageNotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
    PageNotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return PageNotFoundRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




let PageNotFoundComponent = /*@__PURE__*/ (() => {
    class PageNotFoundComponent {
        constructor(router, route) {
            this.router = router;
            this.route = route;
        }
        ngOnInit() { }
        goToBack() {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
    }
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["ngx-page-not-found"]], decls: 11, vars: 0, consts: [[1, "row"], [1, "col-md-12"], [1, "flex-centered", "col-xl-4", "col-lg-6", "col-md-8", "col-sm-12"], [1, "title"], [1, "sub-title"], ["nbButton", "", "size", "small", "fullWidth", "", "type", "button", 1, "home-button", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 Page Not Found");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The page you were looking for doesn't exist");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_9_listener() { return ctx.goToBack(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Take me Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"]], styles: [".flex-centered[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\nnb-card-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.sub-title[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  display: block;\r\n  margin-bottom: 3rem;\r\n}\r\n.home-button[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n}"] });
    return PageNotFoundComponent;
})();


/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.module.ts ***!
  \****************************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/shared/page-not-found/page-not-found-routing.module.ts");







let PageNotFoundModule = /*@__PURE__*/ (() => {
    class PageNotFoundModule {
    }
    PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
    PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"]]] });
    return PageNotFoundModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"]] }); })();


/***/ })

}]);