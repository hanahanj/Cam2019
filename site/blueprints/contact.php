<?php if(!defined('KIRBY')) exit ?>

title: Contact Page
pages: false
files: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  street:
    label: Street
    type: text
    icon: road
  zip:
    label: ZIP
    type: number
    width: 1/4
  location:
    label: Location
    type: text
    icon: map-marker
    width: 3/4
  links:
    label: Links
    type: structure
    entry: >
      {{label}}: {{value}} - ({{url}})
    fields:
      label:
        label: Label
        type: text
        icon: font
      value:
        label: Value
        type: text
        icon: font
      url:
        label: Url
        type: url
  options:
    label: Options
    type: headline
  bgcolor:
    label: Header Color
    type: color
    default: 143893
