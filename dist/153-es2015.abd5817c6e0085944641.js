(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{vy0W:function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("ofXK"),i=n("ZatZ"),s=n("IAlr"),o=n("F3IG"),l=n("EQut"),c=n("fXoL"),d=n("tyNb");function m(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-option",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275property"]("value",e._id),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](e.category)}}function h(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-option",11),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275property"]("value",e._id),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](e.basicDetails.courseName)}}function u(e,t){1&e&&c["\u0275\u0275element"](0,"th")}function p(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"td"),c["\u0275\u0275elementStart"](1,"button",20),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"](3).wonLead(t._id)})),c["\u0275\u0275text"](2," Won "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}function g(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"td"),c["\u0275\u0275elementStart"](1,"button",20),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"](3).reOpenLead(t._id)})),c["\u0275\u0275text"](2," Reopen "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}function v(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"td"),c["\u0275\u0275elementStart"](1,"button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"](3).lostLead(t._id)})),c["\u0275\u0275text"](2," Lost "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}function f(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"td"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"td"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"td"),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"td"),c["\u0275\u0275text"](10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"td"),c["\u0275\u0275text"](12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"td"),c["\u0275\u0275elementStart"](14,"button",18),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](3).editLead(n._id)})),c["\u0275\u0275text"](15," Edit "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](16,p,3,0,"td",16),c["\u0275\u0275template"](17,g,3,0,"td",16),c["\u0275\u0275template"](18,v,3,0,"td",16),c["\u0275\u0275elementStart"](19,"td"),c["\u0275\u0275elementStart"](20,"button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](3).deleteLead(n._id)})),c["\u0275\u0275text"](21," Delete "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=c["\u0275\u0275nextContext"](3);c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](n+1),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](e.leadName),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.date)),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.dateService.formatDate(e.followUpDate)),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.getCategory(e.category)),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.getCourse(e.course)),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf","active"===r.type),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","inactive"===r.type),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","active"===r.type)}}function S(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",14),c["\u0275\u0275elementStart"](1,"table",15),c["\u0275\u0275elementStart"](2,"thead"),c["\u0275\u0275elementStart"](3,"tr"),c["\u0275\u0275elementStart"](4,"th"),c["\u0275\u0275text"](5,"#"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"th"),c["\u0275\u0275text"](7,"Name"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"th"),c["\u0275\u0275text"](9,"Date"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"th"),c["\u0275\u0275text"](11,"Follow Up"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"th"),c["\u0275\u0275text"](13,"Category"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"th"),c["\u0275\u0275text"](15,"Course"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"th"),c["\u0275\u0275text"](17,"Action"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](18,u,1,0,"th",16),c["\u0275\u0275element"](19,"th"),c["\u0275\u0275element"](20,"th"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"tbody"),c["\u0275\u0275template"](22,f,22,9,"tr",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](18),c["\u0275\u0275property"]("ngIf","active"===e.type),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngForOf",e.leads)}}function b(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",21),c["\u0275\u0275text"](1,"No Leads Available"),c["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,S,23,2,"div",12),c["\u0275\u0275template"](2,b,2,0,"ng-template",null,13,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275reference"](3),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",t.leads.length>0)("ngIfElse",e)}}function x(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",21),c["\u0275\u0275text"](1,"Loading..."),c["\u0275\u0275elementEnd"]())}const E=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,i,s){this.branchService=e,this.dateService=t,this.courseService=n,this.toastrService=r,this.leadService=a,this.router=i,this.route=s,this.route.queryParams.subscribe(e=>{this.ngOnInit()})}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe(e=>{this.type=e.type,this.leadService.setLeadType(this.type)}),"active"===this.type||"inactive"===this.type?(this.leads=[],this.categories=[],this.category="",this.courses=[],this.course="",this.myCourses=[],this.getCategories(),this.getCourses()):this.router.navigate(["../manage"],{relativeTo:this.route,queryParams:{type:"active"}})):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories?this.getLeads(this.category,this.course):this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getLeads(this.category,this.course)},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}getCourses(){this.courseService.getCoursesData().subscribe(e=>{this.courses=e})}onSelectCategory(e){this.category=e,this.course="",this.myCourses=this.courses.filter(t=>t.basicDetails.category===e),this.getLeads(this.category,this.course)}onSelectCourse(e){this.course=e,this.getLeads(this.category,this.course)}getLeads(e,t){this.loading=!0,this.leadService.getLeads(this.branchId,e,t,this.type).subscribe(e=>{this.leads=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}editLead(e){this.leadService.setLeadId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}deleteLead(e){this.leadService.deleteLead(e).subscribe(t=>{this.removeLead(e),this.showToastr("top-right","success","Lead Deleted Successfully")},e=>{this.showToastr("top-right","danger",e)})}removeLead(e){const t=this.leads.findIndex(t=>t._id===e);t>=0&&this.leads.splice(t,1)}wonLead(e){this.leadService.changeLeadStatus(e,"won").subscribe(t=>{this.removeLead(e)},e=>{this.showToastr("top-right","danger",e)})}reOpenLead(e){this.leadService.changeLeadStatus(e,"open").subscribe(t=>{this.removeLead(e)},e=>{this.showToastr("top-right","danger",e)})}lostLead(e){this.leadService.changeLeadStatus(e,"lost").subscribe(t=>{this.removeLead(e)},e=>{this.showToastr("top-right","danger",e)})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getCourse(e){const t=this.courses.find(t=>t._id===e);return t?t.basicDetails.courseName:"--"}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](i.a),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](r.Db),c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](d.c),c["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-lead"]],decls:23,vars:9,consts:[[1,"row"],[1,"col-md-6","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["id","select-course","name","course","fullWidth","","placeholder","Select Course",3,"selected","selectedChange"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noLeads",""],[1,"table-responsive"],[1,"table"],[4,"ngIf"],[4,"ngFor","ngForOf"],["nbButton","","status","basic","size","small",3,"click"],["nbButton","","status","danger","size","small",3,"click"],["nbButton","","status","success","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",0),c["\u0275\u0275elementStart"](3,"div",1),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"uppercase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",2),c["\u0275\u0275elementStart"](8,"nb-select",3),c["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCategory(e)})),c["\u0275\u0275elementStart"](9,"nb-option",4),c["\u0275\u0275text"](10,"All Categories"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](11,m,2,2,"nb-option",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"div",2),c["\u0275\u0275elementStart"](13,"nb-select",6),c["\u0275\u0275listener"]("selectedChange",(function(e){return t.onSelectCourse(e)})),c["\u0275\u0275elementStart"](14,"nb-option",4),c["\u0275\u0275text"](15,"All Courses"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](16,h,2,2,"nb-option",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"nb-card-body",7),c["\u0275\u0275elementStart"](18,"div",0),c["\u0275\u0275elementStart"](19,"div",8),c["\u0275\u0275template"](20,y,4,2,"ng-container",9),c["\u0275\u0275template"](21,x,2,0,"ng-template",null,10,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](22);c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](6,7,t.type)," Leads"),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("selected",t.category),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",t.categories),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("selected",t.course),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",t.myCourses),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.x,r.z,r.mb,r.fb,a.m,r.w,a.n,r.u],pipes:[a.v],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let C=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(E)],d.g]}),e})();n.d(t,"ManageLeadModule",(function(){return I}));let I=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,C,r.A,r.nb,r.t,r.v,r.O,r.Gb]]}),e})()}}]);