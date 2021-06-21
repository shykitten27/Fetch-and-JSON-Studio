window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            /* save json[i].property as variable then pass that 
            into div.innerHTML string.
            Test conditional inside of astronaunt variable
            to set the attribute type, i.e style.color = "green" */

            let jsonLength = json.length;
            let astronauntFirstName = json[i].firstName;
            let astronauntLastName = json[i].lastName;
            let astronauntHours = json[i].hours; 
            let astronauntActive = json[i].active; 
            let astronauntSkills = json[i].skills; 
            let astronauntPicture = json[i].picture;
            for(i=0; i<jsonLength-1; i++){
                if(astronauntActive === true) {   
                    astronauntActive.active.style.color = "green";
                   }
            }
            const div = document.getElementById("container");
            // Add HTML that includes the JSON data
            div.innerHTML = `
            <div class="astronaut">  
                <div class="bio">
                    <h3>${astronauntFirstName} ${astronauntLastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronauntHours}</li>
                        <li>Active: ${astronauntActive}</li>
                        <li>Skills: ${astronauntSkills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronauntPicture}">
            </div>
            `;            
        });
    }); 
});