import React from "react";
import { Footer } from "../components";
import { FaFacebookF, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
export function FooterContainer() {
  return (
    <Footer>

      <Footer.Row>
        <Footer.Column>
          <Footer.Title>about</Footer.Title>
          <Footer.Link href="#">How Creative Spaces works</Footer.Link>
          <Footer.Link href="#">NewsRoom</Footer.Link>
          <Footer.Link href="#">Creative Spaces Plus</Footer.Link>
          <Footer.Link href="#">Creative Spaces Luxe</Footer.Link>
          <Footer.Link href="#">Creative Spaces for Work</Footer.Link>
          <Footer.Link href="#">Careers</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Title>community</Footer.Title>
          <Footer.Link href="#">Diversity & Belonging</Footer.Link>
          <Footer.Link href="#">Accessibility</Footer.Link>
          <Footer.Link href="#">Creative Spaces Associates</Footer.Link>
          <Footer.Link href="#">Frontline Stays</Footer.Link>
          <Footer.Link href="#">Invite friends</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Title>host</Footer.Title>
          <Footer.Link href="#">Host your space</Footer.Link>
          <Footer.Link href="#">Host an Online Experience</Footer.Link>
          <Footer.Link href="#">Host an Experience</Footer.Link>
          <Footer.Link href="#">Responsible hosting</Footer.Link>
          <Footer.Link href="#">Open Spaces</Footer.Link>
          <Footer.Link href="#">Resource Centre</Footer.Link>
          <Footer.Link href="#">Community Centre/Space</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Title>support</Footer.Title>
          <Footer.Link href="#">Our COVID-19 Response</Footer.Link>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Cancellation options</Footer.Link>
          <Footer.Link href="#">Neighbourhood Support</Footer.Link>
          <Footer.Link href="#">Trust & Safety</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />

      <div style={{ "textAlign" : "center"}}>
        <div>
            <Footer.Text>© 2020 Creative Spaces, Inc. All rights reserved
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Terms</Footer.Link>
            <Footer.Link href="#">SiteMap</Footer.Link>
            </Footer.Text>
        </div>
        <div>
            <Footer.Text>
            <Footer.Link href="#">
                <FaGlobe /> English(CA)
            </Footer.Link>
            <Footer.Link href="#">$ CAD</Footer.Link>
            <Footer.Link href="#">
                <FaFacebookF />
            </Footer.Link>
            <Footer.Link href="#">
                <FaTwitter />
            </Footer.Link>
            <Footer.Link href="#">
                <ImInstagram />
            </Footer.Link>
            </Footer.Text>
        </div>
      </div>
    </Footer>
  );
}
