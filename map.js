
// map()  функция трансфрмации сколько пришло значений столько вышло 

const casual = require ("casual")  // библиотеке 

//console.log(casual.name)


// const addresses = new Array(100).fill(null).map(() => {   // создаем через библеатеку набор массивов сщ згачениями рандомный
//     return {
//         street : casual.street,
//         country: casual.country,
//         city:casual.city,
//         name: casual.name,
//         age: casual.integer((from = 18),(to = 80)),


//     }
// })

// console.log(addresses)

const users = [
    {
      street: 'Chyna Lock',
      country: 'Andorra',
      city: 'North Avaville',
      name: 'Miss Teagan Nienow',
      age: 24
    },
    {
      street: 'Hand Islands',
      country: 'Papua New Guinea',
      city: 'New Janet',
      name: 'Miss Ashly Blick',
      age: 53
    },
    {
      street: 'Alexis Vista',
      country: 'Tunisia',
      city: 'Maverickborough',
      name: 'Dr. Wilburn Ebert',
      age: 60
    },
    {
      street: 'Franco Wall',
      country: 'Samoa',
      city: 'South Sofiafort',
      name: 'Miss Precious Smitham',
      age: 32
    },
    {
      street: 'Bernhard Crossroad',
      country: 'Mauritania',
      city: 'Kulasberg',
      name: 'Dr. Ted Dibbert',
      age: 71
    },
    {
      street: 'Goyette Roads',
      country: 'Germany',
      city: 'Christybury',
      name: 'Ms. Jacques Toy',
      age: 45
    },
    {
      street: 'Fisher Way',
      country: 'Kuwait',
      city: 'Schneiderville',
      name: 'Dr. Keara Mann',
      age: 57
    },
    {
      street: 'Lynch Causeway',
      country: 'Bulgaria',
      city: 'Schummview',
      name: 'Mrs. Jamil Heller',
      age: 60
    },
    {
      street: 'Reba Hollow',
      country: 'Bosnia and Herzegovina',
      city: 'Lake Katrine',
      name: 'Miss Addison Reilly',
      age: 43
    },
    {
      street: 'McDermott Ford',
      country: 'Singapore',
      city: 'Robinburgh',
      name: 'Miss Trystan Considine',
      age: 78
    },
    {
      street: 'Tara Plaza',
      country: 'Saint Vincent and the Grenadines',
      city: 'Treverville',
      name: 'Dr. Garret Conroy',
      age: 23
    },
    {
      street: 'Chance Field',
      country: 'French Polynesia',
      city: 'Sageton',
      name: 'Miss Maritza Quigley',
      age: 66
    },
    {
      street: 'Clotilde Via',
      country: 'Chile',
      city: 'East Tatum',
      name: 'Dr. Frederique Dickinson',
      age: 36
    },
    {
      street: 'Boyle Knoll',
      country: 'Equatorial Guinea',
      city: 'Izabellafurt',
      name: 'Ms. Randall Jewess',
      age: 53
    },
    {
      street: 'Rene Spur',
      country: 'Montserrat',
      city: 'Lake Carolineton',
      name: 'Mrs. Ofelia Huel',
      age: 29
    },
    {
      street: 'Robin Keys',
      country: 'Macedonia',
      city: 'Evieshire',
      name: 'Mrs. Osbaldo Robel',
      age: 47
    },
    {
      street: 'Stark Curve',
      country: 'Mauritania',
      city: 'Lake Theresa',
      name: 'Miss Sister Williamson',
      age: 31
    },
    {
      street: 'Aubree Road',
      country: 'Poland',
      city: 'East Carey',
      name: 'Mrs. Tate Little',
      age: 37
    },
    {
      street: 'Ofelia Gateway',
      country: 'Guinea',
      city: 'West Hailee',
      name: 'Ms. Christiana Emmerich',
      age: 41
    },
    {
      street: 'Thaddeus Meadow',
      country: 'Western Sahara',
      city: 'Carleybury',
      name: 'Mr. Marianna Kris',
      age: 77
    },
    {
      street: 'Raheem Wells',
      country: 'Afghanistan',
      city: 'Jeffereyside',
      name: 'Miss Desmond Ferry',
      age: 52
    },
    {
      street: 'Flavie Lights',
      country: 'Malta',
      city: 'Greenbury',
      name: 'Mrs. Selmer Brown',
      age: 64
    },
    {
      street: 'Robb Extensions',
      country: 'Senegal',
      city: 'Chesterfurt',
      name: 'Mrs. River Olson',
      age: 65
    },
    {
      street: 'Dorian Glens',
      country: 'Malaysia',
      city: 'Priscillamouth',
      name: 'Mrs. Pauline Mertz',
      age: 48
    },
    {
      street: 'Lubowitz Mill',
      country: 'Japan',
      city: 'Port Groverburgh',
      name: 'Ms. Spencer Boyle',
      age: 29
    },
    {
      street: 'Haley Walk',
      country: 'Lithuania',
      city: 'West Paolo',
      name: 'Ms. Kyler White',
      age: 58
    },
    {
      street: 'Abernathy Ranch',
      country: 'Israel',
      city: 'West Tristian',
      name: 'Ms. Shanny Price',
      age: 74
    },
    {
      street: 'Syble Fort',
      country: 'Spain',
      city: 'Angelaville',
      name: 'Dr. Izaiah Crooks',
      age: 46
    },
    {
      street: 'Rolfson Wall',
      country: 'Mauritius',
      city: 'Loratown',
      name: 'Dr. Nicole Lubowitz',
      age: 79
    },
    {
      street: 'Waldo Fort',
      country: 'Romania',
      city: 'Destineyton',
      name: 'Miss Noble Streich',
      age: 23
    },
    {
      street: 'Amari Mountains',
      country: 'United States Virgin Islands',
      city: 'West Marcus',
      name: 'Ms. Armand Jenkins',
      age: 40
    },
    {
      street: 'Ransom Rapid',
      country: 'Micronesia',
      city: 'Heidenreichberg',
      name: 'Mrs. Maiya Maggio',
      age: 23
    },
    {
      street: 'Gibson Underpass',
      country: 'Palestinian Territory',
      city: 'Port Lulaview',
      name: 'Ms. Carey Kirlin',
      age: 43
    },
    {
      street: 'Vincent Cove',
      country: 'Serbia',
      city: 'West Darrion',
      name: 'Ms. Coleman Kutch',
      age: 23
    },
    {
      street: 'Stokes Well',
      country: 'Taiwan',
      city: 'South Hellen',
      name: 'Mrs. Fidel Spinka',
      age: 75
    },
    {
      street: 'Barton Crescent',
      country: 'Somalia',
      city: 'Eugenefurt',
      name: 'Mr. Johnson Runolfsdottir',
      age: 39
    },
    {
      street: 'Graham Harbor',
      country: 'Russian Federation',
      city: 'North Kraig',
      name: 'Mrs. Mario Donnelly',
      age: 23
    },
    {
      street: 'Kaleigh Walks',
      country: 'Barbados',
      city: 'Schultzport',
      name: 'Mr. Kailee Okuneva',
      age: 28
    },
    {
      street: 'Hank Street',
      country: 'Guinea-Bissau',
      city: 'Volkmanfurt',
      name: 'Miss Rowena Beahan',
      age: 66
    },
    {
      street: 'Burdette Groves',
      country: 'Syrian Arab Republic',
      city: 'Webershire',
      name: 'Mr. Christy Hauck',
      age: 38
    },
    {
      street: 'Adams Light',
      country: 'Azerbaijan',
      city: 'Sauerfurt',
      name: 'Ms. Yoshiko Stiedemann',
      age: 29
    },
    {
      street: 'Vandervort Crest',
      country: 'Honduras',
      city: 'East Zanderstad',
      name: 'Mrs. Christian Kutch',
      age: 26
    },
    {
      street: 'Powlowski Divide',
      country: 'Norway',
      city: 'Veumfort',
      name: 'Mrs. Nestor Parker',
      age: 52
    },
    {
      street: 'Rubie Mountains',
      country: 'Belgium',
      city: 'Champlinport',
      name: 'Ms. Marina Price',
      age: 32
    },
    {
      street: 'Ethan Drive',
      country: 'Poland',
      city: 'Kellyside',
      name: 'Ms. Monte Raynor',
      age: 41
    },
    {
      street: 'Santos Village',
      country: 'Algeria',
      city: 'Franeckimouth',
      name: 'Miss Althea Schroeder',
      age: 43
    },
    {
      street: 'Stanford Walk',
      country: 'Mali',
      city: 'Myronfort',
      name: 'Mrs. Norma Wiza',
      age: 60
    },
    {
      street: 'Lubowitz Parks',
      country: 'Albania',
      city: 'North Camronmouth',
      name: 'Mr. Faye Shanahan',
      age: 65
    },
    {
      street: 'Ward Summit',
      country: 'Tuvalu',
      city: 'Brianneborough',
      name: 'Miss Domenick Moore',
      age: 65
    },
    {
      street: 'Lockman Burgs',
      country: 'Svalbard & Jan Mayen Islands',
      city: 'Johnsonville',
      name: 'Miss Janie Bode',
      age: 75
    },
    {
      street: 'Hills Union',
      country: 'Wallis and Futuna',
      city: 'Volkmanburgh',
      name: 'Mrs. Madeline Mayert',
      age: 61
    },
    {
      street: 'Charity Ville',
      country: 'Sweden',
      city: 'Myronfurt',
      name: 'Mrs. Ezequiel Kunde',
      age: 44
    },
    {
      street: 'Angus Gateway',
      country: 'Cayman Islands',
      city: 'Stevebury',
      name: 'Mr. Cornelius Little',
      age: 67
    },
    {
      street: 'Mante Hill',
      country: 'Mayotte',
      city: 'Christianhaven',
      name: 'Ms. Twila Spencer',
      age: 69
    },
    {
      street: 'Terry Lake',
      country: 'Czech Republic',
      city: 'New Shanon',
      name: 'Dr. Victor Nitzsche',
      age: 19
    },
    {
      street: 'Kristoffer Light',
      country: 'Martinique',
      city: 'South Ashlee',
      name: 'Mrs. Elmira Daniel',
      age: 55
    },
    {
      street: 'Erin Course',
      country: 'Mauritania',
      city: 'Lake Coy',
      name: 'Mrs. Brando Cartwright',
      age: 25
    },
    {
      street: 'Swift Knoll',
      country: 'Burundi',
      city: 'Terenceview',
      name: 'Ms. Kaya Hodkiewicz',
      age: 59
    },
    {
      street: 'Pfannerstill Loaf',
      country: 'Kyrgyz Republic',
      city: 'Schroederland',
      name: 'Ms. Lafayette Gorczany',
      age: 20
    },
    {
      street: 'Boyle Brooks',
      country: 'Christmas Island',
      city: 'Dorthymouth',
      name: 'Ms. Hardy Daniel',
      age: 48
    },
    {
      street: 'Jayden Springs',
      country: 'Guernsey',
      city: 'Alexanderview',
      name: 'Mrs. Amaya Smith',
      age: 62
    },
    {
      street: 'Harvey Via',
      country: 'Macao',
      city: 'New Imachester',
      name: 'Mrs. Dariana Blick',
      age: 33
    },
    {
      street: 'Colby Trail',
      country: 'New Caledonia',
      city: 'Austinborough',
      name: 'Ms. Yasmine Wunsch',
      age: 80
    },
    {
      street: 'Bechtelar Radial',
      country: 'Tuvalu',
      city: 'Jovanimouth',
      name: 'Ms. Ora Prohaska',
      age: 47
    },
    {
      street: 'Abernathy Trafficway',
      country: 'Lebanon',
      city: 'Mohamedfort',
      name: 'Mrs. Creola Roob',
      age: 73
    },
    {
      street: 'Antonette Trail',
      country: 'Vanuatu',
      city: 'West Nelson',
      name: 'Miss Danielle Raynor',
      age: 80
    },
    {
      street: 'Bergstrom Courts',
      country: 'Zimbabwe',
      city: 'Yundtport',
      name: 'Mrs. Name Bashirian',
      age: 66
    },
    {
      street: 'Dale Lane',
      country: 'Liechtenstein',
      city: 'Pattiemouth',
      name: 'Miss Aliya Schowalter',
      age: 75
    },
    {
      street: 'Ullrich Brook',
      country: 'Comoros',
      city: 'East Garrisonmouth',
      name: 'Mrs. Lucile Lubowitz',
      age: 51
    },
    {
      street: 'Marjory Mills',
      country: 'Philippines',
      city: 'Murazikport',
      name: 'Mr. Casimir Schmitt',
      age: 26
    },
    {
      street: 'Leonel Drive',
      country: 'Peru',
      city: 'Port Deshawnburgh',
      name: 'Mr. Humberto Lowe',
      age: 74
    },
    {
      street: 'Krajcik Roads',
      country: 'Mauritania',
      city: 'Fannymouth',
      name: 'Dr. Dasia Sauer',
      age: 39
    },
    {
      street: 'Velma Flat',
      country: 'New Caledonia',
      city: 'Suzannemouth',
      name: 'Dr. Erich Windler',
      age: 71
    },
    {
      street: 'Rath Throughway',
      country: 'Tonga',
      city: 'West Bud',
      name: 'Mrs. Rosalee Veum',
      age: 62
    },
    {
      street: 'Pablo Light',
      country: 'Uruguay',
      city: 'Lake Vernicechester',
      name: 'Ms. Dorris Little',
      age: 22
    },
    {
      street: 'Lesly Route',
      country: 'Bermuda',
      city: 'New Missouri',
      name: 'Mrs. Buck Dibbert',
      age: 76
    },
    {
      street: 'Maude Glen',
      country: 'Greenland',
      city: 'Lake Hudson',
      name: 'Ms. Asa Sporer',
      age: 78
    },
    {
      street: 'Hyatt Isle',
      country: 'Cyprus',
      city: 'West Heaven',
      name: 'Ms. Jazmyne Senger',
      age: 20
    },
    {
      street: 'Mariana Ville',
      country: 'Russian Federation',
      city: 'New Royal',
      name: 'Ms. Terrell Kovacek',
      age: 53
    },
    {
      street: 'Schumm Viaduct',
      country: 'Saint Lucia',
      city: 'North Colleenbury',
      name: 'Mrs. Ryley McLaughlin',
      age: 36
    },
    {
      street: 'Murray Curve',
      country: 'Cuba',
      city: 'Demarcusberg',
      name: 'Miss Ralph Nikolaus',
      age: 66
    },
    {
      street: 'Fabian Green',
      country: 'Italy',
      city: 'Cortneyburgh',
      name: 'Ms. Rey Swaniawski',
      age: 71
    },
    {
      street: 'Quincy Land',
      country: 'Tanzania',
      city: 'East Ubaldomouth',
      name: 'Mrs. Everette Schuppe',
      age: 52
    },
    {
      street: 'Thiel Locks',
      country: 'Korea',
      city: 'New Allan',
      name: 'Miss Derrick Hirthe',
      age: 63
    },
    {
      street: 'Smitham Crest',
      country: 'Antigua and Barbuda',
      city: 'West Corene',
      name: 'Mr. Cydney Stiedemann',
      age: 71
    },
    {
      street: 'Coleman Meadows',
      country: 'Benin',
      city: 'Ricefurt',
      name: 'Miss Nyasia Gislason',
      age: 66
    },
    {
      street: 'Luettgen Village',
      country: 'China',
      city: 'Lake Jesse',
      name: 'Mr. Reid Hahn',
      age: 42
    },
    {
      street: 'Colten Manor',
      country: 'Cuba',
      city: 'South Caroleberg',
      name: 'Mrs. Katelin Fahey',
      age: 78
    },
    {
      street: 'Lexi Stream',
      country: 'Thailand',
      city: 'Carolyneport',
      name: 'Miss Camron Grant',
      age: 34
    },
    {
      street: 'Koss Wall',
      country: 'Ethiopia',
      city: 'South Arnomouth',
      name: 'Mr. Raymundo Daugherty',
      age: 22
    },
    {
      street: 'Bartoletti Cliff',
      country: 'Kuwait',
      city: 'New Marcelina',
      name: 'Mrs. Jaylen Smith',
      age: 50
    },
    {
      street: 'Trantow Shoals',
      country: 'Paraguay',
      city: 'Shannamouth',
      name: 'Miss Richie Gaylord',
      age: 77
    },
    {
      street: 'Blick Glen',
      country: 'Afghanistan',
      city: 'North Kim',
      name: 'Miss Sedrick Dach',
      age: 59
    },
    {
      street: 'Goodwin Hollow',
      country: 'Egypt',
      city: 'Sauerfort',
      name: 'Mrs. Jerel Windler',
      age: 58
    },
    {
      street: 'Angus Cliff',
      country: 'Cook Islands',
      city: 'North Favian',
      name: 'Dr. Treva Yost',
      age: 31
    },
    {
      street: 'Dayana Summit',
      country: 'Turkmenistan',
      city: 'New Reymundo',
      name: 'Miss Jeromy Gislason',
      age: 42
    },
    {
      street: 'Dean Stravenue',
      country: 'Lebanon',
      city: 'Yostton',
      name: 'Dr. Nona Borer',
      age: 72
    },
    {
      street: 'Scottie Union',
      country: 'Saint Helena',
      city: 'Willmsville',
      name: 'Miss Valentin Bechtelar',
      age: 48
    },
    {
      street: 'Mertz Plains',
      country: 'Chile',
      city: 'South Mertieburgh',
      name: 'Miss Davion Zemlak',
      age: 77
    },
    {
      street: 'Reese View',
      country: 'Bangladesh',
      city: 'Dayanashire',
      name: 'Dr. Kiley Hane',
      age: 77
    }
  ]
// const countres = users.map((value, ibdex) =>{    // выбираем только значение стран через map(), value - это значение одного объекта. из 100
//     return value.country
// })
//  // console.log(countres)

 // const ages = users.map((value, ibdex) =>{    // выбираем только возвраст через map(), value - это значение одного объекта. из 100
//   return value.age
// })
//onsole.log(ages)

// const names = users.map((value, ibdex) =>{    // 
//     return value.name.toUpperCase()           // все имена с большой буквы 
// })
 //console.log(names)

 
 // новый масив с юзерами  
//  console.log (
//     new Array(10).fill(0).map((item,index) => {  
//         return  `user ${index +1}`
//     })
//  )

// выводим все возрасты от 30 до 50 пример  Filter ()
// const filterAges = ages.filter((it) =>{    
//     return it > 30 &&  it < 50

// }) 

// const filterUsers = users.filter((it) =>{     // фильтруем юзеров
//     return it.age > 30 &&  it.age < 50

// }) 
// .map((user) =>{                            // получаеи имена юзеров возраст которых it.age > 30 &&  it.age < 50
//     return user.name
// })

//console.log(filterUsers)

const nameUsers = users.find((it, index) =>{     // фильтруем юзеров gпервой букве имени  users.find,filter,map
    return it.name.indexOf ('D') === 0;
}).name

console.log(nameUsers)