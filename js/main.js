// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
document.getElementById("play_button").addEventListener("click", 
    function()
    {   
        let visibleGrid = document.querySelector('div.grid_container').classList;
        visibleGrid.remove("hidden");
        visibleGrid.add("visible");
        

        // Ogni cella ha un numero progressivo, da 1 a 100.
        for(let i = 1; i <= 100 ; i++){
            // creare l'elemento quadrato all'interno della griglia
            
            const newSquare = createGridSquare('div','square'); 
            

            // numero ogni quadratino
            let num = i;
            
            newSquare.addEventListener('click', 
            function(){
                // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
                newSquare.classList.add('clicked-true');
                console.log(num);
            })

            
            let gridElement = document.querySelector('div.grid').append(newSquare)
            newSquare.append(num);
        }
       
    });





    // FUNZIONI

    function createGridSquare(tagType,classToAdd) {
        const newElement = document.createElement(tagType);
        newElement.classList.add(classToAdd);
        return newElement;
        
    }