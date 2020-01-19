const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
  return "Your notes...";
};

const removeNote = (title) => {   
    const notes = loadNotes()

    const newNotes = notes.filter((note) => note.title !== title)

    if(notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }    
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) =>  note.title === title)

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
    else {
        console.log(chalk.red.inverse('Note with title ' + title +' already exists'))
    }    
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
