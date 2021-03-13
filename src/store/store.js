import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           productList: [
             {
               name: "Roll Top Backpack",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 270000,
               salePercent: "10%",
               hotTag: "HOT",
               image2:
                 "http://pe.heromc.net:4000/images/9962e41e54fa69605566a7c80e888bbc",
               image1:
                 "http://pe.heromc.net:4000/images/95f35d5eca7c964e88c9c2d467903f4c",
               type: "Backpack",
               amount: 1,
               heart: 0
             },
             {
               name: "Sonnenbrille Goldfarben",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 2560000,
               image2:
                 "http://pe.heromc.net:4000/images/521c0a2d981c30a70cf0a43389908fee",
               image1:
                 "http://pe.heromc.net:4000/images/4fde2b1275ae824587c1ea2996379ba0",
               type: "glasses",
               salePercent: "",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Large Monogram Barrel",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 1005000,
               image2:
                 "http://pe.heromc.net:4000/images/29095924795763f04c3393b606c51591",
               image1:
                 "http://pe.heromc.net:4000/images/d6b8dfc53e332602bf7d40004c686a46",
               type: "BAGS",
               salePercent: "15%",
               hotTag: "",
               amount: 1,
               heart: 0
             },
             {
               name: "Monogram Print Silk",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 790000,
               image2:
                 "http://pe.heromc.net:4000/images/5dee6d0920556fae6ee4564fdd3b6d1a",
               image1:
                 "http://pe.heromc.net:4000/images/2d97b3787a7f4e1e9f31e3345cec63e9",
               type: "PANTS",
               salePercent: "25%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Flared Skirts",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 700000,
               image2:
                 "http://pe.heromc.net:4000/images/3f7196c3ad831ac7463458e01550af54",
               image1:
                 "http://pe.heromc.net:4000/images/1acd30f39da76fa00695f7b23703ce16",
               type: "SKIRT",
               salePercent: "20%",
               hotTag: "",
               amount: 1,
               heart: 0
             },
             {
               name: "Cotton Poplin Dress",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 540000,
               image2:
                 "http://pe.heromc.net:4000/images/016e22a1a6a107b3b816e632cbea2c69",
               image1:
                 "http://pe.heromc.net:4000/images/d519906462961f69d686c96a37f1a6c5",
               type: "DRESS",
               salePercent: "50%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Tasche Baguette",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 1250000,
               image2:
                 "http://pe.heromc.net:4000/images/9d69ae7f2e93ae19f7a998c24a0c6012",
               image1:
                 "http://pe.heromc.net:4000/images/9af5e5ae81452a39146138581207210c",
               type: "BAGS",
               salePercent: "",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Monogram Print Bikini",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 342000,
               image2:
                 "http://pe.heromc.net:4000/images/9858df0365302b19972dd57cc81f7a5f",
               image1:
                 "http://pe.heromc.net:4000/images/2b2bb6e1dcf1d15632ec38374fe5b8de",
               type: "BIKINI",
               salePercent: "12%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Cotton Hat",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 400000,
               image2:
                 "http://pe.heromc.net:4000/images/e788eb3c31a006127303c4b62026ffd7",
               image1:
                 "http://pe.heromc.net:4000/images/339364fab8e14ae88ab816e7ff909c25",
               type: "HATS",
               salePercent: "22%",
               hotTag: "HOT",
               amount: 1,
               heart: 0
             },
             {
               name: "Classic Topper",
               description:
                 "Lorem Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
               price: 400000,
               image2:
                 "http://pe.heromc.net:4000/images/9c8de606d585525f8bdc61e3a16e7e74",
               image1:
                 "http://pe.heromc.net:4000/images/e51928f446fae4ad3efacae4a26ede69",
               type: "JACKET",
               salePercent: "34%",
               hotTag: "",
               amount: 1,
               heart: 0
             }
           ],
           cartList: []
         }
       });
