export default function Footer() {
  return (
    <footer className='w-full border-t border-text p-8'>
        <div className="flex">
            <div className="ml-4 w-1/2">
                <h3 
                  className="text-7xl font-thin text-text"
                >
                  Chauffour Evan<br/>Développeur web
                  </h3>
            </div>
            <div className="w-1/2 border-b border-text pb-8">
                <ul className="mb-8 flex flex-row gap-5">
                    <li>
                        <a 
                          href="https://github.com/Evanchauffour" 
                          target='_blank' 
                          className="text-2xl font-normal text-text underline"
                        >
                          GitHub
                        </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/evan-chauffour/" 
                        target='_blank' 
                        className="text-2xl font-normal text-text underline"
                      >  
                        Linkedin
                      </a>
                    </li>
                </ul>
                <ul className="flex flex-row gap-12">
                    <li 
                      className="flex flex-col gap-2 text-2xl font-normal text-text"
                      >
                      Email
                      <a 
                        href="mailto:evanchauffour@gmail.com"
                        className="text-base font-extralight text-text underline"
                      >
                        evanchauffour@gmail.com
                      </a>
                    </li>
                    <li
                      className="flex flex-col gap-2 text-2xl font-normal text-text"
                    >
                      Téléphone
                      <a 
                        href="tel:0633471017"
                        className="text-base font-extralight text-text underline"
                      >
                        0633471017
                      </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
