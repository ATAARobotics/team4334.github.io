---
layout: default
title: Home
files: |
 <link href="/resources/css/home.css" rel="stylesheet">
 <script src="/resources/js/carousel.js"></script>
---
<div class="container">
	<div class="row">
		<div id="carouselBox" class="col-md-12" style="background-color: #f0f0f0; margin-bottom: 15px;">
			<div id="carouselContainer" class="container">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					<!-- Wrapper for slides -->
					<div class="carousel-inner">
						{% for post in site.posts limit:1 %}
						<div class="carousel-item active">
							<img class="img-fluid d-block mx-auto" style="object-fit:cover" src="/resources/img/c{{ forloop.index0 }}.jpg">
							<div class="carousel-caption">
								<h4>
									<a href="{{ post.url }}">{{ post.title }}</a>
								</h4>
								<p>{{ post.description }}</p>
							</div>
						</div>
						{% endfor %}
						{% for post in site.posts limit:4 offset:1 %}
						<div class="carousel-item">
							<img class="img-fluid d-block mx-auto" style="object-fit:cover" src="/resources/img/c{{ forloop.index }}.jpg">
							<div class="carousel-caption">
								<h4>
									<a href="{{ post.url }}">{{ post.title }}</a>
								</h4>
								<p>{{ post.description }}</p>
							</div>
						</div>
						{% endfor %}
					</div>
					<!-- End Carousel Inner -->
					<ul class="list-group col-md-4" style="padding-right: 0px">
						{% for post in site.posts limit:1 %}
						<li class="list-group-item active" data-slide-to="{{ forloop.index0 }}" data-target="#myCarousel">
							<h4>{{ post.title }}</h4>
						</li>
						{% endfor %}
						{% for post in site.posts limit:4 offset:1 %}
						<li class="list-group-item" data-slide-to="{{ forloop.index }}" data-target="#myCarousel">
							<h4>{{ post.title }}</h4>
						</li>
						{% endfor %}
					</ul>
					<div class="carousel-controls">
						<a class="carousel-control-prev" data-slide="prev" href="#myCarousel">
							<span class="carousel-control-prev-icon"></span>
						</a>
						<a class="carousel-control-next" data-slide="next" href="#myCarousel">
							<span class="carousel-control-next-icon"></span>
						</a>
						<!-- End Carousel -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-3" style="background-color: #f0f0f0">
			<img alt="Image Not Found!" class="img-fluid" src="resources/img/ataleaf.png" style="padding-top: 15px" width="100%">
		</div>
		<div class="col-md-9" style="background-color: #f0f0f0">
			<p style="margin-top: 15px">We are
				<b>Team 4334, Alberta Tech Alliance</b>, a FRC robotics team based in Calgary, Alberta, Canada.</p>
			<p>We strive to actively improve ourselves and others spreading FIRST Robotics ideals and values, both in and out of competition.
				ATA gives students the opportunity to pursue an interest in science, technology, engineering, and math. With a team compliment
				of determined, committed and skilled members, we each work year round to promote personal and general improvement within
				our team and others. We strongly believe that competition and a consistent "try-again" attitude is what leads to innovation
				and further understanding.</p>
			<p>Each of our members is encouraged to challenge themselves to their fullest potential. We do not settle for what seems
				possible. We work harder, push ourselves farther and achieve what some would consider impossible.
			</p>
		</div>
		<div class="col-md-12" style="background-color: #f0f0f0; padding-bottom: 15px">
			<div style="text-align: center">
				<a class="btn btn-default btn-md" href="/team" style="background: #404040; border-radius: 0px; color: white; margin-top: 15px;">
					Learn More</a>
			</div>
		</div>
	</div>
	<div class="row" style="margin-top: 15px">
		<div class="col-md-9" style="background-color: #f0f0f0">
			<p style="margin-top: 15px">
				<i>For Inspiration and Recognition of Science and Technology</i> is an international youth organization that operates the
				FIRST Robotics Competition, FIRST LEGO League, FIRST LEGO League Jr., and First Tech Challenge competitions.</p>
			<p>
				<i>FIRST</i>'s goal is to inspire students to become leaders in engineering and technology fields through engaging programs
				that build skills in science, engineering, and technology. Through these programs, students are inspired to innovate,
				develop vital work skills, and build skills in self-confidence, communication, and leadership.</p>
			<p>
				"<i>FIRST</i> is more than robots. The robots are a vehicle for students to learn important life skills. Kids often come
				in not knowing what to expect - of the program nor of themselves. They leave, even after the first season, with a vision,
				with confidence, and with a sense that they can create their own future." -Dean Kamen, founder of
				<i>FIRST</i>
			</p>
		</div>
		<div class="col-md-3" style="background-color: #f0f0f0">
			<img alt="Image Not Found!" class="img-fluid" src="resources/img/firstlogo.png" style="padding-top: 15px" width="100%">
		</div>
		<div class="col-md-12" style="background-color: #f0f0f0; padding-bottom: 15px">
			<div style="text-align: center">
				<a class="btn btn-default btn-md" href="/first" style="background: #404040; border-radius: 0px; color: white; margin-top: 15px;">
					Learn More</a>
			</div>
		</div>
	</div>
	<div class="row">
		<div id="fbc" class="col-md-6" style="margin-top: 15px; margin-bottom: 15px">
			<iframe id="fb" allowtransparency="true" frameborder="0" height="750" scrolling="no" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fteam4334&amp;tabs=timeline&amp;width=500&amp;height=750&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
			 style="border: none; overflow: hidden">
			</iframe>
		</div>
		<div id="twc" class="col-md-6" style="margin-top: 15px; margin-bottom: 15px">
			<a class="twitter-timeline" data-width="500" data-height="750" data-dnt="true" href="https://twitter.com/ata4334?ref_src=twsrc%5Etfw">Tweets by ata4334</a>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	</div>
</div>