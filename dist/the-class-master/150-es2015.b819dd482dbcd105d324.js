(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{"59Cr":function(e,t,n){"use strict";n.r(t),n.d(t,"SubmissionGradingModule",(function(){return I}));var s=n("3Pt+"),r=n("aceb"),i=n("ofXK"),a=n("fXoL"),m=n("EQut"),o=n("cbqz"),l=n("AVwh"),d=n("ZatZ"),u=n("tyNb");function c(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",17),a["\u0275\u0275text"](1," Assignment Grades are required! "),a["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",17),a["\u0275\u0275text"](1," Assignment Total Grades Should be more than equal to 0 "),a["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"p",17),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](3);a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" Assignment Total Grades Should be less than equal to ",e.assignment.totalGrades," ")}}function b(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,c,2,0,"p",16),a["\u0275\u0275template"](2,g,2,0,"p",16),a["\u0275\u0275template"](3,p,2,1,"p",16),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.assignmentSubmissionForm.get("grades").errors?null:e.assignmentSubmissionForm.get("grades").errors.required),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.assignmentSubmissionForm.get("totalGrades").errors?null:e.assignmentSubmissionForm.get("totalGrades").errors.min),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.assignmentSubmissionForm.get("totalGrades").errors?null:e.assignmentSubmissionForm.get("totalGrades").errors.max)}}function S(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",17),a["\u0275\u0275text"](1," Assignment Remark is required! "),a["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,S,2,0,"p",16),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.assignmentSubmissionForm.get("remark").errors?null:e.assignmentSubmissionForm.get("remark").errors.required)}}function f(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"form",3),a["\u0275\u0275listener"]("submit",(function(){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().saveGrades()})),a["\u0275\u0275elementStart"](1,"div",4),a["\u0275\u0275elementStart"](2,"div",5),a["\u0275\u0275elementStart"](3,"p"),a["\u0275\u0275elementStart"](4,"strong"),a["\u0275\u0275text"](5,"Description : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](6,"br"),a["\u0275\u0275elementStart"](7,"span"),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"div",6),a["\u0275\u0275elementStart"](10,"p"),a["\u0275\u0275elementStart"](11,"strong"),a["\u0275\u0275text"](12,"Submitted On : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"strong"),a["\u0275\u0275text"](15,"Attachment : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"a",7),a["\u0275\u0275text"](17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"div",6),a["\u0275\u0275elementStart"](19,"div",8),a["\u0275\u0275elementStart"](20,"label",9),a["\u0275\u0275text"](21,"Grades:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](22,"input",10),a["\u0275\u0275template"](23,b,4,3,"ng-container",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](24,"div",5),a["\u0275\u0275elementStart"](25,"div",8),a["\u0275\u0275elementStart"](26,"label",12),a["\u0275\u0275text"](27,"Remark:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](28,"textarea",13),a["\u0275\u0275template"](29,h,2,1,"ng-container",11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](30,"hr"),a["\u0275\u0275elementStart"](31,"div",4),a["\u0275\u0275elementStart"](32,"div",14),a["\u0275\u0275elementStart"](33,"button",15),a["\u0275\u0275text"](34," Save "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("formGroup",e.assignmentSubmissionForm),a["\u0275\u0275advance"](8),a["\u0275\u0275textInterpolate"](e.assignmentSubmission.description),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate1"]("",e.dateService.millisecondsToDate(e.assignmentSubmission.createdAt)," "),a["\u0275\u0275advance"](3),a["\u0275\u0275propertyInterpolate"]("download",e.assignmentSubmission.studentName+"-"+e.assignmentSubmission.fileName),a["\u0275\u0275property"]("href",e.assignmentSubmission.secureUrl,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.assignmentSubmission.fileName," "),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("max",e.assignment.totalGrades)("status",e.assignmentSubmissionForm.get("grades").touched?e.assignmentSubmissionForm.get("grades").invalid?"danger":"success":"basic")("placeholder",e.assignment.totalGrades),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.assignmentSubmissionForm.get("grades").invalid&&e.assignmentSubmissionForm.get("grades").touched),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("status",e.assignmentSubmissionForm.get("remark").touched?e.assignmentSubmissionForm.get("remark").invalid?"danger":"success":"basic"),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",e.assignmentSubmissionForm.get("remark").invalid&&e.assignmentSubmissionForm.get("remark").touched),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("disabled",e.submit)("nbSpinner",e.submit)}}function v(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",18),a["\u0275\u0275text"](1,"Loading..."),a["\u0275\u0275elementEnd"]())}const x=[{path:"",component:(()=>{class e{constructor(e,t,n,s,r,i,a){this.branchService=e,this.assignmentSubmissionService=t,this.assignmentService=n,this.dateService=s,this.router=r,this.route=i,this.toastrService=a}ngOnInit(){this.loading=!0,this.submit=!1,this.branchId=this.branchService.getBranchId(),this.branchId?this.assignmentService.getAssignmentData().subscribe(e=>{if(this.assignment=e,!e)return this.showToastr("top-right","danger","Assignment Not Found"),void this.back();this.assignmentSubmissionService.getAssignmentSubmissionData().subscribe(t=>{this.assignmentSubmission=t,t?(this.assignmentSubmissionForm=new s.f({grades:new s.d(t.grades,{validators:[s.u.required,s.u.min(0),s.u.max(+e.totalGrades)]}),remark:new s.d(t.remark,{validators:[s.u.required]})}),this.loading=!1):this.back()})}):this.back()}saveGrades(){if(this.assignmentSubmissionForm.markAllAsTouched(),this.assignmentSubmissionForm.invalid)return void this.showToastr("top-right","danger","All grading Fields are required");this.submit=!0;const e=Object.assign({_id:this.assignmentSubmission._id},this.assignmentSubmissionForm.value);this.assignmentSubmissionService.saveAssignmentSubmissionGrades(e).subscribe(e=>{this.showToastr("top-right","success","Grades Updated Successfully"),this.back()},e=>{this.showToastr("top-right","danger",e),this.submit=!1})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}back(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.assignmentSubmissionService.deleteAssignmentSubmissionData()}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](u.c),a["\u0275\u0275directiveInject"](u.a),a["\u0275\u0275directiveInject"](r.Gb))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-submission-grading"]],decls:22,vars:5,consts:[[1,"pl-3"],[3,"formGroup","submit",4,"ngIf","ngIfElse"],["loadingData",""],[3,"formGroup","submit"],[1,"row"],[1,"col-md-12"],[1,"col-md-6"],["target","_blank",3,"href","download"],[1,"form-control-group"],["for","input-submission-grades",1,"label"],["type","number","nbInput","","id","input-submission-grades","name","grades","formControlName","grades","min","0","fullWidth","",3,"max","status","placeholder"],[4,"ngIf"],["for","input-submission-remark",1,"label"],["type","text","nbInput","","id","input-submission-remark","name","remark","rows","2","formControlName","remark","placeholder","Remark","fullWidth","",3,"status"],[1,"col-12"],["type","submit","nbButton","","size","small","status","primary","nbSpinnerStatus","primary","nbSpinnerSize","small",1,"float-right",3,"disabled","nbSpinner"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"pt-5","pb-5","text-center"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div"),a["\u0275\u0275elementStart"](3,"strong"),a["\u0275\u0275text"](4,"Assignment : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"span"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"br"),a["\u0275\u0275elementStart"](8,"strong"),a["\u0275\u0275text"](9,"Submission Date : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"span"),a["\u0275\u0275text"](11),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](12,"br"),a["\u0275\u0275elementStart"](13,"strong"),a["\u0275\u0275text"](14,"Description : "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](15,"br"),a["\u0275\u0275elementStart"](16,"span",0),a["\u0275\u0275text"](17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"nb-card-body"),a["\u0275\u0275template"](19,f,35,14,"form",1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](20,v,2,0,"ng-template",null,2,a["\u0275\u0275templateRefExtractor"])),2&e){const e=a["\u0275\u0275reference"](21);a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate"](t.assignment.topic),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.assignment.submissionDate)),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate"](t.assignment.description),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.x,i.n,s.v,s.n,s.g,s.q,r.Q,s.a,s.m,s.e,r.v,r.sb],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let E=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.g.forChild(x)],u.g]}),e})(),I=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,E,r.B,r.w,r.P,r.Jb,r.tb,r.R,s.s]]}),e})()}}]);
//# sourceMappingURL=150-es2015.b819dd482dbcd105d324.js.map