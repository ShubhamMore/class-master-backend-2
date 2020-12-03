(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "./src/app/employee/branch/lead/manage-lead/manage-lead-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/employee/branch/lead/manage-lead/manage-lead-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ManageLeadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeadRoutingModule", function() { return ManageLeadRoutingModule; });
/* harmony import */ var _manage_lead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-lead.component */ "./src/app/employee/branch/lead/manage-lead/manage-lead.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _manage_lead_component__WEBPACK_IMPORTED_MODULE_0__["ManageLeadComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
var ManageLeadRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageLeadRoutingModule() {
    }
    ManageLeadRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageLeadRoutingModule });
    ManageLeadRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageLeadRoutingModule_Factory(t) { return new (t || ManageLeadRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageLeadRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageLeadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/employee/branch/lead/manage-lead/manage-lead.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employee/branch/lead/manage-lead/manage-lead.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeadComponent", function() { return ManageLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _services_lead_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/lead.service */ "./src/app/services/lead.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function ManageLeadComponent_nb_option_11_Template(rf, ctx) {
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
function ManageLeadComponent_nb_option_16_Template(rf, ctx) {
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
function ManageLeadComponent_ng_container_20_div_1_th_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th");
    }
}
function ManageLeadComponent_ng_container_20_div_1_tr_22_td_16_Template(rf, ctx) {
    if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLeadComponent_ng_container_20_div_1_tr_22_td_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var lead_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.wonLead(lead_r12._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Won ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageLeadComponent_ng_container_20_div_1_tr_22_td_17_Template(rf, ctx) {
    if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLeadComponent_ng_container_20_div_1_tr_22_td_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var lead_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.reOpenLead(lead_r12._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reopen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageLeadComponent_ng_container_20_div_1_tr_22_td_18_Template(rf, ctx) {
    if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLeadComponent_ng_container_20_div_1_tr_22_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var lead_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.lostLead(lead_r12._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageLeadComponent_ng_container_20_div_1_tr_22_Template(rf, ctx) {
    if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLeadComponent_ng_container_20_div_1_tr_22_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var lead_r12 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.editLead(lead_r12._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageLeadComponent_ng_container_20_div_1_tr_22_td_16_Template, 3, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ManageLeadComponent_ng_container_20_div_1_tr_22_td_17_Template, 3, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageLeadComponent_ng_container_20_div_1_tr_22_td_18_Template, 3, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageLeadComponent_ng_container_20_div_1_tr_22_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); var lead_r12 = ctx.$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.deleteLead(lead_r12._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var lead_r12 = ctx.$implicit;
        var i_r13 = ctx.index;
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lead_r12.leadName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dateService.formatDate(lead_r12.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.dateService.formatDate(lead_r12.followUpDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.getCategory(lead_r12.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.getCourse(lead_r12.course));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.type === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.type === "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.type === "active");
    }
}
function ManageLeadComponent_ng_container_20_div_1_Template(rf, ctx) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Follow Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ManageLeadComponent_ng_container_20_div_1_th_18_Template, 1, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ManageLeadComponent_ng_container_20_div_1_tr_22_Template, 22, 9, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.type === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.leads);
    }
}
function ManageLeadComponent_ng_container_20_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Leads Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageLeadComponent_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageLeadComponent_ng_container_20_div_1_Template, 23, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageLeadComponent_ng_container_20_ng_template_2_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.leads.length > 0)("ngIfElse", _r8);
    }
}
function ManageLeadComponent_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
var ManageLeadComponent = /** @class */ /*@__PURE__*/ (function () {
    function ManageLeadComponent(branchService, dateService, courseService, toastrService, leadService, router, route) {
        var _this = this;
        this.branchService = branchService;
        this.dateService = dateService;
        this.courseService = courseService;
        this.toastrService = toastrService;
        this.leadService = leadService;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (param) {
            // put the code from `ngOnInit` here
            _this.ngOnInit();
        });
    }
    ManageLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.route.queryParams.subscribe(function (param) {
            _this.type = param.type;
            _this.leadService.setLeadType(_this.type);
        });
        if (this.type !== 'active' && this.type !== 'inactive') {
            this.router.navigate(['../manage'], {
                relativeTo: this.route,
                queryParams: { type: 'active' },
            });
            return;
        }
        this.leads = [];
        this.categories = [];
        this.category = '';
        this.courses = [];
        this.course = '';
        this.myCourses = [];
        this.getCategories();
        this.getCourses();
    };
    ManageLeadComponent.prototype.getCategories = function () {
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
                _this.getLeads(_this.category, _this.course);
            }, function (error) {
                _this.showToastr('top-right', 'danger', error);
                _this.loading = false;
            });
        }
        else {
            this.getLeads(this.category, this.course);
        }
    };
    ManageLeadComponent.prototype.getCourses = function () {
        var _this = this;
        this.courseService.getCoursesData().subscribe(function (courses) {
            _this.courses = courses;
        });
    };
    ManageLeadComponent.prototype.onSelectCategory = function (category) {
        this.category = category;
        this.course = '';
        this.myCourses = this.courses.filter(function (course) { return course.basicDetails.category === category; });
        this.getLeads(this.category, this.course);
    };
    ManageLeadComponent.prototype.onSelectCourse = function (course) {
        this.course = course;
        this.getLeads(this.category, this.course);
    };
    ManageLeadComponent.prototype.getLeads = function (category, course) {
        var _this = this;
        this.loading = true;
        this.leadService.getLeads(this.branchId, category, course, this.type).subscribe(function (leads) {
            _this.leads = leads;
            _this.loading = false;
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
            _this.loading = false;
        });
    };
    ManageLeadComponent.prototype.editLead = function (id) {
        this.leadService.setLeadId(id);
        this.router.navigate(['../edit'], { relativeTo: this.route, queryParams: { mode: 'edit' } });
    };
    ManageLeadComponent.prototype.deleteLead = function (id) {
        var _this = this;
        this.leadService.deleteLead(id).subscribe(function (res) {
            _this.removeLead(id);
            _this.showToastr('top-right', 'success', 'Lead Deleted Successfully');
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
        });
    };
    ManageLeadComponent.prototype.removeLead = function (id) {
        var index = this.leads.findIndex(function (lead) { return lead._id === id; });
        if (index >= 0) {
            this.leads.splice(index, 1);
        }
    };
    ManageLeadComponent.prototype.wonLead = function (id) {
        var _this = this;
        this.leadService.changeLeadStatus(id, 'won').subscribe(function (res) {
            _this.removeLead(id);
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
        });
    };
    ManageLeadComponent.prototype.reOpenLead = function (id) {
        var _this = this;
        this.leadService.changeLeadStatus(id, 'open').subscribe(function (res) {
            _this.removeLead(id);
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
        });
    };
    ManageLeadComponent.prototype.lostLead = function (id) {
        var _this = this;
        this.leadService.changeLeadStatus(id, 'lost').subscribe(function (res) {
            _this.removeLead(id);
        }, function (error) {
            _this.showToastr('top-right', 'danger', error);
        });
    };
    ManageLeadComponent.prototype.getCategory = function (categoryId) {
        var category = this.categories.find(function (curCategory) { return curCategory._id === categoryId; });
        if (category) {
            return category.category;
        }
        return '--';
    };
    ManageLeadComponent.prototype.getCourse = function (courseId) {
        var course = this.courses.find(function (curCourse) { return curCourse._id === courseId; });
        if (course) {
            return course.basicDetails.courseName;
        }
        return '--';
    };
    ManageLeadComponent.prototype.showToastr = function (position, status, message) {
        this.toastrService.show(status, message, {
            position: position,
            status: status,
        });
    };
    ManageLeadComponent.ɵfac = function ManageLeadComponent_Factory(t) { return new (t || ManageLeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_5__["LeadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
    ManageLeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageLeadComponent, selectors: [["ngx-manage-lead"]], decls: 23, vars: 9, consts: [[1, "row"], [1, "col-md-6", "col-sm-4"], [1, "col-md-3", "col-sm-4"], ["id", "select-category", "name", "category", "fullWidth", "", "placeholder", "Select Category", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "select-course", "name", "course", "fullWidth", "", "placeholder", "Select Course", 3, "selected", "selectedChange"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], [3, "value"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noLeads", ""], [1, "table-responsive"], [1, "table"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "basic", 3, "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageLeadComponent_Template(rf, ctx) {
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageLeadComponent_Template_nb_select_selectedChange_8_listener($event) { return ctx.onSelectCategory($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Categories");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageLeadComponent_nb_option_11_Template, 2, 2, "nb-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-select", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ManageLeadComponent_Template_nb_select_selectedChange_13_listener($event) { return ctx.onSelectCourse($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-option", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All Courses");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ManageLeadComponent_nb_option_16_Template, 2, 2, "nb-option", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-body", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ManageLeadComponent_ng_container_20_Template, 4, 2, "ng-container", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ManageLeadComponent_ng_template_21_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx.type), " Leads");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
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
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [""] });
    return ManageLeadComponent;
}());



/***/ }),

/***/ "./src/app/employee/branch/lead/manage-lead/manage-lead.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/employee/branch/lead/manage-lead/manage-lead.module.ts ***!
  \************************************************************************/
/*! exports provided: ManageLeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLeadModule", function() { return ManageLeadModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _manage_lead_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-lead.component */ "./src/app/employee/branch/lead/manage-lead/manage-lead.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _manage_lead_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-lead-routing.module */ "./src/app/employee/branch/lead/manage-lead/manage-lead-routing.module.ts");






var ManageLeadModule = /** @class */ /*@__PURE__*/ (function () {
    function ManageLeadModule() {
    }
    ManageLeadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageLeadModule });
    ManageLeadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ManageLeadModule_Factory(t) { return new (t || ManageLeadModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _manage_lead_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageLeadRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbBadgeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
            ]] });
    return ManageLeadModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageLeadModule, { declarations: [_manage_lead_component__WEBPACK_IMPORTED_MODULE_1__["ManageLeadComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _manage_lead_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageLeadRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbBadgeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]] });
})();


/***/ })

}]);