const travel = {
    location : 'Centro Max, Blvd. Adolfo López Mateos 2518, Jardines de Jerez, 37530 León, Gto.',
    destination : 'Universidad Tecnológica de León, Blvd. Universidad Tecnológica 225, Universidad Tecnologica, San Carlos la Roncha, 37670 León, Gto.',
    payment_method : 'Cash',
    payment : 450,
    coin : 'MX',
    distance : '7.4',
    unit_of_measure : 'KM',

    getToPaid : function() {
        return `Payment method: ${this.payment_method}\nTo paid: ${this.payment} ${this.coin}`
    },
    getTravel : function() {
        return `Location: ${this.location}\nDestination: ${this.destination}\nDistance: ${this.distance} ${this.unit_of_measure}`
    }
}

console.log('Travel\n-------------------------')
console.log(travel.getTravel())
console.log(travel.getToPaid())