"use client"

import React, { useState } from "react"

interface ProjectItem {
  id: "paktobarber" | "exoticgaming" | "apimahasiswa"
  number: string
  title: string
  role: string
  period: string
  category: string
  description: string
  technologies: string[]
  icon: string
  url: string
}

const projects: ProjectItem[] = [
  {
    id: "paktobarber",
    number: "01",
    title: "PAK TO BARBER",
    role: "Front-End Developer",
    period: "Sep 2025 – Des 2025",
    category: "FRONT-END WEB DEV",
    description: "Mengerjakan seluruh antarmuka dan navigasi website Pak To Barber. Dilengkapi katalog servis cukur, daftar harga, galeri gaya rambut, serta formulir pemesanan jadwal cukur online.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    icon: "💈",
    url: "https://paktobarber.sheryn.dev",
  },
  {
    id: "exoticgaming",
    number: "02",
    title: "EXOTIC GAMING & CAFE",
    role: "Software Engineer",
    period: "Jan 2026 – Apr 2026",
    category: "SOFTWARE ENGINEERING",
    description: "Perancangan dan pengembangan perangkat lunak sistem pemesanan menu cafe, monitoring status PC gaming lounge, dan pengujian alur fungsionalitas bersama tim pengembang.",
    technologies: ["PHP", "MySQL", "CRUD", "Web System"],
    icon: "🎮",
    url: "https://exoticgaming.sheryn.dev",
  },
  {
    id: "apimahasiswa",
    number: "03",
    title: "RESTful API & SISTEM INFORMASI",
    role: "Backend & API Testing",
    period: "Proyek Akademik Polije",
    category: "API & DATABASE",
    description: "Penerapan arsitektur MVC (Model-View-Controller) dengan endpoint RESTful API teruji Postman. Mendukung operasi CRUD data mahasiswa, pengelolaan database MySQL relasional, dan response format JSON.",
    technologies: ["RESTful API", "Postman", "PHP", "MySQL", "MVC"],
    icon: "⚡",
    url: "https://api-tif.polije.ac.id/v1/students",
  },
]

const techToolkit = [
  { name: "PHP", role: "Backend & MVC", color: "#777BB4", badge: "PHP" },
  { name: "MySQL", role: "Basis Data & CRUD", color: "#00758F", badge: "SQL" },
  { name: "HTML5 / CSS3", role: "Struktur & Styling", color: "#E34F26", badge: "</>" },
  { name: "Java", role: "OOP & Software", color: "#ED8B00", badge: "JAVA" },
  { name: "Postman", role: "RESTful API Test", color: "#FF6C37", badge: "API" },
  { name: "Git & GitHub", role: "Version Control", color: "#F05032", badge: "GIT" },
  { name: "VS Code", role: "Code Editor", color: "#007ACC", badge: "VSC" },
  { name: "RESTful API", role: "CRUD Endpoints", color: "#994887", badge: "REST" },
]

const committees = [
  {
    role: "SEKSI PERLENGKAPAN",
    year: "2026",
    title: "Malam Keakraban (Makrab) TIF 2026",
    org: "Teknik Informatika — Politeknik Negeri Jember",
    bullets: [
      "Bertugas menyiapkan dan mengelola perlengkapan kegiatan Malam Keakraban (Makrab) TIF 2026.",
      "Berkoordinasi dengan seksi lain agar kebutuhan perlengkapan terpenuhi selama kegiatan berlangsung.",
      "Mengembangkan kemampuan kerja sama tim, tanggung jawab, dan ketelitian dalam persiapan acara.",
    ],
    tools: "Logistik & Perlengkapan Acara",
    metric: "Makrab TIF 2026",
  },
  {
    role: "SEKSI ACARA",
    year: "2026",
    title: "TIF Exhibition 2026",
    org: "Pameran Karya Inovasi Teknologi Mahasiswa TIF Polije",
    bullets: [
      "Berperan dalam menyusun rangkaian dan alur acara TIF Exhibition 2026.",
      "Mendukung pelaksanaan acara agar berjalan sesuai rencana bersama panitia dan seksi lainnya.",
      "Mengembangkan kemampuan komunikasi, koordinasi, dan pengelolaan waktu dalam kegiatan.",
    ],
    tools: "Rundown & Stage Management",
    metric: "Acara Pameran",
  },
  {
    role: "SEKSI PERLENGKAPAN",
    year: "2026",
    title: "Sosialisasi PKM 2026",
    org: "Program Kreativitas Mahasiswa — Polije",
    bullets: [
      "Bertugas menyiapkan perlengkapan kegiatan Sosialisasi Program Kreativitas Mahasiswa (PKM) 2026.",
      "Berkoordinasi dengan panitia lain untuk mendukung kelancaran kegiatan sosialisasi.",
      "Mengembangkan kemampuan kerja sama tim, inisiatif, dan tanggung jawab dalam kepanitiaan.",
    ],
    tools: "Fasilitas & Kesiapan Acara",
    metric: "Sosialisasi PKM",
  },
  {
    role: "DIVISI ADVOKESMA",
    year: "2025 — Sekarang",
    title: "Informatics Community (Politeknik Negeri Jember)",
    org: "Organisasi Kemahasiswaan Bidang Informatika",
    bullets: [
      "Berpartisipasi aktif dalam kegiatan dan program kerja Divisi Advokesma di Informatics Community.",
      "Berkontribusi dalam pelaksanaan kegiatan organisasi sesuai tugas dan tanggung jawab divisi.",
      "Mengembangkan kemampuan komunikasi, kerja sama tim, dan kepedulian terhadap lingkungan mahasiswa.",
    ],
    tools: "Advokasi Mahasiswa",
    metric: "Anggota Aktif",
  },
]

const coursework = [
  "Logika dan Algoritma",
  "Struktur Data",
  "Konsep Basis Data",
  "Workshop Basis Data",
  "Teknologi Basis Data",
  "Analisis Desain Terstruktur",
  "Konsep Jaringan Komputer",
  "Interaksi Manusia dan Komputer",
  "Software Quality Assurance",
  "Workshop Manajemen Proyek",
  "Workshop Sistem Informasi Web Client",
  "Workshop Sistem Informasi Web Server",
  "Workshop Mobile Application",
]

const softSkills = [
  "Kerja Sama Tim",
  "Pemecahan Masalah",
  "Komunikasi Efektif",
  "Berpikir Kritis",
  "Adaptasi Cepat",
  "Manajemen Waktu",
  "Tanggung Jawab",
  "Kemauan Belajar Hal Baru",
]

export default function PortfolioPage() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Interactive Live Website States
  const [pakToBooked, setPakToBooked] = useState(false)
  const [exoticCartCount, setExoticCartCount] = useState(0)
  const [exoticTotal, setExoticTotal] = useState(0)
  const [exoticLog, setExoticLog] = useState<string>("Belum ada pesanan aktif.")
  const [apiResponseText, setApiResponseText] = useState<string>(
    JSON.stringify(
      {
        status: "success",
        code: 200,
        institution: "Politeknik Negeri Jember",
        program: "Teknik Informatika",
        data: [
          {
            id: 1,
            name: "Sheryn Febrylia Hendrita",
            prodi: "Teknik Informatika",
            semester: 3,
            gpa: 3.75,
            skills: ["PHP", "MySQL", "HTML/CSS", "Java", "Postman", "REST API"],
            status: "Active",
          },
          {
            id: 2,
            name: "Budi Pratama",
            prodi: "Teknik Informatika",
            semester: 3,
            gpa: 3.65,
            status: "Active",
          },
        ],
      },
      null,
      2
    )
  )

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    showToast(`Email ${email} berhasil disalin!`)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContactOpen(false)
    showToast("Pesan berhasil terkirim! Sheryn akan segera menghubungi Anda.")
  }

  // Interactive Website Functions
  const handlePakToBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPakToBooked(true)
    showToast("Booking jadwal di Pak To Barber berhasil terkonfirmasi!")
  }

  const handleAddExoticOrder = (item: string, price: number) => {
    setExoticCartCount((prev) => prev + 1)
    setExoticTotal((prev) => prev + price)
    setExoticLog(`Item ditambahkan: ${item} (Rp ${price.toLocaleString("id-ID")})`)
    showToast(`Berhasil menambah ${item} ke sistem pesanan Exotic Gaming!`)
  }

  const handleResetExotic = () => {
    setExoticCartCount(0)
    setExoticTotal(0)
    setExoticLog("Pesanan direset. Belum ada pesanan aktif.")
  }

  const handleSimulateCrud = (method: "POST" | "PUT" | "DELETE") => {
    if (method === "POST") {
      setApiResponseText(
        JSON.stringify(
          {
            status: "success",
            code: 201,
            message: "Data Mahasiswa Baru Berhasil Ditambahkan ke Database MySQL!",
            timestamp: new Date().toISOString(),
          },
          null,
          2
        )
      )
      showToast("POST 201 Created: Data tersimpan di database MySQL!")
    } else if (method === "PUT") {
      setApiResponseText(
        JSON.stringify(
          {
            status: "success",
            code: 200,
            message: "Record Mahasiswa Berhasil Diperbarui via RESTful API!",
            timestamp: new Date().toISOString(),
          },
          null,
          2
        )
      )
      showToast("PUT 200 OK: Data berhasil diupdate!")
    } else {
      setApiResponseText(
        JSON.stringify(
          {
            status: "success",
            code: 200,
            message: "Record Mahasiswa Berhasil Dihapus (Soft Delete CRUD)!",
            timestamp: new Date().toISOString(),
          },
          null,
          2
        )
      )
      showToast("DELETE 200 OK: Data berhasil dihapus!")
    }
  }

  return (
    <div className="relative min-h-screen bg-[#16001e] text-white overflow-x-hidden font-sans">
      
      {/* ================= TOP STATUS TICKER ================= */}
      <div className="bg-gradient-to-r from-[#22002e] via-[#3A004D] to-[#22002e] border-b border-[#994887]/30 py-1.5 px-4 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-zinc-200 font-medium">TEKNIK INFORMATIKA • POLITEKNIK NEGERI JEMBER (IPK: 3.75/4.00)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-zinc-300">
            <span>📍 NGANJUK & JEMBER, JAWA TIMUR</span>
            <span className="text-[#994887]">•</span>
            <span className="text-[#b55a9f] font-mono">OPEN FOR INTERNSHIP & PROJECTS</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <span>WHATSAPP:</span>
            <a href="https://wa.me/6285604424629" target="_blank" rel="noreferrer" className="text-white font-semibold hover:text-[#b55a9f] transition-colors">
              +62 856 0442 4629
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR WITH CENTERED PILL ================= */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between text-xs tracking-wider z-50 relative">
        <a href="#" className="flex flex-col uppercase group shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#994887] rounded-sm rotate-45 group-hover:rotate-90 transition-transform"></span>
            <span className="text-white font-black text-sm tracking-widest font-[family-name:var(--font-bebas)]">SHERYN<span className="text-[#994887]">.DEV</span></span>
          </div>
          <span className="text-[10px] text-zinc-400 tracking-wider">SOFTWARE ENGINEER & WEB DEV</span>
        </a>

        {/* CENTERED NAVIGATION PILL */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2 text-[11px] uppercase tracking-widest bg-[#2c003b]/85 border border-[#994887]/30 px-6 py-2 rounded-full backdrop-blur-md mx-auto shadow-lg shadow-[#16001e]/60">
          <a href="#projects" className="px-3 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-[#994887]/20 transition-all">Projects</a>
          <a href="#tech-stack" className="px-3 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-[#994887]/20 transition-all">Dev Toolkit</a>
          <a href="#kepanitiaan" className="px-3 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-[#994887]/20 transition-all">Kepanitiaan</a>
          <a href="#education" className="px-3 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-[#994887]/20 transition-all">Pendidikan & Skills</a>
          <a href="#contact" className="px-3 py-1 rounded-full text-zinc-300 hover:text-white hover:bg-[#994887]/20 transition-all">Contact</a>
        </nav>

        <button 
          onClick={() => setContactOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#994887]/60 bg-[#3A004D]/60 hover:bg-[#994887] hover:border-[#994887] text-white transition-all duration-300 group shadow-lg shadow-[#3A004D]/30 shrink-0 cursor-pointer"
        >
          <span className="text-zinc-200 uppercase font-semibold text-[11px] tracking-wider group-hover:text-white transition-colors">
            HUBUNGI SAYA
          </span>
          <span className="text-[#994887] group-hover:text-white text-xs font-bold pulse-dot">✦</span>
        </button>
      </header>

      {/* ================= HERO SECTION (EDITORIAL MAGAZINE STYLE) ================= */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 overflow-hidden min-h-[640px] md:min-h-[720px] flex flex-col justify-between">
        
        <div className="absolute inset-0 hero-spotlight pointer-events-none z-0"></div>

        {/* GIANT BACKGROUND "PORTFOLIO" TYPOGRAPHY (#994887) */}
        <div className="absolute top-2 left-0 right-0 w-full flex justify-center pointer-events-none z-[1] overflow-hidden">
          <h2 className="hero-portfolio-text font-[family-name:var(--font-bebas)] text-[19vw] leading-none tracking-tight text-[#994887] font-black opacity-85 select-none whitespace-nowrap uppercase">
            PORTFOLIO
          </h2>
        </div>

        {/* MAIN HERO CONTENT GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 md:pt-14">
          
          {/* LEFT: Intro, Name, Bio (From CV) */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 text-left">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-[family-name:var(--font-caveat)] text-3xl sm:text-4xl text-zinc-200 tracking-wide select-none">
                Hello, I&apos;m
              </span>
              <span className="text-[10px] bg-[#3A004D]/80 border border-[#994887]/50 text-[#b55a9f] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                POLIJE • TIF
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-bebas)] font-black uppercase tracking-tight text-white leading-[0.88] drop-shadow-md">
              <span className="text-6xl sm:text-7xl xl:text-8xl block">SHERYN</span>
              <span className="text-3xl sm:text-4xl xl:text-5xl tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#b55a9f] block mt-1">FEBRYLIA HENDRITA</span>
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <p className="text-[#b55a9f] font-bold text-xs sm:text-sm tracking-widest uppercase">
                SOFTWARE ENGINEER & WEB DEVELOPER
              </p>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-3 max-w-sm font-normal">
              Mahasiswa semester 3 Teknik Informatika di Politeknik Negeri Jember yang berfokus pada pengembangan perangkat lunak dan aplikasi web. Berpengalaman membangun sistem dengan PHP, MySQL, HTML, CSS, Java, RESTful API, dan MVC.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#994887]/50 bg-[#3A004D]/60 text-zinc-200 text-[11px] tracking-wider uppercase font-medium">
                <svg className="w-3.5 h-3.5 text-[#994887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8"></circle>
                  <path strokeLinecap="round" strokeWidth="1.8" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>NGANJUK & JEMBER, ID</span>
              </div>

              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#994887] hover:bg-[#b55a9f] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-md shadow-[#3A004D]/40">
                <span>Buka Website Project ⟶</span>
              </a>
            </div>
          </div>

          {/* CENTER: Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center items-end relative order-1 lg:order-2 h-[400px] sm:h-[490px] lg:h-[590px]">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#994887]/30 blur-3xl -z-10 top-12 left-1/2 -translate-x-1/2"></div>
            <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-[#3A004D]/50 blur-2xl -z-20 top-8 left-1/2 -translate-x-1/2"></div>

            <div className="relative w-full h-full max-w-md mx-auto flex items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/sheryn.png"
                alt="Sheryn Febrylia Hendrita" 
                className="hero-blend-mask object-contain object-bottom h-[92%] sm:h-full w-auto max-w-full drop-shadow-[0_20px_50px_rgba(22,0,30,0.9)] transition-all duration-500 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#16001e] to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* RIGHT: Stats From CV */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-8 order-3 text-left lg:text-right h-full py-4">
            <div className="flex items-start lg:items-center gap-3 lg:flex-row-reverse max-w-[220px]">
              <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/50 flex items-center justify-center shrink-0 text-[#b55a9f] text-xs">
                ✦
              </div>
              <p className="text-zinc-300 text-xs leading-snug">
                Membangun aplikasi web fungsional, performa tinggi, dan mudah digunakan.
              </p>
            </div>

            <div className="flex flex-col gap-5 w-full sm:w-auto">
              <div className="flex items-baseline gap-3 lg:justify-end">
                <span className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl font-bold text-[#b55a9f] tracking-tight">3.75</span>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-medium text-left leading-tight">
                  IPK MAHASISWA<br /><span className="text-zinc-400">POLIJE (SKALA 4.00)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 lg:justify-end">
                <span className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl font-bold text-[#b55a9f] tracking-tight">SEM 3</span>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-medium text-left leading-tight">
                  TEKNIK INFORMATIKA<br /><span className="text-zinc-400">AKTIF KULIAH</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 lg:justify-end">
                <span className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl font-bold text-[#b55a9f] tracking-tight">5+</span>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-medium text-left leading-tight">
                  KEPANITIAAN &<br /><span className="text-zinc-400">ORGANISASI KAMPUS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= DEV TOOLKIT (FROM CV) ================= */}
      <section id="tech-stack" className="w-full py-12 border-y border-[#3A004D] bg-[#20002b] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A004D] border border-[#994887]/40 text-[#b55a9f] text-xs font-semibold uppercase tracking-widest mb-2">
            <span>KEAHLIAN TEKNIS & TOOLS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
            Bahasa, Basis Data & Tools Pengembangan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2">
            Teknologi yang dikuasai dan digunakan dalam pengerjaan proyek sistem informasi, front-end web, database management, dan pengujian API.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techToolkit.map((item) => (
              <div 
                key={item.name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#2b0038] border border-[#3A004D] hover:border-[#994887]/70 transition-all duration-300 group hover:-translate-y-1"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs mb-2 shadow-md group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}40`, borderWidth: 1, color: item.color }}
                >
                  {item.badge}
                </div>
                <span className="text-xs font-bold text-white group-hover:text-[#b55a9f] transition-colors">{item.name}</span>
                <span className="text-[10px] text-zinc-400">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SELECTED PROJECTS (CARD KLIK MUNCUL WEBSITE) ================= */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A004D] border border-[#994887]/40 text-[#b55a9f] text-xs font-semibold uppercase tracking-widest mb-2">
              <span>PROJECT PORTFOLIO • KLIK KARTU UNTUK BUKA WEBSITE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-wider text-white">
              PROJECT & PENGEMBANGAN WEBSITE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Tekan salah satu card project di bawah untuk langsung membuka dan mencoba tampilan website interaktifnya di jendela browser!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#994887]/20 border border-[#994887]/40 text-[#b55a9f] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Live Interactive Website Viewer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setActiveModalProject(p)}
              className="group cursor-pointer relative flex flex-col bg-[#22002e] border border-[#3A004D] rounded-2xl overflow-hidden hover:border-[#994887] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#994887]/20 transition-all duration-300"
            >
              {/* Mockup Visual Header */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-[#2d003b] to-[#120018] p-4 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#994887_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="bg-[#16001e]/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-zinc-300 font-mono border border-[#994887]/40">
                    {p.period}
                  </span>
                  <span className="bg-[#994887] text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                <div className="relative z-10 text-center my-auto">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-2xl bg-[#3A004D] border border-[#994887] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-3xl font-black text-white tracking-wider uppercase group-hover:text-[#b55a9f] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-zinc-300 font-mono tracking-widest uppercase">
                    {p.role}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-[#3A004D]/60">
                  <span className="flex items-center gap-1.5 text-[#b55a9f] font-semibold">
                    <span>Klik Kartu Untuk Buka</span> ⟶
                  </span>
                  <span className="text-zinc-400 font-mono text-[10px]">{p.technologies[0]} • {p.technologies[1]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-[#1d0027] border-t border-[#3A004D]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-2xl font-bold text-[#b55a9f]">{p.number}</span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold bg-[#2b0038] px-2.5 py-0.5 rounded-full border border-[#3A004D]">
                      {p.role}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#b55a9f] transition-colors mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3A004D] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3A004D] text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center text-white group-hover:bg-[#994887] group-hover:scale-105 transition-all">
                    ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PENGALAMAN KEPANITIAAN & ORGANISASI (DARI CV) ================= */}
      <section id="kepanitiaan" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3A004D]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A004D] border border-[#994887]/40 text-[#b55a9f] text-xs font-semibold uppercase tracking-widest mb-2">
              <span>LEADERSHIP & KEPANITIAAN</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-wider text-white">
              REKAM JEJAK KEPANITIAAN & ORGANISASI
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Pengalaman berorganisasi dan kontribusi dalam berbagai event kampus Teknik Informatika Politeknik Negeri Jember.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-2.5 h-2.5 rounded-full bg-[#994887]"></span>
            <span>4 Peran Organisasi & Kepanitiaan Utama</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committees.map((com, idx) => (
            <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-[#22002e] border border-[#3A004D] flex flex-col justify-between relative overflow-hidden group hover:border-[#994887]/60 transition-all">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#994887]/15 rounded-full blur-2xl group-hover:bg-[#994887]/25 transition-all"></div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[#b55a9f] font-mono text-xs font-bold uppercase tracking-wider bg-[#3A004D] px-3 py-1 rounded-full border border-[#994887]/40">
                    {com.role}
                  </span>
                  <span className="text-zinc-400 font-mono text-xs">{com.year}</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#b55a9f] transition-colors">
                  {com.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mb-4">{com.org}</p>
                
                <ul className="space-y-2 text-xs text-zinc-300 leading-relaxed list-disc list-inside">
                  {com.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3A004D] flex items-center justify-between text-[11px] text-zinc-400">
                <span className="font-mono text-zinc-500">Fokus: {com.tools}</span>
                <span className="text-[#b55a9f] font-semibold">{com.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PENDIDIKAN & SKILLS (DARI CV) ================= */}
      <section id="education" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3A004D]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* PENDIDIKAN & MATKUL (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#22002e] border border-[#3A004D]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
                RIWAYAT PENDIDIKAN
              </h2>

              <div className="mb-6 p-4 rounded-2xl bg-[#3A004D]/40 border border-[#994887]/30">
                <div className="flex items-start justify-between gap-3 text-xs mb-1">
                  <div>
                    <h4 className="font-bold text-white text-sm">Politeknik Negeri Jember</h4>
                    <p className="text-[#b55a9f] font-medium text-xs">Teknik Informatika — Diploma / Sarjana Terapan</p>
                  </div>
                  <span className="text-zinc-400 font-mono text-[11px] shrink-0">2025 — Sekarang</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#994887]/30 text-white text-[11px] font-bold">
                  <span>🌟 IPK: 3.75 / 4.00</span>
                </div>

                <div className="mt-3 pt-3 border-t border-[#3A004D]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">Mata Kuliah Relevan:</span>
                  <div className="flex flex-wrap gap-1 text-[9px] text-zinc-300">
                    {coursework.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded bg-[#22002e] border border-[#3A004D]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#3A004D]/20 border border-[#3A004D]">
                <div className="flex items-start justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-bold text-white text-xs">SMA Negeri 1 Gondang</h4>
                    <p className="text-zinc-400 text-[11px]">Paket 2 (Nilai Akhir: 86,60)</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Pelajaran Utama: Informatika, Kimia, B. Inggris Lanjut, Fisika</p>
                  </div>
                  <span className="text-zinc-400 font-mono text-[11px] shrink-0">2022 — 2025</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3A004D]">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#b55a9f] mb-3">
                SOFT SKILLS & KARAKTER KERJA
              </h3>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-medium">
                {softSkills.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-lg bg-[#3A004D] text-zinc-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ALUR PENGEMBANGAN SISTEM (4 Cols) */}
          <div id="process" className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#22002e] border border-[#3A004D]">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              ALUR PENGEMBANGAN SISTEM
            </h2>

            <div className="space-y-5 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center shrink-0 text-[#b55a9f] font-mono font-bold text-xs">
                  01
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">ANALISIS KEBUTUHAN & DOKUMENTASI</h3>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-0.5">Memahami spesifikasi fungsional, alur pengguna, dan struktur sistem yang akan dibangun.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center shrink-0 text-[#b55a9f] font-mono font-bold text-xs">
                  02
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">DESAIN BASIS DATA & MVC</h3>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-0.5">Merancang skema tabel MySQL relasional, normalisasi data, dan struktur Model-View-Controller.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center shrink-0 text-[#b55a9f] font-mono font-bold text-xs">
                  03
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">KODING & FRONT-END SLICING</h3>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-0.5">Membangun tampilan antarmuka responsif dengan HTML, CSS, JavaScript, serta logic PHP backend.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center shrink-0 text-[#b55a9f] font-mono font-bold text-xs">
                  04
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">PENGUJIAN API & SQA</h3>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-0.5">Testing operasi CRUD dan endpoint RESTful API menggunakan Postman untuk menjamin keandalan data.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3A004D] border border-[#994887]/60 flex items-center justify-center shrink-0 text-[#b55a9f] font-mono font-bold text-xs">
                  05
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">KOLABORASI & EVALUASI</h3>
                  <p className="text-zinc-300 text-[11px] leading-relaxed mt-0.5">Bekerja sama dalam tim dengan Git/GitHub untuk tracking perubahan, penyelesaian kendala, dan review.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SERTIFIKASI & KOMITMEN (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between rounded-3xl bg-[#3A004D] p-6 sm:p-7 relative overflow-hidden border border-[#994887]/40">
            <div className="absolute -right-12 -top-12 w-44 h-44 bg-[#994887]/30 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <span className="text-4xl text-[#b55a9f] font-serif block leading-none select-none">“</span>
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed mt-1">
                Berkomitmen menghasilkan perangkat lunak yang andal, kode terstruktur, dan antarmuka yang memberi solusi nyata bagi pengguna.
              </p>
              <div className="mt-4 pt-4 border-t border-[#994887]/30">
                <p className="font-[family-name:var(--font-caveat)] text-2xl text-[#b55a9f]">Sheryn Febrylia</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-300 mt-0.5">Teknik Informatika Polije</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#994887]/40 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#b55a9f] block">SERTIFIKASI:</span>
              
              <div className="bg-[#22002e]/60 p-2.5 rounded-xl border border-[#994887]/30">
                <h5 className="text-xs font-bold text-white">English Proficiency Test (EPT)</h5>
                <p className="text-[10px] text-zinc-300">Kemendiktisaintek Polije • 2026</p>
                <span className="text-[9px] font-mono text-[#b55a9f]">Skor: 37/140 (Elementary)</span>
              </div>

              <div className="bg-[#22002e]/60 p-2.5 rounded-xl border border-[#994887]/30">
                <h5 className="text-xs font-bold text-white">LKMM Pra-TD</h5>
                <p className="text-[10px] text-zinc-300">Kepemimpinan & Manajemen • 2025</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER / LET'S WORK TOGETHER (FROM CV) ================= */}
      <footer id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#3A004D]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#b55a9f] text-sm">✦</span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#b55a9f]">TERBUKA UNTUK KERJA SAMA & MAGANG</span>
            </div>
            
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-7xl font-black uppercase text-white leading-none tracking-tight">
              LET&apos;S CONNECT & WORK TOGETHER
            </h2>
            
            <p className="text-zinc-300 text-xs sm:text-sm mt-4 max-w-md leading-relaxed">
              Saya siap berkontribusi dalam proyek pengembangan website, aplikasi web, perancangan database, maupun kerja sama tim software engineering.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="https://wa.me/6285604424629" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#994887] hover:bg-[#b55a9f] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#3A004D]"
              >
                <span>💬 Chat via WhatsApp</span>
              </a>
              <button 
                onClick={() => handleCopyEmail("sherynhendrita02@gmail.com")} 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A004D] hover:bg-[#4a085e] border border-[#994887]/50 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>📋 Salin Email</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center p-6 sm:p-8 rounded-3xl bg-[#22002e] border border-[#3A004D]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#b55a9f] mb-6">INFORMASI KONTAK RESMI</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3A004D]/40 border border-[#994887]/30 hover:border-[#994887] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#994887]/20 border border-[#994887]/40 flex items-center justify-center text-[#b55a9f] text-sm">✉</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">EMAIL</p>
                    <a href="mailto:sherynhendrita02@gmail.com" className="text-xs sm:text-sm text-white font-medium hover:text-[#b55a9f] transition-colors">
                      sherynhendrita02@gmail.com
                    </a>
                  </div>
                </div>
                <button onClick={() => handleCopyEmail("sherynhendrita02@gmail.com")} className="text-[10px] uppercase font-mono text-[#b55a9f] hover:underline cursor-pointer">
                  Salin
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3A004D]/40 border border-[#994887]/30 hover:border-[#994887] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#994887]/20 border border-[#994887]/40 flex items-center justify-center text-[#b55a9f] text-sm">📱</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">WHATSAPP / TELEPON</p>
                    <a href="https://wa.me/6285604424629" target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white font-medium hover:text-[#b55a9f] transition-colors">
                      +62 856 0442 4629
                    </a>
                  </div>
                </div>
                <a href="https://wa.me/6285604424629" target="_blank" rel="noreferrer" className="text-[10px] uppercase font-mono text-emerald-400 hover:underline">
                  Buka WA
                </a>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#3A004D]/40 border border-[#994887]/30">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#994887]/20 border border-[#994887]/40 flex items-center justify-center text-[#b55a9f] text-sm">📍</span>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">LOKASI & DOMISILI</p>
                    <p className="text-xs sm:text-sm text-white font-medium">Nganjuk & Jember, Jawa Timur, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3A004D] flex items-center justify-between text-[11px] text-zinc-400">
              <span>Politeknik Negeri Jember</span>
              <span className="text-zinc-500 font-mono">© 2026 Sheryn Febrylia Hendrita</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* ============ LIVE INTERACTIVE WEBSITE MODAL (BROWSER SIMULATOR) =========== */}
      {/* ========================================================================= */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex bg-black/85 backdrop-blur-md items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-[#1a0024] border-2 border-[#994887] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* BROWSER TOP BAR (macOS Chrome Controls) */}
            <div className="bg-[#2d003b] border-b border-[#3A004D] px-4 py-3 flex items-center justify-between gap-4 select-none shrink-0">
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => setActiveModalProject(null)} title="Tutup" className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer"></button>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500 opacity-60"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 opacity-60"></div>
              </div>

              <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 bg-[#16001e] border border-[#994887]/40 rounded-full px-4 py-1.5 text-xs">
                <span className="text-emerald-400 text-xs">🔒</span>
                <span className="font-mono text-zinc-300 truncate">{activeModalProject.url}</span>
                <span className="text-[10px] text-zinc-500 ml-auto hidden sm:inline">200 OK</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={() => showToast("Memuat ulang tampilan website...")} 
                  title="Reload Halaman"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#3A004D] transition-colors cursor-pointer"
                >
                  ↻
                </button>
                <button 
                  onClick={() => setActiveModalProject(null)} 
                  className="px-3 py-1 rounded-full bg-[#994887] hover:bg-[#b55a9f] text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Tutup [✕]
                </button>
              </div>
            </div>

            {/* BROWSER SUB-HEADER */}
            <div className="bg-[#240030] px-4 py-2 border-b border-[#3A004D] flex items-center justify-between text-xs text-zinc-300 shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#994887] text-white font-bold text-[10px] uppercase">
                  {activeModalProject.category}
                </span>
                <span className="font-bold text-white">{activeModalProject.title}</span>
              </div>
              <span className="text-[11px] text-zinc-400 hidden sm:inline">✨ Website interaktif dapat diklik & dicoba langsung</span>
            </div>

            {/* BROWSER VIEWPORT */}
            <div className="flex-1 overflow-y-auto bg-zinc-950 p-0 text-white min-h-[460px]">
              
              {/* 1. PAK TO BARBER LIVE SITE */}
              {activeModalProject.id === "paktobarber" && (
                <div className="bg-zinc-900 text-zinc-100 min-h-full font-sans pb-12">
                  <nav className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">💈</span>
                      <div>
                        <span className="font-extrabold text-amber-500 tracking-wider text-base block leading-none">PAK TO BARBER</span>
                        <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase">GENTLEMEN&apos;S GROOMING</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-xs text-zinc-300">
                      <span>Layanan</span>
                      <span>Daftar Harga</span>
                      <span>Booking Cukur</span>
                    </div>
                    <button 
                      onClick={() => showToast("Silakan isi formulir booking di bawah!")}
                      className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book Sekarang
                    </button>
                  </nav>

                  <div className="relative bg-gradient-to-r from-zinc-950 via-zinc-900 to-amber-950/40 px-6 py-12 border-b border-zinc-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="max-w-lg">
                      <span className="inline-block px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] font-bold uppercase mb-2">
                        SENIN - MINGGU: 09:00 - 21:00 WIB
                      </span>
                      <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                        Gaya Rambut Maskulin, Rapi & Percaya Diri
                      </h1>
                      <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                        Potongan presisi oleh capster berpengalaman dengan perlengkapan higienis, handuk hangat, dan pomade premium.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-medium">✓ Free Hair Tonic</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-medium">✓ Ruangan AC Dingin</span>
                        <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-300 font-medium">✓ Free WiFi & Kopi</span>
                      </div>
                    </div>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center text-amber-400 p-4 shrink-0 shadow-lg">
                      <span className="text-4xl mb-1">✂️</span>
                      <span className="text-xs font-bold uppercase tracking-wider">Premium Cut</span>
                      <span className="text-[11px] text-zinc-400 mt-1">Rp 35.000</span>
                    </div>
                  </div>

                  <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider">Pilihan Layanan Cukur</h3>
                      <p className="text-xs text-zinc-400">Pilih servis terbaik sesuai gaya yang Anda inginkan</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">💈</span>
                          <span className="font-bold text-amber-400 text-sm">Rp 35.000</span>
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase">Gentlemen Haircut</h4>
                        <p className="text-[11px] text-zinc-400 mt-1">Potong rambut rapi + cuci + pijat kepala rileks + styling pomade.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">🪒</span>
                          <span className="font-bold text-amber-400 text-sm">Rp 20.000</span>
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase">Beard & Mustache Trim</h4>
                        <p className="text-[11px] text-zinc-400 mt-1">Cukur kumis & jenggot dengan razor steril, foam hangat, dan aftershave.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg">✨</span>
                          <span className="font-bold text-amber-400 text-sm">Rp 50.000</span>
                        </div>
                        <h4 className="font-bold text-white text-xs uppercase">Pak To Royal Package</h4>
                        <p className="text-[11px] text-zinc-400 mt-1">Haircut komplit + Facial Wash Scrub + Pijat Bahu + Black Mask Masker.</p>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-xl mx-auto px-6 py-6 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-xl my-4">
                    <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span>📅</span> Formulir Reservasi Online
                    </h4>
                    <p className="text-[11px] text-zinc-400 mb-4">Coba isi form ini untuk menguji fungsionalitas booking!</p>
                    
                    <form onSubmit={handlePakToBooking} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Nama Pemesan</label>
                          <input required defaultValue="Sheryn Febrylia" type="text" className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-amber-500" />
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">No. WhatsApp</label>
                          <input required defaultValue="085604424629" type="text" className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-amber-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Pilihan Layanan</label>
                          <select className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-amber-500">
                            <option>Gentlemen Haircut (Rp 35.000)</option>
                            <option>Beard & Mustache Trim (Rp 20.000)</option>
                            <option>Pak To Royal Package (Rp 50.000)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] text-zinc-400 uppercase font-semibold mb-1">Jam Kedatangan</label>
                          <select className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-amber-500">
                            <option>10:00 WIB</option>
                            <option>13:30 WIB</option>
                            <option>16:00 WIB</option>
                            <option>19:00 WIB</option>
                          </select>
                        </div>
                      </div>

                      <button type="submit" className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer">
                        Konfirmasi Jadwal Cukur ⟶
                      </button>
                    </form>

                    {pakToBooked && (
                      <div className="mt-3 p-3 rounded-lg bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs">
                        🎉 <strong>Reservasi Berhasil!</strong> Jadwal Anda telah tercatat di sistem Pak To Barber.
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 2. EXOTIC GAMING & CAFE LIVE SITE */}
              {activeModalProject.id === "exoticgaming" && (
                <div className="bg-zinc-950 text-zinc-100 min-h-full font-sans pb-12">
                  <nav className="bg-zinc-900 border-b border-purple-900/40 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎮</span>
                      <div>
                        <span className="font-extrabold text-purple-400 tracking-wider text-base block leading-none">EXOTIC GAMING & CAFE</span>
                        <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase">ESPORTS ARENA & COZY LOUNGE</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-300 text-[11px] font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>38 / 50 PC ONLINE</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-purple-600 text-white text-[11px] font-bold">
                        🛒 {exoticCartCount} Item
                      </span>
                    </div>
                  </nav>

                  <div className="bg-gradient-to-b from-purple-950/40 to-zinc-950 px-6 py-8 border-b border-zinc-800 text-center">
                    <span className="px-3 py-1 rounded-full bg-purple-900/60 text-purple-300 font-mono text-[10px] font-bold uppercase border border-purple-700/50">
                      HIGH SPEC GAMING RIGS • RTX 40 SERIES • 240HZ MONITOR
                    </span>
                    <h2 className="text-xl sm:text-3xl font-black text-white mt-3 uppercase tracking-wide">
                      Pusat Gaming Kompetitif & Santap Cafe
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
                      Sistem billing modern, kursi ergonomis gaming, koneksi fiber optik gigabit low latency, dan cafe menu lezat siap antar ke meja Anda.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto px-6 py-6">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span>🍔</span> Menu Makanan & Minuman Cafe
                        </h3>
                        <span className="text-xs text-zinc-400">Pesan langsung dari PC</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-white text-xs">Indomie Internet Jumbo</h4>
                              <span className="text-xs font-mono font-bold text-purple-400">Rp 15.000</span>
                            </div>
                            <p className="text-[10px] text-zinc-400 mt-1">Indomie telor kornet + keju tabur + cabe rawit.</p>
                          </div>
                          <button onClick={() => handleAddExoticOrder("Indomie Internet", 15000)} className="mt-3 w-full py-1.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-bold text-[11px] transition-colors cursor-pointer">
                            + Pesan Menu
                          </button>
                        </div>

                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-white text-xs">Kopi Susu Gula Aren</h4>
                              <span className="text-xs font-mono font-bold text-purple-400">Rp 12.000</span>
                            </div>
                            <p className="text-[10px] text-zinc-400 mt-1">Espresso blend robusta arabika susu creamy.</p>
                          </div>
                          <button onClick={() => handleAddExoticOrder("Kopi Susu Aren", 12000)} className="mt-3 w-full py-1.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-bold text-[11px] transition-colors cursor-pointer">
                            + Pesan Menu
                          </button>
                        </div>

                        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-white text-xs">French Fries & Sosis</h4>
                              <span className="text-xs font-mono font-bold text-purple-400">Rp 14.000</span>
                            </div>
                            <p className="text-[10px] text-zinc-400 mt-1">Kentang goreng crispy dengan saus keju & sambal.</p>
                          </div>
                          <button onClick={() => handleAddExoticOrder("French Fries & Sosis", 14000)} className="mt-3 w-full py-1.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-bold text-[11px] transition-colors cursor-pointer">
                            + Pesan Menu
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-zinc-900 border border-purple-900/50">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">⚡ Simulasi Sewa Billing PC</span>
                        <span className="font-mono text-xs font-bold text-emerald-400">Total: Rp {exoticTotal.toLocaleString("id-ID")}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <button onClick={() => handleAddExoticOrder("Billing Paket 2 Jam", 10000)} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 cursor-pointer">
                          + Paket 2 Jam (Rp 10.000)
                        </button>
                        <button onClick={() => handleAddExoticOrder("Billing Paket 5 Jam (VIP)", 22000)} className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 cursor-pointer">
                          + Paket 5 Jam VIP (Rp 22.000)
                        </button>
                        <button onClick={handleResetExotic} className="px-3 py-1.5 rounded-lg bg-rose-950 border border-rose-800 text-rose-300 text-xs hover:bg-rose-900 cursor-pointer">
                          Reset Pesanan
                        </button>
                      </div>

                      <div className="mt-3 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-400 font-mono">
                        {exoticLog}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. SISTEM INFORMASI & RESTful API TIF LIVE SITE */}
              {activeModalProject.id === "apimahasiswa" && (
                <div className="bg-zinc-950 text-zinc-100 min-h-full font-mono text-xs pb-12">
                  <nav className="bg-zinc-900 border-b border-zinc-800 px-6 py-3 flex items-center justify-between sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚡</span>
                      <div>
                        <span className="font-bold text-white text-xs block">POLIJE TIF API SERVICES</span>
                        <span className="text-[9px] text-zinc-400">RESTful API • Postman Tested • MVC</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-400 text-[10px] font-bold">
                        API ONLINE 200 OK
                      </span>
                    </div>
                  </nav>

                  <div className="max-w-4xl mx-auto px-6 py-6">
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-white font-sans uppercase tracking-wider mb-1">
                        Postman RESTful API Interactive Inspector
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-sans">
                        Uji coba interaktif endpoint API pengelolaan data mahasiswa Teknik Informatika Politeknik Negeri Jember.
                      </p>
                    </div>

                    <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 flex flex-col sm:flex-row items-center gap-2 mb-4">
                      <div className="flex items-center gap-1.5 w-full sm:w-auto">
                        <span className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px]">GET</span>
                        <span className="text-zinc-400 text-xs">/api/v1/students</span>
                      </div>
                      <input type="text" readOnly value="https://api-tif.polije.ac.id/v1/students" className="flex-1 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-300 text-[11px] w-full" />
                      <button onClick={() => showToast("GET /api/v1/students 200 OK — 42ms")} className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer">
                        Send Request ⟶
                      </button>
                    </div>

                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden shadow-lg">
                      <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 font-bold">Status: 200 OK</span>
                          <span>Time: 42 ms</span>
                          <span>Size: 1.2 KB</span>
                        </div>
                        <span>JSON Response Format</span>
                      </div>
                      
                      <pre className="p-4 text-[11px] text-emerald-300 overflow-x-auto leading-relaxed max-h-72">
                        {apiResponseText}
                      </pre>
                    </div>

                    <div className="mt-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                      <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-2">Simulasi Operasi CRUD Database:</h4>
                      <div className="flex flex-wrap gap-2 font-sans">
                        <button onClick={() => handleSimulateCrud("POST")} className="px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-600 text-emerald-300 text-xs hover:bg-emerald-900 cursor-pointer">
                          + POST (Tambah Mahasiswa)
                        </button>
                        <button onClick={() => handleSimulateCrud("PUT")} className="px-3 py-1.5 rounded-lg bg-amber-950 border border-amber-600 text-amber-300 text-xs hover:bg-amber-900 cursor-pointer">
                          ✏️ PUT (Update Data Nilai)
                        </button>
                        <button onClick={() => handleSimulateCrud("DELETE")} className="px-3 py-1.5 rounded-lg bg-rose-950 border border-rose-600 text-rose-300 text-xs hover:bg-rose-900 cursor-pointer">
                          🗑️ DELETE (Hapus Record)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT MODAL ================= */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-sm items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#22002e] border border-[#994887] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">Hubungi Sheryn</h3>
              <button onClick={() => setContactOpen(false)} className="w-8 h-8 rounded-full bg-[#3A004D] flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer">✕</button>
            </div>
            
            <p className="text-xs text-zinc-300 mb-6">
              Silakan tinggalkan pesan untuk kebutuhan proyek website, kerja sama, atau tawaran magang.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Nama Lengkap</label>
                <input required type="text" placeholder="Masukkan nama Anda" className="w-full px-4 py-2.5 rounded-xl bg-[#16001e] border border-[#3A004D] focus:border-[#994887] outline-none text-white text-xs" />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Email / WhatsApp</label>
                <input required type="text" placeholder="kontak@perusahaan.com / 0812..." className="w-full px-4 py-2.5 rounded-xl bg-[#16001e] border border-[#3A004D] focus:border-[#994887] outline-none text-white text-xs" />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1 font-semibold">Pesan / Detail Proyek</label>
                <textarea required rows={4} placeholder="Ceritakan kebutuhan atau penawaran kerja sama..." className="w-full px-4 py-2.5 rounded-xl bg-[#16001e] border border-[#3A004D] focus:border-[#994887] outline-none text-white text-xs"></textarea>
              </div>

              <button type="submit" className="w-full py-3 rounded-full bg-[#994887] hover:bg-[#b55a9f] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#3A004D] cursor-pointer">
                Kirim Pesan Sekarang ⟶
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3A004D] border border-[#994887] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-xs animate-bounce">
          <span className="text-emerald-400 font-bold">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  )
}
