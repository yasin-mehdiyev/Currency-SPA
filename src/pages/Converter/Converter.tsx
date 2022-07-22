import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';

// Material UI
import TextField from '@mui/material/TextField';

// Sweetalert.js
import swal from 'sweetalert';

// Redux
import { selectCurrencies } from '../../redux/features/Currency/CurrencySlice';

// Service
import * as currencyService from "../../services/CurrencyService";

// Components
import Selectable from '../../components/Selectable/Selectable';

// Styles
import { classes } from '../../styles/styleClasses'
import { Button, ExchangeRateModal } from '../../styles/styleComponents'

const Converter: React.FC = () => {

  const currencies = useSelector(selectCurrencies);
  const [fromRate, setFromRate] = useState<string>("");
  const [toRate, setToRate] = useState<string>("");
  const [isShownResult, setIsShownResult] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const amount = useRef<any>("");

  const handleConvert = (): void => {
    const amountRef: number = Number(amount.current.value);

    if (amountRef > 0 && fromRate !== "" && toRate !== "") {
      swal({
        title: "Are you sure?",
        icon: "warning",
        dangerMode: true,
        buttons: [true, true]
      })
      .then((willDelete) => {
        if (willDelete) {
          (async function customConverter() {
            try {
              const { rates } : any = await currencyService.getLatestRates(fromRate);
              let findCurrencyValue : any = Object.entries(rates).find((elem: any) => elem[0] === toRate);
              let result = amountRef * findCurrencyValue[1];
              setResult(result);
              swal("Process was completed with successfully", {
                icon: "success",
              });
            } catch (error) {
              swal("Oops", "Something went wrong!", "error");
              console.log('error: ', error); 
            }
          })();
          setIsShownResult(true);
        }
      });
    } else {
      swal("Oops", "Something went wrong!", "error");
    }
  };

  return (
    <div style={{ ...classes.commonProps, ...classes.height }}>
      <ExchangeRateModal>
        <div style={classes.fullWidth}>
          <div style={classes.fullWidth}>
            <TextField id="standard-basic" label="Amount" type="number" inputRef={amount} InputProps={{ inputProps: { min: 0 } }} variant="standard" style={{ ...classes.fullWidth, marginBottom: "3%" }} />
          </div>
          <div style={classes.converterBox}>
            <span style={{ ...classes.converterItem, marginRight: "10%" }}> <label className="mb-2">From:</label> <Selectable currencies={currencies} currentCurrency={fromRate} setCurrentCurrency={setFromRate} /></span>
            {" "} {" "}
            <span style={classes.converterItem}><label className="mb-2">To:</label><Selectable currencies={currencies} currentCurrency={toRate} setCurrentCurrency={setToRate} /></span>
          </div>

          <div style={{ ...classes.commonProps, marginTop: '3%' }}>
            <div style={classes.width}>
              <Button onClick={handleConvert}>
                Convert
              </Button>
            </div>
          </div>

          {
            isShownResult && (
              <div style={{ ...classes.fonts, marginTop: '3%' }}>
                Result: {`${amount.current.value} ${fromRate} = ${result.toFixed(0)} ${toRate}`}
              </div>
            )
          }

        </div>
      </ExchangeRateModal>
    </div>
  )
}

export default Converter;