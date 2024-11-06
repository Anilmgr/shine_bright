import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

const BookingForm = () => {
  return (
    <>
        <Navbar/>
        <Header title="Book a Cleaning" subTitle="Schedule your cleaning service today"/>
        <main>
        <section className="booking-form py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form id="booking-form">
                            <div className="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" required />
                                </div>
                                <div className="mb-3">
                                    <label for="service" className="form-label">Service Type</label>
                                    <select className="form-select" id="service" name="service" required>
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Cleaning</option>
                                        <option value="commercial">Commercial Cleaning</option>
                                        <option value="deep">Deep Cleaning</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="date" className="form-label">Preferred Date</label>
                                    <input type="date" className="form-control" id="date" name="date" required />
                                </div>
                                <div className="mb-3">
                                    <label for="time" className="form-label">Preferred Time</label>
                                    <input type="time" className="form-control" id="time" name="time" required />
                                </div>
                                <div className="mb-3">
                                    <label for="address" className="form-label">Address</label>
                                    <textarea className="form-control" id="address" name="address" rows="3" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="notes" className="form-label">Special Instructions (Optional)</label>
                                    <textarea className="form-control" id="notes" name="notes" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary-custom">Book Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
export default BookingForm