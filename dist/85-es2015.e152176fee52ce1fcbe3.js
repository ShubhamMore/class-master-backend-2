(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{X8D7:function(t,n,e){"use strict";e.r(n);var c=e("tyNb"),i=e("ZatZ"),s=e("5V5q"),o=e("EQut"),r=e("fXoL"),b=e("aceb"),a=e("ofXK");function d(t,n){if(1&t){const t=r.Xb();r.Wb(0,"tr"),r.Wb(1,"td"),r.Cc(2),r.Vb(),r.Wb(3,"td"),r.Cc(4),r.Vb(),r.Wb(5,"td"),r.Cc(6),r.Vb(),r.Wb(7,"td"),r.Cc(8),r.Vb(),r.Wb(9,"td",14),r.Cc(10),r.Vb(),r.Wb(11,"td",14),r.Cc(12),r.Vb(),r.Wb(13,"td"),r.Wb(14,"button",15),r.ec("click",(function(){r.uc(t);const e=n.$implicit;return r.gc(3).editDiscountAndOffer(e._id)})),r.Cc(15," Edit "),r.Vb(),r.Vb(),r.Wb(16,"td"),r.Wb(17,"button",16),r.ec("click",(function(){r.uc(t);const e=n.$implicit,c=n.index;return r.gc(3).changeDiscountAndOfferStatus(e._id,!e.status,c)})),r.Cc(18),r.Vb(),r.Vb(),r.Vb()}if(2&t){const t=n.$implicit,e=n.index,c=r.gc(3);r.Eb(2),r.Dc(e+1),r.Eb(2),r.Dc(t.offerName),r.Eb(2),r.Dc(t.code),r.Eb(2),r.Fc(" ",t.discountAmount," ","percentage"===t.discountType?"%":""," "),r.Eb(2),r.Ec(" ",c.dateService.formatDate(t.startDate)," "),r.Eb(2),r.Ec(" ",c.dateService.formatDate(t.expiryDate)," "),r.Eb(5),r.mc("status",t.status?"danger":"warning"),r.Eb(1),r.Ec(" ",t.status?"Deactivate":"Activate"," ")}}function u(t,n){if(1&t&&(r.Wb(0,"div",11),r.Wb(1,"table",12),r.Wb(2,"thead"),r.Wb(3,"tr"),r.Wb(4,"th"),r.Cc(5,"#"),r.Vb(),r.Wb(6,"th"),r.Cc(7,"Discount And Offer"),r.Vb(),r.Wb(8,"th"),r.Cc(9,"Offer Code"),r.Vb(),r.Wb(10,"th"),r.Cc(11,"Percentage/Amount"),r.Vb(),r.Wb(12,"th"),r.Cc(13,"Start Date"),r.Vb(),r.Wb(14,"th"),r.Cc(15,"Expiry Date"),r.Vb(),r.Wb(16,"th"),r.Cc(17,"Action"),r.Vb(),r.Rb(18,"th"),r.Vb(),r.Vb(),r.Wb(19,"tbody"),r.Ac(20,d,19,9,"tr",13),r.Vb(),r.Vb(),r.Vb()),2&t){const t=r.gc(2);r.Eb(20),r.mc("ngForOf",t.discountAndOffers)}}function f(t,n){1&t&&(r.Wb(0,"p",17),r.Cc(1,"No Discounts And Offers Available"),r.Vb())}function l(t,n){if(1&t&&(r.Ub(0),r.Ac(1,u,21,1,"div",9),r.Ac(2,f,2,0,"ng-template",null,10,r.Bc),r.Tb()),2&t){const t=r.sc(3),n=r.gc();r.Eb(1),r.mc("ngIf",n.discountAndOffers.length>0)("ngIfElse",t)}}function h(t,n){1&t&&(r.Wb(0,"p",17),r.Cc(1,"Loading..."),r.Vb())}const g=[{path:"",component:(()=>{class t{constructor(t,n,e,c,i,s){this.branchService=t,this.dateService=n,this.discountAndOfferService=e,this.toastrService=c,this.router=i,this.route=s}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.discountAndOffers=[],this.getDiscountAndOffers()):this.router.navigate(["../"],{relativeTo:this.route})}getDiscountAndOffers(){this.loading=!0,this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe(t=>{this.discountAndOffers=t,this.loading=!1},t=>{this.loading=!1})}addDiscountAndOffer(){this.router.navigate(["../add"],{relativeTo:this.route})}editDiscountAndOffer(t){this.discountAndOfferService.setDiscountAndOfferId(t),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}changeDiscountAndOfferStatus(t,n,e){this.loading=!0,this.discountAndOfferService.changeDiscountAndOfferStatus(t,n).subscribe(t=>{this.discountAndOffers[e].status=n,this.showToastr("top-right","success",`DiscountAndOffer ${n?"Activated":"Deactivated"} Successfully!`),this.loading=!1},t=>{this.showToastr("top-right","danger",t),this.loading=!1})}showToastr(t,n,e){this.toastrService.show(n,e,{position:t,status:n})}}return t.\u0275fac=function(n){return new(n||t)(r.Qb(o.a),r.Qb(i.a),r.Qb(s.a),r.Qb(b.xb),r.Qb(c.c),r.Qb(c.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["ngx-manage-discount-and-offer"]],decls:16,vars:2,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","status","primary","fullWidth","","size","small",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noDiscountsAndOffers",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"keep-hyphen"],["nbButton","","status","basic","size","small",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center"]],template:function(t,n){if(1&t&&(r.Wb(0,"nb-card"),r.Wb(1,"nb-card-header"),r.Wb(2,"div",0),r.Wb(3,"div",1),r.Wb(4,"h3"),r.Cc(5,"Discounts And Offers"),r.Vb(),r.Vb(),r.Wb(6,"div",2),r.Wb(7,"button",3),r.ec("click",(function(){return n.addDiscountAndOffer()})),r.Cc(8," Add Discount & Offer "),r.Rb(9,"nb-icon",4),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(10,"nb-card-body",5),r.Wb(11,"div",0),r.Wb(12,"div",6),r.Ac(13,l,4,2,"ng-container",7),r.Ac(14,h,2,0,"ng-template",null,8,r.Bc),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t){const t=r.sc(15);r.Eb(13),r.mc("ngIf",!n.loading)("ngIfElse",t)}},directives:[b.x,b.z,b.u,b.L,b.w,a.n,a.m],styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>e.e(0).then(e.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let p=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(n){return new(n||t)},imports:[[c.g.forChild(g)],c.g]}),t})();e.d(n,"ManageDiscountAndOfferModule",(function(){return A}));let A=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(n){return new(n||t)},imports:[[a.c,p,b.A,b.v,b.N]]}),t})()}}]);