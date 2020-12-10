(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AddBatchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBatchRoutingModule", function() { return AddBatchRoutingModule; });
/* harmony import */ var _add_batch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-batch.component */ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', component: _add_batch_component__WEBPACK_IMPORTED_MODULE_0__["AddBatchComponent"] },
    {
        path: 'page-not-found',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../../../../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then((m) => m.PageNotFoundModule),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
let AddBatchRoutingModule = /*@__PURE__*/ (() => {
    class AddBatchRoutingModule {
    }
    AddBatchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddBatchRoutingModule });
    AddBatchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddBatchRoutingModule_Factory(t) { return new (t || AddBatchRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AddBatchRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddBatchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBatchComponent", function() { return AddBatchComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bson */ "./node_modules/bson/dist/bson.browser.esm.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../services/branch.service */ "./src/app/services/branch.service.ts");
/* harmony import */ var _services_branch_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/branch-employee.service */ "./src/app/services/branch-employee.service.ts");
/* harmony import */ var _services_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../services/batch.service */ "./src/app/services/batch.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../services/course.service */ "./src/app/services/course.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["stepper"];
function AddBatchComponent_ng_container_20_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Batch Name is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddBatchComponent_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddBatchComponent_ng_container_20_p_1_Template, 2, 0, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.batchBasicDetailsForm.get("batchName").errors == null ? null : ctx_r1.batchBasicDetailsForm.get("batchName").errors.required);
    }
}
function AddBatchComponent_ng_container_26_p_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Batch Start Date is required! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function AddBatchComponent_ng_container_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddBatchComponent_ng_container_26_p_1_Template, 2, 0, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.batchBasicDetailsForm.get("startDate").errors == null ? null : ctx_r2.batchBasicDetailsForm.get("startDate").errors.required);
    }
}
function AddBatchComponent_ng_container_46_nb_option_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const teacher_r10 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", teacher_r10.employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](teacher_r10.name);
    }
}
function AddBatchComponent_ng_container_46_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkedChange", function AddBatchComponent_ng_container_46_Template_nb_checkbox_checkedChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r8 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeSubjectStatus($event, i_r8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Select Teacher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddBatchComponent_ng_container_46_nb_option_12_Template, 2, 2, "nb-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const subject_r7 = ctx.$implicit;
        const i_r8 = ctx.index;
        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", subject_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "status-", i_r8, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", subject_r7.value.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "status-", i_r8, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getSubjectName(subject_r7.value.subject));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "teacher-", i_r8, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.teachers);
    }
}
function AddBatchComponent_ng_container_85_tr_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const subject_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.getSubjectName(subject_r13.value.subject));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.getTeacherName(subject_r13.value.teacher));
    }
}
function AddBatchComponent_ng_container_85_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddBatchComponent_ng_container_85_tr_1_Template, 5, 2, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
        const subject_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r13.value.status);
    }
}
let AddBatchComponent = /*@__PURE__*/ (() => {
    class AddBatchComponent {
        constructor(branchService, branchEmployeeService, batchService, courseService, toastrService, router, route) {
            this.branchService = branchService;
            this.branchEmployeeService = branchEmployeeService;
            this.batchService = batchService;
            this.courseService = courseService;
            this.toastrService = toastrService;
            this.router = router;
            this.route = route;
            this.route.queryParams.subscribe((param) => {
                if (param.mode) {
                    this.ngOnInit();
                }
            });
        }
        ngOnInit() {
            this.loading = true;
            this.branchId = this.branchService.getBranchId();
            if (!this.branchId) {
                this.router.navigate(['../'], { relativeTo: this.route });
                return;
            }
            this.courseService.getCourseData().subscribe((course) => {
                this.course = course;
                if (!this.course) {
                    this.router.navigate(['../'], { relativeTo: this.route });
                    return;
                }
            });
            this.batchId = this.batchService.getBatchId();
            let mode;
            this.route.queryParams.subscribe((param) => {
                mode = param.mode;
            });
            if (mode && mode !== 'edit') {
                this.showToastr('top-right', 'danger', 'Invalid Route');
                this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                return;
            }
            else if (mode && !this.batchId) {
                this.showToastr('top-right', 'danger', 'Batch Not Available');
                this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                return;
            }
            this.batchBasicDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                }),
                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                }),
                rollNoPrefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                    validators: [],
                }),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, {
                    validators: [],
                }),
            });
            this.batchSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                subjects: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([]),
            }, { validators: this.atLeastOneSubjectValidator.bind(this) });
            this.teachers = [];
            this.subjects = this.course.subjects.filter((subject) => subject.status);
            this.subjects.forEach((subject) => {
                const batchSubject = {
                    _id: new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"](),
                    subject: subject._id,
                    teacher: '',
                    status: true,
                };
                this.addBatchSubject(batchSubject);
            });
            this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId, 'teacher').subscribe((teachers) => {
                this.teachers = teachers;
                if (this.batchId) {
                    this.batchService.getBatchForEditing(this.batchId).subscribe((batch) => {
                        if (!batch) {
                            this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                            return;
                        }
                        this.batch = batch;
                        this.batchBasicDetailsForm.patchValue({
                            batchName: batch.basicDetails.batchName,
                            startDate: batch.basicDetails.startDate,
                            duration: batch.basicDetails.rollNoPrefix,
                            description: batch.basicDetails.description,
                        });
                        const batchSubjects = batch.subjects;
                        this.subjects.forEach((curSubject, i) => {
                            const subject = batchSubjects.find((curBatchSubject) => curBatchSubject.subject === curSubject._id);
                            let teacher = '';
                            if (subject) {
                                this.changeSubjectStatus(subject.status, i);
                                this.getBatchSubjects().controls[i].get('_id').setValue(subject._id);
                                if (teachers.find((curTeacher) => curTeacher.employee === subject.teacher)) {
                                    teacher = subject.teacher;
                                }
                            }
                            this.getBatchSubjects().controls[i].get('teacher').setValue(teacher);
                        });
                        this.loading = false;
                    }, (err) => {
                        this.router.navigate(['../page-not-found'], { relativeTo: this.route });
                        return;
                    });
                }
                else {
                    this.loading = false;
                }
            }, (error) => {
                this.showToastr('top-right', 'danger', error);
                this.loading = false;
            });
        }
        atLeastOneSubjectValidator(group) {
            const subjects = group.value.subjects;
            let status = false;
            subjects.forEach((subject) => {
                if (subject.status) {
                    status = true;
                }
            });
            if (!status) {
                return { atLeastOneSubjectError: true };
            }
            return null;
        }
        getBatchSubjects() {
            return this.batchSubjectForm.get('subjects');
        }
        newBatchSubject(batchSubject) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](batchSubject._id ? batchSubject._id : new bson__WEBPACK_IMPORTED_MODULE_2__["ObjectId"]().toString(), {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                }),
                subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](batchSubject.subject ? batchSubject.subject : null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
                }),
                teacher: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](batchSubject.teacher ? batchSubject.teacher : '', {
                    validators: [],
                }),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](batchSubject.status ? batchSubject.status : true, {
                    validators: [],
                }),
            });
        }
        addBatchSubject(batchSubject) {
            const subjects = this.getBatchSubjects();
            subjects.push(this.newBatchSubject(batchSubject));
        }
        changeSubjectStatus(status, i) {
            const batchSubject = this.getBatchSubjects().controls[i];
            batchSubject.get('status').setValue(status);
            if (status) {
                batchSubject.get('teacher').enable();
            }
            else {
                batchSubject.get('teacher').setValue('');
                batchSubject.get('teacher').disable();
            }
        }
        getSubjectName(id) {
            const subject = this.subjects.find((curSubject) => curSubject._id === id);
            if (subject) {
                return subject.subject;
            }
            return '--';
        }
        getTeacherName(id) {
            const teacher = this.teachers.find((curTeacher) => curTeacher.employee === id);
            if (teacher) {
                return teacher.name;
            }
            return '--';
        }
        submitBasicDetails() {
            this.batchBasicDetailsForm.markAllAsTouched();
            if (this.batchBasicDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Basic details are required');
                return;
            }
            this.stepper.next();
        }
        submitSubjects() {
            this.batchSubjectForm.markAllAsTouched();
            if (this.batchSubjectForm.invalid) {
                this.showToastr('top-right', 'danger', 'At least 1 Subject is required');
                return;
            }
            this.stepper.next();
        }
        saveBatch() {
            this.batchBasicDetailsForm.markAllAsTouched();
            this.batchSubjectForm.markAllAsTouched();
            if (this.batchBasicDetailsForm.invalid) {
                this.showToastr('top-right', 'danger', 'Basic details are required');
                return;
            }
            else if (this.batchSubjectForm.invalid) {
                this.showToastr('top-right', 'danger', 'At least 1 Subject is required');
                return;
            }
            this.loading = true;
            const batch = {
                branch: this.branchId,
                category: this.course.basicDetails.category,
                course: this.course._id,
                basicDetails: this.batchBasicDetailsForm.value,
                subjects: this.batchSubjectForm.value.subjects,
            };
            if (!this.batch) {
                this.batchService.addBatch(batch).subscribe((res) => {
                    this.showToastr('top-right', 'success', 'New Batch Added Successfully!');
                    this.router.navigate(['../'], { relativeTo: this.route });
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            }
            else {
                batch._id = this.batch._id;
                this.batchService.editBatch(batch).subscribe((res) => {
                    this.showToastr('top-right', 'success', 'Batch Updated Successfully!');
                    this.router.navigate(['../'], { relativeTo: this.route });
                }, (error) => {
                    this.showToastr('top-right', 'danger', error);
                    this.loading = false;
                });
            }
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
        ngOnDestroy() {
            this.batchService.deleteBatchId();
        }
    }
    AddBatchComponent.ɵfac = function AddBatchComponent_Factory(t) { return new (t || AddBatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_branch_employee_service__WEBPACK_IMPORTED_MODULE_4__["BranchEmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
    AddBatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddBatchComponent, selectors: [["ngx-add-batch"]], viewQuery: function AddBatchComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
            }
        }, decls: 97, vars: 17, consts: [["nbButton", "", "size", "small", "status", "warning", "s", "", 1, "float-right", 3, "click"], [1, ""], [3, "linear"], ["stepper", ""], ["label", "Basic Details", 3, "stepControl"], [1, "", 3, "formGroup", "submit"], [1, "row"], [1, "col-md-4"], [1, "form-control-group"], ["for", "input -batch-name", 1, "label"], ["type", "text", "nbInput", "", "id", "input-batch-name", "name", "batchName", "formControlName", "batchName", "placeholder", "Batch Name", "maxlength", "30", "fullWidth", "", 3, "status"], [4, "ngIf"], ["for", "input -batch-start-date", 1, "label"], ["type", "date", "nbInput", "", "id", "input-batch-start-date", "name", "startDate", "formControlName", "startDate", "fullWidth", "", 3, "status"], ["for", "input-rollNoPrefix", 1, "label"], ["type", "text", "nbInput", "", "id", "input-rollNoPrefix", "name", "rollNoPrefix", "maxlength", "15", "formControlName", "rollNoPrefix", "placeholder", "Roll No Prefix", "fullWidth", ""], [1, "col-md-12"], ["for", "input-billing-description", 1, "label"], ["type", "text", "nbInput", "", "id", "input-description", "name", "description", "formControlName", "description", "placeholder", "Description (Optional)", "fullWidth", ""], [1, "col-md-12", "text-right"], ["nbButton", "", "size", "small", "type", "submit"], ["icon", "arrow-ios-forward-outline"], ["label", "Subject Details", 3, "stepControl"], [1, "step-container", 3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [1, "col-md-6", "text-left"], ["nbButton", "", "size", "small", "nbStepperPrevious", "", 1, ""], ["icon", "arrow-ios-back-outline"], [1, "col-md-6", "text-right"], ["label", "Submit"], [1, "step-container"], [1, "table-responsive"], [1, "table", "table-bordered"], [1, "table", "table-sm", "table-borderless"], ["nbButton", "", "size", "small", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "row", "mb-3", 3, "formGroup"], [1, "col-md-4", "col-sm-6", "mx-auto"], ["name", "status", "formControlName", "status", 3, "id", "checked", "checkedChange"], [3, "for"], ["name", "teacher", "formControlName", "teacher", "placeholder", "Select Teacher", "fullWidth", "", 3, "id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AddBatchComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBatchComponent_Template_button_click_2_listener() { return ctx.back(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Back ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-stepper", 2, 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-step", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function AddBatchComponent_Template_form_submit_11_listener() { return ctx.submitBasicDetails(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Batch Details:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Batch Name:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddBatchComponent_ng_container_20_Template, 2, 1, "ng-container", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Batch Start Date:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddBatchComponent_ng_container_26_Template, 2, 1, "ng-container", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Roll No Prefix:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Description:");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "textarea", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Next");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "nb-icon", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nb-step", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddBatchComponent_Template_form_ngSubmit_45_listener() { return ctx.submitSubjects(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddBatchComponent_ng_container_46_Template, 13, 7, "ng-container", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "nb-icon", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "prev");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Next");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "nb-icon", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nb-step", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "table", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Batch Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Batch Roll No Prefix");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Subjects");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "table", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AddBatchComponent_ng_container_85_Template, 2, 1, "ng-container", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "nb-icon", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "prev");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBatchComponent_Template_button_click_94_listener() { return ctx.saveBatch(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", !ctx.batch ? "Add New Batch" : "Edit Batch " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, ctx.batch.basicDetails.batchName), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.batchBasicDetailsForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.batchBasicDetailsForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.batchBasicDetailsForm.get("batchName").touched ? ctx.batchBasicDetailsForm.get("batchName").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.batchBasicDetailsForm.get("batchName").invalid && ctx.batchBasicDetailsForm.get("batchName").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.batchBasicDetailsForm.get("startDate").touched ? ctx.batchBasicDetailsForm.get("startDate").invalid ? "danger" : "success" : "basic");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.batchBasicDetailsForm.get("startDate").invalid && ctx.batchBasicDetailsForm.get("startDate").touched);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.batchSubjectForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.batchSubjectForm);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.batchSubjectForm.get("subjects")["controls"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.batchBasicDetailsForm.value.batchName);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.batchBasicDetailsForm.value.rollNoPrefix);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.batchBasicDetailsForm.value.description);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.batchSubjectForm.get("subjects")["controls"]);
            }
        }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperPreviousDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: [""] });
    return AddBatchComponent;
})();


/***/ }),

/***/ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddBatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBatchModule", function() { return AddBatchModule; });
/* harmony import */ var _add_batch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-batch.component */ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_batch_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-batch-routing.module */ "./src/app/institute/branch/manage-branch/course/batch/add-batch/add-batch-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");







let AddBatchModule = /*@__PURE__*/ (() => {
    class AddBatchModule {
    }
    AddBatchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddBatchModule });
    AddBatchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddBatchModule_Factory(t) { return new (t || AddBatchModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _add_batch_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddBatchRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ]] });
    return AddBatchModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddBatchModule, { declarations: [_add_batch_component__WEBPACK_IMPORTED_MODULE_0__["AddBatchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _add_batch_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddBatchRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] });
})();


/***/ })

}]);