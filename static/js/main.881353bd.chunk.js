(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},145:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=a(153),i=(a(65),a(3)),o=a(4),m=a(6),u=a(5),d=a(7),h=a(152),p=a(155),E=a(156),b=(a(67),a(14)),f=a.n(b),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./hotItems.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper",id:"go-to"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"item-unit"},r.a.createElement("div",{className:"item-image"}),r.a.createElement("span",{className:"item-detail"},e.name),r.a.createElement("span",{className:"item-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component),v=(a(88),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"brands-main"},r.a.createElement("hr",{className:"style-one"}),r.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),r.a.createElement("div",{className:"brands-image"}))}}]),t}(n.Component)),O=a(154),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(O.a.Item,null,r.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img1.jpeg"})),r.a.createElement(O.a.Item,null,r.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img2.jpeg"})),r.a.createElement(O.a.Item,null,r.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img3.jpeg"})),r.a.createElement(O.a.Item,null,r.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img4.jpeg"})),r.a.createElement(O.a.Item,null,r.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img5.jpeg"})))}}]),t}(n.Component),j=(a(133),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"header"},r.a.createElement(N,null),r.a.createElement("div",{className:"header-text"},r.a.createElement("h2",null,"New Season Arrivals"),r.a.createElement("h4",null,"Check out the new trends"),r.a.createElement("button",{className:"header-button"},r.a.createElement("a",{href:"#go-to",className:"hot-items"},"Shop Now")))))}}]),t}(n.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(j,null),r.a.createElement(g,null),r.a.createElement(v,null))}}]),t}(n.Component),w=(a(135),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./women.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement(j,null),r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"women"},r.a.createElement("div",{className:"women-image"}),r.a.createElement("span",{className:"women-detail"},e.name),r.a.createElement("span",{className:"women-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),k=(a(137),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./men.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement(j,null),r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"men"},r.a.createElement("div",{className:"men-image"}),r.a.createElement("span",{className:"men-detail"},e.name),r.a.createElement("span",{className:"men-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),S=(a(139),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./kids.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement(j,null),r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"kids"},r.a.createElement("div",{className:"kids-image"}),r.a.createElement("span",{className:"kids-detail"},e.name),r.a.createElement("span",{className:"kids-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),C=a(59),x=a(25),L=a(17),I=(a(141),function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:e.name,className:"form-label"},e.title),r.a.createElement("div",{className:"checkbox"},e.options.map(function(t){return r.a.createElement("label",{key:t,className:"checkbox-inline"},r.a.createElement("input",{id:e.name,name:e.name,onChange:e.handleChange,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)})))}),U=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:e.name,className:"form-label"},e.title),r.a.createElement("input",Object.assign({className:"form-control",id:e.name,name:e.name,type:e.inputType,value:e.value,onChange:e.handleChange,placeholder:e.placeholder},e)))},T=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label"},e.title),r.a.createElement("textarea",{className:"form-control",name:e.name,rows:e.rows,cols:e.cols,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))},A=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:e.name}," ",e.title," "),r.a.createElement("select",{id:e.name,name:e.name,value:e.value,onChange:e.handleChange,className:"form-control"},r.a.createElement("option",{value:"",disabled:!0},e.placeholder),e.options.map(function(e){return r.a.createElement("option",{key:e,value:e,label:e},e)})))},F=function(e){return r.a.createElement("button",{style:e.style,className:"primary"===e.type?"btn btn-primary":"btn btn-secondary",onClick:e.action},e.title)},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFullName=function(e){var t=e.target.value;a.setState(function(e){return{newUser:Object(L.a)({},e.newUser,{name:t})}},function(){return console.log(a.state.newUser)})},a.handleAge=function(e){var t=e.target.value;a.setState(function(e){return{newUser:Object(L.a)({},e.newUser,{age:t})}},function(){return console.log(a.state.newUser)})},a.handleInput=function(e){var t=e.target.value,n=e.target.name;a.setState(function(e){return{newUser:Object(L.a)({},e.newUser,Object(x.a)({},n,t))}},function(){return console.log(a.state.newUser)})},a.handleTextArea=function(e){console.log("Inside handleTextArea");var t=e.target.value;a.setState(function(e){return{newUser:Object(L.a)({},e.newUser,{about:t})}},function(){return console.log(a.state.newUser)})},a.handleCheckBox=function(e){var t,n=e.target.value;t=a.state.newUser.skills.indexOf(n)>-1?a.state.newUser.skills.filter(function(e){return e!==n}):Object(C.a)(a.state.newUser.skills).concat([n]),a.setState(function(e){return{newUser:Object(L.a)({},e.newUser,{skills:t})}})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.newUser;a.setState(function(e){return{newUser:t}}),console.log(t)},a.handleClearForm=function(e){e.preventDefault(),a.setState({newUser:{name:"",age:"",gender:"",skills:[],about:""}})},a.state={newUser:{name:"",age:"",gender:"",skills:[],about:""},genderOptions:["Male","Female","Others"],skillOptions:["Shopping","Transaction","Return","Other"]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"container-fluid",onSubmit:this.handleFormSubmit},r.a.createElement(U,{inputType:"text",title:"Full Name",name:"name",value:this.state.newUser.name,placeholder:"Enter your name",handleChange:this.handleInput})," ",r.a.createElement(U,{inputType:"number",name:"age",title:"Age",value:this.state.newUser.age,placeholder:"Enter your age",handleChange:this.handleAge})," ",r.a.createElement(A,{title:"Gender",name:"gender",options:this.state.genderOptions,value:this.state.newUser.gender,placeholder:"Select Gender",handleChange:this.handleInput})," ",r.a.createElement(I,{title:"Skills",name:"skills",options:this.state.skillOptions,selectedOptions:this.state.newUser.skills,handleChange:this.handleCheckBox})," ",r.a.createElement(T,{title:"About you.",rows:10,value:this.state.newUser.about,name:"currentPetInfo",handleChange:this.handleTextArea,placeholder:"Describe your past experience and skills"}),r.a.createElement(F,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:P})," ",r.a.createElement(F,{action:this.handleClearForm,type:"secondary",title:"Clear",style:P})," ")}}]),t}(n.Component),P={margin:"10px 20% 10px 20%"},M=B,D=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),G=a(151),R=(a(143),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-menu"},r.a.createElement("div",{className:"brand"},r.a.createElement(G.a,{to:"/home",className:"brand"}," | Fashion Today | ")),r.a.createElement("div",{className:"shop-cart"},r.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu-link"},r.a.createElement(G.a,{to:"/women"},"Women")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(G.a,{to:"/men"},"Men")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(G.a,{to:"/kids"},"Kids")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(G.a,{to:"/support"},"Support")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(G.a,{to:"/faq"},"FAQ")))))}}]),t}(n.Component)),W=(a(145),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-main"},r.a.createElement("div",{className:"our-store"},r.a.createElement("h4",null,"Our Store"),r.a.createElement("span",{className:"address"},"141 South Grand Avenue"),r.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),r.a.createElement("span",{className:"phone"},"(231) 748-2411"),r.a.createElement("p",null,"62 George Road E48NF, London, Essex")),r.a.createElement("div",{className:"blog-posts"},r.a.createElement("h4",null,"Blog Posts"),r.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),r.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"owner"}," | Created by ",r.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),r.a.createElement("div",{className:"support"},r.a.createElement("h4",null,"Support"),r.a.createElement("span",null,"Terms & Conditions"),r.a.createElement("span",null,"FAQ"),r.a.createElement("span",null,"Payments"),r.a.createElement("span",null,"Refounds"),r.a.createElement("span",null,"Track Order"),r.a.createElement("span",null,"Services")))}}]),t}(n.Component)),q=(a(53),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={intervalId:0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},r.a.createElement("span",{className:"arrow-up glyphicon glyphicon-chevron-up"}))}}]),t}(r.a.Component)),J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={colors:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"long"},r.a.createElement(q,{scrollStepInPx:"500",delayInMs:"16.66"}))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"main-content content"},r.a.createElement("div",{className:"content"},r.a.createElement(R,null))),r.a.createElement(p.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:y}),r.a.createElement(E.a,{exact:!0,path:"/women",component:w}),r.a.createElement(E.a,{exact:!0,path:"/men",component:k}),r.a.createElement(E.a,{exact:!0,path:"/kids",component:S}),r.a.createElement(E.a,{exact:!0,path:"/support",component:M}),r.a.createElement(E.a,{exact:!0,path:"/faq",component:D}),r.a.createElement(E.a,{exact:!0,component:y})),r.a.createElement(J,null),r.a.createElement("div",{className:"main-footer"},r.a.createElement(W,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){},60:function(e,t,a){e.exports=a(149)},65:function(e,t,a){},67:function(e,t,a){},88:function(e,t,a){}},[[60,2,1]]]);
//# sourceMappingURL=main.881353bd.chunk.js.map