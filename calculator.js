function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
}

document.getElementById("add").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("number1").value) || 0;
    const n2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = add(n1, n2);
});

document.getElementById("subtract").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("number1").value) || 0;
    const n2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = subtract(n1, n2);
});

document.getElementById("multiply").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("number1").value) || 0;
    const n2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = multiply(n1, n2);
});

document.getElementById("divide").addEventListener("click", function () {
    const n1 = parseFloat(document.getElementById("number1").value) || 0;
    const n2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = divide(n1, n2);
});
