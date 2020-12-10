(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./src/app/admin/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsComponent"],
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
let SettingsRoutingModule = /*@__PURE__*/ (() => {
    class SettingsRoutingModule {
    }
    SettingsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
    SettingsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return SettingsRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/admin/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_admin_zoom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin-zoom.service */ "./src/app/admin/services/admin-zoom.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SettingsComponent_ng_container_16_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Zoom Access Token is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function SettingsComponent_ng_container_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsComponent_ng_container_16_p_1_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.zoomKeysForm.get("accessToken").errors == null ? null : ctx_r0.zoomKeysForm.get("accessToken").errors.required);
    }
}
function SettingsComponent_ng_container_25_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Zoom Secret Token is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function SettingsComponent_ng_container_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsComponent_ng_container_25_p_1_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.zoomKeysForm.get("secretToken").errors == null ? null : ctx_r1.zoomKeysForm.get("secretToken").errors.required);
    }
}
let SettingsComponent = /*@__PURE__*/ (() => {
    class SettingsComponent {
        constructor(router, route, toastrService, adminZoomService) {
            this.router = router;
            this.route = route;
            this.toastrService = toastrService;
            this.adminZoomService = adminZoomService;
        }
        ngOnInit() {
            this.loading = true;
            this.zoomShowSecret = false;
            this.zoomKeysForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                accessToken: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] }),
                secretToken: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required] }),
            });
            this.adminZoomService.getAdminZoomKeys().subscribe((zoomKeys) => {
                if (zoomKeys) {
                    this.zoomKeysForm.patchValue({
                        accessToken: zoomKeys.accessKey,
                        secretToken: zoomKeys.secretKey,
                    });
                }
                this.loading = false;
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        saveZoomKeys() {
            this.zoomKeysForm.markAllAsTouched();
            if (this.zoomKeysForm.invalid) {
                this.showToastr('top-right', 'danger', 'Please Enter valid Zoom Keys');
                return;
            }
            const keys = {
                accessKey: this.zoomKeysForm.value.accessToken,
                secretKey: this.zoomKeysForm.value.secretToken,
            };
            this.adminZoomService.saveAdminZoomKeys(keys).subscribe((res) => {
                this.adminZoomService.getAdminZoomAuthLink().subscribe((responce) => {
                    const popup = window.open(responce.authLink, '_blank', 'toolbar,scrollbars,resizable,top=200,left=500,width=400,height=400');
                    // setTimeout(() => {
                    //   popup.close();
                    // }, 3000);
                });
                this.showToastr('top-right', 'success', 'Institute Zoom Keys Saved Successfully!');
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        toggleShowZoomSecret() {
            this.zoomShowSecret = !this.zoomShowSecret;
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
        back() {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
    }
    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_zoom_service__WEBPACK_IMPORTED_MODULE_4__["AdminZoomService"])); };
    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["ngx-settings"]], decls: 29, vars: 8, consts: [["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, "row"], [1, "col-md-8", "col-sm-10", "col-12", "mx-auto"], [3, "formGroup", "submit"], [1, "col-md-6", "col-12"], [1, "form-control-group"], ["for", "input-access-token", 1, "label"], ["type", "text", "nbInput", "", "id", "input-access-token", "name", "accessToken", "formControlName", "accessToken", "placeholder", "Zoom Access Token", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input-secret-token", 1, "label"], ["nbInput", "", "id", "input-secret-token", "name", "secretToken", "formControlName", "secretToken", "placeholder", "Zoom Secret Token", "fullWidth", "", 3, "type", "status"], ["type", "button", "nbSuffixnbButton", "", "size", "small", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"], [1, "col-12", "mt-3"], ["type", "submit", "nbButton", "", "size", "small", "status", "primary", 1, "float-right"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function SettingsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_2_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Settings");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SettingsComponent_Template_form_submit_9_listener() { return ctx.saveZoomKeys(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Zoom Access Token:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SettingsComponent_ng_container_16_Template, 2, 1, "ng-container", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Zoom Secret Token:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nb-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_23_listener() { return ctx.toggleShowZoomSecret(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "nb-icon", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SettingsComponent_ng_container_25_Template, 2, 1, "ng-container", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Save ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.zoomKeysForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.zoomKeysForm.get("accessToken").touched ? ctx.zoomKeysForm.get("accessToken").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zoomKeysForm.get("accessToken").invalid && ctx.zoomKeysForm.get("accessToken").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.zoomShowSecret ? "text" : "password")("status", ctx.zoomKeysForm.get("secretToken").touched ? ctx.zoomKeysForm.get("secretToken").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.zoomShowSecret ? "eye-outline" : "eye-off-2-outline");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.zoomShowSecret ? "show secret" : "hide secret");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.zoomKeysForm.get("secretToken").invalid && ctx.zoomKeysForm.get("secretToken").touched);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"]], styles: [""] });
    return SettingsComponent;
})();


/***/ }),

/***/ "./src/app/admin/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/admin/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.component */ "./src/app/admin/settings/settings.component.ts");








let SettingsModule = /*@__PURE__*/ (() => {
    class SettingsModule {
    }
    SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
    SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsRoutingModule"],
            ]] });
    return SettingsModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsRoutingModule"]] });
})();


/***/ })

}]);