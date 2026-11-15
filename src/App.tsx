import { useState } from "react";

const wishes = [
  { number: "01", title: "Für euer kleines Wunder", text: "Möge euer Kind gesund und behütet aufwachsen. Möge jeder neue Tag kleine Wunder, grosse Entdeckungen und unzählige Gründe zum Lächeln bringen.", symbol: "✳" },
  { number: "02", title: "Für euch als Eltern", text: "Ich wünsche euch Kraft für die langen Nächte, Gelassenheit für die neuen Herausforderungen und ganz besonders viele Augenblicke, in denen ihr einfach nur staunt.", symbol: "♡" },
  { number: "03", title: "Für eure Familie", text: "Möge euer Zuhause mit noch mehr Lachen, Wärme und Zusammenhalt erfüllt sein. Und eurem grossen Geschwisterkind wünsche ich Freude an dieser ganz besonderen neuen Rolle.", symbol: "✧" },
];

function Sparkle({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`sparkle ${className}`}>✳</span>;
}

export default function App() {
  const [blessingOpen, setBlessingOpen] = useState(false);
  return (
    <main>
      <div className="topline">
        <a className="wordmark" href="#start" aria-label="Herzgruss Startseite"><span className="wordmark-icon">h.</span><span>ein herzgruss</span></a>
        <span className="topline-note">MIT LIEBE GESCHRIEBEN</span>
      </div>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow"><span /> EIN NEUES KAPITEL BEGINNT</p>
          <h1>Ein kleines<br /><em>Wunder.</em><br />Ein grosses Glück.</h1>
          <p className="hero-lede">Ein neuer kleiner Mensch. Ein Herz, das ab jetzt noch mehr Platz hat. Und eine Familie, die um ein wunderschönes Kapitel reicher ist.</p>
          <a className="hero-link" href="#glueckwuensche">Meine Glückwünsche entdecken <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-art" aria-label="Abstrakte Illustration eines liebevoll gewickelten Neugeborenen">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="sun-disc" />
          <div className="baby-illustration">
            <div className="baby-halo" /><div className="baby-head" /><div className="baby-body" />
            <div className="baby-blanket" /><div className="baby-fold fold-one" /><div className="baby-fold fold-two" />
            <div className="baby-hand hand-one" /><div className="baby-hand hand-two" />
          </div>
          <Sparkle className="sparkle-a" /><Sparkle className="sparkle-b" /><Sparkle className="sparkle-c" />
          <span className="art-caption">ein geschenk des lebens</span><span className="art-number">01 / 01</span>
        </div>
        <div className="hero-bottom"><span>FÜR EINEN GANZ BESONDEREN ANLASS</span><span className="scroll-mark">SCROLLEN <i>↓</i></span></div>
      </section>

      <section className="intro-section" id="glueckwuensche">
        <div className="section-kicker">VON HERZEN</div>
        <div className="intro-content">
          <Sparkle className="intro-sparkle" />
          <h2>Manche Nachrichten<br />machen die Welt <em>heller.</em></h2>
          <p>Die Nachricht von eurem Familienzuwachs ist so eine. Zur Geburt eures zweiten Kindes sende ich euch meine herzlichsten Glückwünsche. Ich wünsche euch von ganzem Herzen Gesundheit, Liebe und einen wunderschönen gemeinsamen Start in diesen neuen Lebensabschnitt.</p>
          <div className="signature-line"><span>Mit den allerbesten Wünschen</span><strong>Tim<span>.</span></strong></div>
        </div>
      </section>

      <section className="wishes-section">
        <div className="wishes-heading">
          <div><div className="section-kicker">DREI HERZENSWÜNSCHE</div><h2>Für das, was<br /><em>vor euch liegt.</em></h2></div>
          <p>Ein paar Gedanken und Wünsche<br />für euren gemeinsamen Weg.</p>
        </div>
        <div className="wish-grid">
          {wishes.map((wish) => <article className="wish-card" key={wish.number}>
            <div className="wish-card-top"><span>{wish.number}</span><span className="wish-symbol">{wish.symbol}</span></div>
            <h3>{wish.title}</h3><p>{wish.text}</p>
          </article>)}
        </div>
      </section>

      <section className="blessing-section">
        <div className="blessing-decoration"><span>✳</span><span>✧</span><span>✳</span></div>
        <p className="eyebrow light"><span /> EIN WUNSCH UND EIN GEBET</p>
        <h2>Möge Liebe euer<br /><em>Zuhause sein.</em></h2>
        <p className="blessing-lede">Ich bete, dass Gott euer kleines Wunder beschützt, eure Familie stärkt und euch auf jedem Schritt begleitet. Möge er euch Gesundheit, Geduld und Freude schenken – heute und an jedem neuen Morgen.</p>
        <button className="blessing-button" type="button" aria-expanded={blessingOpen} onClick={() => setBlessingOpen((open) => !open)}>
          {blessingOpen ? "Wunsch schliessen" : "Ein letzter Herzenswunsch"} <span>{blessingOpen ? "−" : "+"}</span>
        </button>
        {blessingOpen && <div className="blessing-reveal">Möge dieses Kind immer Menschen an seiner Seite haben, die es lieben, ermutigen und auffangen. Möge es seinen eigenen Weg mit Mut gehen und dabei nie an Liebe und Geborgenheit zweifeln müssen. Amen.</div>}
        <div className="blessing-footer">IN LIEBE UND DANKBARKEIT <span>✳</span></div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div><p className="eyebrow"><span /> EIN GRUSS, DER BLEIBEN SOLL</p><h2>Von Herzen.<br /><em>Für immer.</em></h2></div>
          <div className="footer-signoff"><span>Mit Liebe und den besten Wünschen,</span><strong>Tim<span>.</span></strong></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} · EIN KLEINER HERZGRUSS</span>
          <a href="https://thesdel.com/litheral" target="_blank" rel="noreferrer">Ein Projekt von Philip Jonathan Peter <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  );
}