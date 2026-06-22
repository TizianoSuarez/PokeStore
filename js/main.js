document.addEventListener('DOMContentLoaded',function(){
    
    const pokemon = [
        {   
            id: 1, 
            nombre: "Balbasaur", 
            tipo: "Planta", 
            img: "./img/balbasaur.png" 
        },
        { 
            id: 2, 
            nombre: "Pikachu", 
            tipo: "Eléctrico", 
            img: "./img/pngwing.com.png" 
        }, 
        { 
            id: 3, 
            nombre: "Squirtle", 
            tipo: "Agua", 
            img: "./img/squiertle.png" 
        },
        { 
            id: 4, 
            nombre: "Dragon", 
            tipo: "Lava", 
            img: "./img/dragon.png" 
        },
        { 
            id: 5, 
            nombre: "Panda", 
            tipo: "Animal", 
            img: "./img/panda.png" 
        },
        { 
            id: 6, 
            nombre: "Perrito", 
            tipo: "Animal", 
            img: "./img/perrito.png" 
        },
       
    ];

    const contenedorPadre = document.querySelector(".contenedor_padre");

    pokemon.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");

        const nombre = document.createElement("h3");
        nombre.textContent = pokemon.nombre;
        card.appendChild(nombre);

        const imagen = document.createElement("img");
        imagen.src = pokemon.img;
        card.appendChild(imagen);

        const tipo = document.createElement("p");
        tipo.textContent = `Tipo: ${pokemon.tipo}`;
        card.appendChild(tipo);

        const btn_card = document.createElement("button");
        btn_card.textContent = "Comprar";
        btn_card.classList.add("card_btn");
        card.appendChild(btn_card);
        
        btn_card.addEventListener('click', function() {
            agregarAlCarrito(pokemon);
        });

        contenedorPadre.appendChild(card);
        
    });

    // treamos elementos del html a js 

    const hamburgerButton = document.getElementById("hamburgerButton");
    const menu = document.getElementById("menu");
    const carritoLink = document.getElementById("carritoLink");
    const carritoMenu = document.getElementById("carritoMenu");
    const salirButton = document.getElementById("salirButton");
    const carritoItems= document.getElementById("carritoItems");
    const vaciar = document.getElementById("btn_vaciar");

    // function para togglear

    function toggleMenu(){
        if(menu.style.display === 'block'){
            menu.style.display= ' none'
            hamburgerButton.innerHTML ='&#9776;';
        }else{
            menu.style.display= 'block';
            hamburgerButton.innerHTML = 'x';
        }
    }

    hamburgerButton.addEventListener('click',toggleMenu);


    // cuando la el ancho de la pantalla varia la funcion verica si en mayo a 600 px si es mayor aparece el menu con flex
    window.addEventListener('resize',function(){
        if(this.window.innerWidth > 600){
            menu.style.display = 'flex';
            hamburgerButton.innerHTML='&#9776;';
        }else{
            menu.style.display='none'
        }
    })


    //cada ves que se carga la pagina verificamos si el ancho es mayor a 600px si mayor a 600px el menu tambien aparece como flex

    if(window.innerWidth >600){
        menu.style.display ='flex';
    }else{
        menu.style.display ='none';
    }


    // funcion  que dispara el menu del carrito 

    carritoLink.addEventListener('click',function(event){
        event.preventDefault();
        carritoMenu.style.display ='block';
    });

    //funcion de salir del carrito 

    salirButton.addEventListener('click',function(){
        carritoMenu.style.display ='none';
    })

    vaciar.addEventListener('click',function(){
        carritoItems.innerHTML='';
    })


    //funcion para agregar productos al carrito 

    function agregarAlCarrito(pokemon){
        const item = document.createElement("li");
        item.classList.add("li_carrito");
        item.innerText=pokemon.nombre;

        const eliminarBtn = document.createElement('button');
        eliminarBtn.innerText='eliminar';
        eliminarBtn.classList.add("btn_carrito");

        //funcion para eliminar un producto 
        eliminarBtn.addEventListener('click',function(){
            item.remove()
        })

        item.appendChild(eliminarBtn);
        carritoItems.appendChild(item);
    }



});


        

       




        




















    