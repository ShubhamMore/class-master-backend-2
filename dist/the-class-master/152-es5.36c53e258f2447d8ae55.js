!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{FJPE:function(n,r,a){"use strict";a.r(r),a.d(r,"BatchAssignmentModule",(function(){return w}));var i=a("aceb"),o=a("ofXK"),c=a("tyNb"),s=a("fXoL"),l=a("EQut"),d=a("ZatZ"),u=a("IAlr"),h=a("lst6");function m(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",11),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275property"]("value",n._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.category)}}function g(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",11),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275property"]("value",n._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.basicDetails.courseName)}}function f(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"td"),s["\u0275\u0275elementStart"](12,"button",17),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"](3).manageAssignment(e)})),s["\u0275\u0275text"](13," Manage Assignment "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=t.index,i=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](a+1),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r.basicDetails.batchName),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.getCategory(r.category)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.getCourse(r.course)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.dateService.formatDate(r.basicDetails.startDate))}}function v(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",14),s["\u0275\u0275elementStart"](1,"table",15),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"tr"),s["\u0275\u0275elementStart"](4,"th"),s["\u0275\u0275text"](5,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"th"),s["\u0275\u0275text"](7,"Name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"th"),s["\u0275\u0275text"](9,"Category"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"th"),s["\u0275\u0275text"](11,"Course"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th"),s["\u0275\u0275text"](13,"Start Date"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"th"),s["\u0275\u0275text"](15,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"tbody"),s["\u0275\u0275template"](17,f,14,5,"tr",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](17),s["\u0275\u0275property"]("ngForOf",n.batches)}}function p(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",18),s["\u0275\u0275text"](1,"No Batches Available"),s["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,v,18,1,"div",12),s["\u0275\u0275template"](2,p,2,0,"ng-template",null,13,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementContainerEnd"]()),2&e){var n=s["\u0275\u0275reference"](3),r=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",r.batches.length>0)("ngIfElse",n)}}function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",18),s["\u0275\u0275text"](1,"Loading..."),s["\u0275\u0275elementEnd"]())}var y,E,C,x=[{path:"",component:(y=function(){function n(t,r,a,i,o,c,s){e(this,n),this.branchService=t,this.dateService=r,this.courseService=a,this.batchService=i,this.toastrService=o,this.router=c,this.route=s}var r,a,i;return r=n,(a=[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var e=this;this.branchService.getBranchData().subscribe((function(t){t&&(e.categories=t.categories)})),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.categories=t.categories,e.getBatches(e.category,e.course)}),(function(t){e.showToastr("top-right","danger",t)}))}},{key:"getCourses",value:function(){var e=this;this.courseService.getCoursesData().subscribe((function(t){e.courses=t}))}},{key:"onSelectCategory",value:function(e){this.category=e,this.course="",this.myCourses=this.courses.filter((function(t){return t.basicDetails.category===e})),this.getBatches(this.category,this.course)}},{key:"onSelectCourse",value:function(e){this.course=e,this.getBatches(this.category,this.course)}},{key:"getBatches",value:function(e,t){var n=this;this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe((function(e){n.batches=e,n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"manageAssignment",value:function(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);var t=this.courses.find((function(t){return t._id===e.course}));this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);var n=this.categories.find((function(t){return t._id===e.category}));this.branchService.setCategoryData(n),this.router.navigate(["../manage"],{relativeTo:this.route})}},{key:"getCategory",value:function(e){var t=this.categories.find((function(t){return t._id===e}));return t?t.category:"--"}},{key:"getCourse",value:function(e){var t=this.courses.find((function(t){return t._id===e}));return t?t.basicDetails.courseName:"--"}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}])&&t(r.prototype,a),i&&t(r,i),n}(),y.\u0275fac=function(e){return new(e||y)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](h.a),s["\u0275\u0275directiveInject"](i.Gb),s["\u0275\u0275directiveInject"](c.c),s["\u0275\u0275directiveInject"](c.a))},y.\u0275cmp=s["\u0275\u0275defineComponent"]({type:y,selectors:[["ngx-batch-assignment"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","primary",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"h3"),s["\u0275\u0275text"](5,"Assignments"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"nb-select",3),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),s["\u0275\u0275elementStart"](8,"nb-option",4),s["\u0275\u0275text"](9,"All Categories"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,m,2,2,"nb-option",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"div",2),s["\u0275\u0275elementStart"](12,"nb-select",6),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),s["\u0275\u0275elementStart"](13,"nb-option",4),s["\u0275\u0275text"](14,"All Courses"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](15,g,2,2,"nb-option",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"nb-card-body",7),s["\u0275\u0275elementStart"](17,"div",0),s["\u0275\u0275elementStart"](18,"div",8),s["\u0275\u0275template"](19,b,4,2,"ng-container",9),s["\u0275\u0275template"](20,S,2,0,"ng-template",null,10,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275reference"](21);s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("selected",t.category),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.categories),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("selected",t.course),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.myCourses),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[i.y,i.A,i.nb,i.gb,o.m,i.x,o.n,i.v],styles:[""]}),y)},{path:"page-not-found",loadChildren:function(){return a.e(0).then(a.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],I=((C=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[c.g.forChild(x)],c.g]}),C),w=((E=function t(){e(this,t)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[o.c,I,i.B,i.Jb,i.P,i.w,i.R,i.k,i.M,i.ob]]}),E)}}])}();
//# sourceMappingURL=152-es5.36c53e258f2447d8ae55.js.map