function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{c28y:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),o=r("3Pt+"),a=r("fCOA"),s=r("5hth"),i=r("AytR"),l=r("fXoL"),d=r("aceb"),c=r("tyNb");function u(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",16),l["\u0275\u0275text"](1," Password is required! "),l["\u0275\u0275elementEnd"]())}function m(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",16),l["\u0275\u0275text"](1," Password should contain minimum 7 characters "),l["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,u,2,0,"p",15),l["\u0275\u0275template"](2,m,2,0,"p",15),l["\u0275\u0275elementContainerEnd"]()),2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==r.form.get("password").errors?null:r.form.get("password").errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==r.form.get("password").errors?null:r.form.get("password").errors.minlength)}}function f(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",16),l["\u0275\u0275text"](1," Password confirmation is required! "),l["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",16),l["\u0275\u0275text"](1," Password does not match the confirm password. "),l["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,f,2,0,"p",15),l["\u0275\u0275template"](2,h,2,0,"p",15),l["\u0275\u0275elementContainerEnd"]()),2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",null==r.form.get("confirmPassword").errors?null:r.form.get("confirmPassword").errors.required),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",r.form.get("password").value!=r.form.get("confirmPassword").value&&!(null!=r.form.get("confirmPassword").errors&&r.form.get("confirmPassword").errors.required))}}var w,v,y=[{path:"",component:(w=function(){function e(t,r,n,o,a,s){_classCallCheck(this,e),this.httpService=t,this.toastrService=r,this.roure=n,this.encryptService=o,this.router=a,this.formBuilder=s}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.form=this.formBuilder.group({password:new o.d(null,{validators:[o.u.required,o.u.minLength(7),o.u.maxLength(20)]}),confirmPassword:new o.d(null,{validators:[o.u.required,o.u.minLength(7),o.u.maxLength(20)]})}),this.roure.queryParams.subscribe((function(t){void 0===t.key?(e.showToastr("top-right","danger","Invalid Key"),e.router.navigate(["../page_not_found"],{relativeTo:e.roure})):(e.token=t.key,e.httpService.httpPost({api:"validateToken",data:{token:e.token}}).subscribe((function(t){t.valid_token?e.loading=!1:(e.showToastr("top-right","danger","Invalid Authentication Token"),e.router.navigate(["../page_not_found"],{relativeTo:e.roure}))}),(function(t){e.showToastr("top-right","danger",t),e.router.navigate(["../page_not_found"],{relativeTo:e.roure})})))}))}},{key:"reset",value:function(){var e=this;if(this.form.markAllAsTouched(),this.form.invalid)this.showToastr("top-right","danger","Please Fill all Details Correctly");else if(this.form.hasError("invalidPassword"))this.showToastr("top-right","danger","Password & Forgot Password Does not Match");else{this.loading=!0;var t={password:this.encryptService.encrypt(this.form.value.password,i.a.encKey),token:this.token};this.httpService.httpPost({api:"resetPassword",data:t}).subscribe((function(t){e.form.reset(),e.showToastr("top-right","success","Password Changed Successfully"),e.router.navigate(["/login"],{relativeTo:e.roure}),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"showToastr",value:function(e,t,r){this.toastrService.show(t,r,{position:e,status:t})}}]),e}(),w.\u0275fac=function(e){return new(e||w)(l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](d.Db),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](c.c),l["\u0275\u0275directiveInject"](o.c))},w.\u0275cmp=l["\u0275\u0275defineComponent"]({type:w,selectors:[["ngx-reset-password"]],decls:31,vars:5,consts:[[1,"row"],[1,"col-md-6","col-sm-10","col-12","mx-auto"],["id","title",1,"title"],[1,"sub-title"],[3,"formGroup","ngSubmit"],[1,"form-control-group"],["for","input-password",1,"label"],["type","password","nbInput","","id","input-password","name","password","formControlName","password","placeholder","Password","minlength","7","maxlength","20","fullWidth","",3,"status"],[4,"ngIf"],["for","input-re-password",1,"label"],["nbInput","","type","password","id","input-re-password","name","rePass","formControlName","confirmPassword","placeholder","Confirm Password","minlength","5","maxlength","30","fullWidth","",3,"status"],["nbButton","","status","primary","fullWidth",""],[1,"sign-in-or-up","text-right"],["routerLink","/login",1,"text-link"],["routerLink","/register",1,"text-link"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-body"),l["\u0275\u0275elementStart"](4,"h1",2),l["\u0275\u0275text"](5,"Change password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"p",3),l["\u0275\u0275text"](7,"Please set a new password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"form",4),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.reset()})),l["\u0275\u0275elementStart"](9,"div",5),l["\u0275\u0275elementStart"](10,"label",6),l["\u0275\u0275text"](11,"Password:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](12,"input",7),l["\u0275\u0275template"](13,p,3,2,"ng-container",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",5),l["\u0275\u0275elementStart"](15,"label",9),l["\u0275\u0275text"](16,"Repeat password:"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](17,"input",10),l["\u0275\u0275template"](18,g,3,2,"ng-container",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](19,"br"),l["\u0275\u0275elementStart"](20,"button",11),l["\u0275\u0275text"](21,"Change password"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](22,"br"),l["\u0275\u0275elementStart"](23,"section",12),l["\u0275\u0275elementStart"](24,"p"),l["\u0275\u0275text"](25," Back to "),l["\u0275\u0275elementStart"](26,"a",13),l["\u0275\u0275text"](27,"Log In"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](28,"\xa0|\xa0 "),l["\u0275\u0275elementStart"](29,"a",14),l["\u0275\u0275text"](30,"Register"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("formGroup",t.form),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("status",t.form.get("password").touched?t.form.get("password").invalid?"danger":"success":"basic"),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.form.get("password").invalid&&t.form.get("password").touched),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("status",t.form.get("confirmPassword").touched?t.form.get("confirmPassword").invalid||t.form.get("password").value!=t.form.get("confirmPassword").value?"danger":"success":"basic"),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.form.get("confirmPassword").invalid&&t.form.get("confirmPassword").touched))},directives:[d.x,d.w,o.v,o.n,o.g,d.P,o.a,o.m,o.e,o.j,o.i,n.n,d.u,c.f],styles:["",""]}),w),canActivate:[]},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],P=((v=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[c.g.forChild(y)],c.g]}),v),b=r("vTDv");r.d(t,"ResetPasswordModule",(function(){return C}));var S,C=((S=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[n.c,P,o.h,o.s,b.a,d.A,d.v,d.O,d.v,d.n,d.Q,d.D,d.p,d.nb]]}),S)}}]);