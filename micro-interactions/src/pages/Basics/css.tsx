/*
  🎯 Mål med övningen
  - Träna grundläggande till avancerade CSS-selektorer.
  - Öva kombinationsselektorer, attributselektorer, pseudo-klasser, pseudo-element, och :has().
  - Förstå specifitet och kaskad.

  📘 Tips
  - Lägg all din CSS i <style id="work"></style> nedan.
  - Jobba i steg (SEKTIONERNA A–K). Varje sektion har uppgifter (TASKS).
  - Försök lösa med så liten specifitet som möjligt (utan !important), gärna med :where()/ :is() när lämpligt.
  - Testa även att skriva flera alternativa selektorer till samma uppgift.

  👉 Bonus
  - Använd :has() för att style:a föräldrar utifrån barns tillstånd.
  - Använd :nth-child() och :nth-of-type() med formler och "of S"-syntax.
  - Testa attributselektorer med ^, $, * samt case-insensitive flagga i (t.ex. [attr="värde" i]).
  */

import "./default.css";
import "./your.css";

const Css = () => (
  <>
    <header className="container card" id="top">
      <h1 data-level="intro">CSS Selectors – träningsyta</h1>
      <nav aria-label="Primär" className="site-nav">
        <ul className="nav-list">
          <li>
            <a href="#sektionA">A: Flexbox positionering</a>
          </li>
          <li>
            <a href="#sektionB">B: :Pseudo Klasser</a>
          </li>
        </ul>
      </nav>
    </header>

    <main className="css-training grid">
      {/* SEKTION A: GRUNDER */}
      <section id="sektionA" className="card" data-section="A">
        <h2>A. Flexbox</h2>
        <p className="intro">Skriv css så att den röda blocket hamnar rätt.</p>
        <ul>
          <li>
            <p> Top Left</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Top Right</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Top Center</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Left</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Right</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Center</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Left</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Right</p>
            <div className="">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Center</p>
            <div className="">
              <span />
            </div>
          </li>
        </ul>
      </section>
      <section id="sektionB" className="card" data-section="A">
        <h2>B. Psuedo klasser</h2>
        <p className="intro">Skriv css så att den röda blocket hamnar rätt.</p>
        <ul>
          <li>
            <p>Knapp</p>
            <a
              target="_blank"
              href="https://www.figma.com/design/QQv8JmxowfrN6w84lQnuCD/WebDoc---Future?node-id=4092-27262&t=RaOhsL3ZCQAVDUBq-1"
            >
              Knappens beteende och utseende
            </a>
            <button>En knapp</button>
          </li>
          <li>
            <p>Inputfällt</p>
            <a
              target="_blank"
              href="https://www.figma.com/design/QQv8JmxowfrN6w84lQnuCD/WebDoc---Future?node-id=6010-35728&t=RaOhsL3ZCQAVDUBq-1"
            >
              Input beteende och utseende
            </a>
            <input type="text" placeholder="Ett input fält" />
          </li>
        </ul>
      </section>
    </main>
  </>
);

export default Css;
