export function Avatar({avatarImage}) {
    return (
        <>
            <img src={avatarImage} alt="Avatar" onClick={() => {alert('Avatar')}}/>
        </>
    )
}