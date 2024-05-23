export default function Footer() {
  return (
    <footer className='w-full border-t md:p-8 p-4 light:border-darkBackground darkTheme:border-lightBackground'>
        <div className="flex md:flex-row flex-col md:gap-20 sm:gap-10 gap-4 flex-wrap">
            <div className="flex-1">
                <h3 
                  className="md:text-7xl sm:text-2xl text-3xl font-thin text-left light:text-lightText darkTheme:text-darkText text-nowrap"
                >
                  Chauffour Evan<br/>Développeur web
                  </h3>
            </div>
            <div className="flex-1 sm:border-b sm:pb-8 pb-0 border-none light:border-darkBackground darkTheme:border-lightBackground">
                <ul className="sm:mb-8 mb-4 flex flex-row gap-5">
                    <li>
                        <a 
                          href="https://github.com/Evanchauffour" 
                          target='_blank' 
                          className="sm:text-2xl text-xl font-normal underline light:text-lightText darkTheme:text-darkText"
                        >
                          GitHub
                        </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/evan-chauffour/" 
                        target='_blank' 
                        className="sm:text-2xl text-xl font-normal underline light:text-lightText darkTheme:text-darkText"
                      >  
                        Linkedin
                      </a>
                    </li>
                </ul>
                <ul className="flex flex-row md:gap-12 gap-5 flex-wrap">
                    <li 
                      className="flex flex-col gap-2 sm:text-2xl text-xl font-normal light:text-lightText darkTheme:text-darkText"
                      >
                      Email
                      <a 
                        href="mailto:evanchauffour@gmail.com"
                        className="text-base font-extralight underline light:text-lightText darkTheme:text-darkText"
                      >
                        evanchauffour@gmail.com
                      </a>
                    </li>
                    <li
                      className="flex flex-col gap-2 sm:text-2xl text-xl font-normal light:text-lightText darkTheme:text-darkText"
                    >
                      Téléphone
                      <a 
                        href="tel:0633471017"
                        className="text-base font-extralight underline light:text-lightText darkTheme:text-darkText"
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
