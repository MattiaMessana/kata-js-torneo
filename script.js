// alert ('ciao');

/*
    Il torneo Boolkaichi è alle porte e in tanti sono giunti per mettersi alla prova in questo speciale evento.

    I combattenti che sono riusciti a registrarsi sono stati valutati e accanto al loro nome 
    è stato segnato anche il loro livello di potenza.

    Il torneo si svolgerà in 5 fasi:

        1. Scelta dell'arma
        2. Allenamento
        3. Qualificazione 
        4. Combattimento 
        5. Premiazione
*/


const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
  ];
  
  const weapons = [
    { 
        name: "Ventaglio della Musa", 
        power: 15 
    },
    { 
        name: "Scouter", 
        power: 30 
    },
    { 
        name: "Bastone Roshi", 
        power: 60 
    },
    { 
        name: "Fagioli Magici", 
        power: 70 
    },
    { 
        name: "Katana di Yajirobei", 
        power: 85 
    },
    { 
        name: "Spada del Dragone Azzurro", 
        power: 115 
    },
    { 
        name: "Armatura Saiyan", 
        power: 145 
    },
    { 
        name: "Cannone da braccio", 
        power: 170 
    },
    { 
        name: "Nuvola d'oro", 
        power: 200 
    },
    { 
        name: "Bastone Nyoi", 
        power: 220
    },
    { 
        name: "Spada Z", 
        power: 235 
    },
    { 
        name: "Orecchini Potara", 
        power: 250 
    }
  ];

console.log('%cTournament%cStarted', 'color: orange ; font-size: 20px; font-weight: bold'
    , 'color: red ; font-size: 20px; font-weight: bold'
);

console.group('%cFighter %cSelection', 'color: cornflowerblue', 'color: red');

  fighters.forEach(fighter => {
      console.log(`⚔️ ${fighter.name} is ready with power 🔋 ${fighter.power}`);
  });

console.groupEnd();

console.log('💥 All fighters are prepared! 💥');
  


/* 
    Milestone 1 - Scelta dell’arma:
    Ogni combattente sceglierà casualmente un'arma dalla relativa lista. 
    Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.
*/


function assignWeapons(fighters, weapons) {
    return fighters.map(fighter => {
        // Seleziona casualmente un'arma
        const randomIndex = Math.floor(Math.random() * weapons.length);
        const selectedWeapon = weapons.splice(randomIndex, 1)[0]; // [0] serve per eccedere al primo elemento creato da splice quindi per accedere direttamente al oggetto in questo caso 

         // Stampa in console
            console.log(`⚔️ %c${fighter.name} is choosing their weapon...`, 'color: lightgreen; font-weight: bold;');
            console.log(`🔫 %cWeapon selected: ${selectedWeapon.name} (🔋 = ${selectedWeapon.power}) 🔫 `, 'color: cornflowerblue; font-size: 14px;');
            console.log(`%cRemaining %cweapons:`, 'color: orange; font-size: 12px;', 'color: red; font-size: 12px');
            console.table(weapons);

        
        // Assegna l'arma al combattente
        return {
            ...fighter,
            weapon: selectedWeapon,
        };
    });
}

// Selezione delle armi
const fightersWithWeapons = assignWeapons(fighters, weapons);

// Stampa il risultato
console.log('%cAll fighters %care equipped!', 'color: cornflowerblue; font-size: 16px; font-weight: bold', 'color: red; font-size: 16px; font-weight: bold');
console.log('%c/////////////////////////', 'color: pink; font-size: 34px'  );


/*
    Milestone 2 - Allenamento:
    ogni combattente si sottoporrà ad un allenamento 
    che incrementerà (o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.
 */


    const updatedFighters = fighters.map(fighter => {
        // Genera un numero casuale tra 1 e 100
        const trainingMultiplier = Math.floor(Math.random() * 100) + 1;
    
        // Calcola la nuova potenza
        const newPower = fighter.power * trainingMultiplier;
    
        // Stampa i risultati
        console.log(`💪 %c${fighter.name} is training...`, 'color: lightgreen; font-weight: bold;');
        console.log(`🔥 %cTraining multiplier: ${trainingMultiplier}`, 'color: cornflowerblue; font-size: 14px;');
        console.log(`🔋 %cNew power: ${newPower}`, 'color: red; font-size: 16px; font-weight: bold;');
        console.log('----------------');
        
        // Restituisce il combattente con la nuova potenza
        return {
            ...fighter,
            power: newPower,
        };
    });
    
    console.log('%cAll fighters have completed their training!', 'color: orange; font-size: 16px; font-weight: bold');
    console.log('%c/////////////////////////', 'color: pink; font-size: 34px'  );
    

     