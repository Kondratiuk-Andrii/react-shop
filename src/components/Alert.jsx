import { useEffect } from "react";

function Alert(props) {
    const { name = "", closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">
                <span>{name}</span> has been added to the basket
            </div>
        </div>
    );
}

export { Alert };
