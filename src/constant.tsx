export const info:{[key:string]:string} = {
    title: "TITLE",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis debitis, consectetur aspernatur totam sapiente quod a voluptate minima ratione.",
}
    

export const quotes : string[] = [
    "Use Diagrams when you cannot carry with theory",
    "Make sure to write snippets whenever asked in a theory question",
    "Avoid scribbles, one cut is enough",
    "Use better pens, loss of time is painful"
]

export const API_S1 = "https://github.com/priyanshujoshi01/srm_questionPaper/tree/main/Mca/1year/first_sem/"
export const API_S2 = "https://github.com/priyanshujoshi01/srm_questionPaper/tree/main/Mca/1year/second_sem/"

interface subjects {
    subject:string, code:string, ie1:string, ie2:string, ie3:string, finals:string
}

export const SEM1_SUBJECTS : subjects[] = [
    {
      subject: "Java",
      code: "PCAXXXXXX",
      ie1: `${API_S1}/Java/`,
      ie2: `${API_S1}/Java/`,
      ie3: `${API_S1}/Java/`,
      finals: `${API_S1}/Java/`,
    },
    {
      subject: "Operating System",
      code: "PCAXXXXXX",
      ie1: `${API_S1}/operating_system/`,
      ie2: `${API_S1}/operating_system/`,
      ie3: `${API_S1}/operating_system/`,
      finals: `${API_S1}/operating_system/`,
    },
    {
      subject: "DBMS",
      code: "PCAXXXXXX",
      ie1: `${API_S1}/Database_technology/`,
      ie2: `${API_S1}/Database_technology/`,
      ie3: `${API_S1}/Database_technology/`,
      finals: `${API_S1}/Database_technology/`,
    },
    {
      subject: "IT Infrastructure",
      code: "PCAXXXXXX",
      ie1: `${API_S1}/IT_infrastructure/`,
      ie2: `${API_S1}/IT_infrastructure/`,
      ie3: `${API_S1}/IT_infrastructure/`,
      finals: `${API_S1}/IT_infrastructure/`,
    },
    {
      subject: "Cyber Security",
      code: "PCAXXXXXX",
      ie1: `${API_S1}/Cyber_security/`,
      ie2: `${API_S1}/Cyber_security/`,
      ie3: `${API_S1}/Cyber_security/`,
      finals: `${API_S1}/Cyber_security/`,
    },
]

export const SEM2_SUBJECTS : subjects[] = [
    {
      subject: "Optimization Techniques",
      code: "PCAXXXXXX",
      ie1: `${API_S2}/Optimization_Techniques`,
      ie2: `${API_S2}/Optimization_Techniques`,
      ie3: `${API_S2}/Optimization_Techniques`,
      finals: `${API_S2}/Optimization_Techniques`,
    },
    {
      subject: "Computer Networks",
      code: "PCAXXXXXX",
      ie1: `${API_S2}/computer_Networks`,
      ie2: `${API_S2}/computer_Networks`,
      ie3: `${API_S2}/computer_Networks`,
      finals: `${API_S2}/computer_Networks`,
    },
    {
      subject: "Python Programming",
      code: "PCAXXXXXX",
      ie1: `${API_S2}/python`,
      ie2: `${API_S2}/python`,
      ie3: `${API_S2}/python`,
      finals: `${API_S2}/python`,
    },
    {
      subject: "Programming Using C#",
      code: "PCAXXXXXX",
      ie1: `${API_S2}/Programminf_using_c#`,
      ie2: `${API_S2}/Programminf_using_c#`,
      ie3: `${API_S2}/Programminf_using_c#`,
      finals: `${API_S2}/Programminf_using_c#`,
    },
]