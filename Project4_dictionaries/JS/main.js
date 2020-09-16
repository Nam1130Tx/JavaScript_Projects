function Marvel() {
    var Avenger = {                                                        //Crates the KVP dictionary
        Bad_Boy:'Iron man',
        All_American:'Captain America',
        Beast:'Hulk',
        God:'Thor',
        Spy:'Black Widow',
        Hunter:'Hawkeye',
        Total:6,                                                           //Numbers do not need quotes
    };
    document.getElementById("dictionary").innerHTML = Avenger.God;         //Displays the KVP God:Thor, when the function is  called an executed.
}

function DC() {
    var Justice_League = {
        Goodie:'Superman',
        Badass:'Batman',
        Fishy:'Aquaman',
        Amazon:'Wonder Woman',
        Odd:'Bizzaro',
    };
    delete Justice_League.Odd;                                              //Deletes a KVP
    document.getElementById("dictionary2").innerHTML = Justice_League.Odd;  //Will Display 'undefined' since the KVP called, has been deleted.
}