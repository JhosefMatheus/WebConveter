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
const second_selector = document.getElementById("second");
const third_selector = document.getElementById("third");

const first_input = document.getElementById("first_entry");
const second_input = document.getElementById("second_entry");

const formula_text = document.querySelector("#formula > p");

const default_entry_value = 1;

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

            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1000";
            break;

        case "comprimento":
            add_to_selector(second_selector, options_length);
            add_to_selector(third_selector, options_length);

            set_selected(second_selector, "metro");
            set_selected(third_selector, "centimetro");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*100;

            formula_text.innerHTML = "multiplique o valor de comprimento por 100";
            break;

        case "consumo_de_combustivel":
            add_to_selector(second_selector, options_fuel_consumption);
            add_to_selector(third_selector, options_fuel_consumption);

            set_selected(second_selector, "quilometro_por_litro");
            set_selected(third_selector, "milha_por_galao_americano");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*2.352;

            formula_text.innerHTML = "multiplique o valor de consumo de combustível por 2,352";
            break;
        
        case "energia_mecanica":
            add_to_selector(second_selector, options_mechanical_energy);
            add_to_selector(third_selector, options_mechanical_energy);

            set_selected(second_selector, "joule");
            set_selected(third_selector, "quilocaloria");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/4184;

            formula_text.innerHTML = "divida o valor de energia mecânica por 4184";
            break;
        
        case "frequencia":
            add_to_selector(second_selector, options_frequency);
            add_to_selector(third_selector, options_frequency);

            set_selected(second_selector, "hertz");
            set_selected(third_selector, "quilo_hertz");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/1000;

            formula_text.innerHTML = "divida o valor de frequência por 1000";
            break;
        
        case "massa":
            add_to_selector(second_selector, options_mass);
            add_to_selector(third_selector, options_mass);

            set_selected(second_selector, "quilograma");
            set_selected(third_selector, "grama");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*1000;

            formula_text.innerHTML = "multiplique o valor de massa por 1000";
            break;
        
        case "pressao":
            add_to_selector(second_selector, options_pressure);
            add_to_selector(third_selector, options_pressure);

            set_selected(second_selector, "pascal")
            set_selected(third_selector, "bar");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/100000;

            formula_text.innerHTML = "divida o valor de pressão por 100000";
            break;
        
        case "temperatura":
            add_to_selector(second_selector, options_temperature);
            add_to_selector(third_selector, options_temperature);

            set_selected(second_selector, "grau_celsius");
            set_selected(third_selector, "grau_fahrenheit");

            first_input.value = 0;
            second_input.value = 32;

            formula_text.innerHTML = "(0 °C x 9/5) + 32 = 32 °F";
            break;
        
        case "tempo":
            add_to_selector(second_selector, options_time);
            add_to_selector(third_selector, options_time);

            set_selected(second_selector, "segundo");
            set_selected(third_selector, "minuto");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/60;

            formula_text.innerHTML = "divida o valor de tempo por 60";
            break;
        
        case "transmissao_de_dados":
            add_to_selector(second_selector, options_data_transmission);
            add_to_selector(third_selector, options_data_transmission);

            set_selected(second_selector, "bit_por_segundo");
            set_selected(third_selector, "quilobit_por_segundo");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/1000;

            formula_text.innerHTML = "divida o valor de transmissão de dados por 1000";
            break;
        
        case "velocidade":
            add_to_selector(second_selector, options_velocity);
            add_to_selector(third_selector, options_velocity);

            set_selected(second_selector, "metro_por_segundo");
            set_selected(third_selector, "quilometro_por_hora");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*3.6;

            formula_text.innerHTML = "multiplique o valor de velocidade por 3,6";
            break;
        
        case "volume":
            add_to_selector(second_selector, options_volume);
            add_to_selector(third_selector, options_volume);

            set_selected(second_selector, "litro");
            set_selected(third_selector, "mililitro");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*1000;

            formula_text.innerHTML = "multiplique o valor de volume por 1000";
            break;

        case "area":
            add_to_selector(second_selector, options_area);
            add_to_selector(third_selector, options_area);

            set_selected(second_selector, "metro_quadrado");
            set_selected(third_selector, "quilometro_quadrado");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value/10**6;

            formula_text.innerHTML = "divida o valor de área por 1e+6";
            break;

        case "angulo":
            add_to_selector(second_selector, options_angle);
            add_to_selector(third_selector, options_angle);

            set_selected(second_selector, "grau");
            set_selected(third_selector, "radiano");

            first_input.value = default_entry_value;
            second_input.value = default_entry_value*Math.PI/180;

            formula_text.innerHTML = "1° x pi/180 = 0,01745 rad";
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
                    
                    switch (third_selector_option) {
                        case "bit":

                            break;
                        
                        case "kilobit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1000";
                    
                            break;
                        case "kibibit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1024";
                            
                            break;
                        case "megabit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1e+6";
                            
                            break;
                        case "mebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,049e+6";
                            
                            break;
                        case "gigabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1e+9";
                            
                            break;
                        case "gibibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,074e+9";
                            
                            break;
                        case "terabit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1e+12";
                            
                            break;
                        case "tebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,1e+12";
                            
                            break;
                        case "petabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1e+15";
                            
                            break;
                        case "pebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,126e+15";
                            
                            break;
                        case "byte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8";
                            
                            break;
                        case "kilobyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8000";
                            
                            break;
                        case "kibibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8192";
                            
                            break;
                        case "megabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+6";
                            
                            break;
                        case "mebibyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 8,389e+6";
                            
                            break;
                        case "gigabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+9";
                            
                            break;
                        case "gibibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,59e+9";
                            
                            break;
                        case "terabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+12";
                            
                            break;
                        case "tebibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,796e+12";
                            
                            break;
                        case "petabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+15";
                            
                            break;
                        case "pebibyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 9,007e+15";
                            
                            break;
                    }

                    break;
                case "kilobit":

                    switch (third_selector_option) {
                        case "bit":

                            formula_text.innerHTML = "multiplique o valor de armazenamento de dados por 1000";

                            break;
                        
                        case "kilobit":
                    
                            break;
                        case "kibibit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1,024";
                            
                            break;
                        case "megabit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1000";
                            
                            break;
                        case "mebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1049";
                            
                            break;
                        case "gigabit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1e+6";
                            
                            break;
                        case "gibibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,074e+6";
                            
                            break;
                        case "terabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1e+9";
                            
                            break;
                        case "tebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,1e+9";
                            
                            break;
                        case "petabit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1e+12";
                            
                            break;
                        case "pebibit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1,126e+12";
                            
                            break;
                        case "byte":

                            formula_text.innerHTML = "multiplique o valor de armazenamento de dados por 125";
                            
                            break;
                        case "kilobyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8"
                            
                            break;
                        case "kibibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,192";
                            
                            break;
                        case "megabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8000";
                            
                            break;
                        case "mebibyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 8389";
                            
                            break;
                        case "gigabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+6";
                            
                            break;
                        case "gibibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,59e+6";
                            
                            break;
                        case "terabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+9";
                            
                            break;
                        case "tebibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,796e+9";
                            
                            break;
                        case "petabyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8e+12";
                            
                            break;
                        case "pebibyte":

                            formula_text.innerHTML = "para um resultado aproximado, divid ao valor de armazenamento de dados por 9,007e+12";
                            
                            break;
                    }
                    
                    break;
                case "kibibit":

                    switch (third_selector_option) {
                        case "bit":

                            formula_text.innerHTML = "multiplique o valor de armazenamento de dados por 1024";

                            break;
                        
                        case "kilobit":

                            formula_text.innerHTML = "multiplique o valor de armazenamento de dados por 1,024";
                    
                            break;
                        case "kibibit":

                            
                            
                            break;
                        case "megabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 977";
                            
                            break;
                        case "mebibit":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 1024";
                            
                            break;
                        case "gigabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 976562";
                            
                            break;
                        case "gibibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,049e+6";
                            
                            break;
                        case "terabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 9,766e+8";
                            
                            break;
                        case "tebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,074e+9";
                            
                            break;
                        case "petabit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 9,766e+11";
                            
                            break;
                        case "pebibit":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 1,1e+12";
                            
                            break;
                        case "byte":

                            formula_text.innerHTML = "multiplique o valor de armazenamento de dados por 128";
                            
                            break;
                        case "kilobyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 7,812";
                            
                            break;
                        case "kibibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8";
                            
                            break;
                        case "megabyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 7813"
                            
                            break;
                        case "mebibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8192";
                            
                            break;
                        case "gigabyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 7,812e+6";
                            
                            break;
                        case "gibibyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 8,389e+6";
                            
                            break;
                        case "terabyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 7,812e+9";
                            
                            break;
                        case "tebibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,59e+9";
                            
                            break;
                        case "petabyte":

                            formula_text.innerHTML = "para um resultado aproximado, divida o valor de armazenamento de dados por 7,812e+12";
                            
                            break;
                        case "pebibyte":

                            formula_text.innerHTML = "divida o valor de armazenamento de dados por 8,796e+12";
                            
                            break;
                    }
                    
                    break;
                case "megabit":

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
                case "mebibit":

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
                case "gigabit":

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
                case "gibibit":

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
                case "terabit":

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
                case "tebibit":

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
                case "petabit":

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
                case "pebibit":

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
                case "byte":

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
                case "kilobyte":

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
                case "kibibyte":

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
                case "megabyte":

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
                case "mebibyte":

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
                case "gigabyte":

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
                case "gibibyte":

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
                case "terabyte":

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
                case "tebibyte":

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
                case "petabyte":

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
                case "pebibyte":

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
            }
            
            break;
        case "comprimento":
            
            switch (second_selector_option) {
                case "quilometro":

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
                case "metro":

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
                case "centimetro":

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
                case "milimetro":

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
                case "micrometro":

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
                case "nanometro":

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
                case "milha":

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
                case "jarda":

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
                case "pe":

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
                case "polegada":

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
                case "milha_nautica":

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
            }

            break;
        case "consumo_de_combustivel":

            switch (second_selector_option) {
                case "milha_por_galao_americano":

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
                case "milha_por_galao_imperial":

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
                case "quilometro_por_litro":

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
                case "litro_por_100_quilometros":

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
            }
            
            break;
        case "energia_mecanica":

            switch (second_selector_option) {
                case "joule":

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
                case "quilojoule":

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
                case "gram_calorie":

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
                case "quilocaloria":

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
                case "watt_hora":

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
                case "quilowatt_hora":

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
                case "eletron_volt":

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
                case "btu":

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
                case "therm_us":

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
                case "pe_libra_forca":

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
            }
            
            break;
        case "frequencia":

            switch (second_selector_option) {
                case "hertz":

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
                case "quilo_hertz":

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
                case "mega_hertz":

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
                case "gigahertz":

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
            }
            
            break;
        case "massa":

            switch (second_selector_option) {
                case "tonelada":

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
                case "quilograma":

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
                case "grama":

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
                case "miligrama":

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
                case "micrograma":

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
                case "tonelada_de_deslocamento":

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
                case "tonelada_curta":

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
                case "stone":

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
                case "libra":

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
                case "onca":

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
            }
            
            break;
        case "pressao":

            switch (second_selector_option) {
                case "atmosfera_padrao":

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
                case "bar":

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
                case "pascal":

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
                case "psi":

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
                case "torr":

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
            }
            
            break;
        case "temperatura":

            switch (second_selector_option) {
                case "grau_celsius":

                    switch (third_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
                case "grau_fahrenheit":

                    switch (third_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
                case "kelvin":

                    switch (third_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
            }
            
            break;
        case "tempo":

            switch (second_selector_option) {
                case "nanossegundo":

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
                case "microssegundo":

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
                case "milissegundo":

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
                case "segundo":

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
                case "minuto":

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
                case "hora":

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
                case "dia":

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
                case "semana":

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
                case "mes":

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
                case "ano_calendario":

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
                case "decada":

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
                case "seculo":

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
            }
            
            break;
        case "transmissao_de_dados":

            switch (second_selector_option) {
                case "bit_por_segundo":

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
                case "quilobit_por_segundo":

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
                case "quilobyte_por_segundo":

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
                case "kibibit por segundo":

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
                case "megabit_por_segundo":

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
                case "megabyte_por_segundo":

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
                case "mebibit_por_segundo":

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
                case "gigabit_por_segundo":

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
                case "gigabyte_por_segundo":

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
                case "gibibit_por_segundo":

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
                case "terabit_por_segundo":

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
                case "terabyte_por_segundo":

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
                case "tebibit_por_segundo":

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
            }
            
            break;
        case "velocidade":

            switch (second_selector_option) {
                case "milha_por_hora":

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
                case "pes_por_segundo":

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
                case "metro_por_segundo":

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
                case "quilometro_por_hora":

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
                case "no":

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
            }
            
            break;
        case "volume":

            switch (second_selector_option) {
                case "galao_americano":

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
                case "quarto_liquido_americano":

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
                case "pinta_americana":

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
                case "copo":

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
                case "onca_liquida_americana":

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
                case "colher_de_sopa_americana":

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
                case "colher_de_cha_americana":

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
                case "metro_cubico":

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
                case "litro":

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
                case "mililitro":

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
                case "galao_imperial":

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
                case "quarto_imperial":

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
                case "pinto_imperial":

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
                case "xicara_imperial":

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
                case "onca_liquida_imperial":

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
                case "colher_de_sopa_imperial":

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
                case "colher_de_cha_imperial":

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
                case "pe_cubico":

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
                case "polegada_cubica":

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
            }
            
            break;
        case "area":

            switch (second_selector_option) {
                case "quilometro_quadrado":

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
                case "metro_quadrado":

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
                case "milha_quadrada":

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
                case "jarda_quadrada":

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
                case "pe_quadrado":

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
                case "polegada_quadrada":

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
                case "hectare":

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
                case "acre":

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
            }
            
            break;
        case "angulo":

            switch (second_selector_option) {
                case "grado":

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
                case "grau":

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
                case "mil_angular":

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
                case "minuto_de_arco":

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
                case "radiano":

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
                case "segundo_de_arco":

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
                case "kilobit":

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
                case "kibibit":

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
                case "megabit":

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
                case "mebibit":

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
                case "gigabit":

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
                case "gibibit":

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
                case "terabit":

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
                case "tebibit":

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
                case "petabit":

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
                case "pebibit":

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
                case "byte":

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
                case "kilobyte":

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
                case "kibibyte":

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
                case "megabyte":

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
                case "mebibyte":

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
                case "gigabyte":

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
                case "gibibyte":

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
                case "terabyte":

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
                case "tebibyte":

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
                case "petabyte":

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
                case "pebibyte":

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
            }
            
            break;
        case "comprimento":
            
            switch (third_selector_option) {
                case "quilometro":

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
                case "metro":

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
                case "centimetro":

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
                case "milimetro":

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
                case "micrometro":

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
                case "nanometro":

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
                case "milha":

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
                case "jarda":

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
                case "pe":

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
                case "polegada":

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
                case "milha_nautica":

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
            }

            break;
        case "consumo_de_combustivel":

            switch (third_selector_option) {
                case "milha_por_galao_americano":

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
                case "milha_por_galao_imperial":

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
                case "quilometro_por_litro":

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
                case "litro_por_100_quilometros":

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
            }
            
            break;
        case "energia_mecanica":

            switch (third_selector_option) {
                case "joule":

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
                case "quilojoule":

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
                case "gram_calorie":

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
                case "quilocaloria":

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
                case "watt_hora":

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
                case "quilowatt_hora":

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
                case "eletron_volt":

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
                case "btu":

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
                case "therm_us":

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
                case "pe_libra_forca":

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
            }
            
            break;
        case "frequencia":

            switch (third_selector_option) {
                case "hertz":

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
                case "quilo_hertz":

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
                case "mega_hertz":

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
                case "gigahertz":

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
            }
            
            break;
        case "massa":

            switch (third_selector_option) {
                case "tonelada":

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
                case "quilograma":

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
                case "grama":

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
                case "miligrama":

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
                case "micrograma":

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
                case "tonelada_de_deslocamento":

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
                case "tonelada_curta":

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
                case "stone":

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
                case "libra":

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
                case "onca":

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
            }
            
            break;
        case "pressao":

            switch (third_selector_option) {
                case "atmosfera_padrao":

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
                case "bar":

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
                case "pascal":

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
                case "psi":

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
                case "torr":

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
            }
            
            break;
        case "temperatura":

            switch (third_selector_option) {
                case "grau_celsius":

                    switch (second_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
                case "grau_fahrenheit":

                    switch (second_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
                case "kelvin":

                    switch (second_selector_option) {
                        case "grau_celsius":
                            
                            break;
                        case "grau_fahrenheit":
                            
                            break;
                        case "kelvin":
                            
                            break;
                    }
                    
                    break;
            }
            
            break;
        case "tempo":

            switch (third_selector_option) {
                case "nanossegundo":

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
                case "microssegundo":

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
                case "milissegundo":

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
                case "segundo":

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
                case "minuto":

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
                case "hora":

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
                case "dia":

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
                case "semana":

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
                case "mes":

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
                case "ano_calendario":

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
                case "decada":

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
                case "seculo":

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
            }
            
            break;
        case "transmissao_de_dados":

            switch (third_selector_option) {
                case "bit_por_segundo":

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
                case "quilobit_por_segundo":

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
                case "quilobyte_por_segundo":

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
                case "kibibit por segundo":

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
                case "megabit_por_segundo":

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
                case "megabyte_por_segundo":

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
                case "mebibit_por_segundo":

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
                case "gigabit_por_segundo":

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
                case "gigabyte_por_segundo":

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
                case "gibibit_por_segundo":

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
                case "terabit_por_segundo":

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
                case "terabyte_por_segundo":

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
                case "tebibit_por_segundo":

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
            }
            
            break;
        case "velocidade":

            switch (third_selector_option) {
                case "milha_por_hora":

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
                case "pes_por_segundo":

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
                case "metro_por_segundo":

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
                case "quilometro_por_hora":

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
                case "no":

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
            }
            
            break;
        case "volume":

            switch (third_selector_option) {
                case "galao_americano":

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
                case "quarto_liquido_americano":

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
                case "pinta_americana":

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
                case "copo":

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
                case "onca_liquida_americana":

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
                case "colher_de_sopa_americana":

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
                case "colher_de_cha_americana":

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
                case "metro_cubico":

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
                case "litro":

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
                case "mililitro":

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
                case "galao_imperial":

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
                case "quarto_imperial":

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
                case "pinto_imperial":

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
                case "xicara_imperial":

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
                case "onca_liquida_imperial":

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
                case "colher_de_sopa_imperial":
                    
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
                case "colher_de_cha_imperial":

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
                case "pe_cubico":

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
                case "polegada_cubica":

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
            }
            
            break;
        case "area":

            switch (third_selector_option) {
                case "quilometro_quadrado":

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
                case "metro_quadrado":

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
                case "milha_quadrada":

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
                case "jarda_quadrada":

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
                case "pe_quadrado":

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
                case "polegada_quadrada":

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
                case "hectare":

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
                case "acre":

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
            }
            
            break;
        case "angulo":

            switch (third_selector_option) {
                case "grado":

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
                case "grau":

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
                case "mil_angular":

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
                case "minuto_de_arco":

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
                case "radiano":

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
                case "segundo_de_arco":

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
            
            break;
    }

});