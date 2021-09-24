import {Component} from 'react'

import Header from '../Header'
import './index.css'

const options = {
  method: 'GET',
}
class Home extends Component {
  state = {currencyFrom: '', currencyTo: '', amount: '', showResult: false}

  onChangeFromCurrency = event =>
    this.setState({currencyFrom: event.target.value, showResult: false})

  onChangeToCurrency = event =>
    this.setState({currencyTo: event.target.value, showResult: false})

  onSubmitForm = async event => {
    event.preventDefault()
    const {currencyFrom, currencyTo} = this.state
    const url = `https://free.currconv.com/api/v7/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=fd79b8980179de5a2d39`
    const response = await fetch(url, options)
    const data = await response.json()
    const rate = data[`${currencyFrom}_${currencyTo}`]
    this.setState({amount: rate, showResult: true})
  }

  render() {
    const {currencyFrom, currencyTo, amount, showResult} = this.state
    return (
      <>
        <Header propsHistory={this.props} />
        <div className="bg-container-home">
          <h1>Currency Converter</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="from-currency">
              <label htmlFor="InputBase">From Currency</label>
              <br />
              <select
                name="selectCurrencyToConvert"
                onChange={this.onChangeFromCurrency}
              >
                <option value="">Select your Currency</option>
                <option value="AUD">Australian dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">European Euro</option>
                <option value="GBP">British Pound</option>
                <option value="INR">Indian Rupee</option>
                <option value="JPY">Japanese Yen</option>
                <option value="RUB">Russian Dollar</option>
                <option value="USD">United State Dollar</option>
              </select>
            </div>
            <div className="output-currency">
              <label htmlFor="OutputCurrency">To Currency</label>
              <br />
              <select
                name="ConvertedCurrency"
                onChange={this.onChangeToCurrency}
              >
                <option value="">Select your Currency</option>
                <option value="AUD">Australian dollar</option>
                <option value="BGN">Bulgarian Lev</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="EUR">European Euro</option>
                <option value="GBP">British Pound</option>
                <option value="INR">Indian Rupee</option>
                <option value="JPY">Japanese Yen</option>
                <option value="RUB">Russian Dollar</option>
                <option value="USD">United State Dollar</option>
              </select>
            </div>
            <div>
              <button type="submit" className="convert-button">
                Convert
              </button>
              {showResult && (
                <p>{`1  ${currencyFrom} =  ${amount}  ${currencyTo}`}</p>
              )}
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Home
