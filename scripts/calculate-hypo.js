const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputHypo = document.querySelector(".output");


function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotunuse() {
    const sumOfSquares = calculateSumOfSquares(
        Number(sides[0].value),
        Number(sides[1].value)
    )

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)

    outputHypo.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click",calculateHypotunuse);