function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{M9zO:function(e,t,n){"use strict";var i=[{title:"Home",icon:"home",link:"/institute/home",home:!0,hidden:!1},{title:"My Institutes",icon:"",link:"/institute/my-institutes",hidden:!1},{title:"Dashboard",icon:"",link:"/institute/branch/dashboard",hidden:!0},{title:"Branch Management",icon:"",hidden:!0,children:[{title:"Receipt Details",link:"/institute/branch/manage-branch/receipt",hidden:!0},{title:"Course",link:"/institute/branch/manage-branch/course",hidden:!0},{title:"Discount & Offers",link:"/institute/branch/manage-branch/discount-and-offers",hidden:!0}]},{title:"Student Management",icon:"",hidden:!0,children:[{title:"Add Student",link:"/institute/branch/student/add",hidden:!0},{title:"Active Students",link:"/institute/branch/student/manage",queryParams:{type:"active"},hidden:!0},{title:"Inactive Students",link:"/institute/branch/student/manage",queryParams:{type:"inactive"},hidden:!0}]},{title:"Schedule Class",icon:"calendar-outline",link:"/institute/branch/schedule/batch",hidden:!0},{title:"Lecture Management",icon:"book-open-outline",link:"/institute/branch/lecture/batch",hidden:!0},{title:"Exam Management",icon:"",hidden:!0,children:[{title:"Schedule Classroom Test",link:"/institute/branch/exam/test/batch",hidden:!0},{title:"Schedule Online Exam",link:"/institute/branch/exam/online-test/manage",hidden:!0}]},{title:"Employee Management",icon:"",hidden:!0,children:[{title:"Add Employee",link:"/institute/branch/employee/add",hidden:!0},{title:"Active Employees",link:"/institute/branch/employee/manage",queryParams:{type:"active"},hidden:!0},{title:"Inactive Employees",link:"/institute/branch/employee/manage",queryParams:{type:"inactive"},hidden:!0}]},{title:"Lead Management",icon:"",hidden:!0,children:[{title:"Add Lead",link:"/institute/branch/lead/add",hidden:!0},{title:"Active Leads",link:"/institute/branch/lead/manage",queryParams:{type:"active"}},{title:"Close Leads",link:"/institute/branch/lead/manage",queryParams:{type:"inactive"}}]},{title:"Budget Management",icon:"",link:"/institute/branch/budget/manage",hidden:!0}],a=n("fXoL");n.d(t,"a",(function(){return r}));var u,r=((u=function(){function e(){_classCallCheck(this,e),this.menuItems=[]}return _createClass(e,[{key:"getMenuItems",value:function(){return this.menuItems}},{key:"setMenuItemSequence",value:function(){this.menuItems=[],this.menuItems.push(i[0]),this.menuItems.push(i[1]),this.menuItems.push(i[2]),this.menuItems.push(i[3]),this.menuItems.push(i[4]),this.menuItems.push(i[5]),this.menuItems.push(i[6]),this.menuItems.push(i[7]),this.menuItems.push(i[8]),this.menuItems.push(i[9]),this.menuItems.push(i[10])}},{key:"hideMenu",value:function(){this.menuItems=i.map((function(e,t){if(0!==t&&1!==t)return e.hidden=!0,e.children&&e.children.map((function(e){e.hidden=!0})),e}))}},{key:"showMenu",value:function(){this.menuItems=i.map((function(e,t){return e.hidden=!1,e.children&&e.children.map((function(e){e.hidden=!1})),e}))}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275prov=a.Mb({token:u,factory:u.\u0275fac}),u)},V0SI:function(e,t,n){"use strict";n.r(t);var i,a,u=n("M9zO"),r=n("aceb"),l=n("vTDv"),c=n("fXoL"),o=n("mgFL"),s=n("tyNb"),d=[{path:"",component:(i=function(){function e(t){_classCallCheck(this,e),this.menuService=t,this.menu=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}]),e}(),i.\u0275fac=function(e){return new(e||i)(c.Qb(u.a))},i.\u0275cmp=c.Kb({type:i,selectors:[["ngx-institute"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(c.Wb(0,"ngx-one-column-layout"),c.Rb(1,"nb-menu",0),c.Rb(2,"router-outlet"),c.Vb()),2&e&&(c.Eb(1),c.mc("items",t.menu))},directives:[o.a,r.bb,s.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),i),children:[{path:"profile",loadChildren:function(){return Promise.all([n.e(3),n.e(1),n.e(160)]).then(n.bind(null,"eXDF")).then((function(e){return e.ProfileModule}))},canActivate:[]},{path:"settings",loadChildren:function(){return n.e(161).then(n.bind(null,"Kd2V")).then((function(e){return e.SettingsModule}))},canActivate:[]},{path:"home",loadChildren:function(){return n.e(156).then(n.bind(null,"BeyL")).then((function(e){return e.HomeModule}))},canActivate:[]},{path:"my-institutes",loadChildren:function(){return n.e(157).then(n.bind(null,"g1+o")).then((function(e){return e.ManageInstituteModule}))},canActivate:[]},{path:"membership-plans",loadChildren:function(){return Promise.all([n.e(1),n.e(159)]).then(n.bind(null,"zgr8")).then((function(e){return e.MembershipPlansModule}))},canActivate:[]},{path:"add",loadChildren:function(){return Promise.all([n.e(2),n.e(1),n.e(6)]).then(n.bind(null,"wSJA")).then((function(e){return e.AddInstituteModule}))},canActivate:[]},{path:"view",loadChildren:function(){return n.e(158).then(n.bind(null,"ZcVN")).then((function(e){return e.ViewInstituteModule}))},canActivate:[]},{path:"edit",loadChildren:function(){return Promise.all([n.e(2),n.e(1),n.e(6)]).then(n.bind(null,"wSJA")).then((function(e){return e.AddInstituteModule}))},canActivate:[]},{path:"branch",loadChildren:function(){return n.e(102).then(n.bind(null,"MZNv")).then((function(e){return e.BranchModule}))},canActivate:[n("6Cnf").a]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],h=((a=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:a}),a.\u0275inj=c.Nb({factory:function(e){return new(e||a)},imports:[[s.g.forChild(d)],s.g]}),a);n.d(t,"InstituteModule",(function(){return f}));var m,f=((m=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ob({type:m}),m.\u0275inj=c.Nb({factory:function(e){return new(e||m)},providers:[u.a],imports:[[h,l.a,r.cb]]}),m)}}]);