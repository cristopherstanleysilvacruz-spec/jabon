import React, { useState } from "react";
import { FaWhatsapp, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { GiSoap } from "react-icons/gi";

/**
 * Natural Beauty – FULL RESPONSIVE versión PRO + Glow Colors
 */

const PRODUCTS = [
  {
    id: "avena-miel",
    name: "Jabón de Avena y Miel",
    price: "S/ 18.00",
    color: "#fbbf24", // Amarillo miel
    image: "public/img/IMG_20251128_085044.jpg",
    description:
      "Ideal para pieles sensibles, este jabón nutre e hidrata profundamente, dejando la piel suave y radiante.",
    ingredients: [
      "Aceite de Oliva",
      "Aceite de Coco",
      "Avena Coloidal",
      "Miel",
      "Hidróxido de Sodio",
      "Agua Destilada",
      "Leche de Avena (trocitos)",
    ],
    benefits: ["Exfolia suavemente", "Alivia la irritación", "Humecta profundamente"],
  },
  {
    id: "lavanda-karite",
    name: "Jabón de Lavanda y Karité",
    price: "S/ 20.00",
    color: "#a78bfa", // Morado lavanda
    image: "public/img/IMG_20251128_085059.jpg",
    description:
      "Jabón artesanal con lavanda calmante y karité nutritiva. Ideal para pieles sensibles, relaja e hidrata profundamente.",
    ingredients: [
      "Aceite de Oliva",
      "Aceite de Coco",
      "Manteca de Karité",
      "Aceite Esencial de Lavanda",
      "Hidróxido de Sodio",
      "Agua Destilada",
      "Colorante natural violeta",
    ],
    benefits: ["Calma y relaja", "Hidrata en profundidad"],
  },
  {
    id: "rosas-argan",
    name: "Jabón de Rosas y Argán",
    price: "S/ 25.00",
    color: "#fb7185", // Rosado
    image: "public/img/IMG_20251128_085121.jpg",
    description:
      "Jabón artesanal de lujo con rosas y argán rejuvenecedor. Limpia suavemente, dejando la piel radiante e hidratada.",
    ingredients: [
      "Aceite de Oliva",
      "Aceite de Coco",
      "Aceite de Argán",
      "Aceite Esencial de Rosas",
      "Hidróxido de Sodio",
      "Agua Destilada",
      "Arcilla rosa (color natural)",
    ],
    benefits: ["Revitaliza", "Ilumina y rejuvenece"],
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const whatsappNumber = "51963596866";

  function openProduct(product) {
    setSelected(product);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setSelected(null);
  }

  function openWhatsApp(productName = null) {
    const text = encodeURIComponent(
      productName
        ? `Hola, estoy interesado en el ${productName}.`
        : "Hola, quisiera más información sobre sus jabones."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="public/img/IMG_20251128_081041.png"
              alt="Logo NATURAL BEAUTY"
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full shadow"
            />
            <span className="font-semibold text-lg sm:text-xl">
              NATURAL BEAUTY
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:underline flex items-center gap-1 hover:scale-105 transition"
            >
              <FaHome /> Inicio
            </button>

            <button
              onClick={() =>
                document.getElementById("productos")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="hover:underline flex items-center gap-1 hover:scale-105 transition"
            >
              <GiSoap /> Productos
            </button>

            <button
              onClick={() => openWhatsApp()}
              className="bg-emerald-500 text-white px-4 py-2 rounded shadow hover:brightness-105 hover:scale-105 transition flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-gray-800 p-2 rounded border hover:bg-gray-100 transition"
          >
            {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t shadow animate-fadeIn">
            <div className="flex flex-col gap-3 p-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenu(false);
                }}
                className="flex items-center gap-2 hover:underline hover:scale-105 transition"
              >
                <FaHome /> Inicio
              </button>

              <button
                onClick={() => {
                  document.getElementById("productos")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="flex items-center gap-2 hover:underline hover:scale-105 transition"
              >
                <GiSoap /> Productos
              </button>

              <button
                onClick={() => openWhatsApp()}
                className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded shadow hover:brightness-105 hover:scale-105 transition"
              >
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Jabones Artesanales NATURAL BEAUTY
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
              Productos hechos a mano con ingredientes naturales. Elegancia y cuidado para tu piel.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document.getElementById("productos")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-6 py-3 bg-amber-100 border rounded font-medium shadow hover:shadow-md hover:scale-105 transition"
              >
                Ver Productos
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="px-6 py-3 bg-emerald-500 text-white rounded font-medium shadow hover:brightness-105 hover:scale-105 transition flex items-center gap-2"
              >
                <FaWhatsapp /> Pedir por WhatsApp
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm sm:max-w-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition">
              <img
                src="public/img/file_000000003cb8720e907768b328fb011f.png"
                alt="Jabones NATURAL BEAUTY"
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="productos" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <GiSoap /> Nuestros Productos
          </h2>
          <p className="text-gray-600 mt-2">
            Selecciona un producto para ver más detalles.
          </p>

          {/* GRID RESPONSIVE */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  border: `2px solid ${p.color}`,
                  boxShadow: `0 0 12px ${p.color}55`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 22px ${p.color}`;
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 12px ${p.color}55`;
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div className="w-full h-52 sm:h-56 bg-gray-100">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-amber-600 font-bold mt-2">{p.price}</p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => openProduct(p)}
                      className="px-3 py-2 border rounded text-sm hover:bg-gray-50 hover:scale-105 transition"
                    >
                      Ver información
                    </button>

                    <button
                      onClick={() => openWhatsApp(p.name)}
                      className="px-3 py-2 text-white rounded text-sm flex items-center justify-center gap-2 hover:brightness-105 hover:scale-105 transition"
                      style={{ backgroundColor: p.color }}
                    >
                      <FaWhatsapp /> Comprar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">
              <img
                src="public/img/IMG_20251128_081041.png"
                alt="Logo NATURAL BEAUTY"
                className="w-10 h-10 object-cover rounded-full shadow"
              />
              <div>
                <div className="font-semibold">NATURAL BEAUTY</div>
                <div className="text-sm text-gray-500">
                  Jabones artesanales • Lima
                </div>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="px-4 py-2 bg-emerald-500 text-white rounded flex items-center gap-2 hover:brightness-105 hover:scale-105 transition"
            >
              <FaWhatsapp /> WhatsApp
            </button>

            <div className="text-sm text-gray-500 text-center md:text-right">
              © {new Date().getFullYear()} NATURAL BEAUTY. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>

      {/* PRODUCT MODAL – SUPER RESPONSIVE */}
      {showModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 animate-fadeIn">
          {/* Blur background */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* MODAL RESPONSIVE */}
          <div className="relative z-10 w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden animate-scaleIn">
            <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-7">

              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-56 sm:h-72 object-cover rounded"
              />

              <h3 className="text-xl sm:text-2xl font-bold mt-4">{selected.name}</h3>
              <p className="text-amber-600 font-bold mt-1">{selected.price}</p>

              <p className="mt-4 text-gray-700 text-sm sm:text-base">
                {selected.description}
              </p>

              <div className="mt-4">
                <h4 className="font-semibold">Ingredientes principales</h4>
                <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm sm:text-base">
                  {selected.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Beneficios</h4>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {selected.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsApp(selected.name)}
                  className="flex-1 px-4 py-3 bg-emerald-500 text-white rounded flex items-center justify-center gap-2 hover:brightness-105 hover:scale-105 transition"
                >
                  <FaWhatsapp /> Pedir por WhatsApp
                </button>

                <button
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 border rounded hover:bg-gray-50 hover:scale-105 transition"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
