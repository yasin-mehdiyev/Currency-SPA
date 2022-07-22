import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Redux
import { selectBaseCurrency, selectCurrencies, setBaseCurrency } from '../../redux/features/Currency/CurrencySlice';
import { setIsShown } from '../../redux/features/UI/UISlice';
// Components
import Selectable from '../Selectable/Selectable';
// Helpers
import { classes } from '../../styles/styleClasses';
import { ExchangeRateModal, Button } from '../../styles/styleComponents';

const ExchangeModal: React.FC = () => {

    const currencies = useSelector(selectCurrencies);
    const baseCurrency = useSelector(selectBaseCurrency);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const [currentCurrency, setCurrentCurrency] = useState<string>(baseCurrency);

    const handleBaseCurrency = () : void => {
        if (currentCurrency !== '') {
            dispatch(setBaseCurrency(currentCurrency));
            dispatch(setIsShown(true));
            navigate("/currencies");
        };
    };

    return (
        <div style={{ ...classes.commonProps, ...classes.height }}>
            <ExchangeRateModal>
                <div style={classes.width}>
                    <h4 style={classes.fonts}>Please, select your current exchange rate</h4>
                    <Selectable currencies={currencies} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} />
                    <Button onClick={handleBaseCurrency}>Choose your exchange rate</Button>
                </div>
            </ExchangeRateModal>
        </div>
    )
}

export default ExchangeModal