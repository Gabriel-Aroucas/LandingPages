$("#hamburguers").on({
    click: () => {
        $("#hamburguers").css('animation', 'bounceOutLeft');
        $("#hamburguers").css('animation-duration', '1s');
        setTimeout(() => {
            location.href = "pages/cardápio.html";
        }, 900)
    }
})
$("#events").on({
    click: () => {
        $("#events").css('animation', 'bounceOutRight');
        $("#events").css('animation-duration', '1s');
        setTimeout(() => {
            location.href = "pages/eventos.html";
        }, 900)
    }
})
$("#combos").click(() => {

});
$("#combos").on({
    click: () => {
        $("#container").css('display', 'block');
        $("#ty").css('display', 'block');
    }
})
$("#reservas").on({
    click: () => {
        $("#modalError").css('display', 'block');
        $("#ty").css('display', 'block');
    }
})
$("#btnOkModal").on({
    click: () => {
        $("#modalError").css('display', 'none');
        $("#ty").css('display', 'none');
    }
})
$(".closeCart").on({
    click: () => {
        $("#cartOpen").css("display", "none");
    }
})
$(".cartIcon").on({
    click: () => {
        $("#cartOpen").css("display", "block");
    }
})