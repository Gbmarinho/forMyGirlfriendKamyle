let cont = 1;
let cont2= 0;
$('.sim').click(function(e){
    if(cont == 1){
        $(".pri").css("display", "none");
        $(".sec").css("display", "block")
    }
    if(cont == 2){
        $(".sec").css("display", "none");
        $(".ter").css("display", "block")
    }
    if(cont == 3){
        $(".ter").css("display", "none");
        $(".quar").css("display", "block");
        $(".nao").css("display", "block");
    }
    if(cont == 4){
        $(".quar").css("display", "none");
        $(".quin").css("display", "flex");
        $(".nao").css("display", "none");
        $(".sim").css("display", "none");
    }
    cont = cont + 1;
})
$('.nao').click(function(e){
    if(cont2%2 == 0){
        $(".nao").css("transform", "translate(80px)");
    }else{
        $(".nao").css("transform", "translate(0px)");
    }
    cont2 = cont2 + 1;
})