!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{KxHT:function(t,i,o){"use strict";o.r(i),o.d(i,"OnlineTestQuestionModule",(function(){return v}));var r=o("ofXK"),a=o("fXoL"),u=o("RSY0"),l=o("gmaa"),c=o("tyNb");function d(e,n){1&e&&a["\u0275\u0275element"](0,"router-outlet")}var s,f,h,p=[{path:"",component:(s=function(){function t(n,i,o,r){e(this,t),this.onlineExamService=n,this.onlineExamQuestionService=i,this.router=o,this.route=r}var i,o,r;return i=t,(o=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.onlineExamService.getOnlineExamData().subscribe((function(n){n?e.loading=!1:e.router.navigate(["../"],{relativeTo:e.route})}))}},{key:"ngOnDestroy",value:function(){this.onlineExamQuestionService.deleteOnlineExamQuestionId(),this.onlineExamQuestionService.deleteOnlineExamQuestionData(),this.onlineExamService.deleteOnlineExamId(),this.onlineExamService.deleteOnlineExamData()}}])&&n(i.prototype,o),r&&n(i,r),t}(),s.\u0275fac=function(e){return new(e||s)(a["\u0275\u0275directiveInject"](u.a),a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](c.c),a["\u0275\u0275directiveInject"](c.a))},s.\u0275cmp=a["\u0275\u0275defineComponent"]({type:s,selectors:[["ngx-online-test-question"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,n){1&e&&a["\u0275\u0275template"](0,d,1,0,"router-outlet",0),2&e&&a["\u0275\u0275property"]("ngIf",!n.loading)},directives:[r.n,c.h],styles:[""]}),s),children:[{path:"manage",loadChildren:function(){return o.e(168).then(o.bind(null,"SZ6b")).then((function(e){return e.ManageOnlineTestQuestionsModule}))}},{path:"add",loadChildren:function(){return o.e(25).then(o.bind(null,"Lv1/")).then((function(e){return e.AddOnlineTestQuestionsModule}))}},{path:"edit",loadChildren:function(){return o.e(25).then(o.bind(null,"Lv1/")).then((function(e){return e.AddOnlineTestQuestionsModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return o.e(0).then(o.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],m=((h=function n(){e(this,n)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[c.g.forChild(p)],c.g]}),h),v=((f=function n(){e(this,n)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[r.c,m]]}),f)}}])}();
//# sourceMappingURL=169-es5.89941250b16452233164.js.map