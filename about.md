---
title: About
layout: default
---

Women in Computer Science (the official ACM-W chapter at Johns Hopkins)
is a support group and professional resource for women/non-binary individuals
in computing. Check out our guide to learn more and get involved!

WiCS is proudly sponsored by
{%- for sponsor in site.data.sponsors -%}
<span class="chip">{{ sponsor.name }}</span>
{% endfor %}

<!-- div class="grid-wrapper">
{% for sponsor in site.data.sponsors %}
<img src="{{ sponsor.logo | relative_url }}" alt="{{ sponsor.name }}" />
{% endfor %}
</div-->

## Contact

Questions about joining? Want to become a sponsor? Reach out and say hello!

<div class="grid-wrapper">
{% for contact in site.data.contacts %}
    <article class="contact">
        <span class="material-symbols-outlined contact-icon">{{ contact.icon }}</span>
        <div class="contact-info">
            {% for line in contact.info %}
            {{ line | markdownify }}
            {% endfor %}
        </div>
    </article>
{% endfor %}
</div>
