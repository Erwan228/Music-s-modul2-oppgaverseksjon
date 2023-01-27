function updateNavnListeView(){
    document.getElementById('screen').innerHTML = /*html*/ `
                 <h1>Vinlotteriside</h1>
                 <h2>Liste over ansatte i trekningen</h2>
                 <div id="displayArea"></div> <!--Område for å vise frem listen av ansatte-->
                 <hr>
                 <p>Legg til ansatte i lotteriet</p>
                     <input value="" type="text" on onchange="model.input.inputName = this.value"> <button onclick="addName()">Legg til</button>
         <br><br>
                 <p>Velg antall vinnere</p>
                 <input value="" type="number" onchange="model.input.numberOfWinners = this.value"> <button onclick="draw()">Trekning</button>


                 `
                 
                 /*for loops for å hente ut ansatte fra listen*/
                 for (let index = 0; index < model.data.employees.length; index++) {
                     documen.getElementById('displayArea').innerHTML += /*html*/ `
                     <li>${model.data.employees[index]} <button onclick="deleteName(${index})">×</button> </li>
                     `
                 }
}