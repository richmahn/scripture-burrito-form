export default {
  formData: {
    format: "scripture burrito",
    meta: {
      category: "source",
      version: "1.0.0",
      dateCreated: "2020-03-31T09:04:10.3+02:00",
      generator: {
        softwareName: "SB01Import",
        softwareVersion: "0.0.0"
      },
      comments: ["This is fuuuuuuuun!"],
      defaultLocale: "en"
    },
    idAuthorities: {
      "paint-store": {
        id: "http://localhost:8080"
      }
    },
    identification: {
      name: {
        en: "My First Fingerpainted Bible"
      },
      description: {
        en: "Someone said we needed digital Bibles and I thought I could use my digits to... oh, never mind"
      },
      primary: {
        "paint-store": {
          "0123456789abcdef": {
            revision: "1",
            timestamp: "2020-03-31T09:04:10.3+02:00"
          }
        }
      }
    },
    confidential: true,
    type: {
      flavorType: {
        name: "scripture",
        flavor: {
          name: "x-scriptureFingerPainting",
          foo: "baa"
        },
        currentScope: {
          JHN: ["3:16"]
        }
      }
    },
    relationships: [
      {
        id: "paint-store::color_my_bible_beautiful",
        flavor: "x-colorByNumbers",
        relationType: "peripheral",
        revision: "first_draft"
      }
    ],
    languages: [
      {
        tag: "en",
        name: {
          en: "English"
        }
      }
    ],
    targetAreas: [
      {
        name: {
          en: "United States of America"
        },
        code: "US"
      }
    ],
    ingredients: {
      "myPainting.png": {
        mimeType: "image/png",
        checksum: {
          md5: "01234567012345670123456701234567"
        },
        size: 1234,
        scope: {
          JHN: ["3:16"]
        }
      }
    },
    copyright: {
      shortStatements: [{
        statement: "<p>Test Copyright. All rights reserved.</p>",
        mimetype: "text/html",
        lang: "en"
      }]
    }
  }
}