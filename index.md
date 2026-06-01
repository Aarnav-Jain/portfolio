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
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.04);
  cursor: pointer;
  list-style: none;
  user-select: none;
  transition: all 0.25s ease;
}
.cr-summary::-webkit-details-marker {
  display: none;
}
.cr-summary:hover {
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.08);
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
}
.cr-eyebrow {
  display: block;
  margin-bottom: 4px;
  color: #4f46e5; /* Modern Indigo */
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
.cr-lead {
  margin: 0;
  color: #334155; /* Slate 700 */
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.cr-lead::after {
  content: '▾';
  font-size: 12px;
  color: #6366f1;
  transition: transform 0.2s ease;
}
details[open] .cr-lead::after {
  transform: rotate(180deg);
}
.cr-count {
  flex: 0 0 auto;
  padding: 6px 12px;
  border-radius: 999px;
  background: #e0e7ff; /* Soft Indigo tint */
  color: #4338ca;
  font-size: 12px;
  font-weight: 700;
}
.cr-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.cr-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  text-decoration: none;
  color: #1e293b;
  border-radius: 8px;
  transition: all 0.15s ease;
}
.cr-item:hover {
  background-color: #f8fafc; /* Slate 50 */
}
.cr-item:hover .cr-badge {
  background-color: #4f46e5;
  color: #ffffff;
}
.cr-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cr-item-num {
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  min-width: 18px;
}
/* Tiny decorative indicator dots replace the heavy colored lines */
.cr-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.cr-item-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}
.cr-item-sub {
  font-size: 13px;
  color: #64748b;
}
.cr-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: #f1f5f9;
  color: #475569;
  transition: all 0.15s ease;
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width:560px){
  .cr-summary{align-items:flex-start;flex-direction:column; gap:12px}
  .cr-count{align-self:flex-start}
  .cr-item-sub{display:none;}
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
        <span class="cr-dot" style="background:#6366f1"></span>
        <span class="cr-item-title">OOP Architecture</span>
        <span class="cr-item-sub">— Classes, inheritance, methods</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Control-Structures" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">02</span>
        <span class="cr-dot" style="background:#10b981"></span>
        <span class="cr-item-title">Control Structures</span>
        <span class="cr-item-sub">— Loops, conditionals</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Data-Types" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">03</span>
        <span class="cr-dot" style="background:#0ea5e9"></span>
        <span class="cr-item-title">Data Types</span>
        <span class="cr-item-sub">— Numbers, strings, arrays</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/operators" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">04</span>
        <span class="cr-dot" style="background:#f59e0b"></span>
        <span class="cr-item-title">Operators</span>
        <span class="cr-item-sub">— Math, strings, booleans</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Input-Output" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">05</span>
        <span class="cr-dot" style="background:#ef4444"></span>
        <span class="cr-item-title">Input / Output</span>
        <span class="cr-item-sub">— Canvas, keyboard, API</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Documentation" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">06</span>
        <span class="cr-dot" style="background:#ec4899"></span>
        <span class="cr-item-title">Documentation</span>
        <span class="cr-item-sub">— JSDoc, mini-lessons</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Debugging" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">07</span>
        <span class="cr-dot" style="background:#84cc16"></span>
        <span class="cr-item-title">Debugging</span>
        <span class="cr-item-sub">— Console, DevTools, hitbox</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
    
    <a href="{{site.baseurl}}/Testing" class="cr-item">
      <div class="cr-item-left">
        <span class="cr-item-num">08</span>
        <span class="cr-dot" style="background:#dc2626"></span>
        <span class="cr-item-title">Testing</span>
        <span class="cr-item-sub">— Gameplay, API, errors</span>
      </div>
      <span class="cr-badge">Review</span>
    </a>
  </div>
</details>