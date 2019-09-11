
<?php snippet('header') ?>

<?php snippet('hero') ?>


	<main id="main" class="container px3" role="main">

		<section class="portfolio-item py4 container overflow-hidden">
 
				<?php echo $page->text()->kirbytext() ?>

				<!-- foreach loop with subpages -->
				<div class="pagination clearfix py4">
					<?php if($page->hasPrevVisible()): ?>
					<a href="<?php echo $page->prevVisible()->url() ?>" class="left button">

						<svg class="icon" data-icon="chevron-left" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z "></path></svg>
            <?php echo l::get('previous') ?>
          </a>
					<?php endif ?>

					<?php if($page->hasNextVisible()): ?>
					<a href="<?php echo $page->nextVisible()->url() ?>"  class="right button">
            <?php echo l::get('next') ?>
            <svg class="icon" data-icon="chevron-right" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z "></path></svg>
					</a>
					<?php endif ?>
				</div>

				

		</section>

	</main>

<?php snippet('footer') ?>

