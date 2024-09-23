import Soon from "./Soon"
import { SEM1_SUBJECTS, SEM2_SUBJECTS } from "../constant"
import SemTile from "../components/SemTile"

export const Semester1 = () => {

  return (
    <div className="mx-8 md:grid grid-cols-3">
      {SEM1_SUBJECTS.map((subject, index)=>(
        <SemTile key={index} subjects={subject}/>
      ))}
    </div>
  )
}
export const Semester2 = () => {
  return (
    <div className="mx-8 md:grid grid-cols-3">
      {SEM2_SUBJECTS.map((subject, index)=>(
        <SemTile key={index} subjects={subject}/>
      ))}
    </div>
  )
}
export const Semester3 = () => {
  return (
    <div><Soon /></div>
  )
}
export const Semester4 = () => {
  return (
    <div><Soon /></div>
  )
}
