<br>
<b>Warning</b>:  Undefined variable $ao_ccss_debug in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_rules.js.php</b> on line <b>6</b><br>

var rulesOriginEl = document.getElementById("critCssOrigin");
var deferInlineEl = document.getElementById("autoptimize_css_defer_inline");
var additionalEl  = document.getElementById("autoptimize_ccss_additional");
if (rulesOriginEl)
    rulesOriginEl.style.display = 'none';
if (deferInlineEl)
    deferInlineEl.style.display = 'none';
if (additionalEl)
    additionalEl.style.display  = 'none';

if (rulesOriginEl) {
    jQuery(document).ready(function() {
        critCssArray=JSON.parse(document.getElementById("critCssOrigin").value);
        <br>
<b>Warning</b>:  Undefined variable $ao_ccss_debug in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_rules.js.php</b> on line <b>26</b><br>
        drawTable(critCssArray);
        jQuery("#addCritCssButton").click(function(){addEditRow();});
        jQuery("#editDefaultButton").click(function(){editDefaultCritCss();});
        jQuery("#editAdditionalButton").click(function(){editAdditionalCritCss();});
        jQuery("#removeAllRules").click(function(){removeAllRules();});
    });
}

function drawTable(critCssArray) {
    jQuery("#rules-list").empty();
    rnotice = 0;
    jQuery.each(critCssArray,function(k,v) {
        if (k=="paths") {
            kstring="<br>
<b>Fatal error</b>:  Uncaught Error: Call to undefined function _e() in D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_rules.js.php:43
Stack trace:
#0 {main}
  thrown in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_rules.js.php</b> on line <b>43</b><br>