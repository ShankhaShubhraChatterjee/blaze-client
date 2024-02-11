import { Text, Button, IconButton, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import background from './../../assets/img/background.svg';
const CheckEmail = () => {
    return (
        <div>
            <section className="check-email" style={{ backgroundImage: `url(${background})` }}>
                <div className="check-email-box">
                    <Text fontSize="lg" fontWeight="bold" marginBottom={5}>
                        A Link Has Been Sent To Your Email, Please Check Out
                        <i className="fa-solid fa-circle-check" style={{color:"gold", marginLeft: "5px"}}></i>
                    </Text>
                    <Center>
                        <Link to="/">
                            <IconButton 
                            style={{padding: "10px", marginRight: "2px"}}
                            colorScheme="blue" 
                            aria-label="home" 
                            icon={
                                <i className="fa-solid fa-home" 
                                style={{color:"white"}}>Home</i>} />
                        </Link>
                    </Center>
                </div>
            </section>
        </div>
    )
}
export default CheckEmail