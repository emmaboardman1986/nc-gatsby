import React, { useState } from "react"
import styled from "styled-components"
import Form from "../form/Form"
import FormList from "../form/FormList"
import InputBox from "../form/InputBox"
import Label from "../form/Label"
import GDPR from "../form/GDPR"
import ListItem from "../ui/ListItem"
import CheckBox from "../form/CheckBox"
import Emphasis from "../contentContainers/Emphasis"
import { setColor } from "../../styles/styleHelpers"
import Button from "../../components/ui/Button"

const MailChimp = ({ emphasisColor }) => {
  const [email, setEmail] = useState("")

  const handleSubmit = () => {
    alert("not hooked up yet :) please try back week of May 3rd");
    // addToMailchimp(email, {
    //   PATHNAME: '/blog-post-1',
    //   FNAME: 'Ben',
    //   LNAME: 'Coder'
    //  
    // })
    
  }

  return (
    <MailChimpWrapper>
      <div id="mc_embed_signup">
        <Form
          //   action="https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <Label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </Label>
              <InputBox
                type="email"
                value={email}
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mc-field-group">
              <Label htmlFor="mce-FNAME">First Name </Label>
              <InputBox
                type="text"
                value=""
                name="FNAME"
                className=""
                id="mce-FNAME"
              />
            </div>
            <Emphasis
              className="mc-field-group input-group"
              padding="1rem"
              color={emphasisColor}
            >
              <MailChimpLegend>
                What would you like to hear about?
              </MailChimpLegend>
              <FormList flex={true}>
                <ListItem flex={true}>
                  <CheckBox
                    value="4"
                    name="group[1891][4]"
                    id="mce-group[1891]-1891-0"
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-0"
                    display="inline-block"
                  >
                    1-1 lessons
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value="8"
                    name="group[1891][8]"
                    id="mce-group[1891]-1891-1"
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-1"
                    display="inline-block"
                  >
                    JLPT Bootcamps
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value="16"
                    name="group[1891][16]"
                    id="mce-group[1891]-1891-2"
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-2"
                    display="inline-block"
                  >
                    Beginner courses
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value="32"
                    name="group[1891][32]"
                    id="mce-group[1891]-1891-3"
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-3"
                    display="inline-block"
                  >
                    Beginner Bootcamps
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value="64"
                    name="group[1891][64]"
                    id="mce-group[1891]-1891-4"
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-4"
                    display="inline-block"
                  >
                    Online Japanese Conversation Club Membership
                  </Label>
                </ListItem>
              </FormList>
            </Emphasis>
            <GDPR
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <Label>
                  <p style={{ marginBottom: "0.25rem" }}>
                    How would you like to hear from us?
                  </p>
                </Label>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <Label className="checkbox subfield" htmlFor="gdpr_27377">
                    <CheckBox
                      id="gdpr_27377"
                      name="gdpr[27377]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Contact me by Email</span>{" "}
                  </Label>
                  {/* <Label className="checkbox subfield" htmlFor="gdpr_27385">
                    <CheckBox
                      id="gdpr_27385"
                      name="gdpr[27385]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Contact me via Customized Online Advertising</span>{" "}
                  </Label> */}
                </fieldset>
              </div>
              <div className="content__gdprLegal">
                <p style={{ fontSize: "0.6rem", marginTop: "0.25rem" }}>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.{" "}
                  <a
                    href=" https://mailchimp.com/legal/"
                    target="_blank"
                    style={{ fontSize: "0.6rem" }}
                  >
                    Learn more about Mailchimp's privacy practices here.
                  </a>
                </p>
              </div>
            </GDPR>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <InputBox
                type="text"
                name="b_17e930ef2f11232d3ac0dca1e_200df291c9"
                tabindex="-1"
                value=""
              />
            </div>
            {/* <div className="clear"> */}
            <Button
              name="subscribe"
              id="mc-embedded-subscribe"
              linkText="Subscribe"
              variant="mailchimp"
              onClick={handleSubmit}
            />
            {/* </div> */}
            <p style={{ fontSize: "0.6rem" }}>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit the{" "}
              <a
                href="https://www.nihongoconnection.com"
                target="_blank"
                style={{ fontSize: "0.6rem" }}
              >
                {" "}
                Nihongo Connection website
              </a>
            </p>
          </div>
        </Form>
      </div>
    </MailChimpWrapper>
  )
}

const MailChimpWrapper = styled.div`
  p {
    a {
      color: ${setColor.brandWhite};
      &:hover {
        background: ${setColor.brandWhite};
        color: ${setColor.brandGreyDark};
      }
    }
  }
`

const MailChimpLegend = styled.legend`
  font-size: 0.8rem;
  font-family: "Poppins-Regular";
  margin-bottom: 0.5rem;
`

const InputSubmit = styled.input`
  width: 60%;
  padding: 4rem;
  background-color: ${setColor.brandWhite};
  color: ${setColor.brandBlack};
  text-transform: uppercase;
  font: 600 4rem "AnonymousPro-Regular";
  span {
    font-family: "AnonymousPro-Regular";
  }
`

export default MailChimp
