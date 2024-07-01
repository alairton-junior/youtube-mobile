import MoreIcon from '../../assets/imgs/icons/More.svg'
import {Avatar} from '../Root/Avatar'


export function Noticias ({image, title, description, avatarImage}) {
    return (
        <div>
            <img src={image} alt={title} width="100%" style={{marginTop: 10, width: 'unset', marginLeft: -20}} />
            <div style={{display: 'flex', gap: 10, alignItems: 'center', marginTop: '-10px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <Avatar avatarImage={avatarImage}/>
                    <h2>{title}</h2>
                </div>
                <div>
                    <img src={MoreIcon} style={{width: 50, height: 50, position: 'relative', right: '-10px', top: 10}}/>
                </div>
            </div>
            <h4 className="description" style={{marginTop: -5, position: 'relative', left: 47}}>{description}</h4>
        </div>
    )
}