function generateImgTextCode() {
    //Retrive values and text from the user's input
    var imgPosition = $('input[name="imagePosition"]:checked').val();
    var imgWidth = $('input[name="imageWidth"]:checked').val();
    //var tinyText = tinymce.activeEditor.getContent() + '\n';
    if(tinymce.activeEditor.getContent() !==''){
        tinyText = tinymce.activeEditor.getContent() + '\n';
    }
    else{
        tinyText = textPlaceholder
    }
    var headingText = $('#headingText').val();
    var headSize = $('input[name="headSize"]:checked').val();
    var imgLink = $('#imgLink').val();
    if(imgLink !== ''){
        imgLink = imgLink;
    }
    else(
        imgLink = imgPlaceholderLink
        )
    var altText = $('#altText').val();
    var captionText = $('#captionText').val();
    var imgCode = '<figure>\n<img class="img-fluid d-block mx-auto" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    var imgFloat = '<figure>\n<img class="img-fluid" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    if(headSize !== "noH"){
        //Resizing the heading text
        var sizes = {
            "noH": "",
            "h2": "<h2 class=\"text-bg-uq p-2\">" + headingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + headingText + "</h4>\n"
        }
        resizedHead = sizes[headSize];
    }
    else {
        resizedHead = "";
    } 
    //Changing code order depending on selections
    if(imgPosition == "left" && imgWidth=="50"){
        var finalCode = resizedHead + rowOpen + colOpen + imgCode + divClose + colOpen + tinyText  + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "50"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyText + divClose + colOpen + imgCode + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "left" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + col4Open + imgCode + divClose + colOpen + tinyText  + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);                
    }
    else if(imgPosition == "left" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + col3Open + imgCode + divClose + colOpen + tinyText  + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyText + divClose + col4Open + imgCode + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyText + divClose + col3Open + imgCode + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth =="50"){
        var finalCode = resizedHead + rowOpen + colFloatOpen + imgFloat + divClose + tinyText + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + col4FloatOpen + imgFloat + divClose + tinyText + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + col3FloatOpen + imgFloat + divClose + tinyText + rowClose;
        $('#finalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
}
function generateVidTextCode() {
    //Retrive values and text from the user's input
    var vidPosition = $('input[name="videoPosition"]:checked').val();
    var vidWidth = $('input[name="videoWidth"]:checked').val();
    //var tinyText = tinymce.activeEditor.getContent() + '\n';
    if(tinymce.activeEditor.getContent() !==''){
        tinyText = tinymce.activeEditor.getContent() + '\n';
    }
    else{
        tinyText = textPlaceholder
    }
    var vidHeadingText = $('#vidHeadingText').val();
    var vidHeadSize = $('input[name="vidHeadSize"]:checked').val();
    var vidLink = $('#vidLink').val();
    if(vidLink !== ''){
        vidLink = vidLink;
    }
    else(
        vidLink = vidPlaceholderLink
        )
    
        var YTCode = '<iframe src="' + vidLink.replace('watch?v=','embed/') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>';
        var KalturaCode = vidLink
        var VimeoCode = '<iframe src="' + vidLink.replace('vimeo.com','player.vimeo.com/video') + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>\n</iframe></div>\n<p class="text-center"><a href="' + vidLink + '" target="_blank" title="Watch this video on Vimeo">Watch this video on Vimeo</a></p>\n';
    
    if(vidLink.includes('youtu')== true){
        var vidCode = YTCode;
    }
    else if(vidLink.includes('kaltura') == true){
        var vidCode = KalturaCode;
    }
    else if(vidLink.includes('vimeo')== true){
        var vidCode = VimeoCode;        
    }
    else if(vidLink == ''){
        var vidCode = vidPlaceholder
    }
    
    if ($('#vidTitleText').val() !== ''){
        var vidTitleText =  "<h5 class=\"text-center\">" + $('#vidTitleText').val() + "</h5>\n";
    }
    else{
        var vidTitleText = '';
    }
    
    //var vidFloat = '<figure>\n<img class="img-fluid" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    if(vidHeadSize !== "noH"){
        //Resizing the heading text
        var vidSizes = {
            "noH": "",
            "h2": "<h2 class=\"text-bg-uq p-2\">" + vidHeadingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + vidHeadingText + "</h4>\n"
        }
        vidResizedHead = vidSizes[vidHeadSize];
    }
    else {
        vidResizedHead = "";
    } 
    //Changing code order depending on selections
    if(vidPosition == "left" && vidWidth=="50"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyText  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "50"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyText + divClose + colOpen + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "left" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + col4Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyText  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);                
    }
    else if(vidPosition == "left" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + col3Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyText  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyText + divClose + col4Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyText + divClose + col3Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth =="50"){
        var vidFinalCode = vidResizedHead + rowOpen + colFloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyText + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + col4FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyText + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + col3FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyText + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#vidDemo').html(vidFinalCode);
    }
}