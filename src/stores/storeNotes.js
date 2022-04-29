import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "lorem ipsum dolor sit, lorem, lorem ipsum dolor sit, lorem ipsum dolor sit, lorem ips, lorem ipsum dolor sit, lorem ips, lorem",
        },
        {
          id: "id2",
          content:
            "Short note 2, lorem ipsum dolor sit, lorem, lorem ipsum dolor sit, lorem ipsum dolor sit, lorem ips, lorem ipsum dolor sit, lorem ips, lorem",
        },
        {
          id: "id3",
          content:
            "Note number 3 lorem ipsum dolor sit, lorem, lorem ipsum dolor sit, lorem ipsum dolor sit, lorem ips, lorem ipsum dolor sit, lorem ips, lorem",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      const currentDate = new Date().getTime();
      const id = currentDate.toString();
      const note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id != idToDelete);
      this.notes;
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
