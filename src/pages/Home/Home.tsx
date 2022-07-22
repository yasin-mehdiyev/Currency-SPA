import React, { Fragment, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
// Redux
import { fetchCurrencyDatas } from '../../redux/features/Currency/CurrencyAction';
// Components
import ExchangeModal from '../../components/ExchangeModal/ExchangeModal';

const Home: React.FC = () => {

    const dispatch = useDispatch<any>();

    useLayoutEffect(() => {
        dispatch(fetchCurrencyDatas());
    }, []);

    return (
        <Fragment>
            <ExchangeModal />
        </Fragment>
    )
}

export default Home;