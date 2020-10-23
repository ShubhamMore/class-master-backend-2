function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{Kd2V:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),a=n("vTDv"),r=n("aceb"),s=n("3Pt+"),c=n("nPMn"),i=n("fXoL"),l=n("tyNb");function m(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",19),i["\u0275\u0275text"](1," Zoom Access Token is required! "),i["\u0275\u0275elementEnd"]())}function u(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,m,2,0,"p",18),i["\u0275\u0275elementContainerEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",null==n.zoomKeysForm.get("accessToken").errors?null:n.zoomKeysForm.get("accessToken").errors.required)}}function y(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",19),i["\u0275\u0275text"](1," Zoom Secret Token is required! "),i["\u0275\u0275elementEnd"]())}function d(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,y,2,0,"p",18),i["\u0275\u0275elementContainerEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",null==n.zoomKeysForm.get("secretToken").errors?null:n.zoomKeysForm.get("secretToken").errors.required)}}function p(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",19),i["\u0275\u0275text"](1," Payment Gateway Access Token is required! "),i["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,p,2,0,"p",18),i["\u0275\u0275elementContainerEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",null==n.paymentGatewayKeysForm.get("accessToken").errors?null:n.paymentGatewayKeysForm.get("accessToken").errors.required)}}function f(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",19),i["\u0275\u0275text"](1," Payment Gateway Secret Token is required! "),i["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,f,2,0,"p",18),i["\u0275\u0275elementContainerEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",null==n.paymentGatewayKeysForm.get("secretToken").errors?null:n.paymentGatewayKeysForm.get("secretToken").errors.required)}}var S,g,w=[{path:"",component:(S=function(){function e(t,n,o,a){_classCallCheck(this,e),this.router=t,this.route=n,this.toastrService=o,this.instituteKeysService=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.zoomShowSecret=!1,this.zoomKeysForm=new s.f({accessToken:new s.d(null,{validators:[s.u.required]}),secretToken:new s.d(null,{validators:[s.u.required]})}),this.paymentGatewayShowSecret=!1,this.paymentGatewayKeysForm=new s.f({accessToken:new s.d(null,{validators:[s.u.required]}),secretToken:new s.d(null,{validators:[s.u.required]})}),this.instituteKeysService.getInstituteKeys().subscribe((function(t){t&&t.onlineClassesKeys&&e.zoomKeysForm.patchValue({accessToken:t.onlineClassesKeys.accessKey,secretToken:t.onlineClassesKeys.secretKey}),t&&t.paymentGatewayKeys&&e.paymentGatewayKeysForm.patchValue({accessToken:t.paymentGatewayKeys.accessKey,secretToken:t.paymentGatewayKeys.secretKey}),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"saveZoomKeys",value:function(){var e=this;this.zoomKeysForm.markAllAsTouched(),this.zoomKeysForm.invalid?this.showToastr("top-right","danger","Please Enter valid Zoom Keys"):this.instituteKeysService.saveInstituteZoomKeys({accessKey:this.zoomKeysForm.value.accessToken,secretKey:this.zoomKeysForm.value.secretToken}).subscribe((function(t){e.instituteKeysService.getZoomAuthLink().subscribe((function(e){window.open(e.authLink,"_blank","toolbar,scrollbars,resizable,top=200,left=500,width=400,height=400")})),e.showToastr("top-right","success","Institute Zoom Keys Saved Successfully!")}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"toggleShowZoomSecret",value:function(){this.zoomShowSecret=!this.zoomShowSecret}},{key:"toggleShowPaymentGatewaySecret",value:function(){this.paymentGatewayShowSecret=!this.paymentGatewayShowSecret}},{key:"savePaymentGatewayKeys",value:function(){var e=this;this.paymentGatewayKeysForm.markAllAsTouched(),this.paymentGatewayKeysForm.invalid?this.showToastr("top-right","danger","Please Enter valid Payment Gateway Keys"):this.instituteKeysService.saveInstitutePaymentGatewayKeys({accessKey:this.paymentGatewayKeysForm.value.accessToken,secretKey:this.paymentGatewayKeysForm.value.secretToken}).subscribe((function(t){e.showToastr("top-right","success","Institute Payment Gateway Keys Saved Successfully!")}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),S.\u0275fac=function(e){return new(e||S)(i["\u0275\u0275directiveInject"](l.c),i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](r.Db),i["\u0275\u0275directiveInject"](c.a))},S.\u0275cmp=i["\u0275\u0275defineComponent"]({type:S,selectors:[["ngx-settings"]],decls:62,vars:16,consts:[["nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,"row"],[1,"col-12"],[1,"col-md-8","col-sm-10","col-12","mx-auto"],[3,"formGroup","submit"],[1,"col-md-6","col-12"],[1,"form-control-group"],["for","input-access-token",1,"label"],["type","text","nbInput","","id","input-access-token","name","accessToken","formControlName","accessToken","placeholder","Zoom Access Token","fullWidth","",3,"status"],[4,"ngIf"],["for","input-secret-token",1,"label"],["nbInput","","id","input-secret-token","name","secretToken","formControlName","secretToken","placeholder","Zoom Secret Token","fullWidth","",3,"type","status"],["type","button","nbSuffix","","nbButton","","ghost","",3,"click"],["pack","eva",3,"icon"],[1,"col-12","mt-3"],["type","submit","nbButton","","size","small","status","primary",1,"float-right"],["type","text","nbInput","","id","input-access-token","name","accessToken","formControlName","accessToken","placeholder","Payment Gateway Access Token","fullWidth","",3,"status"],["nbInput","","id","input-secret-token","name","secretToken","formControlName","secretToken","placeholder","Payment Gateway Secret Token","fullWidth","",3,"type","status"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"nb-card"),i["\u0275\u0275elementStart"](1,"nb-card-header"),i["\u0275\u0275elementStart"](2,"button",0),i["\u0275\u0275listener"]("click",(function(){return t.back()})),i["\u0275\u0275text"](3,"Back"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"h3"),i["\u0275\u0275text"](5,"Settings"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"nb-card-body"),i["\u0275\u0275elementStart"](7,"div",1),i["\u0275\u0275elementStart"](8,"div",2),i["\u0275\u0275elementStart"](9,"h4"),i["\u0275\u0275text"](10,"Zoom Online Lectures"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"p"),i["\u0275\u0275text"](12,"Instructions Comming Soon..."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"div",3),i["\u0275\u0275elementStart"](14,"form",4),i["\u0275\u0275listener"]("submit",(function(){return t.saveZoomKeys()})),i["\u0275\u0275elementStart"](15,"div",1),i["\u0275\u0275elementStart"](16,"div",5),i["\u0275\u0275elementStart"](17,"div",6),i["\u0275\u0275elementStart"](18,"label",7),i["\u0275\u0275text"](19,"Zoom Access Token:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](20,"input",8),i["\u0275\u0275template"](21,u,2,1,"ng-container",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](22,"div",5),i["\u0275\u0275elementStart"](23,"div",6),i["\u0275\u0275elementStart"](24,"label",10),i["\u0275\u0275text"](25,"Zoom Secret Token:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"nb-form-field"),i["\u0275\u0275element"](27,"input",11),i["\u0275\u0275elementStart"](28,"button",12),i["\u0275\u0275listener"]("click",(function(){return t.toggleShowZoomSecret()})),i["\u0275\u0275element"](29,"nb-icon",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](30,d,2,1,"ng-container",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"div",14),i["\u0275\u0275elementStart"](32,"button",15),i["\u0275\u0275text"](33," Save "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](34,"div",2),i["\u0275\u0275element"](35,"hr"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"div",2),i["\u0275\u0275elementStart"](37,"h4"),i["\u0275\u0275text"](38,"RazorPay Payment Gateway"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](39,"p"),i["\u0275\u0275text"](40,"Instructions Comming Soon..."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](41,"div",3),i["\u0275\u0275elementStart"](42,"form",4),i["\u0275\u0275listener"]("submit",(function(){return t.savePaymentGatewayKeys()})),i["\u0275\u0275elementStart"](43,"div",1),i["\u0275\u0275elementStart"](44,"div",5),i["\u0275\u0275elementStart"](45,"div",6),i["\u0275\u0275elementStart"](46,"label",7),i["\u0275\u0275text"](47,"Payment Gateway Access Token:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](48,"input",16),i["\u0275\u0275template"](49,h,2,1,"ng-container",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](50,"div",5),i["\u0275\u0275elementStart"](51,"div",6),i["\u0275\u0275elementStart"](52,"label",10),i["\u0275\u0275text"](53,"Payment Gateway Secret Token:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](54,"nb-form-field"),i["\u0275\u0275element"](55,"input",17),i["\u0275\u0275elementStart"](56,"button",12),i["\u0275\u0275listener"]("click",(function(){return t.toggleShowPaymentGatewaySecret()})),i["\u0275\u0275element"](57,"nb-icon",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](58,v,2,1,"ng-container",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](59,"div",14),i["\u0275\u0275elementStart"](60,"button",15),i["\u0275\u0275text"](61," Save "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](14),i["\u0275\u0275property"]("formGroup",t.zoomKeysForm),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("status",t.zoomKeysForm.get("accessToken").touched?t.zoomKeysForm.get("accessToken").invalid?"danger":"success":"basic"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.zoomKeysForm.get("accessToken").invalid&&t.zoomKeysForm.get("accessToken").touched),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("type",t.zoomShowSecret?"text":"password")("status",t.zoomKeysForm.get("secretToken").touched?t.zoomKeysForm.get("secretToken").invalid?"danger":"success":"basic"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("icon",t.zoomShowSecret?"eye-outline":"eye-off-2-outline"),i["\u0275\u0275attribute"]("aria-label",t.zoomShowSecret?"show secret":"hide secret"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.zoomKeysForm.get("secretToken").invalid&&t.zoomKeysForm.get("secretToken").touched),i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("formGroup",t.paymentGatewayKeysForm),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("status",t.paymentGatewayKeysForm.get("accessToken").touched?t.paymentGatewayKeysForm.get("accessToken").invalid?"danger":"success":"basic"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.paymentGatewayKeysForm.get("accessToken").invalid&&t.paymentGatewayKeysForm.get("accessToken").touched),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("type",t.paymentGatewayShowSecret?"text":"password")("status",t.paymentGatewayKeysForm.get("secretToken").touched?t.paymentGatewayKeysForm.get("secretToken").invalid?"danger":"success":"basic"),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("icon",t.paymentGatewayShowSecret?"eye-outline":"eye-off-2-outline"),i["\u0275\u0275attribute"]("aria-label",t.paymentGatewayShowSecret?"show secret":"hide secret"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.paymentGatewayKeysForm.get("secretToken").invalid&&t.paymentGatewayKeysForm.get("secretToken").touched))},directives:[r.x,r.z,r.u,r.w,s.v,s.n,s.g,r.P,s.a,s.m,s.e,o.n,r.K,r.vb,r.M],styles:[""]}),S),canActivate:[]},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],k=((g=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[l.g.forChild(w)],l.g]}),g);n.d(t,"SettingsModule",(function(){return T}));var K,T=((K=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[o.c,a.a,s.s,r.A,r.Ib,r.O,r.Q,r.v,r.Gb,r.L,k]]}),K)}}]);