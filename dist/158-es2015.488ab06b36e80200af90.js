(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{ZcVN:function(t,b,e){"use strict";e.r(b);var c=e("ofXK"),r=e("M9zO"),a=e("EQut"),n=e("fXoL"),i=e("tyNb"),s=e("aceb");function h(t,b){if(1&t&&(n.Wb(0,"nb-card"),n.Wb(1,"nb-card-header"),n.Wb(2,"h3"),n.Cc(3),n.hc(4,"uppercase"),n.Vb(),n.Vb(),n.Wb(5,"nb-card-body"),n.Wb(6,"div",1),n.Wb(7,"table",2),n.Wb(8,"tbody"),n.Wb(9,"tr"),n.Wb(10,"th"),n.Cc(11,"Branch Name"),n.Vb(),n.Wb(12,"td"),n.Cc(13),n.Vb(),n.Vb(),n.Wb(14,"tr"),n.Wb(15,"th"),n.Cc(16,"Current Plan Type"),n.Vb(),n.Wb(17,"td"),n.Cc(18),n.Vb(),n.Vb(),n.Wb(19,"tr"),n.Wb(20,"th"),n.Cc(21,"Activation Date"),n.Vb(),n.Wb(22,"td"),n.Cc(23),n.Vb(),n.Vb(),n.Wb(24,"tr"),n.Wb(25,"th"),n.Cc(26,"Expiry Date"),n.Vb(),n.Wb(27,"td"),n.Cc(28),n.Vb(),n.Vb(),n.Wb(29,"tr"),n.Wb(30,"th"),n.Cc(31,"Email"),n.Vb(),n.Wb(32,"td"),n.Cc(33),n.Vb(),n.Vb(),n.Wb(34,"tr"),n.Wb(35,"th"),n.Cc(36,"Contact"),n.Vb(),n.Wb(37,"td"),n.Cc(38),n.Vb(),n.Vb(),n.Wb(39,"tr"),n.Wb(40,"th"),n.Cc(41,"Address 1"),n.Vb(),n.Wb(42,"td"),n.Cc(43),n.Vb(),n.Vb(),n.Wb(44,"tr"),n.Wb(45,"th"),n.Cc(46,"Address 2"),n.Vb(),n.Wb(47,"td"),n.Cc(48),n.Vb(),n.Vb(),n.Wb(49,"tr"),n.Wb(50,"th"),n.Cc(51,"City"),n.Vb(),n.Wb(52,"td"),n.Cc(53),n.Vb(),n.Vb(),n.Wb(54,"tr"),n.Wb(55,"th"),n.Cc(56,"Pincode"),n.Vb(),n.Wb(57,"td"),n.Cc(58),n.Vb(),n.Vb(),n.Wb(59,"tr"),n.Wb(60,"th"),n.Cc(61,"State"),n.Vb(),n.Wb(62,"td"),n.Cc(63),n.Vb(),n.Vb(),n.Wb(64,"tr"),n.Wb(65,"th"),n.Cc(66,"Categories"),n.Vb(),n.Wb(67,"td"),n.Cc(68),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb(),n.Vb()),2&t){const t=n.gc();n.Eb(3),n.Dc(n.ic(4,13,t.branch.basicDetails.branchName)),n.Eb(10),n.Dc(t.branch.basicDetails.branchName),n.Eb(5),n.Dc(t.branch.currentPlanDetails.planType),n.Eb(5),n.Dc(t.branch.currentPlanDetails.activationDate),n.Eb(5),n.Dc(t.branch.currentPlanDetails.expiryDate),n.Eb(5),n.Dc(t.branch.basicDetails.email),n.Eb(5),n.Dc(t.branch.basicDetails.phone),n.Eb(5),n.Dc(t.branch.address.address1),n.Eb(5),n.Dc(t.branch.address.address2),n.Eb(5),n.Dc(t.branch.address.city),n.Eb(5),n.Dc(t.branch.address.pinCode),n.Eb(5),n.Dc(t.branch.address.state),n.Eb(5),n.Dc(t.getCategories())}}const d=[{path:"",component:(()=>{class t{constructor(t,b,e,c){this.menuService=t,this.branchService=b,this.router=e,this.route=c}ngOnInit(){this.loading=!0,this.menuService.hideMenu(),this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe(t=>{this.branch=t,this.loading=!1},t=>{this.router.navigate(["../"],{relativeTo:this.route})}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}getCategories(){const t=[];return this.branch.categories.forEach(b=>{t.push(b.category)}),t.join(", ")}ngOnDestroy(){this.branchService.deleteBranchId()}}return t.\u0275fac=function(b){return new(b||t)(n.Qb(r.a),n.Qb(a.a),n.Qb(i.c),n.Qb(i.a))},t.\u0275cmp=n.Kb({type:t,selectors:[["ngx-view-institute"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"table-responsive"],[1,"table","table-bordered"]],template:function(t,b){1&t&&n.Ac(0,h,69,15,"nb-card",0),2&t&&n.mc("ngIf",!b.loading)},directives:[c.n,s.x,s.z,s.w],pipes:[c.v],styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>e.e(0).then(e.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let o=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(b){return new(b||t)},imports:[[i.g.forChild(d)],i.g]}),t})();var u=e("vTDv");e.d(b,"ViewInstituteModule",(function(){return V}));let V=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(b){return new(b||t)},imports:[[c.c,o,u.a,s.A,s.N,s.v,s.Ab]]}),t})()}}]);