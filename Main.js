

$(document).ready(function () {
    
    document.getElementsByClassName("form")[0].addEventListener("submit", (e) => { e.preventDefault(); });
    $("#Submit").on("click", (e) => {
        let a = $("#Phone");
        let b = $("#Email");
        let c = $("#Pass");
        let Exp = new RegExp(/[a-z,A-Z]/, "gi");
        let isNum = Exp.test(a[0].value.toString());
        console.log(a[0].value.toString());
        console.log(isNum);
        if (a[0].value == "" || isNum == true || a[0].value.length < 10 || c[0].value == "" || c[0].value.length < 8 || b[0].value == "") {
            warning();
        } else {
            window.location.href = "https://aamir2000.github.io/Test/Hello.html";
        }
    
    });
    
    
});


function warning() {
    $("#warning").addClass("Animate");
    $("#warning").animate({
        opacity: 1,
        height: 50,
        display: "block"
    }, 1800)
    setTimeout(() => {
        $("#warning").removeClass("Animate");
        $("#warning").animate({
            opacity: 0,
            height: 0,
            display: "none"
        }, 0)
    }, 8000);
    $("#warning")[0].innerHTML = "Please Fill In All The Fields Correctly";
}
