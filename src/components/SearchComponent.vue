<template>
  <div class="search">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        v-model="inputValue"
        v-on:input="filteredList"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-success"
          type="button"
          :disabled="!inputValue"
          @click="selectBreed(inputValue)"
        >
          Search
        </button>
      </div>
    </div>

    <div v-if="inputValue != '' && filtered != null">
      <div
        v-for="breed in filtered"
        :key="breed"
        @click="selectBreed(breed)"
        class="dropdown-item"
      >
        {{ breed }}
      </div>
    </div>
    <br />
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
      breeds: [],
      filtered: [],
      error: "",
    };
  },
  mounted() {
    this.$store.dispatch("fetchImages", "");
    let array = this.$store.getters.allBreedList;
    this.getKeys(array);
  },
  methods: {
    getKeys(array) {
      if (array) {
        this.breeds = Object.keys(array);
      }
    },
    selectBreed(keys) {
      this.filtered = [];
      if (this.breeds.includes(keys)) {
        this.$router.push("/images/" + keys);
        this.inputValue = "";
      } else {
        this.error = "No such Breed Exists!";
      }
    },
    filteredList() {
      this.error = "";
      this.filtered = this.breeds.filter((breed) => {
        return breed.startsWith(this.inputValue.toLowerCase());
      });
    },
    setInput(value) {
      (this.inputValue = value), (this.filtered = []);
    },
  },

  computed: mapGetters(["allBreedList"]),
};
</script>

<style scoped>
.selectlist {
  height: 35px;
}
.search {
  padding-top: 10px;
  margin-right: 30%;
  margin-left: 30%;
}
.dropdown-item {
  cursor: pointer;
}
.btn {
  display: inline-flex;
  float: right;
}
input,
button {
  margin: 0;
}
</style>
