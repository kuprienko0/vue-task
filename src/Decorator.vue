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
          @click="deleteCards"
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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {Action, Mutation} from "vuex-class";

@Component
export default class Card extends Vue {

  @Action('deleteCard') deleteCard
  @Mutation('showModal') showModal
  @Mutation('setCurrentCardID') setCurrentCardID
  @Prop(Number) readonly id: number | undefined
  @Prop(String) readonly name: string | undefined
  @Prop(String) readonly type: string
  @Prop(String) readonly description: string
  @Prop(String) readonly reporter: string
  @Prop(String) readonly assign: string
  @Prop(String) readonly points: string
  @Prop(Array) readonly checkedTeam: object


  deleteCards(){
    deleteCard({value: this.id})
  }

  editCard(){
    showModal({value: 'edit'})
    setCurrentCardID({value: this.id})
  }

}
</script>

<style scoped>

</style>
