export default {
  formData: {
    format: "scripture burrito",
    meta: {
      version: "1.0.0",
      category: "source",
      generator: {
        softwareName: "DBLImport",
        softwareVersion: "0.0.0",
        userName: "Jake Kyle"
      },
      defaultLocale: "en",
      dateCreated: "2019-07-17T08:00:56.467963+00:00",
      comments: ["Braille test"]
    },
    idAuthorities: {
      dbl: {
        id: "https://thedigitalbiblelibrary.org",
        name: {
          en: "The Digital Bible Library"
        }
      }
    },
    identification: {
      primary: {
        dbl: {
          "865ab834004f4186": {
            revision: "3",
            timestamp: "2019-07-17T08:00:56.467963+00:00"
          }
        }
      },
      name: {
        en: "WEBBE Braille"
      },
      description: {
        en: "British/International spelling edition of the World English Bible in Braille"
      },
      abbreviation: {
        en: "WEBBEBRL"
      }
    },
    languages: [
      {
        tag: "en",
        name: {
          en: "English"
        }
      }
    ],
    relationships: [
      {
        relationType: "source",
        flavor: "textTranslation",
        id: "dbl::7142879509583d59",
        revision: "9",
        variant: "p4"
      }
    ],
    type: {
      flavorType: {
        name: "scripture",
        flavor: {
          name: "embossedBrailleScripture",
          isContracted: true,
          processor: {
            name: "libLouis",
            table: {
              src: "en-ueb-g2.ctb",
              name: "Unified English Braille Grade 2"
            },
            version: "3.9.0"
          },
          numberSign: {
            character: "⠼",
            useInMargin: false
          },
          content: {
            chapterNumberStyle: "upper",
            chapterHeadingsNumberFirst: false,
            versedParagraphs: false,
            verseSeparator: "⠀⠀",
            includeIntros: true
          },
          page: {
            charsPerLine: 36,
            linesPerPage: 28,
            defaultMarginWidth: 3,
            versoLastLineBlank: false,
            carryLines: 2
          }
        },
        currentScope: {
          JHN: []
        }
      }
    },
    confidential: true,
    agencies: [
      {
        id: "dbl::b78a0b882a8a372c837d68b7",
        roles: ["rightsHolder", "content", "publication", "finance", "qa"],
        url: "https://www.compassbraille.org/",
        name: {
          en: "Compass Braille"
        },
        abbr: {
          en: "CB"
        }
      },
      {
        id: "dbl::545d2cb0ae307afa44b390fc",
        roles: ["content", "publication", "management", "finance", "qa"],
        name: {
          en: "eBible.org"
        }
      }
    ],
    targetAreas: [
      {
        code: "GB",
        name: {
          en: "United Kingdom"
        }
      }
    ],
    localizedNames: {
      "i18n-contents": {
        short: {
          en: "Contents"
        }
      },
      "i18n-psalm": {
        short: {
          en: "Psalm"
        }
      },
      "i18n-chapter": {
        short: {
          en: "Chapter"
        }
      },
      "i18n-chapters": {
        short: {
          en: "Chapters"
        }
      },
      "i18n-braille_producer_statement": {
        short: {
          en: "Produced in Braille by Compass Braille UK"
        }
      },
      "book-gen": {
        abbr: {
          en: "Genesis"
        },
        short: {
          en: "Genesis"
        },
        long: {
          en: "The First Book of Moses, Commonly Called Genesis"
        }
      },
      "book-exo": {
        abbr: {
          en: "Exodus"
        },
        short: {
          en: "Exodus"
        },
        long: {
          en: "The Second Book of Mosis, Commonly Called Exodus"
        }
      },
      "book-lev": {
        abbr: {
          en: "Leviticus"
        },
        short: {
          en: "Leviticus"
        },
        long: {
          en: "The Third Book of Mosis, Commonly Called Leviticus"
        }
      },
      "book-num": {
        abbr: {
          en: "Numbers"
        },
        short: {
          en: "Numbers"
        },
        long: {
          en: "The Fourth Book of Moses, Commonly Called Numbers"
        }
      },
      "book-deu": {
        abbr: {
          en: "Deuteronomy"
        },
        short: {
          en: "Deuteronomy"
        },
        long: {
          en: "The Fifth Book of Moses, Commonly Called Deuteronomy"
        }
      },
      "book-jos": {
        abbr: {
          en: "Joshua"
        },
        short: {
          en: "Joshua"
        },
        long: {
          en: "The Book of Joshua"
        }
      },
      "book-jdg": {
        abbr: {
          en: "Judges"
        },
        short: {
          en: "Judges"
        },
        long: {
          en: "The Book of Judges"
        }
      },
      "book-rut": {
        abbr: {
          en: "Ruth"
        },
        short: {
          en: "Ruth"
        },
        long: {
          en: "The Book of Ruth"
        }
      },
      "book-1sa": {
        abbr: {
          en: "1 Samuel"
        },
        short: {
          en: "1 Samuel"
        },
        long: {
          en: "The First Book of Samuel"
        }
      },
      "book-2sa": {
        abbr: {
          en: "2 Samuel"
        },
        short: {
          en: "2 Samuel"
        },
        long: {
          en: "The Second Book of Samuel"
        }
      },
      "book-1ki": {
        abbr: {
          en: "1 Kings"
        },
        short: {
          en: "1 Kings"
        },
        long: {
          en: "The First Book of Kings"
        }
      },
      "book-2ki": {
        abbr: {
          en: "2 Kings"
        },
        short: {
          en: "2 Kings"
        },
        long: {
          en: "The Second Book of Kings"
        }
      },
      "book-1ch": {
        abbr: {
          en: "1 Chronicles"
        },
        short: {
          en: "1 Chronicles"
        },
        long: {
          en: "The First Book of Chronicles"
        }
      },
      "book-2ch": {
        abbr: {
          en: "2 Chronicles"
        },
        short: {
          en: "2 Chronicles"
        },
        long: {
          en: "The Second Book of Chronicles"
        }
      },
      "book-ezr": {
        abbr: {
          en: "Ezra"
        },
        short: {
          en: "Ezra"
        },
        long: {
          en: "The Book of Ezra"
        }
      },
      "book-neh": {
        abbr: {
          en: "Nehemiah"
        },
        short: {
          en: "Nehemiah"
        },
        long: {
          en: "The Book of Nehemiah"
        }
      },
      "book-est": {
        abbr: {
          en: "Esther"
        },
        short: {
          en: "Esther"
        },
        long: {
          en: "The Book of Esther"
        }
      },
      "book-job": {
        abbr: {
          en: "Job"
        },
        short: {
          en: "Job"
        },
        long: {
          en: "The Book of Job"
        }
      },
      "book-psa": {
        abbr: {
          en: "Psalm"
        },
        short: {
          en: "Psalms"
        },
        long: {
          en: "The Psalms"
        }
      },
      "book-pro": {
        abbr: {
          en: "Proverbs"
        },
        short: {
          en: "Proverbs"
        },
        long: {
          en: "The Proverbs"
        }
      },
      "book-ecc": {
        abbr: {
          en: "Ecclesiastes"
        },
        short: {
          en: "Ecclesiastes"
        },
        long: {
          en: "Ecclesiates or, The Preacher"
        }
      },
      "book-sng": {
        abbr: {
          en: "Song of Solomon"
        },
        short: {
          en: "Song of Solomon"
        },
        long: {
          en: "The Song of Solomon"
        }
      },
      "book-isa": {
        abbr: {
          en: "Isaiah"
        },
        short: {
          en: "Isaiah"
        },
        long: {
          en: "The Book of Isaiah"
        }
      },
      "book-jer": {
        abbr: {
          en: "Jeremiah"
        },
        short: {
          en: "Jeremiah"
        },
        long: {
          en: "The Book of Jeremiah"
        }
      },
      "book-lam": {
        abbr: {
          en: "Lamentations"
        },
        short: {
          en: "Lamentations"
        },
        long: {
          en: "The Lamentations of Jeremiah"
        }
      },
      "book-ezk": {
        abbr: {
          en: "Ezekiel"
        },
        short: {
          en: "Ezekiel"
        },
        long: {
          en: "The Book of Ezekiel"
        }
      },
      "book-dan": {
        abbr: {
          en: "Daniel"
        },
        short: {
          en: "Daniel"
        },
        long: {
          en: "The Book of Daniel"
        }
      },
      "book-hos": {
        abbr: {
          en: "Hosea"
        },
        short: {
          en: "Hosea"
        },
        long: {
          en: "The Book of Hosea"
        }
      },
      "book-jol": {
        abbr: {
          en: "Joel"
        },
        short: {
          en: "Joel"
        },
        long: {
          en: "The Book of Joel"
        }
      },
      "book-amo": {
        abbr: {
          en: "Amos"
        },
        short: {
          en: "Amos"
        },
        long: {
          en: "The Book of Amos"
        }
      },
      "book-oba": {
        abbr: {
          en: "Obadiah"
        },
        short: {
          en: "Obadiah"
        },
        long: {
          en: "The Book of Obadiah"
        }
      },
      "book-jon": {
        abbr: {
          en: "Jonah"
        },
        short: {
          en: "Jonah"
        },
        long: {
          en: "The Book of Jonah"
        }
      },
      "book-mic": {
        abbr: {
          en: "Micah"
        },
        short: {
          en: "Micah"
        },
        long: {
          en: "The Book of Micah"
        }
      },
      "book-nam": {
        abbr: {
          en: "Nahum"
        },
        short: {
          en: "Nahum"
        },
        long: {
          en: "The Book of Nahum"
        }
      },
      "book-hab": {
        abbr: {
          en: "Habakkuk"
        },
        short: {
          en: "Habakkuk"
        },
        long: {
          en: "The Book of Habakkuk"
        }
      },
      "book-zep": {
        abbr: {
          en: "Zephaniah"
        },
        short: {
          en: "Zephaniah"
        },
        long: {
          en: "The Book of Zephaniah"
        }
      },
      "book-hag": {
        abbr: {
          en: "Haggai"
        },
        short: {
          en: "Haggai"
        },
        long: {
          en: "The Book of Haggai"
        }
      },
      "book-zec": {
        abbr: {
          en: "Zechariah"
        },
        short: {
          en: "Zechariah"
        },
        long: {
          en: "The Book of Zechariah"
        }
      },
      "book-mal": {
        abbr: {
          en: "Malachi"
        },
        short: {
          en: "Malachi"
        },
        long: {
          en: "The Book of Malachi"
        }
      },
      "book-mat": {
        abbr: {
          en: "Matthew"
        },
        short: {
          en: "Matthew"
        },
        long: {
          en: "The Good News According to Matthew"
        }
      },
      "book-mrk": {
        abbr: {
          en: "Mark"
        },
        short: {
          en: "Mark"
        },
        long: {
          en: "The Good News According to Mark"
        }
      },
      "book-luk": {
        abbr: {
          en: "Luke"
        },
        short: {
          en: "Luke"
        },
        long: {
          en: "The Good News According to Luke"
        }
      },
      "book-jhn": {
        abbr: {
          en: "John"
        },
        short: {
          en: "John"
        },
        long: {
          en: "The Good News According to John"
        }
      },
      "book-act": {
        abbr: {
          en: "Acts"
        },
        short: {
          en: "Acts"
        },
        long: {
          en: "The Acts of the Apostles"
        }
      },
      "book-rom": {
        abbr: {
          en: "Romans"
        },
        short: {
          en: "Romans"
        },
        long: {
          en: "Paul’s Letter to the Romans"
        }
      },
      "book-1co": {
        abbr: {
          en: "1 Corinthians"
        },
        short: {
          en: "1 Corinthians"
        },
        long: {
          en: "Paul’s First Letter to the Corinthians"
        }
      },
      "book-2co": {
        abbr: {
          en: "2 Corinthians"
        },
        short: {
          en: "2 Corinthians"
        },
        long: {
          en: "Paul’s Second Letter to the Corinthians"
        }
      },
      "book-gal": {
        abbr: {
          en: "Galatians"
        },
        short: {
          en: "Galatians"
        },
        long: {
          en: "Paul’s Letter to the Galatians"
        }
      },
      "book-eph": {
        abbr: {
          en: "Ephesians"
        },
        short: {
          en: "Ephesians"
        },
        long: {
          en: "Paul’s Letter to the Ephesians"
        }
      },
      "book-php": {
        abbr: {
          en: "Philippians"
        },
        short: {
          en: "Philippians"
        },
        long: {
          en: "Paul’s Letter to the Philippians"
        }
      },
      "book-col": {
        abbr: {
          en: "Colossians"
        },
        short: {
          en: "Colossians"
        },
        long: {
          en: "Paul’s Letter to the Colossians"
        }
      },
      "book-1th": {
        abbr: {
          en: "1 Thessalonians"
        },
        short: {
          en: "1 Thessalonians"
        },
        long: {
          en: "Paul’s First Letter to the Thessalonians"
        }
      },
      "book-2th": {
        abbr: {
          en: "2 Thessalonians"
        },
        short: {
          en: "2 Thessalonians"
        },
        long: {
          en: "Paul’s Second Letter to the Thessalonians"
        }
      },
      "book-1ti": {
        abbr: {
          en: "1 Timothy"
        },
        short: {
          en: "1 Timothy"
        },
        long: {
          en: "Paul’s First Letter to Timothy"
        }
      },
      "book-2ti": {
        abbr: {
          en: "2 Timothy"
        },
        short: {
          en: "2 Timothy"
        },
        long: {
          en: "Paul’s Second Letter to Timothy"
        }
      },
      "book-tit": {
        abbr: {
          en: "Titus"
        },
        short: {
          en: "Titus"
        },
        long: {
          en: "Paul’s Letter to Titus"
        }
      },
      "book-phm": {
        abbr: {
          en: "Philemon"
        },
        short: {
          en: "Philemon"
        },
        long: {
          en: "Paul’s Letter to Philemon"
        }
      },
      "book-heb": {
        abbr: {
          en: "Hebrews"
        },
        short: {
          en: "Hebrews"
        },
        long: {
          en: "The Letter to the Hebrews"
        }
      },
      "book-jas": {
        abbr: {
          en: "James"
        },
        short: {
          en: "James"
        },
        long: {
          en: "The Letter from James"
        }
      },
      "book-1pe": {
        abbr: {
          en: "1 Peter"
        },
        short: {
          en: "1 Peter"
        },
        long: {
          en: "Peter’s First Letter"
        }
      },
      "book-2pe": {
        abbr: {
          en: "2 Peter"
        },
        short: {
          en: "2 Peter"
        },
        long: {
          en: "Peter’s Second Letter"
        }
      },
      "book-1jn": {
        abbr: {
          en: "1 John"
        },
        short: {
          en: "1 John"
        },
        long: {
          en: "John’s First Letter"
        }
      },
      "book-2jn": {
        abbr: {
          en: "2 John"
        },
        short: {
          en: "2 John"
        },
        long: {
          en: "John’s Second Letter"
        }
      },
      "book-3jn": {
        abbr: {
          en: "3 John"
        },
        short: {
          en: "3 John"
        },
        long: {
          en: "John’s Third Letter"
        }
      },
      "book-jud": {
        abbr: {
          en: "Jude"
        },
        short: {
          en: "Jude"
        },
        long: {
          en: "The Letter from Jude"
        }
      },
      "book-rev": {
        abbr: {
          en: "Revelation"
        },
        short: {
          en: "Revelation"
        },
        long: {
          en: "The Revelation to John"
        }
      },
      "book-tob": {
        abbr: {
          en: "Tobit"
        },
        short: {
          en: "Tobit"
        },
        long: {
          en: "Tobit"
        }
      },
      "book-jdt": {
        abbr: {
          en: "Judith"
        },
        short: {
          en: "Judith"
        },
        long: {
          en: "Judith"
        }
      },
      "book-esg": {
        abbr: {
          en: "ESG"
        },
        short: {
          en: "Esther (Greek)"
        },
        long: {
          en: "Esther (Greek)"
        }
      },
      "book-wis": {
        abbr: {
          en: "Wisdom"
        },
        short: {
          en: "Wisdom of Solomon"
        },
        long: {
          en: "The Wisdom of Solomon"
        }
      },
      "book-sir": {
        abbr: {
          en: "Sirach"
        },
        short: {
          en: "Sirach"
        },
        long: {
          en: "The Wisdom of Jesus the Son of Sirach, or Ecclesiasticus"
        }
      },
      "book-bar": {
        abbr: {
          en: "Baruch"
        },
        short: {
          en: "Baruch"
        },
        long: {
          en: "Baruch"
        }
      },
      "book-1ma": {
        abbr: {
          en: "1Ma"
        },
        short: {
          en: "1 Maccabees"
        },
        long: {
          en: "The First Book of the Maccabees"
        }
      },
      "book-2ma": {
        abbr: {
          en: "2Ma"
        },
        short: {
          en: "2 Maccabees"
        },
        long: {
          en: "The Second Book of the Maccabees"
        }
      },
      "book-3ma": {
        abbr: {
          en: "3Ma"
        },
        short: {
          en: "3 Maccabees"
        },
        long: {
          en: "The Third Book of the Maccabees"
        }
      },
      "book-4ma": {
        abbr: {
          en: "4Ma"
        },
        short: {
          en: "4 Maccabees"
        },
        long: {
          en: "The Fourth Book of the Maccabees"
        }
      },
      "book-1es": {
        abbr: {
          en: "1Es"
        },
        short: {
          en: "1 Esdras"
        },
        long: {
          en: "1 Esdras"
        }
      },
      "book-2es": {
        abbr: {
          en: "2Es"
        },
        short: {
          en: "2 Esdras"
        },
        long: {
          en: "2 Esdras"
        }
      },
      "book-man": {
        abbr: {
          en: "Man"
        },
        short: {
          en: "Prayer of Manasses"
        },
        long: {
          en: "The Prayer of Manasses King of Judah when He was Held Captive in Babylon"
        }
      },
      "book-ps2": {
        abbr: {
          en: "Ps151"
        },
        short: {
          en: "Psalm 151"
        },
        long: {
          en: "Psalm 151"
        }
      },
      "book-dag": {
        abbr: {
          en: "DanielG"
        },
        short: {
          en: "Daniel (Greek)"
        },
        long: {
          en: "The Book of Daniel with Greek Portions"
        }
      },
      "section-jhn": {
        abbr: {
          en: "⠠⠚⠕⠓⠝"
        },
        short: {
          en: "John"
        },
        long: {
          en: "The Good News According to John"
        }
      },
      "section-jhn_1": {
        abbr: {
          en: "⠠⠚⠕⠓⠝ ⠼⠁"
        },
        short: {
          en: "John 1"
        },
        long: {
          en: "The Good News According to John Chapters 1"
        }
      },
      "section-jhn_1-1": {
        abbr: {
          en: "⠠⠚⠕⠓⠝ ⠼⠁⠤⠼⠁"
        },
        short: {
          en: "John 1-1"
        },
        long: {
          en: "The Good News According to John Chapters 1-1"
        }
      },
      "section-jhn_2-2": {
        abbr: {
          en: "⠠⠚⠕⠓⠝ ⠼⠃⠤⠼⠃"
        },
        short: {
          en: "John 2-2"
        },
        long: {
          en: "The Good News According to John Chapters 2-2"
        }
      }
    },
    ingredients: {
      "processing_resources/styles/stylesheet.xml": {
        checksum: {
          md5: "5e94b21782928836d83e5af9b271a125"
        },
        mimeType: "text/xml",
        size: 13900
      },
      "source/BBM/JHN_1-1.bbm": {
        checksum: {
          md5: "7a4d35451e31dc9fb8a553e08ea8fa92"
        },
        mimeType: "text/xml",
        size: 33906
      },
      "release/PEF/JHN_1-1.pef": {
        checksum: {
          md5: "f00a9ed7f2aa146e2ff6a50cb12fa820"
        },
        mimeType: "text/xml",
        size: 21261,
        scope: {
          JHN: ["1-1"]
        }
      }
    },
    copyright: {
      shortStatements: [{
        statement: "<p><strong>PUBLIC DOMAIN</strong>. \"World English Bible\" is  trademark of <a href=\"https://eBible.org\">eBible.org</a>.</p>",
        mimetype: "text/html",
        lang: "en"
      }]
    }
  }
}