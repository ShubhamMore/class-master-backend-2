(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./src/app/admin/institutes/branches/history/history-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/institutes/branches/history/history-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component */ "./src/app/admin/institutes/branches/history/history.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _history_component__WEBPACK_IMPORTED_MODULE_0__["HistoryComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
let HistoryRoutingModule = /*@__PURE__*/ (() => {
    class HistoryRoutingModule {
    }
    HistoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HistoryRoutingModule });
    HistoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HistoryRoutingModule_Factory(t) { return new (t || HistoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return HistoryRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/admin/institutes/branches/history/history.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/institutes/branches/history/history.component.ts ***!
  \************************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _plan_type_plan_type_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plan-type/plan-type.component */ "./src/app/admin/institutes/branches/history/plan-type/plan-type.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_institute_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/institute.service */ "./src/app/admin/services/institute.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function HistoryComponent_div_9_div_23_tr_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const category_r8 = ctx.$implicit;
        const i_r9 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r9 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r8.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r8.status ? "Active" : "Inactive");
    }
}
function HistoryComponent_div_9_div_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HistoryComponent_div_9_div_23_tr_11_Template, 7, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.branch.categories);
    }
}
function HistoryComponent_div_9_div_28_tr_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const curHistory_r11 = ctx.$implicit;
        const i_r12 = ctx.index;
        const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r12 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](curHistory_r11.planType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", curHistory_r11.amount, "/-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.dateService.formatDate(curHistory_r11.activationDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.dateService.formatDate(curHistory_r11.expiryDate));
    }
}
function HistoryComponent_div_9_div_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Plan Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Activation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HistoryComponent_div_9_div_28_tr_14_Template, 11, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.history);
    }
}
function HistoryComponent_div_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Branch Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoryComponent_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.changeBranchStatus(!ctx_r13.branch.status); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HistoryComponent_div_9_div_23_Template, 12, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "History:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HistoryComponent_div_9_div_28_Template, 15, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.branch.basicDetails.branchName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx_r0.branch.status ? "danger" : "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.branch.status ? "Deactivate" : "Activate Now", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.basicDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.branch.basicDetails.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getAddress(ctx_r0.branch.address), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.branch.categories.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.history.length > 0)("ngIfElse", _r3);
    }
}
function HistoryComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function HistoryComponent_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Branch History Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
let HistoryComponent = /*@__PURE__*/ (() => {
    class HistoryComponent {
        constructor(instituteService, toastrService, dialogService, dateService, router, route) {
            this.instituteService = instituteService;
            this.toastrService = toastrService;
            this.dialogService = dialogService;
            this.dateService = dateService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.instituteService.getInstitute().subscribe((institute) => {
                if (!institute) {
                    this.showToastr('top right', 'danger', 'Invalid Institute');
                    return;
                }
                this.institute = institute;
                this.instituteService.getBranch().subscribe((branch) => {
                    if (!branch) {
                        this.showToastr('top right', 'danger', 'Invalid Institute');
                        return;
                    }
                    this.branch = branch;
                    this.instituteService.getInstituteBranchHistory(branch._id).subscribe((history) => {
                        this.history = history;
                        this.loading = false;
                    }, (error) => {
                        this.showToastr('top right', 'danger', error);
                        this.loading = false;
                    });
                });
            });
        }
        getAddress(address) {
            const address2 = address.address2 ? address.address2 + ', ' : '';
            return (address.address1 +
                ', ' +
                address2 +
                address.city +
                ' - ' +
                address.pinCode +
                ', ' +
                address.state);
        }
        changeBranchStatus(status) {
            if (status) {
                this.openPlanTypeDialog();
            }
            else {
                this.deactivateBranch();
            }
        }
        openPlanTypeDialog() {
            this.dialogService
                .open(_plan_type_plan_type_component__WEBPACK_IMPORTED_MODULE_0__["PlanTypeComponent"], {
                context: {},
            })
                .onClose.subscribe((membershipPlan) => membershipPlan && this.activateBranch(membershipPlan));
        }
        activateBranch(membershipPlan) {
            if (!membershipPlan) {
                this.showToastr('top right', 'danger', 'Invalid Membership Plan');
                return;
            }
            this.loading = true;
            this.instituteService
                .activateInstituteBranch(this.branch._id, membershipPlan.name, membershipPlan.price)
                .subscribe((res) => {
                this.branch.status = true;
                this.loading = false;
            }, (error) => {
                this.showToastr('top right', 'danger', error);
                this.loading = false;
            });
        }
        deactivateBranch() {
            this.loading = true;
            this.instituteService.deactivateInstituteBranch(this.branch._id).subscribe((res) => {
                this.branch.status = false;
                this.loading = false;
            }, (error) => {
                this.showToastr('top right', 'danger', error);
                this.loading = false;
            });
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
    HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_institute_service__WEBPACK_IMPORTED_MODULE_2__["InstituteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["ngx-history"]], decls: 14, vars: 2, consts: [[1, "row"], [1, "col-md-12"], ["type", "button", "size", "small", "nbButton", "", "status", "warning", 1, "float-right", 3, "click"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingData", ""], ["noHistory", ""], [1, "col-sm-6", "col-12"], ["nbButton", "", "size", "small", "fullWidth", "", 1, "", 3, "status", "click"], [1, "col-md-6", "col-12"], [1, "col-12"], [1, "col-md-3", "col-sm-5", "col-12"], ["class", "col-md-9 col-sm-7 col-12", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "col-md-9", "col-sm-7", "col-12"], [1, "table-responsive"], [1, "table", "table-sm"], [4, "ngFor", "ngForOf"], [1, "table"], [1, "pt-5", "pb-5", "text-center"]], template: function HistoryComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_4_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Branch Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HistoryComponent_div_9_Template, 29, 9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HistoryComponent_ng_template_10_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HistoryComponent_ng_template_12_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [""] });
    return HistoryComponent;
})();


/***/ }),

/***/ "./src/app/admin/institutes/branches/history/history.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/institutes/branches/history/history.module.ts ***!
  \*********************************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/admin/institutes/branches/history/history-routing.module.ts");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.component */ "./src/app/admin/institutes/branches/history/history.component.ts");
/* harmony import */ var _plan_type_plan_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-type/plan-type.component */ "./src/app/admin/institutes/branches/history/plan-type/plan-type.component.ts");







let HistoryModule = /*@__PURE__*/ (() => {
    class HistoryModule {
    }
    HistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HistoryModule });
    HistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HistoryModule_Factory(t) { return new (t || HistoryModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
            ]] });
    return HistoryModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HistoryModule, { declarations: [_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"], _plan_type_plan_type_component__WEBPACK_IMPORTED_MODULE_5__["PlanTypeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"]] });
})();


/***/ }),

/***/ "./src/app/admin/institutes/branches/history/plan-type/plan-type.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/institutes/branches/history/plan-type/plan-type.component.ts ***!
  \************************************************************************************/
/*! exports provided: PlanTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTypeComponent", function() { return PlanTypeComponent; });
/* harmony import */ var _models_membership_plan_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../models/membership-plan.model */ "./src/app/models/membership-plan.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/membership.service */ "./src/app/services/membership.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PlanTypeComponent_div_7_div_2_tr_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlanTypeComponent_div_7_div_2_tr_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const membership_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.selectPlanType(membership_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const membership_r7 = ctx.$implicit;
        const i_r8 = ctx.index;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r8 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, membership_r7.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", membership_r7.duration, " Month/s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r6.getAmount(membership_r7.price), "/-");
    }
}
function PlanTypeComponent_div_7_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Membership Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PlanTypeComponent_div_7_div_2_tr_14_Template, 13, 6, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.memberships);
    }
}
function PlanTypeComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlanTypeComponent_div_7_div_2_Template, 15, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.memberships.length > 0)("ngIfElse", _r3);
    }
}
function PlanTypeComponent_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function PlanTypeComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Membership Plans Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
let PlanTypeComponent = /*@__PURE__*/ (() => {
    class PlanTypeComponent {
        constructor(membershipService, toastrService, ref) {
            this.membershipService = membershipService;
            this.toastrService = toastrService;
            this.ref = ref;
        }
        ngOnInit() {
            this.loading = true;
            this.memberships = [
                new _models_membership_plan_model__WEBPACK_IMPORTED_MODULE_0__["MembershipPlanModel"](null, 'monthly', '1', '1999', true),
                new _models_membership_plan_model__WEBPACK_IMPORTED_MODULE_0__["MembershipPlanModel"](null, 'quarterly', '3', '4999', true),
                new _models_membership_plan_model__WEBPACK_IMPORTED_MODULE_0__["MembershipPlanModel"](null, 'half-yearly', '6', '7999', true),
                new _models_membership_plan_model__WEBPACK_IMPORTED_MODULE_0__["MembershipPlanModel"](null, 'yearly', '12', '11999', true),
            ];
            this.getMemberships();
        }
        getMemberships() {
            this.loading = true;
            this.membershipService.getMemberships().subscribe((memberships) => {
                for (let i = 0; i < 4; i++) {
                    const membership = this.memberships[i];
                    const newMembership = memberships.find((curMembership) => curMembership.name === membership.name);
                    if (newMembership) {
                        this.memberships[i] = newMembership;
                    }
                }
                this.loading = false;
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        getAmount(amount) {
            amount = parseFloat(amount.toString());
            return amount.toFixed(2).toString();
        }
        selectPlanType(membershipPlan) {
            this.ref.close(membershipPlan);
        }
        onClose() {
            this.ref.close();
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
    }
    PlanTypeComponent.ɵfac = function PlanTypeComponent_Factory(t) { return new (t || PlanTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_membership_service__WEBPACK_IMPORTED_MODULE_2__["MembershipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogRef"])); };
    PlanTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlanTypeComponent, selectors: [["ngx-plan-type"]], decls: 12, vars: 2, consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingData", ""], ["noMemberships", ""], [1, "col-12"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], ["type", "button", "nbButton", "", "size", "small", "status", "primary", 3, "click"], [1, "pt-5", "pb-5", "text-center"]], template: function PlanTypeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Membership Plans");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PlanTypeComponent_div_7_Template, 3, 2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PlanTypeComponent_ng_template_8_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PlanTypeComponent_ng_template_10_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: [""] });
    return PlanTypeComponent;
})();


/***/ })

}]);