@AGENTS.md
# Vikings Volei Prat — Projecte Web

## Descripció
Web oficial del Club Volei Prat (Vikings Volei Prat).
Club de voleibol del Prat de Llobregat fundat el 1993.
340+ jugadors, 30 equips federats, de benjamí fins a Superlliga 2.
Contacte: cvprat@gmail.com

## Stack tecnològic
- Next.js 14 amb App Router
- TypeScript
- Tailwind CSS
- Desplegat a Vercel
- Repositori: GitHub / organització Vikings-volei-prat

## Colors del club
- Blau principal: #1B4FC4 — fons de hero, navbar, cards destacades
- Groc/Daurat: #F5C000 — accents, botons primaris, text sobre blau
- Vermell accent: #D42B2B — badges especials (Superlliga 2), destacats puntuals
- Blau fosc: #0D2E7A — footer, seccions CTA finals
- Gris clar: #F8F8F8 — fons de seccions alternatives
- Blanc: #FFFFFF — fons principal, text sobre blau

## Tipografia
- Font: Geist Sans (ja configurada a layout.tsx)
- Títols hero: font-extrabold, tracking-tight
- Subtítols de secció: font-bold, color #1B4FC4
- Text corrent: color gris (text-gray-600)
- Etiquetes/badges: uppercase, tracking-widest, font-semibold

## Estructura de carpetes
app/
  page.tsx              → Home
  equips/page.tsx       → Pàgina d'equips amb filtres
  installacions/page.tsx → Instal·lacions del club
  sponsors/page.tsx     → Patrocinadors i col·laboradors
  roba/page.tsx         → Roba i equipació oficial
  data/
    equips.ts           → Llista d'equips separada del component
  components/
    Navbar.tsx          → Navegació principal (fixa, fons #1B4FC4)
    Footer.tsx          → Footer (fons #0D2E7A)
  globals.css           → Variables CSS i estils globals
public/
  images/
    logo_color.png      → Logo amb colors (casco+flames, fons transparent)
    logo_mono.png       → Logo monocromàtic fosc (fons transparent)
    hero-team.jpg       → Foto del equip per al hero de la home
    sponsors/           → Logos dels sponsors i col·laboradors

## Convencions de codi
- Tots els textos en català
- Components en PascalCase: Navbar.tsx, Footer.tsx
- Pàgines sempre a app/[ruta]/page.tsx
- Usar sempre next/image en comptes de <img>
- Usar sempre next/link en comptes de <a> per a links interns
- Colors amb classes Tailwind quan sigui possible: bg-[#1B4FC4]
- Border-radius estàndard: rounded-xl (12px) per a cards, rounded-lg (8px) per a botons
- Botons primaris: fons #F5C000, text #0D2E7A, font-bold
- Botons secundaris: border blanc, text blanc (sobre fons blau)
- Mai pill shape (rounded-full) als botons principals

## Pàgines i rutes
| Ruta           | Fitxer                      | Descripció                    |
|----------------|-----------------------------|-------------------------------|
| /              | app/page.tsx                | Home amb hero, stats, info    |
| /equips        | app/equips/page.tsx         | 29 equips amb filtres         |
| /installacions | app/installacions/page.tsx  | CEM Julio Méndez i pavellons  |
| /sponsors      | app/sponsors/page.tsx       | Sponsors i col·laboradors     |
| /roba          | app/roba/page.tsx           | Equipació oficial + Errea     |

## Sponsors
- La Brasa → https://www.cafetapasbarlabrasa.es/
- Prat Actiu → # (pendent URL)
- Jotun → # (pendent URL)
- Entre Panes → https://www.instagram.com/entrepanes_elprat/
- Asprat Ascensors → https://www.asprat.com/
- TR Publicitat → # (pendent URL) — col·laborador
- Team Point → # (pendent URL) — col·laborador

## Xarxes socials
- Instagram: https://instagram.com/voleiprat
- Facebook: (pendent URL)

## Regles de disseny importants
- Hero de la home: min-h-[75vh] amb foto de fons i overlay #1B4FC4 al 80%
- Heros de pàgines interiors: py-16 (més compacte que la home)
- Navbar: fixa (fixed top-0), z-index alt, fons #1B4FC4
- Footer: fons #0D2E7A, tres columnes (logo+desc, navegació, contacte)
- Stats de la home: cards bg-[#1B4FC4], número en #F5C000, etiqueta en blanc
- Secció destacada Superlliga 2: fons #0D2E7A, badge vermell #D42B2B
- Any del copyright: sempre dinàmic amb new Date().getFullYear()
- Imatges de fons: sempre amb next/image fill + overlay div, mai CSS backgroundImage
- next.config.ts té images: { unoptimized: true } — no canviar

## Codi del club (equipació Errea)
M75NRP — necessari per comprar a barcelonasur.erreaclubs.com

## Manteniment habitual

### Actualitzar equips (cada temporada)
Edita app/data/equips.ts amb la nova llista.
No cal tocar cap component.

### Afegir sponsor
Copia el logo a public/images/sponsors/
Edita app/sponsors/page.tsx per afegir la card.
Actualitza aquest CLAUDE.md amb la URL del sponsor.

### Afegir URL de sponsor pendent
Busca el sponsor a app/sponsors/page.tsx
i canvia el href="#" per la URL real.