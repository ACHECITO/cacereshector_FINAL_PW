// API 1: Enviar un correo (Simulación)
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailTo = document.getElementById('emailTo').value;
    const emailMessage = document.getElementById('emailMessage').value;

    if (emailTo && emailMessage) {
        document.getElementById('emailStatus').textContent = `Correo enviado a ${emailTo} con el mensaje: "${emailMessage}"`;
        document.getElementById('emailStatus').style.color = '#3c6e47';
    } else {
        document.getElementById('emailStatus').textContent = 'Por favor, ingresa todos los campos.';
        document.getElementById('emailStatus').style.color = '#e74c3c';
    }
});

// API 2: Buscar imágenes
document.getElementById('searchImages').addEventListener('click', function() {
    const searchQuery = document.getElementById('imageSearch').value;
    
    if (searchQuery) {
        fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=YOUR_ACCESS_KEY`)
            .then(response => response.json())
            .then(data => {
                const images = data.results;
                const imageResults = document.getElementById('imageResults');
                imageResults.innerHTML = '';  // Limpiar resultados previos
                
                images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.urls.small;
                    imageResults.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
                document.getElementById('imageResults').innerHTML = 'No se pudieron obtener imágenes.';
            });
    } else {
        document.getElementById('imageResults').innerHTML = 'Por favor, ingresa un término de búsqueda.';
    }
});

// API 3: Conversión de moneda
document.getElementById('convertCurrency').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount && fromCurrency && toCurrency) {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                document.getElementById('conversionResult').textContent = `Resultado: ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                console.error('Error fetching conversion rate:', error);
                document.getElementById('conversionResult').textContent = 'No se pudo realizar la conversión.';
            });
    } else {
        document.getElementById('conversionResult').textContent = 'Por favor, completa todos los campos.';
    }
});
