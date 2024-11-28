document.addEventListener('DOMContentLoaded', function() {
    const calcButtons = document.querySelectorAll('.calcButton');
    const reloadButton = document.getElementById('reloadPage');
    const homeButton = document.getElementById('goHome');

    calcButtons.forEach(button => {
        button.addEventListener('click', function() {
            const operation = this.dataset.operation;
            let result;

            switch(operation) {
                case 'total':
                    const price1 = parseFloat(document.getElementById('price1').value);
                    const quantity1 = parseInt(document.getElementById('quantity1').value);
                    result = price1 * quantity1;
                    document.getElementById('result1').textContent = `$${result.toFixed(2)}`;
                    break;
                case 'percentage':
                    const price2 = parseFloat(document.getElementById('price2').value);
                    result = price2 * 0.30;
                    document.getElementById('result2').textContent = `$${result.toFixed(2)}`;
                    break;
                case 'discount':
                    const price3 = parseFloat(document.getElementById('price3').value);
                    const quantity3 = parseInt(document.getElementById('quantity3').value);
                    const total = price3 * quantity3;
                    const discount = total * 0.25;
                    result = total - discount;
                    document.getElementById('result3').textContent = `$${result.toFixed(2)}`;
                    break;
            }
        });
    });

    reloadButton.addEventListener('click', function() {
        location.reload();
    });

    homeButton.addEventListener('click', function() {
        // Replace 'index.html' with the actual home page URL if different
        window.location.href = 'index.html';
    });
});