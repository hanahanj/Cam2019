<?php if ($page->hasVisibleChildren() || $page->parents()->visible()->count() > 0): ?>
  <div class="submenu sm-col-12">
    <div class=" border rounded">
      <?php $p = $page->parents()->last() ? $page->parents()->last() : $page; ?>
      <?php foreach($p->children()->visible() as $subpage): ?>
        <a href="<?php echo $subpage->url() ?>" class="button block button-transparent border-bottom <?php e($subpage->isOpen(), ' button-blue bold') ?>"><?php echo $subpage->title() ?></a>
        <?php if($subpage->isOpen() && $subpage->hasVisibleChildren()): ?>
          <?php foreach($subpage->children()->visible() as $children ): ?>
            <a href="<?php echo $children->url() ?>" class="button block bg-darken-1 border-bottom <?php e($children->isOpen(), ' bold') ?>"> &mdash; <?php echo $children->title() ?></a>
          <?php endforeach ?>
        <?php endif?>
      <?php endforeach ?>
    </div>
  </div>
<?php endif ?>
