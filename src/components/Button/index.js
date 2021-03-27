const StyledButton = (props) => {
    const { styleClass, text, handleClick } = props;

    return (
        <button type="button" className={styleClass} onClick={() => handleClick()}>{text}</button>
    );
};
export default StyledButton;
