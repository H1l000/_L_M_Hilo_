document.addEventListener("DOMContentLoaded", () => {
    // Creo cosntantes de los botones de mi html, creo una fecha: fechaActual y guardo en variables el actual mes y el actual año.

    let fechaActual = new Date();
    const elementoFecha = document.querySelector(".laFecha");
    const contenedorDias = document.querySelector(".days");
    const botonPrevio = document.querySelector(".icons ion-icon[name='chevron-back-circle-outline']");
    const botonSiguiente = document.querySelector(".icons ion-icon[name='chevron-forward-circle-outline']");
    let mesActual = fechaActual.getMonth();
    let anyoAhora = fechaActual.getFullYear();
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    function mostrarCalendario(mes, anyo) {
        //Los signos de dólar ${} se utilizan para insertar variables dentro de una cadena:

        elementoFecha.innerText = `${meses[mes]} ${anyo}`;
        contenedorDias.innerHTML = "";

        //Termino de crear constantes para de verdad empezar con el método a continuación.  
        const primerDiaDelMes = new Date(anyo, mes, 1).getDay();
        const ultimoDiaDelMesAnterior = new Date(anyo, mes, 0).getDate();
        const ultimoDiaDelMes = new Date(anyo, mes + 1, 0).getDate();

        //Adjunto en el calendario los dias del mes anterior inactivos

        for (let i = primerDiaDelMes; i > 0; i--) {
            const li = document.createElement("li");
            li.classList.add("inactivo");
            li.textContent = ultimoDiaDelMesAnterior - i + 1;
            contenedorDias.appendChild(li);
        }

        //Añado al contenedor los dias activos del mes actual, para ello hago uso de mis constantes anteriormente creadas
    
        for (let i = 1; i <= ultimoDiaDelMes; i++) {
            const li = document.createElement("li");
            li.textContent = i;
            if (i === fechaActual.getDate() && mes === fechaActual.getMonth() && anyo === fechaActual.getFullYear()) {
                li.classList.add("active");
            }
            //Aquí añado una fecha como especial

            if (i === 30 && mes === 4 && anyo === 2024) { // 4 es mayo. Porque se empieza desde el 0.
                li.classList.add("fecha-especial");
                li.setAttribute("data-tooltip", "Corpus Christi"); 
            }
            contenedorDias.appendChild(li);
        }

        //Adjunto en el calendario los dias del mes anterior inactivos

        const totalDias = primerDiaDelMes + ultimoDiaDelMes;
        const diasRestantes = (totalDias % 7 === 0) ? 0 : 7 - (totalDias % 7);
        for (let i = 1; i <= diasRestantes; i++) {
            const li = document.createElement("li");
            li.classList.add("inactivo");
            li.textContent = i;
            contenedorDias.appendChild(li);
        }
        //Aquí simplemente hago que haya un aviso al clickar la fecha que haya designado como especial.

        document.querySelectorAll('.fecha-especial').forEach(dia => {
            dia.addEventListener('click', () => {
                alert('Corpus Christi'); // Mostrar mensaje de alerta
            });
        });
    }
    //Finalmente, muestro los días del calendario.

    mostrarCalendario(mesActual, anyoAhora);

    //Y aquí simplemente le doy la funcionalidad correspondiente a cada botón.
    
    botonPrevio.addEventListener("click", () => {
        mesActual--;
        if (mesActual < 0) {
            mesActual = 11;
            anyoAhora--;
        }
        mostrarCalendario(mesActual, anyoAhora);
    });

    botonSiguiente.addEventListener("click", () => {
        mesActual++;
        if (mesActual > 11) {
            mesActual = 0;
            anyoAhora++;
        }
        mostrarCalendario(mesActual, anyoAhora);
    });
});