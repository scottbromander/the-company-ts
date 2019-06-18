import express = require('express');
import { Company } from './modules/Company';

const app: express.Application = express();

const company: Company = new Company('Meow Meow meow meow');

app.get('/', function(req,res) {
    res.send('Hail Enhydra!');
});

app.get('/api/employees', (req,res) => {
    res.send(company.getAllEmployees());
});

app.get('/api/allsalaries', (req,res) => {
    res.send(company.getAllSalaries());
});

app.get('/api/history', (req,res) => {
    res.send(company.getHistory());
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});