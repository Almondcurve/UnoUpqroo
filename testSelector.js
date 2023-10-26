const inquirer = require('inquirer');

const options = [
  { name: 'Opción 1', value: 'opcion1' },
  { name: 'Opción 2', value: 'opcion2' },
  { name: 'Opción 3', value: 'opcion3' },
];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedOption',
      message: 'Selecciona una opción:',
      choices: options,
    },
  ])
  .then((answers) => {
    console.log('Opción seleccionada:', answers.selectedOption);
  });