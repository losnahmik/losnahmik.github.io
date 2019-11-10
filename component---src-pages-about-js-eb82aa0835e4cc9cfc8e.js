(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,n){"use strict";n.r(t);n(29),n(30),n(13),n(49);var a=n(0),r=n.n(a),o=n(195),i=n(196),l=n(202),c=n(206);function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    padding: 0 16px;\n  "]);return u=function(){return e},e}var s={languages:["JavaScript","TypeScript","Python"],"frameworks & libraries":["React","MobX","Next.js","Jest","Django","Webpack","Cypress"],others:["Git","HTML5/CSS3"]},p=o.b.div.withConfig({displayName:"about__Wrapper",componentId:"sc-50i29j-0"})(["margin-bottom:160px;",";"],i.a.tablet(u())),m=o.b.div.withConfig({displayName:"about__Column",componentId:"sc-50i29j-1"})(["margin-bottom:2em;"]),d=o.b.section.withConfig({displayName:"about__Section",componentId:"sc-50i29j-2"})(["margin-bottom:40px;& + &{padding-top:24px;border-top:1px solid #ddd;}li{margin-bottom:4px;}h3{text-transform:capitalize;}a{color:#303030;}"]),f=o.b.div.withConfig({displayName:"about__Tag",componentId:"sc-50i29j-3"})(["color:#303030;display:inline-block;padding:4px 8px;margin-bottom:8px;text-transform:capitalize;background-color:#fbe134;margin-right:8px;"]);t.default=Object(c.a)(function(){return r.a.createElement(l.a,null,r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement("p",null,"Hi! I'm Hansol, frontend developer from Seoul, Korea."," ",r.a.createElement("a",{href:"https://twitter.com/@jyhwng",target:"_blank",rel:"noopener noreferrer"},"Twitter")," ",r.a.createElement("a",{href:"https://github.com/jyhwng",target:"_blank",rel:"noopener noreferrer"},"GitHub"))),r.a.createElement(d,null,Object.keys(s).map(function(e,t){return r.a.createElement(m,{key:t},r.a.createElement("h3",null,e),s[e].map(function(e,t){return r.a.createElement(f,{key:t},e)}))})),r.a.createElement(d,null,r.a.createElement("h3",null,"Press"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://wi-tech.org/2017/11/05/jiyoung-hwang-django-girls-organizer/",target:"_blank",rel:"noopener noreferrer"},"Jiyoung Hwang: Django Girls Organizer"),", Witech, 2017.11.05"),r.a.createElement("li",null,r.a.createElement("a",{href:"http://thepin.ch/techgear/m9qmfd/adela-branch-1",target:"_blank",rel:"noopener noreferrer"},"개발 공부하는 여자들, 장고걸스를 만나보았다"),", Pinch, 2017.04.11")))))})},196:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(29),n(30),n(13),n(49);var a=n(195),r={giant:1170,desktop:992,tablet:768,phone:376},o=Object.keys(r).reduce(function(e,t){var n=r[t]/16;return e[t]=function(){return Object(a.a)(["@media (max-width:","em){","}"],n,a.a.apply(void 0,arguments))},e},{})},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(198),n(9).default.enqueue,r.a.createContext({})},198:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},199:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(201),l=n.n(i),c=n(197),u=(n(50),n(196));function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      margin-left: 16px;\n    }\n  "]);return s=function(){return e},e}var p=[{name:"Posts",route:"/"},{name:"About",route:"/about"},{name:"👉",route:"/projects"}],m=function(){return r.a.createElement(d,null,p.map(function(e,t){return r.a.createElement(f,{key:t},r.a.createElement(c.a,{to:e.route},e.name))}))},d=o.b.ul.withConfig({displayName:"Menu__Menus",componentId:"sc-1gjq0u3-0"})(["margin:0;padding:0;display:flex;line-height:1;list-style-type:none;"]),f=o.b.li.withConfig({displayName:"Menu__Li",componentId:"sc-1gjq0u3-1"})(["& + &{margin-left:20px;","}&:last-child{transition:scale 0.2s cubic-bezier(0.23,1,0.32,1);}&:last-child:hover{transform:scale(1.2);}"],u.a.tablet(s())),g=function(e){var t=e.children;return r.a.createElement("span",{role:"img","aria-labelledby":"emoji"},t)};var h=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isCollapsed:!1},t.collapseHeader=function(){window.scrollY>94?t.setState({isCollapsed:!0}):t.setState({isCollapsed:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.collapseHeader)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.collapseHeader)},o.render=function(){var e=this.state.isCollapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"56px"}}),r.a.createElement(w,{isCollapsed:e},r.a.createElement(y,null,r.a.createElement(E,null,r.a.createElement(b,null),r.a.createElement(m,null)))))},a}(r.a.Component),b=function(){return r.a.createElement(c.a,{to:"/"},r.a.createElement("span",null,"Start-up + O2O + Brand + Design + Consult +",r.a.createElement("br",null),r.a.createElement(g,null,"🚀"),"Business Development ",r.a.createElement("br",null)))},y=o.b.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uozftq-0"})(["width:100%;"]),w=o.b.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1uozftq-1"})(["top:0;z-index:1;width:100%;position:sticky;background-color:#fff;",";"],function(e){return e.isCollapsed&&"border-bottom: 1px solid #ddd"}),E=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-1uozftq-2"})(["display:flex;padding:16px;margin:0 auto;max-width:1000px;justify-content:space-between;a{font-weight:bold;text-decoration:none;color:#303030;font-size:1.2em;}"]);function v(){var e=_(["\n    padding: 24px 16px;\n  "]);return v=function(){return e},e}function x(){var e=_(["\n    transform: translateY(123px);\n    ","\n  "]);return x=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),e.raw=t,e}var j=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.handleOpenFooter=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{isOpen:this.state.isOpen},r.a.createElement(O,null,r.a.createElement("p",null,"Found an error? Help me correct it by submitting issues"," ",r.a.createElement("a",{href:"https://github.com/jyhwng/jyhwng.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement("p",null,"© 2017-2019 jyhwng"))),r.a.createElement(C,{onClick:this.handleOpenFooter}))},a}(a.Component),C=function(e){var t=e.onClick;return r.a.createElement(I,null,r.a.createElement(N,{onClick:t},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"17"}))))},k=o.b.footer.withConfig({displayName:"Footer__FooterBase",componentId:"yuzjwy-0"})(["left:0;right:0;bottom:0;position:fixed;background-color:#fff;border-top:1px solid #ddd;transform:translateY(131px);"," transition:transform 350ms cubic-bezier(0.23,1,0.32,1);",";"],u.a.tablet(x(),function(e){return e.isOpen&&"\n      transform: translateY(0);\n    "}),function(e){return e.isOpen&&"\n    transform: translateY(0);\n  "}),O=o.b.div.withConfig({displayName:"Footer__Wrapper",componentId:"yuzjwy-1"})(["max-width:720px;margin:0 auto;padding:40px 0;p{margin:0;}",";"],u.a.tablet(v())),I=o.b.div.withConfig({displayName:"Footer__ButtonWrapper",componentId:"yuzjwy-2"})(["position:fixed;bottom:16px;right:16px;"]),N=o.b.a.withConfig({displayName:"Footer__Anchor",componentId:"yuzjwy-3"})(["display:block;cursor:pointer;svg{opacity:0.5;width:32px;height:32px;stroke:#303030;fill:#fff;}"]);n(203),n(204);n.d(t,"a",function(){return z});var z=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Camels and Snakes",meta:[{name:"jyhwng",content:"blog"}]}),r.a.createElement(h,null),r.a.createElement(H,null,t),r.a.createElement(j,null))},H=o.b.div.withConfig({displayName:"layouts__Inner",componentId:"g1jb67-0"})(["padding-top:40px;"])},202:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),o=n(195),i=function(e){var t=e.children;return r.a.createElement(l,null,t)},l=o.b.div.withConfig({displayName:"Container__ContainerBase",componentId:"ovvrwj-0"})(["max-width:1000px;margin:0 auto;width:100%;"])},206:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),o=n(200),i=function(e){return function(t){return r.a.createElement(o.a,null,r.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-about-js-eb82aa0835e4cc9cfc8e.js.map