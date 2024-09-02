import { setup, assign } from "xstate";

export const machine = setup({
  types: {
    context: {} as { score: number; history: string[] },
    events: {} as
      | { type: "ACCEPT" }
      | { type: "REFUSE" }
      | { type: "GOD_FATHER" }
      | { type: "JESUS_CHRIST" }
      | { type: "HOLY_SPIRIT" }
      | { type: "MELCHISEDEK" }
      | { type: "NO" }
      | { type: "DIDNT_EXIST" }
      | { type: "YES" }
      | { type: "HOLY_SPIRIT_MANIFESTATION" }
      | { type: "JESUS_PREVIOUS_LIFE" }
      | { type: "OTHER_DEMIURGES" }
      | { type: "PEACEMAKERS" }
      | { type: "ALL_CHILDREN" }
      | { type: "BEFORE_TIME" }
      | { type: "ALWAYS" }
      | { type: "UPON_CONCEPTION" }
      | { type: "UPON_BAPTISM" }
      | { type: "IRRELEVANT" }
      | { type: "AROUND_0_AD" }
      | { type: "NO_HISTORICAL_EVIDENCE" }
      | { type: "FATHER" }
      | { type: "SON" }
      | { type: "BACK" },
  },
  actions: {
    incrementScore: assign({
      score: ({ context }) => context.score + 1,
    }),
    addToHistory: assign({
      history: ({ context, event }) => [...context.history, event.type],
    }),
    removeFromHistory: assign({
      history: ({ context }) => context.history.slice(0, -1),
    }),
    decrementScore: assign({
      score: ({ context }) => Math.max(0, context.score - 1),
    }),
  },
}).createMachine({
  context: {
    score: 0,
    history: [],
  },
  id: "trinityQuiz3",
  initial: "Intro",
  on: {
    BACK: [
      {
        actions: ["removeFromHistory", "decrementScore"],
        target: "Intro",
        guard: ({ context }) => context.history.length === 0,
      },
      {
        actions: ["removeFromHistory", "decrementScore"],
        target: ({ context }) => context.history[context.history.length - 1] as any,
      },
    ],
  },
  states: {
    Intro: {
      on: {
        ACCEPT: {
          target: "WordQuestion",
          actions: {type: "incrementScore", type: "addToHistory"},
        },
        REFUSE: {
          target: "Atheist",
          actions: {type: "addToHistory"},
        },
      },
      description:
        "By using this site, you hereby consent to be treated as if you believe in one God, the father almighty, maker of heaven and earth, of all things visible and invisible.",
    },
    WordQuestion: {
      on: {
        GOD_FATHER: {
          target: "Jew",
          description: "God the Father",
          actions: ["addToHistory"],
        },
        JESUS_CHRIST: {
          target: "SonOfGodQuestion",
          description: "Jesus Christ",
          actions: ["incrementScore", "addToHistory"],
        },
        HOLY_SPIRIT: {
          target: "Pre-Christian Judeo-Millenialist",
          description: "The Holy Spirit",
          actions: ["addToHistory"],
        },
        MELCHISEDEK: {
          target: "MelchisedekQuestion",
          description: "Melchisedek",
          actions: ["addToHistory"],
        },
      },
      description:
        'In the beginning was the Word, and the Word was with God, and the Word was God. Which of the following does "the Word" refer to?',
    },
    Atheist: {
      type: "final",
      description:
        "You've chosen the path of atheism. This perspective rejects the existence of deities and supernatural beings, viewing the universe through a naturalistic lens. While not a Christian heresy per se, atheism challenges the fundamental premises of religious belief systems.\n\nCome on, pick a more interesting path.",
    },
    Jew: {
      type: "final",
      description:
        "While not a Christian heresy, Judaism is the monotheistic faith from which Christianity emerged. It believes in one God and awaits the coming of the Messiah, but does not recognize Jesus as the prophesied Messiah or as divine.",
    },
    SonOfGodQuestion: {
      on: {
        NO: {
          target: "MessiahQuestion",
          description: "No",
          actions: ["addToHistory"],
        },
        DIDNT_EXIST: {
          target: "member of some other religion",
          description: "Didn't even exist",
          actions: ["addToHistory"],
        },
        YES: {
          target: "OtherKidsQuestion",
          actions: {
            type: "incrementScore",
          },
          description: "Yes",
        },
      },
      description: "Was Jesus Christ the son of God?",
    },
    "Pre-Christian Judeo-Millenialist": {
      type: "final",
      description:
        "This refers to various Jewish sects that existed before or around the time of Christ, such as the Essenes who wrote the Dead Sea Scrolls. These groups often had apocalyptic beliefs and were waiting for a messianic figure, but did not identify Jesus as that figure.",
    },
    MelchisedekQuestion: {
      on: {
        HOLY_SPIRIT_MANIFESTATION: {
          target: "Pre-Christian Judeo-Millenialist",
          description: "A manifestation of the Holy Spirit",
        },
        JESUS_PREVIOUS_LIFE: {
          target: "Sethian",
          description: "Jesus Christ, in a previous life",
        },
      },
      description: "Wait, who?",
    },
    MessiahQuestion: {
      on: {
        NO: {
          target: "ProphetQuestion",
          description: "No",
        },
        YES: {
          target: "Ebionite",
          description: "Yes",
        },
      },
      description: "Was Jesus the Messiah?",
    },
    "member of some other religion": {
      type: "final",
      description:
        "Your belief that Jesus didn't exist places you outside the realm of Christian heresies and into the category of other religions or philosophical systems that don't acknowledge the historical existence of Jesus.",
    },
    OtherKidsQuestion: {
      on: {
        NO: {
          target: "BecameSonQuestion",
          actions: {
            type: "incrementScore",
          },
          description: "No",
        },
        OTHER_DEMIURGES: {
          target: "Gnostic",
          description: "Yes, other demiurges",
        },
        PEACEMAKERS: {
          target: "Hmm",
          description: "The peacemakers",
        },
        ALL_CHILDREN: {
          target: "Mormon",
          description: "Yes, we are all his children",
        },
      },
      description: "Does God have any other kids?",
    },
    Sethian: {
      type: "final",
      description:
        "Sethianism is a Gnostic sect that believed Seth, the third son of Adam and Eve, was a divine incarnation and the ancestor of a superior spiritual race. They often reinterpreted biblical stories in light of their own cosmology and beliefs about spiritual knowledge.",
    },
    ProphetQuestion: {
      on: {
        YES: {
          target: "Abrahamic Monotheist",
          description: "Yes",
        },
        NO: {
          target: "ExistenceQuestion",
          description: "No",
        },
      },
      description: "Was Jesus a prophet?",
    },
    Ebionite: {
      type: "final",
      description:
        "Ebionites were an early Jewish Christian sect that maintained Jewish law and rites. They regarded Jesus as the Messiah but not as divine, viewing him as a normal human who, because of his righteousness, was chosen by God to be the prophet of the end times.",
    },
    BecameSonQuestion: {
      on: {
        BEFORE_TIME: {
          target: "Arian",
          description: "before time",
        },
        ALWAYS: {
          target: "BirthQuestion",
          actions: {
            type: "incrementScore",
          },
          description: "always has been",
        },
        UPON_CONCEPTION: {
          target: "Socinian",
          description: "upon conception",
        },
        UPON_BAPTISM: {
          target: "Adoptionist",
          description: "upon baptism",
        },
      },
      description: "When did Jesus become the Son of God?",
    },
    Gnostic: {
      type: "final",
      description:
        "Gnosticism encompasses various religious ideas and systems prevalent in the first and second century AD. Gnostics believed in secret knowledge (gnosis) as the key to salvation. They often viewed the material world as evil, created by a lesser deity (demiurge), with the true God being distant and unknowable.",
    },
    Hmm: {
      type: "final",
      description:
        "While not a formal theological position, your answer shows familiarity with scripture. The concept of the 'peacemakers' as children of God comes from the Beatitudes in Jesus' Sermon on the Mount.",
    },
    Mormon: {
      type: "final",
      description:
        "Mormonism, or the Church of Jesus Christ of Latter-day Saints, is a restorationist Christian church that believes all humans are spiritual children of God. It teaches that Jesus is the firstborn spirit child of God and that humans can achieve a form of divinity through exaltation.",
    },
    "Abrahamic Monotheist": {
      type: "final",
      description:
        "Your views align with several Abrahamic monotheistic religions such as Islam, Baha'i Faith, or certain sects of Judaism. You're a person of the Book, for sure! These faiths recognize Jesus as a prophet or important religious figure, but not as divine or as the Son of God.",
    },
    ExistenceQuestion: {
      on: {
        NO: {
          target: "Pre-Christian Judeo-Millenialist",
          description: "No",
        },
        YES: {
          target: "Christian Unitarian",
          description: "Yes",
        },
        IRRELEVANT: {
          target: "Universal Unitarian",
          description: "Irrelevant",
        },
      },
      description: "Did Jesus exist historically?",
    },
    Arian: {
      type: "final",
      description:
        "Arianism, named after Arius of Alexandria, taught that the Son of God was created by the Father and is therefore not co-eternal with the Father. This view sees Jesus as divine but subordinate to God the Father.",
    },
    BirthQuestion: {
      on: {
        BEFORE_TIME: {
          target: "IncarnationQuestion",
          actions: {
            type: "incrementScore",
          },
          description: "before time",
        },
        AROUND_0_AD: {
          target: "Orthodox",
          description: "Around 0 AD",
        },
        NO_HISTORICAL_EVIDENCE: {
          target: "Historical-Critical Scholar",
          description: "We have no historical evidence for his existence",
        },
      },
      description: "When was Jesus born?",
    },
    Socinian: {
      type: "final",
      description:
        "Socinianism, named after Faustus Socinus, taught that Jesus Christ was not pre-existent but was created mortal by God to be the savior of mankind. This view denies the doctrine of the Trinity and the divinity of Christ.",
    },
    Adoptionist: {
      type: "final",
      description:
        "Adoptionism is the belief that Jesus was born as a mere human and later became divine, typically at his baptism. This view was declared heretical by the early church as it contradicts the doctrine of the incarnation.",
    },
    "Christian Unitarian": {
      type: "final",
      description:
        "Christian Unitarianism is a theological movement that believes in the unipersonality of God, rejecting the doctrine of the Trinity. It views Jesus as a great moral teacher and perhaps a supernatural being, but not as God incarnate.",
    },
    "Universal Unitarian": {
      type: "final",
      description:
        "Unitarian Universalism is a liberal religion characterized by its support for a free and responsible search for truth and meaning. It has no specific creedal requirements and draws inspiration from various religious and philosophical traditions.",
    },
    IncarnationQuestion: {
      on: {
        FATHER: {
          target: "Hellenist",
          description: "God the Father",
        },
        SON: {
          target: "Heinleinist",
          description: "God the Son",
        },
        HOLY_SPIRIT: {
          target: "Orthodox",
          actions: {
            type: "incrementScore",
          },
          description: "The Holy Spirit",
        },
      },
      description: "Who incarnated Jesus unto the Virgin Mary?",
    },
    Orthodox: {
      type: "final",
      description:
        "Your answers align with Orthodox Christian doctrine, which holds that Jesus Christ is the eternal Son of God, incarnate by the Holy Spirit and born of the Virgin Mary. This view maintains the full divinity and humanity of Christ, as well as the doctrine of the Trinity.",
    },
    "Historical-Critical Scholar": {
      type: "final",
      description:
        "Your perspective aligns with historical-critical scholarship, which approaches religious texts and figures from a secular, academic standpoint. This view emphasizes the importance of historical evidence and context in understanding religious claims and figures.",
    },
    Hellenist: {
      type: "final",
      description:
        "Your answer suggests a conflation of Christian and Hellenistic mythologies. In Greek mythology, Zeus was known for incarnating himself to father demigods, but this concept is foreign to Christian theology.",
    },
    Heinleinist: {
      type: "final",
      description:
        "I know where I came from, but where did all you zombies come from?",
    },
  },
});