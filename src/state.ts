import { setup, assign } from "xstate";

export const machine = setup({
  types: {
    context: {} as { score: number; history: unknown[] },
    events: {} as
      | { type: "NO" }
      | { type: "SON" }
      | { type: "YES" }
      | { type: "BACK" }
      | { type: "ACCEPT" }
      | { type: "ALWAYS" }
      | { type: "FATHER" }
      | { type: "REFUSE" }
      | { type: "GOD_FATHER" }
      | { type: "IRRELEVANT" }
      | { type: "AROUND_0_AD" }
      | { type: "BEFORE_TIME" }
      | { type: "DIDNT_EXIST" }
      | { type: "HOLY_SPIRIT" }
      | { type: "MELCHISEDEK" }
      | { type: "PEACEMAKERS" }
      | { type: "ALL_CHILDREN" }
      | { type: "JESUS_CHRIST" }
      | { type: "UPON_BAPTISM" }
      | { type: "OTHER_DEMIURGES" }
      | { type: "UPON_CONCEPTION" }
      | { type: "JESUS_PREVIOUS_LIFE" }
      | { type: "NO_HISTORICAL_EVIDENCE" }
      | { type: "HOLY_SPIRIT_MANIFESTATION" },
  },
  actions: {
    followTruePath: assign({
      score: ({ context }) => context.score + 1,
      history: ({ context, event }) => [...context.history, event.type],
    }),
    beLedAstray: assign({
      history: ({ context, event }) => [...context.history, event.type],
    }),
    goBack: assign({
      score: ({ context }) => Math.max(0, context.score - 1),
      history: ({ context }) => context.history.slice(0, -1),
    }),
  },
  guards: {
    contextGuard: ({ context }) => context.history.length === 0,
  },
}).createMachine({
  context: {
    score: 0,
    history: [],
  },
  id: "trinityQuiz",
  initial: "Intro",
  on: {
    BACK: [
      {
        target: "#trinityQuiz.Intro",
        actions: {
          type: "goBack",
        },
        guard: {
          type: "contextGuard",
        },
      },
      {
        actions: {
          type: "goBack",
        },
      },
    ],
  },
  states: {
    Intro: {
      on: {
        ACCEPT: {
          target: "WordQuestion",
          actions: {
            type: "followTruePath",
          },
          description: "Accept and Continue",
        },
        REFUSE: {
          target: "Atheist",
          actions: {
            type: "beLedAstray",
          },
          description: "No, God is dead",
        },
      },
      description:
        "By using this site, you hereby consent to be treated as if you believe in (at least) one God, the father almighty, maker of heaven and earth, of all things visible and invisible.",
    },
    WordQuestion: {
      on: {
        GOD_FATHER: {
          target: "Normal Jew",
          actions: {
            type: "beLedAstray",
          },
          description: "God the Father",
        },
        JESUS_CHRIST: {
          target: "SonOfGodQuestion",
          actions: {
            type: "followTruePath",
          },
          description: "Jesus Christ",
        },
        HOLY_SPIRIT: {
          target: "Pre-Christian Judeo-Millenialist",
          actions: {
            type: "beLedAstray",
          },
          description: "The Holy Spirit",
        },
        MELCHISEDEK: {
          target: "MelchisedekQuestion",
          actions: {
            type: "beLedAstray",
          },
          description: "Melchisedek",
        },
      },
      description:
        'In the beginning was the Word, and the Word was with God, and the Word was God. Which of the following does "the Word" refer to?',
    },
    Atheist: {
      type: "final",
      description:
        "You've chosen the path of atheism. This perspective rejects the existence of deities and supernatural beings, viewing the universe through a naturalistic lens. While not a Christian heresy per se, atheism challenges the fundamental premises of religious belief systems. (Come on, pick a more interesting path.)",
    },
    "Normal Jew": {
      type: "final",
      description:
        "You don't put up with any of this resurrection stuff. Judaism is the monotheistic faith from which Christianity emerged. It believes in one God and awaits the coming of the Messiah, but does not recognize Jesus as the prophesied Messiah or as divine.",
    },
    SonOfGodQuestion: {
      on: {
        NO: {
          target: "MessiahQuestion",
          actions: {
            type: "beLedAstray",
          },
          description: "No",
        },
        DIDNT_EXIST: {
          target: "member of some other religion",
          actions: {
            type: "beLedAstray",
          },
          description: "Didn't even exist",
        },
        YES: {
          target: "OtherKidsQuestion",
          actions: {
            type: "followTruePath",
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
          actions: {
            type: "beLedAstray",
          },
          description: "A manifestation of the Holy Spirit",
        },
        JESUS_PREVIOUS_LIFE: {
          target: "Sethian",
          actions: {
            type: "beLedAstray",
          },
          description: "Jesus Christ, in a previous life",
        },
      },
      description: "Wait, who?",
    },
    MessiahQuestion: {
      on: {
        NO: {
          target: "ProphetQuestion",
          actions: {
            type: "beLedAstray",
          },
          description: "No, he's a very naughty boy",
        },
        YES: {
          target: "Ebionite",
          actions: {
            type: "beLedAstray",
          },
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
            type: "followTruePath",
          },
          description: "No",
        },
        OTHER_DEMIURGES: {
          target: "Gnostic",
          actions: {
            type: "beLedAstray",
          },
          description: "Yes, other demiurges",
        },
        PEACEMAKERS: {
          target: "Hmm",
          actions: {
            type: "beLedAstray",
          },
          description: "The peacemakers",
        },
        ALL_CHILDREN: {
          target: "Mormon",
          actions: {
            type: "beLedAstray",
          },
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
          actions: {
            type: "beLedAstray",
          },
          description: "Yes",
        },
        NO: {
          target: "ExistenceQuestion",
          actions: {
            type: "beLedAstray",
          },
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
          actions: {
            type: "beLedAstray",
          },
          description: "before time",
        },
        ALWAYS: {
          target: "BirthQuestion",
          actions: {
            type: "followTruePath",
          },
          description: "always has been",
        },
        UPON_CONCEPTION: {
          target: "Socinian",
          actions: {
            type: "beLedAstray",
          },
          description: "upon conception",
        },
        UPON_BAPTISM: {
          target: "Adoptionist",
          actions: {
            type: "beLedAstray",
          },
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
        YES: {
          target: "Christian Unitarian",
          actions: {
            type: "beLedAstray",
          },
          description: "Yes",
        },
        IRRELEVANT: {
          target: "Universal Unitarian",
          actions: {
            type: "beLedAstray",
          },
          description: "Irrelevant",
        },
        NO: {
          target: "Historical-Critical Scholar",
          actions: {
            type: "beLedAstray",
          },
          description: "No",
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
            type: "followTruePath",
          },
          description: "before time",
        },
        AROUND_0_AD: {
          actions: {
            type: "beLedAstray",
          },
          description: "Around 0 AD",
        },
        NO_HISTORICAL_EVIDENCE: {
          target: "Historical-Critical Scholar",
          actions: {
            type: "beLedAstray",
          },
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
    "Historical-Critical Scholar": {
      type: "final",
      description:
        "Your perspective aligns with historical-critical scholarship, which approaches religious texts and figures from a secular, academic standpoint. This view emphasizes the importance of historical evidence and context in understanding religious claims and figures.",
    },
    IncarnationQuestion: {
      on: {
        FATHER: {
          target: "Hellenist",
          actions: {
            type: "beLedAstray",
          },
          description: "God the Father",
        },
        SON: {
          target: "Heinleinist",
          actions: {
            type: "beLedAstray",
          },
          description: "God the Son",
        },
        HOLY_SPIRIT: {
          target: "Orthodox",
          actions: {
            type: "followTruePath",
          },
          description: "The Holy Spirit",
        },
      },
      description: "Who incarnated Jesus unto the Virgin Mary?",
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
    Orthodox: {
      type: "final",
      description:
        "Your answers align with Orthodox Christian doctrine, which holds that Jesus Christ is the eternal Son of God, incarnate by the Holy Spirit and born of the Virgin Mary. This view maintains the full divinity and humanity of Christ, as well as the doctrine of the Trinity.",
    },
    Messalian: {
      type: "final",
      description:
        "The Messalians believed that the Trinity is literally perceptible, and is united with the souls of the perfect.",
    },
    "Do you feel like you understand the trinity now?": {
      on: {
        NO: {
          target: "The true faith",
          actions: {
            type: "followTruePath",
          },
          description: "No, it is an ineffable mystery",
        },
        YES: {
          target: "Messalian",
          actions: {
            type: "beLedAstray",
          },
          description: "Yes! I feel it in my bones",
        },
      },
    },
    "The true faith": {
      type: "final",
      description:
        "Sola fide, indeed! Congratulations, you have successfully navigated all the major Christological heresies and are in line with the view of the Catholic Church.",
    },
  },
});