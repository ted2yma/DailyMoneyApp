import { Listctn } from "../Stylelist";
import Datacard from "./components/Datacard";

function List({height, delact, record, poststatus}){
    return(
        <Listctn height={height}>
            {
                record.map(item => {
                    const {id, title, price, date, time} = item;
                    return (
                        <Datacard 
                            key={id} 
                            id={id}
                            title={title} 
                            price={price} 
                            date={date} 
                            time={time} 
                            poststatus={poststatus}
                            delact={delact} 
                        />
                    )
                })
            }
        </Listctn>
    );
}

export default List;