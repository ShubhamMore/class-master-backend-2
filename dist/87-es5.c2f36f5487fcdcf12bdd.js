function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"iQ/W":function(e,t,n){"use strict";n.r(t);var r,i,o=n("ofXK"),c=n("IAlr"),a=n("EQut"),u=n("fXoL"),l=n("tyNb"),s=[{path:"",component:(r=function(){function e(t,n,r,i){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.router=r,this.route=i}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.courseId=this.courseService.getCourseId(),this.branchId&&this.courseId&&this.courseService.getCourseData()?this.loading=!1:this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCourseId(),this.courseService.deleteCourseData()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(u["\u0275\u0275directiveInject"](a.a),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](l.c),u["\u0275\u0275directiveInject"](l.a))},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-batch"]],decls:1,vars:0,template:function(e,t){1&e&&u["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],styles:[""]}),r),children:[{path:"manage",loadChildren:function(){return Promise.all([n.e(1),n.e(88)]).then(n.bind(null,"l41o")).then((function(e){return e.ManageBatchModule}))}},{path:"add",loadChildren:function(){return Promise.all([n.e(3),n.e(1),n.e(15)]).then(n.bind(null,"Dvlh")).then((function(e){return e.AddBatchModule}))}},{path:"edit",loadChildren:function(){return Promise.all([n.e(3),n.e(1),n.e(15)]).then(n.bind(null,"Dvlh")).then((function(e){return e.AddBatchModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)},imports:[[l.g.forChild(s)],l.g]}),i);n.d(t,"BatchModule",(function(){return f}));var d,f=((d=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:d}),d.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||d)},imports:[[o.c,h]]}),d)}}]);