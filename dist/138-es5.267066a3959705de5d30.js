function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"59Cr":function(e,t,n){"use strict";n.r(t);var s=n("3Pt+"),r=n("aceb"),a=n("ofXK"),i=n("cbqz"),o=n("ZatZ"),m=n("AVwh"),l=n("EQut"),d=n("fXoL"),u=n("tyNb");function c(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",17),d["\u0275\u0275text"](1," Assignment Grades are required! "),d["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",17),d["\u0275\u0275text"](1," Assignment Total Grades Should be more than equal to 0 "),d["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p",17),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" Assignment Total Grades Should be less than equal to ",n.assignment.totalGrades," ")}}function b(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,c,2,0,"p",16),d["\u0275\u0275template"](2,g,2,0,"p",16),d["\u0275\u0275template"](3,p,2,1,"p",16),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.assignmentSubmissionForm.get("grades").errors?null:n.assignmentSubmissionForm.get("grades").errors.required),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.assignmentSubmissionForm.get("totalGrades").errors?null:n.assignmentSubmissionForm.get("totalGrades").errors.min),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.assignmentSubmissionForm.get("totalGrades").errors?null:n.assignmentSubmissionForm.get("totalGrades").errors.max)}}function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",17),d["\u0275\u0275text"](1," Assignment Remark is required! "),d["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,f,2,0,"p",16),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.assignmentSubmissionForm.get("remark").errors?null:n.assignmentSubmissionForm.get("remark").errors.required)}}function v(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"form",3),d["\u0275\u0275listener"]("submit",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().saveGrades()})),d["\u0275\u0275elementStart"](1,"div",4),d["\u0275\u0275elementStart"](2,"div",5),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275elementStart"](4,"strong"),d["\u0275\u0275text"](5,"Description : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](6,"br"),d["\u0275\u0275elementStart"](7,"span"),d["\u0275\u0275text"](8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"div",6),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275elementStart"](11,"strong"),d["\u0275\u0275text"](12,"Submitted On : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"strong"),d["\u0275\u0275text"](15,"Attachment : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"a",7),d["\u0275\u0275text"](17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"div",6),d["\u0275\u0275elementStart"](19,"div",8),d["\u0275\u0275elementStart"](20,"label",9),d["\u0275\u0275text"](21,"Grades:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](22,"input",10),d["\u0275\u0275template"](23,b,4,3,"ng-container",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"div",5),d["\u0275\u0275elementStart"](25,"div",8),d["\u0275\u0275elementStart"](26,"label",12),d["\u0275\u0275text"](27,"Remark:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](28,"textarea",13),d["\u0275\u0275template"](29,S,2,1,"ng-container",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](30,"hr"),d["\u0275\u0275elementStart"](31,"div",4),d["\u0275\u0275elementStart"](32,"div",14),d["\u0275\u0275elementStart"](33,"button",15),d["\u0275\u0275text"](34," Save "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var s=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("formGroup",s.assignmentSubmissionForm),d["\u0275\u0275advance"](8),d["\u0275\u0275textInterpolate"](s.assignmentSubmission.description),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("",s.dateService.formatDate(s.assignmentSubmission.createdAt)," "),d["\u0275\u0275advance"](3),d["\u0275\u0275propertyInterpolate"]("download",s.assignmentSubmission.studentName+"-"+s.assignmentSubmission.fileName),d["\u0275\u0275property"]("href",s.assignmentSubmission.secureUrl,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",s.assignmentSubmission.fileName," "),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("max",s.assignment.totalGrades)("status",s.assignmentSubmissionForm.get("grades").touched?s.assignmentSubmissionForm.get("grades").invalid?"danger":"success":"basic")("placeholder",s.assignment.totalGrades),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",s.assignmentSubmissionForm.get("grades").invalid&&s.assignmentSubmissionForm.get("grades").touched),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("status",s.assignmentSubmissionForm.get("remark").touched?s.assignmentSubmissionForm.get("remark").invalid?"danger":"success":"basic"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",s.assignmentSubmissionForm.get("remark").invalid&&s.assignmentSubmissionForm.get("remark").touched)}}function h(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",18),d["\u0275\u0275text"](1," Loading... "),d["\u0275\u0275elementEnd"]())}var x,E,y=[{path:"",component:(x=function(){function e(t,n,s,r,a,i,o){_classCallCheck(this,e),this.branchService=t,this.assignmentSubmissionService=n,this.assignmentService=s,this.dateService=r,this.router=a,this.route=i,this.toastrService=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.assignmentService.getAssignmentData().subscribe((function(t){if(e.assignment=t,!t)return e.showToastr("top-right","danger","Assignment Not Found"),void e.back();e.assignmentSubmissionService.getAssignmentSubmissionData().subscribe((function(n){if(e.assignmentSubmission=n,!n)return e.showToastr("top-right","danger","Assignment Submission Not Found"),void e.back();e.assignmentSubmissionForm=new s.f({grades:new s.d(n.grades,{validators:[s.u.required,s.u.min(0),s.u.max(+t.totalGrades)]}),remark:new s.d(n.remark,{validators:[s.u.required]})}),e.loading=!1}))})):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"saveGrades",value:function(){var e=this;if(this.assignmentSubmissionForm.markAllAsTouched(),this.assignmentSubmissionForm.invalid)this.showToastr("top-right","danger","All grading Fields are required");else{this.loading=!0;var t=Object.assign({_id:this.assignmentSubmission._id},this.assignmentSubmissionForm.value);this.assignmentSubmissionService.saveAssignmentSubmissionGrades(t).subscribe((function(t){e.showToastr("top-right","success","Grades Updated Successfully"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.assignmentSubmissionService.deleteAssignmentSubmissionData()}}]),e}(),x.\u0275fac=function(e){return new(e||x)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](i.a),d["\u0275\u0275directiveInject"](m.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](u.c),d["\u0275\u0275directiveInject"](u.a),d["\u0275\u0275directiveInject"](r.Db))},x.\u0275cmp=d["\u0275\u0275defineComponent"]({type:x,selectors:[["ngx-submission-grading"]],decls:22,vars:5,consts:[[1,"pl-3"],[3,"formGroup","submit",4,"ngIf","ngIfElse"],["loadingData",""],[3,"formGroup","submit"],[1,"row"],[1,"col-md-12"],[1,"col-md-6"],["target","_blank",3,"href","download"],[1,"form-control-group"],["for","input-submission-grades",1,"label"],["type","number","nbInput","","id","input-submission-grades","name","grades","formControlName","grades","min","0","fullWidth","",3,"max","status","placeholder"],[4,"ngIf"],["for","input-submission-remark",1,"label"],["type","text","nbInput","","id","input-submission-remark","name","remark","rows","2","formControlName","remark","placeholder","Remark","fullWidth","",3,"status"],[1,"col-12"],["type","submit","nbButton","","status","primary","size","small",1,"float-right"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"pt-5","pb-5","text-center"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div"),d["\u0275\u0275elementStart"](3,"strong"),d["\u0275\u0275text"](4,"Assignment : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"span"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"br"),d["\u0275\u0275elementStart"](8,"strong"),d["\u0275\u0275text"](9,"Submission Date : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"span"),d["\u0275\u0275text"](11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](12,"br"),d["\u0275\u0275elementStart"](13,"strong"),d["\u0275\u0275text"](14,"Description : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](15,"br"),d["\u0275\u0275elementStart"](16,"span",0),d["\u0275\u0275text"](17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"nb-card-body"),d["\u0275\u0275template"](19,v,35,12,"form",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](20,h,2,0,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){var n=d["\u0275\u0275reference"](21);d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate"](t.assignment.topic),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.assignment.submissionDate)),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate"](t.assignment.description),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[r.x,r.z,r.w,a.n,s.v,s.n,s.g,s.q,r.P,s.a,s.m,s.e,r.u],styles:[""]}),x)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],I=((E=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[u.g.forChild(y)],u.g]}),E);n.d(t,"SubmissionGradingModule",(function(){return w}));var k,w=((k=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[a.c,I,r.A,r.v,r.O,r.Gb,r.Q,s.s]]}),k)}}]);