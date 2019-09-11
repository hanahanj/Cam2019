<?php if(!defined('KIRBY')) exit ?>

title: Page with right Sidebar
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  options:
    label: Options
    type: headline
  bgcolor:
    label: Header Color
    type: color
    default: 143893
