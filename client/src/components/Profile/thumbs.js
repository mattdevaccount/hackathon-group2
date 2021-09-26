import GetProfileData from './ProfileData.js'

const Thumbs = () => {

  const ProfileData = GetProfileData()

  return (
    <div>
      <img className='Thumbs' src={ProfileData.Thumb1} alt={ProfileData.Name} />
      <img className='Thumbs' src={ProfileData.Thumb2} alt={ProfileData.Name} />
      <img className='Thumbs' src={ProfileData.Thumb3} alt={ProfileData.Name} />
      <img className='Thumbs' src={ProfileData.Thumb4} alt={ProfileData.Name} />
    </div>
  );
};


export default Thumbs