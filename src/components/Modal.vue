<template>
  <v-row justify="center">
    <v-dialog
        v-model="getModalVisible"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Task editor</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Name *"
                    required
                    v-model="cardData.name"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-select
                    :items="['task', 'bug', 'defect', 'story']"
                    label="Type *"
                    v-model="cardData.type"
                    required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Description"
                    v-model="cardData.description"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-select
                    :items="['Vasil', 'Petro', 'Viktoria', 'Maria', 'Ivan', 'Sergiy', 'Anna', 'John']"
                    label="Reporter"
                    v-model="cardData.reporter"
                    required
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                    :items="['Vasil', 'Petro', 'Viktoria', 'Maria', 'Ivan', 'Sergiy', 'Anna', 'John']"
                    label="Assign to"
                    v-model="cardData.assign"
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    :items="['1', '2', '3', '5', '8', '13', '20', '100' ]"
                    label="Points *"
                    hint="amount of time per task"
                    v-model="cardData.points"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-autocomplete
                    :items="['FE', 'BE', 'Desc', 'PM', 'BA', 'QC']"
                    label="Team"
                    multiple
                    v-model="cardData.checkedTeam"
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="yellow"
              @click="hideModal"
          >
            Close
          </v-btn>
          <v-btn
              color="yellow"
              @click="saveCard"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Modal",

  data: () => ({
    type: 'create',
    cardData:{
      name: '',
      type: '',
      description: '',
      reporter: '',
      assign: '',
      points: '',
      checkedTeam: [],
    }
  }),

  methods: {
    addCard(){
      const payload = {
        id: Date.now(),
        name: this.cardData.name,
        type: this.cardData.type,
        description: this.cardData.description,
        reporter: this.cardData.reporter,
        assign: this.cardData.assign,
        points: this.cardData.points,
        checkedTeam: this.cardData.checkedTeam,
      }
      this.$store.commit("addCard", payload)
      this.$store.commit("hideModal");
    },

    editCard(){
      const id = this.getCardID()
      console.log(id)
      const payload = {
        id: id,
        name: this.cardData.name,
        type: this.cardData.type,
        description: this.cardData.description,
        reporter: this.cardData.reporter,
        assign: this.cardData.assign,
        points: this.cardData.points,
        checkedTeam: this.cardData.checkedTeam,
      }
      this.$store.commit("editCard", payload)
      this.dialog = false;
    },

    hideModal() {
      this.$store.commit("hideModal");
    },

    getModalType(){
      return this.$store.state.modalType
    },

    saveCard(){
      const type = this.getModalType()
      type === 'edit' ? this.editCard() : this.addCard()
    },

    getCardID(){
      return this.$store.state.currentCardID
    },

    getCardDetails(){
      const storeDetails = this.$store.getters.getCardDetails(this.getCardID())
      const type = this.getModalType()
      return type === 'edit' ? this.cardData = {...storeDetails} : this.cardData
    },
  },

  computed:{
    // getCardDetails(){
    //   console.log('computed', this.$store.getters.getCardDetails(this.id))
    //   const storeDetails = this.$store.getters.getCardDetails(this.id)
    //   let cardDetails = storeDetails || {
    //     id: this.id,
    //     name: this.name,
    //     type: this.type,
    //     description: this.description,
    //     reporter: this.reporter,
    //     assign: this.assign,
    //     points: this.points,
    //     checkedTeam: this.checkedTeam,
    //   }
    //   return cardDetails
    // },

    // getCardDetails(){
    //   const storeDetails = this.$store.getters.getCardDetails(this.id)
    //   return storeDetails ? this.cardData = storeDetails : this.cardData
    // }

    getModalVisible() {
      return this.$store.getters.getModalVisible
    },

  },

  beforeUpdate() {
    this.getCardDetails()
  }
}
</script>

<style scoped>

</style>