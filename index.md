---
layout: home
---

<center><h1>Recent Posts</h1></center>
<div id="carousel" class="carousel slide">
    <div class="carousel-inner">
        {% assign x = 0 %}
        {% for post in site.posts %}
          {% if post.layout == 'post' and x == 0 %}
            {% capture x %}{{ x | plus:1 }}{% endcapture %}
            <div class="item active">
                <img style="min-height:200px;max-height:425px;" src="{{ post.img }}" alt="Image not found!">
                <div class="carousel-caption" style="padding-bottom: 0px;">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.description }}
                    <p><a class="btn btn-large btn-default" href="{{ post.url }}">Read more</a>
                </div>
            </div>
          {% endif %}
        {% endfor %}
        {% capture x %}{{ x | plus:1 }}{% endcapture %}
        {% for post in site.posts offset: x %}
          {% if post.layout == 'post' and x != 0 %}
            {% assign x = {{ x }} + 1 %}
            <div class="item">
                <img style="min-height:200px;max-height:425px;" src="{{ post.img }}" alt="Image not found!">
                <div class="carousel-caption" style="padding-bottom: 0px;">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.description }}</p>
                    <p><a class="btn btn-large btn-default" href="{{ post.url }}">Read more</a>
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

