
// export const certificates = {
//     helsinki: [
//       { src: `certificates/CI:CD.png`, title: 'CI/CD' },
//       { src: `certificates/Containers.png`, title: 'Containers' },
//       { src: `certificates/GraphQL.png`, title: 'GraphQL' },
//       { src: `certificates/React-Native.png`, title: 'React Native' },
//       { src: `certificates/Relational-Databases.png`, title: 'Relational Databases' },
//       { src: `certificates/TypeScript.png`, title: 'TypeScript' },
//       { src: `certificates/Full-Stack-Open-Base.png`, title: 'Basic course' },
//     ],
//     stepik: [
//       { src: `certificates/React.png`, title: 'React' },
//       { src: `certificates/Django.png`, title: 'Django' },
//       { src: `certificates/Docker.png`, title: 'Docker' },
//       { src: `certificates/Python-ООП.png`, title: 'Python ООП' },
//       { src: `certificates/Git.png`, title: 'Git' },
//       { src: `certificates/Pandas.png`, title: 'Pandas' },
//       { src: `certificates/Практикум-математике-Python.png`, title: 'Математика + Python' },
//       { src: `certificates/JavaScript.png`, title: 'JavaScript' },
//       { src: `certificates/HTML-CSS-JS.png`, title: 'HTML / CSS / JS' },
//       { src: `certificates/"Поколение-Python"-начинающих.png`, title: 'Beegeek Python – начинающие' },
//       { src: `certificates/"Поколение-Python"-продвинутых.png`, title: 'Beegeek Python – продвинутые' },
//       { src: `certificates/"Поколение-Python"-профессионалов.png`, title: 'Beegeek Python – профессионалы' },
//       { src: `certificates/Инди-курс-Python.png`, title: 'Инди Python' },
//     ]
//   };
  

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const certificates = {
    helsinki: [
      { src: `${base}certificates/CI:CD.png`, title: 'CI/CD' },
      { src: `${base}certificates/Containers.png`, title: 'Containers' },
      { src: `${base}certificates/GraphQL.png`, title: 'GraphQL' },
      { src: `${base}certificates/React-Native.png`, title: 'React Native' },
      { src: `${base}certificates/Relational-Databases.png`, title: 'Relational Databases' },
      { src: `${base}certificates/TypeScript.png`, title: 'TypeScript' },
      { src: `${base}certificates/Full-Stack-Open-Base.png`, title: 'Basic course' },
    ],
    stepik: [
      { src: `${base}certificates/React.png`, title: 'React' },
      { src: `${base}certificates/Django.png`, title: 'Django' },
      { src: `${base}certificates/Docker.png`, title: 'Docker' },
      { src: `${base}certificates/Python-ООП.png`, title: 'Python ООП' },
      { src: `${base}certificates/Git.png`, title: 'Git' },
      { src: `${base}certificates/Pandas.png`, title: 'Pandas' },
      { src: `${base}certificates/Практикум-математике-Python.png`, title: 'Математика + Python' },
      { src: `${base}certificates/JavaScript.png`, title: 'JavaScript' },
      { src: `${base}certificates/HTML-CSS-JS.png`, title: 'HTML / CSS / JS' },
      { src: `${base}certificates/"Поколение-Python"-начинающих.png`, title: 'Beegeek Python – начинающие' },
      { src: `${base}certificates/"Поколение-Python"-продвинутых.png`, title: 'Beegeek Python – продвинутые' },
      { src: `${base}certificates/"Поколение-Python"-профессионалов.png`, title: 'Beegeek Python – профессионалы' },
      { src: `${base}certificates/Инди-курс-Python.png`, title: 'Инди Python' },
    ]
  };
  