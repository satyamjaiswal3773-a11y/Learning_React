import cardImage1 from "../../assets/AirPhone.jpg";
import cardImage2 from "../../assets/Draier.jpg";
import cardImage3 from "../../assets/transformer.jpg";
import cardImage4 from "../../assets/Scalaton.jpg";
import "./card.css";


function Cards(props) {
    return(
        <div className="cards">
            <div className="card1">
                <img src={props.cardImage1} alt="Card" />
                <ul>
                    <li>{props.list1[0]}</li>
                    <li>{props.list1[1]}</li>
                    <li>{props.list1[2]}</li>
                </ul>
            </div>
            <div className="card2">
                <img src={props.cardImage2} alt="Card" />
                <ul>
                    <li>{props.list2[0]}</li>
                    <li>{props.list2[1]}</li>
                    <li>{props.list2[2]}</li>
                </ul>
            </div>
            <div className="card3">
                <img src={props.cardImage3} alt="Card" />
                <ul>
                    <li>{props.list3[0]}</li>
                    <li>{props.list3[1]}</li>
                    <li>{props.list3[2]}</li>
                </ul>
            </div>
            <div className="card4">
                <img src={props.cardImage4} alt="Card" />
                <ul>
                    <li>{props.list4[0]}</li>
                    <li>{props.list4[1]}</li>
                    <li>{props.list4[2]}</li>
                </ul>
            </div>
        </div>
    );  
}

export default Cards;
