export function timerToReject(){
    let timerContainer = document.querySelector(".timer");
    const submitSeatsBtn = document.querySelector(".cinema__results__submit");
    let minutesSelector = document.getElementById("minutes");
    let secondsSelector = document.getElementById("seconds");
    timerContainer.style.display = "flex";
    let startTime = Date.now();
    let endTime = startTime + 1000*60*15;
    let timerId = setInterval(()=>{
        let timeNow = Date.now();
        let timeToEnd = endTime - timeNow;
        if(timeToEnd > 0){
            let minutes = Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60));
            let seconds =  Math.floor((timeToEnd % (1000 * 60)) / 1000);
            minutesSelector.textContent = `${minutes}:`;
            secondsSelector.textContent = `${seconds}`;
        }else{
            clearInterval(timerId);
            timerContainer.style.display = "none";
            submitSeatsBtn.style.opacity = "1";
            submitSeatsBtn.disabled = false;
        }
    }, 1000)
}