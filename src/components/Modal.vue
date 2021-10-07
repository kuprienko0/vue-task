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
                    label="Name"
                    :rules="rules"
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
                    label="Type"
                    v-model="cardData.type"
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
                    label="Points"
                    hint="amount of time per task"
                    v-model="cardData.points"
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
    },
    rules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 20 || 'Max 20 characters',
    ],
  }),

  methods: {
    saveCard(){
      const type = this.getModalType
      type === 'edit' ? this.editCard() : this.addCard()
      this.hideModal()
    },

    addCard(){
      if (this.cardData.name) {
        const payload = {
          id: Date.now(),
          ...this.cardData
        }
        this.$store.commit("addCard", payload)
      }
    },

    editCard(){
      const id = this.getCardID
      const payload = {
        id: id,
        ...this.cardData
      }
      this.$store.commit("editCard", payload)
      this.hideModal()
    },

    hideModal() {
      this.$store.commit("hideModal");
      this.clearCard()
    },

    clearCard(){
      this.cardData = {
        name: '',
        type: '',
        description: '',
        reporter: '',
        assign: '',
        points: '',
        checkedTeam: [],
      }
      this.$store.commit('clearCurrentID')
    },

    getCardDetails(){
      const storeDetails = this.$store.getters.getCardDetails(this.getCardID)
      const type = this.getModalType
      return type === 'edit' ? this.cardData = {...storeDetails} : this.cardData
    },
  },

  computed:{
    getModalVisible() {
      return this.$store.getters.getModalVisible
    },

    getCardID(){
      return this.$store.state.currentCardID
    },

    getModalType(){
      return this.$store.state.modalType
    },
  },

  watch: {
    getModalVisible: function (val) {
      if (val) this.getCardDetails();
    }
  },
}
</script>

<style scoped>

</style>