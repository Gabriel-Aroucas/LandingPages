/**
 * model Card 
 * 
 * <div class="card">
        <img src="https://via.placeholder.com/150" alt="waiting.." class="cardContent">
        <div class="cardOverlay">
            <h4></h4>
        </div>
    </div>
 */


for (let i=0; i<3; i++){
    const imgSrc = ['/images/bird.jpg'];
    const h4 = ['Birds','Planes','Houses','Cars','Nature','Ocean','Bycicle']
    
    $(".cards").append(`<div class='card${i}'/>`);
    $(`.card${i}`).append(`<img src='${imgSrc}' alt='waiting'/>`);
    $(`.card${i}`).append(`<div class ='cardOverlay${i}'/>`);
    $(`.cardOverlay${i}`).append(`<h4>${h4[i]}</h4>`);
    
}