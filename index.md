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
        {% capture x %}{{ x | plus:1 }}{% endcapture %}
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
        <p>We are team 4334, an FRC robotics team based in Calgary, Alberta, Canada. We strive to be successful both in and out of competition. With a team full of determined, committed and skilled members, we work each year to promote competition within our team, teams that we know and technology in general. We strongly believe that competition is what leads to innovation, and in the long run, a better society. We continuously strive to become a better team, and better people. 
        <p>Each of our members is encouraged to challenge themselves to their fullest potential. We do not settle for what seems possible. We work harder, push ourselves and become the best possible versions of ourselves.
        <div class="list-group">
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
            <a class="list-group-item" href="/sponsors">
                <h4 class="media-heading">Sponsors</h4>
                Our sponsors provide us the opportunity to learn, improve and become better people.
            </a>
            <a class="list-group-item" href="/photos">
                <h4 class="media-heading">Photos</h4>
                Find photos of the team and our activities.
            </a>
            <a class="list-group-item" href="/videos">
                <h4 class="media-heading">Videos</h4>
                Our archive of uploaded videos.
            </a>
            <a class="list-group-item" href="/news">
                <h4 class="media-heading">In the News</h4>
                Find our team in local media.
            </a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="well">
            {% include socialfeed.html %}
        </div>
    </div>
</div>
