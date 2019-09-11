
<nav role="navigation">
	<ul class="responsive-nav fixed left-0 top-0 center z2">
		<?php foreach($pages->visible() as $p): ?>
		<li><a <?php e($p->isOpen(), ' class="caps bold"') ?> class="caps inline-block p2 bold" href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a></li>
		<?php endforeach ?>
    <?php if($site->showLanguageSelector()->bool()): ?>
      <?php foreach($site->languages() as $language): ?>
        <li class="responsive-language inline-block p2 caps <?php e($site->language() == $language, ' bold') ?>">
          <a href="<?php echo $page->url($language->code()) ?>" <?php e($site->language() == $language, ' class="active"') ?>>
            <?php echo html($language->name()) ?>
          </a>
        </li>
      <?php endforeach ?>
    <?php endif ?>
	</ul>
</nav>
