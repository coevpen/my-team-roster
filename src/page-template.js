
function addManager(){
    // return this html for manager
}

function addIntern(){
    // return this html for intern

    // if no intern, return blank ''

}

function addEngineer() {
    // return this html for engineer
    // if no engineer, return blank ''
}

function generatePage(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body class="bg-secondary bg-opacity-10">
        <!-- header with title -->
        <header class="bg-primary text-white">
            <h1>My Team</h1>
        </header>
    
        <!-- container holding the team members -->
        <main class="container">
            <div class="row">
                <div class="col-md-4 col-sm-1">
                    <div class="card border-info mb-3">
                        <div class="card-header text-white bg-info bg-gradient">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle"><i class="fas fa-crown"></i> Manager</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 1</li>
                                <li class="list-group-item">Email: <a href="mailto: email@email.com">email@email.com</a></li>
                                <li class="list-group-item">Office Number: 1</li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-sm-1">
                    <div class="card border-info mb-3">
                        <div class="card-header text-white bg-info bg-gradient">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle"><i class="fas fa-hat-wizard"></i> Engineer</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 2</li>
                                <li class="list-group-item">Email: <a href="mailto: email@email.com">email@email.com</a></li>
                                <li class="list-group-item">Github: <a href="#" target="_blank">githubName</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-sm-1">
                    <div class="card border-info mb-3">
                        <div class="card-header text-white bg-info bg-gradient">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle"><i class="fas fa-hat-wizard"></i> Engineer</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 3</li>
                                <li class="list-group-item">Email: <a href="mailto: email@email.com">email@email.com</a></li>
                                <li class="list-group-item">Github: <a href="#" target="_blank">githubName</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-sm-1">
                    <div class="card border-info mb-3">
                        <div class="card-header text-white bg-info bg-gradient">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle"><i class="fas fa-hat-wizard"></i> Engineer</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 4</li>
                                <li class="list-group-item">Email: <a href="mailto: email@email.com">email@email.com</a></li>
                                <li class="list-group-item">Github: <a href="#" target="_blank">githubName</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 col-sm-1">
                    <div class="card border-info mb-3">
                        <div class="card-header text-white bg-info bg-gradient">
                            <h5 class="card-title">Name</h5>
                            <h6 class="card-subtitle"><i class="fas fa-book"></i> Intern</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 5</li>
                                <li class="list-group-item">Email: <a href="mailto: email@email.com">email@email.com</a></li>
                                <li class="list-group-item">School: University Name</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    
    </body>
    </html>`;
}

module.exports = generatePage;