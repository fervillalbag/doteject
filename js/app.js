
const navigationMenu = document.querySelector('#navigation-menu');
const btnBars = document.querySelector('#btn-bars');

btnBars.addEventListener('click', () => {
   navigationMenu.classList.toggle('active');
})

/* Dropdown */

const dropdown1 = document.querySelector('#dropdown1');
const dropdownBody1 = document.querySelector('#dropdownBody1');
const menuOverlay = document.querySelector('#menuOverlay');

dropdown1.addEventListener('click', () => {
   dropdownBody1.classList.add('active');
   menuOverlay.classList.add('active');
});

menuOverlay.addEventListener('click', (e) => {
   e.preventDefault();
   dropdownBody1.classList.remove('active');
   menuOverlay.classList.remove('active');
});

/* Popup Novedades */

const novedadesBtnPost = document.querySelectorAll('.novedades__link');

const novedadesBtnClose = document.querySelector('#novedadesBtnClose');
const novedadesPopup = document.querySelector('#novedadesPopup');
const novedadesOverlay = document.querySelector('#novedadesOverlay');

novedadesBtnPost.forEach(btnPost => {
   btnPost.addEventListener('click', (e) => {
      e.preventDefault();
      novedadesOverlay.classList.add('active');
      novedadesPopup.classList.add('active');
   });
});

novedadesBtnClose.addEventListener('click', () => {
   novedadesPopup.classList.remove('active');
   novedadesOverlay.classList.remove('active');
});

novedadesOverlay.addEventListener('click', () => {
   novedadesPopup.classList.remove('active');
   novedadesOverlay.classList.remove('active');
});

/* Services */

const services01 = document.querySelector('#services01');
const services02 = document.querySelector('#services02');
const services03 = document.querySelector('#services03');
const services04 = document.querySelector('#services04');
const services05 = document.querySelector('#services05');
const services06 = document.querySelector('#services06');
const services07 = document.querySelector('#services07');
const services08 = document.querySelector('#services08');
const services09 = document.querySelector('#services09');
const services10 = document.querySelector('#services10');
const services11 = document.querySelector('#services11');

const servicesBody = document.querySelector('#servicesBody');
const defaultImage = document.querySelector('#defaultImage');


if (window.innerWidth > 768) {

   services01.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Buscamos y seleccionamos a las personas que mejor se ajustan al perfil del cargo requerido por la organización.Escogemos y sugerimos una terna de postulantes con las mejores competencias aptitudinales y cognitivas, para lo cual recurrimos a nuestra base de datos, contactos y referencias laborales, además de realizar publicaciones en periódicos, instituciones educativas, y otros.
            <img src="./images/icons/iconoschicos-index-01.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      defaultImage.classList.add('hidden');
      servicesBody.innerHTML = htmlBody;
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services02.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Realizamos entrevistas en profundidad y evaluamos al  personal referenciado por nuestros clientes y que podrían incorporarse a la organización. Utilizamos una batería de tests cognitivos, aptitudinales, y de personalidad acordes al cargo y al perfil requerido.
            <img src="./images/icons/iconoschicos-index-02.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services03.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Evaluamos el potencial de empleados que se encuentran trabajando en las organizaciones. Nuestra herramienta facilita la toma de decisiones para análisis de perfiles, traslados, promociones, planes de carrera, reestructuración, realización de cuadros de reemplazos y otorgamiento de premios de conformidad al perfil del cargo requerido.
            <img src="./images/icons/iconoschicos-index-03.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services04.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Elaboramos un Programa de Inducción de Personal a medida de la estructura interna de la organización, el cual tiene como propósito fundamental el de lograr que el empleado nuevo identifique a la organización como un sistema dinámico de interacciones en permanente  evolución, en las que un buen desempeño de parte suya, incidirá directamente sobre el logro de los objetivos corporativos.
            <img src="./images/icons/iconoschicos-index-04.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services05.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Realizamos un diagnóstico del ambiente laboral que involucra la relación entre jefes, colaboradores, colegas, e incluso proveedores y clientes, además del entorno físico, entre otros, a fin de determinar las fortalezas y debilidades. Con nuestras recomendaciones contribuimos a alcanzar un ambiente propicio donde las personas se sientan  arraigadas a sus organizaciones y traduzcan este arraigo en un mayor incremento de producción y el logro de los objetivos organizacionales.
            <img src="./images/icons/iconoschicos-index-05.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services06.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Buscamos integrar la estrategia de la organización con el desempeño de sus recursos humanos, a través de herramientas que permiten medir sus competencias en relación al perfil del cargo que ocupa. Nuestra propuesta no solo busca medir las habilidades, conocimientos, aptitudes y la agilidad intelectual del personal, sino sobre todo busca potenciar sus competencias en el marco de un plan de desarrollo adecuado.
            <img src="./images/icons/iconoschicos-index-06.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services07.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Elaboramos Manuales que permiten el establecimiento de los conocimientos, habilidades, actitudes, aptitudes y experiencia que deberían tener las personas que ocupen los diferentes cargos en las organizaciones, resultando el perfil requerido en cada uno de ellos y facilitando los procesos de inducción.
            <img src="./images/icons/iconoschicos-index-07.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services08.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            A través de la revisión o elaboración de organigramas se crea un instrumento idóneo para plasmar y transmitir en forma gráfica y objetiva la composición de una organización y las complejidades estructurales, facilitando el conocimiento de una empresa, sus relaciones de jerarquía, la comprensión de sus redes comunicacionales y su problemática, niveles de responsabilidades y liderazgo. Constituyen de esta manera, un elemento técnico valioso para realizar análisis organizacional.
            <img src="./images/icons/iconoschicos-index-08.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services09.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Asesoramos a los colaboradores del área de Recursos Humanos de las empresas a modo a fortalecer y desarrollar las competencias de gestión de los mismos en los diferentes suministros de RRHH.
            <img src="./images/icons/iconoschicos-index-09.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services10.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Orientamos y asesoramos a estudiantes de los últimos cursos de colegios privados y públicos en la elección de su carrera profesional en base a sus intereses, rasgos de personalidad, conocimientos y habilidades específicas, así como su potencial intelectual.Este servicio puede incluir un asesoramiento personalizado a jóvenes, referente a la inserción laboral(primer empleo) en empresas del medio.
            <img src="./images/icons/iconoschicos-index-10.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });

   services11.addEventListener('click', () => {
      let htmlBody = `
      <div class="content-text">
         <span class="content-text__description">
            Asesoramos a personas con experiencia laboral con el fin de potenciar su perfil personal, profesional y laboral para un mejor aprovechamiento de sus oportunidades laborales para obtener un mejor empleo. Orientamos a valorizar sus talentos, conocimientos y experiencias.
            <img src="./images/icons/iconoschicos-index-11.png" alt="" class="content-text__icon">
         </span>
      </div>
      <img src="./images/busqueda-seleccion.jpg" alt="" class="content-text__image">
   `;
      servicesBody.innerHTML = htmlBody;
      defaultImage.classList.add('hidden');
      if (window.innerWidth <= 768) {
         window.scroll(0, 1760);
      }
      window.scroll(0, 646);
   });
}

/* */

const servicesText01 = document.querySelector('#servicesText01');
const servicesText02 = document.querySelector('#servicesText02');
const servicesText03 = document.querySelector('#servicesText03');
const servicesText04 = document.querySelector('#servicesText04');
const servicesText05 = document.querySelector('#servicesText05');
const servicesText06 = document.querySelector('#servicesText06');
const servicesText07 = document.querySelector('#servicesText07');
const servicesText08 = document.querySelector('#servicesText08');
const servicesText09 = document.querySelector('#servicesText09');
const servicesText010 = document.querySelector('#servicesText010');
const servicesText011 = document.querySelector('#servicesText011');

if (window.innerWidth < 768) {
   services01.addEventListener('click', () => {
      servicesText01.classList.toggle('active')
   })

   services02.addEventListener('click', () => {
      servicesText02.classList.toggle('active')
   })

   services03.addEventListener('click', () => {
      servicesText03.classList.toggle('active')
   })

   services04.addEventListener('click', () => {
      servicesText04.classList.toggle('active')
   })

   services05.addEventListener('click', () => {
      servicesText05.classList.toggle('active')
   })

   services06.addEventListener('click', () => {
      servicesText06.classList.toggle('active')
   })

   services07.addEventListener('click', () => {
      servicesText07.classList.toggle('active')
   })

   services08.addEventListener('click', () => {
      servicesText08.classList.toggle('active')
   })

   services09.addEventListener('click', () => {
      servicesText09.classList.toggle('active')
   })

   services10.addEventListener('click', () => {
      servicesText010.classList.toggle('active')
   })

   services11.addEventListener('click', () => {
      servicesText011.classList.toggle('active')
   })
}