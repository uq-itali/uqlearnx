window.addEventListener('load',function(){  
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    $('.showToast').on("click", function() {
        var myAlert = document.getElementById('iconCopied');//select id of toast
        var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
        bsAlert.show();//show it      
      });

    var iconSpans = $('#allIcons span.showToast span');
        $('#search').keydown(debounce(function() {
            var searchVal = $.trim($(this).val()).replace(/ +/g, '-').toLowerCase();
            iconSpans.show().filter(function() {
                $('span[style*="display: none"]').each(function(){
                    $(this).show();
                })
                var iconClassText = $(this).attr('class').replace(/\s +/g, ' ').toLowerCase();
                return !~iconClassText.indexOf(searchVal);
            }).parent().hide();
            }, 300))
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
        $('#clearSearch').on('click',function(){
            document.getElementById('search').value = '';
            $('span[style*="display: none"]').each(function(){
                $(this).show();
            })
        })
    });