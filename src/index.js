const ViagemFacade = require('./viagemFacade');

const viagemFacade = new ViagemFacade();

// Simulando a reserva completa de uma viagem
const detalhesViagem = viagemFacade.reservarViagemCompleta(

    'Rio de Janeiro',  

    '2024-12-20',

    'Rio de Janeiro', 

    '2024-12-20',  
      
    '2024-12-30',   

    '2024-12-21'    
       
);

console.log('\nDetalhes da Viagem:', detalhesViagem);
