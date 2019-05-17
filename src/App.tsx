import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Poem from "components/poem/Poem";
import { IPoem } from "components/types";

const poem: IPoem = {
  id: "110",
  styleId: 192,
  backgroundId: 3,
  colorRange: 1,
  textChunks: [
    {
      text:
        'd to you for all your trouble in bringing Urashima here." Then, turning again to ',
      isSelected: false
    },
    {
      text: "Urashima, ",
      isSelected: true
    },
    {
      text:
        'they said, "Please follow us this way," and from here the whole band of fishes became his guides. Urashima, being only a poor fisher lad, did not know how to behave in a palace; but, strange though it was all to him, he did not feel ashamed or embarrassed, but followed his kind guides quite calmly where they led to the inner palace. When he reached the portals a beautiful Princess with her attendant maidens came out to welcome him. She was more beautiful than any human being, and was robed in flowing garments of red and soft green like the under side of a wave, and golden 23 threads glimmered through the folds of her gown. Her lovely black hair streamed over her shoulders in the fashion of a king\'s daughter many hundreds of years ago, and when she spoke her voice sounded like music over the water. Urashima was lost in wonder while he looked upon her, and he could not speak. Then he remembered that',
      isSelected: false
    }
  ],
  author: { id: "4", username: "terry" },
  createdAt: 1524431687,
  updatedAt: 1524431690
};

const poem2: IPoem = {
  id: "110",
  styleId: 192,
  backgroundId: 1,
  colorRange: 9,
  textChunks: [
    {
      text: `y jackets, and hold to our lips cups of scalding tea with our half
            frozen fingers. But the fare was of the most substantial kind--not
            only meat and potatoes, but dumplings`,
      isSelected: false
    },
    { text: `good heavens!`, isSelected: true },

    { text: `dumplings for supper! One`, isSelected: false },

    { text: `young fellow`, isSelected: true },
    {
      text: `in a green box coat, addressed himself to these dumplings in a most
            direful manner. "My boy," said the landlord, "you'll have the
            nightmare to a dead sartainty." "Landlord`,
      isSelected: false
    },
    { text: `I `, isSelected: true },
    { text: `whispered, "that`, isSelected: false },
    { text: `aint`, isSelected: true },
    {
      text: `s, he don't--he eats nothing but steaks, and he likes 'em rare." "The
            devil he does," says I. "Where is that harpooneer? Is he here?" "He'll
            be here afore long," was the answer. I could not help it, but I began
            to feel suspicious of this "dark complexioned" harpooneer. At any
            rate, I made up my mind that if it so turned out that we should sleep
            together, he must undress and get into bed before I did. Supper over,
            the c`,
      isSelected: false
    }
  ],
  author: { id: "4", username: "terry" },
  createdAt: 1524431687,
  updatedAt: 1524431690
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Poem poem={poem} />
      <Poem poem={poem2} />
    </div>
  );
};

export default App;
