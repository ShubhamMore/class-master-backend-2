function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{qK8W:function(e,t,n){"use strict";n.r(t);var a=n("aceb"),r=n("ofXK"),i=n("tyNb"),l=n("ZatZ"),c=n("IAlr"),o=n("lst6"),s=n("zZNt"),d=n("EQut"),m=n("fXoL");function u(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-option",14),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275property"]("value",n._id),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](n.subject)}}function h(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-option",14),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275property"]("value",n),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](n)}}function v(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-option",14),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;m["\u0275\u0275property"]("value",n.monthNo),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](n.month)}}function p(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tr"),m["\u0275\u0275elementStart"](1,"td"),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"td"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"td"),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"td"),m["\u0275\u0275text"](8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"td"),m["\u0275\u0275text"](10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"td"),m["\u0275\u0275elementStart"](12,"button",21),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"](3).editExam(e)})),m["\u0275\u0275text"](13," Edit "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"td"),m["\u0275\u0275elementStart"](15,"button",22),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"](3).addExamScore(e)})),m["\u0275\u0275text"](16," Score "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"td"),m["\u0275\u0275elementStart"](18,"button",23),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit,a=t.index;return m["\u0275\u0275nextContext"](3).changeExamStatus(e._id,!e.status,a)})),m["\u0275\u0275text"](19),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"td"),m["\u0275\u0275elementStart"](21,"button",24),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit,a=t.index;return m["\u0275\u0275nextContext"](3).deleteExam(e._id,a)})),m["\u0275\u0275text"](22," Delete "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=t.index,i=m["\u0275\u0275nextContext"](3);m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](r+1),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](a.examTitle),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](i.dateService.formatDate(a.date)),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](i.category.category),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](i.course.basicDetails.courseName),m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("status",a.status?"success":"danger"),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",a.status?"Inactive":"Active"," ")}}function f(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",17),m["\u0275\u0275elementStart"](1,"table",18),m["\u0275\u0275elementStart"](2,"thead"),m["\u0275\u0275elementStart"](3,"tr"),m["\u0275\u0275elementStart"](4,"th"),m["\u0275\u0275text"](5,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"th"),m["\u0275\u0275text"](7,"Title"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"th"),m["\u0275\u0275text"](9,"Date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"th"),m["\u0275\u0275text"](11,"Category"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"th"),m["\u0275\u0275text"](13,"Course"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"th",19),m["\u0275\u0275text"](15,"Action"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"tbody"),m["\u0275\u0275template"](17,p,23,7,"tr",20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](17),m["\u0275\u0275property"]("ngForOf",n.exams)}}function b(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p",25),m["\u0275\u0275text"](1,"No Exams Available"),m["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,f,18,1,"div",15),m["\u0275\u0275template"](2,b,2,0,"ng-template",null,16,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementContainerEnd"]()),2&e){var n=m["\u0275\u0275reference"](3),a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",a.exams.length>0)("ngIfElse",n)}}function x(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p",25),m["\u0275\u0275text"](1,"Loading..."),m["\u0275\u0275elementEnd"]())}var E,g,y=[{path:"",component:(E=function(){function e(t,n,a,r,i,l,c,o){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.batchService=a,this.toastrService=r,this.dateService=i,this.examService=l,this.router=c,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.subjects=[],this.subject="",this.batch.subjects.forEach((function(t){var n=e.course.subjects.find((function(e){return e._id===t.subject}));e.subjects.push(n)})),this.months=this.dateService.getMonths(),this.years=this.dateService.getYears(),this.month=(this.dateService.getDate().getMonth()+1).toString().padStart(2,"0"),this.year=this.years[this.years.length-1],this.getExams()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"onSelectMonth",value:function(e){this.month=e,this.getExams()}},{key:"onSelectYear",value:function(e){this.year=e,""===e&&(this.month=""),this.getExams()}},{key:"onSelectSubject",value:function(e){this.subject=e,this.getExams()}},{key:"getExams",value:function(){var e=this;this.loading=!0,this.examService.getExams(this.branchId,this.category._id,this.course._id,this.batch._id,this.subject,this.month,this.year).subscribe((function(t){e.exams=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"addExam",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"addExamScore",value:function(e){this.examService.setExamData(e),this.router.navigate(["../score"],{relativeTo:this.route})}},{key:"editExam",value:function(e){this.examService.setExamId(e._id),this.examService.setExamData(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"deleteExam",value:function(e,t){var n=this;this.loading=!0,this.examService.deleteExam(e).subscribe((function(e){n.exams.splice(t,1),n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"changeExamStatus",value:function(e,t,n){}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),E.\u0275fac=function(e){return new(e||E)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](c.a),m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](a.Db),m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](s.a),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](i.a))},E.\u0275cmp=m["\u0275\u0275defineComponent"]({type:E,selectors:[["ngx-manage-batch-test"]],decls:35,vars:8,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","fullWidth","","status","primary",3,"click"],["icon","plus-circle-outline"],["id","select-subject","name","subject","fullWidth","","placeholder","All Subjects",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-year","name","year","fullWidth","","placeholder","All Years",3,"selected","selectedChange"],["id","select-month","name","month","fullWidth","","placeholder","All Months",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],["colspan","4"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],["nbButton","","status","warning","size","small",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","status","danger","size","small",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"nb-card"),m["\u0275\u0275elementStart"](1,"nb-card-header"),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"div",1),m["\u0275\u0275elementStart"](4,"h3"),m["\u0275\u0275text"](5,"Classroom Exams"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"div",2),m["\u0275\u0275elementStart"](7,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.addExam()})),m["\u0275\u0275text"](8," Add Exam "),m["\u0275\u0275element"](9,"nb-icon",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"nb-card"),m["\u0275\u0275elementStart"](11,"nb-card-header"),m["\u0275\u0275elementStart"](12,"div",0),m["\u0275\u0275element"](13,"div",2),m["\u0275\u0275elementStart"](14,"div",2),m["\u0275\u0275elementStart"](15,"nb-select",5),m["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectSubject(e)})),m["\u0275\u0275elementStart"](16,"nb-option",6),m["\u0275\u0275text"](17,"All Subjects"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](18,u,2,2,"nb-option",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"div",2),m["\u0275\u0275elementStart"](20,"nb-select",8),m["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectYear(e)})),m["\u0275\u0275elementStart"](21,"nb-option",6),m["\u0275\u0275text"](22,"All Years"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](23,h,2,2,"nb-option",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"div",2),m["\u0275\u0275elementStart"](25,"nb-select",9),m["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectMonth(e)})),m["\u0275\u0275elementStart"](26,"nb-option",6),m["\u0275\u0275text"](27,"All Months"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](28,v,2,2,"nb-option",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"nb-card-body",10),m["\u0275\u0275elementStart"](30,"div",0),m["\u0275\u0275elementStart"](31,"div",11),m["\u0275\u0275template"](32,S,4,2,"ng-container",12),m["\u0275\u0275template"](33,x,2,0,"ng-template",null,13,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275reference"](34);m["\u0275\u0275advance"](15),m["\u0275\u0275property"]("selected",t.subject),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngForOf",t.subjects),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("selected",t.year),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngForOf",t.years),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("selected",t.month),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("ngForOf",t.months),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[a.x,a.z,a.u,a.M,a.mb,a.fb,r.m,a.w,r.n],styles:[""]}),E)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],C=((g=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[i.g.forChild(y)],i.g]}),g);n.d(t,"ManageBatchTestModule",(function(){return j}));var I,j=((I=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[r.c,C,a.A,a.nb,a.v,a.O]]}),I)}}]);