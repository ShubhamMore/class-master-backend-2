(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{cHWv:function(t,e,n){"use strict";n.r(e);var b=n("3Pt+"),a=n("aceb"),i=n("ofXK"),r=n("cS08"),o=n("ZatZ"),c=n("Pj/w"),s=n("pjuo"),l=n("EQut"),d=n("Vw3K"),u=n("fXoL"),m=n("tyNb");const p=["stepper"];function h(t,e){if(1&t&&(u.Wb(0,"div",0),u.Wb(1,"div",9),u.Wb(2,"strong"),u.Cc(3,"Name:"),u.Vb(),u.Cc(4),u.Vb(),u.Wb(5,"div",9),u.Wb(6,"strong"),u.Cc(7,"IMS ID:"),u.Vb(),u.Cc(8),u.Vb(),u.Wb(9,"div",9),u.Wb(10,"strong"),u.Cc(11,"Email:"),u.Vb(),u.Cc(12),u.Vb(),u.Wb(13,"div",9),u.Wb(14,"strong"),u.Cc(15,"Phone:"),u.Vb(),u.Cc(16),u.Vb(),u.Wb(17,"div",9),u.Wb(18,"strong"),u.Cc(19,"Role:"),u.Vb(),u.Cc(20),u.hc(21,"uppercase"),u.Vb(),u.Wb(22,"div",9),u.Wb(23,"strong"),u.Cc(24,"Basic Salary:"),u.Vb(),u.Cc(25),u.Vb(),u.Vb()),2&t){const t=u.gc();u.Eb(4),u.Ec(" ",t.employee.name,""),u.Eb(4),u.Ec(" ",t.employee.imsMasterId," "),u.Eb(4),u.Ec(" ",t.employee.email,""),u.Eb(4),u.Ec(" ",t.employee.phone,""),u.Eb(4),u.Ec(" ",u.ic(21,6,t.branchEmployee.role)," "),u.Eb(5),u.Ec(" ",t.branchEmployee.basicSalary,"/- ")}}function W(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Date is required! "),u.Vb())}function g(t,e){if(1&t&&(u.Ub(0),u.Ac(1,W,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.salaryForm.get("date").errors?null:t.salaryForm.get("date").errors.required)}}function V(t,e){if(1&t&&(u.Wb(0,"nb-option",69),u.Cc(1),u.Vb()),2&t){const t=e.$implicit;u.mc("value",t.monthNo),u.Eb(1),u.Dc(t.month)}}function y(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Please Select Month "),u.Vb())}function f(t,e){if(1&t&&(u.Ub(0),u.Ac(1,y,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.salaryForm.get("month").errors?null:t.salaryForm.get("month").errors.required)}}function v(t,e){if(1&t&&(u.Wb(0,"nb-option",69),u.Cc(1),u.Vb()),2&t){const t=e.$implicit;u.mc("value",t),u.Eb(1),u.Dc(t)}}function E(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Please Select Year "),u.Vb())}function C(t,e){if(1&t&&(u.Ub(0),u.Ac(1,E,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.salaryForm.get("year").errors?null:t.salaryForm.get("year").errors.required)}}function D(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Basic Amount is required! "),u.Vb())}function F(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Basic Amount should be greater than 0! "),u.Vb())}function S(t,e){if(1&t&&(u.Ub(0),u.Ac(1,D,2,0,"p",67),u.Ac(2,F,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.salaryForm.get("basicAmount").errors?null:t.salaryForm.get("basicAmount").errors.required),u.Eb(1),u.mc("ngIf",null==t.salaryForm.get("basicAmount").errors?null:t.salaryForm.get("basicAmount").errors.min)}}function A(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Amount is required! "),u.Vb())}function I(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Amount should be greater than 0! "),u.Vb())}function w(t,e){if(1&t&&(u.Ub(0),u.Ac(1,A,2,0,"p",67),u.Ac(2,I,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.ernDeductForm.get("amount").errors?null:t.ernDeductForm.get("amount").errors.required),u.Eb(1),u.mc("ngIf",null==t.ernDeductForm.get("amount").errors?null:t.ernDeductForm.get("amount").errors.min)}}function B(t,e){if(1&t){const t=u.Xb();u.Wb(0,"button",74),u.ec("click",(function(){u.uc(t);const e=u.gc().index;return u.gc(2).deleteErnDeduct(!0,e)})),u.Rb(1,"nb-icon",75),u.Vb()}}function k(t,e){if(1&t&&(u.Wb(0,"tr"),u.Wb(1,"td"),u.Cc(2),u.Vb(),u.Wb(3,"td"),u.Cc(4),u.Vb(),u.Wb(5,"td"),u.Cc(6),u.Vb(),u.Wb(7,"td"),u.Ac(8,B,2,0,"button",73),u.Vb(),u.Vb()),2&t){const t=e.$implicit,n=e.index;u.Eb(2),u.Dc(n+1),u.Eb(2),u.Dc(t.description),u.Eb(2),u.Dc(t.amount),u.Eb(2),u.mc("ngIf",0!==n)}}function N(t,e){if(1&t&&(u.Wb(0,"div",62),u.Wb(1,"table",70),u.Wb(2,"thead"),u.Wb(3,"tr"),u.Wb(4,"th"),u.Cc(5,"#"),u.Vb(),u.Wb(6,"th"),u.Cc(7,"Earning"),u.Vb(),u.Wb(8,"th"),u.Cc(9,"Amount"),u.Vb(),u.Rb(10,"th"),u.Vb(),u.Vb(),u.Wb(11,"tbody"),u.Ac(12,k,9,4,"tr",71),u.Wb(13,"tr"),u.Wb(14,"th",72),u.Cc(15,"Total"),u.Vb(),u.Wb(16,"th",72),u.Cc(17),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t){const t=u.gc();u.Eb(12),u.mc("ngForOf",t.earnings),u.Eb(5),u.Dc(t.totalEarning())}}function x(t,e){if(1&t){const t=u.Xb();u.Wb(0,"tr"),u.Wb(1,"td"),u.Cc(2),u.Vb(),u.Wb(3,"td"),u.Cc(4),u.Vb(),u.Wb(5,"td"),u.Cc(6),u.Vb(),u.Wb(7,"td"),u.Wb(8,"button",77),u.ec("click",(function(){u.uc(t);const n=e.index;return u.gc(2).deleteErnDeduct(!1,n)})),u.Rb(9,"nb-icon",75),u.Vb(),u.Vb(),u.Vb()}if(2&t){const t=e.$implicit,n=e.index;u.Eb(2),u.Dc(n+1),u.Eb(2),u.Dc(t.description),u.Eb(2),u.Dc(t.amount)}}function T(t,e){if(1&t&&(u.Wb(0,"div",62),u.Wb(1,"table",76),u.Wb(2,"thead"),u.Wb(3,"tr"),u.Wb(4,"th"),u.Cc(5,"#"),u.Vb(),u.Wb(6,"th"),u.Cc(7,"Deduction"),u.Vb(),u.Wb(8,"th"),u.Cc(9,"Amount"),u.Vb(),u.Rb(10,"th"),u.Vb(),u.Vb(),u.Wb(11,"tbody"),u.Ac(12,x,10,3,"tr",71),u.Wb(13,"tr"),u.Wb(14,"th",72),u.Cc(15,"Total"),u.Vb(),u.Wb(16,"th",72),u.Cc(17),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t){const t=u.gc();u.Eb(12),u.mc("ngForOf",t.deductions),u.Eb(5),u.Dc(t.totalDeduction())}}function R(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Generated By is required! "),u.Vb())}function M(t,e){if(1&t&&(u.Ub(0),u.Ac(1,R,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.paymentDetailsForm.get("generatedBy").errors?null:t.paymentDetailsForm.get("generatedBy").errors.required)}}function q(t,e){1&t&&(u.Wb(0,"p",68),u.Cc(1," Please Select Payment Mode "),u.Vb())}function O(t,e){if(1&t&&(u.Ub(0),u.Ac(1,q,2,0,"p",67),u.Tb()),2&t){const t=u.gc();u.Eb(1),u.mc("ngIf",null==t.paymentDetailsForm.get("paymentMode").errors?null:t.paymentDetailsForm.get("paymentMode").errors.required)}}function P(t,e){if(1&t&&(u.Wb(0,"tr"),u.Wb(1,"td"),u.Cc(2),u.Vb(),u.Wb(3,"td"),u.Cc(4),u.Vb(),u.Wb(5,"td"),u.Cc(6),u.Vb(),u.Vb()),2&t){const t=e.$implicit,n=e.index;u.Eb(2),u.Dc(n+1),u.Eb(2),u.Dc(t.description),u.Eb(2),u.Dc(t.amount)}}function z(t,e){if(1&t&&(u.Wb(0,"div",62),u.Wb(1,"table",70),u.Wb(2,"thead"),u.Wb(3,"tr"),u.Wb(4,"th"),u.Cc(5,"#"),u.Vb(),u.Wb(6,"th"),u.Cc(7,"Earning"),u.Vb(),u.Wb(8,"th"),u.Cc(9,"Amount"),u.Vb(),u.Vb(),u.Vb(),u.Wb(10,"tbody"),u.Ac(11,P,7,3,"tr",71),u.Wb(12,"tr"),u.Wb(13,"th",72),u.Cc(14,"Total"),u.Vb(),u.Wb(15,"th"),u.Cc(16),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t){const t=u.gc();u.Eb(11),u.mc("ngForOf",t.earnings),u.Eb(5),u.Dc(t.totalEarning())}}function j(t,e){if(1&t&&(u.Wb(0,"tr"),u.Wb(1,"td"),u.Cc(2),u.Vb(),u.Wb(3,"td"),u.Cc(4),u.Vb(),u.Wb(5,"td"),u.Cc(6),u.Vb(),u.Vb()),2&t){const t=e.$implicit,n=e.index;u.Eb(2),u.Dc(n+1),u.Eb(2),u.Dc(t.description),u.Eb(2),u.Dc(t.amount)}}function Q(t,e){if(1&t&&(u.Wb(0,"div",62),u.Wb(1,"table",76),u.Wb(2,"thead"),u.Wb(3,"tr"),u.Wb(4,"th"),u.Cc(5,"#"),u.Vb(),u.Wb(6,"th"),u.Cc(7,"Deduction"),u.Vb(),u.Wb(8,"th"),u.Cc(9,"Amount"),u.Vb(),u.Vb(),u.Vb(),u.Wb(10,"tbody"),u.Ac(11,j,7,3,"tr",71),u.Wb(12,"tr"),u.Wb(13,"th",72),u.Cc(14,"Total"),u.Vb(),u.Wb(15,"th"),u.Cc(16),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t){const t=u.gc();u.Eb(11),u.mc("ngForOf",t.deductions),u.Eb(5),u.Dc(t.totalDeduction())}}function G(t,e){1&t&&(u.Wb(0,"p",78),u.Cc(1,"No Earnings"),u.Vb())}function U(t,e){1&t&&(u.Wb(0,"p",78),u.Cc(1,"No Deductions"),u.Vb())}const $=[{path:"",component:(()=>{class t{constructor(t,e,n,b,a,i,r,o){this.branchService=t,this.employeeService=e,this.branchEmployeeService=n,this.employeeSalaryService=b,this.dateService=a,this.toastrService=i,this.router=r,this.route=o,o.queryParams.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.employeeService.getEmployeeData().subscribe(t=>{this.employee=t}),this.branchEmployeeService.getBranchEmployeeData().subscribe(t=>{this.branchEmployee=t}),this.ernDeduction=!0,this.earnings=[{description:"Basic Amount",amount:parseFloat(this.branchEmployee.basicSalary).toFixed(2)}],this.deductions=[],this.years=this.dateService.getYears(),this.months=this.dateService.getMonths(),this.salaryForm=new b.f({date:new b.d(this.dateService.getDateString(),{validators:[b.u.required]}),month:new b.d(this.dateService.getCurrentMonth(),{validators:[b.u.required]}),year:new b.d(this.dateService.getCurrentYear(),{validators:[b.u.required]}),basicAmount:new b.d(this.branchEmployee.basicSalary,{validators:[b.u.required]}),description:new b.d(null,{validators:[]})}),this.salaryForm.get("basicAmount").disable(),this.ernDeductForm=new b.f({description:new b.d(null,{validators:[b.u.required]}),amount:new b.d(0,{validators:[b.u.required,b.u.min(0)]})}),this.paymentDetailsForm=new b.f({generatedBy:new b.d(null,{validators:[b.u.required]}),paymentMode:new b.d("",{validators:[b.u.required]}),bankDetails:new b.d(null,{validators:[]}),transactionDetails:new b.d(null,{validators:[]})}),this.loading=!1):this.router.navigate(["../"],{relativeTo:this.route})}ernDeductChange(t){this.ernDeduction="0"===t}addErnDeduct(){if(this.ernDeductForm.invalid)return void this.showToastr("top-right","danger",`Enter Valid ${this.ernDeduction?"Earning":"Deduction"} Details`);const t={description:this.ernDeductForm.value.description,amount:parseFloat(this.ernDeductForm.value.amount).toFixed(2)};this.ernDeduction?this.earnings.push(t):this.deductions.push(t),this.ernDeductForm.reset({amount:"0"})}deleteErnDeduct(t,e){if(t){if(0===e)return;this.earnings.splice(e,1)}else this.deductions.splice(e,1)}totalEarning(){let t=0;return this.earnings.forEach(e=>{t+=+e.amount}),parseFloat(t).toFixed(2)}totalDeduction(){let t=0;return this.deductions.forEach(e=>{t+=+e.amount}),parseFloat(t).toFixed(2)}getNetSalary(){return(+this.totalEarning()-+this.totalDeduction()).toFixed(2).toString()}getNetSalaryInWords(){const t=+this.getNetSalary();return Object(d.a)(t)+" Only/-"}previousStep(){1===this.stepper.selectedIndex&&this.salaryForm.get("basicAmount").disable(),this.stepper.previous()}salaryFormSubmit(){this.salaryForm.markAllAsTouched(),this.salaryForm.invalid?this.showToastr("top-right","danger","Employee Salary Details are Required"):(this.stepper.next(),this.salaryForm.get("basicAmount").enable())}ernDeductFormSubmit(){this.stepper.next()}paymentDetailsFormSubmit(){this.paymentDetailsForm.markAllAsTouched(),this.paymentDetailsForm.invalid?this.showToastr("top-right","danger","Enter Valid Payment Details"):this.stepper.next()}saveEmployee(){if(this.salaryForm.markAllAsTouched(),this.salaryForm.invalid)return void this.showToastr("top-right","danger","Employee Salary Details are Required");this.loading=!0;const t=Object.assign(Object.assign(Object.assign(Object.assign({branch:this.branchId,employee:this.employee.imsMasterId},this.salaryForm.value),{earnings:this.earnings,deductions:this.deductions}),this.paymentDetailsForm.value),{netSalary:this.getNetSalary(),netSalaryInWords:this.getNetSalaryInWords()});this.employeeSalaryService.addEmployeeSalary(t).subscribe(t=>{this.showToastr("top-right","success","Employee Salary Added Successfully"),this.back(),this.loading=!1},t=>{this.showToastr("top-right","danger",t),this.loading=!1})}showToastr(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}back(){const t=this.employeeService.getEmployeeType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:t}})}ngOnDestroy(){this.employeeService.deleteEmployeeId(),this.branchEmployeeService.deleteBranchEmployeeId()}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(l.a),u.Qb(s.a),u.Qb(c.a),u.Qb(r.a),u.Qb(o.a),u.Qb(a.xb),u.Qb(m.c),u.Qb(m.a))},t.\u0275cmp=u.Kb({type:t,selectors:[["ngx-add-salary"]],viewQuery:function(t,e){var n;1&t&&u.Hc(p,!0),2&t&&u.rc(n=u.fc())&&(e.stepper=n.first)},decls:237,vars:47,consts:[[1,"row"],[1,"col-12"],["type","button","nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,""],["class","row",4,"ngIf"],[3,"linear","disableStepNavigation"],["stepper",""],["label","Salary Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"col-md-4","col-sm-6","col-12"],[1,"form-control-group"],["for","input-date",1,"label"],["type","date","nbInput","","id","input-date","name","date","formControlName","date","placeholder","date","fullWidth","",3,"status"],[4,"ngIf"],["for","input-month",1,"label"],["fullWidth","","formControlName","month"],[3,"value",4,"ngFor","ngForOf"],["for","input-year",1,"label"],["fullWidth","","formControlName","year"],["for","input-basic-amount",1,"label"],["type","number","nbInput","","id","input-basic-amount","name","basicAmount","formControlName","basicAmount","placeholder","basicAmount","min","0","fullWidth","",3,"status"],[1,"col-md-8","col-sm-6","col-12"],["for","input-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description","fullWidth","","status","basic"],[1,"col-md-12","text-right"],["nbButton","","size","small","type","submit"],["icon","arrow-ios-forward-outline"],["label","Earnings/Deductions"],["fullWidth","","selected","0",3,"selectedChange"],["value","0"],["value","1"],["type","string","nbInput","","id","input-description","name","description","formControlName","description","fullWidth","","status","basic",3,"placeholder"],["for","input-amount",1,"label"],["type","number","nbInput","","id","input-amount","name","amount","formControlName","amount","placeholder","Amount","min","0","fullWidth","",3,"status"],[1,"col-md-8","col-sm-6","col-12","text-right"],["type","submit","nbButton","","size","medium",1,"mt-4",3,"status"],[1,"col-md-6","col-12"],["status","basic"],[1,"ern-deduct-body"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"col-md-6"],["nbButton","","size","small","type","button",3,"click"],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["label","Payment Details",3,"stepControl"],["for","input-generated-by",1,"label"],["type","text","nbInput","","id","input-generated-by","name","generatedBy","formControlName","generatedBy","placeholder","Generated By","fullWidth","",3,"status"],["for","input-payment-mode",1,"label"],["id","input-payment-mode","name","paymentMode","formControlName","paymentMode","fullWidth","",3,"status"],["value",""],["value","cash"],["value","card"],["value","wallet"],["value","other"],["for","input-bank-details",1,"label"],["type","text","nbInput","","id","input-bank-details","name","bankDetails","formControlName","bankDetails","placeholder","Bank Details","fullWidth","","status","basic"],["for","input-transaction-details",1,"label"],["type","text","nbInput","","id","input-transaction-details","name","transactionDetails","formControlName","transactionDetails","placeholder","Transaction Details","fullWidth","","status","basic"],[1,"col-md-6","text-left"],["type","button","nbButton","","size","medium",1,"",3,"click"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],["nbButton","","size","medium",3,"click"],["noEarnings",""],["noDeductions",""],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[3,"value"],[1,"table","table-am"],[4,"ngFor","ngForOf"],["colspan","2"],["nbButton","","size","tiny","outline","","status","danger","shape","round","nbTooltip","Remove Earning",3,"click",4,"ngIf"],["nbButton","","size","tiny","outline","","status","danger","shape","round","nbTooltip","Remove Earning",3,"click"],["icon","close-outline"],[1,"table","table-sm"],["nbButton","","size","tiny","outline","","status","danger","shape","round","nbTooltip","Remove Deduction",3,"click"],[1,"text-center"]],template:function(t,e){if(1&t&&(u.Wb(0,"nb-card"),u.Wb(1,"nb-card-header"),u.Wb(2,"div",0),u.Wb(3,"div",1),u.Wb(4,"button",2),u.ec("click",(function(){return e.back()})),u.Cc(5," Back "),u.Vb(),u.Wb(6,"h3",3),u.Cc(7," Generate Salary "),u.Vb(),u.Vb(),u.Vb(),u.Ac(8,h,26,8,"div",4),u.Vb(),u.Wb(9,"nb-card-body"),u.Wb(10,"nb-stepper",5,6),u.Wb(12,"nb-step",7),u.Wb(13,"form",8),u.ec("submit",(function(){return e.salaryFormSubmit()})),u.Wb(14,"div",0),u.Wb(15,"div",9),u.Wb(16,"div",10),u.Wb(17,"label",11),u.Cc(18,"Date:"),u.Vb(),u.Rb(19,"input",12),u.Ac(20,g,2,1,"ng-container",13),u.Vb(),u.Vb(),u.Wb(21,"div",9),u.Wb(22,"div",10),u.Wb(23,"label",14),u.Cc(24,"Select Month:"),u.Vb(),u.Wb(25,"nb-select",15),u.Ac(26,V,2,2,"nb-option",16),u.Vb(),u.Ac(27,f,2,1,"ng-container",13),u.Vb(),u.Vb(),u.Wb(28,"div",9),u.Wb(29,"div",10),u.Wb(30,"label",17),u.Cc(31,"Select Year:"),u.Vb(),u.Wb(32,"nb-select",18),u.Ac(33,v,2,2,"nb-option",16),u.Vb(),u.Ac(34,C,2,1,"ng-container",13),u.Vb(),u.Vb(),u.Wb(35,"div",9),u.Wb(36,"div",10),u.Wb(37,"label",19),u.Cc(38,"Basic Amount:"),u.Vb(),u.Rb(39,"input",20),u.Ac(40,S,3,2,"ng-container",13),u.Vb(),u.Vb(),u.Wb(41,"div",21),u.Wb(42,"div",10),u.Wb(43,"label",22),u.Cc(44,"Description:"),u.Vb(),u.Rb(45,"input",23),u.Vb(),u.Vb(),u.Vb(),u.Rb(46,"hr"),u.Wb(47,"div",0),u.Wb(48,"div",24),u.Wb(49,"button",25),u.Wb(50,"span"),u.Cc(51,"Next"),u.Vb(),u.Rb(52,"nb-icon",26),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(53,"nb-step",27),u.Wb(54,"form",8),u.ec("submit",(function(){return e.addErnDeduct()})),u.Wb(55,"div",0),u.Wb(56,"div",9),u.Wb(57,"div",10),u.Wb(58,"label",17),u.Cc(59,"Select Definition:"),u.Vb(),u.Wb(60,"nb-select",28),u.ec("selectedChange",(function(t){return e.ernDeductChange(t)})),u.Wb(61,"nb-option",29),u.Cc(62,"Earning"),u.Vb(),u.Wb(63,"nb-option",30),u.Cc(64,"Deduction"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(65,"div",21),u.Wb(66,"div",10),u.Wb(67,"label",22),u.Cc(68),u.Vb(),u.Rb(69,"input",31),u.Vb(),u.Vb(),u.Wb(70,"div",9),u.Wb(71,"div",10),u.Wb(72,"label",32),u.Cc(73,"Amount:"),u.Vb(),u.Rb(74,"input",33),u.Ac(75,w,3,2,"ng-container",13),u.Vb(),u.Vb(),u.Wb(76,"div",34),u.Wb(77,"button",35),u.Cc(78),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Rb(79,"br"),u.Wb(80,"div",0),u.Wb(81,"div",36),u.Wb(82,"nb-card",37),u.Wb(83,"nb-card-header"),u.Wb(84,"h5"),u.Cc(85,"Earnings"),u.Vb(),u.Vb(),u.Wb(86,"nb-card-body",38),u.Ac(87,N,18,2,"div",39),u.Vb(),u.Vb(),u.Vb(),u.Wb(88,"div",36),u.Wb(89,"nb-card",37),u.Wb(90,"nb-card-header"),u.Wb(91,"h5"),u.Cc(92,"Deductions"),u.Vb(),u.Vb(),u.Wb(93,"nb-card-body",38),u.Ac(94,T,18,2,"div",39),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Rb(95,"hr"),u.Wb(96,"div",0),u.Wb(97,"div",40),u.Wb(98,"button",41),u.ec("click",(function(){return e.previousStep()})),u.Rb(99,"nb-icon",42),u.Wb(100,"span"),u.Cc(101,"Previous"),u.Vb(),u.Vb(),u.Vb(),u.Wb(102,"div",43),u.Wb(103,"button",41),u.ec("click",(function(){return e.ernDeductFormSubmit()})),u.Wb(104,"span"),u.Cc(105,"Next"),u.Vb(),u.Rb(106,"nb-icon",26),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(107,"nb-step",44),u.Wb(108,"form",8),u.ec("submit",(function(){return e.paymentDetailsFormSubmit()})),u.Wb(109,"div",0),u.Wb(110,"div",36),u.Wb(111,"div",10),u.Wb(112,"label",45),u.Cc(113,"Generated By:"),u.Vb(),u.Rb(114,"input",46),u.Ac(115,M,2,1,"ng-container",13),u.Vb(),u.Vb(),u.Wb(116,"div",36),u.Wb(117,"div",10),u.Wb(118,"label",47),u.Cc(119,"Payment Mode:"),u.Vb(),u.Wb(120,"nb-select",48),u.Wb(121,"nb-option",49),u.Cc(122,"Select Payment Mode"),u.Vb(),u.Wb(123,"nb-option",50),u.Cc(124,"Cash"),u.Vb(),u.Wb(125,"nb-option",51),u.Cc(126,"Card"),u.Vb(),u.Wb(127,"nb-option",52),u.Cc(128,"Waller"),u.Vb(),u.Wb(129,"nb-option",53),u.Cc(130,"Other"),u.Vb(),u.Vb(),u.Ac(131,O,2,1,"ng-container",13),u.Vb(),u.Vb(),u.Wb(132,"div",36),u.Wb(133,"div",10),u.Wb(134,"label",54),u.Cc(135,"Bank Details:"),u.Vb(),u.Rb(136,"input",55),u.Vb(),u.Vb(),u.Wb(137,"div",36),u.Wb(138,"div",10),u.Wb(139,"label",56),u.Cc(140,"Transaction Details:"),u.Vb(),u.Rb(141,"input",57),u.Vb(),u.Vb(),u.Vb(),u.Rb(142,"hr"),u.Wb(143,"div",0),u.Wb(144,"div",58),u.Wb(145,"button",59),u.ec("click",(function(){return e.previousStep()})),u.Rb(146,"nb-icon",42),u.Wb(147,"span"),u.Cc(148,"prev"),u.Vb(),u.Vb(),u.Vb(),u.Wb(149,"div",43),u.Wb(150,"button",25),u.Wb(151,"span"),u.Cc(152,"Next"),u.Vb(),u.Rb(153,"nb-icon",26),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(154,"nb-step",60),u.Wb(155,"div",61),u.Wb(156,"div",62),u.Wb(157,"table",63),u.Wb(158,"tr"),u.Wb(159,"th"),u.Cc(160,"Date"),u.Vb(),u.Wb(161,"td"),u.Cc(162),u.Vb(),u.Vb(),u.Wb(163,"tr"),u.Wb(164,"th"),u.Cc(165,"Month/Year"),u.Vb(),u.Wb(166,"td"),u.Cc(167),u.Wb(168,"span"),u.Cc(169,"\xa0"),u.Vb(),u.Cc(170),u.Vb(),u.Vb(),u.Wb(171,"tr"),u.Wb(172,"th"),u.Cc(173,"Basic Salary"),u.Vb(),u.Wb(174,"td"),u.Cc(175),u.Vb(),u.Vb(),u.Wb(176,"tr"),u.Wb(177,"th"),u.Cc(178,"Description"),u.Vb(),u.Wb(179,"td"),u.Cc(180),u.Vb(),u.Vb(),u.Wb(181,"tr"),u.Wb(182,"th"),u.Cc(183,"Earnings"),u.Vb(),u.Wb(184,"td"),u.Ac(185,z,17,2,"div",39),u.Vb(),u.Vb(),u.Wb(186,"tr"),u.Wb(187,"th"),u.Cc(188,"Deductions"),u.Vb(),u.Wb(189,"td"),u.Ac(190,Q,17,2,"div",39),u.Vb(),u.Vb(),u.Wb(191,"tr"),u.Wb(192,"th"),u.Cc(193,"Generated By"),u.Vb(),u.Wb(194,"td"),u.Cc(195),u.Vb(),u.Vb(),u.Wb(196,"tr"),u.Wb(197,"th"),u.Cc(198,"Payment Mode"),u.Vb(),u.Wb(199,"td"),u.Cc(200),u.hc(201,"uppercase"),u.Vb(),u.Vb(),u.Wb(202,"tr"),u.Wb(203,"th"),u.Cc(204,"Bank Details"),u.Vb(),u.Wb(205,"td"),u.Cc(206),u.Vb(),u.Vb(),u.Wb(207,"tr"),u.Wb(208,"th"),u.Cc(209,"Transaction Details"),u.Vb(),u.Wb(210,"td"),u.Cc(211),u.Vb(),u.Vb(),u.Wb(212,"tr"),u.Wb(213,"th"),u.Cc(214,"Net Salary"),u.Vb(),u.Wb(215,"td"),u.Cc(216),u.Vb(),u.Vb(),u.Wb(217,"tr"),u.Wb(218,"th"),u.Cc(219,"Net Salary in Words"),u.Vb(),u.Wb(220,"td"),u.Cc(221),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Rb(222,"hr"),u.Wb(223,"div",0),u.Wb(224,"div",58),u.Wb(225,"button",59),u.ec("click",(function(){return e.previousStep()})),u.Rb(226,"nb-icon",42),u.Wb(227,"span"),u.Cc(228,"prev"),u.Vb(),u.Vb(),u.Vb(),u.Wb(229,"div",43),u.Wb(230,"button",64),u.ec("click",(function(){return e.saveEmployee()})),u.Wb(231,"span"),u.Cc(232,"Submit"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Ac(233,G,2,0,"ng-template",null,65,u.Bc),u.Ac(235,U,2,0,"ng-template",null,66,u.Bc)),2&t){const t=u.sc(234),n=u.sc(236);u.Eb(8),u.mc("ngIf",!e.loading),u.Eb(2),u.mc("linear",!0)("disableStepNavigation",!0),u.Eb(2),u.mc("stepControl",e.salaryForm),u.Eb(1),u.mc("formGroup",e.salaryForm),u.Eb(6),u.mc("status",e.salaryForm.get("date").touched?e.salaryForm.get("date").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.salaryForm.get("date").invalid&&e.salaryForm.get("date").touched),u.Eb(6),u.mc("ngForOf",e.months),u.Eb(1),u.mc("ngIf",e.salaryForm.get("month").invalid&&e.salaryForm.get("month").touched),u.Eb(6),u.mc("ngForOf",e.years),u.Eb(1),u.mc("ngIf",e.salaryForm.get("year").invalid&&e.salaryForm.get("year").touched),u.Eb(5),u.mc("status",e.salaryForm.get("basicAmount").touched?e.salaryForm.get("basicAmount").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.salaryForm.get("basicAmount").invalid&&e.salaryForm.get("basicAmount").touched),u.Eb(14),u.mc("formGroup",e.ernDeductForm),u.Eb(14),u.Ec("",e.ernDeduction?"Earning":"Deduction"," Note:"),u.Eb(1),u.mc("placeholder",e.ernDeduction?"Earning":"Deduction"),u.Eb(5),u.mc("status",e.ernDeductForm.get("amount").touched?e.ernDeductForm.get("amount").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.ernDeductForm.get("amount").invalid&&e.ernDeductForm.get("amount").touched),u.Eb(2),u.mc("status",e.ernDeduction?"success":"danger"),u.Eb(1),u.Ec(" Add ",e.ernDeduction?"Earning":"Deduction"," "),u.Eb(9),u.mc("ngIf",e.earnings.length>0)("ngIfElse",t),u.Eb(7),u.mc("ngIf",e.deductions.length>0)("ngIfElse",n),u.Eb(13),u.mc("stepControl",e.paymentDetailsForm),u.Eb(1),u.mc("formGroup",e.paymentDetailsForm),u.Eb(6),u.mc("status",e.paymentDetailsForm.get("generatedBy").touched?e.paymentDetailsForm.get("generatedBy").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.paymentDetailsForm.get("generatedBy").invalid&&e.paymentDetailsForm.get("generatedBy").touched),u.Eb(5),u.mc("status",e.paymentDetailsForm.get("paymentMode").touched?e.paymentDetailsForm.get("paymentMode").invalid?"danger":"success":"basic"),u.Eb(11),u.mc("ngIf",e.paymentDetailsForm.get("paymentMode").invalid&&e.paymentDetailsForm.get("paymentMode").touched),u.Eb(31),u.Dc(e.salaryForm.value.date),u.Eb(5),u.Ec(" ",e.dateService.getMonthByMonthNumber(e.salaryForm.value.month)," "),u.Eb(3),u.Ec(" ",e.salaryForm.value.year," "),u.Eb(5),u.Dc(e.branchEmployee.basicSalary),u.Eb(5),u.Dc(e.salaryForm.value.description?e.salaryForm.value.description:"--"),u.Eb(5),u.mc("ngIf",e.earnings.length>0)("ngIfElse",t),u.Eb(5),u.mc("ngIf",e.deductions.length>0)("ngIfElse",n),u.Eb(5),u.Dc(e.paymentDetailsForm.value.generatedBy),u.Eb(5),u.Dc(u.ic(201,45,e.paymentDetailsForm.value.paymentMode)),u.Eb(6),u.Ec(" ",e.paymentDetailsForm.value.bankDetails?e.paymentDetailsForm.value.bankDetails:"--"," "),u.Eb(5),u.Ec(" ",e.paymentDetailsForm.value.transactionDetails?e.paymentDetailsForm.value.transactionDetails:"--"," "),u.Eb(5),u.Dc(e.getNetSalary()),u.Eb(5),u.Dc(e.getNetSalaryInWords())}},directives:[a.x,a.z,a.u,i.n,a.w,a.pb,a.ob,b.v,b.n,b.g,a.O,b.a,b.m,b.e,a.jb,i.m,b.q,a.L,a.eb,a.zb],pipes:[i.v],styles:[".ern-deduct-body[_ngcontent-%COMP%]{height:20rem;max-height:20rem;overflow-y:auto}"]}),t})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let Y=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},imports:[[m.g.forChild($)],m.g]}),t})();n.d(e,"AddSalaryModule",(function(){return K}));let K=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},imports:[[i.c,Y,a.A,a.N,a.kb,a.P,a.Ab,a.v,a.qb,a.yb,a.K,b.s]]}),t})()}}]);