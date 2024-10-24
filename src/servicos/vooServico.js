class VooServico {
    
    reservarVoo(destino, data) {

        console.log(`Voo reservado para ${destino} em ${data}`);

        return { destino, data };

    }

}

module.exports = VooServico;
