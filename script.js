const originalQuizData = [
    {
        question: "UNIDAD 6: ¿Cuál es la función principal de un sistema de archivos?",
        options: [
            "Compilar código fuente en lenguaje máquina.",
            "Organizar y almacenar información.",
            "Monitorear la temperatura del procesador.",
            "Gestionar las conexiones de red inalámbricas."
        ],
        correct: 1,
        explanation: "Un sistema de archivos administra cómo se almacenan, organizan y recuperan los datos en un dispositivo de almacenamiento."
    },
    {
        question: "UNIDAD 7: ¿Cuál de las siguientes NO es una de las cuatro condiciones de Coffman necesarias para que ocurra un bloqueo?",
        options: [
            "Exclusión mutua.",
            "Retención y espera.",
            "Planificación por turno rotativo (round robin).",
            "No apropiación."
        ],
        correct: 2,
        explanation: "La planificación por turno rotativo (round robin) es un algoritmo de planificación de CPU, no una de las condiciones de interbloqueo de Coffman."
    },
    {
        question: "UNIDAD 7: En el grafo de asignación de recursos, si existe un ciclo y cada recurso involucrado tiene una única instancia, ¿qué se puede afirmar?",
        options: [
            "Existe un bloqueo con certeza.",
            "El sistema se encuentra en un estado seguro.",
            "El ciclo se resolverá automáticamente.",
            "No es posible determinar el estado del sistema."
        ],
        correct: 0,
        explanation: "Si cada recurso tiene una sola instancia, la existencia de un ciclo en el grafo es condición necesaria y suficiente para que exista un bloqueo genérico."
    },
    {
        question: "UNIDAD 7: En la estrategia de detección y recuperación, ¿qué riesgo se busca evitar al elegir repetidamente una misma 'víctima' para apropiarle recursos o terminarla?",
        options: [
            "Interbloqueo secundario.",
            "Inanición (starvation) de ese proceso.",
            "Fragmentación de la memoria principal.",
            "Sobrecarga del planificador de procesos."
        ],
        correct: 1,
        explanation: "Si se elige siempre al mismo proceso como víctima, este nunca terminará su ejecución, provocando inanición (starvation)."
    },
    {
        question: "UNIDAD 7: Según el algoritmo del banquero, ¿qué ocurre cuando conceder una solicitud llevaría a un estado inseguro?",
        options: [
            "El sistema operativo termina el proceso de inmediato.",
            "Se asignan los recursos temporalmente por unos ciclos.",
            "La solicitud se pospone, aunque los recursos estén disponibles.",
            "Se duplican los recursos disponibles de manera virtual."
        ],
        correct: 2,
        explanation: "Para evitar interbloqueos, si la asignación conduce a un estado inseguro, el proceso debe esperar (la solicitud se pospone) aunque haya recursos libres en ese instante."
    },
    {
        question: "UNIDAD 7: ¿Cuál es la técnica de prevención más usada en la práctica para atacar la condición de espera circular?",
        options: [
            "Imponer un orden total sobre los tipos de recursos y solicitarlos en orden creciente.",
            "Permitir la apropiación arbitraria de cualquier recurso activo.",
            "Evitar que los procesos soliciten más de un recurso a la vez.",
            "Asignar todos los recursos necesarios al inicio del proceso."
        ],
        correct: 0,
        explanation: "Obligar a que los recursos se soliciten siguiendo un orden lineal numérico estricto previene matemáticamente la posibilidad de cerrar un ciclo de espera."
    },
    {
        question: "UNIDAD 8: ¿En qué laboratorio y sobre qué máquina nació Unix en 1969?",
        options: [
            "Bell Labs, sobre una PDP-7.",
            "IBM Research, sobre un mainframe System/360.",
            "Xerox PARC, sobre una Alto.",
            "MIT, sobre una PDP-10."
        ],
        correct: 0,
        explanation: "Unix nació en Bell Labs y fue desarrollado inicialmente por Ken Thompson y Dennis Ritchie sobre una PDP-7, después del abandono del proyecto Multics."
    },
    {
        question: "UNIDAD 8: ¿Por qué la reescritura de Unix en lenguaje C en 1973 fue una decisión fundamental para su evolución?",
        options: [
            "Porque permitió incorporar una interfaz gráfica moderna.",
            "Porque permitió portar Unix a diferentes tipos de hardware sin tener que reescribirlo completamente desde cero.",
            "Porque convirtió Unix en un sistema operativo de un solo usuario.",
            "Porque eliminó la necesidad de utilizar memoria RAM física."
        ],
        correct: 1,
        explanation: "Al abandonar el ensamblador específico de la PDP-7 y utilizar C, Unix dejó de estar tan ligado a un hardware concreto y pudo adaptarse con mayor facilidad a otras máquinas."
    },
    {
        question: "UNIDAD 8: ¿Qué concepto representa mejor la filosofía de Unix conocida como 'todo es un archivo'?",
        options: [
            "Todos los archivos deben almacenarse en un único directorio.",
            "Los discos son los únicos recursos que pueden tratarse como archivos.",
            "Diferentes recursos del sistema, como discos, terminales e impresoras, pueden manejarse mediante una interfaz similar a la de los archivos.",
            "Todos los programas deben estar almacenados dentro de archivos de texto."
        ],
        correct: 2,
        explanation: "Unix desarrolló la idea de tratar diferentes recursos mediante mecanismos similares a los utilizados para los archivos. Esta filosofía permitió construir herramientas pequeñas que podían combinarse entre sí."
    },
    {
        question: "UNIDAD 8: ¿Qué problema histórico de arquitectura de memoria heredó MS-DOS desde 1981?",
        options: [
            "Una limitación estricta de 640 KB de memoria convencional.",
            "La incapacidad de utilizar discos duros externos.",
            "Un fallo estructural que borraba la memoria swap al apagar el equipo.",
            "La falta de soporte para paginación de memoria virtual dinámica."
        ],
        correct: 0,
        explanation: "MS-DOS heredó una limitación de 640 KB de memoria convencional del IBM PC en 1981. Aunque al inicio parecía suficiente, el crecimiento de los programas la convirtió en una restricción importante a largo plazo."
    },
    {
        question: "UNIDAD 8: ¿Qué diferencia fundamental introdujo Windows NT respecto de MS-DOS y las primeras versiones de Windows?",
        options: [
            "Eliminó completamente la línea de comandos.",
            "Introdujo protección de memoria y multitarea real.",
            "Eliminó el uso de sistemas de archivos.",
            "Utilizó por primera vez nombres de archivos de 8+3 caracteres."
        ],
        correct: 1,
        explanation: "Windows NT incorporó características fundamentales que DOS no tenía, especialmente protección de memoria entre procesos y multitarea real."
    },
    {
        question: "UNIDAD 8: ¿Qué combinación permitió formar un sistema completo alrededor del kernel Linux desarrollado por Linus Torvalds?",
        options: [
            "El kernel Linux junto con las herramientas del proyecto GNU.",
            "MS-DOS junto con el kernel Linux.",
            "El kernel BSD junto con Windows NT.",
            "Unix junto con Android."
        ],
        correct: 0,
        explanation: "Linux corresponde al kernel desarrollado por Linus Torvalds. Al combinarlo con las herramientas y programas del proyecto GNU se formó un sistema completo conocido como GNU/Linux."
    },
    {
        question: "UNIDAD 8: ¿Cómo se relacionan históricamente Unix, BSD, macOS e iOS?",
        options: [
            "macOS e iOS descienden directamente de MS-DOS.",
            "BSD surgió como una rama desarrollada en Berkeley, y Apple heredó mediante la adquisición de NeXT un sistema basado en Unix que dio origen a Mac OS X y sirvió de base tecnológica para iOS.",
            "iOS fue creado a partir del kernel Linux utilizado por Android.",
            "macOS fue desarrollado originalmente como una distribución de Linux."
        ],
        correct: 1,
        explanation: "Berkeley desarrolló su propia rama de Unix conocida como BSD. Apple adquirió NeXT en 1997 y heredó un sistema basado en Unix. En 2001 apareció Mac OS X y posteriormente iOS reutilizó gran parte de esa base técnica."
    },
    {
        question: "UNIDAD 8: ¿Por qué surgieron estándares como POSIX dentro del ecosistema Unix?",
        options: [
            "Porque todos los sistemas Unix eran exactamente iguales y necesitaban una interfaz gráfica común.",
            "Porque la diversidad de implementaciones Unix hacía necesario establecer interfaces comunes para facilitar la portabilidad de programas.",
            "Porque POSIX reemplazó completamente al kernel Unix.",
            "Porque POSIX fue creado específicamente para ejecutar aplicaciones de Android."
        ],
        correct: 1,
        explanation: "La aparición de diferentes variantes de Unix produjo diferencias entre sistemas. POSIX estableció interfaces y comportamientos comunes para facilitar que los programas pudieran ser trasladados entre diferentes sistemas compatibles."
    },
        {
        question: "UNIDAD 8: ¿Cuál es una diferencia fundamental entre Android e iOS según sus modelos arquitectónicos?",
        options: [
            "Android utiliza un kernel Linux y está diseñado para funcionar en dispositivos de numerosos fabricantes, mientras que iOS está ligado al hardware de Apple y utiliza una base tecnológica relacionada con Darwin, BSD y Unix.",
            "Android utiliza Windows NT mientras que iOS utiliza MS-DOS.",
            "Android e iOS utilizan exactamente el mismo kernel.",
            "iOS está basado directamente en MS-DOS mientras que Android utiliza Unix original."
        ],
        correct: 0,
        explanation: "Android utiliza Linux como parte fundamental de su base y se distribuye en dispositivos de numerosos fabricantes. iOS, en cambio, forma parte de un ecosistema controlado por Apple y tiene una base técnica relacionada con Darwin, BSD y Unix."
    },
    {
        question: "UNIDAD 8: Un usuario ejecuta el comando 'ls -l' en un sistema Unix. ¿Cuál describe mejor el proceso que ocurre?",
        options: [
            "El teclado envía directamente el resultado al disco sin intervención del sistema operativo.",
            "El shell interpreta el comando, solicita al sistema operativo la ejecución, el sistema de archivos obtiene la información necesaria y el resultado vuelve a través de la terminal hasta la pantalla.",
            "Bash reemplaza completamente al sistema operativo y accede directamente al hardware sin intermediarios.",
            "El comando se ejecuta únicamente dentro del sistema de archivos sin intervención del shell."
        ],
        correct: 1,
        explanation: "El usuario introduce el comando mediante la terminal. El shell (como Bash) interpreta la orden y solicita al sistema operativo que ejecute el programa. El sistema interactúa con el sistema de archivos y el almacenamiento para obtener la información, mostrando el resultado en la terminal."
    },
    {
        question: "SISTEMAS DE ARCHIVOS: ¿Qué es un 'i-nodo' (inode) en sistemas de archivos tipo Unix?",
        options: [
            "Un tipo de virus que corrompe el disco duro.",
            "Una estructura de datos que contiene los metadatos de un archivo.",
            "Un puerto físico para conectar unidades externas.",
            "Un protocolo de compresión de archivos multimedia."
        ],
        correct: 1,
        explanation: "El i-nodo almacena la información de un archivo (tamaño, permisos, dueño, ubicación en el disco), excepto su nombre y el contenido real."
    },
    {
        question: "BLOQUEOS: ¿Cuál es la diferencia principal entre 'Prevención' y 'Evitación' de bloqueos?",
        options: [
            "La prevención elimina la posibilidad del bloqueo rompiendo las condiciones de Coffman; la evitación decide dinámicamente según el estado del sistema.",
            "La prevención actúa después de que ocurre el bloqueo; la evitación actúa antes.",
            "La evitación solo funciona en sistemas monousuario y la prevención en multiusuario.",
            "No existe ninguna diferencia, son sinónimos en sistemas operativos."
        ],
        correct: 0,
        explanation: "La prevención diseña el sistema para que el bloqueo sea estructuralmente imposible. La evitación (como el Algoritmo del Banquero) analiza cada solicitud en tiempo real para evaluar riesgos."
    },
    {
        question: "SISTEMAS DE ARCHIVOS: En la asignación indexada de archivos, ¿cuál es su principal ventaja sobre la asignación contigua?",
        options: [
            "No requiere el uso de memoria RAM para la lectura.",
            "Elimina por completo la fragmentación externa y permite crecimiento dinámico del archivo.",
            "Es mucho más lenta pero más segura ante cortes de energía.",
            "Obliga a que todos los archivos tengan exactamente el mismo tamaño."
        ],
        correct: 1,
        explanation: "Al usar bloques de índices dispersos por el disco, los archivos pueden crecer dinámicamente ocupando cualquier bloque libre, eliminando la necesidad de bloques contiguos."
    },
    {
        question: "ESTUDIO DE SISTEMAS: ¿Cuál es la característica principal de un Micronúcleo (Microkernel)?",
        options: [
            "Es un núcleo diseñado exclusivamente para computadoras miniatura.",
            "Mantiene solo los servicios mínimos esenciales en el espacio del núcleo y ejecuta el resto en el espacio de usuario.",
            "No permite la ejecución de múltiples procesos simultáneos.",
            "Es un núcleo que no requiere un sistema de archivos para operar."
        ],
        correct: 1,
        explanation: "Un microkernel reduce el código del núcleo al mínimo (gestión de memoria básica, hilos e IPC) mejorando la modularidad y estabilidad del sistema."
    },
    // --- UNIDAD 9: SISTEMAS OPERATIVOS DISTRIBUIDOS ---
    {
        question: "UNIDAD 9: ¿Qué capa de software permite integrar sistemas heterogéneos actuando entre las aplicaciones y el sistema operativo?",
        options: [
            "El Firmware del dispositivo.",
            "El Middleware.",
            "El Controlador de Dispositivo (Driver).",
            "El Cargador de Arranque (Bootloader)."
        ],
        correct: 1,
        explanation: "El Middleware actúa como un traductor y enlace entre plataformas y sistemas heterogéneos, permitiendo la comunicación en red."
    },
    {
        question: "UNIDAD 9: ¿Cuál es el objetivo que busca ocultar la distribución física de los recursos para que el sistema se perciba como una sola computadora?",
        options: [
            "Consistencia",
            "Disponibilidad masiva",
            "Transparencia",
            "Replicación estricta"
        ],
        correct: 2,
        explanation: "La Transparencia garantiza que los usuarios e ingenieros utilicen recursos remotos exactamente igual que si fueran locales."
    },
    {
        question: "UNIDAD 9: En las arquitecturas de hardware, ¿qué caracteriza a los sistemas fuertemente acoplados?",
        options: [
            "Comparten la misma memoria física y reloj.",
            "Tienen relojes e infraestructuras de memoria aisladas en cada CPU.",
            "Dependen exclusivamente de conexiones de red inalámbricas de largo alcance.",
            "Se comunican mediante intercambio de archivos de texto estructurado."
        ],
        correct: 0,
        explanation: "Los sistemas fuertemente acoplados (como multiprocesadores) comparten la memoria física central y tienen una sincronización de reloj en tiempo real de alta velocidad."
    },
    {
        question: "UNIDAD 9: ¿En qué modelo de software el usuario NO percibe dónde se ejecutan sus procesos debido a una gestión global de recursos?",
        options: [
            "Sistema Operativo de Red (NOS)",
            "Sistema Operativo Distribuido (DOS)",
            "Sistema de Tiempo Real Estricto (RTOS)",
            "Sistema de Almacenamiento NAS"
        ],
        correct: 1,
        explanation: "En un DOS (Distributed Operating System), el usuario ve el pool completo de hardware como una única máquina global uniforme."
    },
    {
        question: "UNIDAD 9: ¿Qué modelo arquitectónico de SO se menciona como un aspecto crítico de diseño para brindar flexibilidad?",
        options: [
            "Núcleo Monolítico",
            "Micronúcleo (Microkernel)",
            "Núcleo Híbrido Protegido",
            "Exonúcleo Abierto"
        ],
        correct: 1,
        explanation: "Un Microkernel permite añadir y remover servicios distribuidos de forma modular fuera del espacio del núcleo sin comprometer todo el sistema."
    },
    {
        question: "UNIDAD 9: ¿Qué objetivo de los sistemas distribuidos permite agregar más computadoras fácilmente si la carga de trabajo aumenta?",
        options: [
            "Seguridad de Perímetro",
            "Escalabilidad",
            "Portabilidad Estándar",
            "Sincronización Cuántica"
        ],
        correct: 1,
        explanation: "La escalabilidad define el potencial de un sistema distribuido para incrementar su tamaño o capacidad sin perder rendimiento."
    },
    {
        question: "UNIDAD 9: ¿Cómo se denominan los equipos en los sistemas débilmente acoplados que poseen su propia memoria local y procesador?",
        options: [
            "Multicomputadoras",
            "Sistemas SIMD Centralizados",
            "Mainframes de Procesamiento Simétrico",
            "Unidades de Coprocesamiento Integrado"
        ],
        correct: 0,
        explanation: "Las multicomputadoras son nodos individuales conectados por red donde cada máquina procesa de forma autónoma con sus propios recursos de memoria local."
    },
    {
        question: "UNIDAD 9: En un Sistema Operativo de Red (NOS), ¿cuál es la característica principal respecto al usuario?",
        options: [
            "Los usuarios ven todo como un único procesador virtual único.",
            "Los usuarios son conscientes de las máquinas individuales y usan comandos explícitos.",
            "Los usuarios no requieren autenticación para acceder a archivos locales.",
            "El sistema asigna la máquina de cómputo de manera automática y secreta."
        ],
        correct: 1,
                explanation: "La tolerancia a fallos asegura la redundancia necesaria para que el sistema continúe prestando servicios correctos ante averías físicas parciales."
    },
    {
        question: "UNIDAD 9: ¿Qué protocolo o herramientas se mencionan para lograr la sincronización de tiempos en los sistemas distribuidos?",
        options: [
            "El protocolo NTP y Relojes de Lamport.",
            "El protocolo HTTP y APIs REST.",
            "El sistema DNS y certificados SSL.",
            "Algoritmo Dijkstra de enrutamiento estático."
        ],
        correct: 0,
        explanation: "NTP se usa para sincronizar relojes físicos reales vía red y los Relojes de Lamport se aplican para ordenar eventos de forma lógica."
    },
    // --- UNIDAD 10: SEGURIDAD EN SISTEMAS OPERATIVOS ---
    {
        question: "UNIDAD 10: ¿Cuáles son las tres propiedades clásicas que la seguridad de un sistema operativo debe garantizar?",
        options: [
            "Confidencialidad, Integridad y Disponibilidad.",
            "Velocidad, Escalabilidad y Rendimiento.",
            "Autenticación, Encriptación y Criptografía.",
            "Prevención, Detección y Aislamiento de Red."
        ],
        correct: 0,
        explanation: "Es la tríada CIA (Confidentiality, Integrity, Availability): Pilares básicos de la ciberseguridad informática."
    },
    {
        question: "UNIDAD 10: ¿Qué diferencia existe entre una amenaza pasiva y una amenaza activa?",
        options: [
            "La pasiva solo observa y recopila; la activa modifica, borra o bloquea el sistema.",
            "La pasiva requiere permisos de root; la activa ataca sin privilegios de administrador.",
            "La pasiva daña el hardware del equipo; la activa modifica código de software.",
            "No hay diferencias, ambas realizan cambios destructivos permanentes."
        ],
        correct: 0,
        explanation: "Las amenazas pasivas (como sniffing/escuchas) violan la confidencialidad sin alterar los datos del sistema. Las activas atacan directamente la integridad o disponibilidad."
    },
    {
        question: "UNIDAD 10: ¿Qué tipo de malware se propaga solo a través de la red, sin que el usuario abra ningún archivo?",
        options: [
            "El gusano (worm).",
            "El troyano (trojan).",
            "El spyware corporativo.",
            "El virus ejecutable clásico."
        ],
        correct: 0,
        explanation: "Los gusanos aprovechan vulnerabilidades activas de los servicios de red para autoreplicarse y saltar de máquina en máquina de forma autónoma."
    },
    {
        question: "UNIDAD 10: En Linux, ¿qué mecanismo de control de acceso obligatorio asigna contextos y políticas a procesos y archivos?",
        options: [
            "Los permisos clásicos chmod 777.",
            "SELinux o AppArmor.",
            "El sistema de cuotas de disco.",
            "La lista de usuarios en /etc/passwd."
        ],
        correct: 1,
        explanation: "SELinux y AppArmor proveen MAC (Mandatory Access Control) para restringir procesos incluso si el usuario root los está ejecutando."
    },
    {
        question: "UNIDAD 10: ¿Qué componente de macOS impide modificar archivos protegidos del sistema, incluso para el usuario root?",
        options: [
            "FileVault de cifrado completo.",
            "SIP (System Integrity Protection).",
            "El firewall de conexiones entrantes.",
            "Gatekeeper de validación de firmas."
        ],
        correct: 1,
        explanation: "System Integrity Protection (SIP) restringe el acceso de modificación a directorios críticos del sistema (/System, /usr, /bin, /sbin) protegiéndolos contra malware avanzado."
    },
    {
        question: "UNIDAD 10: ¿Cuál es la principal ventaja de una configuración RAID 1 frente a RAID 0?",
        options: [
            "Ofrece espejado: el sistema sigue funcionando si cae un disco.",
            "Duplica la velocidad de escritura combinando ambos discos en paralelo.",
            "Reduce el espacio de almacenamiento a la mitad de forma automática.",
            "No requiere controladoras físicas dedicadas en la placa madre."
        ],
        correct: 0,
        explanation: "RAID 1 hace un clon idéntico (espejo) entre discos. Si un disco falla físicamente, los datos siguen accesibles inmediatamente en el otro sin detener el sistema."
    },
    {
        question: "UNIDAD 10: ¿Qué se afirma correctamente sobre el Journaling de un sistema de archivos?",
        options: [
            "Comprime de forma automática archivos obsoletos.",
            "Registra la intención de las operaciones para recuperar la consistencia tras una caída.",
            "Evita los ataques de inyección de código binario en memoria.",
            "Permite encriptar el disco con claves asimétricas de alta seguridad."
        ],
        correct: 1,
        explanation: "El registro diario (journal) escribe un historial rápido de lo que se va a hacer. Si hay un apagón repentino, el SO revisa este registro para no corromper la estructura de datos interna."
    },
    {
        question: "UNIDAD 10: ¿Qué dos componentes son obligatorios desde Windows 11 para arrancar de forma segura?",
        options: [
            "TPM 2.0 and Secure Boot.",
            "DirectX 12 y Framework .NET.",
            "Unidad SSD NVMe y cuenta de correo Outlook.",
            "Antivirus Defender y partición EXT4."
        ],
        correct: 0,
        explanation: "Microsoft exige por seguridad hardware criptográfico TPM 2.0 y Secure Boot activo en la UEFI para mitigar rootkits y vulnerabilidades en la secuencia crítica de arranque."
    },
    {
        question: "UNIDAD 10: ¿Cómo se denomina al hacker que trabaja con autorización formal, prueba la seguridad y reporta sus hallazgos?",
        options: [
            "Hacker de Sombrero Negro (Black Hat)",
            "Script Kiddie amateur",
            "Hacker Ético (White Hat)",
            "Hacktivista Político"
        ],
        correct: 2,
        explanation: "Los hackers de sombrero blanco utilizan sus habilidades con permiso legal para auditar sistemas, encontrar debilidades y reportarlas para que se mitiguen."
    },
    {
        question: "UNIDAD 10: ¿Cuál es el principal vector de entrada del malware en Android?",
        options: [
            "La instalación de APK de fuentes desconocidas.",
            "Recibir mensajes SMS en texto plano.",
            "Conectarse a redes Bluetooth en espacios públicos.",
            "Utilizar audífonos inalámbricos de marcas genéricas."
        ],
        correct: 0,
        explanation: "El 'sideloading' o instalación de APKs por fuera de las tiendas oficiales salta los controles de seguridad y es el método más común de infección en smartphones."
    },
    {
        question: "UNIDAD 10: ¿Cuál es la política de cortafuegos (firewall) más segura para un servidor?",
        options: [
            "Permitir todo por defecto y bloquear IPs sospechosas de forma manual.",
            "Denegar todo por defecto y abrir solo los puertos necesarios.",
            "Mantener todos los puertos abiertos pero encriptar el tráfico.",
            "Bloquear todo el tráfico entrante y saliente permanentemente."
        ],
        correct: 1,
        explanation: "La política de 'Denegación por Defecto' (Default Deny) garantiza el principio de mínimo privilegio, asegurando que nada pase a menos que esté explícitamente autorizado."
    },
    {
        question: "UNIDAD 10: ¿Qué norma ISO regula directamente la seguridad de la información?",
        options: [
            "ISO 9001",
            "ISO/IEC 27001",
            "ISO 14001",
            "ISO 50001"
        ],
        correct: 1,
        explanation: "La norma ISO/IEC 27001 es el estándar internacional para el despliegue de Sistemas de Gestión de Seguridad de la Información (SGSI)."
    },
    // --- UNIDAD 11: INSTALACIÓN DE VIRTUALBOX Y ALMALINUX 9 ---
    {
        question: "UNIDAD 11: ¿Quién creó originalmente VirtualBox y en qué año?",
        options: [
            "Innotek GmbH en 2007",
            "Oracle Corporation en 2010",
            "Red Hat Inc. en 2015",
            "VMware Inc. en 2001"
        ],
        correct: 0,
        explanation: "VirtualBox fue creado por la empresa alemana Innotek GmbH en 2007, pasando posteriormente a manos de Sun Microsystems y luego a Oracle."
    },
    {
        question: "UNIDAD 11: ¿Qué tipo de hipervisor es VirtualBox?",
        options: [
            "Tipo 1 (Nativo / Bare-metal)",
            "Tipo 2 (Hosted / Sobre un sistema anfitrión)",
            "Tipo híbrido de hardware puro",
            "Microkernel integrado"
        ],
        correct: 1,
        explanation: "Es un hipervisor Tipo 2 porque necesita ejecutarse encima de un sistema operativo anfitrión ya instalado (como Windows, macOS o Linux)."
    },
    {
        question: "UNIDAD 11: ¿Cuál es el tamaño mínimo de disco recomendado para instalar AlmaLinux 9 en una máquina virtual?",
        options: [
            "5 GB",
            "10 GB",
            "20 GB",
            "80 GB"
        ],
        correct: 2,
        explanation: "Se recomienda un espacio mínimo de 20 GB en disco para albergar los paquetes del sistema y contar con margen operativo elemental."
    },
    {
        question: "UNIDAD 11: ¿Cómo se llama el instalador gráfico utilizado por AlmaLinux 9?",
        options: [
            "Calamares Installer",
            "Anaconda",
            "Yast Setup",
            "Debian Installer"
        ],
        correct: 1,
        explanation: "Anaconda es el instalador gráfico predeterminado utilizado históricamente por Red Hat Enterprise Linux, Fedora, CentOS y AlmaLinux."
    },
    {
        question: "UNIDAD 11: ¿En qué año y por qué empresa fue creado AlmaLinux?",
        options: [
            "2021, por CloudLinux",
            "2019, por Red Hat",
            "2023, por la Fundación Linux",
            "2020, por Canonical"
        ],
        correct: 0,
        explanation: "AlmaLinux nació en 2021 creado por CloudLinux como una alternativa comunitaria, gratuita y estable tras el cambio de rumbo de CentOS hacia CentOS Stream."
    },
    {
        question: "UNIDAD 11: ¿Cuál es la principal diferencia entre AlmaLinux y RHEL?",
        options: [
            "RHEL utiliza arquitectura ARM y AlmaLinux solo x86.",
            "RHEL requiere una suscripción paga; AlmaLinux es completamente gratuito.",
            "RHEL es un micronúcleo y AlmaLinux es monolítico.",
            "No comparten compatibilidad de binarios ni de paquetes de software."
        ],
        correct: 1,
        explanation: "AlmaLinux está diseñado para ser 100% compatible a nivel binario con RHEL (Red Hat Enterprise Linux), pero sin los costos de licenciamiento corporativo."
    },
    {
        question: "UNIDAD 11: ¿Cuál es el sistema de archivos predeterminado en AlmaLinux 9?",
        options: [
            "EXT4",
            "NTFS",
            "XFS",
            "Btrfs"
        ],
        correct: 2,
        explanation: "Al pertenecer a la familia RHEL, AlmaLinux utiliza XFS de forma nativa debido a su alta escalabilidad y óptimo rendimiento con grandes volúmenes de datos."
    },
    {
        question: "UNIDAD 11: ¿Qué partición almacena el kernel y los archivos necesarios para el arranque del sistema?",
        options: [
            "/root",
            "/home",
            "/boot",
            "/var"
        ],
        correct: 2,
        explanation: "La partición `/boot` aloja los archivos estáticos necesarios para arrancar el ordenador, incluyendo el cargador GRUB y las imágenes del Kernel Linux."
    },
    {
        question: "UNIDAD 11: ¿Qué gestor de paquetes utiliza AlmaLinux, por pertenecer a la familia Fedora/RHEL?",
        options: [
            "apt",
            "pacman",
            "dnf",
            "zypper"
        ],
        correct: 2,
        explanation: "DNF (Dandified YUM) es el gestor moderno encargado de instalar, actualizar y resolver dependencias de paquetes `.rpm` en esta familia de distribuciones."
    },
    {
        question: "UNIDAD 11: ¿Qué comando se utiliza en Linux para crear un directorio?",
        options: [
            "rmdir",
            "mkdir",
            "touch",
            "cd"
        ],
        correct: 1,
        explanation: "El comando `mkdir` (make directory) crea uno o más directorios en la ruta especificada de la consola."
    }
];

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextButton = document.getElementById("next-btn");
const explanationBox = document.getElementById("explanation-box");
const progressTextEl = document.getElementById("progress-text");
const progressBarFill = document.getElementById("progress-bar-fill");
const quizBox = document.getElementById("quiz");
const resultBox = document.getElementById("result-box");
const scoreTextEl = document.getElementById("score-text");

function startNewQuizSession() {
    currentQuestionIndex = 0;
    score = 0;
    
    quizData = JSON.parse(JSON.stringify(originalQuizData));
    
    shuffleArray(quizData);
    
    quizData.forEach(item => {
        const correctText = item.options[item.correct];
        shuffleArray(item.options);
        item.correct = item.options.indexOf(correctText);
    });

    loadQuiz();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuiz() {
    resetState();
    const currentQuiz = quizData[currentQuestionIndex];
    
    const progressPercentage = (currentQuestionIndex / quizData.length) * 100;
    progressBarFill.style.width = `${progressPercentage}%`;
    
    progressTextEl.innerText = `Pregunta ${currentQuestionIndex + 1} de ${quizData.length}`;
    questionEl.innerText = currentQuiz.question;
    
    optionButtons.forEach((button, index) => {
        button.innerText = currentQuiz.options[index];
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    explanationBox.classList.add("hidden");
    explanationBox.innerText = "";
    optionButtons.forEach(button => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function selectOption(selectedIndex) {
    const currentQuiz = quizData[currentQuestionIndex];
    const correctIndex = currentQuiz.correct;

    optionButtons.forEach(button => button.disabled = true);

    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].classList.add("correct");
        score++;
    } else {
        optionButtons[selectedIndex].classList.add("wrong");
        optionButtons[correctIndex].classList.add("correct");
    }

    explanationBox.innerHTML = `<strong>Explicación:</strong> ${currentQuiz.explanation}`;
    explanationBox.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    
    progressBarFill.style.width = "100%";
    
    const percent = Math.round((score / quizData.length) * 100);
    scoreTextEl.innerHTML = `Has contestado correctamente <strong>${score} de ${quizData.length}</strong> preguntas.<br><br>Tu calificación final es de: <strong>${percent}%</strong>`;
}

function restartQuiz() {
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    startNewQuizSession();
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const toggleBtn = document.getElementById("theme-toggle");
    
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️ Modo Claro";
    } else {
        toggleBtn.innerText = "🌙 Modo Oscuro";
    }
}

startNewQuizSession();

