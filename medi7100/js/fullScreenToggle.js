function copyCode() {
    var selectedCode = $('#finalCode').select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
        console.log("@GB: snippet = ", selectedCode.val());
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
}
function fullScreenImgToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewImgFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewImgFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewImgFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewImgFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewImgFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewImgFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenVidToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewVidFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewVidFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewVidFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewVidFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewVidFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewVidFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenBtnToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewBtnFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewBtnFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewBtnFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewBtnFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewBtnFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewBtnFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}