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
      <a href="/micro">Micro interactions</a>
      <h1 data-level="intro">CSS Selectors – träningsyta</h1>
      <nav aria-label="Primär" className="site-nav">
        <ul className="nav-list">
          <li>
            <a href="#sektionA">A: Flexbox positionering</a>
          </li>
          <li>
            <a href="#sektionB">B: :Pseudo Klasser</a>
          </li>
          <li>
            <a href="#sektionB">C: :Tabell</a>
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
            <div className="top-left">
              <span />
            </div>
          </li>
          <li>
            <p> Top Right</p>
            <div className="top right">
              <span />
            </div>
          </li>
          <li>
            <p> Top Center</p>
            <div className="top center">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Left</p>
            <div className="middle left">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Right</p>
            <div className="middle right">
              <span />
            </div>
          </li>
          <li>
            <p> Middle Center</p>
            <div className="middle center">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Left</p>
            <div className="bottom left">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Right</p>
            <div className="bottom right">
              <span />
            </div>
          </li>
          <li>
            <p> Bottom Center</p>
            <div className="bottom center">
              <span />
            </div>
          </li>
        </ul>
      </section>
      <section id="sektionB" className="card" data-section="A">
        <h2>B. Psuedo klasser</h2>
        <p className="intro">Skriv så att elementet liknar skisserna.</p>
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
          <li>
            <p>Status message</p>
            <small>
              <i>
                Prioritera gult meddelande, men se om ni kan få till något smart
                med lokala css-variabler för att minska CSS-kod
              </i>
            </small>
            <a
              target="_blank"
              href="https://www.figma.com/design/QQv8JmxowfrN6w84lQnuCD/WebDoc---Future?node-id=4792-29415&t=yBbMxQne900CUyMn-1"
            >
              Status message beteende och utseende
            </a>
            <div className="status-message">
              <div className="text">
                <h4>Status message title</h4>
                <p>A short text to describe the status message a bit more.</p>
              </div>
              <button onClick={() => console.log("Clicked")}>
                Button label
              </button>
            </div>
          </li>
        </ul>
      </section>
      <section id="sektionC" className="card" data-section="C">
        <h2>C. Tabell</h2>
        <p className="intro">
          Styla tabellen så att den liknar skissen på länken nedan. Tips för att
          få till sticky hittar du på länk 2 nedan.
        </p>
        <a
          target="_blank"
          href="https://www.figma.com/design/QQv8JmxowfrN6w84lQnuCD/WebDoc---Future?node-id=13529-32234&t=yBbMxQne900CUyMn-1"
        >
          Tabel beteende och utseende
        </a>
        <br />
        <a target="_blank" href="https://codepen.io/chriscoyier/pen/PrJdxb">
          Sticky CSS Table Header
        </a>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Land</th>
              <th>Huvudstad</th>
              <th>Invånare (ca)</th>
              <th>Kontinent/Region</th>
              <th>Officiellt språk</th>
              <th>Fun fact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sverige</td>
              <td>Stockholm</td>
              <td>10 500 000</td>
              <td>Europa</td>
              <td>Svenska</td>
              <td>Känt för fika och midsommarfirande.</td>
            </tr>
            <tr>
              <td>Norge</td>
              <td>Oslo</td>
              <td>5 500 000</td>
              <td>Europa</td>
              <td>Norska</td>
              <td>Har spektakulära fjordar och norrsken.</td>
            </tr>
            <tr>
              <td>Finland</td>
              <td>Helsingfors</td>
              <td>5 600 000</td>
              <td>Europa</td>
              <td>Finska, svenska</td>
              <td>Hem till bastukultur och många sjöar.</td>
            </tr>
            <tr>
              <td>Danmark</td>
              <td>Köpenhamn</td>
              <td>5 900 000</td>
              <td>Europa</td>
              <td>Danska</td>
              <td>Har en av världens lyckligaste befolkningar.</td>
            </tr>
            <tr>
              <td>Island</td>
              <td>Reykjavik</td>
              <td>400 000</td>
              <td>Europa</td>
              <td>Isländska</td>
              <td>Kända för varma källor och vulkaner.</td>
            </tr>
            <tr>
              <td>Tyskland</td>
              <td>Berlin</td>
              <td>84 000 000</td>
              <td>Europa</td>
              <td>Tyska</td>
              <td>Har världskända julmarknader.</td>
            </tr>
            <tr>
              <td>Frankrike</td>
              <td>Paris</td>
              <td>68 000 000</td>
              <td>Europa</td>
              <td>Franska</td>
              <td>Känt för croissanter, ost och vin.</td>
            </tr>
            <tr>
              <td>Spanien</td>
              <td>Madrid</td>
              <td>48 000 000</td>
              <td>Europa</td>
              <td>Spanska</td>
              <td>Tapas och sena middagar är typiskt här.</td>
            </tr>
            <tr>
              <td>Italien</td>
              <td>Rom</td>
              <td>59 000 000</td>
              <td>Europa</td>
              <td>Italienska</td>
              <td>Hem till pizza, pasta och Colosseum.</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td>Tokyo</td>
              <td>125 000 000</td>
              <td>Asien</td>
              <td>Japanska</td>
              <td>Kombinerar högteknologi med gamla traditioner.</td>
            </tr>
            <tr>
              <td>Brasilien</td>
              <td>Brasília</td>
              <td>215 000 000</td>
              <td>Sydamerika</td>
              <td>Portugisiska</td>
              <td>Känt för karnevaler och fotboll.</td>
            </tr>
            <tr>
              <td>Kanada</td>
              <td>Ottawa</td>
              <td>40 000 000</td>
              <td>Nordamerika</td>
              <td>Engelska, franska</td>
              <td>Har enorma skogar och många sjöar.</td>
            </tr>
            <tr>
              <td>Australien</td>
              <td>Canberra</td>
              <td>26 000 000</td>
              <td>Oceanien</td>
              <td>Engelska</td>
              <td>Känd för kängurur, koalor och Barriärrevet.</td>
            </tr>
            <tr>
              <td>Sydafrika</td>
              <td>Pretoria (adm.)</td>
              <td>61 000 000</td>
              <td>Afrika</td>
              <td>Flera officiella språk</td>
              <td>Kallas ibland regnbågsnationen.</td>
            </tr>
            <tr>
              <td>Indien</td>
              <td>New Delhi</td>
              <td>1 400 000 000</td>
              <td>Asien</td>
              <td>Flera officiella språk</td>
              <td>Känt för kryddstark mat och färgstarka festivaler.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </>
);

export default Css;
