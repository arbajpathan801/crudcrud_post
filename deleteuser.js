
const Form = document.querySelector('#my-form');
const Username = document.querySelector('#name');
const Usermail = document.querySelector('#email');
const Userphone = document.querySelector('#phone');
const list = document.querySelector('#listofuser');



Form.addEventListener('submit', onsubmit)


function onsubmit(e) {
    e.preventDefault();

    const delbtn = document.createElement('button');
    delbtn.value = delete
        delbtn.appendChild(document.createTextNode("Delete User"))
    const editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode("Edit User"))
    delbtn.addEventListener('click', deleteuser)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${Username.value} : ${Usermail.value} : ${Userphone.value}`))

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)

    const name = Username.value;
    Username.value='';
    const email = Usermail.value;
    Usermail.value='';
    const phone = Userphone.value;
    Userphone.value='';
    let obj = {
        name,
        email,
        phone
    }
    axios.post("https://crudcrud.com/api/e78e084e43264cfa8a60015e190976c3/UserDetails", obj)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
       
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/e78e084e43264cfa8a60015e190976c3/UserDetails")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                GETBack(res.data[i])
            }
        })
        .catch((err) => {
            console.log(err)
        })

});
function GETBack(data) {
    var parentNode = document.getElementById("listofuser")
    var chilsHTML = `<li id=${data._id} >${data.name} ${data.email} ${data.phone}
    <button onclick=deleteuser('${data._id}') >Delete User</button>
    <button onclick=edituser(${data._id}) >Edit User</button>
     </li>`
    parentNode.innerHTML = parentNode.innerHTML + chilsHTML
}

function deleteuser(userId) {
    axios.delete(`https://crudcrud.com/api/e78e084e43264cfa8a60015e190976c3/UserDetails/${userId}`)
    .then ((res) => {
        removeFromScreeen(userId)
    }).catch ((err) => {
        console.error(err)
    })
}
function removeFromScreeen(userId) {
    let child=document.getElementById(`${userId}`)
    list.removeChild(child)
}
