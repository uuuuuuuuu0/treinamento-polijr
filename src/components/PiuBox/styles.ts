import styled from 'styled-components';

interface PassInterface {
    isDestroyed?: boolean;
}

// Main holder container
export const Conteiner = styled.div<PassInterface>`
    display: ${(pass) => (pass.isDestroyed ? 'none' : 'flex')};
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    width: 1004px;
    height: fit-content;
    background: #7b93ff;
    border-radius: 24px;
`;

// User info
export const UserInfoConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 32px;
`;

export const ImageAndNameConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const UserImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 64px;
`;

export const UserNameAndTag = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

// For button
export const UpperConteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: right;
`;

// Text
export const Text = styled.span`
    padding: 72, 0, 0, 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

// Options bar
export const OptionsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0px 16px 0px 16px;
    align-items: center;
`;

export const Option = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: row;
    width: fit-content;
`;

export const OptionNumber = styled.span`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
`;

export const ButtonImg = styled.input``;

export const NormalImg = styled.img``;
