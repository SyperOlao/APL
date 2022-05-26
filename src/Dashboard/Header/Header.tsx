import "../styles/styles.css";

export const Header = (props:{title: string}): JSX.Element  => {
    const title = props.title;
    return (
        <header className={"header"}>
            {title}
        </header>
    );
}

