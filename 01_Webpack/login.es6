let login = (username, password) => {
    if(username !=='admin' || password !== 'wrongpass'){
        console.log('incorrect login');
    }
};

login ('admin','pass');