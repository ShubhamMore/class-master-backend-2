(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{iutr:function(t,e,c){"use strict";c.r(e);var s=c("aceb"),i=c("ofXK"),o=c("ZatZ"),r=c("lst6"),a=c("IAlr"),n=c("EQut"),b=c("fXoL"),h=c("tyNb");function g(t,e){if(1&t&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&t){const t=e.$implicit;b.mc("value",t._id),b.Eb(1),b.Dc(t.category)}}function u(t,e){if(1&t&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&t){const t=e.$implicit;b.mc("value",t._id),b.Eb(1),b.Dc(t.basicDetails.courseName)}}function l(t,e){if(1&t){const t=b.Xb();b.Wb(0,"tr"),b.Wb(1,"td"),b.Cc(2),b.Vb(),b.Wb(3,"td"),b.Cc(4),b.Vb(),b.Wb(5,"td"),b.Cc(6),b.Vb(),b.Wb(7,"td"),b.Cc(8),b.Vb(),b.Wb(9,"td"),b.Cc(10),b.Vb(),b.Wb(11,"td"),b.Wb(12,"button",17),b.ec("click",(function(){b.uc(t);const c=e.$implicit;return b.gc(3).manageExam(c)})),b.Cc(13," Manage Exam "),b.Vb(),b.Vb(),b.Vb()}if(2&t){const t=e.$implicit,c=e.index,s=b.gc(3);b.Eb(2),b.Dc(c+1),b.Eb(2),b.Dc(t.basicDetails.batchName),b.Eb(2),b.Dc(s.getCategory(t.category)),b.Eb(2),b.Dc(s.getCourse(t.course)),b.Eb(2),b.Dc(s.dateService.formatDate(t.basicDetails.startDate))}}function d(t,e){if(1&t&&(b.Wb(0,"div",14),b.Wb(1,"table",15),b.Wb(2,"thead"),b.Wb(3,"tr"),b.Wb(4,"th"),b.Cc(5,"#"),b.Vb(),b.Wb(6,"th"),b.Cc(7,"Name"),b.Vb(),b.Wb(8,"th"),b.Cc(9,"Category"),b.Vb(),b.Wb(10,"th"),b.Cc(11,"Course"),b.Vb(),b.Wb(12,"th"),b.Cc(13,"Start Date"),b.Vb(),b.Wb(14,"th"),b.Cc(15,"Action"),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"tbody"),b.Ac(17,l,14,5,"tr",16),b.Vb(),b.Vb(),b.Vb()),2&t){const t=b.gc(2);b.Eb(17),b.mc("ngForOf",t.batches)}}function f(t,e){1&t&&(b.Wb(0,"p",18),b.Cc(1,"No Batches Available"),b.Vb())}function C(t,e){if(1&t&&(b.Ub(0),b.Ac(1,d,18,1,"div",12),b.Ac(2,f,2,0,"ng-template",null,13,b.Bc),b.Tb()),2&t){const t=b.sc(3),e=b.gc();b.Eb(1),b.mc("ngIf",e.batches.length>0)("ngIfElse",t)}}function m(t,e){1&t&&(b.Wb(0,"p",18),b.Cc(1,"Loading..."),b.Vb())}const v=[{path:"",component:(()=>{class t{constructor(t,e,c,s,i,o,r){this.branchService=t,this.dateService=e,this.courseService=c,this.batchService=s,this.toastrService=i,this.router=o,this.route=r}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(t=>{t&&(this.categories=t.categories)}),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(t=>{this.branchService.setBranchData(t),this.categories=t.categories,this.getBatches(this.category,this.course)},t=>{this.showToastr("top-right","danger",t)})}getCourses(){this.courseService.getCoursesData().subscribe(t=>{this.courses=t})}onSelectCategory(t){this.category=t,this.course="",this.myCourses=this.courses.filter(e=>e.basicDetails.category===t),this.getBatches(this.category,this.course)}onSelectCourse(t){this.course=t,this.getBatches(this.category,this.course)}getBatches(t,e){this.loading=!0,this.batchService.getBatches(this.branchId,t,e).subscribe(t=>{this.batches=t,this.loading=!1},t=>{this.showToastr("top-right","danger",t),this.loading=!1})}manageExam(t){this.batchService.setBatchId(t._id),this.batchService.setBatchData(t),this.courseService.setCourseId(t.course);const e=this.courses.find(e=>e._id===t.course);this.courseService.setCourseData(e),this.branchService.setCategoryId(t.category);const c=this.categories.find(e=>e._id===t.category);this.branchService.setCategoryData(c),this.router.navigate(["../batch-test"],{relativeTo:this.route})}getCategory(t){const e=this.categories.find(e=>e._id===t);return e?e.category:"--"}getCourse(t){const e=this.courses.find(e=>e._id===t);return e?e.basicDetails.courseName:"--"}showToastr(t,e,c){this.toastrService.show(e,c,{position:t,status:e})}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(n.a),b.Qb(o.a),b.Qb(a.a),b.Qb(r.a),b.Qb(s.xb),b.Qb(h.c),b.Qb(h.a))},t.\u0275cmp=b.Kb({type:t,selectors:[["ngx-manage-test"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],[1,"text-center"]],template:function(t,e){if(1&t&&(b.Wb(0,"nb-card"),b.Wb(1,"nb-card-header"),b.Wb(2,"div",0),b.Wb(3,"div",1),b.Wb(4,"h3"),b.Cc(5,"Classroom Exams"),b.Vb(),b.Vb(),b.Wb(6,"div",2),b.Wb(7,"nb-select",3),b.ec("selectedChange",(function(t){return e.onSelectCategory(t)})),b.Wb(8,"nb-option",4),b.Cc(9,"All Categories"),b.Vb(),b.Ac(10,g,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Wb(11,"div",2),b.Wb(12,"nb-select",6),b.ec("selectedChange",(function(t){return e.onSelectCourse(t)})),b.Wb(13,"nb-option",4),b.Cc(14,"All Courses"),b.Vb(),b.Ac(15,u,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"nb-card-body",7),b.Wb(17,"div",0),b.Wb(18,"div",8),b.Ac(19,C,4,2,"ng-container",9),b.Ac(20,m,2,0,"ng-template",null,10,b.Bc),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t){const t=b.sc(21);b.Eb(7),b.mc("selected",e.category),b.Eb(3),b.mc("ngForOf",e.categories),b.Eb(2),b.mc("selected",e.course),b.Eb(3),b.mc("ngForOf",e.myCourses),b.Eb(4),b.mc("ngIf",!e.loading)("ngIfElse",t)}},directives:[s.x,s.z,s.jb,s.eb,i.m,s.w,i.n,s.u],styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>c.e(0).then(c.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let p=(()=>{class t{}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[h.g.forChild(v)],h.g]}),t})();c.d(e,"ManageTestModule",(function(){return W}));let W=(()=>{class t{}return t.\u0275mod=b.Ob({type:t}),t.\u0275inj=b.Nb({factory:function(e){return new(e||t)},imports:[[i.c,p,s.A,s.kb,s.N,s.v]]}),t})()}}]);