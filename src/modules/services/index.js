import React from 'react';
import Developmentservices from './component/developmentservices';
import Rapeatcomponent from './component/repeatcomponent';
import Startaproject from './component/startaproject';
import Worpressdevelopment from './component/wordpressdevelopment';
import Ideas from './component/ideas';
import images from '../../constants/images'
function Services() {
  return (
    <div className="Services">
      <Developmentservices />

      <Rapeatcomponent
        title="Mobile Apps Development"
        paragraph="From B2B or B2E apps for enterprises, small businesses, and startups, we have a proven track record of offering high-impact, result driven and engaging mobile application development services. IndiaNIC is a top mobile app development company that is renowned for delivering native Android app development, native iOS app development, hybrid and cross-platform app development services to build next-gen mobile applications using the latest technology stack"
        list={{
          list1: ["Native iOS App Development", "Cross-platform App Development", "Wearable App Development", "Xamarin App Development"],
          list2: ["Native Android App Development ", "Hybrid App Development", "React Native App Development", "Flutter App Development"]
        }}
        image={images.servicesimg2}
        isRight
      />

      <Rapeatcomponent
        title="Web Development"
        paragraph=" Being a leading website application development company , our certified developers have unparalleled expertise in working with the latest web technologies to deliver custom web solutions. Whether creating a web presence for your company, an information hub for your business or empowering your apps/IoT devices through backend- IndiaNIC does it all by covering a wide spectrum of web solutions and framework."
        list={{
          list1: ["Custom Website Development", "eCommerce Store Development", "Full-Stack Development", "Progressive Web Apps"],
          list2: ["Web Application Development", "Custom CRM/ERP Software Apps", "Responsive Web Apps", "Bespoke CMS Development"]
        }}
        image={images.servicesimg3}
        isLeft
      />

      <Rapeatcomponent
        title="UI/UX Design"
        paragraph="UI/UX design is the catalyst behind the success of any web or mobile app. IndiaNIC is a leading web design and mobile app design agency with a knack of turning great ideas into meaningful interactions. Starting from conceptualization, information architecture, visual identity, and UX design; hire UI/UX designers from IndiaNIC for timely delivery of appealing websites and mobile apps resulting maximum user engagement."
        list={{
          list1: ["Wireframes Designing", "High/Low fidelity Prototype", "Responsive Web Design", "UX Analysis"],
          list2: ["Strategic Design Consulting", "Mobile App Design", "Information Architecture", "UI Design"]
        }}
        image={images.servicesimg4}
        isRight
      />

      <Rapeatcomponent
        title="Mobile Game  Development"
        paragraph="Creating games is the most energetic part of our business. Our skilled mobile game development team can handle projects from scratch or from any development stage. We’ve been successfully involved in the delivery of highly interactive and exciting gaming experience on Mobile, Console, and Virtual Reality platforms. We turn your idea into an addictive Android or iOS game application while making sure we create out of the box gaming solutions."
        list={{
          list1: ["3D / 2D Games", "Character Design", "3D Modeling"],
          list2: ["Unity 3D plugins", "Monetization Strategy", "Mobile Games Publishing"]
        }}
        image={images.servicesimg5}
        isLeft
      />

      <Rapeatcomponent
        title="Virtual Reality Apps   Development"
        paragraph=" VR world is growing fast and IndiaNIC, being a top VR app development company in India & USA, offers realistic experiences for Virtual Reality headsets. Our VR app solutions are a perfect fit for industrial use cases, enterprises, and entertainment. We have proven expertise in delivering VR app development services to build captivating 3D environments and interactive VR apps for diverse industry verticals."
        list={{
          list1: ["HTV Vive Apps", "Oculus Rift + Touch", "VR Cardboard & Oculus Apps", "VR Instructional Diagrams"],
          list2: ["Samsung Gear Apps", "Microsoft HoloLens Apps", "Strategic VR Consultation", "Industry-grade VR Solutions"]
        }}
        image={images.servicesimg6}
        isRight
      />

      <Rapeatcomponent
        title="IoT Solutions"
        paragraph="Leveraging the power of Internet of Things (IoT), the network of “Connected Devices”, IndiaNIC is the best IoT service provider in developing innovative IoT solutions. Our IoT experts develop bespoke and innovative IoT solutions to simplify and automate complex business processes. Together we can create amazing wireless experiences with the modern IoT hardware to collect information. Hire the best IoT programmers from IndiaNIC who help startups and enterprises to build an IoT platform and connect it with other cloud, onsite applications or multiple IoT platforms."
        list={{
          list1: ["Smart Home Automation", "IoT Application Development", "APIs & Backend", "IoT System Integration", "Implementation and Support"],
          list2: ["Industrial IoT Automation", "iBeacon Solutions", "IoT Cloud Integration", "IoT Solution Testing", "Industry-grade IoT Consultation"]
        }}
        image={images.servicesimg7}
        isLeft
      />

      <Rapeatcomponent
        title="Wearables App Development"
        paragraph=" Smart wearable devices have become a new fashion statement today. You will certainly want to tap on the extremely exclusive market of the apps that run on these smart accessories. Being a leading wearable app development company, we have hands-on experience in delivering robust, innovative, interactive and high performing wearable apps for various wearable devices like Google Glass, Android Wear, Samsung Gear, Fitbit, AR-VR based wearables, etc. Wearables app development experts from IndiaNIC are here to transcend your business idea into small screens for best-in-class digital experiences."
        list={{
          list1: ["Apple Watch Apps", "Google Glass Apps", "Fitness Tracking Apps like Fitbit"],
          list2: ["Android Wear Apps", "Wearable Healthcare Apps", "Apps for VR headsets"]
        }}
        image={images.servicesimg8}
        isRight
      />

      <Rapeatcomponent
        title="AI – ML App Development"
        paragraph="Looking to add intelligence to your existing business application or want to develop a new one? You are in the right place. Our AI-ML engineers will help you do that. We build AI-ML solutions that will save upto 30% cost on your overall business operations. We have expertise in working with tools, frameworks and technologies like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, etc. to foster business intelligence to diverse industry verticals."
        list={{
          list1: ["Product Recommendation Engine", "Image Processing & Recognition", "Virtual Try-on", "Predictive Analysis", "AI-ML Consultation"],
          list2: ["Chatbots / Conversational AI", "Robotic Process Automation (RPA)", "Behavior Analytics", "Emotion Learning"]
        }}
        image={images.servicesimg9}
        isLeft
      />

      <Rapeatcomponent
        title="Quality Assurance (QA)"
        paragraph="We keep Quality Assurance (QA) and software testing services at the core of our ecosystem. IndiaNIC has proven testing experts whose confidence helps in faster releases with uncompromised quality. We perform various tests such as Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser, Accessibility, etc. Our QA experts work with DevOps tools and automated build testing techniques for faster delivery. With us, you will have full access to QA reports to stay updated about test results having all the details."
        list={{
          list1: ["QA Documentation", "Web Testing Automation", "Mobile Testing Automation", "API Testing Automation"],
          list2: ["Manual QA Testing", "Mobile App Testing", "Performance Testing", "Expert QA Consultation"]
        }}
        image={images.servicesimg10}
        isRight
      />

<Rapeatcomponent
        title="Quality Assurance (QA)"
        paragraph="We keep Quality Assurance (QA) and software testing services at the core of our ecosystem. IndiaNIC has proven testing experts whose confidence helps in faster releases with uncompromised quality. We perform various tests such as Functional, GUI, Usability, Security, Database testing, Cross-platform, Cross-browser, Accessibility, etc. Our QA experts work with DevOps tools and automated build testing techniques for faster delivery. With us, you will have full access to QA reports to stay updated about test results having all the details."
        list={{
          list1: ["QA Documentation", "Web Testing Automation", "Mobile Testing Automation", "API Testing Automation"],
          list2: ["Manual QA Testing", "Mobile App Testing", "Performance Testing", "Expert QA Consultation"]
        }}
        image={images.servicesimg11}
        isLeft
      />
      
      <Startaproject />
      <Worpressdevelopment />
      <Ideas />

    </div>
  )
}
export default Services;