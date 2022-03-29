type User = {
    name: string;
    email: string;
    adress: {
        city: string;
        state?: string;
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}, your city is ${user.adress.city} and your state is ${user.adress.state}`;
}

const user = {
    name: 'Isaac de Lyra',
    email: 'isaac@gmail.com',
    adress: {
        city: 'Natal',
        state: 'RN'
    }
}

const message = showWelcomeMessage(user)

// Cidade - UF