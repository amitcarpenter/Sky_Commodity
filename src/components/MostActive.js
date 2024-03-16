import React from 'react'

const MostActive = () => {
  return (
    <div>
            <section id='gain' className='gain'>
        <div className='container'>
        <div className='row'>
        <h3 style={{color:"#059473", fontWeight:"bold"}}>Most Active</h3>
        <div className='col-lg'>
        <div>
        <ul className='d-flex'>
            <li>Volume</li>
            <li>Value</li>
        </ul>
        </div>
        <div className='gain-table' style={{overflowX:'auto'}}>
  <table>
    <tr>
      <th>COMMODITY</th>
      <th>EXPIRY</th>
      <th>LTP (₹)</th>
      <th>PR CLOSE(₹)</th>
      <th>CHANGE (₹)</th>
      <th>CHG%</th>
      <th>VOL</th>
    </tr>
    <tr>
      <td>SilverMic Ahmedabad</td>
      <td>923</td>
      <td>119</td>
      <td>92</td>
      <td>1129</td>
      <td>9</td>
      <td>9</td>

    </tr>
    <tr>
      <td>Zinc</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>

    </tr>
    <tr>
      <td>Zinc</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>

    </tr>
    <tr>
    <td>Zinc Mini</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>
      <td>9</td>

    </tr>
    <tr>
    <td>Zinc Mini</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>67</td>
      <td>9</td>
      <td>9</td>

    </tr>
  </table>
</div>
        </div>

        </div>

        </div>

        </section>
    </div>
  )
}

export default MostActive