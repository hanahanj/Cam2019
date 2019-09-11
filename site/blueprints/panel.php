<?php if(!defined('KIRBY')) exit ?>

title: Project
pages: false
files:
  sortable: true
fields:
  title:
    label: Title
    type: title
  subtitle:
    label: SubTitle
    type: text
    icon: font
  thumbimage:
      label: Thumb Image
      type: select
      options: images
      width: 1/2
      help: Thumbnail Image (width:380px)
  fullimage:
      label: Full Image
      type: select
      options: images
      width: 1/2
      help: Preview Image (width:1080px)
  text:
    label: Text
    type: textarea
  tags:
    label: Tags
    type: tags
    lowercase: true
    required: true
    help: All tags will appear in filter.
  options:
    label: Options
    type: headline
  bgcolor:
    label: Header Color
    type: color
    default: 143893

