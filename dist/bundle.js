!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=n(1),r=n(2);n(3)(o(),r())},function(e,t,n){"use strict";e.exports=function(){var e=function(){},t=void 0,n=void 0,o=void 0,r=void 0,s=void 0,u=void 0;return t=document.getElementById("name"),n=document.getElementById("surname"),o=document.getElementById("email"),r=document.getElementById("telephone"),s=document.getElementById("registerButton"),u=document.getElementById("message"),s.addEventListener("click",function(){e({name:t.textContent,surname:n.textContent,email:o.textContent,telephone:r.textContent})}),{subscribeToRegisterPersonRequested:function(t){e=t},showSuccessMessage:function(){u.innerHTML="Persona registrada con exito.",u.classList.remove("display: none"),u.classList.add("color: green")},showErrorMessage:function(){u.innerHTML="Hubo un problema, intentelo de nuevo en unos minutos.",u.classList.remove("display: none"),u.classList.add("color: red")}}}},function(e,t,n){"use strict";e.exports=function(){return{registerPerson:function(e,t,n){var o=new XMLHttpRequest;o.onreadystatechange=function(){4===this.readyState&&200===this.status&&t(),n()},o.open("POST","https://jsonplaceholder.typicode.com/posts",!0),o.send(e)}}}},function(e,t,n){"use strict";e.exports=function(e,t){e.subscribeToRegisterPersonRequested(function(n){var o={name:n.name,surname:n.surname,email:n.email,telephone:n.telephone};t.registerPerson(o,function(){e.showSuccessMessage()},function(){e.showErrorMessage()})})}}]);