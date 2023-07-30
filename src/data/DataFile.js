
export const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  export const SliderSettingTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        },
      }
    ]
  };

export const Analysis = [
    {
        title:'Predictve Analysis',
        content:'historical data to make predictions or forecasts about future outcomes',
        icon: require('../asset/icons/undraw_Predictive_analytics_re_wxt8.png')
    },
    {
        title:'Descriptve Analysis',
        content:'Our Expert will organizing and presenting the data in a meaningful way, often using measures such as mean, median, mode, and standard deviation. It provides an overview of the data and helps identify patterns or trends.',
        icon: require('../asset/icons/undraw_Process_re_gws7.png')
    },
    {
        title:'Infrential Analysis',
        content:'aims to make inferences or predictions about a larger population based on sample data. It involves applying statistical techniques such as hypothesis testing, confidence intervals, and regression analysis. It helps generalize findings from a sample to a larger population.',
        icon: require('../asset/icons/undraw_Solution_mindset_re_57bf.png')
    },
    {
        title:'Exploratory Data Analysis (EDA)',
        content:'We use to focuses on exploring and understanding the data without preconceived hypotheses. It involves visualizations, summary statistics, and data profiling techniques to uncover patterns, relationships, and interesting features. It helps generate hypotheses for further analysis.',
        icon: require('../asset/icons/undraw_data_processing_yrrv.png')
    },
    {
        title:'Prescriptive Analysis',
        content:'Prescriptive analysis goes beyond predictive analysis by recommending actions or decisions based on the predictions. It combines historical data, optimization algorithms, and business rules to provide actionable insights and optimize outcomes. It helps in decision-making and resource allocation.',
        icon: require('../asset/icons/undraw_All_the_data_re_hh4w.png')
    },
    {
        title:'Diagnosis Analysis',
        content:'Diagnostic analysis aims to understand the cause-and-effect relationships within the data. It investigates the factors or variables that contribute to specific outcomes or behaviors.',
        icon: require('../asset/icons/undraw_add_information_j2wg.png')
    },
    // {
    //     title:'Time-Series Analysis',
    //     content:'Diagnostic analysis aims to understand the cause-and-effect relationships within the data. It investigates the factors or variables that contribute to specific outcomes or behaviors.',
    //     icon: require('../asset/icons/undraw_add_information_j2wg.png')
    // } ,
    // {
    //     title:'Market Analysis',
    //     content:'Diagnostic analysis aims to understand the cause-and-effect relationships within the data. It investigates the factors or variables that contribute to specific outcomes or behaviors.',
    //     icon: require('../asset/icons/undraw_add_information_j2wg.png')
    // },
]
export const AIData = [
    {
        title:'Problem Definition',
        content:'Together with your stakeholders, we’ll analyze and define your use case, to see how it fits into your broader industry and business context and if it can make an impact across your organization.',
        icon: require('../asset/icons/undraw_Questions_re_1fy7.png')
    },
    {
        title:'Data Preparation',
        content:'We recognize that no artificial intelligence system can run on poor or corrupted data. That’s why we audit and verify your data along with the related workflows and supporting digital infrastructure.',
        icon: require('../asset/icons/undraw_data_processing_yrrv.png')
    },
    {
        title:'Model Development',
        content:'We offer end-to-end training of machine learning models for their further incorporation into enterprise AI-powered solutions for a variety of use cases. ',
        icon: require('../asset/icons/undraw_Developer_activity_re_39tg.png')
    },
    {
        title:'Model Deployment',
        content:'We set up resilient cloud-based infrastructures across private and hybrid environments for deploying and running our clients’ in-house AI systems. ',
        icon: require('../asset/icons/undraw_Cloud_hosting_7xb1.png')
    },
    {
        title:'Software Integration',
        content:'Our company builds, customizes, and redesigns AI-driven systems on a turnkey basis or as part of your in-house team at any project stage. ',
        icon: require('../asset/icons/undraw_To_the_stars_re_wq2x.png')
    },
    {
        title:'User Support',
        content:'minimize users’ initial adoption barriers and maximize buy-in. We also provide continuous technical support services at all levels.',
        icon: require('../asset/icons/undraw_Good_team_re_hrvm.png')
    },
]
export const SoftwareDataApp = [
    {
        title:'Mobile Software Consult',
        content:'We build captivating, functional mobile experiences for various platforms and devices. Considering the unique expectations of iOS users and the diverse range of Android devices, we offer JavaScript experts fluent in the frameworks that power renowned apps ',
        icon: require('../asset/icons/undraw_Mobile_application_re_13u3.png')
    },
    {
        title:'Web Software Consult',
        content:' you can build powerful web applications using the most trusted and popular web development technologies. Our software development agency is dedicated to bringing your web project to life with passion, dedication, and problem-solving skills based on extensive experience.',
        icon: require('../asset/icons/undraw_progressive_app_m9ms.png')
    },
    {
        title:'Cloud Software Consult',
        content:'From small businesses to enterprise-sized organizations, anyone looking to drive their business forward or support digital transformation can benefit from our custom software development. If you have a business challenge that can be addressed with smart software, we can help you realize the solution.',
        icon: require('../asset/icons/undraw_cloud_files_wmo8.png')
    },
    {
        title:'Desktop Software Consult',
        content:'From small businesses to enterprise-sized organizations, anyone looking to drive their business forward or support digital transformation can benefit from our custom software development. If you have a business challenge that can be addressed with smart software, we can help you realize the solution.',
        icon: require('../asset/icons/undraw_data_processing_yrrv.png')
    },
    {
        title:'Smart Devices Software Consult',
        content:'From small businesses to enterprise-sized organizations, anyone looking to drive their business forward or support digital transformation can benefit from our custom software development. If you have a business challenge that can be addressed with smart software, we can help you realize the solution.',
        icon: require('../asset/icons/undraw_Devices_re_dxae.png')
    }
]

export const SoftwareData = [
    {
        title:'Software Stack Assessment',
        content:'Your software consulting partner will identify any gaps or opportunities for improvement in your software. By replacing inefficient software and getting rid of unnecessary applications in your enterprise systems, your business can enjoy improved workflows, higher-quality data, better return on investment, and more.',
        icon: require('../asset/icons/undraw_ideation_re_8i2h.png')
    },
    {
        title:'Software Architecture Assessment',
        content:'A software development consultant can help you identify business requirements and will design a software solution that meets those needs and will seamlessly fit into your business model. Your technology consulting partner will provide you with thorough documentation that allows you to scale and make changes to your software solution long after the initial development is complete.',
        icon: require('../asset/icons/undraw_Our_solution_re_8yk6.png')
    },
    {
        title:'Software Developmemt Assessment',
        content:'Working out software solutions to cover your business needs. Assembling a full project team to release the solution described in a functional specification. Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_Programming_re_kg9v.png')
    },
    {
        title:'Software License Assessment',
        content:'Assessing your software and validating its compliance with industry laws and regulations. Listing the requirements to license a software product. Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_Reading_list_re_bk72.png')
    },
    {
        title:'Software Project Management',
        content:'Your consultant will manage your scope, assign tasks, address issues, and adhere to your timeline by working hand-in-hand with your custom software development team. You get the benefit of a well-managed team and project without the price tag of a full-time project manager.',
        icon: require('../asset/icons/undraw_progressive_app_m9ms.png')
    },
    {
        title:'Software Modernization Assessment',
        content:'Software consulting companies can help you breathe new life into your application and provide long-lasting value by updating it with newer, more reliable programming languages, frameworks, protocols, and infrastructure platforms.',
        icon: require('../asset/icons/undraw_Contrast_re_hc7k.png')
    },
    {
        title:'Software Selection Assessment',
        content:'Evaluating software vendors and software pricing plans to match your specific requirements. Providing a software comparison summary pointing to the best-suited candidates. Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_add_information_j2wg.png')
    },
    {
        title:'Software Team Augmentation',
        content:'roviding staff resources to complete the required skillset of any project role in your development team. Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_Engineering_team_a7n2.png')
    },
    {
        title:'Software Business Analysis',
        content:'Auditing your business processes and planning improvements with software-only changes Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_All_the_data_re_hh4w.png')
    },
    {
        title:'Software Infrastructure Assessment',
        content:'Building an effective DevOps pipeline to speed up your software delivery process. Read more on https://www.scnsoft.com/services/software-consulting',
        icon: require('../asset/icons/undraw_Cloud_hosting_7xb1.png')
    },
]

export const IndData = [
    {
        title:'Healthcare',
        icon:require('../asset/icons/undraw_medicine_b1ol.png')
    },
    {
        title:'Banking and Finance',
        icon: require('../asset/icons/undraw_digital_currency_qpak.png')
    },
    {
        title:'Education',
        icon: require('../asset/icons/undraw_Educator_re_ju47.png')
    },
    {
        title:'Construction',
        icon: require('../asset/icons/undraw_under_construction_46pa.png')
    },
    {
        title:'Marketing',
        icon: require('../asset/icons/undraw_Marketing_re_7f1g.png')
    },
    {
        title:'Reatil',
        icon: require('../asset/icons/undraw_Stock_prices_re_js33.png')
    },
    {
        title:'Manufacture',
        icon: require('../asset/icons/undraw_factory_dy0a.png')
    },
    {
        title:'Transportation',
        icon: require('../asset/icons/undraw_logistics_x4dc.png')
    },
    {
        title:'Telecommunication',
        icon: require('../asset/icons/undraw_connected_world_wuay.png')
    },
    {
        title:'Travel and Tours',
        icon: require('../asset/icons/undraw_Best_place_re_lne9.png')
    },
]