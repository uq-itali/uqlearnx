function generateImgTextCode() {
    //Retrive values and text from the user's input
    var imgPosition = $('input[name="imagePosition"]:checked').val();
    var imgWidth = $('input[name="imageWidth"]:checked').val();
    //var tinyText = tinymce.activeEditor.getContent() + '\n';
    if(tinymce.get("tinyMCEimg").getContent() !==''){
        tinyTextimg = tinymce.get("tinyMCEimg").getContent() + '\n';
    }
    else{
        tinyTextimg = textPlaceholder
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
        var finalCode = resizedHead + rowOpen + colOpen + imgCode + divClose + colOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "50"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyTextimg + divClose + colOpen + imgCode + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "left" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + col4Open + imgCode + divClose + colOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);                
    }
    else if(imgPosition == "left" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + col3Open + imgCode + divClose + colOpen + tinyTextimg  + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "33"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyTextimg + divClose + col4Open + imgCode + rowClose;
        $('#imgFinalCode').val(finalCode);
        $('div#demo').html(finalCode);
    }
    else if(imgPosition == "right" && imgWidth == "25"){
        var finalCode = resizedHead + rowOpen + colOpen + tinyTextimg + divClose + col3Open + imgCode + rowClose;
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
    if(tinymce.get("tinyMCEvid").getContent() !==''){
        tinyTextvid = tinymce.get("tinyMCEvid").getContent() + '\n';
    }
    else{
        tinyTextvid = textPlaceholder
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
        var KalturaCode = vidLink + '\n</div>'
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