window.addEventListener('load',function(){
    /*Initialise all tooltips*/
               var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
               var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                   return new bootstrap.Tooltip(tooltipTriggerEl)                   
               });
    //Ensure all functions also happen again when a user navigates to the next or previous unit page.
    //Always duplicate any function that needs to happen on loading of a page to be inside the function that follows.
               $('button.seq_other').on('click', function(event){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
            })
            });
            
            