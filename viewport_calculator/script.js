const viewportText = document.getElementById("viewportInput");
const fontText = document.getElementById("fontInput");
const result = document.getElementById("output");
const container = document.querySelector(".box");
const clipboard = document.getElementById("copy");
const outputValuee = document.getElementById("outputValue");

function convertUnit() {
    const input1 = viewportText.value;
    const input2 = fontText.value;
    const roundedValue = (input2 / input1 * 100).toFixed(2);


    if (isNaN(input1 || input2)) {
        result.value = "= NaN";
    }
    else if (input1 === '' && input2 === '') {
        result.value = '';
    }
    else {
        result.value = '= ' + roundedValue + 'vw';
        
    }


    input1Value.textContent = input1;
    input2Value.textContent = input2;
    outputValue.textContent = roundedValue;
}

function copyValue() {
    result.select();
    navigator.clipboard.writeText(result.value);
    clipboard.textContent = 'Copied!';
    setTimeout(() => {
        clipboard.textContent = 'Copy to Clipboard';
    }, 2000);
}


fontText.addEventListener("keyup", convertUnit);
viewportText.addEventListener("keyup", convertUnit);
result.addEventListener("keyup", convertUnit);
