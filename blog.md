---
layout: default
title: Blog
---
<div class="container">
{% for post in site.posts limit: 1000 %}
	<div class="row" style="margin-top:15px">
		<div class="col-sm-12" style="background-color: #f0f0f0;">
			<h1>{{ post.title }}</h1>
			<p>{{ post.date | date: "%B %-d, %Y" }}</p>
			<p>{{ post.description }}</p>
			<p style="text-decoration:underline; font-weight:bold"><a href="{{ post.url }}">MORE>></a></p>
		</div>
	</div>
{% endfor %}
</div>