(this.webpackJsonpcardsapp=this.webpackJsonpcardsapp||[]).push([[0],{106:function(e,t,r){e.exports={navlink:"RecoveryPassword_navlink__2li2B",icon:"RecoveryPassword_icon__I20tP"}},130:function(e,t,r){e.exports={navlink:"SignUp_navlink__2-f5j"}},131:function(e,t,r){e.exports={loadingStyle:"LoadingLine_loadingStyle__1uG-p"}},16:function(e,t,r){e.exports={background:"commonStyles_background__20Fo_",blockContainer:"commonStyles_blockContainer__3gIFf",form:"commonStyles_form__nev2b",text:"commonStyles_text__lIUVT",formControl:"commonStyles_formControl__35-EK",button:"commonStyles_button__1-WTl",buttonBlock:"commonStyles_buttonBlock__jqV0Y"}},161:function(e,t,r){},190:function(e,t,r){"use strict";r.r(t);r(0);var a=r(20),n=r.n(a),s=(r(161),r(25)),c=r(2);var o=function(){return Object(c.jsx)("div",{children:"Error404"})},i=r(15),l=r(271),d=r(265),j=r(267),b=r(268),u=r(273),m=r(253),O=r(262),h=r(274),p=r(52),x=r(18),v=function(e){return{type:"APP/SET-STATUS",statusRequest:e}},f=function(e){return{type:"APP/SET-ERROR",error:e}},g={status:0,error:null},w=r(127),S=r.n(w).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),P=function(e){var t={email:e,from:"test-front-admin <romanxeo@gmail.com>",message:"<div style=\"background-color: #a3c486; padding: 10px\">\n                        password recovery link: \n                        <a href='http://localhost:3000/#/SetNewPassword/$token$'>\n                        link local</a>\n                        <a href='https://romanxeo.github.io/cardsapp/#/SetNewPassword/$token$'>\n                        link gh-pages</a></div>"};return S.post("auth/forgot",t)},y=function(e){return S.post("/auth/login",e)},N=function(e,t){var r={password:e,resetPasswordToken:t};return S.post("auth/set-new-password",r)},E=function(e,t){var r={email:e,password:t};return S.post("auth/register",r)},_=function(){return S.post("auth/me")},k=function(){return S.delete("auth/me")},T={name:"",avatar:""},C="profile/SET-USER-DATA",D=function(e,t){return{type:C,name:e,avatar:t}},R={isLoggedIn:!1},L=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},I=function(){var e=Object(x.b)(),t=Object(p.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):t.password="\u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",t},onSubmit:function(r){var a;e((a=r,function(e){e(v("loading")),y(a).then((function(t){e(L(!0)),e(v("idle")),e(D(t.data.name,t.data.avatar?t.data.avatar:""))})).catch((function(t){t.response&&t.response.data.error,e(v("idle"))}))})),t.resetForm()}});return Object(x.c)((function(e){return e.LogIn.isLoggedIn}))?Object(c.jsx)(s.a,{to:"/profile"}):Object(c.jsx)(l.a,{container:!0,justifyContent:"center",children:Object(c.jsx)(l.a,{item:!0,justifyContent:"center",children:Object(c.jsxs)(j.a,{children:[Object(c.jsxs)(m.a,{children:[Object(c.jsxs)("p",{children:["To log in get registered",Object(c.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(c.jsx)("p",{children:"or use common test account credentials:"}),Object(c.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(c.jsx)("p",{children:"Password: free"})]}),Object(c.jsx)("form",{onSubmit:t.handleSubmit,children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(O.a,Object(i.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(c.jsx)(O.a,Object(i.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(c.jsx)(b.a,Object(i.a)(Object(i.a)({label:"Remember me",control:Object(c.jsx)(d.a,{})},t.getFieldProps("rememberMe")),{},{checked:t.values.rememberMe})),Object(c.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},A=r(16),U=r.n(A),B=r(263),F=r(261),W=r(275),z=r(259),H=function(e){return{type:"SET-NEW-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},M={completed:!1,buttonDisabled:!1},V=function(){var e=Object(x.c)((function(e){return e.setNewPassword.completed})),t=Object(x.c)((function(e){return e.setNewPassword.buttonDisabled})),r=Object(s.h)().token,a=Object(x.b)(),n=Object(p.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,n;a((t=e.password,n=r,function(e){e(H(!0)),e(v("loading")),N(t,n).then((function(t){e(H(!1)),e(v("idle")),e({type:"SET-NEW-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var r=t.response?t.response.data.error:"some unknown error";e(f(r)),e(H(!1)),e(v("idle"))}))}))}});return e?Object(c.jsx)(s.a,{to:"/login"}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Create new password"}),Object(c.jsx)(W.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:n.handleSubmit,className:U.a.form,children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(B.a,Object(i.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},n.getFieldProps("password"))),Object(c.jsx)("div",{style:{height:"20px"},children:n.touched.password&&n.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.password})}),Object(c.jsx)(B.a,Object(i.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},n.getFieldProps("confirmPassword"))),Object(c.jsx)("div",{style:{height:"20px"},children:n.touched.confirmPassword&&n.errors.confirmPassword&&Object(c.jsx)("div",{style:{color:"red"},children:n.errors.confirmPassword})}),Object(c.jsx)("p",{children:"Create new password and we will send you further instructions to E-mail"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(F.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Create new password"})})]})})})]})})},Z=r(106),G=r.n(Z),Q=r.p+"static/media/iconEmail.f254994b.png",$=r(36),q=function(e){return{type:"RECOVERY-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},J={completed:!1,buttonDisabled:!1};var Y=function(){var e=Object(x.c)((function(e){return e.RecoveryPassword.completed})),t=Object(x.c)((function(e){return e.RecoveryPassword.buttonDisabled})),r=Object(x.b)(),a=Object(p.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;r((t=e.email,function(e){e(q(!0)),e(v("loading")),P(t).then((function(t){e(q(!1)),e(v("idle")),e({type:"RECOVERY-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var r=t.response?t.response.data.error:"some unknown error";e(f(r)),e(q(!1)),e(v("idle"))}))})),a.resetForm()}});return e?Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsx)("div",{className:U.a.blockContainer,children:Object(c.jsxs)("div",{className:U.a.form,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("img",{src:Q,className:G.a.icon}),Object(c.jsx)("h3",{className:U.a.text,children:"Check E-mail"}),Object(c.jsx)("p",{className:U.a.text,children:"We have sent instructions to your E-mail how to recover your password"})]})})}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Forgot your password?"}),Object(c.jsx)(j.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:a.handleSubmit,className:U.a.form,children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(O.a,Object(i.a)({variant:"outlined",size:"small",label:"E-mail",margin:"normal"},a.getFieldProps("email"))),Object(c.jsx)("div",{style:{height:"20px"},children:a.touched.email&&a.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:a.errors.email})}),Object(c.jsx)("p",{children:"Enter your e-mail address and we will send you further instructions"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(h.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Send instructions"})}),Object(c.jsx)("p",{children:"Did you remember your password?"}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)("nav",{children:Object(c.jsx)($.b,{className:G.a.navlink,to:"/login",children:"Try logging in"})})})]})})})]})})},X=r(130),K=r.n(X),ee=function(e){return{type:"SIGN-UP/BUTTON-DISABLED",buttonDisabled:e}},te={completed:!1,buttonDisabled:!1},re=function(){var e=Object(x.c)((function(e){return e.SignUp.completed})),t=Object(x.c)((function(e){return e.SignUp.buttonDisabled})),r=Object(x.b)(),a=Object(p.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,a;r((t=e.email,a=e.password,function(e){e(ee(!0)),e(v("loading")),E(t,a).then((function(t){e(ee(!1)),e(v("idle")),e({type:"SIGN-UP/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var r=t.response?t.response.data.error:"some unknown error";e(f(r)),e(ee(!1)),e(v("idle"))}))}))}});return e?Object(c.jsx)(s.a,{to:"/login"}):Object(c.jsx)("div",{className:U.a.background,children:Object(c.jsxs)("div",{className:U.a.blockContainer,children:[Object(c.jsx)("h2",{className:U.a.text,children:"It-incubator"}),Object(c.jsx)("h3",{className:U.a.text,children:"Sign Up"}),Object(c.jsx)(W.a,{className:U.a.formControl,children:Object(c.jsx)("form",{onSubmit:a.handleSubmit,className:U.a.form,children:Object(c.jsxs)(z.a,{children:[Object(c.jsx)(B.a,Object(i.a)({variant:"outlined",size:"small",label:"email",margin:"normal"},a.getFieldProps("email"))),Object(c.jsx)("div",{style:{height:"20px"},children:a.touched.email&&a.errors.email&&Object(c.jsx)("div",{style:{color:"red"},children:a.errors.email})}),Object(c.jsx)(B.a,Object(i.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},a.getFieldProps("password"))),Object(c.jsx)("div",{style:{height:"20px"},children:a.touched.password&&a.errors.password&&Object(c.jsx)("div",{style:{color:"red"},children:a.errors.password})}),Object(c.jsx)(B.a,Object(i.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},a.getFieldProps("confirmPassword"))),Object(c.jsx)("div",{style:{height:"20px"},children:a.touched.confirmPassword&&a.errors.confirmPassword&&Object(c.jsx)("div",{style:{color:"red"},children:a.errors.confirmPassword})}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)(F.a,{className:U.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Register"})}),Object(c.jsx)("div",{className:U.a.buttonBlock,children:Object(c.jsx)("nav",{children:Object(c.jsx)($.b,{className:K.a.navlink,to:"/login",children:"Login"})})})]})})})]})})},ae=r(131),ne=r.n(ae),se=r(276),ce=function(){var e=Object(x.c)((function(e){return e.app.status}));return Object(c.jsx)("div",{className:ne.a.loadingStyle,children:0!==e&&Object(c.jsx)(se.a,{color:"secondary"})})},oe=r(272),ie=r(266);function le(e){return Object(c.jsx)(ie.a,Object(i.a)({elevation:6,variant:"filled"},e))}function de(){var e=Object(x.c)((function(e){return e.app.error})),t=Object(x.b)(),r=function(e,r){"clickaway"!==r&&t(f(null))};return Object(c.jsx)(oe.a,{open:null!==e,autoHideDuration:6e3,onClose:r,children:Object(c.jsx)(le,{onClose:r,severity:"error",children:e})})}var je=function(){return Object(c.jsx)("div",{children:"Edit profile"})},be=r(48),ue=r.n(be);var me=function(){var e=Object(x.c)((function(e){return e.LogIn.isLoggedIn})),t=Object(x.b)(),r=Object(s.g)();return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:ue.a.headerBlock,children:Object(c.jsxs)("nav",{className:ue.a.nav,children:[!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/login",activeClassName:ue.a.activeLink,children:"Login"})}),!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/SignUp",activeClassName:ue.a.activeLink,children:"SignUp"})}),!e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)($.b,{to:"/RecoveryPassword",activeClassName:ue.a.activeLink,children:"Recovery password"})}),e&&Object(c.jsx)("div",{className:ue.a.item,children:Object(c.jsx)(F.a,{variant:"contained",color:"primary",size:"small",onClick:function(){t((function(e){e(v("loading")),k().then((function(t){e(L(!1)),e(v("idle")),e(D("",""))})).catch((function(t){e(v("idle"));var r=t.response?t.response.data.error:"some unknown error";e(f(r))}))})),t(L(!1)),r.push("/login")},children:"Log out"})})]})})})},Oe=r(72),he=r.n(Oe);var pe=function(e){return Object(c.jsx)("div",{className:he.a.background,children:Object(c.jsxs)("div",{className:he.a.blockContainer,children:[Object(c.jsx)("div",{className:he.a.imgContainer,children:Object(c.jsx)("img",{src:e.avatar,alt:e.name})}),Object(c.jsx)("div",{className:he.a.text,children:e.name}),Object(c.jsx)("div",{className:he.a.button,children:Object(c.jsx)(F.a,{variant:"contained",color:"primary",size:"small",onClick:e.onClickHandler,children:"Edit profile"})})]})})};var xe=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.Profile.name})),r=Object(x.c)((function(e){return e.Profile.avatar})),a=Object(x.c)((function(e){return e.LogIn.isLoggedIn})),n=Object(s.g)();if(!a){if(e((function(e){e(v("loading")),_().then((function(t){e(D(t.data.name,t.data.avatar?t.data.avatar:"")),e(v("idle"))})).catch((function(t){e(v("idle"));var r=t.response?t.response.data.error:"some unknown error";e(f(r))}))})),!t)return Object(c.jsx)(s.a,{to:"/login"});e(L(!0))}return Object(c.jsx)(pe,{name:t,avatar:r,onClickHandler:function(){n.push("/EditProfile")}})},ve=r(94),fe=r.n(ve);var ge=function(){return Object(c.jsxs)("div",{className:fe.a.background,children:[Object(c.jsx)("h1",{className:fe.a.test,children:"Hi! We glad to see you! "}),Object(c.jsx)("h2",{className:fe.a.test,children:" This is application for learning with cards. "})]})};var we=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(me,{}),Object(c.jsx)(ce,{}),Object(c.jsxs)(s.d,{children:[Object(c.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(c.jsx)(ge,{})}}),Object(c.jsx)(s.b,{path:"/SetNewPassword/:token",render:function(){return Object(c.jsx)(V,{})}}),Object(c.jsx)(s.b,{path:"/Error404",render:function(){return Object(c.jsx)(o,{})}}),Object(c.jsx)(s.b,{path:"/login",render:function(){return Object(c.jsx)(I,{})}}),Object(c.jsx)(s.b,{path:"/Profile",render:function(){return Object(c.jsx)(xe,{})}}),Object(c.jsx)(s.b,{path:"/RecoveryPassword",render:function(){return Object(c.jsx)(Y,{})}}),Object(c.jsx)(s.b,{path:"/SignUp",render:function(){return Object(c.jsx)(re,{})}}),Object(c.jsx)(s.b,{path:"/EditProfile",render:function(){return Object(c.jsx)(je,{})}}),Object(c.jsx)(s.a,{from:"*",to:"/error404"})]}),Object(c.jsx)(de,{})]})},Se=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,279)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))},Pe=r(95),ye=r(132),Ne=Object(Pe.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":var r=Object(i.a)({},e);return"loading"===t.statusRequest?r.status++:r.status--,r;case"APP/SET-ERROR":return Object(i.a)(Object(i.a)({},e),{},{error:t.error});default:return e}},setNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NEW-PASSWORD/BUTTON-DISABLED":return Object(i.a)(Object(i.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SET-NEW-PASSWORD/COMPLETED-REQUEST":return Object(i.a)(Object(i.a)({},e),{},{completed:t.completed});default:return e}},LogIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(i.a)(Object(i.a)({},e),{},{isLoggedIn:t.value});default:return e}},Profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(i.a)(Object(i.a)({},e),{},{name:t.name,avatar:t.avatar});default:return e}},RecoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY-PASSWORD/BUTTON-DISABLED":return Object(i.a)(Object(i.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"RECOVERY-PASSWORD/COMPLETED-REQUEST":return Object(i.a)(Object(i.a)({},e),{},{completed:t.completed});default:return e}},SignUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN-UP/BUTTON-DISABLED":return Object(i.a)(Object(i.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SIGN-UP/COMPLETED-REQUEST":return Object(i.a)(Object(i.a)({},e),{},{completed:t.completed});default:return e}}}),Ee=Object(Pe.c)(Ne,Object(Pe.a)(ye.a));window.store=Ee,n.a.render(Object(c.jsx)(x.a,{store:Ee,children:Object(c.jsx)($.a,{children:Object(c.jsx)(we,{})})}),document.getElementById("root")),Se()},48:function(e,t,r){e.exports={headerBlock:"Haeder_headerBlock__2b7JJ",nav:"Haeder_nav__xQjmm",item:"Haeder_item__3CdaX",activeLink:"Haeder_activeLink__17v7Z"}},72:function(e,t,r){e.exports={background:"Profile_background__2NQ7O",blockContainer:"Profile_blockContainer__RHrsM",imgContainer:"Profile_imgContainer__3JzgA",text:"Profile_text__2HzNo",button:"Profile_button__28idB"}},94:function(e,t,r){e.exports={background:"StartPage_background__WCaXT",test:"StartPage_test__1Jj3R"}}},[[190,1,2]]]);
//# sourceMappingURL=main.5d2abf8b.chunk.js.map