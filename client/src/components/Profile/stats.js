import Thumbs from './thumbs'

const Stats = () => {
    return (
        <div className='Stats'>
        
        <table>
            <tr>
        <th>Socks</th>
        </tr>
        <tr>
            <td className='bold'>Breed:</td>
        <td>Domestic Shorthair</td>
        </tr>
        <tr>
        <td className='bold'>Sex:</td>
            <td>Male:</td>
        </tr>
        <tr>
        <td className='bold'>Age:</td>
            <td>11 years</td>
        </tr>
        <tr>
        <td className='bold'>Colour:</td><td>Blacck & White</td>
        </tr>
        <tr>
        <td className='bold'>Hair:</td>
            <td>Short</td>
        </tr>
        <tr>
        <td className='bold'>Pet ID:</td>
            <td>90210</td>
        </tr>
        <tr>
        <td className='bold'>Been in Shelter Since:</td>
            <td>July 1st, 2021</td>
        </tr>

        </table>
        <Thumbs />
        </div>
    )
}

export default Stats