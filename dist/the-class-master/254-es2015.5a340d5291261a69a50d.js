(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{FukE:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return f}));var a=n("ofXK"),r=n("fXoL"),i=n("EQut"),c=n("nwtg"),o=n("VAYa"),s=n("tyNb"),l=n("aceb");function d(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",1),r["\u0275\u0275elementStart"](1,"div",2),r["\u0275\u0275elementStart"](2,"nb-card"),r["\u0275\u0275elementStart"](3,"nb-card-body"),r["\u0275\u0275elementStart"](4,"h1"),r["\u0275\u0275element"](5,"i",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"h2"),r["\u0275\u0275text"](7,"You are not assigned to any Institute Yet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())}function m(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",12),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const t=r["\u0275\u0275nextContext"]().$implicit;return r["\u0275\u0275nextContext"](2).manageBranch(t._id)})),r["\u0275\u0275text"](1," Manage "),r["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",5),r["\u0275\u0275elementStart"](1,"nb-card",6),r["\u0275\u0275elementStart"](2,"nb-card-header",7),r["\u0275\u0275element"](3,"nb-user",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"nb-card-body"),r["\u0275\u0275elementStart"](5,"div",9),r["\u0275\u0275elementStart"](6,"h4"),r["\u0275\u0275text"](7),r["\u0275\u0275pipe"](8,"uppercase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](9,"p"),r["\u0275\u0275text"](10),r["\u0275\u0275element"](11,"br"),r["\u0275\u0275text"](12),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"nb-card-footer",10),r["\u0275\u0275template"](14,m,2,0,"button",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("name",e.basicDetails.branchName),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](8,5,e.basicDetails.branchName)),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"](" ",e.address.city,""),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" +91 ",e.basicDetails.phone," "),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",e.status)}}function u(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",1),r["\u0275\u0275template"](1,h,15,7,"div",4),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.branches)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,a,r){this.branchService=e,this.authService=t,this.menuService=n,this.router=a,this.route=r}ngOnInit(){this.loading=!0,this.branches=[],this.menuService.hideMenu(),this.branchService.setBranchId(""),this.branchService.getBranchesForStudent().subscribe(e=>{this.branches=e,this.branchService.setBranchesData(e),this.loading=!1},e=>{this.loading=!1})}manageBranch(e){this.branchService.setBranchId(e),this.router.navigate(["../branch/dashboard"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](s.c),r["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-home"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-10","col-12","mx-auto","text-center"],["aria-hidden","true",1,"fa","fa-university"],["class","col-md-3 col-sm-4 col-12",4,"ngFor","ngForOf"],[1,"col-md-3","col-sm-4","col-12"],[1,"shadow-sm"],[2,"position","relative"],["size","medium",1,"text-center",3,"name"],[1,"text-center"],[1,"text-right"],["class","","nbButton","","size","small","status","warning",3,"click",4,"ngIf"],["nbButton","","size","small","status","warning",1,"",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,d,8,0,"div",0),r["\u0275\u0275template"](1,u,2,1,"div",0)),2&e&&(r["\u0275\u0275property"]("ngIf",0===t.branches.length),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.branches.length>0))},directives:[a.n,l.y,l.x,a.m,l.A,l.Kb,l.z,l.v],pipes:[a.w],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let b=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(p)],s.g]}),e})();var v=n("vTDv");let f=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,b,v.a,l.B,l.P,l.w,l.Jb,l.Lb]]}),e})()}}]);
//# sourceMappingURL=254-es2015.5a340d5291261a69a50d.js.map