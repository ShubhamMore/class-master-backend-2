function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{jkDv:function(e,t,n){"use strict";n.r(t);var i,o,u,r=n("l3fW"),a=[{title:"Home",icon:"home",link:"/admin/home",home:!0,hidden:!1},{title:"Institutes",icon:"",link:"/admin/institutes",hidden:!1},{title:"Membership Plans",icon:"",link:"/admin/membership-plans",hidden:!1},{title:"Coupon Codes",icon:"",link:"/admin/coupon",hidden:!1},{title:"Setting",icon:"",link:"/admin/settings",hidden:!1}],c=n("fXoL"),s=((i=function(){function e(){_classCallCheck(this,e),this.menuItems=[]}return _createClass(e,[{key:"getMenuItems",value:function(){return this.menuItems}},{key:"setMenuItemSequence",value:function(){this.menuItems=[],this.menuItems.push(a[0]),this.menuItems.push(a[1]),this.menuItems.push(a[2]),this.menuItems.push(a[3]),this.menuItems.push(a[4])}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=c["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac}),i),l=n("aceb"),h=n("vTDv"),d=n("ofXK"),f=n("mgFL"),m=n("tyNb"),p=[{path:"",component:(o=function(){function e(t){_classCallCheck(this,e),this.menuService=t,this.menu=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}]),e}(),o.\u0275fac=function(e){return new(e||o)(c["\u0275\u0275directiveInject"](s))},o.\u0275cmp=c["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-admin"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),c["\u0275\u0275element"](1,"nb-menu",0),c["\u0275\u0275element"](2,"router-outlet"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("items",t.menu))},directives:[f.a,l.cb,m.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),o),children:[{path:"home",loadChildren:function(){return n.e(52).then(n.bind(null,"XXEO")).then((function(e){return e.HomeModule}))},canActivate:[]},{path:"institutes",loadChildren:function(){return n.e(53).then(n.bind(null,"IKQL")).then((function(e){return e.InstitutesModule}))},canActivate:[]},{path:"coupon",loadChildren:function(){return n.e(51).then(n.bind(null,"y+Nz")).then((function(e){return e.CouponModule}))},canActivate:[]},{path:"membership-plans",loadChildren:function(){return n.e(54).then(n.bind(null,"k69L")).then((function(e){return e.MembershipPlansModule}))},canActivate:[]},{path:"settings",loadChildren:function(){return n.e(55).then(n.bind(null,"zwdw")).then((function(e){return e.SettingsModule}))},canActivate:[]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],b=((u=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||u)},imports:[[m.g.forChild(p)],m.g]}),u);n.d(t,"AdminModule",(function(){return k}));var v,k=((v=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},providers:[s,r.a],imports:[[d.c,h.a,l.db,b]]}),v)},l3fW:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("fCOA"),o=n("lJxs"),u=n("JIr8"),r=n("z6cu"),a=n("fXoL"),c=function(){var e=function(){function e(t){_classCallCheck(this,e),this.httpService=t}return _createClass(e,[{key:"saveAdminZoomKeys",value:function(e){return this.httpService.httpPost({api:"saveAdminZoomKeys",data:e}).pipe(Object(o.a)((function(e){return e})),Object(u.a)((function(e){return Object(r.a)(e)})))}},{key:"getAdminZoomKeys",value:function(){return this.httpService.httpGet({api:"getAdminZoomKeys"}).pipe(Object(o.a)((function(e){return e})),Object(u.a)((function(e){return Object(r.a)(e)})))}},{key:"getAdminZoomAuthLink",value:function(){return this.httpService.httpPost({api:"getAdminZoomAuthLink",data:{}}).pipe(Object(o.a)((function(e){return e})),Object(u.a)((function(e){return Object(r.a)(e)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](i.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}()}}]);