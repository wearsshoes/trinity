import { setup } from 'xstate'

// #TODO: Fix stately registry to properly escape apostrophes

export const machine = setup({
  "types": {
    "context": {} as {},
"events": {} as {type: 'No', } | {type: 'Yes', } | {type: 'Jesus', } | {type: 'Irrelevant', } | {type: 'always was', } | {type: 'Around 0 AD', } | {type: 'Melchisedek', } | {type: 'before time', } | {type: 'Jesus Christ', } | {type: 'upon baptism', } | {type: 'God the Father', } | {type: 'Distinct beings', } | {type: 'Jesus isn\'t God', } | {type: 'No, God is dead', } | {type: 'Queen of Heaven', } | {type: 'The Holy Spirit', } | {type: 'The peacemakers', } | {type: 'upon conception', } | {type: 'Didn\'t even exist', } | {type: 'Accept and Continue', } | {type: 'Equal to the Father', } | {type: 'From God the Father', } | {type: 'The Father isn\'t God', } | {type: 'Yes, other demiurges', } | {type: 'Holy Spirit isn\'t God', } | {type: 'There are two distinct gods', } | {type: 'Yes, we are all his children', } | {type: 'God the Father and also Jesus', } | {type: 'Jesus Christ, in a previous life', } | {type: 'A manifestation of the Holy Spirit', } | {type: 'From God the Father and also Jesus', } | {type: 'We have no historical evidence for his existence', }  }
})
  .createMachine({
  "context": {},
  "id": "trinity",
  "initial": "Intro",
  "states": {
    "Intro": {
      "on": {
        "Accept and Continue": {
          "target": "The Word"
        },
        "No, God is dead": {
          "target": "Atheism"
        }
      },
      "description": "By using this site, you hereby agree to be treated as if you believe in one god, the father almighty, maker of heaven and earth, of all things visible and invisible."
    },
    "The Word": {
      "on": {
        "God the Father": {
          "target": "Mainstream Judaism"
        },
        "Jesus Christ": {
          "target": "Was Jesus Christ the son of God?"
        },
        "The Holy Spirit": {
          "target": "Pre-Christian Judeo-Millenialism"
        },
        "Melchisedek": {
          "target": "Who?"
        }
      },
      "description": "In the beginning was the Word, and the Word was with God, and the Word was God. Which of the following does \"the Word\" refer to?"
    },
    "Atheism": {
      "description": "Come on, pick a more interesting path."
    },
    "Mainstream Judaism": {
      "description": "Not exactly a \"Christian heresy\", to be sure."
    },
    "Was Jesus Christ the son of God?": {
      "on": {
        "No": {
          "target": "Was he the Messiah?"
        },
        "Didn't even exist": {
          "target": "Some other religion"
        },
        "Yes": {
          "target": "Does god have any other kids?"
        }
      }
    },
    "Pre-Christian Judeo-Millenialism": {
      "description": "Various sects such as the Essenes, who wrote the Dead Sea Scrolls"
    },
    "Who?": {
      "on": {
        "A manifestation of the Holy Spirit": {
          "target": "Pre-Christian Judeo-Millenialism"
        },
        "Jesus Christ, in a previous life": {
          "target": "Sethianism"
        }
      }
    },
    "Was he the Messiah?": {
      "on": {
        "No": {
          "target": "Was he a prophet?"
        },
        "Yes": {
          "target": "Ebionites"
        }
      }
    },
    "Some other religion": {
      "description": "You're only an infidel, not a heretic. Whew!"
    },
    "Does god have any other kids?": {
      "on": {
        "Yes, we are all his children": {
          "target": "Mormonism"
        },
        "Yes, other demiurges": {
          "target": "Gnosticism"
        },
        "No": {
          "target": "When did Jesus become the Son of God?"
        },
        "The peacemakers": {
          "target": "Hmm"
        }
      }
    },
    "Sethianism": {
      "description": "A Gnostic sect"
    },
    "Was he a prophet?": {
      "on": {
        "Yes": {
          "target": "Islam, Bahai, Mandaeism, Druze"
        },
        "No": {
          "target": "Did he exist?"
        }
      }
    },
    "Ebionites": {
      "description": "An early Jewish Christian sect."
    },
    "Mormonism": {},
    "Gnosticism": {},
    "When did Jesus become the Son of God?": {
      "on": {
        "before time": {
          "target": "Arianism"
        },
        "always was": {
          "target": "When was Jesus born?"
        },
        "upon conception": {
          "target": "Socinianism"
        },
        "upon baptism": {
          "target": "Adoptionism"
        }
      }
    },
    "Hmm": {
      "description": "At least you know your scripture"
    },
    "Islam, Bahai, Mandaeism, Druze": {
      "description": "You're somewhere out there."
    },
    "Did he exist?": {
      "on": {
        "No": {
          "target": "Pre-Christian Judeo-Millenialism"
        },
        "Yes": {
          "target": "Christian Unitarianism"
        },
        "Irrelevant": {
          "target": "Universal Unitarianism"
        }
      }
    },
    "Arianism": {
      "description": "The Word was with God at the beginning of time, but is begotten by the Father, so had to have been created by the Father at some point."
    },
    "When was Jesus born?": {
      "on": {
        "Around 0 AD": {
          "target": "idk, seems reasonable"
        },
        "We have no historical evidence for his existence": {
          "target": "Historical-critical academicism"
        },
        "before time": {
          "target": "Who incarnated Jesus unto the Virgin Mary?"
        }
      }
    },
    "Socinianism": {
      "description": "Christ is not co-eternal with God, but created mortal by God to be the savior of mankind."
    },
    "Adoptionism": {
      "description": "Jesus was born a man, but was made divine by the Father"
    },
    "Christian Unitarianism": {
      "description": "There is one God, the Christian God. Jesus is not his son, merely divinely inspired."
    },
    "Universal Unitarianism": {
      "description": "There is one God, with manifestations in many faiths. Jesus is not his son, and it isn't important whether you believe in either of them."
    },
    "idk, seems reasonable": {},
    "Historical-critical academicism": {},
    "Who incarnated Jesus unto the Virgin Mary?": {
      "on": {
        "God the Father": {
          "target": "Hellenism"
        },
        "Jesus Christ": {
          "target": "Heinleinism"
        },
        "The Holy Spirit": {
          "target": "New state 1"
        }
      }
    },
    "Hellenism": {
      "description": "I think you're thinking of Zeus, not the Christian God!"
    },
    "Heinleinism": {
      "description": "I know where I came from—but where did all you zombies come from?"
    },
    "New state 1": {},
    "Patripassianism": {
      "description": "The belief that the Father, the Son, and the Holy Spirit are all the same person (and consequently that the Father came down in the form of Jesus Christ, and suffered on the cross). Supposedly held by Sabellius."
    },
    "Monarchianism": {
      "description": "God is the creator of the universe, made incarnate in Jesus Christ, and the Holy Spirit is His will"
    },
    "Tritheism": {
      "description": "God the father, Jesus Christ, and the Holy Spirit are three separate Gods. Nobody is recorded to have actually believed this."
    },
    "Binitarianism": {
      "on": {
        "Holy Spirit isn't God": {
          "target": "Pneumatomachianism"
        },
        "Jesus isn't God": {
          "target": "Psilanthropism"
        },
        "The Father isn't God": {
          "target": "Is this because the god of the Gospels is different than the god of scripture?"
        }
      }
    },
    "Modalism": {
      "description": "The belief that there is only one God without distinct persons, who reveals himself in various manifestations. Held today by certain Pentacostals."
    },
    "Subordinationism": {
      "description": "The belief that the Son is of an inferior and subordinate role to the Father. Most early Church Fathers would have agreed with this prior to the development of the doctrine of the Trinity. Revived in part by Arminian Protestantism, although most of its descendants now espouse orthodox Trinitarian doctrine."
    },
    "Apollinarianism": {
      "description": "Jesus is divine in mind but not in body."
    },
    "Collyridianism": {
      "description": "The belief that the Trinity consists of the Father, the Son, and the Mother (Mary)."
    },
    "Pneumatomachianism": {
      "description": "Belief that the Holy Spirit is not part of the Godhead."
    },
    "Psilanthropism": {
      "description": "He's just a man!"
    },
    "Is this because the god of the Gospels is different than the god of scripture?": {
      "on": {
        "Yes": {
          "target": "Marcionism"
        },
        "No": {
          "target": "I'm not sure what the hell you're on about then"
        }
      }
    },
    "Monophysitism": {
      "description": "Jesus Christ has one nature, a divine nature"
    },
    "Monothelitism": {
      "description": "Jesus Christ has two natures, human and divine, but they share a united will"
    },
    "Nestorianism": {
      "description": "Jesus Christ has two natures, flesh and divine, which makes him semidivine. Mary is properly only the mother of Christ, not the mother of God. Major heresy!!!"
    },
    "Roscellinianism": {
      "description": "The Father, Son, and Holy Spirit must be wholly separate entities, otherwise Patripassianism must necessarily be true."
    },
    "View of the Messalians": {
      "description": "The Trinity is literally perceptible, and is united with the souls of the perfect."
    },
    "Marcionism": {
      "description": "Christian doctrine is so incompatible with the old testament that the god of the old testament must not be the same god."
    },
    "I'm not sure what the hell you're on about then": {},
    "What is the nature of the Godhead?": {
      "on": {
        "Distinct beings": {
          "target": "Mormonism"
        }
      }
    },
    "Heavenly Mother": {
      "description": "Mormonism, forms a quaternity"
    },
    "What is her nature?": {
      "on": {
        "Equal to the Father": {
          "target": "Heavenly Mother"
        },
        "Queen of Heaven": {
          "target": "Marianism"
        }
      }
    },
    "Marianism": {},
    "Who created everything?": {
      "on": {
        "Jesus": {
          "target": "Jehovah's Witnesses"
        },
        "God the Father and also Jesus": {
          "target": "Nicene Christianity"
        }
      }
    },
    "Jehovah's Witnesses": {},
    "Why no trinity?": {
      "on": {
        "There are two distinct gods": {
          "target": "Catharism"
        }
      }
    },
    "Catharism": {
      "description": "Believed that the god of the world was the god of the old testament, and is actually Satan; the good god rules over heaven only. Descended from Gnostic ideas but took hold in France."
    },
    "Catholicism (AD 1014)": {
      "description": "This is known as the filioque. How can the Son be equal to the Father, if the Holy Spirit does not emanate from both of them?"
    },
    "Eastern Orthodox (AD 451)": {
      "description": "Maintains the AD 381 wording of the Nicene Creed."
    },
    "Homoiousios": {
      "description": "The idea that the father, the son, and the holy spirit are similar, but nonidentical, sorts of beings."
    },
    "Heteroousios": {
      "description": "The idea that the father, the son, and the holy spirit are different sorts of beings."
    },
    "Semi-Arianism": {
      "description": "God is of 3 persons, who are all eternal, and all equally divine, but not literally all the same substance"
    },
    "Nicene Christianity": {},
    "Miaphysitism": {
      "description": "Jesus has one nature, which is both divine and carnal (human)"
    },
    "Where did the Holy Spirit come from?": {
      "on": {
        "From God the Father": {
          "target": "Eastern Orthodox (AD 451)"
        },
        "From God the Father and also Jesus": {
          "target": "Catholicism (AD 1014)"
        }
      }
    },
    "Homoios": {
      "description": "The idea that the son is like the father, enough said, and that all this overly precise stuff about substances is unnecessarily conflict-inducing."
    }
  }
})
