import {Nav, Hero, Features, Ad1, Ad2, Testimonial, FAQ, Price, CTA, Footer} from "@/components"
import dataJson from "./lib/data.json"
const Home = (props: any) => {
  return (
    <>
    <div className="flex flex-col mx-8 gap-y-16">
      <Nav/>
      <Hero data={props.data.hero} />
      <Features data={props.data.features} />
      <Ad1 />
      <Ad2 />
      <Testimonial data={props.data.testimonials} />
      <Price data={props.data.pricing} />
      <FAQ data={props.data.faq} />
      <CTA />
      <Footer/>
    </div>
    </>
  );
}

export const getStaticProps = () => {
  const data = dataJson

  return {
    props: {
      data,
    }
  }
}

export default Home;


