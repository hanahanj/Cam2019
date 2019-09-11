<?php
  $portfolio = $site->index()->filterBy('template', 'projects')->first()->id();
	$project = $pages->find($portfolio);
	$tags = tagcloud($project);

	
?>

<ul class="filteroptions option-set md-show caps center">

	<li><a href="" data-filter="*" class="active"><?php echo l::get('filter.all') ?></a></li>

 	<?php foreach($tags as $tag): ?>
		<li><a href="" data-filter=".<?php echo $tag->name() ?>"><?php echo $tag->name() ?></a></li>
	<?php endforeach ?>

</ul>



<div id="portfolio" class="py4 portfolio">

	<!--
	These are our grid items. Notice how each one has classes assigned that
	are used for filtering. The classes match the "data-filter" properties above.
	-->
	<?php if(param('tag')) {

	$projects = $pages->find($portfolio)
						->children()
						->visible()
						->filterBy('tags', param('tag'), ',')
						->limit(150);

	} else {

	$projects = $pages->find($portfolio)
						->children()
						->visible()
						->limit(150);

	} ?>



	<?php foreach($projects as $project): ?>
	<div class="box mx-auto overflow-hidden <?php foreach(str::split($project->tags()) as $tag): ?><?php echo $tag ?> <?php endforeach ?>">
		<a href="<?php echo $project->url() ?>">

		 	<!--
			We choose selected image from project item.
			-->
			<?php
				$selectedImage = $project->thumbimage();
		 	?>

			<?php if($image = $project->images()->find((string)$selectedImage)): ?>
				 <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>" >
			<?php endif ?>

			<span class="info">
				<span class="text center">
					<span class="title caps bold"><?php echo $project->title()->html() ?></span>

					<?php if ($project->subtitle() != ''): ?>
					<span class="type italic"><br/>/ <?php echo $project->subtitle()->html() ?> /</span>
					<?php endif ?>
				</span>
			</span>
		</a>
	</div>
	<?php endforeach ?>



</div>




