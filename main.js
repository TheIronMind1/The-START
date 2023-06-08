document.addEventListener('DOMContentLoaded', () => {
    const customTextInput = document.getElementById('customText');
    const postButton = document.getElementById('postButton');
  
    postButton.addEventListener('click', () => {
      const text = customTextInput.value;
  
      fetch('/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      })
        .then(response => {
          if (response.ok) {
            console.log('Text posted successfully!');
            // You can perform any additional actions here after the text is posted
          }
        })
        .catch(error => {
          console.error('Error posting text:', error);
        });
    });
  });
  