export default function Footer() {
  return (
    <footer className='w-full border-t p-8 light:border-darkBackground dark:border-lightBackground'>
        <div className="flex">
            <div className="ml-4 w-1/2">
                <h3 
                  className="text-7xl font-thin light:text-lightText dark:text-darkText"
                >
                  Chauffour Evan<br/>Développeur web
                  </h3>
            </div>
            <div className="w-1/2 border-b pb-8 light:border-darkBackground dark:border-lightBackground">
                <ul className="mb-8 flex flex-row gap-5">
                    <li>
                        <a 
                          href="https://github.com/Evanchauffour" 
                          target='_blank' 
                          className="text-2xl font-normal underline light:text-lightText dark:text-darkText"
                        >
                          GitHub
                        </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/evan-chauffour/" 
                        target='_blank' 
                        className="text-2xl font-normal underline light:text-lightText dark:text-darkText"
                      >  
                        Linkedin
                      </a>
                    </li>
                </ul>
                <ul className="flex flex-row gap-12">
                    <li 
                      className="flex flex-col gap-2 text-2xl font-normal light:text-lightText dark:text-darkText"
                      >
                      Email
                      <a 
                        href="mailto:evanchauffour@gmail.com"
                        className="text-base font-extralight underline light:text-lightText dark:text-darkText"
                      >
                        evanchauffour@gmail.com
                      </a>
                    </li>
                    <li
                      className="flex flex-col gap-2 text-2xl font-normal light:text-lightText dark:text-darkText"
                    >
                      Téléphone
                      <a 
                        href="tel:0633471017"
                        className="text-base font-extralight underline light:text-lightText dark:text-darkText"
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
