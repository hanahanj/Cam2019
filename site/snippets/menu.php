
<nav role="navigation">
	<ul class="main-nav absolute md-show">
		<?php foreach($pages->visible() as $p): ?>
		<li class="inline-block ml2 caps bold"><a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
		<?php endforeach ?>
    <?php if($site->showLanguageSelector()->bool()): ?>
      <?php foreach($site->languages() as $language): ?>
        

        <li class="language inline-block ml2 caps <?php e($site->language() == $language, ' bold') ?>">
          <a href="<?php echo $page->url($language->code()) ?>" <?php e($site->language() == $language, ' class="active"') ?>>
            <?php echo html($language->name()) ?>
          </a>
        </li>
      <?php endforeach ?>
    <?php endif ?>
	</ul>
</nav> <!-- nav -->

<a class="responsive-nav-trigger absolute md-hide inline-block" href="#0">
	<span class="menu-icon absolute"></span>
</a> <!-- responsive-nav-trigger -->


