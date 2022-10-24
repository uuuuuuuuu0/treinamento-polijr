import { useState } from 'react';
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
}) => {
    const [likeImgSource, setLikedImgSource] = useState('./assets/like.svg');
    const [realLikes, setRealLikes] = useState(numberLikes);

    const [hidden, setHidden] = useState(false);

    return (
        <S.Conteiner isDestroyed={hidden}>
            <S.UserInfoConteiner>
                <S.UpperConteiner>
                    <S.ImageAndNameConteiner>
                        <S.UserImage src={userImageSrc} />
                        <S.UserNameAndTag>
                            {userName} @{userTag}
                        </S.UserNameAndTag>
                    </S.ImageAndNameConteiner>
                    <S.ButtonConteiner>
                        <S.ButtonImg
                            type="image"
                            src="./assets/delete.svg"
                            onClick={() => {
                                setHidden(true);
                            }}
                        />
                    </S.ButtonConteiner>
                </S.UpperConteiner>
                <S.Text>{text}</S.Text>
            </S.UserInfoConteiner>
            <S.OptionsBar>
                <S.Option>
                    <S.NormalImg src="./assets/comments.svg" />
                    <S.OptionNumber>{numberComments}</S.OptionNumber>
                </S.Option>
                <S.Option>
                    <S.ButtonImg
                        type="image"
                        src={likeImgSource}
                        onClick={() => {
                            if (likeImgSource === './assets/like.svg') {
                                setLikedImgSource('./assets/liked.svg');
                                setRealLikes(realLikes + 1);
                            } else {
                                setLikedImgSource('./assets/like.svg');
                                setRealLikes(realLikes - 1);
                            }
                        }}
                    />
                    <S.OptionNumber>{realLikes}</S.OptionNumber>
                </S.Option>
            </S.OptionsBar>
        </S.Conteiner>
    );
};

export default PiuBox;
