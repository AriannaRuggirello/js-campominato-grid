// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let button = document.getElementById("play_button");

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
button.addEventListener("click", 
    function Game()
    {   
        // seleziono il contenitore 
        let grid = document.querySelector('div#grid_container');
        grid.classList.remove("hidden");
        // lo rendo visibile al clik sul pulpsante
        grid.classList.add("visible");
        // reset dei numeri selezionati in pagina
        let gridElement = document.querySelector('div.grid').innerHTML=''

        // Ogni cella ha un numero progressivo, da 1 a 100.
        for(let i = 1; i <= 100 ; i++){

            // creare l'elemento quadrato all'interno della griglia
            const newSquare = createGridSquare('div','square'); 

            // numero ogni quadratino
            let num = i;
            
            // Quando l’utente clicca su ogni cella
            newSquare.addEventListener('click', 
            function(){
                // la cella cliccata si colora di azzurro 
                newSquare.classList.add('clicked-true');
                // emetto un messaggio in console con il numero della cella cliccata.
                console.log(num);
            })

            // inserisco dentro alla griglia i quadratini
            gridElement = document.querySelector('div.grid').append(newSquare)
            // inserisco dentro ogni quadratino il numero
            newSquare.append(num);
        }
        
    });





    // FUNZIONI

    function createGridSquare(tagType,classToAdd) {
        const newElement = document.createElement(tagType);
        newElement.classList.add(classToAdd);
        return newElement;
        
    }