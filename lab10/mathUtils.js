
export function percentOf(num, percent) {
    return (num * percent) / 100;
}

export function addPercent(num, percent) {
    return num + percentOf(num, percent);
}


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) return "Ошибка: деление на ноль";
    return a / b;
}
