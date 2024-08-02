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
    if (cont2 % 5 == 0) {
        $(".nao").css("transform", "translate(80px)");
    } 
    if (cont2 % 5 == 1) {
        $(".nao").css("transform", "translate(20px, 150px)");
    } 
    if (cont2 % 5 == 2) {
        $(".nao").css("transform", "translate(100px, 100px)");
    } 
    if (cont2 % 5 == 4) {
        $(".nao").css("transform", "translate(0px, 0px)");
    }
    if (cont2 % 5 == 3) {
        $(".nao").css("transform", "translate(-100px, 80px)");
    }
    cont2 = cont2 + 1;
})