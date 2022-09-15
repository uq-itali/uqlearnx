function copyButton(){
            /*Copy code function*/
                var btn = $('.copybutton');
                var snippet = btn.prev().html();
                console.log("@GB: snippet = ", snippet);
                fallbackCopyTextToClipboard(snippet);
                btn.html('<span class="fa fa-check" aria-hidden="true"></span>&nbsp;<span style="text-decoration:none;">Done! Code snippet has been copied to clipboard</span>');
                window.setTimeout(function() {
                    btn.html('<span class="fa fa-clipboard" aria-hidden="true"></span> Copy code for above element');
                }, 3000);
        };

/*Traditional version of copy to clipboard that works on edX*/
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select(); 
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);        
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
 document.body.removeChild(textArea);
}
/*Newer version of copy to clipboard which doesn't currently work on edX. Review in the future*/
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
    }, function(err) {
    });
}
*/$(function() {
            Initialise all tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })*/
            /*Copy code function
            $('.copythis').after('<button type="button" class="btn btn-primary btn-block w-75 mx-auto copybutton bg-img-none mt-2 d-block"><span class="fa fa-clipboard text-white" aria-hidden="true"></span> Copy code for above element</button>');
            $('.copybutton').on('click', function(event) {
                var btn = $(this);
                var snippet = btn.prev().html();
                console.log("@GB: snippet = ", snippet);
                fallbackCopyTextToClipboard(snippet);
                btn.toggleClass('btn-primary btn-success');
                btn.html('<span class="fa fa-check text-white" aria-hidden="true"></span>&nbsp;<span class="text-white text-decoration-none">Done! Code snippet has been copied to clipboard</span>');
                window.setTimeout(function() {
                    btn.html('<span class="fa fa-clipboard text-white" aria-hidden="true"></span> Copy code for above element');
                    btn.toggleClass('btn-success btn-primary');
                }, 3000);
                /* Act on the event 
            });
    });*/
