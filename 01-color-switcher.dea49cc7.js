parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TCaP":[function(require,module,exports) {
function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]");function i(){function i(){document.body.style.backgroundColor=t()}i(),timerId=setInterval(i,1e3),e.disabled=!0,l.disabled=!1}function d(){clearInterval(timerId),e.disabled=!1,l.disabled=!0}e.addEventListener("click",i),l.addEventListener("click",d),l.disabled=!0,e.style.display="block",e.style.marginLeft="auto",e.style.marginRight="auto",e.style.marginBottom="20px",e.style.padding="5px",e.style.width="300px",e.style.height="50px",e.style.fontSize="24px",e.style.fontWeight="700",e.style.borderWidth="5px",l.style.display="block",l.style.marginLeft="auto",l.style.marginRight="auto",l.style.padding="5px",l.style.width="300px",l.style.height="50px",l.style.fontSize="24px",l.style.fontWeight="700",l.style.borderWidth="5px";
},{}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-09/01-color-switcher.dea49cc7.js.map