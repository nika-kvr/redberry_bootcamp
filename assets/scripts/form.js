// // save input values in local storage
// document.getElementById("fname").value = getSavedValue("fname");
// document.getElementById("lname").value = getSavedValue("lname");
// document.getElementById("team").value = getSavedValue("team");
// document.getElementById("position").value = getSavedValue("position");
// document.getElementById("phone").value = getSavedValue("phone");
// document.getElementById("mail").value = getSavedValue("mail");
// document.getElementById("laptopname").value = getSavedValue("laptopname");
// document.getElementById("laptopimage").value = getSavedValue("laptopimage");
// document.getElementById("laptopbrand").value = getSavedValue("laptopbrand");
// document.getElementById("laptopcpu").value = getSavedValue("laptopcpu");
// document.getElementById("cpuCore").value = getSavedValue("cpuCore");
// document.getElementById("cputhreads").value = getSavedValue("cputhreads");
// document.getElementById("laptopRam").value = getSavedValue("laptopRam");


// function saveValue(e){
//     var id = e.id;
//     var val = e.value;
//     localStorage.setItem(id, val);
// }

// function getSavedValue(v){
//     if(!localStorage.getItem(v)){
//         return "";
//     }
//     return localStorage.getItem(v);
// }


document.getElementsByName('laptop_state')[0].addEventListener('click', function(){
    console.log(this.value);
});
document.getElementsByName('laptop_state')[1].addEventListener('click', function(){
    console.log(this.value);
});

let nextFormbtn = document.getElementById("nextFormbtn");
let backbtn = document.getElementById("backbtn");
let formdiv1 = document.getElementById("formdiv1");
let formdiv2 = document.getElementById("formdiv2");
let landingBtn = document.getElementById("landingBtn");

nextFormbtn.addEventListener("click", function(){
    formdiv1.style.display = "none";
    formdiv2.style.display = "block";
})

backbtn.addEventListener("click", function(){
    formdiv2.style.display = "none";
    formdiv1.style.display = "block";
})

landingBtn.addEventListener('click', function(){
    location.href = "index.html"
})


// Initialize Get Requests
function getTeams(){
    let getTeams = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/teams',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(getTeams)
    .then(function (response) {
        response.data.data.forEach(element => {
            // JQUERY FUNCTION APPEND
            $("#team").append('<option value="'+ element.id +' ">'+ element.name +' </option>');
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}
function getPositions(){
    // get positions request
    let getPositions = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/positions',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(getPositions)
    .then(function (response) {
        
        response.data.data.forEach(elementPosition => {
            // JQUERY FUNCTION APPEND
                $("#position").append('<option value="'+ elementPosition.id +' ">'+ elementPosition.name +' </option>')
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}
function getBrands(){
    let getBrands = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/brands',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(getBrands)
    .then(function (response) {
        
        response.data.data.forEach(elementBrands => {
            // JQUERY FUNCTION APPEND
            $("#laptopbrand").append('<option value="'+ elementBrands.id +' ">'+ elementBrands.name +' </option>')
            
                // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}


function getCpus(){
    let getCpus = {
        method: 'get',
        url: 'https://pcfy.redberryinternship.ge/api/cpus',
        headers: { 
        'accept': 'application/json'
        }
    };
    axios(getCpus)
    .then(function (response) {
        response.data.data.forEach(elementCpu => {
            // JQUERY FUNCTION APPEND
            $("#laptopcpu").append('<option value="'+ elementCpu.name +' ">'+ elementCpu.name +' </option>')
            // END JQUERY FUNCTION APPEND
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}

$(document).ready(function() 
{
    getTeams();
    getPositions();
    getBrands();
    getCpus();
});



// axios get teams request in process..

// axios.all([
//     axios.get("https://pcfy.redberryinternship.ge/api/brands"),

// ])



// axios post request
// document.getElementById('checkVal').addEventListener('click', function(){
//     console.log(document.getElementsByName('laptop_hard_drive_type')[0].value, document.getElementsByName('laptop_hard_drive_type')[1].value);
// });
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    axios.post("https://pcfy.redberryinternship.ge/api/laptop/create", formData, {
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            
        })
        .catch((error) => {
            console.log(error);
        
        })
});


// test modal

const modalbtn = document.getElementById("modalbtn")
const modaldiv = document.getElementById("my-modal")
const formcont = document.getElementById("form-main-container")

modalbtn.addEventListener("click", function(){
    formcont.style.display = "none";
    modaldiv.style.display = "block";
})