class HotelServico {
    
    reservarHotel(localizacao, dataCheckIn, dataCheckOut) {

        console.log(`Hotel reservado em ${localizacao} de ${dataCheckIn} até ${dataCheckOut}`);

        return { localizacao, dataCheckIn, dataCheckOut };

    }

}

module.exports = HotelServico;
