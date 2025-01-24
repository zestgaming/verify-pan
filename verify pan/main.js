function check() {
    let input = document.getElementById("input").value;
    var result = document.getElementById("result");
    fetch('https://ind-thomas.hyperverge.co/v1/PANDetailedFetchWithoutPhoneNumber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'appId': 'k6sjh2',
          'appKey': 'w8wbhs3qa1yshozkxlxo',
          'transactionId': '1234',
        },
        body: JSON.stringify({
          pan: input,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.result.data); // Process the response data
          result.innerHTML = `The result is: ${data.result.data.message} name ${data.result.data.panData.name} `;
        })
        .catch(error => {
          console.error('Error:', error); // Handle any errors
        });
      

  
}