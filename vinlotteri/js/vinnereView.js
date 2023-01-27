function updateVinnereView() {
    document.getElementById('screen').innerHTML = /*html*/ `
    <h2>Vinnere</h2>
    <p id="vinnere">
        </p>
        <hr>
        <button onclick="back()">Ny trekning</button>
    `
    for (let i = 0; i < model.drawnEmployees.length; i++)
        document.getElementById('vinnere').innerHTML += /*html*/ `
    <li>${model.drawnEmployees[i]}</li>
    `
}