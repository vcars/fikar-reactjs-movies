import React , {Component} from 'react';
import Bookmark from '../../assets/images/bookmark.png';
import Love from '../../assets/images/love.png';
import './DetailMovies.css';
import Axios from 'axios';
import MenuDetail from '../Header/MenuDetail'



class DetailMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : {},
            isLoaded:false
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        const url = `http://express-with-cqrs.herokuapp.com/api/movies/${id}`;

        Axios.get(url).then(result=>{
            this.setState({
                isLoaded:true,
                items : result.data.data
            })
        })
    }
    render()
    {
        let {items} = this.state;
        return (
            <div className="container-detail">
                <MenuDetail/>
                <div className="detail">
                <div className="title">
                        <img src={Bookmark} alt=""/>
                        <p>{items.title} (2011)</p>
                        <p>R | 1h 41 min | Movies | {items.showTime}</p>
                        <div className="like-detail">
                        <div className="love"></div>
                        <p>{items.like}</p>
                        </div>
                                           
                </div>
                <img src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="Movies"/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus ipsam, facere harum fuga blanditiis commodi quidem perferendis et deserunt unde animi! At cum, amet ea rem quod odio, eius delectus optio beatae quis assumenda voluptas iusto velit perferendis nobis nulla laboriosam cumque sequi voluptatibus adipisci itaque repellat laborum! Quam, reprehenderit iure tenetur sint veniam totam temporibus accusantium officiis asperiores? Accusamus, saepe quisquam ipsam rerum deserunt ad eos? Iusto eum minima magnam maxime numquam ipsum blanditiis unde earum corporis culpa voluptate accusantium excepturi nulla exercitationem mollitia, ab veniam quibusdam nam, atque ullam provident optio sunt officia. Laudantium voluptates iure reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel officiis ullam optio et sed a corporis eaque, consequuntur illo nobis nesciunt, enim rem! Dolorum eum dolore praesentium voluptatum earum qui cum nihil expedita laboriosam, corrupti quod vero aliquam est illum repellat rem quae ducimus labore tempora repudiandae beatae eius? Laboriosam quaerat amet eius, aspernatur qui saepe eligendi optio temporibus quidem dolores nobis ut animi? Molestiae deserunt dolor totam et unde itaque commodi, atque, nihil autem praesentium labore corrupti quia hic maiores saepe odit harum quidem eligendi. Magnam aspernatur soluta harum, nemo a inventore odio quae doloribus quisquam eum reprehenderit iste?</p>
                </div>
                
            </div>
        )
    }
};

export default DetailMovies;