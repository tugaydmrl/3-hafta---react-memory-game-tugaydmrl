import requiem from "../../assets/sounds/requiem.wav";
import sonata from "../../assets/sounds/moonlightsonata.wav";
import nutcracker from "../../assets/sounds/nutcrackersuite.wav";
import nocturne from "../../assets/sounds/nocturne.wav";
import toccata from "../../assets/sounds/toccataandfugue.wav";
import violin from "../../assets/sounds/violinconcertoingminor.wav";
import useSound from "use-sound";
import "./Music.scss";

function Music() {
  const [play] = useSound(requiem);
  const [play2] = useSound(sonata);
  const [play3] = useSound(nutcracker);
  const [play4] = useSound(nocturne);
  const [play5] = useSound(toccata);
  const [play6] = useSound(violin);

  return (
    <div className="playing">
      <button onClick={play}>Play Requiem</button>
      <button onClick={play2}>Play Moonlight Sonata</button>
      <button onClick={play3}>Play Nutcracker</button>
      <button onClick={play4}>Play Nocturne</button>
      <button onClick={play5}>Play Toccata and Fugue</button>
      <button onClick={play6}>Play Violin Concerto</button>
    </div>
  );
}

export default Music;
