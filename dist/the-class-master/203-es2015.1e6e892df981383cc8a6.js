(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{xz43:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageScheduleModule",(function(){return y}));var r=n("aceb"),a=n("ofXK"),s=n("fXoL"),c=n("EQut"),i=n("ZatZ"),o=n("IAlr"),l=n("lst6"),d=n("tyNb");function h(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",11),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.category)}}function m(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",11),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.basicDetails.courseName)}}function u(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"td"),s["\u0275\u0275elementStart"](12,"button",17),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](3).manageSchedule(n)})),s["\u0275\u0275text"](13," Manage Schedule "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n+1),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.basicDetails.batchName),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r.getCategory(e.category)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r.getCourse(e.course)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.basicDetails.startDate))}}function g(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",14),s["\u0275\u0275elementStart"](1,"table",15),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"tr"),s["\u0275\u0275elementStart"](4,"th"),s["\u0275\u0275text"](5,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"th"),s["\u0275\u0275text"](7,"Name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"th"),s["\u0275\u0275text"](9,"Category"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"th"),s["\u0275\u0275text"](11,"Course"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th"),s["\u0275\u0275text"](13,"Start Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"th"),s["\u0275\u0275text"](15,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"tbody"),s["\u0275\u0275template"](17,u,14,5,"tr",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](17),s["\u0275\u0275property"]("ngForOf",e.batches)}}function p(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",18),s["\u0275\u0275text"](1,"No Batches Available"),s["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,g,18,1,"div",12),s["\u0275\u0275template"](2,p,2,0,"ng-template",null,13,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275reference"](3),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.batches.length>0)("ngIfElse",e)}}function b(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",18),s["\u0275\u0275text"](1,"Loading..."),s["\u0275\u0275elementEnd"]())}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,s,c){this.branchService=e,this.dateService=t,this.courseService=n,this.batchService=r,this.toastrService=a,this.router=s,this.route=c}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getBatches(this.category,this.course)},e=>{this.showToastr("top-right","danger",e)})}getCourses(){this.courseService.getCoursesData().subscribe(e=>{this.courses=e})}onSelectCategory(e){this.category=e,this.course="",this.myCourses=this.courses.filter(t=>t.basicDetails.category===e),this.getBatches(this.category,this.course)}onSelectCourse(e){this.course=e,this.getBatches(this.category,this.course)}getBatches(e,t){this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe(e=>{this.batches=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}manageSchedule(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);const t=this.courses.find(t=>t._id===e.course);this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);const n=this.categories.find(t=>t._id===e.category);this.branchService.setCategoryData(n),this.router.navigate(["../batch-schedule"],{relativeTo:this.route})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getCourse(e){const t=this.courses.find(t=>t._id===e);return t?t.basicDetails.courseName:"--"}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](i.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](r.Gb),s["\u0275\u0275directiveInject"](d.c),s["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-schedule"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","primary",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"h3"),s["\u0275\u0275text"](5,"Schedule Class"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"nb-select",3),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),s["\u0275\u0275elementStart"](8,"nb-option",4),s["\u0275\u0275text"](9,"All Categories"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,h,2,2,"nb-option",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"div",2),s["\u0275\u0275elementStart"](12,"nb-select",6),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),s["\u0275\u0275elementStart"](13,"nb-option",4),s["\u0275\u0275text"](14,"All Courses"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](15,m,2,2,"nb-option",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"nb-card-body",7),s["\u0275\u0275elementStart"](17,"div",0),s["\u0275\u0275elementStart"](18,"div",8),s["\u0275\u0275template"](19,S,4,2,"ng-container",9),s["\u0275\u0275template"](20,b,2,0,"ng-template",null,10,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](21);s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("selected",t.category),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.categories),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("selected",t.course),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.myCourses),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.nb,r.gb,a.m,r.x,a.n,r.v],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(v)],d.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,f,r.B,r.ob,r.w]]}),e})()}}]);
//# sourceMappingURL=203-es2015.1e6e892df981383cc8a6.js.map