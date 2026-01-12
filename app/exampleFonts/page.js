import React from "react";
import { Shrikhand, Fruktur } from "next/font/google";

const shrikhand = Shrikhand({
  weight: ["400"],
  subsets: ["latin"],
});
const fruktur = Fruktur({
  weight: ["400"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div>
      <h1 className={`text-4xl ${shrikhand.className}`}>
        hello this is different font
      </h1>
      <p className={`text-md ${fruktur.className}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem soluta
        impedit, eum magni accusantium quos numquam, facilis eius at blanditiis,
        minima nam recusandae quod quam unde perspiciatis. Ducimus tenetur
        similique commodi provident? Eligendi, sint aspernatur dignissimos,
        nobis velit possimus omnis accusantium dicta impedit autem eos
        assumenda, porro quam hic expedita eius suscipit cumque ex ipsa
        repellat. Veniam velit sint labore impedit quis autem temporibus
        reiciendis, soluta quam aliquid facere ad, cumque non dolorum,
        blanditiis consectetur corrupti est quae consequatur error? In pariatur
        eligendi enim placeat facere excepturi sed sunt iste, modi a neque
        corporis molestiae architecto totam libero similique, odio, minus vitae
        atque magnam. Iusto nostrum cum expedita natus assumenda, eius
        consequuntur praesentium voluptatum eos alias quasi temporibus? Incidunt
        quos nihil debitis, natus rerum sequi quis ipsa! Labore impedit
        quisquam, nesciunt earum accusantium, dignissimos odit nisi, placeat ad
        saepe sunt hic ex. Quaerat ipsa fugit perspiciatis dolore mollitia
        officiis facilis ullam dicta magnam nihil dolorem, tempora saepe iste
        vero cupiditate. Vitae officia ducimus excepturi voluptas quae deserunt
        id temporibus dicta. Vero pariatur doloribus, adipisci voluptatibus
        maxime asperiores et id, dolorem sint eum, fugit aspernatur repellat ut
        quam ullam magnam excepturi similique nobis! Doloribus quaerat
        voluptatibus dolor repudiandae tenetur corporis quidem?
      </p>
    </div>
  );
};

export default page;
