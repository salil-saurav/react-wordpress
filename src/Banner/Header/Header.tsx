import Button from "../../Components/Button/Button";
import Logo from "../../assets/logo.png";
import { useState } from "react";

type Props = {
    className: string;
}
import axios from "axios";
import baseUrl from "../../BaseUrl";

const Header: React.FC<Props> = ({ className }) => {

    const [acfData, setAcfData] = useState(null);

    axios.get(baseUrl + "pages/11").then((res) => {
        setAcfData(res.data.acf = acfData)

    }).catch(() => { console.error("Error while fetching page") })

    return (
        <header className={className + " container flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between w-full items-center"}>
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="btn-group flex-wrap justify-center flex gap-3">
                <Button href="#" className="Banner-btn uppercase" label={acfData.button_label} />
                <Button href="tel:08004238837" className="Banner-btn uppercase" label="0800 423 8837" />
                <Button href="mailto:admin@betterpropertymanagers.co.nz" className="Banner-btn capitalize" label="admin@betterpropertymanagers.co.nz" />
            </div>
        </header>
    )
}

export default Header;