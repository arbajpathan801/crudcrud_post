
const Form = document.querySelector('#my-form');
const Username = document.querySelector('#name');
const UserId = document.querySelector('#email');
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
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${Username.value} : ${UserId.value} : ${Userphone.value}`))

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)

    const name = Username.value;
    const email = UserId.value;
    const phone = Userphone.value;
    let obj = {
        name,
        email,
        phone
    }
    axios.post("https://crudcrud.com/api/c639deb76fbf4e10bd6db21ed1059d99/UserDetails", obj)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })


}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/c639deb76fbf4e10bd6db21ed1059d99/UserDetails")
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
    var chilsHTML = `<li >${data.name} ${data.email} ${data.phone}
    <button >Delete User</button>
    <button >Edit User</button>
     </li>`
    parentNode.innerHTML = parentNode.innerHTML + chilsHTML
}
