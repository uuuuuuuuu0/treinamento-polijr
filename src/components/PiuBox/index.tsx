import * as S from './styles';

export type PiuBox = {
    userName: string;
    userTag: string;
    text: string;
    userImageSrc: string;
    numberComments: number;
    numberLikes: number;
};

const PiuBox: React.FC<PiuBox> = ({
    userName,
    userTag,
    text,
    userImageSrc,
    numberComments,
    numberLikes
}) => (
    <S.Conteiner>
        <S.UserInfoConteiner>
            <S.ImageAndNameConteiner>
                <S.UserImage src={userImageSrc} />
                <S.UserNameAndTag>
                    {userName} @{userTag}
                </S.UserNameAndTag>
            </S.ImageAndNameConteiner>
            <S.Text>{text}</S.Text>
        </S.UserInfoConteiner>
        <S.OptionsBar>
            <S.Option>
                <S.Imgimg src="./assets/comments.svg" />
                <S.OptionNumber>{numberComments}</S.OptionNumber>
            </S.Option>
            <S.Option>
                <S.Imgimg src="./assets/likes.svg" />
                <S.OptionNumber>{numberLikes}</S.OptionNumber>
            </S.Option>
        </S.OptionsBar>
    </S.Conteiner>
);

export default PiuBox;
