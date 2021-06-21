window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            /* save json[i].property as variable then pass that 
            into div.innerHTML string.
            Test conditional inside of astronaunt variable
            to set the attribute type, i.e style.color = "green" */

            let jsonLength = json.length;
            let astronauntFirstName = "";
            let astronauntLastName = "";
            let astronauntHours = 0; 
            let astronauntActive = false; 
            let astronauntSkills = []; 
            let astronauntPicture = "";
            for(i=0; i<jsonLength; i++) {
                astronauntFirstName = json[i].firstName;
                astronauntLastName = json[i].lastName;
                astronauntHours = json[i].hours; 
                astronauntActive = json[i].active; 
                astronauntSkills = json[i].skills; 
                astronauntPicture = json[i].picture;
                console.log(astronauntActive);
                if(astronauntActive === true) {   
                   document.getElementById("active").style.color = "green";
                }
                const div = document.getElementById("container");
                // Add HTML that includes the JSON data
                div.innerHTML += `
                <div class="astronaut">  
                    <div class="bio">
                        <h3>${astronauntFirstName} ${astronauntLastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronauntHours}</li>
                            <li id="active">Active: ${astronauntActive}</li>
                            <li>Skills: ${astronauntSkills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronauntPicture}">
                </div>
                `;
            }
            
        });
    }); 
});