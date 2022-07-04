$(function() {
    $('.copythis').after('<button type="button" class="btn btn-primary btn-block w-75 mx-auto copybutton bg-img-none mt-2 d-block"><span class="fa fa-clipboard" aria-hidden="true"></span> Copy code for above element</button>');
    $('.copybutton').on('click', function(event) {
        var btn = $(this);
        var snippet = btn.prev().html();
        console.log("@GB: snippet = ", snippet);
        fallbackCopyTextToClipboard(snippet);
        // btn.addClass('btn-danger');
        btn.toggleClass('btn-success btn-primary');
        btn.html('<span class="fa fa-check" aria-hidden="true"></span> Done! Code snippet has been copied to clipboard');
        window.setTimeout(function() {
            btn.html('<span class="fa fa-clipboard" aria-hidden="true"></span> Copy code for above element');
            // btn.removeClass('btn-danger');
            btn.toggleClass('btn-success btn-primary');
        }, 3000);
        /* Act on the event */
    });
});

function fallbackCopyTextToClipboard(text) {
    var btn = $('.copybutton');
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.btn.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);        
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.btn.removeChild(textArea);
    btn.scrollIntoView();
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {

    }, function(err) {

    });
}
