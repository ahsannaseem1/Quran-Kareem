document.addEventListener("DOMContentLoaded", function () {
  const quran_verses = [
    {
      verse:
        "O Prophet! Tell the captives in your custody, “If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you. For Allah is All-Forgiving, Most Merciful.”",
      reference: "Surah 8 - Verse 70",
    },
    {
      verse: "“And Allah would not punish them while they seek forgiveness”",
      reference: "Surah 8 - Verse 33",
    },
    {
      verse:
        "“And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent”",
      reference: "Surah 65 - Verse 3",
    },
    {
      verse: "“My mercy encompasses all things”",
      reference: "Surah 7 - Verse 156",
    },
    {
      verse: "“The truth is from your Lord, so do not be among the doubters”",
      reference: "Surah 3 - Verse 60",
    },
    {
      verse: "“Allah does not burden a soul beyond that it can bear”",
      reference: "Surah 2 - Verse 286",
    },
    {
      verse:
        "“So verily, with the hardship, there is relief. Verily, with the hardship, there is relief”",
      reference: "Surah 94 - Verse 5-6",
    },
    {
      verse:
        "“Do what is beautiful. Allah loves those who do what is beautiful”",
      reference: "Surah 2 - Verse 195",
    },
    {
      verse: "“And your Lord says, Call upon Me; I will respond to you…”",
      reference: "Surah 40 - Verse 60",
    },
    {
      verse:
        "“And those who strive for Us – We will surely guide them to Our ways. And indeed, Allah is with the doers of good.”",
      reference: "Surah 29 - Verse 69",
    },
    {
      verse:
        "“Say, “Nothing will ever befall us except what Allah has destined for us. He is our Protector.” So in Allah let the believers put their trust.”",
      reference: "Surah 9 - Verse 51",
    },
  ];

  var btn = document.getElementById("my-button");
  var verse = document.getElementById("verse");
  var reference = document.getElementById("reference");

  function restartAnimation() {
    verse.classList.remove("fade-in");
    reference.classList.remove("fade-in");

    void verse.offsetWidth;
    void reference.offsetWidth; 
    verse.classList.add("fade-in");
    reference.classList.add("fade-in");
  }
  btn.addEventListener("click", function () {
    var random = Math.floor(Math.random() * quran_verses.length);
    verse.innerText = quran_verses[random].verse;

    reference.innerText = quran_verses[random].reference;
    restartAnimation();
  });
});
