---
layout: default
---

<div id="carousel" class="carousel slide bs-docs-carousel-example">
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
        {% for post in site.posts limit: 1 %}
            <div class="item active">
                <a href="{{ post.url }}"><img style="margin: 0 auto;height:450px;" src="{{ post.img }}" alt="Image not found!"></a>
                <div class="carousel-caption">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.description }}</p>
                </div>
            </div>
        {% endfor %}
        {% for post in site.posts limit: 4 offset: 1 %}
            <div class="item">
                <a href="{{ post.url }}"><img style="margin: 0 auto;height:450px;" src="{{ post.img }}" alt="Image not found!"></a>
                <div class="carousel-caption">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.description }}</p>
                </div>
            </div>
        {% endfor %}
    </div>
    <a class="left carousel-control" href="#carousel" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#carousel" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>
