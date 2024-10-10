// localStorage.clear()


// const addAPIToLocalStorage = page => {
//     const request = new XMLHttpRequest();
//     const pageLink = `https://swapi.dev/api/${page}`;
//     request.open("GET", pageLink);
        
//     request.onload = () => {
//         const requestText = JSON.parse(request.responseText);
//         const results = requestText.results;
        
//         results.forEach((element, index) => {
//             element.id = index + 1;
//         });
        
//         const stringifyResults = JSON.stringify(results);
//         localStorage.setItem(page, stringifyResults);
//     };
//     request.send();
// }

// addAPIToLocalStorage("people");
// addAPIToLocalStorage("films");
// addAPIToLocalStorage("starships");


const idToObj = (id, file) => {
    const objectsArray = JSON.parse( localStorage.getItem( file ) );
    const chosenObj = objectsArray.find( element => element.id === id );
    return chosenObj;
}

console.log(idToObj(1, "people"));
console.log(idToObj(3, "starships"));

const getPortfolio = (manufacturer) => {
    const objectsArray = JSON.parse( localStorage.getItem( "starships" ) );
    const fitleredObjectsArray = objectsArray.filter( ship => ship.manufacturer.includes( manufacturer ));
    return fitleredObjectsArray;
}

console.log(getPortfolio("Kuat Drive Yards"));


const changeStorage = (obj, page) => {
    const objectsArray = JSON.parse( localStorage.getItem( page ) );
    obj.id = objectsArray.length + 1;
    console.log('objectsArray: ', objectsArray);
    
    objectsArray.push(obj);
    const newArrayStr = JSON.stringify(objectsArray);
    localStorage.setItem( page, newArrayStr );
}

const newPerson = {
    name: "Dor",
    favAnimal: "Penguin"
};

//changeStorage(newPerson, "people");
//changeStorage(newPerson, "films");

const deleteFromStorage = (id, page) => {
    const objectsArray = JSON.parse( localStorage.getItem( page ) );
    const index =  objectsArray.findIndex((element) => element.id === id);
    objectsArray.splice(index, 1);
    const newArrayStr = JSON.stringify(objectsArray);
    localStorage.setItem( page, newArrayStr );
}

deleteFromStorage(6, "people");


