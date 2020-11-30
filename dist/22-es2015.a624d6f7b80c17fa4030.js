(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/app/institute/branch/assignment/save-assignment/save-assignment-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/institute/branch/assignment/save-assignment/save-assignment-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: SaveAssignmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAssignmentRoutingModule", function() { return SaveAssignmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _save_assignment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-assignment.component */ "./src/app/institute/branch/assignment/save-assignment/save-assignment.component.ts");





const routes = [
    {
        path: '',
        component: _save_assignment_component__WEBPACK_IMPORTED_MODULE_2__["SaveAssignmentComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    { path: '**', redirectTo: 'page-not-found' },
];
class SaveAssignmentRoutingModule {
}
SaveAssignmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SaveAssignmentRoutingModule });
SaveAssignmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SaveAssignmentRoutingModule_Factory(t) { return new (t || SaveAssignmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SaveAssignmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveAssignmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/institute/branch/assignment/save-assignment/save-assignment.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/institute/branch/assignment/save-assignment/save-assignment.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SaveAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAssignmentComponent", function() { return SaveAssignmentComponent; });
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/shared-services/date.service */ "./src/app/services/shared-services/date.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/assignment.service */ "./src/app/services/assignment.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





















const _c0 = ["stepper"];
const _c1 = ["filePicker"];
function SaveAssignmentComponent_nb_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", subject_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](subject_r11.subject);
} }
function SaveAssignmentComponent_ng_container_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Subject is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_23_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.assignmentDetailsForm.get("subject").errors == null ? null : ctx_r2.assignmentDetailsForm.get("subject").errors.required);
} }
function SaveAssignmentComponent_ng_container_29_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Topic is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_29_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.assignmentDetailsForm.get("topic").errors == null ? null : ctx_r3.assignmentDetailsForm.get("topic").errors.required);
} }
function SaveAssignmentComponent_ng_container_35_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Assignment Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_35_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.assignmentDetailsForm.get("date").errors == null ? null : ctx_r4.assignmentDetailsForm.get("date").errors.required);
} }
function SaveAssignmentComponent_ng_container_41_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Assignment Description is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_41_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.assignmentDetailsForm.get("description").errors == null ? null : ctx_r5.assignmentDetailsForm.get("description").errors.required);
} }
function SaveAssignmentComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveAssignmentComponent_button_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.clearFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "nb-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function SaveAssignmentComponent_ng_container_59_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Assignment Submission Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_59_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.assignmentDetailsForm.get("submissionDate").errors == null ? null : ctx_r9.assignmentDetailsForm.get("submissionDate").errors.required);
} }
function SaveAssignmentComponent_ng_container_65_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Assignment Total Grades is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_65_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Assignment Total Grades Should be more than 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SaveAssignmentComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SaveAssignmentComponent_ng_container_65_p_1_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SaveAssignmentComponent_ng_container_65_p_2_Template, 2, 0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.assignmentDetailsForm.get("totalGrades").errors == null ? null : ctx_r10.assignmentDetailsForm.get("totalGrades").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.assignmentDetailsForm.get("totalGrades").errors == null ? null : ctx_r10.assignmentDetailsForm.get("totalGrades").errors.min);
} }
class SaveAssignmentComponent {
    constructor(branchService, courseService, batchService, subjectService, assignmentService, dateService, router, route, toastrService) {
        this.branchService = branchService;
        this.courseService = courseService;
        this.batchService = batchService;
        this.subjectService = subjectService;
        this.assignmentService = assignmentService;
        this.dateService = dateService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.route.queryParams.subscribe((param) => {
            if (param.mode) {
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        this.loading = true;
        this.invalidFile = false;
        this.fileName = null;
        this.branchId = this.branchService.getBranchId();
        if (!this.branchId) {
            this.router.navigate(['../'], { relativeTo: this.route });
            return;
        }
        this.subjects = [];
        this.branchService.getCategoryData().subscribe((category) => {
            this.category = category;
        });
        this.courseService.getCourseData().subscribe((course) => {
            this.course = course;
        });
        this.batchService.getBatchData().subscribe((batch) => {
            this.batch = batch;
        });
        this.subjectService.getSubjectsData().subscribe((subjects) => {
            this.subjects = subjects;
        });
        this.assignmentId = this.assignmentService.getAssignmentId();
        let mode;
        this.route.queryParams.subscribe((param) => {
            mode = param.mode;
        });
        if (mode && mode !== 'edit') {
            this.showToastr('top-right', 'danger', 'Invalid Route');
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        else if (mode && !this.assignmentId) {
            this.showToastr('top-right', 'danger', 'Assignment Not Available');
            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
            return;
        }
        this.assignmentDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            topic: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.dateService.getDateString(), {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            submissionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
            totalGrades: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)],
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            }),
        });
        if (this.assignmentId) {
            this.assignmentService
                .getAssignment(this.assignmentId)
                .subscribe((assignment) => {
                if (!assignment) {
                    this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                    return;
                }
                this.assignment = assignment;
                this.assignmentDetailsForm.patchValue({
                    subject: assignment.subject,
                    topic: assignment.topic,
                    date: assignment.date,
                    submissionDate: assignment.submissionDate,
                    totalGrades: assignment.totalGrades,
                    description: assignment.description,
                });
                this.fileName = assignment.fileName;
                this.loading = false;
            });
        }
        else {
            this.loading = false;
        }
    }
    onFilePicked(event) {
        this.invalidFile = false;
        const files = event.target.files;
        const fileExt = ['pdf', 'jpg', 'png', 'jpeg', 'mp4'];
        let ext = null;
        ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();
        if (!(fileExt.indexOf(ext) !== -1)) {
            this.invalidFile = true;
            this.fileName = files[0].name;
            this.fileInput.nativeElement.value = '';
            return;
        }
        this.invalidFile = false;
        this.uploadAssignment = files[0];
        this.fileName = files[0].name;
        this.fileInput.nativeElement.value = '';
    }
    clearFile() {
        this.uploadAssignment = null;
        this.fileName = null;
        this.fileInput.nativeElement.value = '';
        this.invalidFile = false;
    }
    submitAssignmentDetails() {
        this.assignmentDetailsForm.markAllAsTouched();
        if (this.assignmentDetailsForm.invalid) {
            this.showToastr('top-right', 'danger', 'Assignment details are required');
            return;
        }
        else if (this.invalidFile) {
            this.showToastr('top-right', 'danger', 'Select Valid File');
            return;
        }
        this.stepper.next();
    }
    saveAssignment() {
        this.assignmentDetailsForm.markAllAsTouched();
        if (this.assignmentDetailsForm.invalid) {
            this.showToastr('top-right', 'danger', 'Assignment details are required');
            return;
        }
        else if (this.invalidFile) {
            this.showToastr('top-right', 'danger', 'Select Valid File');
            return;
        }
        this.loading = true;
        const assignment = new FormData();
        assignment.append('branch', this.branchId);
        assignment.append('category', this.course.basicDetails.category);
        assignment.append('course', this.course._id);
        assignment.append('batch', this.batch._id);
        assignment.append('subject', this.assignmentDetailsForm.value.subject);
        assignment.append('topic', this.assignmentDetailsForm.value.topic);
        assignment.append('date', this.assignmentDetailsForm.value.date);
        assignment.append('description', this.assignmentDetailsForm.value.description);
        assignment.append('submissionDate', this.assignmentDetailsForm.value.submissionDate);
        assignment.append('totalGrades', this.assignmentDetailsForm.value.totalGrades);
        if (this.uploadAssignment) {
            assignment.append('assignment', this.uploadAssignment, this.uploadAssignment.name.substring(0, this.uploadAssignment.name.lastIndexOf('.')));
        }
        if (!this.assignment) {
            this.assignmentService.saveAssignment(assignment).subscribe((res) => {
                this.showToastr('top-right', 'success', 'New Assignment Added Successfully!');
                this.router.navigate(['../manage'], { relativeTo: this.route });
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        else {
            assignment.append('_id', this.assignment._id);
            this.assignmentService.updateAssignment(assignment).subscribe((res) => {
                this.showToastr('top-right', 'success', 'Assignment Updated Successfully!');
                this.router.navigate(['../manage'], { relativeTo: this.route });
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
    }
    getSubjectName(id) {
        const subject = this.subjects.find((curSubject) => curSubject._id === id);
        if (subject) {
            return subject.subject;
        }
        return '--';
    }
    showToastr(position, status, message) {
        this.toastrService.show(status, message, {
            position,
            status,
        });
    }
    back() {
        this.router.navigate(['../manage'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.assignmentService.deleteAssignmentId();
    }
}
SaveAssignmentComponent.ɵfac = function SaveAssignmentComponent_Factory(t) { return new (t || SaveAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_0__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"])); };
SaveAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SaveAssignmentComponent, selectors: [["ngx-save-assignment"]], viewQuery: function SaveAssignmentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, decls: 124, vars: 29, consts: [["nbButton", "", "size", "small", "status", "warning", 1, "float-right", 3, "click"], [1, ""], [3, "linear"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-4"], [1, "form-control-group"], ["for", "input-subject", 1, "label"], ["type", "text", "id", "input-subject", "name", "subject", "formControlName", "subject", "placeholder", "Subject", "fullWidth", "", 3, "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["for", "input-topic", 1, "label"], ["type", "text", "nbInput", "", "id", "input-topic", "name", "topic", "formControlName", "topic", "placeholder", "Topic", "fullWidth", "", 3, "status"], ["for", "input -assignment-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-assignment-date", "name", "date", "formControlName", "date", "fullWidth", "", 3, "status"], [1, "col-md-12"], ["for", "input-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description", "fullWidth", "", 3, "status"], ["type", "file", "nbInput", "", "id", "input-file", "name", "file", "placeholder", "Select File", "fullWidth", "", "hidden", "", 3, "change"], ["filePicker", ""], ["type", "button", "nbPrefix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Attach File", 3, "click"], ["icon", "attach-outline", "pack", "eva"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Attach File", "disabled", "", 3, "value", "click"], ["type", "button", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Remove File", 3, "click", 4, "ngIf"], ["for", "input-assignment-submission-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-assignment-submission-date", "name", "submissionDate", "formControlName", "submissionDate", "fullWidth", "", 3, "status"], ["for", "input-assignment-total-grades", 1, "label"], ["type", "number", "nbInput", "", "id", "input-assignment-total-grades", "name", "totalGrades", "min", "0", "formControlName", "totalGrades", "fullWidth", "", 3, "status"], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "col-md-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["nbButton", "", "size", "small", 3, "click"], [3, "value"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["type", "button", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "nbTooltip", "Remove File", 3, "click"], ["icon", "close-outline", "status", "danger", "pack", "eva"]], template: function SaveAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveAssignmentComponent_Template_button_click_2_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nb-stepper", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "nb-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function SaveAssignmentComponent_Template_form_submit_11_listener() { return ctx.submitAssignmentDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Assignment Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nb-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Select Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, SaveAssignmentComponent_nb_option_22_Template, 2, 2, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SaveAssignmentComponent_ng_container_23_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Topic:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, SaveAssignmentComponent_ng_container_29_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Assignment Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, SaveAssignmentComponent_ng_container_35_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SaveAssignmentComponent_ng_container_41_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Attach File");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SaveAssignmentComponent_Template_input_change_46_listener($event) { return ctx.onFilePicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveAssignmentComponent_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](47); return _r6.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "nb-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveAssignmentComponent_Template_input_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](47); return _r6.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, SaveAssignmentComponent_button_52_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, SaveAssignmentComponent_ng_container_53_Template, 3, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Submission Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, SaveAssignmentComponent_ng_container_59_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Total Grades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, SaveAssignmentComponent_ng_container_65_Template, 3, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "nb-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "nb-step", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "Submission Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, "Total Grades");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Attach File");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](113, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](117, "nb-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveAssignmentComponent_Template_button_click_121_listener() { return ctx.saveAssignment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", !ctx.assignment ? "Add New Assignment" : "Edit Assignment " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 27, ctx.assignment.topic), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("stepControl", ctx.assignmentDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.assignmentDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("subject").touched ? ctx.assignmentDetailsForm.get("subject").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("subject").invalid && ctx.assignmentDetailsForm.get("subject").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("topic").touched ? ctx.assignmentDetailsForm.get("topic").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("topic").invalid && ctx.assignmentDetailsForm.get("topic").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("date").touched ? ctx.assignmentDetailsForm.get("date").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("date").invalid && ctx.assignmentDetailsForm.get("date").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("description").touched ? ctx.assignmentDetailsForm.get("description").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("description").invalid && ctx.assignmentDetailsForm.get("description").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.uploadAssignment || !ctx.assignment && ctx.fileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invalidFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("submissionDate").touched ? ctx.assignmentDetailsForm.get("submissionDate").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("submissionDate").invalid && ctx.assignmentDetailsForm.get("submissionDate").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.assignmentDetailsForm.get("totalGrades").touched ? ctx.assignmentDetailsForm.get("totalGrades").invalid ? "danger" : "success" : "basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.assignmentDetailsForm.get("totalGrades").invalid && ctx.assignmentDetailsForm.get("totalGrades").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.assignmentDetailsForm.value.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getSubjectName(ctx.assignmentDetailsForm.value.subject));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.assignmentDetailsForm.value.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.dateService.formatDate(ctx.assignmentDetailsForm.value.submissionDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.assignmentDetailsForm.value.totalGrades);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.assignmentDetailsForm.value.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.uploadAssignment ? ctx.fileName : "--");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperPreviousDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSuffixDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](SaveAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
        args: [{
                selector: 'ngx-save-assignment',
                templateUrl: './save-assignment.component.html',
                styleUrls: ['./save-assignment.component.scss'],
            }]
    }], function () { return [{ type: _services_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"] }, { type: _services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] }, { type: _services_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"] }, { type: _services_subject_service__WEBPACK_IMPORTED_MODULE_0__["SubjectService"] }, { type: _services_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"] }, { type: _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
            args: ['stepper', { static: false }]
        }], fileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
            args: ['filePicker']
        }] }); })();


/***/ }),

/***/ "./src/app/institute/branch/assignment/save-assignment/save-assignment.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/institute/branch/assignment/save-assignment/save-assignment.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SaveAssignmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveAssignmentModule", function() { return SaveAssignmentModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _save_assignment_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save-assignment-routing.module */ "./src/app/institute/branch/assignment/save-assignment/save-assignment-routing.module.ts");
/* harmony import */ var _save_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save-assignment.component */ "./src/app/institute/branch/assignment/save-assignment/save-assignment.component.ts");







class SaveAssignmentModule {
}
SaveAssignmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SaveAssignmentModule });
SaveAssignmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SaveAssignmentModule_Factory(t) { return new (t || SaveAssignmentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _save_assignment_routing_module__WEBPACK_IMPORTED_MODULE_4__["SaveAssignmentRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaveAssignmentModule, { declarations: [_save_assignment_component__WEBPACK_IMPORTED_MODULE_5__["SaveAssignmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _save_assignment_routing_module__WEBPACK_IMPORTED_MODULE_4__["SaveAssignmentRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SaveAssignmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_save_assignment_component__WEBPACK_IMPORTED_MODULE_5__["SaveAssignmentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _save_assignment_routing_module__WEBPACK_IMPORTED_MODULE_4__["SaveAssignmentRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbFormFieldModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTooltipModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);