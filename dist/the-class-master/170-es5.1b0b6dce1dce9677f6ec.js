!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{"d/C0":function(t,i,r){"use strict";r.r(i),r.d(i,"OnlineTestModule",(function(){return g}));var o=r("ofXK"),c=r("fXoL"),u=r("EQut"),a=r("IAlr"),l=r("lst6"),h=r("tyNb");function s(e,n){1&e&&c["\u0275\u0275element"](0,"router-outlet")}var d,f,p,b=[{path:"",component:(d=function(){function t(n,i,r,o,c){e(this,t),this.branchService=n,this.courseService=i,this.batchService=r,this.router=o,this.route=c}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe((function(n){e.courseService.setCoursesData(n)}),(function(e){})),this.batchService.getBatches(this.branchId,"","").subscribe((function(n){e.batchService.setBatchesData(n),e.loading=!1}),(function(e){}))):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData()}}])&&n(i.prototype,r),o&&n(i,o),t}(),d.\u0275fac=function(e){return new(e||d)(c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](h.c),c["\u0275\u0275directiveInject"](h.a))},d.\u0275cmp=c["\u0275\u0275defineComponent"]({type:d,selectors:[["ngx-online-test"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,n){1&e&&c["\u0275\u0275template"](0,s,1,0,"router-outlet",0),2&e&&c["\u0275\u0275property"]("ngIf",!n.loading)},directives:[o.n,h.h],styles:[""]}),d),children:[{path:"batch",loadChildren:function(){return r.e(166).then(r.bind(null,"a/Cc")).then((function(e){return e.ManageBatchOnlineTestModule}))}},{path:"manage",loadChildren:function(){return Promise.all([r.e(1),r.e(167)]).then(r.bind(null,"j3wF")).then((function(e){return e.ManageOnlineTestModule}))}},{path:"add",loadChildren:function(){return Promise.all([r.e(1),r.e(24)]).then(r.bind(null,"3EhG")).then((function(e){return e.AddOnlineTestModule}))}},{path:"edit",loadChildren:function(){return Promise.all([r.e(1),r.e(24)]).then(r.bind(null,"3EhG")).then((function(e){return e.AddOnlineTestModule}))}},{path:"question",loadChildren:function(){return Promise.all([r.e(1),r.e(169)]).then(r.bind(null,"KxHT")).then((function(e){return e.OnlineTestQuestionModule}))}},{path:"",redirectTo:"batch",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],v=((p=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[h.g.forChild(b)],h.g]}),p),g=((f=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[o.c,v]]}),f)}}])}();
//# sourceMappingURL=170-es5.1b0b6dce1dce9677f6ec.js.map