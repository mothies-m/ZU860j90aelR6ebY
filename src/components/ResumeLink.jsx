import React from 'react'
import ResumePdf from '../assets/Resume.pdf'

export default function ResumeLink() {
  return (
    <div>
      <h1>Resume Link:</h1>
      <a href={ResumePdf} download='my_resume.pdf'>gaw</a>
    </div>
  )
}
