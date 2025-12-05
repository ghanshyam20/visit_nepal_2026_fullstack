export default function Highlights() {
  const items = [
    { title: "Rich Culture", text: "Experience the vibrant traditions of Nepal." },
    { title: "Beautiful Landscapes", text: "Mountains, lakes, forests — all in one journey." },
    { title: "Adventure Awaits", text: "Hiking, trekking, paragliding and more!" },
  ];

  return (
    <section className="highlights">
      <h2>Why Visit Nepal?</h2>

      <div className="highlight-grid">
        {items.map((item, idx) => (
          <div className="highlight-card" key={idx}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
