<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Update something vue-ish"
      label="Edit Note"
    >
      <template v-slot:buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">
          Cancel / Go back
        </button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Update Vue Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
//IMPORTS=======================================IMPORTS//
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

//ROUTER=============================================ROUTER//
const route = useRoute();
const router = useRouter();

//STORE=============================================STORE//
const storeNotes = useStoreNotes();

//NOTE=============================================NOTE//
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

//SAVE_CLICKED=============================================SAVE_CLICKED//
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
