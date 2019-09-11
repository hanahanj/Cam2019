<?php snippet('header') ?>
<section id="hero">
	<div id="large-header" class="large-header bg-mid-gray m0" style="height: 377px;background-image:url(<?php echo url('assets/images/noise.png') ?>); <?php e($page->bgcolor(), 'background-color: #ffffff' . $page->bgcolor())?>">
		<!-- <iframe src="map/index.html" style="width: 100%;"></iframe> -->
		<div class="OSHero">
			<img class="BGImg" src='assets/images/IMG_9933_web.jpg'>
			
			<img src='assets/images/logo_box.png'>
			
			
			<div class="HeroText">
				<div class="centered">
					<h3>Now it its thirteenth year, Open Studios STL offers the chance to meet more than 130 local artists in their studios and art spaces and learn about their creative process. </h3>
				</div>
			</div>
			
			<div class="date">
				<center><h1>October 6&ndash;7, 2018 </h1></center>
			</div>
			<div class="downArrow">
				<div class="arrowContain">
					<a data-scroll href="#main">
						<div class="arrow"></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<main id="main" class="container px3" role="main">
	<div class="listContain">
		<div class="listContainInside">
			<div class="absolute center caps"><p><a href="alphabetical" class="button button-blue-outline">Artist List</a></p></div>
		</div>
	</div>
	
	<?php snippet('projects') ?>
</main>
<?php snippet('footer') ?>

