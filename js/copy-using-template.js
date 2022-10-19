document.addEventListener("DOMContentLoaded", function(event) { /*JS required for the collapsible items*/
})

window.addEventListener('load',function(){
 /*Initialise all tooltips*/
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
                    /*Copy code function. Button in the HTML has an onclick trigger that runs this. Only way I got it to work in LearnX.*/
                    function copyCode(){

                    var btn = $('.copybutton');
                    var btnHtml = $('.copybutton').html();
                    var snippet = btn.prev().html().slice(12,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
                    console.log("@GB: snippet = ", snippet); 
                    copyTextToClipboard(snippet);
                    btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
                    window.setTimeout(function() {
                        btn.html(btnHtml);
                     }, 3000);
            };
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
                   var coll = $('.coll-btn');
                   var i;
                   for (i = 0; i < coll.length; i++) {
                        coll[i].addEventListener("click", function() {
                            $(this).toggleClass("coll-active");
                            var content = $(this).parent().next();
                            if (content.css('max-height') != '0px'){
                                content.css('max-height', '0px');
                            } else {
                                content.css({'max-height': '100%','transition' : 'max-height 1s ease-in-out'});
                            }
                        });
                    };
                });