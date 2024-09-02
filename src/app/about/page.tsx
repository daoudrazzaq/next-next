import React from "react"
import Image from "next/image"
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/danish.jpg.jpg" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        AslamuAlaikum 
        My name is Dawood Razzaq <picture>
            <source media="(min-width: )" srcset="" />
            <img src="" alt="" />
        </picture>, and I am a student of Artificial Intelligence.
         I am currently learning about various aspects of AI to deepen my understanding and skills in this exciting field.
          I am fortunate to be guided by my professor, Mian Asif Langrah, who provides valuable lectures and insights.
         Under his guidance, I am gaining a comprehensive understanding of Artificial Intelligence and its applications, 
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Dawood razzaq
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Artificial Intelligence ( Student )
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page