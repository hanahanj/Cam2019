<?php
kirbytext::$post[] = function($kirbytext, $value) {
  $snippets = array(
    '[' => '(',
    ']' => ')',
  );
  $keys     = array_keys($snippets);
  $values   = array_values($snippets);
  return str_replace($keys, $values, $value);
};