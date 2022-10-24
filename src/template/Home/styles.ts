import styled from 'styled-components';

interface ImainSelectedProps {
    checkCondition?: boolean;
}

export const MainConteiner = styled.div`
    background: #272727;
    display: flex;
    flex-direction: row;
    align-items: Left;
`;

export const MiddlePageConteiner = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
`;

export const SideBarConteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
`;

export const FeedConteiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 64px;
`;

export const Division = styled.div`
    width: 1px;
    background: #55596b;
`;

export const LogoConteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 40px 16px;
    gap: 16px;
`;

export const LogoImage = styled.img``;

export const LogoTitle = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    display: flex;
    align-items: center;
    color: #7b93ff;
`;

export const PostPiuConteiner = styled.div<ImainSelectedProps>`
    display: flex;
    flex-direction: column;
    margin: 16px 64px 0px 64px;
    height: fit-content;
    border-radius: 16px;
    gap: 16px;
    padding: 16px 8px 8px 40px;
    background: ${(props) =>
        props.checkCondition ? '#FF6666' : '#9198B4'}; //9198B4
`;

export const InnerPostPiuConteiner = styled.div<ImainSelectedProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 8px;
`;

export const PostPiuInput = styled.textarea<ImainSelectedProps>`
    font-family: 'Nunito';
    font-style: normal;
    height: auto;
    font-weight: 700;
    font-size: 18px;
    border: 0px;
    background: transparent;
    overflow: hidden;
    outline: none;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 0px 42px 0px 0px;

    ::placeholder {
        color: #ffffff;
    }
`;

export const PostPiuButton = styled.input``;

export const PostControllCheck = styled.span<ImainSelectedProps>`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.checkCondition ? '#FF0000' : '#FFFFFF')};
`;

export const LeftSideBarConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 24px;
    gap: 32px;
    width: 464px;
`;

export const AllHighlightTitle = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #e1e7ff;
`;

export const HighlighInternalDiv = styled.div`
    height: 1px;
    width: 100%;
    background: #e1e7ff;
`;

export const HighlightConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const HighlightImage = styled.img`
    width: 156px;
    height: 156px;
    border-radius: 16px;
`;

export const HighlightInnerConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const HighlightTitle = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #e1e7ff;
`;

export const HighlighContent = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #e1e7ff;
`;
