import shuffle from "../Utilities/Shuffle";
import ca from "../../Images/assets/h240/ca.png";
import jp from "../../Images/assets/h240/jp.png";
import us from "../../Images/assets/h240/us.png";
import se from "../../Images/assets/h240/se.png";
import kr from "../../Images/assets/h240/kr.png";
import it from "../../Images/assets/h240/it.png";
import fr from "../../Images/assets/h240/fr.png";
import es from "../../Images/assets/h240/es.png";
import de from "../../Images/assets/h240/de.png";
import ar from "../../Images/assets/h240/ar.png";
import nl from "../../Images/assets/h240/nl.png";
import za from "../../Images/assets/h240/za.png";
import br from "../../Images/assets/h240/br.png";
import cm from "../../Images/assets/h240/cm.png";
import cz from "../../Images/assets/h240/cz.png";
import eg from "../../Images/assets/h240/eg.png";
import al from "../../Images/assets/h240/al.png";
import hk from "../../Images/assets/h240/hk.png";

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
];

shuffle(flags);

export default flags;
