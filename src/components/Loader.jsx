const Loader = () => {
    return (
        <span className="loader ms-2">
            <img
                src="/assets/loader.svg"
                alt="loader"
                width={20}
                height={20}
                className="animate-spin"
            />
        </span>
    );
}

export default Loader;
