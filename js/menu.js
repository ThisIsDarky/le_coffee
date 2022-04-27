let slider1 = document.getElementById('slider1');
let slider2 = document.getElementById('slider2');
let slider3 = document.getElementById('slider3');
let contSlider = 0;

setInterval(()=>{
    contSlider += 1;
    animarSlider(contSlider);
}, 5000)

const animarSlider = (e) => {
    if (e == 1){
        slider1.style.opacity ='1'; 
        slider2.style.opacity ='0'; 
        slider3.style.opacity ='0'; 
    }
    else if(e == 2){
        slider1.style.opacity ='0'; 
        slider2.style.opacity ='1'; 
        slider3.style.opacity ='0'; 
    }
    else if (e == 3){
        slider1.style.opacity ='0'; 
        slider2.style.opacity ='0'; 
        slider3.style.opacity ='1';
        
        contSlider = 0;
    }

    
}




/*sesion de usuario*/

function sesion(){
    $.ajax({
        url:'./config/php/shoping.php',
        type: 'POST',
        success: function(res){
            let data = JSON.parse(res)
            let userContentName = document.getElementById('nameUser');
            let tableuserContent = document.getElementById('tableUser');
            userContentName.innerHTML = data.usuario;
            tableuserContent.innerHTML = 'Mesa # ' + data.mesa;
        }
    })
}













/*Pintar caffes*/

let menuCoffeeContainer = document.getElementById('coffee-container');
let menuPostresContainer = document.getElementById('postres-container');



const drawMenuCoffees = async (e) =>{

    const url = `./config/cafes.json`;
    const rest = await fetch(url);
    const drawCaffees = await rest.json();
    

    e = ('undefined') ? 0 : 'hola';

    drawCaffees.forEach(coffe =>{

        menuCoffeeContainer.innerHTML += `

        <div class="menu-coffee_item">
                    <div class="coffee-item_image">
                        <img src="${coffe.img}" alt="">
                    </div>
                    <div class="coffee-item_text">
                        <h4>${coffe.name}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur placeat, exercitationem voluptatibus obcaecati, ipsum aperiam sed itaque rerum illum reprehenderit! Repudiandae quos blanditiis exercitationem placeat nobis unde facere voluptatum?
                        </p>

                        <div class="add-carSection">
                           <div class="add-carSection_text">COMPRAR</div>
                           <div class="add-carSection_less" onclick="lessCar('${coffe.id}')" >-</div>
                           <div class="add-carSection_cont" id="${coffe.id}">0</div>
                           <div class="add-carSection_more"  onclick="moreCar('${coffe.id}')">+</div>
                        </div>

                    </div>
                </div>



        `;
    })
}



const drawMenuPostres = async (e) =>{

    const url = `./config/postres.json`;
    const rest = await fetch(url);
    const drawCaffees = await rest.json();
    

    e = ('undefined') ? 0 : 'hola';

    drawCaffees.forEach(coffe =>{

        menuPostresContainer.innerHTML += `

        <div class="menu-coffee_item">
                    <div class="coffee-item_image">
                        <img src="${coffe.img}" alt="">
                    </div>
                    <div class="coffee-item_text">
                        <h4>${coffe.name}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur placeat, exercitationem voluptatibus obcaecati, ipsum aperiam sed itaque rerum illum reprehenderit! Repudiandae quos blanditiis exercitationem placeat nobis unde facere voluptatum?
                        </p>

                        <div class="add-carSection">
                           <div class="add-carSection_text">COMPRAR</div>
                           <div class="add-carSection_less" onclick="lessCar('${coffe.id}')" >-</div>
                           <div class="add-carSection_cont" id="${coffe.id}">0</div>
                           <div class="add-carSection_more"  onclick="moreCar('${coffe.id}')">+</div>
                        </div>

                    </div>
                </div>



        `;
    })
}



drawMenuCoffees();
drawMenuPostres();
sesion();





/*Contruir carrito de compras*/

/*variables*/
const listCoffees = {
    EX: 0,
    AM: 0,
    MA: 0,
    EP: 0,
    HA: 0,
    CL: 0,
    CAP:0
}


const lessCar = e =>{
    
    
    let addCoffe = {
        EX: 1,
        AM: 1,
        MA: 1,
        EP: 1,
        HA: 1,
        CL: 1,
        CAP:1
    }
    
    const coffe = addCoffe[e]|| 'no hay coffes';

    if (listCoffees[e] != 0){
        listCoffees[e] -= coffe
    }

    carShoping(e, listCoffees[e])
}
const moreCar = e =>{ 
    let addCoffe = {
        EX: 1,
        AM: 1,
        MA: 1,
        EP: 1,
        HA: 1,
        CL: 1,
        CAP:1
    }
    
    const coffe = addCoffe[e]|| 'no hay coffes';
    listCoffees[e] += coffe
    carShoping(e, listCoffees[e])
}

const carShoping = (id, coffeAdd) =>{
   let changeContCoffee = document.getElementById(`${id}`);
   changeContCoffee.innerHTML = coffeAdd;
}







