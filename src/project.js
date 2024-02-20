export const projects = [
    {
        id: "1",
        name: "Keiben srl",
        description: "This is Keiben, is my first site and I was new to this type of programming. It is a stucco company and it visitable from link in below. " +
        "To create this site I used the classic html, css and javascript as frontend and as backend I used php with the use of sessions. For example, a session variable is used in the language change, which takes care of storing this information until the browser closes or the session expires. " + 
        "Php was also used to connect with the databases where the data of all the company's products are stored.",
        img: [require('./media/keiben/keiben_home.png'), require('./media/keiben/keiben_product.png')],
        link: "https://www.keibensrl.com/",
        github_repository: "",
    },
    {
        id: "2",
        name: "NoteSync",
        description: "This is an open source project that started as a simple purpose of using flask, but then it became what it is today. This app uses html, css and javascript as frontend, instead for the backend Flask (python) is used. It consists of note maker. Once subscribed, a user can create folders, notes, and groups with which to share notes with his friends. These notes can be written with a text editor and it also features an integration with Giphy for a sticker service. " + 
        "This app can be accessed at the link listed below, and the source code is also available.",
        img: [require('./media/notesync/notesync_home.jpeg'), require('./media/notesync/notesync_note.jpeg')],
        link: "https://www.notesync.it/",
        github_repository: "https://github.com/PellegrinoPiccolo/NoteSync-open",
    }
]