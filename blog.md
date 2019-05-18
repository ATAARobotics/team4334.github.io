---
layout: default
title: Blog
---
<div class="container">
	{% for post in site.posts limit: 1000 %}
	<div class="row" style="margin-bottom:15px">
		<div class="col-md-8" style="background-color: #f0f0f0;">
			<h1>{{ post.title }}</h1>
			<p>{{ post.date | date: "%B %-d, %Y" }}</p>
			<p>{{ post.description }}</p>
			<p style="text-decoration:underline; font-weight:bold">
				<a href="{{ post.url }}">MORE>></a>
			</p>
		</div>
		<div class="col-md-4" style="background-color: #f0f0f0; padding-right:0px">
			<img class="img-fluid" alt="Image Not Found!" src="{{ post.img }}">
		</div>
	</div>
	{% endfor %}
</div>