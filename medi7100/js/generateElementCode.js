function generateImgTextCode() {
    //Retrive values and text from the user's input
    var imgPosition = $('input[name="imagePosition"]:checked').val();
    var imgWidth = $('input[name="imageWidth"]:checked').val();
    var imgVert = $('input[name="alignImgVert"]:checked').val();
    var txtVert = $('input[name="alignTextVert"]:checked').val();
    var headingIcon = $('input[name="headingIcon"]:checked').val();
    var imgBorder = $('input[name="imgBorder"]:checked').val();
    var iconCode = '<span class="uq-icon icon-' + headingIcon + '-white"></span> ';
    if(headingIcon != 'noI'){
        iconCode = iconCode
    }
    else{
        iconCode = '';
    }
    //var tinyText = tinymce.activeEditor.getContent() + '\n';
    if(tinymce.get("tinyMCEimg").getContent() !==''){
        tinyTextimg = tinymce.get("tinyMCEimg").getContent() + '\n';
    }
    else{
        tinyTextimg = textPlaceholder
    }
    var colImgOpen = '<div class="col-lg' + imgVert + '">\n';
    var colTxtOpen = '<div class="col-lg' + txtVert + '">\n';
    var col4ImgOpen = '<div class="col-lg-4' + imgVert + '">\n';
    var col3ImgOpen = '<div class="col-lg-3' + imgVert + '">\n';
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
    var captionText = tinymce.get("tinyMCEcaption").getContent();
    var imgCode = '<figure>\n<img class="img-fluid d-block mx-auto' + imgBorder + '" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    var imgFloat = '<figure>\n<img class="img-fluid" src="' + imgLink + '" alt="' + altText + '" />\n<figcaption class="text-center mt-2">' + captionText + '</figcaption>\n</figure>\n';
    if(headSize !== "noH"){
        //Resizing the heading text
        var sizes = {
            "noH": "",
            "h2": "<h2 class=\"text-bg-uq p-2\">" + iconCode + headingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + headingText + "</h4>\n"
        }
        resizedHead = sizes[headSize];
    }
    else {
        resizedHead = "";
    } 
    //Changing code order depending on selections
    if(imgPosition == "left" && imgWidth=="50"){
        var finalCode = resizedHead + rowOpen + colImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "50"){
        var finalCode = resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + colImgOpen + imgCode + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "left" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + col4ImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);                
    }
    else if(imgPosition == "left" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + col3ImgOpen + imgCode + divClose + colTxtOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col4ImgOpen + imgCode + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + colTxtOpen + tinyTextimg + divClose + col3ImgOpen + imgCode + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth =="50"){
        var finalCode = resizedHead + rowOpen + colFloatOpen + imgFloat + divClose + tinyTextimg + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + col4FloatOpen + imgFloat + divClose + tinyTextimg + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "floatRight" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + col3FloatOpen + imgFloat + divClose + tinyTextimg + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
}
function generateVidTextCode() {
    //Retrive values and text from the user's input
    var vidPosition = $('input[name="videoPosition"]:checked').val();
    var vidWidth = $('input[name="videoWidth"]:checked').val();
    var headingIconVid = $('input[name="headingIconVid"]:checked').val();
    var iconCodeVid = '<span class="uq-icon icon-' + headingIconVid + '-white"></span> ';
    if(tinymce.get("tinyMCEvid").getContent() !==''){
        tinyTextvid = tinymce.get("tinyMCEvid").getContent() + '\n';
    }
    else{
        tinyTextvid = textPlaceholder
    }
    if(headingIconVid != 'noI'){
        iconCodeVid = iconCodeVid
    }
    else{
        iconCodeVid = '';
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
        var KalturaCode = vidLink.replace('width="400" height="285" ', '') + '\n</div>'
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
            "h2": "<h2 class=\"text-bg-uq p-2\">" + iconCodeVid + vidHeadingText + "</h2>\n",
            "h2-w": "<h2 class=\"text-bg-dark p-2\"><span class=\"fa-brands fa-youtube\"></span> Watch: " + vidHeadingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + vidHeadingText + "</h4>\n"
        }
        vidResizedHead = vidSizes[vidHeadSize];
    }
    else {
        vidResizedHead = "";
    } 
    //Changing code order depending on selections
    if(vidPosition == "left" && vidWidth=="50"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "50"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + colOpen + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "left" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + col4Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);                
    }
    else if(vidPosition == "left" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + col3Open + vidTitleText + respVidOpen + vidCode + divClose + colOpen + tinyTextvid  + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + col4Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "right" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + colOpen + tinyTextvid + divClose + col3Open + vidTitleText + respVidOpen + vidCode + divClose + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth =="50"){
        var vidFinalCode = vidResizedHead + rowOpen + colFloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "33"){
        var vidFinalCode = vidResizedHead + rowOpen + col4FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidPosition == "floatRight" && vidWidth == "25"){
        var vidFinalCode = vidResizedHead + rowOpen + col3FloatOpen + vidTitleText + respVidOpen + vidCode + divClose + tinyTextvid + rowClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    else if(vidWidth == "0"){
        $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').addClass('d-none');
        var vidFinalCode = vidResizedHead + vidTitleText + respVidOpen + vidCode + divClose;
        $('#vidFinalCode').val(vidFinalCode);
        $('div#demo').html(vidFinalCode);
    }
    if(vidWidth != "0"){
        $('div#vidPosDiv, div#vidTextTiny, div#vidSmallTitle').removeClass('d-none');
    }
}
function generateBtnCode() {
    //Retrive values and text from the user's input
    var btnNumber = $('input[name="btnNumber"]:checked').val();
    var btnOneIcon = $('input[name="btnOneIcon"]:checked').val();
    var btnTwoIcon = $('input[name="btnTwoIcon"]:checked').val();
    var btnThreeIcon = $('input[name="btnThreeIcon"]:checked').val();
    var btnThreeText
    var sameOrNew = $('input[name="sameOrNew"]:checked').val();
    var btnWidth = $('input[name="btnWidth"]:checked').val();
    var btnColor = $('input[name="btnColour"]:checked').val();
    var btnTwoColor = $('input[name="btn2Colour"]:checked').val();
    var btnThreeColor = $('input[name="btn3Colour"]:checked').val();
    function hideBothDivs(){
        $('#btnTwoDiv, #btnThreeDiv').addClass('d-none');
    };
    function hideDivThree(){
        $('#btnThreeDiv').addClass('d-none');
    }
    function showBothDivs(){
        $('#btnTwoDiv, #btnThreeDiv').addClass('show');
    }
    function showDivTwo(){
        $('#btnTwoDiv').addClass('show');
    }
    function hideBtnWidth(){
        $('#btnWidthDiv').removeClass('show');
        setTimeout(function(){
            $('#btnWidthDiv').addClass('d-none'); 
        },200)
    }
    function showBtnWidth(){
        $('#btnWidthDiv').removeClass('d-none');
        setTimeout(function(){
            $('#btnWidthDiv').addClass('show'); 
        },200)
    }
    if(btnNumber == '1'){
        $('#btnTwoDiv, #btnThreeDiv').removeClass('show');
        setTimeout(hideBothDivs, 200);
        showBtnWidth()       
    }
    else if(btnNumber == '2'){
        $("#btnTwoDiv").removeClass("d-none");
        setTimeout(showDivTwo, 200);
        $("#btnThreeDiv").removeClass("show");
        setTimeout(hideDivThree, 200);
        hideBtnWidth();
    }
    else if(btnNumber == '3'){
        $("#btnTwoDiv, #btnThreeDiv").removeClass("d-none");
        setTimeout(showBothDivs, 200);
        hideBtnWidth();
    }
        var btnPosition = $('input[name="btnPosition"]:checked').val()
        var btnSize = $('input[name="btnSize"]:checked').val();
        if($('#btnOneText').val() !== ''){
            var btnOneText = $('#btnOneText').val();
        }
        else{
            var btnOneText = 'Placeholder button text';
        }
        if($('#btn2Text').val() !== ''){
            var btnTwoText = $('#btn2Text').val();
        }
        else{
            var btnTwoText = 'Placeholder button text';
        }
        if($('#btn3Text').val() !== ''){
            var btnThreeText = $('#btn3Text').val();
        }
        else{
            var btnThreeText = 'Placeholder button text';
        }
        
    if(btnOneIcon !=="noI"){
        //change out values for font-awesome classes
    var iconNames = {
        "noI": "",
        "1": " <span class=\"fa fa-external-link-alt\"></span>",
        "2": " <span class=\"fa fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnOneFinalIcon = iconNames[btnOneIcon];
}
else{
    btnOneFinalIcon = "";
}
if(btnTwoIcon !=="noI2"){
    var icon2Names = {
        "noI2": "",
        "1": " <span class=\"fa fa-external-link-alt\"></span>",
        "2": " <span class=\"fa fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnTwoFinalIcon = icon2Names[btnTwoIcon];
}
else{
    btnTwoFinalIcon = "";
}
if(btnThreeIcon !=="noI3"){
    var icon3Names = {
        "noI3": "",
        "1": " <span class=\"fa fa-external-link-alt\"></span>",
        "2": " <span class=\"fa fa-file-arrow-down\"></span>",
        "3": " <span class=\"fa-regular fa-hand-point-right\"></span>",
        "4": " <span class=\"fa-regular fa-circle-right\"></span>",
        "5": " <span class=\"fa-solid fa-arrow-right\"></span>"
    }
    btnThreeFinalIcon = icon3Names[btnThreeIcon];
}
else{
    btnThreeFinalIcon = "";
}
    
    if($('#btnLink').val() !== ''){
        btnLink = $('#btnLink').val();;
    }
    else(
        btnLink = btnPlaceholderLink
        )   
        if($('#btn2Link').val() !== ''){
            btnTwoLink = $('#btn2Link').val();;
        }
        else(
            btnTwoLink = btnPlaceholderLink
            ) 
            if($('#btn3Link').val() !== ''){
                btnThreeLink = $('#btn3Link').val();;
            }
            else(
                btnThreeLink = btnPlaceholderLink
                )  
    if ($('#btnTitleText').val() !== ''){
        var btnTitleText =  $('#btnTitleText').val();
    }
    else{
        var btnTitleText = btnOneText;
    }
    if ($('#btn2TitleText').val() !== ''){
        var btnTwoTitleText =  $('#btn2TitleText').val();
    }
    else{
        var btnTwoTitleText = btnTwoText;
    }
    if ($('#btn3TitleText').val() !== ''){
        var btnThreeTitleText =  $('#btn3TitleText').val();
    }
    else{
        var btnThreeTitleText = btnThreeText;
    }
    
    //Changing code order depending on selections
    if(btnPosition == "left" && btnWidth == "Nat"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "25"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w25 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "50"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w50 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "75"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w75 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "left" && btnWidth == "100"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + w100 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">'+ btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "Nat"){
        var btnOneFinal = '<p class="text-center"><a href="' + btnLink + '" class="btn btn-' + btnColor + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a></p>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "25"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w25 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "50"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w50 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "75"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + w75 + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    else if(btnPosition == "centred" && btnWidth == "100"){
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+btnTitleText+'">' + btnOneText + btnOneFinalIcon + '</a>';
        var btnFinalCode = btnOneFinal
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    if(btnNumber == '2'){
        var btnGroupOpen = '<div class="row">\n<div class="col-lg">\n'
        var btnColOpen = '<div class="col-lg">\n'
        var btnColClose = '</div>\n'
        var btnGroupClose = '</div>\n</div>\n'
        var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+ btnTitleText + '">' + btnOneText + btnOneFinalIcon + '</a>\n';
        var btnTwoFinal = '<a href="' + btnTwoLink + '" class="btn btn-' + btnTwoColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnTwoTitleText + '">' + btnTwoText + btnTwoFinalIcon + '</a>\n';
        var btnFinalCode = btnGroupOpen + btnOneFinal + btnColClose + btnColOpen + btnTwoFinal + btnGroupClose;
        $('#btnFinalCode').val(btnFinalCode);
        $('div#demo').html(btnFinalCode);
    }
    if(btnNumber == '3'){
            var btnGroupOpen = '<div class="row gap-2 p-2">\n<div class="col-lg">\n'
            var btnColOpen = '<div class="col-lg">\n'
            var btnColClose = '</div>\n'
            var btnGroupClose = '</div>\n</div>\n'
            var btnOneFinal = '<a href="' + btnLink + '" class="btn btn-' + btnColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="'+ btnTitleText + '">' + btnOneText + btnOneFinalIcon + '</a>\n';
            var btnTwoFinal = '<a href="' + btnTwoLink + '" class="btn btn-' + btnTwoColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnTwoTitleText + '">' + btnTwoText + btnTwoFinalIcon + '</a>\n';
            var btnThreeFinal = '<a href="' + btnThreeLink + '" class="btn btn-' + btnThreeColor + ctrBtn + btnSize + '" target="_' + sameOrNew + '" title="' + btnThreeTitleText + '">' + btnThreeText + btnThreeFinalIcon + '</a>\n';
            console.log(btnThreeText)
            var btnFinalCode = btnGroupOpen + btnOneFinal + btnColClose + btnColOpen + btnTwoFinal + btnColClose + btnColOpen + btnThreeFinal + btnGroupClose;
            $('#btnFinalCode').val(btnFinalCode);
            $('div#demo').html(btnFinalCode);
        }
    }
function generateAlertCode() {
    //Retrive values and text from the user's input
    var alertWidth = $('input[name="alertWidth"]:checked').val();
    var alertColor = $('input[name="alertColour"]:checked').val();
    $('#alertColourDiv div.alert').css('--bs-alert-margin-bottom', '0px');
    var alertOrQuote = $('input[name="alertOrQuote"]:checked').val();
    var fontSize = $('input[name="alertFontSize"]:checked').val();
    var citationPlaceholder = 'Citation in APA 7th'
    if(tinymce.get("tinyMCEalert").getContent() !==''){
        tinymce.get("tinyMCEalert").dom.addClass(tinyMCE.get("tinyMCEalert").dom.select('p:last-child'), 'mb-0');
        tinymce.get("tinyMCEalert").dom.addClass(tinyMCE.get("tinyMCEalert").dom.select('p:last-child'), 'mb-0');
        tinyTextalert = tinymce.get("tinyMCEalert").getContent() + '\n';
    }
    else{
        tinyTextalert = textPlaceholder;
    }
    if(tinymce.get("tinyMCEcitation").getContent() !==''){
        tinymce.get("tinyMCEcitation").dom.addClass(tinyMCE.get("tinyMCEcitation").dom.select('p:first-child'), 'd-inline')
        tinyTextCitation = tinymce.get("tinyMCEcitation").getContent() + '\n';
    }
    else{
        tinyTextCitation =  citationPlaceholder;
    }

    if($('#alertHeadingText').val() !== ''){
        alertHeadingText = $('#alertHeadingText').val();
    }
    else{
        alertHeadingText = '';
    }
    var alertHeadSize = $('input[name="alertHeadSize"]:checked').val();        
    if(alertHeadSize !== "noH"){
            //Resizing the heading text
            var alertSizes = {
                "noH": "",
                "h2": "<h2 class=\"alert-heading text-center\">" + alertHeadingText + "</h2>\n",
                "h4": "<h4 class=\"alert-heading text-center\">" + alertHeadingText + "</h4>\n"
            }
            resizedAlertHead = alertSizes[alertHeadSize];
        }
        else {
            resizedAlertHead = "";
        }
        if(alertOrQuote == 'alert'){
            $('#citationDiv, #textSizeDiv').removeClass('show')
            setTimeout(function(){
                $('#citationDiv, #textSizeDiv').addClass('d-none')
            },200)
            $('#alertHeadingDiv').removeClass('d-none');
            setTimeout(function(){$('#alertHeadingDiv').addClass('show')
            }, 200)
            var alertFinalCode = alertOpen + alertColor + ' ' + alertWidth + alertDivClose + resizedAlertHead + tinyTextalert + divClose;
            $('#alertFinalCode').val(alertFinalCode);
            $('div#demo').html(alertFinalCode);
        }
        else if(alertOrQuote == 'quote'){
            $('#citationDiv, #textSizeDiv').removeClass('d-none')
            setTimeout(function(){
                $('#citationDiv, #textSizeDiv').addClass('show')}, 200)
            $('#alertHeadingDiv').removeClass('show');
            setTimeout(function(){
                $('#alertHeadingDiv').addClass('d-none')}
                , 200)
            var alertFinalCode = alertOpen + alertColor + ' ' + alertWidth + alertDivClose + quotationsLeft + figOpen + quoteWrapper + fontSize + closeWrapper + tinyTextalert + endQuoteWrapper + figCaptionOpen + tinyTextCitation + figCaptionClose + quotationsRight;
            $('#alertFinalCode').val(alertFinalCode);
            $('div#demo').html(alertFinalCode);
        }
}
function generateTooltipCode(){
    setTimeout(function(){
        $('[data-bs-toggle="tooltip"]').tooltip();
    },200)
    var tooltipPosition = $('input[name="tooltipPosition"]:checked').val();
    var tooltipText = $('#tooltipText').val();
    if(tooltipText !== ''){
        tooltipText = tooltipText;
    }
    else{
        tooltipText = tooltipPlaceholderText;
    }
    var tooltipFinalCode = '<span data-bs-toggle=\"tooltip\" data-bs-html="true" data-bs-placement=\"' + tooltipPosition + '\" data-bs-title=\"' + tooltipText + '\"><i class=\"fa fa-question-circle text-success\" aria-hidden=\"true\"></i></span\>';
    $('#tooltipFinalCode').val(tooltipFinalCode);
    $('div#demo').html(tooltipFinalCode);
}
function generateTableCode(){
    var tableHeadingText = $('#tableHeadingText').val();
    var tableHeadSize = $('input[name="tableHeadSize"]:checked').val();
    var theadColour = $('input[name="theadColour"]:checked').val();
    var tinyMCEtable = tinymce.get("tinyMCEtable").getContent();
    var tableStripes = $('input[name="tableStripe"]:checked').val();
    
    if(tinymce.get("tinyMCEtable").getContent() != ''){
        var tinyMCEtable = tinyMCEtable;
        var thCalc = $(tinyMCEtable).find('tbody td').length/$(tinyMCEtable).find('tbody tr').length;
    }
    else{
        var tinyMCEtable = ''
    }
    if(theadColour != 'bold'){
        var theadColourOptions = {
            "primary" : "table-primary",
            "secondary" : "table-secondary",
            "info" : "table-info",
            "danger" : "table-danger",
            "warning" : "table-warning",
            "success" : "table-success",
            "dark" : "table-dark",
            "light" : "table-light",
            "uq" : "bg-uq text-white"
        }
        theadRecoloured = theadColourOptions[theadColour];
        tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('thead'));
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('thead'), theadRecoloured);       
    }
    else{
        tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('thead'));
        theadRecoloured = "";
    }
    if(tableStripes == "table-striped"){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns');       
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');       
    }
    else if(tableStripes == "table-striped-columns"){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');       
        tinymce.get("tinyMCEtable").dom.addClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns'); 
    }
    else if(tableStripes == ""){
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped');
        tinymce.get("tinyMCEtable").dom.removeClass(tinyMCE.get("tinyMCEtable").dom.select('table'), 'table-striped-columns');
    }  
   
    if(tableHeadSize !== "noH"){
        //Resizing the heading text
        var tableSizes = {
            "noH": "",
            "h2": "<h2 class=\"text-bg-uq p-2\">" + tableHeadingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + tableHeadingText + "</h4>\n"
        }
        tableResizedHead = tableSizes[tableHeadSize];
    }
    else {
        tableResizedHead = "";
    }
    if($(tinymce.get("tinyMCEtable").getContent()).find('thead').length == 0){
        var thSingle = '<th></th>\n';
        var thCalc = $(tinyMCEtable).find('tbody td').length/$(tinyMCEtable).find('tbody tr').length;
        tinymce.get("tinyMCEtable").setContent(tinyMCEtable.replace('<tbody>', '<thead>\n' + (thSingle.repeat(thCalc)) + '</thead>\n' + '<tbody>\n'))
    }
    var tinyMCEtable = tinymce.get("tinyMCEtable").getContent();
    var tableFinalCode = tableResizedHead + tinyMCEtable;
    $('#tableFinalCode').val(tableFinalCode);
    $('div#demo').html(tableFinalCode);
}   
function cleanTable() {
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('table'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('thead'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('tbody'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('tr'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('th'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('td'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('div'));
    tinymce.get("tinyMCEtable").dom.removeAllAttribs(tinyMCE.get("tinyMCEtable").dom.select('p'));
    tinymce.get("tinyMCEtable").setContent(tinyMCEtable.replace('<table>','<table class="table table-responsive table-hover table-bordered">'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('colgroup'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('div'));
    tinymce.get("tinyMCEtable").dom.remove(tinyMCE.get("tinyMCEtable").dom.select('p'));
    generateTableCode();
}
function makeTable(){
    var tableOpen = '<table class="table table-responsive table-bordered table-hover">\n<thead>\n<tr>\n';
    var tableClose = '</tbody>\n</table>\n';
    var tBodyOpen = '</tr>\n</thead>\n<tbody>\n';
    var trOpen = '<tr>';
    var trClose = '</tr>\n';     
    var thSingle = '<th></th>\n';
    var tdSingle = '<td></td>\n';
    var rowNumber = $('input#rowNumber').val();
    var colNumber = $('input#colNumber').val();
    var rowSingle = trOpen + tdSingle.repeat(colNumber) + trClose
    tinymce.get("tinyMCEtable").setContent(tableOpen + thSingle.repeat(colNumber) + tBodyOpen + rowSingle.repeat(rowNumber) + tableClose);
    generateTableCode();
  }
  function addRowAfter(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertRowAfter', false);
    generateTableCode();
  }
  function addRowBefore(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertRowBefore', false);
    generateTableCode();
  }
  function addColAfter(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertColAfter', false);
    generateTableCode();
  }
  function addColBefore(){
    tinymce.get("tinyMCEtable").execCommand('mceTableInsertColBefore', false);
    generateTableCode();
  }
  function removeCol(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDeleteCol', false);
    generateTableCode();
  }
   function removeRow(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDeleteRow', false);
    generateTableCode();
  }
  function removeTable(){
    tinymce.get("tinyMCEtable").execCommand('mceTableDelete', false);
    generateTableCode();
  }
  function generateAccCode(){
    var accName = $('#accName').val();
    var accHeadingText = $('#accHeadingText').val();
    var accHeadSize = $('input[name="accHeadSize"]:checked').val();
    var showHideFirst = $('input[name="accFirstOpen"]:checked').val();
    var drawerQuantity = $('#drawerNumber').val();
    var drawer1Title = $('#acc1Btn').val();
    var drawer2Title = $('#acc2Btn').val();
    var drawer3Title = $('#acc3Btn').val();
    var drawer4Title = $('#acc4Btn').val();
    var drawer5Title = $('#acc5Btn').val();
    var drawer6Title = $('#acc6Btn').val();
    var drawer7Title = $('#acc7Btn').val();
    var drawer8Title = $('#acc8Btn').val();
    var drawer9Title = $('#acc9Btn').val();
    var drawer10Title = $('#acc10Btn').val();
    var content1Body = tinymce.get("acc1Content").getContent();
    var content2Body = tinymce.get("acc2Content").getContent();
    var content3Body = tinymce.get("acc3Content").getContent();
    var content4Body = tinymce.get("acc4Content").getContent();
    var content5Body = tinymce.get("acc5Content").getContent();
    var content6Body = tinymce.get("acc6Content").getContent();
    var content7Body = tinymce.get("acc7Content").getContent();
    var content8Body = tinymce.get("acc8Content").getContent();
    var content9Body = tinymce.get("acc9Content").getContent();
    var content10Body = tinymce.get("acc10Content").getContent();
    var accOpen = '<div class=\"accordion\" id=\"accordion' + accName + '">\n';
    var accClose = '</div>';
    var drawerClose = '</div>\n</div>\n';
    var accDrawer1 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading1\"><button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapse1\">' + drawer1Title + '</button></h2>\n';
    var content1Open = '<div id=\"collapse1\" class=\"accordion-collapse collapse'+showHideFirst+'\" aria-labelledby=\"heading1\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content1Body + '</div>\n';
    var accDrawer2 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading2\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\">' + drawer2Title + '</button></h2>\n';
    var content2Open = '<div id=\"collapse2\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading2\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content2Body + '</div>\n';
    var accDrawer3 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading3\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse3\" aria-expanded=\"false\" aria-controls=\"collapse3\">' + drawer3Title + '</button></h2>\n';
    var content3Open = '<div id=\"collapse3\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading3\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content3Body + '</div>\n';
    var accDrawer4 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading4\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse4\" aria-expanded=\"true\" aria-controls=\"collapse4\">' + drawer4Title + '</button>\n</h2>\n';
    var content4Open = '<div id=\"collapse4\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading4\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content4Body + '</div>\n';
    var accDrawer5 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading5\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse5\" aria-expanded=\"true\" aria-controls=\"collapse5\">' + drawer5Title + '</button>\n</h2>\n';
    var content5Open = '<div id=\"collapse5\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading5\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content5Body + '</div>\n';
    var accDrawer6 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading6\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse6\" aria-expanded=\"true\" aria-controls=\"collapse6\">' + drawer6Title + '</button>\n</h2>\n';
    var content6Open = '<div id=\"collapse6\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading6\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content6Body + '</div>\n';
    var accDrawer7 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading7\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse7\" aria-expanded=\"true\" aria-controls=\"collapse7\">' + drawer7Title + '</button>\n</h2>\n';
    var content7Open = '<div id=\"collapse7\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading7\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content7Body + '</div>\n';
    var accDrawer8 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading8\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse8\" aria-expanded=\"true\" aria-controls=\"collapse8\">' + drawer8Title + '</button>\n</h2>\n';
    var content8Open = '<div id=\"collapse8\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading8\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content8Body + '</div>\n';
    var accDrawer9 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading9\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse9\" aria-expanded=\"true\" aria-controls=\"collapse9\">' + drawer9Title + '</button>\n</h2>\n';
    var content9Open = '<div id=\"collapse9\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading9\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content9Body + '</div>\n';
    var accDrawer10 = '<div class=\"accordion-item\">\n<h2 class="accordion-header\" id=\"heading10\">\n<button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse10\" aria-expanded=\"true\" aria-controls=\"collapse10\">' + drawer10Title + '</button>\n</h2>\n';
    var content10Open = '<div id=\"collapse10\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading10\" data-bs-parent=\"#accordion' + accName + '\">\n<div class=\"accordion-body\">' + content10Body + '</div>\n';
    if(accHeadSize !== "noH"){
        //Resizing the heading text
        var accHeadSizes = {
            "noH": "",
            "h2": "<h2 class=\"text-bg-uq p-2\">" + accHeadingText + "</h2>\n",
            "h4": "<h4 class=\"text-bg-info bg-opacity-25 p-2\">" + accHeadingText + "</h4>\n"
        }
        accResizedHead = accHeadSizes[accHeadSize];
    }
    else {
        accResizedHead = "";
    }
    var plusDrawer4 = accDrawer4 + content4Open + drawerClose;
    var plusDrawer5 = plusDrawer4 + accDrawer5 + content5Open + drawerClose;
    var plusDrawer6 = plusDrawer5 + accDrawer6 + content6Open + drawerClose;
    var plusDrawer7 = plusDrawer6 + accDrawer7 + content7Open + drawerClose;
    var plusDrawer8 = plusDrawer7 + accDrawer8 + content8Open + drawerClose;
    var plusDrawer9 = plusDrawer8 + accDrawer9 + content9Open + drawerClose;
    var plusDrawer10 = plusDrawer9 + accDrawer10 + content10Open + drawerClose;
    var accCode = accOpen + accDrawer1 + content1Open + drawerClose + accDrawer2 + content2Open + drawerClose + accDrawer3 + content3Open + drawerClose;
    switch(drawerQuantity){
        case "3":
            $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').addClass('d-none');
            }, 100)
            accCode += accClose;
            break;
        case "4":
            $('#drawer4').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4').addClass('show')
            }, 100)
            $('#drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').addClass('d-none');
            }, 100)
            accCode += plusDrawer4 += accClose;
            break;    
        case "5":
            $('#drawer4, #drawer5').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5').addClass('show')
            }, 100)
            $('#drawer6, #drawer7, #drawer8, #drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer6, #drawer7, #drawer8, #drawer9, #drawer10').addClass('d-none');
            }, 100)
            accCode += plusDrawer5 += accClose;
            break;  
        case "6":
            $('#drawer4, #drawer5, #drawer6').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6').addClass('show')
            }, 100)
            $('#drawer7, #drawer8, #drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer7, #drawer8, #drawer9, #drawer10').addClass('d-none')
            }, 100)
            accCode += plusDrawer6 += accClose;
            break; 
        case "7":
            $('#drawer4, #drawer5, #drawer6, #drawer7').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6, #drawer7').addClass('show')
            }, 100)
            $('#drawer8, #drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer8, #drawer9, #drawer10').addClass('d-none')
            }, 100)
            accCode += plusDrawer7 += accClose;
            break;
        case "8":
            $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8').addClass('show')
            }, 100)
            $('#drawer9, #drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer9, #drawer10').addClass('d-none')
            }, 100)
            accCode += plusDrawer8 += accClose;
            break;  
        case "9":
            $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9').addClass('show')
            }, 100)
            $('#drawer10').removeClass('show');
            setTimeout(function(){
                $('#drawer10').addClass('d-none')
            }, 100)
            accCode += plusDrawer9 += accClose;
            break;
        case "10":
            $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').removeClass('d-none');
            setTimeout(function(){
                $('#drawer4, #drawer5, #drawer6, #drawer7, #drawer8, #drawer9, #drawer10').addClass('show')
            }, 100)
            accCode += plusDrawer10 += accClose;
            break;    
        }    
        $("#drawerNumber").change(function() {
            minMax();
        })
        function minMax(){
            var max = parseInt($("#drawerNumber").attr('max'));
            var min = parseInt($("#drawerNumber").attr('min'));
            if ($("#drawerNumber").val() > max)
            {
                Swal.fire({
                    icon: 'error',
                    title: '<div class="text-center">Maximum 10 Drawers</div>',
                    text: 'The maximum number of drawers you can have is 10.'})
                $("#drawerNumber").val(max);
                generateAccCode();
            }
            else if ($("#drawerNumber").val() < min)
            {
                Swal.fire({
                    icon: 'error',
                    title: '<div class="text-center">Minimum 3 Drawers</div>',
                    text: 'The minimum number of drawers you can have is 3.'})
                $("#drawerNumber").val(min);
                generateAccCode();
            }       
          }; 
    var accFinalCode = accResizedHead + accCode;
    $('#accFinalCode').val(accFinalCode);
    $('div#demo').html(accFinalCode);
    $('h2.accordion-header').on('click',function(){
        $('div.accordion-collapse').removeClass('show')
        console.log('function run');
    });
} 