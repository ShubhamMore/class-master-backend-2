(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{qK8W:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageBatchTestModule",(function(){return y}));var a=n("aceb"),r=n("ofXK"),i=n("tyNb"),l=n("fXoL"),s=n("EQut"),c=n("IAlr"),o=n("lst6"),d=n("ZatZ"),m=n("zZNt");function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275property"]("value",e._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.subject)}}function u(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275property"]("value",e),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function p(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",14),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275property"]("value",e.monthNo),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.month)}}function S(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"td"),l["\u0275\u0275text"](10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"td"),l["\u0275\u0275elementStart"](12,"button",21),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"](3).editExam(n)})),l["\u0275\u0275text"](13," Edit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"td"),l["\u0275\u0275elementStart"](15,"button",22),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"](3).addExamScore(n)})),l["\u0275\u0275text"](16," Score "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"td"),l["\u0275\u0275elementStart"](18,"button",23),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit,a=t.index;return l["\u0275\u0275nextContext"](3).changeExamStatus(n._id,!n.status,a)})),l["\u0275\u0275text"](19),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](20,"td"),l["\u0275\u0275elementStart"](21,"button",24),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit,a=t.index;return l["\u0275\u0275nextContext"](3).deleteExam(n._id,a)})),l["\u0275\u0275text"](22," Delete "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,a=l["\u0275\u0275nextContext"](3);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](n+1),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.examTitle),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a.dateService.formatDate(e.date)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a.category.category),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a.course.basicDetails.courseName),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("status",e.status?"success":"danger"),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",e.status?"Inactive":"Active"," ")}}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",17),l["\u0275\u0275elementStart"](1,"table",18),l["\u0275\u0275elementStart"](2,"thead"),l["\u0275\u0275elementStart"](3,"tr"),l["\u0275\u0275elementStart"](4,"th"),l["\u0275\u0275text"](5,"#"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"th"),l["\u0275\u0275text"](7,"Title"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"th"),l["\u0275\u0275text"](9,"Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"th"),l["\u0275\u0275text"](11,"Category"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"th"),l["\u0275\u0275text"](13,"Course"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"th",19),l["\u0275\u0275text"](15,"Action"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"tbody"),l["\u0275\u0275template"](17,S,23,7,"tr",20),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](17),l["\u0275\u0275property"]("ngForOf",e.exams)}}function b(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",25),l["\u0275\u0275text"](1,"No Exams Available"),l["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,x,18,1,"div",15),l["\u0275\u0275template"](2,b,2,0,"ng-template",null,16,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=l["\u0275\u0275reference"](3),t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.exams.length>0)("ngIfElse",e)}}function g(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",25),l["\u0275\u0275text"](1,"Loading..."),l["\u0275\u0275elementEnd"]())}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,a,r,i,l,s){this.branchService=e,this.courseService=t,this.batchService=n,this.toastrService=a,this.dateService=r,this.examService=i,this.router=l,this.route=s}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe(e=>{this.category=e}),this.courseService.getCourseData().subscribe(e=>{this.course=e}),this.batchService.getBatchData().subscribe(e=>{this.batch=e}),this.subjects=[],this.subject="",this.batch.subjects.forEach(e=>{const t=this.course.subjects.find(t=>t._id===e.subject);this.subjects.push(t)}),this.months=this.dateService.getMonths(),this.years=this.dateService.getYears(),this.month=(this.dateService.getDate().getMonth()+1).toString().padStart(2,"0"),this.year=this.years[this.years.length-1],this.getExams()):this.router.navigate(["../"],{relativeTo:this.route})}onSelectMonth(e){this.month=e,this.getExams()}onSelectYear(e){this.year=e,""===e&&(this.month=""),this.getExams()}onSelectSubject(e){this.subject=e,this.getExams()}getExams(){this.loading=!0,this.examService.getExams(this.branchId,this.category._id,this.course._id,this.batch._id,this.subject,this.month,this.year).subscribe(e=>{this.exams=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}addExam(){this.router.navigate(["../add"],{relativeTo:this.route})}addExamScore(e){this.examService.setExamData(e),this.router.navigate(["../score"],{relativeTo:this.route})}editExam(e){this.examService.setExamId(e._id),this.examService.setExamData(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}deleteExam(e,t){this.loading=!0,this.examService.deleteExam(e).subscribe(e=>{this.exams.splice(t,1),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}changeExamStatus(e,t,n){}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](a.Gb),l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](m.a),l["\u0275\u0275directiveInject"](i.c),l["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-batch-test"]],decls:35,vars:8,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","fullWidth","","status","primary",3,"click"],["icon","plus-circle-outline"],["id","select-subject","name","subject","fullWidth","","placeholder","All Subjects",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-year","name","year","fullWidth","","placeholder","All Years",3,"selected","selectedChange"],["id","select-month","name","month","fullWidth","","placeholder","All Months",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],["colspan","4"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","primary",3,"click"],["nbButton","","size","small","status","warning",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","size","small","status","danger",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"Classroom Exams"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"button",3),l["\u0275\u0275listener"]("click",(function(){return t.addExam()})),l["\u0275\u0275text"](8," Add Exam "),l["\u0275\u0275element"](9,"nb-icon",4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"nb-card"),l["\u0275\u0275elementStart"](11,"nb-card-header"),l["\u0275\u0275elementStart"](12,"div",0),l["\u0275\u0275element"](13,"div",2),l["\u0275\u0275elementStart"](14,"div",2),l["\u0275\u0275elementStart"](15,"nb-select",5),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectSubject(e)})),l["\u0275\u0275elementStart"](16,"nb-option",6),l["\u0275\u0275text"](17,"All Subjects"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](18,h,2,2,"nb-option",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"div",2),l["\u0275\u0275elementStart"](20,"nb-select",8),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectYear(e)})),l["\u0275\u0275elementStart"](21,"nb-option",6),l["\u0275\u0275text"](22,"All Years"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](23,u,2,2,"nb-option",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"div",2),l["\u0275\u0275elementStart"](25,"nb-select",9),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectMonth(e)})),l["\u0275\u0275elementStart"](26,"nb-option",6),l["\u0275\u0275text"](27,"All Months"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](28,p,2,2,"nb-option",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"nb-card-body",10),l["\u0275\u0275elementStart"](30,"div",0),l["\u0275\u0275elementStart"](31,"div",11),l["\u0275\u0275template"](32,E,4,2,"ng-container",12),l["\u0275\u0275template"](33,g,2,0,"ng-template",null,13,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](34);l["\u0275\u0275advance"](15),l["\u0275\u0275property"]("selected",t.subject),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.subjects),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.year),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.years),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.month),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.months),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[a.y,a.A,a.v,a.N,a.nb,a.gb,r.m,a.x,r.n],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(v)],i.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,f,a.B,a.ob,a.w,a.P]]}),e})()}}]);
//# sourceMappingURL=96-es2015.ab409022b809a6ece323.js.map