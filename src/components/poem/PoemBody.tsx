import * as React from "react";
import { BodyDiv } from "components/poem/PoemDiv";

interface ITextChunk {
  isSelected: boolean;
  text: string;
}

const TextSpan = ({ isSelected, text }: ITextChunk) => (
  <span className={isSelected ? "is-selected" : "not-selected"}>
    <span className="text">{text}</span>
    {isSelected && (
      <svg style={{ position: "absolute" }}>
        <circle cx="25" cy="25" r="10" />
      </svg>
    )}
  </span>
);

const PoemBody = ({ textChunks }: { textChunks: ITextChunk[] }) => (
  <BodyDiv className="poem-text">
    {textChunks &&
      textChunks.map((textSpan, i) => <TextSpan key={i} {...textSpan} />)}
  </BodyDiv>
);

export default PoemBody;
