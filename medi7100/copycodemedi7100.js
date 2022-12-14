document.addEventListener("click", function(event) { /*JS required for the collapsible items*/
})

window.addEventListener('load',function(){
    /*Initialise all tooltips*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    /*Copy email code. Make a bootstrap badge after an email address and give it the copyBadge class for this to function*/
    var $temp = $('<input>');
    $('.copyBadge').on('click', function () {
        var $copyBadge = $(this);
        var $url = $(this).prev().attr('href');
        var $copyBadgeHTML = $(this).html();
        $('body').append($temp);
        temp.val($url).select();
        document.execCommand('copy');
        temp.remove();
        copyBadge.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Email copied');
        window.setTimeout(function () {
            copyBadge.html($copyBadgeHTML);
        }, 2000);
    });
    /*Copy HTML snippets javascript. Requires copying the code you need to copy and putting it in a <template> element after the actual element and giving it the class htmlToCopy in a Text component.*/
    $('.htmlToCopy').after('<button type="button" class="w-75 d-block mx-auto btn btn-primary copybutton my-3"><span style="color: var(--bs-bg-color) !important" class="fa fa-clipboard" aria-hidden="true"></span>&nbsp;Copy code</button>');
    $('.copybutton').on('click', function(event) {
        var btn = $(this);
        var btnHtml = $(this).html();
        var snippet = btn.prev().html().slice(11,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
        console.log("@GB: snippet = ", snippet); 
        copyTextToClipboard(snippet);
        btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
        window.setTimeout(function() {
            btn.html(btnHtml);
        }, 3000);
    });
    var currentLocation = window.location.href;
        var bookmarkSlice = currentLocation.slice(32,65);
        var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
        $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
        $('.gotobookmarksbtn').attr('onclick',bookmarkURL);
    var formLinkCount = $('.bugOrSuggestion').length
        if(formLinkCount <= 0){
            var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
            $('.bugOrSuggestion').attr('onclick',formsLink);
        }
        else{
            console.log('Form link already present')
        } 
    $('button.seq_other').on('click', function(event){
        /*Initialise all tooltips when person goes to next page*/
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
        /*Copy HTML snippets javascript. Requires copying the code you need to copy and putting it in a <template> element after the actual element and giving it the class htmlToCopy in a Text component.*/
        $('.htmlToCopy').after('<button type="button" class="w-75 d-block mx-auto btn btn-primary copybutton my-3"><span style="color: var(--bs-bg-color) !important" class="fa fa-clipboard" aria-hidden="true"></span>&nbsp;Copy code</button>');
        $('.copybutton').on('click', function(event) {
            var btn = $(this);
            var btnHtml = $(this).html();
            var snippet = btn.prev().html().slice(11,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
            console.log("@GB: snippet = ", snippet); 
            copyTextToClipboard(snippet);
            btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
            window.setTimeout(function() {
                btn.html(btnHtml);
            }, 3000);
        });
        /*Make accordion button work + alternate icons after someone has clicked a unit icon*/
        var coll = $('.coll-btn');
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function(){
                $(this).toggleClass("coll-active");
                $(this).children().toggleClass('fa-angle-down fa-angle-up');
                var content = $(this).parent().next();
                if (content.css('max-height') != '0px'){
                    content.css('max-height', '0px');
                } else {
                    content.css('max-height', '100%');
                }
            });
        };
        /*Copy email code. Make a bootstrap badge after an email address and give it the copyBadge class for this to function*/
        var $temp = $('<input>');
        $('.copyBadge').on('click', function () {
            var $copyBadge = $(this);
            var $url = $(this).prev().attr('href');
            var $copyBadgeHTML = $(this).html();
            $('body').append($temp);
            $temp.val($url).select();
            document.execCommand('copy');
            $temp.remove();
            $copyBadge.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Email copied');
            window.setTimeout(function () {
                $copyBadge.html($copyBadgeHTML);
            }, 2000);
        });
        var formLinkCount = $('.bugOrSuggestion').length
        if(formLinkCount <= 0){
            var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
            $('.bugOrSuggestion').attr('onclick',formsLink);
        }
        else{
            console.log('Form link already present')
        } 
        var currentLocation = window.location.href;
        var bookmarkSlice = currentLocation.slice(32,65);
        var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
        $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
        $('.gotobookmarksbtn').attr('onclick',bookmarkURL);
        if(bookmarkCount <= 1){
            var currentLocation = window.location.href;
            var bookmarkSlice = currentLocation.slice(32,65);
            var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></span></button>')
            $('.gotobookmarksbtn').attr('onclick',bookmarkURL);            
            }
            else{
                console.log('Go to bookmarks already present');
            }  
    });
    /*Newer version of copy to clipboard*/
    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {
                                
        }, function(err) {
                                
        });
    }
    /*Traditional version of copy to clipboard that works as a fallback*/
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
    /*Accordion button alternating icons code. Currently not used but useful to keep*/
    var coll = $('.coll-btn');
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            $(this).toggleClass("coll-active");
            $(this).children().toggleClass('fa-angle-down fa-angle-up');
            var content = $(this).parent().next();
            if (content.css('max-height') != '0px'){
                content.css('max-height', '0px');
            } else {
                content.css('max-height', '100%');
            }
        });
    };
    /*Code to alternate icons on collapse buttons on click
    $('button[data-bs-toggle="collapse"]').on('click', function(){
        $(this).children().toggleClass('fa-plus fa-minus');
        $(this).children().toggleClass('fa-angle-down fa-angle-up');
        $(this).children().toggleClass('fa-caret-down fa-caret-up');
        $(this).children().toggleClass('fa-chevron-down fa-chevron-up');
    });
    */
    /*Code to close offcanvas jump to menu once a link is clicked*/
    $('.offcanvas-body a').on('click', function() {
        setTimeout(function(){
            $(".offcanvas").removeClass("show");
            setTimeout(function () {
                $("button#openJumpToMenu").trigger("click");
            }, 500);
        },800);
    });
    //Images need the class blownUpImage and there needs to be one modal on the page with imagemodal as the id for this to 
            $('.imageToClick').on('click', function() {
                $('.blownUpImage').attr('src', $(this).find('img').attr('src'));
                $('#imagemodal').modal('show');   
            });
            var formLinkCount = $('.bugOrSuggestion').length
                if(formLinkCount <= 0){
                    var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
                $('.bugOrSuggestion').attr('onclick',formsLink);
                }
                else{
                    console.log('Form link already present')
                } 
        });