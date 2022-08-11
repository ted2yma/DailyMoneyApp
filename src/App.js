import { useEffect, useRef, useState } from "react";
import Form from "./Pages/Form";
import List from "./Pages/List";
import { Container, Row } from "./Stylelist";
import { API_DATA } from "./global/constants";
import Temp from "./Pages/Temp";

async function fetchData(setRecord){
  const response = await fetch(API_DATA);
  const { record } = await response.json();
  console.log(record);
  setRecord(record);
}

async function updateData(record){
  await fetch(API_DATA, {
    method: "PUT",
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify({record})
  });
}

function App() {
  const [formhieght, setFormheight] = useState(null);
  const elementRef = useRef();

  useEffect(() => {
    setFormheight(elementRef.current.clientHeight);
    return;
  }, []);

  const [record, setRecord] = useState([]);
  const poststatus = useRef(false);

  useEffect(() => {
    if(!poststatus.current){
      return
    }
    updateData(record).then(record => poststatus.current = false)
  }, [record])
  
  useEffect(() => {
    fetchData(setRecord);
  }, [])

  return (
    <Container>
      <Row>
        <List height={formhieght} record={record} delact={setRecord} poststatus={poststatus} />
        <Form ref={elementRef} action={setRecord} record={record} poststatus={poststatus} />
      </Row>
    </Container>
  );
}

export default App;
