
        const Form=document.querySelector('#my-form');
        const Username=document.querySelector('#name');
        const UserId=document.querySelector('#email');
        const Userphone=document.querySelector('#phone');
        const list=document.querySelector('#listofuser');
      
        Form.addEventListener('submit', onsubmit)

        function onsubmit (e){
            e.preventDefault();
              
            const delbtn=document.createElement('button');
            delbtn.value=delete
            delbtn.appendChild(document.createTextNode("Delet User"))
            const editbtn=document.createElement('button');
            editbtn.appendChild(document.createTextNode("Edit User"))
            const li=document.createElement('li')
            li.appendChild(document.createTextNode(`${Username.value} : ${UserId.value} : ${Userphone.value}`))

            li.appendChild(delbtn)
            li.appendChild(editbtn)
            list.appendChild(li)

            const name=Username.value;
            const email=UserId.value;
            const phone=Userphone.value;
            let obj={
                name,
                email,
                phone
            }
            axios.post("https://crudcrud.com/api/1a2e54474797488597fa3abb03a9e1db/UserDetails" , obj )
            .then((res) => {
             console.log (res)
            })
            .catch ((err) => {
               console.log("<h4> Something Went Wrong </h4>")
            })
           
        }
        

       