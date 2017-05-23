var lookupButton = document.querySelector('.lookup');
var userName = document.querySelector('#userName');
var output = document.querySelector('.output');


lookupButton.addEventListener('click', function(){

    var username = userName.value;

    var url = "http://api.github.com/users/" + username 

    $.ajax({
        type: 'GET',
        url: url,
        heades: {'Authorization': "https://api.github.com/users/christianraymond/repos"}
    })
    .then(function(result){
         var message = 'Hi, ' + username + ', you have ' + result.public_repos + ' github repositories in Github.'
//         var message = "Hi " + username + " you have " + JSON.stringify(result) + " repos";
        output.innerHTML = message;
        console.log(message);
    });
});
