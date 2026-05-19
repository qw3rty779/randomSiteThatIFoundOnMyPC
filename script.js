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

var messageElement = document.querySelector('.cookie-notification');
if (!Cookies.get('agreement')) {
    showMessage();
} else {
    initCounter();
}
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym')
function addClass (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    if (!o || re.test(o.className)) {
        return;
    }
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }
function removeClass (o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    if (!o) {
        return;
    }
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}
function hideMessage () {
    addClass(messageElement, 'cookie-notification_hidden_yes');
 }
function showMessage () {
    removeClass(messageElement, 'cookie-notification_hidden_yes');
}
function saveAnswer () {
    hideMessage();
    Cookies.set('agreement', '1');
}
function initCounter () {
     ym(109308348, 'init', {});
    saveAnswer();
}
document.querySelector('#yes').addEventListener('click', function () {
    initCounter();
});
