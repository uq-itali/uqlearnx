document.addEventListener("click", function(event) { /*JS required for the collapsible items*/
})

window.addEventListener('load',function(){
/*Initialise all tooltips*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
/*Back to top button*/
    $('body').prepend('<button class="btn btn-dark" onclick="javascript:document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" id="bttBtn" title="Go to top"><span class="fa-solid fa-arrow-up"></span></button>');
// Get the button
let mybutton = document.getElementById("bttBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

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
/*Make the go to bookmarks link next to the bookmark this page link*/
var bookmarkCount = $('.gotobookmarksbtn').length
if(bookmarkCount < 1){
    var currentLocation = window.location.href;
        var bookmarkSlice = currentLocation.slice(32,65);
        var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
        $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
        $('.gotobookmarksbtn').attr('onclick',bookmarkURL);
}
else{
    console.log('Go to bookmarks already present')
}
/*Make the bug/suggestion form link next to the go to bookmarks link*/
if($('span.username').text() == 'uqtscho3' || $('span.username').text() == 'uqhhugo' || $('span.username').text() == 'uqkcosg2' || $('span.username').text() == 'uqkward1' || $('span.username').text() == 'uqcyoun3' || $('span.username').text() == 'uqscoore'){
    var formLinkCount = $('.bugOrSuggestion').length
        if(formLinkCount <= 0){
            var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
            $('.bugOrSuggestion').attr('onclick',formsLink);
        }
        else{
            console.log('Form link already present')
        } 
}
/*Toggle icons in any accordions*/
        $('a[data-bs-toggle="collapse"]').on('click', function(){
            if($('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-up') == true){
                $(this).children().toggleClass('fa-angle-down fa-angle-up');
               }
               else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-plus') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-mines') == true){
                    $(this).children().toggleClass('fa-plus fa-minus');
                   }
                   else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-up') == true){
                        $(this).children().toggleClass('fa-chevron-down fa-chevron-up');
                       }
                       else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-up') == true){
                            $(this).children().toggleClass('fa-caret-down fa-caret-up');
                           }
                       });
/*When a user changes tabs or navigates to the next page repeat functions*/
$('div.sequence-nav, nav.sequence-bottom').on('click', function(event){
/*Initialise all tooltips when person goes to next page*/
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

/*Back to top button*/
    $('body').prepend('<button class="btn btn-dark" onclick="javascript:document.body.scrollTop = 0;document.documentElement.scrollTop = 0;" id="bttBtn" title="Go to top"><span class="fa-solid fa-arrow-up"></span></button>');
    // Get the button
    let mybutton = document.getElementById("bttBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function(){scrollFunction()};
    
    function scrollFunction(){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    

/*Copy email code. Make a bootstrap badge after an email address and give it the copyBadge class for this to function*/
        var $temp = $('<input>');
        $('.copyBadge').on('click', function (){
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
/*Make the bug/suggestion form link next to the go to bookmarks link*/
if($('span.username').text() == 'uqtscho3' || $('span.username').text() == 'uqhhugo' || $('span.username').text() == 'uqkcosg2' || $('span.username').text() == 'uqkward1' || $('span.username').text() == 'uqcyoun3' ||$('span.username').text() == 'uqscoore'){
    var formLinkCount = $('.bugOrSuggestion').length
        if(formLinkCount <= 0){
            var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
            $('.bugOrSuggestion').attr('onclick',formsLink);
        }
        else{
            console.log('Form link already present')
        } 
}
/*Make the go to bookmarks link next to the bookmark this page link*/
        if(bookmarkCount < 1){
            var currentLocation = window.location.href;
            var bookmarkSlice = currentLocation.slice(32,65);
            var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
            $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></span></button>')
            $('.gotobookmarksbtn').attr('onclick',bookmarkURL);            
            }
            else{
                console.log('Go to bookmarks already present');
            }
/*Toggle icons in any accordions*/
            $('a[data-bs-toggle="collapse"]').on('click', function(){
                if($('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-up') == true){
                    $(this).children().toggleClass('fa-angle-down fa-angle-up');
                   }
                   else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-plus') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-mines') == true){
                        $(this).children().toggleClass('fa-plus fa-minus');
                       }
                       else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-up') == true){
                            $(this).children().toggleClass('fa-chevron-down fa-chevron-up');
                           }
                           else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-up') == true){
                                $(this).children().toggleClass('fa-caret-down fa-caret-up');
                               }
                           });  
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
        });