(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"0I9m":function(e,t,i){"use strict";i.r(t);var r=i("IkSl"),c=i("aceb"),a=i("ofXK"),n=i("ziii"),o=i("fXoL"),l=i("tyNb");function s(e,t){if(1&e&&(o.Wb(0,"h3"),o.Cc(1),o.hc(2,"uppercase"),o.Vb()),2&e){const e=o.gc(2);o.Eb(1),o.Dc(o.ic(2,1,e.lectureMaterial.title))}}function u(e,t){if(1&e&&(o.Wb(0,"div"),o.Rb(1,"pdf-viewer",6),o.Vb()),2&e){const e=o.gc(2);o.Eb(1),o.mc("src",e.lectureMaterial.secureUrl)("render-text",!1)("original-size",!0)}}function b(e,t){if(1&e&&(o.Wb(0,"div",7),o.Rb(1,"img",8),o.Vb()),2&e){const e=o.gc(2);o.Eb(1),o.mc("src",e.lectureMaterial.secureUrl,o.wc)("alt",e.lectureMaterial.title)}}function d(e,t){if(1&e&&(o.Wb(0,"div",7),o.Wb(1,"div",1),o.Wb(2,"div",9),o.Wb(3,"video",10,11),o.Rb(5,"source",12),o.Cc(6," This browser/App does not support the video. "),o.Vb(),o.Vb(),o.Vb(),o.Vb()),2&e){const e=o.gc(2);o.Eb(5),o.mc("src",e.lectureMaterial.secureUrl,o.wc)}}function h(e,t){if(1&e){const e=o.Xb();o.Wb(0,"nb-card"),o.Wb(1,"nb-card-header"),o.Wb(2,"div",1),o.Wb(3,"div",2),o.Wb(4,"button",3),o.ec("click",(function(){return o.uc(e),o.gc().back()})),o.Cc(5," Back "),o.Vb(),o.Ac(6,s,3,3,"h3",0),o.Vb(),o.Vb(),o.Vb(),o.Wb(7,"nb-card-body"),o.Wb(8,"div",1),o.Wb(9,"div",4),o.Ac(10,u,2,3,"div",0),o.Ac(11,b,2,2,"div",5),o.Ac(12,d,7,1,"div",5),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&e){const e=o.gc();o.Eb(6),o.mc("ngIf",e.lectureMaterial.title),o.Eb(4),o.mc("ngIf","PDF"===e.lectureMaterial.fileType),o.Eb(1),o.mc("ngIf","IMAGE"===e.lectureMaterial.fileType),o.Eb(1),o.mc("ngIf","MP4"===e.lectureMaterial.fileType)}}const f=[{path:"",component:(()=>{class e{constructor(e,t,i,r){this.lectureMaterialService=e,this.toastrService=t,this.router=i,this.route=r}ngOnInit(){if(this.loading=!0,this.lectureMaterialId=this.lectureMaterialService.getLectureMaterialId(),!this.lectureMaterialId)return this.showToastr("top-right","danger","Invalid Lecture Material Id"),void this.back();this.lectureMaterialService.getLectureMaterialData().subscribe(e=>{e?(this.lectureMaterial=e,this.loading=!1):this.back()})}back(){this.loading=!0,this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,i){this.toastrService.show(t,i,{position:e,status:t})}ngOnDestroy(){this.lectureMaterialService.deleteLectureMaterialId(),this.lectureMaterialService.deleteLectureMaterialData()}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(n.a),o.Qb(c.xb),o.Qb(l.c),o.Qb(l.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["ngx-view-study-material"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],["nbButton","","size","tiny","status","warning",1,"float-right",3,"click"],[1,"col-12"],["class","text-center",4,"ngIf"],["loading","lazy",3,"src","render-text","original-size"],[1,"text-center"],["loading","lazy","width","80%","height","auto",3,"src","alt"],[1,"col-md-10","col-12","mx-auto"],["disablePictureInPicture","","id","video","name","video","oncontextmenu","return false;","width","100%","loading","lazy","controls","","controlsList","nodownload",1,"video"],["videoPlayer",""],["type","video/mp4",3,"src"]],template:function(e,t){1&e&&o.Ac(0,h,13,4,"nb-card",0),2&e&&o.mc("ngIf",!t.loading)},directives:[a.n,c.x,c.z,c.u,c.w,r.a],pipes:[a.v],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>i.e(0).then(i.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let g=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[l.g.forChild(f)],l.g]}),e})();i.d(t,"ViewStudyMaterialModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[a.c,g,c.A,c.v,r.b]]}),e})()}}]);