// Definimos el número de espacios en el estacionamiento
const TOTAL_SPACES = 5;

// Creamos un array para los espacios de estacionamiento
let parkingSpaces = Array(TOTAL_SPACES).fill(null);

/**
 * Muestra el menú principal en la consola.
 */
function showMenu() {
  console.clear(); // Limpia la consola
  console.log('==== Menú Principal ===='); // Muestra el título del menú
  console.log('1. Solicitar Estacionamiento'); // Opción para solicitar un espacio
  console.log('2. Salir de estacionamiento'); // Opción para liberar un espacio
  console.log('3. Salir de la aplicación'); // Opción para salir de la aplicación
}

/**
 * Muestra los espacios de estacionamiento disponibles.
 */
function showAvailableSpaces() {
  console.clear(); // Limpia la consola
  console.log('==== Espacios Disponibles ===='); // Muestra el título
  for (let i = 0; i < parkingSpaces.length; i++) { // Itera sobre los espacios
    console.log(`Espacio ${i + 1}: ${parkingSpaces[i] === null ? 'Disponible' : 'Ocupado'}`); // Muestra el estado de cada espacio
  }
}

/**
 * Obtiene un espacio de estacionamiento disponible de forma aleatoria.
 * @returns {number|null} El índice del espacio disponible, o null si no hay espacios disponibles.
 */
function getRandomAvailableSpace() {
  let availableSpaces = []; // Array para almacenar los espacios disponibles
  for (let i = 0; i < parkingSpaces.length; i++) { // Itera sobre los espacios
    if (parkingSpaces[i] === null) { // Si el espacio está disponible
      availableSpaces.push(i); // Agrega el índice del espacio al array de disponibles
    }
  }

  if (availableSpaces.length === 0) { // Si no hay espacios disponibles
    return null; // Retorna null
  }

  let randomIndex = Math.floor(Math.random() * availableSpaces.length); // Obtiene un índice aleatorio del array de espacios disponibles
  return availableSpaces[randomIndex]; // Retorna el índice del espacio disponible aleatorio
}

/**
 * Estaciona un coche en un espacio disponible.
 */
function parkCar() {
  showAvailableSpaces(); // Muestra los espacios disponibles
  let spaceIndex = getRandomAvailableSpace(); // Obtiene un espacio disponible aleatorio

  if (spaceIndex === null) { // Si no hay espacios disponibles
    console.log('No hay espacios disponibles.'); // Muestra mensaje en consola
    alert('No hay espacios disponibles.'); // Muestra alerta en la interfaz
    return; // Sale de la función
  }

  const confirmParking = confirm(`¿Desea estacionar en el espacio ${spaceIndex + 1}?`); // Pide confirmación para estacionar en el espacio
  if (confirmParking) { // Si se confirma
    parkingSpaces[spaceIndex] = 'Ocupado'; // Marca el espacio como ocupado
    console.log(`Coche estacionado en el espacio ${spaceIndex + 1}.`); // Muestra mensaje en consola
    alert(`Coche estacionado en el espacio ${spaceIndex + 1}.`); // Muestra alerta en la interfaz
  } else { // Si se cancela
    console.log('Estacionamiento cancelado.'); // Muestra mensaje en consola
    alert('Estacionamiento cancelado.'); // Muestra alerta en la interfaz
  }
}

/**
 * Libera un espacio de estacionamiento ocupado.
 */
function leaveParking() {
  showAvailableSpaces(); // Muestra los espacios disponibles
  let spaceIndex = parseInt(prompt('Introduce el número del espacio que se va a liberar:')) - 1; // Pide el número del espacio a liberar

  if (isNaN(spaceIndex) || spaceIndex < 0 || spaceIndex >= TOTAL_SPACES || parkingSpaces[spaceIndex] === null) { // Si la entrada no es válida o el espacio ya está libre
    console.log('Número de espacio inválido o espacio ya está libre.'); // Muestra mensaje en consola
    alert('Número de espacio inválido o el espacio ya está libre.'); // Muestra alerta en la interfaz
    return; // Sale de la función
  }

  const confirmLeave = confirm(`¿Desea liberar el espacio ${spaceIndex + 1}?`); // Pide confirmación para liberar el espacio
  if (confirmLeave) { // Si se confirma
    parkingSpaces[spaceIndex] = null; // Marca el espacio como disponible
    console.log(`Espacio ${spaceIndex + 1} liberado.`); // Muestra mensaje en consola
    alert(`Espacio ${spaceIndex + 1} liberado.`); // Muestra alerta en la interfaz
  } else { // Si se cancela
    console.log('Liberación de espacio cancelada.'); // Muestra mensaje en consola
    alert('Liberación de espacio cancelada.'); // Muestra alerta en la interfaz
  }
}

/**
 * Función principal para gestionar la aplicación.
 */
function main() {
  while (true) { // Bucle infinito para mantener la aplicación en ejecución
    showMenu(); // Muestra el menú principal
    let choice = parseInt(prompt('Selecciona una opción (1-3):')); // Pide una opción del menú

    if (isNaN(choice)) { // Si la entrada no es válida
      console.log('Entrada no válida. Por favor, selecciona una opción del 1 al 3.'); // Muestra mensaje en consola
      alert('Entrada no válida. Por favor, selecciona una opción del 1 al 3.'); // Muestra alerta en la interfaz
      continue; // Continúa con la siguiente iteración del bucle
    }

    switch (choice) { // Evalúa la opción seleccionada
      case 1:
        parkCar(); // Llama a la función para estacionar un coche
        break;
      case 2:
        leaveParking(); // Llama a la función para liberar un espacio
        break;
      case 3:
        const confirmExit = confirm('¿Está seguro de que desea salir de la aplicación?'); // Pide confirmación para salir de la aplicación
        if (confirmExit) { // Si se confirma
          console.clear(); // Limpia la consola
          console.log('Gracias por haber usado la app de cochera.'); // Muestra mensaje de despedida en consola
          alert('Gracias por haber usado la app de cochera.'); // Muestra alerta de despedida en la interfaz
          return; // Sale de la función
        } else { // Si se cancela
          console.log('Salida cancelada.'); // Muestra mensaje en consola
          alert('Salida cancelada.'); // Muestra alerta en la interfaz
        }
        break;
      default:
        console.log('Opción no válida. Por favor, selecciona una opción del 1 al 3.'); // Muestra mensaje en consola si la opción no es válida
        alert('Opción no válida. Por favor, selecciona una opción del 1 al 3.'); // Muestra alerta en la interfaz si la opción no es válida
        break;
    }
  }
}

// Agregar evento al botón para iniciar la aplicación
document.getElementById('startButton').addEventListener('click', main); // Asigna la función main al evento click del botón con id 'startButton'


