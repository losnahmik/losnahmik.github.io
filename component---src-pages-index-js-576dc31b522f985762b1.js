(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(138),n(139),n(195)),i=n(196),l=n(206),c=function(e){var t=e.postType,n=e.path,a=e.title,o=e.date,c=e.excerpt,d=e.tags;return r.a.createElement(p,{postType:t},r.a.createElement(i.a,{to:n},a),r.a.createElement(u,null,c),r.a.createElement("div",null,d.map(function(e,t){return r.a.createElement(l.a,{key:t},e)})),!["project","about"].includes(t)&&r.a.createElement(s,null,o))},p=o.b.article.withConfig({displayName:"Card__CardBase",componentId:"sc-1p8dr7j-0"})(["border-top:1px solid #303030;padding:16px 0;position:relative;transition:transform 0.2s cubic-bezier(0.165,0.84,0.44,1);&:hover{transform:translateY(-10px);}a{font-weight:bold;word-break:break-all;text-decoration:none;color:#303030;display:block;}a:hover{text-decoration:underline;}"," ",""],function(e){return"project"===e.postType&&"\n    background-color: #fbe134;\n    border: none;\n    padding: 16px;\n  "},function(e){return"tips"===e.postType&&"\n    // background-color: #303030;\n    // border: none;\n    // padding: 16px;\n    // a {\n    //   color: white;\n    // }\n  "}),s=o.b.p.withConfig({displayName:"Card__Date",componentId:"sc-1p8dr7j-1"})(["font-size:13px;margin-bottom:0;"]),u=o.b.p.withConfig({displayName:"Card__Excerpt",componentId:"sc-1p8dr7j-2"})(["font-size:13px;"]),d=function(e){var t=e.children;return r.a.createElement(m,null,r.a.createElement(f,null,t))},m=o.b.div.withConfig({displayName:"Cards__Wrapper",componentId:"sc-173ms24-0"})(["padding:0 16px;"]),f=o.b.div.withConfig({displayName:"Cards__Grid",componentId:"sc-173ms24-1"})(["width:100%;margin:0 auto;display:grid;max-width:720px;grid-auto-rows:minmax(160px,auto);grid-gap:32px;margin-bottom:80px;grid-template-columns:repeat(auto-fill,minmax(216px,1fr));"]),g=n(207);n.d(t,"query",function(){return h});var h="1179090307";t.default=Object(g.a)(function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(d,null,t.map(function(e,t){var n=e.node.frontmatter;return r.a.createElement(c,{key:t,postType:n.type,path:n.path,title:n.title,date:n.date,excerpt:n.excerpt,tags:n.tags})}))})},196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(197),n(9).default.enqueue,r.a.createContext({})},197:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},198:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(29),n(30),n(13),n(49);var a=n(195),r={giant:1170,desktop:992,tablet:768,phone:376},o=Object.keys(r).reduce(function(e,t){var n=r[t]/16;return e[t]=function(){return Object(a.a)(["@media (max-width:","em){","}"],n,a.a.apply(void 0,arguments))},e},{})},199:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),o=function(e){var t=e.children;return r.a.createElement("span",{role:"img","aria-labelledby":"emoji"},t)}},200:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(202),l=n.n(i),c=n(196),p=(n(50),[{name:"Posts",route:"/"},{name:"About",route:"/about"}]),s=function(){return r.a.createElement(u,null,p.map(function(e,t){return r.a.createElement(d,{key:t},r.a.createElement(c.a,{to:e.route},e.name))}))},u=o.b.ul.withConfig({displayName:"Menu__Menus",componentId:"sc-1gjq0u3-0"})(["display:flex;list-style-type:none;padding:0;margin:0;"]),d=o.b.li.withConfig({displayName:"Menu__Li",componentId:"sc-1gjq0u3-1"})(["& + &{margin-left:24px;}"]),m=n(199);var f=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isCollapsed:!1},t.collapseHeader=function(){window.scrollY>94?t.setState({isCollapsed:!0}):t.setState({isCollapsed:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){window.addEventListener("scroll",this.collapseHeader)},o.componentWillUnmount=function(){window.removeEventListener("scroll",this.collapseHeader)},o.render=function(){var e=this.state.isCollapsed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"56px"}}),r.a.createElement(y,{isCollapsed:e},r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(g,null),r.a.createElement(s,null)))))},a}(r.a.Component),g=function(){return r.a.createElement(c.a,{to:"/"},r.a.createElement("span",null,r.a.createElement(m.a,null,"🐫")," and ",r.a.createElement(m.a,null,"🐍")))},h=o.b.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uozftq-0"})(["width:100%;"]),y=o.b.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1uozftq-1"})(["top:0;z-index:1;width:100%;position:sticky;background-color:#fff;",";"],function(e){return e.isCollapsed&&"border-bottom: 1px solid #ddd"}),b=o.b.div.withConfig({displayName:"Header__Inner",componentId:"sc-1uozftq-2"})(["display:flex;padding:16px;margin:0 auto;max-width:720px;align-items:center;justify-content:space-between;a{font-weight:bold;text-decoration:none;color:#303030;font-size:1.2em;}"]),x=n(198);function w(){var e=E(["\n    padding: 24px 16px;\n  "]);return w=function(){return e},e}function v(){var e=E(["\n    transform: translateY(123px);\n    ","\n  "]);return v=function(){return e},e}function E(e,t){return t||(t=e.slice(0)),e.raw=t,e}var _=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.handleOpenFooter=function(){t.setState({isOpen:!t.state.isOpen})},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{isOpen:this.state.isOpen},r.a.createElement(j,null,r.a.createElement("p",null,"Found an error? Help me correct it by submitting issues"," ",r.a.createElement("a",{href:"https://github.com/jyhwng/jyhwng.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement("p",null,"© 2017-2019 jyhwng"))),r.a.createElement(C,{onClick:this.handleOpenFooter}))},a}(a.Component),C=function(e){var t=e.onClick;return r.a.createElement(I,null,r.a.createElement(N,{onClick:function(){return window.scroll({top:0,behavior:"smooth"})}},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("polyline",{points:"16 12 12 8 8 12"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))),r.a.createElement(N,{onClick:t},r.a.createElement("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"17"}))))},k=o.b.footer.withConfig({displayName:"Footer__FooterBase",componentId:"yuzjwy-0"})(["bottom:0;left:0;right:0;position:fixed;background-color:#fff;border-top:1px solid #ddd;transform:translateY(131px);"," transition:transform 350ms cubic-bezier(0.23,1,0.32,1);",";"],x.a.tablet(v(),function(e){return e.isOpen&&"\n      transform: translateY(0);\n    "}),function(e){return e.isOpen&&"\n    transform: translateY(0);\n  "}),j=o.b.div.withConfig({displayName:"Footer__Wrapper",componentId:"yuzjwy-1"})(["max-width:720px;margin:0 auto;padding:40px 0;p{margin:0;}",";"],x.a.tablet(w())),I=o.b.div.withConfig({displayName:"Footer__ButtonWrapper",componentId:"yuzjwy-2"})(["position:fixed;bottom:16px;right:16px;"]),N=o.b.a.withConfig({displayName:"Footer__Anchor",componentId:"yuzjwy-3"})(["display:block;cursor:pointer;svg{opacity:0.5;width:32px;height:32px;stroke:#303030;fill:#fff;}&:first-child{margin-bottom:8px;}"]);n(204),n(205);n.d(t,"a",function(){return O});var O=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Camels and Snakes",meta:[{name:"jyhwng",content:"blog"}]}),r.a.createElement(f,null),r.a.createElement(z,null,t),r.a.createElement(_,null))},z=o.b.div.withConfig({displayName:"layouts__Inner",componentId:"g1jb67-0"})(["padding-top:40px;"])},206:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),o=n(195),i=function(e){var t=e.children;return r.a.createElement(l,null,t)},l=o.b.span.withConfig({displayName:"Tag__Base",componentId:"sc-1dg6jlw-0"})(["display:inline-block;font-size:13px;background-color:#fbe134;padding:2px 4px;margin-right:8px;margin-bottom:4px;text-transform:lowercase;"])},207:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),o=n(201),i=function(e){return function(t){return r.a.createElement(o.a,null,r.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-index-js-576dc31b522f985762b1.js.map