(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{dZea:function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("ofXK"),s=n("ZatZ"),i=n("lst6"),c=n("IAlr"),o=n("EQut"),l=n("fXoL"),d=n("tyNb");function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275property"]("value",e._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.category)}}function m(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275property"]("value",e._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e.basicDetails.courseName)}}function u(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"td"),l["\u0275\u0275text"](10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"td"),l["\u0275\u0275elementStart"](12,"button",17),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](e);const n=t.$implicit;return l["\u0275\u0275nextContext"](3).manageExam(n)})),l["\u0275\u0275text"](13," Manage Exam "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=l["\u0275\u0275nextContext"](3);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](n+1),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](e.basicDetails.batchName),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.getCategory(e.category)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.getCourse(e.course)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.basicDetails.startDate))}}function g(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",14),l["\u0275\u0275elementStart"](1,"table",15),l["\u0275\u0275elementStart"](2,"thead"),l["\u0275\u0275elementStart"](3,"tr"),l["\u0275\u0275elementStart"](4,"th"),l["\u0275\u0275text"](5,"#"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"th"),l["\u0275\u0275text"](7,"Name"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"th"),l["\u0275\u0275text"](9,"Category"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"th"),l["\u0275\u0275text"](11,"Course"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"th"),l["\u0275\u0275text"](13,"Start Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"th"),l["\u0275\u0275text"](15,"Action"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"tbody"),l["\u0275\u0275template"](17,u,14,5,"tr",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](17),l["\u0275\u0275property"]("ngForOf",e.batches)}}function p(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",18),l["\u0275\u0275text"](1,"No Batches Available"),l["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,g,18,1,"div",12),l["\u0275\u0275template"](2,p,2,0,"ng-template",null,13,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementContainerEnd"]()),2&e){const e=l["\u0275\u0275reference"](3),t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.batches.length>0)("ngIfElse",e)}}function b(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",18),l["\u0275\u0275text"](1,"Loading..."),l["\u0275\u0275elementEnd"]())}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,s,i){this.branchService=e,this.dateService=t,this.courseService=n,this.batchService=r,this.toastrService=a,this.router=s,this.route=i}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getBatches(this.category,this.course)},e=>{this.showToastr("top-right","danger",e)})}getCourses(){this.courseService.getCoursesData().subscribe(e=>{this.courses=e})}onSelectCategory(e){this.category=e,this.course="",this.myCourses=this.courses.filter(t=>t.basicDetails.category===e),this.getBatches(this.category,this.course)}onSelectCourse(e){this.course=e,this.getBatches(this.category,this.course)}getBatches(e,t){this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe(e=>{this.batches=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}manageExam(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);const t=this.courses.find(t=>t._id===e.course);this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);const n=this.categories.find(t=>t._id===e.category);this.branchService.setCategoryData(n),this.router.navigate(["../batch-test"],{relativeTo:this.route})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getCourse(e){const t=this.courses.find(t=>t._id===e);return t?t.basicDetails.courseName:"--"}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](r.Db),l["\u0275\u0275directiveInject"](d.c),l["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-test"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"Classroom Exams"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"nb-select",3),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),l["\u0275\u0275elementStart"](8,"nb-option",4),l["\u0275\u0275text"](9,"All Categories"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](10,h,2,2,"nb-option",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"div",2),l["\u0275\u0275elementStart"](12,"nb-select",6),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),l["\u0275\u0275elementStart"](13,"nb-option",4),l["\u0275\u0275text"](14,"All Courses"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](15,m,2,2,"nb-option",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"nb-card-body",7),l["\u0275\u0275elementStart"](17,"div",0),l["\u0275\u0275elementStart"](18,"div",8),l["\u0275\u0275template"](19,S,4,2,"ng-container",9),l["\u0275\u0275template"](20,b,2,0,"ng-template",null,10,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](21);l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("selected",t.category),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.categories),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.course),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.myCourses),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.x,r.z,r.mb,r.fb,a.m,r.w,a.n,r.u],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(v)],d.g]}),e})();n.d(t,"ManageTestModule",(function(){return E}));let E=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,f,r.A,r.nb,r.O,r.v]]}),e})()}}]);