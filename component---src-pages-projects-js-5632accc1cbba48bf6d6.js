(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(195),i=n(201),l=o.b.div.withConfig({displayName:"projects__Wrapper",componentId:"sc-1441n5h-0"})(["margin:0 auto;max-width:720px;font-family:Roboto,sans-serif;"]),c=o.b.img.withConfig({displayName:"projects__Image",componentId:"sc-1441n5h-1"})(["width:100%;object-fit:cover;"]),s=o.b.hr.withConfig({displayName:"projects__Hr",componentId:"sc-1441n5h-2"})(["margin:0;border:0.5px solid #ddd;"]);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l,null,r.a.createElement("h1",null,r.a.createElement("a",{href:"https://repick.co/",target:"_blank"},"repick.co")),r.a.createElement(c,{src:"https://i.imgur.com/4ZM6E0l.gif"}),r.a.createElement("p",null,'"Premium products, curated daily" - Created reusable components with VueJS and Meteor. Extensive use of Sass(variables, mixins and etc). Implemented Algolia for instant search. Wrote Python script on AWS Lambda to scrape product information from url. Refactored JQuery into Vue code. Collaborated via Bitbucket with feature branch workflow and active code reviews. Worked fully remotely with the help of Asana and weekly pair-programming.'),r.a.createElement("p",null,"Vue.js, Meteor, MongoDB, AWS Lambda"),r.a.createElement(s,null),r.a.createElement("h1",null,"Panking"),r.a.createElement(c,{src:"https://user-images.githubusercontent.com/18133030/63225730-80569780-c20e-11e9-9dee-8442dee74b97.png",height:"270"}),r.a.createElement("p",null,"Social media with data visualization on political issues. Wrote Python script to scrape information from National Assembly API. Stored and updated data using MySQL Workbench. Set-up admin interface with Django and MySQL."),r.a.createElement("p",null,"Python, Django, MySQL")))}},196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(197),n(9).default.enqueue,r.a.createContext({})},197:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},198:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(29),n(30),n(13),n(49);var a=n(195),r={giant:1170,desktop:992,tablet:768,phone:376},o=Object.keys(r).reduce(function(e,t){var n=r[t]/16;return e[t]=function(){return Object(a.a)(["@media (max-width:","em){","}"],n,a.a.apply(void 0,arguments))},e},{})},199:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),o=function(e){var t=e.children;return r.a.createElement("span",{role:"img","aria-labelledby":"emoji"},t)}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(202),l=n.n(i),c=n(196),s=(n(50),[{name:"Posts",route:"/"},{name:"About",route:"/about"}]),u=function(){return r.a.createElement(p,null,s.map(function(e,t){return r.a.createElement(d,{key:t},r.a.createElement(c.a,{to:e.route},e.name))}))},p=o.b.ul.withConfig({displayName:"Menu__Menus",componentId:"sc-1gjq0u3-0"})(["display:flex;list-style-type:none;padding:0;margin:0;"]),d=o.b.li.withConfig({displayName:"Menu__Li",componentId:"sc-1gjq0u3-1"})(["& + &{margin-left:24px;}"]),m=n(199);var f=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isCollapsed:!1},t.collapseHeader=function(){window.scrollY>94?t.setState({isCollapsed:!0}):t.setState({isCollapsed:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.collapseHeader)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.collapseHeader)},o.render=function(){var e=this.state.isCollapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"56px"}}),r.a.createElement(y,{isCollapsed:e},r.a.createElement(g,null,r.a.createElement(b,null,r.a.createElement(h,null),r.a.createElement(u,null)))))},a}(r.a.Component),h=function(){return r.a.createElement(c.a,{to:"/"},r.a.createElement("span",null,r.a.createElement(m.a,null,"🐫")," and ",r.a.createElement(m.a,null,"🐍")))},g=o.b.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uozftq-0"})(["width:100%;"]),y=o.b.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1uozftq-1"})(["top:0;z-index:1;width:100%;position:sticky;background-color:#fff;",";"],function(e){return e.isCollapsed&&"border-bottom: 1px solid #ddd"}),b=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-1uozftq-2"})(["display:flex;padding:16px;margin:0 auto;max-width:720px;align-items:center;justify-content:space-between;a{font-weight:bold;text-decoration:none;color:#303030;font-size:1.2em;}"]),w=n(198);function E(){var e=x(["\n    padding: 24px 16px;\n  "]);return E=function(){return e},e}function v(){var e=x(["\n    transform: translateY(123px);\n    ","\n  "]);return v=function(){return e},e}function x(e,t){return t||(t=e.slice(0)),e.raw=t,e}var _=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.handleOpenFooter=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{isOpen:this.state.isOpen},r.a.createElement(j,null,r.a.createElement("p",null,"Found an error? Help me correct it by submitting issues"," ",r.a.createElement("a",{href:"https://github.com/jyhwng/jyhwng.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement("p",null,"© 2017-2019 jyhwng"))),r.a.createElement(k,{onClick:this.handleOpenFooter}))},a}(a.Component),k=function(e){var t=e.onClick;return r.a.createElement(I,null,r.a.createElement(N,{onClick:function(){return window.scroll({top:0,behavior:"smooth"})}},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("polyline",{points:"16 12 12 8 8 12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))),r.a.createElement(N,{onClick:t},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"17"}))))},C=o.b.footer.withConfig({displayName:"Footer__FooterBase",componentId:"yuzjwy-0"})(["bottom:0;left:0;right:0;position:fixed;background-color:#fff;border-top:1px solid #ddd;transform:translateY(131px);"," transition:transform 350ms cubic-bezier(0.23,1,0.32,1);",";"],w.a.tablet(v(),function(e){return e.isOpen&&"\n      transform: translateY(0);\n    "}),function(e){return e.isOpen&&"\n    transform: translateY(0);\n  "}),j=o.b.div.withConfig({displayName:"Footer__Wrapper",componentId:"yuzjwy-1"})(["max-width:720px;margin:0 auto;padding:40px 0;p{margin:0;}",";"],w.a.tablet(E())),I=o.b.div.withConfig({displayName:"Footer__ButtonWrapper",componentId:"yuzjwy-2"})(["position:fixed;bottom:16px;right:16px;"]),N=o.b.a.withConfig({displayName:"Footer__Anchor",componentId:"yuzjwy-3"})(["display:block;cursor:pointer;svg{opacity:0.5;width:32px;height:32px;stroke:#303030;fill:#fff;}&:first-child{margin-bottom:8px;}"]);n(204),n(205);n.d(t,"a",function(){return O});var O=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Camels and Snakes",meta:[{name:"jyhwng",content:"blog"}]}),r.a.createElement(f,null),r.a.createElement(S,null,t),r.a.createElement(_,null))},S=o.b.div.withConfig({displayName:"layouts__Inner",componentId:"g1jb67-0"})(["padding-top:40px;"])}}]);
//# sourceMappingURL=component---src-pages-projects-js-5632accc1cbba48bf6d6.js.map