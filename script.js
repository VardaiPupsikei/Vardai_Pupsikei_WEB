function gentxt() {

				var word=[	'Alė', 
							'Ananasė',
							'Atsuktuvė',
							'Avietė',
							'Avokadė',
							'Baltoji (rusė)',
							'Bandelė',
							'Bankuchenė',
							'Baranka',
							'Barbora',
							'Batonė', 
							'Befstrogenė',
							'Beigelė',
							'Bela',
							'Bitė',
							'Braškė',
							'Britnė',
							'Brokolė',
							'Bulka',
							'Bulvė',
							'Buratinė (limonadas)', 
							'Buratta',
							'Burito',
							'Chrosemundės Pilčer',
							'Churra',
							'Čičinskė',
							'Čierka',
							'Čipsė',
							'Čivilita',
							'Cola',
							'Crosasenė', 
							'Daisy',
							'Daržovė',
							'Dešrelė',
							'Dina',
							'Diušė',
							'Dora (The Explorer)',
							'Druska',
							'Duona',
							'Džinė', 
							'Džiugė',
							'Estrela',
							'Falafelija Tortaitė Van Salota Trečioji',
							'Fanta',
							'Feta',
							'Gitanė Nausėdė',
							'Grietinė',
							'Grikė',
							'Griliažė',
							'Irisė', 
							'Kanelė',
							'Kava',
							'Kebabė',
							'Kefyrė',
							'Keksė',
							'Kepta Duona',
							'Kivė',
							'Klementina',
							'Kometa',
							'Kopūstė', 
							'Krembriulė',
							'Krenesansė',
							'Kroisanė',
							'Kroksė',
							'Krosanė',
							'Krosanenė',
							'Krosemunda',
							'Kruopa',
							'Kvietka',
							'Kvuasonė', 
							'Lazanija',
							'Lėja',
							'Lili',
							'Lizė',
							'Makarūnsė',
							'Mangė',
							'Margarita',
							'Marsė',
							'Martinė (plakta, ne maišyta)',
							'Maskarponė', 
							'McFlurrė',
							'Mėnulė',
							'Merė (kruvinoji)',
							'Miglė (saldainis)',
							'Milka',
							'Mocarella',
							'Morka',
							'Nomeda',
							'Nuga',
							'Pica', 
							'Pienė',
							'Pinacoladė',
							'Pringlsas',
							'Pudra (cukraus)',
							'Pupa',
							'Ramūnė (Karbauskė)',
							'Razinka',
							'Ropė',
							'Salsa',
							'Sardelė', 
							'Šarka',
							'Siesta',
							'Silkė',
							'Siurprizė (saldainis)',
							'Skarelė (Biržų duonos)',
							'Skvernelė',
							'Šlapenka',
							'Snaigė',
							'Spagetė',
							'Spirga', 
							'Šponkė',
							'Špunka',
							'Šventinė',
							'Taco',
							'Televisa (presenta)',
							'Tinginė',
							'Tiramisė',
							'Tofu',
							'Uoga',
							'Vata (cukraus)',
							'Vėjė (nupūsta)',
							'Vilnelė (limonadas)',
							'Vodka',
							'Zefyrė',
							'Želė',
							'Žirnė',
							'Zrazė'
							];

				var para=document.querySelector('p');
				para.innerHTML=word[Math.floor(Math.random()*word.length)];
			}
