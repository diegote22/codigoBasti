var passwords = ['passwordIncorrecta', 'BASTIANFACUNDO2023', 'riBerfueradelacopa', 'polícosCorruptos', 'PadrinoElBastiQuiereLaPlay', 'TengoUnosPadresGeniales', ];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;

var interval = setInterval(function(){
    for(i = 0; i < counter; i++) {
        characters[i] = password.charAt(i);
    }
    for(i = counter; i < password.length; i++) {
        characters[i] = Math.random().toString(36).charAt(2);
    }
    $('.password').text(characters.join(''));
}, 25);

function hack() {
    counter++;
    if(counter == password.length){
        $('.granted, .rerun').removeClass('hidden');
        
        // Verificar si 'bastianfacundo2023' está en el array
        if (passwords.includes('BASTIANFACUNDO2023')) {
            $('.blink granted hidden').text('Acceso Permitido');
        } else {
            $('.blink granted hidden').text('Acceso Denegado');
        }
    }
}

$(window).on('keydown', hack);
$('.password').on('click', hack);

$('.rerun').on('click', function() {
    // Evitar mostrar la misma contraseña dos veces seguidas
    indexOld = index; 
    do {
        index = Math.floor((Math.random() * passwords.length));
    } while(index == indexOld);

    $('.granted, .rerun').addClass('hidden');
    password = passwords[index];
    characters = [];
    counter = 0;
    
    // Restablecer el mensaje de acceso
    $('.blink granted hidden').text('');
});

// Evento para comenzar
$('.start').on('click', function() {
    $(this).addClass('hidden');
    $('.info p:last-child, .password').removeClass('hidden');
});
