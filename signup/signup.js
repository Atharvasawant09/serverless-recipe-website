const box = document.querySelector('.box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');


registerlink.addEventListener('click' , ()=>{
    box.classList.add('active')
});

loginlink.addEventListener('click' , ()=>{
    box.classList.remove('active')
});



// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.querySelector('.form-box.Login form');
    
//     loginForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent default form submission
        
//         const email = document.querySelector('.form-box.Login input[type="email"]').value;
//         const password = document.querySelector('.form-box.Login input[type="password"]').value;

//         // Prepare data to be sent to the API
//         const data = {
//             email: "user@gmail.com",
//             password: "password123"
//         };

//         // Send request to the API endpoint
//         fetch('https://login-signup.p.rapidapi.com/public/v1/login.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-rapidapi-host': 'login-signup.p.rapidapi.com',
//                 'x-rapidapi-key': 'cef2b30364mshb955540ef474b00p1d3891jsn4ada22d1bc97Y' // Replace with your RapidAPI key
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Handle successful login
//             console.log('Login successful:', data);
//             // Redirect user to another page or perform other actions
//         })
//         .catch(error => {
//             // Handle login error
//             console.error('Login error:', error);
//             // Display error message to the user
//         });
//     });
// });

// const email = 'test@email.com';
// const password = 'Qwerty_12345';

// const encodedParams = new URLSearchParams();
// encodedParams.append('api_key', '394e9338b73a9f061b1968ceaa050a');
// encodedParams.append('email', email);
// encodedParams.append('password', password);

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'login-signup.p.rapidapi.com'
//   },
//   body: encodedParams,
// };

// fetch('https://login-signup.p.rapidapi.com/public/v1/login.php', options)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Login failed');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Login successful:', data);
//     // Redirect user to another page or perform other actions
//   })
//   .catch(error => {
//     console.error('Login error:', error);
//     // Display error message to the user
//   });

// document.addEventListener('DOMContentLoaded', async function () { // Add async keyword here
//     const loginForm = document.querySelector('.form-box.Login form');

//     loginForm.addEventListener('submit', async function (event) { // Add async keyword here
//         event.preventDefault(); // Prevent default form submission

//         const email = document.querySelector('.form-box.Login input[type="email"]').value;
//         const password = document.querySelector('.form-box.Login input[type="password"]').value;

//         // Prepare data to be sent to the API
//         const data = {
//             email: 'abc@gmail.com',
//             password: 'abc'
//         };

//         const url = 'https://login-signup.p.rapidapi.com/public/v1/login.php';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-rapidapi-host': 'login-signup.p.rapidapi.com',
//                 'x-rapidapi-key': 'cef2b30364mshb955540ef474b00p1d3891jsn4ada22d1bc97' // Replace with your RapidAPI key
//             },
//             body: JSON.stringify(data)
//         };

//         try {
//             const response = await fetch(url, options); // Use await here
//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }
//             const responseData = await response.json(); // Use await here
//             // Handle successful login
//             console.log('Login successful:', responseData);
//             // Redirect user to another page or perform other actions
//         } catch (error) {
//             // Handle login error
//             console.error('Login error:', error);
//             // Display error message to the user
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', async function () {
//     const loginForm = document.querySelector('.form-box.Login form');

//     loginForm.addEventListener('submit', async function (event) {
//         event.preventDefault(); // Prevent default form submission

//         const email = document.querySelector('.form-box.Login input[type="email"]').value;
//         const password = document.querySelector('.form-box.Login input[type="password"]').value;

//         // Prepare data to be sent to the API
//         const data = {
//             login: email,
//             password: password
//         };

//         const url = 'https://api.backendless.com/?_gl=1*15dswul*_ga*OTA3NzMwNzQxLjE3MTM3MDU2ODc.*_ga_W6FNYGXFV5*MTcxMzcwODk0MC4yLjEuMTcxMzcwOTAyMy4wLjAuMA..';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         };

//         try {
//             const response = await fetch(url, options);
//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }
//             const responseData = await response.json();
//             // Handle successful login
//             console.log('Login successful:', responseData);
//             // Redirect user to another page or perform other actions
//         } catch (error) {
//             // Handle login error
//             console.error('Login error:', error);
//             // Display error message to the user
//         }
//     });
// });


