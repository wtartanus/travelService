package data.models.db;

import data.models.DbConnection;

public class Seed {

	public static void populateInspirations() {
	  DbConnection con = new DbConnection();
	  
	  //Create tables
	  String sql = "CREATE TABLE cities(id SERIAL4 primary key, city VARCHAR(255), description TEXT, history TEXT);";
	  con.executeSet(sql);
	  
	  sql = "CREATE TABLE photos(id SERIAL4 primary key, city_id INT4 references cities (id) ON DELETE CASCADE, link VARCHAR(255));";
	  con.executeSet(sql);
	  
	  sql = "CREATE TABLE weather(id SERIAL4 primary key, city_id INT4 references cities (id) ON DELETE CASCADE,"
	  		+ "jan INT4, feb INT4, mar INT4, apr INT4, may INT4, june INT4, july INT4, aug INT4, sept INT4, oct INT4, nov INT4, dec INT4);";
	  con.executeSet(sql);
	  
	  sql = "CREATE TABLE activities(id SERIAL4 primary key, city_id INT4 references cities (id) ON DELETE CASCADE, name VARCHAR(255),"
	  		+ "description TEXT, address VARCHAR(255), photo_link VARCHAR(255));";
	  con.executeSet(sql);
	  
	  //Populate tables
	  
	  //Populate cities
	  sql = "INSERT INTO cities (city, description, history) VALUES('Edinburgh',"
	  		+ "'Edinburgh is Scotland compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens "
	  		+ "and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland crown jewels and the Stone of "
	  		+ "Destiny, used in the coronation of Scottish rulers. Arthur Seat is an imposing peak in Holyrood Park with sweeping views, "
	  		+ "and Calton Hill is topped with monuments and memorials.',"
	  		+ "'The area around modern-day Edinburgh has been inhabited for thousands of years. Its origins as a settlement can be traced "
	  		+ "to the early Middle Ages when a hillfort was established in the area, most likely on the castle rock. From the seventh to the "
	  		+ "tenth centuries it was part of the Anglian Kingdom of Northumbria, becoming thereafter a royal residence of the Scottish kings. "
	  		+ "The town that developed next to the stronghold was established by royal charter in the early 12th century, and by the middle of "
	  		+ "the 14th century was being described as the capital of Scotland. The area known as the New Town was added from the second half of "
	  		+ "the 18th century onwards. Edinburgh was Scotland largest city until Glasgow outgrew it in the first "
	  		+ "two decades of the 19th century.');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO cities (city, description, history) VALUES('Albufeira',"
	  		+ "'Albufeira is a coastal city in the southern Algarve region of Portugal. It’s a former "
	  		+ "fishing village that has become a major holiday destination, with sandy beaches and a busy nightlife strip."
	  		+ " Local fishermen now use the modern marina, also a base for diving, dolphin-watching and boat trips. "
	  		+ "It is surrounded by candy-colored apartments, with a waterfront promenade.',"
	  		+ "'It is unclear when the first settlements specifically formed in the region of Albufeira, although scientific"
	  		+ " research suggest origins during the pre-historic epoch, and that the town of Albufeira formed as an out-port of the maritime "
	  		+ "fishery. The primitive settlement was occupied by the Romans, named it Baltum, introducing a centralized administrative structure "
	  		+ "and developing intense agricultural activities along with commerce. The Romans constructed aqueducts, roads and bridges, "
	  		+ "of which parts still remain. The name originated from the Arab Al-buhera, which means castle of the sea, "
	  		+ "owing to its location along the coast, or the alternately al-Buħayra, for the lagoon, in reference to the lagoon that formed "
	  		+ "in the lowlands. The Arabs constructed strong defensive structures, making the area almost impregnable, allowing this area to "
	  		+ "remain in the hands of their forces longer than other possessions in Portugal. The development of agriculture during this period "
	  		+ "was notable, with the introduction of new techniques and plant species. The Moors used the plow and fertilizers, as well as "
	  		+ "winches for lifting the water from the wells, introducing the irrigation of fields, constructing dams and transforming uncultivated "
	  		+ "areas into gardens and orchards.');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO cities (city, description, history) VALUES('Nelson',"
	  		+ "'Nelson is a city on the South Island of New Zealand, facing Tasman Bay. It is known for its local arts and "
	  		+ "crafts stores and art galleries. It is also a popular base for nearby caving sites, vineyards and "
	  		+ "Abel Tasman National Park. Established by English settlers in 1841, the citys history is showcased at Founders "
	  		+ "Heritage Park, a living museum with a vintage railway.',"
	  		+ "'The city of Nelson is close to the centre of New Zealand. It lies at the shore of Tasman Bay, at the northern end of "
	  		+ "the South Island, and is the administrative centre of the Nelson region.\n\nNelson is a centre for arts and crafts, "
	  		+ "and each year hosts popular events such as the Nelson Arts Festival. The annual Wearable Art Awards began near Nelson and "
	  		+ "a museum, World of Wearable Art, is now housed close to Nelson Airport showcasing winning designs.\n\nBrightwater, "
	  		+ "near Nelson is the birthplace of Lord Rutherford, the Nobel Prize-winning physicist whose image appears on New Zealand’s "
	  		+ "$100 banknote, the largest denomination in circulation in New Zealand.\n\nNelson received its name in honour of the Admiral "
	  		+ "Horatio Nelson who defeated both the French and Spanish fleets at the Battle of Trafalgar in 1805. Many of the roads and "
	  		+ "public areas around the city are named after people and ships associated with that battle and Trafalgar Street is the "
	  		+ "main shopping axis of the city. Inhabitants of Nelson are referred to as Nelsonians.');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO cities (city, description, history) VALUES('Whistler',"
	  		+ "'Whistler is a town north of Vancouver, British Columbia, that ss home to Whistler Blackcomb, "
	  		+ "one of the largest ski resorts in North America. Besides skiing and snowboarding, the area offers snowshoeing, "
	  		+ "tobogganing and ski jumping at the Olympic Park, a venue for the 2010 Vancouver Winter Olympics. The hub of Whistler is "
	  		+ "a compact, chalet-style pedestrian village at the base of Whistler and Blackcomb mountains.',"
	  		+ "'The Whistler Valley is located around the pass between the headwaters of the Green River and the upper-middle "
	  		+ "reaches of the Cheakamus. It is flanked by glaciated mountains on both sides; the Garibaldi Ranges on the side that contains "
	  		+ "the ski mountains, and a group of ranges with no collective name but which are part of the larger Pacific Ranges and are "
	  		+ "essentially fore-ranges of the Pemberton Icefield. Although there are a few other routes through the maze of mountains "
	  		+ "between the basin of the Lillooet River just east, the Cheakamus-Green divide is the lowest and most direct and naturally "
	  		+ "was the main trading route of the Squamish and Lilwat First Nations long before the arrival of Europeans. One Lilwat legend "
	  		+ "of the Great Flood says that before the deluge, the people lived at Green Lake.\nThe first British survey by the Royal Navy "
	  		+ "took place in the 1860s. These surveyors named the mountain London Mountain because of the heavy fog and cloud typically "
	  		+ "gathering around the mountain, but the area informally acquired the name \"Whistler\" due to the call of the hoary marmot. "
	  		+ "In the late 19th century, a trail was cut through the valley, linking Lillooet via Pemberton with Burrard Inlet via a pass "
	  		+ "from Squamish to the Seymour River. The trail was completed in 1877, but because of the difficult and unforgiving terrain, "
	  		+ "it was only used once for its intended purpose, which was to drive cattle. The area began to attract trappers and prospectors "
	  		+ "(such as John Millar and Henry Horstman) who established small camps in the area in the early 20th century. The area began to "
	  		+ "gain recognition with the arrival of Myrtle and Alex Philip, who in 1914 purchased 10 acres (4.0 ha) of land on Alta Lake and "
	  		+ "established the Rainbow Lodge. The Philips had relocated from Maine to Vancouver in 1910, and had heard rumors of the natural "
	  		+ "beauty of the area from Pemberton pioneer John Millar. After an exploratory journey, the couple was convinced. Rainbow Lodge "
	  		+ "and other railway-dependent tourist resorts were collectively known as Alta Lake. Along with the rest of the valley bridging "
	  		+ "the Cheakamus and Green River basins, they became part of British Columbias first Resort Municipality in 1975.\nCompletion of "
	  		+ "the Pacific Great Eastern Railway in 1914 greatly reduced the travel time from three days, providing ease of access from Vancouver, "
	  		+ "and the Rainbow Lodge gained a reputation as the most popular vacation destination west of the Rockies.[citation needed] The "
	  		+ "lodge was primarily a summer destination, with boating, fishing and hiking among the most popular activities, and soon other "
	  		+ "lodges began to open not just on Alta Lake, but on other valley lakes as well.\nAppreciation of the outdoors was not the only "
	  		+ "activity in the valley, however. Logging was a boom industry. During the first half of the 20th century, most of the lower "
	  		+ "slopes of the surrounding mountains were cleared of old growth. At its peak, four mills were in operation, most located around "
	  		+ "Green Lake. Prospecting and trapping were pursued as well, though no claims of great value were ever staked.')";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO cities (city, description, history) VALUES('Krabi',"
	  		+ "'Krabi, the capital of southern Thailands Krabi Province, is a resort town near the Andaman coast. "
	  		+ "It lies in an area of limestone karsts and mangrove forest. On a hilltop reached by stairs, the Tiger Cave Temple is"
	  		+ " a Buddhist site with panoramic views. Khao Kanab Nam, 2 slanting hills rising out of water, form a local landmark. "
	  		+ "Andaman Sea destinations like the Phi Phi Islands are accessible by ferry.',"
	  		+ "'At the start of the Rattanakosin or Bangkok period in the late eighteenth century, "
	  		+ "when the capital was finally settled at Bangkok, an elephant kraal was established in Krabi by order of Chao Phraya Nakorn "
	  		+ "(Noi), the governor of Nakhon Si Thammarat, which was by then a part of the Thai Kingdom. He sent his vizier, the Phra Palad, "
	  		+ "to oversee this task, which was to ensure a regular supply of elephants for the larger town. So many followers "
	  		+ "immigrated in the steps of the Phra Palad that soon Krabi had a large community in three different boroughs: Pakasai, "
	  		+ "Khlong Pon, and Pak Lao. In 1872, King Chulalongkorn elevated these to town status, called Krabi, a word that preserves in "
	  		+ "its meaning the monkey symbolism of the old standard. The towns first governor was Luang Thep Sena, though it continued for a "
	  		+ "while as a dependency of Nakhon Si Thammarat. This was changed in 1875, when Krabi was raised to a fourth-level town in the "
	  		+ "old system of Thai government. Administrators then reported directly to the central government in Bangkok, and Krabis history"
	  		+ " as an entity separate from other provinces had begun.')";
	  con.executeSet(sql);
	  
	  //Populate photos
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1,"
	  		+ "'https://www.visitscotland.com/cms-images/destinations/edinburgh/well-court-dean-village?view=Standard');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1,"
	  		+ "'http://edinburgh.org/media/743370/Edinburgh-Castle.jpg');";
	  
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1, "
	  		+ "'https://citiesofscotlandcouk.files.wordpress.com/2016/01/the-royal-mile-looking-down-the-high-street-edinburgh-scotland-copy.jpg?w=1200');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1, "
	  		+ "'https://www.visitscotland.com/cms-images/destinations/edinburgh/salisbury-crags');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1, "
	  		+ "'http://cdn.goeuro.com/static_content/web/content/destination/EdinburghDeluxe1.jpg'); ";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(1, "
	  		+ "'http://www.edinburghspotlight.com/wp-content/uploads/2014/10/10600455_686408118095173_3095220767101019178_n.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'http://www.algarvevillarentals.biz/wp-content/uploads/2013/01/Villa-Eagles-8.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'https://cache-graphicslib.viator.com/graphicslib/destination/albufeira-190212.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'http://blog.purpletravel.co.uk/wp-content/uploads/2012/08/Albufeira_Cheap_holidays_with_PurpleTravel_1.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'http://www.easyjet.com/en/holidays/shared/images/guides/portugal/algarve/albufeira.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'http://www.akivillas.com/wp-content/uploads/2016/10/16.Albufeira.Pool_.Villa_.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(2, "
	  		+ "'https://cdn.getyourguide.com/niwziy2l9cvz/654SJDpsfmqQku6oKIQweI/179a6e7e0a132967e525b5e776a58e2b/albufeira-1112x630__2_.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'http://photos1.blogger.com/blogger/6559/2233/1600/ANZ%20abel%20tasman.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'http://cdn.c.photoshelter.com/img-get/I0000f4qSI8ji5q8/s/1000/');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'http://www.placestoseeinyourlifetime.com/wp-content/uploads/2014/07/Untitled-9.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'https://www.iod.org.nz/portals/0/Branches%20and%20events/Nelson_header.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'http://www.helicoptersnelson.co.nz/wp-content/uploads/2015/11/Blue-Lake-_-Web-1.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(3, "
	  		+ "'http://newzealandtravel.org/sites/default/files/abel_tasman_national_park_new_zealand.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'http://triathlonmagazine.ca/wp-content/uploads/2016/03/whistler.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'https://s-media-cache-ak0.pinimg.com/originals/36/c9/2e/36c92ecee70b0257685612baf415cf20.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'https://www.whistlerblackcomb.com/~/media/Images-Whistler-Blackcomb/Activities/2015/Golf/1920x1080Golf2.ashx?h=1080&la=en&w=1920&hash=DF6839AEB48CCBFA083250E5851C5C20B5DDC30A');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'https://www.whistler.com/village/slider/whistler-village-snow.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'http://images.boomsbeat.com/data/images/full/34246/2-jpg.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(4, "
	  		+ "'http://www.amped4ski.co.nz/wp-content/uploads/2014/02/Whistler-panorama.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'https://www.couponraja.in/theroyale/wp-content/uploads/2014/12/swimming-pool-sofitel.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'http://bigmapthailand.com/wp-content/uploads/2015/04/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B5%E0%B9%88.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'http://www.trazeetravel.com/wp-content/uploads/2015/11/Wat-Tham-Seua-The-Tiger-Cave-Temple-Krabi-Thailand-%C2%A9-Khunaspix-Dreamstime-42407101-e1448469418266.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'http://vacationadvice101.com/wp-content/uploads/2013/06/Krabi.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'https://welldesi.files.wordpress.com/2016/01/krabi-thailand-phra-nang-longtail1.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO photos (city_id, link) VALUES(5, "
	  		+ "'http://airporter.co.uk/wp-content/uploads/2015/01/ao-nang.jpg');";
	  con.executeSet(sql);
	  
	  //Populate weather
	  
	  sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec) "
	  		+ "VALUES(1, 3, 4, 6, 7, 10, 13, 15, 15, 13, 10, 6, 5);";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec) "
		    + "VALUES(2, 12, 13, 14, 15, 18, 20, 23, 23, 22, 19, 15, 13);";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec) "
			 + "VALUES(3, 18, 18, 16, 14, 11, 8, 8, 9, 12, 13, 15, 15);";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec) "
			 + "VALUES(4, -5, -1, 3, 7, 12, 15, 19, 19, 14, 10, 2, -3);";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec) "
			 + "VALUES(5, 27, 30, 29, 30, 30, 29, 29, 29, 29, 28, 28, 28);";
	  con.executeSet(sql);
	  
	  //Populate activities
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) "
	  		+ "VALUES(1, "
	  		+ "'Arthurs Seat',"
	  		+ "'Arthurs Seat is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park,"
	  		+ " as well as it is rich cultural heritage, the park offers walks, solace, wildlife, volcanic geology "
	  		+ "and unparalleled vistas of the city from its many vantage points. The park has several Site of Special Scientific "
	  		+ "Interest (SSSI) designations due to its exceptional range of grassland habitats and its internationally important "
	  		+ "volcanic geology. Ranger service on site.', "
	  		+ "'Holyrood Park, Edinburgh, Scotland', "
	  		+ "'http://www.edinburghspotlight.com/wp-content/uploads/2013/04/3160071115_54a0a7fd05.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(1, "
	  		+ "'Royal Yacht Britannia', "
	  		+ "'Step aboard The Queens former floating palace and experience this iconic 5 star attraction for yourself. "
	  		+ "Britannia is one of the most famous ships in the world. Sailing a million miles on a thousand official visits, "
	  		+ "during 40 years in service, the Royal Yacht played host to glittering state banquets and official receptions,"
	  		+ " but was also home to the Royal family and crew of 220 Royal Yachtsmen. Explore Britannias fully accessible 5 "
	  		+ "decks with highlights including the elegant Royal Apartments, Crews Quarters, Engine Room and stunning Royal Deck Tea Room."
	  		+ " FREE audio guide in 27 languages and British Sign Language Tablet. Fully accessible for wheelchairs and buggies. Open year "
	  		+ "round with FREE parking at Ocean Terminal. Only 15 minutes from Edinburgh city centre (local buses every 10 minutes - 11, 22, "
	  		+ "34 and 35 to Ocean Terminal).', "
	  		+ "'2nd Floor, Ocean Terminal | Leith, Edinburgh EH6 6JJ, Scotland',"
	  		+ " 'http://i.dailymail.co.uk/i/pix/2011/11/11/article-0-0033270D00000258-945_964x602.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(1, "
	  		+ "'Edinburgh Old Town', "
	  		+ "'Edinburgh oldest neighborhood, dating back to medieval times: these small streets are lined with wool shops, pubs and historical monuments.', "
	  		+ "'Edinburgh EH1, Scotland', "
	  		+ "'http://www.lawhf.co.uk/UserFiles/Image/Galleries/Edinburgh/FullSize/Old%20Town.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(1, "
	  		+ "'National Museum of Scotland', "
	  		+ "'xplore the diversity of the natural world, world cultures, science and technology, art, design and fashion, and Scottish history, all under one roof.', "
	  		+ "'Chambers Street, Edinburgh EH1 1JF, Scotland', "
	  		+ "'http://www.banditstudio.com/wp-content/files_mf/cache/th_912ed52bc8b5318a418885506e0851b8_NATIONAL_MUSEUM_SCOTLAND_DN061.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(1, "
	  		+ "'Edinburgh Castle', "
	  		+ "'A mighty fortress, the defender of the nation, and a world-famous visitor attraction - Edinburgh Castle "
	  		+ "has dominated the skyline for centuries. And the high volcanic rock on which it stands has been occupied for thousands of years. "
	  		+ "Today it is home to Scotland crown jewels, three military museums, the Scottish National War Memorial, the Prisons of War "
	  		+ "exhibition, and much more. The castle offers a fabulous day out - an experience not to be missed.', "
	  		+ "'Edinburgh EH12NG, Scotland', "
	  		+ "'http://static.guim.co.uk/sys-images/Guardian/About/General/2011/11/16/1321471266306/The-Edinburgh-Castle--007.jpg')";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(1, "
	  		+ "'Royal Botanic Garden Edinburgh', "
	  		+ "'The Botanics offers visitors peace and tranquility amongst its stunning 72 acres in Edinburgh city centre. "
	  		+ "Founded in 1670, the Garden is acknowledged to be one of the finest in the world.', "
	  		+ "'20 Inverleith Row, Edinburgh EH3 5LR, Scotland', "
	  		+ "'http://www.gardenvisit.com/uploads/image/image/143/14384/royalbotanicgardensedinburgh_original.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Praia dos Salgados', "
	  		+ "'Lovely long beach with the Salgaldos nature reserve behind the beach.', "
	  		+ "'Salgados, Albufeira, Portugal', "
	  		+ "'https://www.guiadacidade.pt/assets/capas_poi/capa_13914.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Praia da Coelha', "
	  		+ "'Praia da Coelha (Rabbit Beach) is a very typical Algarve coast location featuring clean fine sand,"
	  		+ " limestone cliffs and Atlantic breakers rolling in. The coastline is well linked with a path network"
	  		+ " for walkers although care required at many parts due to coastal erosion and steep drops.', "
	  		+ "'Albufeira 8200, Portugal', "
	  		+ "'https://media-cdn.tripadvisor.com/media/photo-s/02/2e/2b/71/praia-da-coelha.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Praia Gale', "
	  		+ "'The beach between Galé and Armação de Pêra is about 5 km long. A nice sandy beach, with some nice restaurants. "
	  		+ "Also the natural preserved area behind the beach is worth a visit.', "
	  		+ "'Estrada da Gale, Albufeira 8200-385, Portugal', "
	  		+ "'http://freemapsalgarve.com/wp-content/uploads/praia-gale.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Praia Sao Rafael', "
	  		+ "'This is a lovely beach for swimming and sun-bathing with some secluded areas for privacy. "
	  		+ "Certain areas beneath the water are still rocky so be careful when jumping in for a swim.', "
	  		+ "'Urbanizacao de Sao Rafael, Albufeira 8200-613, Portugal', "
	  		+ "'https://media-cdn.tripadvisor.com/media/photo-s/04/15/73/d8/praia-sao-rafael.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Falesia Beach', "
	  		+ "'Fabulous little beach with mountain views and crisp sea waves.', "
	  		+ "'Aldeia da Falésia, Olhos de Agua, Albufeira 8200-593, Portugal', "
	  		+ "'https://media-cdn.tripadvisor.com/media/photo-s/01/10/98/da/sun-beds-and-sunshades.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(2, "
	  		+ "'Zoomarine Algarve', "
	  		+ "'Located in Guia, just a few kilometers from Albufeira, you can watch presentations with dolphins, seals and sea lions, "
	  		+ "with tropical birds and birds of prey. Besides these presentations, there is also an amazing aquarium with sharks, various habitats, "
	  		+ "4D Cinema, attractions, amusements, swimming pools and the new Zoomarine Beach, to ensure that your visit to Zoomarine will be "
	  		+ "unforgettable. Unique sensations on a journey through world of knowledge and adventure where adults and children discover the mysteries "
	  		+ "of marine life in a day full of surprises and emotions.', "
	  		+ "'Estrada Nacional 125 - Km 65, Guia, Albufeira 8201-864, Portugal', "
	  		+ "'https://media-cdn.tripadvisor.com/media/photo-s/01/f4/ed/99/provided-by-zoomarine.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'Queens Gardens', "
	  		+ "'The Gardens are inspired by an intimate, Victorian garden. They reflect the growth and development of the city. "
	  		+ "Visitors will find a diverse plant and Notable Tree collection and also a place for social and civic gatherings, "
	  		+ "public relaxation and enjoyment.', "
	  		+ "'Bridge Street, Nelson, New Zealand', "
	  		+ "'https://www.maitaivalleymotorcamp.co.nz/sites/default/files/pictures/Queens-Gardens-Nelson.JPG');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'Tahunanui Beach', "
	  		+ "'A very long beach, with shallow water. soft white sand and lots of space.', "
	  		+ "'Bisley Walk, Nelson 7011, New Zealand', "
	  		+ "'https://media.xogrp.com/images/1e0b6579-8673-49e3-9a46-f527398928a0');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'Founders Park', "
	  		+ "'Founders Heritage Park is a museum in Nelson, New Zealand, housing a number of groups with historical themes, "
	  		+ "including transport. A short heritage railway line is operated by the Nelson Railway Society.', "
	  		+ "'87 Atawhai Drive | Brooklands, Nelson 7010, New Zealand', "
	  		+ "'https://farm2.staticflickr.com/1617/24248547200_3532b1d920.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'Nelson Saturday Market', "
	  		+ "'The Nelson Market is famous for its longevity and high quality of its stalls.  For over 30 years, market owner "
	  		+ "Nita Knight has worked hard to create a showcase of the best that the Nelson region has to offer in arts, "
	  		+ "crafts and produce. The market is enhanced these days with a wide variety of food carts, making it a wonderful place "
	  		+ "to meet friends and share brunch or lunch while checking out the array of goods on offer at this truly iconic market.', "
	  		+ "'Montgomery Square, Nelson, New Zealand', "
	  		+ "'https://media-cdn.tripadvisor.com/media/photo-s/05/f3/84/ac/caption.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'Centre of New Zealand',"
	  		+ "'An iconic walk for locals and visitors, the Centre of New Zealand is on Botanical Hill at the start of the Maitai Valley.', "
	  		+ "'Milton Street, Nelson 7010, New Zealand', "
	  		+ "'http://photos.travellerspoint.com/272063/large_IMG_1486.jpg');";
	  con.executeSet(sql);
	  
	  sql = "INSERT INTO weather (city_id, name, description, address, photo_link) VALUES(3, "
	  		+ "'World of WearableArt & Classic Cars Museum', "
	  		+ "'The World of WearableArt and Classic Cars Museum is an iconic Nelson visitor attraction that celebrates two passions "
	  		+ "united by design. Amazing Wearable works of Art from the annual WOW Awards Show are displayed alongside one of "
	  		+ "Australasias biggest private collections of rare, Classic Cars.The Museum also includes a Cafe renowned for it is tasty, "
	  		+ "healthy treats, a Retail Store full of NZ art and jewelry designs, and the ever-changing Reflections Art Gallery. Open every day "
	  		+ "10am - 5pm (except Christmas Day)', "
	  		+ "'Cadillac Way Off Quarantine Rd, Nelson 7040, New Zealand',"
	  		+ " 'http://cdn.secretearth.com/production/4859/banner_4859.jpg');";
	  con.executeSet(sql);
	  
	 
	  
	}
	

}














































































































































