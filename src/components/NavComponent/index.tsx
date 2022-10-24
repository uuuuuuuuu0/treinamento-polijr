import * as S from './styles';

export type NavComponent = {
    title: string;
    imageSrc: string;
    selected: boolean;
};

const NavComponent: React.FC<NavComponent> = ({
    title,
    imageSrc,
    selected
}) => {
    function handleClick() {
        // selected = !selected;
    }

    return (
        <S.Conteiner isSelected={selected} onClick={handleClick}>
            <S.Icon src={imageSrc} />
            <S.Title>{title}</S.Title>
        </S.Conteiner>
    );
};

export default NavComponent;
