const product = {
  name: "Abbey",
  description:
    "Retro curves. Modern intelligence. Abbey is a fresh take on a classic form crafted from super-fine acetate. Available in five statement colours.",
  price: {
    optical: {
      non_prescription: 130,
      prescription: 180
    },
    sun: {
      non_prescription: 150,
      prescription: 200
    }
  },
  lenses: ["non-prescription", "prescription"],
  lensTypes: ["optical", "sun"],
  colours: [
    {
      name: "Black Gloss",
      image_url:
        "//images.contentful.com/fqlss9iyqje7/51CMHoxPP24O6UY02ES26Q/665e18235dbb98b84b65c4aaa82c546d/Black-Gloss.jpg"
    },
    {
      name: "Blue Havana",
      image_url:
        "//images.contentful.com/fqlss9iyqje7/xeOQ17IJ5AYqSiC0mIGC0/57b69b00d88645ba12d8877abef4d8a0/Blue-Havana.jpg"
    },
    {
      name: "Matte Chocolate Havana",
      image_url:
        "//images.contentful.com/fqlss9iyqje7/6sRd8HyUKsSOewmECwiAyC/609dc1f203801ef27c3d8968b40776bd/Matte-Chocolate-Havana.jpg"
    },
    {
      name: "Red Crystalline",
      image_url:
        "//images.contentful.com/fqlss9iyqje7/67Gh7nEZI4y2aMG6QeMEiQ/4c8adc67744775c50254297045c2639e/Red-Crystalline.jpg"
    }
  ],
  variants: [
    {
      name: "Abbey - Black Gloss",
      colour: "Black Gloss",
      product_images: {
        optical: [
          "//images.contentful.com/fqlss9iyqje7/5aQlqvMTews42W0e8k6syG/cf848d693781ca8a03f4deb08e887090/abbey-s5-black-gloss-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/2m3PegJUe4YQIWQOYEaeWu/454e35de9457c30bb9c8e5eb1cf760ca/abbey-s5-black-gloss-side.jpg",
          "//images.contentful.com/fqlss9iyqje7/648ffBVqrC8ewYK4gA2OAU/4b9e64010e7636d95d3973880c22c82a/abbey-s5-black-gloss-angle.jpg"
        ],
        sun: [
          "//images.contentful.com/fqlss9iyqje7/2LLjMa5lq86o20qeSIIsYM/0ecd7fc0ae6c1d08061a6a659146171b/abbey-S5-black-gloss-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/50SrbXMmM8okwg2eaOSSK4/51573bed35c9db927fe803ce5a91706c/abbey-S5-black-gloss-angle.jpg",
          "//images.contentful.com/fqlss9iyqje7/7nVt687AUEE8GeeiwA2w0/0ea0dcc51b41136c86b1eed7b3216827/abbey-S5-black-gloss-side.jpg"
        ]
      }
    },
    {
      name: "Abbey - Blue Havana",
      colour: "Blue Havana",
      product_images: {
        optical: [
          "//images.contentful.com/fqlss9iyqje7/MZJBde9YsgkYcci0q4eGE/dc5966d227f85ba05792d0ce865e59b5/abbey-s5-blue-havana-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/6mtKWGZj4AYYI4Si2uiC8U/eaee1501f32c256d34231d7cfdd13a94/abbey-s5-blue-havana-side.jpg",
          "//images.contentful.com/fqlss9iyqje7/2nbLX7EFSQSIsw8gyo4Yk2/05e4089ac1ed6caa26689b39f841965f/abbey-s5-blue-havana-angle.jpg"
        ],
        sun: [
          "//images.contentful.com/fqlss9iyqje7/6cKdbHZA3uwIy8yEuS8uSY/21270215368f41712b23431059791f1c/abbey-S5-blue-havana-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/3gryUhAanucGceqCWAAIik/11f7d026eda557bec09635e9f4c33c47/abbey-S5-blue-havana-angle.jpg",
          "//images.contentful.com/fqlss9iyqje7/64jpZeqhwWygk0YgYmSk0G/6aa909453aede439901e3df8c5250193/abbey-S5-blue-havana-side.jpg"
        ]
      }
    },
    {
      name: "Abbey - Matte Chocolate Havana",
      colour: "Matte Chocolate Havana",
      product_images: {
        optical: [
          "//images.contentful.com/fqlss9iyqje7/549iOtDeRGooKqiCSS8CII/b0993ed94be81831a594513c97bc9188/abbey-s5-matte-chocolate-havana-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/4kD3WUCw3Cq62aeCMsgsei/3aca39946bdeb16261e9bc39c75e26e7/abbey-s5-matte-chocolate-havana-side.jpg",
          "//images.contentful.com/fqlss9iyqje7/3AswZyYwVi0oiKA8w2CywK/ecf15e2abc8f86ce814cd032170ebc51/abbey-s5-matte-chocolate-havana-angle.jpg"
        ],
        sun: [
          "//images.contentful.com/fqlss9iyqje7/4Ma617bVAQkCWQGmkO66Ku/6b56c67bc40ea35600cc95bf14c62f66/abbey-S5-matte-chocolate-havana-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/4e791UqAIoUys6oKEy8yWy/84c16936117dc481c9645100fc44f644/abbey-S5-matte-chocolate-havana-angle.jpg",
          "//images.contentful.com/fqlss9iyqje7/5ZVJCNbBKMUGUaKiOuUcoi/43fe1b1c215cf20b7fc5ec8971a31fc9/abbey-S5-matte-chocolate-havana-side.jpg"
        ]
      }
    },
    {
      name: "Abbey - Red Crystalline",
      colour: "Red Crystalline",
      product_images: {
        optical: [
          "//images.contentful.com/fqlss9iyqje7/5tULIEQAZaSagyuIoe8q06/709c78a867937b50fb8c224be187924d/abbey-s5-red-crystalline-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/7mvAKmoGaIUYO0W8kscWC4/edf3d8c4ccef9ab0e90779be13a6f976/abbey-s5-red-crystalline-side.jpg",
          "//images.contentful.com/fqlss9iyqje7/4vYLZPINuE2YgkqkEOIAKc/06b7880adbc647e403d15dd9f3f3125d/abbey-s5-red-crystalline-angle.jpg"
        ],
        sun: [
          "//images.contentful.com/fqlss9iyqje7/4rhdEkdAXm8kiMoAqeuueQ/b820baaba4a1c103a7e260aa0edbb475/abbey-S5-red-crystalline-front.jpg",
          "//images.contentful.com/fqlss9iyqje7/1UuciQ48sgIs0gcwM6aGiQ/9bdbd9f5ad36ff4531b4b5bc94daa79a/abbey-S5-red-crystalline-angle.jpg",
          "//images.contentful.com/fqlss9iyqje7/2PV7gTsyM0K4kMwSKyIMUM/b9263016b239b809d78346619e7364ad/abbey-S5-red-crystalline-side.jpg"
        ]
      }
    }
  ]
};

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(product);
    }, 3000);
  });
};
