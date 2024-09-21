import React from 'react'
import Navbar from '../components/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <h2 className='shad'>Skill</h2>
            <div className='shead'>

                <div>
                    <h2 className='sshead'>HTML</h2>
                    <p className='ssp'>I create clean, semantic, and structured HTML for accessible, well-organized, and efficient web pages, ensuring proper layout and functionality</p>
                </div>

                <div>
                    <h2 className='sshead'>CSS</h2>
                    <p className='ssp'>My CSS skills focus on crafting responsive, visually appealing designs with modern techniques like flexbox and grid, delivering adaptive and interactive user experiences.</p>
                </div>

                <div>
                    <h2 className='sshead'>Typescript</h2>
                    <p className='ssp'>I write robust, maintainable, and scalable TypeScript code, utilizing static types, interfaces, and strict typing to ensure safe, error-free development and object-oriented design.</p>
                </div>

                <div>
                    <h2 className='sshead'>Next.js</h2>
                    <p className='ssp'>With Next.js, I build dynamic, scalable, and SEO-optimized applications using server-side rendering (SSR) and routing, integrating APIs for high-performance web solutions.</p>
                </div>

                <div>
                    <h2 className='sshead'>Tailwaid CSS</h2>
                    <p className='ssp'>I leverage Tailwind CSS’s utility-first approach to design responsive, reusable, and efficient UI components, rapidly building modern, flexible, and concise web interfaces.</p>
                </div>
            </div>
        </div>
    )
}

export default page