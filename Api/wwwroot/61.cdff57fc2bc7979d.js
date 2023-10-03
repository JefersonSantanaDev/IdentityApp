"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[61],{9061:(Ze,w,g)=>{g.r(w),g.d(w,{AccountModule:()=>be});var d=g(6895),c=g(8184);function y(i,a,n,t,r,o,l){try{var m=i[o](l),u=m.value}catch(p){return void n(p)}m.done?a(u):Promise.resolve(u).then(t,r)}function x(i){return function(){var a=this,n=arguments;return new Promise(function(t,r){var o=i.apply(a,n);function l(u){y(o,t,r,l,m,"next",u)}function m(u){y(o,t,r,l,m,"throw",u)}l(void 0)})}}var e=g(1571),s=g(433),f=g(5698);class F{constructor(a,n,t){this.accessToken=a,this.userId=n,this.provider=t}}var C=g(1816),h=g(9479),v=g(5423),b=g(8860);const I=["googleButton"];function A(i,a){1&i&&(e.TgZ(0,"span",23),e._uU(1," Username is required "),e.qZA())}function S(i,a){1&i&&(e.TgZ(0,"span",23),e._uU(1," Password is required "),e.qZA())}function E(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.resendEmailConfirmationLink())}),e._uU(1," click here to resend email confirmation link in case you didn't receive it. "),e.qZA()}}function B(i,a){if(1&i&&(e.TgZ(0,"div",24),e._UZ(1,"app-validation-messages",25),e.YNc(2,E,2,0,"a",26),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("errorMessages",n.errorMessages),e.xp6(1),e.Q6J("ngIf",n.errorMessages[0].includes("Please confirm your email."))}}let J=(()=>{var i;class a{constructor(t,r,o,l,m,u,p){this.accountService=t,this.formBuilder=r,this.router=o,this.activatedRoute=l,this.sharedService=m,this._renderer2=u,this._document=p,this.googleButton=new e.SBq({}),this.loginForm=new s.cw({}),this.submitted=!1,this.errorMessages=[],this.returnUrl=null,this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:_=>{_?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:Z=>{Z&&(this.returnUrl=Z.get("returnUrl"))}})}})}ngOnInit(){this.initiazeGoogleButton(),this.initializeForm()}ngAfterViewInit(){const t=this._renderer2.createElement("script");t.src="https://accounts.google.com/gsi/client",t.async="true",t.defer="true",this._renderer2.appendChild(this._document.body,t)}initializeForm(){this.loginForm=this.formBuilder.group({userName:["",s.kI.required],password:["",s.kI.required]})}login(){this.submitted=!0,this.errorMessages=[],this.loginForm.valid&&this.accountService.login(this.loginForm.value).subscribe({next:t=>{this.router.navigateByUrl(this.returnUrl?this.returnUrl:"/")},error:t=>{t.error.errors?this.errorMessages=t.error.errors:this.errorMessages.push(t.error)}})}loginWithFacebook(){var t=this;FB.login(function(){var r=x(function*(o){o.authResponse?t.accountService.loginWithThirdParty(new F(o.authResponse.accessToken,o.authResponse.userId,"facebook")).subscribe({next:()=>{t.router.navigateByUrl(t.returnUrl?t.returnUrl:"/")},error:u=>{t.sharedService.showNotification(!1,"Failed",u.error)}}):t.sharedService.showNotification(!1,"Failed","Unable to login with your facebook")});return function(o){return r.apply(this,arguments)}}())}resendEmailConfirmationLink(){this.router.navigateByUrl("/account/send-email/resend-email-confirmation-link")}initiazeGoogleButton(){window.onGoogleLibraryLoad=()=>{google.accounts.id.initialize({client_id:"562897944636-bd3fdb048g2ldf164sfcpfoar1rfu3b7.apps.googleusercontent.com",callback:this.googleCallBack.bind(this),auto_select:!1,cancel_on_tap_outside:!0}),google.accounts.id.renderButton(this.googleButton.nativeElement,{size:"medium",shape:"rectangular",text:"signin_with",logo_alignment:"center"})}}googleCallBack(t){var r=this;return x(function*(){const o=(0,C.Z)(t.credential);r.accountService.loginWithThirdParty(new F(t.credential,o.sub,"google")).subscribe({next:l=>{r.router.navigateByUrl(r.returnUrl?r.returnUrl:"/")},error:l=>{r.sharedService.showNotification(!1,"Failed",l.error)}})})()}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(s.qu),e.Y36(c.F0),e.Y36(c.gz),e.Y36(v.F),e.Y36(e.Qsj),e.Y36(d.K0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login"]],viewQuery:function(t,r){if(1&t&&e.Gf(I,7),2&t){let o;e.iGM(o=e.CRH())&&(r.googleButton=o.first)}},decls:37,vars:8,consts:[[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"form-floating","mb-3"],["formControlName","userName","type","text","placeholder","Username (your email address)",1,"form-control"],["for","userName"],["class","text-danger",4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],["for","password"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],["routerLink","/account/send-email/forgot-username-or-password",1,"mt-4","text-center"],[1,"btn","btn-link"],[1,"row","d-flex","justify-content-center","mt-3"],[1,"col-4"],[1,"col-4","text-center"],[1,"d-flex","justify-content-between","my-3"],["googleButton",""],[1,"btn","btn-primary","btn-sm",2,"width","180px",3,"click"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"],["class","btn btn-link",3,"click",4,"ngIf"],[1,"btn","btn-link",3,"click"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"main",2)(3,"form",3),e.NdJ("ngSubmit",function(){return r.login()}),e.TgZ(4,"div",4)(5,"h3",5),e._uU(6,"Login"),e.qZA()(),e.TgZ(7,"div",6),e._UZ(8,"input",7),e.TgZ(9,"label",8),e._uU(10,"Username (your email address)"),e.qZA(),e.YNc(11,A,2,0,"span",9),e.qZA(),e.TgZ(12,"div",6),e._UZ(13,"input",10),e.TgZ(14,"label",11),e._uU(15,"Password"),e.qZA(),e.YNc(16,S,2,0,"span",9),e.qZA(),e.YNc(17,B,3,2,"div",12),e.TgZ(18,"div",13)(19,"button",14),e._uU(20,"Log in"),e.qZA()()(),e.TgZ(21,"div",15)(22,"a",16)(23,"h6"),e._uU(24,"Forgot username or password"),e.qZA()()(),e.TgZ(25,"div",17)(26,"div",18),e._UZ(27,"hr"),e.qZA(),e.TgZ(28,"div",19),e._uU(29,"OR Login using"),e.qZA(),e.TgZ(30,"div",18),e._UZ(31,"hr"),e.qZA()(),e.TgZ(32,"div",20),e._UZ(33,"div",null,21),e.TgZ(35,"button",22),e.NdJ("click",function(){return r.loginWithFacebook()}),e._uU(36," Facebook "),e.qZA()()()()()),2&t){let o,l,m,u;e.xp6(3),e.Q6J("formGroup",r.loginForm),e.xp6(5),e.ekj("is-invalid",r.submitted&&(null==(o=r.loginForm.get("userName"))?null:o.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(l=r.loginForm.get("userName"))?null:l.hasError("required"))),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(m=r.loginForm.get("userName"))?null:m.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(u=r.loginForm.get("password"))?null:u.hasError("required"))),e.xp6(1),e.Q6J("ngIf",r.errorMessages.length>0)}},dependencies:[d.O5,c.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.s]}),a})();const Y=["googleButton"];function P(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," First name is required "),e.qZA())}function M(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," First name must be at least 3, and maximum 15 characters "),e.qZA())}function R(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Last name is required "),e.qZA())}function L(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Last name must be at least 3, and maximum 15 characters "),e.qZA())}function Q(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Email is required "),e.qZA())}function j(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Invalid email address "),e.qZA())}function z(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Password is required "),e.qZA())}function G(i,a){1&i&&(e.TgZ(0,"span",6),e._uU(1," Password must be at least 6, and maximum 15 characters "),e.qZA())}function W(i,a){if(1&i&&(e.TgZ(0,"div",26),e._UZ(1,"app-validation-messages",27),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("errorMessages",n.errorMessages)}}let O=(()=>{var i;class a{constructor(t,r,o,l,m,u){this.accountService=t,this.sharedService=r,this.formBuilder=o,this.router=l,this._renderer2=m,this._document=u,this.googleButton=new e.SBq({}),this.registerform=new s.cw({}),this.submitted=!1,this.errorMessages=[],this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:p=>{p&&this.router.navigateByUrl("/")}})}ngOnInit(){this.initiazeGoogleButton(),this.initializeForm()}ngAfterViewInit(){const t=this._renderer2.createElement("script");t.src="https://accounts.google.com/gsi/client",t.async="true",t.defer="true",this._renderer2.appendChild(this._document.body,t)}initializeForm(){this.registerForm=this.formBuilder.group({firstName:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(15)]],lastName:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(15)]],email:["",[s.kI.required,s.kI.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],password:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(15)]]})}register(){this.submitted=!0,this.errorMessages=[],this.registerForm.valid&&this.accountService.register(this.registerForm.value).subscribe({next:t=>{this.sharedService.showNotification(!0,t.value.title,t.value.message),this.router.navigateByUrl("/account/login")},error:t=>{t.error.errors?this.errorMessages=t.error.errors:this.errorMessages.push(t.error)}})}registerWithFacebook(){var t=this;FB.login(function(){var r=x(function*(o){o.authResponse?t.router.navigateByUrl(`/account/register/third-party/facebook?access_token=${o.authResponse.accessToken}&userId=${o.authResponse.userId}`):t.sharedService.showNotification(!1,"Failed","Unable to register with your facebook")});return function(o){return r.apply(this,arguments)}}())}initiazeGoogleButton(){window.onGoogleLibraryLoad=()=>{google.accounts.id.initialize({client_id:"562897944636-bd3fdb048g2ldf164sfcpfoar1rfu3b7.apps.googleusercontent.com",callback:this.googleCallBack.bind(this),auto_select:!1,cancel_on_tap_outside:!0}),google.accounts.id.renderButton(this.googleButton.nativeElement,{size:"medium",shape:"rectangular",text:"signup_with",logo_alignment:"center"})}}googleCallBack(t){var r=this;return x(function*(){const o=(0,C.Z)(t.credential);r.router.navigateByUrl(`/account/register/third-party/google?access_token=${t.credential}&userId=${o.sub}`)})()}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(v.F),e.Y36(s.qu),e.Y36(c.F0),e.Y36(e.Qsj),e.Y36(d.K0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-register"]],viewQuery:function(t,r){if(1&t&&e.Gf(Y,7),2&t){let o;e.iGM(o=e.CRH())&&(r.googleButton=o.first)}},decls:49,vars:18,consts:[[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"text-danger"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last name",1,"form-control"],["for","lastName"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],["for","password"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],[1,"row","d-flex","justify-content-center","mt-3"],[1,"col-4"],[1,"col-4","text-center"],[1,"d-flex","justify-content-between","my-3"],["googleButton",""],[1,"btn","btn-primary","btn-sm",2,"width","180px",3,"click"],[1,"form-floatin"],[3,"errorMessages"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"main",2)(3,"form",3),e.NdJ("ngSubmit",function(){return r.register()}),e.TgZ(4,"div",4)(5,"h3",5),e._uU(6," Let's Get Started to "),e.TgZ(7,"span",6),e._uU(8,"Play"),e.qZA()()(),e.TgZ(9,"div",7),e._UZ(10,"input",8),e.TgZ(11,"label",9),e._uU(12,"First name"),e.qZA(),e.YNc(13,P,2,0,"span",10),e.YNc(14,M,2,0,"span",10),e.qZA(),e.TgZ(15,"div",7),e._UZ(16,"input",11),e.TgZ(17,"label",12),e._uU(18,"Last name"),e.qZA(),e.YNc(19,R,2,0,"span",10),e.YNc(20,L,2,0,"span",10),e.qZA(),e.TgZ(21,"div",7),e._UZ(22,"input",13),e.TgZ(23,"label",14),e._uU(24,"Email"),e.qZA(),e.YNc(25,Q,2,0,"span",10),e.YNc(26,j,2,0,"span",10),e.qZA(),e.TgZ(27,"div",7),e._UZ(28,"input",15),e.TgZ(29,"label",16),e._uU(30,"Password"),e.qZA(),e.YNc(31,z,2,0,"span",10),e.YNc(32,G,2,0,"span",10),e.qZA(),e.YNc(33,W,2,1,"div",17),e.TgZ(34,"div",18)(35,"button",19),e._uU(36," Create Account "),e.qZA()()(),e.TgZ(37,"div",20)(38,"div",21),e._UZ(39,"hr"),e.qZA(),e.TgZ(40,"div",22),e._uU(41,"OR Sign up using"),e.qZA(),e.TgZ(42,"div",21),e._UZ(43,"hr"),e.qZA()(),e.TgZ(44,"div",23),e._UZ(45,"div",null,24),e.TgZ(47,"button",25),e.NdJ("click",function(){return r.registerWithFacebook()}),e._uU(48," Facebook "),e.qZA()()()()()),2&t){let o,l,m,u,p,_,Z,U,k,q,N,T;e.xp6(3),e.Q6J("formGroup",r.registerForm),e.xp6(7),e.ekj("is-invalid",r.submitted&&(null==(o=r.registerForm.get("firstName"))?null:o.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(l=r.registerForm.get("firstName"))?null:l.hasError("required"))),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(m=r.registerForm.get("firstName"))?null:m.hasError("minlength"))||(null==(m=r.registerForm.get("firstName"))?null:m.hasError("maxlength"))),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(u=r.registerForm.get("lastName"))?null:u.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(p=r.registerForm.get("lastName"))?null:p.hasError("required"))),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(_=r.registerForm.get("lastName"))?null:_.hasError("minlength"))||(null==(_=r.registerForm.get("lastName"))?null:_.hasError("maxlength"))),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(Z=r.registerForm.get("email"))?null:Z.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(U=r.registerForm.get("email"))?null:U.hasError("required"))),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(k=r.registerForm.get("email"))?null:k.hasError("pattern"))),e.xp6(2),e.ekj("is-invalid",r.submitted&&(null==(q=r.registerForm.get("password"))?null:q.errors)),e.xp6(3),e.Q6J("ngIf",r.submitted&&(null==(N=r.registerForm.get("password"))?null:N.hasError("required"))),e.xp6(1),e.Q6J("ngIf",r.submitted&&(null==(T=r.registerForm.get("password"))?null:T.hasError("minlength"))||(null==(T=r.registerForm.get("password"))?null:T.hasError("maxlength"))),e.xp6(1),e.Q6J("ngIf",r.errorMessages.length>0)}},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.s]}),a})();function $(i,a){1&i&&(e.TgZ(0,"div",1)(1,"a",2),e._uU(2," Login "),e.qZA()())}function H(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",1)(1,"a",3),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.resendEmailConfirmationLink())}),e._uU(2," Click here to resend email confirmation link "),e.qZA()()}}let K=(()=>{var i;class a{constructor(t,r,o,l){this.accountService=t,this.sharedService=r,this.router=o,this.activatedRoute=l,this.success=!0}ngOnInit(){this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:t=>{t?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:r=>{const o={token:r.get("token"),email:r.get("email")};this.accountService.confirmEmail(o).subscribe({next:l=>{this.sharedService.showNotification(!0,l.value.title,l.value.message)},error:l=>{this.success=!1,this.sharedService.showNotification(!1,"Failed",l.error)}})}})}})}resendEmailConfirmationLink(){this.router.navigateByUrl("/account/send-email/resend-email-confirmation-link")}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(v.F),e.Y36(c.F0),e.Y36(c.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-confirm-email"]],decls:2,vars:2,consts:[["class","container text-center",4,"ngIf"],[1,"container","text-center"],["routerLink","/account/login",1,"btn","btn-primary"],[1,"btn","btn-link",3,"click"]],template:function(t,r){1&t&&(e.YNc(0,$,3,0,"div",0),e.YNc(1,H,3,0,"div",0)),2&t&&(e.Q6J("ngIf",r.success),e.xp6(1),e.Q6J("ngIf",!r.success))},dependencies:[d.O5,c.rH]}),a})();function X(i,a){1&i&&(e.TgZ(0,"span"),e._uU(1," Resend email confirmation link "),e.qZA())}function V(i,a){1&i&&(e.TgZ(0,"span"),e._uU(1," Retrieve your username "),e.qZA())}function D(i,a){1&i&&(e.TgZ(0,"span",18),e._uU(1," Email is required "),e.qZA())}function ee(i,a){1&i&&(e.TgZ(0,"span",18),e._uU(1," Invalid email address "),e.qZA())}function te(i,a){if(1&i&&(e.TgZ(0,"div",19),e._UZ(1,"app-validation-messages",20),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("errorMessages",n.errorMessages)}}function re(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.sendEmail())}),e.TgZ(4,"div",5)(5,"h1",6),e.YNc(6,X,2,0,"span",7),e.YNc(7,V,2,0,"span",7),e.qZA()(),e.TgZ(8,"div",8),e._UZ(9,"input",9),e.TgZ(10,"label",10),e._uU(11,"Email"),e.qZA(),e.YNc(12,D,2,0,"span",11),e.YNc(13,ee,2,0,"span",11),e.qZA(),e.YNc(14,te,2,1,"div",12),e.TgZ(15,"div",13)(16,"div",14)(17,"div",15)(18,"button",16),e._uU(19," Send "),e.qZA()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"button",17),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.cancel())}),e._uU(23," Cancel "),e.qZA()()()()()()()()}if(2&i){const n=e.oxw();let t,r,o;e.xp6(3),e.Q6J("formGroup",n.emailForm),e.xp6(3),e.Q6J("ngIf",n.mode.includes("resend-email-confirmation-link")),e.xp6(1),e.Q6J("ngIf",n.mode.includes("forgot-username-or-password")),e.xp6(2),e.ekj("is-invalid",n.submitted&&(null==(t=n.emailForm.get("email"))?null:t.errors)),e.xp6(3),e.Q6J("ngIf",n.submitted&&(null==(r=n.emailForm.get("email"))?null:r.hasError("required"))),e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==(o=n.emailForm.get("email"))?null:o.hasError("pattern"))),e.xp6(1),e.Q6J("ngIf",n.errorMessages.length>0)}}let ie=(()=>{var i;class a{constructor(t,r,o,l,m){this.accountService=t,this.sharedService=r,this.formBuilder=o,this.router=l,this.activatedRoute=m,this.emailForm=new s.cw({}),this.submitted=!1,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:t=>{if(t)this.router.navigateByUrl("/");else{const r=this.activatedRoute.snapshot.paramMap.get("mode");r&&(this.mode=r,this.initializeForm())}}})}initializeForm(){this.emailForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]]})}sendEmail(){this.submitted=!0,this.errorMessages=[],this.emailForm.valid&&this.mode&&(this.mode.includes("resend-email-confirmation-link")?this.accountService.resendEmailConfirmationLink(this.emailForm.get("email")?.value).subscribe({next:t=>{this.sharedService.showNotification(!0,t.value.title,t.value.message),this.router.navigateByUrl("/account/login")},error:t=>{t.error.errors?this.errorMessages=t.error.errors:this.errorMessages.push(t.error)}}):this.mode.includes("forgot-username-or-password")&&this.accountService.forgotUsernameOrPassword(this.emailForm.get("email")?.value).subscribe({next:t=>{this.sharedService.showNotification(!0,t.value.title,t.value.message),this.router.navigateByUrl("/account/login")},error:t=>{t.error.errors?this.errorMessages=t.error.errors:this.errorMessages.push(t.error)}}))}cancel(){this.router.navigateByUrl("/account/login")}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(v.F),e.Y36(s.qu),e.Y36(c.F0),e.Y36(c.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-send-email"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",1,"form-signin",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[4,"ngIf"],[1,"form-floating","mb-3"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["class","text-danger",4,"ngIf"],["class","form-floatin",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-success"],["type","button",1,"btn","btn-block","btn-danger",3,"click"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(t,r){1&t&&e.YNc(0,re,24,8,"div",0),2&t&&e.Q6J("ngIf",r.mode)},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.s]}),a})();function ne(i,a){1&i&&(e.TgZ(0,"span",19),e._uU(1," New Password is required "),e.qZA())}function se(i,a){1&i&&(e.TgZ(0,"span",19),e._uU(1," New Password must be at least 6, and maximum 15 characters "),e.qZA())}function oe(i,a){if(1&i&&(e.TgZ(0,"div",20),e._UZ(1,"app-validation-messages",21),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("errorMessages",n.errorMessages)}}function ae(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.resetPassword())}),e.TgZ(4,"div",5)(5,"h1",6),e._uU(6,"Change your password"),e.qZA()(),e.TgZ(7,"div",7),e._UZ(8,"input",8),e.TgZ(9,"label",9),e._uU(10,"Email"),e.qZA()(),e.TgZ(11,"div",7),e._UZ(12,"input",10),e.TgZ(13,"label",11),e._uU(14,"New Password"),e.qZA(),e.YNc(15,ne,2,0,"span",12),e.YNc(16,se,2,0,"span",12),e.qZA(),e.YNc(17,oe,2,1,"div",13),e.TgZ(18,"div",14)(19,"div",15)(20,"div",16)(21,"button",17),e._uU(22," Change Password "),e.qZA()()(),e.TgZ(23,"div",15)(24,"div",16)(25,"button",18),e._uU(26," Cancel "),e.qZA()()()()()()()()}if(2&i){const n=e.oxw();let t,r,o;e.xp6(3),e.Q6J("formGroup",n.resetPasswordForm),e.xp6(9),e.ekj("is-invalid",n.submitted&&(null==(t=n.resetPasswordForm.get("newPassword"))?null:t.errors)),e.xp6(3),e.Q6J("ngIf",n.submitted&&(null==(r=n.resetPasswordForm.get("newPassword"))?null:r.hasError("required"))),e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==(o=n.resetPasswordForm.get("newPassword"))?null:o.hasError("minlength"))||(null==(o=n.resetPasswordForm.get("newpassword"))?null:o.hasError("maxlength"))),e.xp6(1),e.Q6J("ngIf",n.errorMessages.length>0)}}let le=(()=>{var i;class a{constructor(t,r,o,l,m){this.accountService=t,this.sharedService=r,this.formBuilder=o,this.router=l,this.activatedRoute=m,this.resetPasswordForm=new s.cw({}),this.submitted=!1,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:t=>{t?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:r=>{this.token=r.get("token"),this.email=r.get("email"),this.token&&this.email?this.initializeForm(this.email):this.router.navigateByUrl("/account/login")}})}})}initializeForm(t){this.resetPasswordForm=this.formBuilder.group({email:[{value:t,disabled:!0}],newPassword:["",[s.kI.required,s.kI.minLength(6),s.kI.maxLength(15)]]})}resetPassword(){if(this.submitted=!0,this.errorMessages=[],this.resetPasswordForm.valid&&this.email&&this.token){const t={token:this.token,email:this.email,newPassword:this.resetPasswordForm.get("newPassword")?.value};this.accountService.resetPassword(t).subscribe({next:r=>{this.sharedService.showNotification(!0,r.value.title,r.value.message),this.router.navigateByUrl("/account/login")},error:r=>{r.error.errors?this.errorMessages=r.error.errors:this.errorMessages.push(r.error)}})}}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(v.F),e.Y36(s.qu),e.Y36(c.F0),e.Y36(c.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reset-password"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",1,"form-signin",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"form-floating","mb-3"],["formControlName","email","type","text","placeholder","Email",1,"form-control"],["for","email"],["formControlName","newPassword","type","password","placeholder","New Password",1,"form-control"],["for","newPassword"],["class","text-danger",4,"ngIf"],["class","form-floatin",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"d-grid"],["type","submit",1,"btn","btn-block","btn-success"],["type","button","routerLink","/account/login",1,"btn","btn-block","btn-danger"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(t,r){1&t&&e.YNc(0,ae,27,6,"div",0),2&t&&e.Q6J("ngIf",r.token&&r.email)},dependencies:[d.O5,c.rH,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.s]}),a})();class me{constructor(a,n,t,r,o){this.firstName=a,this.lastName=n,this.userId=t,this.accessToken=r,this.provider=o}}function ue(i,a){1&i&&(e.TgZ(0,"span",17),e._uU(1," First name is required "),e.qZA())}function ce(i,a){1&i&&(e.TgZ(0,"span",17),e._uU(1," First name must be at least 3, and maximum 15 characters "),e.qZA())}function ge(i,a){1&i&&(e.TgZ(0,"span",17),e._uU(1," Last name is required "),e.qZA())}function de(i,a){1&i&&(e.TgZ(0,"span",17),e._uU(1," Last name must be at least 3, and maximum 15 characters "),e.qZA())}function pe(i,a){if(1&i&&(e.TgZ(0,"div",18),e._UZ(1,"app-validation-messages",19),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("errorMessages",n.errorMessages)}}function fe(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"main",3)(3,"form",4),e.NdJ("ngSubmit",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.register())}),e.TgZ(4,"div",5)(5,"h3",6),e._uU(6," Creating an account using your "),e.TgZ(7,"span",7),e._uU(8),e.ALo(9,"titlecase"),e.qZA()()(),e.TgZ(10,"div",8),e._UZ(11,"input",9),e.TgZ(12,"label",10),e._uU(13,"First name"),e.qZA(),e.YNc(14,ue,2,0,"span",11),e.YNc(15,ce,2,0,"span",11),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"input",12),e.TgZ(18,"label",13),e._uU(19,"Last name"),e.qZA(),e.YNc(20,ge,2,0,"span",11),e.YNc(21,de,2,0,"span",11),e.qZA(),e.YNc(22,pe,2,1,"div",14),e.TgZ(23,"div",15)(24,"button",16),e._uU(25," Create Account "),e.qZA()()()()()()}if(2&i){const n=e.oxw();let t,r,o,l,m,u;e.xp6(3),e.Q6J("formGroup",n.registerForm),e.xp6(5),e.Oqu(e.lcZ(9,11,n.provider)),e.xp6(3),e.ekj("is-invalid",n.submitted&&(null==(t=n.registerForm.get("firstName"))?null:t.errors)),e.xp6(3),e.Q6J("ngIf",n.submitted&&(null==(r=n.registerForm.get("firstName"))?null:r.hasError("required"))),e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==(o=n.registerForm.get("firstName"))?null:o.hasError("minlength"))||(null==(o=n.registerForm.get("firstName"))?null:o.hasError("maxlength"))),e.xp6(2),e.ekj("is-invalid",n.submitted&&(null==(l=n.registerForm.get("lastName"))?null:l.errors)),e.xp6(3),e.Q6J("ngIf",n.submitted&&(null==(m=n.registerForm.get("lastName"))?null:m.hasError("required"))),e.xp6(1),e.Q6J("ngIf",n.submitted&&(null==(u=n.registerForm.get("lastName"))?null:u.hasError("minlength"))||(null==(u=n.registerForm.get("lastName"))?null:u.hasError("maxlength"))),e.xp6(1),e.Q6J("ngIf",n.errorMessages.length>0)}}const he=[{path:"login",component:J},{path:"register",component:O},{path:"confirm-email",component:K},{path:"send-email/:mode",component:ie},{path:"reset-password",component:le},{path:"register/third-party/:provider",component:(()=>{var i;class a{constructor(t,r,o,l){this.accountService=t,this.router=r,this.activatedRoute=o,this.formBuilder=l,this.registerForm=new s.cw({}),this.submitted=!1,this.provider=null,this.access_token=null,this.userId=null,this.errorMessages=[]}ngOnInit(){this.accountService.user$.pipe((0,f.q)(1)).subscribe({next:t=>{t?this.router.navigateByUrl("/"):this.activatedRoute.queryParamMap.subscribe({next:r=>{this.provider=this.activatedRoute.snapshot.paramMap.get("provider"),this.access_token=r.get("access_token"),this.userId=r.get("userId"),this.provider&&this.access_token&&this.userId&&("facebook"===this.provider||"google"===this.provider)?this.initializeForm():this.router.navigateByUrl("/account/register")}})}})}initializeForm(){this.registerForm=this.formBuilder.group({firstName:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(15)]],lastName:["",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(15)]]})}register(){if(this.submitted=!0,this.errorMessages=[],this.registerForm.valid&&this.userId&&this.access_token&&this.provider){const t=this.registerForm.get("firstName")?.value,r=this.registerForm.get("lastName")?.value,o=new me(t,r,this.userId,this.access_token,this.provider);this.accountService.registerWithThirdParty(o).subscribe({next:l=>{this.router.navigateByUrl("/")},error:l=>{l.error.errors?this.errorMessages=l.error.errors:this.errorMessages.push(l.error)}})}}}return(i=a).\u0275fac=function(t){return new(t||i)(e.Y36(h.B),e.Y36(c.F0),e.Y36(c.gz),e.Y36(s.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-register-with-third-party"]],decls:1,vars:1,consts:[["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"col-12","col-lg-5"],[1,"form-signin"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3","font-weight-normal"],[1,"text-warning"],[1,"form-floating","mb-3"],["formControlName","firstName","type","text","placeholder","First name",1,"form-control"],["for","firstName"],["class","text-danger",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last name",1,"form-control"],["for","lastName"],["class","form-floatin",4,"ngIf"],[1,"d-grid","mt-4","px-1"],["type","submit",1,"btn","btn-lg","btn-info"],[1,"text-danger"],[1,"form-floatin"],[3,"errorMessages"]],template:function(t,r){1&t&&e.YNc(0,fe,26,13,"div",0),2&t&&e.Q6J("ngIf",r.provider&&r.access_token&&r.userId)},dependencies:[d.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,b.s,d.rS]}),a})()}];let _e=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(he),c.Bz]}),a})();var ve=g(4466);let be=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,_e,ve.m,s.UX]}),a})()}}]);