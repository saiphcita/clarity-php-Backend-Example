<?php

// 9989800801
/**
 * Plugin Name:       Clarity
 * Plugin URI:        https://clarity.microsoft.com/
 * Description:       With data and session replay from Clarity, you'll see how people are using your site — where they get stuck and what they love.
 * Version:           0.1
 * Author:            Microsoft
 * Author URI:        https://www.microsoft.com/en-us/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html

 * Clarity Plugin is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * Clarity Plugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

/**
* Require files only if is admin area
* @param void
* @return HTML
**/
require_once plugin_dir_path(__FILE__).'/admin/plugin_dbtable_creation.php';
require_once plugin_dir_path(__FILE__).'/admin/settings_page.php';
require_once plugin_dir_path(__FILE__).'/admin/settings_callbacks.php';
require_once plugin_dir_path(__FILE__).'/admin/api_backend.php';

/**
* Runs when Clarity Plugin is activated
* @param void
* @return void
**/
register_activation_hook(__FILE__, 'clarity_on_activation');
function clarity_on_activation(){
  clarity_db_table_creation();
}


/**
* Runs when Clarity Plugin is deactivated
* @param void
* @return void
**/
register_deactivation_hook( __FILE__, 'clarity_on_deactivation');
function clarity_on_deactivation(){
  global $wpdb;
  remove_menu_page( 'clarity_settings' );
  remove_action('rest_api_init', 'register_clarit_rest_route');
  return;
}

/**
* Runs when Clarity Plugin is uninstalled
* @param void
* @return void
**/
register_uninstall_hook( 'uninstall.php', 'clarity_on_uninstallation');
function clarity_on_uninstallation(){
  global $wpdb;
  $table_name = $wpdb->prefix . "clarity";
  $sql = "DROP TABLE IF EXISTS $table_name";
  $wpdb->query($sql);
  return;
}


/**
* Adds jquery to the admin side
* @param void
* @return void
**/
add_action('admin_enqueue_scripts', 'clarity_admin_scripts');
function clarity_admin_scripts(){
  wp_enqueue_script('clarity_lib',  plugins_url('clarity/clarity_lib/clarity.dev.js'), array());
  wp_enqueue_script('clarity-decode',  plugins_url('clarity/clarity_lib/decode.dev.js'), array());

}

/**
* Adds the script to run clarity
* @param void
* @return void
**/
add_action('wp_head', 'clarity_add_script_to_header');
function clarity_add_script_to_header(){

	$server_url = site_url();
	if(!is_user_logged_in()){
		?>
			<script src="<?= plugins_url('clarity/clarity_lib/clarity.dev.js') ?>"></script>
			<script type="text/javascript">
				const e = {
					url: "<?= $server_url; ?>/wp-json/clarity/event",
					uploadHeaders:{
						"Content-Type":"application/json"
					},
					instrument: !0,
				}
				clarity.start(e);
			</script>
		<?php
	}
}

/**
* Establishes the URL for AJAX calls
* @param void
* @return void
**/
add_action('wp_head', 'clarity_admin_ajax');
function clarity_admin_ajax(){
  ?>
    <script type="text/javascript">
			var ajaxurl = "<?= admin_url('admin-ajax.php');?>";
    </script>
  <?php
}
