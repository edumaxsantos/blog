import styled from "styled-components";

const Section = styled.section`
max-width: 70vw;
display: flex;
flex-direction: column;
align-content: center;
@media only screen and (max-width: 600px) {
  padding: 5vh 5vw;
  max-width: 100vw;
}
`;

export default Section;