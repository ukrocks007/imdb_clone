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
    const user = users.filter(u => u.email === email && u.password === password);
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
                firstName, lastName, email, password
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

const data = {
    users: {
        users,
        login,
        signup
    }
};

export default data;