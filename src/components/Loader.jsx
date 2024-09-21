const Loader = () => {
    return (
        <span className='loader '>
            <img
                src='/assets/loader.svg'
                alt='loader'
                width={20}
                height={20}
                className='animate-spin'
                priority
            />
        </span>
    )
}

export default Loader;