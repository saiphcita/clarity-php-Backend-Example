var $ = jQuery;
/*******************************************************************************
* Application Programming Interface
*******************************************************************************/

/**
* Sends clarity information to the backend
* @param ajaxurl,
**/
function clarity_api(ajaxurl){
  var data = {
    action: "clarity_api_to_backend"
  }
  $.post(
    ajaxurl,
    data,
    function(data){
    }
  )
  .done()
  .fail()
}
