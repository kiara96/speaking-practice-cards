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
        text: "Vorrei prenotare un tavolo per due persone.",
        translation: "I would like to book a table for two people.",
        completed: false
      },
      {
        text: "Mi può portare il menu, per favore?",
        translation: "Could you bring me the menu, please?",
        completed: false
      },
      {
        text: "Sono pronto per ordinare.",
        translation: "I am ready to order.",
        completed: false
      }
    ],
    vocabulary: [
      { word: "prenotare", translation: "to book" },
      { word: "tavolo", translation: "table" },
      { word: "menu", translation: "menu" },
      { word: "ordinare", translation: "to order" },
      { word: "per favore", translation: "please" },
      { word: "conto", translation: "bill" },
      { word: "cameriere", translation: "waiter" },
      { word: "acqua", translation: "water" },
      { word: "antipasto", translation: "starter" },
      { word: "dolce", translation: "dessert" }
    ]
  },
  {
    id: 2,
    title: "At the Train Station",
    roles: ["Passeggero", "Bigliettaio"],
    sentences: [
      {
        text: "Un biglietto per Roma, per favore.",
        translation: "A ticket to Rome, please.",
        completed: false
      },
      {
        text: "A che ora parte il prossimo treno?",
        translation: "What time does the next train leave?",
        completed: false
      },
      {
        text: "Da quale binario parte?",
        translation: "From which platform does it leave?",
        completed: false
      }
    ],
    vocabulary: [
      { word: "biglietto", translation: "ticket" },
      { word: "treno", translation: "train" },
      { word: "binario", translation: "platform" },
      { word: "partire", translation: "to leave" },
      { word: "prossimo", translation: "next" },
      { word: "ritardo", translation: "delay" },
      { word: "orario", translation: "schedule" },
      { word: "viaggio", translation: "trip" },
      { word: "fermata", translation: "stop" },
      { word: "controllore", translation: "conductor" }
    ]
  }
]; 