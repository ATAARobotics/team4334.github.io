---
layout: home
---

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
        {% assign i = 4 %}
        {% for post in site.posts offset: x %}
          {% if post.layout == 'post' and i != 0 %}
            {% capture i %}{{ i | minus: 1 }}{% endcapture %}
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

<center><h1>Team 4334 - Alberta Tech Alliance</h1></center>

<div class="row">
    <div class="col-md-8">
        <p>We are 4334, a FRC robotics team based in Calgary, Alberta, Canada. We strive to actively improve ourselves and others spreading FIRST Robotics ideals and values both in and out of competition. With a team compliment of determined, committed and skilled members, we each work year round to promote personal and general improvement within our team and others. We strongly believe that competition and a consistant "try-again" attitude is what leads to innovation and further understanding.
        <p>Each of our members is encouraged to challenge themselves to their fullest potential. We do not settle for what seems possible. We work harder, push ourselves farther and achieve what some would consider impossible. 
        <div class="list-group">
            <a class="list-group-item" href="/signup">
                <h4 class="media-heading">Sign Up</h4>
                Sign up to become a part of our team.
            </a>
            <a class="list-group-item" href="/first">
                <h4 class="media-heading">FIRST Robotics</h4>
                The FIRST Robotics Competition is a high school level robotics program that encourages engineering, math, science and creative skills.
            </a>
            <a class="list-group-item" href="/team">
                <h4 class="media-heading">Our Team</h4>
                Our team is full of passionate, bright young students who define our team.
            </a>
            <a class="list-group-item" href="/history">
                <h4 class="media-heading">History</h4>
                We have a history of success on and off the field. Our reputation is very important to us, and we push ourselves every year.
            </a>
            <a class="list-group-item" href="/photos">
                <h4 class="media-heading">Photos</h4>
                Find photos of the team and our activities.
            </a>
            <a class="list-group-item" href="/videos">
                <h4 class="media-heading">Videos</h4>
                Our archive of uploaded videos.
            </a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="well">
            {% include socialfeed.html %}
        </div>
    </div>
</div>
