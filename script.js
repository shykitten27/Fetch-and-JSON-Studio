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
                    </ul>
                </div>
            </div>
            `;            
        });
    }); 
});