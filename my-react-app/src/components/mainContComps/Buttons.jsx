import styles from "./MainCont.module.css"

const Buttons = () => {
    return(
        <div className={styles.buttons}>
            <button className={styles.button1}>Увеличить</button>
            <button className={styles.button2}>Уменьшить</button>
            <button className={styles.button3}>Сбросить</button>
        </div>
    )
}

export default Buttons