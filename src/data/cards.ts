export interface Vocabulary {
  word: string;
  translation: string;
}

export interface PracticeCard {
  id: number;
  title: string;
  roles: [string, string];
  sentences: {
    text: string;
    translation: string;
    completed: boolean;
  }[];
  vocabulary: Vocabulary[];
}

export const practiceCards: PracticeCard[] = [
  {
    id: 1,
    title: "AL RISTORANTE",
    roles: ["CLIENTE", "CAMERIERE"],
    sentences: [
      {
        text: "Vorresti un tavolo per due persone ma non hai prenotato.",
        translation: "I would like to book a table for two people.",
        completed: false
      },
      {
        text: "Vorresti sapere se ci sono opzioni vegane.",
        translation: "Could you bring me the menu, please?",
        completed: false
      },
      {
        text: "Vorresti pagare con la carta di credito e lasciare una mancia, ma non sai se lasciare la mancia in contanti o con la carta.",
        translation: "I am ready to order.",
        completed: false
      }
    ],
    vocabulary: [
      { word: "prenotare", translation: "to book" },
      { word: "apparecchiare", translation: "table" },
      { word: "sedersi", translation: "menu" },
      { word: "ordinare", translation: "to order" },
      { word: "menù", translation: "please" },
      { word: "conto", translation: "bill" },
      { word: "cameriere", translation: "waiter" },
      { word: "allergia", translation: "water" },
      { word: "contorno", translation: "starter" },
      { word: "dolce", translation: "dessert" }
    ]
  },
  {
    id: 2,
    title: "IN BIBLIOTECA",
    roles: ["UTENTE", "BIBLIOTECARIO"],
    sentences: [
      {
        text: "Vorresti sapere dove si trova un libro specifico ma non conosci il reparto.",
        translation: "Could you tell me where I can find a specific book?",
        completed: false
      },
      {
        text: "Vorresti iscriverti alla biblioteca e chiedere quali documenti servono.",
        translation: "I’d like to register for a library card; what documents do I need?",
        completed: false
      },
      {
        text: "Vorresti sapere come rinnovare un prestito perché il termine sta per scadere.",
        translation: "How can I renew my loan? The due date is coming up.",
        completed: false
      }
    ],
    vocabulary: [
      { word: "prestito", translation: "loan" },
      { word: "reparto", translation: "section" },
      { word: "iscriversi", translation: "to register" },
      { word: "tessera", translation: "card" },
      { word: "scadenza", translation: "due date" },
      { word: "restituire", translation: "to return" },
      { word: "silenzio", translation: "librarian" },
      { word: "consultazione", translation: "consultation" },
      { word: "catalogo", translation: "catalog" },
      { word: "sala studio", translation: "study room" }
    ]
  },
  {
    id: 3,
    title: "IN FARMACIA",
    roles: ["CLIENTE", "FARMACISTA"],
    sentences: [
      {
        text: "Vorresti acquistare un antinfiammatorio senza prescrizione.",
        translation: "I’d like to buy an over-the-counter anti-inflammatory.",
        completed: false
      },
      {
        text: "Vorresti sapere se un medicinale può dare effetti collaterali con un altro farmaco che stai assumendo.",
        translation: "Can this medicine interact with another drug I’m taking?",
        completed: false
      },
      {
        text: "Vorresti chiedere il prezzo di un prodotto dermatologico specifico.",
        translation: "How much does this skincare product cost?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "ricetta", translation: "prescription" },
      { word: "farmaco", translation: "medicine" },
      { word: "effetti collaterali", translation: "side effects" },
      { word: "tessera sanitaria", translation: "interaction" },
      { word: "antinfiammatorio", translation: "anti-inflammatory" },
      { word: "pomata", translation: "ointment" },
      { word: "dosaggio", translation: "dosage" },
      { word: "antidolorifico", translation: "painkiller" },
      { word: "ricarica", translation: "refill" },
      { word: "farmacista", translation: "pharmacist" }
    ]
  },
  {
    id: 4,
    title: "ALL'UFFICIO POSTALE",
    roles: ["CLIENTE", "IMPIEGATO POSTALE"],
    sentences: [
      {
        text: "Vorresti spedire un pacco internazionale e chiedere le tariffe.",
        translation: "I’d like to send an international package; what are the rates?",
        completed: false
      },
      {
        text: "Vorresti sapere quanto tempo ci vuole per una consegna standard.",
        translation: "How long does standard delivery take?",
        completed: false
      },
      {
        text: "Vorresti ritirare una raccomandata ma non hai con te il codice esatto.",
        translation: "I’m here to collect a registered letter, but I don’t have the exact code.",
        completed: false
      }
    ],
    vocabulary: [
      { word: "pacco", translation: "package" },
      { word: "spedizione", translation: "shipment" },
      { word: "raccomandata", translation: "registered mail" },
      { word: "tariffa", translation: "rate" },
      { word: "consegna", translation: "delivery" },
      { word: "ufficio postale", translation: "post office" },
      { word: "francobollo", translation: "stamp" },
      { word: "modulo", translation: "form" },
      { word: "prezzo", translation: "tracking" },
      { word: "ritiro", translation: "pickup" }
    ]
  },
  {
    id: 5,
    title: "AL BANCO DEL SUPERMERCATO",
    roles: ["CLIENTE", "COMMESSO"],
    sentences: [
      {
        text: "Vorresti sapere dov’è il banco dei surgelati.",
        translation: "Could you tell me where the frozen foods section is?",
        completed: false
      },
      {
        text: "Vorresti chiedere se hanno prodotti senza glutine.",
        translation: "Do you have any gluten-free products?",
        completed: false
      },
      {
        text: "Vorresti sapere il prezzo al chilo di un formaggio tipico.",
        translation: "What is the price per kilo of this cheese?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "surgelati", translation: "frozen foods" },
      { word: "reparto", translation: "department" },
      { word: "offerta", translation: "offer" },
      { word: "scaffale", translation: "shelf" },
      { word: "glutine", translation: "gluten" },
      { word: "prezzo al chilo", translation: "price per kilo" },
      { word: "cassa", translation: "checkout" },
      { word: "scontrino", translation: "receipt" },
      { word: "promozione", translation: "promotion" },
      { word: "cliente", translation: "customer" }
    ]
  },
  {
    id: 6,
    title: "IN ALBERGO",
    roles: ["OSPITE", "RECEPTIONIST"],
    sentences: [
      {
        text: "Vorresti prenotare una camera matrimoniale per due notti.",
        translation: "I’d like to book a double room for two nights.",
        completed: false
      },
      {
        text: "Vorresti chiedere se il prezzo include la colazione.",
        translation: "Does the rate include breakfast?",
        completed: false
      },
      {
        text: "Vorresti sapere a che ora è il check-out.",
        translation: "What time is check-out?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "prenotazione", translation: "reservation" },
      { word: "camera matrimoniale", translation: "double room" },
      { word: "colazione", translation: "breakfast" },
      { word: "mezza pensione", translation: "check-in" },
      { word: "tassa di soggiorno", translation: "check-out" },
      { word: "tariffa", translation: "rate" },
      { word: "chiave", translation: "key" },
      { word: "reception", translation: "reception" },
      { word: "servizio in camera", translation: "room service" },
      { word: "balcone", translation: "balcony" }
    ]
  },
  {
    id: 7,
    title: "ALLA STAZIONE FERROVIARIA",
    roles: ["VIAGGIATORE", "BIGLIETTAIO"],
    sentences: [
      {
        text: "Vorresti acquistare un biglietto di sola andata per Roma.",
        translation: "I’d like a one-way ticket to Rome.",
        completed: false
      },
      {
        text: "Vorresti sapere da quale binario parte il prossimo treno per Milano.",
        translation: "Which platform does the next train to Milan depart from?",
        completed: false
      },
      {
        text: "Vorresti chiedere se è possibile cambiare il biglietto per un altro orario.",
        translation: "Can I change my ticket to a different departure time?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "convalidare", translation: "ticket" },
      { word: "viaggiare", translation: "one-way" },
      { word: "rimandare", translation: "return" },
      { word: "binario", translation: "platform" },
      { word: "ritardo", translation: "delay" },
      { word: "orario", translation: "timetable" },
      { word: "vagone", translation: "train" },
      { word: "viaggio", translation: "journey" },
      { word: "prenotazione", translation: "reservation" },
      { word: "bigliettaio", translation: "ticket clerk" }
    ]
  },
  {
    id: 8,
    title: "DAL BANCO PIZZA DA ASPORTO",
    roles: ["CLIENTE", "PIZZAIOLO"],
    sentences: [
      {
        text: "Vorresti ordinare una pizza con fiori di zucca e burrata.",
        translation: "I’d like a Margherita pizza with extra mozzarella.",
        completed: false
      },
      {
        text: "Vorresti chiedere quanto tempo ci vorrà per l’asporto.",
        translation: "How long will it take for the takeaway?",
        completed: false
      },
      {
        text: "Vorresti sapere se è possibile avere l’impasto integrale.",
        translation: "Is it possible to have whole-wheat dough?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "prenotare", translation: "takeaway" },
      { word: "cuocere", translation: "dough" },
      { word: "tagliare", translation: "mozzarella" },
      { word: "condimenti", translation: "toppings" },
      { word: "forno a legna", translation: "wood-fired oven" },
      { word: "consegna", translation: "delivery" },
      { word: "cottura", translation: "cooking" },
      { word: "taglia", translation: "size" },
      { word: "asporto", translation: "menu" },
      { word: "farina", translation: "customer" }
    ]
  },
  {
    id: 9,
    title: "ALL'EDICOLA",
    roles: ["CLIENTE", "TABACCAIO"],
    sentences: [
      {
        text: "Vorresti comprare l'ultima edizione di una rivista e chiedere il prezzo.",
        translation: "I’d like to buy cigarettes; what is the price per pack?",
        completed: false
      },
      {
        text: "Vorresti sapere se vendono gratta e vinci.",
        translation: "Do you sell scratch-off lottery tickets?",
        completed: false
      },
      {
        text: "Vorresti chiedere se è possibile utilizzare il telefono per pagare.",
        translation: "Where can I find the postcards in the shop?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "comprare", translation: "cigarettes" },
      { word: "rivista", translation: "scratch-off tickets" },
      { word: "cartolina", translation: "postcards" },
      { word: "lotteria", translation: "lottery" },
      { word: "accendino", translation: "lighter" },
      { word: "giornale", translation: "betting slip" },
      { word: "allegato", translation: "receipt" },
      { word: "edicola", translation: "newsstand" },
      { word: "orari di apertura", translation: "cigar" },
      { word: "tabaccheria", translation: "tobacco shop" }
    ]
  },
  {
    id: 10,
    title: "IN PALESTRA",
    roles: ["ISCRITTO", "ISTRUTTORE"],
    sentences: [
      {
        text: "Vorresti chiedere informazioni sulle tariffe mensili e il tipo di abbonamenti.",
        translation: "Could you give me information about your monthly rates and membership plans?",
        completed: false
      },
      {
        text: "Vorresti sapere quali corsi di gruppo vengono offerti e gli orari disponibili.",
        translation: "What group classes do you offer and when?",
        completed: false
      },
      {
        text: "Vorresti chiedere se è possibile prenotare una lezione privata con una personal trainer.",
        translation: "Is it possible to book a private personal training session?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "allenarsi", translation: "membership" },
      { word: "iscriversi", translation: "rate" },
      { word: "impegnarsi", translation: "private lesson" },
      { word: "attrezzi", translation: "personal trainer" },
      { word: "lezioni", translation: "weight room" },
      { word: "piscina", translation: "group class" },
      { word: "istruttore", translation: "instructor" },
      { word: "orario", translation: "schedule" },
      { word: "spogliatoio", translation: "locker room" },
      { word: "iscrizione", translation: "enrollment" }
    ]
  }
];