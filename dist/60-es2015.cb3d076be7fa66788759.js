(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{k69L:function(e,t,n){"use strict";n.r(t),n.d(t,"MembershipPlansModule",(function(){return y}));var r=n("aceb"),i=n("3Pt+"),m=n("ofXK"),s=n("fXoL"),l=n("xyIN");function a(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",13),s["\u0275\u0275text"](1," Price Amount is required! "),s["\u0275\u0275elementEnd"]())}function o(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",13),s["\u0275\u0275text"](1," Price Amount should be more than or equal to 0 "),s["\u0275\u0275elementEnd"]())}function d(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,a,2,0,"p",12),s["\u0275\u0275template"](2,o,2,0,"p",12),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==e.membershipForm.get("price").errors?null:e.membershipForm.get("price").errors.required),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==e.membershipForm.get("price").errors?null:e.membershipForm.get("price").errors.min)}}let p=(()=>{class e{constructor(e,t,n){this.membershipService=e,this.toastrService=t,this.ref=n}ngOnInit(){this.loading=!0,this.submit=!1,this.membershipService.getMembershipPlan().subscribe(e=>{this.membership=e,e?(this.membershipForm=new i.f({name:new i.d(e.name,{validators:[i.u.required]}),duration:new i.d(e.duration,{validators:[i.u.required]}),price:new i.d(e.price,{validators:[i.u.required,i.u.min(0)]})}),this.loading=!1):this.onClose()})}saveMembership(){if(this.membershipForm.markAllAsTouched(),this.membershipForm.invalid)return void this.showToastr("top-right","danger","Membership Details are required");this.submit=!0;const e=Object.assign({},this.membershipForm.value);this.membership._id&&(e._id=this.membership._id),this.membershipService.saveMembershipPlan(e).subscribe(e=>{this.ref.close(e)},e=>{this.showToastr("top-right","danger",e),this.submit=!1})}onClose(){this.ref.close()}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.membershipService.setMembershipPlan(null)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](r.Gb),s["\u0275\u0275directiveInject"](r.J))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-save-membership-plan"]],decls:40,vars:12,consts:[[1,"membership-box"],["icon","close-outline",1,"float-right","pointer",3,"click"],[1,""],[1,"",3,"formGroup","submit"],[1,"table-responsive"],[1,"table","table-borderless"],[1,"form-control-group"],["type","number","nbInput","","id","input-price","name","price","min","0","formControlName","price","placeholder","Price","fullWidth","",3,"status"],[4,"ngIf"],[1,"row"],[1,"col-md-12","text-right"],["type","submit","nbButton","","size","small","nbSpinnerStatus","primary","nbSpinnerSize","small",3,"disabled","nbSpinner"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"nb-icon",1),s["\u0275\u0275listener"]("click",(function(){return t.onClose()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"h3",2),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"uppercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"nb-card-body"),s["\u0275\u0275elementStart"](7,"form",3),s["\u0275\u0275listener"]("submit",(function(){return t.saveMembership()})),s["\u0275\u0275elementStart"](8,"div",4),s["\u0275\u0275elementStart"](9,"table",5),s["\u0275\u0275elementStart"](10,"tbody"),s["\u0275\u0275elementStart"](11,"tr"),s["\u0275\u0275elementStart"](12,"th"),s["\u0275\u0275text"](13,"Plan Name"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"td"),s["\u0275\u0275text"](15,":"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"td"),s["\u0275\u0275text"](17),s["\u0275\u0275pipe"](18,"uppercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"tr"),s["\u0275\u0275elementStart"](20,"th"),s["\u0275\u0275text"](21,"Duration"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"td"),s["\u0275\u0275text"](23,":"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"td"),s["\u0275\u0275text"](25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"tr"),s["\u0275\u0275elementStart"](27,"th"),s["\u0275\u0275text"](28,"Price"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"td"),s["\u0275\u0275text"](30,":"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"td"),s["\u0275\u0275elementStart"](32,"div",6),s["\u0275\u0275element"](33,"input",7),s["\u0275\u0275template"](34,d,3,2,"ng-container",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](35,"hr"),s["\u0275\u0275elementStart"](36,"div",9),s["\u0275\u0275elementStart"](37,"div",10),s["\u0275\u0275elementStart"](38,"button",11),s["\u0275\u0275text"](39," Save "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](5,8,t.membership.name)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("formGroup",t.membershipForm),s["\u0275\u0275advance"](10),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](18,10,t.membershipForm.value.name)),s["\u0275\u0275advance"](8),s["\u0275\u0275textInterpolate1"]("",t.membershipForm.value.duration," Month/s"),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("status",t.membershipForm.get("price").touched?t.membershipForm.get("price").invalid?"danger":"success":"basic"),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.membershipForm.get("price").touched),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("disabled",t.submit)("nbSpinner",t.submit))},directives:[r.y,r.A,r.N,r.x,i.v,i.n,i.g,i.q,r.Q,i.a,i.m,i.e,m.n,r.v,r.sb],pipes:[m.w],styles:[""]}),e})();var c=n("jLJ7");function h(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275pipe"](5,"uppercase"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"td"),s["\u0275\u0275text"](7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"td"),s["\u0275\u0275text"](9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"td"),s["\u0275\u0275elementStart"](11,"button",10),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](3).editMembership(n)})),s["\u0275\u0275text"](12," Edit "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n+1),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](5,4,e.name)),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("",e.duration," Month/s"),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("",r.getAmount(e.price),"/-")}}function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",7),s["\u0275\u0275elementStart"](1,"table",8),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"th"),s["\u0275\u0275text"](4,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"th"),s["\u0275\u0275text"](6,"Membership Type"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"th"),s["\u0275\u0275text"](8,"Duration"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"th"),s["\u0275\u0275text"](10,"Price"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"th"),s["\u0275\u0275text"](12,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"tbody"),s["\u0275\u0275template"](14,h,13,6,"tr",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](14),s["\u0275\u0275property"]("ngForOf",e.memberships)}}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",5),s["\u0275\u0275template"](2,u,15,1,"div",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](),t=s["\u0275\u0275reference"](11);s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",e.memberships.length>0)("ngIfElse",t)}}function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",11),s["\u0275\u0275text"](1,"Loading..."),s["\u0275\u0275elementEnd"]())}function g(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",11),s["\u0275\u0275text"](1,"No Membership Plans Available"),s["\u0275\u0275elementEnd"]())}let f=(()=>{class e{constructor(e,t,n){this.membershipService=e,this.toastrService=t,this.dialogService=n}ngOnInit(){this.loading=!0,this.memberships=[new c.a(null,"monthly","1","1999",!0),new c.a(null,"quarterly","3","4999",!0),new c.a(null,"half-yearly","6","7999",!0),new c.a(null,"yearly","12","11999",!0)],this.getMemberships()}getMemberships(){this.loading=!0,this.membershipService.getMemberships().subscribe(e=>{for(let t=0;t<4;t++){const n=this.memberships[t],r=e.find(e=>e.name===n.name);r&&(this.memberships[t]=r)}this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}openMembershipDialog(){this.dialogService.open(p,{context:{}}).onClose.subscribe(e=>e&&this.getMemberships())}getAmount(e){return(e=parseFloat(e.toString())).toFixed(2).toString()}editMembership(e){this.membershipService.setMembershipPlan(e),this.openMembershipDialog()}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](r.Gb),s["\u0275\u0275directiveInject"](r.K))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-membership-plans"]],decls:12,vars:2,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],["class","row",4,"ngIf","ngIfElse"],["loadingData",""],["noMemberships",""],[1,"col-12"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["type","button","nbButton","","size","small","status","basic",3,"click"],[1,"pt-5","pb-5","text-center"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"h3"),s["\u0275\u0275text"](5,"Membership Plans"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"nb-card-body"),s["\u0275\u0275template"](7,b,3,2,"div",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](8,S,2,0,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](10,g,2,0,"ng-template",null,4,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](9);s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.x,m.n,m.m,r.v],pipes:[m.w],styles:[""]}),e})();var v=n("tyNb");const E=[{path:"",component:f},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let x=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[v.g.forChild(E)],v.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[m.c,x,r.B,r.R,r.w,r.ob,r.tb,r.P,i.s]]}),e})()}}]);
//# sourceMappingURL=60-es2015.cb3d076be7fa66788759.js.map