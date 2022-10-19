window.addEventListener('load',function(){
 /*Initialise all tooltips*/
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
            $('.htmlToCopy').after('<button type="button" class="btn btn-primary copybutton mt-3"><span style="color: var(--bs-bg-color) !important" class="fa fa-clipboard" aria-hidden="true"></span>&nbsp;Copy code</button>');
            $('.copybutton').on('click', function(event) {
                    /*Copy code function. Button in the HTML has an onclick trigger that runs this. Only way I got it to work in LearnX.*/
                    var btn = $(this);
                    var btnHtml = $(this).html();
                    var snippet = btn.prev().html().slice(12,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
                    console.log("@GB: snippet = ", snippet); 
                    copyTextToClipboard(snippet);
                    btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
                    window.setTimeout(function() {
                        btn.html(btnHtml);
                     }, 3000);
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
                   /*JS required for the collapsible items*/
                   var coll = document.getElementsByClassName("coll-btn");
                   var i;
                   for (i = 0; i < coll.length; i++) {
                    coll[i].addEventListener("click", function() {
                        this.classList.toggle("coll-active");
                        var content = this.nextElementSibling;
                        if (content.style.maxHeight){
                            content.style.maxHeight = null;
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                        }
                    });
                }
            });