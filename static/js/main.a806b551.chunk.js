(this.webpackJsonpcardsapp=this.webpackJsonpcardsapp||[]).push([[0],{106:function(e,t,a){e.exports={navlink:"RecoveryPassword_navlink__2li2B",icon:"RecoveryPassword_icon__I20tP"}},130:function(e,t,a){e.exports={navlink:"SignUp_navlink__2-f5j"}},131:function(e,t,a){e.exports={loadingStyle:"LoadingLine_loadingStyle__1uG-p"}},16:function(e,t,a){e.exports={background:"commonStyles_background__20Fo_",blockContainer:"commonStyles_blockContainer__3gIFf",form:"commonStyles_form__nev2b",text:"commonStyles_text__lIUVT",formControl:"commonStyles_formControl__35-EK",button:"commonStyles_button__1-WTl",buttonBlock:"commonStyles_buttonBlock__jqV0Y"}},161:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);a(0);var r=a(20),n=a.n(r),s=(a(161),a(25)),c=a(2);var i=function(){return Object(c.jsx)("div",{children:"Error404"})},o=a(15),l=a(271),d=a(265),j=a(267),b=a(268),u=a(273),m=a(253),O=a(262),h=a(274),p=a(52),x=a(18),f=function(e){return{type:"APP/SET-STATUS",statusRequest:e}},v=function(e){return{type:"APP/SET-ERROR",error:e}},g={status:0,error:null},w=a(127),S=a.n(w).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),P=function(e){var t={email:e,from:"test-front-admin <romanxeo@gmail.com>",message:"<div style=\"background-color: #a3c486; padding: 10px\">\n                        password recovery link: \n                        <a href='http://localhost:3000/#/SetNewPassword/$token$'>\n                        link local</a>\n                        <a href='https://romanxeo.github.io/cardsapp/#/SetNewPassword/$token$'>\n                        link gh-pages</a></div>"};return S.post("auth/forgot",t)},y=function(e){return S.post("/auth/login",e)},N=function(e,t){var a={password:e,resetPasswordToken:t};return S.post("auth/set-new-password",a)},E=function(e,t){var a={email:e,password:t};return S.post("auth/register",a)},_=function(){return S.post("auth/me")},k=function(){return S.delete("auth/me")},R={name:"",avatar:""},T="profile/SET-USER-DATA",C=function(e,t){return{type:T,name:e,avatar:t}},D={isLoggedIn:!1},L=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},I=function(){var e=Object(x.b)(),t=Object(p.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):t.password="\u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",t},onSubmit:function(a){var r;e((r=a,function(e){e(f("loading")),y(r).then((function(t){e(L(!0)),e(f("idle")),e(C(t.data.name,t.data.avatar?t.data.avatar:""))})).catch((function(t){e(f("idle"))}))})),t.resetForm()}});return Object(x.c)((function(e){return e.LogIn.isLoggedIn}))?Object(c.jsx)(s.a,{to:"/profile"}):Object(c.jsx)(l.a,{container:!0,justifyContent:"center",children:Object(c.jsx)(l.a,{item:!0,justifyContent:"center",children:Object(c.jsxs)(j.a,{children:[Object(c.jsxs)(m.a,{children:[Object(c.jsxs)("p",{children:["To log in get registered",Object(c.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(c.jsx)("p",{children:"or use common test account credentials:"}),Object(c.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(c.jsx)("p",{children:"Password: free"})]}),Object(c.jsx)("form",{onSubmit:t.handleSubmit,children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(O.a,Object(o.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(c.jsx)(O.a,Object(o.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(c.jsx)(b.a,Object(o.a)(Object(o.a)({label:"Remember me",control:Object(c.jsx)(d.a,{})},t.getFieldProps("rememberMe")),{},{checked:t.values.rememberMe})),Object(c.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},A=a(16),U=a.n(A),B=a(263),F=a(261),W=a(275),z=a(259),H=function(e){return{type:"SET-NEW-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},M={completed:!1,buttonDisabled:!1},V=function(){var e=Object(x.c)((function(e){return e.setNewPassword.completed})),t=Object(x.c)((function(e){return e.setNewPassword.buttonDisabled})),a=Object(s.h)().token,r=Object(x.b)(),n=Object(p.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,n;r((t=e.password,n=a,function(e){e(H(!0)),e(f("loading")),N(t,n).then((function(t){e(H(!1)),e(f("idle")),e({type:"SET-NEW-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){e(v("ERROR")),e(H(!1)),e(f("idle"))}))}))}});return e?Object(c.jsx)(s.a,{to:"/login"}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Create new password"}),Object(c.jsx)(W.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:n.handleSubmit,className:U.a.form,children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(B.a,Object(o.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},n.getFieldProps("password"))),Object(c.jsx)("div",{style:{height:"20px"},children:n.touched.password&&n.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.password})}),Object(c.jsx)(B.a,Object(o.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},n.getFieldProps("confirmPassword"))),Object(c.jsx)("div",{style:{height:"20px"},children:n.touched.confirmPassword&&n.errors.confirmPassword&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.confirmPassword})}),Object(c.jsx)("p",{children:"Create new password and we will send you further instructions to E-mail"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(F.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Create new password"})})]})})})]})})},Z=a(106),G=a.n(Z),Q=a.p+"static/media/iconEmail.f254994b.png",$=a(36),q=function(e){return{type:"RECOVERY-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},J={completed:!1,buttonDisabled:!1};var Y=function(){var e=Object(x.c)((function(e){return e.RecoveryPassword.completed})),t=Object(x.c)((function(e){return e.RecoveryPassword.buttonDisabled})),a=Object(x.b)(),r=Object(p.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;a((t=e.email,function(e){e(q(!0)),e(f("loading")),P(t).then((function(t){e(q(!1)),e(f("idle")),e({type:"RECOVERY-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){e(v("E-mail not found")),e(q(!1)),e(f("idle"))}))})),r.resetForm()}});return e?Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsx)("div",{className:U.a.blockContainer,children:Object(c.jsxs)("div",{className:U.a.form,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("img",{src:Q,className:G.a.icon}),Object(c.jsx)("h3",{className:U.a.text,children:"Check E-mail"}),Object(c.jsx)("p",{className:U.a.text,children:"We have sent instructions to your E-mail how to recover your password"})]})})}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Forgot your password?"}),Object(c.jsx)(j.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:r.handleSubmit,className:U.a.form,children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(O.a,Object(o.a)({variant:"outlined",size:"small",label:"E-mail",margin:"normal"},r.getFieldProps("email"))),Object(c.jsx)("div",{style:{height:"20px"},children:r.touched.email&&r.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:r.errors.email})}),Object(c.jsx)("p",{children:"Enter your e-mail address and we will send you further instructions"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(h.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Send instructions"})}),Object(c.jsx)("p",{children:"Did you remember your password?"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)("nav",{children:Object(c.jsx)($.b,{className:G.a.navlink,to:"/login",children:"Try logging in"})})})]})})})]})})},X=a(130),K=a.n(X),ee=function(e){return{type:"SIGN-UP/BUTTON-DISABLED",buttonDisabled:e}},te={completed:!1,buttonDisabled:!1},ae=function(){var e=Object(x.c)((function(e){return e.SignUp.completed})),t=Object(x.c)((function(e){return e.SignUp.buttonDisabled})),a=Object(x.b)(),r=Object(p.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,r;a((t=e.email,r=e.password,function(e){e(ee(!0)),e(f("loading")),E(t,r).then((function(t){e(ee(!1)),e(f("idle")),e({type:"SIGN-UP/COMPLETED-REQUEST",completed:!0})})).catch((function(t){e(v("unknown error")),e(ee(!1)),e(f("idle"))}))}))}});return e?Object(c.jsx)(s.a,{to:"/login"}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Sign Up"}),Object(c.jsx)(W.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:r.handleSubmit,className:U.a.form,children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(B.a,Object(o.a)({variant:"outlined",size:"small",label:"email",margin:"normal"},r.getFieldProps("email"))),Object(c.jsx)("div",{style:{height:"20px"},children:r.touched.email&&r.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:r.errors.email})}),Object(c.jsx)(B.a,Object(o.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},r.getFieldProps("password"))),Object(c.jsx)("div",{style:{height:"20px"},children:r.touched.password&&r.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:r.errors.password})}),Object(c.jsx)(B.a,Object(o.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},r.getFieldProps("confirmPassword"))),Object(c.jsx)("div",{style:{height:"20px"},children:r.touched.confirmPassword&&r.errors.confirmPassword&&Object(c.jsx)("div",{style:{color:"red"},children:r.errors.confirmPassword})}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(F.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Register"})}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)("nav",{children:Object(c.jsx)($.b,{className:K.a.navlink,to:"/login",children:"Login"})})})]})})})]})})},re=a(131),ne=a.n(re),se=a(276),ce=function(){var e=Object(x.c)((function(e){return e.app.status}));return Object(c.jsx)("div",{className:ne.a.loadingStyle,children:0!==e&&Object(c.jsx)(se.a,{color:"secondary"})})},ie=a(272),oe=a(266);function le(e){return Object(c.jsx)(oe.a,Object(o.a)({elevation:6,variant:"filled"},e))}function de(){var e=Object(x.c)((function(e){return e.app.error})),t=Object(x.b)(),a=function(e,a){"clickaway"!==a&&t(v(null))};return Object(c.jsx)(ie.a,{open:null!==e,autoHideDuration:6e3,onClose:a,children:Object(c.jsx)(le,{onClose:a,severity:"error",children:e})})}var je=function(){return Object(c.jsx)("div",{children:"Edit profile"})},be=a(48),ue=a.n(be);var me=function(){var e=Object(x.c)((function(e){return e.LogIn.isLoggedIn})),t=Object(x.b)(),a=Object(s.g)();return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:ue.a.headerBlock,children:Object(c.jsxs)("nav",{className:ue.a.nav,children:[!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/login",activeClassName:ue.a.activeLink,children:"Login"})}),!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/SignUp",activeClassName:ue.a.activeLink,children:"SignUp"})}),!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/RecoveryPassword",activeClassName:ue.a.activeLink,children:"Recovery password"})}),e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)(F.a,{variant:"contained",color:"primary",size:"small",onClick:function(){t((function(e){e(f("loading")),k().then((function(t){e(L(!1)),e(f("idle")),e(C("",""))})).catch((function(t){e(f("idle")),e(v("some error"))}))})),t(L(!1)),a.push("/login")},children:"Log out"})})]})})})},Oe=a(72),he=a.n(Oe);var pe=function(e){return Object(c.jsx)("div",{className:he.a.background,children:Object(c.jsxs)("div",{className:he.a.blockContainer,children:[Object(c.jsx)("div",{className:he.a.imgContainer,children:Object(c.jsx)("img",{src:e.avatar,alt:e.name})}),Object(c.jsx)("div",{className:he.a.text,children:e.name}),Object(c.jsx)("div",{className:he.a.button,children:Object(c.jsx)(F.a,{variant:"contained",color:"primary",size:"small",onClick:e.onClickHandler,children:"Edit profile"})})]})})};var xe=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.Profile.name})),a=Object(x.c)((function(e){return e.Profile.avatar})),r=Object(x.c)((function(e){return e.LogIn.isLoggedIn})),n=Object(s.g)();if(!r){if(e((function(e){e(f("loading")),_().then((function(t){e(C(t.data.name,t.data.avatar?t.data.avatar:"")),e(f("idle"))})).catch((function(t){e(f("idle"));var a=t.response?t.response.data.error:"some unknown error";e(v(a))}))})),!t)return Object(c.jsx)(s.a,{to:"/login"});e(L(!0))}return Object(c.jsx)(pe,{name:t,avatar:a,onClickHandler:function(){n.push("/EditProfile")}})},fe=a(94),ve=a.n(fe);var ge=function(){return Object(c.jsxs)("div",{className:ve.a.background,children:[Object(c.jsx)("h1",{className:ve.a.test,children:"Hi! We glad to see you! "}),Object(c.jsx)("h2",{className:ve.a.test,children:" This is application for learning with cards. "})]})};var we=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(me,{}),Object(c.jsx)(ce,{}),Object(c.jsxs)(s.d,{children:[Object(c.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(ge,{})}}),Object(c.jsx)(s.b,{path:"/SetNewPassword/:token",render:function(){return Object(c.jsx)(V,{})}}),Object(c.jsx)(s.b,{path:"/Error404",render:function(){return Object(c.jsx)(i,{})}}),Object(c.jsx)(s.b,{path:"/login",render:function(){return Object(c.jsx)(I,{})}}),Object(c.jsx)(s.b,{path:"/Profile",render:function(){return Object(c.jsx)(xe,{})}}),Object(c.jsx)(s.b,{path:"/RecoveryPassword",render:function(){return Object(c.jsx)(Y,{})}}),Object(c.jsx)(s.b,{path:"/SignUp",render:function(){return Object(c.jsx)(ae,{})}}),Object(c.jsx)(s.b,{path:"/EditProfile",render:function(){return Object(c.jsx)(je,{})}}),Object(c.jsx)(s.a,{from:"*",to:"/error404"})]}),Object(c.jsx)(de,{})]})},Se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,279)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},Pe=a(95),ye=a(132),Ne=Object(Pe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":var a=Object(o.a)({},e);return"loading"===t.statusRequest?a.status++:a.status--,a;case"APP/SET-ERROR":return Object(o.a)(Object(o.a)({},e),{},{error:t.error});default:return e}},setNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NEW-PASSWORD/BUTTON-DISABLED":return Object(o.a)(Object(o.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SET-NEW-PASSWORD/COMPLETED-REQUEST":return Object(o.a)(Object(o.a)({},e),{},{completed:t.completed});default:return e}},LogIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:t.value});default:return e}},Profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(o.a)(Object(o.a)({},e),{},{name:t.name,avatar:t.avatar});default:return e}},RecoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY-PASSWORD/BUTTON-DISABLED":return Object(o.a)(Object(o.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"RECOVERY-PASSWORD/COMPLETED-REQUEST":return Object(o.a)(Object(o.a)({},e),{},{completed:t.completed});default:return e}},SignUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN-UP/BUTTON-DISABLED":return Object(o.a)(Object(o.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SIGN-UP/COMPLETED-REQUEST":return Object(o.a)(Object(o.a)({},e),{},{completed:t.completed});default:return e}}}),Ee=Object(Pe.c)(Ne,Object(Pe.a)(ye.a));window.store=Ee,n.a.render(Object(c.jsx)(x.a,{store:Ee,children:Object(c.jsx)($.a,{children:Object(c.jsx)(we,{})})}),document.getElementById("root")),Se()},48:function(e,t,a){e.exports={headerBlock:"Haeder_headerBlock__2b7JJ",nav:"Haeder_nav__xQjmm",item:"Haeder_item__3CdaX",activeLink:"Haeder_activeLink__17v7Z"}},72:function(e,t,a){e.exports={background:"Profile_background__2NQ7O",blockContainer:"Profile_blockContainer__RHrsM",imgContainer:"Profile_imgContainer__3JzgA",text:"Profile_text__2HzNo",button:"Profile_button__28idB"}},94:function(e,t,a){e.exports={background:"StartPage_background__WCaXT",test:"StartPage_test__1Jj3R"}}},[[190,1,2]]]);
//# sourceMappingURL=main.a806b551.chunk.js.map