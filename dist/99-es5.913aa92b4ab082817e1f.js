!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{J1Az:function(t,i,r){"use strict";r.r(i),r.d(i,"LeadModule",(function(){return b}));var o=r("ofXK"),c=r("fXoL"),a=r("EQut"),u=r("IAlr"),d=r("F3IG"),l=r("tyNb");function h(e,n){1&e&&c["\u0275\u0275element"](0,"router-outlet")}var s,f,p,v=[{path:"",component:(s=function(){function t(n,i,r,o,c){e(this,t),this.branchService=n,this.courseService=i,this.leadService=r,this.router=o,this.route=c}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.courseService.getCourses(this.branchId,"").subscribe((function(n){e.courseService.setCoursesData(n),e.loading=!1}),(function(n){e.back()})):this.back()}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.courseService.deleteCoursesData(),this.leadService.deleteLeadType()}}])&&n(i.prototype,r),o&&n(i,o),t}(),s.\u0275fac=function(e){return new(e||s)(c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](l.c),c["\u0275\u0275directiveInject"](l.a))},s.\u0275cmp=c["\u0275\u0275defineComponent"]({type:s,selectors:[["ngx-lead"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,n){1&e&&c["\u0275\u0275template"](0,h,1,0,"router-outlet",0),2&e&&c["\u0275\u0275property"]("ngIf",!n.loading)},directives:[o.n,l.h],styles:[""]}),s),children:[{path:"add",loadChildren:function(){return r.e(13).then(r.bind(null,"I87H")).then((function(e){return e.AddLeadModule}))}},{path:"edit",loadChildren:function(){return r.e(13).then(r.bind(null,"I87H")).then((function(e){return e.AddLeadModule}))}},{path:"manage",loadChildren:function(){return r.e(100).then(r.bind(null,"ojsi")).then((function(e){return e.ManageLeadModule}))}},{path:"",redirectTo:"manage?type=active",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],g=((p=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[l.g.forChild(v)],l.g]}),p),b=((f=function n(){e(this,n)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},imports:[[o.c,g]]}),f)}}])}();
//# sourceMappingURL=99-es5.913aa92b4ab082817e1f.js.map