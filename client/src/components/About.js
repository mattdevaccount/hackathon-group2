import React from 'react'
import "./Profile/profile.css";
import Mikhail from "./images/mikhail-cropped.jpg";
import Header from "./images/Header.png";

function AboutUs() {
  return (
    <div className="staticBody">
      <div className="HeaderContainer">
        <div className="AboutTitle">
          <h2>About Us</h2>
        </div>
      </div>

      <div className="staticMain">
        <p>
          New Tails is dedicated to saving the lives of senior cats. New Tails
          allows shelters and rescues to post their senior cats that are waiting
          for adoption, reducing the euthanasia rate for adoptable senior cats.
        </p>

        <p>
          New Tails is based in Toronto, Ontario, but open to all shelters and
          rescues in Canada.
        </p>

        <p className="subTitle">Why is New Tails needed?</p>
        <p>
          It’s a sad truth that every day in our communities, loving cats are
          euthanized, or live their final days in a shelter. Why? They’re older.
          And because they’re older, they’re not considered adoptable.
        </p>

        <p>
          Traditional shelters with an open-door policy, a policy that means
          they must accept every animal that walks through their door, run out
          of space. Too many pets, not enough homes. Those that are older are
          considered “unadoptable” and “undesirable”. Because they are older,
          they are also the first to be euthanized.
        </p>

        <p>
          New Tails’ mission is not only to save the lives of those senior cats,
          but also to change the way people view and treat older cats, and to
          let senior pets enjoy the rest of their lives in a forever home.
        </p>

        <p>
          Often the senior cats up for adoption are not just “strays” – they are
          beloved pets who have lost a guardian usually through no fault of
          their own; death, foreclosure, change in lifestyle, or the inability
          to care for a pet any longer. We hope to help give these cats a loving
          family once again.
        </p>

        <p>
          Love has no age limit. Adopting a senior cat does not only change
          their life, but yours as well.
        </p>
      </div>

      <div className="AboutImageContainer">
        <img className="AboutImage" src={Mikhail} />
      </div>
    </div>
  );
}

export default AboutUs;
