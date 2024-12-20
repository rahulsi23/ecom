 
import { Row, Col,Card } from "react-bootstrap";
function Dashboard() {
  return (
    <div>
      <h2>Hi, Welcome back</h2>
      <Row>
        <Col><Card className="p-3 bg-light text-center">Weekly Sales: 714k</Card></Col>
        <Col><Card className="p-3 bg-light text-center">New Users: 1.35m</Card></Col>
        <Col><Card className="p-3 bg-light text-center">Item Orders: 1.72m</Card></Col>
        <Col><Card className="p-3 bg-light text-center">Bug Reports: 234</Card></Col>
      </Row>
      {/* ...cards */}
    
    </div>
  );
}
export default Dashboard;