import styles from "./NavigationMenu.module.scss";
import { ArrowForwardIos } from '@mui/icons-material';

const NavigationMenu = ({data, onLabelClick = () => {}}) => {

    return (
        <div className={"left-nav"}>
            {data.map(menu => (
            <div className={styles.msol_navigation_item + " " + ((menu.selected) ? styles.selected : "")} onClick={() => onLabelClick(menu)}>
                <div className="label">
                    {menu.label}
                    <ArrowForwardIos className={styles.arrow}/>
                </div>
            </div>
            ))}
        </div>
    )
};

export default NavigationMenu;