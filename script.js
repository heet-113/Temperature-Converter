let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

celsius.addEventListener("input", (e) => {
    let c = Number(e.target.value);

    let f = (c * 9/5) + 32;
    let k = c + 273.15;

    console.log(c);
    console.log(f);
    console.log(k);

    fahrenheit.value = Math.round(f * 100) / 100;
    kelvin.value = Math.round(k * 100) / 100;
});

fahrenheit.addEventListener("input", (e) => {
    let f = Number(e.target.value);

    let c = 5/9 * (f - 32);
    let k = (f - 32) * 5/9 + 273.15;

    celsius.value = Math.round(c * 100) / 100;
    kelvin.value = Math.round(k * 100) / 100;
});

kelvin.addEventListener("input", (e) => {
    let k = Number(e.target.value);

    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;

    celsius.value = Math.round(c * 100) / 100;
    fahrenheit.value = Math.round(f * 100) / 100;
});