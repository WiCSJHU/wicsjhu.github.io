---
title: Members
layout: default
---

<div class="grid-wrapper">
{% for member in site.members %}
    <article class="member">
        {% if member.photo %}
        <img src="{{ member.photo }}" alt="Photo of {{ member.name }}" />
        {% else %}
        <div class="member-icon-wrapper">
            <span class="material-symbols-outlined member-icon">favorite</span>
        </div>
        {% endif %}

        <div class="member-info">
            <h3>{{ member.name }}</h3>
            {% if member.position %}
            <span class="member-position">{{ member.position }}</span>
            {% endif %}
        </div>

        <div class="member-bio">
            {{ member.content | markdownify }}
        </div>
    </article>
{% endfor %}
</div>
