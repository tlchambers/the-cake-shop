import React from "react";
import "../Styling/Banner.css";
import "../Styling/About.css";
import Banner from "../components/BannerUI";

export default function About() {
  return (
    <>
      <div className="container px-4 text-left">
        <div className=".row gx-5">
          <div className="col">
            <div className="p-3">
              <h3>The Boujie Delights Story</h3>
              <hr></hr>
              <br />
              <p>
                My name is Sabrina and I am a home based baker and cane
                decorator based in South East London.
              </p>
              <p>
                My passion for baking started 2021 when I started baking cakes &
                treats for family and friends. This lead to me experimenting and
                having fun with making different types of cakes and treats such
                as chocolate covered strawberries, cakesicles, sugar cookies &
                chocolate smash hearts. Two years on and I now have my own
                buttercream cakes business specialising in occasion cakes for
                birthdays, anniversaries, christenings, baby and bridal showers,
                charity events & more.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <img
                src="https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 text-left">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <img
                src="https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <p>
                The process of baking and decorating cakes for me is very
                therapeutic, every order I receive is very special to me as it
                allows me to learn and grow whilst trusting the process. I am a
                hardworking, resilient creative who takes pride in my work.
              </p>
              <p>
                I aspire to not only make tasteful, visually pleasing cakes but
                to make others like you have an enjoyable and rememberable
                experience whenever tasting one of my desserts. So if your
                looking for a cake or treats for your special occasion, Boujie
                Delights can help make your day a remarkable. I looking forward
                to hearing from you soon!
              </p>
              <p>
                So if your looking for a cake or treats for your special
                occasion, Boujie Delights can help make your day a remarkable. I
                looking forward to hearing from you soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
