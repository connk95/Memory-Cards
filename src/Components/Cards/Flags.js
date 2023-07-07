import shuffle from "../Utilities/Shuffle";
import ca from "../../Images/assets/SVG/Canada@2x.svg";
import jp from "../../Images/assets/SVG/Japan@2x.svg";
import us from "../../Images/assets/SVG/USA@2x.svg";
import se from "../../Images/assets/SVG/Sweden@2x.svg";
import kr from "../../Images/assets/SVG/South_Korea@2x.svg";
import it from "../../Images/assets/SVG/Italy@2x.svg";
import fr from "../../Images/assets/SVG/France-3@2x.svg";
import es from "../../Images/assets/SVG/Spain@2x.svg";
import de from "../../Images/assets/SVG/Germany@2x.svg";
import ar from "../../Images/assets/SVG/Argentina@2x.svg";
import nl from "../../Images/assets/SVG/netherlands-3@2x.svg";
import za from "../../Images/assets/SVG/south_africa@2x.svg";
import br from "../../Images/assets/SVG/Brazil@2x.svg";
import cm from "../../Images/assets/SVG/cameroon@2x.svg";
import cz from "../../Images/assets/SVG/Chech_republic@2x.svg";
import eg from "../../Images/assets/SVG/Egypt@2x.svg";
import al from "../../Images/assets/SVG/Albania@2x.svg";
import hk from "../../Images/assets/SVG/Hong_Kong@2x.svg";
import cb from "../../Images/assets/SVG/Cuba@2x.svg";
import mr from "../../Images/assets/SVG/Morocco@2x.svg";
import sa from "../../Images/assets/SVG/saudi_arabia@2x.svg";
import nz from "../../Images/assets/SVG/new_zealand@2x.svg";
import mx from "../../Images/assets/SVG/Mexico@2x.svg";
import sl from "../../Images/assets/SVG/Sierra_leone-2@2x.svg";
import sy from "../../Images/assets/SVG/Seychelles@2x.svg";
import pl from "../../Images/assets/SVG/philippines@2x.svg";
import ir from "../../Images/assets/SVG/Iran@2x.svg";
import wl from "../../Images/assets/SVG/wales@2x.svg";
import uk from "../../Images/assets/SVG/uk@2x.svg";
import cn from "../../Images/assets/SVG/China@2x.svg";

const flags = [
  { flag: "Canada", asset: ca },
  {
    flag: "Japan",
    asset: jp,
  },
  {
    flag: "United States",
    asset: us,
  },
  {
    flag: "Sweden",
    asset: se,
  },
  {
    flag: "South Korea",
    asset: kr,
  },
  {
    flag: "Italy",
    asset: it,
  },
  {
    flag: "France",
    asset: fr,
  },
  {
    flag: "Spain",
    asset: es,
  },
  {
    flag: "Germany",
    asset: de,
  },
  {
    flag: "Argentina",
    asset: ar,
  },
  {
    flag: "Netherlands",
    asset: nl,
  },
  {
    flag: "South Africa",
    asset: za,
  },
  {
    flag: "Brazil",
    asset: br,
  },
  {
    flag: "Cameroon",
    asset: cm,
  },
  {
    flag: "Czechia",
    asset: cz,
  },
  {
    flag: "Egypt",
    asset: eg,
  },
  {
    flag: "Albania",
    asset: al,
  },
  {
    flag: "Hong Kong",
    asset: hk,
  },
  {
    flag: "Cuba",
    asset: cb,
  },
  {
    flag: "Morocco",
    asset: mr,
  },
  {
    flag: "Saudi Arabia",
    asset: sa,
  },
  {
    flag: "New Zealand",
    asset: nz,
  },
  {
    flag: "Mexico",
    asset: mx,
  },
  {
    flag: "Sierra Leone",
    asset: sl,
  },
  {
    flag: "Seychelles",
    asset: sy,
  },
  {
    flag: "Philippines",
    asset: pl,
  },
  {
    flag: "Iran",
    asset: ir,
  },
  {
    flag: "Wales",
    asset: wl,
  },
  {
    flag: "United Kingdom",
    asset: uk,
  },
  {
    flag: "China",
    asset: cn,
  },
];

shuffle(flags);

export default flags;
