<?php
/*******************************************************************************
* File with setting functions required by Clarity
*******************************************************************************/

/**
* Creates the Database table
* @param void
* @return void
**/
function clarity_db_table_creation(){
  global $wpdb;

  $table_name = $wpdb->prefix . "clarity";
  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE $table_name (
    id mediumint(9) NOT NULL AUTO_INCREMENT,
    time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
    eventNumber mediumint(9) NOT NULL,
    eventInfo0 varchar(55) DEFAULT '' NOT NULL,
    PRIMARY KEY  (id),
    computerId varchar(55) DEFAULT '' NOT NULL,
    sessionId1 varchar(55) DEFAULT '' NOT NULL,
    sessionId2 varchar(55) DEFAULT '' NOT NULL,
    sessionId3 varchar(55) DEFAULT '' NOT NULL,
    eventInfo1 mediumint(9) NOT NULL,
    eventInfo2 mediumint(9) NOT NULL,
    events text NOT NULL
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
  $true = dbDelta( $sql );
  $eventNumber = 1;
  $eventNumber = "1.0.0-b10";

  $wpdb->insert(
  	$table_name,
  	array(
  		'time' => current_time( 'mysql' ),
  		'eventNumber' => $eventNumber,
      'eventInfo0' => $eventNumber,
      'computerId' => "113k8c",
      'sessionId1' => "9d50b6eb9c3a4691b54a3878ffddf0a2",
      'sessionId2' => "k3eveojx",
      'sessionId3' => "66aa1d20e5b447ea976175ded67a756f",
      'eventInfo1' => 0,
      'eventInfo2' => 0,
  		'events' => 'very long string event'
  	)
  );
}
