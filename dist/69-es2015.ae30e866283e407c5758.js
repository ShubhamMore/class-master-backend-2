(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{HiKI:function(e,t,c){"use strict";c.r(t);var s=c("aceb"),i=c("ofXK"),r=c("ZatZ"),o=c("lst6"),a=c("IAlr"),n=(c("3lxF"),c("EQut")),b=c("fXoL"),h=c("tyNb");function u(e,t){if(1&e&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&e){const e=t.$implicit;b.mc("value",e._id),b.Eb(1),b.Dc(e.category)}}function g(e,t){if(1&e&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&e){const e=t.$implicit;b.mc("value",e._id),b.Eb(1),b.Dc(e.basicDetails.courseName)}}function l(e,t){if(1&e){const e=b.Xb();b.Wb(0,"tr"),b.Wb(1,"td"),b.Cc(2),b.Vb(),b.Wb(3,"td"),b.Cc(4),b.Vb(),b.Wb(5,"td"),b.Cc(6),b.Vb(),b.Wb(7,"td"),b.Cc(8),b.Vb(),b.Wb(9,"td"),b.Cc(10),b.Vb(),b.Wb(11,"td"),b.Wb(12,"button",17),b.ec("click",(function(){b.uc(e);const c=t.$implicit;return b.gc(3).manageLecture(c)})),b.Cc(13," Manage Lecture "),b.Vb(),b.Vb(),b.Vb()}if(2&e){const e=t.$implicit,c=t.index,s=b.gc(3);b.Eb(2),b.Dc(c+1),b.Eb(2),b.Dc(e.basicDetails.batchName),b.Eb(2),b.Dc(s.getCategory(e.category)),b.Eb(2),b.Dc(s.getCourse(e.course)),b.Eb(2),b.Dc(s.dateService.formatDate(e.basicDetails.startDate))}}function d(e,t){if(1&e&&(b.Wb(0,"div",14),b.Wb(1,"table",15),b.Wb(2,"thead"),b.Wb(3,"tr"),b.Wb(4,"th"),b.Cc(5,"#"),b.Vb(),b.Wb(6,"th"),b.Cc(7,"Name"),b.Vb(),b.Wb(8,"th"),b.Cc(9,"Category"),b.Vb(),b.Wb(10,"th"),b.Cc(11,"Course"),b.Vb(),b.Wb(12,"th"),b.Cc(13,"Start Date"),b.Vb(),b.Wb(14,"th"),b.Cc(15,"Action"),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"tbody"),b.Ac(17,l,14,5,"tr",16),b.Vb(),b.Vb(),b.Vb()),2&e){const e=b.gc(2);b.Eb(17),b.mc("ngForOf",e.batches)}}function f(e,t){1&e&&(b.Wb(0,"p",18),b.Cc(1,"No Batches Available"),b.Vb())}function C(e,t){if(1&e&&(b.Ub(0),b.Ac(1,d,18,1,"div",12),b.Ac(2,f,2,0,"ng-template",null,13,b.Bc),b.Tb()),2&e){const e=b.sc(3),t=b.gc();b.Eb(1),b.mc("ngIf",t.batches.length>0)("ngIfElse",e)}}function m(e,t){1&e&&(b.Wb(0,"p",18),b.Cc(1,"Loading..."),b.Vb())}const v=[{path:"",component:(()=>{class e{constructor(e,t,c,s,i,r,o){this.branchService=e,this.dateService=t,this.courseService=c,this.batchService=s,this.toastrService=i,this.router=r,this.route=o}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getBatches(this.category,this.course)},e=>{this.showToastr("top-right","danger",e)})}getCourses(){this.courseService.getCoursesData().subscribe(e=>{this.courses=e})}onSelectCategory(e){this.category=e,this.course="",this.myCourses=this.courses.filter(t=>t.basicDetails.category===e),this.getBatches(this.category,this.course)}onSelectCourse(e){this.course=e,this.getBatches(this.category,this.course)}getBatches(e,t){this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe(e=>{this.batches=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}manageLecture(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);const t=this.courses.find(t=>t._id===e.course);this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);const c=this.categories.find(t=>t._id===e.category);this.branchService.setCategoryData(c),this.router.navigate(["../manage"],{relativeTo:this.route})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getCourse(e){const t=this.courses.find(t=>t._id===e);return t?t.basicDetails.courseName:"--"}showToastr(e,t,c){this.toastrService.show(t,c,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(n.a),b.Qb(r.a),b.Qb(a.a),b.Qb(o.a),b.Qb(s.xb),b.Qb(h.c),b.Qb(h.a))},e.\u0275cmp=b.Kb({type:e,selectors:[["ngx-batch-lecture"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(b.Wb(0,"nb-card"),b.Wb(1,"nb-card-header"),b.Wb(2,"div",0),b.Wb(3,"div",1),b.Wb(4,"h3"),b.Cc(5,"Lectures"),b.Vb(),b.Vb(),b.Wb(6,"div",2),b.Wb(7,"nb-select",3),b.ec("selectedChange",(function(e){return t.onSelectCategory(e)})),b.Wb(8,"nb-option",4),b.Cc(9,"All Categories"),b.Vb(),b.Ac(10,u,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Wb(11,"div",2),b.Wb(12,"nb-select",6),b.ec("selectedChange",(function(e){return t.onSelectCourse(e)})),b.Wb(13,"nb-option",4),b.Cc(14,"All Courses"),b.Vb(),b.Ac(15,g,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"nb-card-body",7),b.Wb(17,"div",0),b.Wb(18,"div",8),b.Ac(19,C,4,2,"ng-container",9),b.Ac(20,m,2,0,"ng-template",null,10,b.Bc),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e){const e=b.sc(21);b.Eb(7),b.mc("selected",t.category),b.Eb(3),b.mc("ngForOf",t.categories),b.Eb(2),b.mc("selected",t.course),b.Eb(3),b.mc("ngForOf",t.myCourses),b.Eb(4),b.mc("ngIf",!t.loading)("ngIfElse",e)}},directives:[s.x,s.z,s.jb,s.eb,i.m,s.w,i.n,s.u],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>c.e(0).then(c.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let p=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[h.g.forChild(v)],h.g]}),e})();c.d(t,"BatchLectureModule",(function(){return W}));let W=(()=>{class e{}return e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({factory:function(t){return new(t||e)},imports:[[i.c,p,s.A,s.Ab,s.N,s.v,s.P,s.k,s.K,s.kb]]}),e})()}}]);