(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{UxGw:function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotPasswordModule",(function(){return f}));var r=n("ofXK"),o=n("3Pt+"),a=n("fXoL"),i=n("fCOA"),l=n("aceb"),d=n("tyNb");function s(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",15),a["\u0275\u0275text"](1," Email is required! "),a["\u0275\u0275elementEnd"]())}function m(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",15),a["\u0275\u0275text"](1," Email should be the real one! "),a["\u0275\u0275elementEnd"]())}function c(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,s,2,0,"p",14),a["\u0275\u0275template"](2,m,2,0,"p",14),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.required),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.email)}}const u=[{path:"",component:(()=>{class e{constructor(e,t,n){this.httpService=e,this.toastrService=t,this.router=n}ngOnInit(){this.loading=!0,this.submit=!1,this.form=new o.f({email:new o.d(null,{validators:[o.u.required,o.u.email]})}),this.loading=!1}forgotPassword(){this.form.markAllAsTouched(),this.form.invalid?this.showToastr("top-right","danger","Enter Valid Email Address"):(this.submit=!0,this.httpService.httpPost({api:"forgotPassword",data:{email:this.form.value.email}}).subscribe(e=>{this.form.reset(),this.showToastr("top-right","success","Reset Password Link Send to your Email Successfully"),this.submit=!1},e=>{this.showToastr("top-right","danger",e),this.submit=!1}))}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](i.a),a["\u0275\u0275directiveInject"](l.Gb),a["\u0275\u0275directiveInject"](d.c))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-forgot-password"]],decls:27,vars:4,consts:[[1,"main-container"],[1,"row"],[1,"col-md-6","col-sm-10","col-12","mx-auto"],["id","title",1,"title"],[1,"sub-title"],[3,"formGroup","ngSubmit"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","type","email","id","input-email","name","email","placeholder","Email address","formControlName","email","autofocus","","fullWidth","",3,"status"],[4,"ngIf"],["nbButton","","size","medium","fullWidth","","status","primary",3,"disabled"],[1,"sign-in-or-up","text-right"],["routerLink","/login",1,"text-link"],["routerLink","/register",1,"text-link"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"nb-card"),a["\u0275\u0275elementStart"](4,"nb-card-body"),a["\u0275\u0275elementStart"](5,"h1",3),a["\u0275\u0275text"](6,"Forgot Password"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"p",4),a["\u0275\u0275text"](8," Enter your email address and we\u2019ll send a link to reset your password "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"form",5),a["\u0275\u0275listener"]("ngSubmit",(function(){return t.forgotPassword()})),a["\u0275\u0275elementStart"](10,"div",6),a["\u0275\u0275elementStart"](11,"label",7),a["\u0275\u0275text"](12,"Enter your email address:"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](13,"input",8),a["\u0275\u0275template"](14,c,3,2,"ng-container",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](15,"br"),a["\u0275\u0275elementStart"](16,"button",10),a["\u0275\u0275text"](17," Request password "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](18,"br"),a["\u0275\u0275elementStart"](19,"section",11),a["\u0275\u0275elementStart"](20,"p"),a["\u0275\u0275text"](21," Back to "),a["\u0275\u0275elementStart"](22,"a",12),a["\u0275\u0275text"](23,"Log In"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](24,"\xa0|\xa0 "),a["\u0275\u0275elementStart"](25,"a",13),a["\u0275\u0275text"](26,"Register"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](9),a["\u0275\u0275property"]("formGroup",t.form),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("status",t.form.get("email").touched?t.form.get("email").invalid?"danger":"success":"basic"),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.form.get("email").invalid&&t.form.get("email").touched),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("disabled",t.submit))},directives:[l.y,l.x,o.v,o.n,o.g,l.Q,o.a,o.m,o.e,r.n,l.v,d.f],styles:["",".main-container[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:2rem}@media only screen and (max-width:1200px){.main-container[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:2rem}}@media only screen and (max-width:840px){.main-container[_ngcontent-%COMP%]{padding-top:1.5rem;padding-bottom:1.5rem}}@media only screen and (max-width:420px){.main-container[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}}@media only screen and (max-width:300px){.main-container[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}}"]}),e})(),canActivate:[]},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let p=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(u)],d.g]}),e})();var g=n("vTDv");let f=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,p,o.h,o.s,g.a,l.B,l.w,l.P,l.w,l.n,l.R,l.E,l.p,l.ob]]}),e})()}}]);
//# sourceMappingURL=65-es2015.3d2c2b9d1130acdf3b10.js.map