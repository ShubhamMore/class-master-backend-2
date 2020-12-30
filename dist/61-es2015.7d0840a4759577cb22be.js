(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./src/app/admin/institutes/institutes-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/institutes/institutes-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InstitutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutesRoutingModule", function() { return InstitutesRoutingModule; });
/* harmony import */ var _institutes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./institutes.component */ "./src/app/admin/institutes/institutes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _institutes_component__WEBPACK_IMPORTED_MODULE_0__["InstitutesComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
let InstitutesRoutingModule = /*@__PURE__*/ (() => {
    class InstitutesRoutingModule {
    }
    InstitutesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InstitutesRoutingModule });
    InstitutesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function InstitutesRoutingModule_Factory(t) { return new (t || InstitutesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return InstitutesRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InstitutesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/admin/institutes/institutes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/institutes/institutes.component.ts ***!
  \**********************************************************/
/*! exports provided: InstitutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutesComponent", function() { return InstitutesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InstitutesComponent = /*@__PURE__*/ (() => {
    class InstitutesComponent {
        constructor() {
        }
        ngOnInit() { }
    }
    InstitutesComponent.ɵfac = function InstitutesComponent_Factory(t) { return new (t || InstitutesComponent)(); };
    InstitutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstitutesComponent, selectors: [["ngx-institutes"]], decls: 2, vars: 0, template: function InstitutesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Institutes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [""] });
    return InstitutesComponent;
})();


/***/ }),

/***/ "./src/app/admin/institutes/institutes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/institutes/institutes.module.ts ***!
  \*******************************************************/
/*! exports provided: InstitutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutesModule", function() { return InstitutesModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _institutes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./institutes-routing.module */ "./src/app/admin/institutes/institutes-routing.module.ts");
/* harmony import */ var _institutes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./institutes.component */ "./src/app/admin/institutes/institutes.component.ts");







let InstitutesModule = /*@__PURE__*/ (() => {
    class InstitutesModule {
    }
    InstitutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InstitutesModule });
    InstitutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InstitutesModule_Factory(t) { return new (t || InstitutesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _institutes_routing_module__WEBPACK_IMPORTED_MODULE_4__["InstitutesRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            ]] });
    return InstitutesModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InstitutesModule, { declarations: [_institutes_component__WEBPACK_IMPORTED_MODULE_5__["InstitutesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _institutes_routing_module__WEBPACK_IMPORTED_MODULE_4__["InstitutesRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] });
})();


/***/ })

}]);