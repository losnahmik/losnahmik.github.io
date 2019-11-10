(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(195),i=n(200),l=n(196);function c(){var e=p(["\n    margin-left: 0;\n  "]);return c=function(){return e},e}function s(){var e=p(["\n    flex-direction: column;\n  "]);return s=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=function(e){var t=e.project;return r.a.createElement(d,null,r.a.createElement(g,null,r.a.createElement(m,null,t.url?r.a.createElement("a",{href:t.url,target:"_blank"},t.title):r.a.createElement("span",null,t.title)),r.a.createElement(f,null,t.techStack)),r.a.createElement(h,null,r.a.createElement(b,{src:t.imageUrl,height:t.imageHeight}),r.a.createElement("p",null,t.description)))},d=o.b.div.withConfig({displayName:"Project__ProjectWrapper",componentId:"sc-2tl5vf-0"})(["display:flex;",""],l.a.tablet(s())),m=o.b.h1.withConfig({displayName:"Project__Title",componentId:"sc-2tl5vf-1"})(["margin-top:0;a{color:#303030;text-decoration:none;}a:hover{text-decoration:underline;}"]),f=o.b.p.withConfig({displayName:"Project__Subtext",componentId:"sc-2tl5vf-2"})(['font-size:14px;margin-bottom:24px;font-family:"PT Mono";']),g=o.b.div.withConfig({displayName:"Project__LeftWrapper",componentId:"sc-2tl5vf-3"})(["flex:1;"]),h=o.b.div.withConfig({displayName:"Project__RightWrapper",componentId:"sc-2tl5vf-4"})(["flex:4;margin-left:36px;p{margin-top:24px;margin-bottom:0;}",""],l.a.tablet(c())),b=o.b.img.withConfig({displayName:"Project__Image",componentId:"sc-2tl5vf-5"})(["width:100%;object-fit:cover;"]),y=[{title:"repick.co",url:"https://repick.co/",techStack:"Vue.js, Meteor, MongoDB, AWS Lambda, Algolia",imageUrl:"https://i.imgur.com/4ZM6E0l.gif",description:"Curated home decor products across the web. Built with Vue.js/Meteor. Managed database with MongoDB. Implemented category search with Algolia. Scraped product information including price, discount rate with Python script on AWS Lambda. Chosen as #5 product of the day in ProductHunt"},{title:"Panking",techStack:"Python, Django, MySQL",imageUrl:"https://user-images.githubusercontent.com/18133030/63225730-80569780-c20e-11e9-9dee-8442dee74b97.png",imageHeight:"300px",description:"Social media with data visualization on political issues. Wrote Python script to scrape information from National Assembly API. Stored and updated data using MySQL Workbench. Set-up admin interface with Django and MySQL."}],w=o.b.div.withConfig({displayName:"projects__Wrapper",componentId:"sc-1441n5h-0"})(["margin:0 auto;max-width:720px;padding-left:16px;padding-right:16px;font-family:Roboto,sans-serif;"]),v=o.b.hr.withConfig({displayName:"projects__Hr",componentId:"sc-1441n5h-1"})(["margin:48px 0;border:0.5px solid #ddd;"]);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(w,null,y.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{project:e,key:t}),r.a.createElement(v,null))})))}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(29),n(30),n(13),n(49);var a=n(195),r={giant:1170,desktop:992,tablet:768,phone:376},o=Object.keys(r).reduce(function(e,t){var n=r[t]/16;return e[t]=function(){return Object(a.a)(["@media (max-width:","em){","}"],n,a.a.apply(void 0,arguments))},e},{})},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(198),n(9).default.enqueue,r.a.createContext({})},198:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},199:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(201),l=n.n(i),c=n(197),s=(n(50),n(196));function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      margin-left: 16px;\n    }\n  "]);return p=function(){return e},e}var u=[{name:"Posts",route:"/"},{name:"About",route:"/about"},{name:"👉",route:"/projects"}],d=function(){return r.a.createElement(m,null,u.map(function(e,t){return r.a.createElement(f,{key:t},r.a.createElement(c.a,{to:e.route},e.name))}))},m=o.b.ul.withConfig({displayName:"Menu__Menus",componentId:"sc-1gjq0u3-0"})(["margin:0;padding:0;display:flex;line-height:1;list-style-type:none;"]),f=o.b.li.withConfig({displayName:"Menu__Li",componentId:"sc-1gjq0u3-1"})(["& + &{margin-left:20px;","}&:last-child{transition:scale 0.2s cubic-bezier(0.23,1,0.32,1);}&:last-child:hover{transform:scale(1.2);}"],s.a.tablet(p())),g=function(e){var t=e.children;return r.a.createElement("span",{role:"img","aria-labelledby":"emoji"},t)};var h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isCollapsed:!1},t.collapseHeader=function(){window.scrollY>94?t.setState({isCollapsed:!0}):t.setState({isCollapsed:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.collapseHeader)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.collapseHeader)},o.render=function(){var e=this.state.isCollapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"56px"}}),r.a.createElement(w,{isCollapsed:e},r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement(b,null),r.a.createElement(d,null)))))},a}(r.a.Component),b=function(){return r.a.createElement(c.a,{to:"/"},r.a.createElement("span",null,"Start-up + O2O + Brand + Design + Consult +",r.a.createElement("br",null),r.a.createElement(g,null,"🚀"),"Business Development ",r.a.createElement("br",null)))},y=o.b.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uozftq-0"})(["width:100%;"]),w=o.b.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1uozftq-1"})(["top:0;z-index:1;width:100%;position:sticky;background-color:#fff;",";"],function(e){return e.isCollapsed&&"border-bottom: 1px solid #ddd"}),v=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-1uozftq-2"})(["display:flex;padding:16px;margin:0 auto;max-width:1000px;justify-content:space-between;a{font-weight:bold;text-decoration:none;color:#303030;font-size:1.2em;}"]);function E(){var e=_(["\n    padding: 24px 16px;\n  "]);return E=function(){return e},e}function x(){var e=_(["\n    transform: translateY(123px);\n    ","\n  "]);return x=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),e.raw=t,e}var j=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.handleOpenFooter=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{isOpen:this.state.isOpen},r.a.createElement(I,null,r.a.createElement("p",null,"Found an error? Help me correct it by submitting issues"," ",r.a.createElement("a",{href:"https://github.com/jyhwng/jyhwng.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement("p",null,"© 2017-2019 jyhwng"))),r.a.createElement(C,{onClick:this.handleOpenFooter}))},a}(a.Component),C=function(e){var t=e.onClick;return r.a.createElement(N,null,r.a.createElement(S,{onClick:t},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"17"}))))},k=o.b.footer.withConfig({displayName:"Footer__FooterBase",componentId:"yuzjwy-0"})(["left:0;right:0;bottom:0;position:fixed;background-color:#fff;border-top:1px solid #ddd;transform:translateY(131px);"," transition:transform 350ms cubic-bezier(0.23,1,0.32,1);",";"],s.a.tablet(x(),function(e){return e.isOpen&&"\n      transform: translateY(0);\n    "}),function(e){return e.isOpen&&"\n    transform: translateY(0);\n  "}),I=o.b.div.withConfig({displayName:"Footer__Wrapper",componentId:"yuzjwy-1"})(["max-width:720px;margin:0 auto;padding:40px 0;p{margin:0;}",";"],s.a.tablet(E())),N=o.b.div.withConfig({displayName:"Footer__ButtonWrapper",componentId:"yuzjwy-2"})(["position:fixed;bottom:16px;right:16px;"]),S=o.b.a.withConfig({displayName:"Footer__Anchor",componentId:"yuzjwy-3"})(["display:block;cursor:pointer;svg{opacity:0.5;width:32px;height:32px;stroke:#303030;fill:#fff;}"]);n(203),n(204);n.d(t,"a",function(){return O});var O=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Camels and Snakes",meta:[{name:"jyhwng",content:"blog"}]}),r.a.createElement(h,null),r.a.createElement(M,null,t),r.a.createElement(j,null))},M=o.b.div.withConfig({displayName:"layouts__Inner",componentId:"g1jb67-0"})(["padding-top:40px;"])}}]);
//# sourceMappingURL=component---src-pages-projects-js-bfa79d6578cd44a0dc32.js.map