const users = [{
    firstName: 'Utkarsh',
    lastName: 'Mehta',
    email: 'utkarsh.mehta@gmail.com',
    password: 'qwerty123!!'
}, {
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@imdb.com',
    password: 'admin@123'
}];

const login = (email, password) => {
    const user = users.filter(u => u.email === email.toLowerCase() && u.password === password);
    return user.length > 0 ? {
        success: true,
        user: user[0]
    } : {
        success: false,
        message: 'Invalid email or password!'
    }
}

const signup = (firstName, lastName, email, password) => {
    if(firstName && lastName && email && password) {
        const existing = users.filter(u => u.email === email);
        if(existing.length > 0) {
            return {
                success: false,
                message: 'Email already registered!'
            }
        } else {
            users.push({
                firstName, lastName, email: email.toLowerCase(), password
            });
            return {
                success: true,
                message: 'User signed up!'
            }
        }
    } else {
        return {
            success: false,
            message: 'Fields missing!'
        }
    }
}

const list = [{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1e71",
    rank: 1,
    name: " The Godfather",
    year: 1972,
    rating: 9.1,
    numberOfRatings: 831947138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: " The Dark Knight",
    year: 2008,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg'
},{
    id: "f571b2aa-b8d9-4944-a11e-207003dc1b71",
    rank: 1,
    name: "The Shawshank Redemption",
    year: 1994,
    rating: 9.2,
    numberOfRatings: 8319470138,
    yourRating: null,
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg'
}];

const data = {
    users: {
        users,
        login,
        signup
    },
    movies: {
        list
    }
};

export default data;