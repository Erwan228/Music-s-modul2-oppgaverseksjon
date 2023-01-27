function addName() { /*Tar infoen i tekstfeltet og legger det til i lista*/
         if (model.input.inputName === null) return;
         model.data.employees.push(model.input.inputName);
         model.input.inputName = null;
         updateView();
     }

     function deleteName(i) {
        model.data.employees.splice(i, 1);
        updateView();
    } 

    function draw() {
        console.log(model.data.employees, "før")
        let employeesToDraw = [];
        for (let i = 0; i < model.data.employees.length; i++) {
            employeesToDraw.push(model.data.employees[i]);
        }

        if (model.input.numberOfWinners <= 0) return;

        if (model.input.numberOfWinners > model.data.employees.length) {
            alert('Du har satt inn for mange vinnere i forhold til deltakere.')
            return;
        }
        else {
            for (let drawn = 0; drawn < model.input.numberOfWinners; drawn++) {
                let randomNumber = Math.floor(Math.random() * employeesToDraw.length);
                model.drawnEmployees.push(employeesToDraw[randomNumber]);
                employeesToDraw.splice(randomNumber, 1);
                console.log(model.data.employees, employeesToDraw, "etter")

            }
model.state = 'trukket';
updateView();
        }
        console.log(model.drawnEmployees)
        model.drawnEmployees = [];
    }