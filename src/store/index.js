import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    horarios: [
      {
        Diadasemana: "Segunda",
        "Abertura": "08:00",
        "Fechamento": "17:00",
      },
      {
        "Diadasemana": "Terça",
        "Abertura": "08:00",
        "Fechamento": "17:00",
      },
      {
        "Diadasemana": "Quarta",
        "Abertura": "08:00",
        "Fechamento": "17:00",
      },
      {
        "Diadasemana": "Quinta",
        "Abertura": "08:00",
        "Fechamento": "17:00",
      },
      {
        "Diadasemana": "Sexta",
        "Abertura": "08:00",
        "Fechamento": "17:00",
      },
      {
        "Diadasemana": "Sábado",
        "Abertura": "08:00",
        "Fechamento": "14:00",
      },
      {
        "Diadasemana": "Domingo",
        "Abertura": "08:00",
        "Fechamento": "12:00",
      },
      {
        "Diadasemana": "Feriados",
        "Abertura": "08:00",
        "Fechamento": "12:00",
      }
    ],
    Cards: [
      {
        "nome": "Rações Diversas",
        "descricao": "Rações variadas com base em cada pet e também petiscos de diversos sabores",
        "img": require('../assets/Food.jpg')
      },
      {
        "nome": "Produtos para higiene",
        "descricao": "Produtos diversos como antipulgas, coleiras, roupas,etc.",
        "img": require('../assets/Cleaner.jpg')
      },
      {
        "nome": "Banho e tosa",
        "descricao": "Banho, tosa e corte de unhas para seu amiguinho",
        "img": require('../assets/Dogewash.jpg')
      }
    ],
    Cidades: []
  },
  mutations: {
    SET_CIDADES(state, payload) {
      state.Cidades = payload
    },
  },
  actions: {
    fetchCidades() {
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/regioes-intermediarias?orderBy=nome')
        .then(res => {
          this.commit('SET_CIDADES', res.data)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    getCidades(state) {
      return state.Cidades;
    },
    gethorarios(state) {
      return state.horarios
    }
  }
})
