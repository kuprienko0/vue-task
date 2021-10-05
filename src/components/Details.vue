<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn
            color="white"
            class="float-left"
        >
          <router-link to="/">Back</router-link>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <div class="text-overline mb-4"></div>
        <v-list-item-title class="text-h4 mb-1">{{cardDetails.name}}</v-list-item-title>
        <v-list-item-subtitle class="text-h6 mb-1">{{cardDetails.type}}</v-list-item-subtitle>
        <v-list-item-subtitle class="text-h6 mb-1">{{cardDetails.points}} points</v-list-item-subtitle>
        <v-list-item-subtitle class="text-h5 mb-1">Description: {{cardDetails.description}}</v-list-item-subtitle>
        <v-list-item-subtitle class="text-h5 mb-1">Reporter: {{cardDetails.reporter}}</v-list-item-subtitle>
        <v-list-item-subtitle class="text-h5 mb-1">Assign to: {{cardDetails.assign}}</v-list-item-subtitle>
        <v-list-item-subtitle class="text-h5 mb-1">Team: {{ (cardDetails.checkedTeam || []).join(',')}}</v-list-item-subtitle>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Details",
  data: () => ({
    cardDetails: {},
  }),

  computed:{
    id() {
        return this.$route.params.id
    }
  },

  created() {
    this.cardDetails = this.$store.getters.getCardDetails(this.id)
  },
}
</script>

<style scoped>

</style>