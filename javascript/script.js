const app = new Vue (
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        seen:false,                 
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        seen:false,

                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        seen:false,

                    }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        seen:false,

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        seen:false,

                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                        seen:false,

                    }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        seen:false,

                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        seen:false,

                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        seen:false,

                    }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        seen:false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        seen:false,

                    }
                    ],
                },
            ], 
            profile: 0,
            messaggio:'',
            searchForUser: '',
            light: true,
            menuPost: false,
            picked:'One',
        },
        methods: {

            // crea il messaggio
            addMessage: function() {
                if (this.messaggio != '') {
                    this.contacts[this.profile].messages.push({
                        date:this.actualDate(),
                        message:this.messaggio,
                        status:"sent",
                        seen:false,
                    });
                }
                this.messaggio='';
                setTimeout(this.answer, 1000)
            },

            // risponde al messaggio dopo un secondo 
            answer: function() {
                this.contacts[this.profile].messages.push({
                    date:this.actualDate(),
                    message:"ok",
                    status:"received",
                    seen:false,
                });
            },

            // cerca i nomi nella barra di ricerca 
            searchUser: function() {
               this.contacts.forEach(element => {
                   let a = element.name.toLowerCase();
                   let b = this.searchForUser.toLowerCase()
                   if(!a.includes(b)) {
                       element.visible = false;
                   }
               });       
               this.ricreateArray();
            },

            ricreateArray: function() {
                this.contacts.forEach(element => {
                    if(this.searchForUser == '' ) {
                        element.visible = true;
                    }
                });      
            },

            // ritorna la data e l'ora attuale 
            actualDate: function() {
                let now = dayjs();
                return now.format('DD/MM/YYYY HH:mm:ss');
            },

            deleteMessage: function(indice) {
                this.contacts[this.profile].messages.splice(indice,1)

            }
            
        }
    }
)


