<?php snippet('header') ?>

<?php snippet('hero') ?>


  	<main id="main" class="container px2 py4" role="main">

      <div class="clearfix mxn2">
        <div class="sm-col sm-col-4 lg-col-3 sm-col-right px2">
          <?php snippet('submenu') ?>
        </div>
        <div class="sm-col sm-col-8 lg-col-9 px2">
          <?php echo str_replace('(\\', '(', $page->text()->kirbytext()) ?>
        </div>

      </div>

  	</main>

<?php snippet('footer') ?>


