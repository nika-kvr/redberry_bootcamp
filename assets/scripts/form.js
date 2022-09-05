// form buttons js
// const nextFormbtn = document.getElementById("nextFormbtn");
const backbtn = document.getElementById("back-div1");
const formdiv1 = document.getElementById("formdiv1");
const formdiv2 = document.getElementById("formdiv2");
const landingBtn = document.getElementById("landingBtn");
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")


backbtn.addEventListener("click", function(){
    formdiv2.style.display = "none";
    formdiv1.style.display = "block";
    h1.style.borderBottom = "2px solid #000000";
    h2.style.borderBottom = "";

})


// Initialize get requests
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
    // get position
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

// upload image 
const uploadBtn = document.getElementById("upload-btn");
const laptopImage = document.getElementById("laptopimage");
const image =  document.getElementById('laptopimage');

uploadBtn.addEventListener("click", (e) => {
    laptopImage.click();
    e.preventDefault();
});

image.addEventListener("change", function(){
    if(image.value != ''){
        document.getElementById('upload_image_div').style.borderColor = '#4386A9';
        document.getElementById('upload_image_div').style.backgroundColor = '#F6F6F6';
        document.getElementById('upload-span').textContent = 'ფოტო ატვირთულია!';
        document.getElementById('upload-span').style.color = '#4386A9';
        document.getElementById('danger-image').style.display = "none";
        document.getElementById('upload-image-thumbnail').style.display = 'block';
        uploadBtn.textContent = 'თავიდან ატვირთე';
    }
})


function saveCache(text) {
    localStorage.setItem(text.name, text.value);
}

document.getElementById("fname").value = localStorage.getItem('name');
document.getElementById("lname").value = localStorage.getItem('surname');
document.getElementById("mail").value = localStorage.getItem('email');
document.getElementById("phone").value = localStorage.getItem('phone_number');

// laptopname
document.getElementById("laptopname").value = localStorage.getItem('laptop_name');

// cpu birtvi
document.getElementById("cpuCore").value = localStorage.getItem('laptop_cpu_cores');
// cpu nakadi
document.getElementById("cputhreads").value = localStorage.getItem('laptop_cpu_threads');
// ram
document.getElementById("laptopRam").value = localStorage.getItem('laptop_ram');


if(localStorage.getItem('laptop_hard_drive_type') == 'SSD')
{
    document.getElementsByClassName('input-radio')[0].checked = true;
}
else if(localStorage.getItem('laptop_hard_drive_type') == 'HDD')
{
    document.getElementsByClassName('input-radio')[1].checked = true;
}

if(localStorage.getItem('laptop_state') == 'new')
{
    document.getElementsByClassName('input-radio')[2].checked = true;
}
else if(localStorage.getItem('laptop_state') == 'old')
{
    document.getElementsByClassName('input-radio')[3].checked = true;
}


// buy date
document.getElementById("dateInput").value = localStorage.getItem('laptop_purchase_date');

// price
document.getElementById("laptopPrice").value = localStorage.getItem('laptop_price');




function lngtype(text) {
    var firstname = document.getElementById("fname").value.replace(/\s/g); //read input value, and remove "space" by replace \s 
    var lastname = document.getElementById("lname").value.replace(/\s/g); //read input value, and remove "space" by replace \s 
    var email = document.getElementById('mail');
    var phone = document.getElementById('phone');
    var teamOptions = document.getElementById('team');
    var positionOptions = document.getElementById('position');
    var formdiv1 = document.getElementById("formdiv1");
    var formdiv2 = document.getElementById("formdiv2");
    var h1 = document.getElementById("h1")
    var h2 = document.getElementById("h2")
    var langdic = {
        "Georgian" : /[\u10A0-\u10FF]/,
        "English" : /^[a-zA-Z]+$/
    }
    const keys = Object.entries(langdic); 
     
    validationObject = {
        name: false,
        lname: false,
        email: false,
        phone: false,
        team: false,
        position: false,
    }

    // firstname validator
    if(firstname.length > 0)
    {
        Object.entries(langdic).forEach(([key, value]) => {
        if (value.test(firstname) == true){   
                if (key == 'English' || firstname.length < 2 ) {
                    validationObject.name = false;
                    document.getElementById('firstname_label').style.color = 'red';
                    document.getElementById('fname').style.borderColor = 'red';
                    document.getElementById('firstname_validation').style.color = 'red';
                }else
                {
                    document.getElementById('firstname_label').style.color = 'black';
                    document.getElementById('fname').style.borderColor = 'black';
                    document.getElementById('firstname_validation').style.color = 'black';
                    validationObject.name = true;
                }
            }
        });
    }else
    {
        validationObject.name = false;
        document.getElementById('firstname_label').style.color = 'red';
        document.getElementById('fname').style.borderColor = 'red';
        document.getElementById('firstname_validation').style.color = 'red';
    }

    // lastname validator
    if(lastname.length > 0)
    {
        Object.entries(langdic).forEach(([key, value]) => { 
            if (value.test(lastname) == true)
            {   
                if(key == 'English' || lastname.length < 2)
                {
                    document.getElementById('lastname_label').style.color = 'red';
                    document.getElementById('lname').style.borderColor = 'red';
                    document.getElementById('lastname_validation').style.color = 'red';
                    validationObject.lname = false;
                }else
                {
                    document.getElementById('lastname_label').style.color = 'black';
                    document.getElementById('lname').style.borderColor = 'black';
                    document.getElementById('lastname_validation').style.color = 'black';
                    validationObject.lname = true;
                }
            }
        });
    }else
    {
        validationObject.lname = false;
        document.getElementById('lastname_label').style.color = 'red';
        document.getElementById('lname').style.borderColor = 'red';
        document.getElementById('lastname_validation').style.color = 'red';
    }

    // email validator
    if(email.value.length > 0)
    {
        
        if(email.value.slice(-12) != "@redberry.ge")
        {
            document.getElementById('mail_label').style.color = 'red';
            document.getElementById('mail').style.borderColor = 'red';
            document.getElementById('email_validation').style.color = 'red';
            validationObject.email = false;
        }
        else
        {
            document.getElementById('mail_label').style.color = 'black';
            document.getElementById('mail').style.borderColor = 'black';
            document.getElementById('email_validation').style.color = 'black';
            validationObject.email = true;
        }
    }else
    {
        validationObject.email = false;
        document.getElementById('mail_label').style.color = 'red';
        document.getElementById('mail').style.borderColor = 'red';
        document.getElementById('email_validation').style.color = 'red'
    }

    // phone validator
    if(phone.value.length > 0)
    {
        if(phone.value.slice(4) != "+995" && phone.value.length != 13)
        {
            document.getElementById('phone_label').style.color = 'red';
            document.getElementById('phone').style.borderColor = 'red';
            document.getElementById('phone_validation').style.color = 'red';
            validationObject.phone = false;
        }
        else
        {
            document.getElementById('phone_label').style.color = 'black';
            document.getElementById('phone').style.borderColor = 'black';
            document.getElementById('phone_validation').style.color = 'black';
            validationObject.phone = true;
        }
    }else
    {
        validationObject.phone = false;
        document.getElementById('phone_label').style.color = 'red';
        document.getElementById('phone').style.borderColor = 'red';
        document.getElementById('phone_validation').style.color = 'red'
    }

    console.log(validationObject);
    
    
    // teams validator
    if(teamOptions.options[teamOptions.selectedIndex].text != 'თიმი')
    {
        teamOptions.style.borderColor = 'black';
        validationObject.team = true;
    }
    else
    {
        teamOptions.style.borderColor = 'red';
    }

    // positions validator
    if(positionOptions.options[positionOptions.selectedIndex].text != 'პოზიცია')
    {
        positionOptions.style.borderColor = 'black';
        validationObject.position = true;
    }
    else
    {
        positionOptions.style.borderColor = 'red';
    }


    // next form div logic
    const areTruthy = Object.values(validationObject).every(
        value => value
    );
    
    if(areTruthy==true)
    {
        formdiv1.style.display = "none";
        formdiv2.style.display = "block";
        h1.style.borderBottom = "";
        h2.style.borderBottom = "2px solid #000000";
    }



}

var submitBtn = document.getElementById('submit_btn');

submitBtn.addEventListener("click", (e) => {
    
    e.preventDefault();


    var image =  document.getElementById('laptopimage');
    var laptopname = document.getElementById('laptopname').value.replace(/\s/g);
    var laptopBrands = document.getElementById('laptopbrand');
    var laptopCpu = document.getElementById('laptopcpu');
    var laptopCpueCore = document.getElementById('cpuCore');
    var laptopCpuThread = document.getElementById('cputhreads');
    var laptopRam = document.getElementById('laptopRam');
    var formCheckboxes = document.getElementsByClassName('input-radio');
    
    var laptopPrice = document.getElementById('laptopPrice');
    
    var langdic = {
        "Georgian" : /[\u10A0-\u10FF]/,
        "English" : /^[a-zA-Z]+$/,
    }
    const keys = Object.entries(langdic);

    validationObject2 = {
        image: false,
        laptop_name: false,
        laptop_brand: false,
        laptop_cpu: false,
        laptop_cpu_core: false,
        laptop_cpu_thread: false,
        laptop_ram: false,
        laptop_harddrive_type: false,
        laptop_state: false,
        laptop_price: false,
    }

    if(image.value == "")
    {
        document.getElementById('upload_image_div').style.borderColor = 'red';
        document.getElementById('upload_image_div').style.backgroundColor = '#FFF1F1';
        document.getElementById('upload-span').style.color = "red";
        document.getElementById('danger-image').style.display = "block";
        validationObject2.image = false;
    }else
    {
        validationObject2.image = true;
    }

    // laptop name validator
    if(laptopname.length != 0)
    {
        validationObject2.laptop_name=true;
        document.getElementById('laptop_name_label').style.color = 'black';
        document.getElementById('laptopname').style.borderColor = 'black';
        document.getElementById('laptop-name-validation').style.color = 'black';
    }else
    {
        validationObject2.laptop_name=false;
        document.getElementById('laptop_name_label').style.color = 'red';
        document.getElementById('laptopname').style.borderColor = 'red';
        document.getElementById('laptop-name-validation').style.color = 'red';
    }
    

    // laptop brands
    if(laptopBrands.options[laptopBrands.selectedIndex].text != 'ლეპტოპის ბრენდი')
    {
        validationObject2.laptop_brand = true;
        laptopBrands.style.borderColor = 'black';        
    }
    else
    {
        laptopBrands.style.borderColor = 'red';
    }

    // laptop Cpu
    if(laptopCpu.options[laptopCpu.selectedIndex].text != 'CPU')
    {
       validationObject2.laptop_cpu = true;
       laptopCpu.style.borderColor = 'black';
    }else
    {
        laptopCpu.style.borderColor = 'red';
    }

    // laptop Cpu Core validator
    if(laptopCpueCore.value.length != 0)
    {
        if (!/\D/.test(laptopCpueCore.value)){
            document.getElementById('cpu_core_label').style.color = 'black';
            document.getElementById('cpuCore').style.borderColor = 'black';
            document.getElementById('laptop-core-validation').style.color = 'black';
            validationObject2.laptop_cpu_core = true;
        }
        else{
            document.getElementById('cpu_core_label').style.color = 'red';
            document.getElementById('cpuCore').style.borderColor = 'red';
            document.getElementById('laptop-core-validation').style.color = 'red';
            validationObject2.laptop_cpu_core = false;
        }

    }else
    {
        document.getElementById('cpu_core_label').style.color = 'red';
        document.getElementById('cpuCore').style.borderColor = 'red';
        document.getElementById('laptop-core-validation').style.color = 'red';
        validationObject2.laptop_cpu_core = false;
    }

    // laptop thread
    if(laptopCpuThread.value.length != 0)
    {
        if (!/\D/.test(laptopCpuThread.value)){
            document.getElementById('cpu_thread_label').style.color = 'black';
            document.getElementById('cputhreads').style.borderColor = 'black';
            document.getElementById('laptop-thread-validation').style.color = 'black';
            validationObject2.laptop_cpu_thread = true;
        }
        else{
            document.getElementById('cpu_thread_label').style.color = 'red';
            document.getElementById('cputhreads').style.borderColor = 'red';
            document.getElementById('laptop-thread-validation').style.color = 'red';
            validationObject2.laptop_cpu_thread = false;
        }

    }else
    {
        document.getElementById('cpu_thread_label').style.color = 'red';
        document.getElementById('cputhreads').style.borderColor = 'red';
        document.getElementById('laptop-thread-validation').style.color = 'red';
        validationObject2.laptop_cpu_thread = false;
    }

    // laptop RAM validator
    if(laptopRam.value.length != 0)
    {
        if (!/\D/.test(laptopRam.value)){
            document.getElementById('laptop_ram_label').style.color = 'black';
            document.getElementById('laptopRam').style.borderColor = 'black';
            document.getElementById('laptop-ram-validation').style.color = 'black';
            validationObject2.laptop_ram = true;
        }
        else{
            document.getElementById('laptop_ram_label').style.color = 'red';
            document.getElementById('laptopRam').style.borderColor = 'red';
            document.getElementById('laptop-ram-validation').style.color = 'red';
            validationObject2.laptop_ram = false;
        }

    }else
    {
        document.getElementById('laptop_ram_label').style.color = 'red';
        document.getElementById('laptopRam').style.borderColor = 'red';
        document.getElementById('laptop-ram-validation').style.color = 'red';
        validationObject2.laptop_ram = false;
    }

    // laptop price validator
    if(laptopPrice.value.length != 0)
    {
        if (!/\D/.test(laptopPrice.value)){
            document.getElementById('laptop_price_id').style.color = 'black';
            document.getElementById('laptopPrice').style.borderColor = 'black';
            document.getElementById('laptop-price-validation').style.color = 'black';
            validationObject2.laptop_price = true;
        }
        else{
            document.getElementById('laptop_price_id').style.color = 'red';
            document.getElementById('laptopPrice').style.borderColor = 'red';
            document.getElementById('laptop-price-validation').style.color = 'red';
            validationObject2.laptop_price = false;
        }

    }else
    {
        document.getElementById('laptop_price_id').style.color = 'red';
        document.getElementById('laptopPrice').style.borderColor = 'red';
        document.getElementById('laptop-price-validation').style.color = 'red';
        validationObject2.laptop_price = false;
    }

    // harddrive
    if(formCheckboxes[0].checked || formCheckboxes[1].checked)
    {
        validationObject2.laptop_harddrive_type = true;
        document.getElementById('harddrive-legend').style.color = 'black';
        document.getElementById('harddrive-danger').style.display = 'none';
    }
    else
    {
        document.getElementById('harddrive-legend').style.color = 'red';
        document.getElementById('harddrive-danger').style.display = 'inline';
    }

    // laptopstate
    if(formCheckboxes[2].checked || formCheckboxes[3].checked)
    {
        validationObject2.laptop_state = true;
        document.getElementById('state-danger').style.display = 'none';
        document.getElementById('state-legend').style.color = 'black';
    }
    else
    {
        document.getElementById('state-danger').style.display = 'inline';
        document.getElementById('state-legend').style.color = 'red';
    }

    const areTruthySecond = Object.values(validationObject2).every(
        value => value
    );
    
    const form = document.querySelector("form");
    const modaldiv = document.getElementById("modal-div")
    const formdiv = document.getElementById("form-main-container")
    const formbody = document.getElementById("form-body")
    console.log(validationObject2);
    if(areTruthySecond==true)
    {
        const formData = new FormData(form);
        console.log('sebd');
        console.log(formData);
        console.log(new FormData(form));
            axios.post("https://pcfy.redberryinternship.ge/api/laptop/create", formData, {
            headers:{
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            formdiv.style.display = "none";
            modaldiv.style.display = "block";
            formbody.style.backgroundColor = "#4A4A4A";
        })
        .catch((error) => {
            console.log(error);
        })
        localStorage.clear();
    }

});