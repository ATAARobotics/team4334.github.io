---
layout: default
---

<style>
.carousel .left {
    background-color: blue;
}
</style>

<div id="carousel" class="carousel slide">
    <ol class="carousel-indicators">
        {% for post in site.posts limit: 1 %}
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
        {% endfor %}
        {% assign x = 0 %}
        {% for post in site.posts limit: 4 offset: 1 %}
            {% assign x = x + 1 %}
            <li data-target="#carousel" data-slide-to="{{ x }}"></li>
        {% endfor %}
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
    <a class="carousel-control" href="#carousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="carousel-control" href="#carousel" data-slide="next" style="right: 0;left: auto;">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>

