function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{Vqb6:function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("ofXK"),i=n("ZatZ"),c=n("lst6"),o=n("IAlr"),s=n("EQut"),l=n("fXoL"),d=n("tyNb");function u(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.category)}}function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",11),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.basicDetails.courseName)}}function m(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"td"),l["\u0275\u0275text"](10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"td"),l["\u0275\u0275elementStart"](12,"button",17),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](3).manageSchedule(e)})),l["\u0275\u0275text"](13," Manage Schedule "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=t.index,i=l["\u0275\u0275nextContext"](3);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a+1),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.basicDetails.batchName),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.getCategory(r.category)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.getCourse(r.course)),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.dateService.formatDate(r.basicDetails.startDate))}}function g(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",14),l["\u0275\u0275elementStart"](1,"table",15),l["\u0275\u0275elementStart"](2,"thead"),l["\u0275\u0275elementStart"](3,"tr"),l["\u0275\u0275elementStart"](4,"th"),l["\u0275\u0275text"](5,"#"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"th"),l["\u0275\u0275text"](7,"Name"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"th"),l["\u0275\u0275text"](9,"Category"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"th"),l["\u0275\u0275text"](11,"Course"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"th"),l["\u0275\u0275text"](13,"Start Date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"th"),l["\u0275\u0275text"](15,"Action"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"tbody"),l["\u0275\u0275template"](17,m,14,5,"tr",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](17),l["\u0275\u0275property"]("ngForOf",n.batches)}}function f(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",18),l["\u0275\u0275text"](1,"No Batches Available"),l["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,g,18,1,"div",12),l["\u0275\u0275template"](2,f,2,0,"ng-template",null,13,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementContainerEnd"]()),2&e){var n=l["\u0275\u0275reference"](3),r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",r.batches.length>0)("ngIfElse",n)}}function p(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",18),l["\u0275\u0275text"](1,"Loading..."),l["\u0275\u0275elementEnd"]())}var b,S,y=[{path:"",component:(b=function(){function e(t,n,r,a,i,c,o){_classCallCheck(this,e),this.branchService=t,this.dateService=n,this.courseService=r,this.batchService=a,this.toastrService=i,this.router=c,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.categories=[],this.courses=[],this.myCourses=[],this.batches=[],this.category="",this.course="",this.getCategories(),this.getCourses()):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var e=this;this.branchService.getBranchData().subscribe((function(t){t&&(e.categories=t.categories)})),this.categories?this.getBatches(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.categories=t.categories,e.getBatches(e.category,e.course)}),(function(t){e.showToastr("top-right","danger",t)}))}},{key:"getCourses",value:function(){var e=this;this.courseService.getCoursesData().subscribe((function(t){e.courses=t}))}},{key:"onSelectCategory",value:function(e){this.category=e,this.course="",this.myCourses=this.courses.filter((function(t){return t.basicDetails.category===e})),this.getBatches(this.category,this.course)}},{key:"onSelectCourse",value:function(e){this.course=e,this.getBatches(this.category,this.course)}},{key:"getBatches",value:function(e,t){var n=this;this.loading=!0,this.batchService.getBatches(this.branchId,e,t).subscribe((function(e){n.batches=e,n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"manageSchedule",value:function(e){this.batchService.setBatchId(e._id),this.batchService.setBatchData(e),this.courseService.setCourseId(e.course);var t=this.courses.find((function(t){return t._id===e.course}));this.courseService.setCourseData(t),this.branchService.setCategoryId(e.category);var n=this.categories.find((function(t){return t._id===e.category}));this.branchService.setCategoryData(n),this.router.navigate(["../batch-schedule"],{relativeTo:this.route})}},{key:"getCategory",value:function(e){var t=this.categories.find((function(t){return t._id===e}));return t?t.category:"--"}},{key:"getCourse",value:function(e){var t=this.courses.find((function(t){return t._id===e}));return t?t.basicDetails.courseName:"--"}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),b.\u0275fac=function(e){return new(e||b)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](r.Db),l["\u0275\u0275directiveInject"](d.c),l["\u0275\u0275directiveInject"](d.a))},b.\u0275cmp=l["\u0275\u0275defineComponent"]({type:b,selectors:[["ngx-manage-schedule"]],decls:22,vars:6,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","primary","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"Schedule Class"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"nb-select",3),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),l["\u0275\u0275elementStart"](8,"nb-option",4),l["\u0275\u0275text"](9,"All Categories"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](10,u,2,2,"nb-option",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"div",2),l["\u0275\u0275elementStart"](12,"nb-select",6),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),l["\u0275\u0275elementStart"](13,"nb-option",4),l["\u0275\u0275text"](14,"All Courses"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](15,h,2,2,"nb-option",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"nb-card-body",7),l["\u0275\u0275elementStart"](17,"div",0),l["\u0275\u0275elementStart"](18,"div",8),l["\u0275\u0275template"](19,v,4,2,"ng-container",9),l["\u0275\u0275template"](20,p,2,0,"ng-template",null,10,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275reference"](21);l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("selected",t.category),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.categories),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("selected",t.course),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.myCourses),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[r.x,r.z,r.mb,r.fb,a.m,r.w,a.n,r.u],styles:[""]}),b)}],C=((S=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[d.g.forChild(y)],d.g]}),S);n.d(t,"ManageScheduleModule",(function(){return x}));var E,x=((E=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[a.c,C,r.A,r.nb,r.v]]}),E)}}]);