!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{EXsj:function(n,i,a){"use strict";a.r(i),a.d(i,"ManageAssignmentModule",(function(){return T}));var r=a("aceb"),s=a("ofXK"),l=a("fXoL"),o=a("EQut"),c=a("IAlr"),m=a("lst6"),d=a("60TI"),u=a("AVwh"),h=a("ZatZ"),g=a("tyNb");function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.subject)}}function v(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function p(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n.monthNo),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.month)}}function b(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275elementStart"](1,"a",24),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"nb-icon",25),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275nextContext"](),t=e.$implicit,i=e.index;return l["\u0275\u0275nextContext"](3).deleteAssignmentAttachment(t._id,t.publicId,i)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementContainerEnd"]()}if(2&e){var i=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("href",i.secureUrl,l["\u0275\u0275sanitizeUrl"])("download",i.fileName),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](i.fileName)}}function S(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"td"),l["\u0275\u0275text"](10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"td"),l["\u0275\u0275text"](12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"td"),l["\u0275\u0275template"](14,b,4,3,"ng-container",11),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"td"),l["\u0275\u0275elementStart"](16,"button",21),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](3).assignmentSubmissions(e)})),l["\u0275\u0275text"](17," Submissions "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"td"),l["\u0275\u0275elementStart"](19,"button",22),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](3).editAssignment(e)})),l["\u0275\u0275text"](20," Edit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"td"),l["\u0275\u0275elementStart"](22,"button",23),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](3).deleteAssignment(e._id)})),l["\u0275\u0275text"](23," Delete "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,a=t.index,r=l["\u0275\u0275nextContext"](3),s=l["\u0275\u0275reference"](35);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a+1),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.dateService.formatDate(i.date)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.getSubjectName(i.subject)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.dateService.formatDate(i.submissionDate)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.totalGrades),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.generatedByName),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",i.fileName)("ngIfElse",s)}}function E(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",17),l["\u0275\u0275elementStart"](1,"table",18),l["\u0275\u0275elementStart"](2,"thead"),l["\u0275\u0275elementStart"](3,"tr"),l["\u0275\u0275elementStart"](4,"th"),l["\u0275\u0275text"](5,"#"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"th"),l["\u0275\u0275text"](7,"Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"th"),l["\u0275\u0275text"](9,"Subject"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"th"),l["\u0275\u0275text"](11,"Submission Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"th"),l["\u0275\u0275text"](13,"Total Grades"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"th"),l["\u0275\u0275text"](15,"Generated By"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"th"),l["\u0275\u0275text"](17,"Attachment"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"th",19),l["\u0275\u0275text"](19,"Action"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"tbody"),l["\u0275\u0275template"](21,S,24,8,"tr",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](21),l["\u0275\u0275property"]("ngForOf",n.assignments)}}function x(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",26),l["\u0275\u0275text"](1,"No Assignment Available"),l["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,E,22,1,"div",15),l["\u0275\u0275template"](2,x,2,0,"ng-template",null,16,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementContainerEnd"]()),2&e){var n=l["\u0275\u0275reference"](3),i=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",i.assignments.length>0)("ngIfElse",n)}}function A(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",26),l["\u0275\u0275text"](1,"Loading..."),l["\u0275\u0275elementEnd"]())}function I(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"span"),l["\u0275\u0275text"](1,"--"),l["\u0275\u0275elementEnd"]())}var j,w,k,C=[{path:"",component:(j=function(){function n(t,i,a,r,s,l,o,c,m){e(this,n),this.branchService=t,this.courseService=i,this.batchService=a,this.subjectService=r,this.assignmentService=s,this.dateService=l,this.router=o,this.route=c,this.toastrService=m}var i,a,r;return i=n,(a=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.subjects=[],this.subject="",this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){t&&(e.course=t,e.batchService.getBatchData().subscribe((function(t){t&&(e.batch=t,e.batchService.getBatchSubjects(e.course._id,e.batch._id).subscribe((function(t){e.subjects=t,e.subjectService.setSubjectsData(t)}),(function(t){e.showToastr("top-right","danger",t)})))})))})),this.months=this.dateService.getMonths(),this.years=this.dateService.getYears(),this.month=(this.dateService.getDate().getMonth()+1).toString().padStart(2,"0"),this.year=this.years[this.years.length-1],this.getAssignments()):this.back()}},{key:"onSelectSubject",value:function(e){this.subject=e,this.getAssignments()}},{key:"onSelectMonth",value:function(e){this.month=e,this.getAssignments()}},{key:"onSelectYear",value:function(e){this.year=e,""===e&&(this.month=""),this.getAssignments()}},{key:"getAssignments",value:function(){var e=this;this.loading=!0,this.assignmentService.getAssignments(this.branchId,this.category._id,this.course._id,this.batch._id,this.subject,this.month,this.year).subscribe((function(t){e.assignments=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"addAssignment",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"editAssignment",value:function(e){this.assignmentService.setAssignmentId(e._id),this.assignmentService.setAssignmentData(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"assignmentSubmissions",value:function(e){this.assignmentService.setAssignmentId(e._id),this.assignmentService.setAssignmentData(e),this.router.navigate(["../submission"],{relativeTo:this.route})}},{key:"deleteAssignment",value:function(e){var t=this;this.loading=!0,this.assignmentService.deleteAssignment(e).subscribe((function(n){var i=t.assignments.findIndex((function(t){return t._id===e}));i>=0&&t.assignments.splice(i,1),t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))}},{key:"getSubjectName",value:function(e){var t=this.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"deleteAssignmentAttachment",value:function(e,t,n){var i=this;this.assignmentService.deleteAssignmentAttachment(e,t).subscribe((function(e){i.assignments[n].fileName=null,i.assignments[n].fileSize=null,i.assignments[n].fileType=null,i.assignments[n].secureUrl=null,i.assignments[n].publicId=null,i.showToastr("top-right","success","Attachment Deleted Successfully!")}),(function(e){i.showToastr("top-right","danger",e)}))}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}}])&&t(i.prototype,a),r&&t(i,r),n}(),j.\u0275fac=function(e){return new(e||j)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](h.a),l["\u0275\u0275directiveInject"](g.c),l["\u0275\u0275directiveInject"](g.a),l["\u0275\u0275directiveInject"](r.Gb))},j.\u0275cmp=l["\u0275\u0275defineComponent"]({type:j,selectors:[["ngx-manage-assignment"]],decls:36,vars:8,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",1,"float-right",3,"click"],["id","select-subject","name","subject","fullWidth","","placeholder","All Subjects",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-year","name","year","fullWidth","","placeholder","All Years",3,"selected","selectedChange"],["id","select-month","name","month","fullWidth","","placeholder","All Months",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["noAttachment",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noAssignments",""],[1,"table-responsive"],[1,"table"],["colspan","3"],[4,"ngFor","ngForOf"],["type","button","nbButton","","size","small","status","primary",3,"click"],["type","button","nbButton","","size","small","status","basic",3,"click"],["type","button","nbButton","","size","small","status","danger",3,"click"],["target","_blank",3,"href","download"],["icon","close-outline","status","danger","nbToolTip","Delete Attachment",1,"float-right","pointer",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"Assignments"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"button",3),l["\u0275\u0275listener"]("click",(function(){return t.addAssignment()})),l["\u0275\u0275text"](8," Add Assignment "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"nb-card"),l["\u0275\u0275elementStart"](10,"nb-card-header"),l["\u0275\u0275elementStart"](11,"div",0),l["\u0275\u0275element"](12,"div",2),l["\u0275\u0275elementStart"](13,"div",2),l["\u0275\u0275elementStart"](14,"nb-select",4),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectSubject(e)})),l["\u0275\u0275elementStart"](15,"nb-option",5),l["\u0275\u0275text"](16,"All Subjects"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](17,f,2,2,"nb-option",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"div",2),l["\u0275\u0275elementStart"](19,"nb-select",7),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectYear(e)})),l["\u0275\u0275elementStart"](20,"nb-option",5),l["\u0275\u0275text"](21,"All Years"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](22,v,2,2,"nb-option",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"div",2),l["\u0275\u0275elementStart"](24,"nb-select",8),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectMonth(e)})),l["\u0275\u0275elementStart"](25,"nb-option",5),l["\u0275\u0275text"](26,"All Months"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](27,p,2,2,"nb-option",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"nb-card-body",9),l["\u0275\u0275elementStart"](29,"div",0),l["\u0275\u0275elementStart"](30,"div",10),l["\u0275\u0275template"](31,y,4,2,"ng-container",11),l["\u0275\u0275template"](32,A,2,0,"ng-template",null,12,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](34,I,2,0,"ng-template",null,13,l["\u0275\u0275templateRefExtractor"])),2&e){var n=l["\u0275\u0275reference"](33);l["\u0275\u0275advance"](14),l["\u0275\u0275property"]("selected",t.subject),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.subjects),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.year),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.years),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.month),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.months),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[r.y,r.A,r.v,r.nb,r.gb,s.m,r.x,s.n,r.N],styles:[""]}),j)},{path:"page-not-found",loadChildren:function(){return a.e(0).then(a.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],D=((k=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[g.g.forChild(C)],g.g]}),k),T=((w=function t(){e(this,t)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[s.c,D,r.B,r.ob,r.w,r.P,r.Jb]]}),w)}}])}();
//# sourceMappingURL=149-es5.24dfe0d2b47c95edeb9f.js.map