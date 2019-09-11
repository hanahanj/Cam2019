<footer>
  <div class="container clearfix">
    <div class="copyright">
      <?php echo $site->copyright()->kirbytext() ?>
    </div>
    <div class="social center">
      <?php foreach($site->socials()->yaml() as $social): ?>
        <a href="<?php echo $social['link'] ?>" style="background-color: <?php echo $social['color'] ?>;"><?php echo $social['name'] ?></a>
      <?php endforeach ?>
    </div>
  </div>
</footer>

<a href="#0" class="backtotop inline-block fixed overflow-hidden z4" style="background:url(<?php echo url('assets/images/top-arrow.svg') ?>) center 50% no-repeat rgba(0,0,0,.8);">Top</a>

<!-- JS -->
<?php echo js('assets/js/main.min.js') ?>
<?php echo js('@auto') ?>

<?php if(!$site->googleanalytics()->empty()): ?>
  <!-- Google Analytics-->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', '<?php echo $site->googleanalytics() ?>', 'auto');
    ga('send', 'pageview');
  </script>
<?php endif ?>
</body>
</html>
