import"./assets/styles-c598cb38.js";const l=document.querySelector(".feedback-form");l.addEventListener("input",n);l.addEventListener("submit",s);const a="feedback-form-state";let e=JSON.parse(localStorage.getItem(a))??{};const{email:o,message:r}=l.elements;o.value=e.email??"";r.value=e.message??"";function n(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(a,JSON.stringify(e))}function s(t){t.preventDefault(),o.value!==""&&r.value!==""?(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),l.reset()):alert("Fill both fields!"),e={}}
//# sourceMappingURL=commonHelpers2.js.map