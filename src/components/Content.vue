<template>
  <v-col cols="12">
<!--    <div id="fullContent" v-if="listOfCards.length < 1" class="text-center d-flex flex-wrap">-->
    <div id="fullContent" v-if="getCards.length > 0" class="text-center d-flex flex-wrap">
      <card-item class="mr-2 ml-2 mt-2 mb-2" v-for="card in getCards"
                 :key="card.id"
                 :id="card.id"
                 :name="card.name"
                 :type="card.type"
                 :description="card.description"
                 :reporter="card.reporter"
                 :assign="card.assign"
                 :points="card.points"
                 :checked-team="card.checkedTeam"
      />
    </div>
    <div id="emptyContent" v-else>
      <div> Empty array of cards </div>
    </div>
  </v-col>
</template>

<script>
import Card from "./Card";
export default {
  components: {
    'card-item': Card
  },
  name: 'Content',

  data: () => ({
    listOfCards: [],
  }),

  computed:{
    getCards(){
      return this.$store.state.cards
    }
  },

  methods:{
    //
  },

  // created() {
  //   this.listOfCards = this.getCards
  // },

}
</script>
