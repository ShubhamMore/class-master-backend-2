(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{T5rS:function(e,t,n){"use strict";n.r(t);var r=n("aceb"),i=n("ofXK"),a=n("IkSl"),o=n("tyNb"),l=n("FYcy"),c=n("fXoL");function s(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"h3"),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"uppercase"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](2,1,e.courseMaterial.title))}}function d(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275element"](1,"pdf-viewer",6),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",e.courseMaterial.secureUrl)("render-text",!1)("original-size",!0)}}function u(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",7),c["\u0275\u0275element"](1,"img",8),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("src",e.courseMaterial.secureUrl,c["\u0275\u0275sanitizeUrl"])("alt",e.courseMaterial.title)}}function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",7),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"div",9),c["\u0275\u0275elementStart"](3,"video",10,11),c["\u0275\u0275element"](5,"source",12),c["\u0275\u0275text"](6," This browser/App does not support the video. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("src",e.courseMaterial.secureUrl,c["\u0275\u0275sanitizeUrl"])}}function m(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().back()})),c["\u0275\u0275text"](5," Back "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,s,3,3,"h3",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"nb-card-body"),c["\u0275\u0275elementStart"](8,"div",1),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275template"](10,d,2,3,"div",0),c["\u0275\u0275template"](11,u,2,2,"div",5),c["\u0275\u0275template"](12,p,7,1,"div",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",e.courseMaterial.title),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("ngIf","PDF"===e.courseMaterial.fileType),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","IMAGE"===e.courseMaterial.fileType),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","MP4"===e.courseMaterial.fileType)}}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.courseMaterialService=e,this.toastrService=t,this.router=n,this.route=r}ngOnInit(){if(this.loading=!0,this.courseMaterialId=this.courseMaterialService.getCourseMaterialId(),!this.courseMaterialId)return this.showToastr("top-right","danger","Invalid Course Material Id"),void this.back();this.courseMaterialService.getCourseMaterialData().subscribe(e=>{e?(this.courseMaterial=e,this.loading=!1):this.back()})}back(){this.loading=!0,this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.courseMaterialService.deleteCourseMaterialId(),this.courseMaterialService.deleteCourseMaterialData()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](r.Db),c["\u0275\u0275directiveInject"](o.c),c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-view-course-material"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],["nbButton","","size","tiny","status","warning",1,"float-right",3,"click"],[1,"col-12"],["class","text-center",4,"ngIf"],["loading","lazy",3,"src","render-text","original-size"],[1,"text-center"],["loading","lazy","width","80%","height","auto",3,"src","alt"],[1,"col-md-10","col-12","mx-auto"],["disablePictureInPicture","","id","video","name","video","oncontextmenu","return false;","width","100%","loading","lazy","controls","","controlsList","nodownload",1,"video"],["videoPlayer",""],["type","video/mp4",3,"src"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,m,13,4,"nb-card",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[i.n,r.x,r.z,r.u,r.w,a.a],pipes:[i.v],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(v)],o.g]}),e})();n.d(t,"ViewCourseMaterialModule",(function(){return h}));let h=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,f,r.A,r.v,a.b]]}),e})()}}]);