let inquirer = require('inquirer');
let axios = require('axios');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'username'
        },
        {
            type: 'list',
            message: 'What is your favorite color?',
            name: 'color',
            choices: [
                'blue',
                'yellow',
                'green',
                'red'
            ]

        }
    ])
    .then(function(answers){
        console.log(answers);
        const queryUrl = `https://api.github.com/users/${answers.name}/repos?per_page=100`;

        
        return axios.get(queryUrl)
    })
    .then(function(res) {
            console.log(res.data);
            
            console.log(res.data[0].owner.avatar_url);
    })
