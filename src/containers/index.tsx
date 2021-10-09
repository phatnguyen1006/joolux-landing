export const Container = ({ children }) => {
    return (
        <main
            className="relative flex-grow"
            style={{
                minHeight: "-webkit-fill-available",
                WebkitOverflowScrolling: "touch",
            }}
        >
            {children}
        </main>
    );
};
