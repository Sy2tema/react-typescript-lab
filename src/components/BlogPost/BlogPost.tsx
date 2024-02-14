import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 30px #D9D9D9, -10px -10px 30px #FFFFFF;
    max-width: 800px;
`;

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const Body = styled.div`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const BlogPost = () => {
    return (
        <Container>
            <Title>타이틀</Title>
            <Body>
                본문
            </Body>
        </Container>
    )
};

export default BlogPost;