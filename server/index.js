const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// app.post("/api/sign", (req, res) => {
//   const newDate = (monthIndex, day)
//   const {type} = req.body
//   const sign = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
  
  

// })

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes =["A bird will poop on your head at high noon tomorrow.", "You were adopted.", "Your life will change when you ask your parents who your real birth mother is",
          "Do you actually like Star Wars or is it just nostalgia? Think about it.", "Nothing good will happen in your life."
        ];

        let randomNumbers = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomNumbers];

        res.status(200).send(randomFortune);
});

app.get("/api/aries", (req, res) => {
   let ariesHoroscope= "The day turns out to be quite promising for people under this sign. Taking a step closer to the job you aspire for is indicated for some. You don't need to compare yourself to anyone in academics since you are smart enough to manage your affairs and work on your strengths. Organizing a family get-together after a long time will get you the thumbs up from one and all. Friends will appreciate your insistence on healthy foods. -Hindustan Times"
   res.status(200).send(ariesHoroscope)
  
});

app.get("/api/taurus", (req, res) => {
  let taurusHoroscope= "Judicious investments done now will secure your financial future. Those training for a big sporting event may find a marked improvement in their performance. If your parents are not letting you do your own thing, don't be accusatory, instead share your desires with them; these interactions are likely to go in your favour. Today, your senior can ask you to stay back after office hours for something important. -Hindustan Times"
  res.status(200).send(taurusHoroscope)
 
});

app.get("/api/gemini", (req, res) => {
  let geminiHoroscope= "Today, you may have to be a bit firm at work to drive home your point. Don't have a casual attitude towards class tests, as they may count towards your grading at a later stage. It will be sensible not to get tempted by the get-rich-quick schemes, as it is a sure way to lose money. You are likely to feel liberated, once you get something you had been hiding, off your chest. -Hindustan Times"
  res.status(200).send(geminiHoroscope)
 
});

app.get("/api/cancer", (req, res) => {
  let cancerHoroscope= "Roping in a friend to do fitness training with you will save you the monotony of working out alone. Some of you may be in the last stages of transferring property in your name. If parents are wary of your career choices, you may not be able to change their views, but you can change the way you deal with them. Don't be reluctant to adapt yourself to changes at the workplace. Be smart and don't leave exam preparations for the very last. -Hindustan Times"
  res.status(200).send(cancerHoroscope)
 
});

app.get("/api/leo", (req, res) => {
  let leoHoroscope= "An outstanding amount may get released and add to your financial stability. Choosing healthy foods over fast foods will keep lifestyle diseases away. Your dream of getting trained in music or art will soon get fulfilled. A business tour is on the cards for those in the oil industry. Don't fall behind in keeping up with what is being taught in the class, for it may become difficult to catch up later. -Hindustan Times"
  res.status(200).send(leoHoroscope)
 
});

app.get("/api/virgo", (req, res) => {
  let virgoHoroscope= "If you find competitive exams daunting, don't think about them and just perform to the best of your abilities. Don't fall for someone's shop-talk for investing in a scheme that appears dubious to you. Driving to a nearby tourist destination in your new car with family is likely to give you a high. You can be asked to explain the delay in completing a project at work by higher-ups. -Hindustan Times"
  res.status(200).send(virgoHoroscope)
 
});

app.get("/api/scorpio", (req, res) => {
  let scorpioHoroscope= "Your contribution towards the successful completion of a project at work will be lauded by those who matter. You will do well to remain in the good books of your teacher. Preparing never-tried-before healthy recipes is likely to break the monotony of usual dishes. Attending a school or course get-together in another city is indicated. You will manage the admission of a child to a college of their choice by approaching someone influential. -Hindustan Times"
  res.status(200).send(scorpioHoroscope)
 
});

app.get("/api/libra", (req, res) => {
  let libraHoroscope= "It may become difficult to refuse a friend offering a property deal, but take your time and vet it thoroughly. Higher-ups will bank upon you to accomplish something important for the company and you will not disappoint. A pat on the back from your teacher for your achievements in school is likely to boost your morale. Steer clear of domestic squabbles or arguments, as they can disturb your peace of mind. Inculcate healthy eating habits. -Hindustan Times"
  res.status(200).send(libraHoroscope)
 
});

app.get("/api/sagittarius", (req, res) => {
  let sagittariusHoroscope= "You may accompany the boss for an important negotiation abroad. Impressing a teacher with your performance is likely to put you in their good books. Those contemplating giving yoga a try should do so under a yoga expert and not through videos. There is no point in seeking validation from a person who is never there for you. A property you inherited from your forefathers can be challenged by a distant relative, but you will manage to thwart their claim. -Hindustan Times"
  res.status(200).send(sagittariusHoroscope)
 
});

app.get("/api/capricorn", (req, res) => {
  let capricornHoroscope= "Don't let the educational system, that constantly evaluates performance, compel you to develop a self-critical habit of grading yourself. Raising the rent of your house is likely to bring in good money. Running is good for health, so tune your body by running short distances, before you attempt longer ones. A negative development at work can worry you, but your timely intervention will salvage the situation. House renovation is on the cards for some. -Hindustan Times"
  res.status(200).send(capricornHoroscope)
 
});

app.get("/api/aquarius", (req, res) => {
  let aquariusHoroscope= "You can be given the responsibility of organising a college excursion for your class, so take all into confidence about your plans. A project going at a snail's pace at work needs to be put on the fast track. If you are facing a cash crunch, there is nothing wrong with borrowing money from your dear ones and pay it back later, when your financial situation improves. Siblings may soon plan a get together to celebrate something special. -Hindustan Times"
  res.status(200).send(aquariusHoroscope)
 
});

app.get("/api/pisces", (req, res) => {
  let piscesHoroscope= "You are likely to take up the mantle of leading your team at work, as a team leader. Receiving pre-prepared notes of important subjects will save you a lot of time. There is no point in selling a property when the market is down, so wait for the opportune moment when the demand rises. Avoid any old ailment that may recur by making some positive lifestyle changes. Control your spending and focus on saving. -Hindustan Times"
  res.status(200).send(piscesHoroscope)
 
});

app.listen(4000, () => console.log("Server running on 4000"));
