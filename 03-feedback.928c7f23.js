!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("dCfNN");var o=a("1WSnx"),n=document.querySelector("button"),l=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]');try{var c=localStorage.getItem("feedback-form-state"),d=JSON.parse(c);l.value=d.email,i.textContent=d.message}catch(e){}n.addEventListener("click",o.throttle((function(e){e.preventDefault();var t={email:l.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(t));var r=localStorage.getItem("feedback-form-state"),a=JSON.parse(r);console.log(a)}),500))}();
//# sourceMappingURL=03-feedback.928c7f23.js.map
