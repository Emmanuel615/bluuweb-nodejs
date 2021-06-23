const express = require('express');
const app = express();

const port = 3000;

/* le decimos a express que vamos a utilizar el motor de plantillas ejs
y que las vistas van a estar en la carpeta /views
*/
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// configuramos nuestro midleware que se ejecuta antes que se realizen las solicitudes
// __dirname hace alucion a la ruta que tengamos configurada de archivos locales o de nuestro servidor
// al apuntar a la carpeta public, nos da acceso a todos los archivos de ese directorio
app.use(express.static(__dirname + '/public'));


// visualizamos en la pagina raiz una respuesta rederizada y le enviamos un titulo
app.get('/', (req, res) => {
       res.render("index", { titulo: "mi titulo dinamico" })
})

// enviamos una respuesta a la pagina servicios con un titulo
app.get('/servicios', (req, res) => {
       res.render("servicios", { tituloServicio: "Este es un mensaje dinamico de servicios" })
})


// configuramos otro midleware que muestre la pagina 404 de error al no encontrar una ruta configurada
app.use((req, res, next) => {
       res.status(404).render("404", {
              titulo: "404",
              descripcion: "Titulo del sitio web"
       });
})

// servidor a la escucha en el puerto 3000
app.listen(port, () => {
       console.log('servidor a su servicio en el puerto ' + port);
})