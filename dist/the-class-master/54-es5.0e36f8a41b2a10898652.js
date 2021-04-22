!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{VAYa:function(n,i,u){"use strict";u.d(i,"a",(function(){return c}));var o,r=[{title:"Home",icon:"home",link:"/student/home",home:!0,hidden:!1},{title:"Dashboard",icon:"shield-outline",link:"/student/branch/dashboard",hidden:!0},{title:"My Courses",icon:"share-outline",link:"/student/branch/course/manage",hidden:!0,queryParams:{type:"course"}},{title:"Lectures",icon:"book-open-outline",link:"/student/branch/course/manage",hidden:!0,queryParams:{type:"lecture"}},{title:"Assignments",icon:"archive-outline",link:"/student/branch/course/manage",hidden:!0,queryParams:{type:"assignment"}},{title:"Reports",icon:"bar-chart-outline",link:"/student/branch/course/manage",hidden:!0,queryParams:{type:"report"}},{title:"Online Exams",icon:"edit-2-outline",link:"/student/branch/course/manage",hidden:!0,queryParams:{type:"exam"}}],a=u("fXoL"),c=((o=function(){function n(){e(this,n),this.menuItems=[]}return t(n,[{key:"getMenuItems",value:function(){return this.menuItems}},{key:"setMenuItemSequence",value:function(){this.menuItems=[],this.menuItems.push(r[0]),this.menuItems.push(r[1]),this.menuItems.push(r[2]),this.menuItems.push(r[3]),this.menuItems.push(r[4]),this.menuItems.push(r[5]),this.menuItems.push(r[6])}},{key:"hideMenu",value:function(){this.menuItems=r.map((function(e,n){if(0!==n)return e.hidden=!0,e.children&&e.children.map((function(e){e.hidden=!0})),e}))}},{key:"showMenu",value:function(){this.menuItems=r.map((function(e,n){return e.hidden=!1,e.children&&e.children.map((function(e){e.hidden=!1})),e}))}}]),n}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=a["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac}),o)},ejW6:function(n,i,u){"use strict";u.r(i),u.d(i,"StudentModule",(function(){return b}));var o,r,a,c=u("6Cnf"),s=u("fXoL"),h=u("VAYa"),d=u("mgFL"),l=u("aceb"),m=u("tyNb"),f=[{path:"",component:(o=function(){function n(t){e(this,n),this.menuService=t,this.menu=[]}return t(n,[{key:"ngOnInit",value:function(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}]),n}(),o.\u0275fac=function(e){return new(e||o)(s["\u0275\u0275directiveInject"](h.a))},o.\u0275cmp=s["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-student"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,n){1&e&&(s["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),s["\u0275\u0275element"](1,"nb-menu",0),s["\u0275\u0275element"](2,"router-outlet"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("items",n.menu))},directives:[d.a,l.db,m.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),o),children:[{path:"profile",loadChildren:function(){return Promise.all([u.e(2),u.e(1),u.e(255)]).then(u.bind(null,"39iE")).then((function(e){return e.ProfileModule}))},canActivate:[]},{path:"home",loadChildren:function(){return u.e(254).then(u.bind(null,"FukE")).then((function(e){return e.HomeModule}))},canActivate:[]},{path:"branch",loadChildren:function(){return Promise.all([u.e(1),u.e(53)]).then(u.bind(null,"0Buk")).then((function(e){return e.BranchModule}))},canActivate:[c.a]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return u.e(0).then(u.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],p=((r=function n(){e(this,n)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[m.g.forChild(f)],m.g]}),r),y=u("vTDv"),b=((a=function n(){e(this,n)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},providers:[h.a],imports:[[p,y.a,l.eb]]}),a)}}])}();
//# sourceMappingURL=54-es5.0e36f8a41b2a10898652.js.map