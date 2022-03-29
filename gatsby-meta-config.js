module.exports = {
  title: `developjik's Dev Blog`,
  description: `developjik's Dev Blog`,
  language: `ko`, // `ko`, `en`
  siteUrl: `https://github.com/developjik`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `developjik/developjik.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정인권`,
    bio: {
      role: `개발자`,
      description: [
        '새로운 것을 두려워하지 않는',
        '끊임없이 고민하는',
        '함께 소통하며 성장하는',
        '평생 학습하고 도전하는',
      ],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/developjik`,
      linkedIn: `https://www.linkedin.com/in/%EC%9D%B8%EA%B6%8C-%EC%A0%95-149303234/`,
      email: `developjik@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2015.03 ~ 2016.08',
        activity: '숭실대 재학',
      },
      {
        date: '2017.02 ~ 2019.05',
        activity: '(주) 레드스톤 시스템 보충역 근무',
      },
      {
        date: '2019.09 ~ 2021.12',
        activity: '숭실대 재학(졸업유예 중)',
      },
      {
        date: '2022.01 ~ 2022.03',
        activity: '원티드 x 임팩트캠퍼스 프리온보딩코스_프론트엔드',
        links: {
          github: 'https://github.com/PreOnBoarding-Team17',
        },
      },
      {
        date: '2022.01 ~',
        activity: '개발 블로그 개발 및 운영',
        links: {
          demo: 'https://developjik.github.io/',
          github: 'https://github.com/developjik',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'Table을 이용한 출고관리표 페이지 구현',
        description: 'wecode-wanted preonboarding 과정 Table을 이용한 출고관리표 페이지 구현',
        techStack: ['TypeScript', 'React', 'Styled-Components', 'MUI'],
        thumbnailUrl: 'week3-table.png',
        links: {
          github: 'https://github.com/developjik/Week3_Table',
          demo: 'https://week3-table.herokuapp.com/',
        },
      },
      {
        title: '애니메이션 효과가 있는 메인 페이지 제작',
        description: 'wecode-wanted preonboarding 과정 애니메이션 효과가 있는 메인 페이지 제작',
        techStack: [
          'TypeScript',
          'React',
          'Styled-Components',
          'Gsap',
          'Next.JS',
          'Cypress',
          'Netlify',
        ],
        thumbnailUrl: 'week3-mainpage.png',
        links: {
          github: 'https://github.com/developjik/Week3_MainPage',
          demo: 'https://week3-mainpage.netlify.app/',
        },
      },
      {
        title: '링크로 공유한 파일들을 보여주는 페이지 구현',
        description: 'wecode-wanted preonboarding 과정 링크로 공유한 파일들을 보여주는 페이지 구현',
        techStack: ['TypeScript', 'React', 'Context-API', 'Styled-Components', 'Netlify'],
        thumbnailUrl: 'week4-transfer.png',
        links: {
          github: 'https://github.com/developjik/Week4_Transfer',
          demo: 'https://week4-transfer.netlify.app/',
        },
      },
      {
        title: 'Redux를 이용한 메신저 페이지',
        description: 'wecode-wanted preonboarding 과정 2Redux를 이용한 메신저 페이지',
        techStack: ['TypeScript', 'React', 'Redux', 'Scss', 'Netlify'],
        thumbnailUrl: 'week2-messenger.png',
        links: {
          github: 'https://github.com/developjik/Week2_Messenger',
          demo: 'https://17seoul-messenger.netlify.app/',
        },
      },
      {
        title: '2가지 타입의 환율 계산기 구현',
        description: 'wecode-wanted preonboarding 과정 2가지 타입의 환율 계산기 구현',
        techStack: ['JavaScript', 'React', 'Scss', 'AWS EC2'],
        thumbnailUrl: 'week1-exchange-rate-calculator.png',
        links: {
          github: 'https://github.com/developjik/Week1_Exchange_Rate_Calculator',
          demo: 'http://calc-exchange-rate-17.s3-website.ap-northeast-2.amazonaws.com/',
        },
      },

      {
        title: 'React BoilerPlate Frontend',
        description: '개인프로젝트 개발용으로 로그인 기능 구현 되어있는 React BoilerPlate Frontend',
        techStack: ['JavaScript', 'React', 'Redux', 'MUI'],
        thumbnailUrl: 'react-boilerplate.png',
        links: {
          github: 'https://github.com/developjik/react-boilerplate-2021',
        },
      },
      {
        title: 'React BoilerPlate Backend',
        description: '개인프로젝트 개발용으로 로그인 기능 구현 되어있는 React BoilerPlate Backend',
        techStack: ['Nest.js', 'TypeScript', 'PostgreSQL', 'Heroku'],
        thumbnailUrl: 'react-boilerplate.png',
        links: {
          github: 'https://github.com/developjik/boilerplate-backend',
        },
      },
      {
        title: 'Classy : Web RTC&A.I 이용한 실시간 수업 플랫폼',
        description: 'Web RTC & A.I 이용한 실시간 수업 플랫폼 개발 프로젝트',
        techStack: ['JavaScript', 'Node.js', 'MongoDB', 'WebRTC', 'A.I', 'AWS S3', 'Heroku'],
        thumbnailUrl: 'classy.png',
        links: {
          github: 'https://github.com/developjik/classy',
          demo: 'https://developjik-classy.herokuapp.com/',
        },
      },
    ],
  },
};
