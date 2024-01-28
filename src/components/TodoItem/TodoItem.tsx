import Button from "components/Button";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

interface Props {
    readonly label: string;
    readonly onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Button label="삭제" onClick={onDelete} />
        </Container>
    );
};

export default TodoItem;