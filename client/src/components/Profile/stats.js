import Thumbs from "./thumbs";
import  GetProfileData  from './ProfileData.js'


const Stats = () => {

    const ProfileData = GetProfileData()

  return (
    <div className="Stats">
      <table>
        <tr>
          <th>{ProfileData.Name}</th>
        </tr>
        <tr>
          <td className="bold">Breed:</td>
          <td className="StatsValues">{ProfileData.Breed}</td>
        </tr>
        <tr>
          <td className="bold">Sex:</td>
          <td className="StatsValues">{ProfileData.Sex}</td>
        </tr>
        <tr>
          <td className="bold">Age:</td>
          <td className="StatsValues">{ProfileData.Age} years</td>
        </tr>
        <tr>
          <td className="bold">Colour:</td>
          <td className="StatsValues">{ProfileData.Colour}</td>
        </tr>
        <tr>
          <td className="bold">Hair:</td>
          <td className="StatsValues">{ProfileData.Hair}</td>
        </tr>
        <tr>
          <td className="bold">Pet ID:</td>
          <td className="StatsValues">{ProfileData.PetID}</td>
        </tr>
        <tr>
          <td className="bold">Been in Shelter Since:</td>
          <td className="StatsValues">{ProfileData.PrisonTerm}</td>
        </tr>
      </table>
      <div>
        <Thumbs />
      </div>
    </div>
  );
};

export default Stats;
