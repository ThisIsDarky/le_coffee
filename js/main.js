let selectionNumber = document.getElementById('selection-number');
let table = document.getElementById('table-content');
let submitBtn = document.getElementById('submit');



function drawNumberAvailable(){
    for (let i = 1; i <= 15; i++) {
        table.innerHTML += ` <div class="num-table-container" id ="number${i}"  onclick="myTableNum(${i})">${i}</div>`
    }
}

drawNumberAvailable();




selectionNumber.addEventListener('click', (e) =>{
    table.style.top = '40px';
    table.style.opacity = '1';
    table.style.display = "flex";
    table.style.justifyContent ="center";
    table.style.flexWrap = "wrap";
} )

function myTableNum(number){
    let  mesa = document.getElementById(`number${number}`).textContent;
    table.style.top = '100px';
    table.style.opacity = '0';
    table.style.display = "none";
    selectionNumber.innerText = mesa;
}


submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    /*Optencion de datos*/
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let numberTable = Number(selectionNumber.innerText)
    if ( name != '' && password != '' && numberTable != 0){
        
        datos = {
            nombre: name,
            clave: password,
            mesa: numberTable
        };

        $.ajax({
            url: './config/php/mainUser.php',
            type: 'POST',
            data: datos
        })
        .done(function(res){
           window.location.href = './menu.html'
        })


       
        



    
    }

    else{


        Swal.fire({
            title: '¡Espera!',
            text: 'Porfavor completa todos los campos',
            icon: 'warning',
            confirmButtonText: 'Okey'
          })

    }


   

   



})