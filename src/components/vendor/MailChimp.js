import React, { useState } from "react"

const MailChimp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
      console.log("submit");
  }

  return (
    <>
      <div id="mc_embed_signup">
        <form
        //   action="https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
          onSubmit={handleSubmit}
        >
          <div id="mc_embed_signup_scroll">
    
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value={email}
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">First Name </label>
              <input
                type="text"
                value=""
                name="FNAME"
                class=""
                id="mce-FNAME"
              />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">Last Name </label>
              <input
                type="text"
                value=""
                name="LNAME"
                class=""
                id="mce-LNAME"
              />
            </div>
            <div class="mc-field-group input-group">
              <p>What would you like to hear about?</p>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="4"
                    name="group[1891][4]"
                    id="mce-group[1891]-1891-0"
                  />
                  <label for="mce-group[1891]-1891-0">1-1 lessons</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="8"
                    name="group[1891][8]"
                    id="mce-group[1891]-1891-1"
                  />
                  <label for="mce-group[1891]-1891-1">JLPT Bootcamps</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="16"
                    name="group[1891][16]"
                    id="mce-group[1891]-1891-2"
                  />
                  <label for="mce-group[1891]-1891-2">Beginner courses</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="32"
                    name="group[1891][32]"
                    id="mce-group[1891]-1891-3"
                  />
                  <label for="mce-group[1891]-1891-3">Beginner Bootcamps</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="64"
                    name="group[1891][64]"
                    id="mce-group[1891]-1891-4"
                  />
                  <label for="mce-group[1891]-1891-4">
                    Online Japanese Conversation Club Membership
                  </label>
                </li>
              </ul>
            </div>
            <div
              id="mergeRow-gdpr"
              class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div class="content__gdpr">
                <label><p>Marketing Permissions</p></label>
                <p>
                  Please select all the ways you would like to hear from Nihongo
                  Scotland:
                </p>
                <fieldset
                  class="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label class="checkbox subfield" for="gdpr_27377">
                    <input
                      type="checkbox"
                      id="gdpr_27377"
                      name="gdpr[27377]"
                      value="Y"
                      class="av-checkbox gdpr"
                    />
                    <span>Email</span>{" "}
                  </label>
                  <label class="checkbox subfield" for="gdpr_27385">
                    <input
                      type="checkbox"
                      id="gdpr_27385"
                      name="gdpr[27385]"
                      value="Y"
                      class="av-checkbox gdpr"
                    />
                    <span>Customized Online Advertising</span>{" "}
                  </label>
                </fieldset>
                <p>
                  You can unsubscribe at any time by clicking the link in the
                  footer of our emails. For information about our privacy
                  practices, please visit our website: www.jessicabrowns.com
                </p>
              </div>
              <div class="content__gdprLegal">
                <p>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.{" "}
                  <a href=" https://mailchimp.com/legal/" target="_blank">
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
            </div>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{display:'none'}}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{display:'none'}}
              ></div>
            </div>
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input
                type="text"
                name="b_17e930ef2f11232d3ac0dca1e_200df291c9"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default MailChimp
