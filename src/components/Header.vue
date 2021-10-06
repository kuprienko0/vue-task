<template>
  <v-app-bar
      color="yellow"
      height="60px"
      max-height="60px"
  >
    <v-row justify="end">
      <v-btn
          color="white"
          @click="showModal"
      >
        Add task
      </v-btn>
    </v-row>
    <v-row>
      <Modal title="Add task" type="create"/>
    </v-row>
  </v-app-bar>
</template>

<script>
import Modal from "./Modal"
export default {
  name: "Header",

  components:{
    Modal
  },

  methods: {
    showModal() {
      this.$store.commit('showModal', 'create')
    }
  }
}
</script>

<style scoped>

</style>