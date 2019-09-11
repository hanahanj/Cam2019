<?php snippet('header') ?>

<?php snippet('hero') ?>


  	<main id="main" class="container px3 py4" role="main">


		<section class="contact container overflow-hidden">
			<div class="clearfix">
				<div class="sm-col sm-col-6">
					<?php echo $page->text()->kirbytext() ?>

					<br/><br/>
					<h4>
						<?php echo $page->street() ?>
						<br/>
						<?php echo $page->location() ?> <?php echo $page->zip() ?>
					</h4>
					<br/>

          <?php foreach($page->links()->yaml() as $link): ?>
            <span class="prefix"><?php echo $link['label'] ?>:</span>
            <?php if($link['url'] !== ''): ?>
              <a href="<?php echo $link['url'] ?>" target="_blank">
            <?php endif ?>
            <?php echo $link['value'] ?>
            <?php e($link['url'] !== '', '</a>') ?>
            <br/>
          <?php endforeach ?>

				</div>

			</div>
		</section>

  	</main>

<?php snippet('footer') ?>


