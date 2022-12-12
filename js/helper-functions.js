window.addEventListener('load',function(){
    //Initialise all tooltips
               var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
               var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                   return new bootstrap.Tooltip(tooltipTriggerEl)                   
               });
    //Add a go to bookmarks link next to the bookmark this page link
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
                $('.gotobookmarksbtn').attr('onclick',bookmarkURL);           
    //Ensure all functions also happen again when a user navigates to the next or previous unit page.
    //Always duplicate any function that needs to happen on loading of a page to be inside the function that follows.
               $('button.seq_other').on('click', function(event){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
                var bookmarkCount = $('.bookmark-text').length
                if(bookmarkCount <= 1){
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = '/courses'+bookmarkSlice+'/bookmarks/';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
                $('.gotobookmarksbtn').attr('href',bookmarkURL);
                }
                else{
                    console.log('Go to bookmarks already present');
                }
            });
        });