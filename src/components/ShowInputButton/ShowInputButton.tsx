import Button from "components/Button";
import styled from "styled-components";

const Conatiner = styled.div`
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 1;
`;

interface Props {
    readonly show: boolean;
    readonly onClick: () => void;
}

const ShowInputButton = ({ show, onClick }: Props) => {
    return (
        <Conatiner>
            <Button
                label={show ? '닫기' : '할 일 추가'}
                color={show ? undefined : '#304FFE'}
                onClick={onClick}
            />
        </Conatiner>
    );
};

export default ShowInputButton;