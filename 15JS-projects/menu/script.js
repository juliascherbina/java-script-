const menu=[
    {
        id:1,
        title:'Salad',
        prise:'$20',
        img: './images/item-1.webp',
        text:'This hearty vegan salad is loaded with plant-based power ingredients: chickpeas, quinoa and hummus. We love the crunch of the sunflower seeds and the unexpected flavor of roasted peppers.'
    },
    {
        id:2,
        title:'Eggs',
        prise:'$10',
        img: './images/item-2.jpg',
        text:'Sheet Pan Breakfast Fajitas We’ve said our piece about sheet pan meals, but we’ll say it again: they’re pretty much a kitchen miracle. This recipe is perfect for breakfast, brunch, lunch and dinner — so every meal, basically.'
    },
    {
        id:3,
        title:'Omlett',
        prise:'$17',
        img: './images/item-3.webp',
        text:'Easiest Scrambled Eggs Our secret to tasty, perfect scrambled eggs every time? A rubber spatula. It makes folding them over low, slow heat in a nonstick pan super easy.'
    },
    {
        id:4,
        title:'Gulasch',
        prise:'$17',
        img: './images/item-4.webp',
        text:'This traditional Polish beef goulash recipe or gulasz wolowy gives you succulent and tender chunks of beef slow-cooked in a sweet onion and mustard gravy. Serve with bread, kopytka, or boiled potatoes.'
    },
    {
        id:5,
        title:'Pizza',
        prise:'$26',
        img: './images/item-5.jpg',
        text:'Our honeymoon to Italy changed the way we thought about pizza. Alex and I realized that artisan pizza recipes can be incredible, healthy, and simple to make at home. All you need is a great pizza sauce, minimal toppings, and a few specialized tools. Oh and most importantly, you need a great pizza dough. After all these years, we can guarantee: ours are some of the best pizza recipes you’ll find. Ready to get started? Here are our master recipes, pizza gear, and the top pizza recipes to make at home.'
    },
    {
        id:6,
        title:'Pasta',
        prise:'$21',
        img: './images/item-5.jpg',
        text:'Feeling bored of pasta (the horror!)? We got you too. Try some of our innovative pasta recipes or our creative takes on old standbys to jazz up your pasta nights.'
    },
    {
        id:7,
        title:'Wein',
        prise:'$50',
        img: './images/item-7.webp',
        text:"Gluehwein (also spelled Glühwein) is a hot spiced  that's found in many winter markets in Germany and Austria. Many tourists know it as an after-ski drink. After you come in from being out in the cold and snow, this warm"
    },
    {
        id:8,
        title:'AvocadoBowl',
        prise:'$30',
        img: './images/item-8.jpg',
        text:'Prep avocado: In a shallow medium bowl, mash the avocado with lemon juice and salt. Add toppings: Layer romaine lettuce, cherry tomatoes, cucumber, pickled red onion, feta, chickpeas, hard-boiled egg and sunflower seeds on top of the mashed avocado.'
    },
    {
        id:9,
        title:'Sandwiches',
        prise:'$19',
        img: './images/item-9.jpg',
        text:'Avocados are a great addition to many recipes. For example, avocado slices are perfect to top sandwiches, burgers, and even pizza. Theyre also great for sprinkling on typical Mexican dishes like tacos and nachos'
    },
    {
        id:10,
        title:'Grenns',
        prise:'$9',
        img: './images/item-10.webp',
        text:' informally shortened to guac in the United States since the 1980s) is an avocado-based dip, spread, or salad first developed in Mexico. In addition to its use in modern Mexican cuisine, it has become part of international cuisine as a dip, condiment and salad ingredient.'
    }
];
const sectionCenter=document.querySelector('.section-center')
window.addEventListener('DOMContentLoaded', function(){
    let displayMenu=menu.map(function(item){
        console.log(item.prise)
    }) 
})