import { STATUSES, saveToStorage, getFromStorage, deleteFromStorage } from "../utils";
import Chair from "./chair";

export default function Room(size, movie){
    this.size = size;
    this.movie = movie;

    this.elements = {};

    this.render = () => {
        this.elements.seatsList = document.querySelector(".cinema__seats");
        this.allSeats  = [];
        this.selectedSeats = getFromStorage("selectedSeats") || [];
        this.reservedSeats = getFromStorage("reservedSeats") || [];
        for(let row = 1; row <= this.size.rows; row++){
            for(let number = 1; number <= this.size.seatsInRow; number++){
                const newChair = new Chair(row, number)
                if(this.selectedSeats.find(seat => seat.row === newChair.row && seat.number === newChair.number)){
                    newChair.status = STATUSES.CHOISE
                }else if(this.reservedSeats.find(seat => seat.row === newChair.row && seat.number === newChair.number)){
                    newChair.status = STATUSES.PICKED
                }
                this.allSeats.push(newChair);
                newChair.render(this.elements.seatsList);
            }
        }
        
        this.refreshResults()
        this.elements.seatsList.addEventListener("click", (e) => this.handleChangeStatus(e))
    },
    this.handleChangeStatus = (e) => {
        if(e.target.closest(".cinema__seats__seat")){
            let eventObj = this.allSeats.find(seat => seat.elements.self == e.target.closest(".cinema__seats__seat"))
            if(eventObj.status == STATUSES.FREE){
                eventObj.changeStatus(STATUSES.CHOISE);
                this.selectedSeats.push(eventObj);
                saveToStorage("selectedSeats", this.selectedSeats)

                this.refreshResults();
            }else if(eventObj.status == STATUSES.CHOISE){
                eventObj.changeStatus(STATUSES.FREE);
                deleteFromStorage("selectedSeats");
                let deletingIndex = this.selectedSeats.indexOf(eventObj);
                this.selectedSeats.splice(deletingIndex, 1);
                saveToStorage("selectedSeats", this.selectedSeats);

                this.refreshResults();
            }
        }
    }
    this.refreshResults = () => {
        let resultsList = document.querySelector(".cinema__results__list");
        resultsList.innerHTML = ``;
        this.selectedSeats.forEach(seat =>{
            resultsList.insertAdjacentHTML("beforeend",`<li class="cinema__results__list__item">ряд ${seat.row} місце ${seat.number}</li>`)
        })
    }
    this.reserveSeats = () => {
        saveToStorage("reservedSeats", this.selectedSeats);
        this.selectedSeats.forEach(seat => seat.changeStatus(STATUSES.PICKED))
        this.selectedSeats = [];
        deleteFromStorage("selectedSeats");
    }
    this.rejectSeats = () =>{
        setTimeout(()=>{
            this.selectedSeats = [];
            this.refreshResults();
            this.allSeats.forEach(seat => seat.changeStatus(STATUSES.FREE));
            deleteFromStorage("selectedSeats");
        },1000*60*15)
    }
}