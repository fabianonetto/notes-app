const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log ('Adding a new note')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log ('Removing a new note')
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log ('Listing your notes')
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})


console.log(yargs.argv)