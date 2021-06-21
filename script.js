<<<<<<< HEAD
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            //console.log(response);
            const div = document.getElementById("container");
            // Add HTML that includes the JSON data
            div.innerHTML = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[0].firstName} ${json[0].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[0].hoursInSpace}</li>
                        <li>Active: ${json[0].active}</li>
                        <li>Skills: ${json[0].skills}</li>
                        <li>Skills: ${json[0].picture}</li>
                    </ul>
                </div>

            </div>
            `;            
        });
    }); 
=======
// TODO: add code here

const createAstronautHTMLDivElement = (astronautObject) => {
    const newDivElement = document.createElement("div");

    // add class to div
    newDivElement.className = "astronaut";

    // how do you create a new HTML h3 element?
    const newH3Element = document.createElement("h3");

    // how do you set the new HTML h3 elements innerText?
    newH3Element.innerText = `${astronautObject.firstName} ${astronautObject.lastName}`;

    // how do you add this new HTML h3 element (with text) to the newDivElement?
    newDivElement.appendChild(newH3Element);

    const unorderedListElement = document.createElement("ul");

    const listItemHoursInSpaceElement = document.createElement("li");
    listItemHoursInSpaceElement.innerText = "Hours is space: " + astronautObject.hoursInSpace;
    unorderedListElement.appendChild(listItemHoursInSpaceElement)
    
    const listItemActiveElement = document.createElement("li");
    listItemActiveElement.innerText = "Active: " + astronautObject.active;
    unorderedListElement.appendChild(listItemActiveElement);

    const listItemSkills = document.createElement("li");
    listItemSkills.innerText = "Skills: " + astronautObject.skills.join(", ");
    unorderedListElement.appendChild(listItemSkills);

    newDivElement.appendChild(unorderedListElement);
    
    const imageElement = document.createElement('img');
    imageElement.src = astronautObject.picture;
    imageElement.className = "avatar";

    newDivElement.appendChild(imageElement);

    return newDivElement;
}

window.addEventListener('load', () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response => response.json()).then(json => {
        // console.log(json);

        // get our astronaut container:
        const astronautContainerDiv = document.getElementById('container');
        
        // for each astronaut in JSON:
            // create a new HTML element
        for(const astronautObject of json) {
            astronautContainerDiv.appendChild(createAstronautHTMLDivElement(astronautObject));
        }

    });
>>>>>>> e3e4511c47e4939a57e0f9b36d70300d5d93492c
});