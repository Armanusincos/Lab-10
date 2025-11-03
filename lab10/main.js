import { percentOf, addPercent, add, subtract, multiply, divide } from './mathUtils.js';
import { formatResult } from './formatter.js';

document.addEventListener("DOMContentLoaded", () => {

    const numInput = document.getElementById("num");
    const percentInput = document.getElementById("percent");
    const calcPercentButton = document.getElementById("calcPercent");
    const outputPercent = document.getElementById("outputPercent");


    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorSelect = document.getElementById("operator");
    const calcBasicButton = document.getElementById("calcBasic");
    const outputBasic = document.getElementById("outputBasic");


    calcPercentButton.addEventListener("click", () => {
        const num = parseFloat(numInput.value);
        const percent = parseFloat(percentInput.value);

        if (isNaN(num) || isNaN(percent)) {
            outputPercent.innerHTML = `<p class="error"> Введено неккоректное число</p>`;
            return;
        }

        const result1 = percentOf(num, percent);
        const result2 = addPercent(num, percent);

        outputPercent.innerHTML = `
            <p>${formatResult("Процент от числа", result1)}</p>
            <p>${formatResult("Число и процент", result2)}</p>
        `;
    });


    calcBasicButton.addEventListener("click", () => {
        const a = parseFloat(num1Input.value);
        const b = parseFloat(num2Input.value);
        const op = operatorSelect.value;

        if (isNaN(a) || isNaN(b)) {
            outputBasic.innerHTML = `<p class="error"> Введено неккоректное число</p>`;
            return;
        }

        let result;
        switch (op) {
            case "+": result = add(a, b); break;
            case "-": result = subtract(a, b); break;
            case "*": result = multiply(a, b); break;
            case "/": result = divide(a, b); break;
            default: result = "Неизвестная операция";
        }

        outputBasic.innerHTML = `<p>${formatResult("Результат", result)}</p>`;
    });
});
