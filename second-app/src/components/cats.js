import './cats.css';
import axios from 'axios';

let Cats =  () => {

    let catty = axios.get('https://api.thecatapi.com/v1/images/search').then(
        (response) => {
            console.log(response.data[0].url);
            let catImage = document.getElementById('cat-image');
            catImage.src = response.data[0].url;
        }
    )


    return(
        <div>
            <h1>Random Cat Image</h1>
            <img id={'cat-image'} className={'cat-img'}  alt={'cat'}/>
        </div>
    )
}

export default Cats;