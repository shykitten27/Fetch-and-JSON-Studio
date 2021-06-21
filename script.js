window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // Access the JSON in the response
        response.json().then( function(json) {
            let jsonLength = json.length;
            let astronauntHours = json[i].hours; 
            let astronauntActive = json[i].active; 
            let astronauntSkills = json[i].skills; 
            for(i=0; i<jsonLength-1; i++){
                if(json[i].active === true) {   
                   json[i].active.style.color = "green";
                   }
            }
            /* save json[i].property as variable then pass that 
            into div.innerHTML string.
            Test conditional inside of astronaunt variable
            to set the attribute type, i.e style.color = "green" */

            const div = document.getElementById("container");
            // Add HTML that includes the JSON data
            div.innerHTML = `
            <div class="astronaut">  
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `;            
        });
    }); 
});