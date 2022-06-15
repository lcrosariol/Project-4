require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: "Brassicaceae (Brassica)", sortOrder: 10 },
        { name: "Curcubitaceae (Cucurbit)", sortOrder: 20 },
        { name: "Leguminosae (Legume)", sortOrder: 30 },
        { name: "Solanaceae (Nightshade)", sortOrder: 40 },
        { name: "Umbelliferae(Parsley)", sortOrder: 50 },
        { name: "Poaceae (Corn)", sortOrder: 60 },
        { name: "Alliums (Onion)", sortOrder: 70 },
        { name: "Amaranthaceae (Goosefoot)", sortOrder: 80 },
        { name: "Asteraceae (Sunflower)", sortOrder: 90 },
        { name: "Farm Fresh Eggs", sortOrder: 100 },

    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {
        name: "Radish Daikon",
        photo: "https://i.imgur.com/Fep1buR.jpg",
        category: categories[0],
        price: 2.95,
        },
        {
        name: "Radish Scarlet Globe",
        photo: "https://i.imgur.com/hHLlt0L.jpg",
        category: categories[0],
        price: 6.95,
        },
        {
        name: "Radish Mix",
        photo: "https://i.imgur.com/4upRbjg.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "French Breakfast Radish",
        photo: "https://i.imgur.com/Pb8P28I.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Kohlrabi Purple",
        photo: "https://i.imgur.com/pAZE8lP.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Kohlrabli White",
        photo: "https://i.imgur.com/uL5Uwkx.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Brocolli",
        photo: "https://i.imgur.com/TIAo4tG.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Brocolli Romanesco",
        photo: "https://i.imgur.com/X5SWF1O.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Cauliflower White",
        photo: "https://i.imgur.com/eKygvAf.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Brussel Sprouts",
        photo: "https://i.imgur.com/z2yIPPw.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Frisee",
        photo: "https://i.imgur.com/w8nolsn.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Dinosaur Kale",
        photo: "https://i.imgur.com/19evpMu.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Green Curly Kale",
        photo: "https://i.imgur.com/BcXT2aU.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Red Curly Kale",
        photo: "https://i.imgur.com/x5zCkYx.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Red Cabbage",
        photo: "https://i.imgur.com/tlcuRCI.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Red Curly Cabbage",
        photo: "https://i.imgur.com/YDCUQ9T.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Curly Cabbage",
        photo: "https://i.imgur.com/4zP1owI.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Ornamental Kale",
        photo: "https://i.imgur.com/T3A9EdT.jpg",
        category: categories[0],
        price: 3.95,
        },
        {
        name: "Assorted Decorational Gourds",
        photo: "https://i.imgur.com/GzmThEa.jpg",
        category: categories[1],
        price: 2.95,
        },
        {
        name: "Zuchinni",
        photo: "https://i.imgur.com/Fc2NS1A.jpg",
        category: categories[1],
        price: 2.95,
        },
        {
        name: "Pumpkin GIANT",
        photo: "https://i.imgur.com/XN1v2Ii.jpg",
        category: categories[1],
        price: 6.95,
        },
        {
        name: "Cucumber Pickling",
        photo: "https://i.imgur.com/mJiAiJZ.jpg",
        category: categories[1],
        price: 2.95,
        },
        {
        name: "Yellow Squash",
        photo: "https://i.imgur.com/kXKrvLp.jpg",
        category: categories[1],
        price: 2.95,
        },
        {
        name: "Watermelon Oranglow",
        photo: "https://i.imgur.com/rO9JCuY.jpg",
        category: categories[1],
        price: 4.95,
        },
        {
        name: "Watermelon Seedless Red",
        photo: "https://i.imgur.com/aSGx6rU.jpg",
        category: categories[1],
        price: 3.95,
        },
        {
        name: "French Green Bean",
        photo: "https://i.imgur.com/2VXVWka.jpg",
        category: categories[2],
        price: 3.95,
        },
        {
        name: "Cranberry Bean",
        photo: "https://i.imgur.com/mW9EU1w.jpg",
        category: categories[2],
        price: 3.95,
        },
        {
        name: "Scarlet Runner Bean",
        photo: "https://i.imgur.com/2jVlhG3.jpg",
        category: categories[2],
        price: 3.95,
        },
        {
        name: "Yellow Wax Bean",
        photo: "https://i.imgur.com/iHOye7t.jpg",
        category: categories[2],
        rice: 3.95,
        },
        {
        name: "Waxy Potato Mixed",
        photo: "https://i.imgur.com/egSkTPL.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Red Waxy Potato",
        photo: "https://i.imgur.com/fcg9EBV.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Purple Waxy Potato",
        photo: "https://i.imgur.com/KDiP4UY.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Russet Potato",
        photo: "https://i.imgur.com/JdgMFkE.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Brandywine Tomato",
        photo: "https://i.imgur.com/0YXOHJa.jpg",
        category: categories[3],
        price: 4.95,
        },
        {
        name: "Cherokee Purple Tomato",
        photo: "https://i.imgur.com/Uut2xql.jpg",
        category: categories[3],
        price: 4.95,
        },
        {
        name: "Sweet 100 Cherry Tomato",
        photo: "https://i.imgur.com/TBgJNBR.jpg",
        category: categories[3],
        price: 4.95,
        },
        {
        name: "Roma Tomato",
        photo: "https://i.imgur.com/AYjV6tw.jpg",
        category: categories[3],
        price: 4.95,
        },
        {
        name: "Eggplant Purple",
        photo: "https://i.imgur.com/RtNqHgh.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Eggplant Lista De Gandia",
        photo: "https://i.imgur.com/c9d90K9.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Anaheim Pepper",
        photo: "https://i.imgur.com/mGOTFVb.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Thai Chili Pepper",
        photo: "https://i.imgur.com/LFy1R28.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Green Bell Pepper",
        photo: "https://i.imgur.com/wVVGG8g.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Red Bell Pepper",
        photo: "https://i.imgur.com/H8zfKTl.jpg",
        category: categories[3],
        price: 3.95,
        },
        {
        name: "Mixed Bell",
        photo: "https://i.imgur.com/zYUZeFL.jpg",
        category: categories[3],
        price: 5.95,
        },

        {
        name: "Celery",
        photo: "https://i.imgur.com/1y4MNPD.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Carrot Scarlet Nantes",
        photo: "https://i.imgur.com/fROipYH.jpg",
        category: categories[4],
        price: 2.95,
        },
        {
        name: "Carrot Mix",
        photo: "https://i.imgur.com/9gduJAS.jpg",
        category: categories[4],
        price: 2.95,
        },
        {
        name: "Dill",
        photo: "https://i.imgur.com/VO2Cue3.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Cilantro",
        photo: "https://i.imgur.com/tGbGt8C.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Parsley",
        photo: "https://i.imgur.com/sPligv2.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Parsnip",
        photo: "https://i.imgur.com/xP76IWj.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Cumin",
        photo: "https://i.imgur.com/nTy8Y8j.jpg",
        category: categories[4],
        price: 3.95,
        },
        {
        name: "Fennel",
        photo: "https://i.imgur.com/Qlk2hHq.jpg",
        category: categories[4],
        price: 3.95,
        },

        {
        name: "Little Gem",
        photo: "https://i.imgur.com/b74HjZl.jpg",
        category: categories[5],
        price: 6.95,
        },
        {
        name: "Golden Bantam",
        photo: "https://i.imgur.com/bPVSKA5.jpg",
        category: categories[5],
        price: 3.95,
        },
        {
        name: "Peaches and Cream",
        photo: "https://i.imgur.com/OFOXXqY.jpg",
        category: categories[5],
        price: 4.95,
        },
        {
        name: "Blue Hopi",
        photo: "https://i.imgur.com/7zqthsD.jpg",
        category: categories[5],
        price: 4.95,
        },
        {
        name: "Red Onion",
        photo: "https://i.imgur.com/dkKKpje.jpg",
        category: categories[6],
        price: 3.95,
        },
        {
        name: "Yellow Onion",
        photo: "https://i.imgur.com/iuGTGdw.jpg",
        category: categories[6],
        price: 3.95,
        },
        {
        name: "White Onion",
        photo: "https://i.imgur.com/yrp9wXt.jpg",
        category: categories[6],
        price: 3.95,
        },
        {
        name: "Shallot",
        photo: "https://i.imgur.com/p1SBGhT.jpg",
        category: categories[6],
        price: 3.95,
        },
        {
        name: "Green Onion",
        photo: "https://i.imgur.com/LyxaOLG.jpg",
        category: categories[6],
        price: 1.95,
        },
        {
        name: "Leek",
        photo: "https://i.imgur.com/4qgLZPI.jpg",
        category: categories[6],
        price: 4.95,
        },
    ]);

    console.log(items);

    process.exit();
})();
