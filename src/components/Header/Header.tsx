import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #304FFE;
    padding: 8px 0;
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: #FFFFFF;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;
`;

const Header = () => {
    return (
        <Container>
            <StyledLink to={"/"}>할 일 목록 앱</StyledLink>
        </Container>
    )
}

export default Header;