(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},28:function(e,t,a){e.exports=a(74)},33:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),s=a(77),i=(a(33),a(2)),o=a(3),m=a(5),u=a(4),d=a(6),p=a(76),h=a(79),E=a(78),b=(a(35),a(12)),f=a.n(b),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./hotItems.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper",id:"go-to"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("div",{className:"item-image"}),r.a.createElement("span",{className:"item-detail"},e.name),r.a.createElement("span",{className:"item-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component),j=(a(56),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"brands-main"},r.a.createElement("hr",{className:"style-one"}),r.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),r.a.createElement("div",{className:"brands-image"}))}}]),t}(n.Component)),O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(v,null),r.a.createElement(j,null))}}]),t}(n.Component),N=(a(58),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./women.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"women"},r.a.createElement("div",{className:"women-image"}),r.a.createElement("span",{className:"women-detail"},e.name),r.a.createElement("span",{className:"women-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null))}}]),t}(n.Component),y=(a(60),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./men.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"men"},r.a.createElement("div",{className:"men-image"}),r.a.createElement("span",{className:"men-detail"},e.name),r.a.createElement("span",{className:"men-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(y,null))}}]),t}(n.Component),w=(a(62),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./kids.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?r.a.createElement("p",null,n.message):a?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"products-main"},r.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),r.a.createElement("hr",{className:"style-eight"}),r.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"kids"},r.a.createElement("div",{className:"kids-image"}),r.a.createElement("span",{className:"kids-detail"},e.name),r.a.createElement("span",{className:"kids-detail"},e.price),r.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement(w,null))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),I=a(75),x=(a(64),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-menu"},r.a.createElement("div",{className:"brand"},r.a.createElement(I.a,{to:"/home",className:"brand"}," | Fashion Today | ")),r.a.createElement("div",{className:"shop-cart"},r.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",{className:"menu-link"},r.a.createElement(I.a,{to:"/women"},"Women")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(I.a,{to:"/men"},"Men")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(I.a,{to:"/kids"},"Kids")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(I.a,{to:"/support"},"Support")),r.a.createElement("li",{className:"menu-link"},r.a.createElement(I.a,{to:"/faq"},"FAQ")))))}}]),t}(n.Component)),B=(a(68),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-text"},r.a.createElement("h1",null,"New Season Arrivals"),r.a.createElement("h4",null,"Check out the new trends"),r.a.createElement("button",{className:"header-button"},r.a.createElement("a",{href:"#go-to",className:"hot-items"},"Shop Now")))))}}]),t}(n.Component)),P=(a(70),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-main"},r.a.createElement("div",{className:"our-store"},r.a.createElement("h4",null,"Our Store"),r.a.createElement("span",{className:"address"},"141 South Grand Avenue"),r.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),r.a.createElement("span",{className:"phone"},"(231) 748-2411"),r.a.createElement("p",null,"62 George Road E48NF, London, Essex")),r.a.createElement("div",{className:"blog-posts"},r.a.createElement("h4",null,"Blog Posts"),r.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),r.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"owner"}," | Created by ",r.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),r.a.createElement("div",{className:"support"},r.a.createElement("h4",null,"Support"),r.a.createElement("span",null,"Terms & Conditions"),r.a.createElement("span",null,"FAQ"),r.a.createElement("span",null,"Payments"),r.a.createElement("span",null,"Refounds"),r.a.createElement("span",null,"Track Order"),r.a.createElement("span",null,"Services")))}}]),t}(n.Component)),M=(a(25),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={intervalId:0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},r.a.createElement("span",{className:"arrow-up glyphicon glyphicon-chevron-up"},r.a.createElement("i",{class:"fas fa-angle-up fa-2x"})))}}]),t}(r.a.Component)),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={colors:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"long"},r.a.createElement(M,{scrollStepInPx:"500",delayInMs:"16.66"}))}}]),t}(r.a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"content"},r.a.createElement(x,null),r.a.createElement(B,null))),r.a.createElement(h.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:O}),r.a.createElement(E.a,{exact:!0,path:"/women",component:g}),r.a.createElement(E.a,{exact:!0,path:"/men",component:k}),r.a.createElement(E.a,{exact:!0,path:"/kids",component:L}),r.a.createElement(E.a,{exact:!0,path:"/support",component:S}),r.a.createElement(E.a,{exact:!0,path:"/faq",component:C}),r.a.createElement(E.a,{exact:!0,component:O})),r.a.createElement(T,null),r.a.createElement("div",{className:"main-footer"},r.a.createElement(P,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.8047e378.chunk.js.map