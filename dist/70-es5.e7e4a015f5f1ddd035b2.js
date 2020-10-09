function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"wOv/":function(e,t,n){"use strict";n.r(t);var r,i,a=n("ofXK"),c=n("7kqb"),o=n("Pj/w"),u=n("IAlr"),h=n("lst6"),l=n("EQut"),s=n("fXoL"),d=n("tyNb"),f=[{path:"",component:(r=function(){function e(t,n,r,i,a,c,o){_classCallCheck(this,e),this.branchService=t,this.branchEmployeeService=n,this.lectureService=r,this.courseService=i,this.batchService=a,this.router=c,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe((function(t){e.courseService.setCoursesData(t),e.loading=!1}),(function(e){})),this.batchService.getBatches(this.branchId,"","").subscribe((function(t){e.batchService.setBatchesData(t)}),(function(e){})),this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId,"teacher").subscribe((function(t){e.branchEmployeeService.setBranchEmployeesData(t),e.loading=!1}),(function(t){e.router.navigate(["../"],{relativeTo:e.route})}))):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.lectureService.setSearchDate(null)}}]),e}(),r.\u0275fac=function(e){return new(e||r)(s.Qb(l.a),s.Qb(o.a),s.Qb(c.a),s.Qb(u.a),s.Qb(h.a),s.Qb(d.c),s.Qb(d.a))},r.\u0275cmp=s.Kb({type:r,selectors:[["ngx-lecture"]],decls:1,vars:0,template:function(e,t){1&e&&s.Rb(0,"router-outlet")},directives:[d.h],styles:[""]}),r),children:[{path:"batch",loadChildren:function(){return Promise.all([n.e(1),n.e(69)]).then(n.bind(null,"HiKI")).then((function(e){return e.BatchLectureModule}))}},{path:"manage",loadChildren:function(){return n.e(71).then(n.bind(null,"fWff")).then((function(e){return e.ManageLectureModule}))}},{path:"view",loadChildren:function(){return n.e(75).then(n.bind(null,"q3Gl")).then((function(e){return e.ViewLectureModule}))}},{path:"material",loadChildren:function(){return n.e(73).then(n.bind(null,"61+n")).then((function(e){return e.StudyMaterialModule}))}},{path:"attendance",loadChildren:function(){return Promise.all([n.e(1),n.e(68)]).then(n.bind(null,"dGLe")).then((function(e){return e.AttendanceModule}))}},{path:"",redirectTo:"batch",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],b=((i=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:i}),i.\u0275inj=s.Nb({factory:function(e){return new(e||i)},imports:[[d.g.forChild(f)],d.g]}),i);n.d(t,"LectureModule",(function(){return v}));var p,v=((p=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:p}),p.\u0275inj=s.Nb({factory:function(e){return new(e||p)},imports:[[a.c,b]]}),p)}}]);