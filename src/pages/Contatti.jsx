import Navbar from "../components/navbar/Navbar";
import useCounterProva from "../hooks/useCounterProva";

function Contatti() {
    useCounterProva();
    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold">Contatti</h1>
        </>
    );
}

export default Contatti;