(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{MDGh:function(e,t,a){"use strict";a.r(t),a.d(t,"AddBatchModule",(function(){return y}));var n=a("ofXK"),r=a("3Pt+"),i=a("no5z"),s=a("fXoL"),l=a("EQut"),c=a("Pj/w"),o=a("lst6"),d=a("IAlr"),m=a("aceb"),h=a("ZatZ"),u=a("tyNb");const b=["stepper"];function p(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",37),s["\u0275\u0275text"](1," Batch Name is required! "),s["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,p,2,0,"p",36),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==e.batchBasicDetailsForm.get("batchName").errors?null:e.batchBasicDetailsForm.get("batchName").errors.required)}}function v(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",37),s["\u0275\u0275text"](1," Batch Start Date is required! "),s["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,v,2,0,"p",36),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==e.batchBasicDetailsForm.get("startDate").errors?null:e.batchBasicDetailsForm.get("startDate").errors.required)}}function f(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",45),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e.employee),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.name)}}function E(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"div",38),s["\u0275\u0275elementStart"](2,"div",39),s["\u0275\u0275elementStart"](3,"div",8),s["\u0275\u0275elementStart"](4,"nb-checkbox",40),s["\u0275\u0275listener"]("checkedChange",(function(a){s["\u0275\u0275restoreView"](e);const n=t.index;return s["\u0275\u0275nextContext"]().changeSubjectStatus(a,n)})),s["\u0275\u0275elementStart"](5,"label",41),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",39),s["\u0275\u0275elementStart"](8,"div",8),s["\u0275\u0275elementStart"](9,"nb-select",42),s["\u0275\u0275elementStart"](10,"nb-option",43),s["\u0275\u0275text"](11,"Select Teacher "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](12,f,2,2,"nb-option",44),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=t.$implicit,a=t.index,n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",e),s["\u0275\u0275advance"](3),s["\u0275\u0275propertyInterpolate1"]("id","status-",a,""),s["\u0275\u0275property"]("checked",e.value.status),s["\u0275\u0275advance"](1),s["\u0275\u0275propertyInterpolate1"]("for","status-",a,""),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.getSubjectName(e.value.subject)),s["\u0275\u0275advance"](3),s["\u0275\u0275propertyInterpolate1"]("id","teacher-",a,""),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",n.teachers)}}function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"th"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.getSubjectName(e.value.subject)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](t.getTeacherName(e.value.teacher))}}function B(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,x,5,2,"tr",11),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.value.status)}}const j=[{path:"",component:(()=>{class e{constructor(e,t,a,n,r,i,s,l){this.branchService=e,this.branchEmployeeService=t,this.batchService=a,this.courseService=n,this.toastrService=r,this.dateService=i,this.router=s,this.route=l,this.route.queryParams.subscribe(e=>{e.mode&&this.ngOnInit()})}ngOnInit(){if(this.loading=!0,this.submit=!1,this.branchId=this.branchService.getBranchId(),!this.branchId)return void this.back();let e;return this.courseService.getCourseData().subscribe(e=>{this.course=e,this.course||this.back()}),this.batchId=this.batchService.getBatchId(),this.route.queryParams.subscribe(t=>{e=t.mode}),e&&"edit"!==e?(this.showToastr("top-right","danger","Invalid Route"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):e&&!this.batchId?(this.showToastr("top-right","danger","Batch Not Available"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):(this.batchBasicDetailsForm=new r.f({batchName:new r.d(null,{validators:[r.u.required]}),startDate:new r.d(null,{validators:[r.u.required]}),rollNoPrefix:new r.d(null,{validators:[]}),description:new r.d(null,{validators:[]})}),this.batchSubjectForm=new r.f({subjects:new r.b([])},{validators:this.atLeastOneSubjectValidator.bind(this)}),this.teachers=[],this.subjects=this.course.subjects.filter(e=>e.status),this.subjects.forEach(e=>{const t={_id:new i.a,subject:e._id,teacher:"",status:!0};this.addBatchSubject(t)}),void this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId,"teacher").subscribe(e=>{this.teachers=e,this.batchId?this.batchService.getBatchForEditing(this.batchId).subscribe(t=>{if(!t)return void this.router.navigate(["../page-not-found"],{relativeTo:this.route});this.batch=t,this.batchBasicDetailsForm.patchValue({batchName:t.basicDetails.batchName,startDate:t.basicDetails.startDate,duration:t.basicDetails.rollNoPrefix,description:t.basicDetails.description});const a=t.subjects;this.subjects.forEach((t,n)=>{const r=a.find(e=>e.subject===t._id);let i="";r&&(this.changeSubjectStatus(r.status,n),this.getBatchSubjects().controls[n].get("_id").setValue(r._id),e.find(e=>e.employee===r.teacher)&&(i=r.teacher)),this.getBatchSubjects().controls[n].get("teacher").setValue(i)}),this.loading=!1},e=>{this.router.navigate(["../page-not-found"],{relativeTo:this.route})}):this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1}))}atLeastOneSubjectValidator(e){let t=!1;return e.value.subjects.forEach(e=>{e.status&&(t=!0)}),t?null:{atLeastOneSubjectError:!0}}getBatchSubjects(){return this.batchSubjectForm.get("subjects")}newBatchSubject(e){return new r.f({_id:new r.d(e._id?e._id:(new i.a).toString(),{validators:[r.u.required]}),subject:new r.d(e.subject?e.subject:null,{validators:[r.u.required]}),teacher:new r.d(e.teacher?e.teacher:"",{validators:[]}),status:new r.d(!e.status||e.status,{validators:[]})})}addBatchSubject(e){this.getBatchSubjects().push(this.newBatchSubject(e))}changeSubjectStatus(e,t){const a=this.getBatchSubjects().controls[t];a.get("status").setValue(e),e?a.get("teacher").enable():(a.get("teacher").setValue(""),a.get("teacher").disable())}getSubjectName(e){const t=this.subjects.find(t=>t._id===e);return t?t.subject:"--"}getTeacherName(e){const t=this.teachers.find(t=>t.employee===e);return t?t.name:"--"}submitBasicDetails(){this.batchBasicDetailsForm.markAllAsTouched(),this.batchBasicDetailsForm.invalid?this.showToastr("top-right","danger","Basic details are required"):this.stepper.next()}submitSubjects(){this.batchSubjectForm.markAllAsTouched(),this.batchSubjectForm.invalid?this.showToastr("top-right","danger","At least 1 Subject is required"):this.stepper.next()}saveBatch(){if(this.batchBasicDetailsForm.markAllAsTouched(),this.batchSubjectForm.markAllAsTouched(),this.batchBasicDetailsForm.invalid)return void this.showToastr("top-right","danger","Basic details are required");if(this.batchSubjectForm.invalid)return void this.showToastr("top-right","danger","At least 1 Subject is required");this.submit=!0;const e={branch:this.branchId,category:this.course.basicDetails.category,course:this.course._id,basicDetails:this.batchBasicDetailsForm.value,subjects:this.batchSubjectForm.value.subjects};this.batch?(e._id=this.batch._id,this.batchService.editBatch(e).subscribe(e=>{this.showToastr("top-right","success","Batch Updated Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.submit=!1})):this.batchService.addBatch(e).subscribe(e=>{this.showToastr("top-right","success","New Batch Added Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.submit=!1})}showToastr(e,t,a){this.toastrService.show(t,a,{position:e,status:t})}back(){this.router.navigate(["../"],{relativeTo:this.route,replaceUrl:!0})}ngOnDestroy(){this.batchService.deleteBatchId()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](m.Gb),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](u.c),s["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-batch"]],viewQuery:function(e,t){var a;1&e&&s["\u0275\u0275viewQuery"](b,!0),2&e&&s["\u0275\u0275queryRefresh"](a=s["\u0275\u0275loadQuery"]())&&(t.stepper=a.first)},decls:102,vars:21,consts:[["nbButton","","size","small","status","warning","s","",1,"float-right",3,"click"],[1,""],[3,"linear"],["stepper",""],["label","Basic Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-4"],[1,"form-control-group"],["for","input -batch-name",1,"label"],["type","text","nbInput","","id","input-batch-name","name","batchName","formControlName","batchName","placeholder","Batch Name","maxlength","30","fullWidth","",3,"status"],[4,"ngIf"],["for","input -batch-start-date",1,"label"],["type","date","nbInput","","id","input-batch-start-date","name","startDate","formControlName","startDate","fullWidth","",3,"status"],["for","input-rollNoPrefix",1,"label"],["type","text","nbInput","","id","input-rollNoPrefix","name","rollNoPrefix","maxlength","15","formControlName","rollNoPrefix","placeholder","Roll No Prefix","fullWidth",""],[1,"col-md-12"],["for","input-billing-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description (Optional)","fullWidth",""],[1,"col-md-12","text-right"],["nbButton","","size","small","type","submit"],["icon","arrow-ios-forward-outline"],["label","Subject Details",3,"stepControl"],[1,"step-container",3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],[1,"col-6","text-left"],["nbButton","","size","small","nbStepperPrevious","",1,""],["icon","arrow-ios-back-outline"],[1,"col-6","text-right"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"table","table-sm","table-borderless"],["nbButton","","size","small","nbStepperPrevious","",1,"",3,"disabled"],["nbButton","","size","small","nbSpinnerStatus","primary","nbSpinnerSize","small",3,"disabled","nbSpinner","click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"row","mb-3",3,"formGroup"],[1,"col-md-4","col-sm-6","mx-auto"],["name","status","formControlName","status",3,"id","checked","checkedChange"],[3,"for"],["name","teacher","formControlName","teacher","placeholder","Select Teacher","fullWidth","",3,"id"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"button",0),s["\u0275\u0275listener"]("click",(function(){return t.back()})),s["\u0275\u0275text"](3," Back "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"h3",1),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"uppercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"nb-card-body"),s["\u0275\u0275elementStart"](8,"nb-stepper",2,3),s["\u0275\u0275elementStart"](10,"nb-step",4),s["\u0275\u0275elementStart"](11,"form",5),s["\u0275\u0275listener"]("submit",(function(){return t.submitBasicDetails()})),s["\u0275\u0275elementStart"](12,"h6"),s["\u0275\u0275text"](13,"Batch Details:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"div",6),s["\u0275\u0275elementStart"](15,"div",7),s["\u0275\u0275elementStart"](16,"div",8),s["\u0275\u0275elementStart"](17,"label",9),s["\u0275\u0275text"](18,"Batch Name:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](19,"input",10),s["\u0275\u0275template"](20,S,2,1,"ng-container",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",7),s["\u0275\u0275elementStart"](22,"div",8),s["\u0275\u0275elementStart"](23,"label",12),s["\u0275\u0275text"](24,"Batch Start Date:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](25,"input",13),s["\u0275\u0275template"](26,g,2,1,"ng-container",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](27,"div",7),s["\u0275\u0275elementStart"](28,"div",8),s["\u0275\u0275elementStart"](29,"label",14),s["\u0275\u0275text"](30,"Roll No Prefix:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](31,"input",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"div",16),s["\u0275\u0275elementStart"](33,"div",8),s["\u0275\u0275elementStart"](34,"label",17),s["\u0275\u0275text"](35,"Description:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](36,"textarea",18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](37,"hr"),s["\u0275\u0275elementStart"](38,"div",6),s["\u0275\u0275elementStart"](39,"div",19),s["\u0275\u0275elementStart"](40,"button",20),s["\u0275\u0275elementStart"](41,"span"),s["\u0275\u0275text"](42,"Next"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](43,"nb-icon",21),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"nb-step",22),s["\u0275\u0275elementStart"](45,"form",23),s["\u0275\u0275listener"]("ngSubmit",(function(){return t.submitSubjects()})),s["\u0275\u0275template"](46,E,13,7,"ng-container",24),s["\u0275\u0275element"](47,"hr"),s["\u0275\u0275elementStart"](48,"div",6),s["\u0275\u0275elementStart"](49,"div",25),s["\u0275\u0275elementStart"](50,"button",26),s["\u0275\u0275element"](51,"nb-icon",27),s["\u0275\u0275elementStart"](52,"span"),s["\u0275\u0275text"](53,"prev"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](54,"div",28),s["\u0275\u0275elementStart"](55,"button",20),s["\u0275\u0275elementStart"](56,"span"),s["\u0275\u0275text"](57,"Next"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](58,"nb-icon",21),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](59,"nb-step",29),s["\u0275\u0275elementStart"](60,"div",30),s["\u0275\u0275elementStart"](61,"div",31),s["\u0275\u0275elementStart"](62,"table",32),s["\u0275\u0275elementStart"](63,"tbody"),s["\u0275\u0275elementStart"](64,"tr"),s["\u0275\u0275elementStart"](65,"th"),s["\u0275\u0275text"](66,"Batch Name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](67,"td"),s["\u0275\u0275text"](68),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](69,"tr"),s["\u0275\u0275elementStart"](70,"th"),s["\u0275\u0275text"](71,"Batch Start Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](72,"td"),s["\u0275\u0275text"](73),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](74,"tr"),s["\u0275\u0275elementStart"](75,"th"),s["\u0275\u0275text"](76,"Batch Roll No Prefix"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](77,"td"),s["\u0275\u0275text"](78),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](79,"tr"),s["\u0275\u0275elementStart"](80,"th"),s["\u0275\u0275text"](81,"Description"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](82,"td"),s["\u0275\u0275text"](83),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](84,"tr"),s["\u0275\u0275elementStart"](85,"th"),s["\u0275\u0275text"](86,"Subjects"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](87,"td"),s["\u0275\u0275elementStart"](88,"table",33),s["\u0275\u0275elementStart"](89,"tbody"),s["\u0275\u0275template"](90,B,2,1,"ng-container",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](91,"hr"),s["\u0275\u0275elementStart"](92,"div",6),s["\u0275\u0275elementStart"](93,"div",25),s["\u0275\u0275elementStart"](94,"button",34),s["\u0275\u0275element"](95,"nb-icon",27),s["\u0275\u0275elementStart"](96,"span"),s["\u0275\u0275text"](97,"prev"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](98,"div",28),s["\u0275\u0275elementStart"](99,"button",35),s["\u0275\u0275listener"]("click",(function(){return t.saveBatch()})),s["\u0275\u0275elementStart"](100,"span"),s["\u0275\u0275text"](101,"Submit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"](" ",t.batch?"Edit Batch "+s["\u0275\u0275pipeBind1"](6,19,t.batch.basicDetails.batchName):"Add New Batch"," "),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("linear",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("stepControl",t.batchBasicDetailsForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.batchBasicDetailsForm),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("status",t.batchBasicDetailsForm.get("batchName").touched?t.batchBasicDetailsForm.get("batchName").invalid?"danger":"success":"basic"),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.batchBasicDetailsForm.get("batchName").invalid&&t.batchBasicDetailsForm.get("batchName").touched),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("status",t.batchBasicDetailsForm.get("startDate").touched?t.batchBasicDetailsForm.get("startDate").invalid?"danger":"success":"basic"),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.batchBasicDetailsForm.get("startDate").invalid&&t.batchBasicDetailsForm.get("startDate").touched),s["\u0275\u0275advance"](18),s["\u0275\u0275property"]("stepControl",t.batchSubjectForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.batchSubjectForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.batchSubjectForm.get("subjects").controls),s["\u0275\u0275advance"](22),s["\u0275\u0275textInterpolate"](t.batchBasicDetailsForm.value.batchName),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.batchBasicDetailsForm.value.startDate)),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"](" ",t.batchBasicDetailsForm.value.rollNoPrefix?t.batchBasicDetailsForm.value.rollNoPrefix:"--"," "),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"](" ",t.batchBasicDetailsForm.value.description?t.batchBasicDetailsForm.value.description:"--"," "),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngForOf",t.batchSubjectForm.get("subjects").controls),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("disabled",t.submit),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("disabled",t.submit)("nbSpinner",t.submit))},directives:[m.y,m.A,m.v,m.x,m.vb,m.ub,r.v,r.n,r.g,m.Q,r.a,r.m,r.e,r.i,n.n,m.N,n.m,m.xb,m.sb,m.D,m.nb,m.gb],pipes:[n.w],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>a.e(0).then(a.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let D=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.g.forChild(j)],u.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,D,m.B,m.w,m.ob,m.P,m.R,m.M,m.E,m.tb,m.wb,m.M,r.s]]}),e})()}}]);
//# sourceMappingURL=30-es2015.fe3ad78c78549f2ce915.js.map