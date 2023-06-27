function show_bio(id) {
    /* Function takes id and reveals the bio for that id */
    console.log("Bio coming");
    let bio_div = document.getElementById(id)
    bio_div.setAttribute('style','display:contents');

}