const btn = document.querySelector("button")

btn.addEventListener("click", () => {

    const num1 = Number(document.getElementById("first").value)
    const num2 = Number(document.getElementById("second").value)

    if(isNaN(num1)||isNaN(num2))
        return

    const re = num1 + num2

    document.getElementById("result").textContent = "Result: " + re
})