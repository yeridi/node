const router = (path) => {
    console.log(path);
    let routesValues = {};
    switch (path) {
        case '/' || '/welcome':
            routesValues.file = './views/index.html';
            break;
        case '/services' :
            routesValues.file = './views/services.html';
            break;
        case '/form' :
            routesValues.file = './views/formulario.html';
            break;
        case '/about' :
            routesValues.file = './views/aboutus.html';
            break;
        case '/submit' :
            routesValues.file = './views/result.html';
            break;
        default:
            routesValues.file = './views/index.html';
            break;
    }
    return routesValues;
}

module.exports = {
    router: router
}