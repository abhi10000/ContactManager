(this.webpackJsonpproj1=this.webpackJsonpproj1||[]).push([[0],{40:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),s=a.n(c),o=(a(40),a(15)),i=a(2),l=a(8),u=a(9),h=a(11),j=a(10),d=a(16),p=a.n(d),b=a(4),m=a.n(b),O=a(13),f=a(35),x=a(18),v=a(14),y=a.n(v),C=a(0),g=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(x.a)(Object(x.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!=t.payload}))});case"ADD_CONTACT":return Object(x.a)(Object(x.a)({},e),{},{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(x.a)(Object(x.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},k=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return N(e,t)}))}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)(g.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),S=g.Consumer,E=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(O.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.Contact,a=t.id,n=t.name,r=t.email,c=t.phone,s=this.state.showContactInfo;return Object(C.jsx)(S,{children:function(t){var i=t.dispatch;return Object(C.jsxs)("div",{className:"card card-body mb-3",children:[Object(C.jsxs)("h4",{children:[" ",n,Object(C.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"Pointer"}}),Object(C.jsx)("i",{className:"fas fa-times",style:{cursor:"Pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,i)}),Object(C.jsx)(o.b,{to:"Contact/edit/".concat(a),children:Object(C.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"Pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),s?Object(C.jsxs)("ul",{className:"list-group",children:[Object(C.jsxs)("li",{className:"list-group-item",children:["Email:",r]}),Object(C.jsxs)("li",{className:"list-group-item",children:["Phone:",c]})]}):null]})}})}}]),a}(n.Component),w=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(C.jsx)(S,{children:function(e){var t=e.contacts;return Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsxs)("h1",{className:"display-4 mb-2",children:[Object(C.jsx)("span",{className:"text-danger",children:"Contact"}),"List"]}),t.map((function(e){return Object(C.jsx)(E,{Contact:e},e.id)}))]})}})}}]),a}(n.Component);E.propTypes={Contact:p.a.object.isRequired};var A=w,T=function(e){var t=e.branding;return Object(C.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("a",{href:"/",className:"navbar-brand",children:t}),Object(C.jsx)("div",{children:Object(C.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(C.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsxs)(o.b,{to:"/contact/add",className:"nav-link",children:[Object(C.jsx)("i",{className:"fas fa-plus"})," Add"]})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsxs)(o.b,{to:"/about",className:"nav-link",children:[Object(C.jsx)("i",{className:"fas fa-question"})," About"]})})]})})]})})};T.defaultProps={branding:"My App"};var P=T,D=a(19),q=a(34),F=a.n(q),M=function(e){var t=e.label,a=e.name,n=e.value,r=e.placeholder,c=e.type,s=e.onChange,o=e.error;return Object(C.jsxs)("div",{className:"form-group",children:[Object(C.jsx)("label",{htmlFor:a,children:t}),Object(C.jsx)("input",{type:c,name:a,className:F()(" form-control form-control-lg",{"is-invalid":o}),placeholder:r,value:n,onChange:s}),o&&Object(C.jsx)("div",{className:"invalid-feedback",children:o})]})};M.defaultProps={type:"text"};var _=M,I=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(O.a)(m.a.mark((function t(a,n){var r,c,s,o,i,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,y.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(C.jsx)(S,{children:function(t){var s=t.dispatch;return Object(C.jsxs)("div",{className:"card mb-3",children:[Object(C.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(C.jsx)(_,{label:"Name",name:"name",placeholder:"Entername",value:a,onChange:e.onChange,error:c.name}),Object(C.jsx)(_,{label:"Email",name:"email",type:"email",placeholder:"EnterEmail",value:n,onChange:e.onChange,error:c.email}),Object(C.jsx)(_,{label:"Phone",name:"phone",placeholder:"EnterPhone",value:r,onChange:e.onChange,error:c.phone}),Object(C.jsx)("input",{type:"Submit",value:"Add Contact",className:"btn btn-block * bt-light"})]})})]})}})}}]),a}(n.Component),L=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(O.a)(m.a.mark((function t(a,n){var r,c,s,o,i,l,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(D.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(C.jsx)(S,{children:function(t){var s=t.dispatch;return Object(C.jsxs)("div",{className:"card mb-3",children:[Object(C.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(C.jsx)(_,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:c.name}),Object(C.jsx)(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:c.email}),Object(C.jsx)(_,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onChange,error:c.phone}),Object(C.jsx)("input",{type:"Submit",value:"Update Contact",className:"btn btn-block * bt-light"})]})})]})}})}}]),a}(n.Component),U=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(C.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(C.jsx)("p",{className:"text-secondary",children:"Version 1.0.0"})]})},B=function(){return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h1",{className:"display-4",children:[Object(C.jsx)("span",{className:"text-danger",children:"404"}),"Page Not Found"]}),Object(C.jsx)("p",{className:"lead",children:"Sorry,that page does not exist"})]})},J=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:t}),Object(C.jsx)("p",{children:a})]})}}]),a}(n.Component);a(69),a(70);var R=function(){return Object(C.jsx)(k,{children:Object(C.jsx)(o.a,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(P,{branding:"Contact Manager"}),Object(C.jsx)("div",{className:"Container",children:Object(C.jsxs)(i.c,{children:[Object(C.jsx)(i.a,{exact:!0,path:"/",component:A}),Object(C.jsx)(i.a,{exact:!0,path:"/Contact/add",component:I}),Object(C.jsx)(i.a,{exact:!0,path:"/Contact/edit/:id",component:L}),Object(C.jsx)(i.a,{exact:!0,path:"/about",component:U}),Object(C.jsx)(i.a,{exact:!0,path:"/test",component:J}),Object(C.jsx)(i.a,{component:B})]})})]})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(R,{})}),document.getElementById("root")),H()}},[[71,1,2]]]);
//# sourceMappingURL=main.7b0170d7.chunk.js.map