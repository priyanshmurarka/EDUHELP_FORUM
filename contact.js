document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    db.collection('contacts').add({
        name: name,
        email: email,
        message: message
    })
    .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
});
