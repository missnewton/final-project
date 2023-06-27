// function signUpForm() {
//     // console.log("Enter your details");
//     let form = document.getElementById("signup-form");
// }

function show_bio(id) {
    /* Function takes id and reveals the bio for that id */
    console.log("Bio coming");
    let bio_div = document.getElementById(id)
    bio_div.setAttribute('style','display:contents');

}

// const shelley_button = document.getElementById("more_shelley");
// shelley_button.addEventListener("click", console.log("I'm shelley"));