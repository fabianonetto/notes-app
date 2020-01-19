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

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
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

const listNotes = () => {
    console.log(chalk.green.bold('Your notes'))

    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.blue.bold(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log(chalk.green.bold(noteFound.title))
        console.log(noteFound.body)
    }
    else {
        console.log(chalk.red('Note not found'))
    }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
