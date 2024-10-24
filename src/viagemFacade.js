const VooServico = require('./servicos/vooServico');
const HotelServico = require('./servicos/hotelServico');
const AluguelCarroServico = require('./servicos/aluguelCarroServico');

class ViagemFacade {

    constructor() {

        this.vooServico = new VooServico();

        this.hotelServico = new HotelServico();

        this.aluguelCarroServico = new AluguelCarroServico();

    }

    reservarViagemCompleta(destino, dataVoo, localizacaoHotel, dataCheckIn, dataCheckOut, dataAluguel) {

        const voo = this.vooServico.reservarVoo(destino, dataVoo);

        const hotel = this.hotelServico.reservarHotel(localizacaoHotel, dataCheckIn, dataCheckOut);

        const carro = this.aluguelCarroServico.alugarCarro(localizacaoHotel, dataAluguel);


        return {

            voo,

            hotel,

            carro

        };

    }
    
}

module.exports = ViagemFacade;
