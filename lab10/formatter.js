export function formatResult(label, value) {
    if (typeof value === "string") {
        return `${label}: ${value}`;
    }
    return `${label}: ${value.toFixed(2)}`;
}
