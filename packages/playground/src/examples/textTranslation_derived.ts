export default {
  formData: {
    format: "scripture burrito",
    meta: {
      version: "1.0.0",
      category: "derived",
      dateCreated: "2019-02-19T01:02:03+01:00",
      generator: {
        softwareName: "Burrito Factory",
        softwareVersion: "0.1",
        userName: "Jane Doe"
      },
      defaultLocale: "en",
      comments: ["Experimenting with i18n", "Fixed canon before upload. ~Josh"]
    },
    idAuthorities: {
      dbl: {
        id: "https://thedigitalbiblelibrary.org",
        name: {
          en: "The Digital Bible Library"
        }
      },
      agmt: {
        id: "http://registry.autographamt.com",
        name: {
          en: "Autographa"
        }
      },
      "x-atl": {
        id: "http://atlantisbibleconsortium.net"
      }
    },
    identification: {
      primary: {
        dbl: {
          "0123456789abcdef": {
            revision: "23",
            timestamp: "2019-02-18T01:02:03+01:00"
          }
        }
      },
      upstream: {
        gbc: [
          {
            "55df02965117ad3f2201309b": {
              revision: "2",
              timestamp: "2019-02-17T01:02:03+01:00"
            }
          }
        ],
        paratext: [
          {
            "2d5220a02a7aaac6bcc2831ae262e9aaca5e1abd": {
              revision: "5",
              timestamp: "2019-02-16T01:02:03+01:00"
            }
          }
        ]
      },
      name: {
        en: "Excerpts from a Scripture Burrito Demo Text Bible",
        fr: "Des morceaux d'une Cr\u00eape mexicaine biblique surdimensionn\u00e9e (d\u00e9monstration)"
      },
      description: {
        en: "Extracts of A Demonstration Scripture Burrito containing Text, like Paratext Might One Day Produce"
      },
      abbreviation: {
        en: "DSB",
        fr: "CMBS"
      }
    },
    confidential: true,
    type: {
      flavorType: {
        name: "scripture",
        currentScope: {
          GEN: [],
          EXO: ["1", "3-12", "13:4", "14:3-8", "15:8-16:2"],
          LEV: ["2-3"],
          MAT: ["1", "5", "7-11"]
        },
        flavor: {
          name: "textTranslation",
          projectType: "standard",
          audience: "common",
          translationType: "newTranslation",
          usfmVersion: "3.1.rc49"
        }
      }
    },
    relationships: [
      {
        relationType: "expression",
        flavor: "textTranslation",
        id: "dbl::fedcba9876543210:2"
      },
      {
        relationType: "expression",
        flavor: "glossedTextStory",
        id: "x-atl::gl47"
      },
      {
        relationType: "parascriptural",
        flavor: "x-wordAlignment",
        id: "agmt::irvmal-4-wh"
      }
    ],
    languages: [
      {
        tag: "en",
        name: {
          en: "English",
          de: "Englisch",
          fr: "anglais"
        },
        numberingSystem: "latn"
      }
    ],
    targetAreas: [
      {
        code: "NL",
        name: {
          nl: "Nederland",
          kl: "Pukkitsormiut",
          la: "Batavia",
          ru: "\u041d\u0438\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u044b"
        }
      }
    ],
    agencies: [
      {
        id: "dbl::23",
        name: {
          en: "Burritos R Us Inc"
        },
        abbr: {
          en: "BRU"
        },
        url: "https://burritos-r-us.org",
        roles: [
          "rightsHolder",
          "rightsAdmin",
          "content",
          "finance",
          "management",
          "publication",
          "qa"
        ]
      },
      {
        id: "dbl::29",
        name: {
          en: "We Manage Burritos"
        },
        roles: ["qa"]
      }
    ],
    copyright: {
      shortStatements: [{
        statement: "\u00a9 Burritos R Us 2019.",
        mimetype: "text/plain"
      },
      {
        statement: "\u00a9 Burritos R Us 2019. Tous droits r\u00e9serv\u00e9s.",
        mimetype: "text/plain",
        lang: "fr"
      },
      {
        statement: "<p><b>\u00a9 Burritos R Us 2019.</b></p><p><i>Tous droits r\u00e9serv\u00e9s.</i></p>",
        mimetype: "text/html",
        lang: "fr"
      }]
    },
    ingredients: {
      "release/text/USX_1/OTINT.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          GEN: [],
          EXO: [],
          LEV: []
        },
        role: "introduction",
        size: 1234
      },
      "release/text/USX_1/GEN.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          GEN: []
        },
        size: 1234
      },
      "release/text/USX_1/EXO.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          EXO: ["1-12"]
        },
        size: 1234
      },
      "release/text/USX_1/LEV.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          LEV: ["2:3-3:7"]
        },
        size: 1234
      },
      "release/text/USX_1/INTNT.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          MAT: []
        },
        role: "introduction",
        size: 1234
      },
      "release/text/USX_1/INTMAT.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          MAT: ["1"]
        },
        role: "introduction",
        size: 1234
      },
      "release/text/USX_1/MAT.usx": {
        checksum: {
          md5: "0123456789abcdef0123456789abcdef"
        },
        mimeType: "text/x-usx+xml",
        scope: {
          MAT: ["1:3", "1:5", "1:7-11"]
        },
        size: 1234
      },
      "unknownAdditive.foo": {
        mimeType: "application/octet-stream",
        size: 99
      }
    },
    localizedNames: {
      "book-gen": {
        abbr: {
          fr: "Gn"
        },
        short: {
          fr: "Gen\u00e8se"
        },
        long: {
          fr: "La Gen\u00e8se"
        }
      },
      "book-exo": {
        abbr: {
          fr: "Ex"
        },
        short: {
          fr: "Exode"
        },
        long: {
          fr: "L\u2019Exode"
        }
      },
      "book-lev": {
        abbr: {
          fr: "Lv"
        },
        short: {
          fr: "L\u00e9vitique"
        },
        long: {
          fr: "Le L\u00e9vitique"
        }
      },
      "book-mat": {
        abbr: {
          fr: "Mt"
        },
        short: {
          en: "Matthew",
          fr: "Matthieu"
        },
        long: {
          fr: "Evangile selon Matthieu"
        }
      },
      intot: {
        short: {
          fr: "A propos de l'Ancien Testament"
        }
      },
      intnt: {
        short: {
          fr: "A propos du Nouveau Testament"
        }
      },
      intmat: {
        short: {
          fr: "A propos de Matthieu"
        }
      }
    },
    recipe: [
      {
        idAuthority: "dbl",
        operation: "apply_license_agreement",
        data: {
          license_agreement: "https://thedigitalbiblelibrary.org/license_agreement/nnnn"
        }
      }
    ]
  }
}