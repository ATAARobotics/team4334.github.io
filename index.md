---
layout: home
---

<style>
.carousel .left {
    background-color: blue;
}
</style>

<center><h1>Recent Posts</h1></center>
<div id="carousel" class="carousel slide">
    <ol class="carousel-indicators">
        {% for post in site.posts limit: 1 %}
          {% if post.layout == 'post' %}
            <li data-target="#carousel" data-slide-to="0" class="active"></li>
          {% endif %}
        {% endfor %}
        {% assign x = 0 %}
        {% for post in site.posts limit: 4 offset: 1 %}
          {% if post.layout == 'post' %}
            {% assign x = x + 1 %}
            <li data-target="#carousel" data-slide-to="{{ x }}"></li>
          {% endif %}
        {% endfor %}
    </ol>
    <div class="carousel-inner">
        {% assign x = 0 %}
        {% for post in site.posts %}
          {% if post.layout == 'post' and x == 0 %}
            {% capture x %}{{ x | plus:1 }}{% endcapture %}
            <div class="item active">
                <a href="{{ post.url }}"><img style="height:450px;" src="{{ post.img }}" alt="Image not found!"></a>
                <div class="carousel-caption">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.description }}</p>
                </div>
            </div>
          {% endif %}
        {% endfor %}
        {% capture x %}{{ x | plus:1 }}{% endcapture %}
        {% for post in site.posts offset: x %}
          {% if post.layout == 'post' and x != 0 %}
            {% assign x = {{ x }} + 1 %}
            <div class="item">
                <a href="{{ post.url }}"><img style="height:450px;" src="{{ post.img }}" alt="Image not found!"></a>
                <div class="carousel-caption">
                    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
                    <p>{{ post.description }}</p>
                </div>
            </div>
          {% endif %}
        {% endfor %}
    </div>
    <a class="carousel-control left" href="#carousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="carousel-control right" href="#carousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>

