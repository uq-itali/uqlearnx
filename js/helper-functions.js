window.addEventListener('load',function(){
    //Initialise all tooltips
               var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
               var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                   return new bootstrap.Tooltip(tooltipTriggerEl)                   
               });
    //Add a go to bookmarks link next to the bookmark this page link
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = '/courses'+bookmarkSlice+'/bookmarks/';
                $('.bookmark-button-wrapper').append('<a class="btn btn-link gotobookmarksbtn" href="" target="_blank">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></a>')
                $('.gotobookmarksbtn').attr('href',bookmarkURL);           
    //Ensure all functions also happen again when a user navigates to the next or previous unit page.
    //Always duplicate any function that needs to happen on loading of a page to be inside the function that follows.
               $('button.seq_other').on('click', function(event){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = '/courses'+bookmarkSlice+'/bookmarks/';
                $('.bookmark-button-wrapper').append('<a class="btn btn-link help-link gotobookmarksbtn" href="" target="_blank">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></a>')
                $('.gotobookmarksbtn').attr('href',bookmarkURL);
            });
        });
            
            