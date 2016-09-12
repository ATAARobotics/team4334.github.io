---
title: Photos
layout: default 
---

{% for x in site.posts %}
  {% if x.layout == 'album' %}
<a href="{{ x.url }}" class="thumbnail"><img src="{{ x.root }}thumbs/{{ x.thumb }}"></a>
<center>
    <h1>{{ x.title }}</h1>
    <h6>{{ x.description }}</h6>
    <h6>{{ x.date | date_to_long_string }}</h6>
</center>
  {% endif %}
{% endfor %}
