import Cards from "./Cards/Cards.jsx";
import BMW5 from "../assets/bmw5.jpg";
import BW5 from "../assets/5.jpg";
import Gt from "../assets/gt.jpg";
import GT650 from "../assets/Gt650.jpg";

function  Contact() {
    return (
        <>
            <Cards
                cardImage1={BMW5}
                cardImage2={BW5}
                cardImage3={Gt}
                cardImage4={GT650}

                list1={["BMW 5 Series", "Engine: 2.0L Turbo", "Price: $50,000"]}
                list2={["BMW 5 Series", "Engine: 2.0L Turbo", "Price: $50,000"]}
                list3={["Continental GT 650", "Engine: 648 cc, Air/Oil-Cooled, Parallel-Twin", "Price: ₹3.58 Lakh Ex-Showroom"]}
                list4={["Continental GT 650", "Engine: 648 cc, Air/Oil-Cooled, Parallel-Twin", "Price: ₹3.58 Lakh Ex-Showroom"]}

            />
        </>
    );
}

export default Contact;