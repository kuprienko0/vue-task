<template>
  <v-card
      class="mx-auto"
      width="260px"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">{{type}}</div>
        <v-list-item-title class="text-h5 mb-1">{{name}}</v-list-item-title>
        <v-list-item-subtitle>Assign to {{assign}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{points}} points</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
          color="white"
          @click="editCard"
      >
        Edit
      </v-btn>
      <v-btn
          color="white"
          @click="deleteCard"
      >
        Delete
      </v-btn>
      <v-btn
          color="white"
      >
        <router-link :to="/details/ + id">
        Details
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    type: String,
    description: String,
    reporter: String,
    assign: String,
    points: String,
    checkedTeam: Array,
  },

  components: {
    //
  },

  name: "Card",

  computed:{
    //
  },

  methods:{
    deleteCard(){
      this.$store.commit("deleteCard", this.id)
    },

    editCard(){
      this.$store.commit('showModal', 'edit')
      this.$store.commit('setCurrentCardID', this.id)
    }
  },
}
</script>

<style scoped>

</style>