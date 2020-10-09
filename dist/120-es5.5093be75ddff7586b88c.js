function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var i=t[c];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{dZea:function(e,t,c){"use strict";c.r(t);var i=c("aceb"),a=c("ofXK"),r=c("ZatZ"),n=c("lst6"),s=c("IAlr"),o=c("EQut"),b=c("fXoL"),u=c("tyNb");function h(e,t){if(1&e&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&e){var c=t.$implicit;b.mc("value",c._id),b.Eb(1),b.Dc(c.category)}}function l(e,t){if(1&e&&(b.Wb(0,"nb-option",11),b.Cc(1),b.Vb()),2&e){var c=t.$implicit;b.mc("value",c._id),b.Eb(1),b.Dc(c.basicDetails.courseName)}}function g(e,t){if(1&e){var c=b.Xb();b.Wb(0,"tr"),b.Wb(1,"td"),b.Cc(2),b.Vb(),b.Wb(3,"td"),b.Cc(4),b.Vb(),b.Wb(5,"td"),b.Cc(6),b.Vb(),b.Wb(7,"td"),b.Cc(8),b.Vb(),b.Wb(9,"td"),b.Cc(10),b.Vb(),b.Wb(11,"td"),b.Wb(12,"button",17),b.ec("click",(function(){b.uc(c);var e=t.$implicit;return b.gc(3).manageExam(e)})),b.Cc(13," Manage Exam "),b.Vb(),b.Vb(),b.Vb()}if(2&e){var i=t.$implicit,a=t.index,r=b.gc(3);b.Eb(2),b.Dc(a+1),b.Eb(2),b.Dc(i.basicDetails.batchName),b.Eb(2),b.Dc(r.getCategory(i.category)),b.Eb(2),b.Dc(r.getCourse(i.course)),b.Eb(2),b.Dc(r.dateService.formatDate(i.basicDetails.startDate))}}function d(e,t){if(1&e&&(b.Wb(0,"div",14),b.Wb(1,"table",15),b.Wb(2,"thead"),b.Wb(3,"tr"),b.Wb(4,"th"),b.Cc(5,"#"),b.Vb(),b.Wb(6,"th"),b.Cc(7,"Name"),b.Vb(),b.Wb(8,"th"),b.Cc(9,"Category"),b.Vb(),b.Wb(10,"th"),b.Cc(11,"Course"),b.Vb(),b.Wb(12,"th"),b.Cc(13,"Start Date"),b.Vb(),b.Wb(14,"th"),b.Cc(15,"Action"),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"tbody"),b.Ac(17,g,14,5,"tr",16),b.Vb(),b.Vb(),b.Vb()),2&e){var c=b.gc(2);b.Eb(17),b.mc("ngForOf",c.batches)}}function f(e,t){1&e&&(b.Wb(0,"p",18),b.Cc(1,"No Batches Available"),b.Vb())}function v(e,t){if(1&e&&(b.Ub(0),b.Ac(1,d,18,1,"div",12),b.Ac(2,f,2,0,"ng-template",null,13,b.Bc),b.Tb()),2&e){var c=b.sc(3),i=b.gc();b.Eb(1),b.mc("ngIf",i.batches.length>0)("ngIfElse",c)}}function C(e,t){1&e&&(b.Wb(0,"p",18),b.Cc(1,"Loading..."),b.Vb())}var y,m,p=[{path:"",component:(y=function(){function e(t,c,i,a,r,n,s){_classCallCheck(this,e),this.branchService=t,this.dateService=c,this.courseService=i,this.batchService=a,this.toastrService=r,this.router=n,this.route=s}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var e=this;this.branchService.getBranchData().subscribe((function(t){t&&(e.categories=t.categories)})),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.categories=t.categories,e.getBatches(e.category,e.course)}),(function(t){e.showToastr("top-right","danger",t)}))}},{key:"getCourses",value:function(){var e=this;this.courseService.getCoursesData().subscribe((function(t){e.courses=t}))}},{key:"onSelectCategory",value:function(e){this.category=e,this.course="",this.myCourses=this.courses.filter((function(t){return t.basicDetails.category===e})),this.getBatches(this.category,this.course)}},{key:"onSelectCourse",value:function(e){this.course=e,this.getBatches(this.category,this.course)}},{key:"getBatches",value:function(e,t){var c=this;this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe((function(e){c.batches=e,c.loading=!1}),(function(e){c.showToastr("top-right","danger",e),c.loading=!1}))}},{key:"manageExam",value:function(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);var t=this.courses.find((function(t){return t._id===e.course}));this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);var c=this.categories.find((function(t){return t._id===e.category}));this.branchService.setCategoryData(c),this.router.navigate(["../batch-test"],{relativeTo:this.route})}},{key:"getCategory",value:function(e){var t=this.categories.find((function(t){return t._id===e}));return t?t.category:"--"}},{key:"getCourse",value:function(e){var t=this.courses.find((function(t){return t._id===e}));return t?t.basicDetails.courseName:"--"}},{key:"showToastr",value:function(e,t,c){this.toastrService.show(t,c,{position:e,status:t})}}]),e}(),y.\u0275fac=function(e){return new(e||y)(b.Qb(o.a),b.Qb(r.a),b.Qb(s.a),b.Qb(n.a),b.Qb(i.xb),b.Qb(u.c),b.Qb(u.a))},y.\u0275cmp=b.Kb({type:y,selectors:[["ngx-manage-test"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(b.Wb(0,"nb-card"),b.Wb(1,"nb-card-header"),b.Wb(2,"div",0),b.Wb(3,"div",1),b.Wb(4,"h3"),b.Cc(5,"Classroom Exams"),b.Vb(),b.Vb(),b.Wb(6,"div",2),b.Wb(7,"nb-select",3),b.ec("selectedChange",(function(e){return t.onSelectCategory(e)})),b.Wb(8,"nb-option",4),b.Cc(9,"All Categories"),b.Vb(),b.Ac(10,h,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Wb(11,"div",2),b.Wb(12,"nb-select",6),b.ec("selectedChange",(function(e){return t.onSelectCourse(e)})),b.Wb(13,"nb-option",4),b.Cc(14,"All Courses"),b.Vb(),b.Ac(15,l,2,2,"nb-option",5),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(16,"nb-card-body",7),b.Wb(17,"div",0),b.Wb(18,"div",8),b.Ac(19,v,4,2,"ng-container",9),b.Ac(20,C,2,0,"ng-template",null,10,b.Bc),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e){var c=b.sc(21);b.Eb(7),b.mc("selected",t.category),b.Eb(3),b.mc("ngForOf",t.categories),b.Eb(2),b.mc("selected",t.course),b.Eb(3),b.mc("ngForOf",t.myCourses),b.Eb(4),b.mc("ngIf",!t.loading)("ngIfElse",c)}},directives:[i.x,i.z,i.jb,i.eb,a.m,i.w,a.n,i.u],styles:[""]}),y)},{path:"page-not-found",loadChildren:function(){return c.e(0).then(c.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],W=((m=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:m}),m.\u0275inj=b.Nb({factory:function(e){return new(e||m)},imports:[[u.g.forChild(p)],u.g]}),m);c.d(t,"ManageTestModule",(function(){return S}));var V,S=((V=function e(){_classCallCheck(this,e)}).\u0275mod=b.Ob({type:V}),V.\u0275inj=b.Nb({factory:function(e){return new(e||V)},imports:[[a.c,W,i.A,i.kb,i.N,i.v]]}),V)}}]);