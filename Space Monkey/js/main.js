climb=()=>{
    $(".interativeIndex").css('transform','translateY(-90%)');
    $(".floatButtons").css('transform','translateY(-22vw)');
    $(".arrowUp").css('display','none');
    $(".arrowDown").css('display','block');
    $(".rocket").css('opacity',0);
    $("#main").css('display','block');

}
down=()=>{
    $(".interativeIndex").css('transform','translateY(0%)');
    $(".floatButtons").css('transform','translateY(0%)');
    $(".arrowUp").css('display','block');
    $(".arrowDown").css('display','none');
    $(".rocket").css('opacity',1);
    $("#main").css('display','none');
}

document.addEventListener('scroll',()=>{
    if(scrollY >= 600){
        $(".returnIndex").css("display","block");
    }else{
        $(".returnIndex").css("display","none");

    }

});