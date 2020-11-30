(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AddStudyMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyMaterialRoutingModule", function() { return AddStudyMaterialRoutingModule; });
/* harmony import */ var _add_study_material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-study-material.component */ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _add_study_material_component__WEBPACK_IMPORTED_MODULE_0__["AddStudyMaterialComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    { path: '**', redirectTo: 'page-not-found' },
];
class AddStudyMaterialRoutingModule {
}
AddStudyMaterialRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddStudyMaterialRoutingModule });
AddStudyMaterialRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddStudyMaterialRoutingModule_Factory(t) { return new (t || AddStudyMaterialRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddStudyMaterialRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddStudyMaterialRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddStudyMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyMaterialComponent", function() { return AddStudyMaterialComponent; });
/* harmony import */ var _services_lecture_material_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/lecture-material.service */ "./src/app/services/lecture-material.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/lecture.service */ "./src/app/services/lecture.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");














const _c0 = ["filePicker"];
function AddStudyMaterialComponent_nb_card_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function AddStudyMaterialComponent_nb_card_0_div_26_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudyMaterialComponent_nb_card_0_div_26_tr_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r9.removeFile(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", file_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("nbTooltip", "Remove ", file_r7.name, "");
} }
function AddStudyMaterialComponent_nb_card_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Content File");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AddStudyMaterialComponent_nb_card_0_div_26_tr_11_Template, 9, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.uploadLectureMaterials);
} }
function AddStudyMaterialComponent_nb_card_0_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, " No Files Selected, Please Select Files to Upload ");
} }
function AddStudyMaterialComponent_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Add Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudyMaterialComponent_nb_card_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.saveLectureMaterial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Upload\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Click on Following Button to Select Lecture Material Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddStudyMaterialComponent_nb_card_0_Template_input_change_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.onFilePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStudyMaterialComponent_nb_card_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17); return _r1.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Click Here to Pick Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AddStudyMaterialComponent_nb_card_0_ng_container_20_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "File/s To Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AddStudyMaterialComponent_nb_card_0_div_26_Template, 12, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AddStudyMaterialComponent_nb_card_0_ng_template_27_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](28);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.invalidFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.uploadLectureMaterials.length > 0)("ngIfElse", _r4);
} }
class AddStudyMaterialComponent {
    constructor(branchService, lectureService, lectureMaterialService, toastrService, router, location, route) {
        this.branchService = branchService;
        this.lectureService = lectureService;
        this.lectureMaterialService = lectureMaterialService;
        this.toastrService = toastrService;
        this.router = router;
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
        this.loading = true;
        this.invalidFile = false;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.showToastr('top-right', 'danger', 'Invalid Lecture');
            this.cancel();
            return;
        }
        this.uploadLectureMaterials = [];
        this.lectureService.getLectureData().subscribe((lecture) => {
            if (!lecture) {
                // this.showToastr('top-right', 'danger', 'Lecture Not Available');
                this.cancel();
                return;
            }
            this.lecture = lecture;
            this.loading = false;
        });
    }
    onFilePicked(event) {
        this.invalidFile = false;
        const files = event.target.files;
        const fileExt = ['pdf', 'jpg', 'png', 'jpeg', 'mp4'];
        let ext = null;
        const n = files.length;
        for (let i = 0; i < n; i++) {
            ext = files[i].name.substring(files[i].name.lastIndexOf('.') + 1).toLowerCase();
            if (!(fileExt.indexOf(ext) !== -1)) {
                this.invalidFile = true;
                this.fileInput.nativeElement.value = '';
                return;
            }
        }
        this.invalidFile = false;
        for (let i = 0; i < n; i++) {
            this.uploadLectureMaterials.push(files[i]);
        }
        this.fileInput.nativeElement.value = '';
    }
    saveLectureMaterial() {
        if (this.uploadLectureMaterials.length < 1) {
            this.showToastr('top-right', 'danger', 'Select at least 1 Lecture material File');
            this.invalidFile = true;
            return;
        }
        this.loading = true;
        this.invalidFile = false;
        const lectureMaterials = new FormData();
        lectureMaterials.append('branch', this.branchId);
        lectureMaterials.append('category', this.lecture.category);
        lectureMaterials.append('course', this.lecture.course);
        lectureMaterials.append('batch', this.lecture.batch);
        lectureMaterials.append('lecture', this.lecture._id);
        for (let i = 0; i < this.uploadLectureMaterials.length; i++) {
            lectureMaterials.append('material', this.uploadLectureMaterials[i], this.uploadLectureMaterials[i].name.substring(0, this.uploadLectureMaterials[i].name.lastIndexOf('.')));
        }
        this.lectureMaterialService.newLectureMaterials(lectureMaterials).subscribe((res) => {
            const totalFiles = this.uploadLectureMaterials.length;
            const overStorageFiles = res.overStorageFiles;
            if (overStorageFiles < totalFiles) {
                this.showToastr('top-right', 'success', `${totalFiles - overStorageFiles} file${totalFiles - overStorageFiles === 1 ? ' is' : 's are'} Uploaded Successfully!`);
            }
            if (overStorageFiles > 0) {
                this.showToastr('top-right', 'danger', `Storage is full, ${overStorageFiles} file${overStorageFiles === 1 ? ' is' : 's are'} not Uploaded`);
            }
            this.uploadLectureMaterials = [];
            this.cancel();
        }, (error) => {
            this.loading = false;
        });
    }
    removeFile(index) {
        this.uploadLectureMaterials.splice(index, 1);
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    cancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
AddStudyMaterialComponent.ɵfac = function AddStudyMaterialComponent_Factory(t) { return new (t || AddStudyMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_lecture_material_service__WEBPACK_IMPORTED_MODULE_0__["LectureMaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AddStudyMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddStudyMaterialComponent, selectors: [["ngx-add-study-material"]], viewQuery: function AddStudyMaterialComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "row"], [1, "col-md-9", "col-sm-8"], [1, "col-md-3", "col-sm-4"], ["nbButton", "", "size", "small", "type", "button", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "arrow-circle-up-outline"], [1, "col-12"], [1, "form-control-group"], ["for", "input-subject", 1, "label"], ["type", "file", "nbInput", "", "id", "input-file", "name", "file", "placeholder", "Select File", "fullWidth", "", "multiple", "", "hidden", "", 3, "change"], ["filePicker", ""], ["nbButton", "", "size", "small", "type", "button", "fullWidth", "", "status", "warning", "id", "files", 3, "click"], [1, "text-center"], [1, "col-md-10", "mx-auto"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], ["noFiles", ""], [1, "caption", "status-danger"], [1, "table-responsive"], [1, "table", "table-sm", "table-hover"], [1, "table-heading"], [1, "table-row"], [1, "table-heading-data"], [1, "table-heading-data", "text-center"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-data"], [1, "mr-2"], [1, "table-data", "text-center"], ["type", "button", "nbButton", "", "size", "tiny", "shape", "round", "status", "danger", 3, "nbTooltip", "click"], ["icon", "close-outline"]], template: function AddStudyMaterialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AddStudyMaterialComponent_nb_card_0_Template, 29, 3, "nb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipDirective"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AddStudyMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'ngx-add-study-material',
                templateUrl: './add-study-material.component.html',
                styleUrls: ['./add-study-material.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"] }, { type: _services_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"] }, { type: _services_lecture_material_service__WEBPACK_IMPORTED_MODULE_0__["LectureMaterialService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['filePicker']
        }] }); })();


/***/ }),

/***/ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddStudyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyMaterialModule", function() { return AddStudyMaterialModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _add_study_material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-study-material.component */ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-study-material-routing.module */ "./src/app/employee/branch/lecture/study-material/add-study-material/add-study-material-routing.module.ts");






class AddStudyMaterialModule {
}
AddStudyMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddStudyMaterialModule });
AddStudyMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AddStudyMaterialModule_Factory(t) { return new (t || AddStudyMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _add_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddStudyMaterialRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddStudyMaterialModule, { declarations: [_add_study_material_component__WEBPACK_IMPORTED_MODULE_1__["AddStudyMaterialComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _add_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddStudyMaterialRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddStudyMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_add_study_material_component__WEBPACK_IMPORTED_MODULE_1__["AddStudyMaterialComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _add_study_material_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddStudyMaterialRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbTooltipModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);