<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

c::set('oembed.autoplay', true);
c::set('oembed.lazyvideo', true);
c::set('oembed.caching', false);
c::set('oembed.cacheexpires', 3600*24);

/*

---------------------------------------
Configuration
---------------------------------------

*/

c::set('aristotheme.widget', true);

c::set('routes', array(
  array(
    'pattern' => 'docs',
    'action' => function () {
      go('docs/why-kirby-cms');
    }
  )
));

c::set('languages', array(
  array(
    'code'    => 'en',
    'name'    => 'EN',
    'default' => true,
    'locale'  => 'en_US',
    'url'     => '/',
  )
));
