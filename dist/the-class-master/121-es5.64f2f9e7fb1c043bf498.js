!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{X0Xa:function(t,r,o){"use strict";o.r(r),o.d(r,"ManageBranchModule",(function(){return p}));var i,u,c,a=o("ofXK"),d=o("fXoL"),l=o("EQut"),f=o("tyNb"),h=[{path:"",component:(i=function(){function t(e,r,o){n(this,t),this.branchService=e,this.router=r,this.route=o}var r,o,i;return r=t,(o=[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}}])&&e(r.prototype,o),i&&e(r,i),t}(),i.\u0275fac=function(n){return new(n||i)(d["\u0275\u0275directiveInject"](l.a),d["\u0275\u0275directiveInject"](f.c),d["\u0275\u0275directiveInject"](f.a))},i.\u0275cmp=d["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-manage-branch"]],decls:1,vars:0,template:function(n,e){1&n&&d["\u0275\u0275element"](0,"router-outlet")},directives:[f.h],styles:[""]}),i),children:[{path:"receipt",loadChildren:function(){return Promise.all([o.e(1),o.e(122)]).then(o.bind(null,"R7iH")).then((function(n){return n.ReceiptInfoModule}))}},{path:"course",loadChildren:function(){return o.e(117).then(o.bind(null,"gVRm")).then((function(n){return n.CourseModule}))}},{path:"discount-and-offers",loadChildren:function(){return o.e(119).then(o.bind(null,"DuA9")).then((function(n){return n.DiscountAndOfferModule}))}},{path:"",redirectTo:"course",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return o.e(0).then(o.bind(null,"DeSt")).then((function(n){return n.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],s=((c=function e(){n(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(n){return new(n||c)},imports:[[f.g.forChild(h)],f.g]}),c),p=((u=function e(){n(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(n){return new(n||u)},imports:[[a.c,s]]}),u)}}])}();
//# sourceMappingURL=121-es5.64f2f9e7fb1c043bf498.js.map