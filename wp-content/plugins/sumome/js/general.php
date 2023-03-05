<script>
var setCookie = function(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
jQuery(document).ready(function() {
    
    function sumo_login_start_form_submit() {
      jQuery('.main-bottom').hide();
      setTimeout( function() {
        jQuery('.logged-in').html('');
        jQuery('.logged-in').append('<div class="loading"><img src="<br />
<b>Fatal error:  Uncaught Error: Call to undefined function plugins_url() in D:\Apps\xamp\htdocs\backup\wp-content\plugins\sumome\js\general.php:33
Stack trace:
#0 {main}
  thrown in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\sumome\js\general.php on line <b>33<br />
</script>