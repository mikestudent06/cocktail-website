import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Bar à cocktails</p>
			<h2>
			 Chaque détail compte <span className="text-white">—</span>
			 du muddling à la garniture
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 Chez COCO, chaque verre raconte une histoire. Nos barmans sélectionnent
			 des ingrédients locaux, maîtrisent les classiques et inventent des
			 créations signature pour transformer un simple cocktail en un moment
			 mémorable — sur place, en terrasse ou lors de vos événements privés.
			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>4,8</span>/5
			 </p>
			 <p className="text-sm text-white-100">
				Plus de 2 000 clients satisfaits
			 </p>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt1.png" alt="Cocktail préparé au bar COCO" />
		</div>
		
		<div className="md:col-span-6">
		 <div  className="noisy" />
		 <img src="/images/abt2.png" alt="Ambiance du bar COCO à Brazzaville" />
		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt5.png" alt="Ingrédients frais pour cocktails" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src="/images/abt3.png" alt="Service bar COCO pour événements" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src="/images/abt4.png" alt="Cocktail signature COCO" />
		</div>
	 </div>
	 
	</div>
 )
}
export default About
