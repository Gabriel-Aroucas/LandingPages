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
const imgSrc = 'https://via.placeholder.com/150';
$(".cards").append("<div class='card'/>");
$(".card").append(`<img src='${imgSrc}' alt='waiting'/>`);
$(".card").append("<div class ='cardOverlay'/>");