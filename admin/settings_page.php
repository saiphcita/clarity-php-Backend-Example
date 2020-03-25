<?php
/*******************************************************************************
* File with setting registration
*******************************************************************************/

/**
* Generates a submenu page
* @param void
* @return HTML
**/
add_action('admin_menu', 'clarity_submenu_page_generation');
function clarity_submenu_page_generation(){
  add_menu_page('Clarity Settings', 'Clarity Settings', 'manage_options', 'clarity_settings', 'clarity_admin_settings_page', 'dashicons-smartphone');
}

/**
* Register Plugin settings
* @param void
* @return HTML
**/
add_action('admin_init', 'clarity_register_settings');
function clarity_register_settings(){
  register_setting('clarity_settings_fields', 'clarity_project_id');

  add_settings_section('clarity_section_project_id','Welcome to clarity!','clarity_section_project_id_callback','clarity_settings');
}
