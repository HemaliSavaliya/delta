import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import NavbarInner from '../../components/Navbar/InnerNavbar/NavbarInner';
import Footer from '../../components/Footer';

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <NavbarInner />
      <section className="container mx-auto px-4 py-content-spacing-lg">
        <div className="flex min-h-screen flex-col">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="mt-5">
              <ContactForm />
            </div>

            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact;