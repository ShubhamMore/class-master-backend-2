(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{Ap0v:function(t,e,n){"use strict";n.r(e),n.d(e,"BranchesModule",(function(){return f}));var r=n("aceb"),i=n("ofXK"),a=n("fXoL"),l=n("W0sp"),o=n("tyNb");function s(t,e){if(1&t){const t=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"tr"),a["\u0275\u0275elementStart"](1,"td"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"td"),a["\u0275\u0275text"](4),a["\u0275\u0275pipe"](5,"uppercase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"td"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"td"),a["\u0275\u0275text"](9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"td"),a["\u0275\u0275elementStart"](11,"button",11),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](t);const n=e.$implicit;return a["\u0275\u0275nextContext"](3).viewBranch(n)})),a["\u0275\u0275text"](12," View "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=e.index,r=a["\u0275\u0275nextContext"](3);a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n+1),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](5,4,t.basicDetails.branchName)),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](r.institute.phone),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](t.status?"Active":"Inactive")}}function c(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div",8),a["\u0275\u0275elementStart"](1,"table",9),a["\u0275\u0275elementStart"](2,"thead"),a["\u0275\u0275elementStart"](3,"th"),a["\u0275\u0275text"](4,"#"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"th"),a["\u0275\u0275text"](6,"Institute"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"th"),a["\u0275\u0275text"](8,"Contact"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"th"),a["\u0275\u0275text"](10,"Status"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"th"),a["\u0275\u0275text"](12,"Action"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"tbody"),a["\u0275\u0275template"](14,s,13,6,"tr",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t){const t=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](14),a["\u0275\u0275property"]("ngForOf",t.branches)}}function d(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",6),a["\u0275\u0275template"](2,c,15,1,"div",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t){const t=a["\u0275\u0275nextContext"](),e=a["\u0275\u0275reference"](13);a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",t.branches.length>0)("ngIfElse",e)}}function m(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"p",12),a["\u0275\u0275text"](1,"Loading..."),a["\u0275\u0275elementEnd"]())}function u(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"p",12),a["\u0275\u0275text"](1,"No Branches Available"),a["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class t{constructor(t,e,n,r){this.instituteService=t,this.toastrService=e,this.router=n,this.route=r}ngOnInit(){this.loading=!0,this.instituteService.getInstitute().subscribe(t=>{t?(this.institute=t,this.instituteService.getInstituteBranches(t.imsMasterId).subscribe(t=>{this.branches=t,this.loading=!1},t=>{this.showToastr("top right","danger",t),this.loading=!1})):this.showToastr("top right","danger","Invalid Institute")})}viewBranch(t){this.instituteService.setBranch(t),this.router.navigate(["./history"],{relativeTo:this.route})}back(){this.router.navigate(["../"],{relativeTo:this.route})}showToastr(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](r.Gb),a["\u0275\u0275directiveInject"](o.c),a["\u0275\u0275directiveInject"](o.a))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-branches"]],decls:14,vars:2,consts:[[1,"row"],[1,"col-md-12"],["type","button","size","small","nbButton","","status","warning",1,"float-right",3,"click"],["class","row",4,"ngIf","ngIfElse"],["loadingData",""],["noBranches",""],[1,"col-12"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["type","button","nbButton","","size","small","status","warning",3,"click"],[1,"pt-5","pb-5","text-center"]],template:function(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",1),a["\u0275\u0275elementStart"](4,"button",2),a["\u0275\u0275listener"]("click",(function(){return e.back()})),a["\u0275\u0275text"](5," Back "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"h3"),a["\u0275\u0275text"](7,"Institutes"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"nb-card-body"),a["\u0275\u0275template"](9,d,3,2,"div",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](10,m,2,0,"ng-template",null,4,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275template"](12,u,2,0,"ng-template",null,5,a["\u0275\u0275templateRefExtractor"])),2&t){const t=a["\u0275\u0275reference"](11);a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("ngIf",!e.loading)("ngIfElse",t)}},directives:[r.y,r.A,r.v,r.x,i.n,i.m],pipes:[i.w],styles:[""]}),t})()},{path:"history",loadChildren:()=>Promise.all([n.e(1),n.e(58)]).then(n.bind(null,"7plo")).then(t=>t.HistoryModule)},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let h=(()=>{class t{}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.g.forChild(p)],o.g]}),t})(),f=(()=>{class t{}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[i.c,h,r.B,r.P,r.R,r.w,r.Jb]]}),t})()}}]);
//# sourceMappingURL=57-es2015.6abc72d940398e11e416.js.map