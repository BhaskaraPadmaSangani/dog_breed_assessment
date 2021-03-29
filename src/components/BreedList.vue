<template>
  <div>
    <br />
    <h3>Welcome to Dog Breed Images App!</h3>
    <p>Here are some sample images of each dog breed.</p>
    <grid-layout
      :layout.sync="allBreedList"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :vertical-compact="true"
      :margin="[5, 5]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(value, keys) in allBreedList"
        :key="keys"
        @click="navigate(keys)"
      >
        <DisplayAllBreedImages
          :name="keys"
          class="image"
        ></DisplayAllBreedImages>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import DisplayAllBreedImages from "./DisplayAllBreedImages";
import { mapGetters } from "vuex";

export default {
  name: "BreedList",
  components: {
    DisplayAllBreedImages,
  },
  computed: mapGetters(["allBreedList"]),

  methods: {
    navigate(keys) {
      this.$router.push("/images/" + keys);
    },
  },
};
</script>

<style scoped>
.image {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
}
.image:hover {
  transform: scale(1.2);
  font-weight: bold;
}
</style>
