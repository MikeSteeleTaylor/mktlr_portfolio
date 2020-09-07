import { fill1, fill2, fill3 } from "./styles/skills"

export const projects = [
  {
    name: "Booking Form",
    url: "https://sistability-booking-form.web.app/",
  },
  {
    name: "Yelp Camp",
    url: "https://ancient-journey-78857.herokuapp.com/",
  },
  {
    name: "Pricing Service",
    url: "https://pricing-service-mktlr.herokuapp.com/",
  },
  {
    name: "Developer Portfolio",
    url: "https://github.com/MikeSteeleTaylor/mktlr_portfolio",
  },
  {
    name: "Covid-19 Register",
    url: "https://expo.io/@mktlr/covid-register",
  },
  {
    name: "Python Blockchain",
    url: "https://github.com/MikeSteeleTaylor/Python-Blockchain",
  },
]

export const jobs = [
  {
    name: "Craig Bryant",
    url: "#",
    image: "CBWebLogo.png",
  },
  {
    name: "Downs Farm Fresh",
    url: "#",
    image: "DFF_website_lrg.png",
  },
  {
    name: "Lasso Group",
    url: "#",
    image: "LGLogo_V_Retina.png",
  },
  {
    name: "Shamanic Earth Medicine",
    url: "#",
    image: "SEM_final-logo_rgb.png",
  },
]

export const certs = [
  {
    name: "React Complete Guide",
    url: "#",
    image: "certImage1.jpg",
  },
  {
    name: "Web Dev Bootcamp",
    url: "#",
    image: "certImage2.jpg",
  },
  {
    name: "Complete Python Web Course",
    url: "#",
    image: "certImage3.jpg",
  },
  {
    name: "Python Crypto/Blockchain Course",
    url: "#",
    image: "certImage4.jpg",
  },
]

const n = 47

export const jobsPH = [...Array(n)].map((e, i) => {
  if (i !== 0) {
    jobs.push({
      name: "parkHotel" + i,
      url: "#",
      image: "park-hotel-" + i + ".jpg",
    })
  }
  return null
})

export const skills = [
  {
    name: "javascript",
    proficiency: fill2,
  },
  {
    name: "html",
    proficiency: fill1,
  },
  {
    name: "css",
    proficiency: fill1,
  },
  {
    name: "react",
    proficiency: fill2,
  },
  {
    name: "react-native",
    proficiency: fill3,
  },
  {
    name: "redux",
    proficiency: fill3,
  },
  {
    name: "python",
    proficiency: fill3,
  },
  {
    name: "nodejs",
    proficiency: fill3,
  },
  {
    name: "mongoDB",
    proficiency: fill3,
  },
  {
    name: "git/version control",
    proficiency: fill3,
  },
  {
    name: "enzyme/jest",
    proficiency: fill3,
  },
  {
    name: "wordpress",
    proficiency: fill2,
  },
  {
    name: "graphic design",
    proficiency: fill2,
  },
  {
    name: "adobe creative suite",
    proficiency: fill2,
  },
  {
    name: "copywriting",
    proficiency: fill2,
  },
  {
    name: "SEO",
    proficiency: fill3,
  },
  {
    name: "domain/hosting/DNS management",
    proficiency: fill3,
  },
]
