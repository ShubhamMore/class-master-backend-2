function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{jkDv:function(e,n,t){"use strict";t.r(n);var i,o,u,r=[{title:"Home",icon:"home",link:"/admin/home",home:!0,hidden:!1},{title:"Institutes",icon:"",link:"/admin/institutes",hidden:!1},{title:"Membership Plans",icon:"",link:"/admin/membership",hidden:!1},{title:"Coupon Codes",icon:"",link:"/admin/coupon",hidden:!1},{title:"IMS Ids",icon:"",link:"/admin/ims-ids",hidden:!1}],a=t("fXoL"),s=((i=function(){function e(){_classCallCheck(this,e),this.menuItems=[]}return _createClass(e,[{key:"getMenuItems",value:function(){return this.menuItems}},{key:"setMenuItemSequence",value:function(){this.menuItems=[],this.menuItems.push(r[0]),this.menuItems.push(r[1]),this.menuItems.push(r[2]),this.menuItems.push(r[3]),this.menuItems.push(r[4])}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=a["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac}),i),c=t("aceb"),l=t("vTDv"),d=t("ofXK"),h=t("mgFL"),m=t("tyNb"),f=[{path:"",component:(o=function(){function e(n){_classCallCheck(this,e),this.menuService=n,this.menu=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}]),e}(),o.\u0275fac=function(e){return new(e||o)(a["\u0275\u0275directiveInject"](s))},o.\u0275cmp=a["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-admin"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,n){1&e&&(a["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),a["\u0275\u0275element"](1,"nb-menu",0),a["\u0275\u0275element"](2,"router-outlet"),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("items",n.menu))},directives:[h.a,c.cb,m.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),o),children:[{path:"home",loadChildren:function(){return t.e(52).then(t.bind(null,"XXEO")).then((function(e){return e.HomeModule}))},canActivate:[]},{path:"institutes",loadChildren:function(){return t.e(54).then(t.bind(null,"IKQL")).then((function(e){return e.InstitutesModule}))},canActivate:[]},{path:"coupon",loadChildren:function(){return t.e(51).then(t.bind(null,"y+Nz")).then((function(e){return e.CouponModule}))},canActivate:[]},{path:"membership-plans",loadChildren:function(){return t.e(55).then(t.bind(null,"k69L")).then((function(e){return e.MembershipPlansModule}))},canActivate:[]},{path:"ims-ids",loadChildren:function(){return t.e(53).then(t.bind(null,"P8sk")).then((function(e){return e.ImsIdsModule}))},canActivate:[]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return t.e(0).then(t.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],p=((u=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:u}),u.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||u)},imports:[[m.g.forChild(f)],m.g]}),u);t.d(n,"AdminModule",(function(){return C}));var b,C=((b=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},providers:[s],imports:[[d.c,l.a,c.db,p]]}),b)}}]);