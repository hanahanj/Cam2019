<!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
    <meta name="description" content="<?php echo $site->description()->html() ?>">
    <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
    <meta name="author" content="Aristotheme" />


   <?php echo css('assets/css/all.min.css') ?>
   



  </head>
  <body>
    <header class="header absolute top-0 left-0">
      <div class="menuImg">
          <a href="http://openstudios-stl.org/"><img src="assets/images/Splash_Logo_BW.png"></a>
        </div>
      <div class="logo absolute block h3 m0 caps bold">
        <a href="<?php echo $site->language()->url() ?>">
          <?php if(!$site->brandlogo()->empty()): ?>
            <!--FIXME: panel logo selector buggy-->
          <img src="<?php echo $site->brandlogo() ?>" alt="<?php echo $site->title()->html() ?>"/>
          <?php endif ?>
          <?php echo $site->brandname() ?>
        </a>
      </div>
      <?php snippet('menu') ?>
    </header>
    <?php snippet('responsive-menu') ?>







