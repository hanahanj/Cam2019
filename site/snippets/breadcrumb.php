<nav class="breadcrumb sm-show" role="navigation">
	<ul class="list-reset">
		<?php foreach($site->breadcrumb() as $crumb): ?>

		<li class="inline-block">
			<a href="<?php echo $crumb->url() ?>" class="button button-narrow"> <?php echo html($crumb->title()) ?> </a>
		</li>

		<?php endforeach ?>
	</ul>
</nav>