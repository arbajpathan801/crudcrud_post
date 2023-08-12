const F = document.getElementById('my-form');
const N = document.getElementById('name');
const E = document.getElementById('email');
const P = document.getElementById('phone');
const L = document.getElementById('listofuser');

F.addEventListener('submit', onsubmit)
var flag = '';

function onsubmit(e) {
    e.preventDefault();
    const name= N.value;
    N.value=''
    const email= E.value;
    E.value='';
    const phone=P.value;
    P.value='';
    let obj = {
        name,
        email,
        phone
    }
    if (flag == '') {
        const post = axios.post('https://crudcrud.com/api/ee3d487063304c29af833b3e72b4a630/LIST', obj)
            .then(res => {
                ShowOnScreen(res.data)
            }).catch(err => {
                console.log(err.message)
            })
        console.log(post)
    }
    else {
        let Uobj = {
            name: obj.name,
            email: obj.email,
            phone: obj.phone,
        }
        const put = axios.put(`https://crudcrud.com/api/ee3d487063304c29af833b3e72b4a630/LIST/${flag}`, Uobj)
            .then(res => {
                ShowOnScreen(Uobj)
            }).catch(err => {
                console.log(err.message)
            })
        console.log(put)
    }

}
window.addEventListener('DOMContentLoaded', () => {
    let fast = axios.get('https://crudcrud.com/api/ee3d487063304c29af833b3e72b4a630/LIST')
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                ShowOnScreen(res.data[i])
            }
        }).catch(err => {
            console.error(err.message)
        })
    console.log(fast)
}

)

function ShowOnScreen(data) {
    let li = document.createElement('li');
    li.textContent = `${data.name} ${data.email} ${data.phone}`
    li.id = data._id;
    const dltbtn = document.createElement('button');
    dltbtn.value = delete
        dltbtn.appendChild(document.createTextNode('DELETE'))
    dltbtn.onclick = () => {
        deleteuser(data._id)
    }
    const editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode('UPDATE'))
    editbtn.onclick = () => {
        edituser(data)
    }
    li.appendChild(dltbtn)
    li.appendChild(editbtn)

    L.appendChild(li)

}
function deleteuser(userId) {
    let Delete = axios.delete(`https://crudcrud.com/api/ee3d487063304c29af833b3e72b4a630/LIST/${userId}`)
        .then(res => {
            removeFromScreeen(userId)
        }).catch(err => {
            console.error(err.message)
        })
    console.log(Delete)

}
function removeFromScreeen(userId) {
    let user = document.getElementById(userId);
    L.removeChild(user)
}

function edituser(U) {
    N.value = U.name;
    E.value = U.email;
    P.value = U.phone;
    flag = U._id;
    removeFromScreeen(U._id)
}