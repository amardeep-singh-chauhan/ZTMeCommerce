import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItemStyles';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({ category }) {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    }

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem