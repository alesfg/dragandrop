        const verPosicionesAnteriores = () => document.getElementById('posiciones').style="opacity:1;";
        let dragged;
        const contenedor= document.querySelector('#contenedor');

        const añadir = (num_cajas,dragged,e) =>{
            
            switch (num_cajas) {
                case 0:
                    e.target.appendChild( dragged );
                    break;
                case 1:
                    e.target.appendChild( dragged );
                    break;
                case 2:
                    e.target.appendChild( dragged );
                    break;
                case 3:
                    e.target.appendChild( dragged );
                    break;
                case 4:
                    break;
                default:
                    break;
            }
        }

        const colorear = (num_cajas, cajas) => {
            switch (num_cajas) {
                case 0:
                    cajas[0].setAttribute('style','background:royalblue;');
                    break;
                case 1:
                    cajas[0].setAttribute('style','background:royalblue;');
                    if(cajas[1]!=null){
                        cajas[1].setAttribute('style','background:orange;');
                    }
                    break;
                case 2:
                    cajas[0].setAttribute('style','background:royalblue;');
                    if(cajas[2]!=null){
                    cajas[1].setAttribute('style','background:yellow;');
                    cajas[2].setAttribute('style','background:orange;');
                    }else{
                        cajas[1].setAttribute('style','background:orange;');
                    }
                    break;
                case 3:
                    cajas[0].setAttribute('style','background:royalblue;');
                    if(cajas[3]!=null){
                    cajas[1].setAttribute('style','background:green;');
                    cajas[2].setAttribute('style','background:yellow;');
                    cajas[3].setAttribute('style','background:orange;');
                    }else{
                    cajas[1].setAttribute('style','background:yellow;');
                    cajas[2].setAttribute('style','background:orange;');
                    }
                    break;
                case 4:
                    cajas[0].setAttribute('style','background:royalblue;');
                    cajas[1].setAttribute('style','background:green;');
                    cajas[2].setAttribute('style','background:yellow;');
                    cajas[3].setAttribute('style','background:orange;');
                    break;
                default:
                    break;
            }
        }
        // ******************************************
        contenedor.addEventListener('dragover', e => {
            e.preventDefault();
        })
        document.addEventListener("dragstart", function( e ) {
            dragged = e.target;
            e.target.style.opacity = .7;
        }, false);
        document.addEventListener("dragend", function( e ) {
            e.target.style.opacity = 1;
        }, false); 
    
        let cajas;
        let num_cajas;

        const contarHijos = () =>{
            cajas =contenedor.getElementsByTagName("div");
            num_cajas = cajas.length;
        }

        contenedor.addEventListener('drop', e => {
            
            contarHijos();

            if ( e.target.id == "contenedor" ) {
                añadir(num_cajas,dragged,e);                
            }else if(e.target.className == "caja") {
                contenedor.insertBefore(dragged,e.target);
            }
            contarHijos();
            colorear(num_cajas,cajas)


            let hijos = contenedor.children;
            let posiciones={};
            for (let i = 0; i < hijos.length; i++) {
                posiciones[i]=hijos[i].id;
            }
            // ENVIAR DATOS A SERVIDOR, PARA QUE ESCRIBA EN EL FICHERO LAS POSICIONES DESDE PHP
            fetch('post.php', {
                method: 'POST',
                body: JSON.stringify(posiciones),
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(function(response) {
                return response.text();
                })
                .then(function(data) {
                console.log(data);
                })
                .catch(function(error) {
                console.error(error);
                })

        })
            //  RECOGER DATOS DESDE EL SERVIDOR PARA IMPRIMIRLOS AL CLIENTE
            let objeto;

            fetch('post.php')
                .then(function(response) {
                return response.text();
                })
                .then(function(data) {
                    console.log("Las ultimas posiciones fueron: "+data);
                    objeto=(JSON.parse(data));
                    claves = Object.keys(objeto);
                    document.getElementById('posiciones').innerHTML+= "La última vez los elementos estaban dispuestos de esta forma, empezando por la izquierda:<br><br>";
                    for (let i = 0; i < claves.length; i++) {
                        document.getElementById('posiciones').innerHTML+= "En la posición nº: "+(parseInt(claves[i])+1)+" -> "+objeto[claves[i]]+"<br>";                
                    }
                })
                .catch(function(error) {
                    console.error(error);
                })