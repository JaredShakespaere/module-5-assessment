
const form = document.querySelector('form')
const baseURL = "http://localhost:4000/api/user/"

const userCallback = ({ data: users }) => displayZodiak(users)
const errCallback = err => console.log(err)


const createUser = body => axios.post (baseURL, body).then(userCallback).catch(errCallback)

function displayZodiak(birthMonth, birthDay) {
    zodiakSign.innerHTML = ``
    if(birthMonth === "March" || "April" && birthDay < 21) {

        createUserCard(arr[i])
    }
}