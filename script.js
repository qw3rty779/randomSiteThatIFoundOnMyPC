function calc() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num1 == 1) {
        var pr = 3200000;
    }
    if (num1 == 2) {
        var pr = 5100000;
    }
    if (num1 == 3) {
        var pr = 7400000;
    }
    var res = pr * (0.0185 * Math.pow(1 + 0.0185, num2)) / (Math.pow(1 + 0.0185, num2) - 1);
    document.getElementById("res").innerHTML = "Ежемесячный платёж: " + Math.round(res) + "₽";
};
but1 = document.getElementById("but1");
but2 = document.getElementById("but2");

but1.addEventListener("click", (event) => {
    event.preventDefault();
    calc();
})
but2.addEventListener("click", (event) => {
    event.preventDefault();
})
