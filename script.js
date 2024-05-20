document.getElementById('converter').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const apiKey = 'fca_live_ZTxzudSVnp03SjdsqTYpxann46zYme82LZo0KXOx';  // Replace with your actual API key
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);

            document.getElementById('result').textContent = 
                `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            document.getElementById('result').textContent = 
                'Error retrieving exchange rates. Please try again later.';
        });
});
