/*
function togglesidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

document
  .getElementById("mobile-toggle")
  .addEventListener("click", togglesidebar);
const questions = [
  {
    question: "God And His Manifestations",
    subquestions: [
      "How can we know if God exists? Can a Creator really be proven?",
      "What is God? How can one 'know' God? What is a 'Manifestation' of God? What do Manifestations do for God? What does a Manifestation do for people? Are Manifestations like ordinary people?",
      "What God do the Baháís believe in, and how is He different from the Jewish / Christian / Muslim God?",
      "Why would a kind God allow undeserved suffering? Where is God when bad things happen to good people?",
      "Why does God allow evil to exist? If God created only good, where did evil come from? What is the nature of evil? {Why does God permit evil individuals to exist and to hurt or even kill others—including children and other innocents?}",
      " How can Bahá’u’lláh prove His claim to be a Manifestation of God? {How can one judge the truth of someone’s claim that he has been sent by God? How do I know Bahá’u’lláh is not a false prophet?}",
      " What do Bahá’ís mean by the “Oneness” of religion? How can the problem of religious prejudices be eliminated?",
      "If all religions come from One Divine Source, as Bahá’ís claim, then why are there so many religions and why are they so different? {What do Bahá’ís mean by “progressive revelation”? Historically, how have people changed religions?}",
      "What is the purpose of religion? What need is there for religion? Looking at all the conflicts caused by religion throughout history, what use is religion? Why do I need religion?",
      "Have there been Manifestations besides the Founders of the nine major religions you mentioned? Did Manifestations appear among the native peoples of Africa / Australia / the Americas? {Will Manifestations of God appear after Bahá’u’lláh?}",
    ],
  },
  {
    question: "The Human Condition",
    subquestions: [
      "What is man? Is man an animal? {Do Bahá’ís believe in the evolution of species? How did humans come to be?}",
      "What is the “soul” (or “spirit”) of man? {How and when is the soul formed? What is the soul’s relationship with the body? Is one’s soul affected by illnesses? What is the difference between one’s soul and mind? Is the soul eternal?",
      "What is the purpose of life? Why did God create humans? {How can one’s soul best prepare for the next life?}",
      "If man is essentially a spiritual being, as Bahá’ís claim, why does God make us go through this physical life with all its challenges / problems? {How does a soul best progress / develop in this life? Why do people experience so many difficulties and such suffering in this world? Why are people tested by God?}",
      " Do Bahá’ís believe in life after death? Can Bahá’ís prove the existence of the human soul and its survival after the death of the body?",
      "What is life after this life like? What do Bahá’ís think about “heaven” and “hell”? {Are there consequences in the afterlife for how one lives here? After death, does God punish people for bad things they did in this life? How do souls progress after death? In the next life will souls recognize and be with loved ones?} ",
      "What are the Bahá’í teachings in regard to suicide?",
      " What do Bahá’ís think about reincarnation? Do Bahá’ís believe in the transmigration of souls? {How do Bahá’ís explain those individuals who claim to recall incidents from “previous lives”, or who display familiarity with places they have not been to or knowledge of people they never met?}",
      "What do Bahá’ís mean when you speak of “independent investigation of truth”? How can I find spiritual or religious “truth”? {Why is searching for religious truth necessary? What is “faith” for Bahá’ís?}",
      " If God wants us to be good, why didn’t He simply make everyone perfect? Why did God give man free will when He could foresee the mess that would lead to?",
      "What do Bahá’ís think of destiny / predestination / fate? How can one tell if an occurrence is God’s Will or the result of man’s free will? {Can one’s fate or destiny be changed?}",
      "What is the Bahá’í attitude towards wealth? {Do Bahá’ís consider material things “bad”?",
      "How can humanity ever achieve true peace and lasting world unity? {What do Bahá’ís mean when you speak of the “maturity” of the human race? How can Bahá’u’lláh’s teachings resolve today’s global mess?}",
      " What makes Bahá’ís think world peace is even possible when aggression and conflict are such ingrained aspects of human nature, and history seems to be nothing more than a record of endless fighting? {Do Bahá’ís think man will ever destroy himself or the planet?}",
      "If people are hungry, how can they think about peace? Why don’t Bahá’ís provide more social/philanthropic services for the needy? {Bahá’í principles sound utopian—why don’t you get involved with practical ways of dealing with the world’s problems?}",
    ],
  },
  {
    question: "The Bahai Faith And Bahais",
    subquestions: [
      "Who is Bahá’u’lláh? What can you tell me about Bahá’u’lláh?",
      "What is the Bahá’í Faith? What is “Bahá’í”?",
      "Is the Bahá’í Faith a “religion”?",
      "What is “a Bahá’í”? What does it mean to be a “Bahá’í”?",
      " Why are you a Bahá’í? How did you become a Bahá’í?",
      "How does a person become a Bahá’í?",
      "Can a child / youth become a Bahá’í? If I become a Bahá’í, are my children automatically considered Bahá’ís?",
      "why should i be a Bahai if i live a good life and don't hurt others?I don't want to join an organized religion ; is there any problem  with just following Bahai's ideals and not becoming a member of Bahai's faith?",
      "Can a person be a Bahá’í and a Christian [or whatever] at the same time?",
      "Can an alcoholic / a drug addict / a prisoner / a mentally ill person / a polygamist / someone living with someone else in an unmarried relationship / a homosexual become a Bahá’í?",
      "Are Bahá’ís truly free of racial, religious, and national prejudices?",
      "Why don’t Bahá’ís have clergy? {How has man corrupted religion?}",
      "Without clergy, how does the Bahá’í Faith function?",
      " Are Bahá’ís expected to give money to the Faith? {Why don’t Bahá’ís accept contributions from non-Bahá’ís who wish to support your objectives?}",
      "If I become a Bahá’í must I go to meetings regularly, or are there any “obligatory” activities I should do or participate in? {What types of meetings or activities do Bahá’ís have?}",
      "What is the “world order” Bahá’ís talk about building? What is the “World Order of Bahá’u’lláh”? {Why is “world order” necessary?}",
      " Over time, won’t the Bahá’í Faith be corrupted or split by individuals within it, as happened with other religions? Won’t the “winter” or decline that happened to all past religions also one day afflict the Bahá’í Faith?",
      "How can Bahá’ís say nine ordinary men become an “infallible” Universal House of Justice? {How is infallibility even possible?}",
      "Why can’t women be members of the Universal House of Justice, especially considering Bahá’u’lláh’s teaching about the equality of women with men?",
      "When so many people are suffering in the world, why do Bahá’ís spend on constructing expensive things like Bahá’í Temples, or the buildings and terraces in Haifa?",
      "Since Bahá’ís want to make this a better world, why don’t you get more involved in politics?",
      " Are there any rituals or ceremonies in the Bahá’í Faith? Why do the Bahá’í obligatory prayers require certain physical actions?",
      "What is the symbol of the Bahá’í Faith?",
      "Where do Bahá’ís meet? Do Bahá’ís have churches / mosques / synagogues? What is the purpose of a Bahá’í Temple?",
      "Why do Bahá’í Temples have nine sides? Why is the number '9' important for Bahá’ís?",
    ],
  },
  {
    question: "Bahai Principles Laws And Beliefs",
    subquestions: [
      "Why is religion so involved in regulating people’s actions? {Of what benefit are religious laws that seek to control human behavior?} ",
      "How can one judge if something is “good” or “bad”? With so many disparate beliefs and moral systems, how can people ever agree on one standard in preference over another? What standard determines “rightness”?",
      "W Can you give me examples of some “new” teachings of Bahá’u’lláh which Bahá’ís say were not revealed in any past religions?",
      " What do Bahá’ís mean by the “Oneness of Humanity / Mankind”?",
      "How are the Bahá’í Teachings regarding the oneness of mankind different from other religions?",
      "Racial prejudices are such a big problem, how can they ever be resolved? {What do Bahá’ís think about inter-racial marriage?}",
      "What do Bahá’ís mean by “unity in diversity”?",
      "How can the problem of national prejudice or extreme patriotism ever be resolved? ",
      "What do Bahá’ís mean by “equality” between women and men? How is this teaching “new” compared to other religions?",
      " I hear Bahá’ís promote universal education, but also say, when a choice must be made, that girls should be educated in preference over boys— why is that, and isn’t such an idea unfair to boys?",
      "What do Bahá’ís mean by a “universal auxiliary language”? What are the benefits of having an international auxiliary language as taught by Bahá’u’lláh?",
      "It seems implementing Bahá’u’lláh’s mandate of an international auxiliary language might actually foster the destruction of small indigenous cultures and their languages which are today on the brink of extinction—do Bahá’ís think that is the “Will” of God? Doesn’t promoting use of an international language undermine or contradict Bahá’u’lláh’s principle of “unity in diversity”?",
      "How can Bahá’ís say science and religion must “agree” when they so obviously don’t?",
      "Where do Bahá’ís stand on various environmental issues?",
      "What do Bahá’ís think about the problem of global over-population, especially considering the planet’s dwindling resources?",
      "How do Bahá’ís think the world’s economic problems can be solved? Can problems stemming from the great disparity between “haves” and “have-nots”—the extremes of wealth and poverty we see between individuals as well as nations—ever be fairly resolved?",
      " What is the importance or purpose of prayer? Why has Bahá’u’lláh made prayer a daily obligation?",
      " What do Bahá’ís mean by “meditation”? How do Bahá’ís meditate? {What are some benefits of meditation?}",
      "What is the Bahá’í fast? Why do Bahá’ís fast? {Is fasting healthy or safe?}",
      "Why do Bahá’ís think it is wrong for a couple to live together before they are married? Why are Bahá’ís opposed to pre-marital sex? {Why is chastity before marriage important?}",
      "What are the Bahá’í teachings regarding homosexuality?",
      "What do Bahá’ís believe to be the purpose(s) of marriage? Do Bahá’ís have any special requirements for marriage?",
      " Why must Bahá’ís obtain parental consent for marriage? If you’re fifty, what is the point of getting parental consent for marriage? What can a Bahá’í do if a parent refuses to consent to your marrying someone?",
      "What is the Bahá’í position on birth control / sterilization / abortion?",
      "Is divorce allowed in the Bahá’í Faith? What is the Bahá’í attitude towards divorce?",
      "What is the Bahá’í attitude towards the use of alcohol? {What is the Bahá’í attitude towards the use of mind-altering drugs?}",
      "Do the Bahá’í Teachings say anything about smoking?",
      "What do Bahá’ís believe about psychic phenomena?",
      "Do Bahá’ís believe life exists elsewhere in this universe?",
    ],
  },
  {
    question: "Bahai Prayers",
    subquestions: [
      "Baha'i prayer for Children",
      "  Baha'i Prayer for Departed",
      "Baha'i Prayer for Healing",
    ],
  },
  {
    question: "The Hidden Words Of Bahaullah",
    subquestions: [
      "O Son of Being!",
      "O Son of Light!",
      "O Son of Man!",
      " O Son of the Supreme!",
    ],
  },
  {
    question: "The Bahai Faith And Other Religions",
    subquestions: [
      "What is the Bahá’í attitude toward other religions?",
      "Is the Bahá’í Faith a sect or offshoot of Islam? What is the connection between the Bahá’í Faith and Islam?",
      "What is the difference between the Bahá’í Faith and Christianity [or any other religion]?",
      "Why do Bahá’ís think world unity cannot be achieved through the teachings of any of the other religions?",
      "What do Bahá’ís believe about the Trinity? What do Bahá’ís believe regarding Jesus being the “Son of God”? Did Bahá’u’lláh claim to be God, like Jesus? {Do Bahá’ís accept that Jesus is God?}",
      "Do Bahá’ís believe in Jesus’ bodily resurrection and ascension? Through His resurrection Jesus proved His power over death; what about Bahá’u’lláh? ",
      "Do Bahá’ís believe Christ will return? The Bible associates certain signs with Jesus’ return—but these have not yet all happened, so how can Bahá’ís say Christ has “already returned”? {Why did Bahá’u’lláh claim to be the “return of Christ” when He was obviously not Christ? What do Bahá’ís think of Bible prophecies?}",
      "What do Bahá’ís think about the “judgment day” / “end of the world” spoken of in various scriptures? Do Bahá’ís think God will one day destroy the world? ",
      "Do Bahá’ís believe in the story of Adam and Eve as related in the Bible, and in the biblical account of creation?",
      "What do Bahá’ís think about Salvation and the need to accept Jesus as one’s personal Savior? Do Bahá’ís believe Jesus died to atone for our sins? {Do Bahá’ís think they are saved and others are not?}",
      " Do Bahá’ís get baptized? What do Bahá’ís think about baptism? {How do Bahá’ís understand Jesus’ call for a person to be “born again”?}",
      "Jesus performed many miracles, proving He had the power of God— what about Bahá’u’lláh, did He do any miracles?",
      "What do Bahá’ís think about Satan / the Devil, his leading people astray, and his fight against God? {Do Bahá’ís believe “evil spirits” exist?} ",
      "What do Bahá’ís believe regarding the Christian claim that Jesus is the only “way” to God?",
      "Do Bahá’ís consider the Bible authentic / absolutely true? ",
      "The Bible tells us it is complete in truth, that nothing needs to be or should be added unto it—so why would a Christian need Bahá’u’lláh’s teachings?",
      "How can Bahá’u’lláh be considered “like Jesus” / “a Manifestation of God” when He got married and had children? {Do Bahá’ís think priests or nuns should marry?}",
      "How can Bahá’ís say Moses is equal in greatness to Christ when Moses was a murderer? {Why does God place stumbling blocks in the way of recognizing His Manifestations?}",
      "Do Bahá’ís believe in Jesus’ virgin birth? Since a virgin birth is contrary to science, isn’t acceptance of Jesus’ virgin birth against the Bahá’í Teaching that religious beliefs must be provable by science?",
      "Do Bahá’ís celebrate Christmas?",
      "Do Bahá’ís consider the founder of Mormonism [or whatever] a Prophet? {Do Bahá’ís accept Confucius or Lao-tse as Prophets?}",
      "I am happy and feel spiritually secure as a Christian [or whatever], is there any reason I should learn more about Bahá’u’lláh?",
    ],
  },
];
let currentlyOpenIndex = null;

const questionList = document.getElementById("question-list");

questions.forEach((q, index) => {
  const li = document.createElement("li");
  li.className = "cursor-pointer border question-item";
  li.innerHTML = `<span class="plus-minus">+</span> ${q.question}`;

  const subquestionsDiv = document.createElement("div");
  subquestionsDiv.className =
    "subquestions hidden mt-2 ml-4 max-h-[60vh] overflow-y-auto";

  q.subquestions.forEach((subq) => {
    const subLi = document.createElement("div");
    subLi.className = "cursor-pointer subquestion-item";
    subLi.textContent = subq;
    subLi.onclick = () => addMessageToChat(subq);
    subquestionsDiv.appendChild(subLi);
  });

  li.appendChild(subquestionsDiv);

  li.onclick = () => {
    toggleSubquestions(index, subquestionsDiv, li);
  };

  questionList.appendChild(li);
});

function toggleSubquestions(index, subquestionsDiv, li) {
  if (currentlyOpenIndex !== null && currentlyOpenIndex !== index) {
    const previousSubquestions =
      document.querySelectorAll(".subquestions")[currentlyOpenIndex];
    if (previousSubquestions) {
      previousSubquestions.classList.add("hidden");
      document.querySelectorAll(".question-item .plus-minus")[
        currentlyOpenIndex
      ].textContent = "+";

      // Remove sticky class from previously open question
      document
        .querySelectorAll(".question-item")
        [currentlyOpenIndex].classList.remove("sticky-question");
    }
  }

  // Toggle the clicked subquestions
  subquestionsDiv.classList.toggle("hidden");
  const plusMinus = li.querySelector(".plus-minus");
  plusMinus.textContent = subquestionsDiv.classList.contains("hidden")
    ? "+"
    : "-";

  // Update currentlyOpenIndex if the subquestions are visible, otherwise reset it
  currentlyOpenIndex = subquestionsDiv.classList.contains("hidden")
    ? null
    : index;

  // Add sticky class to the currently open question
  if (!subquestionsDiv.classList.contains("hidden")) {
    li.classList.add("sticky-question");
  } else {
    li.classList.remove("sticky-question");
  }
}

function addMessageToChat(question) {
  const chat = document.getElementById("chat");

  // Display the question on the right with an icon
  const questionContainer = document.createElement("div");
  questionContainer.className = "flex justify-end mb-2";

  const questionText = document.createElement("span");
  questionText.textContent = ` ${question}`;
  questionText.className = "p-2 bg-[#EDDDB8] text-right rounded-lg mr-2";

  const questionIcon = document.createElement("img");
  questionIcon.src = "https://cdn-icons-png.flaticon.com/512/9187/9187604.png";
  questionIcon.alt = "Q";
  questionIcon.className = "w-4 h-4 rounded-full";

  questionContainer.appendChild(questionText);
  questionContainer.appendChild(questionIcon);
  chat.appendChild(questionContainer);

  chat.scrollTop = chat.scrollHeight;

  togglesidebar();
  fetchResponses(question);
}

async function fetchResponses(question) {
  try {
    const textResponse = fetch(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
    );

    const audioUrl =
      "https://cors-anywhere.herokuapp.com/https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    const audioResponse = fetch(audioUrl);

    const [textStream, audioStream] = await Promise.all([
      textResponse,
      audioResponse,
    ]);

    const chat = document.getElementById("chat");

    // Display answer header
    const answerContainer = document.createElement("div");
    answerContainer.className = "p-2 bg-gray-200 text-left rounded-lg mb-1";

    await Promise.all([
      streamTextResponse(textStream, answerContainer),
      playAudioResponse(audioStream),
    ]);
  } catch (error) {
    console.error("Error fetching responses:", error);
  }
}

async function streamTextResponse(textStream) {
  const reader = textStream.body.getReader();
  const decoder = new TextDecoder();
  let result = "";

  // Create the answerContainer and responseIcon outside the loop
  const answerContainer = document.createElement("div");
  answerContainer.className = "flex justify-start mb-2";

  const responseIcon = document.createElement("img");
  responseIcon.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctdklY0rTAOFLxu7DMt9qsMWff4Aokb487A&s";
  responseIcon.alt = "A";
  responseIcon.className = "w-4 h-4 mr-2 rounded-full";

  const responseMessage = document.createElement("div");
  responseMessage.className = "p-2 bg-gray-200 text-left rounded-lg";

  answerContainer.appendChild(responseIcon);

  const chat = document.getElementById("chat");

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    const words = chunk.split(" ");

    for (const word of words) {
      result += word + " ";

      responseMessage.textContent = ` ${result.trim()}`;

      if (result.trim() === word) {
        answerContainer.appendChild(responseMessage);
        chat.appendChild(answerContainer);
      }

      chat.scrollTop = chat.scrollHeight;

      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
}

async function playAudioResponse(audioStream) {
  const audioBlob = await audioStream.blob();
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  audio.play();

  audio.onended = () => {
    URL.revokeObjectURL(audioUrl); // Release memory when audio ends
  };
}
*/

import { questions } from "./questions.js";
import { responses } from "./responses.js";

function togglesidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

document
  .getElementById("mobile-toggle")
  .addEventListener("click", togglesidebar);

let currentlyOpenIndex = null;
let currentAudio = null; // Track the current audio
let stopTextStreaming = false; // Flag to control text streaming

const questionList = document.getElementById("question-list");

questions.forEach((q, index) => {
  const li = document.createElement("li");
  li.className = "cursor-pointer border question-item";
  li.innerHTML = `<span class="plus-minus">+</span> ${q.question}`;

  const subquestionsDiv = document.createElement("div");
  subquestionsDiv.className =
    "subquestions hidden mt-2 ml-4 max-h-[60vh] overflow-y-auto";

  q.subquestions.forEach((subq) => {
    const subLi = document.createElement("div");
    subLi.className = "cursor-pointer subquestion-item";
    subLi.textContent = subq;
    subLi.onclick = () => addMessageToChat(subq);
    subquestionsDiv.appendChild(subLi);
  });

  li.appendChild(subquestionsDiv);

  li.onclick = () => {
    toggleSubquestions(index, subquestionsDiv, li);
  };

  questionList.appendChild(li);
});

function toggleSubquestions(index, subquestionsDiv, li) {
  if (currentlyOpenIndex !== null && currentlyOpenIndex !== index) {
    const previousSubquestions =
      document.querySelectorAll(".subquestions")[currentlyOpenIndex];
    if (previousSubquestions) {
      previousSubquestions.classList.add("hidden");
      document.querySelectorAll(".question-item .plus-minus")[
        currentlyOpenIndex
      ].textContent = "+";
      document
        .querySelectorAll(".question-item")
        [currentlyOpenIndex].classList.remove("sticky-question");
    }
  }

  subquestionsDiv.classList.toggle("hidden");
  const plusMinus = li.querySelector(".plus-minus");
  plusMinus.textContent = subquestionsDiv.classList.contains("hidden")
    ? "+"
    : "-";

  currentlyOpenIndex = subquestionsDiv.classList.contains("hidden")
    ? null
    : index;

  if (!subquestionsDiv.classList.contains("hidden")) {
    li.classList.add("sticky-question");
  } else {
    li.classList.remove("sticky-question");
  }
}

function addMessageToChat(question) {
  const chat = document.getElementById("chat");

  const questionContainer = document.createElement("div");
  questionContainer.className = "flex justify-end mb-2";

  const questionText = document.createElement("span");
  questionText.textContent = ` ${question}`;
  questionText.className = "p-2 bg-[#EDDDB8] text-right rounded-lg mr-2";

  const questionIcon = document.createElement("img");
  questionIcon.src = "https://cdn-icons-png.flaticon.com/512/9187/9187604.png";
  questionIcon.alt = "Q";
  questionIcon.className = "w-4 h-4 rounded-full";

  questionContainer.appendChild(questionText);
  questionContainer.appendChild(questionIcon);
  chat.appendChild(questionContainer);

  chat.scrollTop = chat.scrollHeight;

  togglesidebar();
  displayResponses(question);
}

async function displayResponses(question) {
  // Stop any ongoing response before starting a new one
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  stopTextStreaming = true;

  const response = responses[question];
  if (!response) {
    console.warn("No response found for this question.");
    return;
  }

  const chat = document.getElementById("chat");

  const answerContainer = document.createElement("div");
  answerContainer.className = "p-2 bg-gray-200 text-left rounded-lg mb-1";

  // Set a flag for new streaming and play audio
  stopTextStreaming = false;
  await Promise.all([
    streamTextResponse(response.text, answerContainer),
    playAudioResponse(response.audioUrl),
  ]);
}

async function streamTextResponse(text, answerContainer) {
  const chat = document.getElementById("chat");
  let result = "";

  // Iterate through each word but check if we need to stop streaming
  for (const word of text.split(" ")) {
    if (stopTextStreaming) return; // Stop if a new question was selected
    result += word + " ";
    answerContainer.textContent = result.trim();
    chat.appendChild(answerContainer);
    chat.scrollTop = chat.scrollHeight;
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}

function playAudioResponse(audioUrl) {
  return new Promise((resolve) => {
    const audio = new Audio(audioUrl);
    currentAudio = audio; // Set current audio instance

    audio.play();
    audio.onended = () => {
      URL.revokeObjectURL(audioUrl);
      currentAudio = null;
      resolve();
    };
    audio.onerror = () => {
      currentAudio = null;
      resolve();
    };
  });
}
