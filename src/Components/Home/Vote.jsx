import Like from '../../assets/imgs/icons/Like.svg'
import Dislike from '../../assets/imgs/icons/Dislike.svg'
import Arrows from '../../assets/imgs/icons/Arrows.svg'
import Comments from '../../assets/imgs/icons/Comments.svg'
import Avatar from '../../assets/imgs/Avatar.svg'

import '../../assets/css/Home/Vote.css'

export function Vote() {
    return (
        <>
    <section className="question">
        <h2>Question</h2>
        <button>Yes</button>
        <button>Yes</button>
        <p className="votes">1.7k votes</p>
        <div className="actions">
        <div className="interactions">
            <div className="likes">
            <button>
                <img src={Like} alt="Like" />
            </button>
            <span>4.2K</span>
            </div>
            <button>
            <img src={Dislike} alt="Dislike" />
            </button>
        </div>
        <div className="icon-comments">
            <button>
            <img src={Comments} alt="box-comments" />
            </button>
            <span>464</span>
        </div>
        </div>
        <div className="comments">
        <p>
            Comments <span>464</span>
        </p>
        <img src={Arrows} alt="arrow" />
        </div>
        <div className="comment">
        <img src={Avatar} alt="icon" />
        <input
            className="comment"
            type="text"
            placeholder="Add a comment..."
        />
        </div>
    </section>
        </>
    )
}
