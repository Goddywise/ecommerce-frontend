const baseUrl = 'http://localhost:5050';

const registerUser = (e) =>{
    e.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const address = document.getElementById('address').value;
    const phone_number = document.getElementById('phone_number').value;
    const password = document.getElementById('password').value;
    const secondary_address = document.getElementById('secondary_address').value;
    const confirm_password = document.getElementById('confirm_password').value;
    
    if(password == confirm_password){
        fetch(`${baseUrl}/users/create-user`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username,first_name,last_name,phone_number,address,secondary_address,password})
        }).then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    else{        alert('passwords must match');
    }
   
}