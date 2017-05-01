let login = (username, password) => {
    if(username !=='admin' || password !== 'kwrongpass'){
        console.log('incorrect login');
    }
};

//login ('admin','pass');
export {login}