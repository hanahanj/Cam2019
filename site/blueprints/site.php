<?php if(!defined('KIRBY')) exit ?>

title: Site
fields:
  generalSettings:
    label: Site Settings
    type: headline
  title:
    label: Title
    type:  text
  author:
    label: Author
    type:  text
    icon: user
  description:
    label: Description
    type:  textarea
  keywords:
    label: Keywords
    type:  tags
  showLanguageSelector:
    label: Show Language Selector?
    type: toggle
    text: yes/no
  brandName:
    label: Logo Text
    type: text
    icon: font
    width: 1/2
  googleAnalytics:
    label: Google Analytics ID
    type: text
    icon: code
    help: Tracking ID in the form UA-XXXXXXXX-X. Keep this field empty if you are not using it.
  footerSettings:
    label: Footer Settings
    type: headline
    help: This section will appear on the footer.
  copyright:
    label: Copyright
    type:  textarea
  socials:
    label: Social Links
    type: structure
    entry: >
      {{name}} - {{link}}
    fields:
      name:
        label: Name
        type: text
        icon: font
      color:
        label: Background Color
        type: color
      link:
        label: Link
        type: url
