function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{l41o:function(t,e,c){"use strict";c.r(e);var a=c("ofXK"),n=c("IAlr"),i=c("lst6"),s=c("EQut"),o=c("fXoL"),r=c("aceb"),b=c("tyNb");function u(t,e){if(1&t&&(o.Wb(0,"small"),o.Cc(1),o.Vb()),2&t){var c=o.gc();o.Eb(1),o.Ec("of ",c.course.basicDetails.courseName,"")}}function l(t,e){if(1&t){var c=o.Xb();o.Wb(0,"tr"),o.Wb(1,"td"),o.Cc(2),o.Vb(),o.Wb(3,"td"),o.Cc(4),o.Vb(),o.Wb(5,"td"),o.Cc(6),o.Vb(),o.Wb(7,"td"),o.Wb(8,"button",15),o.ec("click",(function(){o.uc(c);var t=e.$implicit;return o.gc(3).editBatch(t._id)})),o.Cc(9," Edit "),o.Vb(),o.Wb(10,"button",16),o.ec("click",(function(){o.uc(c);var t=e.$implicit,a=e.index;return o.gc(3).changeBatchStatus(t._id,!t.status,a)})),o.Cc(11),o.Vb(),o.Vb(),o.Vb()}if(2&t){var a=e.$implicit,n=e.index;o.Eb(2),o.Dc(n+1),o.Eb(2),o.Dc(a.basicDetails.batchName),o.Eb(2),o.Dc(a.basicDetails.startDate),o.Eb(4),o.mc("status",a.status?"danger":"warning"),o.Eb(1),o.Ec(" ",a.status?"Deactivate":"Activate"," ")}}function h(t,e){if(1&t&&(o.Wb(0,"div",12),o.Wb(1,"table",13),o.Wb(2,"thead"),o.Wb(3,"tr"),o.Wb(4,"th"),o.Cc(5,"#"),o.Vb(),o.Wb(6,"th"),o.Cc(7,"Batch"),o.Vb(),o.Wb(8,"th"),o.Cc(9,"Start Date"),o.Vb(),o.Wb(10,"th"),o.Cc(11,"Action"),o.Vb(),o.Vb(),o.Vb(),o.Wb(12,"tbody"),o.Ac(13,l,12,5,"tr",14),o.Vb(),o.Vb(),o.Vb()),2&t){var c=o.gc(2);o.Eb(13),o.mc("ngForOf",c.batches)}}function d(t,e){1&t&&(o.Wb(0,"p",17),o.Cc(1,"No Batches Available"),o.Vb())}function f(t,e){if(1&t&&(o.Ub(0),o.Ac(1,h,14,1,"div",10),o.Ac(2,d,2,0,"ng-template",null,11,o.Bc),o.Tb()),2&t){var c=o.sc(3),a=o.gc();o.Eb(1),o.mc("ngIf",a.batches.length>0)("ngIfElse",c)}}function g(t,e){1&t&&(o.Wb(0,"p",17),o.Cc(1,"Loading..."),o.Vb())}var v,p,m=[{path:"",component:(v=function(){function t(e,c,a,n,i,s){_classCallCheck(this,t),this.branchService=e,this.courseService=c,this.batchService=a,this.toastrService=n,this.router=i,this.route=s}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.batches=[],this.courseService.getCourseData().subscribe((function(e){t.course=e,t.course?t.getBatches():t.router.navigate(["../"],{relativeTo:t.route})}))):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getBatches",value:function(){var t=this;this.loading=!0,this.batchService.getBatches(this.branchId,this.course.basicDetails.category,this.course._id).subscribe((function(e){t.batches=e,t.loading=!1}),(function(e){t.loading=!1}))}},{key:"addBatch",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"editBatch",value:function(t){this.batchService.setBatchId(t),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"changeBatchStatus",value:function(t,e,c){var a=this;this.loading=!0,this.batchService.changeBatchStatus(t,e).subscribe((function(t){a.batches[c].status=e,a.showToastr("top-right","success","Batch ".concat(e?"Activated":"Deactivated"," Successfully!")),a.loading=!1}),(function(t){a.showToastr("top-right","danger",t),a.loading=!1}))}},{key:"showToastr",value:function(t,e,c){this.toastrService.show(e,c,{position:t,status:e})}}]),t}(),v.\u0275fac=function(t){return new(t||v)(o.Qb(s.a),o.Qb(n.a),o.Qb(i.a),o.Qb(r.xb),o.Qb(b.c),o.Qb(b.a))},v.\u0275cmp=o.Kb({type:v,selectors:[["ngx-manage-batch"]],decls:17,vars:3,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["nbButton","","status","primary","fullWidth","","size","small",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noBatches",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","status","basic","size","small",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center"]],template:function(t,e){if(1&t&&(o.Wb(0,"nb-card"),o.Wb(1,"nb-card-header"),o.Wb(2,"div",0),o.Wb(3,"div",1),o.Wb(4,"h3"),o.Cc(5," Batches "),o.Ac(6,u,2,1,"small",2),o.Vb(),o.Vb(),o.Wb(7,"div",3),o.Wb(8,"button",4),o.ec("click",(function(){return e.addBatch()})),o.Cc(9," Add Batch "),o.Rb(10,"nb-icon",5),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(11,"nb-card-body",6),o.Wb(12,"div",0),o.Wb(13,"div",7),o.Ac(14,f,4,2,"ng-container",8),o.Ac(15,g,2,0,"ng-template",null,9,o.Bc),o.Vb(),o.Vb(),o.Vb(),o.Vb()),2&t){var c=o.sc(16);o.Eb(6),o.mc("ngIf",e.course),o.Eb(8),o.mc("ngIf",!e.loading)("ngIfElse",c)}},directives:[r.x,r.z,a.n,r.u,r.L,r.w,a.m],styles:[""]}),v)},{path:"page-not-found",loadChildren:function(){return c.e(0).then(c.bind(null,"DeSt")).then((function(t){return t.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],W=((p=function t(){_classCallCheck(this,t)}).\u0275mod=o.Ob({type:p}),p.\u0275inj=o.Nb({factory:function(t){return new(t||p)},imports:[[b.g.forChild(m)],b.g]}),p);c.d(e,"ManageBatchModule",(function(){return C}));var V,C=((V=function t(){_classCallCheck(this,t)}).\u0275mod=o.Ob({type:V}),V.\u0275inj=o.Nb({factory:function(t){return new(t||V)},imports:[[a.c,W,r.A,r.v,r.kb,r.N,r.P]]}),V)}}]);