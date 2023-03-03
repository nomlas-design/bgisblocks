<?php

/*
  Plugin Name: BGIS APAC Custom Blocks
  Description: Custom blocks for BGIS APAC
  Version: 1.0.0
  Author: Declan O'Hara
  Author URI: https://nomlas.design/

  */

if (!defined('ABSPATH')) exit; // Exit if accessed directly


class BGIS_APAC_Custom_Blocks
{

  function __construct()
  {
    add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
  }

  function adminAssets()
  {
    if (!function_exists('register_block_type')) {
      // Gutenberg is not active.
      return;
    }

    wp_enqueue_script('ournewblock', plugin_dir_url(__FILE__) . 'dist/bundle.js', array('wp-blocks', 'wp-editor', 'wp-components', 'wp-element', 'wp-block-editor'));
    add_filter('gutenberg_experimental_link_control', '__return_true');
  }
}

$BGIS_APAC_Custom_Blocks = new BGIS_APAC_Custom_Blocks();
