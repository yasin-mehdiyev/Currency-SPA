import React, { Fragment, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Reactstrap
import { Col, Container, Row } from 'reactstrap';
// Components
import Exchanges from '../../components/Exchanges/Exchanges';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Skeleton/Loader';
// Redux
import { fetchLatestRates } from '../../redux/features/Currency/CurrencyAction';
import { selectBaseCurrency, selectLatestRates } from '../../redux/features/Currency/CurrencySlice'
// Helpers
import { classes } from '../../styles/styleClasses';

const Currencies: React.FC = () => {

  const baseCurrency = useSelector(selectBaseCurrency);
  const latestRates = useSelector(selectLatestRates);
  const dispatch = useDispatch<any>();

  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<any>({
    limit: 32,
    skip: 0,
  });

  useLayoutEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchLatestRates(baseCurrency));
    } catch (error) {
      console.log('error: ', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  const changePage = ({ selected }: any): void => {
    setPagination({ ...pagination, limit: pagination?.limit, skip: selected });
  };

  const pagesVisited: number = pagination?.skip * pagination?.limit;

  return (
    <Fragment>
      {
        loading ? <Loader /> : (
          <Container>

            <Row>
              <Col md={12}>
                <h3 style={{ ...classes.fonts, marginTop: '10px' }}>Your current exchange rate: {baseCurrency}</h3>
              </Col>
            </Row>

            {
              latestRates?.length ? (
                <>
                  <Row style={classes.marginBottom}>
                      <Exchanges latestRates={latestRates} pagesVisited={pagesVisited} baseCurrency={baseCurrency} pagination={pagination} />
                  </Row>

                  <Row style={{ ...classes.marginBottom, marginTop: '5%' }}>
                    <Col sm={12}>
                      <Pagination changePage={changePage} latestRates={latestRates} pagination={pagination} />
                    </Col>
                  </Row>
                </>
              ) : null
            }

          </Container>
        )
      }
    </Fragment>
  )
}

export default Currencies;