(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},141:function(e,t){},212:function(e,t,n){},213:function(e,t,n){},216:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),l=n(15),s=n(3),u=n(4),i=n(7),p=n(5),m=n(6),f=n(19),d=(n(91),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),E=(n(92),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))}),v=Object(f.e)(function(e){return r.a.createElement(E,e)}),h=(n(98),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts/random",title:"Random post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(d,null),r.a.createElement(v,{links:e}))}}]),t}(r.a.Component)),g=(n(99),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),b=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(h,null),t))},O=(n(100),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),j=n(11),P=n(40),y=n(31),_=n(14),w=n.n(_),k=n(25),N=n(26),S=n.n(N),x="http://localhost:8000/api";function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=function(e){return e.posts.data},q=function(e){return e.posts.request},A=function(e){return e.posts.singlePost},T=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},I=function(e){return"app/".concat("posts","/").concat(e)},M=I("LOAD_POSTS"),L=I("LOAD_SINGLE_POST"),B=I("LOAD_POSTS_PAGE"),U=I("LOAD_RANDOM_POST"),Q=I("START_REQUEST"),X=I("END_REQUEST"),G=I("ERROR_REQUEST"),F=I("RESET_REQUEST"),J=function(e){return{payload:e,type:M}},V=function(e){return{payload:e,type:B}},H=function(){return{type:Q}},Y=function(){return{type:X}},z=function(e){return{error:e,type:G}},K=function(){return{type:F}},W={data:[],request:{pending:!1,error:null,success:null},singlePost:null,amount:0,postsPerPage:10,presentPage:1};var Z=n(16),$=(n(121),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),ee=(n(122),function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),te=(n(123),n(83)),ne=n.n(te),ae=function(e){var t=e.children,n=Object(Z.a)(e,["children"]);return r.a.createElement("p",Object.assign({},n,{className:"html-box"}),ne()(t))},re=function(e){var t=e.id,n=e.title,a=e.content,c=e.author;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(ee,null,n),r.a.createElement(ae,null,function(e,t){return e.length<1?"Error":e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."}(a,250)),r.a.createElement("p",null," Author: ",c),r.a.createElement($,{variant:"primary"},r.a.createElement(l.b,{to:"/posts/".concat(t)},"Read more")))},ce=function(e){var t=e.posts;return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},t.map(function(e){return r.a.createElement(re,Object.assign({key:e.id},e))})))},oe=n(39),le=(n(212),function(){return r.a.createElement(oe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),se=n(27),ue=(n(213),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(Z.a)(e,["variant","children"]);return r.a.createElement(oe.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(se.c,null);case"success":return r.a.createElement(se.a,null);case"warning":case"error":return r.a.createElement(se.b,null);default:return r.a.createElement(se.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),ie=n(24),pe=n(49),me=n(51),fe=(n(216),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:n.props.initialPage||1},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.goToPage=function(e){var t=n.state.presentPage;(0,Object(ie.a)(n).changePage)((t+e).targetPage)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePage,a=this.goToPage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>=2&&r.a.createElement("li",{className:"pagination__list__item"},r.a.createElement(pe.a,{icon:me.a,onClick:function(){a(-1)}})),Object(P.a)(Array(e)).map(function(e,a){return r.a.createElement("li",{key:++a,onClick:function(){n(a)},className:"pagination__list__item".concat(a===t?" pagination__list__item--active":"")},a)}),t!==e&&r.a.createElement("li",{className:"pagination__list__item"},r.a.createElement(pe.a,{icon:me.b,onClick:function(){a(1)}}))))}}]),t}(r.a.Component)),de=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).loadPostsPage=function(e){var t=n.props;(0,t.loadPostsByPage)(e,t.postsPerPage||10)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPostsByPage,n=e.initialPage,a=e.postsPerPage;console.log(a,n,"test"),t(n||1,a||10)}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.request,a=e.pages,c=e.presentPage,o=this.props.pagination,l=this.loadPostsPage;return void 0===o&&(o=!0),!1===n.pending&&!0===n.success&&t.length>0?r.a.createElement("div",null,r.a.createElement(ce,{posts:t}),o&&r.a.createElement(fe,{pages:a,onPageChange:l,initialPage:c})):!0===n.pending||null===n.success?r.a.createElement("div",null,r.a.createElement(le,null)):!1===n.pending&&null!==n.error?r.a.createElement("div",null,r.a.createElement(ue,{variant:"error"},n.error)):!1===n.pending&&!0===n.success&&0===t.length?r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"No posts")):r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"Something went wrong..."))}}]),t}(r.a.Component),Ee=Object(j.b)(function(e){return{posts:R(e),request:q(e),pages:T(e)}},function(e){return{loadPostsByPage:function(t,n){return e(function(e,t){return function(){var n=Object(k.a)(w.a.mark(function n(a){var r,c,o,l;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(H()),n.prev=1,r=(e-1)*t,c=t,n.next=6,S.a.get("".concat(x,"/posts/range/").concat(r,"/").concat(c));case 6:o=n.sent,l={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},a(V(l)),a(Y()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),a(z(n.t0.message));case 15:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()}(t,n))}}})(de),ve=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Blog"),r.a.createElement(Ee,{postsPerPage:3,pagination:!1}))},he=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadPosts)()}},{key:"render",value:function(){var e=this.props.counter;return r.a.createElement("div",null,e>0?"Posts amount: "+e:" No posts ")}}]),t}(r.a.Component),ge=Object(j.b)(function(e){return{posts:R(e),counter:(t=e,t.posts.data.length)};var t},function(e){return{loadPosts:function(){return e(function(){var e=Object(k.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(H()),e.prev=1,e.next=4,S.a.get("".concat(x,"/posts"));case 4:n=e.sent,t(J(n.data)),t(Y()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(z(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())}}})(he),be=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Posts list"),r.a.createElement(ge,null),r.a.createElement(Ee,null))},Oe=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Contact"),r.a.createElement("p",null,"Your Favourite Blooger Ltd."),r.a.createElement("p",null,"9432 Division Street"),r.a.createElement("p",null," Stone Mountain, GA 30083"),r.a.createElement("p",null,"Mobile Number: 207-914-3411"))},je=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},Pe=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadRandomPost,n=e.resetRequest;t(),n()}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.request;return!1===n.pending&&!0===n.success&&t?r.a.createElement("div",null,r.a.createElement("article",{className:"post-summary"},r.a.createElement(ee,null,t.title),r.a.createElement(ae,null,t.content),r.a.createElement("p",null," Author: ",t.author))):!0===n.pending||null===n.success?r.a.createElement("div",null,r.a.createElement(le,null)):!1===n.pending&&null!==n.error?r.a.createElement("div",null,r.a.createElement(ue,{variant:"error"},n.error)):!1===n.pending&&!0===n.success?r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"No posts")):r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"Something went wrong..."))}}]),t}(r.a.Component),ye=Object(f.e)(function(e){return r.a.createElement(Pe,e)}),_e=Object(j.b)(function(e){return{post:A(e),request:q(e)}},function(e){return{loadRandomPost:function(){return e(function(){var e=Object(k.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(H()),e.prev=1,e.next=4,S.a.get("".concat(x,"/post/random"));case 4:n=e.sent,t({payload:n.data,type:U}),t(Y()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(z(e.t0.message));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}())},resetRequest:function(){return e(K())}}})(ye),we=function(){return r.a.createElement("div",null,r.a.createElement(_e,null))},ke=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadPost,n=e.resetRequest;t(e.match.params.id),n()}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.request;return!1===n.pending&&!0===n.success&&t?r.a.createElement("div",null,r.a.createElement("article",null,r.a.createElement(ee,null,t.title),r.a.createElement(ae,null,t.content),r.a.createElement("p",null," Author: ",t.author))):!0===n.pending||null===n.success?r.a.createElement("div",null,r.a.createElement(le,null)):!1===n.pending&&null!==n.error?r.a.createElement("div",null,r.a.createElement(ue,{variant:"error"},n.error)):!1===n.pending&&!0===n.success?r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"No posts")):r.a.createElement("div",null,r.a.createElement(ue,{variant:"info"},"Something went wrong..."))}}]),t}(r.a.Component),Ne=Object(f.e)(function(e){return r.a.createElement(ke,e)}),Se=Object(j.b)(function(e){return{post:A(e),request:q(e)}},function(e){return{loadPost:function(t){return e(function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(H()),t.prev=1,t.next=4,S.a.get("".concat(x,"/posts/").concat(e));case 4:a=t.sent,n({payload:a.data,type:L}),n(Y()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(z(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(K())}}})(Ne),xe=function(){return r.a.createElement("div",null,r.a.createElement(Se,null))},De=n(84),Ce=n.n(De),Re=(n(220),n(221),n(222),function(e){var t=e.value,n=e.label,a=e.onChange,c=Object(Z.a)(e,["value","label","onChange"]);return r.a.createElement("label",{className:"text-field"},r.a.createElement("span",{className:"text-field__label ".concat(!t.length>0?"text-field__label--big":"")},n),r.a.createElement("input",Object.assign({},c,{value:t,onChange:a,className:"text-field__input"})))}),qe=(n(223),function(e){var t=e.children;return r.a.createElement("h2",{className:"section-title"},t)});n(224);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach(function(t){Object(y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Ie=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={post:{title:"",author:"",content:""}},n.handleChange=function(e){var t=n.state.post;n.setState({post:Te({},t,Object(y.a)({},e.target.name,e.target.value))})},n.handleEditor=function(e){var t=n.state.post;n.setState({post:Te({},t,{content:e})})},n.addPost=function(e){var t=n.props,a=t.addPost,r=t.resetRequest,c=n.state.post;e.preventDefault(),a(c),r()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.resetRequest)()}},{key:"render",value:function(){var e=this.state.post,t=this.handleChange,n=this.handleEditor,a=this.addPost,c=this.props.request;return c.error?r.a.createElement(ue,{variant:"error"},c.error):c.success?r.a.createElement(ue,{variant:"success"},"Post has been added!"):c.pending?r.a.createElement(le,null):r.a.createElement("form",{onSubmit:a},r.a.createElement(Re,{label:"Title",onChange:t,value:e.title,name:"title"}),r.a.createElement(Re,{label:"Author",onChange:t,value:e.author,name:"author"}),r.a.createElement(qe,null,"Edit post content"),r.a.createElement(Ce.a,{className:"content-editor",text:e.content,onChange:n,options:{placeholder:!1,toolbar:{buttons:["bold","italic","underline","anchor","h2","h3"]}}}),r.a.createElement($,{variant:"primary"},"Add post"))}}]),t}(r.a.Component),Me=Object(j.b)(function(e){return{request:q(e)}},function(e){return{addPost:function(t){return e(function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var a;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(H()),t.prev=1,t.next=4,S.a.post("".concat(x,"/posts"),e);case 4:a=t.sent,n(J(a.data)),n(Y()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(z(t.t0.message));case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},resetRequest:function(){return e(K())}}})(Ie),Le=function(){return r.a.createElement("div",null,r.a.createElement(Me,null))},Be=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:ve}),r.a.createElement(f.a,{path:"/posts",exact:!0,component:be}),r.a.createElement(f.a,{path:"/contact",exact:!0,component:Oe}),r.a.createElement(f.a,{path:"/posts/new",exact:!0,component:Le}),r.a.createElement(f.a,{path:"/posts/random",exact:!0,component:we}),r.a.createElement(f.a,{path:"/posts/:id",exact:!0,component:xe}),r.a.createElement(f.a,{component:je})))}}]),t}(r.a.Component),Ue=(n(225),n(226),n(20)),Qe=n(85),Xe=Object(Ue.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case M:return C({},e,{data:t.payload});case L:return C({},e,{singlePost:t.payload});case B:return C({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(P.a)(t.payload.posts)});case U:return C({},e,{singlePost:t.payload});case Q:return C({},e,{request:{pending:!0,error:null,success:null}});case X:return C({},e,{request:{pending:!1,error:null,success:!0}});case G:return C({},e,{request:{pending:!1,error:t.error,success:!1}});case F:return C({},e,{request:{pending:!1,error:null,success:null}});default:return e}}}),Ge=Object(Ue.e)(Xe,Object(Ue.d)(Object(Ue.a)(Qe.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(function(){return r.a.createElement(j.a,{store:Ge},r.a.createElement(l.a,null,r.a.createElement(Be,null)))},null),document.getElementById("root"))},86:function(e,t,n){e.exports=n(227)},91:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.62015911.chunk.js.map