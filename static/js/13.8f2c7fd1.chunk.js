(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{252:function(e,t,a){"use strict";function o(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,"a",function(){return o})},258:function(e,t,a){"use strict";var o=a(33),n=a(242),i=a(243),r=a(245),l=a(0),c=a.n(l),s=a(1),d=a.n(s),p=a(240),b=a.n(p),u=a(241),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:u.e,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(Object(r.a)(a))),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,l=e.close,s=e.cssModule,d=e.color,p=e.outline,m=e.size,h=e.tag,g=e.innerRef,f=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+d,O=Object(u.c)(b()(r,{close:l},l||"btn",l||v,!!m&&"btn-"+m,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),s);f.href&&"button"===h&&(h="a");var j=l?"Close":null;return c.a.createElement(h,Object(o.a)({type:"button"===h&&f.onClick?"button":void 0},f,{className:O,ref:g,onClick:this.onClick,"aria-label":a||j}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h},281:function(e,t,a){e.exports=a.p+"static/media/logo.0c64d9ba.ico"},471:function(e,t,a){"use strict";a.r(t);var o=a(252),n=a(85),i=a(86),r=a(88),l=a(87),c=a(89),s=a(0),d=a.n(s),p=a(456),b=a(457),u=a(454),m=a(33),h=a(242),g=a(243),f=a(245),v=a(1),O=a.n(v),j=a(240),k=a.n(j),y=a(278),C=a(241),N=a(258),w={caret:O.a.bool,color:O.a.string,children:O.a.node,className:O.a.string,cssModule:O.a.object,disabled:O.a.bool,onClick:O.a.func,"aria-haspopup":O.a.bool,split:O.a.bool,tag:C.e,nav:O.a.bool},E={isOpen:O.a.bool.isRequired,toggle:O.a.func.isRequired,inNavbar:O.a.bool.isRequired},x=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(f.a)(Object(f.a)(a))),a}Object(g.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this.props,a=t.className,o=t.color,n=t.cssModule,i=t.caret,r=t.split,l=t.nav,c=t.tag,s=Object(h.a)(t,["className","color","cssModule","caret","split","nav","tag"]),p=s["aria-label"]||"Toggle Dropdown",b=Object(C.c)(k()(a,{"dropdown-toggle":i||r,"dropdown-toggle-split":r,"nav-link":l}),n),u=s.children||d.a.createElement("span",{className:"sr-only"},p);return l&&!c?(e="a",s.href="#"):c?e=c:(e=N.a,s.color=o,s.cssModule=n),this.context.inNavbar?d.a.createElement(e,Object(m.a)({},s,{className:b,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:u})):d.a.createElement(y.c,Object(m.a)({},s,{className:b,component:e,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:u}))},t}(d.a.Component);x.propTypes=w,x.defaultProps={"aria-haspopup":!0,color:"secondary"},x.contextTypes=E;var M=x;function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P={tag:C.e,children:O.a.node.isRequired,right:O.a.bool,flip:O.a.bool,modifiers:O.a.object,className:O.a.string,cssModule:O.a.object,persist:O.a.bool},R={isOpen:O.a.bool.isRequired,direction:O.a.oneOf(["up","down","left","right"]).isRequired,inNavbar:O.a.bool.isRequired},q={flip:{enabled:!1}},D={up:"top",left:"left",right:"right",down:"bottom"},I=function(e,t){var a=e.className,o=e.cssModule,n=e.right,i=e.tag,r=e.flip,l=e.modifiers,c=e.persist,s=Object(h.a)(e,["className","cssModule","right","tag","flip","modifiers","persist"]),p=Object(C.c)(k()(a,"dropdown-menu",{"dropdown-menu-right":n,show:t.isOpen}),o),b=i;if(c||t.isOpen&&!t.inNavbar){b=y.b;var u=D[t.direction]||"bottom",g=n?"end":"start";s.placement=u+"-"+g,s.component=i,s.modifiers=r?l:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){T(e,t,a[t])})}return e}({},l,q)}return d.a.createElement(b,Object(m.a)({tabIndex:"-1",role:"menu"},s,{"aria-hidden":!t.isOpen,className:p,"x-placement":s.placement}))};I.propTypes=P,I.defaultProps={tag:"div",flip:!0},I.contextTypes=R;var z=I,L={children:O.a.node,active:O.a.bool,disabled:O.a.bool,divider:O.a.bool,tag:C.e,header:O.a.bool,onClick:O.a.func,className:O.a.string,cssModule:O.a.object,toggle:O.a.bool},S={toggle:O.a.func},J=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(f.a)(Object(f.a)(a))),a.getTabIndex=a.getTabIndex.bind(Object(f.a)(Object(f.a)(a))),a}Object(g.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(C.d)(this.props,["toggle"]),o=a.className,n=a.cssModule,i=a.divider,r=a.tag,l=a.header,c=a.active,s=Object(h.a)(a,["className","cssModule","divider","tag","header","active"]),p=Object(C.c)(k()(o,{disabled:s.disabled,"dropdown-item":!i&&!l,active:c,"dropdown-header":l,"dropdown-divider":i}),n);return"button"===r&&(l?r="h6":i?r="div":s.href&&(r="a")),d.a.createElement(r,Object(m.a)({type:"button"===r&&(s.onClick||this.props.toggle)?"button":void 0},s,{tabIndex:e,role:t,className:p,onClick:this.onClick}))},t}(d.a.Component);J.propTypes=L,J.defaultProps={tag:"button",toggle:!0},J.contextTypes=S;var A=J,B=a(277),F=a(281),G=a.n(F),H=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props;t.children,Object(o.a)(t,["children"]);return d.a.createElement(d.a.Fragment,null,d.a.createElement(B.l,{className:"d-lg-none",display:"md",mobile:!0}),d.a.createElement(B.e,{full:{src:G.a,width:89,height:25,alt:"Magimaji Logo"},minimized:{src:G.a,width:30,height:30,alt:"Magimaji Logo"}}),d.a.createElement(B.l,{className:"d-md-down-none",display:"lg"}),d.a.createElement(b.a,{className:"d-md-down-none",navbar:!0},d.a.createElement(u.a,{className:"px-3"},d.a.createElement(p.a,{to:"/file",className:"nav-link"},"Dashboard"))),d.a.createElement(b.a,{className:"ml-auto",navbar:!0},d.a.createElement(B.d,{direction:"down"},d.a.createElement(M,{nav:!0},d.a.createElement("img",{src:"../../assets/img/avatars/BC.png",className:"img-avatar",alt:"magimaji@hotmail.com"})),d.a.createElement(z,{right:!0,style:{right:"auto"}},d.a.createElement(A,{header:!0,tag:"div",className:"text-center"},d.a.createElement("strong",null,"Account")),d.a.createElement(A,{onClick:function(t){return e.props.onLogout(t)}},d.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}}]),t}(s.Component);H.defaultProps={};t.default=H}}]);
//# sourceMappingURL=13.8f2c7fd1.chunk.js.map