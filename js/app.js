const { createApp } = Vue

createApp({
  data() {
    return {

        currentChat: 0,
        inputValue:'',
        newMessage:'',
        autoAnswer: null,
        currentTime:'',
        currentMessage: '',

        //Contatti con messaggi
        
        contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
              },
              {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
              }
            ],
            },
            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
              {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
              },
              {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
              },
              {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
              }
            ],
            },
            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
              {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
              },
              {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
              },
              {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
              }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
              }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
              }
            ],
            },
            {
            name: 'Claudia',
            avatar: './img/avatar_6.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
              },
              {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
              }
            ],
            },
            {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
              }
            ],
            },
            {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
              {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
              },
              {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
              },
              {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
              }
            ],
            }
        ],
    }
  },

  //COMPUTED

  computed:{

    currentContact(){
      return this.filteredContacts[this.currentChat]
    },

    filteredContacts(){
      let displayedContacts = this.contacts

      if(this.inputValue !== '' && this.inputValue){
        displayedContacts = displayedContacts.filter((profile) => {
          return profile.name
            .toUpperCase()
            .includes(this.inputValue.toUpperCase())
        })
      }
      return displayedContacts
    }
  },


  //METHODS
  
  methods:{

    //Funzione che permette l'invio di messaggi da parte dell'utente.
    sendMessage(currentChat){
      if(this.newMessage !== ''){

        this.filteredContacts[currentChat].messages.push(
          {
            date: '10/01/2020 15:51:00',
            message: this.newMessage,
            status: 'sent'
          }
        )
        this.autoAnswer = setTimeout(() => this.automatedAnswer(currentChat),1000);  
      }
      this.newMessage = ''
    },

    //Funzione che genera una risposta.
    automatedAnswer(currentChat){
      this.filteredContacts[currentChat].messages.push(
        {
          date: '10/01/2020 15:51:00',
          message: 'ok',
          status: 'received'
        }
      )
    },

    //Funzione che permette di cancellare i messaggi.
    deleteMessage(array, index){
      array.splice(index,1)
      console.log(index)
    },

    // //Funzione che fa sì che i nuovi messaggi abbiano l'orario attuale.
    // timeAcquisition(){
      
    //   return currentTime = Date.now()
      
    // }
  }
  
}).mount('#app')