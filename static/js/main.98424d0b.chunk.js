(this.webpackJsonpcardsapp=this.webpackJsonpcardsapp||[]).push([[0],{106:function(e,t,a){e.exports={navlink:"RecoveryPassword_navlink__2tvH4",icon:"RecoveryPassword_icon__1RGVj"}},130:function(e,t,a){e.exports={navlink:"SignUp_navlink__2uiPT"}},131:function(e,t,a){e.exports={loadingStyle:"LoadingLine_loadingStyle__1NmIM"}},161:function(e,t,a){},17:function(e,t,a){e.exports={background:"commonStyles_background__2q_NM",blockContainer:"commonStyles_blockContainer__11RPC",form:"commonStyles_form__2TPJb",text:"commonStyles_text__3BwWT",formControl:"commonStyles_formControl__2OASi",button:"commonStyles_button__GPYdo",buttonBlock:"commonStyles_buttonBlock__1A-KK"}},190:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(20),c=a.n(n),s=(a(161),a(25)),i=a(2);var o=function(){return Object(i.jsx)("div",{children:"Error404"})},l=a(15),d=a(271),j=a(265),b=a(267),u=a(268),m=a(273),O=a(253),h=a(262),p=a(274),f=a(52),v=a(16),x=function(e){return{type:"APP/SET-STATUS",statusRequest:e}},g=function(e){return{type:"APP/SET-ERROR",error:e}},w={status:0,error:null},P=a(127),k=a.n(P).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),S=function(e){var t={email:e,from:"test-front-admin <romanxeo@gmail.com>",message:"<div style=\"background-color: #a3c486; padding: 10px\">\n                        password recovery link: \n                        <a href='http://localhost:3000/#/SetNewPassword/$token$'>\n                        link local</a>\n                        <a href='https://romanxeo.github.io/cardsapp/#/SetNewPassword/$token$'>\n                        link gh-pages</a></div>"};return k.post("auth/forgot",t)},y=function(e){return k.post("/auth/login",e)},N=function(e,t){var a={password:e,resetPasswordToken:t};return k.post("auth/set-new-password",a)},E=function(e,t){var a={email:e,password:t};return k.post("auth/register",a)},_=function(){return k.post("auth/me")},C=function(){return k.delete("auth/me")},T=function(){return k.get("cards/pack")},D=function(e,t){var a={cardsPack:{name:e,isPrivate:t}};return k.post("cards/pack",a)},R={name:"",avatar:"",_id:"",publicCardPacksCount:0},L="profile/SET-USER-DATA",A=function(e,t,a,r){return{type:L,name:e,avatar:t,_id:a,publicCardPacksCount:r}},I={isLoggedIn:!1},U=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},B=function(){var e=Object(v.b)(),t=Object(f.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<3&&(t.password="\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):t.password="\u041f\u043e\u043b\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",t},onSubmit:function(a){var r;e((r=a,function(e){e(x("loading")),y(r).then((function(t){e(U(!0)),e(x("idle")),e(A(t.data.name,t.data.avatar?t.data.avatar:"",t.data._id,t.data.publicCardPacksCount))})).catch((function(t){var a=t.response?t.response.data.error:t.message;e(g(a)),e(x("idle"))}))})),t.resetForm()}});return Object(v.c)((function(e){return e.LogIn.isLoggedIn}))?Object(i.jsx)(s.a,{to:"/profile"}):Object(i.jsx)(d.a,{container:!0,justifyContent:"center",children:Object(i.jsx)(d.a,{item:!0,justifyContent:"center",children:Object(i.jsxs)(b.a,{children:[Object(i.jsxs)(O.a,{children:[Object(i.jsxs)("p",{children:["To log in get registered",Object(i.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(i.jsx)("p",{children:"or use common test account credentials:"}),Object(i.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(i.jsx)("p",{children:"Password: free"})]}),Object(i.jsx)("form",{onSubmit:t.handleSubmit,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)(h.a,Object(l.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(i.jsx)("div",{style:{color:"red"},children:t.errors.email}),Object(i.jsx)(h.a,Object(l.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(i.jsx)("div",{style:{color:"red"},children:t.errors.password}),Object(i.jsx)(u.a,Object(l.a)(Object(l.a)({label:"Remember me",control:Object(i.jsx)(j.a,{})},t.getFieldProps("rememberMe")),{},{checked:t.values.rememberMe})),Object(i.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},F=a(17),W=a.n(F),z=a(263),H=a(261),G=a(275),M=a(259),V=function(e){return{type:"SET-NEW-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},Z={completed:!1,buttonDisabled:!1},q=function(){var e=Object(v.c)((function(e){return e.setNewPassword.completed})),t=Object(v.c)((function(e){return e.setNewPassword.buttonDisabled})),a=Object(s.h)().token,r=Object(v.b)(),n=Object(f.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,n;r((t=e.password,n=a,function(e){e(V(!0)),e(x("loading")),N(t,n).then((function(t){e(V(!1)),e(x("idle")),e({type:"SET-NEW-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var a=t.response?t.response.data.error:"some unknown error";e(g(a)),e(V(!1)),e(x("idle"))}))}))}});return e?Object(i.jsx)(s.a,{to:"/login"}):Object(i.jsx)("div",{className:W.a.background,children:Object(i.jsxs)("div",{className:W.a.blockContainer,children:[Object(i.jsx)("h2",{className:W.a.text,children:"It-incubator"}),Object(i.jsx)("h3",{className:W.a.text,children:"Create new password"}),Object(i.jsx)(G.a,{className:W.a.formControl,children:Object(i.jsx)("form",{onSubmit:n.handleSubmit,className:W.a.form,children:Object(i.jsxs)(M.a,{children:[Object(i.jsx)(z.a,Object(l.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},n.getFieldProps("password"))),Object(i.jsx)("div",{style:{height:"20px"},children:n.touched.password&&n.errors.password&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.password})}),Object(i.jsx)(z.a,Object(l.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},n.getFieldProps("confirmPassword"))),Object(i.jsx)("div",{style:{height:"20px"},children:n.touched.confirmPassword&&n.errors.confirmPassword&&Object(i.jsx)("div",{style:{color:"red"},children:n.errors.confirmPassword})}),Object(i.jsx)("p",{children:"Create new password and we will send you further instructions to E-mail"}),Object(i.jsx)("div",{className:W.a.buttonBlock,children:Object(i.jsx)(H.a,{className:W.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Create new password"})})]})})})]})})},Q=a(106),Y=a.n(Q),$=a.p+"static/media/iconEmail.f254994b.png",K=a(31),J=function(e){return{type:"RECOVERY-PASSWORD/BUTTON-DISABLED",buttonDisabled:e}},X={completed:!1,buttonDisabled:!1};var ee=function(){var e=Object(v.c)((function(e){return e.RecoveryPassword.completed})),t=Object(v.c)((function(e){return e.RecoveryPassword.buttonDisabled})),a=Object(v.b)(),r=Object(f.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){var t;a((t=e.email,function(e){e(J(!0)),e(x("loading")),S(t).then((function(t){e(J(!1)),e(x("idle")),e({type:"RECOVERY-PASSWORD/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var a=t.response?t.response.data.error:"some unknown error";e(g(a)),e(J(!1)),e(x("idle"))}))})),r.resetForm()}});return e?Object(i.jsx)("div",{className:W.a.background,children:Object(i.jsx)("div",{className:W.a.blockContainer,children:Object(i.jsxs)("div",{className:W.a.form,children:[Object(i.jsx)("h2",{className:W.a.text,children:"It-incubator"}),Object(i.jsx)("img",{src:$,className:Y.a.icon}),Object(i.jsx)("h3",{className:W.a.text,children:"Check E-mail"}),Object(i.jsx)("p",{className:W.a.text,children:"We have sent instructions to your E-mail how to recover your password"})]})})}):Object(i.jsx)("div",{className:W.a.background,children:Object(i.jsxs)("div",{className:W.a.blockContainer,children:[Object(i.jsx)("h2",{className:W.a.text,children:"It-incubator"}),Object(i.jsx)("h3",{className:W.a.text,children:"Forgot your password?"}),Object(i.jsx)(b.a,{className:W.a.formControl,children:Object(i.jsx)("form",{onSubmit:r.handleSubmit,className:W.a.form,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)(h.a,Object(l.a)({variant:"outlined",size:"small",label:"E-mail",margin:"normal"},r.getFieldProps("email"))),Object(i.jsx)("div",{style:{height:"20px"},children:r.touched.email&&r.errors.email&&Object(i.jsx)("div",{style:{color:"red"},children:r.errors.email})}),Object(i.jsx)("p",{children:"Enter your e-mail address and we will send you further instructions"}),Object(i.jsx)("div",{className:W.a.buttonBlock,children:Object(i.jsx)(p.a,{className:W.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Send instructions"})}),Object(i.jsx)("p",{children:"Did you remember your password?"}),Object(i.jsx)("div",{className:W.a.buttonBlock,children:Object(i.jsx)("nav",{children:Object(i.jsx)(K.b,{className:Y.a.navlink,to:"/login",children:"Try logging in"})})})]})})})]})})},te=a(130),ae=a.n(te),re=function(e){return{type:"SIGN-UP/BUTTON-DISABLED",buttonDisabled:e}},ne={completed:!1,buttonDisabled:!1},ce=function(){var e=Object(v.c)((function(e){return e.SignUp.completed})),t=Object(v.c)((function(e){return e.SignUp.buttonDisabled})),a=Object(v.b)(),r=Object(f.a)({initialValues:{email:"",password:"",confirmPassword:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4&&(t.password="\u0411\u041e\u041b\u042c\u0428\u0415 \u0422\u0420\u0415\u0425 \u0421\u0418\u041c\u0412\u041e\u041b\u041e\u0412 \u0414\u041e\u041b\u0416\u041d\u041e \u0411\u042b\u0422\u042c"):t.password="\u041f\u0423\u0421\u0422\u041e",e.password!==e.confirmPassword&&(t.confirmPassword="\u041f\u0410\u0420\u041e\u041b\u0418 \u041d\u0415 \u0421\u041e\u0412\u041f\u0410\u0414\u0410\u042e\u0422"),t},onSubmit:function(e){var t,r;a((t=e.email,r=e.password,function(e){e(re(!0)),e(x("loading")),E(t,r).then((function(t){e(re(!1)),e(x("idle")),e({type:"SIGN-UP/COMPLETED-REQUEST",completed:!0})})).catch((function(t){var a=t.response?t.response.data.error:"some unknown error";e(g(a)),e(re(!1)),e(x("idle"))}))}))}});return e?Object(i.jsx)(s.a,{to:"/login"}):Object(i.jsx)("div",{className:W.a.background,children:Object(i.jsxs)("div",{className:W.a.blockContainer,children:[Object(i.jsx)("h2",{className:W.a.text,children:"It-incubator"}),Object(i.jsx)("h3",{className:W.a.text,children:"Sign Up"}),Object(i.jsx)(G.a,{className:W.a.formControl,children:Object(i.jsx)("form",{onSubmit:r.handleSubmit,className:W.a.form,children:Object(i.jsxs)(M.a,{children:[Object(i.jsx)(z.a,Object(l.a)({variant:"outlined",size:"small",label:"email",margin:"normal"},r.getFieldProps("email"))),Object(i.jsx)("div",{style:{height:"20px"},children:r.touched.email&&r.errors.email&&Object(i.jsx)("div",{style:{color:"red"},children:r.errors.email})}),Object(i.jsx)(z.a,Object(l.a)({variant:"outlined",size:"small",label:"password",margin:"normal",type:"password"},r.getFieldProps("password"))),Object(i.jsx)("div",{style:{height:"20px"},children:r.touched.password&&r.errors.password&&Object(i.jsx)("div",{style:{color:"red"},children:r.errors.password})}),Object(i.jsx)(z.a,Object(l.a)({variant:"outlined",size:"small",label:"confirmPassword",margin:"normal",type:"password"},r.getFieldProps("confirmPassword"))),Object(i.jsx)("div",{style:{height:"20px"},children:r.touched.confirmPassword&&r.errors.confirmPassword&&Object(i.jsx)("div",{style:{color:"red"},children:r.errors.confirmPassword})}),Object(i.jsx)("div",{className:W.a.buttonBlock,children:Object(i.jsx)(H.a,{className:W.a.button,type:"submit",variant:"contained",color:"primary",size:"small",disabled:t,children:"Register"})}),Object(i.jsx)("div",{className:W.a.buttonBlock,children:Object(i.jsx)("nav",{children:Object(i.jsx)(K.b,{className:ae.a.navlink,to:"/login",children:"Login"})})})]})})})]})})},se=a(131),ie=a.n(se),oe=a(276),le=function(){var e=Object(v.c)((function(e){return e.app.status}));return Object(i.jsx)("div",{className:ie.a.loadingStyle,children:0!==e&&Object(i.jsx)(oe.a,{color:"secondary"})})},de=a(272),je=a(266);function be(e){return Object(i.jsx)(je.a,Object(l.a)({elevation:6,variant:"filled"},e))}function ue(){var e=Object(v.c)((function(e){return e.app.error})),t=Object(v.b)(),a=function(e,a){"clickaway"!==a&&t(g(null))};return Object(i.jsx)(de.a,{open:null!==e,autoHideDuration:6e3,onClose:a,children:Object(i.jsx)(be,{onClose:a,severity:"error",children:e})})}var me=function(){return Object(i.jsx)("div",{children:"Edit profile"})},Oe=a(38),he=a.n(Oe);var pe=function(){var e=Object(v.c)((function(e){return e.LogIn.isLoggedIn})),t=Object(v.b)(),a=Object(s.g)();return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:he.a.headerBlock,children:Object(i.jsxs)("nav",{className:he.a.nav,children:[!e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(K.b,{to:"/login",activeClassName:he.a.activeLink,children:"Login"})}),!e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(K.b,{to:"/SignUp",activeClassName:he.a.activeLink,children:"SignUp"})}),!e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(K.b,{to:"/RecoveryPassword",activeClassName:he.a.activeLink,children:"Recovery password"})}),e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(K.b,{to:"/Profile",activeClassName:he.a.activeLink,children:"Profile"})}),e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(K.b,{to:"/Packs",activeClassName:he.a.activeLink,children:"Packs"})}),e&&Object(i.jsx)("div",{className:he.a.item,children:Object(i.jsx)(H.a,{variant:"contained",color:"primary",size:"small",onClick:function(){t((function(e){e(x("loading")),C().then((function(t){e(U(!1)),e(x("idle")),e(A("","","",0))})).catch((function(t){e(x("idle"));var a=t.response?t.response.data.error:t.message;e(g(a))}))})),t(U(!1)),a.push("/login")},children:"Log out"})})]})})})},fe=a(63),ve=a.n(fe);var xe=function(e){return Object(i.jsx)("div",{className:ve.a.background,children:Object(i.jsxs)("div",{className:ve.a.blockContainer,children:[Object(i.jsx)("div",{className:ve.a.imgContainer,children:Object(i.jsx)("img",{src:e.avatar,alt:e.name})}),Object(i.jsx)("div",{className:ve.a.text,children:e.name}),Object(i.jsx)("div",{className:ve.a.text,children:"You have ".concat(e.publicCardPacksCount," public packs")}),Object(i.jsx)("div",{className:ve.a.button,children:Object(i.jsx)(H.a,{variant:"contained",color:"primary",size:"small",onClick:e.onClickHandler,children:"Edit profile"})})]})})};var ge=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.Profile._id})),a=Object(v.c)((function(e){return e.Profile.name})),r=Object(v.c)((function(e){return e.Profile.avatar})),n=Object(v.c)((function(e){return e.Profile.publicCardPacksCount})),c=Object(v.c)((function(e){return e.LogIn.isLoggedIn})),o=Object(s.g)();if(!c){if(e((function(e){e(x("loading")),_().then((function(t){e(A(t.data.name,t.data.avatar?t.data.avatar:"",t.data._id,t.data.publicCardPacksCount)),e(x("idle"))})).catch((function(t){e(x("idle"));var a=t.response?t.response.data.error:t.message;e(g(a))}))})),!t)return Object(i.jsx)(s.a,{to:"/login"});e(U(!0))}return Object(i.jsx)(xe,{name:a,avatar:r,publicCardPacksCount:n,onClickHandler:function(){o.push("/EditProfile")}})},we=a(95),Pe=a.n(we);var ke=function(){return Object(i.jsxs)("div",{className:Pe.a.background,children:[Object(i.jsx)("h1",{className:Pe.a.test,children:"Hi! We glad to see you! "}),Object(i.jsx)("h2",{className:Pe.a.test,children:" This is application for learning with cards. "})]})};var Se=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(H.a,{variant:"contained",color:"primary",size:"small",onClick:e.onClickHandler,children:"Add pack"}),e.packs.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:e.name}),Object(i.jsx)("span",{children:e.cardsCount}),Object(i.jsx)("span",{children:e.updated})]},e._id)}))]})},ye=[],Ne=function(){return function(e){e(x("loading")),T().then((function(t){e({type:"packs/SET-PACKS",packs:t.data.cardPacks}),e(x("idle"))})).catch((function(t){e(x("idle"));var a=t.response?t.response.data.error:t.message;e(g(a))}))}};var Ee=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.Packs})),a=Object(v.c)((function(e){return e.LogIn.isLoggedIn}));return Object(r.useEffect)((function(){e(Ne())}),[]),a?Object(i.jsx)(Se,{packs:t,onClickHandler:function(){var t,a;e((t="NewName",a=!1,function(e){e(x("loading")),D(t,a).then((function(t){e(Ne()),e(x("idle"))})).catch((function(t){e(x("idle"));var a=t.response?t.response.data.error:t.message;e(g(a))}))}))}}):Object(i.jsx)(s.a,{to:"/login"})};var _e=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(pe,{}),Object(i.jsx)(le,{}),Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(ke,{})}}),Object(i.jsx)(s.b,{path:"/SetNewPassword/:token",render:function(){return Object(i.jsx)(q,{})}}),Object(i.jsx)(s.b,{path:"/Error404",render:function(){return Object(i.jsx)(o,{})}}),Object(i.jsx)(s.b,{path:"/login",render:function(){return Object(i.jsx)(B,{})}}),Object(i.jsx)(s.b,{path:"/Profile",render:function(){return Object(i.jsx)(ge,{})}}),Object(i.jsx)(s.b,{path:"/RecoveryPassword",render:function(){return Object(i.jsx)(ee,{})}}),Object(i.jsx)(s.b,{path:"/SignUp",render:function(){return Object(i.jsx)(ce,{})}}),Object(i.jsx)(s.b,{path:"/EditProfile",render:function(){return Object(i.jsx)(me,{})}}),Object(i.jsx)(s.b,{path:"/Packs",render:function(){return Object(i.jsx)(Ee,{})}}),Object(i.jsx)(s.a,{from:"*",to:"/error404"})]}),Object(i.jsx)(ue,{})]})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,279)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},Te=a(96),De=a(132),Re=Object(Te.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":var a=Object(l.a)({},e);return"loading"===t.statusRequest?a.status++:a.status--,a;case"APP/SET-ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.error});default:return e}},setNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NEW-PASSWORD/BUTTON-DISABLED":return Object(l.a)(Object(l.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SET-NEW-PASSWORD/COMPLETED-REQUEST":return Object(l.a)(Object(l.a)({},e),{},{completed:t.completed});default:return e}},LogIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:t.value});default:return e}},Profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(l.a)(Object(l.a)({},e),{},{name:t.name,avatar:t.avatar});default:return e}},RecoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY-PASSWORD/BUTTON-DISABLED":return Object(l.a)(Object(l.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"RECOVERY-PASSWORD/COMPLETED-REQUEST":return Object(l.a)(Object(l.a)({},e),{},{completed:t.completed});default:return e}},SignUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN-UP/BUTTON-DISABLED":return Object(l.a)(Object(l.a)({},e),{},{buttonDisabled:t.buttonDisabled});case"SIGN-UP/COMPLETED-REQUEST":return Object(l.a)(Object(l.a)({},e),{},{completed:t.completed});default:return e}},Packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"packs/SET-PACKS":return t.packs;default:return e}}}),Le=Object(Te.c)(Re,Object(Te.a)(De.a));window.store=Le,c.a.render(Object(i.jsx)(v.a,{store:Le,children:Object(i.jsx)(K.a,{children:Object(i.jsx)(_e,{})})}),document.getElementById("root")),Ce()},38:function(e,t,a){e.exports={headerBlock:"Haeder_headerBlock__178d3",nav:"Haeder_nav__OVEeX",item:"Haeder_item__3r0Ki",activeLink:"Haeder_activeLink__2UUEV"}},63:function(e,t,a){e.exports={background:"Profile_background__Cr95E",blockContainer:"Profile_blockContainer__3vd-8",imgContainer:"Profile_imgContainer__shH_q",text:"Profile_text__24QG7",button:"Profile_button__1Rl1o"}},95:function(e,t,a){e.exports={background:"StartPage_background__1DYp4",test:"StartPage_test__24Dyg"}}},[[190,1,2]]]);
//# sourceMappingURL=main.98424d0b.chunk.js.map