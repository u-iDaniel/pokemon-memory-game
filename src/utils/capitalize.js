export function capitalize(word) {
    const sep = word.split(' ');
    return (
        sep
        .map(val => val[0].toUpperCase() + val.slice(1))
        .join(" ")
    );
} 