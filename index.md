---
title: Home
layout: default
---

## Quick Guide

{% for step in site.guide %}
<section class="guide-step open">
    <h3 class="step-title">
        <span class="material-symbols-outlined accordion-arrow">expand_more</span>
        <span class="step-number">{{ step.number }}</span> {{ step.title }}
    </h3>
    <div class="step-content-wrapper">
        {{ step.content }}
    </div>
</section>
{% endfor %}

## Contact
{% include contacts.html %}
