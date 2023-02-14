---
title: Members
layout: default
---

<div class="grid-wrapper">
{% for member in site.members %}
    {% if member.status != 'alum' %}
        {% include member.html member=member %}
    {% endif %}
{% endfor %}
</div>


## Past Members

<div class="grid-wrapper">
{% for member in site.members %}
    {% if member.status == 'alum' %}
        {% include member.html member=member %}
    {% endif %}
{% endfor %}
</div>
