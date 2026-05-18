 const modalData = [
    {
        title: "Café de especialidad",
        description: [
            "Desarrollado con HTML y CSS, se ajusta a un estricto protocolo de diseño y sigue la metodología BEM para un código estructurado y mantenible. El proyecto se gestionó y controló mediante GitHub, lo que garantizó actualizaciones organizadas y una colaboración fluida.",
            "Desarrollé con éxito una página web responsiva y visualmente atractiva utilizando HTML y CSS. Apliqué la metodología BEM para obtener un código limpio, mantenible y escalable. Gestioné el proyecto de manera eficiente utilizando GitHub para el control de versiones",
            "Este proyecto pone de manifiesto mis conocimientos básicos de HTML y CSS, demostrando mi capacidad para crear páginas web estructuradas, responsivas y visualmente atractivas. Siguiendo la metodología BEM y utilizando herramientas como GitHub, logré un proceso de desarrollo organizado y fácil de mantener. Este proyecto refleja mi compromiso con la programación limpia y el aprendizaje continuo en el desarrollo web."],
            caracter: ["HTML5: marcado semántico para una mejor estructura","CSS3: Estilo avanzado mediante Flexbox","psoicionamiento Metodologia BEM: Estandarizar la estructura de las clases para organizar los estilos de manera escalable","Contenndores para la integracion de elmentos multimedia como youtube","GitHub: control de versiones del proyecto"],
        
        link: "https://miketrujillo2024.github.io/web_project_coffeeshop"
    },
    {
        title: "Alrededor de los EE.UU.",
        description: [
            "Desarrollado con html, CSS y Javascript, Proyecto web interactivo desarrollado como parte del bootcamp de Desarrollo Web Fullstack en TripleTen. Esta aplicación permite a los usuarios gestionar un perfil personal, agregar, eliminar y dar 'me gusta' a imágenes, utilizando buenas prácticas de desarrollo frontend y programación modular orientada a objetos",
            "Desarrollé una aplicación robusta siguiendo el paradigma de la programación orientada a objetos, integrando de manera adecuada los módulos de JavaScript. Además, utilicé una API proporcionada por la plataforma de TripleTen, lo que me permitió implementar operaciones CRUD completas para la gestión de usuarios de manera eficiente y escalable",
            "Desarrollé una aplicación utilizando programación orientada a objetos, organizando el código en módulos de JavaScript. Integré una API para enriquecer las funcionalidades y logré implementar operaciones CRUD de Imagenes, asegurando un sistema completo, escalable y profesional.Además, utilicé control de versiones con Git y GitHub, y apliqué mis conocimientos de HTML y CSS para construir una interfaz clara y responsiva. "],
            caracter: ["HTML5","CSS3","JavaScript (ES6+)","Programación Orientada a Objetos (POO)","Metodología BEM","Webpack","Diseño Responsivo","Git y GitHub"],
        link: "https://miketrujillo2024.github.io/web_project_around_es/src/"
    },
    {
        title:"De patria a patria",
        description: [
            "El sitio 'De Patria a Patria', muestra que no hay fronteras ni distancia tan grande para conectarse y estudiar juntos. Inspira, no solo a aprender, pero a compartir nuestras propias historias para alcanzar e inspirar a mas personas alrededor del mundo. Es un intro para lo que puede ser una galeria de los paises de nuestros colegas y asi conocer mas cada pais a los que alcanzo tripleten y a los que aún faltan por llegar",
            "Desarrolle esta pagina web, utilizando por primra vez FIGMA, que planea el diseño del layout del sitio, Asegura que la pàgina sea tal cual como se pide el sitio y asegura que los sitios se estructuren del modo correcto en cualquier tamaño de dispositivo. ",
            "Por primera vez utilice Figma para crear la página, utilizando CSS3 y HTML, de tal manera que se muestre como se pide la pagina"],
            caracter: ["HTML","CSS3","BEM","FIGMA","control de versiones GITHUB"],
        link:"https://miketrujillo2024.github.io/web_project_homeland"
    }
]

const btnModal = document.querySelectorAll(".page__title-project");
const template = document.querySelector("#modal-template");
const container = document.querySelector("#modal-container");


export {modalData,btnModal,template,container}