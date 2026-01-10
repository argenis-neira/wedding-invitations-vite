// Estilos locales para la textura y el efecto papel
const styles = {
  container: {
    backgroundColor: "#f5f5dc", // Beige base
    backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")`, // Textura sutil
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "60px 20px",
    color: "#333",
    fontFamily: "'Playfair Display', serif", // Tipografía elegante
  },
  divider: {
    width: "1px",
    height: "60px",
    backgroundColor: "#ccc",
    margin: "0 20px",
  },
  // Generamos el efecto de papel arrancado mediante una máscara SVG
  tornPaperContainer: {
    position: "relative" as const,
    width: "100%",
    maxWidth: "600px",
    height: "400px",
    marginTop: "40px",
    overflow: "hidden",
    WebkitMaskImage:
      'url("https://ik.imagekit.io/2v766v7at/torn-paper-mask.png")', // Necesitarás un asset similar o usar el SVG de abajo
    maskImage: 'url("https://ik.imagekit.io/2v766v7at/torn-paper-mask.png")',
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
  },
};

const Invitacion = () => {
  const tornClipPath =
    "polygon(0% 2.8%, 1% 0.2%, 2% 3.5%, 3% 1.1%, 4% 3.9%, 5% 0.5%, 6% 2.7%, 7% 1.8%, 8% 3.2%, 9% 0.9%, 10% 2.5%, 11% 3.8%, 12% 1.2%, 13% 2.9%, 14% 0.4%, 15% 3.6%, 16% 1.7%, 17% 2.3%, 18% 3.1%, 19% 0.6%, 20% 2.9%, 21% 1.4%, 22% 3.7%, 23% 0.2%, 24% 2.5%, 25% 1.9%, 26% 3.4%, 27% 0.8%, 28% 2.1%, 29% 3.6%, 30% 1.3%, 31% 2.7%, 32% 0.5%, 33% 3.9%, 34% 1.1%, 35% 2.4%, 36% 3.8%, 37% 0.3%, 38% 2.6%, 39% 1.7%, 40% 3.2%, 41% 0.9%, 42% 2.2%, 43% 3.5%, 44% 1.4%, 45% 2.8%, 46% 0.6%, 47% 3.1%, 48% 1.9%, 49% 2.5%, 50% 3.3%, 51% 0.7%, 52% 2.9%, 53% 1.5%, 54% 3.8%, 55% 0.1%, 56% 2.4%, 57% 1.8%, 58% 3.2%, 59% 0.9%, 60% 2.1%, 61% 3.7%, 62% 1.3%, 63% 2.6%, 64% 0.4%, 65% 3.9%, 66% 1.2%, 67% 2.3%, 68% 3.6%, 69% 0.7%, 70% 2.5%, 71% 1.6%, 72% 3.1%, 73% 0.8%, 74% 2.2%, 75% 3.4%, 76% 1.5%, 77% 2.9%, 78% 0.6%, 79% 3.2%, 80% 1.8%, 81% 2.4%, 82% 3.7%, 83% 0.3%, 84% 2.1%, 85% 1.4%, 86% 3.5%, 87% 0.9%, 88% 2.7%, 89% 3.9%, 90% 1.1%, 91% 2.5%, 92% 0.2%, 93% 3.8%, 94% 1.7%, 95% 2.4%, 96% 3.1%, 97% 0.5%, 98% 2.9%, 99% 1.3%, 100% 3.5%, 100% 96.2%, 99% 99.8%, 98% 97.5%, 97% 98.9%, 96% 96.1%, 95% 99.5%, 94% 97.3%, 93% 98.2%, 92% 96.8%, 91% 99.1%, 90% 97.5%, 89% 96.2%, 88% 98.8%, 87% 97.1%, 86% 96.4%, 85% 99.4%, 84% 97.1%, 83% 98.6%, 82% 96.3%, 81% 99.8%, 80% 97.1%, 79% 98.6%, 78% 96.3%, 77% 99.2%, 76% 97.5%, 75% 96.6%, 74% 99.2%, 73% 97.9%, 72% 96.5%, 71% 98.7%, 70% 97.5%, 69% 96.4%, 68% 99.3%, 67% 97.4%, 66% 98.7%, 65% 96.1%, 64% 99.6%, 63% 97.4%, 62% 98.7%, 61% 96.3%, 60% 97.9%, 59% 99.1%, 58% 96.8%, 57% 98.2%, 56% 97.6%, 55% 99.9%, 54% 96.2%, 53% 98.5%, 52% 97.1%, 51% 99.3%, 50% 96.7%, 49% 97.5%, 48% 98.1%, 47% 96.9%, 46% 99.4%, 45% 97.2%, 44% 98.6%, 43% 96.5%, 42% 97.8%, 41% 99.1%, 40% 96.8%, 39% 98.3%, 38% 97.4%, 37% 99.7%, 36% 96.2%, 35% 97.6%, 34% 98.9%, 33% 96.1%, 32% 99.5%, 31% 97.3%, 30% 98.7%, 29% 96.4%, 28% 97.9%, 27% 99.2%, 26% 96.6%, 25% 98.1%, 24% 97.5%, 23% 99.8%, 22% 96.3%, 21% 98.6%, 20% 97.1%, 19% 99.4%, 18% 96.9%, 17% 97.7%, 16% 98.3%, 15% 96.4%, 14% 99.6%, 13% 97.1%, 12% 98.8%, 11% 96.2%, 10% 97.5%, 9% 99.1%, 8% 96.8%, 7% 98.2%, 6% 97.3%, 5% 99.5%, 4% 96.1%, 3% 98.9%, 2% 96.5%, 1% 99.8%, 0% 97.2%)";
  return (
    <div style={styles.container}>
      {/* Primer Row: Texto de bienvenida */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <p
          style={{
            fontSize: "1.2rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Están cordialmente invitados a celebrar
        </p>
      </div>

      {/* Segundo Row: Iniciales con el palito gris */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}
      >
        <h1 style={{ fontSize: "5rem", fontWeight: "bold", margin: 0 }}>J</h1>
        <div style={styles.divider}></div>
        <h1 style={{ fontSize: "5rem", fontWeight: "bold", margin: 0 }}>M</h1>
      </div>

      {/* Tercer Row: Texto secundario */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
          Nuestro Amor y Unión
        </p>
      </div>

      {/* Cuarto Row: Imagen con efecto papel arrancado */}
      <div className="torn-effect" style={{ width: "100%", maxWidth: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
          alt="Pareja"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            // Aplicamos un clip-path que simula el rasgado si no quieres usar imágenes externas para la máscara
            clipPath: tornClipPath,
          }}
        />
      </div>
    </div>
  );
};

export default Invitacion;
