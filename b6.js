const checkEndString = (string, stringEnd) => {
    return string.endsWith(stringEnd)
}
console.log(checkEndString("Hello, World!", "Hello"));
console.log(checkEndString("Hi there!", "there!"));