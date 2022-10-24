import styled from 'styled-components';

interface SelectedProps {
    isSelected?: boolean;
}

export const Conteiner = styled.div<SelectedProps>`
    margin: 0px 40px 0px 0px;
    padding: 0px 0px 0px 40px;
    border-radius: 0px 16px 16px 0px;
    gap: 8px;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    background: ${(props) => (props.isSelected ? '#3856DC' : '#272727')};
`;

export const Title = styled.p`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #e1e7ff;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;
