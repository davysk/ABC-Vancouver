// Hide object text box
var queueOriginEl = document.getElementById('ao-ccss-queue' );
if (queueOriginEl) {
    queueOriginEl.style.display = 'none';

    // Get queue object and call table renderer
    jQuery(document).ready(function() {
        // Instance and parse queue object
        var aoCssQueueRaw = document.getElementById('ao-ccss-queue').value;
        var aoCssQueue    = aoCssQueueRaw.indexOf('{"') === 0 ?
                                JSON.parse(aoCssQueueRaw) :
                                "";
        var aoCssQueueLog = aoCssQueue === "" ?
                                "empty" :
                                aoCssQueue;
        <br>
<b>Warning</b>:  Undefined variable $ao_ccss_debug in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_queue.js.php</b> on line <b>23</b><br>

        // hook up "remove all jobs" button to the JS action.
        jQuery("#removeAllJobs").click(function(){removeAllJobs();});

        // Render queue table
        drawQueueTable(aoCssQueue);

        // Make queue table sortable if there are any elements
        var queueBodyEl = jQuery('#queue > tr').length;
        if (queueBodyEl > 0) {
            jQuery('#queue-tbl').tablesorter({
                sortList: [[0,0]],
                headers: {6: {sorter: false}}
            });
        }
        
        // unhide queuerunner button conditionally (we don't want people running the queue continuously) and attach event to it.
        if (queueBodyEl > 4 || ( queueBodyEl > 0 && jQuery('#rules > tr').length 1N';
            statusClass = 'new';
            title       = '<br>
<b>Fatal error</b>:  Uncaught Error: Call to undefined function _e() in D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_queue.js.php:76
Stack trace:
#0 {main}
  thrown in <b>D:\Apps\xamp\htdocs\backup\wp-content\plugins\autoptimize\classes\critcss-inc\admin_settings_queue.js.php</b> on line <b>76</b><br>
