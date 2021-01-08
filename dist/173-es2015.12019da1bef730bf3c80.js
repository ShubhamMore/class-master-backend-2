(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ManageStudyMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudyMaterialRoutingModule", function() { return ManageStudyMaterialRoutingModule; });
/* harmony import */ var _manage_study_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-study-material.component */ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _manage_study_material_component__WEBPACK_IMPORTED_MODULE_0__["ManageStudyMaterialComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    { path: '**', redirectTo: 'page-not-found' },
];
let ManageStudyMaterialRoutingModule = /*@__PURE__*/ (() => {
    class ManageStudyMaterialRoutingModule {
    }
    ManageStudyMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageStudyMaterialRoutingModule });
    ManageStudyMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ManageStudyMaterialRoutingModule_Factory(t) { return new (t || ManageStudyMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return ManageStudyMaterialRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageStudyMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ManageStudyMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudyMaterialComponent", function() { return ManageStudyMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _services_lecture_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/lecture-material.service */ "./src/app/services/lecture-material.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ManageStudyMaterialComponent_ng_container_13_div_1_tr_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudyMaterialComponent_ng_container_13_div_1_tr_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const lectureMaterial_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.viewLectureMaterial(lectureMaterial_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudyMaterialComponent_ng_container_13_div_1_tr_11_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const lectureMaterial_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.changeLectureMaterialStatus(lectureMaterial_r7._id, !lectureMaterial_r7.status, i_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudyMaterialComponent_ng_container_13_div_1_tr_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const lectureMaterial_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.deleteLectureMaterial(lectureMaterial_r7._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const lectureMaterial_r7 = ctx.$implicit;
        const i_r8 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lectureMaterial_r7.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", !lectureMaterial_r7.status ? "warning" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !lectureMaterial_r7.status ? "Activate" : "Deactivate", " ");
    }
}
function ManageStudyMaterialComponent_ng_container_13_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManageStudyMaterialComponent_ng_container_13_div_1_tr_11_Template, 14, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.lectureMaterials);
    }
}
function ManageStudyMaterialComponent_ng_container_13_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Lecture Material Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function ManageStudyMaterialComponent_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManageStudyMaterialComponent_ng_container_13_div_1_Template, 12, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ManageStudyMaterialComponent_ng_container_13_ng_template_2_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lectureMaterials.length > 0)("ngIfElse", _r4);
    }
}
function ManageStudyMaterialComponent_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let ManageStudyMaterialComponent = /*@__PURE__*/ (() => {
    class ManageStudyMaterialComponent {
        constructor(branchService, lectureService, lectureMaterialService, toastrService, router, route) {
            this.branchService = branchService;
            this.lectureService = lectureService;
            this.lectureMaterialService = lectureMaterialService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.subject = '';
            this.lectureMaterials = [];
            this.lectureService.getLectureData().subscribe((lecture) => {
                this.lecture = lecture;
                if (!this.lecture) {
                    this.router.navigate(['../'], { relativeTo: this.route });
                    return;
                }
                this.getLectureMaterials(this.subject);
            });
        }
        getLectureMaterials(subject) {
            this.loading = true;
            this.subject = subject;
            this.lectureMaterialService
                .getLectureMaterials(this.branchId, this.lecture.category, this.lecture.course, this.lecture.batch, this.lecture._id)
                .subscribe((lectureMaterials) => {
                this.lectureMaterials = lectureMaterials;
                this.loading = false;
            }, (err) => {
                this.loading = false;
            });
        }
        addLectureMaterial() {
            this.router.navigate(['../add'], { relativeTo: this.route });
        }
        deleteLectureMaterial(id, i) {
            this.loading = true;
            this.lectureMaterialService.deleteLectureMaterial(id).subscribe((res) => {
                this.lectureMaterials.splice(i, 1);
                this.showToastr('top-right', 'success', `LectureMaterial Deleted Successfully!`);
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.loading = false;
            });
        }
        viewLectureMaterial(lectureMaterial) {
            this.lectureMaterialService.setLectureMaterialId(lectureMaterial._id);
            this.lectureMaterialService.setLectureMaterialData(lectureMaterial);
            this.router.navigate(['../view'], { relativeTo: this.route });
        }
        getSubject(subjectId) {
            const subject = this.course.subjects.find((curSubject) => curSubject._id === subjectId);
            if (subject) {
                return subject.subject;
            }
            return '--';
        }
        changeLectureMaterialStatus(id, status, i) {
            this.loading = true;
            this.lectureMaterialService.changeLectureMaterialStatus(id, status).subscribe((res) => {
                this.lectureMaterials[i].status = status;
                this.showToastr('top-right', 'success', `LectureMaterial ${status ? 'Activated' : 'Deactivated'} Successfully!`);
                this.loading = false;
            }, (err) => {
                this.showToastr('top-right', 'danger', err);
                this.loading = false;
            });
        }
        showToastr(position, status, message) {
            this.toastrService.show(status, message, {
                position,
                status,
            });
        }
    }
    ManageStudyMaterialComponent.ɵfac = function ManageStudyMaterialComponent_Factory(t) { return new (t || ManageStudyMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_lecture_material_service__WEBPACK_IMPORTED_MODULE_3__["LectureMaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
    ManageStudyMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageStudyMaterialComponent, selectors: [["ngx-manage-study-material"]], decls: 16, vars: 2, consts: [[1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "status", "primary", "fullWidth", "", 3, "click"], ["icon", "plus-circle-outline"], [1, "body-container"], [1, "col-md-12"], [4, "ngIf", "ngIfElse"], ["loadingData", ""], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noLectureMaterials", ""], [1, "table-responsive"], [1, "table"], ["colspan", "3"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "info", 3, "click"], ["nbButton", "", "size", "small", 3, "status", "click"], ["nbButton", "", "size", "small", "status", "danger", 3, "click"], [1, "text-center", "pt-5", "pb-5"]], template: function ManageStudyMaterialComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lecture Material ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageStudyMaterialComponent_Template_button_click_7_listener() { return ctx.addLectureMaterial(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add Lecture Material ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-icon", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ManageStudyMaterialComponent_ng_container_13_Template, 4, 2, "ng-container", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ManageStudyMaterialComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [""] });
    return ManageStudyMaterialComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ManageStudyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudyMaterialModule", function() { return ManageStudyMaterialModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _manage_study_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-study-material.component */ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-study-material-routing.module */ "./src/app/institute/branch/lecture/study-material/manage-study-material/manage-study-material-routing.module.ts");






let ManageStudyMaterialModule = /*@__PURE__*/ (() => {
    class ManageStudyMaterialModule {
    }
    ManageStudyMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageStudyMaterialModule });
    ManageStudyMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ManageStudyMaterialModule_Factory(t) { return new (t || ManageStudyMaterialModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _manage_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageStudyMaterialRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            ]] });
    return ManageStudyMaterialModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageStudyMaterialModule, { declarations: [_manage_study_material_component__WEBPACK_IMPORTED_MODULE_1__["ManageStudyMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _manage_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManageStudyMaterialRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"]] });
})();


/***/ })

}]);