import { setup, assign } from "xstate";

export const machine = setup({
  types: {
    context: {} as { score: number },
    // events: {} as
    //   | { type: "START" }
    //   | { type: "EQUAL" }
    //   | { type: "UNEQUAL" }
    //   | { type: "ONE_PERSON" }
    //   | { type: "THREE_PERSONS" }
    //   | { type: "FULLY_DIVINE" }
    //   | { type: "NOT_FULLY_DIVINE" }
    //   | { type: "DISTINCT" }
    //   | { type: "NOT_DISTINCT" },
  },
  actions: {
    incrementScore: assign({
      score: ({ context }) => context.score + 1,
    }),
  },
}).createMachine({
  context: {
    score: 0,
  },
  id: "trinitarianHeresiesQuiz",
  initial: "start",
  states: {
    start: {
      on: {
        START: {
          target: "question1",
        },
      },
      description: "Welcome to the Trinitarian Heresies Quiz!",
    },
    question1: {
      on: {
        EQUAL: {
          target: "question2",
          actions: {
            type: "incrementScore",
          },
          description: "Yes, they are all equally divine and eternal",
        },
        UNEQUAL: {
          target: "modalism",
          description:
            "No, they have different levels of divinity or importance",
        },
      },
      description: "Are the persons of the Trinity equal?",
    },
    question2: {
      on: {
        ONE_PERSON: {
          target: "modalism",
          description:
            "There is only one divine person appearing in different forms",
        },
        THREE_PERSONS: {
          target: "question3",
          actions: {
            type: "incrementScore",
          },
          description: "There are three distinct persons in one Godhead",
        },
      },
      description: "How many persons are there in the Trinity?",
    },
    modalism: {
      type: "final",
      description:
        "Your answers align with Modalism, the belief that the Father, Son, and Holy Spirit are different modes or aspects of one God, rather than three distinct persons. This view fails to recognize the distinct personhood of each member of the Trinity.",
    },
    question3: {
      on: {
        FULLY_DIVINE: {
          target: "question4",
          actions: {
            type: "incrementScore",
          },
          description: "Yes, each person is fully God",
        },
        NOT_FULLY_DIVINE: {
          target: "arianism",
          description: "No, some are lesser or created beings",
        },
      },
      description: "Are all persons of the Trinity fully divine?",
    },
    question4: {
      on: {
        DISTINCT: {
          target: "orthodoxy",
          actions: {
            type: "incrementScore",
          },
          description: "Yes, they are separate persons with unique roles",
        },
        NOT_DISTINCT: {
          target: "sabellianism",
          description: "No, they are different modes of the same person",
        },
      },
      description: "Are the persons of the Trinity distinct from each other?",
    },
    arianism: {
      type: "final",
      description:
        "Your answers align with Arianism, the belief that the Son of God was created by God the Father and is therefore not co-eternal with the Father. This heresy denies the full divinity of Jesus Christ.",
    },
    orthodoxy: {
      type: "final",
      description:
        "Congratulations! Your answers align with Orthodox Trinitarianism, which affirms that there is one God in three distinct, co-equal, and co-eternal persons: the Father, the Son, and the Holy Spirit. This is the correct view maintained by mainstream Christianity.",
    },
    sabellianism: {
      type: "final",
      description:
        "Your answers align with Sabellianism, similar to Modalism, which is the belief that the Father, Son, and Holy Spirit are different modes or manifestations of the one God. It denies the simultaneous existence of the three persons of the Trinity.",
    },
  },
});