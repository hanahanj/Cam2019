<?php if(!defined('KIRBY')) exit ?>

title: Blog Article
pages: false
files: true
fields:
  article:
    label: Article
    type: headline
  title:
    label: Title
    type: title
  date:
    label: Date
    type: date
    width: 1/2
    default: today
  author:
    label: Author
    type: user
    width: 1/2
  tags:
    label: Tags
    type: tags
  text:
    label: Text
    type: textarea
  options:
    label: Options
    type: headline
  bgcolor:
    label: Header Color
    type: color
    default: 777777
