<section id="hero">
  <div id="" class="bg-blue px2" style="height: 130px; padding-top:110px; background-image:url(<?php echo url('assets/images/noise.png') ?>); <?php e($page->bgcolor(), 'background-color: ' . $page->bgcolor())?>">
    <div class="container">

      <h1 class="white m0 relative caps h1"><?php echo $page->title()->html() ?></h1>

      <?php snippet('breadcrumb') ?>

    </div>
  </div>
</section>
