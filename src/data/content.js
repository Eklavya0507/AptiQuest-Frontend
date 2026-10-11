export const courses = [
  {id:'percentages',name:'Percentages',category:'Quantitative Aptitude',emoji:'%',icon:'percent',color:'violet',description:'Master percentages from basics to advanced problem solving.',lessons:8,duration:'2h 20m',difficulty:'Beginner',topics:['What is a Percentage?','Converting Fractions','Percentage Increase & Decrease','Successive Percentage Change','Profit, Discount & Tax','Reverse Percentages','Word Problems','Quick Revision']},
  {id:'data-interpretation',name:'Data Interpretation',category:'Quantitative Aptitude',emoji:'▤',color:'blue',description:'Read tables, charts, and graphs with confidence.',lessons:10,duration:'3h 10m',difficulty:'Intermediate',topics:['Tables','Bar Charts','Pie Charts','Line Graphs']},
  {id:'blood-relations',name:'Blood Relations',category:'Logical Reasoning',emoji:'♧',color:'pink',description:'Solve complex family tree and relationship puzzles.',lessons:6,duration:'1h 50m',difficulty:'Beginner',topics:['Family Relations','Generation Mapping','Family Tree Diagrams']},
  {id:'averages',name:'Averages',category:'Quantitative Aptitude',emoji:'≈',color:'teal',description:'Build speed with averages and weighted means.',lessons:7,duration:'2h 10m',difficulty:'Beginner',topics:['Arithmetic Mean','Combined Average','Weighted Average']},
  {id:'partnership-ages',name:'Partnership & Ages',category:'Word Problems',emoji:'∞',color:'amber',description:'Understand age equations and partnership profit sharing.',lessons:8,duration:'2h 40m',difficulty:'Intermediate',topics:['Age Equations','Ratio of Ages','Partnership Basics']},
  {id:'permutations',name:'Permutations & Combinations',category:'Quantitative Aptitude',emoji:'⌘',color:'coral',description:'Count arrangements and selections without confusion.',lessons:9,duration:'3h 15m',difficulty:'Advanced',topics:['Fundamental Counting','Factorials','Permutations','Combinations']},
];

export const questionBank = {
  percentages: [
    {question:'What is 25% of 240?',options:['40','50','60','80'],answer:2,explain:'25% = 1/4. So 240 ÷ 4 = 60.'},
    {question:'If a number increases from 80 to 100, what is the percentage increase?',options:['15%','20%','25%','30%'],answer:2,explain:'Increase = 100 − 80 = 20. (20 ÷ 80) × 100 = 25%.'},
    {question:'15% of 200 equals:',options:['15','20','30','40'],answer:2,explain:'(15 ÷ 100) × 200 = 30.'},
    {question:'A shirt costs ₹800 after a 20% discount. What was its original price?',options:['₹900','₹960','₹1000','₹1200'],answer:2,explain:'After 20% off you pay 80%. Original = 800 ÷ 0.8 = ₹1000.'},
    {question:'60 is what percentage of 150?',options:['25%','30%','40%','50%'],answer:2,explain:'(60 ÷ 150) × 100 = 40%.'},
    {question:'A price rises by 10% then falls by 10%. Net change?',options:['No change','1% decrease','1% increase','10% decrease'],answer:1,explain:'Start at 100 → 110 → 99, a 1% decrease.'},
    {question:'What is 12.5% of 640?',options:['64','70','80','96'],answer:2,explain:'12.5% = 1/8, so 640 ÷ 8 = 80.'},
    {question:'If 30% of a number is 90, find the number.',options:['180','210','270','300'],answer:3,explain:'90 ÷ 0.30 = 300.'},
    {question:'A score changes from 50 to 65. Percentage increase?',options:['20%','25%','30%','35%'],answer:2,explain:'(15 ÷ 50) × 100 = 30%.'},
    {question:'If 40% of students are girls and there are 120 students, how many girls?',options:['40','48','60','72'],answer:1,explain:'120 × 0.40 = 48 girls.'},
    {question:'20% of x is 44. Find x.',options:['200','210','220','240'],answer:2,explain:'x = 44 ÷ 0.20 = 220.'},
    {question:'What is 75% of 360?',options:['240','260','270','300'],answer:2,explain:'75% = 3/4; 360 × 3/4 = 270.'}
  ],
  'data-interpretation': [
    {question:'A store sold 20, 30 and 40 items in three days. Total sales?',options:['70','80','90','100'],answer:2,explain:'20 + 30 + 40 = 90.'},
    {question:'A pie chart sector of 90° represents what percent of the whole?',options:['20%','25%','30%','50%'],answer:1,explain:'(90 ÷ 360) × 100 = 25%.'},
    {question:'The mean of 12, 18, 30 is:',options:['18','20','22','24'],answer:1,explain:'(12 + 18 + 30) ÷ 3 = 20.'}
  ],
  'blood-relations': [
    {question:'A is B’s mother. B is C’s brother. How is A related to C?',options:['Aunt','Mother','Sister','Grandmother'],answer:1,explain:'B and C are siblings, and A is the mother of both.'},
    {question:'Your mother’s father is your:',options:['Uncle','Paternal grandfather','Maternal grandfather','Brother'],answer:2,explain:'Mother’s father is maternal grandfather.'},
    {question:'My father’s sister is my:',options:['Aunt','Cousin','Niece','Grandmother'],answer:0,explain:'Father’s sister is paternal aunt.'}
  ],
  averages: [
    {question:'What is the average of 10, 20 and 30?',options:['15','20','25','30'],answer:1,explain:'(10 + 20 + 30) ÷ 3 = 20.'},
    {question:'Five numbers total 100. Their average is:',options:['10','15','20','25'],answer:2,explain:'100 ÷ 5 = 20.'},
    {question:'Average of 4, 6, 8, 10?',options:['6','7','8','9'],answer:1,explain:'(4 + 6 + 8 + 10) ÷ 4 = 7.'}
  ],
  'partnership-ages': [
    {question:'A:B invests money in ratio 2:3 for equal duration. Profit ratio?',options:['3:2','2:3','4:9','1:1'],answer:1,explain:'Profit shares follow invested capital × time, so 2:3.'},
    {question:'A person is 20 today. Age after 7 years?',options:['25','26','27','28'],answer:2,explain:'20 + 7 = 27.'},
    {question:'Two partners divide ₹500 in ratio 2:3. Larger share?',options:['₹200','₹250','₹300','₹350'],answer:2,explain:'3/5 × ₹500 = ₹300.'}
  ],
  permutations: [
    {question:'Number of ways to arrange 3 distinct books?',options:['3','6','9','12'],answer:1,explain:'3! = 3 × 2 × 1 = 6.'},
    {question:'How many ways to select 2 from 4 items?',options:['4','6','8','12'],answer:1,explain:'4C2 = 4! / (2! × 2!) = 6.'},
    {question:'Value of 5 factorial?',options:['20','60','100','120'],answer:3,explain:'5! = 5 × 4 × 3 × 2 × 1 = 120.'}
  ]
};

// Final exams must not reuse the same questions as the practice set.
export const finalQuestionBank = {
  'data-interpretation': [
    {question:'A bar chart shows sales of 45, 55, 60, and 40 units. What is the total?',options:['180','190','200','210'],answer:2,explain:'Total = 45 + 55 + 60 + 40 = 200.'},
    {question:'In a class of 80, 25% choose science. How many students is that?',options:['15','20','25','30'],answer:1,explain:'80 × 25/100 = 20.'},
    {question:'Monthly expenses are 200, 250 and 300. What is the average?',options:['225','250','275','300'],answer:1,explain:'(200 + 250 + 300) / 3 = 250.'},
    {question:'A sector of 72° on a pie chart represents what percent?',options:['10%','15%','20%','25%'],answer:2,explain:'72/360 × 100 = 20%.'},
    {question:'Production increased from 150 to 180. Percentage increase?',options:['10%','15%','20%','25%'],answer:2,explain:'30/150 × 100 = 20%.'}
  ],
  'blood-relations': [
    {question:'P is the brother of Q, and Q is the mother of R. P is R’s:',options:['Father','Uncle','Brother','Grandfather'],answer:1,explain:'The brother of a person’s mother is their maternal uncle.'},
    {question:'The daughter of my sister is my:',options:['Niece','Cousin','Aunt','Mother'],answer:0,explain:'Your sister’s daughter is your niece.'},
    {question:'My father’s father is my:',options:['Maternal uncle','Paternal grandfather','Brother','Nephew'],answer:1,explain:'Father’s father is paternal grandfather.'},
    {question:'A’s mother is B’s daughter. B is A’s:',options:['Parent','Grandparent','Sibling','Cousin'],answer:1,explain:'Mother’s parent is a grandparent.'},
    {question:'My brother’s son is my:',options:['Uncle','Nephew','Grandson','Cousin'],answer:1,explain:'A sibling’s son is a nephew.'}
  ],
  averages: [
    {question:'Average of 12, 18, 24 and 26 is:',options:['18','20','22','24'],answer:1,explain:'Total 80 divided by 4 = 20.'},
    {question:'Average of six numbers is 15. Their sum is:',options:['60','75','90','100'],answer:2,explain:'Average × count = 15 × 6 = 90.'},
    {question:'Average of 5 and x is 11. Find x.',options:['14','15','16','17'],answer:3,explain:'(5 + x)/2 = 11 so x = 17.'},
    {question:'Three tests score 60, 80 and 100. Average score?',options:['70','75','80','85'],answer:2,explain:'(60 + 80 + 100)/3 = 80.'},
    {question:'Average age of 4 people is 25. Sum of ages?',options:['80','90','100','110'],answer:2,explain:'25 × 4 = 100.'}
  ],
  'partnership-ages': [
    {question:'A:B invest 3:4 for equal time. If total profit is ₹700, B gets:',options:['₹300','₹350','₹400','₹450'],answer:2,explain:'B gets 4/7 of ₹700 = ₹400.'},
    {question:'Riya is 12 and her brother is 18. Their age difference after 10 years?',options:['4','6','8','10'],answer:1,explain:'The age difference remains 6 years.'},
    {question:'A invests ₹1000 for 12 months, B invests ₹2000 for 6 months. Profit ratio?',options:['1:2','2:1','1:1','3:2'],answer:2,explain:'Money × time = 12000:12000 = 1:1.'},
    {question:'A father is 40 and his daughter 10. In 5 years, what is their age ratio?',options:['3:1','4:1','2:1','5:1'],answer:0,explain:'After 5 years: 45:15 = 3:1.'},
    {question:'A and B share ₹900 in ratio 4:5. A receives:',options:['₹350','₹400','₹450','₹500'],answer:1,explain:'A gets 4/9 × ₹900 = ₹400.'}
  ],
  permutations: [
    {question:'How many ways to arrange 4 different letters?',options:['12','18','24','36'],answer:2,explain:'4! = 4 × 3 × 2 × 1 = 24.'},
    {question:'How many ways to choose 1 item from 7 distinct items?',options:['1','6','7','14'],answer:2,explain:'7C1 = 7.'},
    {question:'Value of 0 factorial?',options:['0','1','2','Undefined'],answer:1,explain:'0! is defined as 1.'},
    {question:'How many ways can 2 of 5 distinct people be selected?',options:['5','8','10','20'],answer:2,explain:'5C2 = 5×4/2 = 10.'},
    {question:'How many permutations of 2 from 4 distinct objects?',options:['6','8','12','16'],answer:2,explain:'4P2 = 4 × 3 = 12.'}
  ]
};
export const getPracticeQuestions = (id) => (questionBank[id] || []).slice(0, 5);
export const getFinalQuestions = (id) => id === 'percentages' ? (questionBank[id] || []).slice(5) : (finalQuestionBank[id] || []);

export const games = [
  {id:'math',name:'Math Sprint',subtitle:'Think fast. Calculate faster.',icon:'calculator',color:'violet',tag:'Popular',description:'Rapid-fire arithmetic battles against a demo bot.'},
  {id:'tables',name:'Tables Challenge',subtitle:'Multiply your speed.',icon:'hash',color:'amber',tag:'Quick play',description:'Timed multiplication and number drills.'},
  {id:'logic',name:'Logic Duel',subtitle:'Patterns meet precision.',icon:'brain',color:'pink',tag:'Brain power',description:'Solve sequence puzzles and logic patterns.'},
  {id:'sudoku',name:'Sudoku Battle',subtitle:'One grid. Pure focus.',icon:'grid-3x3',color:'blue',tag:'Solo puzzle',description:'Play a local Sudoku board with validation.'}
];

export const initialLeaderboard = [
 {name:'Aarav K.',xp:4290,wins:28,state:'Karnataka',institute:'EPCET',avatar:'AK'},
 {name:'Ananya R.',xp:3950,wins:24,state:'Karnataka',institute:'EPCET',avatar:'AR'},
 {name:'Riya S.',xp:3580,wins:21,state:'Karnataka',institute:'RVCE',avatar:'RS'},
 {name:'Kabir M.',xp:3140,wins:19,state:'Maharashtra',institute:'VJTI',avatar:'KM'},
 {name:'Meera P.',xp:2970,wins:17,state:'Karnataka',institute:'EPCET',avatar:'MP'},
];
