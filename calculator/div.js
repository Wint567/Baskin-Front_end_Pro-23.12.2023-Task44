export function div(a, b) {
    if (b === 0){
        throw new Error("Division by 0");
    }

    return a / b;
};