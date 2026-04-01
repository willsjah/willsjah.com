// ── PROJECT DATA ──────────────────────────────────────────────
// imgs: array of photo paths. First is the main photo shown on open.
// If only one photo, no thumbnail strip is shown.

const projects = {
  korean: {
    title: "Korean Speaking Practice App",
    meta: "iOS · In progress · 2025",
    imgs: [
      "assets/work/korean-app.jpg",
      "assets/work/korean-app-2.jpg",
      "assets/work/korean-app-3.jpg"
    ],
    body: "An app I'm building to help people practice speaking Korean conversationally. Uses AI to give real-time feedback on pronunciation and fluency. My current experiment — learning Korean and building the tool to learn it at the same time."
  },
  academy: {
    title: "Apple Developer Academy",
    meta: "Mentor · Jakarta · October 2025 – present",
    imgs: [
      "assets/work/academy.jpg",
      "assets/work/academy-2.jpg",
      "assets/work/academy-3.jpg"
    ],
    body: "Mentoring the next generation of iOS developers at Apple Developer Academy in Jakarta. I share what I've learned from 25 years of building, shipping, and occasionally failing. Previously a student there myself in 2019 — and a WWDC Scholar."
  },
  meetup: {
    title: "Jakarta iOS + AI Meetup",
    meta: "Organizer · Jakarta · since September 2013",
    imgs: [
      "assets/work/meetup.jpg",
      "assets/work/meetup-2.jpg",
      "assets/work/meetup-3.jpg"
    ],
    body: "I started the Jakarta iOS Meetup in 2013. Over a decade later it's still going — now focused on iOS development and AI. A small, informal community of builders sharing what actually works. I also use it as a place to develop and practice my own talks."
  },
  port: {
    title: "Port Remote",
    meta: "Co-founder & CTO · Singapore / Taiwan / South Korea · 2020 – 2025",
    imgs: [
      "assets/work/port.jpg",
      "assets/work/port-2.jpg",
      "assets/work/port-3.jpg"
    ],
    body: "A travel tech startup for the remote era. Port lets people explore locations live through a remote guide on a video call — you instruct the guide where to go, who to talk to, what to see. Built during Covid when the world was locked down. Went through K-Startup Grand Challenge 2020 and Plug and Play Travel & Hospitality Batch 10."
  },
  mirai: {
    title: "Mirai Technologies",
    meta: "Founder & Managing Director · Indonesia · 2014 – 2020",
    imgs: [
      "assets/work/mirai.jpg",
      "assets/work/mirai-2.jpg",
      "assets/work/mirai-3.jpg"
    ],
    body: "A mobile app agency I built from scratch in Jakarta after returning from Tokyo. Recruited, trained and managed a multi-disciplinary team. Delivered projects for international clients, helped clients win government grants and secure venture funding."
  },
  istart: {
    title: "iStart Language App Series",
    meta: "Indie iOS · Mirai LLP · Tokyo · 2009 – 2014",
    imgs: [
      "assets/work/istart.jpg",
      "assets/work/istart-2.jpg",
      "assets/work/istart-3.jpg"
    ],
    body: "A series of language learning apps I designed and built as an indie developer in Tokyo. Featured by Apple multiple times. Reached #1 Top Grossing in the Education category on the US App Store. Collaborations included WordUP with HarperCollins Publishers, In A Day with Hodder Education, and Remembering the Kanji with Dr. James Heisig of the Nanzan Institute."
  },
  bowlingual: {
    title: "Bowlingual",
    meta: "Connect Technologies · Tokyo · 2002 – 2007",
    imgs: [
      "assets/work/bowlingual.jpg",
      "assets/work/bowlingual-2.jpg"
    ],
    body: "A voice-recognition novelty app that translates dog barks into human language — built for Takara Tomy. One of several mobile projects from my early Tokyo years at Connect Technologies, where we also built NFC entry-exit systems, loyalty apps, and internet camera tools. The company went on to IPO."
  },
  kanji: {
    title: "Remembering the Kanji",
    meta: "Collaboration · Nanzan Institute · Tokyo",
    imgs: [
      "assets/work/kanji.jpg",
      "assets/work/kanji-2.jpg"
    ],
    body: "An iOS companion app based on Dr. James Heisig's famous method for learning Japanese kanji — part of the iStart series. Built in collaboration with the Nanzan Institute of Religion and Culture in Nagoya. One of the more meaningful collabs from those indie years."
  },
  wordUP: {
    title: "WordUP Language Series",
    meta: "Collaboration · HarperCollins Publishers · Tokyo",
    imgs: [
      "assets/work/wordup.jpg",
      "assets/work/wordup-2.jpg"
    ],
    body: "A language vocabulary app built in collaboration with HarperCollins Publishers. Part of the broader iStart language app series, one of several publishing partnerships from my indie iOS years in Tokyo."
  },
  mizuho: {
    title: "Mizuho Securities Tools",
    meta: "Software Engineer · Mizuho Securities · Tokyo · 2007 – 2008",
    imgs: [
      "assets/work/mizuho.jpg"
    ],
    body: "Designed and built stock market monitoring tools and a smart alert system for the International Sales Traders team. Helped implement an algorithmic trading system connecting directly to stock exchanges. Also managed and mentored an outsourcing team."
  },
  miffy: {
    title: "Miffy Moment",
    meta: "Personal project · Jakarta",
    imgs: [
      "assets/work/miffy.jpg",
      "assets/work/miffy-2.jpg",
      "assets/work/miffy-3.jpg",
      "assets/work/miffy-4.jpg"
    ],
    body: "A LEGO telepresence robot connected to an iOS app I built — so I can remotely feed my pet bunny Miffy when I'm not home. Part practical solution, part ridiculous tinkering project. Probably the most honest thing on this site."
  },
  nfc: {
    title: "NFC & Mobile Apps · Connect Technologies",
    meta: "Mobile Software Development · Tokyo · 2002 – 2007",
    imgs: [
      "assets/work/nfc.jpg",
      "assets/work/nfc-2.jpg"
    ],
    body: "Early mobile projects from my time at Connect Technologies in Tokyo — entry/exit tracking using Sony FeliCa NFC, a loyalty program app for AM/PM convenience stores, internet camera monitoring, and voice recognition apps. A wide range of work that taught me to build for real constraints with real users."
  }
};

// ── MODAL ─────────────────────────────────────────────────────
let currentImgs = [];
let currentIndex = 0;

function openModal(key) {
  const p = projects[key];
  if (!p) return;

  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalMeta').textContent = p.meta;
  document.getElementById('modalBody').textContent = p.body;

  currentImgs = p.imgs || (p.img ? [p.img] : []);
  currentIndex = 0;

  renderMainPhoto(currentIndex);
  renderThumbnails();

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderMainPhoto(index) {
  const img = document.getElementById('modalImg');
  const src = currentImgs[index];
  if (!src) return;

  img.style.opacity = '0';
  img.src = src;
  img.alt = '';
  img.style.display = 'block';
  img.onload = () => { img.style.opacity = '1'; };
  img.onerror = () => { img.style.display = 'none'; };

  // Update active thumbnail
  const thumbs = document.querySelectorAll('.modal-thumb');
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  currentIndex = index;
}

function renderThumbnails() {
  const strip = document.getElementById('modalThumbStrip');
  strip.innerHTML = '';

  if (currentImgs.length <= 1) {
    strip.style.display = 'none';
    return;
  }

  strip.style.display = 'flex';

  currentImgs.forEach((src, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'modal-thumb' + (i === 0 ? ' active' : '');
    thumb.onclick = () => renderMainPhoto(i);

    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onerror = () => { thumb.style.display = 'none'; };

    thumb.appendChild(img);
    strip.appendChild(thumb);
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentImgs = [];
  currentIndex = 0;
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight' && currentImgs.length > 1) {
    renderMainPhoto((currentIndex + 1) % currentImgs.length);
  }
  if (e.key === 'ArrowLeft' && currentImgs.length > 1) {
    renderMainPhoto((currentIndex - 1 + currentImgs.length) % currentImgs.length);
  }
});
