import ExplorerIcon from '../../assets/imgs/icons/Explore.svg'

import '../../assets/css/Home/Explorer.css'

export function Explorer () {

    const buttons = [
        {
            "text": 'All',
            "className":  'active'
        },
        {
            "text": 'New to you',
            "className":  'news'
        },
        {
            "text": 'Ux Design',
        },
        {
            "text": 'Figma',
        },
        {
            "text": 'Web Development',
        },
        {
            "text": 'React',
        },
        {
            "text": 'JavaScript',
        },
        {
            "text": 'HTML',
        },
        {
            "text": 'CSS',
        },
        {
            "text": 'Another One',
        },
        {
            "text": 'Another Two',
        },
        {
            "text": 'Another Three',
        },
        {
            "text": 'Another Four',
        },
    ]

    return (
        <>
            <div className='Explorer--container'>
                <img src={ExplorerIcon} alt="Explorer Icon" />

                <div className='explorer--items'>
                    {buttons.map((e) => {
                        return (<button key={e.text} className={e.className}>{e.text}</button>)
                    })}
                </div>
            </div>
        </>
    )
}