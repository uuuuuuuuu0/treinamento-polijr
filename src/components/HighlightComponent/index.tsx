import * as S from './styles';

export type HighlightComponent = {
    title: string;
    text: string;
    imgSrc: string;
};

const HighlightComponent: React.FC<HighlightComponent> = ({
    title,
    text,
    imgSrc
}) => (
    <S.HighlightConteiner>
        <S.HighlightImage src={imgSrc} />
        <S.HighlightInnerConteiner>
            <S.HighlightTitle>{title}</S.HighlightTitle>
            <S.HighlighContent>{text}</S.HighlighContent>
        </S.HighlightInnerConteiner>
    </S.HighlightConteiner>
);

export default HighlightComponent;
