class AluguelCarroServico {
    alugarCarro(localizacao, dataAluguel) {
        console.log(`Carro alugado em ${localizacao} na data ${dataAluguel}`);
        return { localizacao, dataAluguel };
    }
}

module.exports = AluguelCarroServico;
