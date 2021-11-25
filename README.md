# DRAG AND DROP
`IMPORTANTE:`

La carpeta debe moverse a la carpeta adecuada del servidor web,
yo por ejemplo la situé en htdocs ya que he usado como servidor web Apache desde XAMPP,
y desde otro ordenador usando WAMP en la carpeta wamp64/www.

Abrir el archivo index.html desde el servidor web y no directamente.

## Resultado:
![dragndrop](https://user-images.githubusercontent.com/59764503/143457096-aae59a92-23bf-4e91-b9ef-4447de99fd0b.PNG)
Después de recargar la página
![posicionesdragdrop](https://user-images.githubusercontent.com/59764503/143457136-f3b594c9-7106-4355-83f9-a4b18373193c.PNG)



Una empresa me contactó y me puso esta prueba, aqui los requisitos que me pidieron:

## Realizar una página que: 
## - Contenga un div contenedor y varios div “externos”.

## - Los externos podrán moverse (drag and drop) dentro del div contenedor y quedarse en una posición dentro del área del contenedor.

## - En caso de superposición de dos divs externos (dentro del contenedor), el que ha sido movido retornará a la posición anterior.

## - El color de los div externos cambiará en función de su posición dentro del div contenedor (naranja a la derecha del todo, azul a la izquierda del todo, colores intermedios enlas posiciones intermedias) 

## - Sincronizará con una página PHP en la que guardará las posiciones (en /tmp/posiciones.json) para en caso de recarga poder ver las posiciones donde se dejaron.

