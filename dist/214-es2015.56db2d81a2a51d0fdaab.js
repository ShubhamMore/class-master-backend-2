(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{S0f3:function(e,t,n){"use strict";n.r(t);var i=n("3Pt+"),s=n("ofXK"),a=n("tyNb"),l=n("EQut"),r=n("AVwh"),o=n("cbqz"),m=n("fXoL"),d=n("aceb");const c=["stepper"],u=["filePicker"];function p(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p",34),m["\u0275\u0275text"](1," Assignment Description is required! "),m["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,p,2,0,"p",33),m["\u0275\u0275elementContainerEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",null==e.assignmentSubmissionDetailsForm.get("description").errors?null:e.assignmentSubmissionDetailsForm.get("description").errors.required)}}function b(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",35),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().clearFile()})),m["\u0275\u0275element"](1,"nb-icon",36),m["\u0275\u0275elementEnd"]()}}function g(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275elementStart"](1,"p",34),m["\u0275\u0275text"](2," *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementContainerEnd"]())}const S=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,a){this.branchService=e,this.assignmentSubmissionService=t,this.assignmentService=n,this.toastrService=i,this.router=s,this.route=a}ngOnInit(){this.loading=!0,this.invalidFile=!1,this.fileName=null,this.branchId=this.branchService.getBranchId(),this.branchId?(this.assignmentService.getAssignmentData().subscribe(e=>{this.assignment=e}),this.assignmentSubmissionDetailsForm=new i.f({description:new i.d(null,{validators:[i.u.required]})}),this.assignmentSubmissionService.getSubmissionOfAssignment(this.assignment._id).subscribe(e=>{e&&(this.assignmentSubmission=e,this.assignmentSubmissionDetailsForm.patchValue({description:e.description}),this.fileName=e.fileName),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})):this.back()}onFilePicked(e){this.invalidFile=!1;const t=e.target.files;let n=null;if(n=t[0].name.substring(t[0].name.lastIndexOf(".")+1).toLowerCase(),-1===["pdf","jpg","png","jpeg","mp4"].indexOf(n))return this.invalidFile=!0,this.fileName=t[0].name,void(this.fileInput.nativeElement.value="");this.invalidFile=!1,this.uploadAssignmentSubmission=t[0],this.fileName=t[0].name,this.fileInput.nativeElement.value=""}clearFile(){this.uploadAssignmentSubmission=null,this.fileName=null,this.fileInput.nativeElement.value="",this.invalidFile=!1}submitAssignmentDetails(){if(this.assignmentSubmissionDetailsForm.markAllAsTouched(),!this.assignmentSubmissionDetailsForm.invalid)return this.assignmentSubmission||this.uploadAssignmentSubmission?void(this.invalidFile?this.showToastr("top-right","danger","Select Valid File"):this.stepper.next()):(this.showToastr("top-right","danger","Please select a File"),void(this.invalidFile=!0));this.showToastr("top-right","danger","Assignment details are required")}saveAssignment(){if(this.assignmentSubmissionDetailsForm.markAllAsTouched(),this.assignmentSubmissionDetailsForm.invalid)return void this.showToastr("top-right","danger","Assignment details are required");if(!this.assignmentSubmission&&!this.uploadAssignmentSubmission)return this.showToastr("top-right","danger","Please select a File"),void(this.invalidFile=!0);if(this.invalidFile)return void this.showToastr("top-right","danger","Select Valid File");this.loading=!0;const e=new FormData;e.append("branch",this.branchId),e.append("assignment",this.assignment._id),e.append("description",this.assignmentSubmissionDetailsForm.value.description),this.uploadAssignmentSubmission&&e.append("assignmentSubmission",this.uploadAssignmentSubmission,this.uploadAssignmentSubmission.name.substring(0,this.uploadAssignmentSubmission.name.lastIndexOf("."))),this.assignmentSubmission?(e.append("_id",this.assignmentSubmission._id),this.assignmentSubmissionService.updateAssignmentSubmission(e).subscribe(e=>{this.showToastr("top-right","success","Assignment Submission Updated Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.loading=!1})):this.assignmentSubmissionService.submitAssignment(e).subscribe(e=>{this.showToastr("top-right","success","New Assignment Added Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}back(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](r.a),m["\u0275\u0275directiveInject"](d.Db),m["\u0275\u0275directiveInject"](a.c),m["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-assignment-submission"]],viewQuery:function(e,t){var n;1&e&&(m["\u0275\u0275viewQuery"](c,!0),m["\u0275\u0275viewQuery"](u,!0)),2&e&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.stepper=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.fileInput=n.first))},decls:91,vars:14,consts:[["nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,""],[1,"table-responsive"],[1,"table"],[3,"linear"],["stepper",""],["label","Basic Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-12"],[1,"form-control-group"],["for","input-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description","fullWidth","",3,"status"],[4,"ngIf"],[1,"col-md-6"],["for","input-subject",1,"label"],["type","file","nbInput","","id","input-file","name","file","placeholder","Select File","fullWidth","","hidden","",3,"change"],["filePicker",""],["type","button","nbPrefix","","nbButton","","ghost","","nbTooltip","Attach File",3,"click"],["icon","attach-outline","pack","eva"],["type","text","nbInput","","fullWidth","","placeholder","Attach File","disabled","",3,"value","click"],["type","button","nbSuffix","","nbButton","","ghost","","nbTooltip","Remove File",3,"click",4,"ngIf"],[1,"col-md-12","text-right"],["nbButton","","type","submit"],["icon","arrow-ios-forward-outline"],["label","Submit"],[1,"step-container"],[1,"table","table-bordered"],[1,"col-md-6","text-left"],["nbButton","","nbStepperPrevious","",1,""],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["nbButton","",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],["type","button","nbSuffix","","nbButton","","ghost","","nbTooltip","Remove File",3,"click"],["icon","close-outline","status","danger","pack","eva"]],template:function(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"button",0),m["\u0275\u0275listener"]("click",(function(){return t.back()})),m["\u0275\u0275text"](3," Back "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"h3",1),m["\u0275\u0275text"](5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"nb-card"),m["\u0275\u0275elementStart"](7,"nb-card-header"),m["\u0275\u0275elementStart"](8,"div",2),m["\u0275\u0275elementStart"](9,"table",3),m["\u0275\u0275elementStart"](10,"tbody"),m["\u0275\u0275elementStart"](11,"tr"),m["\u0275\u0275elementStart"](12,"th"),m["\u0275\u0275text"](13,"Assignment Topic"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"th"),m["\u0275\u0275text"](15,":"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"th"),m["\u0275\u0275text"](17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tr"),m["\u0275\u0275elementStart"](19,"th"),m["\u0275\u0275text"](20,"Assignment Description"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](21,"th"),m["\u0275\u0275text"](22,":"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](23,"th"),m["\u0275\u0275text"](24),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"tr"),m["\u0275\u0275elementStart"](26,"th"),m["\u0275\u0275text"](27,"Assignment Submission Date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](28,"th"),m["\u0275\u0275text"](29,":"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"th"),m["\u0275\u0275text"](31),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"nb-card-body"),m["\u0275\u0275elementStart"](33,"nb-stepper",4,5),m["\u0275\u0275elementStart"](35,"nb-step",6),m["\u0275\u0275elementStart"](36,"form",7),m["\u0275\u0275listener"]("submit",(function(){return t.submitAssignmentDetails()})),m["\u0275\u0275elementStart"](37,"h6"),m["\u0275\u0275text"](38,"Assignment Details:"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](39,"div",8),m["\u0275\u0275elementStart"](40,"div",9),m["\u0275\u0275elementStart"](41,"div",10),m["\u0275\u0275elementStart"](42,"label",11),m["\u0275\u0275text"](43,"Description:"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](44,"textarea",12),m["\u0275\u0275template"](45,h,2,1,"ng-container",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"div",14),m["\u0275\u0275elementStart"](47,"div",10),m["\u0275\u0275elementStart"](48,"label",15),m["\u0275\u0275text"](49,"Attach File"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"input",16,17),m["\u0275\u0275listener"]("change",(function(e){return t.onFilePicked(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](52,"nb-form-field"),m["\u0275\u0275elementStart"](53,"button",18),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275reference"](51).click()})),m["\u0275\u0275element"](54,"nb-icon",19),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](55,"input",20),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275reference"](51).click()})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](56,b,2,0,"button",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](57,g,3,0,"ng-container",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](58,"hr"),m["\u0275\u0275elementStart"](59,"div",8),m["\u0275\u0275elementStart"](60,"div",22),m["\u0275\u0275elementStart"](61,"button",23),m["\u0275\u0275elementStart"](62,"span"),m["\u0275\u0275text"](63,"Next"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](64,"nb-icon",24),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](65,"nb-step",25),m["\u0275\u0275elementStart"](66,"div",26),m["\u0275\u0275elementStart"](67,"div",2),m["\u0275\u0275elementStart"](68,"table",27),m["\u0275\u0275elementStart"](69,"tbody"),m["\u0275\u0275elementStart"](70,"tr"),m["\u0275\u0275elementStart"](71,"th"),m["\u0275\u0275text"](72,"Description"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](73,"td"),m["\u0275\u0275text"](74),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](75,"tr"),m["\u0275\u0275elementStart"](76,"th"),m["\u0275\u0275text"](77,"Attach File"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](78,"td"),m["\u0275\u0275text"](79),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](80,"hr"),m["\u0275\u0275elementStart"](81,"div",8),m["\u0275\u0275elementStart"](82,"div",28),m["\u0275\u0275elementStart"](83,"button",29),m["\u0275\u0275element"](84,"nb-icon",30),m["\u0275\u0275elementStart"](85,"span"),m["\u0275\u0275text"](86,"prev"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](87,"div",31),m["\u0275\u0275elementStart"](88,"button",32),m["\u0275\u0275listener"]("click",(function(){return t.saveAssignment()})),m["\u0275\u0275elementStart"](89,"span"),m["\u0275\u0275text"](90,"Submit"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}2&e&&(m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"](" ",t.assignmentSubmission?"Edit Submission":"Submission"," "),m["\u0275\u0275advance"](12),m["\u0275\u0275textInterpolate"](t.assignment.topic),m["\u0275\u0275advance"](7),m["\u0275\u0275textInterpolate"](t.assignment.description),m["\u0275\u0275advance"](7),m["\u0275\u0275textInterpolate"](t.assignment.submissionDate),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("linear",!0),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("stepControl",t.assignmentSubmissionDetailsForm),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.assignmentSubmissionDetailsForm),m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("status",t.assignmentSubmissionDetailsForm.get("description").touched?t.assignmentSubmissionDetailsForm.get("description").invalid?"danger":"success":"basic"),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.assignmentSubmissionDetailsForm.get("description").invalid&&t.assignmentSubmissionDetailsForm.get("description").touched),m["\u0275\u0275advance"](10),m["\u0275\u0275property"]("value",t.fileName),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.uploadAssignmentSubmission||!t.assignment&&t.fileName),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.invalidFile),m["\u0275\u0275advance"](17),m["\u0275\u0275textInterpolate"](t.assignmentSubmissionDetailsForm.value.description),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate"](t.uploadAssignmentSubmission?t.fileName:"--"))},directives:[d.x,d.z,d.u,d.w,d.sb,d.rb,i.v,i.n,i.g,d.P,i.a,i.m,i.e,s.n,d.K,d.ib,d.Fb,d.M,d.ub,d.vb],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let f=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.g.forChild(S)],a.g]}),e})();n.d(t,"AssignmentSubmissionModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c,f,d.A,d.v,d.nb,d.O,d.Q,d.Gb,d.L,d.tb,i.s]]}),e})()}}]);