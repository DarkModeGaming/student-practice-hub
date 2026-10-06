(function(){var o=`
<div id="root"></div>








`,s=[{t:"src",v:"https://www.googletagmanager.com/gtag/js?id=G-65RVYX5K8M",m:!1},{t:"inline",v:`
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-65RVYX5K8M");
`,m:!1},{t:"inline",v:"try{var _b=localStorage.getItem('tt_bg')||'doubleu';if(_b==='none'){var d=document.documentElement;d.style.backgroundColor='#000';d.style.backgroundImage='none';}}catch(e){}",m:!1},{t:"src",v:"33b75ee58a.js",m:!1},{t:"src",v:"vendor/socket.io.js",m:!1},{t:"src",v:"014525c341.js",m:!1},{t:"src",v:"ae79cebddc.js",m:!1},{t:"src",v:"180ca6ece4.js",m:!1},{t:"src",v:"f7fdb2cec6.js",m:!1},{t:"src",v:"2c3e98252b.js",m:!1}];function r(){var e=document.getElementById("root");e?(e.insertAdjacentHTML("beforebegin",o),e.remove()):document.body.insertAdjacentHTML("afterbegin",o),a(0)}function a(e){if(e>=s.length){try{document.dispatchEvent(new Event("DOMContentLoaded")),window.dispatchEvent(new Event("load"))}catch{}return}var t=s[e];if(t.t==="inline"){var d=document.createElement("script");return t.m&&(d.type="module"),d.textContent=t.v,document.body.appendChild(d),a(e+1)}var n=document.createElement("script");t.m&&(n.type="module"),n.src=t.v,n.onload=function(){a(e+1)},n.onerror=function(){a(e+1)},document.body.appendChild(n)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})();
