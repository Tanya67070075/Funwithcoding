// แจ้งเตือนทุกๆ 30 วินาที
setInterval(function() {
    alert('Please, use me...');
}, 30000);

document.getElementById('calc-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const leftVal = document.getElementById('left').value.trim();
    const rightVal = document.getElementById('right').value.trim();
    const op = document.getElementById('op').value;

    // เช็กว่าเป็นจำนวนเต็มบวกหรือศูนย์เท่านั้น Regular Expression
    const isPositiveInteger = function(str) {
        return /^\d+$/.test(str);
    };

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const num1 = parseInt(leftVal, 10);
    const num2 = parseInt(rightVal, 10);

    // เช็กเคสหารด้วยศูนย์
    if ((op === '/' || op === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    alert(result);
    console.log(result);
});