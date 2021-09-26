import "./Profile/profile.css";
// import Navbar from "./Navebar.js";
import Footer from "./Profile/Footer.js";
import Chewy from "./images/chewy.jpg";

import Header from "./images/Header.png";

function PetCare() {
  return (
    <div className="staticBody">
      <div className="HeaderContainer">
        <div className="HeaderImg">
          <img src={Header} />
        </div>
        {/* <Navbar /> */}
        <div className="PetCareTitle">
          <h2>Are you Ready to Adopt a Senior Cat?</h2>
        </div>
      </div>

      <div className="PetCareMain">
        <p>
          Cats are cute and cuddly — but they’re also major commitments. Cats
          end up in shelters every year because pet owners failed to consider
          issues such as money, moving and other family members. We’ve devised a
          cat adoption checklist to help you figure out if you are really ready
          to adopt a cat.
        </p>
        <div className="PetCareTop">
          <div className="Chewy">
            <img src={Chewy} />
          </div>
          <div className="PetArticle">
            <p className="subTitle">1. Are you financially ready?</p>

            <p>
              Beyond the adoption fee, there will be regular vet visits,
              vaccinations, flea medications, kitty litter and food. Are you
              willing to save money for medical emergencies? Unexpected medical
              costs can arise, especially as your cat grows older. Having enough
              money to cover both the expected and unexpected for a cat that may
              live 20+ years is the key to being ready to adopt a cat.
            </p>

            <p className="subTitle">
              2. Are you ready to commit yourself to the cat for their entire
              life?
            </p>
            <p>
              Many cats from shelters have already had many homes in their
              lifetime. It’s important to really reflect on why you want a cat,
              and to be ready to commit to this cat for it’s entire life.
            </p>

            <p className="subTitle">
              3. Are you ready to take your cat with you if you move?
            </p>

            <p>
              One of the most common reasons cats are returned to shelters are
              because owners find themselves moving, and for whatever reason
              cannot bring their cat with them. You should be prepared to take
              your new cat into consideration of your life changes and make sure
              they can be adapted into those changes.
            </p>
          </div>
        </div>

        <div className="PetCareBottom">
          <p className="subTitle">
            4. Can you provide a safe environment for your adopted cat?
          </p>

          <p>
            While every person and situation is different, the one thing that
            cat owners should have in common is the ability to provide a safe
            home for their cat. This includes making sure other pets get along
            with your cat, children understand how to handle a cat (like holding
            a cat gently), and toys and stimulation are provided to keep your
            cat happy and healthy.
          </p>

          <p className="subTitle">
            5. Are you prepared to keep you cats indoors?
          </p>

          <p>
            There are too many dangers to outdoor life for cats. All shelters
            and rescues will screen that you are willing to keep your cat
            indoors, as outdoor life shortens a cat’s lifespan by more than
            half. Cats can live happy and comfortably indoors - many do not need
            more than a small studio apartment.
          </p>

          <p className="subTitle">6. Are you against declawing?</p>

          <p>
            Declawing is the surgical removal of the first knuckle of each toe.
            It is an extremely painful, and unnecessary procedure. You will
            likely find declawed cats at the shelter, and they are usually there
            because they exhibited behavioural problems after the procedure to
            deal with the pain of declawing. If declawing is your only solution
            to having a cat, and you're not willing to take your chances with a
            previously declawed cat, a cat won't be the best fit.
          </p>
        </div>

        <p className="subTitle declaration">
          If you’ve answered “yes” to all of the above cat adoption checklist
          questions, then yes, you really are ready for senior cat adoption!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default PetCare;
