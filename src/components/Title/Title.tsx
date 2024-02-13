import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;

interface Props {
    readonly label: string;
}

const Title = ({ label }: Props) => {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    )
};

export default Title;