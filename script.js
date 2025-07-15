document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enterButton");
  const passwordModal = document.getElementById("passwordModal");
  const closeModal = document.getElementById("closeModal");
  const passwordInput = document.getElementById("passwordInput");
  const passwordForm = document.getElementById("passwordForm");

  // Show modal
  enterButton?.addEventListener("click", function () {
    passwordModal.classList.add("show");
    passwordInput.focus(); // Auto-focus
  });

  // Close modal
  closeModal?.addEventListener("click", function () {
    passwordModal.classList.remove("show");
  });

  window.addEventListener("click", function (event) {
    if (event.target === passwordModal) {
      passwordModal.classList.remove("show");
    }
  });

  // Submit password form
  passwordForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    submitPassword();
  });

  // Memories modal
  const memoriesLink = document.getElementById("memoriesLink");
  const memoriesModal = document.getElementById("memoriesModal");
  const closeMemories = document.getElementById("closeMemories");

  memoriesLink?.addEventListener("click", function (e) {
    e.preventDefault();
    memoriesModal.classList.add("show");
  });

  closeMemories?.addEventListener("click", function () {
    memoriesModal.classList.remove("show");
  });

  window.addEventListener("click", function (event) {
    if (event.target === memoriesModal) {
      memoriesModal.classList.remove("show");
    }
  });


  // List modal
  const listLink = document.getElementById("listLink");
  const listModal = document.getElementById("listModal");
  const closeList = document.getElementById("closeList");

  listLink?.addEventListener("click", function (e) {
    e.preventDefault();
    listModal.classList.add("show");
  });

  closeList?.addEventListener("click", function () {
    listModal.classList.remove("show");
  });

  window.addEventListener("click", function (event) {
    if (event.target === listModal) {
      listModal.classList.remove("show");
    }
  });

  // Carousel
  const carouselImages = [
    'img/screenshots/1.png',
    'img/screenshots/2.png',
    'img/screenshots/5.png',
    'img/screenshots/6.png',
    'img/screenshots/7.png',
    'img/screenshots/8.png',
    'img/screenshots/9.png',
    'img/screenshots/10.png',
    'img/screenshots/11.png',
    'img/screenshots/12.png',
    'img/screenshots/13.png',
    'img/screenshots/14.png'
  ];

  let carouselIndex = 0;
  const carouselImg = document.getElementById('carousel-image');
  const prevBtn = document.querySelector('.mprev-btn');
  const nextBtn = document.querySelector('.mnext-btn');

  function showImage(index) {
    carouselImg.style.opacity = 0;
    setTimeout(() => {
      carouselImg.src = carouselImages[index];
      carouselImg.style.opacity = 1;
    }, 300);
  }

  prevBtn?.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(carouselIndex);
  });

  nextBtn?.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    showImage(carouselIndex);
  });

  // Music
  const musicContainer = document.querySelector('.music-container');
  const playBtn = document.querySelector('#play');
  const prevMusicBtn = document.querySelector('#prev');
  const nextMusicBtn = document.querySelector('#next');
  const audio = document.querySelector('#audio');
  const progress = document.querySelector('.progress');
  const progressContainer = document.querySelector('.progress-container');
  const title = document.querySelector('#title');
  const cover = document.querySelector('#cover');

  const songs = [
    {
      title: 'Baby Be Mine - Michael Jackson',
      file: 'Baby Be Mine.mp3',
      cover: 'thriller.png'
    },
    {
      title: 'Fantasy (feat. Don Toliver) - Kali Uchis',
      file: 'Fantasy.mp3',
      cover: 'redmoon.png'
    },
    {
      title: 'Frozen - Sabrina Claudio',
      file: 'Frozen.mp3',
      cover: 'abouttime.png'
    },
    {
      title: 'Diamond Boy (DTM) - SZA ',
      file: 'Diamond Boy (DTM).mp3',
      cover: 'sos_lana.png'
    },
    {
      title: 'Only In My Dreams - The Marias',
      file: 'Only In My Dreams.mp3',
      cover: 'superclean_vol1.png'
    }
  ];

  let songIndex = 0;

  loadSong(songs[songIndex]);

  function loadSong(song) {
    title.innerText = song.title;
    audio.src = `music/${song.file}`;
    cover.src = `img/${song.cover}`;
  }

  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
  }

  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
  }

  function prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  }

  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  // Music player event listeners
  playBtn?.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
  });

  prevMusicBtn?.addEventListener('click', prevSong);
  nextMusicBtn?.addEventListener('click', nextSong);
  audio?.addEventListener('timeupdate', updateProgress);
  progressContainer?.addEventListener('click', setProgress);
  audio?.addEventListener('ended', nextSong);
});

// Password function
function submitPassword() {
  const password = document.getElementById("passwordInput").value.trim();

  if (password === "moromou") {
    alert("Access granted!");
    window.location.href = "homepage.html";
  } else {
    alert("Incorrect password. Hint: It's a nickname, in Greek, all lowercase & no spaces");
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput").focus();
  }
}
