// ==UserScript==
// @name Open all wiki expands
// @namespace https://www.github.com/bifferz
// @version 0.5
// @description Opens all expand macros in Confluence Wiki
// @include https://*.atlassian.net/wiki/display/*
// @include https://*.atlassian.net/wiki/spaces/*
// @exclude https://*.atlassian.net/wiki/spaces/*/edit/*
// @downloadURL https://raw.githubusercontent.com/bifferz/grease/master/openAllExpands.user.js
// ==/UserScript==

var input=document.createElement("input");
input.type="button";
input.value="Expand All";
input.onclick = toggleAll;
input.setAttribute("style","font-size:12px;position:absolute;top:7px;left:850px;padding:5px 10px;z-index:1000;background:#ccc;border:0 none;cursor:pointer;-webkit-border-radius:5px;border-radius:5px;");
document.body.appendChild(input); 

function toggleAll() {
    $(".expand-control").trigger('click');
}

