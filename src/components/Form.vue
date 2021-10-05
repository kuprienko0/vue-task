<template>
  <v-card>
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
                v-model="getCardDetails.name"
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
                :value="getCardDetails.description"
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

  </v-card>
</template>

<script>
export default {
  name: "Form",

  data: () => ({
    dialog: false,
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
        name: this.name,
        type: this.type,
        description: this.description,
        reporter: this.reporter,
        assign: this.assign,
        points: this.points,
        checkedTeam: this.checkedTeam,
      }
      this.$store.commit("addCard", payload)
      this.dialog = false;
    }
  },


}
</script>

<style scoped>

</style>