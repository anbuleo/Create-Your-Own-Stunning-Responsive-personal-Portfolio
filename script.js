

let button = document.getElementById("download")
button.addEventListener("click",()=>{
    let a = document.createElement("a");
    a.href="img_png/Capture.pdf";
    a.download="anbuliyon resume"
    a.click()
})

function foo(){

    var obj = {
        name :document.getElementById("name").value,
        email : document.getElementById("email").value,
        message :document.getElementById("message").value,
    };


let serviceId= "service_9nvpxyg";
let templeteId= "template_ahb7lrt"

emailjs.send(serviceId,templeteId,obj).then((result)=>{
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("message").value=""
    
    alert("you send message successfully")
}).catch((error)=>console.log(error))
}

  const themeButton = document.getElementById('theme');
const themeStylesheet = document.getElementById('themeStylesheet');

      
        function toggleTheme() {
            if (themeStylesheet.href.includes('style')) {
                // Switch to dark theme
                themeStylesheet.href = 'dark.css';
            } else {
                // Switch to light theme
                themeStylesheet.href = 'style.css';
            }
            click()
        }

        // Add a click event listener to the theme change button
        themeButton.addEventListener('click', toggleTheme);
     