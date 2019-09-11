

<section class="blog container py4 overflow-hidden">
	<div class="clearfix">
		<div class="md-col-6 mx-auto">
			<?php $articles = $page->children()->sortBy($sort='num', $direction='desc')->visible()->flip()->paginate(3) ?>
			<?php foreach($articles as $article): ?>
			<div class="py2 item">
				<h2><a href="<?php echo $article->url() ?>"><?php echo $article->title()->html() ?></a></h2>
				<div class="meta py2 caps h6">
					<?php echo $article->date(l::get('date.format')) ?> |
					<strong><?php echo $article->author()->html() ?></strong>

				</div>

				<p><?php echo $article->text()->excerpt(220) ?></p>

				<a href="<?php echo $article->url() ?>" class="button mxn2"><?php echo l::get('readmore') ?></a>
			</div>
			<?php endforeach ?>

		</div>

	</div>
	<div class="md-col-6 mx-auto py4">
		<div class="inline-block overflow-hidden border rounded">

			<?php

				$list       = $page->children()->paginate(3);
				$pagination = $list->pagination();

			?>



				<?php if($pagination->hasPrevPage()): ?>
				<a href="<?php echo $pagination->prevPageURL() ?>" class="left button button-nav-light border-right">
					<svg class="icon" data-icon="chevron-left" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z "></path></svg>
					<?php echo l::get('previous') ?>
				</a>
				<?php endif ?>
				<?php if($pagination->hasNextPage()): ?>
				<a href="<?php echo $pagination->nextPageURL() ?>" class="right button button-nav-light ">
					<?php echo l::get('next') ?>
          <svg class="icon" data-icon="chevron-right" viewBox="0 0 32 32" style="fill:currentcolor"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z "></path></svg>
				</a>
				<?php endif ?>

				<div class="overflow-hidden sm-show">
					<?php foreach($pagination->range(10) as $r): ?>
						<a<?php if($pagination->page() == $r) echo ' class="yellow left button button-nav-light border-right"' ?> href="<?php echo $pagination->pageURL($r) ?>" class="left button button-nav-light border-right dark-gray"><?php echo $r ?></a>
					<?php endforeach ?>

				</div>

		</div>
	</div>
</section>




