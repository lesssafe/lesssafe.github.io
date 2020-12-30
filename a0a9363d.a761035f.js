(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),o=(r(0),r(166)),i={slug:"5-javascript-tricky-problems",title:"\u6574\u7406\u4e865\u4e2aJavaScript\u602a\u5f02\u884c\u4e3a\u53ca\u5176\u539f\u56e0",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002",tags:["\u524d\u7aef","JavaScript"]},c={permalink:"/5-javascript-tricky-problems",source:"@site/blog\\2020-12-13-5-javascript-tricky-problems.md",description:"JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002",date:"2020-12-13T00:00:00.000Z",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"JavaScript",permalink:"/tags/java-script"}],title:"\u6574\u7406\u4e865\u4e2aJavaScript\u602a\u5f02\u884c\u4e3a\u53ca\u5176\u539f\u56e0",readingTime:1.63,truncated:!0,nextItem:{title:"1024\uff1a\u7a0b\u5e8f\u5458\uff0c\u4f60\u7684\u8eab\u4f53\u8fd8\u597d\u5417\uff1f",permalink:"/1024-developer-health"}},p=[],u={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5982\u679c\u4f60\u7528 JavaScript \u5199\u8fc7\u9879\u76ee\u6216\u8005\u53c2\u52a0\u8fc7\u9762\u8bd5\uff0c\u90a3\u4e00\u5b9a\u9047\u5230\u8fc7\u4e0d\u5c11\u4ee4\u4eba\u532a\u5937\u6240\u601d\u7684\u95ee\u9898\u3002JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002\u90a3\u4e48\u8fd9\u7bc7\u6587\u7ae0\u5c31\u603b\u7ed3\u4e86 5 \u4e2a JavaScript \u6bd4\u8f83\u5751\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u5b83\u4eec\u51fa\u73b0\u7684\u539f\u56e0\u548c\u89e3\u51b3\u65b9\u6cd5\u3002"))}l.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);