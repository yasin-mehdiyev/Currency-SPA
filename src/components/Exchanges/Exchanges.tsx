import React, { Fragment } from 'react';
// Reactstrap
import { Col } from 'reactstrap';
// Helpers
import { Button } from '../../styles/styleComponents';

const Exchanges: React.FC<{ latestRates: Array<any>, pagesVisited: number, baseCurrency: string, pagination: any }> = ({ latestRates, pagesVisited, baseCurrency, pagination }) => {
    return (
        <Fragment>
            {
                latestRates?.slice(pagesVisited, pagesVisited + pagination?.limit)
                    .map((item: any, index: number) => (
                        <Col md={3} key={index}>
                            <Button>
                                <span>1 {baseCurrency} = {item[1]} {" "} {item[0]}</span>
                            </Button>
                        </Col>
                    ))
            }
        </Fragment>
    )
}

export default Exchanges