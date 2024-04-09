import "./navigation-menu.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavigationMenu = ({data, onLabelClick = () => {}, ...props}) => {

    return (
        <div className={"left-nav"}>
            {data.map(menu => (
            <div className={"msol_navigation_item " + ((menu.selected) ? "selected" : "")} onClick={() => onLabelClick(menu)}>
                <div className="label">
                    {menu.label}
                    <ArrowForwardIosIcon className="msol_navigation_item_arrow"/>
                </div>
            </div>
            ))}
        </div>
    )
};

export default NavigationMenu;