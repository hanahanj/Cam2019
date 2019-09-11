<?php
/**
 * Example Plugin
 * Wrap your examples using (examples…) your example (…example)
 *
 * @author Thomas Lebeau <thomas@lebeau.io>
 * @version 1.0.0
 */
kirbytext::$pre[] = function($kirbytext, $text) {
  $text = preg_replace_callback('!\(example(…|\.{3})\)(.*?)\((…|\.{3})example\)!is', function($matches) use($kirbytext) {
    return '<div class="example rounded px2 py2 clearfix"><span class="exemple-title">' . l::get('example') . '</span>' . kirbytext($matches[2]) . '</div>';
  }, $text);
  return $text;
};
