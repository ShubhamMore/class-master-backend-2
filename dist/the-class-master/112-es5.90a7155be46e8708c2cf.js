!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{l41o:function(n,a,i){"use strict";i.r(a),i.d(a,"ManageBatchModule",(function(){return B}));var r=i("ofXK"),c=i("fXoL"),o=i("EQut"),l=i("IAlr"),s=i("lst6"),d=i("ZatZ"),u=i("aceb"),m=i("tyNb");function h(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"small"),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"]("of ",n.course.basicDetails.courseName,"")}}function f(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"td"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"td"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"td"),c["\u0275\u0275elementStart"](8,"button",16),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"](3).editBatch(e._id)})),c["\u0275\u0275text"](9," Edit "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"td"),c["\u0275\u0275elementStart"](11,"button",17),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit,a=t.index;return c["\u0275\u0275nextContext"](3).changeBatchStatus(e._id,!e.status,a)})),c["\u0275\u0275text"](12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=t.index,r=c["\u0275\u0275nextContext"](3);c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](i+1),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](a.basicDetails.batchName),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.dateService.formatDate(a.basicDetails.startDate)),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("status",a.status?"danger":"warning"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",a.status?"Deactivate":"Activate"," ")}}function v(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",12),c["\u0275\u0275elementStart"](1,"table",13),c["\u0275\u0275elementStart"](2,"thead"),c["\u0275\u0275elementStart"](3,"tr"),c["\u0275\u0275elementStart"](4,"th"),c["\u0275\u0275text"](5,"#"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"th"),c["\u0275\u0275text"](7,"Batch"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"th"),c["\u0275\u0275text"](9,"Start Date"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"th",14),c["\u0275\u0275text"](11,"Action"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"tbody"),c["\u0275\u0275template"](13,f,13,5,"tr",15),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](13),c["\u0275\u0275property"]("ngForOf",n.batches)}}function p(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",18),c["\u0275\u0275text"](1,"No Batches Available"),c["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,v,14,1,"div",10),c["\u0275\u0275template"](2,p,2,0,"ng-template",null,11,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementContainerEnd"]()),2&e){var n=c["\u0275\u0275reference"](3),a=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",a.batches.length>0)("ngIfElse",n)}}function g(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",18),c["\u0275\u0275text"](1,"Loading..."),c["\u0275\u0275elementEnd"]())}var S,E,x,y=[{path:"",component:(S=function(){function n(t,a,i,r,c,o,l){e(this,n),this.branchService=t,this.courseService=a,this.batchService=i,this.dateService=r,this.toastrService=c,this.router=o,this.route=l}var a,i,r;return a=n,(i=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.batches=[],this.courseService.getCourseData().subscribe((function(t){e.course=t,e.course?e.getBatches():e.back()}))):this.back()}},{key:"getBatches",value:function(){var e=this;this.loading=!0,this.batchService.getBatches(this.branchId,this.course.basicDetails.category,this.course._id).subscribe((function(t){e.batches=t,e.loading=!1}),(function(t){e.loading=!1}))}},{key:"addBatch",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"editBatch",value:function(e){this.batchService.setBatchId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"changeBatchStatus",value:function(e,t,n){var a=this;this.loading=!0,this.batchService.changeBatchStatus(e,t).subscribe((function(e){a.batches[n].status=t,a.showToastr("top-right","success","Batch ".concat(t?"Activated":"Deactivated"," Successfully!")),a.loading=!1}),(function(e){a.showToastr("top-right","danger",e),a.loading=!1}))}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}])&&t(a.prototype,i),r&&t(a,r),n}(),S.\u0275fac=function(e){return new(e||S)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](u.Gb),c["\u0275\u0275directiveInject"](m.c),c["\u0275\u0275directiveInject"](m.a))},S.\u0275cmp=c["\u0275\u0275defineComponent"]({type:S,selectors:[["ngx-manage-batch"]],decls:17,vars:3,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],["colspan","2"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","basic",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",0),c["\u0275\u0275elementStart"](3,"div",1),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5," Batches "),c["\u0275\u0275template"](6,h,2,1,"small",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",3),c["\u0275\u0275elementStart"](8,"button",4),c["\u0275\u0275listener"]("click",(function(){return t.addBatch()})),c["\u0275\u0275text"](9," Add Batch "),c["\u0275\u0275element"](10,"nb-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"nb-card-body",6),c["\u0275\u0275elementStart"](12,"div",0),c["\u0275\u0275elementStart"](13,"div",7),c["\u0275\u0275template"](14,b,4,2,"ng-container",8),c["\u0275\u0275template"](15,g,2,0,"ng-template",null,9,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275reference"](16);c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",t.course),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[u.y,u.A,r.n,u.v,u.N,u.x,r.m],styles:[""]}),S)},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],I=((x=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[m.g.forChild(y)],m.g]}),x),B=((E=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[r.c,I,u.B,u.w,u.ob,u.P,u.R]]}),E)}}])}();
//# sourceMappingURL=112-es5.90a7155be46e8708c2cf.js.map