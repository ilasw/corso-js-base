
  const array = ["Pane", "Pasta", "Olio", "Salsa", "Pianta di basilico"];
  console.log(array.length);

  // nel caso del for abbiamo:
  // - keyword "for"
  // - condizione da controllare tra ()
  //  - let i = 0; -> È una operazione che viene eseguita SOLO prima della 1° iterazione
  //  - i < array.length -> è la vera condizione per cui continua il loop. se false il loop si ferma.
  //  - indice++ -> cosa viene eseguito alla fine di ogni iterazione
  // - un blocco di codice definito tra {}
  //  che viene eseguito dopo il controllo della condizione
  for (let indice = 0; indice < array.length; indice++) {
    const currentItem = array[indice];
    console.log(currentItem);
  }

  // console.log("--- salto il primo e l'ultimo");
  // for (let indice = 1; indice < array.length - 1; indice += 1) {
  //   const currentItem = array[indice];
  //   console.log(currentItem);
  // }

  // iteriamo sul valore dell'array
  console.log("--- For...of");
  for (let currentItem of array) {
    console.log(currentItem);
  }

  // iteriamo sull'indice dell'array
  console.log("--- For...in");
  for (let currentIndex in array) {
    // console.log("Hai aggiunto " + ++currentIndex + " elementi alla spesa");
    console.log(`Hai aggiunto ${++currentIndex} elementi alla spesa`);
  }

  // Break e continue;
  console.clear();
  // const itemToFind = "Olio";
  const itemsToFind = ["Olio", "Pane"];

  for (let indice = 0; indice < array.length; indice++) {
    const currentItem = array[indice];

    // Vogliamo non citare solo l'Olio
    if (itemsToFind.includes(currentItem)) {
      // Se ("Olio" o "Pane") === currentItem
      console.log("ti ho beccato " + currentItem);
      continue; // blocca l'esecuzione del codice sottostante e passa all'iterazione successiva;
    }

    console.log(`Elemento corrente ${currentItem}, indice: ${indice}`);

    // Vogliamo fermare l'iterazione su "Olio"
    // if (currentItem === itemToFind) {
    //   console.log(`Ho trovato ${itemToFind}! Sta ad indice ${indice}`);
    //   break; // interrompe il ciclo nel punto in cui viene lanciato;
    // }
  }
