(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{FJPE:function(e,t,n){"use strict";n.r(t),n.d(t,"BatchAssignmentModule",(function(){return y}));var r=n("aceb"),a=n("ofXK"),s=n("tyNb"),i=n("fXoL"),c=n("EQut"),o=n("ZatZ"),l=n("IAlr"),d=n("lst6");function h(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-option",11),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.category)}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-option",11),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.basicDetails.courseName)}}function g(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"td"),i["\u0275\u0275elementStart"](12,"button",17),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).manageAssignment(n)})),i["\u0275\u0275text"](13," Manage Assignment "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=i["\u0275\u0275nextContext"](3);i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n+1),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.basicDetails.batchName),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.getCategory(e.category)),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.getCourse(e.course)),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.basicDetails.startDate))}}function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",14),i["\u0275\u0275elementStart"](1,"table",15),i["\u0275\u0275elementStart"](2,"thead"),i["\u0275\u0275elementStart"](3,"tr"),i["\u0275\u0275elementStart"](4,"th"),i["\u0275\u0275text"](5,"#"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"th"),i["\u0275\u0275text"](7,"Name"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"th"),i["\u0275\u0275text"](9,"Category"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"th"),i["\u0275\u0275text"](11,"Course"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"th"),i["\u0275\u0275text"](13,"Start Date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"th"),i["\u0275\u0275text"](15,"Action"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"tbody"),i["\u0275\u0275template"](17,g,14,5,"tr",16),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](17),i["\u0275\u0275property"]("ngForOf",e.batches)}}function p(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",18),i["\u0275\u0275text"](1,"No Batches Available"),i["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,u,18,1,"div",12),i["\u0275\u0275template"](2,p,2,0,"ng-template",null,13,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=i["\u0275\u0275reference"](3),t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.batches.length>0)("ngIfElse",e)}}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",18),i["\u0275\u0275text"](1,"Loading..."),i["\u0275\u0275elementEnd"]())}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,s,i){this.branchService=e,this.dateService=t,this.courseService=n,this.batchService=r,this.toastrService=a,this.router=s,this.route=i}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getBatches(this.category,this.course)},e=>{this.showToastr("top-right","danger",e)})}getCourses(){this.courseService.getCoursesData().subscribe(e=>{this.courses=e})}onSelectCategory(e){this.category=e,this.course="",this.myCourses=this.courses.filter(t=>t.basicDetails.category===e),this.getBatches(this.category,this.course)}onSelectCourse(e){this.course=e,this.getBatches(this.category,this.course)}getBatches(e,t){this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe(e=>{this.batches=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}manageAssignment(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);const t=this.courses.find(t=>t._id===e.course);this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);const n=this.categories.find(t=>t._id===e.category);this.branchService.setCategoryData(n),this.router.navigate(["../manage"],{relativeTo:this.route})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getCourse(e){const t=this.courses.find(t=>t._id===e);return t?t.basicDetails.courseName:"--"}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](r.Gb),i["\u0275\u0275directiveInject"](s.c),i["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-batch-assignment"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","primary",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-card"),i["\u0275\u0275elementStart"](1,"nb-card-header"),i["\u0275\u0275elementStart"](2,"div",0),i["\u0275\u0275elementStart"](3,"div",1),i["\u0275\u0275elementStart"](4,"h3"),i["\u0275\u0275text"](5,"Assignments"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",2),i["\u0275\u0275elementStart"](7,"nb-select",3),i["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),i["\u0275\u0275elementStart"](8,"nb-option",4),i["\u0275\u0275text"](9,"All Categories"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](10,h,2,2,"nb-option",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"div",2),i["\u0275\u0275elementStart"](12,"nb-select",6),i["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),i["\u0275\u0275elementStart"](13,"nb-option",4),i["\u0275\u0275text"](14,"All Courses"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](15,m,2,2,"nb-option",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](16,"nb-card-body",7),i["\u0275\u0275elementStart"](17,"div",0),i["\u0275\u0275elementStart"](18,"div",8),i["\u0275\u0275template"](19,b,4,2,"ng-container",9),i["\u0275\u0275template"](20,S,2,0,"ng-template",null,10,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](21);i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("selected",t.category),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.categories),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("selected",t.course),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.myCourses),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.nb,r.gb,a.m,r.x,a.n,r.v],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let f=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(v)],s.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,f,r.B,r.Jb,r.P,r.w,r.R,r.k,r.M,r.ob]]}),e})()}}]);
//# sourceMappingURL=152-es2015.36c53e258f2447d8ae55.js.map