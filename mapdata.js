// Archivo de configuración del mapa interactivo de Colombia para Simplemaps
var simplemaps_countrymap_mapdata={ // Objeto principal de configuración
  main_settings: { // Configuración general del mapa
   //General settings
    width: "responsive", // Ancho del mapa (responsive o fijo)
    background_color: "#FFFFFF", // Color de fondo del mapa
    background_transparent: "yes", // Fondo transparente
    border_color: "#000000", // Color de las líneas divisorias entre departamentos
    
    //State defaults
    state_description: "State description", // Descripción por defecto de los estados
    state_color: "#88A4BC", // Color por defecto de los estados
    state_hover_color: "#3B729F", // Color al pasar el mouse sobre un estado
    state_url: "", // URL por defecto al hacer clic en un estado
    border_size: 1.5, // Grosor de las líneas divisorias
    all_states_inactive: "yes", // Todos los estados inactivos por defecto
    all_states_zoomable: "yes", // Permite hacer zoom en los estados
    
    //Location defaults
    location_description: "Location description", // Descripción por defecto de ubicaciones
    location_url: "", // URL por defecto de ubicaciones
    location_color: "#FF0067", // Color de ubicaciones
    location_opacity: 0.8, // Opacidad de ubicaciones
    location_hover_opacity: 1, // Opacidad al pasar el mouse
    location_size: 25, // Tamaño de ubicaciones
    location_type: "square", // Tipo de marcador de ubicación
    location_image_source: "frog.png", // Imagen por defecto para ubicaciones
    location_border_color: "#FFFFFF", // Color del borde de ubicaciones
    location_border: 2, // Grosor del borde de ubicaciones
    location_hover_border: 2.5, // Grosor del borde al pasar el mouse
    all_locations_inactive: "no", // Las ubicaciones están activas
    all_locations_hidden: "no", // Las ubicaciones están visibles
    
    //Label defaults
    label_color: "#ffffff", // Color de las etiquetas
    label_hover_color: "#ffffff", // Color de las etiquetas al pasar el mouse
    label_size: 16, // Tamaño de fuente de las etiquetas
    label_font: "Poppins", // Fuente de las etiquetas
    label_display: "auto", // Mostrar etiquetas automáticamente
    label_scale: "yes", // Escalar etiquetas con el zoom
    hide_labels: "no", // No ocultar etiquetas
    hide_eastern_labels: "no", // No ocultar etiquetas del este
   
    //Zoom settings
    zoom: "yes", // Permitir zoom
    manual_zoom: "yes", // Permitir zoom manual
    back_image: "no", // No usar imagen de fondo
    initial_back: "no", // No mostrar fondo inicial
    initial_zoom: "-1", // Nivel de zoom inicial
    initial_zoom_solo: "no", // No hacer zoom solo a un estado
    region_opacity: 1, // Opacidad de las regiones
    region_hover_opacity: 0.6, // Opacidad al pasar el mouse
    zoom_out_incrementally: "yes", // Zoom out incremental
    zoom_percentage: 0.99, // Porcentaje de zoom
    zoom_time: 0.5, // Duración de la animación de zoom
    
    //Popup settings
    popup_color: "white", // Color del popup
    popup_opacity: 0.9, // Opacidad del popup
    popup_shadow: 1, // Sombra en el popup
    popup_corners: 5, // Bordes redondeados del popup
    popup_font: "Poppins", // Fuente del popup
    popup_nocss: "no", // Usar CSS para el popup
    
    //Advanced settings
    div: "map", // ID del div donde se renderiza el mapa
    auto_load: "yes", // Cargar el mapa automáticamente
    url_new_tab: "no", // No abrir enlaces en nueva pestaña
    images_directory: "default", // Directorio de imágenes
    fade_time: 0.1, // Tiempo de desvanecimiento
    link_text: "View Website", // Texto de los enlaces
    popups: "detect", // Tipo de popup
    state_image_url: "", // Imagen personalizada para estados
    state_image_position: "", // Posición de la imagen
    location_image_url: "" // Imagen personalizada para ubicaciones
  },
  state_specific: { // Configuración individual de cada departamento
    COAMA: {
      name: "Amazonas", // Nombre del departamento
      color: "#4B8A08", // Verde oscuro
      description: "La isla de los Micos", // Descripción personalizada
      inactive: false // Activo/interactivo
    },
    COANT: {
      name: "Antioquia",
      inactive: true // Inactivo/no seleccionable
    },
    COARA: {
      name: "Arauca",
      inactive: true
    },
    COATL: {
      name: "Atlántico",
      inactive: true
    },
    COBOL: {
      name: "Bolívar",
      inactive: true
    },
    COBOY: {
      name: "Boyacá",
      inactive: true
    },
    COCAL: {
      name: "Caldas",
      inactive: true
    },
    COCAQ: {
      name: "Caquetá",
      inactive: true
    },
    COCAS: {
      name: "Casanare",
      inactive: true
    },
    COCAU: {
      name: "Cauca",
      inactive: true
    },
    COCES: {
      name: "Cesar",
      inactive: true
    },
    COCHO: {
      name: "Chocó",
      inactive: true
    },
    COCOR: {
      name: "Córdoba",
      inactive: true
    },
    COCUN: {
      name: "Cundinamarca",
      inactive: true
    },
    CODC: {
      name: "Distrito Capital de Bogotá",
      inactive: true
    },
    COGUA: {
      name: "Guainía",
      inactive: true
    },
    COGUV: {
      name: "Guaviare",
      inactive: true
    },
    COHUI: {
      name: "Huila",
      inactive: true
    },
    COLAG: {
      name: "La Guajira",
      color: "#FFD700", // Amarillo
      description: "Cabo de la Vela",
      inactive: false // Activo/interactivo
    },
    COMAG: {
      name: "Magdalena",
      color: "#E74C3C", // Rojo
      description: "La Ciudad Perdida",
      inactive: false // Activo/interactivo
    },
    COMET: {
      name: "Meta",
      color: "#FF8C00", // Naranja oscuro
      description: "Caño Cristales",
      inactive: false // Activo/interactivo
    },
    CONAR: {
      name: "Nariño",
      inactive: true
    },
    CONSA: {
      name: "Norte de Santander",
      inactive: true
    },
    COPUT: {
      name: "Putumayo",
      inactive: true
    },
    COQUI: {
      name: "Quindío",
      inactive: true
    },
    CORIS: {
      name: "Risaralda",
      inactive: true
    },
    COSAN: {
      name: "Santander",
      inactive: true
    },
    COSAP: {
      name: "San Andrés y Providencia",
      inactive: true
    },
    COSUC: {
      name: "Sucre",
      inactive: true
    },
    COTOL: {
      name: "Tolima",
      inactive: true
    },
    COVAC: {
      name: "Valle del Cauca",
      color: "#3498DB", // Azul
      description: "Bahía Uramba",
      inactive: false // Activo/interactivo
    },
    COVAU: {
      name: "Vaupés",
      inactive: true
    },
    COVID: {
      name: "Vichada",
      inactive: true
    }
  },
  locations: {}, // Ubicaciones personalizadas (vacío en este caso)
  labels: { // Etiquetas de los departamentos
    COAMA: {
      name: "Amazonas",
      parent_id: "COAMA"
    },
    COANT: {
      name: "Antioquia",
      parent_id: "COANT"
    },
    COARA: {
      name: "Arauca",
      parent_id: "COARA"
    },
    COATL: {
      name: "Atlántico",
      parent_id: "COATL"
    },
    COBOL: {
      name: "Bolívar",
      parent_id: "COBOL"
    },
    COBOY: {
      name: "Boyacá",
      parent_id: "COBOY"
    },
    COCAL: {
      name: "Caldas",
      parent_id: "COCAL"
    },
    COCAQ: {
      name: "Caquetá",
      parent_id: "COCAQ"
    },
    COCAS: {
      name: "Casanare",
      parent_id: "COCAS"
    },
    COCAU: {
      name: "Cauca",
      parent_id: "COCAU"
    },
    COCES: {
      name: "Cesar",
      parent_id: "COCES"
    },
    COCHO: {
      name: "Chocó",
      parent_id: "COCHO"
    },
    COCOR: {
      name: "Córdoba",
      parent_id: "COCOR"
    },
    COCUN: {
      name: "Cundinamarca",
      parent_id: "COCUN"
    },
    CODC: {
      name: "Distrito Capital de Bogotá",
      parent_id: "CODC"
    },
    COGUA: {
      name: "Guainía",
      parent_id: "COGUA"
    },
    COGUV: {
      name: "Guaviare",
      parent_id: "COGUV"
    },
    COHUI: {
      name: "Huila",
      parent_id: "COHUI"
    },
    COLAG: {
      name: "La Guajira",
      parent_id: "COLAG"
    },
    COMAG: {
      name: "Magdalena",
      parent_id: "COMAG"
    },
    COMET: {
      name: "Meta",
      parent_id: "COMET"
    },
    CONAR: {
      name: "Nariño",
      parent_id: "CONAR"
    },
    CONSA: {
      name: "Norte de Santander",
      parent_id: "CONSA"
    },
    COPUT: {
      name: "Putumayo",
      parent_id: "COPUT"
    },
    COQUI: {
      name: "Quindío",
      parent_id: "COQUI"
    },
    CORIS: {
      name: "Risaralda",
      parent_id: "CORIS"
    },
    COSAN: {
      name: "Santander",
      parent_id: "COSAN"
    },
    COSAP: {
      name: "San Andrés y Providencia",
      parent_id: "COSAP"
    },
    COSUC: {
      name: "Sucre",
      parent_id: "COSUC"
    },
    COTOL: {
      name: "Tolima",
      parent_id: "COTOL"
    },
    COVAC: {
      name: "Valle del Cauca",
      parent_id: "COVAC"
    },
    COVAU: {
      name: "Vaupés",
      parent_id: "COVAU"
    },
    COVID: {
      name: "Vichada",
      parent_id: "COVID"
    }
  },
  legend: {
    entries: [] // Leyenda del mapa (vacía)
  },
  regions: { // Regiones personalizadas (no usadas aquí)
    "0": {
      states: [],
      name: "Orinoquia"
    },
    "1": {
      states: [],
      name: "Amazonia"
    }
  }
};