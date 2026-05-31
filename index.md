---
layout: post 
title: Portfolio Home 
hide: true
show_reading_time: false
---

Hi! My name is Aarnav

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://aarnav-jain.github.io/Portfolio1/js/hw" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #FA8072; border-radius: 6px; font-weight: 700;">
        <img src="{{ '/favicon.ico' | relative_url }}" alt="OCS logo" style="width: 16px; height: 16px;">
        OCS
    </a>
    <a href="https://jakgithub.opencodingsociety.com/gamify/TestGame" style=" text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #FFF; border-radius: 6px; font-weight: 700;">
        <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub logo" style="width: 16px; height: 16px;">
        GitHub
    </a>
    <a href="https://vscode.dev/" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border: 1px solid #007ACC; border-radius: 6px; font-weight: 700;">
        <img src="https://vscode.dev/favicon.ico" alt="VSCode logo" style="width: 16px; height: 16px;">
        VSCode.dev
    </a>
</div>

<br>

### Class Progress

> Here is my progress through coding, click to see these online

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div style="background-color: #00FF00; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
            Snake
        </div>
    </a>
    <a href="{{site.baseurl}}/gamify/parallax" style="text-decoration: none;">
        <div style="background-color: #3c1de8; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
           Fish
        </div>
    </a>
    <a href="{{site.baseurl}}/gamify/water" style="text-decoration: none;">
        <div style="background-color: #b71dc5; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
           Squid
        </div>
    </a>
</div>

<br>


### College Ready

<style>
.cr-dropdown {
  width: 100%;
  margin: 10px 0 18px;
}
.cr-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border: 1px solid rgba(17,24,39,0.12);
  border-radius: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #f7fafc 100%);
  box-shadow: 0 8px 24px rgba(17,24,39,0.06);
  cursor: pointer;
  list-style: none; /* Hide default arrow */
  user-select: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.cr-summary::-webkit-details-marker {
  display: none; /* Hide default arrow on Safari */
}
.cr-summary:hover {
  border-color: rgba(37, 99, 235, 0.4);
  box-shadow: 0 12px 28px rgba(17,24,39,0.1);
}
.cr-eyebrow {
  display: block;
  margin-bottom: 5px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.cr-lead {
  margin: 0;
  color: #1f2937;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
}
/* Visual arrow indicator */
.cr-lead::after {
  content: '▼';
  font-size: 11px;
  color: #2563eb;
  transition: transform 0.2s ease;
}
details[open] .cr-lead::after {
  transform: rotate(180deg);
}
.cr-count {
  flex: 0 0 auto;
  padding: 8px 12px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #075985;
  font-size: 13px;
  font-weight: 800;
}
/* Dropdown content menu wrapper */
.cr-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  padding: 6px;
  background: #ffffff;
  border: 1px solid rgba(17,24,39,0.08);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  animation: slideDown 0.2s ease-out;
}
/* Dropdown rows */
.cr-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  text-decoration: none;
  color: #111827;
  border-radius: 6px;
  transition: background-color 0.15s ease;
}
.cr-item:hover {
  background-color: #f3f4f6;
}
.cr-item-left {
  display: flex;
  align-items: center;
  gap: 14px;
}
.cr-item-num {
  font-size: 12px;
  font-weight: 800;
  color: #9ca3af;
  min-width: 20px;
}
.cr-item-title {
  font-size: 15px;
  font-weight: 700;
}
.cr-item-sub {
  font-size: 13px;
  color: #6b7280;
  margin-left: 10px;
}
.cr-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  color: #ffffff;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width:560px){
  .cr-summary{align-items:flex-start;flex-direction:column}
  .cr-count{align-self:flex-start}
  .cr-item-sub{display:none;} /* Hides subtext on small screens to fit cleanly */
}
</style>

<details class="cr-dropdown">
  <summary class="cr-summary">
    <div>
      <span class="cr-eyebrow">Final Project Review</span>
      <p class="cr-lead">Click here to choose a lesson topic</p>
    </div>
    <span class="cr-count">8 topics</span>
  </summary>
  
  <div class="cr-menu">
    <a href="{{site.baseurl}}/OOP" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">01</span>
        <span class="cr-item-title">OOP Architecture</span>
        <span class="cr-item-sub">— Classes, inheritance, methods</span>
      </div>
      <span class="cr-badge" style="background:#534AB7">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Control-Structures" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">02</span>
        <span class="cr-item-title">Control Structures</span>
        <span class="cr-item-sub">— Loops, conditionals</span>
      </div>
      <span class="cr-badge" style="background:#0F6E56">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Data-Types" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">03</span>
        <span class="cr-item-title">Data Types</span>
        <span class="cr-item-sub">— Numbers, strings, arrays</span>
      </div>
      <span class="cr-badge" style="background:#185FA5">View</span>
    </a>
    
    <a href="{{site.baseurl}}/operators" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">04</span>
        <span class="cr-item-title">Operators</span>
        <span class="cr-item-sub">— Math, strings, booleans</span>
      </div>
      <span class="cr-badge" style="background:#BA7517">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Input-Output" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">05</span>
        <span class="cr-item-title">Input / Output</span>
        <span class="cr-item-sub">— Canvas, keyboard, API</span>
      </div>
      <span class="cr-badge" style="background:#993C1D">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Documentation" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">06</span>
        <span class="cr-item-title">Documentation</span>
        <span class="cr-item-sub">— JSDoc, mini-lessons</span>
      </div>
      <span class="cr-badge" style="background:#993556">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Debugging" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">07</span>
        <span class="cr-item-title">Debugging</span>
        <span class="cr-item-sub">— Console, DevTools, hitbox</span>
      </div>
      <span class="cr-badge" style="background:#639922">View</span>
    </a>
    
    <a href="{{site.baseurl}}/Testing" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">08</span>
        <span class="cr-item-title">Testing</span>
        <span class="cr-item-sub">— Gameplay, API, errors</span>
      </div>
      <span class="cr-badge" style="background:#A32D2D">View</span>
    </a>
  </div>
</details>