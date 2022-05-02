const generateManager = (data) => {
    //data.name data.id data.email data.officeNumber
    return ` <div class='container'>
    <ul class="ul"> <li>
    <div class="col-md-3">
    <div class="card cardbody">
    <div class="card-header font: text-white" style="background: green">
                ${data.name}<br>
                <div class="fas fa-mug-hot">${data.getRole()}</div>
                </div>
    <div class="card-body">
        <form role="form">			
        <div class="form-group">
        <p> <b>Id:</b> ${data.id}</p>
        </div>
        <div class="form-group">
        <p> <b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <div class="form-group">
            <p> <b>Office Number:</b> ${data.officeNumber} </p>				
        </div>				
        </form>
    </div>
    </div>
</div>
</li>`;
};

const generateEngineer = (data) => {
    return ` <div class='container'>
    <ul class="ul"><li>
    <div class="col-md-3">
    <div class="card cardbody">
    <div class="card-header font: text-white" style="background: blue">
                ${data.name}<br>
                <div class="fas fa-glasses">${data.getRole()}</div>
                </div>
    <div class="card-body">
        <form role="form">			
        <div class="form-group">
        <p> <b>Id:</b>  ${data.id}</p>
        </div>
        <div class="form-group">
        <p> <b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <div class="form-group">
            <p><b>GitHub User Name:</b> <a href="https://github.com/${data.gitHub}" target="_blank" rel="noopener noreferrer">${data.gitHub}</a></p>				
        </div>				
        </form>
    </div>
    </div>
</div>
</li>`;
};

const generateIntern = (data) => {
    return `<div class='container'>
    <ul class="ul"><li>
    <div class="col-md-3">
    <div class="card cardbody">
    <div class="card-header font: text-white" style="background: lightblue">
                ${data.name}<br>
                <div class="fas fa-user-graduate">${data.getRole()}</div>
                </div>
    <div class="card-body">
        <form role="form">			
        <div class="form-group">
        <p> <b>Id:</b>  ${data.id}</p>
        </div>
        <div class="form-group">
        <p> <b>Email:</b> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <div class="form-group">
            <p><b>School:</b> ${data.school}<p/>					
        </div>				
        </form>
    </div>
    </div>
</div>
</li>`;
};

const generateCards = (data) => {
    let htmlString = "";
    //data will be an array of Employees (Manager/Intern/Engineer)
    data.forEach((element) => {
        console.log(element)
        //generate a card based on role
        if (element.getRole() === "Manager") {
            let string = generateManager(element);
            htmlString += string;
        } else if (element.getRole() === "Engineer") {
            let string = generateEngineer(element);
            htmlString += string;

        } else if (element.getRole() === "Intern") {
            let string = generateIntern(element);
            htmlString += string;
        }
    });
    return htmlString;

};


const generateHTML = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/ba0d43019a.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid" style='background-color: yellow;'>
    <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
    </div>
</div>
        ${generateCards(data)}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>`;
};

module.exports = generateHTML;