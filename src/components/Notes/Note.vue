<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
//IMPORTS
import { computed } from "vue";
//PROPS
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

//EMITS
const emit = defineEmits(["deleteClicked"]);

//CHARACTER LENGTH
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

//HANDLEDELETECLICKED
const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
