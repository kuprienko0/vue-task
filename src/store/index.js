import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [

        ],
        dialog: false,
        modalType: 'create',
        currentCardID: ''
    },
    mutations: {
        addCard(state, payload){
            state.cards.push(payload)
        },

        editCard(state, payload){
            state.cards = state.cards.map(card =>{
                if (card.id === payload.id){
                    return {...payload}
                }
            })
        },

        deleteCard(state, cardId){
            console.log(cardId)
            console.log(state.cards.filter(card => card.id !== cardId))
            state.cards = state.cards.filter(card => card.id !== cardId)

        },

        showModal(state, type){
            state.dialog = true
            state.modalType = type
        },

        hideModal(state){
            state.dialog = false
        },

        setCurrentCardID(state, id){
            state.currentCardID = id
        }

    },
    actions: {
        //
    },
    getters: {
        getCards(state){
            return state.cards
        },

        getCardDetails: state => id =>{
            return state.cards.find(card => card.id === Number(id))
        },

        getModalVisible:(state) => state.dialog,
    }
})