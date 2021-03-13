let myname;
console.log("BLEU OLIVE");
myname="Genisha Morton";
//console.log(myname);
myname=prompt("what is your name?");
console.log(myname);


function permission() {
    let age=prompt("what is your age?");
    
    if (age<13) {
        alert("Get Parental Consent");
    }
    
}
function contact() {
    let email=prompt("what is your email?");

    console.log(email);
    document.getElementById("myemail").innerHTML=email;
    
}
function title() {
    let title=prompt("enter a title");

    document.getElementById("title").innerHTML=title;

}
