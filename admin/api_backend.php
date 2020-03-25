<?php
/*******************************************************************************
* Application Programming Interface
*******************************************************************************/

/**
* Accesses protected attributes from the AJAX call
* @param $obj
* @return $prop
**/
function accessProtected($obj, $prop) {
  $reflection = new ReflectionClass($obj);
  $property = $reflection->getProperty($prop);
  $property->setAccessible(true);
  return $property->getValue($obj);
}
/**
* Grabs latest post title by an author!
* @param array $data Options for the function.
* @return string|null Post title for the latest,  * or null if none.
 **/
function clarity_api_to_backend( $data ) {

  $entityBody = file_get_contents('php://input');
  $body = json_decode($entityBody);

  global $wpdb;
  $table_name = $wpdb->prefix . "clarity";
  $charset_collate = $wpdb->get_charset_collate();
	$e = $body->e;
	$filename = $e[2]."_".$e[3]."_".$e[4]."_".$e[5]."_".$e[0].".txt";
	$wpdb->insert(
  	$table_name,
  	array(
  		'time' => current_time( 'mysql' ),
  		'eventNumber' => $e[0],
      'eventInfo0' => $e[1],
      'computerId' => $e[2],
      'sessionId1' => $e[3],
      'sessionId2' => $e[4],
      'sessionId3' => $e[5],
      'eventInfo1' => $e[6],
      'eventInfo2' => $e[7],
  		'events' => $filename
  	)
	);

	// Write to file
	$filephp 		= plugin_dir_path(__FILE__) ."events/php/". $filename;
	$filejson = plugin_dir_path(__FILE__) ."events/json/". $filename;
	$openphp = fopen( $filephp, "w");
	$openjson = fopen( $filejson, "w");
	$testphp = serialize($body->d);
	$testjson = json_encode($body);
	fputs($openphp, $testphp);
	fputs($openjson, $testjson);
	fclose($openphp);
	fclose($openjson);
	return '73';
}

function clarity_get_event( $d ) {
  $filename = $_GET["id"].".txt";
	$filejson = plugin_dir_path(__FILE__) ."events/json/". $filename;
	$openjson = fopen( $filejson, "r");
	$read = fread($openjson, 1024*1024);
 	return $read ;
}

/**
* Registers rest route
* @param void
* @return void
**/
add_action( 'rest_api_init', 'register_clarit_rest_route');

function register_clarit_rest_route(){
	register_rest_route( 'clarity', '/event', array(
    'methods' => 'POST',
    'callback' => 'clarity_api_to_backend',
  ));

  register_rest_route( 'clarity', '/event', array(
    'methods' => 'GET',
    'callback' => 'clarity_get_event',
  ));
}
