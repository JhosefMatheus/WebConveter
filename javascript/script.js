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

var first_input = document.getElementById("first_entry");
var second_input = document.getElementById("second_entry");

var default_entry_value = 1;

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

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/1000;
            break;

        case "comprimento":
            add_to_selector(second_selector, options_length);
            add_to_selector(third_selector, options_length);

            set_selected(second_selector, "metro");
            set_selected(third_selector, "centimetro");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*100;
            break;

        case "consumo_de_combustivel":
            add_to_selector(second_selector, options_fuel_consumption);
            add_to_selector(third_selector, options_fuel_consumption);

            set_selected(second_selector, "quilometro_por_litro");
            set_selected(third_selector, "milha_por_galao_americano");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*2.352;
            break;
        
        case "energia_mecanica":
            add_to_selector(second_selector, options_mechanical_energy);
            add_to_selector(third_selector, options_mechanical_energy);

            set_selected(second_selector, "joule");
            set_selected(third_selector, "quilocaloria");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/4184;
            break;
        
        case "frequencia":
            add_to_selector(second_selector, options_frequency);
            add_to_selector(third_selector, options_frequency);

            set_selected(second_selector, "hertz");
            set_selected(third_selector, "quilo_hertz");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/1000;
            break;
        
        case "massa":
            add_to_selector(second_selector, options_mass);
            add_to_selector(third_selector, options_mass);

            set_selected(second_selector, "quilograma");
            set_selected(third_selector, "grama");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*1000;
            break;
        
        case "pressao":
            add_to_selector(second_selector, options_pressure);
            add_to_selector(third_selector, options_pressure);

            set_selected(second_selector, "pascal")
            set_selected(third_selector, "bar");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/100000;
            break;
        
        case "temperatura":
            add_to_selector(second_selector, options_temperature);
            add_to_selector(third_selector, options_temperature);

            set_selected(second_selector, "grau_celsius");
            set_selected(third_selector, "grau_fahrenheit");

            first_input.value = 0;
            second_input.value = 32;
            break;
        
        case "tempo":
            add_to_selector(second_selector, options_time);
            add_to_selector(third_selector, options_time);

            set_selected(second_selector, "segundo");
            set_selected(third_selector, "minuto");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/60;
            break;
        
        case "transmissao_de_dados":
            add_to_selector(second_selector, options_data_transmission);
            add_to_selector(third_selector, options_data_transmission);

            set_selected(second_selector, "bit_por_segundo");
            set_selected(third_selector, "quilobit_por_segundo");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/1000;
            break;
        
        case "velocidade":
            add_to_selector(second_selector, options_velocity);
            add_to_selector(third_selector, options_velocity);

            set_selected(second_selector, "metro_por_segundo");
            set_selected(third_selector, "quilometro_por_hora");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*3.6;
            break;
        
        case "volume":
            add_to_selector(second_selector, options_volume);
            add_to_selector(third_selector, options_volume);

            set_selected(second_selector, "litro");
            set_selected(third_selector, "mililitro");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*1000;
            break;

        case "area":
            add_to_selector(second_selector, options_area);
            add_to_selector(third_selector, options_area);

            set_selected(second_selector, "metro_quadrado");
            set_selected(third_selector, "quilometro_quadrado");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/10**6;
            break;

        case "angulo":
            add_to_selector(second_selector, options_angle);
            add_to_selector(third_selector, options_angle);

            set_selected(second_selector, "grau");
            set_selected(third_selector, "radiano");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*Math.PI/180;
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

second_selector.addEventListener("change", (e) => {

    var first_selector_option = first_selector.value;
    var second_selector_option = second_selector.value;
    var third_selector_option = third_selector.value;

    switch (first_selector_option) {
        case "armazenamento_de_dados":
            
            switch (second_selector_option) {
                case "bit":
                    
                    break;
                case "kilobit":
                    
                    break;
                case "kibibit":
                    
                    break;
                case "megabit":
                    
                    break;
                case "mebibit":
                    
                    break;
                case "gigabit":
                    
                    break;
                case "gibibit":
                    
                    break;
                case "terabit":
                    
                    break;
                case "tebibit":
                    
                    break;
                case "petabit":
                    
                    break;
                case "pebibit":
                    
                    break;
                case "byte":
                    
                    break;
                case "kilobyte":
                    
                    break;
                case "kibibyte":
                    
                    break;
                case "megabyte":
                    
                    break;
                case "mebibyte":
                    
                    break;
                case "gigabyte":
                    
                    break;
                case "gibibyte":
                    
                    break;
                case "terabyte":
                    
                    break;
                case "tebibyte":
                    
                    break;
                case "petabyte":
                    
                    break;
                case "pebibyte":
                    
                    break;
            }
            
            break;
        case "comprimento":
            
            switch (second_selector_option) {
                case "quilometro":
                    
                    break;
                case "metro":
                    
                    break;
                case "centimetro":
                    
                    break;
                case "milimetro":
                    
                    break;
                case "micrometro":
                    
                    break;
                case "nanometro":
                    
                    break;
                case "milha":
                    
                    break;
                case "jarda":
                    
                    break;
                case "pe":
                    
                    break;
                case "polegada":
                    
                    break;
                case "milha_nautica":
                    
                    break;
            }

            break;
        case "consumo_de_combustivel":

            switch (second_selector_option) {
                case "milha_por_galao_americano":
                    
                    break;
                case "milha_por_galao_imperial":
                    
                    break;
                case "quilometro_por_litro":
                    
                    break;
                case "litro_por_100_quilometros":
                    
                    break;
            }
            
            break;
        case "energia_mecanica":

            switch (second_selector_option) {
                case "joule":
                    
                    break;
                case "quilojoule":
                    
                    break;
                case "gram_calorie":
                    
                    break;
                case "quilocaloria":
                    
                    break;
                case "watt_hora":
                    
                    break;
                case "quilowatt_hora":
                    
                    break;
                case "eletron_volt":
                    
                    break;
                case "btu":
                    
                    break;
                case "therm_us":
                    
                    break;
                case "pe_libra_forca":
                    
                    break;
            }
            
            break;
        case "frequencia":

            switch (second_selector_option) {
                case "hertz":

                    break;
                case "quilo_hertz":
                    
                    break;
                case "mega_hertz":
                    
                    break;
                case "gigahertz":
                    
                    break;
            }
            
            break;
        case "massa":

            switch (second_selector_option) {
                case "tonelada":
                    
                    break;
                case "quilograma":
                    
                    break;
                case "grama":
                    
                    break;
                case "miligrama":
                    
                    break;
                case "micrograma":
                    
                    break;
                case "tonelada_de_deslocamento":
                    
                    break;
                case "tonelada_curta":
                    
                    break;
                case "stone":
                    
                    break;
                case "libra":
                    
                    break;
                case "onca":
                    
                    break;
            }
            
            break;
        case "pressao":

            switch (second_selector_option) {
                case "atmosfera_padrao":
                    
                    break;
                case "bar":
                    
                    break;
                case "pascal":
                    
                    break;
                case "psi":
                    
                    break;
                case "torr":
                    
                    break;
            }
            
            break;
        case "temperatura":

            switch (second_selector_option) {
                case "grau_celsius":
                    
                    break;
                case "grau_fahrenheit":
                    
                    break;
                case "kelvin":
                    
                    break;
            }
            
            break;
        case "tempo":

            switch (second_selector_option) {
                case "nanossegundo":
                    
                    break;
                case "microssegundo":
                    
                    break;
                case "milissegundo":
                    
                    break;
                case "segundo":
                    
                    break;
                case "minuto":
                    
                    break;
                case "hora":
                    
                    break;
                case "dia":
                    
                    break;
                case "semana":
                    
                    break;
                case "mes":
                    
                    break;
                case "ano_calendario":
                    
                    break;
                case "decada":
                    
                    break;
                case "seculo":
                    
                    break;
            }
            
            break;
        case "transmissao_de_dados":

            switch (second_selector_option) {
                case "bit_por_segundo":
                    
                    break;
                case "quilobit_por_segundo":
                    
                    break;
                case "quilobyte_por_segundo":
                    
                    break;
                case "kibibit por segundo":
                    
                    break;
                case "megabit_por_segundo":
                    
                    break;
                case "megabyte_por_segundo":
                    
                    break;
                case "mebibit_por_segundo":
                    
                    break;
                case "gigabit_por_segundo":
                    
                    break;
                case "gigabyte_por_segundo":
                    
                    break;
                case "gibibit_por_segundo":
                    
                    break;
                case "terabit_por_segundo":
                    
                    break;
                case "terabyte_por_segundo":
                    
                    break;
                case "tebibit_por_segundo":
                    
                    break;
            }
            
            break;
        case "velocidade":

            switch (second_selector_option) {
                case "milha_por_hora":
                    
                    break;
                case "pes_por_segundo":
                    
                    break;
                case "metro_por_segundo":
                    
                    break;
                case "quilometro_por_hora":
                    
                    break;
                case "no":
                    
                    break;
            }
            
            break;
        case "volume":

            switch (second_selector_option) {
                case "galao_americano":
                    
                    break;
                case "quarto_liquido_americano":
                    
                    break;
                case "pinta_americana":
                    
                    break;
                case "copo":
                    
                    break;
                case "onca_liquida_americana":
                    
                    break;
                case "colher_de_sopa_americana":
                    
                    break;
                case "colher_de_cha_americana":
                    
                    break;
                case "metro_cubico":
                    
                    break;
                case "litro":
                    
                    break;
                case "mililitro":
                    
                    break;
                case "galao_imperial":
                    
                    break;
                case "quarto_imperial":
                    
                    break;
                case "pinto_imperial":
                    
                    break;
                case "xicara_imperial":
                    
                    break;
                case "onca_liquida_imperial":
                    
                    break;
                case "colher_de_sopa_imperial":
                    
                    break;
                case "colher_de_cha_imperial":
                    
                    break;
                case "pe_cubico":
                    
                    break;
                case "polegada_cubica":
                    
                    break;
            }
            
            break;
        case "area":

            switch (second_selector_option) {
                case "quilometro_quadrado":
                    
                    break;
                case "metro_quadrado":
                    
                    break;
                case "milha_quadrada":
                    
                    break;
                case "jarda_quadrada":
                    
                    break;
                case "pe_quadrado":
                    
                    break;
                case "polegada_quadrada":
                    
                    break;
                case "hectare":
                    
                    break;
                case "acre":
                    
                    break;
            }
            
            break;
        case "angulo":

            switch (second_selector_option) {
                case "grado":
                    
                    break;
                case "grau":
                    
                    break;
                case "mil_angular":
                    
                    break;
                case "minuto_de_arco":
                    
                    break;
                case "radiano":
                    
                    break;
                case "segundo_de_arco":
                    
                    break;
            }
            
            break;
    }

});

third_selector.addEventListener("change", (e) => {

    var first_selector_option = first_selector.value;
    var second_selector_option = second_selector.value;
    var third_selector_option = third_selector.value;

    switch (first_selector_option) {
        case "armazenamento_de_dados":
            
            switch (third_selector_option) {
                case "bit":
                    
                    break;
                case "kilobit":
                    
                    break;
                case "kibibit":
                    
                    break;
                case "megabit":
                    
                    break;
                case "mebibit":
                    
                    break;
                case "gigabit":
                    
                    break;
                case "gibibit":
                    
                    break;
                case "terabit":
                    
                    break;
                case "tebibit":
                    
                    break;
                case "petabit":
                    
                    break;
                case "pebibit":
                    
                    break;
                case "byte":
                    
                    break;
                case "kilobyte":
                    
                    break;
                case "kibibyte":
                    
                    break;
                case "megabyte":
                    
                    break;
                case "mebibyte":
                    
                    break;
                case "gigabyte":
                    
                    break;
                case "gibibyte":
                    
                    break;
                case "terabyte":
                    
                    break;
                case "tebibyte":
                    
                    break;
                case "petabyte":
                    
                    break;
                case "pebibyte":
                    
                    break;
            }
            
            break;
        case "comprimento":
            
            switch (third_selector_option) {
                case "quilometro":
                    
                    break;
                case "metro":
                    
                    break;
                case "centimetro":
                    
                    break;
                case "milimetro":
                    
                    break;
                case "micrometro":
                    
                    break;
                case "nanometro":
                    
                    break;
                case "milha":
                    
                    break;
                case "jarda":
                    
                    break;
                case "pe":
                    
                    break;
                case "polegada":
                    
                    break;
                case "milha_nautica":
                    
                    break;
            }

            break;
        case "consumo_de_combustivel":

            switch (third_selector_option) {
                case "milha_por_galao_americano":
                    
                    break;
                case "milha_por_galao_imperial":
                    
                    break;
                case "quilometro_por_litro":
                    
                    break;
                case "litro_por_100_quilometros":
                    
                    break;
            }
            
            break;
        case "energia_mecanica":

            switch (third_selector_option) {
                case "joule":
                    
                    break;
                case "quilojoule":
                    
                    break;
                case "gram_calorie":
                    
                    break;
                case "quilocaloria":
                    
                    break;
                case "watt_hora":
                    
                    break;
                case "quilowatt_hora":
                    
                    break;
                case "eletron_volt":
                    
                    break;
                case "btu":
                    
                    break;
                case "therm_us":
                    
                    break;
                case "pe_libra_forca":
                    
                    break;
            }
            
            break;
        case "frequencia":

            switch (third_selector_option) {
                case "hertz":

                    break;
                case "quilo_hertz":
                    
                    break;
                case "mega_hertz":
                    
                    break;
                case "gigahertz":
                    
                    break;
            }
            
            break;
        case "massa":

            switch (third_selector_option) {
                case "tonelada":
                    
                    break;
                case "quilograma":
                    
                    break;
                case "grama":
                    
                    break;
                case "miligrama":
                    
                    break;
                case "micrograma":
                    
                    break;
                case "tonelada_de_deslocamento":
                    
                    break;
                case "tonelada_curta":
                    
                    break;
                case "stone":
                    
                    break;
                case "libra":
                    
                    break;
                case "onca":
                    
                    break;
            }
            
            break;
        case "pressao":

            switch (third_selector_option) {
                case "atmosfera_padrao":
                    
                    break;
                case "bar":
                    
                    break;
                case "pascal":
                    
                    break;
                case "psi":
                    
                    break;
                case "torr":
                    
                    break;
            }
            
            break;
        case "temperatura":

            switch (third_selector_option) {
                case "grau_celsius":
                    
                    break;
                case "grau_fahrenheit":
                    
                    break;
                case "kelvin":
                    
                    break;
            }
            
            break;
        case "tempo":

            switch (third_selector_option) {
                case "nanossegundo":
                    
                    break;
                case "microssegundo":
                    
                    break;
                case "milissegundo":
                    
                    break;
                case "segundo":
                    
                    break;
                case "minuto":
                    
                    break;
                case "hora":
                    
                    break;
                case "dia":
                    
                    break;
                case "semana":
                    
                    break;
                case "mes":
                    
                    break;
                case "ano_calendario":
                    
                    break;
                case "decada":
                    
                    break;
                case "seculo":
                    
                    break;
            }
            
            break;
        case "transmissao_de_dados":

            switch (third_selector_option) {
                case "bit_por_segundo":
                    
                    break;
                case "quilobit_por_segundo":
                    
                    break;
                case "quilobyte_por_segundo":
                    
                    break;
                case "kibibit por segundo":
                    
                    break;
                case "megabit_por_segundo":
                    
                    break;
                case "megabyte_por_segundo":
                    
                    break;
                case "mebibit_por_segundo":
                    
                    break;
                case "gigabit_por_segundo":
                    
                    break;
                case "gigabyte_por_segundo":
                    
                    break;
                case "gibibit_por_segundo":
                    
                    break;
                case "terabit_por_segundo":
                    
                    break;
                case "terabyte_por_segundo":
                    
                    break;
                case "tebibit_por_segundo":
                    
                    break;
            }
            
            break;
        case "velocidade":

            switch (third_selector_option) {
                case "milha_por_hora":
                    
                    break;
                case "pes_por_segundo":
                    
                    break;
                case "metro_por_segundo":
                    
                    break;
                case "quilometro_por_hora":
                    
                    break;
                case "no":
                    
                    break;
            }
            
            break;
        case "volume":

            switch (third_selector_option) {
                case "galao_americano":
                    
                    break;
                case "quarto_liquido_americano":
                    
                    break;
                case "pinta_americana":
                    
                    break;
                case "copo":
                    
                    break;
                case "onca_liquida_americana":
                    
                    break;
                case "colher_de_sopa_americana":
                    
                    break;
                case "colher_de_cha_americana":
                    
                    break;
                case "metro_cubico":
                    
                    break;
                case "litro":
                    
                    break;
                case "mililitro":
                    
                    break;
                case "galao_imperial":
                    
                    break;
                case "quarto_imperial":
                    
                    break;
                case "pinto_imperial":
                    
                    break;
                case "xicara_imperial":
                    
                    break;
                case "onca_liquida_imperial":
                    
                    break;
                case "colher_de_sopa_imperial":
                    
                    break;
                case "colher_de_cha_imperial":
                    
                    break;
                case "pe_cubico":
                    
                    break;
                case "polegada_cubica":
                    
                    break;
            }
            
            break;
        case "area":

            switch (third_selector_option) {
                case "quilometro_quadrado":
                    
                    break;
                case "metro_quadrado":
                    
                    break;
                case "milha_quadrada":
                    
                    break;
                case "jarda_quadrada":
                    
                    break;
                case "pe_quadrado":
                    
                    break;
                case "polegada_quadrada":
                    
                    break;
                case "hectare":
                    
                    break;
                case "acre":
                    
                    break;
            }
            
            break;
        case "angulo":

            switch (third_selector_option) {
                case "grado":
                    
                    break;
                case "grau":
                    
                    break;
                case "mil_angular":
                    
                    break;
                case "minuto_de_arco":
                    
                    break;
                case "radiano":
                    
                    break;
                case "segundo_de_arco":
                    
                    break;
            }
            
            break;
    }

});