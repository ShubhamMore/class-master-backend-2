function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{sGxL:function(e,t,n){"use strict";n.r(t);var r,i,c=n("ofXK"),a=n("IAlr"),o=n("lst6"),s=n("EQut"),u=n("fXoL"),h=n("tyNb"),l=[{path:"",component:(r=function(){function e(t,n,r,i,c){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.batchService=r,this.router=i,this.route=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe((function(t){e.courseService.setCoursesData(t),e.loading=!1}),(function(e){})),this.batchService.getBatches(this.branchId,"","").subscribe((function(t){e.batchService.setBatchesData(t)}),(function(e){}))):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(u.Qb(s.a),u.Qb(a.a),u.Qb(o.a),u.Qb(h.c),u.Qb(h.a))},r.\u0275cmp=u.Kb({type:r,selectors:[["ngx-test"]],decls:1,vars:0,template:function(e,t){1&e&&u.Rb(0,"router-outlet")},directives:[h.h],styles:[""]}),r),children:[{path:"batch",loadChildren:function(){return n.e(120).then(n.bind(null,"dZea")).then((function(e){return e.ManageTestModule}))}},{path:"batch-test",loadChildren:function(){return n.e(118).then(n.bind(null,"DMpT")).then((function(e){return e.BatchTestModule}))}},{path:"",redirectTo:"batch",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],f=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:i}),i.\u0275inj=u.Nb({factory:function(e){return new(e||i)},imports:[[h.g.forChild(l)],h.g]}),i);n.d(t,"TestModule",(function(){return b}));var d,b=((d=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:d}),d.\u0275inj=u.Nb({factory:function(e){return new(e||d)},imports:[[c.c,f]]}),d)}}]);