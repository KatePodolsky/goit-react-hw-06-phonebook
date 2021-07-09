(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={button:"ContactListItem_button__3FxKg",item:"ContactListItem_item__1R_Kz"}},18:function(t,e,n){t.exports={filterName:"FilterContacts_filterName__2yCj8",input:"FilterContacts_input__2CEBc"}},19:function(t,e,n){t.exports={title:"App_title__2GA-a"}},21:function(t,e,n){t.exports={Container:"Container_Container__5QPjl"}},22:function(t,e,n){t.exports={contactList:"ContactList_contactList__3UHx4"}},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),i=n(3),s=n(10),u=n(11),l=n(14),b=n(12),m=n(21),d=n.n(m),p=n(1),j=function(t){var e=t.children;return Object(p.jsx)("div",{className:d.a.Container,children:e})},f=n(5),h=n(7),O=n.n(h),C=n(4),x={saveContact:Object(C.b)("contact/Save",(function(t){var e=t.name,n=t.number;return{payload:{id:O.a.generate(),name:e,number:n}}})),deleteContact:Object(C.b)("contact/Delete"),updateFilter:Object(C.b)("contact/Filter")},_=n(6),v=n.n(_),y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:t.props.name,number:t.props.number},t.nameInputId=O.a.generate(),t.numberInputId=O.a.generate(),t.handleContactAdd=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handlesubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{onSubmit:this.handlesubmit,className:v.a.form,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,className:v.a.property,children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:v.a.input,onChange:this.handleContactAdd,id:this.nameInputId})]}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,className:v.a.property,children:[Object(p.jsx)("span",{children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:v.a.input,onChange:this.handleContactAdd,id:this.numberInputId})]}),Object(p.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})}}]),n}(a.Component);y.defaultProps={name:"",number:""};var g,N=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(x.saveContact(e,n))}}}))(y),I=n(22),A=n.n(I),F=n(17),w=n.n(F),S=function(t){var e=t.contact,n=e.name,a=e.number,c=e.id,r=t.onDeleteContact;return Object(p.jsxs)("li",{className:w.a.item,children:[Object(p.jsxs)("span",{children:[n,": ",a]}),Object(p.jsx)("button",{type:"button",className:w.a.button,onClick:function(){return r(c)},children:"Delete"})]})},L=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(i.b)((function(t){return{contacts:L(t.contacts.items,t.contacts.filter)}}),(function(t){return{onDeleteContact:function(e){return t(x.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:A.a.contactList,children:e.map((function(t){return Object(p.jsx)(S,{contact:t,onDeleteContact:n},t.id)}))})})),D=n(18),z=n.n(D),J=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(x.updateFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:z.a.filterName,children:["Filter by name",Object(p.jsx)("input",{type:"text",value:e,onChange:n,className:z.a.input})]})})),Z=n(19),B=n.n(Z),K=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).componentDidUpdate=function(e,n){t.props.contacts!==e.contacts&&localStorage.setItem("contactArray",JSON.stringify(t.props.contacts))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(j,{children:[Object(p.jsx)("h1",{className:B.a.title,children:"Phonebook"}),Object(p.jsx)(N,{}),Object(p.jsx)("h2",{className:B.a.title,children:"Contacts"}),Object(p.jsx)(J,{}),Object(p.jsx)(k,{})]})}}]),n}(a.Component),P=Object(i.b)((function(t){return{contacts:t.contacts.items}}))(K),q=n(13),E=n(23),M=n.n(E),Q=n(2),T=function(t,e){return t.some((function(t){return t.name.toLowerCase()===e.payload.name.toLowerCase()}))?(alert("".concat(e.payload.name," is already in contacts")),t):t.some((function(t){return t.number===e.payload.number}))?(alert("".concat(e.payload.number," is already in contacts under a different name")),t):[e.payload].concat(Object(q.a)(t))},U=JSON.parse(localStorage.getItem("contactArray")),G=Object(C.c)(U||[],(g={},Object(f.a)(g,x.saveContact,(function(t,e){return T(t,e)})),Object(f.a)(g,x.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),g)),H=Object(C.c)("",Object(f.a)({},x.updateFilter,(function(t,e){return e.payload}))),R=Object(Q.b)({items:G,filter:H}),$=[].concat(Object(q.a)(Object(C.d)()),[M.a]),V=Object(C.a)({reducer:{contacts:R},middleware:$,devTools:!1});n(44),n(45);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{store:V,children:Object(p.jsx)(P,{})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__3KZQ1",property:"ContactForm_property__3zdgx",input:"ContactForm_input__37fAd",button:"ContactForm_button__2j25n"}}},[[46,1,2]]]);
//# sourceMappingURL=main.b48da6cc.chunk.js.map