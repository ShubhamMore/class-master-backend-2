function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{"g1+o":function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),r=n("nwtg"),i=n("EQut"),c=n("M9zO"),l=n("fXoL"),s=n("tyNb"),o=n("aceb");function d(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",1),l["\u0275\u0275elementStart"](1,"div",2),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-body"),l["\u0275\u0275element"](4,"img",3),l["\u0275\u0275element"](5,"br"),l["\u0275\u0275elementStart"](6,"h2"),l["\u0275\u0275text"](7,"No Institute Added"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](8,"br"),l["\u0275\u0275elementStart"](9,"button",4),l["\u0275\u0275text"](10,"Add Institute"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())}function u(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",16),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275nextContext"]().$implicit;return l["\u0275\u0275nextContext"](2).manageBranch(e._id)})),l["\u0275\u0275text"](1," Manage "),l["\u0275\u0275elementEnd"]()}}function m(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",17),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275nextContext"]().$implicit;return l["\u0275\u0275nextContext"](2).activateBranch(e._id)})),l["\u0275\u0275text"](1," Activate Now "),l["\u0275\u0275elementEnd"]()}}function v(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275element"](2,"nb-user",9),l["\u0275\u0275pipe"](3,"uppercase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"td"),l["\u0275\u0275text"](5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"td"),l["\u0275\u0275elementStart"](7,"span",10),l["\u0275\u0275text"](8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"td"),l["\u0275\u0275elementStart"](10,"span",11),l["\u0275\u0275elementStart"](11,"strong"),l["\u0275\u0275text"](12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"td"),l["\u0275\u0275elementStart"](14,"button",12),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](2).viewBranch(e._id)})),l["\u0275\u0275text"](15," View "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"button",13),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](2).editBranch(e._id)})),l["\u0275\u0275text"](17," Edit "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](18,u,2,0,"button",14),l["\u0275\u0275template"](19,m,2,0,"button",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("name",l["\u0275\u0275pipeBind1"](3,8,a.basicDetails.branchName))("title",a.address.city),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",r.getAddress(a.address)," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"]("+91 ",a.basicDetails.phone,""),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngClass",a.status?"active":"inactive"),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a.status?"Active":"Inactive"),l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("ngIf",a.status),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",!a.status)}}function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",1),l["\u0275\u0275elementStart"](1,"div",5),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-header"),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"My Institutes"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"nb-card-body"),l["\u0275\u0275elementStart"](7,"div",6),l["\u0275\u0275elementStart"](8,"table",7),l["\u0275\u0275elementStart"](9,"tbody"),l["\u0275\u0275template"](10,v,20,10,"tr",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("ngForOf",n.branches)}}var f,p,b=[{path:"",component:(f=function(){function e(t,n,a,r,i){_classCallCheck(this,e),this.menuService=t,this.authService=n,this.branchService=a,this.router=r,this.route=i}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branches=[],this.menuService.hideMenu(),this.branchService.setBranchId(""),this.branchService.getBranches().subscribe((function(t){e.branches=t,e.loading=!1}),(function(t){e.loading=!1}))}},{key:"getAddress",value:function(e){return e.address1+", "+(e.address2?e.address2+", ":"")+e.city+" - "+e.pinCode+", "+e.state}},{key:"manageBranch",value:function(e){this.branchService.setBranchId(e),this.router.navigate(["../branch/dashboard"],{relativeTo:this.route})}},{key:"activateBranch",value:function(e){}},{key:"viewBranch",value:function(e){this.branchService.setBranchId(e),this.router.navigate(["../view"],{relativeTo:this.route})}},{key:"editBranch",value:function(e){this.branchService.setBranchId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}}]),e}(),f.\u0275fac=function(e){return new(e||f)(l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](r.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](s.c),l["\u0275\u0275directiveInject"](s.a))},f.\u0275cmp=l["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-manage-institute"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-10","col-12","mx-auto","text-center"],["src","","alt","Institute"],["nbButton","","status","primary","routerLink","/institute/add"],[1,"col-md-12"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["size","medium",3,"name","title"],[1,""],[3,"ngClass"],["nbButton","","status","info","size","small",1,"mr-2",3,"click"],["nbButton","","status","basic","size","small",1,"mr-2",3,"click"],["class","","nbButton","","status","warning","size","small",3,"click",4,"ngIf"],["class","","nbButton","","status","danger","size","small",3,"click",4,"ngIf"],["nbButton","","status","warning","size","small",1,"",3,"click"],["nbButton","","status","danger","size","small",1,"",3,"click"]],template:function(e,t){1&e&&(l["\u0275\u0275template"](0,d,11,0,"div",0),l["\u0275\u0275template"](1,h,11,1,"div",0)),2&e&&(l["\u0275\u0275property"]("ngIf",0===t.branches.length),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.branches.length>0))},directives:[a.n,o.x,o.w,o.u,s.d,o.z,a.m,o.Hb,a.l],pipes:[a.v],styles:[".active[_ngcontent-%COMP%]{color:#00d68f}.inactive[_ngcontent-%COMP%]{color:#ff3d71}"]}),f)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],g=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:p}),p.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||p)},imports:[[s.g.forChild(b)],s.g]}),p),S=n("vTDv");n.d(t,"ManageInstituteModule",(function(){return y}));var x,y=((x=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[a.c,g,S.a,o.A,o.O,o.v,o.Gb,o.Ib]]}),x)}}]);