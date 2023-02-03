function copyCode() {
    var activeBtn = $('button.active').attr('id')
    if(activeBtn == 'imgBuilderBtn') {
        var selectedCode = $('#imgFinalCode').select();
    }
    else if(activeBtn == 'vidBuilderBtn') {
        var selectedCode = $('#vidFinalCode').select();
    }
    else if(activeBtn == 'btnBuilderBtn') {
        var selectedCode = $('#btnFinalCode').select();
    }
    else if(activeBtn == 'alertBuilderBtn'){
        var selectedCode = $('#alertFinalCode').select();
    }
    else if(activeBtn == 'tooltipBuilderBtn'){
        var selectedCode = $('#tooltipFinalCode').select();
    }
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
function fullScreenAlertToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewAlertFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewAlertFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewAlertFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewAlertFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewAlertFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewAlertFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenTooltipToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewTooltipFS = document.getElementById("togglePreviewTooltipFS");
        togglePreviewTooltipFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewTooltipFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewTooltipFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewTooltipFS').removeClass('pt-5');
                $(togglePreviewTooltipFS).appendTo('#previewTooltipFS');
            } else {
                togglePreviewTooltipFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewTooltipFS).appendTo('#previewTooltipFS');
                $(togglePreviewTooltipFS).addClass('d-block mx-auto mt-3')
                $('#previewTooltipFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}