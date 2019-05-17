import * as React from "react";
import PoemBody from "./PoemBody";
import PoemDiv from "./PoemDiv";
import { IPoem } from "components/types";

const Poem = (props: { poem: IPoem; closeUp?: boolean }) => {
  const { poem } = props;
  if (!poem) {
    return <div className="poem">loading...</div>;
  }
  const { id, backgroundId, colorRange, textChunks, author } = poem;
  if (!author.id) return null;

  return (
    <PoemDiv
      className={`poem style-${backgroundId} color-${colorRange} ${
        props.closeUp ? "close-up" : ""
      }`}
      data-test={`poem${id}`}
      data-cy="poem"
    >
      <div className="background-img" />
      <PoemBody textChunks={textChunks} />
    </PoemDiv>
  );
};

export default Poem;
