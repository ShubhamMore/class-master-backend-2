(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{QKEp:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("fCOA"),a=n("lJxs"),i=n("JIr8"),c=n("z6cu"),d=n("fXoL");let o=(()=>{class e{constructor(e){this.httpService=e}setMonth(e){this.searchMonth=e}getMonth(){return this.searchMonth}setYear(e){this.searchYear=e}getYear(){return this.searchYear}getBudgetForBranch(e,t,n){return this.httpService.httpPost({api:"getBudgetForBranch",data:{branch:e,month:t,year:n}}).pipe(Object(a.a)(e=>e),Object(i.a)(e=>Object(c.a)(e)))}getBudgetForBranchDashboard(e,t){return this.httpService.httpPost({api:"getBudgetForBranchDashboard",data:{branch:e,year:t}}).pipe(Object(a.a)(e=>e),Object(i.a)(e=>Object(c.a)(e)))}getBudgetSummery(e,t,n){return this.httpService.httpPost({api:"getBudgetSummery",data:{branch:e,month:t,year:n}}).pipe(Object(a.a)(e=>e),Object(i.a)(e=>Object(c.a)(e)))}saveBudget(e){return this.httpService.httpPost({api:"saveBudget",data:e}).pipe(Object(a.a)(e=>e),Object(i.a)(e=>Object(c.a)(e)))}deleteBudget(e){return this.httpService.httpPost({api:"deleteBudget",data:{id:e}}).pipe(Object(a.a)(e=>e),Object(i.a)(e=>Object(c.a)(e)))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](r.a))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},jFNC:function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("ofXK"),i=n("ZatZ"),c=n("EQut"),d=n("QKEp"),o=n("fXoL"),l=n("tyNb");function m(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td"),o["\u0275\u0275text"](10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index,r=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](n+1),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.date)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.title),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ","income"===e.type?e.amount:""," "),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate1"](" ","expense"===e.type?e.amount:""," ")}}function s(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",3),o["\u0275\u0275elementStart"](1,"table",4),o["\u0275\u0275elementStart"](2,"thead",5),o["\u0275\u0275elementStart"](3,"tr"),o["\u0275\u0275elementStart"](4,"th"),o["\u0275\u0275text"](5,"#"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"th"),o["\u0275\u0275text"](7,"Date"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"th"),o["\u0275\u0275text"](9,"Title"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"th"),o["\u0275\u0275text"](11,"Income"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"th"),o["\u0275\u0275text"](13,"Expense"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"tbody"),o["\u0275\u0275template"](15,m,11,5,"tr",6),o["\u0275\u0275elementStart"](16,"tr"),o["\u0275\u0275elementStart"](17,"td",7),o["\u0275\u0275elementStart"](18,"strong"),o["\u0275\u0275text"](19,"Total"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"td"),o["\u0275\u0275elementStart"](21,"strong"),o["\u0275\u0275text"](22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"td"),o["\u0275\u0275elementStart"](24,"strong"),o["\u0275\u0275text"](25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](15),o["\u0275\u0275property"]("ngForOf",e.budgetSummery),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](e.getTotalIncome()),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](e.getTotalExpense())}}function u(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",8),o["\u0275\u0275text"](1,"No Budget Summery Available"),o["\u0275\u0275elementEnd"]())}const h=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.budgetService=e,this.branchService=t,this.dateService=n,this.router=r,this.route=a}ngOnInit(){this.loading=!0,this.budgetSummery=[],this.branchId=this.branchService.getBranchId(),this.branchId?(this.month=this.budgetService.getMonth(),this.year=this.budgetService.getYear(),this.searchBudget()):this.back()}searchBudget(){this.budgetService.getBudgetSummery(this.branchId,this.month,this.year).subscribe(e=>{this.budgetSummery=e,this.loading=!1},e=>{this.loading=!1})}getTotalIncome(){let e=0;return this.budgetSummery.forEach(t=>{"income"===t.type&&(e+=t.amount)}),e}getTotalExpense(){let e=0;return this.budgetSummery.forEach(t=>{"expense"===t.type&&(e+=t.amount)}),e}getTotalBalance(){return this.getTotalIncome()-this.getTotalExpense()}getDuration(){const e=this.budgetSummery.length;return e>0?" From "+this.dateService.formatDate(this.budgetSummery[0].date)+" To "+this.dateService.formatDate(this.budgetSummery[e-1].date):""}print(){window.print()}back(){this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](i.a),o["\u0275\u0275directiveInject"](l.c),o["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-view-budget-summery"]],decls:12,vars:3,consts:[["nbButton","","size","tiny","status","warning",1,"float-right",3,"click"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBudgetSummery",""],[1,"table-responsive"],[1,"table","table-sm"],[1,"table-heading"],[4,"ngFor","ngForOf"],["colspan","3"],[1,"text-center","pt-2"]],template:function(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275elementStart"](2,"button",0),o["\u0275\u0275listener"]("click",(function(){return t.back()})),o["\u0275\u0275text"](3,"Back"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"h4"),o["\u0275\u0275text"](5," BUDGET SUMMERY "),o["\u0275\u0275elementStart"](6,"small"),o["\u0275\u0275text"](7),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"nb-card-body"),o["\u0275\u0275template"](9,s,26,3,"div",1),o["\u0275\u0275template"](10,u,2,0,"ng-template",null,2,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275reference"](11);o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](t.getDuration()),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.budgetSummery.length>0)("ngIfElse",e)}},directives:[r.x,r.z,r.u,r.w,a.n,a.m],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let p=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(h)],l.g]}),e})();n.d(t,"ViewBudgetSummeryModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,p,r.A,r.v,r.O]]}),e})()}}]);