(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(71)},34:function(e,a,t){},36:function(e,a,t){},57:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),s=t.n(c),l=t(73),o=(t(34),t(3)),i=t(4),m=t(7),u=t(5),d=t(6),h=t(72),p=t(74),E=t(75),b=(t(36),t(26)),f=t.n(b),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={data:[],isLoading:!1,error:null},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./mendata.json").then(function(a){return e.setState({data:a.data,isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):t?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},a.map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("div",{className:"item-image"}),r.a.createElement("span",{className:"item-detail"},e.name),r.a.createElement("span",{className:"item-detail"},e.price),r.a.createElement("button",{key:e.id,className:"buy-it"},"Buy It"))})))}}]),a}(n.Component),j=(t(57),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"brands-main"},r.a.createElement("hr",{className:"style-one"}),r.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),r.a.createElement("div",{className:"brands-image"}))}}]),a}(n.Component)),v=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(O,null),r.a.createElement(j,null))}}]),a}(n.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),L=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),g=(t(59),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-menu"},r.a.createElement("div",{className:"brand"},r.a.createElement("a",{href:"/fashion-today",className:"link-home"}," | Fashion Today | ")),r.a.createElement("div",{className:"shop-cart"},r.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"/fashion-today/women"},"Women")),r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"/fashion-today/men"},"Men")),r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"/fashion-today/about"},"About")),r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"/fashion-today/support"},"Support")),r.a.createElement("li",{className:"menu-link"},r.a.createElement("a",{href:"/fashion-today/faq"},"FAQ")))))}}]),a}(n.Component)),C=(t(61),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-text"},r.a.createElement("h1",null,"New Season Arrivals"),r.a.createElement("h4",null,"Check out the new treds"),r.a.createElement("button",{className:"header-button"},"Shop now"))))}}]),a}(n.Component)),U=(t(63),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-main"},r.a.createElement("div",{className:"our-store"},r.a.createElement("h4",null,"Our Store"),r.a.createElement("span",{className:"address"},"141 South Grand Avenue"),r.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),r.a.createElement("span",{className:"phone"},"(231) 748-2411"),r.a.createElement("p",null,"62 George Road E48NF, London, Essex")),r.a.createElement("div",{className:"blog-posts"},r.a.createElement("h4",null,"Blog Posts"),r.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),r.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"owner"}," | Created by ",r.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),r.a.createElement("div",{className:"support"},r.a.createElement("h4",null,"Support"),r.a.createElement("span",null,"Terms & Conditions"),r.a.createElement("span",null,"FAQ"),r.a.createElement("span",null,"Payments"),r.a.createElement("span",null,"Refounds"),r.a.createElement("span",null,"Track Order"),r.a.createElement("span",null,"Services")))}}]),a}(n.Component)),S=t(13),B=t.n(S),x=B()({basename:"/fashion-today"}),P=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/fashion-today",history:x},r.a.createElement("div",null,r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content"},r.a.createElement(g,null),r.a.createElement(C,null))),r.a.createElement(p.a,null,r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today",component:v,exact:!0}),r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today/women",component:y,exact:!0}),r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today/men",component:N,exact:!0}),r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today/about",component:k,exact:!0}),r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today/support",component:w,exact:!0}),r.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/fashion-today/faq",component:L}),r.a.createElement(E.a,{component:v})),r.a.createElement("div",{className:"main-footer"},r.a.createElement(U,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=B()({basename:"/fashion-today"});s.a.render(r.a.createElement(l.a,{basename:"/fashion-today",hashHistory:R},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.a1361f43.chunk.js.map