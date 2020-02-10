const url = "https://teachapi.herokuapp.com/sign_up";
const data = {
    sign_up_user_params: {
        name: "name",
        bio: "bio",
        email: "test@email.com",
        password: "password",
        password_confirmation: "password"
    }
};

const method = "POST";
const body = JSON.stringify(data);
const headers = {
    'Content-Type': 'application/json'
};
fetch(url, {
    method,
    headers,
    body
}).then((res) => res.json()).then(console.log).catch(console.error);


//Skeleton

/*

*/