(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"w+WK":function(t,b,e){"use strict";e.r(b);var n=e("ofXK"),a=e("Pj/w"),c=e("EQut"),i=e("fDUG"),r=e("ZatZ"),s=e("pjuo"),o=e("cS08"),l=e("fXoL"),d=e("tyNb"),W=e("aceb");function V(t,b){if(1&t&&(l.Wb(0,"div",2),l.Wb(1,"div",13),l.Wb(2,"h1"),l.Cc(3),l.Vb(),l.Wb(4,"h3"),l.Cc(5),l.Vb(),l.Vb(),l.Vb()),2&t){const t=l.gc();l.Eb(3),l.Dc(t.receipt.name),l.Eb(2),l.Dc(t.receipt.address)}}function h(t,b){if(1&t&&(l.Wb(0,"tr"),l.Wb(1,"td"),l.Cc(2),l.Vb(),l.Wb(3,"td"),l.Cc(4),l.Vb(),l.Wb(5,"td"),l.Cc(6),l.Vb(),l.Vb()),2&t){const t=b.$implicit,e=b.index;l.Eb(2),l.Dc(e+1),l.Eb(2),l.Dc(t.description),l.Eb(2),l.Dc(t.amount)}}function p(t,b){if(1&t&&(l.Wb(0,"div",14),l.Wb(1,"table",15),l.Wb(2,"thead"),l.Wb(3,"tr"),l.Wb(4,"th"),l.Cc(5,"#"),l.Vb(),l.Wb(6,"th"),l.Cc(7,"Earning"),l.Vb(),l.Wb(8,"th"),l.Cc(9,"Amount"),l.Vb(),l.Vb(),l.Vb(),l.Wb(10,"tbody"),l.Ac(11,h,7,3,"tr",16),l.Wb(12,"tr"),l.Wb(13,"th",17),l.Cc(14,"Total"),l.Vb(),l.Wb(15,"th"),l.Cc(16),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&t){const t=l.gc();l.Eb(11),l.mc("ngForOf",t.salary.earnings),l.Eb(5),l.Dc(t.totalEarning())}}function u(t,b){if(1&t&&(l.Wb(0,"tr"),l.Wb(1,"td"),l.Cc(2),l.Vb(),l.Wb(3,"td"),l.Cc(4),l.Vb(),l.Wb(5,"td"),l.Cc(6),l.Vb(),l.Vb()),2&t){const t=b.$implicit,e=b.index;l.Eb(2),l.Dc(e+1),l.Eb(2),l.Dc(t.description),l.Eb(2),l.Dc(t.amount)}}function g(t,b){if(1&t&&(l.Wb(0,"div",14),l.Wb(1,"table",18),l.Wb(2,"thead"),l.Wb(3,"tr"),l.Wb(4,"th"),l.Cc(5,"#"),l.Vb(),l.Wb(6,"th"),l.Cc(7,"Deduction"),l.Vb(),l.Wb(8,"th"),l.Cc(9,"Amount"),l.Vb(),l.Vb(),l.Vb(),l.Wb(10,"tbody"),l.Ac(11,u,7,3,"tr",16),l.Wb(12,"tr"),l.Wb(13,"th",17),l.Cc(14,"Total"),l.Vb(),l.Wb(15,"th"),l.Cc(16),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&t){const t=l.gc();l.Eb(11),l.mc("ngForOf",t.salary.deductions),l.Eb(5),l.Dc(t.totalDeduction())}}function y(t,b){1&t&&(l.Wb(0,"span",1),l.Cc(1,"No Earnings"),l.Vb())}function E(t,b){1&t&&(l.Wb(0,"span",1),l.Cc(1,"No Deductions"),l.Vb())}const m=[{path:"",component:(()=>{class t{constructor(t,b,e,n,a,c,i,r,s){this.branchService=t,this.salaryService=b,this.employeeService=e,this.branchEmployeeService=n,this.dateService=a,this.router=c,this.toastrService=i,this.receiptService=r,this.route=s}ngOnInit(){this.loading=!0;const t=this.branchService.getBranchId();t?(this.salaryService.getEmployeeSalaryData().subscribe(t=>{this.salary=t}),this.employeeService.getEmployeeData().subscribe(t=>{this.employee=t}),this.branchEmployeeService.getBranchEmployeeData().subscribe(t=>{this.branchEmployee=t}),this.salary&&this.employee&&this.branchEmployee||(this.showToastr("top-right","danger","Employee Salary Not Found"),this.back()),this.receiptService.getBillingDetails(t).subscribe(t=>{this.receipt=t,this.loading=!1},t=>{this.showToastr("top-right","danger",t),this.back()})):this.back()}totalEarning(){let t=0;return this.salary.earnings.forEach(b=>{t+=+b.amount}),parseFloat(t).toFixed(2)}totalDeduction(){let t=0;return this.salary.deductions.forEach(b=>{t+=+b.amount}),parseFloat(t).toFixed(2)}back(){this.router.navigate(["../"],{relativeTo:this.route})}print(){window.print()}showToastr(t,b,e){this.toastrService.show(b,e,{position:t,status:b})}ngOnDestroy(){}}return t.\u0275fac=function(b){return new(b||t)(l.Qb(c.a),l.Qb(o.a),l.Qb(s.a),l.Qb(a.a),l.Qb(r.a),l.Qb(d.c),l.Qb(W.xb),l.Qb(i.a),l.Qb(d.a))},t.\u0275cmp=l.Kb({type:t,selectors:[["ngx-view-salary-receipt"]],decls:95,vars:19,consts:[["class","row",4,"ngIf"],[1,"text-center"],[1,"row"],[1,"col-md-10","col-12","mx-auto"],[1,"col-12","text-right"],[1,"col-md-6","col-12"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"col-12"],[1,"text-right"],["type","button","nbButton","","status","success","size","small",1,"float-right",3,"click"],["icon","printer-outline"],["noEarnings",""],["noDeductions",""],[1,"col-12","text-center"],[1,"table-responsive"],[1,"table","table-am"],[4,"ngFor","ngForOf"],["colspan","2"],[1,"table","table-sm"]],template:function(t,b){if(1&t&&(l.Wb(0,"nb-card"),l.Wb(1,"nb-card-body"),l.Ac(2,V,6,2,"div",0),l.Wb(3,"h5",1),l.Cc(4,"Salary Slip"),l.Vb(),l.Rb(5,"br"),l.Wb(6,"div",2),l.Wb(7,"div",3),l.Wb(8,"div",2),l.Wb(9,"div",4),l.Wb(10,"span"),l.Wb(11,"strong"),l.Cc(12,"Date: "),l.Vb(),l.Cc(13),l.Vb(),l.Vb(),l.Wb(14,"div",5),l.Wb(15,"span"),l.Wb(16,"strong"),l.Cc(17,"Employee Name: "),l.Vb(),l.Cc(18),l.Vb(),l.Vb(),l.Wb(19,"div",5),l.Wb(20,"span"),l.Wb(21,"strong"),l.Cc(22,"Employee Role: "),l.Vb(),l.Cc(23),l.Vb(),l.Vb(),l.Wb(24,"div",5),l.Wb(25,"span"),l.Wb(26,"strong"),l.Cc(27,"Month: "),l.Vb(),l.Cc(28),l.Vb(),l.Vb(),l.Wb(29,"div",5),l.Wb(30,"span"),l.Wb(31,"strong"),l.Cc(32,"Year: "),l.Vb(),l.Cc(33),l.Vb(),l.Vb(),l.Wb(34,"div",5),l.Wb(35,"span"),l.Wb(36,"strong"),l.Cc(37,"Description: "),l.Vb(),l.Cc(38),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Rb(39,"br"),l.Wb(40,"div",2),l.Wb(41,"div",5),l.Wb(42,"h5"),l.Cc(43,"Earnings"),l.Vb(),l.Ac(44,p,17,2,"div",6),l.Vb(),l.Wb(45,"div",5),l.Wb(46,"h5"),l.Cc(47,"Deductions"),l.Vb(),l.Ac(48,g,17,2,"div",6),l.Vb(),l.Vb(),l.Wb(49,"div",2),l.Wb(50,"div",7),l.Wb(51,"div",8),l.Wb(52,"span"),l.Wb(53,"strong"),l.Cc(54,"Net Salary: "),l.Vb(),l.Cc(55),l.Vb(),l.Vb(),l.Wb(56,"span"),l.Wb(57,"strong"),l.Cc(58,"Net Salary in Words: "),l.Vb(),l.Cc(59),l.Vb(),l.Vb(),l.Vb(),l.Rb(60,"br"),l.Wb(61,"div",2),l.Wb(62,"div",5),l.Wb(63,"span"),l.Wb(64,"strong"),l.Cc(65,"Generated By: "),l.Vb(),l.Cc(66),l.Vb(),l.Vb(),l.Wb(67,"div",5),l.Wb(68,"span"),l.Wb(69,"strong"),l.Cc(70,"Payment Mode: "),l.Vb(),l.Cc(71),l.hc(72,"uppercase"),l.Vb(),l.Vb(),l.Wb(73,"div",5),l.Wb(74,"span"),l.Wb(75,"strong"),l.Cc(76,"Bank Details: "),l.Vb(),l.Cc(77),l.Vb(),l.Vb(),l.Wb(78,"div",5),l.Wb(79,"span"),l.Wb(80,"strong"),l.Cc(81,"Transaction Details: "),l.Vb(),l.Cc(82),l.Vb(),l.Vb(),l.Vb(),l.Rb(83,"br"),l.Wb(84,"h6",1),l.Wb(85,"small"),l.Cc(86,"*This is Computer Generated Receipt, Does not Required any Stamp or Signature"),l.Vb(),l.Vb(),l.Wb(87,"div",2),l.Wb(88,"div",7),l.Wb(89,"button",9),l.ec("click",(function(){return b.print()})),l.Rb(90,"nb-icon",10),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Ac(91,y,2,0,"ng-template",null,11,l.Bc),l.Ac(93,E,2,0,"ng-template",null,12,l.Bc)),2&t){const t=l.sc(92),e=l.sc(94);l.Eb(2),l.mc("ngIf",!b.loading),l.Eb(11),l.Ec(" ",b.dateService.formatDate(b.salary.date),""),l.Eb(5),l.Ec(" ",b.employee.name,""),l.Eb(5),l.Ec(" ",b.branchEmployee.role,""),l.Eb(5),l.Ec(" ",b.dateService.getMonthByMonthNumber(b.salary.month),""),l.Eb(5),l.Dc(b.salary.year),l.Eb(5),l.Dc(b.salary.description?b.salary.description:"--"),l.Eb(6),l.mc("ngIf",b.salary.earnings.length>0)("ngIfElse",t),l.Eb(4),l.mc("ngIf",b.salary.deductions.length>0)("ngIfElse",e),l.Eb(7),l.Ec(" ",b.salary.netSalary,"/-"),l.Eb(4),l.Ec(" ",b.salary.netSalaryInWords,""),l.Eb(7),l.Dc(b.salary.generatedBy),l.Eb(5),l.Dc(l.ic(72,17,b.salary.paymentMode)),l.Eb(6),l.Ec(" ",b.salary.bankDetails?b.salary.bankDetails:"--",""),l.Eb(5),l.Ec(" ",b.salary.transactionDetails?b.salary.transactionDetails:"--"," ")}},directives:[W.x,W.w,n.n,W.u,W.L,n.m],pipes:[n.v],styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>e.e(0).then(e.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let v=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(b){return new(b||t)},imports:[[d.g.forChild(m)],d.g]}),t})();e.d(b,"ViewSalaryReceiptModule",(function(){return C}));let C=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(b){return new(b||t)},imports:[[n.c,v,W.A,W.v,W.N]]}),t})()}}]);