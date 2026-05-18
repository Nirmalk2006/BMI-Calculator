const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const heightValue = document.querySelector('#height').value
    const weightValue = document.querySelector('#weight').value

    const height = parseInt(heightValue);
    const weight = parseInt(weightValue);

    const results = document.querySelector('#results');
    let weightStatus = '';

    if (heightValue === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "PPlease Give me the valid Height";
        return;
    }

    if (weightValue === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = " Please Give me the Valid Weight";
        return;
    }

    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (Bmi < 18.5) {
        weightStatus = 'Underweight';
    } else if (Bmi >= 18.5 && Bmi < 24.9) {
        weightStatus = 'Normal weight';
    } else if (Bmi >= 25 && Bmi < 29.9) {
        weightStatus = 'Overweight';
    } else {
        weightStatus = 'Obese';
    }

    results.innerHTML = `<span>${Bmi} ${weightStatus}</span>`;
});

