const planList = document.querySelector(".planlist");
const button = document.querySelector('#generator');

let plans =[
    'Spotkania 1:1',
    'Codzienny odsłuch',
    'Rozliczanie co godzinę',
    'Warsztat z zespołem',
    'Praca na raportach',
    'Rozliczanie z estymacji',
    'Zwiększony czas rozmów',
    'Odsłuch najlepszych rozmów',
    'Ponowne dzwonienie',
    'Pilnowanie leadów',
    'Spotkania rozwojowe z najsłabszymi',
    'Coaching z trenerem'
];

function plansNumber(){
    if (plans.length !== 0){
        let random = Math.floor(Math.random() * plans.length);
        return plans.splice(random, 1);
    } 
}

function generatePlan(event){
    if(plans.length !== 0){
        const planDiv = document.createElement('div');
        planDiv.classList.add('plan');
        planDiv.textContent = plansNumber()
        planList.appendChild(planDiv);
    } else {
        alert("Skończyły się pomysły na plany!")
    }
}

button.addEventListener("click", generatePlan)