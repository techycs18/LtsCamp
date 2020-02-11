const mongoose = require('mongoose')
const CampgroundModel = require('./models/campModel');
const commentsModel = require('./models/commentsModel');

var data = [
    {
        nameMongo: 'Spiti Valley, Himachal Pradesh',
        price: 800,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/spiti-valley-himachal-pradesh.jpg',
        descriptionMongo: 'Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The middle land", i.e. the land between Tibet and India. Local population follow Vajrayana Buddhism similar to that found in the nearby Tibet and Ladakh regions. The valley and surrounding region is one of the least populated regions in India and is the gateway to the northernmost reaches of the nation. Along the northern route from Manali, Himachal Pradesh or Keylong via the Rohtang Pass or Kunzum Pass respectively, the valley lies in the North Eastern section of the Indian state Himachal Pradesh, and forms part of the Lahaul and Spiti district. The sub-divisional headquarters (capital) is Kaza, Himachal Pradesh which is situated along the Spiti River at an elevation of about 12,500 feet (3,800 m) above mean sea level.',
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Tso Moriri, Ladakh',
        price: 900,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/tso-Moriri-Ladakh.jpg',
        descriptionMongo: 'Picturesquely located in secluded, breathtakingly beautiful Rupshu Valley, the high-altitude Tso Moriri Lake is less than 250 kilometers southeast of Leh. Flanked by lofty mountains, this serene lake is about 4,000 meters above sea level. Tso Moriri is approximately 29 kilometers long and up to 8 kilometers wide. Tso Moriri attracts a range of wildlife, including migratory birds, marmots and rarely the Tibetan wolves. Tso Moriri lake in Changthang region of Ladakh is one of the most beautiful, calm and sacred (for ladakhis) high altitude lakes in India. In fact, it is the largest high altitude lake in India that is entirely in Indian Territory. This beautiful blue pallet lake is about 7 KM wide at its broadest point and about 19 KM long. Being part of the wetland reserve under Ramsar site, it is actual known as Tsomoriri Wetland Conservation Reserve and one cannot pitch any tents or construct anything near the banks of the lake. It is the highest Ramsar site in the world. A large number of flora and fauna is found in the region. Since, it is very near to the Line of Actual Control, one need to get Inner Line Permit to visit Tso Moriri.',
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
 
    },
    {
        nameMongo: 'Sam Sand Dunes –Jaisalmer',
        price: 750,
        imageMongo: 'https://toib.b-cdn.net/wp-content/uploads/2017/08/sam-sand-dunes-%E2%80%93jaisalmer.jpg',
        descriptionMongo: "Welcome to the DESERT SAFARI JAISALMER is Located at Near Toll Beriar, Right Side on Road at Sam Sand dunes Desert Village Jaisalmer. It is 40 Kms from Jaisalmer City (known as sand dunes of Thar Desert). Our Sam Sand Dunes Group of Resort''s & Camp is one of the best camping sight of Thar Desert Jaisalmer. In Our Resort\'s 30 tents furnished with modern amenities and traditional interiors. The tents are exclusively designed to provide visitors experience of lifetime. Experience the soul of this enchanting land on a camel safari’s and Desert Jeep Safari in Sam Sand Dunes. We provides village safari for our guest through jeep & camel in desert and to feel local village lifestyle and atmosphere, an also seen Desert National Park to know about Desert wildlife and clean dunes made by nature. Far from Jaisalmer city at Sam sand dunes, Where we offer you Perfect Desert Packages which includes Overnight Quality stay in Swiss Cottage tent, Camel safari, Refreshments, Warm welcome, Cultural evenings with Rajasthani performances around Roaring Camp fire, Delicious and hygienic Dinner and Breakfast. If you are looking best luxury resort in rishikesh visit Panambi Resort.",
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",

        }
    },
    {
        nameMongo: 'La Rosa campsite',
        price: 850,
        imageMongo: 'https://static.toiimg.com/photo/41343583/.jpg',
        descriptionMongo: "Some have named La Rosa the 'campest campsite' around with the owners being self-confessed 'kitschers'—staying there is most certainly an endearingly odd and unforgettable bohemian experience. The sheer eccentricity of the site adds entertainment to the camping adventure, with the abundance of trinkets lying around sure to be talking points. The nine caravans range from vintage to classic and vary in size, with two of them being authentic chrome Roma trailers. All are individually themed—Bollywood, Psychocandy, British 50's seaside, 1970's African Safari—and are decorated with appropriate kitsch, always second-hand and recycled. The campsite owners have an eco-friendly philosophy, with the toilet (an old pre-war shepherd's hut) being a compost loo and no electricity—only candles and moonlight. Just when you thought it could not get any more unconventional, the opportunity to bath in a roll-top open aired bath in the middle of an orchard presents itself. Open fire pits are great for nighttime campfires, where a cauldron for making mulled wine can be supplied. Otherwise there is an actual circus tent on the premises, supplied by a man who once ran away with the circus. The site is large, 20 acres, with most of it being woodland, with a good deal of wildlife such as roe deer and owls. The campsite is limited to just sixteen guests, which means that if anything, it is under-crowded and tranquil. Whitby on the coast is a 15—minute drive if you wish to break into normal life again, and with the site being set in the North York Moors National Park, there is no shortage of walks and beautiful spots to visit.",
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Sahara Desert, Morocco',
        price: 1100,
        imageMongo: 'https://www.bootsnall.com/articles/wp-content/uploads/sites/2/2012/07/1.-Morocco.jpg',
        descriptionMongo: 'Erg Chebbi, the giant dune that most tourists seek out when trekking to the Sahara in Morocco, is one of the most remarkable things I have ever seen. The complete silence that greets you in the desert, and the way you can truly lose yourself in sand that stretches as far as the eye can see, is incredible. The sand in the Sahara Desert is the that softest I have found–no beach or desert that I have ever been to before can compare: this was akin to sitting on velvet, or running your hands through water. It is so soft. And, the stars–don’t get me started on the stars. I have been to some fairly remote places, but the Sahara Desert is about as dark as it gets: when the sun went down, the sky utterly erupted with more stars than I thought it could hold, complete with a crystal-clear view of the milky way. To add to the ambiance, we trekked to our campsite by camel at sunset, and then out again at sunrise. It sounds romantic to do it that way (and it was)–but really, I’m pretty sure the sunset/sunrise schedule has more to do with shielding the tourists from the heat than anything else.',
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
    {
        nameMongo: 'Lake District, England',
        price: 850,
        imageMongo: 'https://www.bootsnall.com/articles/wp-content/uploads/sites/2/2012/07/6-england.jpg',
        descriptionMongo: 'The Lake District (or Lakeland, as it\'s commonly known round these parts) is by far the UK\'s most popular national park. Every year, some 15 million people pitch up to explore the region\'s fells and countryside, and it\'s not hard to see why. Ever since the Romantic poets arrived in the 19th century, its postcard panorama of craggy hilltops, mountain tarns and glittering lakes has been stirring the imaginations of visitors. Since 2017 it has also been a Unesco World Heritage Site, in recognition of its unique hill-farming culture. It\'s awash with outdoor opportunities, from lake cruises to mountain walks, but many people visit for the region\'s literary connections. Among the many writers who found inspiration here were William Wordsworth, Samuel Taylor Coleridge, Arthur Ransome and, of course, Beatrix Potter, a lifelong lover of the Lakes.',
        authorMongo: {
            id : "5e4270d7f81392159fb60b05",
	        username : "Chaitanya Sonavane",
        }
    },
    {
        nameMongo: 'Chief’s Island, Mombo Camp',
        price: 1900,
        imageMongo: 'https://static.toiimg.com/photo/40414737/.jpg',
        descriptionMongo: 'Mombo Camp is built on a scenic island where large concentrations of wildlife of many different species can be viewed from the luxury of your veranda! Giant umbrella thorns and Ilala palms dot the expansive plains to establish a glorious savannah landscape alongside the marshes and floodplains of the Delta.Kwetsani Island is a large, extended island surrounded by enormous open plains. It is to be found in the Jao Reserve to the west of Mombo and the Moremi Game Reserve. The island is deeply wooded with palm, mangosteen and fig trees. The camp rests on stilts beneath the shady canopy, overlooking the flood plains. The water levels around the island transform each year, depending on the extent of the annual floods from central Africa. The water levels are at the highest from April or May to September each year.',
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
    {
        nameMongo: 'La Brouquere',
        price: 1700,
        imageMongo: 'https://static.toiimg.com/photo/40575639/.jpg',
        descriptionMongo: "The landscape here is gently sloping, enough to send you off in the right direction as you stumble home to this ex-winery campsite after an evening of so much foie gras and Armagnac that you find yourself with a bit of a waddle. There are only six pitches in this camp, so there's always space in the pool-cum-hot-tub if you fancy a soak to ease digestion. The Dutch owners of this site speak English, so are able to share with you the history of this Armagnac winery and the vineyards that surround it, and they've thoughtfully provided all parties with private bathrooms.",
        authorMongo: {
            id : "5e42731d16678c1764c8050b",
	        username : "Swapnil Katve"
        }
    },
];

function seedDB() {
    CampgroundModel.deleteMany({},err=>{
        if(err){
            console.log("Error: " +err);
        }else{
            console.log("Removed Campgrounds");
            commentsModel.deleteMany({},err =>{
                if(err){
                    console.log("Some error");
                }else{
                    console.log("Removed Comments");
                }
            });
        }
        data.forEach( eachCamp =>{
            CampgroundModel.create(eachCamp,(err,campSavedToDb)=>{
                if(err){
                    console.log(err)
                }else{
                    commentsModel.create({textMongo:  campSavedToDb.nameMongo + " is a good place to have a good time with family and friends. If you want to make a camping plan for some weekend you can definitely visit and have fun. It is worth visting and spending time with nature",
                        authorMongo: {
                            id : "5e427167f81392159fb60b06",
	                        username : "Richard Bale"
                        }       
                    },(err,commentAdded)=>{
                        if(err){
                            console.log(err);
                        }else{
                            console.log("Comments added: ");
                            campSavedToDb.commentsMongo.push(commentAdded);
                            campSavedToDb.save();
                        }
                    });
                }
            });
        });
    });    
    console.log("seedDB was called");
}

module.exports = seedDB;