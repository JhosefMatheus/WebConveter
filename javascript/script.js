const options_data_storage = [
    "Bit",
    "Kilobit",
    "Kibibit",
    "Megabit",
    "Mebibit",
    "Gigabit",
    "Gibibit",
    "Terabit",
    "Tebibit",
    "Petabit",
    "Pebibit",
    "Byte",
    "Kilobyte",
    "Kibibyte",
    "Megabyte",
    "Mebibyte",
    "Gigabyte",
    "Gibibyte",
    "Terabyte",
    "Tebibyte",
    "Petabyte",
    "Pebibyte"
];

const options_length = [
    "Quilômetro",
    "Metro",
    "Centímetro",
    "Milímetro",
    "Micrômetro",
    "Nanômetro",
    "Milha",
    "Jarda",
    "Pé",
    "Polegada",
    "Milha náutica"
];

const options_fuel_consumption = [
    "Milha por galão americano",
    "Milha por galão imperial",
    "Quilômetro por litro",
    "Litro por 100 quilômetros"
];

const options_mechanical_energy = [
    "Joule",
    "Quilojoule",
    "Gram calorie",
    "Quilocaloria",
    "Watt-hora",
    "Quilowatt-hora",
    "Elétron-volt",
    "BTU",
    "therm (US)",
    "Pé-libra força"
];

const options_frequency = [
    "Hertz",
    "Quilo-hertz",
    "Mega-hertz",
    "Gigahertz"
];

const options_mass = [
    "Tonelada",
    "Quilograma",
    "Grama",
    "Miligrama",
    "Micrograma",
    "Tonelada de deslocamento",
    "Tonelada curta",
    "Stone",
    "Libra",
    "Onça"
]

const options_pressure = [
    "Atmosfera padrão",
    "Bar",
    "Pascal",
    "Psi",
    "Torr"
];

const options_temperature = [
    "Grau Celsius",
    "Grau Fahrenheit",
    "Kelvin"
];

const options_time = [
    "Nanosegundo",
    "Microssegundo",
    "Milissegundo",
    "Segundo",
    "Minuto",
    "Hora",
    "Dia",
    "Semana",
    "Mês",
    "Ano-calendário",
    "Década",
    "Século"
];

const options_data_transmission = [
    "Bit por segundo",
    "Quilobit por segundo",
    "Quilobyte por segundo",
    "Kibibit por segundo",
    "Megabit por segundo",
    "Megabyte por segundo",
    "Mebibit por segundo",
    "Gigabit por segundo",
    "Gigabyte por segundo",
    "Gibibit por segundo",
    "Terabit por segundo",
    "Terabyte por segundo",
    "Tebibit por segundo"
];

const options_velocity = [
    "Milha por hora",
    "Pés por segundo",
    "Metro por segundo",
    "Quilômetro por hora",
    "Nó"
];

const options_volume = [
    "Galão americano",
    "Quarto líquido americano",
    "Pinta americana",
    "Copo",
    "Onça líquida americana",
    "Colher de sopa americana",
    "Colher de chá americana",
    "Metro cúbico",
    "Litro",
    "Mililitro",
    "Galão Imperial",
    "Quarto Imperial",
    "Pinto Imperial",
    "Xícara Imperial",
    "Onça líquida Imperial",
    "Colher de sopa Imperial",
    "Colher de chá Imperial",
    "Pé cúbico",
    "Polegada cúbica"
];

const options_area = [
    "Quilômetro quadrado",
    "Metro quadrado",
    "Milha quadrada",
    "Jarda quadrada",
    "Pé quadrado",
    "Polegada quadrada",
    "Hectare",
    "Acre"
];

const options_angle = [
    "Grado",
    "Grau",
    "Mil angular",
    "Minuto de arco",
    "Radiano",
    "Segundo de arco"
];

const first_selector = document.getElementById("first");
var second_selector = document.getElementById("second");
var third_selector = document.getElementById("third");

first_selector.addEventListener("change", (e) => {

    var choice = e.target.value;
    
    remove_all(second_selector);
    remove_all(third_selector);

    switch (choice) {
        case "armazenamento_de_dados":
            add_to_selector(second_selector, options_data_storage)
            add_to_selector(third_selector, options_data_storage)

            set_selected(second_selector, "byte");
            set_selected(third_selector, "kilobyte");
            break;

        case "comprimento":
            add_to_selector(second_selector, options_length);
            add_to_selector(third_selector, options_length);

            set_selected(second_selector, "metro");
            set_selected(third_selector, "centimetro");
            break;

        case "consumo_de_combustivel":
            add_to_selector(second_selector, options_fuel_consumption);
            add_to_selector(third_selector, options_fuel_consumption);

            set_selected(second_selector, "quilometro_por_litro");
            set_selected(third_selector, "milha_por_galao_americano");
            break;
        
        case "energia_mecanica":
            add_to_selector(second_selector, options_mechanical_energy);
            add_to_selector(third_selector, options_mechanical_energy);

            set_selected(second_selector, "joule");
            set_selected(third_selector, "quilocaloria");
            break;
        
        case "frequencia":
            add_to_selector(second_selector, options_frequency);
            add_to_selector(third_selector, options_frequency);

            set_selected(second_selector, "hertz");
            set_selected(third_selector, "quilo_hertz");
            break;
        
        case "massa":
            add_to_selector(second_selector, options_mass);
            add_to_selector(third_selector, options_mass);

            set_selected(second_selector, "quilograma");
            set_selected(third_selector, "grama");
            break;
        
        case "pressao":
            add_to_selector(second_selector, options_pressure);
            add_to_selector(third_selector, options_pressure);

            set_selected(second_selector, "pascal")
            set_selected(third_selector, "bar");
            break;
        
        case "temperatura":
            add_to_selector(second_selector, options_temperature);
            add_to_selector(third_selector, options_temperature);

            set_selected(second_selector, "grau_celsius");
            set_selected(third_selector, "grau_fahrenheit");
            break;
        
        case "tempo":
            add_to_selector(second_selector, options_time);
            add_to_selector(third_selector, options_time);

            set_selected(second_selector, "segundo");
            set_selected(third_selector, "minuto");
            break;
        
        case "transmissao_de_dados":
            add_to_selector(second_selector, options_data_transmission);
            add_to_selector(third_selector, options_data_transmission);

            set_selected(second_selector, "bit_por_segundo");
            set_selected(third_selector, "quilobit_por_segundo");
            break;
        
        case "velocidade":
            add_to_selector(second_selector, options_velocity);
            add_to_selector(third_selector, options_velocity);

            set_selected(second_selector, "metro_por_segundo");
            set_selected(third_selector, "quilometro_por_hora");
            break;
        
        case "volume":
            add_to_selector(second_selector, options_volume);
            add_to_selector(third_selector, options_volume);

            set_selected(second_selector, "litro");
            set_selected(third_selector, "mililitro");
            break;

        case "area":
            add_to_selector(second_selector, options_area);
            add_to_selector(third_selector, options_area);

            set_selected(second_selector, "metro_quadrado");
            set_selected(third_selector, "quilometro_quadrado");
            break;

        case "angulo":
            add_to_selector(second_selector, options_angle);
            add_to_selector(third_selector, options_angle);

            set_selected(second_selector, "grau");
            set_selected(third_selector, "radiano");
            break;
    }

});

function remove_all(selector) {

    var size = selector.options.length - 1;

    for (var i = size; i >= 0; i--) {

        selector.remove(i);

    }

}

function add_to_selector(selector, options) {

    for (var i = 0; i < options.length; i++) {

        var option = document.createElement("option");

        option.text = options[i];

        var value = options[i];

        value = value.toLowerCase();
        value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        value = value.replaceAll(")", "");
        value = value.replaceAll("(", "");
        value = value.replaceAll(" ", "_");
        value = value.replaceAll("-", "_");

        option.value = value;
        
        selector.add(option);

    }

}

function set_selected(selector, value) {

    for (let i = 0; i < selector.options.length; i++) {

        if (selector.options[i].value === value) {

            selector.options[i].selected = true;
            break;

        }

    }

}
