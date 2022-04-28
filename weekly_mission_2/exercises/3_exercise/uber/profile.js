const profile = {
    name : 'Eduardo Solis',
    cell_phone : '+52 1111111111',
    email : 'an_email@email.com',

    particulary_direction : 'Venustiano Carranza 606 1-6, Tamaulipas, 89060 Tampico, Tamps.',
    job_direction : 'C. Cristóbal Colón LB, San Andres, 55780 Jaltenco, Méx.',

    payment_methods : ['Cash', 'Debit Card 1', 'Debit Card 2', 'Credit Card'],

    getUser : function() {
        return `Name: ${this.name}, Payment method: ${this.payment_methods[0]}`
    }
}

console.log(profile.getUser())