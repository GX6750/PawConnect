const fallbackImage = "assets/images/hero-pet-community.png";

const pets = [
  {
    id: "milo",
    name: "Milo",
    species: "Kucing",
    breed: "Domestic Short Hair",
    age: "1 tahun 8 bulan",
    gender: "Jantan",
    location: "Jakarta Selatan",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    health: "Vaksin lengkap, steril",
    temperament: ["manja", "aktif", "ramah anak"],
    description:
      "Milo terbiasa tinggal di dalam rumah, suka bermain tali, dan cocok untuk keluarga yang punya waktu interaksi harian. Ia sudah litter trained dan tidak pilih-pilih makanan.",
    owner: {
      name: "Nadia Pratiwi",
      phone: "0812-7788-1091",
      area: "Kemang, Jakarta Selatan",
      response: "Biasanya membalas chat sore sampai malam."
    }
  },
  {
    id: "bruno",
    name: "Bruno",
    species: "Anjing",
    breed: "Golden Retriever Mix",
    age: "3 tahun",
    gender: "Jantan",
    location: "Tangerang Selatan",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
    health: "Vaksin tahunan, belum steril",
    temperament: ["penurut", "suka jalan", "sosial"],
    description:
      "Bruno sangat suka berjalan pagi dan cocok untuk adopter yang punya halaman atau rutin mengajak olahraga. Sudah mengenal perintah dasar seperti duduk dan tunggu.",
    owner: {
      name: "Raka Wiratama",
      phone: "0813-9220-8815",
      area: "Bintaro, Tangerang Selatan",
      response: "Siap video call sebelum proses meet and greet."
    }
  },
  {
    id: "nori",
    name: "Nori",
    species: "Kelinci",
    breed: "Holland Lop",
    age: "9 bulan",
    gender: "Betina",
    location: "Depok",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
    health: "Sehat, rutin grooming ringan",
    temperament: ["tenang", "penasaran", "lembut"],
    description:
      "Nori menyukai area bermain yang bersih dan sayuran segar. Ia membutuhkan adopter yang memahami kandang luas, litter box, dan kebutuhan kunyah kelinci.",
    owner: {
      name: "Putri Maheswari",
      phone: "0857-3001-4550",
      area: "Beji, Depok",
      response: "Bisa bertemu di akhir pekan."
    }
  },
  {
    id: "kiko",
    name: "Kiko",
    species: "Burung",
    breed: "Lovebird",
    age: "2 tahun",
    gender: "Jantan",
    location: "Bekasi",
    image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=900&q=80",
    health: "Aktif, nafsu makan baik",
    temperament: ["cerewet", "jinak tangan", "responsif"],
    description:
      "Kiko terbiasa dengan suara rumah dan suka berinteraksi dari pagi. Adopter idealnya punya waktu stimulasi, kandang bersih, dan pakan biji serta buah seimbang.",
    owner: {
      name: "Andre Saputra",
      phone: "0812-1144-6670",
      area: "Galaxy, Bekasi",
      response: "Telepon lebih cepat daripada chat."
    }
  },
  {
    id: "sora",
    name: "Sora",
    species: "Kucing",
    breed: "Persian Mix",
    age: "2 tahun 4 bulan",
    gender: "Betina",
    location: "Jakarta Barat",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80",
    health: "Steril, perlu sisir bulu rutin",
    temperament: ["kalem", "mandiri", "sayang pemilik"],
    description:
      "Sora cocok untuk rumah yang tenang. Ia menyukai tempat tidur dekat jendela dan butuh perawatan bulu mingguan agar tetap nyaman.",
    owner: {
      name: "Clara Santoso",
      phone: "0878-0220-7723",
      area: "Puri, Jakarta Barat",
      response: "Menerima chat setelah jam kerja."
    }
  },
  {
    id: "bima",
    name: "Bima",
    species: "Anjing",
    breed: "Shih Tzu",
    age: "4 tahun",
    gender: "Jantan",
    location: "Bogor",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    health: "Vaksin lengkap, perlu grooming bulanan",
    temperament: ["ceria", "dekat manusia", "suka dielus"],
    description:
      "Bima ramah dengan orang dewasa dan anak yang tenang. Ia cocok untuk keluarga yang siap grooming rutin dan jadwal makan teratur.",
    owner: {
      name: "Maya Kartika",
      phone: "0819-0300-5512",
      area: "Tanah Sareal, Bogor",
      response: "Bisa arrange meet up di cabang Bogor."
    }
  }
];

const branches = [
  {
    id: "kemang",
    name: "PawConnect Kemang",
    area: "Jakarta Selatan",
    address: "Jl. Kemang Raya No. 18, Jakarta Selatan",
    phone: "021-718-0921",
    hours: "09.00 - 20.00",
    services: ["Adopsi", "Pet Care Visit", "Grooming"],
    x: "47%",
    y: "51%"
  },
  {
    id: "kelapa-gading",
    name: "PawConnect Kelapa Gading",
    area: "Jakarta Utara",
    address: "Jl. Boulevard Barat Raya No. 7, Jakarta Utara",
    phone: "021-451-2270",
    hours: "09.00 - 21.00",
    services: ["Pet Shop", "Grooming", "Check Up"],
    x: "58%",
    y: "26%"
  },
  {
    id: "bintaro",
    name: "PawConnect Bintaro",
    area: "Tangerang Selatan",
    address: "Jl. Bintaro Utama 5 No. 12, Tangerang Selatan",
    phone: "021-745-0882",
    hours: "08.00 - 20.00",
    services: ["Penitipan", "Pick Up", "Adopsi"],
    x: "28%",
    y: "54%"
  },
  {
    id: "depok",
    name: "PawConnect Margonda",
    area: "Depok",
    address: "Jl. Margonda Raya No. 212, Depok",
    phone: "021-7720-4501",
    hours: "09.00 - 20.00",
    services: ["Pet Care Visit", "Grooming", "Vaksin"],
    x: "48%",
    y: "70%"
  },
  {
    id: "bekasi",
    name: "PawConnect Galaxy",
    area: "Bekasi",
    address: "Jl. Boulevard Raya Galaxy No. 31, Bekasi",
    phone: "021-8273-1190",
    hours: "08.30 - 20.30",
    services: ["Penitipan", "Grooming", "Pet Shop"],
    x: "75%",
    y: "48%"
  },
  {
    id: "bogor",
    name: "PawConnect Pajajaran",
    area: "Bogor",
    address: "Jl. Pajajaran Indah No. 26, Bogor",
    phone: "0251-836-7210",
    hours: "08.00 - 19.00",
    services: ["Adopsi", "Vaksin", "Pet Care"],
    x: "52%",
    y: "88%"
  },
  {
    id: "cengkareng",
    name: "PawConnect Cengkareng",
    area: "Jakarta Barat",
    address: "Jl. Daan Mogot Baru No. 44, Jakarta Barat",
    phone: "021-5430-6188",
    hours: "09.00 - 20.00",
    services: ["Pick Up", "Penitipan", "Grooming"],
    x: "23%",
    y: "39%"
  }
];

let forumPosts = [
  {
    id: "forum-1",
    topic: "Adopsi",
    author: "Dimas",
    city: "Jakarta Timur",
    title: "Tips memperkenalkan kucing baru ke kucing lama",
    body:
      "Aku baru adopsi kucing umur 1 tahun. Kucing lama masih suka menggeram kalau dekat pintu kamar. Biasanya proses adaptasi aman berapa lama?",
    time: "Baru saja",
    replies: [
      { author: "Tari", text: "Aku biasa pakai pertukaran selimut dulu 3 sampai 5 hari sebelum ketemu langsung." },
      { author: "Beno", text: "Jangan buru-buru satu ruangan. Pakai sesi pendek dan beri snack di dua sisi pintu." }
    ]
  },
  {
    id: "forum-2",
    topic: "Pet Care",
    author: "Salsa",
    city: "Depok",
    title: "Anjing takut grooming, harus mulai dari mana?",
    body:
      "Anjingku langsung tegang kalau lihat gunting kuku. Ada rekomendasi latihan pelan-pelan sebelum grooming profesional?",
    time: "12 menit lalu",
    replies: [{ author: "Arman", text: "Mulai dari sentuh kaki sebentar, kasih reward, lalu stop sebelum dia panik." }]
  },
  {
    id: "forum-3",
    topic: "Cerita Harian",
    author: "Lia",
    city: "Bogor",
    title: "Kelinci suka tidur di dekat kipas",
    body:
      "Baru sadar kelinciku memilih spot paling sejuk. Sekarang aku atur kandangnya lebih teduh dan dia jauh lebih aktif sore hari.",
    time: "1 jam lalu",
    replies: []
  }
];

const state = {
  species: "Semua",
  location: "Semua",
  query: "",
  forumTopic: "Semua",
  activeBranchId: branches[0].id,
  activeChatPet: null
};

const petGrid = document.querySelector("#petGrid");
const modal = document.querySelector("#petModal");
const modalContent = document.querySelector("#modalContent");
const chatDrawer = document.querySelector("#chatDrawer");
const chatTitle = document.querySelector("#chatTitle");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const toast = document.querySelector("#toast");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function phoneHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, "")}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function getFilteredPets() {
  const q = state.query.trim().toLowerCase();

  return pets.filter((pet) => {
    const speciesMatch = state.species === "Semua" || pet.species === state.species;
    const locationMatch = state.location === "Semua" || pet.location.toLowerCase().includes(state.location.toLowerCase());
    const haystack = `${pet.name} ${pet.species} ${pet.breed} ${pet.age} ${pet.location} ${pet.owner.name} ${pet.description}`.toLowerCase();
    const queryMatch = !q || haystack.includes(q);

    return speciesMatch && locationMatch && queryMatch;
  });
}

function renderPets() {
  const filtered = getFilteredPets();

  if (!filtered.length) {
    petGrid.innerHTML = `<div class="empty-state">Belum ada hewan yang cocok dengan filter ini.</div>`;
    return;
  }

  petGrid.innerHTML = filtered
    .map(
      (pet) => `
        <article class="pet-card">
          <img src="${escapeHTML(pet.image)}" alt="${escapeHTML(pet.name)}, ${escapeHTML(pet.species)} ${escapeHTML(pet.breed)}" onerror="this.src='${fallbackImage}'" />
          <div class="pet-card-body">
            <div class="pet-title">
              <div>
                <h3>${escapeHTML(pet.name)}</h3>
                <span class="pet-owner">${escapeHTML(pet.location)}</span>
              </div>
              <span class="badge">${escapeHTML(pet.species)}</span>
            </div>
            <ul class="meta-list">
              <li>${escapeHTML(pet.breed)}</li>
              <li>${escapeHTML(pet.age)}</li>
              <li>${escapeHTML(pet.gender)}</li>
              <li>${escapeHTML(pet.health)}</li>
            </ul>
            <p class="pet-owner">Pemilik: ${escapeHTML(pet.owner.name)} | ${escapeHTML(pet.owner.area)}</p>
            <div class="card-actions">
              <button class="btn btn-primary btn-small" type="button" data-open-pet="${escapeHTML(pet.id)}">Detail & Kontak</button>
              <button class="btn btn-outline btn-small" type="button" data-chat-pet="${escapeHTML(pet.id)}">Chat</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPetModal(pet) {
  modalContent.innerHTML = `
    <div class="modal-pet">
      <img src="${escapeHTML(pet.image)}" alt="${escapeHTML(pet.name)}" onerror="this.src='${fallbackImage}'" />
      <div class="modal-body">
        <div>
          <p class="eyebrow">${escapeHTML(pet.species)} siap adopsi</p>
          <h2 id="modalTitle">${escapeHTML(pet.name)}</h2>
          <p>${escapeHTML(pet.description)}</p>
        </div>
        <ul class="meta-list">
          <li>Ras: ${escapeHTML(pet.breed)}</li>
          <li>Umur: ${escapeHTML(pet.age)}</li>
          <li>Kelamin: ${escapeHTML(pet.gender)}</li>
          <li>Kesehatan: ${escapeHTML(pet.health)}</li>
          ${pet.temperament.map((trait) => `<li>${escapeHTML(trait)}</li>`).join("")}
        </ul>
        <div class="owner-box">
          <strong>Informasi pemilik</strong>
          <span>${escapeHTML(pet.owner.name)}</span>
          <span>${escapeHTML(pet.owner.area)}</span>
          <span>${escapeHTML(pet.owner.response)}</span>
          <span>Telepon: ${escapeHTML(pet.owner.phone)}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${phoneHref(pet.owner.phone)}">Telepon Pemilik</a>
          <button class="btn btn-outline" type="button" data-chat-pet="${escapeHTML(pet.id)}">Chat Website</button>
        </div>
      </div>
    </div>
  `;
}

function openPetModal(id) {
  const pet = pets.find((item) => item.id === id);
  if (!pet) return;

  renderPetModal(pet);
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closePetModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function openChat(id) {
  const pet = pets.find((item) => item.id === id);
  if (!pet) return;

  state.activeChatPet = pet;
  chatTitle.textContent = `${pet.owner.name} - ${pet.name}`;
  chatMessages.innerHTML = `
    <div class="message">Halo, saya ${escapeHTML(pet.owner.name)} pemilik ${escapeHTML(pet.name)}. Silakan tanyakan proses adopsi, kondisi hewan, atau jadwal meet and greet.</div>
  `;
  chatDrawer.hidden = false;
  chatInput.focus();
}

function appendChatMessage(text, isUser = false) {
  const node = document.createElement("div");
  node.className = isUser ? "message user" : "message";
  node.textContent = text;
  chatMessages.appendChild(node);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function readFileAsDataURL(file) {
  if (!file) return Promise.resolve("");

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

function renderBranches() {
  const map = document.querySelector("#branchMap");
  const existingPins = map.querySelectorAll(".map-pin");
  existingPins.forEach((pin) => pin.remove());

  branches.forEach((branch) => {
    const button = document.createElement("button");
    button.className = `map-pin${branch.id === state.activeBranchId ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.branch = branch.id;
    button.style.setProperty("--x", branch.x);
    button.style.setProperty("--y", branch.y);
    button.setAttribute("aria-label", branch.name);
    button.innerHTML = `<span>${escapeHTML(branch.area)}</span>`;
    map.appendChild(button);
  });

  renderBranchPanel();
}

function renderBranchPanel() {
  const branch = branches.find((item) => item.id === state.activeBranchId) || branches[0];
  const routeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;
  const panel = document.querySelector("#branchPanel");

  panel.innerHTML = `
    <p class="eyebrow">Cabang terpilih</p>
    <h3>${escapeHTML(branch.name)}</h3>
    <p>${escapeHTML(branch.address)}</p>
    <ul class="branch-meta">
      <li><strong>Area</strong><br />${escapeHTML(branch.area)}</li>
      <li><strong>Jam buka</strong><br />${escapeHTML(branch.hours)}</li>
      <li><strong>Telepon</strong><br />${escapeHTML(branch.phone)}</li>
      <li><strong>Layanan</strong><br />${branch.services.map(escapeHTML).join(", ")}</li>
    </ul>
    <div class="card-actions">
      <a class="btn btn-primary btn-small" href="${routeUrl}" target="_blank" rel="noreferrer">Buka Rute</a>
      <a class="btn btn-outline btn-small" href="${phoneHref(branch.phone)}">Telepon</a>
    </div>
  `;
}

function renderForumPosts() {
  const container = document.querySelector("#forumPosts");
  const posts =
    state.forumTopic === "Semua" ? forumPosts : forumPosts.filter((post) => post.topic === state.forumTopic);

  if (!posts.length) {
    container.innerHTML = `<div class="empty-state">Belum ada obrolan untuk topik ini.</div>`;
    return;
  }

  container.innerHTML = posts
    .map(
      (post) => `
        <article class="forum-post">
          <div class="forum-top">
            <div>
              <span class="badge">${escapeHTML(post.topic)}</span>
              <h3>${escapeHTML(post.title)}</h3>
              <span class="forum-author">${escapeHTML(post.author)} dari ${escapeHTML(post.city)} | ${escapeHTML(post.time)}</span>
            </div>
          </div>
          <p>${escapeHTML(post.body)}</p>
          <div class="replies">
            ${post.replies
              .map((reply) => `<div class="reply"><strong>${escapeHTML(reply.author)}:</strong> ${escapeHTML(reply.text)}</div>`)
              .join("")}
          </div>
          <form class="reply-form" data-reply-form="${escapeHTML(post.id)}">
            <input type="text" name="reply" aria-label="Balasan untuk ${escapeHTML(post.title)}" placeholder="Balas obrolan" required />
            <button class="btn btn-outline btn-small" type="submit">Balas</button>
          </form>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.species = button.dataset.species;
    renderPets();
  });
});

document.querySelector("#locationFilter").addEventListener("change", (event) => {
  state.location = event.target.value;
  renderPets();
});

document.querySelector("#adoptionSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPets();
});

document.querySelector("#heroSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  state.query = document.querySelector("#quickSearch").value;
  state.species = document.querySelector("#quickSpecies").value;
  document.querySelector("#adoptionSearch").value = state.query;
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.species === state.species);
  });
  renderPets();
  document.querySelector("#adoption").scrollIntoView({ behavior: "smooth", block: "start" });
});

petGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-open-pet]");
  const chatButton = event.target.closest("[data-chat-pet]");

  if (detailButton) openPetModal(detailButton.dataset.openPet);
  if (chatButton) openChat(chatButton.dataset.chatPet);
});

modal.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-close-modal]");
  const chatButton = event.target.closest("[data-chat-pet]");

  if (closeTarget) closePetModal();
  if (chatButton) {
    openChat(chatButton.dataset.chatPet);
    closePetModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closePetModal();
});

document.querySelector("#closeChat").addEventListener("click", () => {
  chatDrawer.hidden = true;
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  appendChatMessage(message, true);
  chatInput.value = "";
  window.setTimeout(() => {
    const petName = state.activeChatPet ? state.activeChatPet.name : "hewan";
    appendChatMessage(`Terima kasih. Saya cek jadwal dan detail ${petName} dulu, nanti saya balas di chat ini atau via telepon.`);
  }, 450);
});

document.querySelector("#listPetForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const image = await readFileAsDataURL(data.get("photo"));
  const petName = data.get("name").trim();

  pets.unshift({
    id: `pet-${Date.now()}`,
    name: petName,
    species: data.get("species"),
    breed: data.get("breed").trim(),
    age: data.get("age").trim(),
    gender: data.get("gender"),
    location: data.get("location").trim(),
    image: image || fallbackImage,
    health: "Menunggu verifikasi tim",
    temperament: ["butuh rumah baru", "data dari pemilik"],
    description: data.get("description").trim(),
    owner: {
      name: data.get("ownerName").trim(),
      phone: data.get("phone").trim(),
      area: data.get("location").trim(),
      response: "Kontak langsung dari data pendaftaran."
    }
  });

  state.species = "Semua";
  state.location = "Semua";
  state.query = petName;
  document.querySelector("#adoptionSearch").value = petName;
  document.querySelector("#locationFilter").value = "Semua";
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.species === "Semua");
  });
  renderPets();
  form.reset();
  showToast(`${petName} berhasil dipublikasikan ke daftar adopsi.`);
  document.querySelector("#adoption").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".service-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".service-tab").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    document.querySelector("#serviceType").value = button.dataset.service;
  });
});

document.querySelector("#servicePhoto").addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  document.querySelector("#photoPreview").textContent = file ? `Foto dipilih: ${file.name}` : "Belum ada foto dipilih";
});

document.querySelector("#serviceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const service = data.get("service");
  const orderId = `PC-${Date.now().toString().slice(-6)}`;
  const pickup = data.get("pickup") ? "Tim akan menghubungi untuk jadwal pick up atau kunjungan." : "Tim akan menghubungi untuk konfirmasi layanan cabang.";
  const summary = document.querySelector("#serviceSummary");

  summary.hidden = false;
  summary.innerHTML = `
    <strong>Pesanan ${orderId} diterima</strong>
    <p>${escapeHTML(service)} untuk ${escapeHTML(data.get("petName"))} di area ${escapeHTML(data.get("area"))}.</p>
    <p>Nomor konfirmasi: ${escapeHTML(data.get("phone"))}. ${pickup}</p>
  `;

  form.reset();
  document.querySelector("#serviceType").value = service;
  document.querySelector("#photoPreview").textContent = "Belum ada foto dipilih";
  showToast(`Pesanan ${orderId} berhasil dibuat.`);
});

document.querySelector("#branchMap").addEventListener("click", (event) => {
  const pin = event.target.closest("[data-branch]");
  if (!pin) return;

  state.activeBranchId = pin.dataset.branch;
  renderBranches();
});

document.querySelectorAll(".forum-filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".forum-filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.forumTopic = button.dataset.topic;
    renderForumPosts();
  });
});

document.querySelector("#forumForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);

  forumPosts.unshift({
    id: `forum-${Date.now()}`,
    topic: data.get("topic"),
    author: data.get("author").trim(),
    city: data.get("city").trim(),
    title: data.get("title").trim(),
    body: data.get("body").trim(),
    time: "Baru saja",
    replies: []
  });

  state.forumTopic = "Semua";
  document.querySelectorAll(".forum-filter-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topic === "Semua");
  });
  renderForumPosts();
  form.reset();
  showToast("Posting forum berhasil ditambahkan.");
});

document.querySelector("#forumPosts").addEventListener("submit", (event) => {
  const form = event.target.closest("[data-reply-form]");
  if (!form) return;

  event.preventDefault();
  const post = forumPosts.find((item) => item.id === form.dataset.replyForm);
  const input = form.elements.reply;
  const reply = input.value.trim();
  if (!post || !reply) return;

  post.replies.push({ author: "Kamu", text: reply });
  renderForumPosts();
  showToast("Balasan berhasil dikirim.");
});

renderPets();
renderBranches();
renderForumPosts();
