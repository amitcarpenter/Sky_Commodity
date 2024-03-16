import React from 'react'
import './commodity.css'

import { format } from 'date-fns';

const GainerLosser = ({ coins }) => {

  const { expiry_date } = coins

  return (
    <div>
      <section id='gain' className='gain'>
        <div className='container'>
          <div className='row'>
            <h3 style={{ color: "#059473", fontWeight: "bold", textTransform: "uppercase" }}>COMMODITY MARKET Table</h3>
            <div className='col-lg'>

              <div className='gain-table' style={{ overflowX: 'auto' }}>
                <table>
                  <tr>
                    <th>COMMODITY</th>
                    <th>Price (₹)</th>
                    <th>CHG (%)</th>
                    <th>OPEN INTEREST (₹)</th>
                    <th>Low (₹)</th>
                    <th>High (₹)</th>
                    <th>VOLUME  (LOTS)</th>
                    <th>Expiry_date</th>

                  </tr>
                  {
                    coins.map((trade) => {
                      return (
                        <tr key={trade.id}>
                          <td>{trade.trade_name}</td>
                          <td>{trade.price}</td>
                          <td>{trade.percent_chg}</td>
                          <td>{trade.open}</td>
                          <td>{trade.low}</td>
                          <td>{trade.high}</td>
                          <td>{trade.lot}</td>
                          <td>{format(new Date(trade.expiry_date), 'dd-MM-yyyy')}</td>


                        </tr>
                      )
                    })
                  }



                </table>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default GainerLosser