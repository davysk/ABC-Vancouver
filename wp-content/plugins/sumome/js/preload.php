<script>
function __smReady(sumome) {
  sumome.core.emit('login');
  sumome.core.on('login', function() {
    jQuery('.sumome-wp-dash-logged-in').removeClass('status-logged-out');
    jQuery('.sumome-wp-dash-logged-in').addClass('status-logged-in');
    jQuery('.sumome-wp-dash-logged-out').removeClass('status-logged-out');
    jQuery('.sumome-wp-dash-logged-out').addClass('status-logged-in');

    getLoadInformation();
  });

  //auto populate form when clicking badge to login
  if (!getCookie('__smUser')) {
    sumome.core.on('startApp', function() {
      sumo_plugin_populate_form();
    });
  }

  function show_sumome_login() {
    sumome.core.emit('startApp', {app: 'login',   opts: { launch: false }});

    sumo_plugin_populate_form();

    sumome.core.on('login', function() {
      sumome_login_refresh();
    });
  }

  jQuery(document).on('click','.connect-button', function (e) {
    show_sumome_login();
  });

  jQuery(document).on('click','.sumome-login-login,.sumome-login-signup', function (e) {
    sumo_plugin_populate_form();
  });

  function sumo_plugin_populate_form() {
    var populateLoginInterval=setInterval(
      function(){
        if (jQuery('.sumome-login input[name=email]').is(':visible') || jQuery('.sumome-register input[name=email]').is(':visible')) {
          jQuery('.sumome-login input[name=email]').val('<br />
<b>Fatal error:  Uncaught Error: Call to undefined function esc_js() in D:\Apps\xamp\htdocs\backup\wp-content\plugins\sumome\js\preload.php:42
Stack trace:
#0 {main}
  thrown in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\sumome\js\preload.php on line <b>42<br />
</script>