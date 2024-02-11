import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App () {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('npr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currrencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currrencyInfo[to])
  }
  return (
    <div className='flex  '>
      <div className='w-[50%] h-screen flex flex-wrap justify-center items-center bg-slate-600  hover:bg-pink-200 bg-cover bg-no-repeat"'>
        <img className='h-40 rounded-md ' src="https://images.pexels.com/photos/11833310/pexels-photo-11833310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/* Problems occured here but it is solved  */}
      <div className='h-screen w-[50%]'>
        <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1684164601738-cf486690c601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          //! *** form ***
          <form
            onSubmit={e => {
              e.preventDefault()
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={currency => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={amount => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              {/* swap */}
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
</div>

  )
}

export default App
