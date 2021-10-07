import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [
            {
                id: 742763972978,
                type: 'bug',
                name: 'Task1',
                description: 'defcwecf',
                points: '5',
                assign: 'Viktoria',
                reporter: 'Viktoria',
            },
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
                return card
            })
        },

        deleteCard(state, cardId){
            const cards = state.cards
            for (let i = 0; i < cards.length; i++){
                if (cards[i].id === cardId){
                    cards.splice(i,1)
                    return
                }
            }
            state.cards = state.cards.find(card => card.id !== cardId)

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
        },

        clearCurrentID(state){
            state.currentCardID = ''
        }

    },

    actions: {
        deleteCard({commit}, id){
            commit('deleteCard', id)
        }
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