<?php snippet('header') ?>

<?php snippet('hero') ?>


  	<main id="main" class="container px3 py4" role="main">

		<section class="contact container overflow-hidden">
			<div class="clearfix mxn2">
				<div class="col-8 px2 mx-auto">
					<div>
						<div class="error-page-container center mb3"> <!-- 404 Page -->
							<h2><?php echo $page->text()->html() ?></h2>
							<div class="big-error-number">404</div>
							<a href="<?php echo $site->url() ?>"><button class="h3 button-blue-outline mb1"><?php echo $site->homePage()->title() ?></button></a>
						</div>
					</div>
				</div>
			</div>
		</section>

  	</main>

<?php snippet('footer') ?>


