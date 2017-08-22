// ==UserScript==
// @name Open all wiki expands
// @namespace https://www.github.com/bifferz
// @version 0.2
// @description Opens all expand macros in Confluence
// @match https://*.atlassian.net/wiki/display/*
// @match https://*.atlassian.net/wiki/spaces/*
// @downloadURL https://github.com/bifferz/scripts/openAllExpands.js
// ==/UserScript==

var input=document.createElement("input");
input.type="button";
input.value="Expand All";
input.onclick = toggleAll;
input.setAttribute("style","font-size:12px;position:fixed;top:7px;left:17%;padding:5px 15px;z-index:1000;background:#ccc;border:0 none;cursor:pointer;-webkit-border-radius:5px;border-radius:5px;");
document.body.appendChild(input); 

function toggleAll() {
    $(".expand-control").trigger('click');
}
