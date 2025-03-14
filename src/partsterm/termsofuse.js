/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Terms() {
  return (
    <div className="bg-white mb-12">
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h1 className="text-3xl sm:text-4xl text-center lg:text-6xl text-theme-blue font-bold leading-tight mb-5 mt-12">
              Nube iO Terms of Use
            </h1>
            <div className="my-6 w-full border-t-4 border-theme-teal" />
          </Fade>
          <Fade direction="up" triggerOnce delay={300}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-theme-teal">
                <strong>1. Terms of Use</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                The content of the pages of this website is provided for general
                information and personal use only. It is subject to change
                without prior notice.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>2. Disclaimers</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                We, nor any third parties, offer any warranty or guarantee
                regarding the accuracy, timeliness, performance, completeness,
                or suitability of the information and materials provided on this
                website for any specific purpose. You acknowledge that such
                information and materials may contain inaccuracies or errors,
                and we explicitly exclude liability for any such inaccuracies or
                errors to the fullest extent permitted by law.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>3. Risk of Use</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be held
                liable. It is your responsibility to ensure that any products,
                services, or information available through this website meet
                your specific needs and requirements.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>4. Intellectual Property</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                This website contains material that is owned by or licensed to
                us, including, but not limited to, the design, layout,
                appearance, and graphics. Reproduction of any content is
                prohibited except as permitted under copyright law, which forms
                part of these terms and conditions.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>5. Trademarks</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                All trademarks reproduced on this website that are not the
                property of or licensed to the website operator are acknowledged
                on the website.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>6. Unauthorized Use</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Unauthorized use of this website may result in a claim for
                damages and/or constitute a criminal offense.
              </p>

              <h2 className="text-xl font-bold text-theme-teal">
                <strong>7. Links to Third-Party Websites</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Occasionally, this website may include links to other websites
                for your convenience, providing further information. These links
                do not imply endorsement of the website(s). We do not take
                responsibility for the content of any linked website(s).
              </p>

              <h2 className="text-xl font-bold text-theme-teal ">
                <strong>8. Governing Law</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Your use of this website, and any dispute arising from such use,
                shall be governed by and construed in accordance with the laws
                of Australia.
              </p>
            </div>
            <div className="my-6 w-full border-t-4 border-gray-300" />
            <p className="text-lg text-gray-700 leading-relaxed">
              End of Terms of Use policy
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
