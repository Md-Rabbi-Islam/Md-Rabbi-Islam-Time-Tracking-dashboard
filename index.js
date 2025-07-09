
const menu = document.querySelectorAll('.menu-list a');
const cards =document.querySelectorAll('.timecard');

const timeLabels = {
    daily:"Yesterday",
    weekly:'Last Week',
    monthly:"Lasat Week"
}
let data =[];
fetch("data.json")
.then(res =>res.json())
.then(maindata => {
    data = maindata;
    updateUI("weekly")


})

function updateUI(timeframe){
    data.forEach((value,index) => {
        const card = cards[index];
        const currentEl = card.querySelector('.current');
        const previousEl =card.querySelector('.previous');

        const current = value.timeframes[timeframe].current;
        const previous = value.timeframes[timeframe].previous;

        currentEl.textContent = `${current}hrs`;
        previousEl.textContent = `${timeLabels[timeframe]} -${previous}hrs`
    })
}
menu.forEach(link => {
    link.addEventListener('click',(e) => {
        e.preventDefault();
        const timeframe = link.textContent.toLowerCase();
        updateUI(timeframe);
        })
    })

   

