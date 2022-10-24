import { useState } from 'react';

import HighlightComponent from 'components/HighlightComponent';
import NavComponent from 'components/NavComponent';
import PiuBox from 'components/PiuBox';

import * as S from './styles';

interface User {
    userName: string;
    userTag: string;
    userImageSrc: string;
}

interface Piu {
    user: User;
    text: string;
    numberComments: number;
    numberLikes: number;
}

interface Highlight {
    title: string;
    text: string;
    imgSrc: string;
}

const HomeTemplate = () => {
    const selectiontrue = true;

    const [piuText, setPiuText] = useState('');

    const [lenCheck, setLenCheck] = useState(false);

    const userArray: User[] = [
        {
            userName: 'Pedro Souza',
            userTag: 'pebaiano',
            userImageSrc: './assets/perfil_pedro.png'
        },
        {
            userName: 'Arthur Anacleto',
            userTag: 'artadsm',
            userImageSrc: './assets/perfil_anacleto.png'
        },
        {
            userName: 'Anna Karoline',
            userTag: 'nnakarol',
            userImageSrc: './assets/perfil_anna.png'
        },
        {
            userName: 'Arthur Maia',
            userTag: 'Ntutsdoscrias',
            userImageSrc: './assets/perfil_nao_anacleto.png'
        }
    ];

    const [piuArray, setPiuArray] = useState<Piu[]>([
        {
            user: userArray[1],
            text: 'only love can hurt like this... (cade o lolo) only love can hurt like this (me da o lolo)',
            numberComments: 1,
            numberLikes: 2
        },
        {
            user: userArray[0],
            text: 'NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos',
            numberComments: 3,
            numberLikes: 27
        },
        {
            user: userArray[2],
            text: 'oiiii (na intencao de furar o bandejao)',
            numberComments: 1,
            numberLikes: 2
        },
        {
            user: userArray[3],
            text: '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067',
            numberComments: 14,
            numberLikes: 7
        }
    ]);

    const highlightArray: Highlight[] = [
        {
            title: 'Eleições 2022',
            text: 'Eleição em São Paulo: veja Tweets sobre a disputa de 2° turno entre Tarcísio e Haddad',
            imgSrc: './assets/eleicoes_2022.png'
        },
        {
            title: 'Eleições 2022',
            text: 'Eleição em São Paulo: veja Tweets sobre a disputa de 2° turno entre Tarcísio e Haddad',
            imgSrc: './assets/eleicoes_2022.png'
        },
        {
            title: 'Eleições 2022',
            text: 'Eleição em São Paulo: veja Tweets sobre a disputa de 2° turno entre Tarcísio e Haddad',
            imgSrc: './assets/eleicoes_2022.png'
        },
        {
            title: 'Eleições 2022',
            text: 'Eleição em São Paulo: veja Tweets sobre a disputa de 2° turno entre Tarcísio e Haddad',
            imgSrc: './assets/eleicoes_2022.png'
        },
        {
            title: 'Eleições 2022',
            text: 'Eleição em São Paulo: veja Tweets sobre a disputa de 2° turno entre Tarcísio e Haddad',
            imgSrc: './assets/eleicoes_2022.png'
        }
    ];

    function handleThisClick() {
        if (piuText !== '' && piuText.length < 140) {
            setPiuArray([
                {
                    user: userArray[0],
                    text: piuText,
                    numberComments: 0,
                    numberLikes: 0
                },
                ...piuArray
            ]);
        }
    }

    return (
        <S.MainConteiner>
            <S.SideBarConteiner>
                <S.LogoConteiner>
                    <S.LogoImage src="./assets/logo.svg" />
                    <S.LogoTitle>Piupiuwer</S.LogoTitle>
                </S.LogoConteiner>
                <S.NavContainer>
                    <NavComponent
                        title="Página Inicial"
                        imageSrc="./assets/pagina_inicial.svg"
                        selected={selectiontrue}
                    />
                    <NavComponent
                        title="Notificações"
                        imageSrc="./assets/notificacoes.svg"
                        selected={!selectiontrue}
                    />
                    <NavComponent
                        title="Mensagens"
                        imageSrc="./assets/mensagens.svg"
                        selected={!selectiontrue}
                    />
                    <NavComponent
                        title="Salvos"
                        imageSrc="./assets/salvos.svg"
                        selected={!selectiontrue}
                    />
                    <NavComponent
                        title="Perfil"
                        imageSrc="./assets/perfil.svg"
                        selected={!selectiontrue}
                    />
                    <NavComponent
                        title="Configurações"
                        imageSrc="./assets/configuracoes.svg"
                        selected={!selectiontrue}
                    />
                </S.NavContainer>
            </S.SideBarConteiner>
            <S.Division />
            <S.MiddlePageConteiner>
                <S.PostPiuConteiner checkCondition={lenCheck}>
                    <S.PostPiuInput
                        rows={piuText.length > 101 ? 2 : 1}
                        checkCondition={lenCheck}
                        placeholder="Quero dar um piu..."
                        value={piuText}
                        onChange={(e) => {
                            setPiuText(e.target.value);
                            if (e.target.value.length > 140) {
                                setLenCheck(true);
                            } else {
                                setLenCheck(false);
                            }
                        }}
                    />
                    <S.InnerPostPiuConteiner>
                        <S.PostControllCheck>
                            {piuText.length}/140
                        </S.PostControllCheck>
                        <S.PostPiuButton
                            type="image"
                            src="./assets/send.svg"
                            onClick={handleThisClick}
                        />
                    </S.InnerPostPiuConteiner>
                </S.PostPiuConteiner>
                <S.FeedConteiner id="feedConteinerId">
                    {piuArray.map((piu) => (
                        <PiuBox
                            userName={piu.user.userName}
                            userTag={piu.user.userTag}
                            userImageSrc={piu.user.userImageSrc}
                            text={piu.text}
                            numberComments={piu.numberComments}
                            numberLikes={piu.numberLikes}
                        />
                    ))}
                </S.FeedConteiner>
            </S.MiddlePageConteiner>
            <S.Division />
            <S.LeftSideBarConteiner>
                <S.AllHighlightTitle>Pius em alta</S.AllHighlightTitle>
                {highlightArray.map((highlight) => (
                    <div>
                        <S.HighlighInternalDiv />
                        <HighlightComponent
                            imgSrc={highlight.imgSrc}
                            title={highlight.title}
                            text={highlight.text}
                        />
                    </div>
                ))}
                <S.HighlighInternalDiv />
            </S.LeftSideBarConteiner>
        </S.MainConteiner>
    );
};
export default HomeTemplate;
