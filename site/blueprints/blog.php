<?php if(!defined('KIRBY')) exit ?>

title: Blog
pages:
  template: article
files: false
fields:
  title:
    label: Title
    type:  text
  options:
    label: Options
    type: headline
  bgcolor:
    label: Header Color
    type: color
    default: 777777
