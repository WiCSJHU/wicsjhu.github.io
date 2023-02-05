---
---
## Sponsors

WiCS is proudly sponsored by:

<div class="sponsors-wrapper">
{% for sponsor in site.data.sponsors %}
<img src="{{ sponsor.logo | relative_url }}" alt="{{ sponsor.name }}" />
{% endfor %}
</div>
