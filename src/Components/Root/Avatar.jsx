import AvatarImg from '../../assets/imgs/Avatar.svg'

export function Avatar() {
    return (
        <>
            <img src={AvatarImg} alt="Avatar" onClick={() => {alert('Avatar')}}/>
        </>
    )
}