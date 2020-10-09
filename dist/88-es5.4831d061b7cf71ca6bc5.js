function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{Ojj6:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("Pj/w"),i=n("lst6"),c=n("IAlr"),o=n("EQut"),l=n("fXoL"),h=n("tyNb");function u(e,t){1&e&&l.Rb(0,"router-outlet")}var s,d,f=[{path:"",component:(s=function(){function e(t,n,r,a,i,c){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.batchService=r,this.router=a,this.route=i,this.branchEmployeeService=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId,"teacher").subscribe((function(t){e.branchEmployeeService.setBranchEmployeeNameIdsData(t),e.loading=!1}),(function(t){e.router.navigate(["../"],{relativeTo:e.route})})):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteCategoryId(),this.branchService.deleteCategoryData(),this.courseService.deleteCourseId(),this.courseService.deleteCourseData(),this.batchService.deleteBatchId(),this.batchService.deleteBatchData(),this.branchEmployeeService.deleteBranchEmployeeNameIdsData()}}]),e}(),s.\u0275fac=function(e){return new(e||s)(l.Qb(o.a),l.Qb(c.a),l.Qb(i.a),l.Qb(h.c),l.Qb(h.a),l.Qb(a.a))},s.\u0275cmp=l.Kb({type:s,selectors:[["ngx-batch-schedule"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&l.Ac(0,u,1,0,"router-outlet",0),2&e&&l.mc("ngIf",!t.loading)},directives:[r.n,h.h],styles:[""]}),s),children:[{path:"manage",loadChildren:function(){return Promise.all([n.e(1),n.e(89)]).then(n.bind(null,"4lO2")).then((function(e){return e.ManageBatchScheduleModule}))}},{path:"add",loadChildren:function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,"3FJh")).then((function(e){return e.AddScheduleModule}))}},{path:"edit",loadChildren:function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,"3FJh")).then((function(e){return e.AddScheduleModule}))}},{path:"view",loadChildren:function(){return n.e(90).then(n.bind(null,"M/t/")).then((function(e){return e.ViewScheduleModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],b=((d=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:d}),d.\u0275inj=l.Nb({factory:function(e){return new(e||d)},imports:[[h.g.forChild(f)],h.g]}),d);n.d(t,"BatchScheduleModule",(function(){return v}));var p,v=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:p}),p.\u0275inj=l.Nb({factory:function(e){return new(e||p)},imports:[[r.c,b]]}),p)}}]);