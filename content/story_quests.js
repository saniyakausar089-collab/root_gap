/**
 * ROOT_GAP Story Quest Library
 * 50 Complete, Multi-Stage Narrative Quests across Classes 6, 7, 8, 9, and 10 (10 per class)
 * 100% Offline PWA Compatible
 */

var STORY_QUESTS = {
  "6": [
    {
      "id": "c6_q1",
      "title": "The Mystery of the Mughal Baker",
      "theme": "Ancient Culinary Heritage",
      "intro": "You are the chief apprentice in Emperor Akbar's imperial royal kitchen in Agra. The Grand Baker is preparing sweet Sheermal breads for the evening banquet, but the royal recipe scroll has fractional ink smudges!",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The head baker kneads 4 kg of wheat flour. The recipe requires 3/8 of the flour for savory naan and the remaining flour for sweet Sheermal.",
          "challenge": "How many kilograms of flour must be set aside for the Sheermal breads?",
          "options": [
            "A. 2 1/2 kg (which is 5/8 of 4 kg)",
            "B. 1 1/2 kg (which is 3/8 of 4 kg)",
            "C. 3 kg"
          ],
          "correctIndex": 0,
          "hint": "The remaining fraction is 1 - 3/8 = 5/8. Multiply 5/8 by 4 kg.",
          "feedbackOk": "Correct! 5/8 of 4 kg is 2 1/2 kg. The dough is weighed out to perfection!",
          "feedbackBad": "Not quite. 3/8 was for naan, so 5/8 remains: 4 × 5/8 = 20/8 = 2 1/2 kg."
        },
        {
          "stageNum": 2,
          "narrative": "Each batch of saffron syrup requires 2/3 cup of honey. You have 4 full jars of honey.",
          "challenge": "How many full batches of saffron syrup can you brew before the honey runs out?",
          "options": [
            "A. 6 batches",
            "B. 5 batches",
            "C. 8 batches"
          ],
          "correctIndex": 0,
          "hint": "Divide 4 by 2/3 by multiplying 4 by 3/2.",
          "feedbackOk": "Exact! 4 ÷ (2/3) = 4 × 3/2 = 6 batches. Golden syrup bubbles in the copper cauldron!",
          "feedbackBad": "Review: 4 ÷ 2/3 = 4 × (3/2) = 12/2 = 6 batches."
        },
        {
          "stageNum": 3,
          "narrative": "The Emperor's banquet table has 3 platters. Platter A has 2/3 of a cake left, Platter B has 3/4, and Platter C has 5/6.",
          "challenge": "The Grand Vizier demands to taste the platter with the LARGEST remaining cake portion. Which platter do you present?",
          "options": [
            "A. Platter C (5/6)",
            "B. Platter B (3/4)",
            "C. Platter A (2/3)"
          ],
          "correctIndex": 0,
          "hint": "Find common denominator 12: 2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12.",
          "feedbackOk": "Mastery! 10/12 is the largest portion. The Emperor praises your mathematical precision!",
          "feedbackBad": "Check the twelfths: 2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12. Platter C has the most."
        }
      ],
      "reward": "🏆 Imperial Royal Baker Title + 30 XP",
      "learningOutcome": "Adding, subtracting, multiplying and comparing fractions with unequal denominators."
    },
    {
      "id": "c6_q2",
      "title": "The Island of Equal Shares",
      "theme": "Maritime Island Exploration",
      "intro": "Your exploration schooner drops anchor at the uncharted Coral Atoll. The friendly islanders share tropical fruit according to ancient fractional balancing customs.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The village elder offers a giant jackfruit. She divides it into 12 equal slices and offers your crew 8 slices.",
          "challenge": "Simplify 8/12 into its lowest simplest form.",
          "options": [
            "A. 2/3",
            "B. 4/6",
            "C. 3/4"
          ],
          "correctIndex": 0,
          "hint": "Divide both numerator and denominator by their greatest common factor (4).",
          "feedbackOk": "Splendid! 8 ÷ 4 = 2, 12 ÷ 4 = 3, so 2/3 in simplest form.",
          "feedbackBad": "Remember: 4/6 is equivalent but can still be divided by 2 to reach 2/3."
        },
        {
          "stageNum": 2,
          "narrative": "To trade with the pearl divers, you must offer an equal share of coconut water. You pour 3/5 litre into one gourd and 7/10 litre into another.",
          "challenge": "How much total coconut water did you pour?",
          "options": [
            "A. 1 3/10 litres (13/10 L)",
            "B. 1 litre",
            "C. 1 1/5 litres"
          ],
          "correctIndex": 0,
          "hint": "3/5 = 6/10. Add 6/10 + 7/10 = 13/10 = 1 3/10 litres.",
          "feedbackOk": "Correct! The pearl divers accept the 1 3/10 litre offering with cheers!",
          "feedbackBad": "3/5 is 6/10. 6/10 + 7/10 = 13/10 = 1 3/10."
        },
        {
          "stageNum": 3,
          "narrative": "The chief presents a bag of 60 luminous sea shells and asks you to distribute 1/4 to the dancers, 1/3 to the musicians, and keep the rest.",
          "challenge": "How many shells do you keep for your ship's log?",
          "options": [
            "A. 25 shells",
            "B. 20 shells",
            "C. 35 shells"
          ],
          "correctIndex": 0,
          "hint": "Dancers get 60/4 = 15. Musicians get 60/3 = 20. Total given = 35. 60 - 35 = 25.",
          "feedbackOk": "Legendary! You keep 25 shells as a token of friendship!",
          "feedbackBad": "Dancers = 15, Musicians = 20. Total = 35. Remaining = 60 - 35 = 25."
        }
      ],
      "reward": "🐚 Coral Atoll Navigator + 30 XP",
      "learningOutcome": "Simplifying fractions, adding like and unlike fractions, and finding fractional parts of whole sets."
    },
    {
      "id": "c6_q3",
      "title": "The Temple Stone Carver",
      "theme": "Hampi Archaeological Wonder",
      "intro": "You are an apprentice stone carver at the Vijayanagara stone temple in Hampi. Master sculptor Keshava entrusts you with measuring granite slabs for the temple chariot.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A granite pillar is 3 1/2 metres tall. The master asks you to carve away 3/4 of a metre from the top to fit the lotus capital.",
          "challenge": "What will be the final height of the pillar?",
          "options": [
            "A. 2 3/4 metres",
            "B. 2 1/4 metres",
            "C. 3 metres"
          ],
          "correctIndex": 0,
          "hint": "3 1/2 = 3 2/4. Subtract 3/4: 3 2/4 - 3/4 = 2 6/4 - 3/4 = 2 3/4.",
          "feedbackOk": "Accurate! The lotus capital settles smoothly onto the 2 3/4 m pillar!",
          "feedbackBad": "3 1/2 = 3 2/4. 3 2/4 - 3/4 = 2 3/4 metres."
        },
        {
          "stageNum": 2,
          "narrative": "You need to cut decorative borders each 2/5 metre long from a 6-metre stone frieze.",
          "challenge": "How many full decorative borders can you carve from the stone frieze?",
          "options": [
            "A. 15 borders",
            "B. 12 borders",
            "C. 10 borders"
          ],
          "correctIndex": 0,
          "hint": "Divide 6 by 2/5: 6 × 5/2 = 30/2 = 15.",
          "feedbackOk": "Magnificent! Exactly 15 identical floral borders align across the frieze!",
          "feedbackBad": "6 ÷ (2/5) = 6 × (5/2) = 15."
        },
        {
          "stageNum": 3,
          "narrative": "To mix traditional lime mortar, you combine 5/6 bag of river sand and 2/3 bag of limestone powder.",
          "challenge": "What is the total bags of mortar mixture prepared?",
          "options": [
            "A. 1 1/2 bags (9/6)",
            "B. 1 1/3 bags",
            "C. 1 1/6 bags"
          ],
          "correctIndex": 0,
          "hint": "2/3 = 4/6. 5/6 + 4/6 = 9/6 = 1 3/6 = 1 1/2.",
          "feedbackOk": "True craftsmanship! The mortar binds the stone chariot for centuries!",
          "feedbackBad": "5/6 + 4/6 = 9/6 = 3/2 = 1 1/2 bags."
        }
      ],
      "reward": "🗿 Master Sculptor Badge + 30 XP",
      "learningOutcome": "Mixed fraction subtraction, fraction division, and equivalent fraction addition."
    },
    {
      "id": "c6_q4",
      "title": "The Desert Caravan Merchant",
      "theme": "Thar Desert Trade Route",
      "intro": "Leading a camel caravan across the Thar desert from Jaisalmer to Bikaner, you must budget fresh water skin bladders across the 5-day journey.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Each camel drinks 4 1/2 pails of water at an oasis. You have 6 camels in the pack train.",
          "challenge": "How many total pails of water must the oasis well provide?",
          "options": [
            "A. 27 pails",
            "B. 24 pails",
            "C. 30 pails"
          ],
          "correctIndex": 0,
          "hint": "Multiply 6 × 4 1/2 = 6 × 9/2 = 27.",
          "feedbackOk": "Hydrated! All 6 camels drink their full 27 pails!",
          "feedbackBad": "6 × 4 = 24, plus 6 × 1/2 = 3. 24 + 3 = 27."
        },
        {
          "stageNum": 2,
          "narrative": "A water merchant offers two barrels: Barrel Alpha is 5/8 full, Barrel Beta is 3/5 full.",
          "challenge": "Which barrel contains more water to refill your canteens?",
          "options": [
            "A. Barrel Alpha (5/8 = 25/40)",
            "B. Barrel Beta (3/5 = 24/40)",
            "C. Both are equal"
          ],
          "correctIndex": 0,
          "hint": "Compare 5/8 and 3/5 using common denominator 40: 5×5/40 = 25/40 vs 3×8/40 = 24/40.",
          "feedbackOk": "Sharp eyes! 25/40 is greater than 24/40. You choose Barrel Alpha!",
          "feedbackBad": "5/8 = 25/40, while 3/5 = 24/40. Barrel Alpha has more water."
        },
        {
          "stageNum": 3,
          "narrative": "You have 3 3/4 bags of rare dates. You distribute them equally among your 5 caravan scouts.",
          "challenge": "What fraction of a bag does each scout receive?",
          "options": [
            "A. 3/4 of a bag",
            "B. 1/2 of a bag",
            "C. 2/3 of a bag"
          ],
          "correctIndex": 0,
          "hint": "Convert 3 3/4 to 15/4, then divide by 5: (15/4) ÷ 5 = 15/20 = 3/4.",
          "feedbackOk": "Fair leader! Each scout receives exactly 3/4 bag of nutritious dates!",
          "feedbackBad": "3 3/4 = 15/4. 15/4 ÷ 5 = 15/20 = 3/4 of a bag."
        }
      ],
      "reward": "🐪 Caravan Master + 30 XP",
      "learningOutcome": "Fraction multiplication, cross-multiplication comparison, and dividing fractions by whole numbers."
    },
    {
      "id": "c6_q5",
      "title": "The Festival Kite Maker",
      "theme": "Makar Sankranti Kite Festival",
      "intro": "Ahmedabad's sky is ablaze with kites during Uttarayan. Master kite-maker Latif needs your help cutting coloured tissue paper rolls to assemble champion fighter kites.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A kite sail requires 2/3 of a sheet of golden kite paper. You have 10 complete sheets.",
          "challenge": "How many full kites can you cut out?",
          "options": [
            "A. 15 kites",
            "B. 12 kites",
            "C. 14 kites"
          ],
          "correctIndex": 0,
          "hint": "10 ÷ (2/3) = 10 × (3/2) = 30/2 = 15.",
          "feedbackOk": "15 golden diamond kites ready to soar into the western breeze!",
          "feedbackBad": "10 ÷ (2/3) = 10 × 3/2 = 15 kites."
        },
        {
          "stageNum": 2,
          "narrative": "You tie two spools of cotton string together: Spool 1 has 12 1/4 metres, Spool 2 has 15 1/2 metres.",
          "challenge": "What is the total combined flight string length?",
          "options": [
            "A. 27 3/4 metres",
            "B. 27 1/2 metres",
            "C. 28 metres"
          ],
          "correctIndex": 0,
          "hint": "15 1/2 = 15 2/4. Add (12 + 15) + (1/4 + 2/4) = 27 3/4.",
          "feedbackOk": "Seamless knot! The line stretches 27 3/4 metres high!",
          "feedbackBad": "12 1/4 + 15 2/4 = 27 3/4 metres."
        },
        {
          "stageNum": 3,
          "narrative": "A customer buys 3/5 of your 50 manufactured kites. Then another child buys 1/2 of the remaining kites.",
          "challenge": "How many kites remain in your workshop?",
          "options": [
            "A. 10 kites",
            "B. 15 kites",
            "C. 5 kites"
          ],
          "correctIndex": 0,
          "hint": "First sale: 3/5 of 50 = 30 sold, 20 left. Second sale: 1/2 of 20 = 10 sold. 20 - 10 = 10 left.",
          "feedbackOk": "Festival Champion! 10 kites remain for tomorrow's competition!",
          "feedbackBad": "First sale leaves 20 kites. Half of 20 leaves 10 kites."
        }
      ],
      "reward": "🪁 Sky Pilot Trophy + 30 XP",
      "learningOutcome": "Whole number divided by fraction, mixed number addition, and multi-step fraction parts of sets."
    },
    {
      "id": "c6_q6",
      "title": "The Nilgiri Tea Planter",
      "theme": "Southern Hill Station Agriculture",
      "intro": "In the mist-covered Nilgiri hills of Ooty, you manage the harvest weighing shed where tea pluckers deliver morning wicker baskets of green tea leaves.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Three pluckers arrive: Lakshmi brings 8 1/2 kg, Meera brings 9 3/4 kg, and Padma brings 7 1/4 kg.",
          "challenge": "What is the total harvest weight recorded in the morning register?",
          "options": [
            "A. 25 1/2 kg",
            "B. 24 3/4 kg",
            "C. 26 kg"
          ],
          "correctIndex": 0,
          "hint": "Notice that 3/4 + 1/4 = 1 whole. 8 1/2 + (9 + 7 + 1) = 8 1/2 + 17 = 25 1/2 kg.",
          "feedbackOk": "Efficient arithmetic! The total harvest is 25 1/2 kg!",
          "feedbackBad": "9 3/4 + 7 1/4 = 17 kg. 17 + 8 1/2 = 25 1/2 kg."
        },
        {
          "stageNum": 2,
          "narrative": "During the leaf withering process, fresh tea leaves lose 2/5 of their weight in moisture.",
          "challenge": "If you wither 35 kg of freshly plucked leaves, what is the weight of dried leaves remaining?",
          "options": [
            "A. 21 kg",
            "B. 14 kg",
            "C. 25 kg"
          ],
          "correctIndex": 0,
          "hint": "Moisture lost = 2/5 × 35 = 14 kg. Remaining = 35 - 14 = 21 kg (which is 3/5 of 35).",
          "feedbackOk": "Aromatic! Exactly 21 kg of premium tea leaf ready for the rolling machine!",
          "feedbackBad": "Leaves lose 2/5 (14 kg), so 3/5 remains (21 kg)."
        },
        {
          "stageNum": 3,
          "narrative": "You package the processed tea into 1/4 kg decorative tins for the heritage railway tourist kiosk.",
          "challenge": "How many tins can you fill from 18 kg of tea?",
          "options": [
            "A. 72 tins",
            "B. 36 tins",
            "C. 54 tins"
          ],
          "correctIndex": 0,
          "hint": "18 ÷ (1/4) = 18 × 4 = 72.",
          "feedbackOk": "Neatly stacked! 72 tins ready for the heritage toy train travelers!",
          "feedbackBad": "18 ÷ 1/4 = 18 × 4 = 72 tins."
        }
      ],
      "reward": "☕ Nilgiri Planter Medal + 30 XP",
      "learningOutcome": "Mental fraction addition with complements, fractional percentage reduction, and unit yield division."
    },
    {
      "id": "c6_q7",
      "title": "The Raja's Jewel Division",
      "theme": "Royal Treasury Puzzle",
      "intro": "King Vikramaditya poses an ancient riddle to test your intellect. The royal jewel vault contains rubies, emeralds, and sapphires.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The royal chest has 48 gems: 1/3 are red rubies, 1/4 are green emeralds, and the rest are blue sapphires.",
          "challenge": "How many blue sapphires sparkle inside the chest?",
          "options": [
            "A. 20 sapphires",
            "B. 16 sapphires",
            "C. 24 sapphires"
          ],
          "correctIndex": 0,
          "hint": "Rubies = 48/3 = 16. Emeralds = 48/4 = 12. Total = 28. Sapphires = 48 - 28 = 20.",
          "feedbackOk": "Wisdom shines! 20 blue sapphires glint in the palace torches!",
          "feedbackBad": "Rubies = 16, Emeralds = 12. 16 + 12 = 28. 48 - 28 = 20 sapphires."
        },
        {
          "stageNum": 2,
          "narrative": "The King presents a necklace of 15 pearls. He gives 2/5 to the Prime Minister.",
          "challenge": "How many pearls did the Prime Minister receive?",
          "options": [
            "A. 6 pearls",
            "B. 5 pearls",
            "C. 8 pearls"
          ],
          "correctIndex": 0,
          "hint": "Calculate 2/5 × 15 = 30/5 = 6.",
          "feedbackOk": "Exact calculation! 6 lustrous pearls handed over!",
          "feedbackBad": "1/5 of 15 is 3. So 2/5 of 15 is 2 × 3 = 6 pearls."
        },
        {
          "stageNum": 3,
          "narrative": "Two goldsmiths claim to have used more gold in royal crowns: Goldsmith A used 7/8 sovereign, Goldsmith B used 5/6 sovereign.",
          "challenge": "Which goldsmith actually used more gold?",
          "options": [
            "A. Goldsmith A (7/8 = 21/24)",
            "B. Goldsmith B (5/6 = 20/24)",
            "C. Both used equal gold"
          ],
          "correctIndex": 0,
          "hint": "Common denominator 24: 7/8 = 21/24, 5/6 = 20/24. 21/24 > 20/24.",
          "feedbackOk": "True justice! Goldsmith A used 21/24, which is 1/24 sovereign more gold!",
          "feedbackBad": "7/8 = 21/24 while 5/6 = 20/24. 21/24 is greater than 20/24."
        }
      ],
      "reward": "👑 Royal Treasury Seal + 30 XP",
      "learningOutcome": "Fraction of numbers, multi-fraction partition, and comparing fractions using common denominators."
    },
    {
      "id": "c6_q8",
      "title": "The Nalanda Library Manuscript",
      "theme": "Ancient University of Nalanda",
      "intro": "You walk the grand stone cloisters of Nalanda Mahavihara in the 7th century CE. Scholar Xuanzang asks for your assistance in compiling handwritten palm-leaf manuscripts.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A treatise on astronomy has 120 palm leaves. A scribe copies 2/5 of the leaves in the morning and 1/3 in the afternoon.",
          "challenge": "How many total leaves were transcribed by sunset?",
          "options": [
            "A. 88 leaves",
            "B. 80 leaves",
            "C. 75 leaves"
          ],
          "correctIndex": 0,
          "hint": "Morning = 2/5 × 120 = 48. Afternoon = 1/3 × 120 = 40. Total = 48 + 40 = 88.",
          "feedbackOk": "Scholarly precision! 88 leaves transcribed in ink!",
          "feedbackBad": "48 + 40 = 88 leaves copied."
        },
        {
          "stageNum": 2,
          "narrative": "The master librarian asks what fraction of the whole manuscript remains uncopied.",
          "challenge": "What fraction of the 120-leaf manuscript is still to be copied?",
          "options": [
            "A. 4/15",
            "B. 7/15",
            "C. 1/5"
          ],
          "correctIndex": 0,
          "hint": "Total copied fraction = 2/5 + 1/3 = 6/15 + 5/15 = 11/15. Remaining = 1 - 11/15 = 4/15.",
          "feedbackOk": "Brilliant! 4/15 of the treatise remains (which is 32 leaves)!",
          "feedbackBad": "1 - 11/15 = 4/15."
        },
        {
          "stageNum": 3,
          "narrative": "To bind each volume, you cut silk cords each 3/4 metre long from a 9-metre spool.",
          "challenge": "How many complete volumes can be bound?",
          "options": [
            "A. 12 volumes",
            "B. 10 volumes",
            "C. 15 volumes"
          ],
          "correctIndex": 0,
          "hint": "9 ÷ (3/4) = 9 × 4/3 = 36/3 = 12.",
          "feedbackOk": "Bound and preserved for posterity! 12 precious volumes stored in the library!",
          "feedbackBad": "9 ÷ 3/4 = 9 × 4/3 = 12 volumes."
        }
      ],
      "reward": "📜 Nalanda Scholar Quill + 30 XP",
      "learningOutcome": "Fraction of whole sets, finding remaining fractions, and dividing integers by fractions."
    },
    {
      "id": "c6_q9",
      "title": "The River Ferry Passage",
      "theme": "Brahmaputra River Crossing",
      "intro": "At Majuli Island on the mighty Brahmaputra river, you operate the country ferry boat carrying agricultural produce, villagers, and livestock across the river.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The ferry has a maximum safe payload capacity of 2 tonnes (2000 kg). Villagers load 3/4 tonne of rice sacks and 2/5 tonne of jute bales.",
          "challenge": "What is the combined weight in tonnes of the cargo loaded so far?",
          "options": [
            "A. 1 3/20 tonnes (23/20)",
            "B. 1 1/4 tonnes",
            "C. 1 1/2 tonnes"
          ],
          "correctIndex": 0,
          "hint": "Find common denominator 20: 3/4 = 15/20, 2/5 = 8/20. 15/20 + 8/20 = 23/20 = 1 3/20.",
          "feedbackOk": "Stable in the current! 1 3/20 tonnes loaded safely!",
          "feedbackBad": "15/20 + 8/20 = 23/20 = 1 3/20 tonnes."
        },
        {
          "stageNum": 2,
          "narrative": "How much more weight (in tonnes) can the ferry accept before reaching its 2-tonne safety limit?",
          "challenge": "Calculate 2 - 1 3/20 tonnes.",
          "options": [
            "A. 17/20 tonne",
            "B. 7/20 tonne",
            "C. 3/20 tonne"
          ],
          "correctIndex": 0,
          "hint": "2 = 40/20. 40/20 - 23/20 = 17/20 tonne (or 850 kg).",
          "feedbackOk": "Exact calculation! 17/20 tonne of capacity remains!",
          "feedbackBad": "40/20 - 23/20 = 17/20 tonne."
        },
        {
          "stageNum": 3,
          "narrative": "The ferry crossing takes 1/3 of an hour per trip. You have 3 hours of daylight before sunset.",
          "challenge": "How many round trips across the river can the ferry captain complete?",
          "options": [
            "A. 9 one-way crossings",
            "B. 6 crossings",
            "C. 12 crossings"
          ],
          "correctIndex": 0,
          "hint": "3 ÷ (1/3) = 3 × 3 = 9.",
          "feedbackOk": "All villagers safely transported home before dusk!",
          "feedbackBad": "3 ÷ 1/3 = 9 crossings."
        }
      ],
      "reward": "⚓ Brahmaputra Captain Helm + 30 XP",
      "learningOutcome": "Fractions with unlike denominators, subtracting mixed fractions from whole numbers, and unit rate division."
    },
    {
      "id": "c6_q10",
      "title": "The Village Well Rations",
      "theme": "Drought Resilience & Community Sharing",
      "intro": "During the dry pre-monsoon summer in a rural Deccan plateau village, the community council implements a fair water rationing protocol at the village stepwell.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The stepwell draws 120 buckets of water each morning. 3/8 is reserved for drinking, 1/4 for cooking, and the rest for farm cattle.",
          "challenge": "How many buckets are reserved for the farm cattle?",
          "options": [
            "A. 45 buckets",
            "B. 50 buckets",
            "C. 40 buckets"
          ],
          "correctIndex": 0,
          "hint": "Drinking = 3/8 × 120 = 45. Cooking = 1/4 × 120 = 30. Total human use = 75. Cattle = 120 - 75 = 45.",
          "feedbackOk": "Fair and balanced! 45 buckets filled for the cattle troughs!",
          "feedbackBad": "Drinking: 45. Cooking: 30. Total: 75. Remaining for cattle: 120 - 75 = 45 buckets."
        },
        {
          "stageNum": 2,
          "narrative": "A household fills 2 1/2 buckets in the morning and 1 3/4 buckets in the evening.",
          "challenge": "What is their total daily water collection in buckets?",
          "options": [
            "A. 4 1/4 buckets",
            "B. 3 3/4 buckets",
            "C. 4 1/2 buckets"
          ],
          "correctIndex": 0,
          "hint": "2 2/4 + 1 3/4 = 3 5/4 = 4 1/4.",
          "feedbackOk": "Properly recorded in the village log! 4 1/4 buckets.",
          "feedbackBad": "2 2/4 + 1 3/4 = 4 1/4 buckets."
        },
        {
          "stageNum": 3,
          "narrative": "A community storage tank holds 50 buckets. Each earthen pot holds 2 1/2 buckets.",
          "challenge": "How many earthen pots can be filled from the full storage tank?",
          "options": [
            "A. 20 pots",
            "B. 25 pots",
            "C. 15 pots"
          ],
          "correctIndex": 0,
          "hint": "50 ÷ 2 1/2 = 50 ÷ (5/2) = 50 × 2/5 = 20.",
          "feedbackOk": "Community well guarded and prosperous! All 20 pots filled!",
          "feedbackBad": "50 ÷ 5/2 = 50 × 2/5 = 20 pots."
        }
      ],
      "reward": "🏺 Stepwell Guardian Badge + 30 XP",
      "learningOutcome": "Multi-fraction distribution, mixed number addition, and dividing whole numbers by mixed numbers."
    }
  ],
  "7": [
    {
      "id": "c7_q1",
      "title": "The Himalayan Sub-Zero Expedition",
      "theme": "High Altitude Mountaineering",
      "intro": "You are the altitude scientist on an expedition to the Siachen Glacier. Extreme blizzards cause rapid temperature shifts that freeze scientific instruments if integer calculations fail.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "At Base Camp, the mercury reads -8°C at sunset. A midnight Himalayan gale causes the temperature to drop by 14°C.",
          "challenge": "What is the new temperature at midnight?",
          "options": [
            "A. -22°C",
            "B. -6°C",
            "C. +6°C"
          ],
          "correctIndex": 0,
          "hint": "Subtract 14 from -8: -8 - 14 = -22°C.",
          "feedbackOk": "Thermometer calibrated! -22°C logged, heaters fired up!",
          "feedbackBad": "-8 - 14 = -22°C."
        },
        {
          "stageNum": 2,
          "narrative": "At noon, solar radiation on the glacier warms the sensors by +15°C from the midnight -22°C reading.",
          "challenge": "What is the midday temperature?",
          "options": [
            "A. -7°C",
            "B. -37°C",
            "C. +7°C"
          ],
          "correctIndex": 0,
          "hint": "-22 + 15 = -7°C.",
          "feedbackOk": "Surviving the elements! The sensors read -7°C in the crisp mountain sunshine!",
          "feedbackBad": "-22 + 15 = -7°C."
        },
        {
          "stageNum": 3,
          "narrative": "To prevent fuel jelly from freezing, a heating strip warms a canister from -18°C to +6°C.",
          "challenge": "What was the total temperature increase achieved by the heating strip?",
          "options": [
            "A. 24°C",
            "B. 12°C",
            "C. -12°C"
          ],
          "correctIndex": 0,
          "hint": "Change = Final - Initial = 6 - (-18) = 6 + 18 = 24°C.",
          "feedbackOk": "Fuel flowing smoothly! Total temperature gain is 24°C!",
          "feedbackBad": "6 - (-18) = 6 + 18 = 24°C."
        }
      ],
      "reward": "🏔️ Himalayan Glacier Pioneer + 30 XP",
      "learningOutcome": "Negative integer subtraction, adding positive integers to negative numbers, and signed temperature delta."
    },
    {
      "id": "c7_q2",
      "title": "The Deep Ocean Bathyscaphe",
      "theme": "Mariana Trench Marine Biology",
      "intro": "Piloting a deep-sea submersible into the oceanic abyss, your depth gauges and ballast tanks operate on signed integer levels below sea level.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Your bathyscaphe hovers at 250 metres below sea level (-250 m). You spot a bioluminescent giant squid and dive 180 metres deeper.",
          "challenge": "What is your new submarine depth?",
          "options": [
            "A. -430 metres",
            "B. -70 metres",
            "C. +430 metres"
          ],
          "correctIndex": 0,
          "hint": "Diving deeper means subtracting 180: -250 - 180 = -430.",
          "feedbackOk": "Depth lights illuminate the squid at -430 metres!",
          "feedbackBad": "-250 + (-180) = -430 metres."
        },
        {
          "stageNum": 2,
          "narrative": "An underwater tremor shakes the trench. You blow ballast tanks to ascend 200 metres rapidly.",
          "challenge": "What is your depth gauge reading after ascending?",
          "options": [
            "A. -230 metres",
            "B. -630 metres",
            "C. -200 metres"
          ],
          "correctIndex": 0,
          "hint": "-430 + 200 = -230 metres.",
          "feedbackOk": "Submarine stabilizes at -230 metres safely above the rift!",
          "feedbackBad": "-430 + 200 = -230 metres."
        },
        {
          "stageNum": 3,
          "narrative": "A research vessel floats on the surface (+0 m). A survey drone flies 150 metres in the air (+150 m) directly above your submersible at -230 m.",
          "challenge": "What is the total vertical distance between your submersible and the sky drone?",
          "options": [
            "A. 380 metres",
            "B. 80 metres",
            "C. 330 metres"
          ],
          "correctIndex": 0,
          "hint": "Distance = 150 - (-230) = 150 + 230 = 380 metres.",
          "feedbackOk": "Telemetry locked! Exactly 380 metres of vertical separation!",
          "feedbackBad": "150 - (-230) = 380 metres."
        }
      ],
      "reward": "🌊 Abyssal Trench Explorer + 30 XP",
      "learningOutcome": "Signed coordinate displacement, underwater elevation delta, and subtracting negatives."
    },
    {
      "id": "c7_q3",
      "title": "The Ancient Banker's Ledger",
      "theme": "Medieval Merchant Bank of Florence",
      "intro": "You are the chief bookkeeper in a 14th-century merchant counting house. Debits (money owed) are recorded as negative integers, and credits are positive.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Merchant Lorenzo begins the month with a debt balance of -₹800. He deposits profits of ₹1200 from a spice shipment.",
          "challenge": "What is Lorenzo's new account balance?",
          "options": [
            "A. +₹400",
            "B. -₹400",
            "C. +₹2000"
          ],
          "correctIndex": 0,
          "hint": "-800 + 1200 = +400.",
          "feedbackOk": "Account solvent! Lorenzo now has +₹400 in his balance ledger!",
          "feedbackBad": "-800 + 1200 = +400."
        },
        {
          "stageNum": 2,
          "narrative": "Lorenzo purchases timber on credit for ₹650, which is deducted from his +₹400 balance.",
          "challenge": "What is his updated ledger position?",
          "options": [
            "A. -₹250 (In debt)",
            "B. +₹250",
            "C. -₹1050"
          ],
          "correctIndex": 0,
          "hint": "400 - 650 = -250.",
          "feedbackOk": "The ledger correctly records -₹250 debt in red ink!",
          "feedbackBad": "400 - 650 = -250."
        },
        {
          "stageNum": 3,
          "narrative": "The bank charges a penalty of ₹30 for each of the 4 days his account remains negative.",
          "challenge": "What is the total penalty debit added to his account?",
          "options": [
            "A. -₹120",
            "B. -₹70",
            "C. +₹120"
          ],
          "correctIndex": 0,
          "hint": "4 × (-30) = -120.",
          "feedbackOk": "Accurate audit! Penalty debit is -₹120, bringing total debt to -₹370.",
          "feedbackBad": "4 × (-30) = -120."
        }
      ],
      "reward": "💰 Master Ledger Keeper + 30 XP",
      "learningOutcome": "Integer debt addition, negative subtraction, and multiplying positive integers by negative integers."
    },
    {
      "id": "c7_q4",
      "title": "The Gold Mine Lift Shaft",
      "theme": "Kolar Gold Fields Mining",
      "intro": "At the historic Kolar Gold Fields in Karnataka, the mining hoist elevator carries workers deep beneath the Earth's crust into the quartz reef shafts.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The lift cage starts at surface level (0 m) and descends at a uniform speed of 6 metres per second (-6 m/s) for 40 seconds.",
          "challenge": "What depth below surface level does the lift cage reach?",
          "options": [
            "A. -240 metres",
            "B. -180 metres",
            "C. -200 metres"
          ],
          "correctIndex": 0,
          "hint": "40 × (-6) = -240 metres.",
          "feedbackOk": "Descent smooth! The hoist cage stops at -240 metres underground!",
          "feedbackBad": "40 × (-6) = -240 metres."
        },
        {
          "stageNum": 2,
          "narrative": "Miners load gold ore at -240 m, and the lift ascends 90 metres to intermediate Shaft 3.",
          "challenge": "What is the depth of Shaft 3?",
          "options": [
            "A. -150 metres",
            "B. -330 metres",
            "C. -140 metres"
          ],
          "correctIndex": 0,
          "hint": "-240 + 90 = -150 metres.",
          "feedbackOk": "Shaft 3 gates open at -150 metres depth!",
          "feedbackBad": "-240 + 90 = -150 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Shaft 3 is at -150 m. A radio communication repeater is situated on a steel tower 50 metres above ground (+50 m).",
          "challenge": "What is the direct vertical distance between Shaft 3 and the radio tower?",
          "options": [
            "A. 200 metres",
            "B. 100 metres",
            "C. 250 metres"
          ],
          "correctIndex": 0,
          "hint": "50 - (-150) = 50 + 150 = 200 metres.",
          "feedbackOk": "Signal clear! Exactly 200 metres of communication link established!",
          "feedbackBad": "50 - (-150) = 200 metres."
        }
      ],
      "reward": "⛏️ Kolar Mining Engineer + 30 XP",
      "learningOutcome": "Negative rate multiplication, signed addition, and distance across zero on the number line."
    },
    {
      "id": "c7_q5",
      "title": "The Polar Weather Balloon",
      "theme": "Antarctica Climate Research",
      "intro": "At India's Bharati research station in Antarctica, scientists release meteorological radiosonde balloons to profile the extreme polar troposphere.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Ground level air temperature is -25°C. For every 1000 metres the weather balloon ascends, air temperature decreases by 6°C (-6°C/km).",
          "challenge": "What is the expected air temperature at an altitude of 4000 metres (4 km)?",
          "options": [
            "A. -49°C",
            "B. -1°C",
            "C. -31°C"
          ],
          "correctIndex": 0,
          "hint": "-25 + (4 × -6) = -25 - 24 = -49°C.",
          "feedbackOk": "Cryogenic readings confirmed! Sensor transmits -49°C!",
          "feedbackBad": "-25 - 24 = -49°C."
        },
        {
          "stageNum": 2,
          "narrative": "The balloon enters an atmospheric temperature inversion layer where temperature rises by +18°C from -49°C.",
          "challenge": "What is the temperature inside the inversion layer?",
          "options": [
            "A. -31°C",
            "B. -67°C",
            "C. +31°C"
          ],
          "correctIndex": 0,
          "hint": "-49 + 18 = -31°C.",
          "feedbackOk": "Inversion boundary mapped at -31°C!",
          "feedbackBad": "-49 + 18 = -31°C."
        },
        {
          "stageNum": 3,
          "narrative": "The balloon finally bursts at -60°C and falls into an ocean water current at +2°C.",
          "challenge": "What is the total temperature jump from the burst point to the ocean water?",
          "options": [
            "A. 62°C",
            "B. 58°C",
            "C. -58°C"
          ],
          "correctIndex": 0,
          "hint": "2 - (-60) = 2 + 60 = 62°C.",
          "feedbackOk": "Data recovered! Thermal shock jump is 62°C!",
          "feedbackBad": "2 - (-60) = 62°C."
        }
      ],
      "reward": "❄️ Polar Aerologist + 30 XP",
      "learningOutcome": "Multi-step integer rates, negative addition, and subtraction across the origin."
    },
    {
      "id": "c7_q6",
      "title": "The Space Probe Thermal Shield",
      "theme": "Chandrayaan Moon Exploration",
      "intro": "A lunar surface lander experiences dramatic thermal swings between the sunny side (+120°C) and the dark shadow side (-130°C).",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The lander's exterior temperature drops from +120°C into lunar night shadow at -130°C.",
          "challenge": "What is the total temperature drop experienced by the exterior gold foil?",
          "options": [
            "A. 250°C",
            "B. 10°C",
            "C. -10°C"
          ],
          "correctIndex": 0,
          "hint": "Drop = 120 - (-130) = 120 + 130 = 250°C.",
          "feedbackOk": "Thermal shielding holds against the 250°C plunge!",
          "feedbackBad": "120 - (-130) = 250°C."
        },
        {
          "stageNum": 2,
          "narrative": "An electric radioisotope heater inside the rover delivers +35°C warming every 2 hours. Over 6 hours, it operates continuously.",
          "challenge": "Starting from -130°C, what will be the rover's internal temperature after 6 hours?",
          "options": [
            "A. -25°C",
            "B. -95°C",
            "C. +5°C"
          ],
          "correctIndex": 0,
          "hint": "6 hours = 3 cycles of 2 hours. Warming = 3 × 35 = +105°C. Temp = -130 + 105 = -25°C.",
          "feedbackOk": "Scientific computer boots safely at -25°C!",
          "feedbackBad": "-130 + (3 × 35) = -130 + 105 = -25°C."
        },
        {
          "stageNum": 3,
          "narrative": "Battery performance requires the temperature to reach at least -10°C. The current temperature is -25°C.",
          "challenge": "How many more degrees must the battery warm up?",
          "options": [
            "A. +15°C",
            "B. +35°C",
            "C. -15°C"
          ],
          "correctIndex": 0,
          "hint": "-10 - (-25) = -10 + 25 = +15°C.",
          "feedbackOk": "Rover wheels unlock! All systems nominal!",
          "feedbackBad": "-10 - (-25) = 15°C."
        }
      ],
      "reward": "🛰️ Lunar Avionics Specialist + 30 XP",
      "learningOutcome": "Extreme integer difference, rate of temperature increase, and signed interval calculations."
    },
    {
      "id": "c7_q7",
      "title": "The Roman Colosseum Gladiators",
      "theme": "Ancient Roman Archeology",
      "intro": "Historians investigate the Roman timeline. Events before the Common Era are treated as negative years (e.g. 50 BCE = -50), and Common Era as positive years.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Construction of the Colosseum began in 72 CE (+72) on land previously developed by Emperor Nero in 64 CE (+64). But an ancient Etruscan arch on the site dates to 128 BCE (-128).",
          "challenge": "How many years elapsed between the Etruscan arch (-128) and the Colosseum start (+72)?",
          "options": [
            "A. 200 years",
            "B. 56 years",
            "C. 190 years"
          ],
          "correctIndex": 0,
          "hint": "Time elapsed = 72 - (-128) = 72 + 128 = 200 years.",
          "feedbackOk": "Chronology verified! 200 years between the monuments!",
          "feedbackBad": "72 - (-128) = 200 years."
        },
        {
          "stageNum": 2,
          "narrative": "Julius Caesar was assassinated in 44 BCE (-44). The Western Roman Empire fell in 476 CE (+476).",
          "challenge": "How many years span between these two pivotal historic turning points?",
          "options": [
            "A. 520 years",
            "B. 432 years",
            "C. 500 years"
          ],
          "correctIndex": 0,
          "hint": "476 - (-44) = 476 + 44 = 520 years.",
          "feedbackOk": "Historic accuracy unlocked! 520 years of imperial history!",
          "feedbackBad": "476 - (-44) = 520 years."
        },
        {
          "stageNum": 3,
          "narrative": "An ancient aqueduct in Rome was built in 312 BCE (-312). A restoration occurred 140 years later.",
          "challenge": "In what year (BCE) was the restoration completed?",
          "options": [
            "A. 172 BCE (-172)",
            "B. 452 BCE (-452)",
            "C. 200 BCE (-200)"
          ],
          "correctIndex": 0,
          "hint": "Moving forward in time: -312 + 140 = -172 (172 BCE).",
          "feedbackOk": "Archival record validated! 172 BCE!",
          "feedbackBad": "-312 + 140 = -172."
        }
      ],
      "reward": "🏛️ Roman Chronologist + 30 XP",
      "learningOutcome": "Timeline integers, subtracting negative years, and forward chronological addition."
    },
    {
      "id": "c7_q8",
      "title": "The Subterranean Cave Diver",
      "theme": "Underwater Spelunking",
      "intro": "Exploring the flooded limestone caves of Meghalaya, you navigate underwater passages mapped with zero representing the cave entrance pool.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "You dive down a narrow limestone siphon to -45 metres depth. The siphon curves upward by 18 metres into an air bell chamber.",
          "challenge": "At what depth is the air bell chamber located?",
          "options": [
            "A. -27 metres",
            "B. -63 metres",
            "C. +27 metres"
          ],
          "correctIndex": 0,
          "hint": "-45 + 18 = -27 metres.",
          "feedbackOk": "Helmet breaches water surface inside the air bell at -27 m!",
          "feedbackBad": "-45 + 18 = -27 metres."
        },
        {
          "stageNum": 2,
          "narrative": "From the air bell at -27 m, you descend down a vertical chimney shaft for 35 metres.",
          "challenge": "What is your new depth reading at the bottom of the chimney?",
          "options": [
            "A. -62 metres",
            "B. -8 metres",
            "C. -52 metres"
          ],
          "correctIndex": 0,
          "hint": "-27 - 35 = -62 metres.",
          "feedbackOk": "Powerful dive lights reveal glowing stalactites at -62 m!",
          "feedbackBad": "-27 - 35 = -62 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Your dive buddy signals from a ledge at -38 metres. You ascend from -62 metres to meet her.",
          "challenge": "How many vertical metres do you ascend?",
          "options": [
            "A. 24 metres",
            "B. 30 metres",
            "C. -24 metres"
          ],
          "correctIndex": 0,
          "hint": "-38 - (-62) = -38 + 62 = 24 metres.",
          "feedbackOk": "Team reunited on the ledge! 24 metres of safe ascent!",
          "feedbackBad": "-38 - (-62) = 24 metres."
        }
      ],
      "reward": "🔦 Meghalaya Cave Diver + 30 XP",
      "learningOutcome": "Negative depth navigation, successive negative additions, and relative upward displacement."
    },
    {
      "id": "c7_q9",
      "title": "The Cyber Security Scorecard",
      "theme": "Ethical Hacking & Network Defense",
      "intro": "As a cyber security specialist defending a bank's network, vulnerability exploits deduct security points (negative scores), while patches grant positive score boosts.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A server has a security baseline score of -40 points due to outdated firewalls. You install zero-day security patches that add +95 points.",
          "challenge": "What is the server's updated health score?",
          "options": [
            "A. +55 points",
            "B. -135 points",
            "C. +45 points"
          ],
          "correctIndex": 0,
          "hint": "-40 + 95 = +55.",
          "feedbackOk": "Firewall fortress! Server health rises to +55 points!",
          "feedbackBad": "-40 + 95 = +55."
        },
        {
          "stageNum": 2,
          "narrative": "A distributed denial of service (DDoS) attack inflicts 15 penalty points per minute (-15 pts/min) for 6 minutes.",
          "challenge": "What was the total penalty score inflicted by the attack?",
          "options": [
            "A. -90 points",
            "B. -75 points",
            "C. -105 points"
          ],
          "correctIndex": 0,
          "hint": "6 × (-15) = -90 points.",
          "feedbackOk": "Attack mitigated! DDoS caused -90 points before being blocked!",
          "feedbackBad": "6 × (-15) = -90 points."
        },
        {
          "stageNum": 3,
          "narrative": "The server score was +55 points before the -90 point attack penalty.",
          "challenge": "What is the final server score after the attack?",
          "options": [
            "A. -35 points",
            "B. +35 points",
            "C. -145 points"
          ],
          "correctIndex": 0,
          "hint": "55 + (-90) = 55 - 90 = -35 points.",
          "feedbackOk": "Emergency countermeasures deployed! Score stabilized at -35!",
          "feedbackBad": "55 - 90 = -35 points."
        }
      ],
      "reward": "🛡️ Cyber Defender Shield + 30 XP",
      "learningOutcome": "Negative point baseline, integer rate multiplication, and signed balance update."
    },
    {
      "id": "c7_q10",
      "title": "The High-Altitude Balloonist",
      "theme": "Hot Air Balloon Flight Championship",
      "intro": "Piloting a competition hot air balloon over the Aravali hills, vertical air thermals (updrafts and downdrafts) alter your rate of climb and descent.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Your balloon descends through a cold air downdraft at 3 metres per second (-3 m/s) for 25 seconds.",
          "challenge": "What is the total change in altitude?",
          "options": [
            "A. -75 metres",
            "B. -60 metres",
            "C. -80 metres"
          ],
          "correctIndex": 0,
          "hint": "25 × (-3) = -75 metres.",
          "feedbackOk": "Descent tracked: -75 metres change logged on the variometer!",
          "feedbackBad": "25 × (-3) = -75 metres."
        },
        {
          "stageNum": 2,
          "narrative": "You fire the propane burner to gain +120 metres, counteracting the -75 metre downdraft.",
          "challenge": "What is the net altitude change from your starting position?",
          "options": [
            "A. +45 metres",
            "B. +55 metres",
            "C. -45 metres"
          ],
          "correctIndex": 0,
          "hint": "-75 + 120 = +45 metres.",
          "feedbackOk": "Smooth soaring! Net climb of +45 metres achieved!",
          "feedbackBad": "-75 + 120 = +45 metres."
        },
        {
          "stageNum": 3,
          "narrative": "A mountain ridge rises at +300 metres above your current +45 metre net climb position.",
          "challenge": "How many more metres must you climb to clear the ridge safely?",
          "options": [
            "A. 255 metres",
            "B. 345 metres",
            "C. 245 metres"
          ],
          "correctIndex": 0,
          "hint": "300 - 45 = 255 metres.",
          "feedbackOk": "Cleared with flying colors! The basket glides over the ridge!",
          "feedbackBad": "300 - 45 = 255 metres."
        }
      ],
      "reward": "🎈 Aeronaut Gold Wings + 30 XP",
      "learningOutcome": "Negative rate calculation, net integer displacement, and target elevation solving."
    }
  ],
  "8": [
    {
      "id": "c8_q1",
      "title": "The Alchemist's Scale of Balance",
      "theme": "Ancient Vedic Alchemy & Metallurgy",
      "intro": "In an ancient laboratory of Nalanda, Master Alchemist Nagarjuna tests your mastery of algebraic balance equations. Every equation is a golden balance scale.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "On the left scale pan sits an unknown ore bag (x kg) and a 7 kg bronze weight. On the right pan sits a 19 kg iron bar. The scale is in perfect horizontal balance.",
          "challenge": "Solve the linear balance equation: x + 7 = 19.",
          "options": [
            "A. x = 12 kg",
            "B. x = 26 kg",
            "C. x = 14 kg"
          ],
          "correctIndex": 0,
          "hint": "Subtract 7 from both sides: x = 19 - 7.",
          "feedbackOk": "Balanced! x = 12 kg. The golden scale stays level!",
          "feedbackBad": "x = 19 - 7 = 12 kg."
        },
        {
          "stageNum": 2,
          "narrative": "Nagarjuna places three identical bags of silver powder (3x) and removes 5 kg. This exactly balances 16 kg on the counterweight: 3x - 5 = 16.",
          "challenge": "What is the weight x of each bag of silver powder?",
          "options": [
            "A. x = 7 kg",
            "B. x = 6 kg",
            "C. x = 8 kg"
          ],
          "correctIndex": 0,
          "hint": "Add 5 to both sides: 3x = 21, then divide by 3: x = 21 / 3.",
          "feedbackOk": "Mastery! 3x = 21 $\\rightarrow$ x = 7 kg. Silver powder weighed true!",
          "feedbackBad": "3x = 16 + 5 = 21 $\\rightarrow$ x = 7 kg."
        },
        {
          "stageNum": 3,
          "narrative": "The final chamber door requires solving a two-sided balance equation: 5x + 4 = 2x + 19.",
          "challenge": "Find the secret key value x that unlocks the inner sanctum.",
          "options": [
            "A. x = 5",
            "B. x = 4",
            "C. x = 6"
          ],
          "correctIndex": 0,
          "hint": "Subtract 2x from both sides: 3x + 4 = 19. Subtract 4: 3x = 15. Divide by 3: x = 5.",
          "feedbackOk": "The ancient lock clicks open! x = 5. Nagarjuna presents the golden crucible!",
          "feedbackBad": "5x - 2x = 19 - 4 $\\rightarrow$ 3x = 15 $\\rightarrow$ x = 5."
        }
      ],
      "reward": "⚗️ Master of Balance Seal + 30 XP",
      "learningOutcome": "Solving one-step, two-step, and variables-on-both-sides linear equations."
    },
    {
      "id": "c8_q2",
      "title": "The Railway Track Conundrum",
      "theme": "Indian Railways Route Dispatch",
      "intro": "You are the chief controller at the Mughalsarai railway junction. Two express trains operate on converging schedules requiring algebraic timing calculations to prevent delays.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The Rajdhani Express travels at an average speed of 80 km/h. It has already traveled 120 km from its starting terminal.",
          "challenge": "If total distance is given by D = 120 + 80t, how many additional hours (t) will it take to reach 440 km?",
          "options": [
            "A. t = 4 hours",
            "B. t = 3.5 hours",
            "C. t = 5 hours"
          ],
          "correctIndex": 0,
          "hint": "120 + 80t = 440 $\\rightarrow$ 80t = 320 $\\rightarrow$ t = 320 / 80.",
          "feedbackOk": "Signal clears green! 4 hours to destination!",
          "feedbackBad": "80t = 440 - 120 = 320 $\\rightarrow$ t = 4 hours."
        },
        {
          "stageNum": 2,
          "narrative": "A freight train is 400 metres long and takes 30 seconds to completely cross a stationary telegraph post at speed v: 30v = 400.",
          "challenge": "Find the speed v in metres per second (in simplified fraction).",
          "options": [
            "A. 40/3 m/s (13 1/3 m/s)",
            "B. 15 m/s",
            "C. 35/3 m/s"
          ],
          "correctIndex": 0,
          "hint": "v = 400 / 30 = 40 / 3 m/s.",
          "feedbackOk": "Speed recorder calibrated! v = 40/3 m/s!",
          "feedbackBad": "400 ÷ 30 = 40/3 m/s."
        },
        {
          "stageNum": 3,
          "narrative": "Two passenger trains leave the same station in opposite directions: Train 1 travels at 55 km/h and Train 2 at 65 km/h. After t hours, they are 360 km apart: 55t + 65t = 360.",
          "challenge": "Solve for the travel time t in hours.",
          "options": [
            "A. t = 3 hours",
            "B. t = 2.5 hours",
            "C. t = 4 hours"
          ],
          "correctIndex": 0,
          "hint": "Combine like terms: 120t = 360 $\\rightarrow$ t = 3.",
          "feedbackOk": "Junction routes synchronized perfectly! t = 3 hours!",
          "feedbackBad": "120t = 360 $\\rightarrow$ t = 3 hours."
        }
      ],
      "reward": "🚆 Chief Railway Dispatcher + 30 XP",
      "learningOutcome": "Linear distance-speed-time formulas, unit conversions, and combining like variable terms."
    },
    {
      "id": "c8_q3",
      "title": "The Architect's Perimeter Riddle",
      "theme": "Jaipur City Palace Architecture",
      "intro": "Royal architect Vidyadhar Bhattacharya is designing the perimeter walls for a courtyard garden in Jaipur. The dimensions must satisfy harmonic geometric proportions.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The rectangular courtyard's length is 3 times its width (l = 3w). The total perimeter is 96 metres: 2(l + w) = 96.",
          "challenge": "Substitute l = 3w into 2(3w + w) = 96 to find the width w.",
          "options": [
            "A. w = 12 metres",
            "B. w = 16 metres",
            "C. w = 10 metres"
          ],
          "correctIndex": 0,
          "hint": "2(4w) = 96 $\\rightarrow$ 8w = 96 $\\rightarrow$ w = 12.",
          "feedbackOk": "Width verified: w = 12 m. Length = 3 × 12 = 36 m!",
          "feedbackBad": "8w = 96 $\\rightarrow$ w = 12 metres."
        },
        {
          "stageNum": 2,
          "narrative": "A marble fountain basin is in the shape of an isosceles triangle with two equal sides each measuring 2x + 1 metres and a base of x + 4 metres. The perimeter is 25 metres.",
          "challenge": "Set up and solve (2x + 1) + (2x + 1) + (x + 4) = 25.",
          "options": [
            "A. x = 3.8 metres",
            "B. x = 4 metres",
            "C. x = 5 metres"
          ],
          "correctIndex": 0,
          "hint": "5x + 6 = 25 $\\rightarrow$ 5x = 19 $\\rightarrow$ x = 19/5 = 3.8 metres.",
          "feedbackOk": "Fountain foundation laid true! x = 3.8 metres!",
          "feedbackBad": "5x + 6 = 25 $\\rightarrow$ 5x = 19 $\\rightarrow$ x = 3.8."
        },
        {
          "stageNum": 3,
          "narrative": "A perimeter pathway of width 2 metres around the 36m × 12m garden adds to the total property footprint. What is the outer perimeter?",
          "challenge": "New dimensions are (36 + 4) by (12 + 4). Find outer perimeter = 2(40 + 16).",
          "options": [
            "A. 112 metres",
            "B. 108 metres",
            "C. 120 metres"
          ],
          "correctIndex": 0,
          "hint": "2(40 + 16) = 2(56) = 112 metres.",
          "feedbackOk": "Palace courtyard blueprint approved by the Maharaja!",
          "feedbackBad": "2 × 56 = 112 metres."
        }
      ],
      "reward": "📐 Royal City Architect Badge + 30 XP",
      "learningOutcome": "Linear perimeter equations, algebraic substitution, and multi-step geometric problem solving."
    },
    {
      "id": "c8_q4",
      "title": "The Clock Tower Pendulum",
      "theme": "Victorian Clockwork Horology",
      "intro": "Inside the heritage Victoria Terminus clock tower, the master watchmaker calibrates the brass pendulum clockwork escapement gears.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The clock runs slightly fast, gaining 4 seconds every hour (+4 s/h). It currently shows a cumulative error of +52 seconds.",
          "challenge": "Solve the linear equation 4h = 52 to find how many hours (h) the clock has been running.",
          "options": [
            "A. h = 13 hours",
            "B. h = 12 hours",
            "C. h = 14 hours"
          ],
          "correctIndex": 0,
          "hint": "h = 52 / 4 = 13 hours.",
          "feedbackOk": "Exact time history: h = 13 hours!",
          "feedbackBad": "52 ÷ 4 = 13 hours."
        },
        {
          "stageNum": 2,
          "narrative": "Adjusting the pendulum nut: turning the screw by n rotations alters the clock rate according to the formula: 52 - 3.5n = 10.",
          "challenge": "Solve for the required number of screw rotations n.",
          "options": [
            "A. n = 12 rotations",
            "B. n = 10 rotations",
            "C. n = 14 rotations"
          ],
          "correctIndex": 0,
          "hint": "3.5n = 52 - 10 = 42 $\\rightarrow$ n = 42 / 3.5 = 12.",
          "feedbackOk": "Escapement gear clicks into place with 12 rotations!",
          "feedbackBad": "3.5n = 42 $\\rightarrow$ n = 12."
        },
        {
          "stageNum": 3,
          "narrative": "Two clock chimes ring together at 12:00. Chime A rings every 15 minutes and Chime B rings every 20 minutes.",
          "challenge": "After how many minutes will both chimes strike together again (LCM of 15 and 20)?",
          "options": [
            "A. 60 minutes (1 hour)",
            "B. 45 minutes",
            "C. 80 minutes"
          ],
          "correctIndex": 0,
          "hint": "Multiples of 20: 20, 40, 60. 60 is divisible by 15 (15 × 4 = 60).",
          "feedbackOk": "Tower bells strike in majestic harmony at 1:00 PM!",
          "feedbackBad": "LCM(15, 20) = 60 minutes."
        }
      ],
      "reward": "🕰️ Master Horologist Trophy + 30 XP",
      "learningOutcome": "One-step linear division, decimal coefficient equations, and least common multiple periodic cycles."
    },
    {
      "id": "c8_q5",
      "title": "The Secret Code of Vijayanagara",
      "theme": "Ancient Indian Cryptography",
      "intro": "You discover an encrypted brass cylinder from the reign of Emperor Krishnadevaraya. The numeric cipher requires solving linear modular shift equations.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The cipher encrypts letter position P using the linear rule C = 2P + 3. The ciphertext value is C = 27.",
          "challenge": "Solve the linear equation 2P + 3 = 27 to find original letter position P.",
          "options": [
            "A. P = 12",
            "B. P = 15",
            "C. P = 10"
          ],
          "correctIndex": 0,
          "hint": "2P = 27 - 3 = 24 $\\rightarrow$ P = 24 / 2 = 12.",
          "feedbackOk": "First letter decrypted! P = 12 corresponds to 'L'!",
          "feedbackBad": "2P = 24 $\\rightarrow$ P = 12."
        },
        {
          "stageNum": 2,
          "narrative": "The second lock tumbler uses the inverse cipher formula: (3P - 7) / 2 = 19.",
          "challenge": "Solve for the secret position P.",
          "options": [
            "A. P = 15",
            "B. P = 14",
            "C. P = 16"
          ],
          "correctIndex": 0,
          "hint": "Multiply by 2: 3P - 7 = 38 $\\rightarrow$ 3P = 45 $\\rightarrow$ P = 15.",
          "feedbackOk": "Second tumbler unlatches! P = 15 corresponds to 'O'!",
          "feedbackBad": "3P - 7 = 38 $\\rightarrow$ 3P = 45 $\\rightarrow$ P = 15."
        },
        {
          "stageNum": 3,
          "narrative": "The final vault tumbler requires matching two encryption streams: 4P + 10 = 6P - 14.",
          "challenge": "Find the root position P that satisfies both streams.",
          "options": [
            "A. P = 12",
            "B. P = 10",
            "C. P = 14"
          ],
          "correctIndex": 0,
          "hint": "10 + 14 = 6P - 4P $\\rightarrow$ 2P = 24 $\\rightarrow$ P = 12.",
          "feedbackOk": "The cylinder opens! A silk map of the Tungabhadra diamond mines is revealed!",
          "feedbackBad": "2P = 24 $\\rightarrow$ P = 12."
        }
      ],
      "reward": "🗝️ Cryptanalyst Master Seal + 30 XP",
      "learningOutcome": "Two-step linear equations, rational algebraic equations, and linear equations with variables on both sides."
    },
    {
      "id": "c8_q6",
      "title": "The Sky Lantern Ascension",
      "theme": "Diwali Night Aviation",
      "intro": "On Diwali night, hot air paper lanterns are released over the Jaipur riverfront. Thermal buoyancy equations govern their ascension altitude.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A lantern rises from an initial balcony height of 15 metres at a steady rate of 2.5 metres per second: h = 15 + 2.5t.",
          "challenge": "After how many seconds t will the lantern reach an altitude of 90 metres?",
          "options": [
            "A. t = 30 seconds",
            "B. t = 25 seconds",
            "C. t = 35 seconds"
          ],
          "correctIndex": 0,
          "hint": "15 + 2.5t = 90 $\\rightarrow$ 2.5t = 75 $\\rightarrow$ t = 75 / 2.5 = 30.",
          "feedbackOk": "Glowing bright! t = 30 seconds to reach 90 metres!",
          "feedbackBad": "2.5t = 75 $\\rightarrow$ t = 30 seconds."
        },
        {
          "stageNum": 2,
          "narrative": "Wind carries the lantern horizontally at 4 metres per second. At t = 30 seconds, how far horizontally (x = 4t) has it traveled?",
          "challenge": "Calculate horizontal distance x = 4 × 30.",
          "options": [
            "A. 120 metres",
            "B. 100 metres",
            "C. 150 metres"
          ],
          "correctIndex": 0,
          "hint": "4 × 30 = 120 metres.",
          "feedbackOk": "Tracked across the night sky at 120 metres downrange!",
          "feedbackBad": "4 × 30 = 120 metres."
        },
        {
          "stageNum": 3,
          "narrative": "A larger lantern burns out its wax candle at altitude 120 metres and descends at 1.5 m/s: h = 120 - 1.5t.",
          "challenge": "How many seconds t does it take to gently touch down on the sandbank (h = 0)?",
          "options": [
            "A. t = 80 seconds",
            "B. t = 60 seconds",
            "C. t = 90 seconds"
          ],
          "correctIndex": 0,
          "hint": "1.5t = 120 $\\rightarrow$ t = 120 / 1.5 = 80.",
          "feedbackOk": "Safe recovery on the riverbank! t = 80 seconds!",
          "feedbackBad": "120 ÷ 1.5 = 80 seconds."
        }
      ],
      "reward": "🏮 Celestial Lantern Pilot + 30 XP",
      "learningOutcome": "Rate-of-change linear models, horizontal and vertical parametric motion, and zero-intercept solving."
    },
    {
      "id": "c8_q7",
      "title": "The Water Reservoir Inflow",
      "theme": "Civil Water Infrastructure",
      "intro": "You manage the municipal sluice gates of the Osman Sagar reservoir. Monsoons feed inflow while city pipelines draw drinking water.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The reservoir contains 400 million litres. Heavy rainfall adds 30 million litres per day, while the city draws 18 million litres per day.",
          "challenge": "What is the net rate of water accumulation (inflow - outflow) per day?",
          "options": [
            "A. +12 million litres/day",
            "B. +48 million litres/day",
            "C. -12 million litres/day"
          ],
          "correctIndex": 0,
          "hint": "Net rate = 30 - 18 = 12 million litres per day.",
          "feedbackOk": "Net accumulation rate is +12 million litres/day!",
          "feedbackBad": "30 - 18 = 12 million litres/day."
        },
        {
          "stageNum": 2,
          "narrative": "The reservoir capacity limit is 520 million litres. Starting at 400 million litres, how many days d at +12 M L/day will fill it: 400 + 12d = 520?",
          "challenge": "Solve for the number of days d.",
          "options": [
            "A. d = 10 days",
            "B. d = 12 days",
            "C. d = 8 days"
          ],
          "correctIndex": 0,
          "hint": "12d = 520 - 400 = 120 $\\rightarrow$ d = 10 days.",
          "feedbackOk": "Sluice gate schedule set! In 10 days, gates will be opened for flood control!",
          "feedbackBad": "12d = 120 $\\rightarrow$ d = 10 days."
        },
        {
          "stageNum": 3,
          "narrative": "When sluice gates open, discharge rate is 25 million litres per day. Total outflow becomes 18 + 25 = 43 M L/day, against 30 M L/day inflow.",
          "challenge": "What is the new net rate of water level change?",
          "options": [
            "A. -13 million litres/day",
            "B. -7 million litres/day",
            "C. +13 million litres/day"
          ],
          "correctIndex": 0,
          "hint": "Inflow - Outflow = 30 - 43 = -13 million litres per day.",
          "feedbackOk": "Reservoir safely drawn down at -13 M L/day without flooding!",
          "feedbackBad": "30 - 43 = -13 million litres/day."
        }
      ],
      "reward": "🌊 Sluice Gate Hydro-Engineer + 30 XP",
      "learningOutcome": "Net rate linear equations, multi-variable capacity solving, and signed flow balances."
    },
    {
      "id": "c8_q8",
      "title": "The Merchant Fleet Speed Race",
      "theme": "Arabian Sea Maritime Trade",
      "intro": "Two historic merchant dhows race across the Arabian Sea from Muscat to the port of Kozhikode (Calicut) carrying cinnamon and frankincense.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Dhow Alpha travels at 14 knots and has a 20-nautical-mile head start: D₁ = 20 + 14t. Dhow Beta sails at 18 knots: D₂ = 18t.",
          "challenge": "Set D₁ = D₂ to find how many hours t it will take for Dhow Beta to catch up.",
          "options": [
            "A. t = 5 hours",
            "B. t = 4 hours",
            "C. t = 6 hours"
          ],
          "correctIndex": 0,
          "hint": "20 + 14t = 18t $\\rightarrow$ 4t = 20 $\\rightarrow$ t = 5 hours.",
          "feedbackOk": "Full sail! Beta draws level after exactly 5 hours!",
          "feedbackBad": "18t - 14t = 20 $\\rightarrow$ 4t = 20 $\\rightarrow$ t = 5 hours."
        },
        {
          "stageNum": 2,
          "narrative": "At the moment Dhow Beta catches up (t = 5 hours), what total nautical distance have the ships traveled?",
          "challenge": "Calculate D = 18 × 5.",
          "options": [
            "A. 90 nautical miles",
            "B. 80 nautical miles",
            "C. 100 nautical miles"
          ],
          "correctIndex": 0,
          "hint": "18 × 5 = 90 nautical miles (also 20 + 14(5) = 20 + 70 = 90).",
          "feedbackOk": "Position confirmed on navigational sea charts at 90 nautical miles!",
          "feedbackBad": "18 × 5 = 90 nautical miles."
        },
        {
          "stageNum": 3,
          "narrative": "A headwind slows Dhow Beta by w knots so that its speed becomes 18 - w. If it now takes 10 hours to cover 90 miles: 10(18 - w) = 90.",
          "challenge": "Find the headwind speed w in knots.",
          "options": [
            "A. w = 9 knots",
            "B. w = 8 knots",
            "C. w = 10 knots"
          ],
          "correctIndex": 0,
          "hint": "18 - w = 90 / 10 = 9 $\\rightarrow$ w = 18 - 9 = 9.",
          "feedbackOk": "Logbook entered! Headwind speed is 9 knots!",
          "feedbackBad": "18 - w = 9 $\\rightarrow$ w = 9 knots."
        }
      ],
      "reward": "⛵ Monsoon Sea Navigator + 30 XP",
      "learningOutcome": "Pursuit linear equations, distance verification, and solving linear equations with brackets."
    },
    {
      "id": "c8_q9",
      "title": "The Golden Ratio Scepter",
      "theme": "Ancient Geometry & Metal Craft",
      "intro": "Court jewelers are crafting a ceremonial silver scepter of length 80 cm. It must be divided into two segments x and (80 - x) according to classical proportions.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The longer segment x is 16 cm longer than the shorter segment: x = (80 - x) + 16.",
          "challenge": "Solve the linear equation x = 80 - x + 16 to find the longer segment x.",
          "options": [
            "A. x = 48 cm",
            "B. x = 50 cm",
            "C. x = 45 cm"
          ],
          "correctIndex": 0,
          "hint": "2x = 96 $\\rightarrow$ x = 96 / 2 = 48 cm.",
          "feedbackOk": "Harmonic cut! Longer segment is 48 cm, shorter is 32 cm!",
          "feedbackBad": "2x = 96 $\\rightarrow$ x = 48 cm."
        },
        {
          "stageNum": 2,
          "narrative": "Three gold bands are embedded along the shorter 32 cm handle, spaced at intervals of y cm: 3y + 2 = 32.",
          "challenge": "Solve for the interval spacing y.",
          "options": [
            "A. y = 10 cm",
            "B. y = 8 cm",
            "C. y = 12 cm"
          ],
          "correctIndex": 0,
          "hint": "3y = 30 $\\rightarrow$ y = 10 cm.",
          "feedbackOk": "Gold filigree inlays set at 10 cm intervals!",
          "feedbackBad": "3y = 30 $\\rightarrow$ y = 10 cm."
        },
        {
          "stageNum": 3,
          "narrative": "A ruby gemstone is set at a point dividing the scepter such that 3 times the top length equals 5 times the bottom length: 3x = 5(80 - x).",
          "challenge": "Solve 3x = 400 - 5x for the gemstone position x.",
          "options": [
            "A. x = 50 cm",
            "B. x = 48 cm",
            "C. x = 52 cm"
          ],
          "correctIndex": 0,
          "hint": "8x = 400 $\\rightarrow$ x = 400 / 8 = 50 cm.",
          "feedbackOk": "The royal scepter is completed! The ruby glows at exactly 50 cm!",
          "feedbackBad": "8x = 400 $\\rightarrow$ x = 50 cm."
        }
      ],
      "reward": "👑 Master Goldsmith Scepter + 30 XP",
      "learningOutcome": "Two-segment linear partitioning, distributed brackets, and ratio equations."
    },
    {
      "id": "c8_q10",
      "title": "The Celestial Astrolabe Alignment",
      "theme": "Jantar Mantar Astronomical Observatory",
      "intro": "At the Jantar Mantar observatory in Jaipur, royal astronomer Jai Singh II tasks you with calibrating the Samrat Yantra sundial shadow angles.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The shadow length S (in metres) changes with solar hour angle t according to the calibration line S = 24 - 3t.",
          "challenge": "At what hour angle t will the shadow measure exactly 6 metres?",
          "options": [
            "A. t = 6 hours",
            "B. t = 5 hours",
            "C. t = 7 hours"
          ],
          "correctIndex": 0,
          "hint": "24 - 3t = 6 $\\rightarrow$ 3t = 18 $\\rightarrow$ t = 6.",
          "feedbackOk": "Shadow alignment verified at t = 6 hours!",
          "feedbackBad": "3t = 18 $\\rightarrow$ t = 6 hours."
        },
        {
          "stageNum": 2,
          "narrative": "Two celestial coordinates satisfy the equation 4θ - 15 = 2θ + 25.",
          "challenge": "Find the angle θ in degrees.",
          "options": [
            "A. θ = 20°",
            "B. θ = 25°",
            "C. θ = 15°"
          ],
          "correctIndex": 0,
          "hint": "2θ = 40 $\\rightarrow$ θ = 20°.",
          "feedbackOk": "Telescope quadrant aligns precisely to 20° elevation!",
          "feedbackBad": "2θ = 40 $\\rightarrow$ θ = 20°."
        },
        {
          "stageNum": 3,
          "narrative": "The vernal equinox calibration dial requires solving: 5(θ - 2) = 3(θ + 6).",
          "challenge": "Find the equinox alignment angle θ.",
          "options": [
            "A. θ = 14°",
            "B. θ = 12°",
            "C. θ = 16°"
          ],
          "correctIndex": 0,
          "hint": "5θ - 10 = 3θ + 18 $\\rightarrow$ 2θ = 28 $\\rightarrow$ θ = 14°.",
          "feedbackOk": "The heavens mapped! Jantar Mantar astrolabe accurate to the arc-second!",
          "feedbackBad": "2θ = 28 $\\rightarrow$ θ = 14°."
        }
      ],
      "reward": "🔭 Royal Astronomer Medal + 30 XP",
      "learningOutcome": "Linear equations with expanding brackets, angle alignment formulas, and variable elimination."
    }
  ],
  "9": [
    {
      "id": "c9_q1",
      "title": "The Lost Formula of Golconda (Expanded)",
      "theme": "Golconda Diamond Vault",
      "intro": "Deep beneath the granite ramparts of Golconda Fort lies the lost mathematical treasure vault of the Qutb Shahi dynasty. To unlock the three heavy basalt doors, you must crack the quadratic polynomials.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The first stone door is sealed by a balance equation: 2x + 6 = 20.",
          "challenge": "Solve for the root value x.",
          "options": [
            "A. x = 7",
            "B. x = 13",
            "C. x = 14"
          ],
          "correctIndex": 0,
          "hint": "2x = 14 $\\rightarrow$ x = 7.",
          "feedbackOk": "The first stone door rumbles open! x = 7 is accepted!",
          "feedbackBad": "2x = 20 - 6 = 14 $\\rightarrow$ x = 7."
        },
        {
          "stageNum": 2,
          "narrative": "The second chamber features a floor of pressure tiles. You can only step on tiles representing legitimate roots of x² - 9x + 20 = 0.",
          "challenge": "Factorize x² - 9x + 20 = 0 to find the safe stepping tiles.",
          "options": [
            "A. x = 4 and x = 5",
            "B. x = 2 and x = 10",
            "C. x = -4 and x = -5"
          ],
          "correctIndex": 0,
          "hint": "Look for two numbers that multiply to +20 and add to -9: (-4) × (-5) = 20 and (-4) + (-5) = -9.",
          "feedbackOk": "You step cleanly across tiles 4 and 5 without triggering the floor spikes!",
          "feedbackBad": "(x - 4)(x - 5) = 0 gives roots x = 4 and x = 5."
        },
        {
          "stageNum": 3,
          "narrative": "The inner vault door bears the inscription: 'My roots differ by 5, and their product is -14: x² - 5x - 14 = 0.'",
          "challenge": "Solve the quadratic equation to unlock the diamond coffer.",
          "options": [
            "A. x = 7 and x = -2",
            "B. x = -7 and x = 2",
            "C. x = 14 and x = -1"
          ],
          "correctIndex": 0,
          "hint": "(x - 7)(x + 2) = 0 gives x = 7 or x = -2.",
          "feedbackOk": "The heavy gold vault swings wide! The Koh-i-Noor manuscript is in your hands!",
          "feedbackBad": "(x - 7)(x + 2) = 0 $\\rightarrow$ roots are 7 and -2."
        }
      ],
      "reward": "💎 Diamond Vault Master + 30 XP",
      "learningOutcome": "Factoring quadratic polynomials by splitting the middle term and verifying roots."
    },
    {
      "id": "c9_q2",
      "title": "The Archer's Parabolic Flight",
      "theme": "Epic Kurukshetra Archery Physics",
      "intro": "Master archer Arjuna trains on the archery grounds. The height of every arrow follows a parabolic flight path governed by quadratic polynomials.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "An arrow launched from ground level has trajectory height h = -5t² + 30t, where t is flight time in seconds.",
          "challenge": "At what time t does the arrow reach its highest peak (vertex)?",
          "options": [
            "A. t = 3 seconds",
            "B. t = 6 seconds",
            "C. t = 2.5 seconds"
          ],
          "correctIndex": 0,
          "hint": "Vertex t = -b/(2a) = -30 / (2 × -5) = 3 seconds.",
          "feedbackOk": "Bullseye! The arrow reaches peak height at t = 3 seconds!",
          "feedbackBad": "t = -30 / -10 = 3 seconds."
        },
        {
          "stageNum": 2,
          "narrative": "What is the maximum peak height (in metres) achieved by the arrow at t = 3 seconds?",
          "challenge": "Calculate h = -5(3)² + 30(3).",
          "options": [
            "A. 45 metres",
            "B. 40 metres",
            "C. 50 metres"
          ],
          "correctIndex": 0,
          "hint": "h = -5(9) + 90 = -45 + 90 = 45 metres.",
          "feedbackOk": "Majestic flight! Peak altitude is 45 metres above ground!",
          "feedbackBad": "-45 + 90 = 45 metres."
        },
        {
          "stageNum": 3,
          "narrative": "At what time t does the arrow strike the practice target at ground level (h = 0)?",
          "challenge": "Solve -5t(t - 6) = 0 for t > 0.",
          "options": [
            "A. t = 6 seconds",
            "B. t = 5 seconds",
            "C. t = 4.5 seconds"
          ],
          "correctIndex": 0,
          "hint": "The arrow lands when t = 6 seconds.",
          "feedbackOk": "Right in the gold center of the target at t = 6 seconds!",
          "feedbackBad": "-5t(t - 6) = 0 $\\rightarrow$ t = 6 seconds."
        }
      ],
      "reward": "🏹 Master Archer Crest + 30 XP",
      "learningOutcome": "Parabolic vertex determination, maximum value evaluation, and finding quadratic roots."
    },
    {
      "id": "c9_q3",
      "title": "The Fortress Moat Bridge",
      "theme": "Medieval Military Engineering",
      "intro": "The royal defense engineers must build a wooden drawbridge over the fortress moat. The span and arch clearance follow strict quadratic curves.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A rectangular drawbridge platform has an area of 48 m². Its length is 8 metres longer than its width w: w(w + 8) = 48.",
          "challenge": "Write in standard quadratic form: w² + 8w - 48 = 0 and solve for the positive width w.",
          "options": [
            "A. w = 4 metres",
            "B. w = 6 metres",
            "C. w = 8 metres"
          ],
          "correctIndex": 0,
          "hint": "(w + 12)(w - 4) = 0. Since width must be positive, w = 4.",
          "feedbackOk": "Bridge width verified: w = 4 m, length = 12 m. 4 × 12 = 48 m²!",
          "feedbackBad": "(w + 12)(w - 4) = 0 $\\rightarrow$ w = 4 metres."
        },
        {
          "stageNum": 2,
          "narrative": "The arch under the bridge has height profile y = -x² + 16, where x is distance from center in metres.",
          "challenge": "What is the total width of the water channel between the bridge abutments where y = 0?",
          "options": [
            "A. 8 metres (from -4 to +4)",
            "B. 4 metres",
            "C. 16 metres"
          ],
          "correctIndex": 0,
          "hint": "-x² + 16 = 0 $\\rightarrow$ x² = 16 $\\rightarrow$ x = ±4. Total span = 4 - (-4) = 8 metres.",
          "feedbackOk": "Moat span confirmed at 8 metres wide!",
          "feedbackBad": "x = ±4 $\\rightarrow$ total span is 4 - (-4) = 8 metres."
        },
        {
          "stageNum": 3,
          "narrative": "What is the maximum vertical clearance in metres under the center of the arch (at x = 0)?",
          "challenge": "Evaluate y = -(0)² + 16.",
          "options": [
            "A. 16 metres",
            "B. 8 metres",
            "C. 12 metres"
          ],
          "correctIndex": 0,
          "hint": "When x = 0, y = 16.",
          "feedbackOk": "Royal defense galleys pass underneath with 16 metres clearance!",
          "feedbackBad": "y(0) = 16 metres."
        }
      ],
      "reward": "🏰 Fortress Bastion Architect + 30 XP",
      "learningOutcome": "Translating area geometric constraints into quadratics and symmetric parabolic root analysis."
    },
    {
      "id": "c9_q4",
      "title": "The Royal Garden Maximum Area",
      "theme": "Mughal Charbagh Garden Planning",
      "intro": "Chief gardener Ustad Isa is laying out a symmetrical charbagh fountain court surrounded by 60 metres of carved marble balustrade.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "With 60 metres of fencing for 4 sides of a rectangle, 2(l + w) = 60 $\\rightarrow$ l + w = 30 $\\rightarrow$ l = 30 - w. Area A(w) = w(30 - w) = -w² + 30w.",
          "challenge": "What width w gives the maximum possible garden area?",
          "options": [
            "A. w = 15 metres (a square)",
            "B. w = 10 metres",
            "C. w = 20 metres"
          ],
          "correctIndex": 0,
          "hint": "Vertex w = -b/(2a) = -30 / (2 × -1) = 15.",
          "feedbackOk": "Optimal symmetry! w = 15 m and l = 15 m (a square gives maximum area)!",
          "feedbackBad": "w = -30 / -2 = 15 metres."
        },
        {
          "stageNum": 2,
          "narrative": "What is the maximum enclosed area achieved by this square charbagh?",
          "challenge": "Calculate A = 15 × 15.",
          "options": [
            "A. 225 m²",
            "B. 200 m²",
            "C. 250 m²"
          ],
          "correctIndex": 0,
          "hint": "15 × 15 = 225 m².",
          "feedbackOk": "Fountains surge across 225 square metres of fragrant roses!",
          "feedbackBad": "15² = 225 m²."
        },
        {
          "stageNum": 3,
          "narrative": "If the gardener wanted an area of exactly 216 m²: w(30 - w) = 216 $\\rightarrow$ w² - 30w + 216 = 0.",
          "challenge": "Factorize to find the two possible widths.",
          "options": [
            "A. w = 12 m and w = 18 m",
            "B. w = 10 m and w = 20 m",
            "C. w = 14 m and w = 16 m"
          ],
          "correctIndex": 0,
          "hint": "12 × 18 = 216 and 12 + 18 = 30. (w - 12)(w - 18) = 0.",
          "feedbackOk": "Dimensions verified: 12m by 18m garden matches 216 m²!",
          "feedbackBad": "(w - 12)(w - 18) = 0 $\\rightarrow$ w = 12 or 18."
        }
      ],
      "reward": "🌸 Charbagh Landscape Master + 30 XP",
      "learningOutcome": "Parabolic area optimization, square-maximal theorem, and factoring quadratic equations."
    },
    {
      "id": "c9_q5",
      "title": "The Cannonball Trajectory Mystery",
      "theme": "Historical Ballistics",
      "intro": "Artillery engineers at the Daulatabad fort calibrate brass cannons. The trajectory of a 12-pounder cannonball is modeled by quadratic ballistics.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The cannonball's height in metres at horizontal distance x metres is y = -0.005x² + x.",
          "challenge": "Factorize y = -0.005x(x - 200) to find how far downrange the cannonball lands (y = 0).",
          "options": [
            "A. x = 200 metres",
            "B. x = 150 metres",
            "C. x = 250 metres"
          ],
          "correctIndex": 0,
          "hint": "-0.005x(x - 200) = 0 gives roots at x = 0 (cannon muzzle) and x = 200 (target).",
          "feedbackOk": "Direct hit on the distant sand rampart at 200 metres!",
          "feedbackBad": "x = 200 metres."
        },
        {
          "stageNum": 2,
          "narrative": "At what horizontal distance x does the cannonball achieve its highest apex altitude?",
          "challenge": "Find the midpoint between 0 and 200 metres.",
          "options": [
            "A. x = 100 metres",
            "B. x = 80 metres",
            "C. x = 120 metres"
          ],
          "correctIndex": 0,
          "hint": "By symmetry of a parabola, apex occurs at the midpoint: 200 / 2 = 100 metres.",
          "feedbackOk": "Apex is reached at exactly 100 metres downrange!",
          "feedbackBad": "Midpoint is 200 / 2 = 100 metres."
        },
        {
          "stageNum": 3,
          "narrative": "What is the peak altitude in metres of the cannonball at x = 100 m?",
          "challenge": "Calculate y = -0.005(100)² + 100 = -0.005(10000) + 100.",
          "options": [
            "A. 50 metres",
            "B. 40 metres",
            "C. 60 metres"
          ],
          "correctIndex": 0,
          "hint": "-50 + 100 = 50 metres.",
          "feedbackOk": "Trajectory validated! Peak apex is 50 metres high!",
          "feedbackBad": "-50 + 100 = 50 metres."
        }
      ],
      "reward": "💥 Fort Ballistics Commander + 30 XP",
      "learningOutcome": "Factoring quadratic equations with decimal coefficients, parabolic symmetry, and peak evaluation."
    },
    {
      "id": "c9_q6",
      "title": "The Echo Chamber Acoustics",
      "theme": "Gol Gumbaz Whispering Gallery",
      "intro": "Inside the magnificent Gol Gumbaz in Bijapur, acoustic waves reflect off the parabolic whispering dome. Even the softest whisper echoes 11 times across the chamber.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Sound intensity I at distance d from the dome center satisfies the quadratic equation d² - 12d + 32 = 0.",
          "challenge": "Find the two focal distances d where the whisper reflects most clearly.",
          "options": [
            "A. d = 4 metres and d = 8 metres",
            "B. d = 2 metres and d = 16 metres",
            "C. d = 3 metres and d = 9 metres"
          ],
          "correctIndex": 0,
          "hint": "(d - 4)(d - 8) = 0.",
          "feedbackOk": "Whisper focal points located at 4m and 8m!",
          "feedbackBad": "(d - 4)(d - 8) = 0 $\\rightarrow$ d = 4 and 8."
        },
        {
          "stageNum": 2,
          "narrative": "The dome arch profile is y = -(x - 5)² + 25. What is the dome's maximum central height?",
          "challenge": "Identify the vertex height from vertex form.",
          "options": [
            "A. 25 metres",
            "B. 20 metres",
            "C. 30 metres"
          ],
          "correctIndex": 0,
          "hint": "In y = -(x - h)² + k, maximum is k = 25.",
          "feedbackOk": "Architectural grandeur! The dome ceiling towers 25 metres high!",
          "feedbackBad": "Vertex height is 25 metres."
        },
        {
          "stageNum": 3,
          "narrative": "At what positions x does the dome arch meet the support gallery floor (y = 0)?",
          "challenge": "Solve -(x - 5)² + 25 = 0 $\\rightarrow$ (x - 5)² = 25.",
          "options": [
            "A. x = 0 metres and x = 10 metres",
            "B. x = 5 metres only",
            "C. x = -5 and +5"
          ],
          "correctIndex": 0,
          "hint": "x - 5 = ±5 $\\rightarrow$ x = 5 + 5 = 10, or x = 5 - 5 = 0.",
          "feedbackOk": "The acoustic gallery span is 10 metres wide!",
          "feedbackBad": "x = 0 and 10."
        }
      ],
      "reward": "🏛️ Whispering Gallery Acoustic Master + 30 XP",
      "learningOutcome": "Factoring quadratics, vertex form interpretation, and square-root method for quadratic roots."
    },
    {
      "id": "c9_q7",
      "title": "The Secret Vault of Hampi",
      "theme": "Vijayanagara Royal Underground",
      "intro": "Archaeologists discover a subterranean chamber under the Queen's Bath in Hampi. The stone vault requires deciphering area polynomials.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A stone relief panel has area A = x² + 7x + 12. Its width is (x + 3).",
          "challenge": "Find the algebraic expression for its length by factoring.",
          "options": [
            "A. (x + 4)",
            "B. (x + 5)",
            "C. (x + 2)"
          ],
          "correctIndex": 0,
          "hint": "Factor x² + 7x + 12 = (x + 3)(x + 4).",
          "feedbackOk": "Length is (x + 4)! The stone panel slots into the wall!",
          "feedbackBad": "(x + 3)(x + 4) = x² + 7x + 12."
        },
        {
          "stageNum": 2,
          "narrative": "If the area of the panel is 30 m², solve x² + 7x + 12 = 30 $\\rightarrow$ x² + 7x - 18 = 0.",
          "challenge": "Find the positive value of x.",
          "options": [
            "A. x = 2 metres",
            "B. x = 3 metres",
            "C. x = 4 metres"
          ],
          "correctIndex": 0,
          "hint": "(x + 9)(x - 2) = 0. Since x > 0, x = 2.",
          "feedbackOk": "Dimensions confirmed: 5m by 6m = 30 m²!",
          "feedbackBad": "(x + 9)(x - 2) = 0 $\\rightarrow$ x = 2."
        },
        {
          "stageNum": 3,
          "narrative": "A second door has quadratic lock x² - 16 = 0.",
          "challenge": "Find the positive root x using difference of squares.",
          "options": [
            "A. x = 4",
            "B. x = 8",
            "C. x = 16"
          ],
          "correctIndex": 0,
          "hint": "(x - 4)(x + 4) = 0 $\\rightarrow$ x = 4.",
          "feedbackOk": "The vault door opens to reveal royal bronze seals!",
          "feedbackBad": "x² = 16 $\\rightarrow$ x = 4."
        }
      ],
      "reward": "🏺 Hampi Epigraphist Seal + 30 XP",
      "learningOutcome": "Polynomial division, factoring trinomials, and difference of squares."
    },
    {
      "id": "c9_q8",
      "title": "The Diamond Mine Shaft Trajectory",
      "theme": "Kollur Diamond Mine",
      "intro": "In the 17th-century Kollur mine where the Hope Diamond was found, miners haul heavy ore carts along an inclined parabolic shaft.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The depth y of the shaft over horizontal distance x is y = x² - 10x.",
          "challenge": "Find the lowest bottom point of the shaft (vertex x = -b/(2a)).",
          "options": [
            "A. x = 5 metres (depth = -25 metres)",
            "B. x = 10 metres",
            "C. x = 4 metres"
          ],
          "correctIndex": 0,
          "hint": "x = 10 / 2 = 5. Depth y = 5² - 10(5) = 25 - 50 = -25.",
          "feedbackOk": "Deepest vein located at x = 5m with depth 25m below entry!",
          "feedbackBad": "x = 5, y = -25."
        },
        {
          "stageNum": 2,
          "narrative": "At what horizontal distance x does the shaft return to the surface level (y = 0)?",
          "challenge": "Solve x² - 10x = 0 $\\rightarrow$ x(x - 10) = 0.",
          "options": [
            "A. x = 10 metres",
            "B. x = 8 metres",
            "C. x = 12 metres"
          ],
          "correctIndex": 0,
          "hint": "Roots are x = 0 and x = 10.",
          "feedbackOk": "Shaft exit reaches daylight at 10 metres!",
          "feedbackBad": "x(x - 10) = 0 $\\rightarrow$ x = 10."
        },
        {
          "stageNum": 3,
          "narrative": "A reinforced steel beam is placed across the shaft at depth y = -16 metres: x² - 10x = -16 $\\rightarrow$ x² - 10x + 16 = 0.",
          "challenge": "Find the two horizontal positions where the beam anchors into rock.",
          "options": [
            "A. x = 2 metres and x = 8 metres",
            "B. x = 4 metres and x = 6 metres",
            "C. x = 1 metre and x = 9 metres"
          ],
          "correctIndex": 0,
          "hint": "(x - 2)(x - 8) = 0.",
          "feedbackOk": "Support beam securely bolted at x = 2m and x = 8m!",
          "feedbackBad": "(x - 2)(x - 8) = 0 $\\rightarrow$ x = 2 and 8."
        }
      ],
      "reward": "💎 Mining Shaft Engineer + 30 XP",
      "learningOutcome": "Parabolic vertex depth, factoring binomials, and solving quadratics at non-zero levels."
    },
    {
      "id": "c9_q9",
      "title": "The Flying Carpet Descent Path",
      "theme": "Arabian Nights Fantasy Mathematics",
      "intro": "A magical flying carpet glides down from the palace minaret. Its descent profile is governed by a smooth quadratic curve.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Altitude h (in metres) at horizontal distance d is given by h = (d - 10)² + 5.",
          "challenge": "What is the lowest altitude reached by the carpet during its swoop?",
          "options": [
            "A. 5 metres",
            "B. 10 metres",
            "C. 0 metres"
          ],
          "correctIndex": 0,
          "hint": "The squared term (d - 10)² has minimum value 0, so h minimum is 5.",
          "feedbackOk": "The carpet skims smoothly 5 metres above the palace courtyard!",
          "feedbackBad": "Minimum altitude is 5 metres when d = 10."
        },
        {
          "stageNum": 2,
          "narrative": "At what horizontal distance d does the lowest swoop point occur?",
          "challenge": "Find d when (d - 10) = 0.",
          "options": [
            "A. d = 10 metres",
            "B. d = 5 metres",
            "C. d = 15 metres"
          ],
          "correctIndex": 0,
          "hint": "d - 10 = 0 $\\rightarrow$ d = 10.",
          "feedbackOk": "Navigation true! d = 10 metres!",
          "feedbackBad": "d = 10 metres."
        },
        {
          "stageNum": 3,
          "narrative": "The carpet lands gently on a silk pavilion at h = 14 metres: (d - 10)² + 5 = 14 $\\rightarrow$ (d - 10)² = 9.",
          "challenge": "Find the positive landing distance d beyond the swoop point.",
          "options": [
            "A. d = 13 metres",
            "B. d = 7 metres",
            "C. d = 15 metres"
          ],
          "correctIndex": 0,
          "hint": "d - 10 = +3 $\\rightarrow$ d = 13 metres.",
          "feedbackOk": "Perfect landing! The carpet touches down gently on the pavilion!",
          "feedbackBad": "d - 10 = 3 $\\rightarrow$ d = 13 metres."
        }
      ],
      "reward": "🧞 Magic Carpet Navigator + 30 XP",
      "learningOutcome": "Vertex form parabola, finding minima, and solving quadratic square roots."
    },
    {
      "id": "c9_q10",
      "title": "The Astrologer's Elliptical Orbit",
      "theme": "Ancient Indian Planetary Model",
      "intro": "Astronomer Varahamihira calculates the quadratic approximation of a comet's trajectory as it swings past the sun.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Comet distance R (in astronomical units) at angle parameter t is R(t) = t² - 8t + 18.",
          "challenge": "Find the minimum distance (perihelion) of the comet from the sun.",
          "options": [
            "A. 2 AU at t = 4",
            "B. 4 AU at t = 2",
            "C. 3 AU at t = 3"
          ],
          "correctIndex": 0,
          "hint": "Vertex t = 8/2 = 4. R(4) = 16 - 32 + 18 = 2 AU.",
          "feedbackOk": "Perihelion calculated: 2 AU closest approach!",
          "feedbackBad": "t = 4, R(4) = 2 AU."
        },
        {
          "stageNum": 2,
          "narrative": "At what t values does the comet cross the 9 AU asteroid belt: t² - 8t + 18 = 9 $\\rightarrow$ t² - 8t + 9 = 0?",
          "challenge": "Calculate the discriminant D = b² - 4ac.",
          "options": [
            "A. D = 28 (Two real crossing points)",
            "B. D = 0",
            "C. D = -8 (No crossing)"
          ],
          "correctIndex": 0,
          "hint": "D = (-8)² - 4(1)(9) = 64 - 36 = 28 > 0.",
          "feedbackOk": "Discriminant D = 28 > 0 proves the comet crosses the belt twice!",
          "feedbackBad": "64 - 36 = 28."
        },
        {
          "stageNum": 3,
          "narrative": "If the comet crosses a outer dust ring at R = 33 AU: t² - 8t + 18 = 33 $\\rightarrow$ t² - 8t - 15 = 0.",
          "challenge": "Find the positive time value t using factoring or formula.",
          "options": [
            "A. t = 9.5 (approx)",
            "B. t = 8.5",
            "C. t = 10.0"
          ],
          "correctIndex": 0,
          "hint": "t = [8 + √(64 - 4(-15))] / 2 = [8 + √124] / 2 ≈ [8 + 11.135] / 2 ≈ 9.57.",
          "feedbackOk": "Orbital path charted across the ancient Sanskrit celestial atlas!",
          "feedbackBad": "t ≈ 9.5."
        }
      ],
      "reward": "🌠 Celestial Astrologer Crown + 30 XP",
      "learningOutcome": "Quadratic minimum evaluation, discriminant analysis, and quadratic formula application."
    }
  ],
  "10": [
    {
      "id": "c10_q1",
      "title": "The Quadratic Enigma of Aryabhata",
      "theme": "Classical Indian Mathematical Renaissance",
      "intro": "You study the Sanskrit verses of Aryabhata's Aryabhatiya (499 CE). The master presents a quadratic challenge that stumped court scholars for generations.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Aryabhata asks: 'A natural number when decreased by 3 is equal to 28 divided by the number itself: x - 3 = 28/x.'",
          "challenge": "Multiply by x and rearrange to standard form: x² - 3x - 28 = 0. Find the positive natural number x.",
          "options": [
            "A. x = 7",
            "B. x = 4",
            "C. x = 8"
          ],
          "correctIndex": 0,
          "hint": "Factor (x - 7)(x + 4) = 0. Since x is a natural number, x = 7.",
          "feedbackOk": "Ancient verse decrypted! x = 7. 7 - 3 = 4 and 28/7 = 4!",
          "feedbackBad": "(x - 7)(x + 4) = 0 $\\rightarrow$ natural number x = 7."
        },
        {
          "stageNum": 2,
          "narrative": "Aryabhata's second verse states: 'The sum of squares of two consecutive odd positive integers is 290: (2n + 1)² + (2n + 3)² = 290.'",
          "challenge": "Simplifying gives 8n² + 16n + 10 = 290 $\\rightarrow$ n² + 2n - 35 = 0. Find positive integer n.",
          "options": [
            "A. n = 5 (numbers are 11 and 13)",
            "B. n = 7",
            "C. n = 6"
          ],
          "correctIndex": 0,
          "hint": "(n + 7)(n - 5) = 0 $\\rightarrow$ n = 5. Integers: 2(5) + 1 = 11, and 13. 11² + 13² = 121 + 169 = 290.",
          "feedbackOk": "Profound harmony! 11² + 13² = 290!",
          "feedbackBad": "(n + 7)(n - 5) = 0 $\\rightarrow$ n = 5."
        },
        {
          "stageNum": 3,
          "narrative": "The master presents the general quadratic: 2x² - 7x + 3 = 0. He asks for the exact roots using the quadratic formula.",
          "challenge": "Use x = [-b ± √(b² - 4ac)] / (2a) to find the two roots.",
          "options": [
            "A. x = 3 and x = 1/2",
            "B. x = 2 and x = 1/3",
            "C. x = -3 and x = -1/2"
          ],
          "correctIndex": 0,
          "hint": "D = 49 - 24 = 25. √25 = 5. x = (7 ± 5) / 4 $\\rightarrow$ 12/4 = 3, and 2/4 = 1/2.",
          "feedbackOk": "Aryabhata bows with respect! You have mastered the quadratic formula!",
          "feedbackBad": "x = (7 ± 5) / 4 gives 3 and 1/2."
        }
      ],
      "reward": "📜 Aryabhatiya Grand Laureate + 30 XP",
      "learningOutcome": "Rational algebraic equation conversion to quadratic, consecutive integer modeling, and quadratic formula mastery."
    },
    {
      "id": "c10_q2",
      "title": "The Rocket Launch Apogee",
      "theme": "Aerospace Propulsion & ISRO Telemetry",
      "intro": "Inside the Satish Dhawan Space Centre launch control room in Sriharikota, telemetry computers track the trajectory of a PSLV stage booster.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A solid booster's altitude h (in metres) t seconds after separation is given by h(t) = -4.9t² + 98t + 1000.",
          "challenge": "At what time t does the booster reach its peak apogee altitude?",
          "options": [
            "A. t = 10 seconds",
            "B. t = 12 seconds",
            "C. t = 8 seconds"
          ],
          "correctIndex": 0,
          "hint": "t = -b/(2a) = -98 / (2 × -4.9) = -98 / -9.8 = 10 seconds.",
          "feedbackOk": "Apogee achieved right on schedule at t = 10 seconds!",
          "feedbackBad": "t = 98 / 9.8 = 10 seconds."
        },
        {
          "stageNum": 2,
          "narrative": "What is the peak altitude (apogee) in metres at t = 10 seconds?",
          "challenge": "Calculate h(10) = -4.9(100) + 98(10) + 1000.",
          "options": [
            "A. 1490 metres",
            "B. 1380 metres",
            "C. 1520 metres"
          ],
          "correctIndex": 0,
          "hint": "-490 + 980 + 1000 = 1490 metres.",
          "feedbackOk": "Booster apogee confirmed at 1490 metres altitude!",
          "feedbackBad": "-490 + 980 + 1000 = 1490 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Parachute deployment requires the booster to descend to altitude h = 600 metres: -4.9t² + 98t + 1000 = 600 $\\rightarrow$ -4.9t² + 98t + 400 = 0.",
          "challenge": "Calculate the discriminant D to verify if real solutions exist for parachute deployment.",
          "options": [
            "A. D = 17,444 (D > 0, real solutions exist)",
            "B. D < 0 (Impossible)",
            "C. D = 0"
          ],
          "correctIndex": 0,
          "hint": "D = b² - 4ac = 98² - 4(-4.9)(400) = 9604 + 7840 = 17,444 > 0.",
          "feedbackOk": "Deployment window valid! Parachutes unfurl successfully!",
          "feedbackBad": "D = 9604 + 7840 = 17,444 > 0."
        }
      ],
      "reward": "🚀 ISRO Launch Commander + 30 XP",
      "learningOutcome": "Quadratic apogee determination, vertex substitution, and discriminant real-root verification."
    },
    {
      "id": "c10_q3",
      "title": "The Supersonic Aerodynamic Curve",
      "theme": "Fighter Jet Wind Tunnel Testing",
      "intro": "Aerospace engineers at HAL Bangalore test the delta wing profile of a supersonic Tejas fighter jet inside a transonic wind tunnel.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The wing upper surface profile is modeled by y = -0.04x² + 0.4x, where x is chord distance in metres.",
          "challenge": "Find the maximum thickness (apex y) of the wing profile.",
          "options": [
            "A. y = 1.0 metre at x = 5 m",
            "B. y = 0.8 metres at x = 4 m",
            "C. y = 1.2 metres at x = 6 m"
          ],
          "correctIndex": 0,
          "hint": "x = -0.4 / (2 × -0.04) = 5 m. y = -0.04(25) + 0.4(5) = -1.0 + 2.0 = 1.0 m.",
          "feedbackOk": "Wind tunnel laminar airflow verified at 1.0m maximum thickness!",
          "feedbackBad": "x = 5 m, y = 1.0 m."
        },
        {
          "stageNum": 2,
          "narrative": "Drag coefficient C(M) as a function of Mach number M around sound barrier (M = 1) is C(M) = 0.08M² - 0.16M + 0.10.",
          "challenge": "Find the Mach number M where wave drag is at its local minimum.",
          "options": [
            "A. Mach 1.0",
            "B. Mach 0.9",
            "C. Mach 1.1"
          ],
          "correctIndex": 0,
          "hint": "Vertex M = -(-0.16) / (2 × 0.08) = 0.16 / 0.16 = 1.0.",
          "feedbackOk": "Transonic shock wave stabilized at Mach 1.0!",
          "feedbackBad": "M = 0.16 / 0.16 = 1.0."
        },
        {
          "stageNum": 3,
          "narrative": "Engine fuel consumption F(v) = 2v² - 80v + 900. At what speed v is fuel burn minimized?",
          "challenge": "Find v = -b/(2a).",
          "options": [
            "A. v = 20 m/s",
            "B. v = 25 m/s",
            "C. v = 15 m/s"
          ],
          "correctIndex": 0,
          "hint": "v = 80 / (2 × 2) = 20 m/s.",
          "feedbackOk": "Supercruise efficiency achieved at v = 20 m/s!",
          "feedbackBad": "v = 80 / 4 = 20 m/s."
        }
      ],
      "reward": "✈️ Supersonic Test Pilot + 30 XP",
      "learningOutcome": "Aerodynamic quadratic vertex calculations, local minimum determination, and real engineering quadratics."
    },
    {
      "id": "c10_q4",
      "title": "The Bridge Suspension Cable Sag",
      "theme": "Bandra-Worli Sea Link Engineering",
      "intro": "Structural engineers monitoring Mumbai's Bandra-Worli Sea Link calculate cable tension and parabolic sag under heavy monsoon traffic loads.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The stay cable profile between two pylons 80 metres apart follows the parabola y = 0.005x² - 0.4x + 12, where x is distance in metres from the first pylon.",
          "challenge": "Find the position x of the lowest cable point (vertex).",
          "options": [
            "A. x = 40 metres (exact midpoint)",
            "B. x = 35 metres",
            "C. x = 45 metres"
          ],
          "correctIndex": 0,
          "hint": "x = -(-0.4) / (2 × 0.005) = 0.4 / 0.01 = 40 metres.",
          "feedbackOk": "Symmetric sag confirmed at midpoint x = 40 metres!",
          "feedbackBad": "x = 0.4 / 0.01 = 40 metres."
        },
        {
          "stageNum": 2,
          "narrative": "What is the minimum height y in metres of the cable at x = 40 m?",
          "challenge": "Evaluate y = 0.005(40)² - 0.4(40) + 12.",
          "options": [
            "A. 4 metres",
            "B. 5 metres",
            "C. 3.5 metres"
          ],
          "correctIndex": 0,
          "hint": "y = 0.005(1600) - 16 + 12 = 8 - 16 + 12 = 4 metres.",
          "feedbackOk": "Safety clearance verified: cable clears bridge deck by 4 metres!",
          "feedbackBad": "8 - 16 + 12 = 4 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Under peak monsoon winds, a sensor alarm sounds if cable height drops below 3 metres: 0.005x² - 0.4x + 12 = 3 $\\rightarrow$ 0.005x² - 0.4x + 9 = 0.",
          "challenge": "Calculate the discriminant D = b² - 4ac.",
          "options": [
            "A. D = -0.02 (D < 0, height never drops to 3m)",
            "B. D > 0",
            "C. D = 0"
          ],
          "correctIndex": 0,
          "hint": "D = (-0.4)² - 4(0.005)(9) = 0.16 - 0.18 = -0.02 < 0. No real roots means cable never reaches 3 metres.",
          "feedbackOk": "Structural safety certificate issued! Cable is structurally immune to dropping to 3m!",
          "feedbackBad": "0.16 - 0.18 = -0.02 < 0."
        }
      ],
      "reward": "🌉 Sea Link Structural Engineer + 30 XP",
      "learningOutcome": "Parabolic bridge sag modeling, vertex evaluation, and negative discriminant as non-intersection proof."
    },
    {
      "id": "c10_q5",
      "title": "The Hydroelectric Dam Sluice Gate",
      "theme": "Bhakra Nangal Hydroelectric Project",
      "intro": "At the Bhakra Nangal Dam, engineers control floodgates where water pressure and parabolic discharge vectors dictate hydraulic safety.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "A parabolic sluice opening has profile y = -0.25x² + 4, where y is gate opening height in metres.",
          "challenge": "Find the horizontal width of the gate opening at the sill level (y = 0).",
          "options": [
            "A. 8 metres (from -4 to +4)",
            "B. 4 metres",
            "C. 6 metres"
          ],
          "correctIndex": 0,
          "hint": "-0.25x² + 4 = 0 $\\rightarrow$ 0.25x² = 4 $\\rightarrow$ x² = 16 $\\rightarrow$ x = ±4. Span = 8 m.",
          "feedbackOk": "Sill span verified at 8 metres wide!",
          "feedbackBad": "x² = 16 $\\rightarrow$ x = ±4 $\\rightarrow$ span = 8 m."
        },
        {
          "stageNum": 2,
          "narrative": "Water discharge volume Q in cubic metres per second depends on head height h: Q = 10h² + 40h. If required flood discharge is Q = 320 m³/s.",
          "challenge": "Solve 10h² + 40h - 320 = 0 $\\rightarrow$ h² + 4h - 32 = 0 for positive head height h.",
          "options": [
            "A. h = 4 metres",
            "B. h = 6 metres",
            "C. h = 5 metres"
          ],
          "correctIndex": 0,
          "hint": "(h + 8)(h - 4) = 0 $\\rightarrow$ h = 4 metres.",
          "feedbackOk": "Flood discharge regulated: head height set to 4 metres!",
          "feedbackBad": "(h + 8)(h - 4) = 0 $\\rightarrow$ h = 4 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Turbine efficiency E(rpm) = -0.01(rpm - 300)² + 95. What rotational speed yields maximum efficiency?",
          "challenge": "Identify the optimal rpm from vertex form.",
          "options": [
            "A. 300 rpm",
            "B. 250 rpm",
            "C. 350 rpm"
          ],
          "correctIndex": 0,
          "hint": "Maximum occurs when rpm - 300 = 0 $\\rightarrow$ rpm = 300.",
          "feedbackOk": "Turbines hum at peak 95% efficiency producing clean hydro power!",
          "feedbackBad": "rpm = 300."
        }
      ],
      "reward": "⚡ Bhakra Hydro Turbomachinery Expert + 30 XP",
      "learningOutcome": "Factoring quadratic equations, quadratic discharge solving, and vertex efficiency optimization."
    },
    {
      "id": "c10_q6",
      "title": "The Radar Beacon Intercept",
      "theme": "Air Traffic Radar Vectoring",
      "intro": "At Delhi International Airport radar center, air traffic controllers vector incoming commercial airliners along parabolic descent corridors.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "An aircraft's radar track follows y = x² - 8x + 12. Controllers need to know the runway intercept points (y = 0).",
          "challenge": "Solve x² - 8x + 12 = 0 by factoring.",
          "options": [
            "A. x = 2 km and x = 6 km",
            "B. x = 3 km and x = 4 km",
            "C. x = 1 km and x = 12 km"
          ],
          "correctIndex": 0,
          "hint": "(x - 2)(x - 6) = 0.",
          "feedbackOk": "Radar beacons locked at 2 km and 6 km markers!",
          "feedbackBad": "(x - 2)(x - 6) = 0 $\\rightarrow$ x = 2 and 6."
        },
        {
          "stageNum": 2,
          "narrative": "What is the closest approach distance (lowest y value) of the aircraft along this corridor?",
          "challenge": "Vertex x = 4 km. Evaluate y(4) = 16 - 32 + 12.",
          "options": [
            "A. -4 km",
            "B. -6 km",
            "C. -2 km"
          ],
          "correctIndex": 0,
          "hint": "16 - 32 + 12 = -4 km.",
          "feedbackOk": "Closest lateral approach is 4 km safely within holding pattern!",
          "feedbackBad": "16 - 32 + 12 = -4."
        },
        {
          "stageNum": 3,
          "narrative": "A storm front intersects the corridor along the line y = 4x - 24: x² - 8x + 12 = 4x - 24 $\\rightarrow$ x² - 12x + 36 = 0.",
          "challenge": "Solve (x - 6)² = 0 to find the single tangent intercept point.",
          "options": [
            "A. x = 6 km (single tangent point)",
            "B. x = 4 km and x = 8 km",
            "C. No intercept"
          ],
          "correctIndex": 0,
          "hint": "(x - 6)² = 0 $\\rightarrow$ x = 6 (D = 0 means tangent point).",
          "feedbackOk": "Aircraft vector adjusted to graze storm perimeter safely!",
          "feedbackBad": "x = 6 km."
        }
      ],
      "reward": "📡 Air Traffic Radar Controller + 30 XP",
      "learningOutcome": "Factoring quadratic equations, minimum evaluation, and solving line-parabola intersections with D = 0."
    },
    {
      "id": "c10_q7",
      "title": "The Solar Reflector Parabolic Furnace",
      "theme": "Renewable Energy High-Temp Research",
      "intro": "Scientists at the National Solar Thermal Facility design a giant parabolic mirror dish that concentrates sunlight to melt titanium.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The solar concentrator mirror has cross-section y = (1/8)x². The melting crucible must sit at the focal point (0, f) where f = 1/(4a).",
          "challenge": "Calculate the focal height f when a = 1/8.",
          "options": [
            "A. f = 2 metres",
            "B. f = 1 metre",
            "C. f = 4 metres"
          ],
          "correctIndex": 0,
          "hint": "f = 1 / (4 × 1/8) = 1 / (1/2) = 2 metres.",
          "feedbackOk": "Titanium crucible aligned at focal height f = 2 metres!",
          "feedbackBad": "f = 1 / (4 × 1/8) = 2 metres."
        },
        {
          "stageNum": 2,
          "narrative": "The outer rim of the mirror is at height y = 8 metres: (1/8)x² = 8 $\\rightarrow$ x² = 64.",
          "challenge": "Find the total aperture diameter of the solar collector dish.",
          "options": [
            "A. 16 metres (from -8 to +8)",
            "B. 8 metres",
            "C. 32 metres"
          ],
          "correctIndex": 0,
          "hint": "x = ±8 $\\rightarrow$ total diameter = 8 - (-8) = 16 metres.",
          "feedbackOk": "Giant 16-metre collector concentrates 3000°C thermal energy!",
          "feedbackBad": "x = ±8 $\\rightarrow$ diameter is 16 metres."
        },
        {
          "stageNum": 3,
          "narrative": "Reflected heat flux density is modeled by H(r) = -50r² + 1200, where r is distance from focal center in cm.",
          "challenge": "What is the peak heat flux at the exact focal center (r = 0)?",
          "options": [
            "A. 1200 W/cm²",
            "B. 1000 W/cm²",
            "C. 1500 W/cm²"
          ],
          "correctIndex": 0,
          "hint": "When r = 0, H(0) = 1200.",
          "feedbackOk": "Titanium ingots liquify in the solar furnace! Peak flux is 1200 W/cm²!",
          "feedbackBad": "H(0) = 1200 W/cm²."
        }
      ],
      "reward": "☀️ Solar Thermochemical Master + 30 XP",
      "learningOutcome": "Parabolic focal properties (f = 1/4a), aperture span calculation, and peak thermal modeling."
    },
    {
      "id": "c10_q8",
      "title": "The Quantum Particle Energy Well",
      "theme": "Quantum Physics Simulation",
      "intro": "Inside a nanotechnology research cleanroom, physicists model an electron trapped in a one-dimensional parabolic potential energy well.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The potential energy V(x) in electron-volts (eV) is given by V(x) = 3x² - 12x + 15, where x is displacement in nanometres.",
          "challenge": "Find the ground state equilibrium position x where potential energy is minimized.",
          "options": [
            "A. x = 2 nanometres",
            "B. x = 3 nanometres",
            "C. x = 1 nanometre"
          ],
          "correctIndex": 0,
          "hint": "x = -b/(2a) = 12 / (2 × 3) = 12 / 6 = 2 nm.",
          "feedbackOk": "Ground state located at x = 2 nm!",
          "feedbackBad": "x = 12 / 6 = 2 nm."
        },
        {
          "stageNum": 2,
          "narrative": "What is the ground state minimum energy V(2) in electron-volts?",
          "challenge": "Calculate V(2) = 3(4) - 12(2) + 15.",
          "options": [
            "A. 3 eV",
            "B. 5 eV",
            "C. 0 eV"
          ],
          "correctIndex": 0,
          "hint": "12 - 24 + 15 = 3 eV.",
          "feedbackOk": "Quantum ground state energy verified at 3 eV!",
          "feedbackBad": "12 - 24 + 15 = 3 eV."
        },
        {
          "stageNum": 3,
          "narrative": "A photon strikes the electron, raising its energy to 15 eV: 3x² - 12x + 15 = 15 $\\rightarrow$ 3x² - 12x = 0.",
          "challenge": "Find the two classical turning points x of the excited electron.",
          "options": [
            "A. x = 0 nm and x = 4 nm",
            "B. x = 1 nm and x = 3 nm",
            "C. x = -2 nm and x = +2 nm"
          ],
          "correctIndex": 0,
          "hint": "3x(x - 4) = 0 $\\rightarrow$ x = 0 and x = 4 nm.",
          "feedbackOk": "Quantum oscillation bounds mapped between 0 and 4 nanometres!",
          "feedbackBad": "3x(x - 4) = 0 $\\rightarrow$ x = 0 and 4 nm."
        }
      ],
      "reward": "⚛️ Quantum Nanophysicist Medal + 30 XP",
      "learningOutcome": "Parabolic potential energy minima, vertex substitution, and solving excited state turning point roots."
    },
    {
      "id": "c10_q9",
      "title": "The Economic Monopoly Equilibrium",
      "theme": "Microeconomic Market Pricing",
      "intro": "A semiconductor chip manufacturer is the sole supplier of smart agricultural soil sensors. Economic pricing models dictate profit maximization.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "Total daily revenue in thousands of rupees is R(q) = 100q - 2q², where q is the production batch quantity.",
          "challenge": "What batch quantity q yields the maximum revenue for the enterprise?",
          "options": [
            "A. q = 25 batches",
            "B. q = 30 batches",
            "C. q = 20 batches"
          ],
          "correctIndex": 0,
          "hint": "q = -100 / (2 × -2) = 100 / 4 = 25 batches.",
          "feedbackOk": "Revenue maximized at production volume q = 25 batches!",
          "feedbackBad": "q = 100 / 4 = 25 batches."
        },
        {
          "stageNum": 2,
          "narrative": "What is the peak gross revenue R(25) in thousands of rupees?",
          "challenge": "Evaluate R(25) = 100(25) - 2(625).",
          "options": [
            "A. ₹1250 thousand (₹12.5 Lakhs)",
            "B. ₹1200 thousand",
            "C. ₹1500 thousand"
          ],
          "correctIndex": 0,
          "hint": "2500 - 1250 = ₹1250 thousand.",
          "feedbackOk": "Financial forecast verified: ₹12.5 Lakhs peak daily revenue!",
          "feedbackBad": "2500 - 1250 = 1250."
        },
        {
          "stageNum": 3,
          "narrative": "If production costs are C(q) = 20q + 300, profit P(q) = R(q) - C(q) = -2q² + 80q - 300. At what quantities does the business break even (P = 0)?",
          "challenge": "Solve -2q² + 80q - 300 = 0 $\\rightarrow$ q² - 40q + 150 = 0.",
          "options": [
            "A. q ≈ 4.2 batches and q ≈ 35.8 batches",
            "B. q = 5 and q = 35",
            "C. q = 10 and q = 30"
          ],
          "correctIndex": 0,
          "hint": "D = 1600 - 600 = 1000. √1000 ≈ 31.62. q = (40 ± 31.62) / 2 $\\rightarrow$ 4.19 and 35.81.",
          "feedbackOk": "Commercial viability corridor established between 5 and 35 batches!",
          "feedbackBad": "q ≈ 4.2 and 35.8 batches."
        }
      ],
      "reward": "📊 Chief Econometrician + 30 XP",
      "learningOutcome": "Revenue parabolic optimization, quadratic profit modeling, and break-even quadratic formula solving."
    },
    {
      "id": "c10_q10",
      "title": "The Starlight Gravitational Lens",
      "theme": "General Relativity & Astrophysics",
      "intro": "Astrophysicists at the Indian Institute of Astrophysics analyze light rays from a distant quasar bent around a massive galaxy cluster acting as a gravitational lens.",
      "stages": [
        {
          "stageNum": 1,
          "narrative": "The optical deviation angle θ (in arcseconds) as a function of impact parameter b (in light-years) is modeled by the quadratic relation b² - 14b + 40 = 0.",
          "challenge": "Solve for the two impact parameters b producing Einstein cross ring images.",
          "options": [
            "A. b = 4 light-years and b = 10 light-years",
            "B. b = 2 and b = 20 light-years",
            "C. b = 5 and b = 8 light-years"
          ],
          "correctIndex": 0,
          "hint": "(b - 4)(b - 10) = 0.",
          "feedbackOk": "Einstein cross images confirmed at b = 4 and 10 light-years!",
          "feedbackBad": "(b - 4)(b - 10) = 0 $\\rightarrow$ b = 4 and 10."
        },
        {
          "stageNum": 2,
          "narrative": "The magnification brightness factor M(b) = -0.5b² + 7b + 1.",
          "challenge": "Find the impact parameter b that produces maximum gravitational magnification.",
          "options": [
            "A. b = 7 light-years",
            "B. b = 6 light-years",
            "C. b = 8 light-years"
          ],
          "correctIndex": 0,
          "hint": "b = -7 / (2 × -0.5) = 7 / 1 = 7 light-years.",
          "feedbackOk": "Deep space telescope vectors to b = 7 light-years for peak light magnification!",
          "feedbackBad": "b = 7 / 1 = 7 light-years."
        },
        {
          "stageNum": 3,
          "narrative": "What is the peak magnification factor M(7)?",
          "challenge": "Calculate M(7) = -0.5(49) + 7(7) + 1.",
          "options": [
            "A. 25.5 times normal brightness",
            "B. 24.0 times",
            "C. 28.5 times"
          ],
          "correctIndex": 0,
          "hint": "-24.5 + 49 + 1 = 25.5.",
          "feedbackOk": "Sensors detect ancient light magnified 25.5 times from the dawn of the universe!",
          "feedbackBad": "-24.5 + 49 + 1 = 25.5."
        }
      ],
      "reward": "🌌 Gravitational Lens Astrophysicist + 30 XP",
      "learningOutcome": "Relativistic trajectory quadratics, magnification vertex solving, and fractional coefficient parabolas."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORY_QUESTS;
}
