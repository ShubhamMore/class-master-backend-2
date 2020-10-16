function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{VAYa:function(e,n,t){"use strict";var i=[{title:"Home",icon:"home",link:"/student/home",home:!0,hidden:!1},{title:"Dashboard",icon:"",link:"/student/branch/dashboard",hidden:!0},{title:"My Course",icon:"",link:"/student/branch/course/manage",hidden:!0},{title:"Class Schedule",icon:"calendar-outline",link:"/student/branch/schedule/manage",hidden:!0},{title:"Lecture",icon:"book-open-outline",link:"/student/branch/lecture/manage",hidden:!0},{title:"Exam",icon:"",hidden:!0,children:[{title:"Schedule Classroom Test",link:"/student/branch/exam/test/manage",hidden:!0},{title:"Schedule Online Exam",link:"/student/branch/exam/online-test/manage",hidden:!0}]}],o=t("fXoL");t.d(n,"a",(function(){return a}));var u,a=((u=function(){function e(){_classCallCheck(this,e),this.menuItems=[]}return _createClass(e,[{key:"getMenuItems",value:function(){return this.menuItems}},{key:"setMenuItemSequence",value:function(){this.menuItems=[],this.menuItems.push(i[0]),this.menuItems.push(i[1]),this.menuItems.push(i[2]),this.menuItems.push(i[3]),this.menuItems.push(i[4]),this.menuItems.push(i[5])}},{key:"hideMenu",value:function(){this.menuItems=i.map((function(e,n){if(0!==n)return e.hidden=!0,e.children&&e.children.map((function(e){e.hidden=!0})),e}))}},{key:"showMenu",value:function(){this.menuItems=i.map((function(e,n){return e.hidden=!1,e.children&&e.children.map((function(e){e.hidden=!1})),e}))}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275prov=o["\u0275\u0275defineInjectable"]({token:u,factory:u.\u0275fac}),u)},ejW6:function(e,n,t){"use strict";t.r(n);var i,o,u=t("6Cnf"),a=t("VAYa"),r=t("fXoL"),c=t("mgFL"),s=t("aceb"),l=t("tyNb"),d=[{path:"",component:(i=function(){function e(n){_classCallCheck(this,e),this.menuService=n,this.menu=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}]),e}(),i.\u0275fac=function(e){return new(e||i)(r["\u0275\u0275directiveInject"](a.a))},i.\u0275cmp=r["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-student"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,n){1&e&&(r["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),r["\u0275\u0275element"](1,"nb-menu",0),r["\u0275\u0275element"](2,"router-outlet"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("items",n.menu))},directives:[c.a,s.cb,l.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),i),children:[{path:"profile",loadChildren:function(){return Promise.all([t.e(2),t.e(1),t.e(208)]).then(t.bind(null,"39iE")).then((function(e){return e.ProfileModule}))},canActivate:[]},{path:"home",loadChildren:function(){return t.e(207).then(t.bind(null,"FukE")).then((function(e){return e.HomeModule}))},canActivate:[]},{path:"branch",loadChildren:function(){return Promise.all([t.e(1),t.e(194)]).then(t.bind(null,"0Buk")).then((function(e){return e.BranchModule}))},canActivate:[u.a]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],h=((o=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[l.g.forChild(d)],l.g]}),o),m=t("vTDv");t.d(n,"StudentModule",(function(){return p}));var f,p=((f=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:f}),f.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||f)},providers:[a.a],imports:[[h,m.a,s.db]]}),f)}}]);