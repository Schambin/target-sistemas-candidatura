// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Resposta besta
// Na primeira ida ligaria os 3 interruptores de uma vez só.


//Resposta lógica
// Primeira etapa:
// ligar o primeiro interruptor e aguardar alguns minutos.
// desligar o primeiro interruptor e ligar o segundo
// entrar em uma sala.

// Se a lâmpada estiver acesa, o segundo interruptor controla essa lâmpada.
// Se a lâmpada estiver desligada e ainda estiver fria, o primeiro interruptor controla essa lâmpada.
// Se a lâmpada estiver desligada, mas estiver quente, o terceiro interruptor controla essa lâmpada.

// Segunda etapa:
// Se a lâmpada estava acesa na primeira ida, então você já sabe qual interruptor controla essa lâmpada (o segundo).
// Se a lâmpada estava desligada e fria na primeira ida, então o primeiro interruptor estava ligado na primeira vez. Portanto, ligue-o novamente para verificar se ele controla a mesma lâmpada.
// Se a lâmpada estava desligada, mas estava quente na primeira ida, então o terceiro interruptor estava ligado na primeira vez. Portanto, ligue-o novamente para verificar se ele controla a mesma lâmpada.