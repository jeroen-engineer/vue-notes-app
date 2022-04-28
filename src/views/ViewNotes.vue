<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a Vue note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add Vue Note
          </button>
        </div>
      </div>
    </div>
    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
// IMPORTS
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

//NOTES
const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
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
]);

const addNote = () => {
  const currentDate = new Date().getTime();
  const id = currentDate.toString();
  const note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

//DELETE NOTE
const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id != idToDelete;
  });
};
</script>
