import Room from "./components/room.js";
import { timerToReject } from "./components/timer.js";

let size = {rows: 7, seatsInRow: 8}
const movie = {
    name: "Marvel Film",
    ticketCost: 50,
}
const newRoom = new Room(size, movie);
newRoom.render();

const submitSeatsBtn = document.querySelector(".cinema__results__submit");
submitSeatsBtn.addEventListener("click", ()=>{
    let allSeatsReserved = newRoom.selectedSeats.reduce((acc, curr) => `${acc} \n row: ${curr.row} number: ${curr.number}`, "");
    let confirmation = confirm(`Do you want to book: ${allSeatsReserved} ?`)
    if(confirmation){
        newRoom.reserveSeats();
        submitSeatsBtn.disabled = true;
        submitSeatsBtn.style.opacity = "0";
        timerToReject();
        newRoom.rejectSeats();
    }
})