!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"0Buk":function(t,r,i){"use strict";i.r(r),i.d(r,"BranchModule",(function(){return m}));var c,o=i("aceb"),a=i("ofXK"),u=i("fXoL"),s=i("EQut"),h=i("nPMn"),d=i("tyNb"),f=((c=function(){function t(n,r,i){e(this,t),this.branchService=n,this.router=r,this.route=i}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe((function(t){e.branch=t,e.branchService.setBranchData(t),e.loading=!1}),(function(e){})):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}]),t}()).\u0275fac=function(e){return new(e||c)(u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](d.c),u["\u0275\u0275directiveInject"](d.a))},c.\u0275cmp=u["\u0275\u0275defineComponent"]({type:c,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),c);function l(e,t){1&e&&u["\u0275\u0275element"](0,"router-outlet")}var v,p,b,y=[{path:"",component:(v=function(){function t(n,r,i,c,o){e(this,t),this.toastrService=n,this.branchService=r,this.instituteKeysService=i,this.router=c,this.route=o}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchService.getBranchForStudent(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.router.navigate(["../"],{relativeTo:e.route})})),this.instituteKeysService.getInstitutePaymentAccessKey(this.branchId).subscribe((function(t){t&&t.accessKey&&e.instituteKeysService.setLocalInstitutePaymentAccessKey(t.accessKey)}),(function(e){}))):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData(),this.instituteKeysService.setLocalInstitutePaymentAccessKey(null)}}]),t}(),v.\u0275fac=function(e){return new(e||v)(u["\u0275\u0275directiveInject"](o.Gb),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](h.a),u["\u0275\u0275directiveInject"](d.c),u["\u0275\u0275directiveInject"](d.a))},v.\u0275cmp=u["\u0275\u0275defineComponent"]({type:v,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(u["\u0275\u0275element"](0,"ngx-branch-header"),u["\u0275\u0275template"](1,l,1,0,"router-outlet",0)),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!t.loading))},directives:[f,a.n,d.h],styles:[""]}),v),children:[{path:"dashboard",loadChildren:function(){return Promise.all([i.e(1),i.e(253)]).then(i.bind(null,"IHwy")).then((function(e){return e.DashboardModule}))}},{path:"course",loadChildren:function(){return i.e(240).then(i.bind(null,"tphi")).then((function(e){return e.CourseModule}))}},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],g=((p=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[d.g.forChild(y)],d.g]}),p),I=i("nF4J"),m=((b=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},providers:[I.a],imports:[[a.c,g,o.B,o.Lb]]}),b)},nF4J:function(t,r,i){"use strict";i.d(r,"a",(function(){return o}));var c=i("fXoL"),o=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"setType",value:function(e){this.type=e}},{key:"getType",value:function(){return this.type}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t}()}}])}();
//# sourceMappingURL=53-es5.2ed68a31b4a13a07b4c2.js.map