import styled from 'styled-components';

export const HighlightConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin: 32px 0px 0px 0px;
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
