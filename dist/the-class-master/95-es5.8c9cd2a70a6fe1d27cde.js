!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{WFh7:function(n,r,i){"use strict";i.r(r),i.d(r,"BatchTestModule",(function(){return b}));var o,c,a,u=i("ofXK"),h=i("tyNb"),d=i("fXoL"),l=i("EQut"),s=i("IAlr"),f=i("lst6"),p=[{path:"",component:(o=function(){function n(t,r,i,o,c){e(this,n),this.branchService=t,this.courseService=r,this.batchService=i,this.router=o,this.route=c}var r,i,o;return r=n,(i=[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteCategoryId(),this.branchService.deleteCategoryData(),this.courseService.deleteCourseId(),this.courseService.deleteCourseData(),this.batchService.deleteBatchId(),this.batchService.deleteBatchData()}}])&&t(r.prototype,i),o&&t(r,o),n}(),o.\u0275fac=function(e){return new(e||o)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](f.a),d["\u0275\u0275directiveInject"](h.c),d["\u0275\u0275directiveInject"](h.a))},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-batch-test"]],decls:1,vars:0,template:function(e,t){1&e&&d["\u0275\u0275element"](0,"router-outlet")},directives:[h.h],styles:[""]}),o),children:[{path:"manage",loadChildren:function(){return Promise.all([i.e(1),i.e(96)]).then(i.bind(null,"qK8W")).then((function(e){return e.ManageBatchTestModule}))}},{path:"add",loadChildren:function(){return Promise.all([i.e(1),i.e(12)]).then(i.bind(null,"hPhX")).then((function(e){return e.AddTestModule}))}},{path:"edit",loadChildren:function(){return Promise.all([i.e(1),i.e(12)]).then(i.bind(null,"hPhX")).then((function(e){return e.AddTestModule}))}},{path:"score",loadChildren:function(){return Promise.all([i.e(1),i.e(94)]).then(i.bind(null,"7WzG")).then((function(e){return e.AddTestScoreModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],v=((a=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[h.g.forChild(p)],h.g]}),a),b=((c=function t(){e(this,t)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[u.c,v]]}),c)}}])}();
//# sourceMappingURL=95-es5.8c9cd2a70a6fe1d27cde.js.map