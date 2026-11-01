/**
 * ROOT_GAP Real-Life Learning Scenarios Library
 * 75 Rich, Age-Appropriate Scenarios across Classes 6, 7, 8, 9, and 10 (15 per class)
 * 100% Offline PWA Compatible
 */

var REAL_LIFE_SCENARIOS = {
  "6": [
    {
      "id": "c6_sc1",
      "category": "Cooking",
      "title": "The Hyderabad Biryani Feast",
      "story": "A chef is preparing Hyderabadi Dum Biryani for 12 guests. The recipe requires 3/4 kg of basmati rice for every 4 guests.",
      "problem": "How much rice should the chef measure out for all 12 guests?",
      "options": [
        "1 1/2 kg",
        "2 1/4 kg",
        "3 kg",
        "9/4 kg"
      ],
      "correctIndex": 1,
      "hint": "Find how many groups of 4 guests there are in 12, then multiply by 3/4.",
      "conceptExplanation": "12 guests is 3 groups of 4 (12 ÷ 4 = 3). Multiplying: 3 × 3/4 = 9/4 kg = 2 1/4 kg of rice.",
      "realWorldApplication": "Catering and recipe scaling rely on multiplying whole numbers by fractions to prevent food waste."
    },
    {
      "id": "c6_sc2",
      "category": "Shopping",
      "title": "The Weekend Fabric Market",
      "story": "Ananya is sewing festive cushion covers. She buys a 5-metre roll of silk cloth. Each cushion cover requires 3/8 of a metre.",
      "problem": "After making 8 cushion covers, how many metres of fabric remain on the roll?",
      "options": [
        "1 metre",
        "2 metres",
        "3 metres",
        "1/2 metre"
      ],
      "correctIndex": 1,
      "hint": "Multiply 8 by 3/8 to find the total fabric used, then subtract from 5.",
      "conceptExplanation": "Fabric used: 8 × 3/8 = 24/8 = 3 metres. Remaining: 5 - 3 = 2 metres.",
      "realWorldApplication": "Tailoring and interior design require subtracting fraction multiples from total lengths to manage inventory."
    },
    {
      "id": "c6_sc3",
      "category": "Sports",
      "title": "School Sports Day Relay",
      "story": "In a 1-kilometre relay race, Aryan runs 2/5 km, Bhavya runs 3/10 km, and Charan runs the remainder to the finish ribbon.",
      "problem": "What fraction of a kilometre did Charan run?",
      "options": [
        "3/10 km",
        "1/5 km",
        "1/2 km",
        "7/10 km"
      ],
      "correctIndex": 0,
      "hint": "Convert 2/5 to tenths (4/10) and add to 3/10 before subtracting from 1 whole.",
      "conceptExplanation": "Aryan: 2/5 = 4/10. Aryan + Bhavya: 4/10 + 3/10 = 7/10. Charan runs 1 - 7/10 = 3/10 km.",
      "realWorldApplication": "Athletic pacing, distance tracking, and GPS route split calculations depend on finding common denominators."
    },
    {
      "id": "c6_sc4",
      "category": "Money",
      "title": "The Savings Piggy Bank",
      "story": "Kavya saved ₹600 from festival gifts. She decided to donate 1/3 to a school library and spend 1/4 of the original amount on paints.",
      "problem": "How much money does Kavya have left in her piggy bank?",
      "options": [
        "₹250",
        "₹350",
        "₹200",
        "₹300"
      ],
      "correctIndex": 0,
      "hint": "Calculate 1/3 of ₹600 and 1/4 of ₹600, add them up, and subtract from ₹600.",
      "conceptExplanation": "Donation = 1/3 × 600 = ₹200. Paints = 1/4 × 600 = ₹150. Total spent = ₹350. Remaining = 600 - 350 = ₹250.",
      "realWorldApplication": "Personal budgeting and financial planning divide income into fractional allowances."
    },
    {
      "id": "c6_sc5",
      "category": "Travel",
      "title": "The Express Train Water Tank",
      "story": "A long-distance passenger train departs with a 4000-litre overhead water tank. During the first leg, 3/8 of the water is consumed.",
      "problem": "How many litres of water are still in the tank for the second leg?",
      "options": [
        "1500 litres",
        "2500 litres",
        "2000 litres",
        "1800 litres"
      ],
      "correctIndex": 1,
      "hint": "Find 3/8 of 4000 litres and subtract from 4000, or directly find 5/8 of 4000.",
      "conceptExplanation": "Consumed: (3/8) × 4000 = 1500 litres. Remaining: 4000 - 1500 = 2500 litres (which is 5/8 of 4000).",
      "realWorldApplication": "Railway logistics and utility scheduling monitor reservoir reserves using fractional consumption rates."
    },
    {
      "id": "c6_sc6",
      "category": "Cooking",
      "title": "The Fruit Punch Dispenser",
      "story": "For a classroom party, students mix 2 1/2 litres of mango juice with 1 3/4 litres of sparkling lemon water in a dispenser.",
      "problem": "What is the total volume of fruit punch ready to serve?",
      "options": [
        "4 1/4 litres",
        "3 3/4 litres",
        "4 1/2 litres",
        "4 litres"
      ],
      "correctIndex": 0,
      "hint": "Convert 2 1/2 to 2 2/4 and add the whole numbers and fraction parts.",
      "conceptExplanation": "2 1/2 = 2 2/4. Total = (2 + 1) + (2/4 + 3/4) = 3 + 5/4 = 3 + 1 1/4 = 4 1/4 litres.",
      "realWorldApplication": "Beverage manufacturing and chemical batch compounding require mixed fraction addition."
    },
    {
      "id": "c6_sc7",
      "category": "Construction",
      "title": "The Wooden Bookshelf Plank",
      "story": "A carpenter has an 8-foot wooden plank. He cuts off 3 identical shelves, each measuring 2 1/4 feet long.",
      "problem": "How many feet of the wooden plank are left over as scrap?",
      "options": [
        "1 1/4 feet",
        "1 1/2 feet",
        "1 foot",
        "3/4 foot"
      ],
      "correctIndex": 0,
      "hint": "Multiply 3 by 2 1/4 (which is 6 3/4 feet) and subtract from 8.",
      "conceptExplanation": "Total cut = 3 × 2 1/4 = 6 3/4 feet. Remaining = 8 - 6 3/4 = 1 1/4 feet.",
      "realWorldApplication": "Carpentry and architectural framing rely on fraction subtraction to minimize raw material waste."
    },
    {
      "id": "c6_sc8",
      "category": "Science",
      "title": "The Greenhouse Plant Growth",
      "story": "A botanist tracks a bamboo shoot. On Monday it was 14 1/2 cm tall. By Friday it grew by 3 3/4 cm.",
      "problem": "What is the new recorded height of the bamboo shoot?",
      "options": [
        "18 1/4 cm",
        "17 3/4 cm",
        "18 1/2 cm",
        "17 1/4 cm"
      ],
      "correctIndex": 0,
      "hint": "14 1/2 = 14 2/4. Add 14 2/4 + 3 3/4.",
      "conceptExplanation": "14 2/4 + 3 3/4 = 17 5/4 = 18 1/4 cm.",
      "realWorldApplication": "Biological field studies and agricultural crop tracking log growth measurements in mixed units."
    },
    {
      "id": "c6_sc9",
      "category": "Everyday Decisions",
      "title": "Study Schedule Time Management",
      "story": "Rohan allocates 2 hours for evening homework. He spends 2/3 of an hour on Science and 3/4 of an hour on Mathematics.",
      "problem": "How much time (in hours) does Rohan have left for reading English?",
      "options": [
        "7/12 hour",
        "1/2 hour",
        "5/12 hour",
        "1 hour"
      ],
      "correctIndex": 0,
      "hint": "Convert 2/3 (8/12) and 3/4 (9/12) to common denominator 12 and subtract sum from 2 (24/12).",
      "conceptExplanation": "Science + Math = 8/12 + 9/12 = 17/12 hours. Remaining = 2 - 17/12 = 24/12 - 17/12 = 7/12 hour (35 minutes).",
      "realWorldApplication": "Time management and professional productivity schedules balance fractional hour allocations."
    },
    {
      "id": "c6_sc10",
      "category": "Technology",
      "title": "Smartphone Storage Cleanup",
      "story": "A tablet with 64 GB internal storage shows 1/4 occupied by offline video lessons and 1/8 occupied by educational games.",
      "problem": "What total fraction of the tablet's storage is currently occupied by these two items?",
      "options": [
        "3/8",
        "2/12",
        "1/3",
        "5/8"
      ],
      "correctIndex": 0,
      "hint": "Convert 1/4 to eighths (2/8) and add to 1/8.",
      "conceptExplanation": "1/4 + 1/8 = 2/8 + 1/8 = 3/8 of total storage occupied.",
      "realWorldApplication": "Computer operating systems and cloud drive managers display drive usage as fractional sectors."
    },
    {
      "id": "c6_sc11",
      "category": "Shopping",
      "title": "The Supermarket Pulses Sale",
      "story": "Dal is packed in 1/2 kg bags. A grocer opens a 25 kg sack to create these retail packs.",
      "problem": "How many 1/2 kg packs can the grocer produce from the entire sack?",
      "options": [
        "50 packs",
        "12 1/2 packs",
        "25 packs",
        "100 packs"
      ],
      "correctIndex": 0,
      "hint": "Dividing by 1/2 is the same as multiplying by 2.",
      "conceptExplanation": "25 ÷ (1/2) = 25 × 2 = 50 individual packs.",
      "realWorldApplication": "Packaging operations and retail unit sizing use division of fractions to determine unit yields."
    },
    {
      "id": "c6_sc12",
      "category": "Sports",
      "title": "Swimming Pool Lap Training",
      "story": "A municipal swimming pool is 50 metres long. Divya swims 4 1/2 laps during her morning warm-up.",
      "problem": "How many total metres did Divya swim in her warm-up?",
      "options": [
        "225 metres",
        "200 metres",
        "250 metres",
        "175 metres"
      ],
      "correctIndex": 0,
      "hint": "Multiply 4.5 or (9/2) by 50 metres.",
      "conceptExplanation": "4 1/2 × 50 = (9/2) × 50 = 9 × 25 = 225 metres.",
      "realWorldApplication": "Fitness metrics, Olympic swim split analysis, and cardio tracking calculate total distance via fractional laps."
    },
    {
      "id": "c6_sc13",
      "category": "Cooking",
      "title": "The Grandmother's Kheer Recipe",
      "story": "Grandmother's recipe for Rice Kheer needs 1 1/3 cups of sugar. If Farhan wants to make half of the recipe, how much sugar should he use?",
      "problem": "Calculate 1/2 of 1 1/3 cups of sugar.",
      "options": [
        "2/3 cup",
        "1/3 cup",
        "3/4 cup",
        "1/2 cup"
      ],
      "correctIndex": 0,
      "hint": "Convert 1 1/3 to improper fraction 4/3, then multiply by 1/2.",
      "conceptExplanation": "1 1/3 = 4/3. Half of 4/3 = 1/2 × 4/3 = 4/6 = 2/3 cup.",
      "realWorldApplication": "Domestic baking and culinary batch reduction use fraction multiplication for exact flavor balance."
    },
    {
      "id": "c6_sc14",
      "category": "Construction",
      "title": "Tiling the Courtyard Border",
      "story": "A decorative border around a flower bed is 12 metres long. Tiles are each 3/4 metre wide.",
      "problem": "How many tiles placed end-to-end are needed to complete the border?",
      "options": [
        "16 tiles",
        "9 tiles",
        "15 tiles",
        "12 tiles"
      ],
      "correctIndex": 0,
      "hint": "Divide 12 by 3/4 by multiplying 12 by 4/3.",
      "conceptExplanation": "12 ÷ (3/4) = 12 × (4/3) = 48/3 = 16 tiles.",
      "realWorldApplication": "Civil engineering and masonry tile estimation calculate quantity requirements from unit dimensions."
    },
    {
      "id": "c6_sc15",
      "category": "Everyday Decisions",
      "title": "Sharing the School Pizza",
      "story": "Three friends share a large pan pizza. Priya eats 3/8, Anil eats 1/4, and Sneha eats the rest.",
      "problem": "Who ate the largest portion of the pizza?",
      "options": [
        "Sneha (3/8)",
        "Priya (3/8) and Sneha (3/8) tied",
        "Anil (1/4)",
        "Priya (3/8) strictly"
      ],
      "correctIndex": 1,
      "hint": "Anil eats 1/4 = 2/8. Total Priya + Anil = 5/8. Sneha gets 1 - 5/8 = 3/8.",
      "conceptExplanation": "Anil: 2/8. Priya: 3/8. Sneha: 8/8 - (3/8 + 2/8) = 3/8. Priya and Sneha ate equal largest portions (3/8 each).",
      "realWorldApplication": "Fair division algorithms and resource allocation require normalizing fractions to a common base."
    }
  ],
  "7": [
    {
      "id": "c7_sc1",
      "category": "Travel",
      "title": "Submarine Oceanic Survey",
      "story": "An Indian Navy research submarine operates at 120 metres below sea level (-120 m). It detects a thermal vent and ascends 45 metres.",
      "problem": "What is the submarine's new depth relative to sea level?",
      "options": [
        "-75 metres",
        "-165 metres",
        "75 metres",
        "-85 metres"
      ],
      "correctIndex": 0,
      "hint": "Ascending means adding a positive number to the negative depth: -120 + 45.",
      "conceptExplanation": "-120 + 45 = -75 metres (75 metres below sea level).",
      "realWorldApplication": "Marine navigation, sonar telemetry, and scuba dive computer algorithms use signed integers for depth."
    },
    {
      "id": "c7_sc2",
      "category": "Money",
      "title": "The Kirana Store Credit Ledger",
      "story": "Ramesh had a debt of ₹450 at the local grocery store (-₹450). He paid ₹600 towards his account.",
      "problem": "What is Ramesh's updated balance in the ledger?",
      "options": [
        "+₹150 (Credit balance)",
        "-₹150 (Debt)",
        "+₹1050",
        "-₹1050"
      ],
      "correctIndex": 0,
      "hint": "Add payment to negative debt: -450 + 600.",
      "conceptExplanation": "-450 + 600 = +150. Ramesh now has a credit balance of ₹150 for future purchases.",
      "realWorldApplication": "Accounting ledgers, banking transaction logs, and credit card processing rely on signed addition."
    },
    {
      "id": "c7_sc3",
      "category": "Science",
      "title": "The Leh Weather Station",
      "story": "At 10:00 PM in Leh, Ladakh, the mercury stands at -2°C. By 4:00 AM, a cold wave causes the temperature to drop by another 7°C.",
      "problem": "What is the recorded temperature at 4:00 AM?",
      "options": [
        "-9°C",
        "-5°C",
        "+5°C",
        "-14°C"
      ],
      "correctIndex": 0,
      "hint": "A drop means subtracting 7 from -2: -2 - 7.",
      "conceptExplanation": "-2 - 7 = -9°C. Moving further left from -2 on the number line gives -9°C.",
      "realWorldApplication": "Meteorology, cryogenics, and polar climate science use negative integer subtraction to model cold fronts."
    },
    {
      "id": "c7_sc4",
      "category": "Construction",
      "title": "The Multi-Level Mall Elevator",
      "story": "A maintenance engineer enters the service elevator at Basement Level 3 (-3). She travels up 7 floors to inspect a cinema projector.",
      "problem": "On which floor does the engineer arrive?",
      "options": [
        "Floor 4",
        "Floor 10",
        "Floor -10",
        "Floor 3"
      ],
      "correctIndex": 0,
      "hint": "Ground floor is 0. Calculate -3 + 7.",
      "conceptExplanation": "-3 + 7 = 4. The engineer arrives on the 4th floor above ground level.",
      "realWorldApplication": "Elevator microcontrollers and skyscraper control systems track vertical displacement with signed numbers."
    },
    {
      "id": "c7_sc5",
      "category": "Science",
      "title": "Chemistry Lab Temperature Change",
      "story": "A liquid nitrogen mixture at -18°C is heated in a controlled laboratory incubator at a steady rate of 4°C per minute for 6 minutes.",
      "problem": "What is the final temperature of the chemical solution?",
      "options": [
        "+6°C",
        "-42°C",
        "-6°C",
        "+24°C"
      ],
      "correctIndex": 0,
      "hint": "Find total heat added (4 × 6 = 24°C) and add to initial -18°C.",
      "conceptExplanation": "Temperature change = 4 × 6 = +24°C. Final temperature = -18 + 24 = +6°C.",
      "realWorldApplication": "Pharmaceutical chemical synthesis and vaccine storage monitor temperature delta curves."
    },
    {
      "id": "c7_sc6",
      "category": "Sports",
      "title": "Football League Goal Difference",
      "story": "In a youth tournament, Team A scored 14 goals and conceded 19 goals. Team B scored 11 goals and conceded 18 goals.",
      "problem": "Which team has the higher (better) goal difference?",
      "options": [
        "Team A (Goal Difference -5)",
        "Team B (Goal Difference -7)",
        "Both are tied",
        "Team A (Goal Difference +5)"
      ],
      "correctIndex": 0,
      "hint": "Goal difference = Goals For - Goals Against. Compare -5 and -7.",
      "conceptExplanation": "Team A: 14 - 19 = -5. Team B: 11 - 18 = -7. Since -5 is greater than -7, Team A has the better goal difference.",
      "realWorldApplication": "FIFA tournament standings, league tables, and sports tie-breaking use signed integers."
    },
    {
      "id": "c7_sc7",
      "category": "Everyday Decisions",
      "title": "Deep Well Pump Installation",
      "story": "A water drilling rig reaches 60 metres below ground level (-60 m). The engineer decides to raise the pump inlet by 18 metres to avoid silt.",
      "problem": "What is the new depth of the pump inlet?",
      "options": [
        "-42 metres",
        "-78 metres",
        "-40 metres",
        "42 metres"
      ],
      "correctIndex": 0,
      "hint": "Raising means adding positive displacement: -60 + 18.",
      "conceptExplanation": "-60 + 18 = -42 metres (42 metres below ground level).",
      "realWorldApplication": "Hydrological engineering and borehole water extraction use vertical coordinate positioning."
    },
    {
      "id": "c7_sc8",
      "category": "Technology",
      "title": "Game Character Health Points & Poison",
      "story": "In a fantasy game, an avatar has 25 HP. It steps into a poison swamp that inflicts 8 damage points per second (-8 HP/s) for 4 seconds.",
      "problem": "What is the avatar's net HP after the swamp effect, and has it fainted?",
      "options": [
        "-7 HP (Avatar has fainted)",
        "+7 HP (Avatar survived)",
        "0 HP",
        "-32 HP"
      ],
      "correctIndex": 0,
      "hint": "Calculate 25 + (4 × -8) = 25 - 32.",
      "conceptExplanation": "Damage = 4 × (-8) = -32 HP. Final HP = 25 - 32 = -7 HP. Since HP < 0, the character has fainted.",
      "realWorldApplication": "Video game physics engines and combat math simulate debuffs and damage calculations using negative integers."
    },
    {
      "id": "c7_sc9",
      "category": "Money",
      "title": "Online Wallet Overdraft Protection",
      "story": "Vikram has ₹120 in his digital wallet. A recurring subscription fee of ₹350 is processed, triggering an approved overdraft.",
      "problem": "What is the resulting balance on Vikram's digital statement?",
      "options": [
        "-₹230",
        "-₹470",
        "+₹230",
        "₹0"
      ],
      "correctIndex": 0,
      "hint": "Subtract the larger debit from the balance: 120 - 350.",
      "conceptExplanation": "120 - 350 = -₹230. Vikram owes the payment provider ₹230.",
      "realWorldApplication": "Fintech payment gateways and automated overdraft balance alerts process negative balances daily."
    },
    {
      "id": "c7_sc10",
      "category": "Travel",
      "title": "Hiking in Death Valley",
      "story": "A hiker begins at Badwater Basin at 86 metres below sea level (-86 m). Over 3 hours, she climbs up to Dante's Peak at 1660 metres above sea level (+1660 m).",
      "problem": "What was the total vertical elevation gain achieved during the hike?",
      "options": [
        "1746 metres",
        "1574 metres",
        "1660 metres",
        "1832 metres"
      ],
      "correctIndex": 0,
      "hint": "Elevation gain = Final - Initial = 1660 - (-86) = 1660 + 86.",
      "conceptExplanation": "1660 - (-86) = 1660 + 86 = 1746 metres total climb.",
      "realWorldApplication": "Topographical mapping, altimeter calibration, and mountain search-and-rescue calculate gross elevation gain."
    },
    {
      "id": "c7_sc11",
      "category": "Science",
      "title": "Deep Freeze Meat Locker Audit",
      "story": "An industrial meat freezer is kept at -24°C. During a 20-minute power outage, heat enters at a rate of 0.5°C per minute.",
      "problem": "What is the temperature at the end of the 20-minute outage?",
      "options": [
        "-14°C",
        "-34°C",
        "-10°C",
        "-4°C"
      ],
      "correctIndex": 0,
      "hint": "Rise = 20 × 0.5 = +10°C. Add to -24°C.",
      "conceptExplanation": "Initial = -24°C. Rise = 20 × 0.5 = +10°C. New temp = -24 + 10 = -14°C.",
      "realWorldApplication": "Cold chain logistics and perishable food safety monitoring track temperature deviations."
    },
    {
      "id": "c7_sc12",
      "category": "Shopping",
      "title": "The Stock Market Weekly Swing",
      "story": "Over five trading days, a renewable energy share experienced the following point changes: +12, -8, -15, +20, and -4.",
      "problem": "What was the net point change of the share over the week?",
      "options": [
        "+5 points",
        "+3 points",
        "-5 points",
        "+9 points"
      ],
      "correctIndex": 0,
      "hint": "Add positive gains (12 + 20 = 32) and negative losses (-8 + -15 + -4 = -27).",
      "conceptExplanation": "Net = (12 + 20) + (-8 - 15 - 4) = 32 - 27 = +5 points gain.",
      "realWorldApplication": "Stock index trackers (BSE Sensex / Nifty) report cumulative weekly index performance using signed sums."
    },
    {
      "id": "c7_sc13",
      "category": "Construction",
      "title": "Bridge Foundation Piling",
      "story": "A bridge pillar foundation is driven 15 metres below the riverbed (-15 m). During a flood, scouring washes away 3 metres of riverbed.",
      "problem": "If the scour exposes 3 metres downwards, what is the relative depth from the new riverbed level?",
      "options": [
        "-12 metres",
        "-18 metres",
        "-15 metres",
        "-9 metres"
      ],
      "correctIndex": 0,
      "hint": "The pillar depth is now 15 - 3 = 12 metres below the new bed level.",
      "conceptExplanation": "Relative foundation embedment = -15 - (-3) = -12 metres.",
      "realWorldApplication": "Structural bridge inspection and hydraulic foundation safety calculate scour vulnerability with signed distances."
    },
    {
      "id": "c7_sc14",
      "category": "Technology",
      "title": "Audio Signal Decibel Equalizer",
      "story": "A sound engineer adjusts a podcast audio track. The dialogue is at -14 dB. She applies a +6 dB boost to improve clarity, then cuts background hum by -3 dB.",
      "problem": "What is the final output level of the audio track?",
      "options": [
        "-11 dB",
        "-23 dB",
        "-8 dB",
        "-5 dB"
      ],
      "correctIndex": 0,
      "hint": "Combine adjustments: -14 + 6 - 3.",
      "conceptExplanation": "-14 + 6 = -8 dB. Then -8 - 3 = -11 dB.",
      "realWorldApplication": "Sound mastering, streaming loudness normalization, and broadcast engineering regulate decibel ceilings."
    },
    {
      "id": "c7_sc15",
      "category": "Everyday Decisions",
      "title": "Smart Thermostat Energy Saving",
      "story": "A smart thermostat drops the home temperature by 3°C every night (-3°C/night) for 5 consecutive nights during a winter conservation trial.",
      "problem": "What was the total cumulative temperature drop relative to the baseline?",
      "options": [
        "-15°C",
        "-8°C",
        "+15°C",
        "-12°C"
      ],
      "correctIndex": 0,
      "hint": "Multiply nights by drop: 5 × (-3).",
      "conceptExplanation": "5 × (-3) = -15°C cumulative adjustment.",
      "realWorldApplication": "Energy consumption modeling and building climate analytics monitor heating energy reductions."
    }
  ],
  "8": [
    {
      "id": "c8_sc1",
      "category": "Technology",
      "title": "Mobile Phone Prepaid Recharge",
      "story": "A telecom provider charges a fixed network access fee of ₹50 per month plus ₹1.50 per gigabyte of high-speed data consumed. Rohan's monthly bill was ₹140.",
      "problem": "Write and solve the linear equation to determine how many gigabytes (g) of data Rohan consumed.",
      "options": [
        "60 GB",
        "90 GB",
        "50 GB",
        "45 GB"
      ],
      "correctIndex": 0,
      "hint": "Set up 50 + 1.5g = 140, subtract 50, then divide by 1.5.",
      "conceptExplanation": "Equation: 50 + 1.5g = 140. Subtract 50: 1.5g = 90. Divide by 1.5: g = 90 / 1.5 = 60 GB.",
      "realWorldApplication": "Utility billing, telecom data metering, and SaaS subscription tiers use linear cost functions $C = F + V cdot x$."
    },
    {
      "id": "c8_sc2",
      "category": "Travel",
      "title": "City Taxi Fare Meter",
      "story": "An auto-rickshaw charges a base flag-down fare of ₹30 for the first kilometre, and ₹15 for each additional kilometre. A commuter paid ₹150 for a trip.",
      "problem": "What was the total trip distance in kilometres (d)?",
      "options": [
        "9 km",
        "8 km",
        "10 km",
        "12 km"
      ],
      "correctIndex": 0,
      "hint": "Total = 30 + 15(d - 1) = 150. Solve for d.",
      "conceptExplanation": "30 + 15(d - 1) = 150 $\\rightarrow$ 15(d - 1) = 120 $\\rightarrow$ d - 1 = 8 $\\rightarrow$ d = 9 km.",
      "realWorldApplication": "Urban transport fare meters, rideshare surge modeling, and courier delivery rates apply piecewise linear functions."
    },
    {
      "id": "c8_sc3",
      "category": "Money",
      "title": "School Carnival Food Stall Profit",
      "story": "Class 8 sets up a lemonade stall. Upfront equipment rental costs ₹400. Each cup of lemonade costs ₹5 to produce and sells for ₹15.",
      "problem": "How many cups of lemonade (c) must they sell to achieve a net profit of ₹800?",
      "options": [
        "120 cups",
        "80 cups",
        "100 cups",
        "150 cups"
      ],
      "correctIndex": 0,
      "hint": "Profit = Revenue - Expenses: 15c - (400 + 5c) = 800.",
      "conceptExplanation": "Net profit: (15 - 5)c - 400 = 800 $\\rightarrow$ 10c = 1200 $\\rightarrow$ c = 120 cups.",
      "realWorldApplication": "Entrepreneurship, break-even analysis, and small business accounting compute target production volume via linear models."
    },
    {
      "id": "c8_sc4",
      "category": "Sports",
      "title": "Cricket Run Rate Chase",
      "story": "In a 20-over T20 match, Team India scored 80 runs in the first 10 overs. The target is 190 runs.",
      "problem": "What required run rate (r runs per over) must the team maintain over the remaining 10 overs to win the match?",
      "options": [
        "11.0 runs/over",
        "10.5 runs/over",
        "9.5 runs/over",
        "12.0 runs/over"
      ],
      "correctIndex": 0,
      "hint": "Equation: 80 + 10r = 190. Subtract 80 and divide by 10.",
      "conceptExplanation": "80 + 10r = 190 $\\rightarrow$ 10r = 110 $\\rightarrow$ r = 11.0 runs per over.",
      "realWorldApplication": "Live sports broadcast graphics, Duckworth-Lewis-Stern target calculators, and team strategy use rate linear equations."
    },
    {
      "id": "c8_sc5",
      "category": "Construction",
      "title": "School Garden Fencing Perimeter",
      "story": "A rectangular herbal garden has a length that is 6 metres longer than its width (w). The school purchases 52 metres of wire fencing to enclose it completely.",
      "problem": "Find the width (w) and length of the garden.",
      "options": [
        "Width = 10 m, Length = 16 m",
        "Width = 8 m, Length = 14 m",
        "Width = 12 m, Length = 18 m",
        "Width = 11 m, Length = 17 m"
      ],
      "correctIndex": 0,
      "hint": "Perimeter = 2(length + width) = 2(w + 6 + w) = 52.",
      "conceptExplanation": "2(2w + 6) = 52 $\\rightarrow$ 4w + 12 = 52 $\\rightarrow$ 4w = 40 $\\rightarrow$ w = 10 m. Length = 10 + 6 = 16 m.",
      "realWorldApplication": "Architectural dimensioning, landscaping boundary planning, and fencing material budgeting rely on perimeter equations."
    },
    {
      "id": "c8_sc6",
      "category": "Science",
      "title": "Mercury Thermometer Scale Conversion",
      "story": "The temperature conversion formula between Fahrenheit (F) and Celsius (C) is F = (9/5)C + 32. A clinical thermometer reads 104°F.",
      "problem": "What is this patient's body temperature in degrees Celsius?",
      "options": [
        "40°C",
        "38.5°C",
        "42°C",
        "37°C"
      ],
      "correctIndex": 0,
      "hint": "Substitute F = 104 into 104 = (9/5)C + 32, subtract 32, then multiply by 5/9.",
      "conceptExplanation": "104 - 32 = 72. (9/5)C = 72 $\\rightarrow$ C = 72 × (5/9) = 8 × 5 = 40°C.",
      "realWorldApplication": "Medical temperature telemetry, HVAC thermal controllers, and international weather data convert units with linear formulas."
    },
    {
      "id": "c8_sc7",
      "category": "Everyday Decisions",
      "title": "Water Tank Inflow Problem",
      "story": "A 500-litre domestic rooftop water tank contains 80 litres of water. An automated electric pump fills the tank at 35 litres per minute.",
      "problem": "How many minutes (m) will it take to fill the tank completely?",
      "options": [
        "12 minutes",
        "14 minutes",
        "10 minutes",
        "15 minutes"
      ],
      "correctIndex": 0,
      "hint": "Equation: 80 + 35m = 500.",
      "conceptExplanation": "80 + 35m = 500 $\\rightarrow$ 35m = 420 $\\rightarrow$ m = 420 / 35 = 12 minutes.",
      "realWorldApplication": "Municipal water distribution, rainwater harvesting pump timers, and fluid engineering solve linear filling equations."
    },
    {
      "id": "c8_sc8",
      "category": "Cooking",
      "title": "Commercial Bakery Flour Inventory",
      "story": "A bakery starts the morning with 150 kg of flour in storage. Each batch of artisanal sourdough bread consumes 18 kg of flour. At the end of the shift, 24 kg remains.",
      "problem": "How many complete batches of sourdough bread (b) did the bakers bake?",
      "options": [
        "7 batches",
        "6 batches",
        "8 batches",
        "9 batches"
      ],
      "correctIndex": 0,
      "hint": "Equation: 150 - 18b = 24. Subtract 24 and solve for 18b.",
      "conceptExplanation": "150 - 18b = 24 $\\rightarrow$ 18b = 150 - 24 = 126 $\\rightarrow$ b = 126 / 18 = 7 batches.",
      "realWorldApplication": "Inventory depletion modeling, industrial bakery supply chain, and production planning."
    },
    {
      "id": "c8_sc9",
      "category": "Shopping",
      "title": "Festival Discount & Coupon Combination",
      "story": "An electronics store offers a flat ₹200 festival coupon after a 20% discount on headphones. A student pays ₹1400 at the counter.",
      "problem": "Find the original marked price (P) of the headphones before any discount or coupon.",
      "options": [
        "₹2000",
        "₹1800",
        "₹1900",
        "₹2200"
      ],
      "correctIndex": 0,
      "hint": "Price after 20% discount is 0.8P. Equation: 0.8P - 200 = 1400.",
      "conceptExplanation": "0.8P - 200 = 1400 $\\rightarrow$ 0.8P = 1600 $\\rightarrow$ P = 1600 / 0.8 = ₹2000.",
      "realWorldApplication": "E-commerce checkout pricing engines and retail discount stacking calculate original prices via linear reversions."
    },
    {
      "id": "c8_sc10",
      "category": "Technology",
      "title": "Electric Scooter Battery Discharge",
      "story": "An electric scooter's battery starts with 90% charge. In city traffic mode, it consumes 3.5% charge for every kilometre traveled.",
      "problem": "At what travel distance (k) will the battery indicator reach the 20% low-charge warning threshold?",
      "options": [
        "20 km",
        "18 km",
        "25 km",
        "22 km"
      ],
      "correctIndex": 0,
      "hint": "Equation: 90 - 3.5k = 20.",
      "conceptExplanation": "90 - 3.5k = 20 $\\rightarrow$ 3.5k = 70 $\\rightarrow$ k = 70 / 3.5 = 20 km.",
      "realWorldApplication": "Electric vehicle range prediction dashboards and battery management systems (BMS) model discharge linearly."
    },
    {
      "id": "c8_sc11",
      "category": "Sports",
      "title": "Weightlifting Gym Barbell Plates",
      "story": "An Olympic barbell weighs 20 kg on its own. An athlete loads an equal number of identical plates on each side, bringing the total bar weight to 90 kg.",
      "problem": "If there are 4 identical weight plates loaded in total (2 on each side), what is the weight (p) of each plate?",
      "options": [
        "17.5 kg",
        "15 kg",
        "20 kg",
        "12.5 kg"
      ],
      "correctIndex": 0,
      "hint": "Equation: 20 + 4p = 90.",
      "conceptExplanation": "20 + 4p = 90 $\\rightarrow$ 4p = 70 $\\rightarrow$ p = 70 / 4 = 17.5 kg per plate.",
      "realWorldApplication": "Strength and conditioning equipment calibration and sports weight progression."
    },
    {
      "id": "c8_sc12",
      "category": "Travel",
      "title": "Two Trains Approaching Each Other",
      "story": "Two railway stations are 450 km apart. Train A leaves Station 1 at 60 km/h, while Train B leaves Station 2 at 90 km/h traveling towards Train A on a parallel track.",
      "problem": "How many hours (t) will it take for the two trains to pass each other?",
      "options": [
        "3 hours",
        "2.5 hours",
        "3.5 hours",
        "4 hours"
      ],
      "correctIndex": 0,
      "hint": "Relative speed when approaching = 60 + 90 = 150 km/h. Equation: 150t = 450.",
      "conceptExplanation": "Combined distance: 60t + 90t = 450 $\\rightarrow$ 150t = 450 $\\rightarrow$ t = 3 hours.",
      "realWorldApplication": "Railway dispatching, collision avoidance systems, and logistics route scheduling."
    },
    {
      "id": "c8_sc13",
      "category": "Money",
      "title": "Simple Interest Loan Settlement",
      "story": "A micro-entrepreneur borrows principal P at 8% simple interest per year to buy a sewing machine. After 3 years, the total repayment amount with interest is ₹12,400.",
      "problem": "Find the original borrowed principal amount P.",
      "options": [
        "₹10,000",
        "₹9,500",
        "₹10,500",
        "₹11,000"
      ],
      "correctIndex": 0,
      "hint": "Total A = P + (P × R × T)/100 = P + (P × 8 × 3)/100 = P + 0.24P = 1.24P = 12400.",
      "conceptExplanation": "1.24P = 12400 $\\rightarrow$ P = 12400 / 1.24 = ₹10,000.",
      "realWorldApplication": "Microfinance loans, agricultural credit societies, and personal loan calculators solve simple interest equations."
    },
    {
      "id": "c8_sc14",
      "category": "Construction",
      "title": "Concrete Mixing Cement to Sand Ratio",
      "story": "A builder prepares standard mortar with a 1:4 ratio of cement to sand. To pave a sidewalk, 250 kg of total dry mixture is needed.",
      "problem": "How many kilograms of cement (c) and sand (s) should be mixed?",
      "options": [
        "50 kg cement, 200 kg sand",
        "40 kg cement, 210 kg sand",
        "60 kg cement, 190 kg sand",
        "45 kg cement, 205 kg sand"
      ],
      "correctIndex": 0,
      "hint": "Parts: 1x + 4x = 5x = 250 $\\rightarrow$ x = 50.",
      "conceptExplanation": "Cement = 1x = 50 kg. Sand = 4x = 200 kg. Total = 250 kg.",
      "realWorldApplication": "Structural civil engineering and batch plant material batching use linear proportioning."
    },
    {
      "id": "c8_sc15",
      "category": "Science",
      "title": "Atmospheric Pressure with Altitude",
      "story": "At sea level, air pressure is 100 kPa. For every 1000 metres climbed in a commercial turboprop plane, pressure drops by approximately 12 kPa.",
      "problem": "At what cruising altitude (in thousands of metres, h) will the outside pressure measure 52 kPa?",
      "options": [
        "4 thousand metres (4000 m)",
        "3.5 thousand metres",
        "4.5 thousand metres",
        "5 thousand metres"
      ],
      "correctIndex": 0,
      "hint": "Equation: 100 - 12h = 52.",
      "conceptExplanation": "100 - 12h = 52 $\\rightarrow$ 12h = 48 $\\rightarrow$ h = 4 (altitude is 4000 metres).",
      "realWorldApplication": "Aviation cabin pressurization controllers and barometric altimeters compute altitude from linear pressure gradients."
    }
  ],
  "9": [
    {
      "id": "c9_sc1",
      "category": "Sports",
      "title": "Cricket Six Hit Trajectory",
      "story": "A batsman smashes a cricket ball into the stands. The height h (in metres) of the ball t seconds after impact is modeled by h = -5t² + 20t.",
      "problem": "After how many seconds (t > 0) does the ball land back on the ground (h = 0)?",
      "options": [
        "4 seconds",
        "2 seconds",
        "5 seconds",
        "3 seconds"
      ],
      "correctIndex": 0,
      "hint": "Factor the quadratic equation: -5t(t - 4) = 0.",
      "conceptExplanation": "-5t² + 20t = 0 $\\rightarrow$ -5t(t - 4) = 0. Since t > 0 at landing, t = 4 seconds.",
      "realWorldApplication": "Hawk-Eye ball tracking in cricket and tennis sports broadcasts computes projectile flight using quadratic equations."
    },
    {
      "id": "c9_sc2",
      "category": "Construction",
      "title": "School Playground Area Optimization",
      "story": "A school has 40 metres of chain-link fence to create a rectangular sports enclosure against an existing brick wall (meaning only 3 sides need fencing: length + 2 × width = 40).",
      "problem": "What width (w) maximizes the enclosed play area?",
      "options": [
        "10 metres",
        "12 metres",
        "8 metres",
        "15 metres"
      ],
      "correctIndex": 0,
      "hint": "Area A = w(40 - 2w) = 40w - 2w². Vertex of parabola is at w = -b/(2a) = -40/(2 × -2) = 10.",
      "conceptExplanation": "A = -2w² + 40w. Maximum occurs at the vertex: w = -40 / (2 × -2) = 10 metres. Length = 40 - 2(10) = 20 m. Max area = 200 m².",
      "realWorldApplication": "Urban planning, agricultural grazing pen design, and industrial warehouse space maximization."
    },
    {
      "id": "c9_sc3",
      "category": "Money",
      "title": "Handmade Diya Festive Profit Model",
      "story": "A potter sells handmade clay diyas during Diwali. If she prices each diya at ₹x, her daily profit P(x) in rupees is given by P(x) = -(x - 15)² + 900.",
      "problem": "At what selling price x will the potter earn her maximum possible daily profit?",
      "options": [
        "₹15",
        "₹30",
        "₹10",
        "₹25"
      ],
      "correctIndex": 0,
      "hint": "The expression -(x - 15)² is always negative or zero. It reaches its maximum (zero) when (x - 15) = 0.",
      "conceptExplanation": "Since -(x - 15)² $\\le$ 0 for all real x, maximum profit of ₹900 occurs when x - 15 = 0 $\\rightarrow$ x = ₹15.",
      "realWorldApplication": "Revenue management, pricing elasticity algorithms, and product market optimization."
    },
    {
      "id": "c9_sc4",
      "category": "Travel",
      "title": "River Boat Upstream and Downstream Speed",
      "story": "A tourist ferry travels in a river where the water current flows at 3 km/h. The boat travels 24 km downstream and returns 24 km upstream in a total time of 5 hours.",
      "problem": "If b is the boat's speed in still water, which quadratic equation models this journey?",
      "options": [
        "5b² - 48b - 45 = 0",
        "5b² + 48b - 45 = 0",
        "b² - 24b - 9 = 0",
        "5b² - 24b - 45 = 0"
      ],
      "correctIndex": 0,
      "hint": "Time = Distance / Speed. Total time: 24/(b+3) + 24/(b-3) = 5.",
      "conceptExplanation": "24(b - 3) + 24(b + 3) = 5(b² - 9) $\\rightarrow$ 48b = 5b² - 45 $\\rightarrow$ 5b² - 48b - 45 = 0. Solving gives b = 9 km/h in still water.",
      "realWorldApplication": "Maritime navigation, flight flight-plan adjustments for headwind/tailwind, and shipping fuel economics."
    },
    {
      "id": "c9_sc5",
      "category": "Science",
      "title": "Fountain Jet Parabolic Water Arc",
      "story": "A decorative garden fountain shoots a water stream whose height y (in metres) at horizontal distance x (in metres) is given by y = -x² + 6x - 5.",
      "problem": "At what horizontal distances does the water stream leave and return to water level (y = 0)?",
      "options": [
        "x = 1 metre and x = 5 metres",
        "x = 2 metres and x = 4 metres",
        "x = 0 metres and x = 6 metres",
        "x = 1 metre and x = 6 metres"
      ],
      "correctIndex": 0,
      "hint": "Factor -x² + 6x - 5 = -(x² - 6x + 5) = -(x - 1)(x - 5) = 0.",
      "conceptExplanation": "Roots are x = 1 and x = 5. The water jet launches from the nozzle at x = 1 m and lands in the basin at x = 5 m.",
      "realWorldApplication": "Hydraulic landscape architecture, fire hose pressure arc design, and agricultural sprinkler placement."
    },
    {
      "id": "c9_sc6",
      "category": "Technology",
      "title": "Microprocessor Heat Dissipation Curve",
      "story": "A gaming laptop CPU produces heat power H (in Watts) as a function of clock frequency f (in GHz): H(f) = 10f² + 20.",
      "problem": "If the cooling heat pipes can dissipate at most 110 Watts before thermal throttling occurs, what is the maximum clock frequency f?",
      "options": [
        "3 GHz",
        "2.5 GHz",
        "3.5 GHz",
        "4 GHz"
      ],
      "correctIndex": 0,
      "hint": "Set 10f² + 20 = 110 $\\rightarrow$ 10f² = 90 $\\rightarrow$ f² = 9.",
      "conceptExplanation": "10f² = 90 $\\rightarrow$ f² = 9 $\\rightarrow$ f = 3 GHz (frequency must be positive).",
      "realWorldApplication": "Semiconductor hardware design, overclocking safety limits, and computer thermal engineering."
    },
    {
      "id": "c9_sc7",
      "category": "Construction",
      "title": "Rectangular Swimming Pool Border Paving",
      "story": "A rectangular pool is 10 metres long and 6 metres wide. A uniform tiled walking deck of width x metres surrounds all four sides, bringing the total area to 140 m².",
      "problem": "Find the width x of the tiled walkway deck.",
      "options": [
        "2 metres",
        "1.5 metres",
        "2.5 metres",
        "3 metres"
      ],
      "correctIndex": 0,
      "hint": "Total dimensions are (10 + 2x) by (6 + 2x). Set (10 + 2x)(6 + 2x) = 140.",
      "conceptExplanation": "60 + 32x + 4x² = 140 $\\rightarrow$ 4x² + 32x - 80 = 0 $\\rightarrow$ x² + 8x - 20 = 0 $\\rightarrow$ (x + 10)(x - 2) = 0. Since width > 0, x = 2 metres.",
      "realWorldApplication": "Architectural blueprint layouts, concrete path construction, and building setback compliance."
    },
    {
      "id": "c9_sc8",
      "category": "Cooking",
      "title": "Cake Bakery Baking Time & Temperature Model",
      "story": "A pastry chef models the crumb texture score S of a fruit cake as S(t) = -(t - 45)² + 100, where t is the baking time in minutes at 180°C.",
      "problem": "What is the optimal baking time for the highest texture score?",
      "options": [
        "45 minutes",
        "50 minutes",
        "40 minutes",
        "35 minutes"
      ],
      "correctIndex": 0,
      "hint": "The squared term -(t - 45)² is zero at its peak.",
      "conceptExplanation": "Peak score of 100 occurs exactly when t - 45 = 0 $\\rightarrow$ t = 45 minutes.",
      "realWorldApplication": "Industrial food processing and commercial bakery automation use parabolic optimization curves."
    },
    {
      "id": "c9_sc9",
      "category": "Everyday Decisions",
      "title": "Braking Distance and Car Speed",
      "story": "The emergency braking distance d (in metres) of a family car on asphalt is approximated by d = 0.05v², where v is the car's speed in km/h.",
      "problem": "If an obstacle suddenly appears 45 metres ahead, what is the maximum speed v at which the car can stop safely in time?",
      "options": [
        "30 km/h",
        "35 km/h",
        "25 km/h",
        "40 km/h"
      ],
      "correctIndex": 0,
      "hint": "0.05v² = 45 $\\rightarrow$ v² = 45 / 0.05 = 900.",
      "conceptExplanation": "v² = 900 $\\rightarrow$ v = 30 km/h.",
      "realWorldApplication": "Road traffic safety regulations, collision warning sensors, and driver safety school stopping charts."
    },
    {
      "id": "c9_sc10",
      "category": "Science",
      "title": "Free Falling Marble from Balcony",
      "story": "A student drops a steel marble from a balcony 20 metres above a sand cushion. Distance fallen after t seconds is d = 5t².",
      "problem": "How many seconds does it take for the marble to hit the sand (d = 20 m)?",
      "options": [
        "2 seconds",
        "1.5 seconds",
        "2.5 seconds",
        "4 seconds"
      ],
      "correctIndex": 0,
      "hint": "5t² = 20 $\\rightarrow$ t² = 4 $\\rightarrow$ t = 2.",
      "conceptExplanation": "5t² = 20 $\\rightarrow$ t² = 4 $\\rightarrow$ t = 2 seconds.",
      "realWorldApplication": "Physics kinematics, structural drop-test certification, and elevator emergency braking tests."
    },
    {
      "id": "c9_sc11",
      "category": "Shopping",
      "title": "Group Tour Bus Charter Discount",
      "story": "A travel agency charges ₹500 per passenger for a heritage tour if 30 people join. For every additional passenger x above 30, the price for everyone drops by ₹10.",
      "problem": "Total revenue R(x) = (30 + x)(500 - 10x). How many additional passengers x produce the maximum revenue?",
      "options": [
        "10 passengers",
        "12 passengers",
        "8 passengers",
        "15 passengers"
      ],
      "correctIndex": 0,
      "hint": "R(x) = -10x² + 200x + 15000. Vertex at x = -b/(2a) = -200 / (2 × -10) = 10.",
      "conceptExplanation": "Vertex is at x = -200 / -20 = 10 additional passengers (total 40 people). Maximum revenue = ₹16,000.",
      "realWorldApplication": "Airline passenger yield management, hotel group booking algorithms, and charter pricing."
    },
    {
      "id": "c9_sc12",
      "category": "Sports",
      "title": "Basketball Free Throw Arc",
      "story": "A point guard releases a basketball. The trajectory curve is modeled by y = -0.2(x - 4)² + 3.8, where y is height in metres and x is horizontal distance.",
      "problem": "What is the maximum peak height reached by the basketball during its arc?",
      "options": [
        "3.8 metres",
        "4.0 metres",
        "3.6 metres",
        "4.2 metres"
      ],
      "correctIndex": 0,
      "hint": "The vertex form y = a(x - h)² + k gives the peak value directly as k.",
      "conceptExplanation": "In vertex form y = -0.2(x - 4)² + 3.8, the maximum height is 3.8 metres when horizontal distance x = 4 metres.",
      "realWorldApplication": "NBA sports science tracking, shooting form computer vision, and basketball biomechanics."
    },
    {
      "id": "c9_sc13",
      "category": "Construction",
      "title": "Arched Stone Bridge Keystone",
      "story": "An ancient stone bridge arch has the parabolic profile y = 8 - 0.5x², where x is the horizontal distance from the center in metres.",
      "problem": "What is the total width (span) of the bridge opening at water level (y = 0)?",
      "options": [
        "8 metres",
        "4 metres",
        "16 metres",
        "6 metres"
      ],
      "correctIndex": 0,
      "hint": "Set 8 - 0.5x² = 0 $\\rightarrow$ x² = 16 $\\rightarrow$ x = ±4. Span is distance from -4 to +4.",
      "conceptExplanation": "x² = 16 gives x = +4 and x = -4. Total span = 4 - (-4) = 8 metres.",
      "realWorldApplication": "Bridge engineering, aqueduct restoration, and masonry arch stress analysis."
    },
    {
      "id": "c9_sc14",
      "category": "Technology",
      "title": "Satellite Dish Parabolic Receiver",
      "story": "A satellite dish cross-section is shaped according to the equation y = 0.25x². The radio feed horn must be placed at the focal point (0, f) where f = 1/(4a).",
      "problem": "At what vertical height f above the dish vertex should the horn be installed?",
      "options": [
        "1 metre",
        "0.5 metres",
        "1.5 metres",
        "2 metres"
      ],
      "correctIndex": 0,
      "hint": "Since a = 0.25 = 1/4, focal distance f = 1 / (4 × 0.25) = 1 / 1 = 1.",
      "conceptExplanation": "Focal distance f = 1 / (4a) = 1 / (4 × 0.25) = 1 metre.",
      "realWorldApplication": "Telecommunications dish design, radar antennas, and solar concentrator thermal focal points."
    },
    {
      "id": "c9_sc15",
      "category": "Everyday Decisions",
      "title": "Solar Water Heater Collector Panel",
      "story": "A solar panel manufacturer discovers that energy efficiency E(θ) at sun tilt angle θ is given by E(θ) = -(θ - 40)² + 95.",
      "problem": "What tilt angle θ provides the absolute maximum solar absorption efficiency?",
      "options": [
        "40°",
        "45°",
        "35°",
        "50°"
      ],
      "correctIndex": 0,
      "hint": "The quadratic term is maximized (zero penalty) when θ = 40°.",
      "conceptExplanation": "Peak efficiency of 95% is attained when θ - 40 = 0 $\\rightarrow$ θ = 40°.",
      "realWorldApplication": "Rooftop solar panel installation and renewable energy seasonal tilt adjustment."
    }
  ],
  "10": [
    {
      "id": "c10_sc1",
      "category": "Construction",
      "title": "Golden Gate Bridge Suspension Cable",
      "story": "A suspension bridge cable hanging between two towers 100 metres apart follows the curve y = 0.01x² - x + 30, where x is distance from the left tower.",
      "problem": "Find the lowest point (sag height) of the cable above the roadway.",
      "options": [
        "5 metres",
        "10 metres",
        "4 metres",
        "6 metres"
      ],
      "correctIndex": 0,
      "hint": "The vertex of y = ax² + bx + c is at x = -b/(2a). Find x, then compute y.",
      "conceptExplanation": "x = -(-1) / (2 × 0.01) = 1 / 0.02 = 50 m. Lowest height y = 0.01(50)² - 50 + 30 = 25 - 50 + 30 = 5 metres.",
      "realWorldApplication": "Civil suspension bridge engineering, tensile cable tension calculations, and structural roadway clearance."
    },
    {
      "id": "c10_sc2",
      "category": "Science",
      "title": "ISRO Sounding Rocket Apogee",
      "story": "An atmospheric sounding rocket's altitude h (in metres) t seconds after ignition is given by h(t) = -4.9t² + 196t.",
      "problem": "What is the maximum altitude (apogee) reached by the rocket before descending?",
      "options": [
        "1960 metres",
        "1800 metres",
        "2048 metres",
        "1920 metres"
      ],
      "correctIndex": 0,
      "hint": "Time to apogee is t = -b/(2a) = -196 / (2 × -4.9) = 20 s. Calculate h(20).",
      "conceptExplanation": "t = 196 / 9.8 = 20 seconds. h(20) = -4.9(400) + 196(20) = -1960 + 3920 = 1960 metres.",
      "realWorldApplication": "Aerospace rocketry, trajectory apogee determination, and suborbital payload separation."
    },
    {
      "id": "c10_sc3",
      "category": "Technology",
      "title": "Fiber Optic Cable Signal Attenuation",
      "story": "Signal loss L (in dB/km) in a fiber optic core as a function of light wavelength w (in micrometres) is modeled by L(w) = 2w² - 6w + 5.",
      "problem": "What wavelength w produces the lowest signal loss, and what is that minimum loss?",
      "options": [
        "w = 1.5 μm with minimum loss 0.5 dB/km",
        "w = 1.3 μm with minimum loss 0.8 dB/km",
        "w = 2.0 μm with minimum loss 1.0 dB/km",
        "w = 1.5 μm with minimum loss 1.0 dB/km"
      ],
      "correctIndex": 0,
      "hint": "Vertex at w = -b/(2a) = 6 / (2 × 2) = 1.5. Evaluate L(1.5).",
      "conceptExplanation": "w = 6 / 4 = 1.5 μm. L(1.5) = 2(2.25) - 6(1.5) + 5 = 4.5 - 9 + 5 = 0.5 dB/km.",
      "realWorldApplication": "Telecommunications fiber wavelength selection (1550 nm transmission window) minimizes repeaters in undersea cables."
    },
    {
      "id": "c10_sc4",
      "category": "Money",
      "title": "Factory Break-Even Analysis",
      "story": "A manufacturing unit produces electric vehicle charging ports. Monthly cost is C(x) = 500x + 20000 and revenue is R(x) = 1500x - 5x², where x is units produced.",
      "problem": "Find the production quantities x at which the factory breaks even (Profit = R(x) - C(x) = 0).",
      "options": [
        "x = 20 units and x = 180 units",
        "x = 25 units and x = 175 units",
        "x = 10 units and x = 190 units",
        "x = 30 units and x = 170 units"
      ],
      "correctIndex": 0,
      "hint": "Set (1500x - 5x²) - (500x + 20000) = 0 $\\rightarrow$ -5x² + 1000x - 20000 = 0 $\\rightarrow$ x² - 200x + 4000 = 0.",
      "conceptExplanation": "Factoring x² - 200x + 4000 = 0 gives (x - 20)(x - 180) = 0. Break-even occurs at x = 20 and x = 180 units.",
      "realWorldApplication": "Corporate financial modeling, production scale limits, and industrial viability analysis."
    },
    {
      "id": "c10_sc5",
      "category": "Sports",
      "title": "Javelin Throw Quadratic Envelope",
      "story": "An Olympic javelin thrower launches a javelin whose trajectory is modeled by y = -0.015x² + 0.9x + 2, where y is height and x is ground distance in metres.",
      "problem": "If the javelin lands at y = 0, use the quadratic formula to determine the throw distance x (rounded to nearest metre).",
      "options": [
        "62 metres",
        "58 metres",
        "65 metres",
        "70 metres"
      ],
      "correctIndex": 0,
      "hint": "Apply quadratic formula with a = -0.015, b = 0.9, c = 2. x = [-0.9 ± √(0.81 - 4(-0.015)(2))] / (2 × -0.015).",
      "conceptExplanation": "Discriminant = 0.81 + 0.12 = 0.93. √0.93 ≈ 0.964. x = (-0.9 - 0.964) / -0.03 = -1.864 / -0.03 ≈ 62 metres.",
      "realWorldApplication": "Track and field Olympic coaching, launch angle aerodynamics, and athletics physics."
    },
    {
      "id": "c10_sc6",
      "category": "Construction",
      "title": "Hydroelectric Dam Spillway Sluice Gate",
      "story": "Water discharges over an engineered parabolic dam crest defined by y = -0.05x², where x is the distance from the crest center in metres.",
      "problem": "At a vertical drop of y = -20 metres down the spillway face, what is the horizontal distance x from the crest?",
      "options": [
        "20 metres",
        "15 metres",
        "25 metres",
        "18 metres"
      ],
      "correctIndex": 0,
      "hint": "Set -0.05x² = -20 $\\rightarrow$ x² = 20 / 0.05 = 400.",
      "conceptExplanation": "x² = 400 $\\rightarrow$ x = 20 metres.",
      "realWorldApplication": "Hydraulic spillway engineering, cavitation prevention, and reservoir floodgate discharge management."
    },
    {
      "id": "c10_sc7",
      "category": "Science",
      "title": "Astronomical Satellite Solar Array Reflection",
      "story": "A deep space probe rotates its square solar panels. Reflected solar energy flux F depends on rotation angle θ: F(θ) = -2θ² + 120θ - 1000.",
      "problem": "For what angle θ does the reflected solar flux reach its maximum intensity?",
      "options": [
        "30°",
        "25°",
        "35°",
        "40°"
      ],
      "correctIndex": 0,
      "hint": "Vertex θ = -b/(2a) = -120 / (2 × -2) = 30°.",
      "conceptExplanation": "θ = -120 / -4 = 30°. Maximum flux = -2(900) + 3600 - 1000 = 800 W/m².",
      "realWorldApplication": "Spacecraft attitude control systems, solar radiation pressure estimation, and satellite orbital thermal control."
    },
    {
      "id": "c10_sc8",
      "category": "Technology",
      "title": "Wireless Drone Flight Boundary Geofence",
      "story": "A commercial delivery drone must fly within a safe signal zone bounded by the parabola y = 100 - 0.04x², where y is altitude and x is distance from the ground station in metres.",
      "problem": "What is the maximum horizontal ground distance x the drone can fly before touching down (y = 0)?",
      "options": [
        "50 metres",
        "40 metres",
        "60 metres",
        "45 metres"
      ],
      "correctIndex": 0,
      "hint": "Set 100 - 0.04x² = 0 $\\rightarrow$ 0.04x² = 100 $\\rightarrow$ x² = 2500.",
      "conceptExplanation": "x² = 2500 $\\rightarrow$ x = 50 metres.",
      "realWorldApplication": "Drone geofencing, FAA unmanned aerial safety envelopes, and autonomous drone delivery corridors."
    },
    {
      "id": "c10_sc9",
      "category": "Travel",
      "title": "High-Speed Rail Track Curvature",
      "story": "To prevent passenger discomfort on high-speed rail, track transitions follow parabolic spirals y = ax². A track must offset 18 metres horizontally over 600 metres of track.",
      "problem": "Find the curvature coefficient a: 18 = a(600)².",
      "options": [
        "0.00005 (5 × 10⁻⁵)",
        "0.0005",
        "0.00003",
        "0.0001"
      ],
      "correctIndex": 0,
      "hint": "a = 18 / 360000 = 1 / 20000 = 0.00005.",
      "conceptExplanation": "a = 18 / 360000 = 0.00005.",
      "realWorldApplication": "Vande Bharat / bullet train civil track design and passenger centrifugal comfort standards."
    },
    {
      "id": "c10_sc10",
      "category": "Everyday Decisions",
      "title": "Solar Water Collector Heating Rate",
      "story": "The temperature rise T(h) of water in a solar tube collector over h hours of sunlight is modeled by T(h) = -h² + 8h + 20.",
      "problem": "At how many hours of exposure h does the water temperature reach its absolute maximum?",
      "options": [
        "4 hours",
        "3 hours",
        "5 hours",
        "6 hours"
      ],
      "correctIndex": 0,
      "hint": "Vertex h = -b/(2a) = -8 / (2 × -1) = 4.",
      "conceptExplanation": "h = 4 hours. Maximum temperature = -(16) + 32 + 20 = 36°C rise above ambient.",
      "realWorldApplication": "Solar thermal plant timing, domestic water heater insulation, and greenhouse temperature control."
    },
    {
      "id": "c10_sc11",
      "category": "Money",
      "title": "Commercial Real Estate Lease Optimization",
      "story": "A commercial developer owns a tech park with 50 office suites. At ₹20,000/month, all 50 suites are occupied. For each ₹1,000 increase in rent, 2 suites become vacant.",
      "problem": "If x is the number of ₹1000 rent increases, revenue is R(x) = (50 - 2x)(20000 + 1000x). What rent increase x maximizes revenue?",
      "options": [
        "x = 2.5 (Rent = ₹22,500)",
        "x = 3.0 (Rent = ₹23,000)",
        "x = 2.0 (Rent = ₹22,000)",
        "x = 4.0 (Rent = ₹24,000)"
      ],
      "correctIndex": 0,
      "hint": "R(x) = -2000x² + 10000x + 1000000. Vertex at x = -10000 / (2 × -2000) = 2.5.",
      "conceptExplanation": "x = 2.5 increases of ₹1000 = +₹2,500. Optimal rent = ₹22,500/month. Peak revenue = ₹1,012,500/month.",
      "realWorldApplication": "Commercial property yield optimization and residential rental market pricing."
    },
    {
      "id": "c10_sc12",
      "category": "Cooking",
      "title": "Industrial Freeze Dryer Vacuum Pressure",
      "story": "Freeze drying instant coffee requires vacuum chamber pressure P (in Pascals) as a quadratic function of condenser temperature T: P(T) = T² - 10T + 26.",
      "problem": "What is the lowest chamber pressure achievable, and at what condenser temperature T does it occur?",
      "options": [
        "1 Pascal at T = 5°C",
        "2 Pascals at T = 4°C",
        "1 Pascal at T = 4°C",
        "0 Pascals at T = 5°C"
      ],
      "correctIndex": 0,
      "hint": "Vertex T = -(-10)/(2 × 1) = 5. Evaluate P(5) = 25 - 50 + 26 = 1.",
      "conceptExplanation": "T = 5°C. Minimum pressure = (5)² - 10(5) + 26 = 25 - 50 + 26 = 1 Pascal.",
      "realWorldApplication": "Pharmaceutical freeze drying, lyophilization of vaccines, and gourmet food preservation."
    },
    {
      "id": "c10_sc13",
      "category": "Science",
      "title": "Planetary Gravitational Escape Threshold",
      "story": "A space probe's velocity v (in km/s) under planetary gravitational pull is governed by the energy equation v² - 6v + 5 = 0.",
      "problem": "Find the positive roots representing the entry and escape velocity thresholds.",
      "options": [
        "v = 1 km/s and v = 5 km/s",
        "v = 2 km/s and v = 3 km/s",
        "v = 1 km/s and v = 6 km/s",
        "v = 2 km/s and v = 5 km/s"
      ],
      "correctIndex": 0,
      "hint": "Factor (v - 1)(v - 5) = 0.",
      "conceptExplanation": "(v - 1)(v - 5) = 0 gives roots v = 1 km/s and v = 5 km/s.",
      "realWorldApplication": "Orbital mechanics, spacecraft planetary capture, and gravitational slingshot maneuvers."
    },
    {
      "id": "c10_sc14",
      "category": "Construction",
      "title": "Acoustic Concert Hall Ceiling Shell",
      "story": "An auditorium ceiling cross-section has the parabolic acoustic reflector profile y = 12 - 0.03x². Speakers are placed at ground level (y = 0).",
      "problem": "What is the total acoustic reflection span (distance between zero-height endpoints)?",
      "options": [
        "40 metres",
        "35 metres",
        "45 metres",
        "30 metres"
      ],
      "correctIndex": 0,
      "hint": "Set 12 - 0.03x² = 0 $\\rightarrow$ x² = 12 / 0.03 = 400 $\\rightarrow$ x = ±20. Span = 20 - (-20) = 40.",
      "conceptExplanation": "x² = 400 $\\rightarrow$ x = ±20 metres. Total width = 40 metres.",
      "realWorldApplication": "Architectural acoustics, concert hall design, and whispering gallery acoustic wave reflections."
    },
    {
      "id": "c10_sc15",
      "category": "Technology",
      "title": "Photovoltaic Solar Inverter Maximum Power Point (MPPT)",
      "story": "A solar inverter scans voltage V to maximize power output P (in Watts): P(V) = -0.5V² + 30V.",
      "problem": "At what operating voltage V does the inverter extract maximum solar power (MPPT)?",
      "options": [
        "30 Volts",
        "25 Volts",
        "35 Volts",
        "28 Volts"
      ],
      "correctIndex": 0,
      "hint": "Vertex V = -30 / (2 × -0.5) = 30 Volts.",
      "conceptExplanation": "V = -30 / -1 = 30 Volts. Maximum power = -0.5(900) + 30(30) = -450 + 900 = 450 Watts.",
      "realWorldApplication": "Solar inverter MPPT algorithms and renewable grid feed-in controllers."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REAL_LIFE_SCENARIOS;
}
