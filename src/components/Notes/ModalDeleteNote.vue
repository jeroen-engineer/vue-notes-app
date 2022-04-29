<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
//IMPORTS==============================IMPORTS//
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

//STORE=============================================STORE//
const storeNotes = useStoreNotes();

//PROPS==============================PROPS//
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

//EMITS==============================EMITS//
const emit = defineEmits(["update:modelValue"]);

//CLOSE_MODAL==============================CLOSE_MODAL//
const closeModal = () => {
  emit("update:modelValue", false);
};

//CLICK_OUTSIDE_TO_CLOSE=================CLICK_OUTSIDE_TO_CLOSE//
const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal);

//KEYBOARD_CONTROL=================KEYBOARD_CONTROL//
const handleKeyboard = (e) => {
  if (e.key === "Escape") closeModal();
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
