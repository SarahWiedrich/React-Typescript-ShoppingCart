import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'


export function Store(){
    return (
        <>
            <h1>Store</h1>
            {/* these sizes render how many colums the items will be desplayed in as the screen size changes:  med = 2 colums */}
            <Row med={2} xs={1} lg={3}  className="g-3">
                {/* loop over all store items to render them on the page */}
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}