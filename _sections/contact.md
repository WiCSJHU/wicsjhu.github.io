---
---

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
