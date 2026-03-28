// ── PROJECT DATA ──────────────────────────────────────────────
const projects = {
  korean: {
    title: "Korean Speaking Practice App",
    meta: "iOS · In progress · 2025",
    img: "assets/work/korean-app.jpg",
    body: "An app I'm building to help people practice speaking Korean conversationally. Uses AI to give real-time feedback on pronunciation and fluency. My current experiment — learning Korean and building the tool to learn it at the same time."
  },
  academy: {
    title: "Apple Developer Academy",
    meta: "Mentor · Jakarta · October 2025 – present",
    img: "assets/work/academy.jpg",
    body: "Mentoring the next generation of iOS developers at Apple Developer Academy in Jakarta. I share what I've learned from 25 years of building, shipping, and occasionally failing. Previously a student there myself in 2019 — and a WWDC Scholar."
  },
  meetup: {
    title: "Jakarta iOS + AI Meetup",
    meta: "Organizer · Jakarta · since September 2013",
    img: "assets/work/meetup.jpg",
    body: "I started the Jakarta iOS Meetup in 2013. Over a decade later it's still going — now focused on iOS development and AI. A small, informal community of builders sharing what actually works. I also use it as a place to develop and practice my own talks."
  },
  port: {
    title: "Port Remote",
    meta: "Co-founder & CTO · Singapore / Taiwan / South Korea · 2020 – 2025 · Acquired by Korean corporation",
    img: "assets/work/port.jpg",
    body: "A travel tech startup for the remote era. Port lets people explore locations live through a remote guide on a video call — you instruct the guide where to go, who to talk to, what to see. Built during Covid when the world was locked down. Went through K-Startup Grand Challenge 2020 and Plug and Play Travel & Hospitality Batch 10. Acquired by a Korean corporation in 2025."
  },
  mirai: {
    title: "Mirai Technologies",
    meta: "Founder & Managing Director · Indonesia · 2014 – 2020 · Acquired by Japanese corporation",
    img: "assets/work/mirai.jpg",
    body: "A mobile app agency I built from scratch in Jakarta after returning from Tokyo. Recruited, trained and managed a multi-disciplinary team. Delivered projects for international clients, helped clients win government grants and secure venture funding. Acquired by a Japanese corporation in 2020."
  },
  istart: {
    title: "iStart Language App Series",
    meta: "Indie iOS · Mirai LLP · Tokyo · 2009 – 2014",
    img: "assets/work/istart.jpg",
    body: "A series of language learning apps I designed and built as an indie developer in Tokyo. Featured by Apple multiple times. Reached #1 Top Grossing in the Education category on the US App Store. Collaborations included WordUP with HarperCollins Publishers, In A Day with Hodder Education, and Remembering the Kanji with Dr. James Heisig of the Nanzan Institute."
  },
  bowlingual: {
    title: "Bowlingual",
    meta: "Connect Technologies · Tokyo · 2002 – 2007",
    img: "assets/work/bowlingual.jpg",
    body: "A voice-recognition novelty app that translates dog barks into human language — built for Takara Tomy. One of several mobile projects from my early Tokyo years at Connect Technologies, where we also built NFC entry-exit systems, loyalty apps, and internet camera tools. The company went on to IPO."
  },
  kanji: {
    title: "Remembering the Kanji",
    meta: "Collaboration · Nanzan Institute · Tokyo",
    img: "assets/work/kanji.jpg",
    body: "An iOS companion app based on Dr. James Heisig's famous method for learning Japanese kanji — part of the iStart series. Built in collaboration with the Nanzan Institute of Religion and Culture in Nagoya. One of the more meaningful collabs from those indie years."
  },
  wordUP: {
    title: "WordUP Language Series",
    meta: "Collaboration · HarperCollins Publishers · Tokyo",
    img: "assets/work/wordup.jpg",
    body: "A language vocabulary app built in collaboration with HarperCollins Publishers. Part of the broader iStart language app series, one of several publishing partnerships from my indie iOS years in Tokyo."
  },
  mizuho: {
    title: "Mizuho Securities Tools",
    meta: "Software Engineer · Mizuho Securities · Tokyo · 2007 – 2008",
    img: "assets/work/mizuho.jpg",
    body: "Designed and built stock market monitoring tools and a smart alert system for the International Sales Traders team. Helped implement an algorithmic trading system connecting directly to stock exchanges. Also managed and mentored an outsourcing team."
  },
  miffy: {
    title: "Miffy Moment",
    meta: "Personal project · Jakarta",
    img: "assets/work/miffy.jpg",
    body: "A LEGO telepresence robot connected to an iOS app I built — so I can remotely feed my pet bunny Miffy when I'm not home. Part practical solution, part ridiculous tinkering project. Has photos and videos. Probably the most honest thing on this site."
  },
  nfc: {
    title: "NFC & Mobile Apps · Connect Technologies",
    meta: "Mobile Software Development · Tokyo · 2002 – 2007",
    img: "assets/work/nfc.jpg",
    body: "Early mobile projects from my time at Connect Technologies in Tokyo — entry/exit tracking using Sony FeliCa NFC, a loyalty program app for AM/PM convenience stores, internet camera monitoring, and voice recognition apps. A wide range of work that taught me to build for real constraints with real users."
  }
};

// ── MODAL ─────────────────────────────────────────────────────
function openModal(key) {
  const p = projects[key];
  if (!p) return;

  const overlay = document.getElementById('modalOverlay');
  const img = document.getElementById('modalImg');
  const placeholder = document.getElementById('modalImgPlaceholder');

  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalMeta').textContent = p.meta;
  document.getElementById('modalBody').textContent = p.body;

  if (p.img) {
    img.src = p.img;
    img.alt = p.title;
    img.style.display = 'block';
    img.onerror = () => {
      img.style.display = 'none';
    };
  } else {
    img.style.display = 'none';
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
