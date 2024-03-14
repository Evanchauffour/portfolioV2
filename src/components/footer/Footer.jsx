export default function Footer() {
  return (
    <footer className='w-full border-t border-primary p-8'>
        <div className="flex">
            <div className="ml-4 w-1/2">
                <h3 
                  className="text-text text-7xl font-thin"
                >
                  Chauffour Evan<br/>Développeur web
                  </h3>
            </div>
            <div className="w-1/2 pb-8 border-primary border-b">
                <ul className="flex flex-row gap-5 mb-8">
                    <li>
                        <a 
                          href="https://github.com/Evanchauffour" 
                          target='_blank' 
                          className="text-primary text-2xl underline font-normal"
                        >
                          GitHub
                        </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/evan-chauffour/" 
                        target='_blank' 
                        className="text-primary text-2xl underline font-normal"
                      >  
                        Linkedin
                      </a>
                    </li>
                </ul>
                <ul className="flex flex-row gap-12">
                    <li 
                      className="flex flex-col gap-2 text-text text-2xl font-normal"
                      >
                      Email
                      <a 
                        href="mailto:evanchauffour@gmail.com"
                        className="text-primary text-base underline font-extralight"
                      >
                        evanchauffour@gmail.com
                      </a>
                    </li>
                    <li
                      className="flex flex-col gap-2 text-text text-2xl font-normal"
                    >
                      Téléphone
                      <a 
                        href="tel:0633471017"
                        className="text-primary text-base underline font-extralight"
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
