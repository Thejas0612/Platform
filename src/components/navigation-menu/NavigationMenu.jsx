import styles from "./NavigationMenu.module.scss";
import { ArrowForwardIos } from '@mui/icons-material';

const NavigationMenu = ({data, onLabelClick = () => {}}) => {

    return (
        <div className={"left-nav"}>
            {data.map((menu, i) => (
                <div className={styles.msol_navigation_item + " " + ((menu.selected) ? styles.selected : "")} onClick={() => onLabelClick(menu)} key={i}>
                    <div className={styles.label}>
                        {menu.label}
                        <ArrowForwardIos className={styles.arrow}/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default NavigationMenu;